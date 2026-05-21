// ==========================================
// 🌿 Lettuce TOTO - Core Business Logic with Firebase
// ==========================================

import { initializeApp } from "firebase/app";
import { 
  getFirestore, 
  doc, 
  setDoc, 
  getDoc, 
  collection, 
  getDocs, 
  onSnapshot, 
  runTransaction, 
  writeBatch,
  query,
  orderBy
} from "firebase/firestore";

// 1. Storage Keys (for Local Session only)
const KEYS = {
  SESSION: 'lettuce_toto_session'
};

// 2. Constants & Settings
const MIN_BET = 5;
const ADMIN_CREDENTIALS = {
  id: 'admin',
  passwordHash: '28fda2f7f6b87d9802cf03923dd67723d929511ac8cc91fd298f711ebf4d3610'
};

// Helper for hashing password (SHA-256) to secure admin credentials
async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Dividend multipliers
const DIVIDENDS = {
  rank1: 5.0,  // 500%
  rank2: 4.0,  // 400%
  rank3: 3.0,  // 300%
  rank4: 2.0,  // 200%
  rank5: 1.5,  // 150%
  others: 0.9  // 90% (10% loss)
};

// 3. Firebase Config & Initialization
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 4. State Management
let state = {
  students: [],
  lettuce: [],
  currentUser: null, // student object or 'admin' or null
  history: []
};

// Toast Notifications Helper
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container') || (() => {
    const el = document.createElement('div');
    el.id = 'toast-container';
    el.className = 'toast-container';
    document.body.appendChild(el);
    return el;
  })();

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  let icon = '🔔';
  if (type === 'success') icon = '✅';
  if (type === 'error') icon = '❌';
  if (type === 'warning') icon = '⚠️';
  
  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);

  // Auto remove toast
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// 5. Initializers
function getInitialStudents() {
  const list = [];
  // Add 30717 student
  list.push({
    id: '30717',
    name: '30717 학생',
    password: '30717',
    tokens: 1000,
    bets: {
      '1': 0, '2': 0, '3': 0, '4': 0, '5': 0,
      '6': 0, '7': 0, '8': 0, '9': 0, '10': 0
    }
  });

  for (let i = 1; i <= 36; i++) {
    const studentId = `309${String(i).padStart(2, '0')}`;
    list.push({
      id: studentId,
      name: `${studentId} 학생`,
      password: studentId, // Initial password is same as ID
      tokens: 1000,
      bets: {
        '1': 0, '2': 0, '3': 0, '4': 0, '5': 0,
        '6': 0, '7': 0, '8': 0, '9': 0, '10': 0
      }
    });
  }
  return list;
}

function getInitialLettuce() {
  const list = [];
  for (let i = 1; i <= 10; i++) {
    list.push({
      id: String(i),
      name: `상추 ${i}호`,
      totalBets: 0
    });
  }
  return list;
}

async function seedInitialDataIfEmpty() {
  try {
    const studentQuery = await getDocs(collection(db, 'students'));
    if (studentQuery.empty) {
      console.log('DB가 비어 있습니다. 초기 데이터를 Firestore에 주입합니다...');
      const batch = writeBatch(db);
      
      // Students Seed
      const initialStudents = getInitialStudents();
      initialStudents.forEach(student => {
        const docRef = doc(db, 'students', student.id);
        batch.set(docRef, student);
      });
      
      // Lettuce Seed
      const initialLettuce = getInitialLettuce();
      initialLettuce.forEach(lettuce => {
        const docRef = doc(db, 'lettuce', lettuce.id);
        batch.set(docRef, lettuce);
      });
      
      await batch.commit();
      console.log('초기 데이터 주입 완료.');
    }
  } catch (error) {
    console.error('초기 데이터 조회/주입 중 오류 발생:', error);
    if (error.code === 'permission-denied') {
      showToast('Firebase Firestore 권한 오류! 보안 규칙(Security Rules)을 허용으로 설정해주세요.', 'error');
    } else {
      showToast('DB 초기화 실패: ' + error.message, 'error');
    }
  }
}

let isStudentsLoaded = false;
let isLettuceLoaded = false;
let isHistoryLoaded = false;

