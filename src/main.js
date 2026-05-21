// ==========================================
// 🌿 Lettuce TOTO - Core Business Logic
// ==========================================

// 1. Storage Keys
const KEYS = {
  STUDENTS: 'lettuce_toto_students',
  LETTUCE: 'lettuce_toto_lettuce',
  SESSION: 'lettuce_toto_session',
  HISTORY: 'lettuce_toto_history'
};

// 2. Constants & Settings
const MIN_BET = 5;
const ADMIN_CREDENTIALS = {
  id: 'admin',
  password: '1liA22@aa'
};

// Dividend multipliers
const DIVIDENDS = {
  rank1: 5.0,  // 500%
  rank2: 4.0,  // 400%
  rank3: 3.0,  // 300%
  rank4: 2.0,  // 200%
  rank5: 1.5,  // 150%
  others: 0.9  // 90% (10% loss)
};

// 3. State Management
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
  
  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);

  // Auto remove toast
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// 4. Initializers
function getInitialStudents() {
  const list = [];
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

function initData() {
  // Load or Initialize Students
  const storedStudents = localStorage.getItem(KEYS.STUDENTS);
  if (storedStudents) {
    state.students = JSON.parse(storedStudents);
    // Backward compatibility for password if missing in old versions
    state.students.forEach(s => {
      if (!s.password) s.password = s.id;
    });
  } else {
    state.students = getInitialStudents();
  }

  // Load or Initialize Lettuce
  const storedLettuce = localStorage.getItem(KEYS.LETTUCE);
  if (storedLettuce) {
    state.lettuce = JSON.parse(storedLettuce);
  } else {
    state.lettuce = getInitialLettuce();
  }

  // Load History
  const storedHistory = localStorage.getItem(KEYS.HISTORY);
  if (storedHistory) {
    state.history = JSON.parse(storedHistory);
  } else {
    state.history = [];
  }

  // Load Session
  const sessionUser = localStorage.getItem(KEYS.SESSION);
  if (sessionUser) {
    if (sessionUser === 'admin') {
      state.currentUser = 'admin';
    } else {
      const studentObj = state.students.find(s => s.id === sessionUser);
      state.currentUser = studentObj || null;
    }
  } else {
    state.currentUser = null;
  }

  saveData();
}

function saveData() {
  localStorage.setItem(KEYS.STUDENTS, JSON.stringify(state.students));
  localStorage.setItem(KEYS.LETTUCE, JSON.stringify(state.lettuce));
  localStorage.setItem(KEYS.HISTORY, JSON.stringify(state.history));
  if (state.currentUser) {
    localStorage.setItem(KEYS.SESSION, state.currentUser === 'admin' ? 'admin' : state.currentUser.id);
  } else {
    localStorage.removeItem(KEYS.SESSION);
  }
}

// 5. Views Controller
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

// 6. Student Dashboard Renderer
function renderStudentDashboard() {
  if (!state.currentUser || state.currentUser === 'admin') return;

  const currentStudent = state.students.find(s => s.id === state.currentUser.id);
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
    btn.addEventListener('click', (e) => {
      const lettuceId = e.target.getAttribute('data-id');
      const inputEl = document.getElementById(`bet-input-${lettuceId}`);
      const amount = parseInt(inputEl.value);
      handleBet(lettuceId, amount);
    });
  });

  // Attach Quick Bet Button Click Event
  document.querySelectorAll('.btn-quick').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const lettuceId = e.target.getAttribute('data-id');
      const amount = parseInt(e.target.getAttribute('data-amount'));
      handleBet(lettuceId, amount);
    });
  });

  // Attach Cancel Bet Button Click Event (Summary list)
  document.querySelectorAll('.btn-cancel-bet').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const lettuceId = e.target.getAttribute('data-id');
      handleCancelBet(lettuceId);
    });
  });

  // Attach Cancel Bet Button Click Event (Lettuce Card)
  document.querySelectorAll('.btn-cancel-card-bet').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const lettuceId = e.target.getAttribute('data-id');
      handleCancelBet(lettuceId);
    });
  });

  // Render Realtime Ranking
  renderRankingBoard();
}

// 7. Ranking Board Renderer
function renderRankingBoard() {
  const rankingContainer = document.getElementById('ranking-list-container');
  rankingContainer.innerHTML = '';

  // Sort students by tokens descending
  const sortedStudents = [...state.students].sort((a, b) => b.tokens - a.tokens);

  sortedStudents.forEach((student, index) => {
    const isCurrent = state.currentUser && state.currentUser.id === student.id;
    const item = document.createElement('div');
    item.className = `ranking-item ${isCurrent ? 'current-user' : ''}`;
    
    item.innerHTML = `
      <div class="ranking-left">
        <span class="rank-number">${index + 1}</span>
        <span class="rank-id">${student.id} 학생</span>
      </div>
      <span class="rank-tokens">💰 ${student.tokens.toLocaleString()}</span>
    `;
    rankingContainer.appendChild(item);
  });
}

