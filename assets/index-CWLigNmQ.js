(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();var Vo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Zc=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],c=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Ca={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,c=a?n[s+1]:0,h=s+2<n.length,f=h?n[s+2]:0,m=o>>2,E=(o&3)<<4|c>>4;let w=(c&15)<<2|f>>6,S=f&63;h||(S=64,a||(w=64)),r.push(e[m],e[E],e[w],e[S])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Va(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Zc(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const f=s<n.length?e[n.charAt(s)]:64;++s;const E=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||c==null||f==null||E==null)throw new tl;const w=o<<2|c>>4;if(r.push(w),f!==64){const S=c<<4&240|f>>2;if(r.push(S),E!==64){const C=f<<6&192|E;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class tl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const el=function(n){const t=Va(n);return Ca.encodeByteArray(t,!0)},lr=function(n){return el(n).replace(/\./g,"")},nl=function(n){try{return Ca.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl=()=>rl().__FIREBASE_DEFAULTS__,il=()=>{if(typeof process>"u"||typeof Vo>"u")return;const n=Vo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ol=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&nl(n[1]);return t&&JSON.parse(t)},Bs=()=>{try{return sl()||il()||ol()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},al=n=>{var t,e;return(e=(t=Bs())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},ul=n=>{const t=al(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Da=()=>{var n;return(n=Bs())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[lr(JSON.stringify(e)),lr(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dl(){var n;const t=(n=Bs())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fl(){return!dl()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ml(){try{return typeof indexedDB=="object"}catch{return!1}}function pl(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl="FirebaseError";class Oe extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=gl,Object.setPrototypeOf(this,Oe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ka.prototype.create)}}class ka{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?_l(o,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Oe(s,c,r)}}function _l(n,t){return n.replace(yl,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const yl=/\{\$([^}]+)}/g;function _s(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(Co(o)&&Co(a)){if(!_s(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Co(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(n){return n&&n._delegate?n._delegate:n}class _n{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new cl;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Tl(t))try{this.getOrInitializeService({instanceIdentifier:ue})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=ue){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ue){return this.instances.has(t)}getOptions(t=ue){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:vl(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ue){return this.component?this.component.multipleInstances?t:ue:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vl(n){return n===ue?void 0:n}function Tl(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new El(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(z||(z={}));const wl={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},Al=z.INFO,Rl={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},Sl=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=Rl[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Na{constructor(t){this.name=t,this._logLevel=Al,this._logHandler=Sl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in z))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?wl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...t),this._logHandler(this,z.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...t),this._logHandler(this,z.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,z.INFO,...t),this._logHandler(this,z.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,z.WARN,...t),this._logHandler(this,z.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...t),this._logHandler(this,z.ERROR,...t)}}const Pl=(n,t)=>t.some(e=>n instanceof e);let Do,ko;function bl(){return Do||(Do=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vl(){return ko||(ko=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const La=new WeakMap,ys=new WeakMap,Ma=new WeakMap,us=new WeakMap,Us=new WeakMap;function Cl(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(Yt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&La.set(e,n)}).catch(()=>{}),Us.set(t,n),t}function Dl(n){if(ys.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});ys.set(n,t)}let Es={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return ys.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Ma.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Yt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function kl(n){Es=n(Es)}function Nl(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(cs(this),t,...e);return Ma.set(r,t.sort?t.sort():[t]),Yt(r)}:Vl().includes(n)?function(...t){return n.apply(cs(this),t),Yt(La.get(this))}:function(...t){return Yt(n.apply(cs(this),t))}}function Ll(n){return typeof n=="function"?Nl(n):(n instanceof IDBTransaction&&Dl(n),Pl(n,bl())?new Proxy(n,Es):n)}function Yt(n){if(n instanceof IDBRequest)return Cl(n);if(us.has(n))return us.get(n);const t=Ll(n);return t!==n&&(us.set(n,t),Us.set(t,n)),t}const cs=n=>Us.get(n);function Ml(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),c=Yt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Yt(a.result),h.oldVersion,h.newVersion,Yt(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const xl=["get","getKey","getAll","getAllKeys","count"],Ol=["put","add","delete","clear"],ls=new Map;function No(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(ls.get(t))return ls.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=Ol.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||xl.includes(e)))return;const o=async function(a,...c){const h=this.transaction(a,s?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[e](...c),s&&h.done]))[0]};return ls.set(t,o),o}kl(n=>({...n,get:(t,e,r)=>No(t,e)||n.get(t,e,r),has:(t,e)=>!!No(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Bl(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Bl(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const vs="@firebase/app",Lo="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt=new Na("@firebase/app"),Ul="@firebase/app-compat",ql="@firebase/analytics-compat",$l="@firebase/analytics",jl="@firebase/app-check-compat",zl="@firebase/app-check",Gl="@firebase/auth",Hl="@firebase/auth-compat",Kl="@firebase/database",Wl="@firebase/data-connect",Ql="@firebase/database-compat",Yl="@firebase/functions",Xl="@firebase/functions-compat",Jl="@firebase/installations",Zl="@firebase/installations-compat",th="@firebase/messaging",eh="@firebase/messaging-compat",nh="@firebase/performance",rh="@firebase/performance-compat",sh="@firebase/remote-config",ih="@firebase/remote-config-compat",oh="@firebase/storage",ah="@firebase/storage-compat",uh="@firebase/firestore",ch="@firebase/vertexai-preview",lh="@firebase/firestore-compat",hh="firebase",dh="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts="[DEFAULT]",fh={[vs]:"fire-core",[Ul]:"fire-core-compat",[$l]:"fire-analytics",[ql]:"fire-analytics-compat",[zl]:"fire-app-check",[jl]:"fire-app-check-compat",[Gl]:"fire-auth",[Hl]:"fire-auth-compat",[Kl]:"fire-rtdb",[Wl]:"fire-data-connect",[Ql]:"fire-rtdb-compat",[Yl]:"fire-fn",[Xl]:"fire-fn-compat",[Jl]:"fire-iid",[Zl]:"fire-iid-compat",[th]:"fire-fcm",[eh]:"fire-fcm-compat",[nh]:"fire-perf",[rh]:"fire-perf-compat",[sh]:"fire-rc",[ih]:"fire-rc-compat",[oh]:"fire-gcs",[ah]:"fire-gcs-compat",[uh]:"fire-fst",[lh]:"fire-fst-compat",[ch]:"fire-vertex","fire-js":"fire-js",[hh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr=new Map,mh=new Map,Is=new Map;function Mo(n,t){try{n.container.addComponent(t)}catch(e){qt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function dr(n){const t=n.name;if(Is.has(t))return qt.debug(`There were multiple attempts to register component ${t}.`),!1;Is.set(t,n);for(const e of hr.values())Mo(e,n);for(const e of mh.values())Mo(e,n);return!0}function ph(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xt=new ka("app","Firebase",gh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Xt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh=dh;function xa(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ts,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Xt.create("bad-app-name",{appName:String(s)});if(e||(e=Da()),!e)throw Xt.create("no-options");const o=hr.get(s);if(o){if(_s(e,o.options)&&_s(r,o.config))return o;throw Xt.create("duplicate-app",{appName:s})}const a=new Il(s);for(const h of Is.values())a.addComponent(h);const c=new _h(e,r,a);return hr.set(s,c),c}function Eh(n=Ts){const t=hr.get(n);if(!t&&n===Ts&&Da())return xa();if(!t)throw Xt.create("no-app",{appName:n});return t}function be(n,t,e){var r;let s=(r=fh[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const c=[`Unable to register library "${s}" with version "${t}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),qt.warn(c.join(" "));return}dr(new _n(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh="firebase-heartbeat-database",Th=1,yn="firebase-heartbeat-store";let hs=null;function Oa(){return hs||(hs=Ml(vh,Th,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(yn)}catch(e){console.warn(e)}}}}).catch(n=>{throw Xt.create("idb-open",{originalErrorMessage:n.message})})),hs}async function Ih(n){try{const e=(await Oa()).transaction(yn),r=await e.objectStore(yn).get(Fa(n));return await e.done,r}catch(t){if(t instanceof Oe)qt.warn(t.message);else{const e=Xt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});qt.warn(e.message)}}}async function xo(n,t){try{const r=(await Oa()).transaction(yn,"readwrite");await r.objectStore(yn).put(t,Fa(n)),await r.done}catch(e){if(e instanceof Oe)qt.warn(e.message);else{const r=Xt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});qt.warn(r.message)}}}function Fa(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh=1024,Ah=30*24*60*60*1e3;class Rh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Ph(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Oo();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=Ah}),this._storage.overwrite(this._heartbeatsCache))}catch(r){qt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Oo(),{heartbeatsToSend:r,unsentEntries:s}=Sh(this._heartbeatsCache.heartbeats),o=lr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return qt.warn(e),""}}}function Oo(){return new Date().toISOString().substring(0,10)}function Sh(n,t=wh){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Fo(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Fo(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Ph{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ml()?pl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Ih(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return xo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return xo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Fo(n){return lr(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(n){dr(new _n("platform-logger",t=>new Fl(t),"PRIVATE")),dr(new _n("heartbeat",t=>new Rh(t),"PRIVATE")),be(vs,Lo,n),be(vs,Lo,"esm2017"),be("fire-js","")}bh("");var Vh="firebase",Ch="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */be(Vh,Ch,"app");var Bo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var he,Ba;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,p){function _(){}_.prototype=p.prototype,T.D=p.prototype,T.prototype=new _,T.prototype.constructor=T,T.C=function(y,v,A){for(var g=Array(arguments.length-2),Ot=2;Ot<arguments.length;Ot++)g[Ot-2]=arguments[Ot];return p.prototype[v].apply(y,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,p,_){_||(_=0);var y=Array(16);if(typeof p=="string")for(var v=0;16>v;++v)y[v]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(v=0;16>v;++v)y[v]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=T.g[0],_=T.g[1],v=T.g[2];var A=T.g[3],g=p+(A^_&(v^A))+y[0]+3614090360&4294967295;p=_+(g<<7&4294967295|g>>>25),g=A+(v^p&(_^v))+y[1]+3905402710&4294967295,A=p+(g<<12&4294967295|g>>>20),g=v+(_^A&(p^_))+y[2]+606105819&4294967295,v=A+(g<<17&4294967295|g>>>15),g=_+(p^v&(A^p))+y[3]+3250441966&4294967295,_=v+(g<<22&4294967295|g>>>10),g=p+(A^_&(v^A))+y[4]+4118548399&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(v^p&(_^v))+y[5]+1200080426&4294967295,A=p+(g<<12&4294967295|g>>>20),g=v+(_^A&(p^_))+y[6]+2821735955&4294967295,v=A+(g<<17&4294967295|g>>>15),g=_+(p^v&(A^p))+y[7]+4249261313&4294967295,_=v+(g<<22&4294967295|g>>>10),g=p+(A^_&(v^A))+y[8]+1770035416&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(v^p&(_^v))+y[9]+2336552879&4294967295,A=p+(g<<12&4294967295|g>>>20),g=v+(_^A&(p^_))+y[10]+4294925233&4294967295,v=A+(g<<17&4294967295|g>>>15),g=_+(p^v&(A^p))+y[11]+2304563134&4294967295,_=v+(g<<22&4294967295|g>>>10),g=p+(A^_&(v^A))+y[12]+1804603682&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(v^p&(_^v))+y[13]+4254626195&4294967295,A=p+(g<<12&4294967295|g>>>20),g=v+(_^A&(p^_))+y[14]+2792965006&4294967295,v=A+(g<<17&4294967295|g>>>15),g=_+(p^v&(A^p))+y[15]+1236535329&4294967295,_=v+(g<<22&4294967295|g>>>10),g=p+(v^A&(_^v))+y[1]+4129170786&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^v&(p^_))+y[6]+3225465664&4294967295,A=p+(g<<9&4294967295|g>>>23),g=v+(p^_&(A^p))+y[11]+643717713&4294967295,v=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(v^A))+y[0]+3921069994&4294967295,_=v+(g<<20&4294967295|g>>>12),g=p+(v^A&(_^v))+y[5]+3593408605&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^v&(p^_))+y[10]+38016083&4294967295,A=p+(g<<9&4294967295|g>>>23),g=v+(p^_&(A^p))+y[15]+3634488961&4294967295,v=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(v^A))+y[4]+3889429448&4294967295,_=v+(g<<20&4294967295|g>>>12),g=p+(v^A&(_^v))+y[9]+568446438&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^v&(p^_))+y[14]+3275163606&4294967295,A=p+(g<<9&4294967295|g>>>23),g=v+(p^_&(A^p))+y[3]+4107603335&4294967295,v=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(v^A))+y[8]+1163531501&4294967295,_=v+(g<<20&4294967295|g>>>12),g=p+(v^A&(_^v))+y[13]+2850285829&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^v&(p^_))+y[2]+4243563512&4294967295,A=p+(g<<9&4294967295|g>>>23),g=v+(p^_&(A^p))+y[7]+1735328473&4294967295,v=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(v^A))+y[12]+2368359562&4294967295,_=v+(g<<20&4294967295|g>>>12),g=p+(_^v^A)+y[5]+4294588738&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^v)+y[8]+2272392833&4294967295,A=p+(g<<11&4294967295|g>>>21),g=v+(A^p^_)+y[11]+1839030562&4294967295,v=A+(g<<16&4294967295|g>>>16),g=_+(v^A^p)+y[14]+4259657740&4294967295,_=v+(g<<23&4294967295|g>>>9),g=p+(_^v^A)+y[1]+2763975236&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^v)+y[4]+1272893353&4294967295,A=p+(g<<11&4294967295|g>>>21),g=v+(A^p^_)+y[7]+4139469664&4294967295,v=A+(g<<16&4294967295|g>>>16),g=_+(v^A^p)+y[10]+3200236656&4294967295,_=v+(g<<23&4294967295|g>>>9),g=p+(_^v^A)+y[13]+681279174&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^v)+y[0]+3936430074&4294967295,A=p+(g<<11&4294967295|g>>>21),g=v+(A^p^_)+y[3]+3572445317&4294967295,v=A+(g<<16&4294967295|g>>>16),g=_+(v^A^p)+y[6]+76029189&4294967295,_=v+(g<<23&4294967295|g>>>9),g=p+(_^v^A)+y[9]+3654602809&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^v)+y[12]+3873151461&4294967295,A=p+(g<<11&4294967295|g>>>21),g=v+(A^p^_)+y[15]+530742520&4294967295,v=A+(g<<16&4294967295|g>>>16),g=_+(v^A^p)+y[2]+3299628645&4294967295,_=v+(g<<23&4294967295|g>>>9),g=p+(v^(_|~A))+y[0]+4096336452&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~v))+y[7]+1126891415&4294967295,A=p+(g<<10&4294967295|g>>>22),g=v+(p^(A|~_))+y[14]+2878612391&4294967295,v=A+(g<<15&4294967295|g>>>17),g=_+(A^(v|~p))+y[5]+4237533241&4294967295,_=v+(g<<21&4294967295|g>>>11),g=p+(v^(_|~A))+y[12]+1700485571&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~v))+y[3]+2399980690&4294967295,A=p+(g<<10&4294967295|g>>>22),g=v+(p^(A|~_))+y[10]+4293915773&4294967295,v=A+(g<<15&4294967295|g>>>17),g=_+(A^(v|~p))+y[1]+2240044497&4294967295,_=v+(g<<21&4294967295|g>>>11),g=p+(v^(_|~A))+y[8]+1873313359&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~v))+y[15]+4264355552&4294967295,A=p+(g<<10&4294967295|g>>>22),g=v+(p^(A|~_))+y[6]+2734768916&4294967295,v=A+(g<<15&4294967295|g>>>17),g=_+(A^(v|~p))+y[13]+1309151649&4294967295,_=v+(g<<21&4294967295|g>>>11),g=p+(v^(_|~A))+y[4]+4149444226&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~v))+y[11]+3174756917&4294967295,A=p+(g<<10&4294967295|g>>>22),g=v+(p^(A|~_))+y[2]+718787259&4294967295,v=A+(g<<15&4294967295|g>>>17),g=_+(A^(v|~p))+y[9]+3951481745&4294967295,T.g[0]=T.g[0]+p&4294967295,T.g[1]=T.g[1]+(v+(g<<21&4294967295|g>>>11))&4294967295,T.g[2]=T.g[2]+v&4294967295,T.g[3]=T.g[3]+A&4294967295}r.prototype.u=function(T,p){p===void 0&&(p=T.length);for(var _=p-this.blockSize,y=this.B,v=this.h,A=0;A<p;){if(v==0)for(;A<=_;)s(this,T,A),A+=this.blockSize;if(typeof T=="string"){for(;A<p;)if(y[v++]=T.charCodeAt(A++),v==this.blockSize){s(this,y),v=0;break}}else for(;A<p;)if(y[v++]=T[A++],v==this.blockSize){s(this,y),v=0;break}}this.h=v,this.o+=p},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var p=1;p<T.length-8;++p)T[p]=0;var _=8*this.o;for(p=T.length-8;p<T.length;++p)T[p]=_&255,_/=256;for(this.u(T),T=Array(16),p=_=0;4>p;++p)for(var y=0;32>y;y+=8)T[_++]=this.g[p]>>>y&255;return T};function o(T,p){var _=c;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=p(T)}function a(T,p){this.h=p;for(var _=[],y=!0,v=T.length-1;0<=v;v--){var A=T[v]|0;y&&A==p||(_[v]=A,y=!1)}this.g=_}var c={};function h(T){return-128<=T&&128>T?o(T,function(p){return new a([p|0],0>p?-1:0)}):new a([T|0],0>T?-1:0)}function f(T){if(isNaN(T)||!isFinite(T))return E;if(0>T)return V(f(-T));for(var p=[],_=1,y=0;T>=_;y++)p[y]=T/_|0,_*=4294967296;return new a(p,0)}function m(T,p){if(T.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(T.charAt(0)=="-")return V(m(T.substring(1),p));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=f(Math.pow(p,8)),y=E,v=0;v<T.length;v+=8){var A=Math.min(8,T.length-v),g=parseInt(T.substring(v,v+A),p);8>A?(A=f(Math.pow(p,A)),y=y.j(A).add(f(g))):(y=y.j(_),y=y.add(f(g)))}return y}var E=h(0),w=h(1),S=h(16777216);n=a.prototype,n.m=function(){if(k(this))return-V(this).m();for(var T=0,p=1,_=0;_<this.g.length;_++){var y=this.i(_);T+=(0<=y?y:4294967296+y)*p,p*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(C(this))return"0";if(k(this))return"-"+V(this).toString(T);for(var p=f(Math.pow(T,6)),_=this,y="";;){var v=J(_,p).g;_=U(_,v.j(p));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(T);if(_=v,C(_))return A+y;for(;6>A.length;)A="0"+A;y=A+y}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function C(T){if(T.h!=0)return!1;for(var p=0;p<T.g.length;p++)if(T.g[p]!=0)return!1;return!0}function k(T){return T.h==-1}n.l=function(T){return T=U(this,T),k(T)?-1:C(T)?0:1};function V(T){for(var p=T.g.length,_=[],y=0;y<p;y++)_[y]=~T.g[y];return new a(_,~T.h).add(w)}n.abs=function(){return k(this)?V(this):this},n.add=function(T){for(var p=Math.max(this.g.length,T.g.length),_=[],y=0,v=0;v<=p;v++){var A=y+(this.i(v)&65535)+(T.i(v)&65535),g=(A>>>16)+(this.i(v)>>>16)+(T.i(v)>>>16);y=g>>>16,A&=65535,g&=65535,_[v]=g<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function U(T,p){return T.add(V(p))}n.j=function(T){if(C(this)||C(T))return E;if(k(this))return k(T)?V(this).j(V(T)):V(V(this).j(T));if(k(T))return V(this.j(V(T)));if(0>this.l(S)&&0>T.l(S))return f(this.m()*T.m());for(var p=this.g.length+T.g.length,_=[],y=0;y<2*p;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var v=0;v<T.g.length;v++){var A=this.i(y)>>>16,g=this.i(y)&65535,Ot=T.i(v)>>>16,$e=T.i(v)&65535;_[2*y+2*v]+=g*$e,W(_,2*y+2*v),_[2*y+2*v+1]+=A*$e,W(_,2*y+2*v+1),_[2*y+2*v+1]+=g*Ot,W(_,2*y+2*v+1),_[2*y+2*v+2]+=A*Ot,W(_,2*y+2*v+2)}for(y=0;y<p;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=p;y<2*p;y++)_[y]=0;return new a(_,0)};function W(T,p){for(;(T[p]&65535)!=T[p];)T[p+1]+=T[p]>>>16,T[p]&=65535,p++}function $(T,p){this.g=T,this.h=p}function J(T,p){if(C(p))throw Error("division by zero");if(C(T))return new $(E,E);if(k(T))return p=J(V(T),p),new $(V(p.g),V(p.h));if(k(p))return p=J(T,V(p)),new $(V(p.g),p.h);if(30<T.g.length){if(k(T)||k(p))throw Error("slowDivide_ only works with positive integers.");for(var _=w,y=p;0>=y.l(T);)_=xt(_),y=xt(y);var v=ct(_,1),A=ct(y,1);for(y=ct(y,2),_=ct(_,2);!C(y);){var g=A.add(y);0>=g.l(T)&&(v=v.add(_),A=g),y=ct(y,1),_=ct(_,1)}return p=U(T,v.j(p)),new $(v,p)}for(v=E;0<=T.l(p);){for(_=Math.max(1,Math.floor(T.m()/p.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),A=f(_),g=A.j(p);k(g)||0<g.l(T);)_-=y,A=f(_),g=A.j(p);C(A)&&(A=w),v=v.add(A),T=U(T,g)}return new $(v,T)}n.A=function(T){return J(this,T).h},n.and=function(T){for(var p=Math.max(this.g.length,T.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)&T.i(y);return new a(_,this.h&T.h)},n.or=function(T){for(var p=Math.max(this.g.length,T.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)|T.i(y);return new a(_,this.h|T.h)},n.xor=function(T){for(var p=Math.max(this.g.length,T.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)^T.i(y);return new a(_,this.h^T.h)};function xt(T){for(var p=T.g.length+1,_=[],y=0;y<p;y++)_[y]=T.i(y)<<1|T.i(y-1)>>>31;return new a(_,T.h)}function ct(T,p){var _=p>>5;p%=32;for(var y=T.g.length-_,v=[],A=0;A<y;A++)v[A]=0<p?T.i(A+_)>>>p|T.i(A+_+1)<<32-p:T.i(A+_);return new a(v,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ba=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=m,he=a}).apply(typeof Bo<"u"?Bo:typeof self<"u"?self:typeof window<"u"?window:{});var er=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ua,an,qa,ir,ws,$a,ja,za;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,u,l){return i==Array.prototype||i==Object.prototype||(i[u]=l.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof er=="object"&&er];for(var u=0;u<i.length;++u){var l=i[u];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function s(i,u){if(u)t:{var l=r;i=i.split(".");for(var d=0;d<i.length-1;d++){var I=i[d];if(!(I in l))break t;l=l[I]}i=i[i.length-1],d=l[i],u=u(d),u!=d&&u!=null&&t(l,i,{configurable:!0,writable:!0,value:u})}}function o(i,u){i instanceof String&&(i+="");var l=0,d=!1,I={next:function(){if(!d&&l<i.length){var R=l++;return{value:u(R,i[R]),done:!1}}return d=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}s("Array.prototype.values",function(i){return i||function(){return o(this,function(u,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(i){var u=typeof i;return u=u!="object"?u:i?Array.isArray(i)?"array":u:"null",u=="array"||u=="object"&&typeof i.length=="number"}function f(i){var u=typeof i;return u=="object"&&i!=null||u=="function"}function m(i,u,l){return i.call.apply(i.bind,arguments)}function E(i,u,l){if(!i)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,d),i.apply(u,I)}}return function(){return i.apply(u,arguments)}}function w(i,u,l){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:E,w.apply(null,arguments)}function S(i,u){var l=Array.prototype.slice.call(arguments,1);return function(){var d=l.slice();return d.push.apply(d,arguments),i.apply(this,d)}}function C(i,u){function l(){}l.prototype=u.prototype,i.aa=u.prototype,i.prototype=new l,i.prototype.constructor=i,i.Qb=function(d,I,R){for(var D=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)D[Y-2]=arguments[Y];return u.prototype[I].apply(d,D)}}function k(i){const u=i.length;if(0<u){const l=Array(u);for(let d=0;d<u;d++)l[d]=i[d];return l}return[]}function V(i,u){for(let l=1;l<arguments.length;l++){const d=arguments[l];if(h(d)){const I=i.length||0,R=d.length||0;i.length=I+R;for(let D=0;D<R;D++)i[I+D]=d[D]}else i.push(d)}}class U{constructor(u,l){this.i=u,this.j=l,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function W(i){return/^[\s\xa0]*$/.test(i)}function $(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function J(i){return J[" "](i),i}J[" "]=function(){};var xt=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function ct(i,u,l){for(const d in i)u.call(l,i[d],d,i)}function T(i,u){for(const l in i)u.call(void 0,i[l],l,i)}function p(i){const u={};for(const l in i)u[l]=i[l];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(i,u){let l,d;for(let I=1;I<arguments.length;I++){d=arguments[I];for(l in d)i[l]=d[l];for(let R=0;R<_.length;R++)l=_[R],Object.prototype.hasOwnProperty.call(d,l)&&(i[l]=d[l])}}function v(i){var u=1;i=i.split(":");const l=[];for(;0<u&&i.length;)l.push(i.shift()),u--;return i.length&&l.push(i.join(":")),l}function A(i){c.setTimeout(()=>{throw i},0)}function g(){var i=Fr;let u=null;return i.g&&(u=i.g,i.g=i.g.next,i.g||(i.h=null),u.next=null),u}class Ot{constructor(){this.h=this.g=null}add(u,l){const d=$e.get();d.set(u,l),this.h?this.h.next=d:this.g=d,this.h=d}}var $e=new U(()=>new yc,i=>i.reset());class yc{constructor(){this.next=this.g=this.h=null}set(u,l){this.h=u,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let je,ze=!1,Fr=new Ot,bi=()=>{const i=c.Promise.resolve(void 0);je=()=>{i.then(Ec)}};var Ec=()=>{for(var i;i=g();){try{i.h.call(i.g)}catch(l){A(l)}var u=$e;u.j(i),100>u.h&&(u.h++,i.next=u.g,u.g=i)}ze=!1};function zt(){this.s=this.s,this.C=this.C}zt.prototype.s=!1,zt.prototype.ma=function(){this.s||(this.s=!0,this.N())},zt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function gt(i,u){this.type=i,this.g=this.target=u,this.defaultPrevented=!1}gt.prototype.h=function(){this.defaultPrevented=!0};var vc=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,u=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};c.addEventListener("test",l,u),c.removeEventListener("test",l,u)}catch{}return i}();function Ge(i,u){if(gt.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var l=this.type=i.type,d=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=u,u=i.relatedTarget){if(xt){t:{try{J(u.nodeName);var I=!0;break t}catch{}I=!1}I||(u=null)}}else l=="mouseover"?u=i.fromElement:l=="mouseout"&&(u=i.toElement);this.relatedTarget=u,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Tc[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Ge.aa.h.call(this)}}C(Ge,gt);var Tc={2:"touch",3:"pen",4:"mouse"};Ge.prototype.h=function(){Ge.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var xn="closure_listenable_"+(1e6*Math.random()|0),Ic=0;function wc(i,u,l,d,I){this.listener=i,this.proxy=null,this.src=u,this.type=l,this.capture=!!d,this.ha=I,this.key=++Ic,this.da=this.fa=!1}function On(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Fn(i){this.src=i,this.g={},this.h=0}Fn.prototype.add=function(i,u,l,d,I){var R=i.toString();i=this.g[R],i||(i=this.g[R]=[],this.h++);var D=Ur(i,u,d,I);return-1<D?(u=i[D],l||(u.fa=!1)):(u=new wc(u,this.src,R,!!d,I),u.fa=l,i.push(u)),u};function Br(i,u){var l=u.type;if(l in i.g){var d=i.g[l],I=Array.prototype.indexOf.call(d,u,void 0),R;(R=0<=I)&&Array.prototype.splice.call(d,I,1),R&&(On(u),i.g[l].length==0&&(delete i.g[l],i.h--))}}function Ur(i,u,l,d){for(var I=0;I<i.length;++I){var R=i[I];if(!R.da&&R.listener==u&&R.capture==!!l&&R.ha==d)return I}return-1}var qr="closure_lm_"+(1e6*Math.random()|0),$r={};function Vi(i,u,l,d,I){if(Array.isArray(u)){for(var R=0;R<u.length;R++)Vi(i,u[R],l,d,I);return null}return l=ki(l),i&&i[xn]?i.K(u,l,f(d)?!!d.capture:!1,I):Ac(i,u,l,!1,d,I)}function Ac(i,u,l,d,I,R){if(!u)throw Error("Invalid event type");var D=f(I)?!!I.capture:!!I,Y=zr(i);if(Y||(i[qr]=Y=new Fn(i)),l=Y.add(u,l,d,D,R),l.proxy)return l;if(d=Rc(),l.proxy=d,d.src=i,d.listener=l,i.addEventListener)vc||(I=D),I===void 0&&(I=!1),i.addEventListener(u.toString(),d,I);else if(i.attachEvent)i.attachEvent(Di(u.toString()),d);else if(i.addListener&&i.removeListener)i.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Rc(){function i(l){return u.call(i.src,i.listener,l)}const u=Sc;return i}function Ci(i,u,l,d,I){if(Array.isArray(u))for(var R=0;R<u.length;R++)Ci(i,u[R],l,d,I);else d=f(d)?!!d.capture:!!d,l=ki(l),i&&i[xn]?(i=i.i,u=String(u).toString(),u in i.g&&(R=i.g[u],l=Ur(R,l,d,I),-1<l&&(On(R[l]),Array.prototype.splice.call(R,l,1),R.length==0&&(delete i.g[u],i.h--)))):i&&(i=zr(i))&&(u=i.g[u.toString()],i=-1,u&&(i=Ur(u,l,d,I)),(l=-1<i?u[i]:null)&&jr(l))}function jr(i){if(typeof i!="number"&&i&&!i.da){var u=i.src;if(u&&u[xn])Br(u.i,i);else{var l=i.type,d=i.proxy;u.removeEventListener?u.removeEventListener(l,d,i.capture):u.detachEvent?u.detachEvent(Di(l),d):u.addListener&&u.removeListener&&u.removeListener(d),(l=zr(u))?(Br(l,i),l.h==0&&(l.src=null,u[qr]=null)):On(i)}}}function Di(i){return i in $r?$r[i]:$r[i]="on"+i}function Sc(i,u){if(i.da)i=!0;else{u=new Ge(u,this);var l=i.listener,d=i.ha||i.src;i.fa&&jr(i),i=l.call(d,u)}return i}function zr(i){return i=i[qr],i instanceof Fn?i:null}var Gr="__closure_events_fn_"+(1e9*Math.random()>>>0);function ki(i){return typeof i=="function"?i:(i[Gr]||(i[Gr]=function(u){return i.handleEvent(u)}),i[Gr])}function _t(){zt.call(this),this.i=new Fn(this),this.M=this,this.F=null}C(_t,zt),_t.prototype[xn]=!0,_t.prototype.removeEventListener=function(i,u,l,d){Ci(this,i,u,l,d)};function It(i,u){var l,d=i.F;if(d)for(l=[];d;d=d.F)l.push(d);if(i=i.M,d=u.type||u,typeof u=="string")u=new gt(u,i);else if(u instanceof gt)u.target=u.target||i;else{var I=u;u=new gt(d,i),y(u,I)}if(I=!0,l)for(var R=l.length-1;0<=R;R--){var D=u.g=l[R];I=Bn(D,d,!0,u)&&I}if(D=u.g=i,I=Bn(D,d,!0,u)&&I,I=Bn(D,d,!1,u)&&I,l)for(R=0;R<l.length;R++)D=u.g=l[R],I=Bn(D,d,!1,u)&&I}_t.prototype.N=function(){if(_t.aa.N.call(this),this.i){var i=this.i,u;for(u in i.g){for(var l=i.g[u],d=0;d<l.length;d++)On(l[d]);delete i.g[u],i.h--}}this.F=null},_t.prototype.K=function(i,u,l,d){return this.i.add(String(i),u,!1,l,d)},_t.prototype.L=function(i,u,l,d){return this.i.add(String(i),u,!0,l,d)};function Bn(i,u,l,d){if(u=i.i.g[String(u)],!u)return!0;u=u.concat();for(var I=!0,R=0;R<u.length;++R){var D=u[R];if(D&&!D.da&&D.capture==l){var Y=D.listener,lt=D.ha||D.src;D.fa&&Br(i.i,D),I=Y.call(lt,d)!==!1&&I}}return I&&!d.defaultPrevented}function Ni(i,u,l){if(typeof i=="function")l&&(i=w(i,l));else if(i&&typeof i.handleEvent=="function")i=w(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(i,u||0)}function Li(i){i.g=Ni(()=>{i.g=null,i.i&&(i.i=!1,Li(i))},i.l);const u=i.h;i.h=null,i.m.apply(null,u)}class Pc extends zt{constructor(u,l){super(),this.m=u,this.l=l,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Li(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function He(i){zt.call(this),this.h=i,this.g={}}C(He,zt);var Mi=[];function xi(i){ct(i.g,function(u,l){this.g.hasOwnProperty(l)&&jr(u)},i),i.g={}}He.prototype.N=function(){He.aa.N.call(this),xi(this)},He.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Hr=c.JSON.stringify,bc=c.JSON.parse,Vc=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function Kr(){}Kr.prototype.h=null;function Oi(i){return i.h||(i.h=i.i())}function Fi(){}var Ke={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Wr(){gt.call(this,"d")}C(Wr,gt);function Qr(){gt.call(this,"c")}C(Qr,gt);var se={},Bi=null;function Un(){return Bi=Bi||new _t}se.La="serverreachability";function Ui(i){gt.call(this,se.La,i)}C(Ui,gt);function We(i){const u=Un();It(u,new Ui(u))}se.STAT_EVENT="statevent";function qi(i,u){gt.call(this,se.STAT_EVENT,i),this.stat=u}C(qi,gt);function wt(i){const u=Un();It(u,new qi(u,i))}se.Ma="timingevent";function $i(i,u){gt.call(this,se.Ma,i),this.size=u}C($i,gt);function Qe(i,u){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},u)}function Ye(){this.g=!0}Ye.prototype.xa=function(){this.g=!1};function Cc(i,u,l,d,I,R){i.info(function(){if(i.g)if(R)for(var D="",Y=R.split("&"),lt=0;lt<Y.length;lt++){var H=Y[lt].split("=");if(1<H.length){var yt=H[0];H=H[1];var Et=yt.split("_");D=2<=Et.length&&Et[1]=="type"?D+(yt+"="+H+"&"):D+(yt+"=redacted&")}}else D=null;else D=R;return"XMLHTTP REQ ("+d+") [attempt "+I+"]: "+u+`
`+l+`
`+D})}function Dc(i,u,l,d,I,R,D){i.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+I+"]: "+u+`
`+l+`
`+R+" "+D})}function Ee(i,u,l,d){i.info(function(){return"XMLHTTP TEXT ("+u+"): "+Nc(i,l)+(d?" "+d:"")})}function kc(i,u){i.info(function(){return"TIMEOUT: "+u})}Ye.prototype.info=function(){};function Nc(i,u){if(!i.g)return u;if(!u)return null;try{var l=JSON.parse(u);if(l){for(i=0;i<l.length;i++)if(Array.isArray(l[i])){var d=l[i];if(!(2>d.length)){var I=d[1];if(Array.isArray(I)&&!(1>I.length)){var R=I[0];if(R!="noop"&&R!="stop"&&R!="close")for(var D=1;D<I.length;D++)I[D]=""}}}}return Hr(l)}catch{return u}}var qn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ji={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Yr;function $n(){}C($n,Kr),$n.prototype.g=function(){return new XMLHttpRequest},$n.prototype.i=function(){return{}},Yr=new $n;function Gt(i,u,l,d){this.j=i,this.i=u,this.l=l,this.R=d||1,this.U=new He(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new zi}function zi(){this.i=null,this.g="",this.h=!1}var Gi={},Xr={};function Jr(i,u,l){i.L=1,i.v=Hn(Ft(u)),i.m=l,i.P=!0,Hi(i,null)}function Hi(i,u){i.F=Date.now(),jn(i),i.A=Ft(i.v);var l=i.A,d=i.R;Array.isArray(d)||(d=[String(d)]),oo(l.i,"t",d),i.C=0,l=i.j.J,i.h=new zi,i.g=Ro(i.j,l?u:null,!i.m),0<i.O&&(i.M=new Pc(w(i.Y,i,i.g),i.O)),u=i.U,l=i.g,d=i.ca;var I="readystatechange";Array.isArray(I)||(I&&(Mi[0]=I.toString()),I=Mi);for(var R=0;R<I.length;R++){var D=Vi(l,I[R],d||u.handleEvent,!1,u.h||u);if(!D)break;u.g[D.key]=D}u=i.H?p(i.H):{},i.m?(i.u||(i.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,u)):(i.u="GET",i.g.ea(i.A,i.u,null,u)),We(),Cc(i.i,i.u,i.A,i.l,i.R,i.m)}Gt.prototype.ca=function(i){i=i.target;const u=this.M;u&&Bt(i)==3?u.j():this.Y(i)},Gt.prototype.Y=function(i){try{if(i==this.g)t:{const Et=Bt(this.g);var u=this.g.Ba();const Ie=this.g.Z();if(!(3>Et)&&(Et!=3||this.g&&(this.h.h||this.g.oa()||mo(this.g)))){this.J||Et!=4||u==7||(u==8||0>=Ie?We(3):We(2)),Zr(this);var l=this.g.Z();this.X=l;e:if(Ki(this)){var d=mo(this.g);i="";var I=d.length,R=Bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ie(this),Xe(this);var D="";break e}this.h.i=new c.TextDecoder}for(u=0;u<I;u++)this.h.h=!0,i+=this.h.i.decode(d[u],{stream:!(R&&u==I-1)});d.length=0,this.h.g+=i,this.C=0,D=this.h.g}else D=this.g.oa();if(this.o=l==200,Dc(this.i,this.u,this.A,this.l,this.R,Et,l),this.o){if(this.T&&!this.K){e:{if(this.g){var Y,lt=this.g;if((Y=lt.g?lt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!W(Y)){var H=Y;break e}}H=null}if(l=H)Ee(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ts(this,l);else{this.o=!1,this.s=3,wt(12),ie(this),Xe(this);break t}}if(this.P){l=!0;let Dt;for(;!this.J&&this.C<D.length;)if(Dt=Lc(this,D),Dt==Xr){Et==4&&(this.s=4,wt(14),l=!1),Ee(this.i,this.l,null,"[Incomplete Response]");break}else if(Dt==Gi){this.s=4,wt(15),Ee(this.i,this.l,D,"[Invalid Chunk]"),l=!1;break}else Ee(this.i,this.l,Dt,null),ts(this,Dt);if(Ki(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Et!=4||D.length!=0||this.h.h||(this.s=1,wt(16),l=!1),this.o=this.o&&l,!l)Ee(this.i,this.l,D,"[Invalid Chunked Response]"),ie(this),Xe(this);else if(0<D.length&&!this.W){this.W=!0;var yt=this.j;yt.g==this&&yt.ba&&!yt.M&&(yt.j.info("Great, no buffering proxy detected. Bytes received: "+D.length),os(yt),yt.M=!0,wt(11))}}else Ee(this.i,this.l,D,null),ts(this,D);Et==4&&ie(this),this.o&&!this.J&&(Et==4?To(this.j,this):(this.o=!1,jn(this)))}else Xc(this.g),l==400&&0<D.indexOf("Unknown SID")?(this.s=3,wt(12)):(this.s=0,wt(13)),ie(this),Xe(this)}}}catch{}finally{}};function Ki(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Lc(i,u){var l=i.C,d=u.indexOf(`
`,l);return d==-1?Xr:(l=Number(u.substring(l,d)),isNaN(l)?Gi:(d+=1,d+l>u.length?Xr:(u=u.slice(d,d+l),i.C=d+l,u)))}Gt.prototype.cancel=function(){this.J=!0,ie(this)};function jn(i){i.S=Date.now()+i.I,Wi(i,i.I)}function Wi(i,u){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Qe(w(i.ba,i),u)}function Zr(i){i.B&&(c.clearTimeout(i.B),i.B=null)}Gt.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(kc(this.i,this.A),this.L!=2&&(We(),wt(17)),ie(this),this.s=2,Xe(this)):Wi(this,this.S-i)};function Xe(i){i.j.G==0||i.J||To(i.j,i)}function ie(i){Zr(i);var u=i.M;u&&typeof u.ma=="function"&&u.ma(),i.M=null,xi(i.U),i.g&&(u=i.g,i.g=null,u.abort(),u.ma())}function ts(i,u){try{var l=i.j;if(l.G!=0&&(l.g==i||es(l.h,i))){if(!i.K&&es(l.h,i)&&l.G==3){try{var d=l.Da.g.parse(u)}catch{d=null}if(Array.isArray(d)&&d.length==3){var I=d;if(I[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<i.F)Jn(l),Yn(l);else break t;is(l),wt(18)}}else l.za=I[1],0<l.za-l.T&&37500>I[2]&&l.F&&l.v==0&&!l.C&&(l.C=Qe(w(l.Za,l),6e3));if(1>=Xi(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else ae(l,11)}else if((i.K||l.g==i)&&Jn(l),!W(u))for(I=l.Da.g.parse(u),u=0;u<I.length;u++){let H=I[u];if(l.T=H[0],H=H[1],l.G==2)if(H[0]=="c"){l.K=H[1],l.ia=H[2];const yt=H[3];yt!=null&&(l.la=yt,l.j.info("VER="+l.la));const Et=H[4];Et!=null&&(l.Aa=Et,l.j.info("SVER="+l.Aa));const Ie=H[5];Ie!=null&&typeof Ie=="number"&&0<Ie&&(d=1.5*Ie,l.L=d,l.j.info("backChannelRequestTimeoutMs_="+d)),d=l;const Dt=i.g;if(Dt){const tr=Dt.g?Dt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(tr){var R=d.h;R.g||tr.indexOf("spdy")==-1&&tr.indexOf("quic")==-1&&tr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(ns(R,R.h),R.h=null))}if(d.D){const as=Dt.g?Dt.g.getResponseHeader("X-HTTP-Session-Id"):null;as&&(d.ya=as,Z(d.I,d.D,as))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-i.F,l.j.info("Handshake RTT: "+l.R+"ms")),d=l;var D=i;if(d.qa=Ao(d,d.J?d.ia:null,d.W),D.K){Ji(d.h,D);var Y=D,lt=d.L;lt&&(Y.I=lt),Y.B&&(Zr(Y),jn(Y)),d.g=D}else Eo(d);0<l.i.length&&Xn(l)}else H[0]!="stop"&&H[0]!="close"||ae(l,7);else l.G==3&&(H[0]=="stop"||H[0]=="close"?H[0]=="stop"?ae(l,7):ss(l):H[0]!="noop"&&l.l&&l.l.ta(H),l.v=0)}}We(4)}catch{}}var Mc=class{constructor(i,u){this.g=i,this.map=u}};function Qi(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Yi(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Xi(i){return i.h?1:i.g?i.g.size:0}function es(i,u){return i.h?i.h==u:i.g?i.g.has(u):!1}function ns(i,u){i.g?i.g.add(u):i.h=u}function Ji(i,u){i.h&&i.h==u?i.h=null:i.g&&i.g.has(u)&&i.g.delete(u)}Qi.prototype.cancel=function(){if(this.i=Zi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Zi(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let u=i.i;for(const l of i.g.values())u=u.concat(l.D);return u}return k(i.i)}function xc(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var u=[],l=i.length,d=0;d<l;d++)u.push(i[d]);return u}u=[],l=0;for(d in i)u[l++]=i[d];return u}function Oc(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var u=[];i=i.length;for(var l=0;l<i;l++)u.push(l);return u}u=[],l=0;for(const d in i)u[l++]=d;return u}}}function to(i,u){if(i.forEach&&typeof i.forEach=="function")i.forEach(u,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,u,void 0);else for(var l=Oc(i),d=xc(i),I=d.length,R=0;R<I;R++)u.call(void 0,d[R],l&&l[R],i)}var eo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fc(i,u){if(i){i=i.split("&");for(var l=0;l<i.length;l++){var d=i[l].indexOf("="),I=null;if(0<=d){var R=i[l].substring(0,d);I=i[l].substring(d+1)}else R=i[l];u(R,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function oe(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof oe){this.h=i.h,zn(this,i.j),this.o=i.o,this.g=i.g,Gn(this,i.s),this.l=i.l;var u=i.i,l=new tn;l.i=u.i,u.g&&(l.g=new Map(u.g),l.h=u.h),no(this,l),this.m=i.m}else i&&(u=String(i).match(eo))?(this.h=!1,zn(this,u[1]||"",!0),this.o=Je(u[2]||""),this.g=Je(u[3]||"",!0),Gn(this,u[4]),this.l=Je(u[5]||"",!0),no(this,u[6]||"",!0),this.m=Je(u[7]||"")):(this.h=!1,this.i=new tn(null,this.h))}oe.prototype.toString=function(){var i=[],u=this.j;u&&i.push(Ze(u,ro,!0),":");var l=this.g;return(l||u=="file")&&(i.push("//"),(u=this.o)&&i.push(Ze(u,ro,!0),"@"),i.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&i.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(Ze(l,l.charAt(0)=="/"?qc:Uc,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",Ze(l,jc)),i.join("")};function Ft(i){return new oe(i)}function zn(i,u,l){i.j=l?Je(u,!0):u,i.j&&(i.j=i.j.replace(/:$/,""))}function Gn(i,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);i.s=u}else i.s=null}function no(i,u,l){u instanceof tn?(i.i=u,zc(i.i,i.h)):(l||(u=Ze(u,$c)),i.i=new tn(u,i.h))}function Z(i,u,l){i.i.set(u,l)}function Hn(i){return Z(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Je(i,u){return i?u?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Ze(i,u,l){return typeof i=="string"?(i=encodeURI(i).replace(u,Bc),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Bc(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var ro=/[#\/\?@]/g,Uc=/[#\?:]/g,qc=/[#\?]/g,$c=/[#\?@]/g,jc=/#/g;function tn(i,u){this.h=this.g=null,this.i=i||null,this.j=!!u}function Ht(i){i.g||(i.g=new Map,i.h=0,i.i&&Fc(i.i,function(u,l){i.add(decodeURIComponent(u.replace(/\+/g," ")),l)}))}n=tn.prototype,n.add=function(i,u){Ht(this),this.i=null,i=ve(this,i);var l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(u),this.h+=1,this};function so(i,u){Ht(i),u=ve(i,u),i.g.has(u)&&(i.i=null,i.h-=i.g.get(u).length,i.g.delete(u))}function io(i,u){return Ht(i),u=ve(i,u),i.g.has(u)}n.forEach=function(i,u){Ht(this),this.g.forEach(function(l,d){l.forEach(function(I){i.call(u,I,d,this)},this)},this)},n.na=function(){Ht(this);const i=Array.from(this.g.values()),u=Array.from(this.g.keys()),l=[];for(let d=0;d<u.length;d++){const I=i[d];for(let R=0;R<I.length;R++)l.push(u[d])}return l},n.V=function(i){Ht(this);let u=[];if(typeof i=="string")io(this,i)&&(u=u.concat(this.g.get(ve(this,i))));else{i=Array.from(this.g.values());for(let l=0;l<i.length;l++)u=u.concat(i[l])}return u},n.set=function(i,u){return Ht(this),this.i=null,i=ve(this,i),io(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[u]),this.h+=1,this},n.get=function(i,u){return i?(i=this.V(i),0<i.length?String(i[0]):u):u};function oo(i,u,l){so(i,u),0<l.length&&(i.i=null,i.g.set(ve(i,u),k(l)),i.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],u=Array.from(this.g.keys());for(var l=0;l<u.length;l++){var d=u[l];const R=encodeURIComponent(String(d)),D=this.V(d);for(d=0;d<D.length;d++){var I=R;D[d]!==""&&(I+="="+encodeURIComponent(String(D[d]))),i.push(I)}}return this.i=i.join("&")};function ve(i,u){return u=String(u),i.j&&(u=u.toLowerCase()),u}function zc(i,u){u&&!i.j&&(Ht(i),i.i=null,i.g.forEach(function(l,d){var I=d.toLowerCase();d!=I&&(so(this,d),oo(this,I,l))},i)),i.j=u}function Gc(i,u){const l=new Ye;if(c.Image){const d=new Image;d.onload=S(Kt,l,"TestLoadImage: loaded",!0,u,d),d.onerror=S(Kt,l,"TestLoadImage: error",!1,u,d),d.onabort=S(Kt,l,"TestLoadImage: abort",!1,u,d),d.ontimeout=S(Kt,l,"TestLoadImage: timeout",!1,u,d),c.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=i}else u(!1)}function Hc(i,u){const l=new Ye,d=new AbortController,I=setTimeout(()=>{d.abort(),Kt(l,"TestPingServer: timeout",!1,u)},1e4);fetch(i,{signal:d.signal}).then(R=>{clearTimeout(I),R.ok?Kt(l,"TestPingServer: ok",!0,u):Kt(l,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(I),Kt(l,"TestPingServer: error",!1,u)})}function Kt(i,u,l,d,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),d(l)}catch{}}function Kc(){this.g=new Vc}function Wc(i,u,l){const d=l||"";try{to(i,function(I,R){let D=I;f(I)&&(D=Hr(I)),u.push(d+R+"="+encodeURIComponent(D))})}catch(I){throw u.push(d+"type="+encodeURIComponent("_badmap")),I}}function Kn(i){this.l=i.Ub||null,this.j=i.eb||!1}C(Kn,Kr),Kn.prototype.g=function(){return new Wn(this.l,this.j)},Kn.prototype.i=function(i){return function(){return i}}({});function Wn(i,u){_t.call(this),this.D=i,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Wn,_t),n=Wn.prototype,n.open=function(i,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=u,this.readyState=1,nn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(u.body=i),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,en(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,nn(this)),this.g&&(this.readyState=3,nn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ao(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function ao(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var u=i.value?i.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!i.done}))&&(this.response=this.responseText+=u)}i.done?en(this):nn(this),this.readyState==3&&ao(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,en(this))},n.Qa=function(i){this.g&&(this.response=i,en(this))},n.ga=function(){this.g&&en(this)};function en(i){i.readyState=4,i.l=null,i.j=null,i.v=null,nn(i)}n.setRequestHeader=function(i,u){this.u.append(i,u)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],u=this.h.entries();for(var l=u.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=u.next();return i.join(`\r
`)};function nn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Wn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function uo(i){let u="";return ct(i,function(l,d){u+=d,u+=":",u+=l,u+=`\r
`}),u}function rs(i,u,l){t:{for(d in l){var d=!1;break t}d=!0}d||(l=uo(l),typeof i=="string"?l!=null&&encodeURIComponent(String(l)):Z(i,u,l))}function nt(i){_t.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(nt,_t);var Qc=/^https?$/i,Yc=["POST","PUT"];n=nt.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,u,l,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);u=u?u.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Yr.g(),this.v=this.o?Oi(this.o):Oi(Yr),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(u,String(i),!0),this.B=!1}catch(R){co(this,R);return}if(i=l||"",l=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var I in d)l.set(I,d[I]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const R of d.keys())l.set(R,d.get(R));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(l.keys()).find(R=>R.toLowerCase()=="content-type"),I=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Yc,u,void 0))||d||I||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,D]of l)this.g.setRequestHeader(R,D);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{fo(this),this.u=!0,this.g.send(i),this.u=!1}catch(R){co(this,R)}};function co(i,u){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=u,i.m=5,lo(i),Qn(i)}function lo(i){i.A||(i.A=!0,It(i,"complete"),It(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,It(this,"complete"),It(this,"abort"),Qn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Qn(this,!0)),nt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ho(this):this.bb())},n.bb=function(){ho(this)};function ho(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Bt(i)!=4||i.Z()!=2)){if(i.u&&Bt(i)==4)Ni(i.Ea,0,i);else if(It(i,"readystatechange"),Bt(i)==4){i.h=!1;try{const D=i.Z();t:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var l;if(!(l=u)){var d;if(d=D===0){var I=String(i.D).match(eo)[1]||null;!I&&c.self&&c.self.location&&(I=c.self.location.protocol.slice(0,-1)),d=!Qc.test(I?I.toLowerCase():"")}l=d}if(l)It(i,"complete"),It(i,"success");else{i.m=6;try{var R=2<Bt(i)?i.g.statusText:""}catch{R=""}i.l=R+" ["+i.Z()+"]",lo(i)}}finally{Qn(i)}}}}function Qn(i,u){if(i.g){fo(i);const l=i.g,d=i.v[0]?()=>{}:null;i.g=null,i.v=null,u||It(i,"ready");try{l.onreadystatechange=d}catch{}}}function fo(i){i.I&&(c.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Bt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Bt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var u=this.g.responseText;return i&&u.indexOf(i)==0&&(u=u.substring(i.length)),bc(u)}};function mo(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Xc(i){const u={};i=(i.g&&2<=Bt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<i.length;d++){if(W(i[d]))continue;var l=v(i[d]);const I=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const R=u[I]||[];u[I]=R,R.push(l)}T(u,function(d){return d.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function rn(i,u,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||u}function po(i){this.Aa=0,this.i=[],this.j=new Ye,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=rn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=rn("baseRetryDelayMs",5e3,i),this.cb=rn("retryDelaySeedMs",1e4,i),this.Wa=rn("forwardChannelMaxRetries",2,i),this.wa=rn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Qi(i&&i.concurrentRequestLimit),this.Da=new Kc,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=po.prototype,n.la=8,n.G=1,n.connect=function(i,u,l,d){wt(0),this.W=i,this.H=u||{},l&&d!==void 0&&(this.H.OSID=l,this.H.OAID=d),this.F=this.X,this.I=Ao(this,null,this.W),Xn(this)};function ss(i){if(go(i),i.G==3){var u=i.U++,l=Ft(i.I);if(Z(l,"SID",i.K),Z(l,"RID",u),Z(l,"TYPE","terminate"),sn(i,l),u=new Gt(i,i.j,u),u.L=2,u.v=Hn(Ft(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=u.v,l=!0),l||(u.g=Ro(u.j,null),u.g.ea(u.v)),u.F=Date.now(),jn(u)}wo(i)}function Yn(i){i.g&&(os(i),i.g.cancel(),i.g=null)}function go(i){Yn(i),i.u&&(c.clearTimeout(i.u),i.u=null),Jn(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function Xn(i){if(!Yi(i.h)&&!i.s){i.s=!0;var u=i.Ga;je||bi(),ze||(je(),ze=!0),Fr.add(u,i),i.B=0}}function Jc(i,u){return Xi(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=u.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Qe(w(i.Ga,i,u),Io(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const I=new Gt(this,this.j,i);let R=this.o;if(this.S&&(R?(R=p(R),y(R,this.S)):R=this.S),this.m!==null||this.O||(I.H=R,R=null),this.P)t:{for(var u=0,l=0;l<this.i.length;l++){e:{var d=this.i[l];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(u+=d,4096<u){u=l;break t}if(u===4096||l===this.i.length-1){u=l+1;break t}}u=1e3}else u=1e3;u=yo(this,I,u),l=Ft(this.I),Z(l,"RID",i),Z(l,"CVER",22),this.D&&Z(l,"X-HTTP-Session-Id",this.D),sn(this,l),R&&(this.O?u="headers="+encodeURIComponent(String(uo(R)))+"&"+u:this.m&&rs(l,this.m,R)),ns(this.h,I),this.Ua&&Z(l,"TYPE","init"),this.P?(Z(l,"$req",u),Z(l,"SID","null"),I.T=!0,Jr(I,l,null)):Jr(I,l,u),this.G=2}}else this.G==3&&(i?_o(this,i):this.i.length==0||Yi(this.h)||_o(this))};function _o(i,u){var l;u?l=u.l:l=i.U++;const d=Ft(i.I);Z(d,"SID",i.K),Z(d,"RID",l),Z(d,"AID",i.T),sn(i,d),i.m&&i.o&&rs(d,i.m,i.o),l=new Gt(i,i.j,l,i.B+1),i.m===null&&(l.H=i.o),u&&(i.i=u.D.concat(i.i)),u=yo(i,l,1e3),l.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),ns(i.h,l),Jr(l,d,u)}function sn(i,u){i.H&&ct(i.H,function(l,d){Z(u,d,l)}),i.l&&to({},function(l,d){Z(u,d,l)})}function yo(i,u,l){l=Math.min(i.i.length,l);var d=i.l?w(i.l.Na,i.l,i):null;t:{var I=i.i;let R=-1;for(;;){const D=["count="+l];R==-1?0<l?(R=I[0].g,D.push("ofs="+R)):R=0:D.push("ofs="+R);let Y=!0;for(let lt=0;lt<l;lt++){let H=I[lt].g;const yt=I[lt].map;if(H-=R,0>H)R=Math.max(0,I[lt].g-100),Y=!1;else try{Wc(yt,D,"req"+H+"_")}catch{d&&d(yt)}}if(Y){d=D.join("&");break t}}}return i=i.i.splice(0,l),u.D=i,d}function Eo(i){if(!i.g&&!i.u){i.Y=1;var u=i.Fa;je||bi(),ze||(je(),ze=!0),Fr.add(u,i),i.v=0}}function is(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Qe(w(i.Fa,i),Io(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,vo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Qe(w(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,wt(10),Yn(this),vo(this))};function os(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function vo(i){i.g=new Gt(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var u=Ft(i.qa);Z(u,"RID","rpc"),Z(u,"SID",i.K),Z(u,"AID",i.T),Z(u,"CI",i.F?"0":"1"),!i.F&&i.ja&&Z(u,"TO",i.ja),Z(u,"TYPE","xmlhttp"),sn(i,u),i.m&&i.o&&rs(u,i.m,i.o),i.L&&(i.g.I=i.L);var l=i.g;i=i.ia,l.L=1,l.v=Hn(Ft(u)),l.m=null,l.P=!0,Hi(l,i)}n.Za=function(){this.C!=null&&(this.C=null,Yn(this),is(this),wt(19))};function Jn(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function To(i,u){var l=null;if(i.g==u){Jn(i),os(i),i.g=null;var d=2}else if(es(i.h,u))l=u.D,Ji(i.h,u),d=1;else return;if(i.G!=0){if(u.o)if(d==1){l=u.m?u.m.length:0,u=Date.now()-u.F;var I=i.B;d=Un(),It(d,new $i(d,l)),Xn(i)}else Eo(i);else if(I=u.s,I==3||I==0&&0<u.X||!(d==1&&Jc(i,u)||d==2&&is(i)))switch(l&&0<l.length&&(u=i.h,u.i=u.i.concat(l)),I){case 1:ae(i,5);break;case 4:ae(i,10);break;case 3:ae(i,6);break;default:ae(i,2)}}}function Io(i,u){let l=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(l*=2),l*u}function ae(i,u){if(i.j.info("Error code "+u),u==2){var l=w(i.fb,i),d=i.Xa;const I=!d;d=new oe(d||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||zn(d,"https"),Hn(d),I?Gc(d.toString(),l):Hc(d.toString(),l)}else wt(2);i.G=0,i.l&&i.l.sa(u),wo(i),go(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),wt(2)):(this.j.info("Failed to ping google.com"),wt(1))};function wo(i){if(i.G=0,i.ka=[],i.l){const u=Zi(i.h);(u.length!=0||i.i.length!=0)&&(V(i.ka,u),V(i.ka,i.i),i.h.i.length=0,k(i.i),i.i.length=0),i.l.ra()}}function Ao(i,u,l){var d=l instanceof oe?Ft(l):new oe(l);if(d.g!="")u&&(d.g=u+"."+d.g),Gn(d,d.s);else{var I=c.location;d=I.protocol,u=u?u+"."+I.hostname:I.hostname,I=+I.port;var R=new oe(null);d&&zn(R,d),u&&(R.g=u),I&&Gn(R,I),l&&(R.l=l),d=R}return l=i.D,u=i.ya,l&&u&&Z(d,l,u),Z(d,"VER",i.la),sn(i,d),d}function Ro(i,u,l){if(u&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=i.Ca&&!i.pa?new nt(new Kn({eb:l})):new nt(i.pa),u.Ha(i.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function So(){}n=So.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Zn(){}Zn.prototype.g=function(i,u){return new St(i,u)};function St(i,u){_t.call(this),this.g=new po(u),this.l=i,this.h=u&&u.messageUrlParams||null,i=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(i?i["X-WebChannel-Content-Type"]=u.messageContentType:i={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(i?i["X-WebChannel-Client-Profile"]=u.va:i={"X-WebChannel-Client-Profile":u.va}),this.g.S=i,(i=u&&u.Sb)&&!W(i)&&(this.g.m=i),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!W(u)&&(this.g.D=u,i=this.h,i!==null&&u in i&&(i=this.h,u in i&&delete i[u])),this.j=new Te(this)}C(St,_t),St.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){ss(this.g)},St.prototype.o=function(i){var u=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.u&&(l={},l.__data__=Hr(i),i=l);u.i.push(new Mc(u.Ya++,i)),u.G==3&&Xn(u)},St.prototype.N=function(){this.g.l=null,delete this.j,ss(this.g),delete this.g,St.aa.N.call(this)};function Po(i){Wr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var u=i.__sm__;if(u){t:{for(const l in u){i=l;break t}i=void 0}(this.i=i)&&(i=this.i,u=u!==null&&i in u?u[i]:void 0),this.data=u}else this.data=i}C(Po,Wr);function bo(){Qr.call(this),this.status=1}C(bo,Qr);function Te(i){this.g=i}C(Te,So),Te.prototype.ua=function(){It(this.g,"a")},Te.prototype.ta=function(i){It(this.g,new Po(i))},Te.prototype.sa=function(i){It(this.g,new bo)},Te.prototype.ra=function(){It(this.g,"b")},Zn.prototype.createWebChannel=Zn.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,za=function(){return new Zn},ja=function(){return Un()},$a=se,ws={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},qn.NO_ERROR=0,qn.TIMEOUT=8,qn.HTTP_ERROR=6,ir=qn,ji.COMPLETE="complete",qa=ji,Fi.EventType=Ke,Ke.OPEN="a",Ke.CLOSE="b",Ke.ERROR="c",Ke.MESSAGE="d",_t.prototype.listen=_t.prototype.K,an=Fi,nt.prototype.listenOnce=nt.prototype.L,nt.prototype.getLastError=nt.prototype.Ka,nt.prototype.getLastErrorCode=nt.prototype.Ba,nt.prototype.getStatus=nt.prototype.Z,nt.prototype.getResponseJson=nt.prototype.Oa,nt.prototype.getResponseText=nt.prototype.oa,nt.prototype.send=nt.prototype.ea,nt.prototype.setWithCredentials=nt.prototype.Ha,Ua=nt}).apply(typeof er<"u"?er:typeof self<"u"?self:typeof window<"u"?window:{});const Uo="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Tt.UNAUTHENTICATED=new Tt(null),Tt.GOOGLE_CREDENTIALS=new Tt("google-credentials-uid"),Tt.FIRST_PARTY=new Tt("first-party-uid"),Tt.MOCK_USER=new Tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fe="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const de=new Na("@firebase/firestore");function on(){return de.logLevel}function L(n,...t){if(de.logLevel<=z.DEBUG){const e=t.map(qs);de.debug(`Firestore (${Fe}): ${n}`,...e)}}function $t(n,...t){if(de.logLevel<=z.ERROR){const e=t.map(qs);de.error(`Firestore (${Fe}): ${n}`,...e)}}function De(n,...t){if(de.logLevel<=z.WARN){const e=t.map(qs);de.warn(`Firestore (${Fe}): ${n}`,...e)}}function qs(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(n="Unexpected state"){const t=`FIRESTORE (${Fe}) INTERNAL ASSERTION FAILED: `+n;throw $t(t),new Error(t)}function G(n,t){n||O()}function B(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends Oe{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Dh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Tt.UNAUTHENTICATED))}shutdown(){}}class kh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Nh{constructor(t){this.t=t,this.currentUser=Tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){G(this.o===void 0);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new Ut;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Ut,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},c=h=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Ut)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(G(typeof r.accessToken=="string"),new Ga(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return G(t===null||typeof t=="string"),new Tt(t)}}class Lh{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=Tt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Mh{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Lh(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Oh{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){G(this.o===void 0);const r=o=>{o.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,L("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(G(typeof e.token=="string"),this.R=e.token,new xh(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=Fh(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%t.length))}return r}}function K(n,t){return n<t?-1:n>t?1:0}function ke(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ot.fromMillis(Date.now())}static fromDate(t){return ot.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new ot(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?K(this.nanoseconds,t.nanoseconds):K(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t){this.timestamp=t}static fromTimestamp(t){return new F(t)}static min(){return new F(new ot(0,0))}static max(){return new F(new ot(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(t,e,r){e===void 0?e=0:e>t.length&&O(),r===void 0?r=t.length-e:r>t.length-e&&O(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return En.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof En?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=t.get(s),a=e.get(s);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class X extends En{construct(t,e,r){return new X(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new N(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new X(e)}static emptyPath(){return new X([])}}const Bh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dt extends En{construct(t,e,r){return new dt(t,e,r)}static isValidIdentifier(t){return Bh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new dt(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new N(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new N(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new N(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(o(),s++)}if(o(),a)throw new N(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new dt(e)}static emptyPath(){return new dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(t){this.path=t}static fromPath(t){return new x(X.fromString(t))}static fromName(t){return new x(X.fromString(t).popFirst(5))}static empty(){return new x(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&X.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return X.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new x(new X(t.slice()))}}function Uh(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=F.fromTimestamp(r===1e9?new ot(e+1,0):new ot(e,r));return new Zt(s,x.empty(),t)}function qh(n){return new Zt(n.readTime,n.key,-1)}class Zt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Zt(F.min(),x.empty(),-1)}static max(){return new Zt(F.max(),x.empty(),-1)}}function $h(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=x.comparator(n.documentKey,t.documentKey),e!==0?e:K(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sn(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==jh)throw n;L("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new b((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof b?e:b.resolve(e)}catch(e){return b.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):b.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):b.reject(e)}static resolve(t){return new b((e,r)=>{e(t)})}static reject(t){return new b((e,r)=>{r(t)})}static waitFor(t){return new b((e,r)=>{let s=0,o=0,a=!1;t.forEach(c=>{++s,c.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=b.resolve(!1);for(const r of t)e=e.next(s=>s?b.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new b((r,s)=>{const o=t.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(m=>{a[f]=m,++c,c===o&&r(a)},m=>s(m))}})}static doWhile(t,e){return new b((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function Gh(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Pn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}$s.oe=-1;function bn(n){return n==null}function fr(n){return n===0&&1/n==-1/0}function Hh(n){return typeof n=="number"&&Number.isInteger(n)&&!fr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function _e(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Ka(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t,e){this.comparator=t,this.root=e||ht.EMPTY}insert(t,e){return new et(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ht.BLACK,null,null))}remove(t){return new et(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ht.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new nr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new nr(this.root,t,this.comparator,!1)}getReverseIterator(){return new nr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new nr(this.root,t,this.comparator,!0)}}class nr{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ht{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??ht.RED,this.left=s??ht.EMPTY,this.right=o??ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new ht(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ht.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return ht.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw O();const t=this.left.check();if(t!==this.right.check())throw O();return t+(this.isRed()?0:1)}}ht.EMPTY=null,ht.RED=!0,ht.BLACK=!1;ht.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(t,e,r,s,o){return this}insert(t,e,r){return new ht(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t){this.comparator=t,this.data=new et(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new $o(this.data.getIterator())}getIteratorFrom(t){return new $o(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof mt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new mt(this.comparator);return e.data=t,e}}class $o{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t){this.fields=t,t.sort(dt.comparator)}static empty(){return new Pt([])}unionWith(t){let e=new mt(dt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Pt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ke(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Wa("Invalid base64 string: "+o):o}}(t);return new pt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new pt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return K(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const Kh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function te(n){if(G(!!n),typeof n=="string"){let t=0;const e=Kh.exec(n);if(G(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:rt(n.seconds),nanos:rt(n.nanos)}}function rt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function fe(n){return typeof n=="string"?pt.fromBase64String(n):pt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function js(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function zs(n){const t=n.mapValue.fields.__previous_value__;return js(t)?zs(t):t}function vn(n){const t=te(n.mapValue.fields.__local_write_time__.timestampValue);return new ot(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(t,e,r,s,o,a,c,h,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=f}}class Tn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Tn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Tn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr={mapValue:{}};function me(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?js(n)?4:Yh(n)?9007199254740991:Qh(n)?10:11:O()}function Mt(n,t){if(n===t)return!0;const e=me(n);if(e!==me(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return vn(n).isEqual(vn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=te(s.timestampValue),c=te(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return fe(s.bytesValue).isEqual(fe(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return rt(s.geoPointValue.latitude)===rt(o.geoPointValue.latitude)&&rt(s.geoPointValue.longitude)===rt(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return rt(s.integerValue)===rt(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=rt(s.doubleValue),c=rt(o.doubleValue);return a===c?fr(a)===fr(c):isNaN(a)&&isNaN(c)}return!1}(n,t);case 9:return ke(n.arrayValue.values||[],t.arrayValue.values||[],Mt);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},c=o.mapValue.fields||{};if(qo(a)!==qo(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!Mt(a[h],c[h])))return!1;return!0}(n,t);default:return O()}}function In(n,t){return(n.values||[]).find(e=>Mt(e,t))!==void 0}function Ne(n,t){if(n===t)return 0;const e=me(n),r=me(t);if(e!==r)return K(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return K(n.booleanValue,t.booleanValue);case 2:return function(o,a){const c=rt(o.integerValue||o.doubleValue),h=rt(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(n,t);case 3:return jo(n.timestampValue,t.timestampValue);case 4:return jo(vn(n),vn(t));case 5:return K(n.stringValue,t.stringValue);case 6:return function(o,a){const c=fe(o),h=fe(a);return c.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const c=o.split("/"),h=a.split("/");for(let f=0;f<c.length&&f<h.length;f++){const m=K(c[f],h[f]);if(m!==0)return m}return K(c.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const c=K(rt(o.latitude),rt(a.latitude));return c!==0?c:K(rt(o.longitude),rt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return zo(n.arrayValue,t.arrayValue);case 10:return function(o,a){var c,h,f,m;const E=o.fields||{},w=a.fields||{},S=(c=E.value)===null||c===void 0?void 0:c.arrayValue,C=(h=w.value)===null||h===void 0?void 0:h.arrayValue,k=K(((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0,((m=C==null?void 0:C.values)===null||m===void 0?void 0:m.length)||0);return k!==0?k:zo(S,C)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===rr.mapValue&&a===rr.mapValue)return 0;if(o===rr.mapValue)return 1;if(a===rr.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),f=a.fields||{},m=Object.keys(f);h.sort(),m.sort();for(let E=0;E<h.length&&E<m.length;++E){const w=K(h[E],m[E]);if(w!==0)return w;const S=Ne(c[h[E]],f[m[E]]);if(S!==0)return S}return K(h.length,m.length)}(n.mapValue,t.mapValue);default:throw O()}}function jo(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return K(n,t);const e=te(n),r=te(t),s=K(e.seconds,r.seconds);return s!==0?s:K(e.nanos,r.nanos)}function zo(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=Ne(e[s],r[s]);if(o)return o}return K(e.length,r.length)}function Le(n){return As(n)}function As(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=te(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return fe(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return x.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=As(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${As(e.fields[a])}`;return s+"}"}(n.mapValue):O()}function Go(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Rs(n){return!!n&&"integerValue"in n}function Gs(n){return!!n&&"arrayValue"in n}function Ho(n){return!!n&&"nullValue"in n}function Ko(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function or(n){return!!n&&"mapValue"in n}function Qh(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function hn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return _e(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=hn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=hn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Yh(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this.value=t}static empty(){return new At({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!or(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=hn(e)}setAll(t){let e=dt.emptyPath(),r={},s=[];t.forEach((a,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=c.popLast()}a?r[c.lastSegment()]=hn(a):s.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());or(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Mt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];or(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){_e(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new At(hn(this.value))}}function Qa(n){const t=[];return _e(n.fields,(e,r)=>{const s=new dt([e]);if(or(r)){const o=Qa(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new Pt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t,e,r,s,o,a,c){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(t){return new ut(t,0,F.min(),F.min(),F.min(),At.empty(),0)}static newFoundDocument(t,e,r,s){return new ut(t,1,e,F.min(),r,s,0)}static newNoDocument(t,e){return new ut(t,2,e,F.min(),F.min(),At.empty(),0)}static newUnknownDocument(t,e){return new ut(t,3,e,F.min(),F.min(),At.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ut&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(t,e){this.position=t,this.inclusive=e}}function Wo(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=x.comparator(x.fromName(a.referenceValue),e.key):r=Ne(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Qo(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Mt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Xh(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{}class it extends Ya{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Zh(t,e,r):e==="array-contains"?new nd(t,r):e==="in"?new rd(t,r):e==="not-in"?new sd(t,r):e==="array-contains-any"?new id(t,r):new it(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new td(t,r):new ed(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Ne(e,this.value)):e!==null&&me(this.value)===me(e)&&this.matchesComparison(Ne(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class kt extends Ya{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new kt(t,e)}matches(t){return Xa(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Xa(n){return n.op==="and"}function Ja(n){return Jh(n)&&Xa(n)}function Jh(n){for(const t of n.filters)if(t instanceof kt)return!1;return!0}function Ss(n){if(n instanceof it)return n.field.canonicalString()+n.op.toString()+Le(n.value);if(Ja(n))return n.filters.map(t=>Ss(t)).join(",");{const t=n.filters.map(e=>Ss(e)).join(",");return`${n.op}(${t})`}}function Za(n,t){return n instanceof it?function(r,s){return s instanceof it&&r.op===s.op&&r.field.isEqual(s.field)&&Mt(r.value,s.value)}(n,t):n instanceof kt?function(r,s){return s instanceof kt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,c)=>o&&Za(a,s.filters[c]),!0):!1}(n,t):void O()}function tu(n){return n instanceof it?function(e){return`${e.field.canonicalString()} ${e.op} ${Le(e.value)}`}(n):n instanceof kt?function(e){return e.op.toString()+" {"+e.getFilters().map(tu).join(" ,")+"}"}(n):"Filter"}class Zh extends it{constructor(t,e,r){super(t,e,r),this.key=x.fromName(r.referenceValue)}matches(t){const e=x.comparator(t.key,this.key);return this.matchesComparison(e)}}class td extends it{constructor(t,e){super(t,"in",e),this.keys=eu("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class ed extends it{constructor(t,e){super(t,"not-in",e),this.keys=eu("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function eu(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>x.fromName(r.referenceValue))}class nd extends it{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Gs(e)&&In(e.arrayValue,this.value)}}class rd extends it{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&In(this.value.arrayValue,e)}}class sd extends it{constructor(t,e){super(t,"not-in",e)}matches(t){if(In(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!In(this.value.arrayValue,e)}}class id extends it{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Gs(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>In(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(t,e=null,r=[],s=[],o=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=c,this.ue=null}}function Yo(n,t=null,e=[],r=[],s=null,o=null,a=null){return new od(n,t,e,r,s,o,a)}function Hs(n){const t=B(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Ss(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),bn(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Le(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Le(r)).join(",")),t.ue=e}return t.ue}function Ks(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Xh(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Za(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Qo(n.startAt,t.startAt)&&Qo(n.endAt,t.endAt)}function Ps(n){return x.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(t,e=null,r=[],s=[],o=null,a="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ad(n,t,e,r,s,o,a,c){return new Be(n,t,e,r,s,o,a,c)}function Ws(n){return new Be(n)}function Xo(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function nu(n){return n.collectionGroup!==null}function dn(n){const t=B(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new mt(dt.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new wn(o,r))}),e.has(dt.keyField().canonicalString())||t.ce.push(new wn(dt.keyField(),r))}return t.ce}function Nt(n){const t=B(n);return t.le||(t.le=ud(t,dn(n))),t.le}function ud(n,t){if(n.limitType==="F")return Yo(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new wn(s.field,o)});const e=n.endAt?new mr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new mr(n.startAt.position,n.startAt.inclusive):null;return Yo(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function bs(n,t){const e=n.filters.concat([t]);return new Be(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Vs(n,t,e){return new Be(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Ar(n,t){return Ks(Nt(n),Nt(t))&&n.limitType===t.limitType}function ru(n){return`${Hs(Nt(n))}|lt:${n.limitType}`}function Ae(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>tu(s)).join(", ")}]`),bn(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>Le(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>Le(s)).join(",")),`Target(${r})`}(Nt(n))}; limitType=${n.limitType})`}function Rr(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):x.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of dn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,c,h){const f=Wo(a,c,h);return a.inclusive?f<=0:f<0}(r.startAt,dn(r),s)||r.endAt&&!function(a,c,h){const f=Wo(a,c,h);return a.inclusive?f>=0:f>0}(r.endAt,dn(r),s))}(n,t)}function cd(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function su(n){return(t,e)=>{let r=!1;for(const s of dn(n)){const o=ld(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function ld(n,t,e){const r=n.field.isKeyField()?x.comparator(t.key,e.key):function(o,a,c){const h=a.data.field(o),f=c.data.field(o);return h!==null&&f!==null?Ne(h,f):O()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return O()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){_e(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return Ka(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd=new et(x.comparator);function jt(){return hd}const iu=new et(x.comparator);function un(...n){let t=iu;for(const e of n)t=t.insert(e.key,e);return t}function ou(n){let t=iu;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function le(){return fn()}function au(){return fn()}function fn(){return new Ue(n=>n.toString(),(n,t)=>n.isEqual(t))}const dd=new et(x.comparator),fd=new mt(x.comparator);function q(...n){let t=fd;for(const e of n)t=t.add(e);return t}const md=new mt(K);function pd(){return md}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fr(t)?"-0":t}}function uu(n){return{integerValue:""+n}}function gd(n,t){return Hh(t)?uu(t):Qs(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(){this._=void 0}}function _d(n,t,e){return n instanceof pr?function(s,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&js(o)&&(o=zs(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):n instanceof An?lu(n,t):n instanceof Rn?hu(n,t):function(s,o){const a=cu(s,o),c=Jo(a)+Jo(s.Pe);return Rs(a)&&Rs(s.Pe)?uu(c):Qs(s.serializer,c)}(n,t)}function yd(n,t,e){return n instanceof An?lu(n,t):n instanceof Rn?hu(n,t):e}function cu(n,t){return n instanceof gr?function(r){return Rs(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class pr extends Sr{}class An extends Sr{constructor(t){super(),this.elements=t}}function lu(n,t){const e=du(t);for(const r of n.elements)e.some(s=>Mt(s,r))||e.push(r);return{arrayValue:{values:e}}}class Rn extends Sr{constructor(t){super(),this.elements=t}}function hu(n,t){let e=du(t);for(const r of n.elements)e=e.filter(s=>!Mt(s,r));return{arrayValue:{values:e}}}class gr extends Sr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Jo(n){return rt(n.integerValue||n.doubleValue)}function du(n){return Gs(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Ed(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof An&&s instanceof An||r instanceof Rn&&s instanceof Rn?ke(r.elements,s.elements,Mt):r instanceof gr&&s instanceof gr?Mt(r.Pe,s.Pe):r instanceof pr&&s instanceof pr}(n.transform,t.transform)}class vd{constructor(t,e){this.version=t,this.transformResults=e}}class ft{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ft}static exists(t){return new ft(void 0,t)}static updateTime(t){return new ft(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ar(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Pr{}function fu(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new br(n.key,ft.none()):new Vn(n.key,n.data,ft.none());{const e=n.data,r=At.empty();let s=new mt(dt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new ne(n.key,r,new Pt(s.toArray()),ft.none())}}function Td(n,t,e){n instanceof Vn?function(s,o,a){const c=s.value.clone(),h=ta(s.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,t,e):n instanceof ne?function(s,o,a){if(!ar(s.precondition,o))return void o.convertToUnknownDocument(a.version);const c=ta(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(mu(s)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function mn(n,t,e,r){return n instanceof Vn?function(o,a,c,h){if(!ar(o.precondition,a))return c;const f=o.value.clone(),m=ea(o.fieldTransforms,h,a);return f.setAll(m),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof ne?function(o,a,c,h){if(!ar(o.precondition,a))return c;const f=ea(o.fieldTransforms,h,a),m=a.data;return m.setAll(mu(o)),m.setAll(f),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(E=>E.field))}(n,t,e,r):function(o,a,c){return ar(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,t,e)}function Id(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=cu(r.transform,s||null);o!=null&&(e===null&&(e=At.empty()),e.set(r.field,o))}return e||null}function Zo(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ke(r,s,(o,a)=>Ed(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Vn extends Pr{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ne extends Pr{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function mu(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function ta(n,t,e){const r=new Map;G(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,c=t.data.field(o.field);r.set(o.field,yd(a,c,e[s]))}return r}function ea(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,_d(o,a,t))}return r}class br extends Pr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class pu extends Pr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Td(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=mn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=mn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=au();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=e.has(s.key)?null:c;const h=fu(a,c);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(F.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),q())}isEqual(t){return this.batchId===t.batchId&&ke(this.mutations,t.mutations,(e,r)=>Zo(e,r))&&ke(this.baseMutations,t.baseMutations,(e,r)=>Zo(e,r))}}class Ys{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){G(t.mutations.length===r.length);let s=function(){return dd}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new Ys(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var st,j;function gu(n){switch(n){default:return O();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function _u(n){if(n===void 0)return $t("GRPC error has no .code"),P.UNKNOWN;switch(n){case st.OK:return P.OK;case st.CANCELLED:return P.CANCELLED;case st.UNKNOWN:return P.UNKNOWN;case st.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case st.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case st.INTERNAL:return P.INTERNAL;case st.UNAVAILABLE:return P.UNAVAILABLE;case st.UNAUTHENTICATED:return P.UNAUTHENTICATED;case st.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case st.NOT_FOUND:return P.NOT_FOUND;case st.ALREADY_EXISTS:return P.ALREADY_EXISTS;case st.PERMISSION_DENIED:return P.PERMISSION_DENIED;case st.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case st.ABORTED:return P.ABORTED;case st.OUT_OF_RANGE:return P.OUT_OF_RANGE;case st.UNIMPLEMENTED:return P.UNIMPLEMENTED;case st.DATA_LOSS:return P.DATA_LOSS;default:return O()}}(j=st||(st={}))[j.OK=0]="OK",j[j.CANCELLED=1]="CANCELLED",j[j.UNKNOWN=2]="UNKNOWN",j[j.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",j[j.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",j[j.NOT_FOUND=5]="NOT_FOUND",j[j.ALREADY_EXISTS=6]="ALREADY_EXISTS",j[j.PERMISSION_DENIED=7]="PERMISSION_DENIED",j[j.UNAUTHENTICATED=16]="UNAUTHENTICATED",j[j.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",j[j.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",j[j.ABORTED=10]="ABORTED",j[j.OUT_OF_RANGE=11]="OUT_OF_RANGE",j[j.UNIMPLEMENTED=12]="UNIMPLEMENTED",j[j.INTERNAL=13]="INTERNAL",j[j.UNAVAILABLE=14]="UNAVAILABLE",j[j.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd=new he([4294967295,4294967295],0);function na(n){const t=Sd().encode(n),e=new Ba;return e.update(t),new Uint8Array(e.digest())}function ra(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new he([e,r],0),new he([s,o],0)]}class Xs{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new cn(`Invalid padding: ${e}`);if(r<0)throw new cn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new cn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new cn(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=he.fromNumber(this.Ie)}Ee(t,e,r){let s=t.add(e.multiply(he.fromNumber(r)));return s.compare(Pd)===1&&(s=new he([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=na(t),[r,s]=ra(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);if(!this.de(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Xs(o,s,e);return r.forEach(c=>a.insert(c)),a}insert(t){if(this.Ie===0)return;const e=na(t),[r,s]=ra(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class cn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,Cn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Vr(F.min(),s,new et(K),jt(),q())}}class Cn{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Cn(r,e,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(t,e,r,s){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=s}}class yu{constructor(t,e){this.targetId=t,this.me=e}}class Eu{constructor(t,e,r=pt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class sa{constructor(){this.fe=0,this.ge=oa(),this.pe=pt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=q(),e=q(),r=q();return this.ge.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:O()}}),new Cn(this.pe,this.ye,t,e,r)}Ce(){this.we=!1,this.ge=oa()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,G(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class bd{constructor(t){this.Le=t,this.Be=new Map,this.ke=jt(),this.qe=ia(),this.Qe=new et(K)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:O()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,r=t.me.count,s=this.Je(e);if(s){const o=s.target;if(Ps(o))if(r===0){const a=new x(o.path);this.Ue(e,a,ut.newNoDocument(a,F.min()))}else G(r===1);else{const a=this.Ye(e);if(a!==r){const c=this.Ze(t),h=c?this.Xe(c,t,a):1;if(h!==0){this.je(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,f)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,c;try{a=fe(r).toUint8Array()}catch(h){if(h instanceof Wa)return De("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new Xs(a,s,o)}catch(h){return De(h instanceof cn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.Ie===0?null:c}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.Ue(e,o,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((o,a)=>{const c=this.Je(a);if(c){if(o.current&&Ps(c.target)){const h=new x(c.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,ut.newNoDocument(h,t))}o.be&&(e.set(a,o.ve()),o.Ce())}});let r=q();this.qe.forEach((o,a)=>{let c=!0;a.forEachWhile(h=>{const f=this.Je(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const s=new Vr(t,e,this.Qe,this.ke,r);return this.ke=jt(),this.qe=ia(),this.Qe=new et(K),s}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new sa,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new mt(K),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||L("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new sa),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function ia(){return new et(x.comparator)}function oa(){return new et(x.comparator)}const Vd={asc:"ASCENDING",desc:"DESCENDING"},Cd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Dd={and:"AND",or:"OR"};class kd{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Cs(n,t){return n.useProto3Json||bn(t)?t:{value:t}}function _r(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function vu(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Nd(n,t){return _r(n,t.toTimestamp())}function bt(n){return G(!!n),F.fromTimestamp(function(e){const r=te(e);return new ot(r.seconds,r.nanos)}(n))}function Js(n,t){return Ds(n,t).canonicalString()}function Ds(n,t){const e=function(s){return new X(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Tu(n){const t=X.fromString(n);return G(Pu(t)),t}function yr(n,t){return Js(n.databaseId,t.path)}function pn(n,t){const e=Tu(t);if(e.get(1)!==n.databaseId.projectId)throw new N(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new N(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new x(wu(e))}function Iu(n,t){return Js(n.databaseId,t)}function Ld(n){const t=Tu(n);return t.length===4?X.emptyPath():wu(t)}function ks(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function wu(n){return G(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function aa(n,t,e){return{name:yr(n,t),fields:e.value.mapValue.fields}}function Md(n,t){return"found"in t?function(r,s){G(!!s.found),s.found.name,s.found.updateTime;const o=pn(r,s.found.name),a=bt(s.found.updateTime),c=s.found.createTime?bt(s.found.createTime):F.min(),h=new At({mapValue:{fields:s.found.fields}});return ut.newFoundDocument(o,a,c,h)}(n,t):"missing"in t?function(r,s){G(!!s.missing),G(!!s.readTime);const o=pn(r,s.missing),a=bt(s.readTime);return ut.newNoDocument(o,a)}(n,t):O()}function xd(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:O()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(f,m){return f.useProto3Json?(G(m===void 0||typeof m=="string"),pt.fromBase64String(m||"")):(G(m===void 0||m instanceof Buffer||m instanceof Uint8Array),pt.fromUint8Array(m||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(f){const m=f.code===void 0?P.UNKNOWN:_u(f.code);return new N(m,f.message||"")}(a);e=new Eu(r,s,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=pn(n,r.document.name),o=bt(r.document.updateTime),a=r.document.createTime?bt(r.document.createTime):F.min(),c=new At({mapValue:{fields:r.document.fields}}),h=ut.newFoundDocument(s,o,a,c),f=r.targetIds||[],m=r.removedTargetIds||[];e=new ur(f,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=pn(n,r.document),o=r.readTime?bt(r.readTime):F.min(),a=ut.newNoDocument(s,o),c=r.removedTargetIds||[];e=new ur([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=pn(n,r.document),o=r.removedTargetIds||[];e=new ur([],o,s,null)}else{if(!("filter"in t))return O();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new Rd(s,o),c=r.targetId;e=new yu(c,a)}}return e}function Au(n,t){let e;if(t instanceof Vn)e={update:aa(n,t.key,t.value)};else if(t instanceof br)e={delete:yr(n,t.key)};else if(t instanceof ne)e={update:aa(n,t.key,t.data),updateMask:Gd(t.fieldMask)};else{if(!(t instanceof pu))return O();e={verify:yr(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const c=a.transform;if(c instanceof pr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof An)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Rn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof gr)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw O()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Nd(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:O()}(n,t.precondition)),e}function Od(n,t){return n&&n.length>0?(G(t!==void 0),n.map(e=>function(s,o){let a=s.updateTime?bt(s.updateTime):bt(o);return a.isEqual(F.min())&&(a=bt(o)),new vd(a,s.transformResults||[])}(e,t))):[]}function Fd(n,t){return{documents:[Iu(n,t.path)]}}function Bd(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Iu(n,s);const o=function(f){if(f.length!==0)return Su(kt.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(f){if(f.length!==0)return f.map(m=>function(w){return{field:Re(w.field),direction:$d(w.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=Cs(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{_t:e,parent:s}}function Ud(n){let t=Ld(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){G(r===1);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(E){const w=Ru(E);return w instanceof kt&&Ja(w)?w.getFilters():[w]}(e.where));let a=[];e.orderBy&&(a=function(E){return E.map(w=>function(C){return new wn(Se(C.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(w))}(e.orderBy));let c=null;e.limit&&(c=function(E){let w;return w=typeof E=="object"?E.value:E,bn(w)?null:w}(e.limit));let h=null;e.startAt&&(h=function(E){const w=!!E.before,S=E.values||[];return new mr(S,w)}(e.startAt));let f=null;return e.endAt&&(f=function(E){const w=!E.before,S=E.values||[];return new mr(S,w)}(e.endAt)),ad(t,s,a,o,c,"F",h,f)}function qd(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Ru(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Se(e.unaryFilter.field);return it.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Se(e.unaryFilter.field);return it.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Se(e.unaryFilter.field);return it.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Se(e.unaryFilter.field);return it.create(a,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(n):n.fieldFilter!==void 0?function(e){return it.create(Se(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return kt.create(e.compositeFilter.filters.map(r=>Ru(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return O()}}(e.compositeFilter.op))}(n):O()}function $d(n){return Vd[n]}function jd(n){return Cd[n]}function zd(n){return Dd[n]}function Re(n){return{fieldPath:n.canonicalString()}}function Se(n){return dt.fromServerFormat(n.fieldPath)}function Su(n){return n instanceof it?function(e){if(e.op==="=="){if(Ko(e.value))return{unaryFilter:{field:Re(e.field),op:"IS_NAN"}};if(Ho(e.value))return{unaryFilter:{field:Re(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ko(e.value))return{unaryFilter:{field:Re(e.field),op:"IS_NOT_NAN"}};if(Ho(e.value))return{unaryFilter:{field:Re(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Re(e.field),op:jd(e.op),value:e.value}}}(n):n instanceof kt?function(e){const r=e.getFilters().map(s=>Su(s));return r.length===1?r[0]:{compositeFilter:{op:zd(e.op),filters:r}}}(n):O()}function Gd(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Pu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(t,e,r,s,o=F.min(),a=F.min(),c=pt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new Qt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(t){this.ct=t}}function Kd(n){const t=Ud({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Vs(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(){this.un=new Qd}addToCollectionParentIndex(t,e){return this.un.add(e),b.resolve()}getCollectionParents(t,e){return b.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return b.resolve()}deleteFieldIndex(t,e){return b.resolve()}deleteAllFieldIndexes(t){return b.resolve()}createTargetIndexes(t,e){return b.resolve()}getDocumentsMatchingTarget(t,e){return b.resolve(null)}getIndexType(t,e){return b.resolve(0)}getFieldIndexes(t,e){return b.resolve([])}getNextCollectionGroupToUpdate(t){return b.resolve(null)}getMinOffset(t,e){return b.resolve(Zt.min())}getMinOffsetFromCollectionGroup(t,e){return b.resolve(Zt.min())}updateCollectionGroup(t,e,r){return b.resolve()}updateIndexEntries(t,e){return b.resolve()}}class Qd{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new mt(X.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new mt(X.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new Me(0)}static kn(){return new Me(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(){this.changes=new Ue(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ut.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?b.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&mn(r.mutation,s,Pt.empty(),ot.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,q()).next(()=>r))}getLocalViewOfDocuments(t,e,r=q()){const s=le();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=un();return o.forEach((c,h)=>{a=a.insert(c,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=le();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,q()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,c)=>{e.set(a,c)})})}computeViews(t,e,r,s){let o=jt();const a=fn(),c=function(){return fn()}();return e.forEach((h,f)=>{const m=r.get(f.key);s.has(f.key)&&(m===void 0||m.mutation instanceof ne)?o=o.insert(f.key,f):m!==void 0?(a.set(f.key,m.mutation.getFieldMask()),mn(m.mutation,f,m.mutation.getFieldMask(),ot.now())):a.set(f.key,Pt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,m)=>a.set(f,m)),e.forEach((f,m)=>{var E;return c.set(f,new Xd(m,(E=a.get(f))!==null&&E!==void 0?E:null))}),c))}recalculateAndSaveOverlays(t,e){const r=fn();let s=new et((a,c)=>a-c),o=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const c of a)c.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let m=r.get(h)||Pt.empty();m=c.applyToLocalView(f,m),r.set(h,m);const E=(s.get(c.batchId)||q()).add(h);s=s.insert(c.batchId,E)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),f=h.key,m=h.value,E=au();m.forEach(w=>{if(!o.has(w)){const S=fu(e.get(w),r.get(w));S!==null&&E.set(w,S),o=o.add(w)}}),a.push(this.documentOverlayCache.saveOverlays(t,f,E))}return b.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return x.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):nu(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):b.resolve(le());let c=-1,h=o;return a.next(f=>b.forEach(f,(m,E)=>(c<E.largestBatchId&&(c=E.largestBatchId),o.get(m)?b.resolve():this.remoteDocumentCache.getEntry(t,m).next(w=>{h=h.insert(m,w)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,q())).next(m=>({batchId:c,changes:ou(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new x(e)).next(r=>{let s=un();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=un();return this.indexManager.getCollectionParents(t,o).next(c=>b.forEach(c,h=>{const f=function(E,w){return new Be(w,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next(m=>{m.forEach((E,w)=>{a=a.insert(E,w)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,f)=>{const m=f.getKey();a.get(m)===null&&(a=a.insert(m,ut.newInvalidDocument(m)))});let c=un();return a.forEach((h,f)=>{const m=o.get(h);m!==void 0&&mn(m.mutation,f,Pt.empty(),ot.now()),Rr(e,f)&&(c=c.insert(h,f))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return b.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:bt(s.createTime)}}(e)),b.resolve()}getNamedQuery(t,e){return b.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(s){return{name:s.name,query:Kd(s.bundledQuery),readTime:bt(s.readTime)}}(e)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(){this.overlays=new et(x.comparator),this.Ir=new Map}getOverlay(t,e){return b.resolve(this.overlays.get(e))}getOverlays(t,e){const r=le();return b.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.ht(t,e,o)}),b.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),b.resolve()}getOverlaysForCollection(t,e,r){const s=le(),o=e.length+1,a=new x(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return b.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new et((f,m)=>f-m);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let m=o.get(f.largestBatchId);m===null&&(m=le(),o=o.insert(f.largestBatchId,m)),m.set(f.getKey(),f)}}const c=le(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,m)=>c.set(f,m)),!(c.size()>=s)););return b.resolve(c)}ht(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Ad(e,r));let o=this.Ir.get(e);o===void 0&&(o=q(),this.Ir.set(e,o)),this.Ir.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(){this.sessionToken=pt.EMPTY_BYTE_STRING}getSessionToken(t){return b.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,b.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(){this.Tr=new mt(at.Er),this.dr=new mt(at.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const r=new at(t,e);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Vr(new at(t,e))}mr(t,e){t.forEach(r=>this.removeReference(r,e))}gr(t){const e=new x(new X([])),r=new at(e,t),s=new at(e,t+1),o=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new x(new X([])),r=new at(e,t),s=new at(e,t+1);let o=q();return this.dr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new at(t,0),r=this.Tr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class at{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return x.comparator(t.key,e.key)||K(t.wr,e.wr)}static Ar(t,e){return K(t.wr,e.wr)||x.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new mt(at.Er)}checkEmpty(t){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new wd(o,e,r,s);this.mutationQueue.push(a);for(const c of s)this.br=this.br.add(new at(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return b.resolve(a)}lookupMutationBatch(t,e){return b.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.vr(r),o=s<0?0:s;return b.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new at(e,0),s=new at(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,s],a=>{const c=this.Dr(a.wr);o.push(c)}),b.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new mt(K);return e.forEach(s=>{const o=new at(s,0),a=new at(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],c=>{r=r.add(c.wr)})}),b.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;x.isDocumentKey(o)||(o=o.child(""));const a=new at(new x(o),0);let c=new mt(K);return this.br.forEachWhile(h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(c=c.add(h.wr)),!0)},a),b.resolve(this.Cr(c))}Cr(t){const e=[];return t.forEach(r=>{const s=this.Dr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){G(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return b.forEach(e.mutations,s=>{const o=new at(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.br=r})}On(t){}containsKey(t,e){const r=new at(e,0),s=this.br.firstAfterOrEqual(r);return b.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,b.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(t){this.Mr=t,this.docs=function(){return new et(x.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.Mr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return b.resolve(r?r.document.mutableCopy():ut.newInvalidDocument(e))}getEntries(t,e){let r=jt();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():ut.newInvalidDocument(s))}),b.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=jt();const a=e.path,c=new x(a.child("")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:f,value:{document:m}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||$h(qh(m),r)<=0||(s.has(m.key)||Rr(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return b.resolve(o)}getAllFromCollectionGroup(t,e,r,s){O()}Or(t,e){return b.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new sf(this)}getSize(t){return b.resolve(this.size)}}class sf extends Yd{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.cr.addEntry(t,s)):this.cr.removeEntry(r)}),b.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(t){this.persistence=t,this.Nr=new Ue(e=>Hs(e),Ks),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Zs,this.targetCount=0,this.kr=Me.Bn()}forEachTarget(t,e){return this.Nr.forEach((r,s)=>e(s)),b.resolve()}getLastRemoteSnapshotVersion(t){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return b.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Lr&&(this.Lr=e),b.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new Me(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,b.resolve()}updateTargetData(t,e){return this.Kn(e),b.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,b.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),b.waitFor(o).next(()=>s)}getTargetCount(t){return b.resolve(this.targetCount)}getTargetData(t,e){const r=this.Nr.get(e)||null;return b.resolve(r)}addMatchingKeys(t,e,r){return this.Br.Rr(e,r),b.resolve()}removeMatchingKeys(t,e,r){this.Br.mr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),b.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),b.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Br.yr(e);return b.resolve(r)}containsKey(t,e){return b.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(t,e){this.qr={},this.overlays={},this.Qr=new $s(0),this.Kr=!1,this.Kr=!0,this.$r=new ef,this.referenceDelegate=t(this),this.Ur=new of(this),this.indexManager=new Wd,this.remoteDocumentCache=function(s){return new rf(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Hd(e),this.Gr=new Zd(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new tf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.qr[t.toKey()];return r||(r=new nf(e,this.referenceDelegate),this.qr[t.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,r){L("MemoryPersistence","Starting transaction:",t);const s=new uf(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(o=>this.referenceDelegate.jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Hr(t,e){return b.or(Object.values(this.qr).map(r=>()=>r.containsKey(t,e)))}}class uf extends zh{constructor(t){super(),this.currentSequenceNumber=t}}class ti{constructor(t){this.persistence=t,this.Jr=new Zs,this.Yr=null}static Zr(t){return new ti(t)}get Xr(){if(this.Yr)return this.Yr;throw O()}addReference(t,e,r){return this.Jr.addReference(r,e),this.Xr.delete(r.toString()),b.resolve()}removeReference(t,e,r){return this.Jr.removeReference(r,e),this.Xr.add(r.toString()),b.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),b.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Xr,r=>{const s=x.fromPath(r);return this.ei(t,s).next(o=>{o||e.removeEntry(s,F.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(r=>{r?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return b.or([()=>b.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.$i=r,this.Ui=s}static Wi(t,e){let r=q(),s=q();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new ei(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return fl()?8:Gh(hl())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.Yi(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new cf;return this.Xi(t,e,a).next(c=>{if(o.result=c,this.zi)return this.es(t,e,a,c.size)})}).next(()=>o.result)}es(t,e,r,s){return r.documentReadCount<this.ji?(on()<=z.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",Ae(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),b.resolve()):(on()<=z.DEBUG&&L("QueryEngine","Query:",Ae(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(on()<=z.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",Ae(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Nt(e))):b.resolve())}Yi(t,e){if(Xo(e))return b.resolve(null);let r=Nt(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Vs(e,null,"F"),r=Nt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=q(...o);return this.Ji.getDocuments(t,a).next(c=>this.indexManager.getMinOffset(t,r).next(h=>{const f=this.ts(e,c);return this.ns(e,f,a,h.readTime)?this.Yi(t,Vs(e,null,"F")):this.rs(t,f,e,h)}))})))}Zi(t,e,r,s){return Xo(e)||s.isEqual(F.min())?b.resolve(null):this.Ji.getDocuments(t,r).next(o=>{const a=this.ts(e,o);return this.ns(e,a,r,s)?b.resolve(null):(on()<=z.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ae(e)),this.rs(t,a,e,Uh(s,-1)).next(c=>c))})}ts(t,e){let r=new mt(su(t));return e.forEach((s,o)=>{Rr(t,o)&&(r=r.add(o))}),r}ns(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Xi(t,e,r){return on()<=z.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",Ae(e)),this.Ji.getDocumentsMatchingQuery(t,e,Zt.min(),r)}rs(t,e,r,s){return this.Ji.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(t,e,r,s){this.persistence=t,this.ss=e,this.serializer=s,this.os=new et(K),this._s=new Ue(o=>Hs(o),Ks),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(r)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Jd(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function df(n,t,e,r){return new hf(n,t,e,r)}async function bu(n,t){const e=B(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.ls(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],c=[];let h=q();for(const f of s){a.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}for(const f of o){c.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(r,h).next(f=>({hs:f,removedBatchIds:a,addedBatchIds:c}))})})}function ff(n,t){const e=B(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.cs.newChangeBuffer({trackRemovals:!0});return function(c,h,f,m){const E=f.batch,w=E.keys();let S=b.resolve();return w.forEach(C=>{S=S.next(()=>m.getEntry(h,C)).next(k=>{const V=f.docVersions.get(C);G(V!==null),k.version.compareTo(V)<0&&(E.applyToRemoteDocument(k,f),k.isValidDocument()&&(k.setReadTime(f.commitVersion),m.addEntry(k)))})}),S.next(()=>c.mutationQueue.removeMutationBatch(h,E))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let h=q();for(let f=0;f<c.mutationResults.length;++f)c.mutationResults[f].transformResults.length>0&&(h=h.add(c.batch.mutations[f].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function Vu(n){const t=B(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function mf(n,t){const e=B(n),r=t.snapshotVersion;let s=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});s=e.os;const c=[];t.targetChanges.forEach((m,E)=>{const w=s.get(E);if(!w)return;c.push(e.Ur.removeMatchingKeys(o,m.removedDocuments,E).next(()=>e.Ur.addMatchingKeys(o,m.addedDocuments,E)));let S=w.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(E)!==null?S=S.withResumeToken(pt.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):m.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(m.resumeToken,r)),s=s.insert(E,S),function(k,V,U){return k.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0}(w,S,m)&&c.push(e.Ur.updateTargetData(o,S))});let h=jt(),f=q();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),c.push(pf(o,a,t.documentUpdates).next(m=>{h=m.Ps,f=m.Is})),!r.isEqual(F.min())){const m=e.Ur.getLastRemoteSnapshotVersion(o).next(E=>e.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(m)}return b.waitFor(c).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.os=s,o))}function pf(n,t,e){let r=q(),s=q();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=jt();return e.forEach((c,h)=>{const f=o.get(c);h.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(c)),h.isNoDocument()&&h.version.isEqual(F.min())?(t.removeEntry(c,h.readTime),a=a.insert(c,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),a=a.insert(c,h)):L("LocalStore","Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",h.version)}),{Ps:a,Is:s}})}function gf(n,t){const e=B(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function _f(n,t){const e=B(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Ur.getTargetData(r,t).next(o=>o?(s=o,b.resolve(s)):e.Ur.allocateTargetId(r).next(a=>(s=new Qt(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.os=e.os.insert(r.targetId,r),e._s.set(t,r.targetId)),r})}async function Ns(n,t,e){const r=B(n),s=r.os.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Pn(a))throw a;L("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.os=r.os.remove(t),r._s.delete(s.target)}function ua(n,t,e){const r=B(n);let s=F.min(),o=q();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,f,m){const E=B(h),w=E._s.get(m);return w!==void 0?b.resolve(E.os.get(w)):E.Ur.getTargetData(f,m)}(r,a,Nt(t)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,c.targetId).next(h=>{o=h})}).next(()=>r.ss.getDocumentsMatchingQuery(a,t,e?s:F.min(),e?o:q())).next(c=>(yf(r,cd(t),c),{documents:c,Ts:o})))}function yf(n,t,e){let r=n.us.get(t)||F.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.us.set(t,r)}class ca{constructor(){this.activeTargetIds=pd()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ef{constructor(){this.so=new ca,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,r){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new ca,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{_o(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sr=null;function ds(){return sr===null?sr=function(){return 268435456+Math.round(2147483648*Math.random())}():sr++,"0x"+sr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt="WebChannelConnection";class wf extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+e.host,this.vo=`projects/${s}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Fo(){return!1}Mo(e,r,s,o,a){const c=ds(),h=this.xo(e,r.toUriEncodedString());L("RestConnection",`Sending RPC '${e}' ${c}:`,h,s);const f={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(f,o,a),this.No(e,h,f,s).then(m=>(L("RestConnection",`Received RPC '${e}' ${c}: `,m),m),m=>{throw De("RestConnection",`RPC '${e}' ${c} failed with error: `,m,"url: ",h,"request:",s),m})}Lo(e,r,s,o,a,c){return this.Mo(e,r,s,o,a)}Oo(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Fe}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>e[a]=o),s&&s.headers.forEach((o,a)=>e[a]=o)}xo(e,r){const s=Tf[e];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,r,s){const o=ds();return new Promise((a,c)=>{const h=new Ua;h.setWithCredentials(!0),h.listenOnce(qa.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case ir.NO_ERROR:const m=h.getResponseJson();L(vt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(m)),a(m);break;case ir.TIMEOUT:L(vt,`RPC '${t}' ${o} timed out`),c(new N(P.DEADLINE_EXCEEDED,"Request time out"));break;case ir.HTTP_ERROR:const E=h.getStatus();if(L(vt,`RPC '${t}' ${o} failed with status:`,E,"response text:",h.getResponseText()),E>0){let w=h.getResponseJson();Array.isArray(w)&&(w=w[0]);const S=w==null?void 0:w.error;if(S&&S.status&&S.message){const C=function(V){const U=V.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(U)>=0?U:P.UNKNOWN}(S.status);c(new N(C,S.message))}else c(new N(P.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new N(P.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{L(vt,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(s);L(vt,`RPC '${t}' ${o} sending request:`,s),h.send(e,"POST",f,r,15)})}Bo(t,e,r){const s=ds(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=za(),c=ja(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Oo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const m=o.join("");L(vt,`Creating RPC '${t}' stream ${s}: ${m}`,h);const E=a.createWebChannel(m,h);let w=!1,S=!1;const C=new If({Io:V=>{S?L(vt,`Not sending because RPC '${t}' stream ${s} is closed:`,V):(w||(L(vt,`Opening RPC '${t}' stream ${s} transport.`),E.open(),w=!0),L(vt,`RPC '${t}' stream ${s} sending:`,V),E.send(V))},To:()=>E.close()}),k=(V,U,W)=>{V.listen(U,$=>{try{W($)}catch(J){setTimeout(()=>{throw J},0)}})};return k(E,an.EventType.OPEN,()=>{S||(L(vt,`RPC '${t}' stream ${s} transport opened.`),C.yo())}),k(E,an.EventType.CLOSE,()=>{S||(S=!0,L(vt,`RPC '${t}' stream ${s} transport closed`),C.So())}),k(E,an.EventType.ERROR,V=>{S||(S=!0,De(vt,`RPC '${t}' stream ${s} transport errored:`,V),C.So(new N(P.UNAVAILABLE,"The operation could not be completed")))}),k(E,an.EventType.MESSAGE,V=>{var U;if(!S){const W=V.data[0];G(!!W);const $=W,J=$.error||((U=$[0])===null||U===void 0?void 0:U.error);if(J){L(vt,`RPC '${t}' stream ${s} received error:`,J);const xt=J.status;let ct=function(_){const y=st[_];if(y!==void 0)return _u(y)}(xt),T=J.message;ct===void 0&&(ct=P.INTERNAL,T="Unknown error status: "+xt+" with message "+J.message),S=!0,C.So(new N(ct,T)),E.close()}else L(vt,`RPC '${t}' stream ${s} received:`,W),C.bo(W)}}),k(c,$a.STAT_EVENT,V=>{V.stat===ws.PROXY?L(vt,`RPC '${t}' stream ${s} detected buffering proxy`):V.stat===ws.NOPROXY&&L(vt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function fs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(n){return new kd(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(t,e,r=1e3,s=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=r,this.qo=s,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,e-r);s>0&&L("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(t,e,r,s,o,a,c,h){this.ui=t,this.Ho=r,this.Jo=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new ni(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?($t(e.toString()),$t("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===e&&this.P_(r,s)},r=>{t(()=>{const s=new N(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(t,e){const r=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return L("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Af extends Cu{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=xd(this.serializer,t),r=function(o){if(!("targetChange"in o))return F.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?F.min():a.readTime?bt(a.readTime):F.min()}(t);return this.listener.d_(e,r)}A_(t){const e={};e.database=ks(this.serializer),e.addTarget=function(o,a){let c;const h=a.target;if(c=Ps(h)?{documents:Fd(o,h)}:{query:Bd(o,h)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=vu(o,a.resumeToken);const f=Cs(o,a.expectedCount);f!==null&&(c.expectedCount=f)}else if(a.snapshotVersion.compareTo(F.min())>0){c.readTime=_r(o,a.snapshotVersion.toTimestamp());const f=Cs(o,a.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,t);const r=qd(this.serializer,t);r&&(e.labels=r),this.a_(e)}R_(t){const e={};e.database=ks(this.serializer),e.removeTarget=t,this.a_(e)}}class Rf extends Cu{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return G(!!t.streamToken),this.lastStreamToken=t.streamToken,G(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){G(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=Od(t.writeResults,t.commitTime),r=bt(t.commitTime);return this.listener.g_(r,e)}p_(){const t={};t.database=ks(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Au(this.serializer,r))};this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(t,Ds(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(P.UNKNOWN,o.toString())})}Lo(t,e,r,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(t,Ds(e,r),s,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new N(P.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Pf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?($t(e),this.D_=!1):L("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{r.enqueueAndForget(async()=>{ye(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(h){const f=B(h);f.L_.add(4),await Dn(f),f.q_.set("Unknown"),f.L_.delete(4),await Dr(f)}(this))})}),this.q_=new Pf(r,s)}}async function Dr(n){if(ye(n))for(const t of n.B_)await t(!0)}async function Dn(n){for(const t of n.B_)await t(!1)}function Du(n,t){const e=B(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),oi(e)?ii(e):qe(e).r_()&&si(e,t))}function ri(n,t){const e=B(n),r=qe(e);e.N_.delete(t),r.r_()&&ku(e,t),e.N_.size===0&&(r.r_()?r.o_():ye(e)&&e.q_.set("Unknown"))}function si(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(F.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}qe(n).A_(t)}function ku(n,t){n.Q_.xe(t),qe(n).R_(t)}function ii(n){n.Q_=new bd({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),qe(n).start(),n.q_.v_()}function oi(n){return ye(n)&&!qe(n).n_()&&n.N_.size>0}function ye(n){return B(n).L_.size===0}function Nu(n){n.Q_=void 0}async function Vf(n){n.q_.set("Online")}async function Cf(n){n.N_.forEach((t,e)=>{si(n,t)})}async function Df(n,t){Nu(n),oi(n)?(n.q_.M_(t),ii(n)):n.q_.set("Unknown")}async function kf(n,t,e){if(n.q_.set("Online"),t instanceof Eu&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const c of o.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.N_.delete(c),s.Q_.removeTarget(c))}(n,t)}catch(r){L("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Er(n,r)}else if(t instanceof ur?n.Q_.Ke(t):t instanceof yu?n.Q_.He(t):n.Q_.We(t),!e.isEqual(F.min()))try{const r=await Vu(n.localStore);e.compareTo(r)>=0&&await function(o,a){const c=o.Q_.rt(a);return c.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.N_.get(f);m&&o.N_.set(f,m.withResumeToken(h.resumeToken,a))}}),c.targetMismatches.forEach((h,f)=>{const m=o.N_.get(h);if(!m)return;o.N_.set(h,m.withResumeToken(pt.EMPTY_BYTE_STRING,m.snapshotVersion)),ku(o,h);const E=new Qt(m.target,h,f,m.sequenceNumber);si(o,E)}),o.remoteSyncer.applyRemoteEvent(c)}(n,e)}catch(r){L("RemoteStore","Failed to raise snapshot:",r),await Er(n,r)}}async function Er(n,t,e){if(!Pn(t))throw t;n.L_.add(1),await Dn(n),n.q_.set("Offline"),e||(e=()=>Vu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await Dr(n)})}function Lu(n,t){return t().catch(e=>Er(n,e,t))}async function kr(n){const t=B(n),e=ee(t);let r=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;Nf(t);)try{const s=await gf(t.localStore,r);if(s===null){t.O_.length===0&&e.o_();break}r=s.batchId,Lf(t,s)}catch(s){await Er(t,s)}Mu(t)&&xu(t)}function Nf(n){return ye(n)&&n.O_.length<10}function Lf(n,t){n.O_.push(t);const e=ee(n);e.r_()&&e.V_&&e.m_(t.mutations)}function Mu(n){return ye(n)&&!ee(n).n_()&&n.O_.length>0}function xu(n){ee(n).start()}async function Mf(n){ee(n).p_()}async function xf(n){const t=ee(n);for(const e of n.O_)t.m_(e.mutations)}async function Of(n,t,e){const r=n.O_.shift(),s=Ys.from(r,t,e);await Lu(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await kr(n)}async function Ff(n,t){t&&ee(n).V_&&await async function(r,s){if(function(a){return gu(a)&&a!==P.ABORTED}(s.code)){const o=r.O_.shift();ee(r).s_(),await Lu(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await kr(r)}}(n,t),Mu(n)&&xu(n)}async function ha(n,t){const e=B(n);e.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const r=ye(e);e.L_.add(3),await Dn(e),r&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await Dr(e)}async function Bf(n,t){const e=B(n);t?(e.L_.delete(2),await Dr(e)):t||(e.L_.add(2),await Dn(e),e.q_.set("Unknown"))}function qe(n){return n.K_||(n.K_=function(e,r,s){const o=B(e);return o.w_(),new Af(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:Vf.bind(null,n),Ro:Cf.bind(null,n),mo:Df.bind(null,n),d_:kf.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),oi(n)?ii(n):n.q_.set("Unknown")):(await n.K_.stop(),Nu(n))})),n.K_}function ee(n){return n.U_||(n.U_=function(e,r,s){const o=B(e);return o.w_(),new Rf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Mf.bind(null,n),mo:Ff.bind(null,n),f_:xf.bind(null,n),g_:Of.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await kr(n)):(await n.U_.stop(),n.O_.length>0&&(L("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Ut,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,c=new ai(t,e,a,s,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ui(n,t){if($t("AsyncQueue",`${t}: ${n}`),Pn(n))return new N(P.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(t){this.comparator=t?(e,r)=>t(e,r)||x.comparator(e.key,r.key):(e,r)=>x.comparator(e.key,r.key),this.keyedMap=un(),this.sortedSet=new et(this.comparator)}static emptySet(t){return new Ve(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ve)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Ve;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(){this.W_=new et(x.comparator)}track(t){const e=t.doc.key,r=this.W_.get(e);r?t.type!==0&&r.type===3?this.W_=this.W_.insert(e,t):t.type===3&&r.type!==1?this.W_=this.W_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.W_=this.W_.remove(e):t.type===1&&r.type===2?this.W_=this.W_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):O():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,r)=>{t.push(r)}),t}}class xe{constructor(t,e,r,s,o,a,c,h,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(c=>{a.push({type:0,doc:c})}),new xe(t,e,Ve.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ar(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class qf{constructor(){this.queries=fa(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,r){const s=B(e),o=s.queries;s.queries=fa(),o.forEach((a,c)=>{for(const h of c.j_)h.onError(r)})})(this,new N(P.ABORTED,"Firestore shutting down"))}}function fa(){return new Ue(n=>ru(n),Ar)}async function Ou(n,t){const e=B(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.H_()&&t.J_()&&(r=2):(o=new Uf,r=t.J_()?0:1);try{switch(r){case 0:o.z_=await e.onListen(s,!0);break;case 1:o.z_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const c=ui(a,`Initialization of query '${Ae(t.query)}' failed`);return void t.onError(c)}e.queries.set(s,o),o.j_.push(t),t.Z_(e.onlineState),o.z_&&t.X_(o.z_)&&ci(e)}async function Fu(n,t){const e=B(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.j_.indexOf(t);a>=0&&(o.j_.splice(a,1),o.j_.length===0?s=t.J_()?0:1:!o.H_()&&t.J_()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function $f(n,t){const e=B(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const c of a.j_)c.X_(s)&&(r=!0);a.z_=s}}r&&ci(e)}function jf(n,t,e){const r=B(n),s=r.queries.get(t);if(s)for(const o of s.j_)o.onError(e);r.queries.delete(t)}function ci(n){n.Y_.forEach(t=>{t.next()})}var Ls,ma;(ma=Ls||(Ls={})).ea="default",ma.Cache="cache";class Bu{constructor(t,e,r){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new xe(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const r=e!=="Offline";return(!this.options._a||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=xe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==Ls.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(t){this.key=t}}class qu{constructor(t){this.key=t}}class zf{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=q(),this.mutatedKeys=q(),this.Aa=su(t),this.Ra=new Ve(this.Aa)}get Va(){return this.Ta}ma(t,e){const r=e?e.fa:new da,s=e?e.Ra:this.Ra;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,c=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((m,E)=>{const w=s.get(m),S=Rr(this.query,E)?E:null,C=!!w&&this.mutatedKeys.has(w.key),k=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let V=!1;w&&S?w.data.isEqual(S.data)?C!==k&&(r.track({type:3,doc:S}),V=!0):this.ga(w,S)||(r.track({type:2,doc:S}),V=!0,(h&&this.Aa(S,h)>0||f&&this.Aa(S,f)<0)&&(c=!0)):!w&&S?(r.track({type:0,doc:S}),V=!0):w&&!S&&(r.track({type:1,doc:w}),V=!0,(h||f)&&(c=!0)),V&&(S?(a=a.add(S),o=k?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{Ra:a,fa:r,ns:c,mutatedKeys:o}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((m,E)=>function(S,C){const k=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return k(S)-k(C)}(m.type,E.type)||this.Aa(m.doc,E.doc)),this.pa(r),s=s!=null&&s;const c=e&&!s?this.ya():[],h=this.da.size===0&&this.current&&!s?1:0,f=h!==this.Ea;return this.Ea=h,a.length!==0||f?{snapshot:new xe(this.query,t.Ra,o,a,t.mutatedKeys,h===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new da,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=q(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const e=[];return t.forEach(r=>{this.da.has(r)||e.push(new qu(r))}),this.da.forEach(r=>{t.has(r)||e.push(new Uu(r))}),e}ba(t){this.Ta=t.Ts,this.da=q();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return xe.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Gf{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Hf{constructor(t){this.key=t,this.va=!1}}class Kf{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Ue(c=>ru(c),Ar),this.Ma=new Map,this.xa=new Set,this.Oa=new et(x.comparator),this.Na=new Map,this.La=new Zs,this.Ba={},this.ka=new Map,this.qa=Me.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Wf(n,t,e=!0){const r=Ku(n);let s;const o=r.Fa.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Da()):s=await $u(r,t,e,!0),s}async function Qf(n,t){const e=Ku(n);await $u(e,t,!0,!1)}async function $u(n,t,e,r){const s=await _f(n.localStore,Nt(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let c;return r&&(c=await Yf(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&Du(n.remoteStore,s),c}async function Yf(n,t,e,r,s){n.Ka=(E,w,S)=>async function(k,V,U,W){let $=V.view.ma(U);$.ns&&($=await ua(k.localStore,V.query,!1).then(({documents:T})=>V.view.ma(T,$)));const J=W&&W.targetChanges.get(V.targetId),xt=W&&W.targetMismatches.get(V.targetId)!=null,ct=V.view.applyChanges($,k.isPrimaryClient,J,xt);return ga(k,V.targetId,ct.wa),ct.snapshot}(n,E,w,S);const o=await ua(n.localStore,t,!0),a=new zf(t,o.Ts),c=a.ma(o.documents),h=Cn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),f=a.applyChanges(c,n.isPrimaryClient,h);ga(n,e,f.wa);const m=new Gf(t,e,a);return n.Fa.set(t,m),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),f.snapshot}async function Xf(n,t,e){const r=B(n),s=r.Fa.get(t),o=r.Ma.get(s.targetId);if(o.length>1)return r.Ma.set(s.targetId,o.filter(a=>!Ar(a,t))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ns(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&ri(r.remoteStore,s.targetId),Ms(r,s.targetId)}).catch(Sn)):(Ms(r,s.targetId),await Ns(r.localStore,s.targetId,!0))}async function Jf(n,t){const e=B(n),r=e.Fa.get(t),s=e.Ma.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),ri(e.remoteStore,r.targetId))}async function Zf(n,t,e){const r=om(n);try{const s=await function(a,c){const h=B(a),f=ot.now(),m=c.reduce((S,C)=>S.add(C.key),q());let E,w;return h.persistence.runTransaction("Locally write mutations","readwrite",S=>{let C=jt(),k=q();return h.cs.getEntries(S,m).next(V=>{C=V,C.forEach((U,W)=>{W.isValidDocument()||(k=k.add(U))})}).next(()=>h.localDocuments.getOverlayedDocuments(S,C)).next(V=>{E=V;const U=[];for(const W of c){const $=Id(W,E.get(W.key).overlayedDocument);$!=null&&U.push(new ne(W.key,$,Qa($.value.mapValue),ft.exists(!0)))}return h.mutationQueue.addMutationBatch(S,f,U,c)}).next(V=>{w=V;const U=V.applyToLocalDocumentSet(E,k);return h.documentOverlayCache.saveOverlays(S,V.batchId,U)})}).then(()=>({batchId:w.batchId,changes:ou(E)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,h){let f=a.Ba[a.currentUser.toKey()];f||(f=new et(K)),f=f.insert(c,h),a.Ba[a.currentUser.toKey()]=f}(r,s.batchId,e),await kn(r,s.changes),await kr(r.remoteStore)}catch(s){const o=ui(s,"Failed to persist write");e.reject(o)}}async function ju(n,t){const e=B(n);try{const r=await mf(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Na.get(o);a&&(G(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?G(a.va):s.removedDocuments.size>0&&(G(a.va),a.va=!1))}),await kn(e,r,t)}catch(r){await Sn(r)}}function pa(n,t,e){const r=B(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Fa.forEach((o,a)=>{const c=a.view.Z_(t);c.snapshot&&s.push(c.snapshot)}),function(a,c){const h=B(a);h.onlineState=c;let f=!1;h.queries.forEach((m,E)=>{for(const w of E.j_)w.Z_(c)&&(f=!0)}),f&&ci(h)}(r.eventManager,t),s.length&&r.Ca.d_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function tm(n,t,e){const r=B(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Na.get(t),o=s&&s.key;if(o){let a=new et(x.comparator);a=a.insert(o,ut.newNoDocument(o,F.min()));const c=q().add(o),h=new Vr(F.min(),new Map,new et(K),a,c);await ju(r,h),r.Oa=r.Oa.remove(o),r.Na.delete(t),li(r)}else await Ns(r.localStore,t,!1).then(()=>Ms(r,t,e)).catch(Sn)}async function em(n,t){const e=B(n),r=t.batch.batchId;try{const s=await ff(e.localStore,t);Gu(e,r,null),zu(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await kn(e,s)}catch(s){await Sn(s)}}async function nm(n,t,e){const r=B(n);try{const s=await function(a,c){const h=B(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let m;return h.mutationQueue.lookupMutationBatch(f,c).next(E=>(G(E!==null),m=E.keys(),h.mutationQueue.removeMutationBatch(f,E))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,m,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,m)).next(()=>h.localDocuments.getDocuments(f,m))})}(r.localStore,t);Gu(r,t,e),zu(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await kn(r,s)}catch(s){await Sn(s)}}function zu(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function Gu(n,t,e){const r=B(n);let s=r.Ba[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Ba[r.currentUser.toKey()]=s}}function Ms(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Ma.get(t))n.Fa.delete(r),e&&n.Ca.$a(r,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(r=>{n.La.containsKey(r)||Hu(n,r)})}function Hu(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(ri(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),li(n))}function ga(n,t,e){for(const r of e)r instanceof Uu?(n.La.addReference(r.key,t),rm(n,r)):r instanceof qu?(L("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,t),n.La.containsKey(r.key)||Hu(n,r.key)):O()}function rm(n,t){const e=t.key,r=e.path.canonicalString();n.Oa.get(e)||n.xa.has(r)||(L("SyncEngine","New document in limbo: "+e),n.xa.add(r),li(n))}function li(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new x(X.fromString(t)),r=n.qa.next();n.Na.set(r,new Hf(e)),n.Oa=n.Oa.insert(e,r),Du(n.remoteStore,new Qt(Nt(Ws(e.path)),r,"TargetPurposeLimboResolution",$s.oe))}}async function kn(n,t,e){const r=B(n),s=[],o=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((c,h)=>{a.push(r.Ka(h,t,e).then(f=>{var m;if((f||e)&&r.isPrimaryClient){const E=f?!f.fromCache:(m=e==null?void 0:e.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,E?"current":"not-current")}if(f){s.push(f);const E=ei.Wi(h.targetId,f);o.push(E)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(h,f){const m=B(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>b.forEach(f,w=>b.forEach(w.$i,S=>m.persistence.referenceDelegate.addReference(E,w.targetId,S)).next(()=>b.forEach(w.Ui,S=>m.persistence.referenceDelegate.removeReference(E,w.targetId,S)))))}catch(E){if(!Pn(E))throw E;L("LocalStore","Failed to update sequence numbers: "+E)}for(const E of f){const w=E.targetId;if(!E.fromCache){const S=m.os.get(w),C=S.snapshotVersion,k=S.withLastLimboFreeSnapshotVersion(C);m.os=m.os.insert(w,k)}}}(r.localStore,o))}async function sm(n,t){const e=B(n);if(!e.currentUser.isEqual(t)){L("SyncEngine","User change. New user:",t.toKey());const r=await bu(e.localStore,t);e.currentUser=t,function(o,a){o.ka.forEach(c=>{c.forEach(h=>{h.reject(new N(P.CANCELLED,a))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await kn(e,r.hs)}}function im(n,t){const e=B(n),r=e.Na.get(t);if(r&&r.va)return q().add(r.key);{let s=q();const o=e.Ma.get(t);if(!o)return s;for(const a of o){const c=e.Fa.get(a);s=s.unionWith(c.view.Va)}return s}}function Ku(n){const t=B(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=ju.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=im.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=tm.bind(null,t),t.Ca.d_=$f.bind(null,t.eventManager),t.Ca.$a=jf.bind(null,t.eventManager),t}function om(n){const t=B(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=em.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=nm.bind(null,t),t}class vr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Cr(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return df(this.persistence,new lf,t.initialUser,this.serializer)}Ga(t){return new af(ti.Zr,this.serializer)}Wa(t){return new Ef}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}vr.provider={build:()=>new vr};class xs{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>pa(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=sm.bind(null,this.syncEngine),await Bf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new qf}()}createDatastore(t){const e=Cr(t.databaseInfo.databaseId),r=function(o){return new wf(o)}(t.databaseInfo);return function(o,a,c,h){return new Sf(o,a,c,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,c){return new bf(r,s,o,a,c)}(this.localStore,this.datastore,t.asyncQueue,e=>pa(this.syncEngine,e,0),function(){return la.D()?new la:new vf}())}createSyncEngine(t,e){return function(s,o,a,c,h,f,m){const E=new Kf(s,o,a,c,h,f);return m&&(E.Qa=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=B(s);L("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Dn(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}xs.provider={build:()=>new xs};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):$t("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new N(P.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const e=await async function(s,o){const a=B(s),c={documents:o.map(E=>yr(a.serializer,E))},h=await a.Lo("BatchGetDocuments",a.serializer.databaseId,X.emptyPath(),c,o.length),f=new Map;h.forEach(E=>{const w=Md(a.serializer,E);f.set(w.key.toString(),w)});const m=[];return o.forEach(E=>{const w=f.get(E.toString());G(!!w),m.push(w)}),m}(this.datastore,t);return e.forEach(r=>this.recordVersion(r)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(t.toString())}delete(t){this.write(new br(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((e,r)=>{const s=x.fromPath(r);this.mutations.push(new pu(s,this.precondition(s)))}),await async function(r,s){const o=B(r),a={writes:s.map(c=>Au(o.serializer,c))};await o.Mo("Commit",o.serializer.databaseId,X.emptyPath(),a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw O();e=F.min()}const r=this.readVersions.get(t.key.toString());if(r){if(!e.isEqual(r))throw new N(P.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(F.min())?ft.exists(!1):ft.updateTime(e):ft.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(F.min()))throw new N(P.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ft.updateTime(e)}return ft.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(t,e,r,s,o){this.asyncQueue=t,this.datastore=e,this.options=r,this.updateFunction=s,this.deferred=o,this._u=r.maxAttempts,this.t_=new ni(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const t=new am(this.datastore),e=this.cu(t);e&&e.then(r=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.lu(s)}))}).catch(r=>{this.lu(r)})})}cu(t){try{const e=this.updateFunction(t);return!bn(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}lu(t){this._u>0&&this.hu(t)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(t)}hu(t){if(t.name==="FirebaseError"){const e=t.code;return e==="aborted"||e==="failed-precondition"||e==="already-exists"||!gu(e)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=Tt.UNAUTHENTICATED,this.clientId=Ha.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{L("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(L("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ut;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=ui(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function ms(n,t){n.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await bu(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function _a(n,t){n.asyncQueue.verifyOperationInProgress();const e=await lm(n);L("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>ha(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>ha(t.remoteStore,s)),n._onlineComponents=t}async function lm(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){L("FirestoreClient","Using user provided OfflineComponentProvider");try{await ms(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;De("Error using user provided cache. Falling back to memory cache: "+e),await ms(n,new vr)}}else L("FirestoreClient","Using default OfflineComponentProvider"),await ms(n,new vr);return n._offlineComponents}async function hi(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(L("FirestoreClient","Using user provided OnlineComponentProvider"),await _a(n,n._uninitializedComponentsProvider._online)):(L("FirestoreClient","Using default OnlineComponentProvider"),await _a(n,new xs))),n._onlineComponents}function hm(n){return hi(n).then(t=>t.syncEngine)}function dm(n){return hi(n).then(t=>t.datastore)}async function Os(n){const t=await hi(n),e=t.eventManager;return e.onListen=Wf.bind(null,t.syncEngine),e.onUnlisten=Xf.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Qf.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Jf.bind(null,t.syncEngine),e}function fm(n,t,e={}){const r=new Ut;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,f){const m=new Wu({next:w=>{m.Za(),a.enqueueAndForget(()=>Fu(o,E)),w.fromCache&&h.source==="server"?f.reject(new N(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(w)},error:w=>f.reject(w)}),E=new Bu(c,m,{includeMetadataChanges:!0,_a:!0});return Ou(o,E)}(await Os(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(n,t,e){if(!e)throw new N(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function mm(n,t,e,r){if(t===!0&&r===!0)throw new N(P.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Ea(n){if(!x.isDocumentKey(n))throw new N(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function va(n){if(x.isDocumentKey(n))throw new N(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Nr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":O()}function Lt(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new N(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Nr(n);throw new N(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new N(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new N(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}mm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Qu((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Lr{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ta({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new N(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ta(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Dh;switch(r.type){case"firstParty":return new Mh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=ya.get(e);r&&(L("ComponentProvider","Removing Datastore"),ya.delete(e),r.terminate())}(this),Promise.resolve()}}function pm(n,t,e,r={}){var s;const o=(n=Lt(n,Lr))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&De("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let c,h;if(typeof r.mockUserToken=="string")c=r.mockUserToken,h=Tt.MOCK_USER;else{c=ll(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new N(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new Tt(f)}n._authCredentials=new kh(new Ga(c,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new re(this.firestore,t,this._query)}}class Rt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Rt(this.firestore,t,this._key)}}class Jt extends re{constructor(t,e,r){super(t,e,Ws(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Rt(this.firestore,null,new x(t))}withConverter(t){return new Jt(this.firestore,t,this._path)}}function Ce(n,t,...e){if(n=Ct(n),Yu("collection","path",t),n instanceof Lr){const r=X.fromString(t,...e);return va(r),new Jt(n,null,r)}{if(!(n instanceof Rt||n instanceof Jt))throw new N(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return va(r),new Jt(n.firestore,null,r)}}function Vt(n,t,...e){if(n=Ct(n),arguments.length===1&&(t=Ha.newId()),Yu("doc","path",t),n instanceof Lr){const r=X.fromString(t,...e);return Ea(r),new Rt(n,null,new x(r))}{if(!(n instanceof Rt||n instanceof Jt))throw new N(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return Ea(r),new Rt(n.firestore,n instanceof Jt?n.converter:null,new x(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new ni(this,"async_queue_retry"),this.Vu=()=>{const r=fs();r&&L("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const e=fs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=fs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new Ut;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!Pn(t))throw t;L("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw $t("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=e,e}enqueueAfterDelay(t,e,r){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const s=ai.createAndSchedule(this,t,e,r,o=>this.yu(o));return this.Tu.push(s),s}fu(){this.Eu&&O()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}function wa(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const s=e;for(const o of r)if(o in s&&typeof s[o]=="function")return!0;return!1}(n,["next","error","complete"])}class pe extends Lr{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Ia,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ia(t),this._firestoreClient=void 0,await t}}}function gm(n,t){const e=typeof n=="object"?n:Eh(),r=typeof n=="string"?n:"(default)",s=ph(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=ul("firestore");o&&pm(s,...o)}return s}function Nn(n){if(n._terminated)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||_m(n),n._firestoreClient}function _m(n){var t,e,r;const s=n._freezeSettings(),o=function(c,h,f,m){return new Wh(c,h,f,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Qu(m.experimentalLongPollingOptions),m.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new cm(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ge(pt.fromBase64String(t))}catch(e){throw new N(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new ge(pt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return K(this._lat,t._lat)||K(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym=/^__.*__$/;class Em{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new ne(t,this.data,this.fieldMask,e,this.fieldTransforms):new Vn(t,this.data,e,this.fieldTransforms)}}class Xu{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new ne(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Ju(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}class pi{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new pi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:r,xu:!1});return s.Ou(t),s}Nu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return Tr(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(Ju(this.Cu)&&ym.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class vm{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Cr(t)}Qu(t,e,r,s=!1){return new pi({Cu:t,methodName:e,qu:r,path:dt.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Mr(n){const t=n._freezeSettings(),e=Cr(n._databaseId);return new vm(n._databaseId,!!t.ignoreUndefinedProperties,e)}function gi(n,t,e,r,s,o={}){const a=n.Qu(o.merge||o.mergeFields?2:0,t,e,s);_i("Data must be an object, but it was:",a,r);const c=ec(r,a);let h,f;if(o.merge)h=new Pt(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const E of o.mergeFields){const w=Fs(t,E,e);if(!a.contains(w))throw new N(P.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);rc(m,w)||m.push(w)}h=new Pt(m),f=a.fieldTransforms.filter(E=>h.covers(E.field))}else h=null,f=a.fieldTransforms;return new Em(new At(c),h,f)}class xr extends di{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof xr}}function Zu(n,t,e,r){const s=n.Qu(1,t,e);_i("Data must be an object, but it was:",s,r);const o=[],a=At.empty();_e(r,(h,f)=>{const m=yi(t,h,e);f=Ct(f);const E=s.Nu(m);if(f instanceof xr)o.push(m);else{const w=Mn(f,E);w!=null&&(o.push(m),a.set(m,w))}});const c=new Pt(o);return new Xu(a,c,s.fieldTransforms)}function tc(n,t,e,r,s,o){const a=n.Qu(1,t,e),c=[Fs(t,r,e)],h=[s];if(o.length%2!=0)throw new N(P.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<o.length;w+=2)c.push(Fs(t,o[w])),h.push(o[w+1]);const f=[],m=At.empty();for(let w=c.length-1;w>=0;--w)if(!rc(f,c[w])){const S=c[w];let C=h[w];C=Ct(C);const k=a.Nu(S);if(C instanceof xr)f.push(S);else{const V=Mn(C,k);V!=null&&(f.push(S),m.set(S,V))}}const E=new Pt(f);return new Xu(m,E,a.fieldTransforms)}function Tm(n,t,e,r=!1){return Mn(e,n.Qu(r?4:3,t))}function Mn(n,t){if(nc(n=Ct(n)))return _i("Unsupported field value:",t,n),ec(n,t);if(n instanceof di)return function(r,s){if(!Ju(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const c of r){let h=Mn(c,s.Lu(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=Ct(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return gd(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=ot.fromDate(r);return{timestampValue:_r(s.serializer,o)}}if(r instanceof ot){const o=new ot(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:_r(s.serializer,o)}}if(r instanceof fi)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ge)return{bytesValue:vu(s.serializer,r._byteString)};if(r instanceof Rt){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Js(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof mi)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw c.Bu("VectorValues must only contain numeric values.");return Qs(c.serializer,h)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Nr(r)}`)}(n,t)}function ec(n,t){const e={};return Ka(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):_e(n,(r,s)=>{const o=Mn(s,t.Mu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function nc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ot||n instanceof fi||n instanceof ge||n instanceof Rt||n instanceof di||n instanceof mi)}function _i(n,t,e){if(!nc(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=Nr(e);throw r==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+r)}}function Fs(n,t,e){if((t=Ct(t))instanceof Ln)return t._internalPath;if(typeof t=="string")return yi(n,t);throw Tr("Field path arguments must be of type string or ",n,!1,void 0,e)}const Im=new RegExp("[~\\*/\\[\\]]");function yi(n,t,e){if(t.search(Im)>=0)throw Tr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Ln(...t.split("."))._internalPath}catch{throw Tr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Tr(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new N(P.INVALID_ARGUMENT,c+n+h)}function rc(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new wm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ei("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class wm extends Ir{data(){return super.data()}}function Ei(n,t){return typeof t=="string"?yi(n,t):t instanceof Ln?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new N(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class vi{}class ic extends vi{}function Am(n,t,...e){let r=[];t instanceof vi&&r.push(t),r=r.concat(e),function(o){const a=o.filter(h=>h instanceof Ii).length,c=o.filter(h=>h instanceof Ti).length;if(a>1||a>0&&c>0)throw new N(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Ti extends ic{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Ti(t,e,r)}_apply(t){const e=this._parse(t);return oc(t._query,e),new re(t.firestore,t.converter,bs(t._query,e))}_parse(t){const e=Mr(t.firestore);return function(o,a,c,h,f,m,E){let w;if(f.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new N(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Ra(E,m);const S=[];for(const C of E)S.push(Aa(h,o,C));w={arrayValue:{values:S}}}else w=Aa(h,o,E)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Ra(E,m),w=Tm(c,a,E,m==="in"||m==="not-in");return it.create(f,m,w)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class Ii extends vi{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Ii(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:kt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,o){let a=s;const c=o.getFlattenedFilters();for(const h of c)oc(a,h),a=bs(a,h)}(t._query,e),new re(t.firestore,t.converter,bs(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class wi extends ic{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new wi(t,e)}_apply(t){const e=function(s,o,a){if(s.startAt!==null)throw new N(P.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new N(P.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new wn(o,a)}(t._query,this._field,this._direction);return new re(t.firestore,t.converter,function(s,o){const a=s.explicitOrderBy.concat([o]);return new Be(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,e))}}function Rm(n,t="asc"){const e=t,r=Ei("orderBy",n);return wi._create(r,e)}function Aa(n,t,e){if(typeof(e=Ct(e))=="string"){if(e==="")throw new N(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!nu(t)&&e.indexOf("/")!==-1)throw new N(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(X.fromString(e));if(!x.isDocumentKey(r))throw new N(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Go(n,new x(r))}if(e instanceof Rt)return Go(n,e._key);throw new N(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Nr(e)}.`)}function Ra(n,t){if(!Array.isArray(n)||n.length===0)throw new N(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function oc(n,t){const e=function(s,o){for(const a of s)for(const c of a.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new N(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new N(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class ac{convertValue(t,e="none"){switch(me(t)){case 0:return null;case 1:return t.booleanValue;case 2:return rt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(fe(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw O()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return _e(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>rt(a.doubleValue));return new mi(o)}convertGeoPoint(t){return new fi(rt(t.latitude),rt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=zs(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(vn(t));default:return null}}convertTimestamp(t){const e=te(t);return new ot(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=X.fromString(t);G(Pu(r));const s=new Tn(r.get(1),r.get(3)),o=new x(r.popFirst(5));return s.isEqual(e)||$t(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}class Sm extends ac{constructor(t){super(),this.firestore=t}convertBytes(t){return new ge(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Rt(this.firestore,null,e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ri extends Ir{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new cr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Ei("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class cr extends Ri{data(t={}){return super.data(t)}}class uc{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Pe(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new cr(this._firestore,this._userDataWriter,r.key,r,new Pe(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const h=new cr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Pe(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new cr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Pe(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,m=-1;return c.type!==0&&(f=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:Pm(c.type),doc:h,oldIndex:f,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Pm(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}class Or extends ac{constructor(t){super(),this.firestore=t}convertBytes(t){return new ge(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Rt(this.firestore,null,e)}}function cc(n){n=Lt(n,re);const t=Lt(n.firestore,pe),e=Nn(t),r=new Or(t);return sc(n._query),fm(e,n._query).then(s=>new uc(t,r,n,s))}function lc(n,t,e){n=Lt(n,Rt);const r=Lt(n.firestore,pe),s=Ai(n.converter,t,e);return hc(r,[gi(Mr(r),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,ft.none())])}function ps(n,...t){var e,r,s;n=Ct(n);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||wa(t[a])||(o=t[a],a++);const c={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(wa(t[a])){const E=t[a];t[a]=(e=E.next)===null||e===void 0?void 0:e.bind(E),t[a+1]=(r=E.error)===null||r===void 0?void 0:r.bind(E),t[a+2]=(s=E.complete)===null||s===void 0?void 0:s.bind(E)}let h,f,m;if(n instanceof Rt)f=Lt(n.firestore,pe),m=Ws(n._key.path),h={next:E=>{t[a]&&t[a](bm(f,n,E))},error:t[a+1],complete:t[a+2]};else{const E=Lt(n,re);f=Lt(E.firestore,pe),m=E._query;const w=new Or(f);h={next:S=>{t[a]&&t[a](new uc(f,w,E,S))},error:t[a+1],complete:t[a+2]},sc(n._query)}return function(w,S,C,k){const V=new Wu(k),U=new Bu(S,V,C);return w.asyncQueue.enqueueAndForget(async()=>Ou(await Os(w),U)),()=>{V.Za(),w.asyncQueue.enqueueAndForget(async()=>Fu(await Os(w),U))}}(Nn(f),m,c,h)}function hc(n,t){return function(r,s){const o=new Ut;return r.asyncQueue.enqueueAndForget(async()=>Zf(await hm(r),s,o)),o.promise}(Nn(n),t)}function bm(n,t,e){const r=e.docs.get(t._key),s=new Or(n);return new Ri(n,s,t._key,r,new Pe(e.hasPendingWrites,e.fromCache),t.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=Mr(t)}set(t,e,r){this._verifyNotCommitted();const s=Wt(t,this._firestore),o=Ai(s.converter,e,r),a=gi(this._dataReader,"WriteBatch.set",s._key,o,s.converter!==null,r);return this._mutations.push(a.toMutation(s._key,ft.none())),this}update(t,e,r,...s){this._verifyNotCommitted();const o=Wt(t,this._firestore);let a;return a=typeof(e=Ct(e))=="string"||e instanceof Ln?tc(this._dataReader,"WriteBatch.update",o._key,e,r,s):Zu(this._dataReader,"WriteBatch.update",o._key,e),this._mutations.push(a.toMutation(o._key,ft.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=Wt(t,this._firestore);return this._mutations=this._mutations.concat(new br(e._key,ft.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new N(P.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Wt(n,t){if((n=Ct(n)).firestore!==t)throw new N(P.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm extends class{constructor(e,r){this._firestore=e,this._transaction=r,this._dataReader=Mr(e)}get(e){const r=Wt(e,this._firestore),s=new Sm(this._firestore);return this._transaction.lookup([r._key]).then(o=>{if(!o||o.length!==1)return O();const a=o[0];if(a.isFoundDocument())return new Ir(this._firestore,s,a.key,a,r.converter);if(a.isNoDocument())return new Ir(this._firestore,s,r._key,null,r.converter);throw O()})}set(e,r,s){const o=Wt(e,this._firestore),a=Ai(o.converter,r,s),c=gi(this._dataReader,"Transaction.set",o._key,a,o.converter!==null,s);return this._transaction.set(o._key,c),this}update(e,r,s,...o){const a=Wt(e,this._firestore);let c;return c=typeof(r=Ct(r))=="string"||r instanceof Ln?tc(this._dataReader,"Transaction.update",a._key,r,s,o):Zu(this._dataReader,"Transaction.update",a._key,r),this._transaction.update(a._key,c),this}delete(e){const r=Wt(e,this._firestore);return this._transaction.delete(r._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=Wt(t,this._firestore),r=new Or(this._firestore);return super.get(t).then(s=>new Ri(this._firestore,r,e._key,s._document,new Pe(!1,!1),e.converter))}}function Si(n,t,e){n=Lt(n,pe);const r=Object.assign(Object.assign({},Vm),e);return function(o){if(o.maxAttempts<1)throw new N(P.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(o,a,c){const h=new Ut;return o.asyncQueue.enqueueAndForget(async()=>{const f=await dm(o);new um(o.asyncQueue,f,c,a,h).au()}),h.promise}(Nn(n),s=>t(new Dm(n,s)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(n){return Nn(n=Lt(n,pe)),new Cm(n,t=>hc(n,t))}(function(t,e=!0){(function(s){Fe=s})(yh),dr(new _n("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),c=new pe(new Nh(r.getProvider("auth-internal")),new Oh(r.getProvider("app-check-internal")),function(f,m){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new N(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Tn(f.options.projectId,m)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),be(Uo,"4.7.3",t),be(Uo,"4.7.3","esm2017")})();const gn={SESSION:"lettuce_toto_session"},Sa=5,wr={id:"admin",passwordHash:"17bd1e0376217b582dad021d95bd8e9c22e5dc461e425d04143a464508c443df"};async function km(n){const r=new TextEncoder().encode(n+"ClassTOTO_SecureSalt_2026"),s=await crypto.subtle.digest("SHA-256",r);return Array.from(new Uint8Array(s)).map(a=>a.toString(16).padStart(2,"0")).join("")}const we={rank1:5,rank2:4,rank3:3,rank4:2,rank5:1.5,others:.9},Nm={apiKey:"AIzaSyDw4wFYBpW--wse_hrFUpcSLKPPQIkvMXg",authDomain:"classtoto3-9.firebaseapp.com",projectId:"classtoto3-9",storageBucket:"classtoto3-9.firebasestorage.app",messagingSenderId:"522595238940",appId:"1:522595238940:web:0eb8848d0617ec90ad8bd9",measurementId:"G-PQ3EWX23W9"},Lm=xa(Nm),tt=gm(Lm);let M={students:[],lettuce:[],currentUser:null,history:[]};function Q(n,t="success"){const e=document.getElementById("toast-container")||(()=>{const o=document.createElement("div");return o.id="toast-container",o.className="toast-container",document.body.appendChild(o),o})(),r=document.createElement("div");r.className=`toast ${t}`;let s="🔔";t==="success"&&(s="✅"),t==="error"&&(s="❌"),t==="warning"&&(s="⚠️"),r.innerHTML=`<span>${s}</span> <span>${n}</span>`,e.appendChild(r),setTimeout(()=>{r.style.opacity="0",r.style.transform="translateY(-10px)",setTimeout(()=>r.remove(),300)},3e3)}function fc(){const n=[];n.push({id:"30717",name:"30717 학생",password:"30717",tokens:1e3,bets:{1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0}});for(let t=1;t<=36;t++){const e=`309${String(t).padStart(2,"0")}`;n.push({id:e,name:`${e} 학생`,password:e,tokens:1e3,bets:{1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0}})}return n}function mc(){const n=[];for(let t=1;t<=10;t++)n.push({id:String(t),name:`상추 ${t}호`,totalBets:0});return n}async function Mm(){try{if((await cc(Ce(tt,"students"))).empty){console.log("DB가 비어 있습니다. 초기 데이터를 Firestore에 주입합니다...");const t=dc(tt);fc().forEach(s=>{const o=Vt(tt,"students",s.id);t.set(o,s)}),mc().forEach(s=>{const o=Vt(tt,"lettuce",s.id);t.set(o,s)}),await t.commit(),console.log("초기 데이터 주입 완료.")}}catch(n){console.error("초기 데이터 조회/주입 중 오류 발생:",n),n.code==="permission-denied"?Q("Firebase Firestore 권한 오류! 보안 규칙(Security Rules)을 허용으로 설정해주세요.","error"):Q("DB 초기화 실패: "+n.message,"error")}}let Pi=!1,pc=!1,gc=!1;function gs(){if(Pi&&pc&&gc){if(M.currentUser&&M.currentUser!=="admin"){const n=M.students.find(t=>t.id===M.currentUser.id);n&&(M.currentUser=n)}ce()}}function xm(){ps(Ce(tt,"students"),t=>{const e=[];t.forEach(r=>{e.push(r.data())}),e.sort((r,s)=>r.id.localeCompare(s.id)),M.students=e,Pi=!0,gs()},t=>{console.error("Students Listener Error:",t),t.code==="permission-denied"?Q("학번 데이터 로드 실패: Firestore 보안 규칙을 확인하세요.","error"):Q("학번 로드 실패: "+t.message,"error")}),ps(Ce(tt,"lettuce"),t=>{const e=[];t.forEach(r=>{e.push(r.data())}),e.sort((r,s)=>parseInt(r.id)-parseInt(s.id)),M.lettuce=e,pc=!0,gs()},t=>{console.error("Lettuce Listener Error:",t),Q("상추 데이터 로드 실패: "+t.message,"error")});const n=Am(Ce(tt,"history"),Rm("round","asc"));ps(n,t=>{const e=[];t.forEach(r=>{e.push(r.data())}),M.history=e,gc=!0,gs()},t=>{console.error("History Listener Error:",t),Q("정산 기록 로드 실패: "+t.message,"error")})}async function Om(){await Mm(),xm();const n=localStorage.getItem(gn.SESSION);n?n===`admin_${wr.passwordHash}`?M.currentUser="admin":n.startsWith("admin_")?(M.currentUser=null,localStorage.removeItem(gn.SESSION)):M.currentUser={id:n}:M.currentUser=null}function ln(){M.currentUser?M.currentUser==="admin"?localStorage.setItem(gn.SESSION,`admin_${wr.passwordHash}`):localStorage.setItem(gn.SESSION,M.currentUser.id):localStorage.removeItem(gn.SESSION)}function ce(){document.querySelectorAll(".view").forEach(n=>n.classList.remove("active")),M.currentUser?M.currentUser==="admin"?(document.getElementById("admin-view").classList.add("active"),Um()):(document.getElementById("student-view").classList.add("active"),Fm()):(document.getElementById("login-view").classList.add("active"),document.getElementById("login-error").classList.add("hidden"),document.getElementById("login-form").reset())}function Fm(){if(!M.currentUser||M.currentUser==="admin")return;const n=M.students.find(a=>a.id===M.currentUser.id);if(!n)return;M.currentUser=n,document.getElementById("student-badge-id").innerText=`${n.id} 학생`,document.getElementById("student-tokens-val").innerText=n.tokens.toLocaleString(),document.getElementById("summary-balance").innerText=n.tokens.toLocaleString();const t=Object.values(n.bets).reduce((a,c)=>a+c,0);document.getElementById("summary-total-bet").innerText=t.toLocaleString();const e=document.getElementById("my-bets-detail-list");e.innerHTML="";let r=!1;Object.entries(n.bets).forEach(([a,c])=>{if(c>0){r=!0;const h=document.createElement("div");h.className="my-bet-item",h.style.display="flex",h.style.justifyContent="space-between",h.style.alignItems="center",h.innerHTML=`
        <span>상추 ${a}호</span>
        <div style="display: flex; align-items: center; gap: 8px;">
          <strong>💰 ${c.toLocaleString()}</strong>
          <button class="btn-danger-sm btn-cancel-bet" data-id="${a}" style="padding: 2px 6px; font-size: 0.75rem; border-radius: 4px;">취소</button>
        </div>
      `,e.appendChild(h)}}),r||(e.innerHTML='<p class="no-data" style="padding: 10px 0;">이번 주 베팅 내역이 없습니다.</p>');const s=document.getElementById("lettuce-cards-container");s.innerHTML="";const o=M.lettuce.reduce((a,c)=>a+c.totalBets,0);M.lettuce.forEach(a=>{const c=document.createElement("div");c.className="lettuce-card";const h=n.bets[a.id]||0,f=o>0?(a.totalBets/o*100).toFixed(1):"0.0",m=["🥬","🥗","🌱","🥦","🍀","🌿","🍃","🌵","🪴","🌳"],E=m[(parseInt(a.id)-1)%m.length],w=h>0?`<button class="btn-danger-sm btn-cancel-card-bet" data-id="${a.id}" style="width: 100%; margin-top: 8px; padding: 6px; border-radius: var(--radius-sm);">베팅 취소</button>`:"";c.innerHTML=`
      <div class="lettuce-image-placeholder">${E}</div>
      <div class="lettuce-info">
        <h3>${a.name} <span class="badge">Active</span></h3>
      </div>
      <div class="lettuce-stats">
        <div class="stat-row">
          <span>누적 전체 베팅액:</span>
          <strong>💰 ${a.totalBets.toLocaleString()} 토큰</strong>
        </div>
        <div class="lettuce-share-container">
          <div class="lettuce-share-label">
            <span>실시간 점유율:</span>
            <strong>${f}%</strong>
          </div>
          <div class="lettuce-progress-bar-bg">
            <div class="lettuce-progress-bar-fill" style="width: ${f}%;"></div>
          </div>
        </div>
        <div class="stat-row my-bet-row">
          <span>내 베팅액:</span>
          <strong>💰 ${h.toLocaleString()} 토큰</strong>
        </div>
      </div>
      <div class="bet-control">
        <div class="bet-input-wrapper">
          <input type="number" class="bet-amount-input" id="bet-input-${a.id}" min="5" placeholder="베팅액 입력 (최소 5)" />
          <button class="btn-primary btn-bet" data-id="${a.id}">베팅</button>
        </div>
        <div class="quick-bet-buttons" style="margin-top: 8px;">
          <button class="btn-quick" data-id="${a.id}" data-amount="5">+5</button>
          <button class="btn-quick" data-id="${a.id}" data-amount="10">+10</button>
          <button class="btn-quick" data-id="${a.id}" data-amount="50">+50</button>
          <button class="btn-quick" data-id="${a.id}" data-amount="100">+100</button>
        </div>
        ${w}
      </div>
    `,s.appendChild(c)}),document.querySelectorAll(".btn-bet").forEach(a=>{a.replaceWith(a.cloneNode(!0))}),document.querySelectorAll(".btn-bet").forEach(a=>{a.addEventListener("click",c=>{const h=c.target.getAttribute("data-id"),f=document.getElementById(`bet-input-${h}`),m=parseInt(f.value);Pa(h,m)})}),document.querySelectorAll(".btn-quick").forEach(a=>{a.replaceWith(a.cloneNode(!0))}),document.querySelectorAll(".btn-quick").forEach(a=>{a.addEventListener("click",c=>{const h=c.target.getAttribute("data-id"),f=parseInt(c.target.getAttribute("data-amount"));Pa(h,f)})}),document.querySelectorAll(".btn-cancel-bet").forEach(a=>{a.replaceWith(a.cloneNode(!0))}),document.querySelectorAll(".btn-cancel-bet").forEach(a=>{a.addEventListener("click",c=>{const h=c.target.getAttribute("data-id");ba(h)})}),document.querySelectorAll(".btn-cancel-card-bet").forEach(a=>{a.replaceWith(a.cloneNode(!0))}),document.querySelectorAll(".btn-cancel-card-bet").forEach(a=>{a.addEventListener("click",c=>{const h=c.target.getAttribute("data-id");ba(h)})}),Bm()}function Bm(){const n=document.getElementById("ranking-list-container");n.innerHTML="";const t=document.getElementById("ranking-total-count");t&&(t.innerText=`전체 ${M.students.length}명`);const e=s=>{const o=s.tokens||0,a=Object.values(s.bets||{}).reduce((c,h)=>c+h,0);return o+a};[...M.students].sort((s,o)=>e(o)-e(s)).forEach((s,o)=>{const a=M.currentUser&&M.currentUser.id===s.id,c=document.createElement("div");c.className=`ranking-item ${a?"current-user":""}`;const h=e(s);c.innerHTML=`
      <div class="ranking-left">
        <span class="rank-number">${o+1}</span>
        <span class="rank-id">${s.id} 학생</span>
      </div>
      <span class="rank-tokens">💰 ${h.toLocaleString()}</span>
    `,n.appendChild(c)})}function Um(){if(M.currentUser!=="admin")return;["rank-1","rank-2","rank-3","rank-4","rank-5"].forEach(t=>{const e=document.getElementById(t);if(!e)return;const r=e.value;e.innerHTML='<option value="" disabled selected>상추 선택</option>',M.lettuce.forEach(s=>{e.innerHTML+=`<option value="${s.id}">${s.name}</option>`}),r&&(e.value=r)}),_c(),qm(),$m()}function qm(){const n=document.getElementById("admin-lettuce-stats-container");if(!n)return;n.innerHTML="";const t=M.lettuce.reduce((e,r)=>e+r.totalBets,0);M.lettuce.forEach(e=>{const r=t>0?(e.totalBets/t*100).toFixed(1):"0.0",s=document.createElement("div");s.className="lettuce-stat-item",s.innerHTML=`
      <div class="lettuce-stat-info">
        <span class="lettuce-stat-name">${e.name}</span>
        <div class="lettuce-stat-amount">
          <span>💰 ${e.totalBets.toLocaleString()} 토큰</span>
          <span class="lettuce-stat-percentage">${r}%</span>
        </div>
      </div>
      <div class="lettuce-progress-bar-bg">
        <div class="lettuce-progress-bar-fill" style="width: ${r}%;"></div>
      </div>
    `,n.appendChild(s)})}function _c(){const n=document.getElementById("admin-student-table-body"),t=document.getElementById("student-search-input"),e=t?t.value.trim():"";n.innerHTML="",M.students.filter(r=>r.id.includes(e)).forEach(r=>{const s=Object.values(r.bets).reduce((a,c)=>a+c,0),o=document.createElement("tr");o.innerHTML=`
        <td style="font-weight: 600;">${r.id}</td>
        <td class="text-primary" style="font-weight: 700;">💰 ${r.tokens.toLocaleString()}</td>
        <td>💰 ${s.toLocaleString()}</td>
      `,n.appendChild(o)})}function $m(){const n=document.getElementById("history-list-container");if(n.innerHTML="",M.history.length===0){n.innerHTML='<p class="no-data">아직 완료된 정산 내역이 없습니다.</p>';return}[...M.history].reverse().forEach(t=>{const e=document.createElement("div");e.className="history-item";const r=t.ranks.map((s,o)=>`<span class="history-rank-tag">${["🥇","🥈","🥉","4위","5위"][o]} 상추 ${s}호</span>`).join(" ");e.innerHTML=`
      <div class="history-item-header">
        <span>📅 ${t.date} (${t.round}회차 정산)</span>
        <span class="text-primary" style="font-weight: bold;">총 지급 토큰: 💰 ${t.totalDistributed.toLocaleString()}</span>
      </div>
      <div class="history-item-ranks">
        ${r}
      </div>
      <div class="history-item-stats">
        참여 학생: ${t.participatedStudents}명 | 정산 전 총베팅액: 💰 ${t.totalBets.toLocaleString()}
      </div>
    `,n.appendChild(e)})}async function Pa(n,t){if(!M.currentUser||M.currentUser==="admin")return;if(isNaN(t)||t<=0||!Number.isInteger(t)){Q("올바른 베팅 금액을 입력하세요.","error");return}if(t<Sa){Q(`최소 베팅 단위는 ${Sa} 토큰입니다.`,"error");return}const e=Vt(tt,"students",M.currentUser.id),r=Vt(tt,"lettuce",n);try{await Si(tt,async s=>{const o=await s.get(e),a=await s.get(r);if(!o.exists()||!a.exists())throw new Error("데이터가 존재하지 않습니다.");const c=o.data(),h=a.data();if(t>c.tokens)throw new Error("보유하고 있는 토큰 잔액을 초과하여 베팅할 수 없습니다.");const f=c.tokens-t,m=c.bets||{},E={...m,[n]:(m[n]||0)+t},w=(h.totalBets||0)+t;s.update(e,{tokens:f,bets:E}),s.update(r,{totalBets:w})}),Q(`상추 ${n}호에 💰 ${t.toLocaleString()} 토큰을 성공적으로 베팅했습니다!`,"success")}catch(s){Q(s.message||"베팅 중 오류가 발생했습니다.","error")}}async function ba(n){if(!M.currentUser||M.currentUser==="admin")return;const t=Vt(tt,"students",M.currentUser.id),e=Vt(tt,"lettuce",n);try{await Si(tt,async r=>{const s=await r.get(t),o=await r.get(e);if(!s.exists()||!o.exists())throw new Error("데이터가 존재하지 않습니다.");const a=s.data(),c=o.data(),h=a.bets[n]||0;if(h<=0)throw new Error("해당 상추에 건 베팅이 없습니다.");const f=a.tokens+h,m={...a.bets,[n]:0},E=Math.max(0,(c.totalBets||0)-h);r.update(t,{tokens:f,bets:m}),r.update(e,{totalBets:E})}),Q(`상추 ${n}호의 베팅이 성공적으로 취소 및 환불되었습니다.`,"success")}catch(r){Q(r.message||"베팅 취소 중 오류가 발생했습니다.","error")}}async function jm(n){if(new Set(n).size!==5){Q("1위부터 5위 상추를 중복 없이 모두 지정해야 합니다.","error");return}Q("정산을 진행 중입니다...","warning");try{const e=new Date,r=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")} ${String(e.getHours()).padStart(2,"0")}:${String(e.getMinutes()).padStart(2,"0")}`,s=M.history.length+1;let o=M.lettuce.reduce((h,f)=>h+f.totalBets,0),a=0,c=0;await Si(tt,async h=>{const f=M.students.map(S=>Vt(tt,"students",S.id)),m=M.lettuce.map(S=>Vt(tt,"lettuce",S.id));(await Promise.all(f.map(S=>h.get(S)))).forEach((S,C)=>{const k=S.data();let V=0,U=!1;Object.entries(k.bets||{}).forEach(([$,J])=>{J>0&&(U=!0,$===n[0]?V+=J*we.rank1:$===n[1]?V+=J*we.rank2:$===n[2]?V+=J*we.rank3:$===n[3]?V+=J*we.rank4:$===n[4]?V+=J*we.rank5:V+=J*we.others)});const W={1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0};if(U){c++;const $=Math.floor(V);a+=$,h.update(f[C],{tokens:k.tokens+$,bets:W})}else h.update(f[C],{bets:W})}),m.forEach(S=>{h.update(S,{totalBets:0})});const w=Vt(Ce(tt,"history"));h.set(w,{round:s,date:r,ranks:n,totalBets:o,totalDistributed:a,participatedStudents:c})}),Q(`정산이 완료되었습니다! 총 💰 ${a.toLocaleString()} 토큰이 배분되었습니다.`,"success")}catch(e){Q("정산 처리 중 오류가 발생했습니다: "+e.message,"error")}}async function zm(n,t,e){if(!M.currentUser||M.currentUser==="admin")return;const r=M.students.find(a=>a.id===M.currentUser.id),s=document.getElementById("pwd-change-error"),o=document.getElementById("pwd-change-success");if(s.classList.add("hidden"),o.classList.add("hidden"),r.password!==n){s.innerText="현재 비밀번호가 일치하지 않습니다.",s.classList.remove("hidden");return}if(t!==e){s.innerText="새 비밀번호와 확인 비밀번호가 다릅니다.",s.classList.remove("hidden");return}if(t.trim().length===0){s.innerText="비밀번호는 빈칸일 수 없습니다.",s.classList.remove("hidden");return}try{const a=Vt(tt,"students",M.currentUser.id);await lc(a,{password:t},{merge:!0}),o.classList.remove("hidden"),document.getElementById("pwd-change-form").reset(),Q("비밀번호가 성공적으로 변경되었습니다.","success"),setTimeout(()=>{document.getElementById("pwd-change-modal").classList.add("hidden"),o.classList.add("hidden")},1500)}catch(a){s.innerText="비밀번호 변경 실패: "+a.message,s.classList.remove("hidden")}}async function Gm(){if(confirm("정말로 모든 학생의 자산 및 정산 내역을 초기화하시겠습니까? (이 작업은 되돌릴 수 없습니다)")){Q("데이터 초기화 중...","warning");try{const n=await cc(Ce(tt,"history")),t=dc(tt);n.forEach(s=>{t.delete(s.ref)}),fc().forEach(s=>{const o=Vt(tt,"students",s.id);t.set(o,s)}),mc().forEach(s=>{const o=Vt(tt,"lettuce",s.id);t.set(o,s)}),await t.commit(),M.currentUser=null,ln(),ce(),Q("모든 데이터가 성공적으로 초기화되었습니다!","success")}catch(n){Q("초기화 중 오류가 발생했습니다: "+n.message,"error")}}}document.addEventListener("DOMContentLoaded",()=>{Om(),ce(),document.getElementById("login-form").addEventListener("submit",async w=>{w.preventDefault();const S=document.getElementById("login-id").value.trim(),C=document.getElementById("login-pw").value,k=document.getElementById("login-error");if(k.classList.add("hidden"),S===wr.id){await km(C)===wr.passwordHash?(M.currentUser="admin",ln(),ce(),Q("관리자 계정으로 로그인했습니다.","success")):(k.innerText="관리자 비밀번호가 일치하지 않습니다.",k.classList.remove("hidden"));return}if(!Pi){k.innerText="클라우드 데이터를 불러오는 중입니다. 잠시 후 다시 시도해 주세요.",k.classList.remove("hidden");return}const V=M.students.find(U=>U.id===S);V?V.password===C?(M.currentUser=V,ln(),ce(),Q(`${V.id} 학생으로 로그인했습니다.`,"success")):(k.innerText="비밀번호가 일치하지 않습니다.",k.classList.remove("hidden")):(k.innerText="존재하지 않는 학번입니다. (30717 및 30901~30936 사이)",k.classList.remove("hidden"))}),document.getElementById("btn-student-logout").addEventListener("click",()=>{M.currentUser=null,ln(),ce(),Q("로그아웃되었습니다.","success")}),document.getElementById("btn-admin-logout").addEventListener("click",()=>{M.currentUser=null,ln(),ce(),Q("로그아웃되었습니다.","success")}),document.getElementById("btn-change-pw-open").addEventListener("click",()=>{document.getElementById("pwd-change-error").classList.add("hidden"),document.getElementById("pwd-change-success").classList.add("hidden"),document.getElementById("pwd-change-form").reset(),document.getElementById("pwd-change-modal").classList.remove("hidden")}),document.getElementById("btn-change-pw-close").addEventListener("click",()=>{document.getElementById("pwd-change-modal").classList.add("hidden")}),document.getElementById("pwd-change-form").addEventListener("submit",w=>{w.preventDefault();const S=document.getElementById("change-pw-current").value,C=document.getElementById("change-pw-new").value,k=document.getElementById("change-pw-confirm").value;zm(S,C,k)});const a=document.getElementById("pwd-change-modal");a.addEventListener("click",w=>{w.target===a&&a.classList.add("hidden")}),document.getElementById("student-search-input").addEventListener("input",()=>{_c()}),document.getElementById("btn-reset-all-data").addEventListener("click",()=>{Gm()}),document.getElementById("settlement-form").addEventListener("submit",w=>{w.preventDefault();const S=document.getElementById("rank-1").value,C=document.getElementById("rank-2").value,k=document.getElementById("rank-3").value,V=document.getElementById("rank-4").value,U=document.getElementById("rank-5").value;jm([S,C,k,V,U])});const m=document.getElementById("btn-admin-add-student"),E=document.getElementById("admin-add-student-id");if(m&&E){const w=async()=>{const S=E.value.trim();if(!S){Q("학번을 입력해주세요.","error");return}if(!/^\d{5}$/.test(S)){Q("학번은 5자리 숫자여야 합니다. (예: 30901)","error");return}if(M.students.some(k=>k.id===S)){Q("이미 존재하는 학번입니다.","error");return}try{const k=Vt(tt,"students",S),V={id:S,name:`${S} 학생`,password:S,tokens:1e3,bets:{1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0}};await lc(k,V),Q(`${S} 학생이 성공적으로 추가되었습니다!`,"success"),E.value=""}catch(k){Q("학생 추가 실패: "+k.message,"error")}};m.addEventListener("click",w),E.addEventListener("keydown",S=>{S.key==="Enter"&&w()})}});