function checkAllLoaded() {
  if (isStudentsLoaded && isLettuceLoaded && isHistoryLoaded) {
    // Refresh currentUser reference
    if (state.currentUser && state.currentUser !== 'admin') {
      const freshUser = state.students.find(s => s.id === state.currentUser.id);
      if (freshUser) {
        state.currentUser = freshUser;
      }
    }
    switchView();
  }
}

function startFirestoreListeners() {
  // 1. Students Listener
  onSnapshot(collection(db, 'students'), (snapshot) => {
    const studentsList = [];
    snapshot.forEach(doc => {
      studentsList.push(doc.data());
    });
    // Sort by student id ascending
    studentsList.sort((a, b) => a.id.localeCompare(b.id));
    state.students = studentsList;
    isStudentsLoaded = true;
    checkAllLoaded();
  }, (error) => {
    console.error("Students Listener Error:", error);
    if (error.code === 'permission-denied') {
      showToast('학번 데이터 로드 실패: Firestore 보안 규칙을 확인하세요.', 'error');
    } else {
      showToast('학번 로드 실패: ' + error.message, 'error');
    }
  });

  // 2. Lettuce Listener
  onSnapshot(collection(db, 'lettuce'), (snapshot) => {
    const lettuceList = [];
    snapshot.forEach(doc => {
      lettuceList.push(doc.data());
    });
    // Sort by lettuce id ascending
    lettuceList.sort((a, b) => parseInt(a.id) - parseInt(b.id));
    state.lettuce = lettuceList;
    isLettuceLoaded = true;
    checkAllLoaded();
  }, (error) => {
    console.error("Lettuce Listener Error:", error);
    showToast('상추 데이터 로드 실패: ' + error.message, 'error');
  });

  // 3. History Listener
  const historyQuery = query(collection(db, 'history'), orderBy('round', 'asc'));
  onSnapshot(historyQuery, (snapshot) => {
    const historyList = [];
    snapshot.forEach(doc => {
      historyList.push(doc.data());
    });
    state.history = historyList;
    isHistoryLoaded = true;
    checkAllLoaded();
  }, (error) => {
    console.error("History Listener Error:", error);
    showToast('정산 기록 로드 실패: ' + error.message, 'error');
  });
}

async function initData() {
  // Seed initial data if DB is empty
  await seedInitialDataIfEmpty();

  // Start Firestore Listeners
  startFirestoreListeners();

  // Load Session
  const sessionUser = localStorage.getItem(KEYS.SESSION);
  if (sessionUser) {
    if (sessionUser === 'admin') {
      state.currentUser = 'admin';
    } else {
      state.currentUser = { id: sessionUser }; // Temp object, will sync in checkAllLoaded
    }
  } else {
    state.currentUser = null;
  }
}

function saveSession() {
  if (state.currentUser) {
    localStorage.setItem(KEYS.SESSION, state.currentUser === 'admin' ? 'admin' : state.currentUser.id);
  } else {
    localStorage.removeItem(KEYS.SESSION);
  }
}

// 6. Views Controller
function switchView() {
  // Hide all views first
  document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));

  if (!state.currentUser) {
    document.getElementById('login-view').classList.add('active');
    document.getElementById('login-error').classList.add('hidden');
    document.getElementById('login-form').reset();
  } else if (state.currentUser === 'admin') {
    document.getElementById('admin-view').classList.add('active');
    renderAdminDashboard();
  } else {
    document.getElementById('student-view').classList.add('active');
    renderStudentDashboard();
  }
}