// 8. Admin Dashboard Renderer
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
  const query = searchInput ? searchInput.value.trim() : '';

  tableBody.innerHTML = '';
  
  state.students
    .filter(student => student.id.includes(query))
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

// 9. Betting Action Handler
function handleBet(lettuceId, amount) {
  if (!state.currentUser || state.currentUser === 'admin') return;

  const currentStudent = state.students.find(s => s.id === state.currentUser.id);
  
  // Validation checks
  if (isNaN(amount) || amount <= 0) {
    showToast('올바른 베팅 금액을 입력하세요.', 'error');
    return;
  }
  
  if (!Number.isInteger(amount)) {
    showToast('베팅 금액은 정수 단위여야 합니다.', 'error');
    return;
  }

  if (amount < MIN_BET) {
    showToast(`최소 베팅 단위는 ${MIN_BET} 토큰입니다.`, 'error');
    return;
  }

  if (amount > currentStudent.tokens) {
    showToast('보유하고 있는 토큰 잔액을 초과하여 베팅할 수 없습니다.', 'error');
    return;
  }

  // Execute Bet
  currentStudent.tokens -= amount;
  currentStudent.bets[lettuceId] = (currentStudent.bets[lettuceId] || 0) + amount;

  // Add to Lettuce Total
  const lettuceItem = state.lettuce.find(item => item.id === lettuceId);
  lettuceItem.totalBets += amount;

  // Save and re-render
  saveData();
  renderStudentDashboard();
  showToast(`상추 ${lettuceId}호에 💰 ${amount.toLocaleString()} 토큰을 성공적으로 베팅했습니다!`, 'success');
}

// 9-2. Cancel Bet Action Handler
function handleCancelBet(lettuceId) {
  if (!state.currentUser || state.currentUser === 'admin') return;

  const currentStudent = state.students.find(s => s.id === state.currentUser.id);
  const amount = currentStudent.bets[lettuceId] || 0;

  if (amount <= 0) {
    showToast('해당 상추에 건 베팅이 없습니다.', 'error');
    return;
  }

  // Restore tokens
  currentStudent.tokens += amount;
  currentStudent.bets[lettuceId] = 0;

  // Subtract from Lettuce Total
  const lettuceItem = state.lettuce.find(item => item.id === lettuceId);
  lettuceItem.totalBets -= amount;
  if (lettuceItem.totalBets < 0) lettuceItem.totalBets = 0; // Safeguard

  // Save and re-render
  saveData();
  renderStudentDashboard();
  showToast(`상추 ${lettuceId}호의 베팅(💰 ${amount.toLocaleString()} 토큰)이 성공적으로 취소되었습니다.`, 'success');
}

// 10. Admin Settlement Action Handler
function handleSettlement(ranks) {
  // Check duplicates in ranks
  const uniqueRanks = new Set(ranks);
  if (uniqueRanks.size !== 5) {
    showToast('1위부터 5위 상추를 중복 없이 모두 지정해야 합니다.', 'error');
    return;
  }

  let totalBetsCount = 0;
  let totalDistributedCount = 0;
  let participantsCount = 0;

  // Count total bets across all lettuce
  const totalBetsVolume = state.lettuce.reduce((sum, item) => sum + item.totalBets, 0);

  // Process settlement for each student
  state.students.forEach(student => {
    let studentEarned = 0;
    let studentHasBet = false;

    Object.entries(student.bets).forEach(([lettuceId, betAmount]) => {
      if (betAmount > 0) {
        studentHasBet = true;
        totalBetsCount += betAmount;

        // Apply dividend rate
        if (lettuceId === ranks[0]) {
          studentEarned += betAmount * DIVIDENDS.rank1; // 500%
        } else if (lettuceId === ranks[1]) {
          studentEarned += betAmount * DIVIDENDS.rank2; // 400%
        } else if (lettuceId === ranks[2]) {
          studentEarned += betAmount * DIVIDENDS.rank3; // 300%
        } else if (lettuceId === ranks[3]) {
          studentEarned += betAmount * DIVIDENDS.rank4; // 200%
        } else if (lettuceId === ranks[4]) {
          studentEarned += betAmount * DIVIDENDS.rank5; // 150%
        } else {
          studentEarned += betAmount * DIVIDENDS.others; // 90%
        }
      }
    });

    if (studentHasBet) {
      participantsCount++;
      // Round down to keep integer token
      const roundedEarning = Math.floor(studentEarned);
      student.tokens += roundedEarning;
      totalDistributedCount += roundedEarning;
    }

    // Reset student bets for next week
    Object.keys(student.bets).forEach(key => student.bets[key] = 0);
  });

  // Reset lettuce total bets
  state.lettuce.forEach(item => item.totalBets = 0);

  // Save history log
  const round = state.history.length + 1;
  const now = new Date();
  const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  
  state.history.push({
    round: round,
    date: dateStr,
    ranks: ranks,
    totalBets: totalBetsVolume,
    totalDistributed: totalDistributedCount,
    participatedStudents: participantsCount
  });

  // Save to storage and refresh
  saveData();
  renderAdminDashboard();
  showToast(`총 💰 ${totalDistributedCount.toLocaleString()} 토큰 정산이 완료되었습니다! 모든 베팅액은 리셋되었습니다.`, 'success');
}