// 7. Student Dashboard Renderer
function renderStudentDashboard() {
  if (!state.currentUser || state.currentUser === 'admin') return;

  const currentStudent = state.students.find(s => s.id === state.currentUser.id);
  if (!currentStudent) return;
  state.currentUser = currentStudent; // Refresh reference

  // Update Header Badges
  document.getElementById('student-badge-id').innerText = `${currentStudent.id} 학생`;
  document.getElementById('student-tokens-val').innerText = currentStudent.tokens.toLocaleString();
  
  // Update Summary Card
  document.getElementById('summary-balance').innerText = currentStudent.tokens.toLocaleString();
  
  const totalBet = Object.values(currentStudent.bets).reduce((a, b) => a + b, 0);
  document.getElementById('summary-total-bet').innerText = totalBet.toLocaleString();

  // Render My Bets Detail List
  const betsDetailContainer = document.getElementById('my-bets-detail-list');
  betsDetailContainer.innerHTML = '';
  let hasActiveBets = false;
  
  Object.entries(currentStudent.bets).forEach(([lettuceId, amount]) => {
    if (amount > 0) {
      hasActiveBets = true;
      const betItem = document.createElement('div');
      betItem.className = 'my-bet-item';
      betItem.style.display = 'flex';
      betItem.style.justifyContent = 'space-between';
      betItem.style.alignItems = 'center';
      betItem.innerHTML = `
        <span>상추 ${lettuceId}호</span>
        <div style="display: flex; align-items: center; gap: 8px;">
          <strong>💰 ${amount.toLocaleString()}</strong>
          <button class="btn-danger-sm btn-cancel-bet" data-id="${lettuceId}" style="padding: 2px 6px; font-size: 0.75rem; border-radius: 4px;">취소</button>
        </div>
      `;
      betsDetailContainer.appendChild(betItem);
    }
  });

  if (!hasActiveBets) {
    betsDetailContainer.innerHTML = `<p class="no-data" style="padding: 10px 0;">이번 주 베팅 내역이 없습니다.</p>`;
  }

  // Render Lettuce Cards List
  const lettuceContainer = document.getElementById('lettuce-cards-container');
  lettuceContainer.innerHTML = '';

  // Calculate total bets volume for share percentage
  const totalBetsVolume = state.lettuce.reduce((sum, item) => sum + item.totalBets, 0);

  state.lettuce.forEach(item => {
    const card = document.createElement('div');
    card.className = 'lettuce-card';
    
    const myBet = currentStudent.bets[item.id] || 0;
    const sharePercent = totalBetsVolume > 0 ? ((item.totalBets / totalBetsVolume) * 100).toFixed(1) : '0.0';
    
    // Virtual lettuce image placeholders with soft gradients
    const emojis = ['🥬', '🥗', '🌱', '🥦', '🍀', '🌿', '🍃', '🌵', '🪴', '🌳'];
    const emoji = emojis[(parseInt(item.id) - 1) % emojis.length];

    const cancelCardBtnHtml = myBet > 0 
      ? `<button class="btn-danger-sm btn-cancel-card-bet" data-id="${item.id}" style="width: 100%; margin-top: 8px; padding: 6px; border-radius: var(--radius-sm);">베팅 취소</button>` 
      : '';

    card.innerHTML = `
      <div class="lettuce-image-placeholder">${emoji}</div>
      <div class="lettuce-info">
        <h3>${item.name} <span class="badge">Active</span></h3>
      </div>
      <div class="lettuce-stats">
        <div class="stat-row">
          <span>누적 전체 베팅액:</span>
          <strong>💰 ${item.totalBets.toLocaleString()} 토큰</strong>
        </div>
        <div class="lettuce-share-container">
          <div class="lettuce-share-label">
            <span>실시간 점유율:</span>
            <strong>${sharePercent}%</strong>
          </div>
          <div class="lettuce-progress-bar-bg">
            <div class="lettuce-progress-bar-fill" style="width: ${sharePercent}%;"></div>
          </div>
        </div>
        <div class="stat-row my-bet-row">
          <span>내 베팅액:</span>
          <strong>💰 ${myBet.toLocaleString()} 토큰</strong>
        </div>
      </div>
      <div class="bet-control">
        <div class="bet-input-wrapper">
          <input type="number" class="bet-amount-input" id="bet-input-${item.id}" min="5" placeholder="베팅액 입력 (최소 5)" />
          <button class="btn-primary btn-bet" data-id="${item.id}">베팅</button>
        </div>
        <div class="quick-bet-buttons" style="margin-top: 8px;">
          <button class="btn-quick" data-id="${item.id}" data-amount="5">+5</button>
          <button class="btn-quick" data-id="${item.id}" data-amount="10">+10</button>
          <button class="btn-quick" data-id="${item.id}" data-amount="50">+50</button>
          <button class="btn-quick" data-id="${item.id}" data-amount="100">+100</button>
        </div>
        ${cancelCardBtnHtml}
      </div>
    `;

    lettuceContainer.appendChild(card);
  });

  // Attach Bet Button Click Event
  document.querySelectorAll('.btn-bet').forEach(btn => {
    btn.replaceWith(btn.cloneNode(true)); // remove listeners
  });
  document.querySelectorAll('.btn-bet').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const lettuceId = e.target.getAttribute('data-id');
      const inputEl = document.getElementById(`bet-input-${lettuceId}`);
      const amount = parseInt(inputEl.value);
      handleBet(lettuceId, amount);
    });
  });

  // Attach Quick Bet Button Click Event
  document.querySelectorAll('.btn-quick').forEach(btn => {
    btn.replaceWith(btn.cloneNode(true));
  });
  document.querySelectorAll('.btn-quick').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const lettuceId = e.target.getAttribute('data-id');
      const amount = parseInt(e.target.getAttribute('data-amount'));
      handleBet(lettuceId, amount);
    });
  });

  // Attach Cancel Bet Button Click Event (Summary list)
  document.querySelectorAll('.btn-cancel-bet').forEach(btn => {
    btn.replaceWith(btn.cloneNode(true));
  });
  document.querySelectorAll('.btn-cancel-bet').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const lettuceId = e.target.getAttribute('data-id');
      handleCancelBet(lettuceId);
    });
  });

  // Attach Cancel Bet Button Click Event (Lettuce Card)
  document.querySelectorAll('.btn-cancel-card-bet').forEach(btn => {
    btn.replaceWith(btn.cloneNode(true));
  });
  document.querySelectorAll('.btn-cancel-card-bet').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const lettuceId = e.target.getAttribute('data-id');
      handleCancelBet(lettuceId);
    });
  });

  // Render Realtime Ranking
  renderRankingBoard();
}

// 8. Ranking Board Renderer
function renderRankingBoard() {
  const rankingContainer = document.getElementById('ranking-list-container');
  rankingContainer.innerHTML = '';

  // Calculate total assets (tokens + total active bets)
  const getStudentTotalAssets = (student) => {
    const tokens = student.tokens || 0;
    const betsSum = Object.values(student.bets || {}).reduce((sum, amount) => sum + amount, 0);
    return tokens + betsSum;
  };

  // Sort students by total assets descending
  const sortedStudents = [...state.students].sort((a, b) => getStudentTotalAssets(b) - getStudentTotalAssets(a));

  sortedStudents.forEach((student, index) => {
    const isCurrent = state.currentUser && state.currentUser.id === student.id;
    const item = document.createElement('div');
    item.className = `ranking-item ${isCurrent ? 'current-user' : ''}`;
    
    const totalAssets = getStudentTotalAssets(student);
    
    item.innerHTML = `
      <div class="ranking-left">
        <span class="rank-number">${index + 1}</span>
        <span class="rank-id">${student.id} 학생</span>
      </div>
      <span class="rank-tokens">💰 ${totalAssets.toLocaleString()}</span>
    `;
    rankingContainer.appendChild(item);
  });
}

// 9. Admin Dashboard Renderer
function renderAdminDashboard() {
  if (state.currentUser !== 'admin') return;

  // Render Lettuce Rank Select Options
  const selects = ['rank-1', 'rank-2', 'rank-3', 'rank-4', 'rank-5'];
  
  selects.forEach(selectId => {
    const selectEl = document.getElementById(selectId);
    if (!selectEl) return;
    
    // Save current selection to restore it if possible
    const currentVal = selectEl.value;
    
    selectEl.innerHTML = '<option value="" disabled selected>상추 선택</option>';
    state.lettuce.forEach(item => {
      selectEl.innerHTML += `<option value="${item.id}">${item.name}</option>`;
    });

    if (currentVal) {
      selectEl.value = currentVal;
    }
  });

  // Render Student List Table in Admin View
  renderAdminStudentTable();

  // Render Lettuce Stats List
  renderAdminLettuceStats();

  // Render History Logs
  renderHistoryLogs();
}