// 11. Password Change Handler
function handlePasswordChange(currentPw, newPw, confirmPw) {
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

  // Update Password
  currentStudent.password = newPw;
  saveData();
  
  successEl.classList.remove('hidden');
  document.getElementById('pwd-change-form').reset();
  showToast('비밀번호가 안전하게 변경되었습니다.', 'success');

  setTimeout(() => {
    document.getElementById('pwd-change-modal').classList.add('hidden');
    successEl.classList.add('hidden');
  }, 1500);
}

// 12. Reset All Data Action (for Admin Panel)
function handleResetAllData() {
  if (!confirm('정말로 모든 학생의 자산 및 정산 내역을 초기화하시겠습니까? (이 작업은 되돌릴 수 없습니다)')) {
    return;
  }

  state.students = getInitialStudents();
  state.lettuce = getInitialLettuce();
  state.history = [];
  state.currentUser = null;
  saveData();
  switchView();
  showToast('모든 데이터가 성공적으로 초기화되었습니다!', 'success');
}

// 13. Event Listeners Setup
document.addEventListener('DOMContentLoaded', () => {
  // Initialize App Data
  initData();
  switchView();

  // 13-1. Login Form Submit
  const loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const idInput = document.getElementById('login-id').value.trim();
    const pwInput = document.getElementById('login-pw').value;
    const errorEl = document.getElementById('login-error');
    errorEl.classList.add('hidden');

    // Admin login check
    if (idInput === ADMIN_CREDENTIALS.id) {
      if (pwInput === ADMIN_CREDENTIALS.password) {
        state.currentUser = 'admin';
        saveData();
        switchView();
        showToast('관리자 계정으로 로그인했습니다.', 'success');
      } else {
        errorEl.innerText = '관리자 비밀번호가 일치하지 않습니다.';
        errorEl.classList.remove('hidden');
      }
      return;
    }

    // Student login check
    const student = state.students.find(s => s.id === idInput);
    if (student) {
      if (student.password === pwInput) {
        state.currentUser = student;
        saveData();
        switchView();
        showToast(`${student.id} 학생으로 로그인했습니다.`, 'success');
      } else {
        errorEl.innerText = '비밀번호가 일치하지 않습니다.';
        errorEl.classList.remove('hidden');
      }
    } else {
      errorEl.innerText = '존재하지 않는 학번입니다. (30901~30936 사이)';
      errorEl.classList.remove('hidden');
    }
  });

  // 13-2. Logout Button Action
  const logoutStudentBtn = document.getElementById('btn-student-logout');
  logoutStudentBtn.addEventListener('click', () => {
    state.currentUser = null;
    saveData();
    switchView();
    showToast('로그아웃되었습니다.', 'success');
  });

  const logoutAdminBtn = document.getElementById('btn-admin-logout');
  logoutAdminBtn.addEventListener('click', () => {
    state.currentUser = null;
    saveData();
    switchView();
    showToast('로그아웃되었습니다.', 'success');
  });

  // 13-3. Password Change Modal Actions
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

  // 13-4. Admin: Search student input keyup
  const searchInput = document.getElementById('student-search-input');
  searchInput.addEventListener('input', () => {
    renderAdminStudentTable();
  });

  // 13-5. Admin: Reset all data action
  const resetBtn = document.getElementById('btn-reset-all-data');
  resetBtn.addEventListener('click', () => {
    handleResetAllData();
  });

  // 13-6. Admin: Settlement Form Submit
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

  // 13-7. Real-time Multi-Tab Sync via Storage Event
  window.addEventListener('storage', (e) => {
    if (Object.values(KEYS).includes(e.key)) {
      initData();
      switchView();
    }
  });
});