function renderAdminLettuceStats() {
  const container = document.getElementById('admin-lettuce-stats-container');
  if (!container) return;

  container.innerHTML = '';
  
  const totalBetsVolume = state.lettuce.reduce((sum, item) => sum + item.totalBets, 0);

  state.lettuce.forEach(item => {
    const sharePercent = totalBetsVolume > 0 ? ((item.totalBets / totalBetsVolume) * 100).toFixed(1) : '0.0';
    
    const statItem = document.createElement('div');
    statItem.className = 'lettuce-stat-item';
    statItem.innerHTML = `
      <div class="lettuce-stat-info">
        <span class="lettuce-stat-name">${item.name}</span>
        <div class="lettuce-stat-amount">
          <span>💰 ${item.totalBets.toLocaleString()} 토큰</span>
          <span class="lettuce-stat-percentage">${sharePercent}%</span>
        </div>
      </div>
      <div class="lettuce-progress-bar-bg">
        <div class="lettuce-progress-bar-fill" style="width: ${sharePercent}%;"></div>
      </div>
    `;
    container.appendChild(statItem);
  });
}

function renderAdminStudentTable() {
  const tableBody = document.getElementById('admin-student-table-body');
  const searchInput = document.getElementById('student-search-input');
  const queryVal = searchInput ? searchInput.value.trim() : '';

  tableBody.innerHTML = '';
  
  state.students
    .filter(student => student.id.includes(queryVal))
    .forEach(student => {
      const totalBet = Object.values(student.bets).reduce((a, b) => a + b, 0);
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="font-weight: 600;">${student.id}</td>
        <td class="text-primary" style="font-weight: 700;">💰 ${student.tokens.toLocaleString()}</td>
        <td>💰 ${totalBet.toLocaleString()}</td>
      `;
      tableBody.appendChild(tr);
    });
}

function renderHistoryLogs() {
  const historyContainer = document.getElementById('history-list-container');
  historyContainer.innerHTML = '';

  if (state.history.length === 0) {
    historyContainer.innerHTML = `<p class="no-data">아직 완료된 정산 내역이 없습니다.</p>`;
    return;
  }

  // Reverse list to show newest history first
  [...state.history].reverse().forEach(log => {
    const item = document.createElement('div');
    item.className = 'history-item';
    
    const rankTags = log.ranks.map((lId, idx) => {
      const medalMap = ['🥇', '🥈', '🥉', '4위', '5위'];
      return `<span class="history-rank-tag">${medalMap[idx]} 상추 ${lId}호</span>`;
    }).join(' ');

    item.innerHTML = `
      <div class="history-item-header">
        <span>📅 ${log.date} (${log.round}회차 정산)</span>
        <span class="text-primary" style="font-weight: bold;">총 지급 토큰: 💰 ${log.totalDistributed.toLocaleString()}</span>
      </div>
      <div class="history-item-ranks">
        ${rankTags}
      </div>
      <div class="history-item-stats">
        참여 학생: ${log.participatedStudents}명 | 정산 전 총베팅액: 💰 ${log.totalBets.toLocaleString()}
      </div>
    `;
    historyContainer.appendChild(item);
  });
}

// 10. Betting Action Handler
async function handleBet(lettuceId, amount) {
  if (!state.currentUser || state.currentUser === 'admin') return;

  if (isNaN(amount) || amount <= 0 || !Number.isInteger(amount)) {
    showToast('올바른 베팅 금액을 입력하세요.', 'error');
    return;
  }

  if (amount < MIN_BET) {
    showToast(`최소 베팅 단위는 ${MIN_BET} 토큰입니다.`, 'error');
    return;
  }

  const studentRef = doc(db, 'students', state.currentUser.id);
  const lettuceRef = doc(db, 'lettuce', lettuceId);

  try {
    await runTransaction(db, async (transaction) => {
      const studentDoc = await transaction.get(studentRef);
      const lettuceDoc = await transaction.get(lettuceRef);

      if (!studentDoc.exists() || !lettuceDoc.exists()) {
        throw new Error('데이터가 존재하지 않습니다.');
      }

      const studentData = studentDoc.data();
      const lettuceData = lettuceDoc.data();

      if (amount > studentData.tokens) {
        throw new Error('보유하고 있는 토큰 잔액을 초과하여 베팅할 수 없습니다.');
      }

      const newTokens = studentData.tokens - amount;
      const currentBets = studentData.bets || {};
      const newBets = {
        ...currentBets,
        [lettuceId]: (currentBets[lettuceId] || 0) + amount
      };
      const newLettuceTotal = (lettuceData.totalBets || 0) + amount;

      transaction.update(studentRef, { tokens: newTokens, bets: newBets });
      transaction.update(lettuceRef, { totalBets: newLettuceTotal });
    });

    showToast(`상추 ${lettuceId}호에 💰 ${amount.toLocaleString()} 토큰을 성공적으로 베팅했습니다!`, 'success');
  } catch (err) {
    showToast(err.message || '베팅 중 오류가 발생했습니다.', 'error');
  }
}

// 10-2. Cancel Bet Action Handler
async function handleCancelBet(lettuceId) {
  if (!state.currentUser || state.currentUser === 'admin') return;

  const studentRef = doc(db, 'students', state.currentUser.id);
  const lettuceRef = doc(db, 'lettuce', lettuceId);

  try {
    await runTransaction(db, async (transaction) => {
      const studentDoc = await transaction.get(studentRef);
      const lettuceDoc = await transaction.get(lettuceRef);

      if (!studentDoc.exists() || !lettuceDoc.exists()) {
        throw new Error('데이터가 존재하지 않습니다.');
      }

      const studentData = studentDoc.data();
      const lettuceData = lettuceDoc.data();
      const amount = studentData.bets[lettuceId] || 0;

      if (amount <= 0) {
        throw new Error('해당 상추에 건 베팅이 없습니다.');
      }

      const newTokens = studentData.tokens + amount;
      const newBets = { ...studentData.bets, [lettuceId]: 0 };
      const newLettuceTotal = Math.max(0, (lettuceData.totalBets || 0) - amount);

      transaction.update(studentRef, { tokens: newTokens, bets: newBets });
      transaction.update(lettuceRef, { totalBets: newLettuceTotal });
    });

    showToast(`상추 ${lettuceId}호의 베팅이 성공적으로 취소 및 환불되었습니다.`, 'success');
  } catch (err) {
    showToast(err.message || '베팅 취소 중 오류가 발생했습니다.', 'error');
  }
}

// 11. Admin Settlement Action Handler
async function handleSettlement(ranks) {
  const uniqueRanks = new Set(ranks);
  if (uniqueRanks.size !== 5) {
    showToast('1위부터 5위 상추를 중복 없이 모두 지정해야 합니다.', 'error');
    return;
  }

  showToast('정산을 진행 중입니다...', 'warning');

  try {
    const now = new Date();
    const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    
    const round = state.history.length + 1;
    let totalBetsVolume = state.lettuce.reduce((sum, item) => sum + item.totalBets, 0);
    let totalDistributedCount = 0;
    let participantsCount = 0;

    await runTransaction(db, async (transaction) => {
      const studentRefs = state.students.map(s => doc(db, 'students', s.id));
      const lettuceRefs = state.lettuce.map(l => doc(db, 'lettuce', l.id));

      const studentDocs = await Promise.all(studentRefs.map(ref => transaction.get(ref)));
      
      studentDocs.forEach((sDoc, idx) => {
        const studentData = sDoc.data();
        let studentEarned = 0;
        let studentHasBet = false;

        Object.entries(studentData.bets || {}).forEach(([lettuceId, betAmount]) => {
          if (betAmount > 0) {
            studentHasBet = true;

            if (lettuceId === ranks[0]) {
              studentEarned += betAmount * DIVIDENDS.rank1;
            } else if (lettuceId === ranks[1]) {
              studentEarned += betAmount * DIVIDENDS.rank2;
            } else if (lettuceId === ranks[2]) {
              studentEarned += betAmount * DIVIDENDS.rank3;
            } else if (lettuceId === ranks[3]) {
              studentEarned += betAmount * DIVIDENDS.rank4;
            } else if (lettuceId === ranks[4]) {
              studentEarned += betAmount * DIVIDENDS.rank5;
            } else {
              studentEarned += betAmount * DIVIDENDS.others;
            }
          }
        });

        const nextBets = { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0 };
        
        if (studentHasBet) {
          participantsCount++;
          const roundedEarning = Math.floor(studentEarned);
          totalDistributedCount += roundedEarning;
          transaction.update(studentRefs[idx], {
            tokens: studentData.tokens + roundedEarning,
            bets: nextBets
          });
        } else {
          transaction.update(studentRefs[idx], {
            bets: nextBets
          });
        }
      });

      lettuceRefs.forEach(ref => {
        transaction.update(ref, { totalBets: 0 });
      });

      const historyRef = doc(collection(db, 'history'));
      transaction.set(historyRef, {
        round: round,
        date: dateStr,
        ranks: ranks,
        totalBets: totalBetsVolume,
        totalDistributed: totalDistributedCount,
        participatedStudents: participantsCount
      });
    });

    showToast(`정산이 완료되었습니다! 총 💰 ${totalDistributedCount.toLocaleString()} 토큰이 배분되었습니다.`, 'success');
  } catch (err) {
    showToast('정산 처리 중 오류가 발생했습니다: ' + err.message, 'error');
  }
}

// 12. Password Change Handler
async function handlePasswordChange(currentPw, newPw, confirmPw) {
  if (!state.currentUser || state.currentUser === 'admin') return;

  const currentStudent = state.students.find(s => s.id === state.currentUser.id);
  const errorEl = document.getElementById('pwd-change-error');
  const successEl = document.getElementById('pwd-change-success');

  errorEl.classList.add('hidden');
  successEl.classList.add('hidden');

  if (currentStudent.password !== currentPw) {
    errorEl.innerText = '현재 비밀번호가 일치하지 않습니다.';
    errorEl.classList.remove('hidden');
    return;
  }

  if (newPw !== confirmPw) {
    errorEl.innerText = '새 비밀번호와 확인 비밀번호가 다릅니다.';
    errorEl.classList.remove('hidden');
    return;
  }

  if (newPw.trim().length === 0) {
    errorEl.innerText = '비밀번호는 빈칸일 수 없습니다.';
    errorEl.classList.remove('hidden');
    return;
  }

  try {
    const studentRef = doc(db, 'students', state.currentUser.id);
    await setDoc(studentRef, { password: newPw }, { merge: true });
    
    successEl.classList.remove('hidden');
    document.getElementById('pwd-change-form').reset();
    showToast('비밀번호가 성공적으로 변경되었습니다.', 'success');

    setTimeout(() => {
      document.getElementById('pwd-change-modal').classList.add('hidden');
      successEl.classList.add('hidden');
    }, 1500);
  } catch (err) {
    errorEl.innerText = '비밀번호 변경 실패: ' + err.message;
    errorEl.classList.remove('hidden');
  }
}

// 13. Reset All Data Action (for Admin Panel)
async function handleResetAllData() {
  if (!confirm('정말로 모든 학생의 자산 및 정산 내역을 초기화하시겠습니까? (이 작업은 되돌릴 수 없습니다)')) {
    return;
  }

  showToast('데이터 초기화 중...', 'warning');

  try {
    const historyQuery = await getDocs(collection(db, 'history'));
    const batch = writeBatch(db);

    historyQuery.forEach(docSnapshot => {
      batch.delete(docSnapshot.ref);
    });

    const initialStudents = getInitialStudents();
    initialStudents.forEach(student => {
      const studentRef = doc(db, 'students', student.id);
      batch.set(studentRef, student);
    });

    const initialLettuce = getInitialLettuce();
    initialLettuce.forEach(lettuce => {
      const lettuceRef = doc(db, 'lettuce', lettuce.id);
      batch.set(lettuceRef, lettuce);
    });

    await batch.commit();

    state.currentUser = null;
    saveSession();
    switchView();
    showToast('모든 데이터가 성공적으로 초기화되었습니다!', 'success');
  } catch (err) {
    showToast('초기화 중 오류가 발생했습니다: ' + err.message, 'error');
  }
}

// 14. Event Listeners Setup
document.addEventListener('DOMContentLoaded', () => {
  // Initialize App Data
  initData();
  switchView();

  // 14-1. Login Form Submit
  const loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const idInput = document.getElementById('login-id').value.trim();
    const pwInput = document.getElementById('login-pw').value;
    const errorEl = document.getElementById('login-error');
    errorEl.classList.add('hidden');

    // Admin login check
    if (idInput === ADMIN_CREDENTIALS.id) {
      const hashedInput = await hashPassword(pwInput);
      if (hashedInput === ADMIN_CREDENTIALS.passwordHash) {
        state.currentUser = 'admin';
        saveSession();
        switchView();
        showToast('관리자 계정으로 로그인했습니다.', 'success');
      } else {
        errorEl.innerText = '관리자 비밀번호가 일치하지 않습니다.';
        errorEl.classList.remove('hidden');
      }
      return;
    }

    // Check if Firestore data is loaded
    if (!isStudentsLoaded) {
      errorEl.innerText = '클라우드 데이터를 불러오는 중입니다. 잠시 후 다시 시도해 주세요.';
      errorEl.classList.remove('hidden');
      return;
    }

    // Student login check
    const student = state.students.find(s => s.id === idInput);
    if (student) {
      if (student.password === pwInput) {
        state.currentUser = student;
        saveSession();
        switchView();
        showToast(`${student.id} 학생으로 로그인했습니다.`, 'success');
      } else {
        errorEl.innerText = '비밀번호가 일치하지 않습니다.';
        errorEl.classList.remove('hidden');
      }
    } else {
      errorEl.innerText = '존재하지 않는 학번입니다. (30717 및 30901~30936 사이)';
      errorEl.classList.remove('hidden');
    }
  });

  // 14-2. Logout Button Action
  const logoutStudentBtn = document.getElementById('btn-student-logout');
  logoutStudentBtn.addEventListener('click', () => {
    state.currentUser = null;
    saveSession();
    switchView();
    showToast('로그아웃되었습니다.', 'success');
  });

  const logoutAdminBtn = document.getElementById('btn-admin-logout');
  logoutAdminBtn.addEventListener('click', () => {
    state.currentUser = null;
    saveSession();
    switchView();
    showToast('로그아웃되었습니다.', 'success');
  });

  // 14-3. Password Change Modal Actions
  const openPwdModalBtn = document.getElementById('btn-change-pw-open');
  openPwdModalBtn.addEventListener('click', () => {
    document.getElementById('pwd-change-error').classList.add('hidden');
    document.getElementById('pwd-change-success').classList.add('hidden');
    document.getElementById('pwd-change-form').reset();
    document.getElementById('pwd-change-modal').classList.remove('hidden');
  });

  const closePwdModalBtn = document.getElementById('btn-change-pw-close');
  closePwdModalBtn.addEventListener('click', () => {
    document.getElementById('pwd-change-modal').classList.add('hidden');
  });

  const pwdChangeForm = document.getElementById('pwd-change-form');
  pwdChangeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const curPw = document.getElementById('change-pw-current').value;
    const newPw = document.getElementById('change-pw-new').value;
    const confPw = document.getElementById('change-pw-confirm').value;
    handlePasswordChange(curPw, newPw, confPw);
  });

  // Close modal when clicking outside card
  const pwdModalOverlay = document.getElementById('pwd-change-modal');
  pwdModalOverlay.addEventListener('click', (e) => {
    if (e.target === pwdModalOverlay) {
      pwdModalOverlay.classList.add('hidden');
    }
  });

  // 14-4. Admin: Search student input keyup
  const searchInput = document.getElementById('student-search-input');
  searchInput.addEventListener('input', () => {
    renderAdminStudentTable();
  });

  // 14-5. Admin: Reset all data action
  const resetBtn = document.getElementById('btn-reset-all-data');
  resetBtn.addEventListener('click', () => {
    handleResetAllData();
  });

  // 14-6. Admin: Settlement Form Submit
  const settlementForm = document.getElementById('settlement-form');
  settlementForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const rank1 = document.getElementById('rank-1').value;
    const rank2 = document.getElementById('rank-2').value;
    const rank3 = document.getElementById('rank-3').value;
    const rank4 = document.getElementById('rank-4').value;
    const rank5 = document.getElementById('rank-5').value;

    handleSettlement([rank1, rank2, rank3, rank4, rank5]);
  });
});
