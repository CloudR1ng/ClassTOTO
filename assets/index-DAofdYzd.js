(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();var Po={};/**
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
 */const Ca=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Zc=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],c=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Da={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,c=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,m=o>>2,y=(o&3)<<4|c>>4;let w=(c&15)<<2|d>>6,b=d&63;h||(b=64,a||(w=64)),r.push(e[m],e[y],e[w],e[b])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Ca(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Zc(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const y=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||c==null||d==null||y==null)throw new tl;const w=o<<2|c>>4;if(r.push(w),d!==64){const b=c<<4&240|d>>2;if(r.push(b),y!==64){const V=d<<6&192|y;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class tl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const el=function(n){const t=Ca(n);return Da.encodeByteArray(t,!0)},cr=function(n){return el(n).replace(/\./g,"")},nl=function(n){try{return Da.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */const sl=()=>rl().__FIREBASE_DEFAULTS__,il=()=>{if(typeof process>"u"||typeof Po>"u")return;const n=Po.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ol=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&nl(n[1]);return t&&JSON.parse(t)},Fs=()=>{try{return sl()||il()||ol()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},al=n=>{var t,e;return(e=(t=Fs())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},ul=n=>{const t=al(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},ka=()=>{var n;return(n=Fs())===null||n===void 0?void 0:n.config};/**
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
 */function ll(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[cr(JSON.stringify(e)),cr(JSON.stringify(a)),""].join(".")}/**
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
 */function hl(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dl(){var n;const t=(n=Fs())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fl(){return!dl()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ml(){try{return typeof indexedDB=="object"}catch{return!1}}function pl(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
 */const gl="FirebaseError";class Fe extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=gl,Object.setPrototypeOf(this,Fe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Na.prototype.create)}}class Na{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?_l(o,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Fe(s,c,r)}}function _l(n,t){return n.replace(yl,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const yl=/\{\$([^}]+)}/g;function ps(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(Vo(o)&&Vo(a)){if(!ps(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Vo(n){return n!==null&&typeof n=="object"}/**
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
 */function Ct(n){return n&&n._delegate?n._delegate:n}class gn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */var z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(z||(z={}));const wl={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},Al=z.INFO,Rl={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},bl=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=Rl[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class xa{constructor(t){this.name=t,this._logLevel=Al,this._logHandler=bl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in z))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?wl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...t),this._logHandler(this,z.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...t),this._logHandler(this,z.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,z.INFO,...t),this._logHandler(this,z.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,z.WARN,...t),this._logHandler(this,z.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...t),this._logHandler(this,z.ERROR,...t)}}const Sl=(n,t)=>t.some(e=>n instanceof e);let Co,Do;function Pl(){return Co||(Co=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vl(){return Do||(Do=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const La=new WeakMap,gs=new WeakMap,Ma=new WeakMap,os=new WeakMap,Bs=new WeakMap;function Cl(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(Xt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&La.set(e,n)}).catch(()=>{}),Bs.set(t,n),t}function Dl(n){if(gs.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});gs.set(n,t)}let _s={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return gs.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Ma.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Xt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function kl(n){_s=n(_s)}function Nl(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(as(this),t,...e);return Ma.set(r,t.sort?t.sort():[t]),Xt(r)}:Vl().includes(n)?function(...t){return n.apply(as(this),t),Xt(La.get(this))}:function(...t){return Xt(n.apply(as(this),t))}}function xl(n){return typeof n=="function"?Nl(n):(n instanceof IDBTransaction&&Dl(n),Sl(n,Pl())?new Proxy(n,_s):n)}function Xt(n){if(n instanceof IDBRequest)return Cl(n);if(os.has(n))return os.get(n);const t=xl(n);return t!==n&&(os.set(n,t),Bs.set(t,n)),t}const as=n=>Bs.get(n);function Ll(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),c=Xt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Xt(a.result),h.oldVersion,h.newVersion,Xt(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Ml=["get","getKey","getAll","getAllKeys","count"],Ol=["put","add","delete","clear"],us=new Map;function ko(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(us.get(t))return us.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=Ol.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ml.includes(e)))return;const o=async function(a,...c){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[e](...c),s&&h.done]))[0]};return us.set(t,o),o}kl(n=>({...n,get:(t,e,r)=>ko(t,e)||n.get(t,e,r),has:(t,e)=>!!ko(t,e)||n.has(t,e)}));/**
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
 */class Fl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Bl(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Bl(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ys="@firebase/app",No="0.10.13";/**
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
 */const qt=new xa("@firebase/app"),Ul="@firebase/app-compat",ql="@firebase/analytics-compat",$l="@firebase/analytics",jl="@firebase/app-check-compat",zl="@firebase/app-check",Hl="@firebase/auth",Kl="@firebase/auth-compat",Gl="@firebase/database",Wl="@firebase/data-connect",Ql="@firebase/database-compat",Xl="@firebase/functions",Yl="@firebase/functions-compat",Jl="@firebase/installations",Zl="@firebase/installations-compat",th="@firebase/messaging",eh="@firebase/messaging-compat",nh="@firebase/performance",rh="@firebase/performance-compat",sh="@firebase/remote-config",ih="@firebase/remote-config-compat",oh="@firebase/storage",ah="@firebase/storage-compat",uh="@firebase/firestore",ch="@firebase/vertexai-preview",lh="@firebase/firestore-compat",hh="firebase",dh="10.14.1";/**
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
 */const Es="[DEFAULT]",fh={[ys]:"fire-core",[Ul]:"fire-core-compat",[$l]:"fire-analytics",[ql]:"fire-analytics-compat",[zl]:"fire-app-check",[jl]:"fire-app-check-compat",[Hl]:"fire-auth",[Kl]:"fire-auth-compat",[Gl]:"fire-rtdb",[Wl]:"fire-data-connect",[Ql]:"fire-rtdb-compat",[Xl]:"fire-fn",[Yl]:"fire-fn-compat",[Jl]:"fire-iid",[Zl]:"fire-iid-compat",[th]:"fire-fcm",[eh]:"fire-fcm-compat",[nh]:"fire-perf",[rh]:"fire-perf-compat",[sh]:"fire-rc",[ih]:"fire-rc-compat",[oh]:"fire-gcs",[ah]:"fire-gcs-compat",[uh]:"fire-fst",[lh]:"fire-fst-compat",[ch]:"fire-vertex","fire-js":"fire-js",[hh]:"fire-js-all"};/**
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
 */const lr=new Map,mh=new Map,vs=new Map;function xo(n,t){try{n.container.addComponent(t)}catch(e){qt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function hr(n){const t=n.name;if(vs.has(t))return qt.debug(`There were multiple attempts to register component ${t}.`),!1;vs.set(t,n);for(const e of lr.values())xo(e,n);for(const e of mh.values())xo(e,n);return!0}function ph(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const gh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yt=new Na("app","Firebase",gh);/**
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
 */class _h{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Yt.create("app-deleted",{appName:this._name})}}/**
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
 */const yh=dh;function Oa(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Es,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Yt.create("bad-app-name",{appName:String(s)});if(e||(e=ka()),!e)throw Yt.create("no-options");const o=lr.get(s);if(o){if(ps(e,o.options)&&ps(r,o.config))return o;throw Yt.create("duplicate-app",{appName:s})}const a=new Il(s);for(const h of vs.values())a.addComponent(h);const c=new _h(e,r,a);return lr.set(s,c),c}function Eh(n=Es){const t=lr.get(n);if(!t&&n===Es&&ka())return Oa();if(!t)throw Yt.create("no-app",{appName:n});return t}function Ve(n,t,e){var r;let s=(r=fh[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const c=[`Unable to register library "${s}" with version "${t}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),qt.warn(c.join(" "));return}hr(new gn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const vh="firebase-heartbeat-database",Th=1,_n="firebase-heartbeat-store";let cs=null;function Fa(){return cs||(cs=Ll(vh,Th,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(_n)}catch(e){console.warn(e)}}}}).catch(n=>{throw Yt.create("idb-open",{originalErrorMessage:n.message})})),cs}async function Ih(n){try{const e=(await Fa()).transaction(_n),r=await e.objectStore(_n).get(Ba(n));return await e.done,r}catch(t){if(t instanceof Fe)qt.warn(t.message);else{const e=Yt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});qt.warn(e.message)}}}async function Lo(n,t){try{const r=(await Fa()).transaction(_n,"readwrite");await r.objectStore(_n).put(t,Ba(n)),await r.done}catch(e){if(e instanceof Fe)qt.warn(e.message);else{const r=Yt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});qt.warn(r.message)}}}function Ba(n){return`${n.name}!${n.options.appId}`}/**
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
 */const wh=1024,Ah=30*24*60*60*1e3;class Rh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Sh(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Mo();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=Ah}),this._storage.overwrite(this._heartbeatsCache))}catch(r){qt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Mo(),{heartbeatsToSend:r,unsentEntries:s}=bh(this._heartbeatsCache.heartbeats),o=cr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return qt.warn(e),""}}}function Mo(){return new Date().toISOString().substring(0,10)}function bh(n,t=wh){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Oo(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Oo(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Sh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ml()?pl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Ih(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Lo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Lo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Oo(n){return cr(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Ph(n){hr(new gn("platform-logger",t=>new Fl(t),"PRIVATE")),hr(new gn("heartbeat",t=>new Rh(t),"PRIVATE")),Ve(ys,No,n),Ve(ys,No,"esm2017"),Ve("fire-js","")}Ph("");var Vh="firebase",Ch="10.14.1";/**
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
 */Ve(Vh,Ch,"app");var Fo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var he,Ua;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,p){function _(){}_.prototype=p.prototype,T.D=p.prototype,T.prototype=new _,T.prototype.constructor=T,T.C=function(E,v,A){for(var g=Array(arguments.length-2),Ot=2;Ot<arguments.length;Ot++)g[Ot-2]=arguments[Ot];return p.prototype[v].apply(E,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,p,_){_||(_=0);var E=Array(16);if(typeof p=="string")for(var v=0;16>v;++v)E[v]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(v=0;16>v;++v)E[v]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=T.g[0],_=T.g[1],v=T.g[2];var A=T.g[3],g=p+(A^_&(v^A))+E[0]+3614090360&4294967295;p=_+(g<<7&4294967295|g>>>25),g=A+(v^p&(_^v))+E[1]+3905402710&4294967295,A=p+(g<<12&4294967295|g>>>20),g=v+(_^A&(p^_))+E[2]+606105819&4294967295,v=A+(g<<17&4294967295|g>>>15),g=_+(p^v&(A^p))+E[3]+3250441966&4294967295,_=v+(g<<22&4294967295|g>>>10),g=p+(A^_&(v^A))+E[4]+4118548399&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(v^p&(_^v))+E[5]+1200080426&4294967295,A=p+(g<<12&4294967295|g>>>20),g=v+(_^A&(p^_))+E[6]+2821735955&4294967295,v=A+(g<<17&4294967295|g>>>15),g=_+(p^v&(A^p))+E[7]+4249261313&4294967295,_=v+(g<<22&4294967295|g>>>10),g=p+(A^_&(v^A))+E[8]+1770035416&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(v^p&(_^v))+E[9]+2336552879&4294967295,A=p+(g<<12&4294967295|g>>>20),g=v+(_^A&(p^_))+E[10]+4294925233&4294967295,v=A+(g<<17&4294967295|g>>>15),g=_+(p^v&(A^p))+E[11]+2304563134&4294967295,_=v+(g<<22&4294967295|g>>>10),g=p+(A^_&(v^A))+E[12]+1804603682&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(v^p&(_^v))+E[13]+4254626195&4294967295,A=p+(g<<12&4294967295|g>>>20),g=v+(_^A&(p^_))+E[14]+2792965006&4294967295,v=A+(g<<17&4294967295|g>>>15),g=_+(p^v&(A^p))+E[15]+1236535329&4294967295,_=v+(g<<22&4294967295|g>>>10),g=p+(v^A&(_^v))+E[1]+4129170786&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^v&(p^_))+E[6]+3225465664&4294967295,A=p+(g<<9&4294967295|g>>>23),g=v+(p^_&(A^p))+E[11]+643717713&4294967295,v=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(v^A))+E[0]+3921069994&4294967295,_=v+(g<<20&4294967295|g>>>12),g=p+(v^A&(_^v))+E[5]+3593408605&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^v&(p^_))+E[10]+38016083&4294967295,A=p+(g<<9&4294967295|g>>>23),g=v+(p^_&(A^p))+E[15]+3634488961&4294967295,v=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(v^A))+E[4]+3889429448&4294967295,_=v+(g<<20&4294967295|g>>>12),g=p+(v^A&(_^v))+E[9]+568446438&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^v&(p^_))+E[14]+3275163606&4294967295,A=p+(g<<9&4294967295|g>>>23),g=v+(p^_&(A^p))+E[3]+4107603335&4294967295,v=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(v^A))+E[8]+1163531501&4294967295,_=v+(g<<20&4294967295|g>>>12),g=p+(v^A&(_^v))+E[13]+2850285829&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^v&(p^_))+E[2]+4243563512&4294967295,A=p+(g<<9&4294967295|g>>>23),g=v+(p^_&(A^p))+E[7]+1735328473&4294967295,v=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(v^A))+E[12]+2368359562&4294967295,_=v+(g<<20&4294967295|g>>>12),g=p+(_^v^A)+E[5]+4294588738&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^v)+E[8]+2272392833&4294967295,A=p+(g<<11&4294967295|g>>>21),g=v+(A^p^_)+E[11]+1839030562&4294967295,v=A+(g<<16&4294967295|g>>>16),g=_+(v^A^p)+E[14]+4259657740&4294967295,_=v+(g<<23&4294967295|g>>>9),g=p+(_^v^A)+E[1]+2763975236&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^v)+E[4]+1272893353&4294967295,A=p+(g<<11&4294967295|g>>>21),g=v+(A^p^_)+E[7]+4139469664&4294967295,v=A+(g<<16&4294967295|g>>>16),g=_+(v^A^p)+E[10]+3200236656&4294967295,_=v+(g<<23&4294967295|g>>>9),g=p+(_^v^A)+E[13]+681279174&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^v)+E[0]+3936430074&4294967295,A=p+(g<<11&4294967295|g>>>21),g=v+(A^p^_)+E[3]+3572445317&4294967295,v=A+(g<<16&4294967295|g>>>16),g=_+(v^A^p)+E[6]+76029189&4294967295,_=v+(g<<23&4294967295|g>>>9),g=p+(_^v^A)+E[9]+3654602809&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^v)+E[12]+3873151461&4294967295,A=p+(g<<11&4294967295|g>>>21),g=v+(A^p^_)+E[15]+530742520&4294967295,v=A+(g<<16&4294967295|g>>>16),g=_+(v^A^p)+E[2]+3299628645&4294967295,_=v+(g<<23&4294967295|g>>>9),g=p+(v^(_|~A))+E[0]+4096336452&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~v))+E[7]+1126891415&4294967295,A=p+(g<<10&4294967295|g>>>22),g=v+(p^(A|~_))+E[14]+2878612391&4294967295,v=A+(g<<15&4294967295|g>>>17),g=_+(A^(v|~p))+E[5]+4237533241&4294967295,_=v+(g<<21&4294967295|g>>>11),g=p+(v^(_|~A))+E[12]+1700485571&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~v))+E[3]+2399980690&4294967295,A=p+(g<<10&4294967295|g>>>22),g=v+(p^(A|~_))+E[10]+4293915773&4294967295,v=A+(g<<15&4294967295|g>>>17),g=_+(A^(v|~p))+E[1]+2240044497&4294967295,_=v+(g<<21&4294967295|g>>>11),g=p+(v^(_|~A))+E[8]+1873313359&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~v))+E[15]+4264355552&4294967295,A=p+(g<<10&4294967295|g>>>22),g=v+(p^(A|~_))+E[6]+2734768916&4294967295,v=A+(g<<15&4294967295|g>>>17),g=_+(A^(v|~p))+E[13]+1309151649&4294967295,_=v+(g<<21&4294967295|g>>>11),g=p+(v^(_|~A))+E[4]+4149444226&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~v))+E[11]+3174756917&4294967295,A=p+(g<<10&4294967295|g>>>22),g=v+(p^(A|~_))+E[2]+718787259&4294967295,v=A+(g<<15&4294967295|g>>>17),g=_+(A^(v|~p))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+p&4294967295,T.g[1]=T.g[1]+(v+(g<<21&4294967295|g>>>11))&4294967295,T.g[2]=T.g[2]+v&4294967295,T.g[3]=T.g[3]+A&4294967295}r.prototype.u=function(T,p){p===void 0&&(p=T.length);for(var _=p-this.blockSize,E=this.B,v=this.h,A=0;A<p;){if(v==0)for(;A<=_;)s(this,T,A),A+=this.blockSize;if(typeof T=="string"){for(;A<p;)if(E[v++]=T.charCodeAt(A++),v==this.blockSize){s(this,E),v=0;break}}else for(;A<p;)if(E[v++]=T[A++],v==this.blockSize){s(this,E),v=0;break}}this.h=v,this.o+=p},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var p=1;p<T.length-8;++p)T[p]=0;var _=8*this.o;for(p=T.length-8;p<T.length;++p)T[p]=_&255,_/=256;for(this.u(T),T=Array(16),p=_=0;4>p;++p)for(var E=0;32>E;E+=8)T[_++]=this.g[p]>>>E&255;return T};function o(T,p){var _=c;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=p(T)}function a(T,p){this.h=p;for(var _=[],E=!0,v=T.length-1;0<=v;v--){var A=T[v]|0;E&&A==p||(_[v]=A,E=!1)}this.g=_}var c={};function h(T){return-128<=T&&128>T?o(T,function(p){return new a([p|0],0>p?-1:0)}):new a([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return y;if(0>T)return D(d(-T));for(var p=[],_=1,E=0;T>=_;E++)p[E]=T/_|0,_*=4294967296;return new a(p,0)}function m(T,p){if(T.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(T.charAt(0)=="-")return D(m(T.substring(1),p));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(p,8)),E=y,v=0;v<T.length;v+=8){var A=Math.min(8,T.length-v),g=parseInt(T.substring(v,v+A),p);8>A?(A=d(Math.pow(p,A)),E=E.j(A).add(d(g))):(E=E.j(_),E=E.add(d(g)))}return E}var y=h(0),w=h(1),b=h(16777216);n=a.prototype,n.m=function(){if(N(this))return-D(this).m();for(var T=0,p=1,_=0;_<this.g.length;_++){var E=this.i(_);T+=(0<=E?E:4294967296+E)*p,p*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(V(this))return"0";if(N(this))return"-"+D(this).toString(T);for(var p=d(Math.pow(T,6)),_=this,E="";;){var v=Y(_,p).g;_=$(_,v.j(p));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(T);if(_=v,V(_))return A+E;for(;6>A.length;)A="0"+A;E=A+E}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function V(T){if(T.h!=0)return!1;for(var p=0;p<T.g.length;p++)if(T.g[p]!=0)return!1;return!0}function N(T){return T.h==-1}n.l=function(T){return T=$(this,T),N(T)?-1:V(T)?0:1};function D(T){for(var p=T.g.length,_=[],E=0;E<p;E++)_[E]=~T.g[E];return new a(_,~T.h).add(w)}n.abs=function(){return N(this)?D(this):this},n.add=function(T){for(var p=Math.max(this.g.length,T.g.length),_=[],E=0,v=0;v<=p;v++){var A=E+(this.i(v)&65535)+(T.i(v)&65535),g=(A>>>16)+(this.i(v)>>>16)+(T.i(v)>>>16);E=g>>>16,A&=65535,g&=65535,_[v]=g<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function $(T,p){return T.add(D(p))}n.j=function(T){if(V(this)||V(T))return y;if(N(this))return N(T)?D(this).j(D(T)):D(D(this).j(T));if(N(T))return D(this.j(D(T)));if(0>this.l(b)&&0>T.l(b))return d(this.m()*T.m());for(var p=this.g.length+T.g.length,_=[],E=0;E<2*p;E++)_[E]=0;for(E=0;E<this.g.length;E++)for(var v=0;v<T.g.length;v++){var A=this.i(E)>>>16,g=this.i(E)&65535,Ot=T.i(v)>>>16,je=T.i(v)&65535;_[2*E+2*v]+=g*je,W(_,2*E+2*v),_[2*E+2*v+1]+=A*je,W(_,2*E+2*v+1),_[2*E+2*v+1]+=g*Ot,W(_,2*E+2*v+1),_[2*E+2*v+2]+=A*Ot,W(_,2*E+2*v+2)}for(E=0;E<p;E++)_[E]=_[2*E+1]<<16|_[2*E];for(E=p;E<2*p;E++)_[E]=0;return new a(_,0)};function W(T,p){for(;(T[p]&65535)!=T[p];)T[p+1]+=T[p]>>>16,T[p]&=65535,p++}function q(T,p){this.g=T,this.h=p}function Y(T,p){if(V(p))throw Error("division by zero");if(V(T))return new q(y,y);if(N(T))return p=Y(D(T),p),new q(D(p.g),D(p.h));if(N(p))return p=Y(T,D(p)),new q(D(p.g),p.h);if(30<T.g.length){if(N(T)||N(p))throw Error("slowDivide_ only works with positive integers.");for(var _=w,E=p;0>=E.l(T);)_=Mt(_),E=Mt(E);var v=ct(_,1),A=ct(E,1);for(E=ct(E,2),_=ct(_,2);!V(E);){var g=A.add(E);0>=g.l(T)&&(v=v.add(_),A=g),E=ct(E,1),_=ct(_,1)}return p=$(T,v.j(p)),new q(v,p)}for(v=y;0<=T.l(p);){for(_=Math.max(1,Math.floor(T.m()/p.m())),E=Math.ceil(Math.log(_)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),A=d(_),g=A.j(p);N(g)||0<g.l(T);)_-=E,A=d(_),g=A.j(p);V(A)&&(A=w),v=v.add(A),T=$(T,g)}return new q(v,T)}n.A=function(T){return Y(this,T).h},n.and=function(T){for(var p=Math.max(this.g.length,T.g.length),_=[],E=0;E<p;E++)_[E]=this.i(E)&T.i(E);return new a(_,this.h&T.h)},n.or=function(T){for(var p=Math.max(this.g.length,T.g.length),_=[],E=0;E<p;E++)_[E]=this.i(E)|T.i(E);return new a(_,this.h|T.h)},n.xor=function(T){for(var p=Math.max(this.g.length,T.g.length),_=[],E=0;E<p;E++)_[E]=this.i(E)^T.i(E);return new a(_,this.h^T.h)};function Mt(T){for(var p=T.g.length+1,_=[],E=0;E<p;E++)_[E]=T.i(E)<<1|T.i(E-1)>>>31;return new a(_,T.h)}function ct(T,p){var _=p>>5;p%=32;for(var E=T.g.length-_,v=[],A=0;A<E;A++)v[A]=0<p?T.i(A+_)>>>p|T.i(A+_+1)<<32-p:T.i(A+_);return new a(v,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ua=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,he=a}).apply(typeof Fo<"u"?Fo:typeof self<"u"?self:typeof window<"u"?window:{});var tr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qa,un,$a,sr,Ts,ja,za,Ha;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,u,l){return i==Array.prototype||i==Object.prototype||(i[u]=l.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof tr=="object"&&tr];for(var u=0;u<i.length;++u){var l=i[u];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function s(i,u){if(u)t:{var l=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var I=i[f];if(!(I in l))break t;l=l[I]}i=i[i.length-1],f=l[i],u=u(f),u!=f&&u!=null&&t(l,i,{configurable:!0,writable:!0,value:u})}}function o(i,u){i instanceof String&&(i+="");var l=0,f=!1,I={next:function(){if(!f&&l<i.length){var R=l++;return{value:u(R,i[R]),done:!1}}return f=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}s("Array.prototype.values",function(i){return i||function(){return o(this,function(u,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(i){var u=typeof i;return u=u!="object"?u:i?Array.isArray(i)?"array":u:"null",u=="array"||u=="object"&&typeof i.length=="number"}function d(i){var u=typeof i;return u=="object"&&i!=null||u=="function"}function m(i,u,l){return i.call.apply(i.bind,arguments)}function y(i,u,l){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,f),i.apply(u,I)}}return function(){return i.apply(u,arguments)}}function w(i,u,l){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:y,w.apply(null,arguments)}function b(i,u){var l=Array.prototype.slice.call(arguments,1);return function(){var f=l.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function V(i,u){function l(){}l.prototype=u.prototype,i.aa=u.prototype,i.prototype=new l,i.prototype.constructor=i,i.Qb=function(f,I,R){for(var C=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)C[Q-2]=arguments[Q];return u.prototype[I].apply(f,C)}}function N(i){const u=i.length;if(0<u){const l=Array(u);for(let f=0;f<u;f++)l[f]=i[f];return l}return[]}function D(i,u){for(let l=1;l<arguments.length;l++){const f=arguments[l];if(h(f)){const I=i.length||0,R=f.length||0;i.length=I+R;for(let C=0;C<R;C++)i[I+C]=f[C]}else i.push(f)}}class ${constructor(u,l){this.i=u,this.j=l,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function W(i){return/^[\s\xa0]*$/.test(i)}function q(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function Y(i){return Y[" "](i),i}Y[" "]=function(){};var Mt=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function ct(i,u,l){for(const f in i)u.call(l,i[f],f,i)}function T(i,u){for(const l in i)u.call(void 0,i[l],l,i)}function p(i){const u={};for(const l in i)u[l]=i[l];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(i,u){let l,f;for(let I=1;I<arguments.length;I++){f=arguments[I];for(l in f)i[l]=f[l];for(let R=0;R<_.length;R++)l=_[R],Object.prototype.hasOwnProperty.call(f,l)&&(i[l]=f[l])}}function v(i){var u=1;i=i.split(":");const l=[];for(;0<u&&i.length;)l.push(i.shift()),u--;return i.length&&l.push(i.join(":")),l}function A(i){c.setTimeout(()=>{throw i},0)}function g(){var i=Mr;let u=null;return i.g&&(u=i.g,i.g=i.g.next,i.g||(i.h=null),u.next=null),u}class Ot{constructor(){this.h=this.g=null}add(u,l){const f=je.get();f.set(u,l),this.h?this.h.next=f:this.g=f,this.h=f}}var je=new $(()=>new yc,i=>i.reset());class yc{constructor(){this.next=this.g=this.h=null}set(u,l){this.h=u,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let ze,He=!1,Mr=new Ot,Si=()=>{const i=c.Promise.resolve(void 0);ze=()=>{i.then(Ec)}};var Ec=()=>{for(var i;i=g();){try{i.h.call(i.g)}catch(l){A(l)}var u=je;u.j(i),100>u.h&&(u.h++,i.next=u.g,u.g=i)}He=!1};function zt(){this.s=this.s,this.C=this.C}zt.prototype.s=!1,zt.prototype.ma=function(){this.s||(this.s=!0,this.N())},zt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function gt(i,u){this.type=i,this.g=this.target=u,this.defaultPrevented=!1}gt.prototype.h=function(){this.defaultPrevented=!0};var vc=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,u=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};c.addEventListener("test",l,u),c.removeEventListener("test",l,u)}catch{}return i}();function Ke(i,u){if(gt.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var l=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=u,u=i.relatedTarget){if(Mt){t:{try{Y(u.nodeName);var I=!0;break t}catch{}I=!1}I||(u=null)}}else l=="mouseover"?u=i.fromElement:l=="mouseout"&&(u=i.toElement);this.relatedTarget=u,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Tc[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Ke.aa.h.call(this)}}V(Ke,gt);var Tc={2:"touch",3:"pen",4:"mouse"};Ke.prototype.h=function(){Ke.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Ln="closure_listenable_"+(1e6*Math.random()|0),Ic=0;function wc(i,u,l,f,I){this.listener=i,this.proxy=null,this.src=u,this.type=l,this.capture=!!f,this.ha=I,this.key=++Ic,this.da=this.fa=!1}function Mn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function On(i){this.src=i,this.g={},this.h=0}On.prototype.add=function(i,u,l,f,I){var R=i.toString();i=this.g[R],i||(i=this.g[R]=[],this.h++);var C=Fr(i,u,f,I);return-1<C?(u=i[C],l||(u.fa=!1)):(u=new wc(u,this.src,R,!!f,I),u.fa=l,i.push(u)),u};function Or(i,u){var l=u.type;if(l in i.g){var f=i.g[l],I=Array.prototype.indexOf.call(f,u,void 0),R;(R=0<=I)&&Array.prototype.splice.call(f,I,1),R&&(Mn(u),i.g[l].length==0&&(delete i.g[l],i.h--))}}function Fr(i,u,l,f){for(var I=0;I<i.length;++I){var R=i[I];if(!R.da&&R.listener==u&&R.capture==!!l&&R.ha==f)return I}return-1}var Br="closure_lm_"+(1e6*Math.random()|0),Ur={};function Pi(i,u,l,f,I){if(Array.isArray(u)){for(var R=0;R<u.length;R++)Pi(i,u[R],l,f,I);return null}return l=Di(l),i&&i[Ln]?i.K(u,l,d(f)?!!f.capture:!1,I):Ac(i,u,l,!1,f,I)}function Ac(i,u,l,f,I,R){if(!u)throw Error("Invalid event type");var C=d(I)?!!I.capture:!!I,Q=$r(i);if(Q||(i[Br]=Q=new On(i)),l=Q.add(u,l,f,C,R),l.proxy)return l;if(f=Rc(),l.proxy=f,f.src=i,f.listener=l,i.addEventListener)vc||(I=C),I===void 0&&(I=!1),i.addEventListener(u.toString(),f,I);else if(i.attachEvent)i.attachEvent(Ci(u.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Rc(){function i(l){return u.call(i.src,i.listener,l)}const u=bc;return i}function Vi(i,u,l,f,I){if(Array.isArray(u))for(var R=0;R<u.length;R++)Vi(i,u[R],l,f,I);else f=d(f)?!!f.capture:!!f,l=Di(l),i&&i[Ln]?(i=i.i,u=String(u).toString(),u in i.g&&(R=i.g[u],l=Fr(R,l,f,I),-1<l&&(Mn(R[l]),Array.prototype.splice.call(R,l,1),R.length==0&&(delete i.g[u],i.h--)))):i&&(i=$r(i))&&(u=i.g[u.toString()],i=-1,u&&(i=Fr(u,l,f,I)),(l=-1<i?u[i]:null)&&qr(l))}function qr(i){if(typeof i!="number"&&i&&!i.da){var u=i.src;if(u&&u[Ln])Or(u.i,i);else{var l=i.type,f=i.proxy;u.removeEventListener?u.removeEventListener(l,f,i.capture):u.detachEvent?u.detachEvent(Ci(l),f):u.addListener&&u.removeListener&&u.removeListener(f),(l=$r(u))?(Or(l,i),l.h==0&&(l.src=null,u[Br]=null)):Mn(i)}}}function Ci(i){return i in Ur?Ur[i]:Ur[i]="on"+i}function bc(i,u){if(i.da)i=!0;else{u=new Ke(u,this);var l=i.listener,f=i.ha||i.src;i.fa&&qr(i),i=l.call(f,u)}return i}function $r(i){return i=i[Br],i instanceof On?i:null}var jr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Di(i){return typeof i=="function"?i:(i[jr]||(i[jr]=function(u){return i.handleEvent(u)}),i[jr])}function _t(){zt.call(this),this.i=new On(this),this.M=this,this.F=null}V(_t,zt),_t.prototype[Ln]=!0,_t.prototype.removeEventListener=function(i,u,l,f){Vi(this,i,u,l,f)};function It(i,u){var l,f=i.F;if(f)for(l=[];f;f=f.F)l.push(f);if(i=i.M,f=u.type||u,typeof u=="string")u=new gt(u,i);else if(u instanceof gt)u.target=u.target||i;else{var I=u;u=new gt(f,i),E(u,I)}if(I=!0,l)for(var R=l.length-1;0<=R;R--){var C=u.g=l[R];I=Fn(C,f,!0,u)&&I}if(C=u.g=i,I=Fn(C,f,!0,u)&&I,I=Fn(C,f,!1,u)&&I,l)for(R=0;R<l.length;R++)C=u.g=l[R],I=Fn(C,f,!1,u)&&I}_t.prototype.N=function(){if(_t.aa.N.call(this),this.i){var i=this.i,u;for(u in i.g){for(var l=i.g[u],f=0;f<l.length;f++)Mn(l[f]);delete i.g[u],i.h--}}this.F=null},_t.prototype.K=function(i,u,l,f){return this.i.add(String(i),u,!1,l,f)},_t.prototype.L=function(i,u,l,f){return this.i.add(String(i),u,!0,l,f)};function Fn(i,u,l,f){if(u=i.i.g[String(u)],!u)return!0;u=u.concat();for(var I=!0,R=0;R<u.length;++R){var C=u[R];if(C&&!C.da&&C.capture==l){var Q=C.listener,lt=C.ha||C.src;C.fa&&Or(i.i,C),I=Q.call(lt,f)!==!1&&I}}return I&&!f.defaultPrevented}function ki(i,u,l){if(typeof i=="function")l&&(i=w(i,l));else if(i&&typeof i.handleEvent=="function")i=w(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(i,u||0)}function Ni(i){i.g=ki(()=>{i.g=null,i.i&&(i.i=!1,Ni(i))},i.l);const u=i.h;i.h=null,i.m.apply(null,u)}class Sc extends zt{constructor(u,l){super(),this.m=u,this.l=l,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ni(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ge(i){zt.call(this),this.h=i,this.g={}}V(Ge,zt);var xi=[];function Li(i){ct(i.g,function(u,l){this.g.hasOwnProperty(l)&&qr(u)},i),i.g={}}Ge.prototype.N=function(){Ge.aa.N.call(this),Li(this)},Ge.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var zr=c.JSON.stringify,Pc=c.JSON.parse,Vc=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function Hr(){}Hr.prototype.h=null;function Mi(i){return i.h||(i.h=i.i())}function Oi(){}var We={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Kr(){gt.call(this,"d")}V(Kr,gt);function Gr(){gt.call(this,"c")}V(Gr,gt);var se={},Fi=null;function Bn(){return Fi=Fi||new _t}se.La="serverreachability";function Bi(i){gt.call(this,se.La,i)}V(Bi,gt);function Qe(i){const u=Bn();It(u,new Bi(u))}se.STAT_EVENT="statevent";function Ui(i,u){gt.call(this,se.STAT_EVENT,i),this.stat=u}V(Ui,gt);function wt(i){const u=Bn();It(u,new Ui(u,i))}se.Ma="timingevent";function qi(i,u){gt.call(this,se.Ma,i),this.size=u}V(qi,gt);function Xe(i,u){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},u)}function Ye(){this.g=!0}Ye.prototype.xa=function(){this.g=!1};function Cc(i,u,l,f,I,R){i.info(function(){if(i.g)if(R)for(var C="",Q=R.split("&"),lt=0;lt<Q.length;lt++){var K=Q[lt].split("=");if(1<K.length){var yt=K[0];K=K[1];var Et=yt.split("_");C=2<=Et.length&&Et[1]=="type"?C+(yt+"="+K+"&"):C+(yt+"=redacted&")}}else C=null;else C=R;return"XMLHTTP REQ ("+f+") [attempt "+I+"]: "+u+`
`+l+`
`+C})}function Dc(i,u,l,f,I,R,C){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+I+"]: "+u+`
`+l+`
`+R+" "+C})}function Ee(i,u,l,f){i.info(function(){return"XMLHTTP TEXT ("+u+"): "+Nc(i,l)+(f?" "+f:"")})}function kc(i,u){i.info(function(){return"TIMEOUT: "+u})}Ye.prototype.info=function(){};function Nc(i,u){if(!i.g)return u;if(!u)return null;try{var l=JSON.parse(u);if(l){for(i=0;i<l.length;i++)if(Array.isArray(l[i])){var f=l[i];if(!(2>f.length)){var I=f[1];if(Array.isArray(I)&&!(1>I.length)){var R=I[0];if(R!="noop"&&R!="stop"&&R!="close")for(var C=1;C<I.length;C++)I[C]=""}}}}return zr(l)}catch{return u}}var Un={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},$i={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Wr;function qn(){}V(qn,Hr),qn.prototype.g=function(){return new XMLHttpRequest},qn.prototype.i=function(){return{}},Wr=new qn;function Ht(i,u,l,f){this.j=i,this.i=u,this.l=l,this.R=f||1,this.U=new Ge(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ji}function ji(){this.i=null,this.g="",this.h=!1}var zi={},Qr={};function Xr(i,u,l){i.L=1,i.v=Hn(Ft(u)),i.m=l,i.P=!0,Hi(i,null)}function Hi(i,u){i.F=Date.now(),$n(i),i.A=Ft(i.v);var l=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),io(l.i,"t",f),i.C=0,l=i.j.J,i.h=new ji,i.g=Ao(i.j,l?u:null,!i.m),0<i.O&&(i.M=new Sc(w(i.Y,i,i.g),i.O)),u=i.U,l=i.g,f=i.ca;var I="readystatechange";Array.isArray(I)||(I&&(xi[0]=I.toString()),I=xi);for(var R=0;R<I.length;R++){var C=Pi(l,I[R],f||u.handleEvent,!1,u.h||u);if(!C)break;u.g[C.key]=C}u=i.H?p(i.H):{},i.m?(i.u||(i.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,u)):(i.u="GET",i.g.ea(i.A,i.u,null,u)),Qe(),Cc(i.i,i.u,i.A,i.l,i.R,i.m)}Ht.prototype.ca=function(i){i=i.target;const u=this.M;u&&Bt(i)==3?u.j():this.Y(i)},Ht.prototype.Y=function(i){try{if(i==this.g)t:{const Et=Bt(this.g);var u=this.g.Ba();const Ie=this.g.Z();if(!(3>Et)&&(Et!=3||this.g&&(this.h.h||this.g.oa()||fo(this.g)))){this.J||Et!=4||u==7||(u==8||0>=Ie?Qe(3):Qe(2)),Yr(this);var l=this.g.Z();this.X=l;e:if(Ki(this)){var f=fo(this.g);i="";var I=f.length,R=Bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ie(this),Je(this);var C="";break e}this.h.i=new c.TextDecoder}for(u=0;u<I;u++)this.h.h=!0,i+=this.h.i.decode(f[u],{stream:!(R&&u==I-1)});f.length=0,this.h.g+=i,this.C=0,C=this.h.g}else C=this.g.oa();if(this.o=l==200,Dc(this.i,this.u,this.A,this.l,this.R,Et,l),this.o){if(this.T&&!this.K){e:{if(this.g){var Q,lt=this.g;if((Q=lt.g?lt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!W(Q)){var K=Q;break e}}K=null}if(l=K)Ee(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Jr(this,l);else{this.o=!1,this.s=3,wt(12),ie(this),Je(this);break t}}if(this.P){l=!0;let Dt;for(;!this.J&&this.C<C.length;)if(Dt=xc(this,C),Dt==Qr){Et==4&&(this.s=4,wt(14),l=!1),Ee(this.i,this.l,null,"[Incomplete Response]");break}else if(Dt==zi){this.s=4,wt(15),Ee(this.i,this.l,C,"[Invalid Chunk]"),l=!1;break}else Ee(this.i,this.l,Dt,null),Jr(this,Dt);if(Ki(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Et!=4||C.length!=0||this.h.h||(this.s=1,wt(16),l=!1),this.o=this.o&&l,!l)Ee(this.i,this.l,C,"[Invalid Chunked Response]"),ie(this),Je(this);else if(0<C.length&&!this.W){this.W=!0;var yt=this.j;yt.g==this&&yt.ba&&!yt.M&&(yt.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),ss(yt),yt.M=!0,wt(11))}}else Ee(this.i,this.l,C,null),Jr(this,C);Et==4&&ie(this),this.o&&!this.J&&(Et==4?vo(this.j,this):(this.o=!1,$n(this)))}else Yc(this.g),l==400&&0<C.indexOf("Unknown SID")?(this.s=3,wt(12)):(this.s=0,wt(13)),ie(this),Je(this)}}}catch{}finally{}};function Ki(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function xc(i,u){var l=i.C,f=u.indexOf(`
`,l);return f==-1?Qr:(l=Number(u.substring(l,f)),isNaN(l)?zi:(f+=1,f+l>u.length?Qr:(u=u.slice(f,f+l),i.C=f+l,u)))}Ht.prototype.cancel=function(){this.J=!0,ie(this)};function $n(i){i.S=Date.now()+i.I,Gi(i,i.I)}function Gi(i,u){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Xe(w(i.ba,i),u)}function Yr(i){i.B&&(c.clearTimeout(i.B),i.B=null)}Ht.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(kc(this.i,this.A),this.L!=2&&(Qe(),wt(17)),ie(this),this.s=2,Je(this)):Gi(this,this.S-i)};function Je(i){i.j.G==0||i.J||vo(i.j,i)}function ie(i){Yr(i);var u=i.M;u&&typeof u.ma=="function"&&u.ma(),i.M=null,Li(i.U),i.g&&(u=i.g,i.g=null,u.abort(),u.ma())}function Jr(i,u){try{var l=i.j;if(l.G!=0&&(l.g==i||Zr(l.h,i))){if(!i.K&&Zr(l.h,i)&&l.G==3){try{var f=l.Da.g.parse(u)}catch{f=null}if(Array.isArray(f)&&f.length==3){var I=f;if(I[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<i.F)Yn(l),Qn(l);else break t;rs(l),wt(18)}}else l.za=I[1],0<l.za-l.T&&37500>I[2]&&l.F&&l.v==0&&!l.C&&(l.C=Xe(w(l.Za,l),6e3));if(1>=Xi(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else ae(l,11)}else if((i.K||l.g==i)&&Yn(l),!W(u))for(I=l.Da.g.parse(u),u=0;u<I.length;u++){let K=I[u];if(l.T=K[0],K=K[1],l.G==2)if(K[0]=="c"){l.K=K[1],l.ia=K[2];const yt=K[3];yt!=null&&(l.la=yt,l.j.info("VER="+l.la));const Et=K[4];Et!=null&&(l.Aa=Et,l.j.info("SVER="+l.Aa));const Ie=K[5];Ie!=null&&typeof Ie=="number"&&0<Ie&&(f=1.5*Ie,l.L=f,l.j.info("backChannelRequestTimeoutMs_="+f)),f=l;const Dt=i.g;if(Dt){const Zn=Dt.g?Dt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Zn){var R=f.h;R.g||Zn.indexOf("spdy")==-1&&Zn.indexOf("quic")==-1&&Zn.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(ts(R,R.h),R.h=null))}if(f.D){const is=Dt.g?Dt.g.getResponseHeader("X-HTTP-Session-Id"):null;is&&(f.ya=is,J(f.I,f.D,is))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-i.F,l.j.info("Handshake RTT: "+l.R+"ms")),f=l;var C=i;if(f.qa=wo(f,f.J?f.ia:null,f.W),C.K){Yi(f.h,C);var Q=C,lt=f.L;lt&&(Q.I=lt),Q.B&&(Yr(Q),$n(Q)),f.g=C}else yo(f);0<l.i.length&&Xn(l)}else K[0]!="stop"&&K[0]!="close"||ae(l,7);else l.G==3&&(K[0]=="stop"||K[0]=="close"?K[0]=="stop"?ae(l,7):ns(l):K[0]!="noop"&&l.l&&l.l.ta(K),l.v=0)}}Qe(4)}catch{}}var Lc=class{constructor(i,u){this.g=i,this.map=u}};function Wi(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Qi(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Xi(i){return i.h?1:i.g?i.g.size:0}function Zr(i,u){return i.h?i.h==u:i.g?i.g.has(u):!1}function ts(i,u){i.g?i.g.add(u):i.h=u}function Yi(i,u){i.h&&i.h==u?i.h=null:i.g&&i.g.has(u)&&i.g.delete(u)}Wi.prototype.cancel=function(){if(this.i=Ji(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Ji(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let u=i.i;for(const l of i.g.values())u=u.concat(l.D);return u}return N(i.i)}function Mc(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var u=[],l=i.length,f=0;f<l;f++)u.push(i[f]);return u}u=[],l=0;for(f in i)u[l++]=i[f];return u}function Oc(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var u=[];i=i.length;for(var l=0;l<i;l++)u.push(l);return u}u=[],l=0;for(const f in i)u[l++]=f;return u}}}function Zi(i,u){if(i.forEach&&typeof i.forEach=="function")i.forEach(u,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,u,void 0);else for(var l=Oc(i),f=Mc(i),I=f.length,R=0;R<I;R++)u.call(void 0,f[R],l&&l[R],i)}var to=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fc(i,u){if(i){i=i.split("&");for(var l=0;l<i.length;l++){var f=i[l].indexOf("="),I=null;if(0<=f){var R=i[l].substring(0,f);I=i[l].substring(f+1)}else R=i[l];u(R,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function oe(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof oe){this.h=i.h,jn(this,i.j),this.o=i.o,this.g=i.g,zn(this,i.s),this.l=i.l;var u=i.i,l=new en;l.i=u.i,u.g&&(l.g=new Map(u.g),l.h=u.h),eo(this,l),this.m=i.m}else i&&(u=String(i).match(to))?(this.h=!1,jn(this,u[1]||"",!0),this.o=Ze(u[2]||""),this.g=Ze(u[3]||"",!0),zn(this,u[4]),this.l=Ze(u[5]||"",!0),eo(this,u[6]||"",!0),this.m=Ze(u[7]||"")):(this.h=!1,this.i=new en(null,this.h))}oe.prototype.toString=function(){var i=[],u=this.j;u&&i.push(tn(u,no,!0),":");var l=this.g;return(l||u=="file")&&(i.push("//"),(u=this.o)&&i.push(tn(u,no,!0),"@"),i.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&i.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(tn(l,l.charAt(0)=="/"?qc:Uc,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",tn(l,jc)),i.join("")};function Ft(i){return new oe(i)}function jn(i,u,l){i.j=l?Ze(u,!0):u,i.j&&(i.j=i.j.replace(/:$/,""))}function zn(i,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);i.s=u}else i.s=null}function eo(i,u,l){u instanceof en?(i.i=u,zc(i.i,i.h)):(l||(u=tn(u,$c)),i.i=new en(u,i.h))}function J(i,u,l){i.i.set(u,l)}function Hn(i){return J(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Ze(i,u){return i?u?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function tn(i,u,l){return typeof i=="string"?(i=encodeURI(i).replace(u,Bc),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Bc(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var no=/[#\/\?@]/g,Uc=/[#\?:]/g,qc=/[#\?]/g,$c=/[#\?@]/g,jc=/#/g;function en(i,u){this.h=this.g=null,this.i=i||null,this.j=!!u}function Kt(i){i.g||(i.g=new Map,i.h=0,i.i&&Fc(i.i,function(u,l){i.add(decodeURIComponent(u.replace(/\+/g," ")),l)}))}n=en.prototype,n.add=function(i,u){Kt(this),this.i=null,i=ve(this,i);var l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(u),this.h+=1,this};function ro(i,u){Kt(i),u=ve(i,u),i.g.has(u)&&(i.i=null,i.h-=i.g.get(u).length,i.g.delete(u))}function so(i,u){return Kt(i),u=ve(i,u),i.g.has(u)}n.forEach=function(i,u){Kt(this),this.g.forEach(function(l,f){l.forEach(function(I){i.call(u,I,f,this)},this)},this)},n.na=function(){Kt(this);const i=Array.from(this.g.values()),u=Array.from(this.g.keys()),l=[];for(let f=0;f<u.length;f++){const I=i[f];for(let R=0;R<I.length;R++)l.push(u[f])}return l},n.V=function(i){Kt(this);let u=[];if(typeof i=="string")so(this,i)&&(u=u.concat(this.g.get(ve(this,i))));else{i=Array.from(this.g.values());for(let l=0;l<i.length;l++)u=u.concat(i[l])}return u},n.set=function(i,u){return Kt(this),this.i=null,i=ve(this,i),so(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[u]),this.h+=1,this},n.get=function(i,u){return i?(i=this.V(i),0<i.length?String(i[0]):u):u};function io(i,u,l){ro(i,u),0<l.length&&(i.i=null,i.g.set(ve(i,u),N(l)),i.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],u=Array.from(this.g.keys());for(var l=0;l<u.length;l++){var f=u[l];const R=encodeURIComponent(String(f)),C=this.V(f);for(f=0;f<C.length;f++){var I=R;C[f]!==""&&(I+="="+encodeURIComponent(String(C[f]))),i.push(I)}}return this.i=i.join("&")};function ve(i,u){return u=String(u),i.j&&(u=u.toLowerCase()),u}function zc(i,u){u&&!i.j&&(Kt(i),i.i=null,i.g.forEach(function(l,f){var I=f.toLowerCase();f!=I&&(ro(this,f),io(this,I,l))},i)),i.j=u}function Hc(i,u){const l=new Ye;if(c.Image){const f=new Image;f.onload=b(Gt,l,"TestLoadImage: loaded",!0,u,f),f.onerror=b(Gt,l,"TestLoadImage: error",!1,u,f),f.onabort=b(Gt,l,"TestLoadImage: abort",!1,u,f),f.ontimeout=b(Gt,l,"TestLoadImage: timeout",!1,u,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else u(!1)}function Kc(i,u){const l=new Ye,f=new AbortController,I=setTimeout(()=>{f.abort(),Gt(l,"TestPingServer: timeout",!1,u)},1e4);fetch(i,{signal:f.signal}).then(R=>{clearTimeout(I),R.ok?Gt(l,"TestPingServer: ok",!0,u):Gt(l,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(I),Gt(l,"TestPingServer: error",!1,u)})}function Gt(i,u,l,f,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),f(l)}catch{}}function Gc(){this.g=new Vc}function Wc(i,u,l){const f=l||"";try{Zi(i,function(I,R){let C=I;d(I)&&(C=zr(I)),u.push(f+R+"="+encodeURIComponent(C))})}catch(I){throw u.push(f+"type="+encodeURIComponent("_badmap")),I}}function Kn(i){this.l=i.Ub||null,this.j=i.eb||!1}V(Kn,Hr),Kn.prototype.g=function(){return new Gn(this.l,this.j)},Kn.prototype.i=function(i){return function(){return i}}({});function Gn(i,u){_t.call(this),this.D=i,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(Gn,_t),n=Gn.prototype,n.open=function(i,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=u,this.readyState=1,rn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(u.body=i),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,nn(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,rn(this)),this.g&&(this.readyState=3,rn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;oo(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function oo(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var u=i.value?i.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!i.done}))&&(this.response=this.responseText+=u)}i.done?nn(this):rn(this),this.readyState==3&&oo(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,nn(this))},n.Qa=function(i){this.g&&(this.response=i,nn(this))},n.ga=function(){this.g&&nn(this)};function nn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,rn(i)}n.setRequestHeader=function(i,u){this.u.append(i,u)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],u=this.h.entries();for(var l=u.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=u.next();return i.join(`\r
`)};function rn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Gn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function ao(i){let u="";return ct(i,function(l,f){u+=f,u+=":",u+=l,u+=`\r
`}),u}function es(i,u,l){t:{for(f in l){var f=!1;break t}f=!0}f||(l=ao(l),typeof i=="string"?l!=null&&encodeURIComponent(String(l)):J(i,u,l))}function et(i){_t.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(et,_t);var Qc=/^https?$/i,Xc=["POST","PUT"];n=et.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,u,l,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);u=u?u.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Wr.g(),this.v=this.o?Mi(this.o):Mi(Wr),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(u,String(i),!0),this.B=!1}catch(R){uo(this,R);return}if(i=l||"",l=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var I in f)l.set(I,f[I]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())l.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(l.keys()).find(R=>R.toLowerCase()=="content-type"),I=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Xc,u,void 0))||f||I||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,C]of l)this.g.setRequestHeader(R,C);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ho(this),this.u=!0,this.g.send(i),this.u=!1}catch(R){uo(this,R)}};function uo(i,u){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=u,i.m=5,co(i),Wn(i)}function co(i){i.A||(i.A=!0,It(i,"complete"),It(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,It(this,"complete"),It(this,"abort"),Wn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Wn(this,!0)),et.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?lo(this):this.bb())},n.bb=function(){lo(this)};function lo(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Bt(i)!=4||i.Z()!=2)){if(i.u&&Bt(i)==4)ki(i.Ea,0,i);else if(It(i,"readystatechange"),Bt(i)==4){i.h=!1;try{const C=i.Z();t:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var l;if(!(l=u)){var f;if(f=C===0){var I=String(i.D).match(to)[1]||null;!I&&c.self&&c.self.location&&(I=c.self.location.protocol.slice(0,-1)),f=!Qc.test(I?I.toLowerCase():"")}l=f}if(l)It(i,"complete"),It(i,"success");else{i.m=6;try{var R=2<Bt(i)?i.g.statusText:""}catch{R=""}i.l=R+" ["+i.Z()+"]",co(i)}}finally{Wn(i)}}}}function Wn(i,u){if(i.g){ho(i);const l=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,u||It(i,"ready");try{l.onreadystatechange=f}catch{}}}function ho(i){i.I&&(c.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Bt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Bt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var u=this.g.responseText;return i&&u.indexOf(i)==0&&(u=u.substring(i.length)),Pc(u)}};function fo(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Yc(i){const u={};i=(i.g&&2<=Bt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(W(i[f]))continue;var l=v(i[f]);const I=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const R=u[I]||[];u[I]=R,R.push(l)}T(u,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function sn(i,u,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||u}function mo(i){this.Aa=0,this.i=[],this.j=new Ye,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=sn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=sn("baseRetryDelayMs",5e3,i),this.cb=sn("retryDelaySeedMs",1e4,i),this.Wa=sn("forwardChannelMaxRetries",2,i),this.wa=sn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Wi(i&&i.concurrentRequestLimit),this.Da=new Gc,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=mo.prototype,n.la=8,n.G=1,n.connect=function(i,u,l,f){wt(0),this.W=i,this.H=u||{},l&&f!==void 0&&(this.H.OSID=l,this.H.OAID=f),this.F=this.X,this.I=wo(this,null,this.W),Xn(this)};function ns(i){if(po(i),i.G==3){var u=i.U++,l=Ft(i.I);if(J(l,"SID",i.K),J(l,"RID",u),J(l,"TYPE","terminate"),on(i,l),u=new Ht(i,i.j,u),u.L=2,u.v=Hn(Ft(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=u.v,l=!0),l||(u.g=Ao(u.j,null),u.g.ea(u.v)),u.F=Date.now(),$n(u)}Io(i)}function Qn(i){i.g&&(ss(i),i.g.cancel(),i.g=null)}function po(i){Qn(i),i.u&&(c.clearTimeout(i.u),i.u=null),Yn(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function Xn(i){if(!Qi(i.h)&&!i.s){i.s=!0;var u=i.Ga;ze||Si(),He||(ze(),He=!0),Mr.add(u,i),i.B=0}}function Jc(i,u){return Xi(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=u.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Xe(w(i.Ga,i,u),To(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const I=new Ht(this,this.j,i);let R=this.o;if(this.S&&(R?(R=p(R),E(R,this.S)):R=this.S),this.m!==null||this.O||(I.H=R,R=null),this.P)t:{for(var u=0,l=0;l<this.i.length;l++){e:{var f=this.i[l];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(u+=f,4096<u){u=l;break t}if(u===4096||l===this.i.length-1){u=l+1;break t}}u=1e3}else u=1e3;u=_o(this,I,u),l=Ft(this.I),J(l,"RID",i),J(l,"CVER",22),this.D&&J(l,"X-HTTP-Session-Id",this.D),on(this,l),R&&(this.O?u="headers="+encodeURIComponent(String(ao(R)))+"&"+u:this.m&&es(l,this.m,R)),ts(this.h,I),this.Ua&&J(l,"TYPE","init"),this.P?(J(l,"$req",u),J(l,"SID","null"),I.T=!0,Xr(I,l,null)):Xr(I,l,u),this.G=2}}else this.G==3&&(i?go(this,i):this.i.length==0||Qi(this.h)||go(this))};function go(i,u){var l;u?l=u.l:l=i.U++;const f=Ft(i.I);J(f,"SID",i.K),J(f,"RID",l),J(f,"AID",i.T),on(i,f),i.m&&i.o&&es(f,i.m,i.o),l=new Ht(i,i.j,l,i.B+1),i.m===null&&(l.H=i.o),u&&(i.i=u.D.concat(i.i)),u=_o(i,l,1e3),l.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),ts(i.h,l),Xr(l,f,u)}function on(i,u){i.H&&ct(i.H,function(l,f){J(u,f,l)}),i.l&&Zi({},function(l,f){J(u,f,l)})}function _o(i,u,l){l=Math.min(i.i.length,l);var f=i.l?w(i.l.Na,i.l,i):null;t:{var I=i.i;let R=-1;for(;;){const C=["count="+l];R==-1?0<l?(R=I[0].g,C.push("ofs="+R)):R=0:C.push("ofs="+R);let Q=!0;for(let lt=0;lt<l;lt++){let K=I[lt].g;const yt=I[lt].map;if(K-=R,0>K)R=Math.max(0,I[lt].g-100),Q=!1;else try{Wc(yt,C,"req"+K+"_")}catch{f&&f(yt)}}if(Q){f=C.join("&");break t}}}return i=i.i.splice(0,l),u.D=i,f}function yo(i){if(!i.g&&!i.u){i.Y=1;var u=i.Fa;ze||Si(),He||(ze(),He=!0),Mr.add(u,i),i.v=0}}function rs(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Xe(w(i.Fa,i),To(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,Eo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Xe(w(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,wt(10),Qn(this),Eo(this))};function ss(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function Eo(i){i.g=new Ht(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var u=Ft(i.qa);J(u,"RID","rpc"),J(u,"SID",i.K),J(u,"AID",i.T),J(u,"CI",i.F?"0":"1"),!i.F&&i.ja&&J(u,"TO",i.ja),J(u,"TYPE","xmlhttp"),on(i,u),i.m&&i.o&&es(u,i.m,i.o),i.L&&(i.g.I=i.L);var l=i.g;i=i.ia,l.L=1,l.v=Hn(Ft(u)),l.m=null,l.P=!0,Hi(l,i)}n.Za=function(){this.C!=null&&(this.C=null,Qn(this),rs(this),wt(19))};function Yn(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function vo(i,u){var l=null;if(i.g==u){Yn(i),ss(i),i.g=null;var f=2}else if(Zr(i.h,u))l=u.D,Yi(i.h,u),f=1;else return;if(i.G!=0){if(u.o)if(f==1){l=u.m?u.m.length:0,u=Date.now()-u.F;var I=i.B;f=Bn(),It(f,new qi(f,l)),Xn(i)}else yo(i);else if(I=u.s,I==3||I==0&&0<u.X||!(f==1&&Jc(i,u)||f==2&&rs(i)))switch(l&&0<l.length&&(u=i.h,u.i=u.i.concat(l)),I){case 1:ae(i,5);break;case 4:ae(i,10);break;case 3:ae(i,6);break;default:ae(i,2)}}}function To(i,u){let l=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(l*=2),l*u}function ae(i,u){if(i.j.info("Error code "+u),u==2){var l=w(i.fb,i),f=i.Xa;const I=!f;f=new oe(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||jn(f,"https"),Hn(f),I?Hc(f.toString(),l):Kc(f.toString(),l)}else wt(2);i.G=0,i.l&&i.l.sa(u),Io(i),po(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),wt(2)):(this.j.info("Failed to ping google.com"),wt(1))};function Io(i){if(i.G=0,i.ka=[],i.l){const u=Ji(i.h);(u.length!=0||i.i.length!=0)&&(D(i.ka,u),D(i.ka,i.i),i.h.i.length=0,N(i.i),i.i.length=0),i.l.ra()}}function wo(i,u,l){var f=l instanceof oe?Ft(l):new oe(l);if(f.g!="")u&&(f.g=u+"."+f.g),zn(f,f.s);else{var I=c.location;f=I.protocol,u=u?u+"."+I.hostname:I.hostname,I=+I.port;var R=new oe(null);f&&jn(R,f),u&&(R.g=u),I&&zn(R,I),l&&(R.l=l),f=R}return l=i.D,u=i.ya,l&&u&&J(f,l,u),J(f,"VER",i.la),on(i,f),f}function Ao(i,u,l){if(u&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=i.Ca&&!i.pa?new et(new Kn({eb:l})):new et(i.pa),u.Ha(i.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ro(){}n=Ro.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Jn(){}Jn.prototype.g=function(i,u){return new bt(i,u)};function bt(i,u){_t.call(this),this.g=new mo(u),this.l=i,this.h=u&&u.messageUrlParams||null,i=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(i?i["X-WebChannel-Content-Type"]=u.messageContentType:i={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(i?i["X-WebChannel-Client-Profile"]=u.va:i={"X-WebChannel-Client-Profile":u.va}),this.g.S=i,(i=u&&u.Sb)&&!W(i)&&(this.g.m=i),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!W(u)&&(this.g.D=u,i=this.h,i!==null&&u in i&&(i=this.h,u in i&&delete i[u])),this.j=new Te(this)}V(bt,_t),bt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},bt.prototype.close=function(){ns(this.g)},bt.prototype.o=function(i){var u=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.u&&(l={},l.__data__=zr(i),i=l);u.i.push(new Lc(u.Ya++,i)),u.G==3&&Xn(u)},bt.prototype.N=function(){this.g.l=null,delete this.j,ns(this.g),delete this.g,bt.aa.N.call(this)};function bo(i){Kr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var u=i.__sm__;if(u){t:{for(const l in u){i=l;break t}i=void 0}(this.i=i)&&(i=this.i,u=u!==null&&i in u?u[i]:void 0),this.data=u}else this.data=i}V(bo,Kr);function So(){Gr.call(this),this.status=1}V(So,Gr);function Te(i){this.g=i}V(Te,Ro),Te.prototype.ua=function(){It(this.g,"a")},Te.prototype.ta=function(i){It(this.g,new bo(i))},Te.prototype.sa=function(i){It(this.g,new So)},Te.prototype.ra=function(){It(this.g,"b")},Jn.prototype.createWebChannel=Jn.prototype.g,bt.prototype.send=bt.prototype.o,bt.prototype.open=bt.prototype.m,bt.prototype.close=bt.prototype.close,Ha=function(){return new Jn},za=function(){return Bn()},ja=se,Ts={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Un.NO_ERROR=0,Un.TIMEOUT=8,Un.HTTP_ERROR=6,sr=Un,$i.COMPLETE="complete",$a=$i,Oi.EventType=We,We.OPEN="a",We.CLOSE="b",We.ERROR="c",We.MESSAGE="d",_t.prototype.listen=_t.prototype.K,un=Oi,et.prototype.listenOnce=et.prototype.L,et.prototype.getLastError=et.prototype.Ka,et.prototype.getLastErrorCode=et.prototype.Ba,et.prototype.getStatus=et.prototype.Z,et.prototype.getResponseJson=et.prototype.Oa,et.prototype.getResponseText=et.prototype.oa,et.prototype.send=et.prototype.ea,et.prototype.setWithCredentials=et.prototype.Ha,qa=et}).apply(typeof tr<"u"?tr:typeof self<"u"?self:typeof window<"u"?window:{});const Bo="@firebase/firestore";/**
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
 */let Be="10.14.0";/**
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
 */const de=new xa("@firebase/firestore");function an(){return de.logLevel}function x(n,...t){if(de.logLevel<=z.DEBUG){const e=t.map(Us);de.debug(`Firestore (${Be}): ${n}`,...e)}}function $t(n,...t){if(de.logLevel<=z.ERROR){const e=t.map(Us);de.error(`Firestore (${Be}): ${n}`,...e)}}function ke(n,...t){if(de.logLevel<=z.WARN){const e=t.map(Us);de.warn(`Firestore (${Be}): ${n}`,...e)}}function Us(n){if(typeof n=="string")return n;try{/**
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
 */function O(n="Unexpected state"){const t=`FIRESTORE (${Be}) INTERNAL ASSERTION FAILED: `+n;throw $t(t),new Error(t)}function H(n,t){n||O()}function B(n,t){return n}/**
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
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends Fe{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ka{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Dh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Tt.UNAUTHENTICATED))}shutdown(){}}class kh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Nh{constructor(t){this.t=t,this.currentUser=Tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){H(this.o===void 0);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new Ut;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Ut,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},c=h=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Ut)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(H(typeof r.accessToken=="string"),new Ka(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return H(t===null||typeof t=="string"),new Tt(t)}}class xh{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=Tt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Lh{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new xh(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Mh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Oh{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){H(this.o===void 0);const r=o=>{o.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,x("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(H(typeof e.token=="string"),this.R=e.token,new Mh(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */class Ga{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=Fh(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%t.length))}return r}}function G(n,t){return n<t?-1:n>t?1:0}function Ne(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
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
 */class ot{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new k(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new k(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new k(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new k(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ot.fromMillis(Date.now())}static fromDate(t){return ot.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new ot(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?G(this.nanoseconds,t.nanoseconds):G(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class yn{constructor(t,e,r){e===void 0?e=0:e>t.length&&O(),r===void 0?r=t.length-e:r>t.length-e&&O(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return yn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof yn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=t.get(s),a=e.get(s);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class X extends yn{construct(t,e,r){return new X(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new k(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new X(e)}static emptyPath(){return new X([])}}const Bh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dt extends yn{construct(t,e,r){return new dt(t,e,r)}static isValidIdentifier(t){return Bh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new dt(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new k(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new k(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new k(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(o(),s++)}if(o(),a)throw new k(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new dt(e)}static emptyPath(){return new dt([])}}/**
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
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(X.fromString(t))}static fromName(t){return new M(X.fromString(t).popFirst(5))}static empty(){return new M(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&X.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return X.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new X(t.slice()))}}function Uh(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=F.fromTimestamp(r===1e9?new ot(e+1,0):new ot(e,r));return new Zt(s,M.empty(),t)}function qh(n){return new Zt(n.readTime,n.key,-1)}class Zt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Zt(F.min(),M.empty(),-1)}static max(){return new Zt(F.max(),M.empty(),-1)}}function $h(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(n.documentKey,t.documentKey),e!==0?e:G(n.largestBatchId,t.largestBatchId))}/**
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
 */async function Rn(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==jh)throw n;x("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new P((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof P?e:P.resolve(e)}catch(e){return P.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):P.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):P.reject(e)}static resolve(t){return new P((e,r)=>{e(t)})}static reject(t){return new P((e,r)=>{r(t)})}static waitFor(t){return new P((e,r)=>{let s=0,o=0,a=!1;t.forEach(c=>{++s,c.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=P.resolve(!1);for(const r of t)e=e.next(s=>s?P.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new P((r,s)=>{const o=t.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(m=>{a[d]=m,++c,c===o&&r(a)},m=>s(m))}})}static doWhile(t,e){return new P((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function Hh(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function bn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class qs{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}qs.oe=-1;function Sn(n){return n==null}function dr(n){return n===0&&1/n==-1/0}function Kh(n){return typeof n=="number"&&Number.isInteger(n)&&!dr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Uo(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function _e(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Wa(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class tt{constructor(t,e){this.comparator=t,this.root=e||ht.EMPTY}insert(t,e){return new tt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ht.BLACK,null,null))}remove(t){return new tt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ht.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new er(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new er(this.root,t,this.comparator,!1)}getReverseIterator(){return new er(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new er(this.root,t,this.comparator,!0)}}class er{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ht{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??ht.RED,this.left=s??ht.EMPTY,this.right=o??ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new ht(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ht.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return ht.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw O();const t=this.left.check();if(t!==this.right.check())throw O();return t+(this.isRed()?0:1)}}ht.EMPTY=null,ht.RED=!0,ht.BLACK=!1;ht.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(t,e,r,s,o){return this}insert(t,e,r){return new ht(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class mt{constructor(t){this.comparator=t,this.data=new tt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new qo(this.data.getIterator())}getIteratorFrom(t){return new qo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof mt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new mt(this.comparator);return e.data=t,e}}class qo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class St{constructor(t){this.fields=t,t.sort(dt.comparator)}static empty(){return new St([])}unionWith(t){let e=new mt(dt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new St(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ne(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class Qa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class pt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Qa("Invalid base64 string: "+o):o}}(t);return new pt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new pt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return G(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const Gh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function te(n){if(H(!!n),typeof n=="string"){let t=0;const e=Gh.exec(n);if(H(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:rt(n.seconds),nanos:rt(n.nanos)}}function rt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function fe(n){return typeof n=="string"?pt.fromBase64String(n):pt.fromUint8Array(n)}/**
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
 */function $s(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function js(n){const t=n.mapValue.fields.__previous_value__;return $s(t)?js(t):t}function En(n){const t=te(n.mapValue.fields.__local_write_time__.timestampValue);return new ot(t.seconds,t.nanos)}/**
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
 */class Wh{constructor(t,e,r,s,o,a,c,h,d){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=d}}class vn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new vn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof vn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const nr={mapValue:{}};function me(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?$s(n)?4:Xh(n)?9007199254740991:Qh(n)?10:11:O()}function Lt(n,t){if(n===t)return!0;const e=me(n);if(e!==me(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return En(n).isEqual(En(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=te(s.timestampValue),c=te(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return fe(s.bytesValue).isEqual(fe(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return rt(s.geoPointValue.latitude)===rt(o.geoPointValue.latitude)&&rt(s.geoPointValue.longitude)===rt(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return rt(s.integerValue)===rt(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=rt(s.doubleValue),c=rt(o.doubleValue);return a===c?dr(a)===dr(c):isNaN(a)&&isNaN(c)}return!1}(n,t);case 9:return Ne(n.arrayValue.values||[],t.arrayValue.values||[],Lt);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},c=o.mapValue.fields||{};if(Uo(a)!==Uo(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!Lt(a[h],c[h])))return!1;return!0}(n,t);default:return O()}}function Tn(n,t){return(n.values||[]).find(e=>Lt(e,t))!==void 0}function xe(n,t){if(n===t)return 0;const e=me(n),r=me(t);if(e!==r)return G(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return G(n.booleanValue,t.booleanValue);case 2:return function(o,a){const c=rt(o.integerValue||o.doubleValue),h=rt(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(n,t);case 3:return $o(n.timestampValue,t.timestampValue);case 4:return $o(En(n),En(t));case 5:return G(n.stringValue,t.stringValue);case 6:return function(o,a){const c=fe(o),h=fe(a);return c.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const c=o.split("/"),h=a.split("/");for(let d=0;d<c.length&&d<h.length;d++){const m=G(c[d],h[d]);if(m!==0)return m}return G(c.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const c=G(rt(o.latitude),rt(a.latitude));return c!==0?c:G(rt(o.longitude),rt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return jo(n.arrayValue,t.arrayValue);case 10:return function(o,a){var c,h,d,m;const y=o.fields||{},w=a.fields||{},b=(c=y.value)===null||c===void 0?void 0:c.arrayValue,V=(h=w.value)===null||h===void 0?void 0:h.arrayValue,N=G(((d=b==null?void 0:b.values)===null||d===void 0?void 0:d.length)||0,((m=V==null?void 0:V.values)===null||m===void 0?void 0:m.length)||0);return N!==0?N:jo(b,V)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===nr.mapValue&&a===nr.mapValue)return 0;if(o===nr.mapValue)return 1;if(a===nr.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let y=0;y<h.length&&y<m.length;++y){const w=G(h[y],m[y]);if(w!==0)return w;const b=xe(c[h[y]],d[m[y]]);if(b!==0)return b}return G(h.length,m.length)}(n.mapValue,t.mapValue);default:throw O()}}function $o(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return G(n,t);const e=te(n),r=te(t),s=G(e.seconds,r.seconds);return s!==0?s:G(e.nanos,r.nanos)}function jo(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=xe(e[s],r[s]);if(o)return o}return G(e.length,r.length)}function Le(n){return Is(n)}function Is(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=te(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return fe(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return M.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Is(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Is(e.fields[a])}`;return s+"}"}(n.mapValue):O()}function zo(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function ws(n){return!!n&&"integerValue"in n}function zs(n){return!!n&&"arrayValue"in n}function Ho(n){return!!n&&"nullValue"in n}function Ko(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ir(n){return!!n&&"mapValue"in n}function Qh(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function hn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return _e(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=hn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=hn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Xh(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class At{constructor(t){this.value=t}static empty(){return new At({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!ir(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=hn(e)}setAll(t){let e=dt.emptyPath(),r={},s=[];t.forEach((a,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=c.popLast()}a?r[c.lastSegment()]=hn(a):s.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());ir(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Lt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];ir(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){_e(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new At(hn(this.value))}}function Xa(n){const t=[];return _e(n.fields,(e,r)=>{const s=new dt([e]);if(ir(r)){const o=Xa(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new St(t)}/**
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
 */class fr{constructor(t,e){this.position=t,this.inclusive=e}}function Go(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=M.comparator(M.fromName(a.referenceValue),e.key):r=xe(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Wo(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Lt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class In{constructor(t,e="asc"){this.field=t,this.dir=e}}function Yh(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Ya{}class it extends Ya{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Zh(t,e,r):e==="array-contains"?new nd(t,r):e==="in"?new rd(t,r):e==="not-in"?new sd(t,r):e==="array-contains-any"?new id(t,r):new it(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new td(t,r):new ed(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(xe(e,this.value)):e!==null&&me(this.value)===me(e)&&this.matchesComparison(xe(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class kt extends Ya{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new kt(t,e)}matches(t){return Ja(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ja(n){return n.op==="and"}function Za(n){return Jh(n)&&Ja(n)}function Jh(n){for(const t of n.filters)if(t instanceof kt)return!1;return!0}function As(n){if(n instanceof it)return n.field.canonicalString()+n.op.toString()+Le(n.value);if(Za(n))return n.filters.map(t=>As(t)).join(",");{const t=n.filters.map(e=>As(e)).join(",");return`${n.op}(${t})`}}function tu(n,t){return n instanceof it?function(r,s){return s instanceof it&&r.op===s.op&&r.field.isEqual(s.field)&&Lt(r.value,s.value)}(n,t):n instanceof kt?function(r,s){return s instanceof kt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,c)=>o&&tu(a,s.filters[c]),!0):!1}(n,t):void O()}function eu(n){return n instanceof it?function(e){return`${e.field.canonicalString()} ${e.op} ${Le(e.value)}`}(n):n instanceof kt?function(e){return e.op.toString()+" {"+e.getFilters().map(eu).join(" ,")+"}"}(n):"Filter"}class Zh extends it{constructor(t,e,r){super(t,e,r),this.key=M.fromName(r.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class td extends it{constructor(t,e){super(t,"in",e),this.keys=nu("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class ed extends it{constructor(t,e){super(t,"not-in",e),this.keys=nu("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function nu(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>M.fromName(r.referenceValue))}class nd extends it{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return zs(e)&&Tn(e.arrayValue,this.value)}}class rd extends it{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Tn(this.value.arrayValue,e)}}class sd extends it{constructor(t,e){super(t,"not-in",e)}matches(t){if(Tn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Tn(this.value.arrayValue,e)}}class id extends it{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!zs(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Tn(this.value.arrayValue,r))}}/**
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
 */class od{constructor(t,e=null,r=[],s=[],o=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=c,this.ue=null}}function Qo(n,t=null,e=[],r=[],s=null,o=null,a=null){return new od(n,t,e,r,s,o,a)}function Hs(n){const t=B(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>As(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Sn(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Le(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Le(r)).join(",")),t.ue=e}return t.ue}function Ks(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Yh(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!tu(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Wo(n.startAt,t.startAt)&&Wo(n.endAt,t.endAt)}function Rs(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Ue{constructor(t,e=null,r=[],s=[],o=null,a="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ad(n,t,e,r,s,o,a,c){return new Ue(n,t,e,r,s,o,a,c)}function Gs(n){return new Ue(n)}function Xo(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ru(n){return n.collectionGroup!==null}function dn(n){const t=B(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new mt(dt.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new In(o,r))}),e.has(dt.keyField().canonicalString())||t.ce.push(new In(dt.keyField(),r))}return t.ce}function Nt(n){const t=B(n);return t.le||(t.le=ud(t,dn(n))),t.le}function ud(n,t){if(n.limitType==="F")return Qo(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new In(s.field,o)});const e=n.endAt?new fr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new fr(n.startAt.position,n.startAt.inclusive):null;return Qo(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function bs(n,t){const e=n.filters.concat([t]);return new Ue(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Ss(n,t,e){return new Ue(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Ir(n,t){return Ks(Nt(n),Nt(t))&&n.limitType===t.limitType}function su(n){return`${Hs(Nt(n))}|lt:${n.limitType}`}function Ae(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>eu(s)).join(", ")}]`),Sn(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>Le(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>Le(s)).join(",")),`Target(${r})`}(Nt(n))}; limitType=${n.limitType})`}function wr(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):M.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of dn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,c,h){const d=Go(a,c,h);return a.inclusive?d<=0:d<0}(r.startAt,dn(r),s)||r.endAt&&!function(a,c,h){const d=Go(a,c,h);return a.inclusive?d>=0:d>0}(r.endAt,dn(r),s))}(n,t)}function cd(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function iu(n){return(t,e)=>{let r=!1;for(const s of dn(n)){const o=ld(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function ld(n,t,e){const r=n.field.isKeyField()?M.comparator(t.key,e.key):function(o,a,c){const h=a.data.field(o),d=c.data.field(o);return h!==null&&d!==null?xe(h,d):O()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return O()}}/**
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
 */class qe{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){_e(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return Wa(this.inner)}size(){return this.innerSize}}/**
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
 */const hd=new tt(M.comparator);function jt(){return hd}const ou=new tt(M.comparator);function cn(...n){let t=ou;for(const e of n)t=t.insert(e.key,e);return t}function au(n){let t=ou;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function le(){return fn()}function uu(){return fn()}function fn(){return new qe(n=>n.toString(),(n,t)=>n.isEqual(t))}const dd=new tt(M.comparator),fd=new mt(M.comparator);function U(...n){let t=fd;for(const e of n)t=t.add(e);return t}const md=new mt(G);function pd(){return md}/**
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
 */function Ws(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:dr(t)?"-0":t}}function cu(n){return{integerValue:""+n}}function gd(n,t){return Kh(t)?cu(t):Ws(n,t)}/**
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
 */class Ar{constructor(){this._=void 0}}function _d(n,t,e){return n instanceof mr?function(s,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&$s(o)&&(o=js(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):n instanceof wn?hu(n,t):n instanceof An?du(n,t):function(s,o){const a=lu(s,o),c=Yo(a)+Yo(s.Pe);return ws(a)&&ws(s.Pe)?cu(c):Ws(s.serializer,c)}(n,t)}function yd(n,t,e){return n instanceof wn?hu(n,t):n instanceof An?du(n,t):e}function lu(n,t){return n instanceof pr?function(r){return ws(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class mr extends Ar{}class wn extends Ar{constructor(t){super(),this.elements=t}}function hu(n,t){const e=fu(t);for(const r of n.elements)e.some(s=>Lt(s,r))||e.push(r);return{arrayValue:{values:e}}}class An extends Ar{constructor(t){super(),this.elements=t}}function du(n,t){let e=fu(t);for(const r of n.elements)e=e.filter(s=>!Lt(s,r));return{arrayValue:{values:e}}}class pr extends Ar{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Yo(n){return rt(n.integerValue||n.doubleValue)}function fu(n){return zs(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Ed(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof wn&&s instanceof wn||r instanceof An&&s instanceof An?Ne(r.elements,s.elements,Lt):r instanceof pr&&s instanceof pr?Lt(r.Pe,s.Pe):r instanceof mr&&s instanceof mr}(n.transform,t.transform)}class vd{constructor(t,e){this.version=t,this.transformResults=e}}class ft{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ft}static exists(t){return new ft(void 0,t)}static updateTime(t){return new ft(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function or(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Rr{}function mu(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new br(n.key,ft.none()):new Pn(n.key,n.data,ft.none());{const e=n.data,r=At.empty();let s=new mt(dt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new ne(n.key,r,new St(s.toArray()),ft.none())}}function Td(n,t,e){n instanceof Pn?function(s,o,a){const c=s.value.clone(),h=Zo(s.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,t,e):n instanceof ne?function(s,o,a){if(!or(s.precondition,o))return void o.convertToUnknownDocument(a.version);const c=Zo(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(pu(s)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function mn(n,t,e,r){return n instanceof Pn?function(o,a,c,h){if(!or(o.precondition,a))return c;const d=o.value.clone(),m=ta(o.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof ne?function(o,a,c,h){if(!or(o.precondition,a))return c;const d=ta(o.fieldTransforms,h,a),m=a.data;return m.setAll(pu(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(y=>y.field))}(n,t,e,r):function(o,a,c){return or(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,t,e)}function Id(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=lu(r.transform,s||null);o!=null&&(e===null&&(e=At.empty()),e.set(r.field,o))}return e||null}function Jo(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ne(r,s,(o,a)=>Ed(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Pn extends Rr{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ne extends Rr{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function pu(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Zo(n,t,e){const r=new Map;H(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,c=t.data.field(o.field);r.set(o.field,yd(a,c,e[s]))}return r}function ta(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,_d(o,a,t))}return r}class br extends Rr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gu extends Rr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class wd{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Td(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=mn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=mn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=uu();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=e.has(s.key)?null:c;const h=mu(a,c);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(F.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),U())}isEqual(t){return this.batchId===t.batchId&&Ne(this.mutations,t.mutations,(e,r)=>Jo(e,r))&&Ne(this.baseMutations,t.baseMutations,(e,r)=>Jo(e,r))}}class Qs{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){H(t.mutations.length===r.length);let s=function(){return dd}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new Qs(t,e,r,s)}}/**
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
 */var st,j;function _u(n){switch(n){default:return O();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function yu(n){if(n===void 0)return $t("GRPC error has no .code"),S.UNKNOWN;switch(n){case st.OK:return S.OK;case st.CANCELLED:return S.CANCELLED;case st.UNKNOWN:return S.UNKNOWN;case st.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case st.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case st.INTERNAL:return S.INTERNAL;case st.UNAVAILABLE:return S.UNAVAILABLE;case st.UNAUTHENTICATED:return S.UNAUTHENTICATED;case st.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case st.NOT_FOUND:return S.NOT_FOUND;case st.ALREADY_EXISTS:return S.ALREADY_EXISTS;case st.PERMISSION_DENIED:return S.PERMISSION_DENIED;case st.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case st.ABORTED:return S.ABORTED;case st.OUT_OF_RANGE:return S.OUT_OF_RANGE;case st.UNIMPLEMENTED:return S.UNIMPLEMENTED;case st.DATA_LOSS:return S.DATA_LOSS;default:return O()}}(j=st||(st={}))[j.OK=0]="OK",j[j.CANCELLED=1]="CANCELLED",j[j.UNKNOWN=2]="UNKNOWN",j[j.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",j[j.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",j[j.NOT_FOUND=5]="NOT_FOUND",j[j.ALREADY_EXISTS=6]="ALREADY_EXISTS",j[j.PERMISSION_DENIED=7]="PERMISSION_DENIED",j[j.UNAUTHENTICATED=16]="UNAUTHENTICATED",j[j.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",j[j.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",j[j.ABORTED=10]="ABORTED",j[j.OUT_OF_RANGE=11]="OUT_OF_RANGE",j[j.UNIMPLEMENTED=12]="UNIMPLEMENTED",j[j.INTERNAL=13]="INTERNAL",j[j.UNAVAILABLE=14]="UNAVAILABLE",j[j.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function bd(){return new TextEncoder}/**
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
 */const Sd=new he([4294967295,4294967295],0);function ea(n){const t=bd().encode(n),e=new Ua;return e.update(t),new Uint8Array(e.digest())}function na(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new he([e,r],0),new he([s,o],0)]}class Xs{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new ln(`Invalid padding: ${e}`);if(r<0)throw new ln(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new ln(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new ln(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=he.fromNumber(this.Ie)}Ee(t,e,r){let s=t.add(e.multiply(he.fromNumber(r)));return s.compare(Sd)===1&&(s=new he([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=ea(t),[r,s]=na(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);if(!this.de(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Xs(o,s,e);return r.forEach(c=>a.insert(c)),a}insert(t){if(this.Ie===0)return;const e=ea(t),[r,s]=na(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class ln extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Sr{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,Vn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Sr(F.min(),s,new tt(G),jt(),U())}}class Vn{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Vn(r,e,U(),U(),U())}}/**
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
 */class ar{constructor(t,e,r,s){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=s}}class Eu{constructor(t,e){this.targetId=t,this.me=e}}class vu{constructor(t,e,r=pt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class ra{constructor(){this.fe=0,this.ge=ia(),this.pe=pt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=U(),e=U(),r=U();return this.ge.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:O()}}),new Vn(this.pe,this.ye,t,e,r)}Ce(){this.we=!1,this.ge=ia()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,H(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Pd{constructor(t){this.Le=t,this.Be=new Map,this.ke=jt(),this.qe=sa(),this.Qe=new tt(G)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:O()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,r=t.me.count,s=this.Je(e);if(s){const o=s.target;if(Rs(o))if(r===0){const a=new M(o.path);this.Ue(e,a,ut.newNoDocument(a,F.min()))}else H(r===1);else{const a=this.Ye(e);if(a!==r){const c=this.Ze(t),h=c?this.Xe(c,t,a):1;if(h!==0){this.je(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,d)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,c;try{a=fe(r).toUint8Array()}catch(h){if(h instanceof Qa)return ke("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new Xs(a,s,o)}catch(h){return ke(h instanceof ln?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.Ie===0?null:c}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.Ue(e,o,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((o,a)=>{const c=this.Je(a);if(c){if(o.current&&Rs(c.target)){const h=new M(c.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,ut.newNoDocument(h,t))}o.be&&(e.set(a,o.ve()),o.Ce())}});let r=U();this.qe.forEach((o,a)=>{let c=!0;a.forEachWhile(h=>{const d=this.Je(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const s=new Sr(t,e,this.Qe,this.ke,r);return this.ke=jt(),this.qe=sa(),this.Qe=new tt(G),s}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new ra,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new mt(G),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||x("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new ra),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function sa(){return new tt(M.comparator)}function ia(){return new tt(M.comparator)}const Vd={asc:"ASCENDING",desc:"DESCENDING"},Cd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Dd={and:"AND",or:"OR"};class kd{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ps(n,t){return n.useProto3Json||Sn(t)?t:{value:t}}function gr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Tu(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Nd(n,t){return gr(n,t.toTimestamp())}function Pt(n){return H(!!n),F.fromTimestamp(function(e){const r=te(e);return new ot(r.seconds,r.nanos)}(n))}function Ys(n,t){return Vs(n,t).canonicalString()}function Vs(n,t){const e=function(s){return new X(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Iu(n){const t=X.fromString(n);return H(Pu(t)),t}function _r(n,t){return Ys(n.databaseId,t.path)}function pn(n,t){const e=Iu(t);if(e.get(1)!==n.databaseId.projectId)throw new k(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new k(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new M(Au(e))}function wu(n,t){return Ys(n.databaseId,t)}function xd(n){const t=Iu(n);return t.length===4?X.emptyPath():Au(t)}function Cs(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Au(n){return H(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function oa(n,t,e){return{name:_r(n,t),fields:e.value.mapValue.fields}}function Ld(n,t){return"found"in t?function(r,s){H(!!s.found),s.found.name,s.found.updateTime;const o=pn(r,s.found.name),a=Pt(s.found.updateTime),c=s.found.createTime?Pt(s.found.createTime):F.min(),h=new At({mapValue:{fields:s.found.fields}});return ut.newFoundDocument(o,a,c,h)}(n,t):"missing"in t?function(r,s){H(!!s.missing),H(!!s.readTime);const o=pn(r,s.missing),a=Pt(s.readTime);return ut.newNoDocument(o,a)}(n,t):O()}function Md(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:O()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(d,m){return d.useProto3Json?(H(m===void 0||typeof m=="string"),pt.fromBase64String(m||"")):(H(m===void 0||m instanceof Buffer||m instanceof Uint8Array),pt.fromUint8Array(m||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(d){const m=d.code===void 0?S.UNKNOWN:yu(d.code);return new k(m,d.message||"")}(a);e=new vu(r,s,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=pn(n,r.document.name),o=Pt(r.document.updateTime),a=r.document.createTime?Pt(r.document.createTime):F.min(),c=new At({mapValue:{fields:r.document.fields}}),h=ut.newFoundDocument(s,o,a,c),d=r.targetIds||[],m=r.removedTargetIds||[];e=new ar(d,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=pn(n,r.document),o=r.readTime?Pt(r.readTime):F.min(),a=ut.newNoDocument(s,o),c=r.removedTargetIds||[];e=new ar([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=pn(n,r.document),o=r.removedTargetIds||[];e=new ar([],o,s,null)}else{if(!("filter"in t))return O();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new Rd(s,o),c=r.targetId;e=new Eu(c,a)}}return e}function Ru(n,t){let e;if(t instanceof Pn)e={update:oa(n,t.key,t.value)};else if(t instanceof br)e={delete:_r(n,t.key)};else if(t instanceof ne)e={update:oa(n,t.key,t.data),updateMask:Hd(t.fieldMask)};else{if(!(t instanceof gu))return O();e={verify:_r(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const c=a.transform;if(c instanceof mr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof wn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof An)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof pr)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw O()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Nd(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:O()}(n,t.precondition)),e}function Od(n,t){return n&&n.length>0?(H(t!==void 0),n.map(e=>function(s,o){let a=s.updateTime?Pt(s.updateTime):Pt(o);return a.isEqual(F.min())&&(a=Pt(o)),new vd(a,s.transformResults||[])}(e,t))):[]}function Fd(n,t){return{documents:[wu(n,t.path)]}}function Bd(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=wu(n,s);const o=function(d){if(d.length!==0)return Su(kt.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(m=>function(w){return{field:Re(w.field),direction:$d(w.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=Ps(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{_t:e,parent:s}}function Ud(n){let t=xd(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){H(r===1);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(y){const w=bu(y);return w instanceof kt&&Za(w)?w.getFilters():[w]}(e.where));let a=[];e.orderBy&&(a=function(y){return y.map(w=>function(V){return new In(be(V.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(w))}(e.orderBy));let c=null;e.limit&&(c=function(y){let w;return w=typeof y=="object"?y.value:y,Sn(w)?null:w}(e.limit));let h=null;e.startAt&&(h=function(y){const w=!!y.before,b=y.values||[];return new fr(b,w)}(e.startAt));let d=null;return e.endAt&&(d=function(y){const w=!y.before,b=y.values||[];return new fr(b,w)}(e.endAt)),ad(t,s,a,o,c,"F",h,d)}function qd(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function bu(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=be(e.unaryFilter.field);return it.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=be(e.unaryFilter.field);return it.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=be(e.unaryFilter.field);return it.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=be(e.unaryFilter.field);return it.create(a,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(n):n.fieldFilter!==void 0?function(e){return it.create(be(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return kt.create(e.compositeFilter.filters.map(r=>bu(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return O()}}(e.compositeFilter.op))}(n):O()}function $d(n){return Vd[n]}function jd(n){return Cd[n]}function zd(n){return Dd[n]}function Re(n){return{fieldPath:n.canonicalString()}}function be(n){return dt.fromServerFormat(n.fieldPath)}function Su(n){return n instanceof it?function(e){if(e.op==="=="){if(Ko(e.value))return{unaryFilter:{field:Re(e.field),op:"IS_NAN"}};if(Ho(e.value))return{unaryFilter:{field:Re(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ko(e.value))return{unaryFilter:{field:Re(e.field),op:"IS_NOT_NAN"}};if(Ho(e.value))return{unaryFilter:{field:Re(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Re(e.field),op:jd(e.op),value:e.value}}}(n):n instanceof kt?function(e){const r=e.getFilters().map(s=>Su(s));return r.length===1?r[0]:{compositeFilter:{op:zd(e.op),filters:r}}}(n):O()}function Hd(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Pu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Kd{constructor(t){this.ct=t}}function Gd(n){const t=Ud({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ss(t,t.limit,"L"):t}/**
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
 */class Wd{constructor(){this.un=new Qd}addToCollectionParentIndex(t,e){return this.un.add(e),P.resolve()}getCollectionParents(t,e){return P.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return P.resolve()}deleteFieldIndex(t,e){return P.resolve()}deleteAllFieldIndexes(t){return P.resolve()}createTargetIndexes(t,e){return P.resolve()}getDocumentsMatchingTarget(t,e){return P.resolve(null)}getIndexType(t,e){return P.resolve(0)}getFieldIndexes(t,e){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,e){return P.resolve(Zt.min())}getMinOffsetFromCollectionGroup(t,e){return P.resolve(Zt.min())}updateCollectionGroup(t,e,r){return P.resolve()}updateIndexEntries(t,e){return P.resolve()}}class Qd{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new mt(X.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new mt(X.comparator)).toArray()}}/**
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
 */class Xd{constructor(){this.changes=new qe(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ut.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?P.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Yd{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Jd{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&mn(r.mutation,s,St.empty(),ot.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,U()).next(()=>r))}getLocalViewOfDocuments(t,e,r=U()){const s=le();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=cn();return o.forEach((c,h)=>{a=a.insert(c,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=le();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,U()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,c)=>{e.set(a,c)})})}computeViews(t,e,r,s){let o=jt();const a=fn(),c=function(){return fn()}();return e.forEach((h,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof ne)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),mn(m.mutation,d,m.mutation.getFieldMask(),ot.now())):a.set(d.key,St.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,m)=>a.set(d,m)),e.forEach((d,m)=>{var y;return c.set(d,new Yd(m,(y=a.get(d))!==null&&y!==void 0?y:null))}),c))}recalculateAndSaveOverlays(t,e){const r=fn();let s=new tt((a,c)=>a-c),o=U();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const c of a)c.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let m=r.get(h)||St.empty();m=c.applyToLocalView(d,m),r.set(h,m);const y=(s.get(c.batchId)||U()).add(h);s=s.insert(c.batchId,y)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),d=h.key,m=h.value,y=uu();m.forEach(w=>{if(!o.has(w)){const b=mu(e.get(w),r.get(w));b!==null&&y.set(w,b),o=o.add(w)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,y))}return P.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return M.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ru(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):P.resolve(le());let c=-1,h=o;return a.next(d=>P.forEach(d,(m,y)=>(c<y.largestBatchId&&(c=y.largestBatchId),o.get(m)?P.resolve():this.remoteDocumentCache.getEntry(t,m).next(w=>{h=h.insert(m,w)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,U())).next(m=>({batchId:c,changes:au(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(r=>{let s=cn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=cn();return this.indexManager.getCollectionParents(t,o).next(c=>P.forEach(c,h=>{const d=function(y,w){return new Ue(w,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next(m=>{m.forEach((y,w)=>{a=a.insert(y,w)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,ut.newInvalidDocument(m)))});let c=cn();return a.forEach((h,d)=>{const m=o.get(h);m!==void 0&&mn(m.mutation,d,St.empty(),ot.now()),wr(e,d)&&(c=c.insert(h,d))}),c})}}/**
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
 */class Zd{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return P.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Pt(s.createTime)}}(e)),P.resolve()}getNamedQuery(t,e){return P.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(s){return{name:s.name,query:Gd(s.bundledQuery),readTime:Pt(s.readTime)}}(e)),P.resolve()}}/**
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
 */class tf{constructor(){this.overlays=new tt(M.comparator),this.Ir=new Map}getOverlay(t,e){return P.resolve(this.overlays.get(e))}getOverlays(t,e){const r=le();return P.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.ht(t,e,o)}),P.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),P.resolve()}getOverlaysForCollection(t,e,r){const s=le(),o=e.length+1,a=new M(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return P.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new tt((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let m=o.get(d.largestBatchId);m===null&&(m=le(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=le(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,m)=>c.set(d,m)),!(c.size()>=s)););return P.resolve(c)}ht(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Ad(e,r));let o=this.Ir.get(e);o===void 0&&(o=U(),this.Ir.set(e,o)),this.Ir.set(e,o.add(r.key))}}/**
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
 */class ef{constructor(){this.sessionToken=pt.EMPTY_BYTE_STRING}getSessionToken(t){return P.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,P.resolve()}}/**
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
 */class Js{constructor(){this.Tr=new mt(at.Er),this.dr=new mt(at.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const r=new at(t,e);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Vr(new at(t,e))}mr(t,e){t.forEach(r=>this.removeReference(r,e))}gr(t){const e=new M(new X([])),r=new at(e,t),s=new at(e,t+1),o=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new M(new X([])),r=new at(e,t),s=new at(e,t+1);let o=U();return this.dr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new at(t,0),r=this.Tr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class at{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return M.comparator(t.key,e.key)||G(t.wr,e.wr)}static Ar(t,e){return G(t.wr,e.wr)||M.comparator(t.key,e.key)}}/**
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
 */class nf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new mt(at.Er)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new wd(o,e,r,s);this.mutationQueue.push(a);for(const c of s)this.br=this.br.add(new at(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return P.resolve(a)}lookupMutationBatch(t,e){return P.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.vr(r),o=s<0?0:s;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new at(e,0),s=new at(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,s],a=>{const c=this.Dr(a.wr);o.push(c)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new mt(G);return e.forEach(s=>{const o=new at(s,0),a=new at(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],c=>{r=r.add(c.wr)})}),P.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const a=new at(new M(o),0);let c=new mt(G);return this.br.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(h.wr)),!0)},a),P.resolve(this.Cr(c))}Cr(t){const e=[];return t.forEach(r=>{const s=this.Dr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){H(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return P.forEach(e.mutations,s=>{const o=new at(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.br=r})}On(t){}containsKey(t,e){const r=new at(e,0),s=this.br.firstAfterOrEqual(r);return P.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class rf{constructor(t){this.Mr=t,this.docs=function(){return new tt(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.Mr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return P.resolve(r?r.document.mutableCopy():ut.newInvalidDocument(e))}getEntries(t,e){let r=jt();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():ut.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=jt();const a=e.path,c=new M(a.child("")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||$h(qh(m),r)<=0||(s.has(m.key)||wr(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(t,e,r,s){O()}Or(t,e){return P.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new sf(this)}getSize(t){return P.resolve(this.size)}}class sf extends Xd{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.cr.addEntry(t,s)):this.cr.removeEntry(r)}),P.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
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
 */class of{constructor(t){this.persistence=t,this.Nr=new qe(e=>Hs(e),Ks),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Js,this.targetCount=0,this.kr=Me.Bn()}forEachTarget(t,e){return this.Nr.forEach((r,s)=>e(s)),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Lr&&(this.Lr=e),P.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new Me(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,P.resolve()}updateTargetData(t,e){return this.Kn(e),P.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),P.waitFor(o).next(()=>s)}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,e){const r=this.Nr.get(e)||null;return P.resolve(r)}addMatchingKeys(t,e,r){return this.Br.Rr(e,r),P.resolve()}removeMatchingKeys(t,e,r){this.Br.mr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),P.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),P.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Br.yr(e);return P.resolve(r)}containsKey(t,e){return P.resolve(this.Br.containsKey(e))}}/**
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
 */class af{constructor(t,e){this.qr={},this.overlays={},this.Qr=new qs(0),this.Kr=!1,this.Kr=!0,this.$r=new ef,this.referenceDelegate=t(this),this.Ur=new of(this),this.indexManager=new Wd,this.remoteDocumentCache=function(s){return new rf(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Kd(e),this.Gr=new Zd(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new tf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.qr[t.toKey()];return r||(r=new nf(e,this.referenceDelegate),this.qr[t.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,r){x("MemoryPersistence","Starting transaction:",t);const s=new uf(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(o=>this.referenceDelegate.jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Hr(t,e){return P.or(Object.values(this.qr).map(r=>()=>r.containsKey(t,e)))}}class uf extends zh{constructor(t){super(),this.currentSequenceNumber=t}}class Zs{constructor(t){this.persistence=t,this.Jr=new Js,this.Yr=null}static Zr(t){return new Zs(t)}get Xr(){if(this.Yr)return this.Yr;throw O()}addReference(t,e,r){return this.Jr.addReference(r,e),this.Xr.delete(r.toString()),P.resolve()}removeReference(t,e,r){return this.Jr.removeReference(r,e),this.Xr.add(r.toString()),P.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),P.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Xr,r=>{const s=M.fromPath(r);return this.ei(t,s).next(o=>{o||e.removeEntry(s,F.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(r=>{r?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return P.or([()=>P.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
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
 */class ti{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.$i=r,this.Ui=s}static Wi(t,e){let r=U(),s=U();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new ti(t,e.fromCache,r,s)}}/**
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
 */class lf{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return fl()?8:Hh(hl())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.Yi(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new cf;return this.Xi(t,e,a).next(c=>{if(o.result=c,this.zi)return this.es(t,e,a,c.size)})}).next(()=>o.result)}es(t,e,r,s){return r.documentReadCount<this.ji?(an()<=z.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",Ae(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),P.resolve()):(an()<=z.DEBUG&&x("QueryEngine","Query:",Ae(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(an()<=z.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",Ae(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Nt(e))):P.resolve())}Yi(t,e){if(Xo(e))return P.resolve(null);let r=Nt(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Ss(e,null,"F"),r=Nt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=U(...o);return this.Ji.getDocuments(t,a).next(c=>this.indexManager.getMinOffset(t,r).next(h=>{const d=this.ts(e,c);return this.ns(e,d,a,h.readTime)?this.Yi(t,Ss(e,null,"F")):this.rs(t,d,e,h)}))})))}Zi(t,e,r,s){return Xo(e)||s.isEqual(F.min())?P.resolve(null):this.Ji.getDocuments(t,r).next(o=>{const a=this.ts(e,o);return this.ns(e,a,r,s)?P.resolve(null):(an()<=z.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ae(e)),this.rs(t,a,e,Uh(s,-1)).next(c=>c))})}ts(t,e){let r=new mt(iu(t));return e.forEach((s,o)=>{wr(t,o)&&(r=r.add(o))}),r}ns(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Xi(t,e,r){return an()<=z.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",Ae(e)),this.Ji.getDocumentsMatchingQuery(t,e,Zt.min(),r)}rs(t,e,r,s){return this.Ji.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */class hf{constructor(t,e,r,s){this.persistence=t,this.ss=e,this.serializer=s,this.os=new tt(G),this._s=new qe(o=>Hs(o),Ks),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(r)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Jd(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function df(n,t,e,r){return new hf(n,t,e,r)}async function Vu(n,t){const e=B(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.ls(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],c=[];let h=U();for(const d of s){a.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of o){c.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(r,h).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:c}))})})}function ff(n,t){const e=B(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.cs.newChangeBuffer({trackRemovals:!0});return function(c,h,d,m){const y=d.batch,w=y.keys();let b=P.resolve();return w.forEach(V=>{b=b.next(()=>m.getEntry(h,V)).next(N=>{const D=d.docVersions.get(V);H(D!==null),N.version.compareTo(D)<0&&(y.applyToRemoteDocument(N,d),N.isValidDocument()&&(N.setReadTime(d.commitVersion),m.addEntry(N)))})}),b.next(()=>c.mutationQueue.removeMutationBatch(h,y))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let h=U();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(h=h.add(c.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function Cu(n){const t=B(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function mf(n,t){const e=B(n),r=t.snapshotVersion;let s=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});s=e.os;const c=[];t.targetChanges.forEach((m,y)=>{const w=s.get(y);if(!w)return;c.push(e.Ur.removeMatchingKeys(o,m.removedDocuments,y).next(()=>e.Ur.addMatchingKeys(o,m.addedDocuments,y)));let b=w.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(y)!==null?b=b.withResumeToken(pt.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):m.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(m.resumeToken,r)),s=s.insert(y,b),function(N,D,$){return N.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(w,b,m)&&c.push(e.Ur.updateTargetData(o,b))});let h=jt(),d=U();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),c.push(pf(o,a,t.documentUpdates).next(m=>{h=m.Ps,d=m.Is})),!r.isEqual(F.min())){const m=e.Ur.getLastRemoteSnapshotVersion(o).next(y=>e.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(m)}return P.waitFor(c).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(e.os=s,o))}function pf(n,t,e){let r=U(),s=U();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=jt();return e.forEach((c,h)=>{const d=o.get(c);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),h.isNoDocument()&&h.version.isEqual(F.min())?(t.removeEntry(c,h.readTime),a=a.insert(c,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(c,h)):x("LocalStore","Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",h.version)}),{Ps:a,Is:s}})}function gf(n,t){const e=B(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function _f(n,t){const e=B(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Ur.getTargetData(r,t).next(o=>o?(s=o,P.resolve(s)):e.Ur.allocateTargetId(r).next(a=>(s=new Qt(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.os=e.os.insert(r.targetId,r),e._s.set(t,r.targetId)),r})}async function Ds(n,t,e){const r=B(n),s=r.os.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!bn(a))throw a;x("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.os=r.os.remove(t),r._s.delete(s.target)}function aa(n,t,e){const r=B(n);let s=F.min(),o=U();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,m){const y=B(h),w=y._s.get(m);return w!==void 0?P.resolve(y.os.get(w)):y.Ur.getTargetData(d,m)}(r,a,Nt(t)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,c.targetId).next(h=>{o=h})}).next(()=>r.ss.getDocumentsMatchingQuery(a,t,e?s:F.min(),e?o:U())).next(c=>(yf(r,cd(t),c),{documents:c,Ts:o})))}function yf(n,t,e){let r=n.us.get(t)||F.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.us.set(t,r)}class ua{constructor(){this.activeTargetIds=pd()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ef{constructor(){this.so=new ua,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,r){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new ua,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class ca{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let rr=null;function ls(){return rr===null?rr=function(){return 268435456+Math.round(2147483648*Math.random())}():rr++,"0x"+rr.toString(16)}/**
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
 */const vt="WebChannelConnection";class wf extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+e.host,this.vo=`projects/${s}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Fo(){return!1}Mo(e,r,s,o,a){const c=ls(),h=this.xo(e,r.toUriEncodedString());x("RestConnection",`Sending RPC '${e}' ${c}:`,h,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,o,a),this.No(e,h,d,s).then(m=>(x("RestConnection",`Received RPC '${e}' ${c}: `,m),m),m=>{throw ke("RestConnection",`RPC '${e}' ${c} failed with error: `,m,"url: ",h,"request:",s),m})}Lo(e,r,s,o,a,c){return this.Mo(e,r,s,o,a)}Oo(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Be}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>e[a]=o),s&&s.headers.forEach((o,a)=>e[a]=o)}xo(e,r){const s=Tf[e];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,r,s){const o=ls();return new Promise((a,c)=>{const h=new qa;h.setWithCredentials(!0),h.listenOnce($a.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case sr.NO_ERROR:const m=h.getResponseJson();x(vt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(m)),a(m);break;case sr.TIMEOUT:x(vt,`RPC '${t}' ${o} timed out`),c(new k(S.DEADLINE_EXCEEDED,"Request time out"));break;case sr.HTTP_ERROR:const y=h.getStatus();if(x(vt,`RPC '${t}' ${o} failed with status:`,y,"response text:",h.getResponseText()),y>0){let w=h.getResponseJson();Array.isArray(w)&&(w=w[0]);const b=w==null?void 0:w.error;if(b&&b.status&&b.message){const V=function(D){const $=D.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf($)>=0?$:S.UNKNOWN}(b.status);c(new k(V,b.message))}else c(new k(S.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new k(S.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{x(vt,`RPC '${t}' ${o} completed.`)}});const d=JSON.stringify(s);x(vt,`RPC '${t}' ${o} sending request:`,s),h.send(e,"POST",d,r,15)})}Bo(t,e,r){const s=ls(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Ha(),c=za(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Oo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const m=o.join("");x(vt,`Creating RPC '${t}' stream ${s}: ${m}`,h);const y=a.createWebChannel(m,h);let w=!1,b=!1;const V=new If({Io:D=>{b?x(vt,`Not sending because RPC '${t}' stream ${s} is closed:`,D):(w||(x(vt,`Opening RPC '${t}' stream ${s} transport.`),y.open(),w=!0),x(vt,`RPC '${t}' stream ${s} sending:`,D),y.send(D))},To:()=>y.close()}),N=(D,$,W)=>{D.listen($,q=>{try{W(q)}catch(Y){setTimeout(()=>{throw Y},0)}})};return N(y,un.EventType.OPEN,()=>{b||(x(vt,`RPC '${t}' stream ${s} transport opened.`),V.yo())}),N(y,un.EventType.CLOSE,()=>{b||(b=!0,x(vt,`RPC '${t}' stream ${s} transport closed`),V.So())}),N(y,un.EventType.ERROR,D=>{b||(b=!0,ke(vt,`RPC '${t}' stream ${s} transport errored:`,D),V.So(new k(S.UNAVAILABLE,"The operation could not be completed")))}),N(y,un.EventType.MESSAGE,D=>{var $;if(!b){const W=D.data[0];H(!!W);const q=W,Y=q.error||(($=q[0])===null||$===void 0?void 0:$.error);if(Y){x(vt,`RPC '${t}' stream ${s} received error:`,Y);const Mt=Y.status;let ct=function(_){const E=st[_];if(E!==void 0)return yu(E)}(Mt),T=Y.message;ct===void 0&&(ct=S.INTERNAL,T="Unknown error status: "+Mt+" with message "+Y.message),b=!0,V.So(new k(ct,T)),y.close()}else x(vt,`RPC '${t}' stream ${s} received:`,W),V.bo(W)}}),N(c,ja.STAT_EVENT,D=>{D.stat===Ts.PROXY?x(vt,`RPC '${t}' stream ${s} detected buffering proxy`):D.stat===Ts.NOPROXY&&x(vt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{V.wo()},0),V}}function hs(){return typeof document<"u"?document:null}/**
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
 */function Pr(n){return new kd(n,!0)}/**
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
 */class ei{constructor(t,e,r=1e3,s=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=r,this.qo=s,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,e-r);s>0&&x("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Du{constructor(t,e,r,s,o,a,c,h){this.ui=t,this.Ho=r,this.Jo=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new ei(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?($t(e.toString()),$t("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===e&&this.P_(r,s)},r=>{t(()=>{const s=new k(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(t,e){const r=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return x("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Af extends Du{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=Md(this.serializer,t),r=function(o){if(!("targetChange"in o))return F.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?F.min():a.readTime?Pt(a.readTime):F.min()}(t);return this.listener.d_(e,r)}A_(t){const e={};e.database=Cs(this.serializer),e.addTarget=function(o,a){let c;const h=a.target;if(c=Rs(h)?{documents:Fd(o,h)}:{query:Bd(o,h)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Tu(o,a.resumeToken);const d=Ps(o,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(F.min())>0){c.readTime=gr(o,a.snapshotVersion.toTimestamp());const d=Ps(o,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,t);const r=qd(this.serializer,t);r&&(e.labels=r),this.a_(e)}R_(t){const e={};e.database=Cs(this.serializer),e.removeTarget=t,this.a_(e)}}class Rf extends Du{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return H(!!t.streamToken),this.lastStreamToken=t.streamToken,H(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){H(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=Od(t.writeResults,t.commitTime),r=Pt(t.commitTime);return this.listener.g_(r,e)}p_(){const t={};t.database=Cs(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Ru(this.serializer,r))};this.a_(e)}}/**
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
 */class bf extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new k(S.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(t,Vs(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new k(S.UNKNOWN,o.toString())})}Lo(t,e,r,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(t,Vs(e,r),s,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new k(S.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Sf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?($t(e),this.D_=!1):x("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class Pf{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{r.enqueueAndForget(async()=>{ye(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(h){const d=B(h);d.L_.add(4),await Cn(d),d.q_.set("Unknown"),d.L_.delete(4),await Vr(d)}(this))})}),this.q_=new Sf(r,s)}}async function Vr(n){if(ye(n))for(const t of n.B_)await t(!0)}async function Cn(n){for(const t of n.B_)await t(!1)}function ku(n,t){const e=B(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),ii(e)?si(e):$e(e).r_()&&ri(e,t))}function ni(n,t){const e=B(n),r=$e(e);e.N_.delete(t),r.r_()&&Nu(e,t),e.N_.size===0&&(r.r_()?r.o_():ye(e)&&e.q_.set("Unknown"))}function ri(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(F.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}$e(n).A_(t)}function Nu(n,t){n.Q_.xe(t),$e(n).R_(t)}function si(n){n.Q_=new Pd({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),$e(n).start(),n.q_.v_()}function ii(n){return ye(n)&&!$e(n).n_()&&n.N_.size>0}function ye(n){return B(n).L_.size===0}function xu(n){n.Q_=void 0}async function Vf(n){n.q_.set("Online")}async function Cf(n){n.N_.forEach((t,e)=>{ri(n,t)})}async function Df(n,t){xu(n),ii(n)?(n.q_.M_(t),si(n)):n.q_.set("Unknown")}async function kf(n,t,e){if(n.q_.set("Online"),t instanceof vu&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const c of o.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.N_.delete(c),s.Q_.removeTarget(c))}(n,t)}catch(r){x("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await yr(n,r)}else if(t instanceof ar?n.Q_.Ke(t):t instanceof Eu?n.Q_.He(t):n.Q_.We(t),!e.isEqual(F.min()))try{const r=await Cu(n.localStore);e.compareTo(r)>=0&&await function(o,a){const c=o.Q_.rt(a);return c.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.N_.get(d);m&&o.N_.set(d,m.withResumeToken(h.resumeToken,a))}}),c.targetMismatches.forEach((h,d)=>{const m=o.N_.get(h);if(!m)return;o.N_.set(h,m.withResumeToken(pt.EMPTY_BYTE_STRING,m.snapshotVersion)),Nu(o,h);const y=new Qt(m.target,h,d,m.sequenceNumber);ri(o,y)}),o.remoteSyncer.applyRemoteEvent(c)}(n,e)}catch(r){x("RemoteStore","Failed to raise snapshot:",r),await yr(n,r)}}async function yr(n,t,e){if(!bn(t))throw t;n.L_.add(1),await Cn(n),n.q_.set("Offline"),e||(e=()=>Cu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await Vr(n)})}function Lu(n,t){return t().catch(e=>yr(n,e,t))}async function Cr(n){const t=B(n),e=ee(t);let r=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;Nf(t);)try{const s=await gf(t.localStore,r);if(s===null){t.O_.length===0&&e.o_();break}r=s.batchId,xf(t,s)}catch(s){await yr(t,s)}Mu(t)&&Ou(t)}function Nf(n){return ye(n)&&n.O_.length<10}function xf(n,t){n.O_.push(t);const e=ee(n);e.r_()&&e.V_&&e.m_(t.mutations)}function Mu(n){return ye(n)&&!ee(n).n_()&&n.O_.length>0}function Ou(n){ee(n).start()}async function Lf(n){ee(n).p_()}async function Mf(n){const t=ee(n);for(const e of n.O_)t.m_(e.mutations)}async function Of(n,t,e){const r=n.O_.shift(),s=Qs.from(r,t,e);await Lu(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Cr(n)}async function Ff(n,t){t&&ee(n).V_&&await async function(r,s){if(function(a){return _u(a)&&a!==S.ABORTED}(s.code)){const o=r.O_.shift();ee(r).s_(),await Lu(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Cr(r)}}(n,t),Mu(n)&&Ou(n)}async function la(n,t){const e=B(n);e.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const r=ye(e);e.L_.add(3),await Cn(e),r&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await Vr(e)}async function Bf(n,t){const e=B(n);t?(e.L_.delete(2),await Vr(e)):t||(e.L_.add(2),await Cn(e),e.q_.set("Unknown"))}function $e(n){return n.K_||(n.K_=function(e,r,s){const o=B(e);return o.w_(),new Af(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:Vf.bind(null,n),Ro:Cf.bind(null,n),mo:Df.bind(null,n),d_:kf.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),ii(n)?si(n):n.q_.set("Unknown")):(await n.K_.stop(),xu(n))})),n.K_}function ee(n){return n.U_||(n.U_=function(e,r,s){const o=B(e);return o.w_(),new Rf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Lf.bind(null,n),mo:Ff.bind(null,n),f_:Mf.bind(null,n),g_:Of.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await Cr(n)):(await n.U_.stop(),n.O_.length>0&&(x("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class oi{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Ut,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,c=new oi(t,e,a,s,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ai(n,t){if($t("AsyncQueue",`${t}: ${n}`),bn(n))return new k(S.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class Ce{constructor(t){this.comparator=t?(e,r)=>t(e,r)||M.comparator(e.key,r.key):(e,r)=>M.comparator(e.key,r.key),this.keyedMap=cn(),this.sortedSet=new tt(this.comparator)}static emptySet(t){return new Ce(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ce)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Ce;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class ha{constructor(){this.W_=new tt(M.comparator)}track(t){const e=t.doc.key,r=this.W_.get(e);r?t.type!==0&&r.type===3?this.W_=this.W_.insert(e,t):t.type===3&&r.type!==1?this.W_=this.W_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.W_=this.W_.remove(e):t.type===1&&r.type===2?this.W_=this.W_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):O():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Oe{constructor(t,e,r,s,o,a,c,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(c=>{a.push({type:0,doc:c})}),new Oe(t,e,Ce.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ir(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Uf{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class qf{constructor(){this.queries=da(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,r){const s=B(e),o=s.queries;s.queries=da(),o.forEach((a,c)=>{for(const h of c.j_)h.onError(r)})})(this,new k(S.ABORTED,"Firestore shutting down"))}}function da(){return new qe(n=>su(n),Ir)}async function Fu(n,t){const e=B(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.H_()&&t.J_()&&(r=2):(o=new Uf,r=t.J_()?0:1);try{switch(r){case 0:o.z_=await e.onListen(s,!0);break;case 1:o.z_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const c=ai(a,`Initialization of query '${Ae(t.query)}' failed`);return void t.onError(c)}e.queries.set(s,o),o.j_.push(t),t.Z_(e.onlineState),o.z_&&t.X_(o.z_)&&ui(e)}async function Bu(n,t){const e=B(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.j_.indexOf(t);a>=0&&(o.j_.splice(a,1),o.j_.length===0?s=t.J_()?0:1:!o.H_()&&t.J_()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function $f(n,t){const e=B(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const c of a.j_)c.X_(s)&&(r=!0);a.z_=s}}r&&ui(e)}function jf(n,t,e){const r=B(n),s=r.queries.get(t);if(s)for(const o of s.j_)o.onError(e);r.queries.delete(t)}function ui(n){n.Y_.forEach(t=>{t.next()})}var ks,fa;(fa=ks||(ks={})).ea="default",fa.Cache="cache";class Uu{constructor(t,e,r){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Oe(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const r=e!=="Offline";return(!this.options._a||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=Oe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==ks.Cache}}/**
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
 */class qu{constructor(t){this.key=t}}class $u{constructor(t){this.key=t}}class zf{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=U(),this.mutatedKeys=U(),this.Aa=iu(t),this.Ra=new Ce(this.Aa)}get Va(){return this.Ta}ma(t,e){const r=e?e.fa:new ha,s=e?e.Ra:this.Ra;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,c=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((m,y)=>{const w=s.get(m),b=wr(this.query,y)?y:null,V=!!w&&this.mutatedKeys.has(w.key),N=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let D=!1;w&&b?w.data.isEqual(b.data)?V!==N&&(r.track({type:3,doc:b}),D=!0):this.ga(w,b)||(r.track({type:2,doc:b}),D=!0,(h&&this.Aa(b,h)>0||d&&this.Aa(b,d)<0)&&(c=!0)):!w&&b?(r.track({type:0,doc:b}),D=!0):w&&!b&&(r.track({type:1,doc:w}),D=!0,(h||d)&&(c=!0)),D&&(b?(a=a.add(b),o=N?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{Ra:a,fa:r,ns:c,mutatedKeys:o}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((m,y)=>function(b,V){const N=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return N(b)-N(V)}(m.type,y.type)||this.Aa(m.doc,y.doc)),this.pa(r),s=s!=null&&s;const c=e&&!s?this.ya():[],h=this.da.size===0&&this.current&&!s?1:0,d=h!==this.Ea;return this.Ea=h,a.length!==0||d?{snapshot:new Oe(this.query,t.Ra,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new ha,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=U(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const e=[];return t.forEach(r=>{this.da.has(r)||e.push(new $u(r))}),this.da.forEach(r=>{t.has(r)||e.push(new qu(r))}),e}ba(t){this.Ta=t.Ts,this.da=U();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Oe.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Hf{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Kf{constructor(t){this.key=t,this.va=!1}}class Gf{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new qe(c=>su(c),Ir),this.Ma=new Map,this.xa=new Set,this.Oa=new tt(M.comparator),this.Na=new Map,this.La=new Js,this.Ba={},this.ka=new Map,this.qa=Me.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Wf(n,t,e=!0){const r=Wu(n);let s;const o=r.Fa.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Da()):s=await ju(r,t,e,!0),s}async function Qf(n,t){const e=Wu(n);await ju(e,t,!0,!1)}async function ju(n,t,e,r){const s=await _f(n.localStore,Nt(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let c;return r&&(c=await Xf(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&ku(n.remoteStore,s),c}async function Xf(n,t,e,r,s){n.Ka=(y,w,b)=>async function(N,D,$,W){let q=D.view.ma($);q.ns&&(q=await aa(N.localStore,D.query,!1).then(({documents:T})=>D.view.ma(T,q)));const Y=W&&W.targetChanges.get(D.targetId),Mt=W&&W.targetMismatches.get(D.targetId)!=null,ct=D.view.applyChanges(q,N.isPrimaryClient,Y,Mt);return pa(N,D.targetId,ct.wa),ct.snapshot}(n,y,w,b);const o=await aa(n.localStore,t,!0),a=new zf(t,o.Ts),c=a.ma(o.documents),h=Vn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,h);pa(n,e,d.wa);const m=new Hf(t,e,a);return n.Fa.set(t,m),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),d.snapshot}async function Yf(n,t,e){const r=B(n),s=r.Fa.get(t),o=r.Ma.get(s.targetId);if(o.length>1)return r.Ma.set(s.targetId,o.filter(a=>!Ir(a,t))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ds(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&ni(r.remoteStore,s.targetId),Ns(r,s.targetId)}).catch(Rn)):(Ns(r,s.targetId),await Ds(r.localStore,s.targetId,!0))}async function Jf(n,t){const e=B(n),r=e.Fa.get(t),s=e.Ma.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),ni(e.remoteStore,r.targetId))}async function Zf(n,t,e){const r=om(n);try{const s=await function(a,c){const h=B(a),d=ot.now(),m=c.reduce((b,V)=>b.add(V.key),U());let y,w;return h.persistence.runTransaction("Locally write mutations","readwrite",b=>{let V=jt(),N=U();return h.cs.getEntries(b,m).next(D=>{V=D,V.forEach(($,W)=>{W.isValidDocument()||(N=N.add($))})}).next(()=>h.localDocuments.getOverlayedDocuments(b,V)).next(D=>{y=D;const $=[];for(const W of c){const q=Id(W,y.get(W.key).overlayedDocument);q!=null&&$.push(new ne(W.key,q,Xa(q.value.mapValue),ft.exists(!0)))}return h.mutationQueue.addMutationBatch(b,d,$,c)}).next(D=>{w=D;const $=D.applyToLocalDocumentSet(y,N);return h.documentOverlayCache.saveOverlays(b,D.batchId,$)})}).then(()=>({batchId:w.batchId,changes:au(y)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,h){let d=a.Ba[a.currentUser.toKey()];d||(d=new tt(G)),d=d.insert(c,h),a.Ba[a.currentUser.toKey()]=d}(r,s.batchId,e),await Dn(r,s.changes),await Cr(r.remoteStore)}catch(s){const o=ai(s,"Failed to persist write");e.reject(o)}}async function zu(n,t){const e=B(n);try{const r=await mf(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Na.get(o);a&&(H(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?H(a.va):s.removedDocuments.size>0&&(H(a.va),a.va=!1))}),await Dn(e,r,t)}catch(r){await Rn(r)}}function ma(n,t,e){const r=B(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Fa.forEach((o,a)=>{const c=a.view.Z_(t);c.snapshot&&s.push(c.snapshot)}),function(a,c){const h=B(a);h.onlineState=c;let d=!1;h.queries.forEach((m,y)=>{for(const w of y.j_)w.Z_(c)&&(d=!0)}),d&&ui(h)}(r.eventManager,t),s.length&&r.Ca.d_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function tm(n,t,e){const r=B(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Na.get(t),o=s&&s.key;if(o){let a=new tt(M.comparator);a=a.insert(o,ut.newNoDocument(o,F.min()));const c=U().add(o),h=new Sr(F.min(),new Map,new tt(G),a,c);await zu(r,h),r.Oa=r.Oa.remove(o),r.Na.delete(t),ci(r)}else await Ds(r.localStore,t,!1).then(()=>Ns(r,t,e)).catch(Rn)}async function em(n,t){const e=B(n),r=t.batch.batchId;try{const s=await ff(e.localStore,t);Ku(e,r,null),Hu(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Dn(e,s)}catch(s){await Rn(s)}}async function nm(n,t,e){const r=B(n);try{const s=await function(a,c){const h=B(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return h.mutationQueue.lookupMutationBatch(d,c).next(y=>(H(y!==null),m=y.keys(),h.mutationQueue.removeMutationBatch(d,y))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,m,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>h.localDocuments.getDocuments(d,m))})}(r.localStore,t);Ku(r,t,e),Hu(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Dn(r,s)}catch(s){await Rn(s)}}function Hu(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function Ku(n,t,e){const r=B(n);let s=r.Ba[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Ba[r.currentUser.toKey()]=s}}function Ns(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Ma.get(t))n.Fa.delete(r),e&&n.Ca.$a(r,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(r=>{n.La.containsKey(r)||Gu(n,r)})}function Gu(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(ni(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),ci(n))}function pa(n,t,e){for(const r of e)r instanceof qu?(n.La.addReference(r.key,t),rm(n,r)):r instanceof $u?(x("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,t),n.La.containsKey(r.key)||Gu(n,r.key)):O()}function rm(n,t){const e=t.key,r=e.path.canonicalString();n.Oa.get(e)||n.xa.has(r)||(x("SyncEngine","New document in limbo: "+e),n.xa.add(r),ci(n))}function ci(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new M(X.fromString(t)),r=n.qa.next();n.Na.set(r,new Kf(e)),n.Oa=n.Oa.insert(e,r),ku(n.remoteStore,new Qt(Nt(Gs(e.path)),r,"TargetPurposeLimboResolution",qs.oe))}}async function Dn(n,t,e){const r=B(n),s=[],o=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((c,h)=>{a.push(r.Ka(h,t,e).then(d=>{var m;if((d||e)&&r.isPrimaryClient){const y=d?!d.fromCache:(m=e==null?void 0:e.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,y?"current":"not-current")}if(d){s.push(d);const y=ti.Wi(h.targetId,d);o.push(y)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(h,d){const m=B(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>P.forEach(d,w=>P.forEach(w.$i,b=>m.persistence.referenceDelegate.addReference(y,w.targetId,b)).next(()=>P.forEach(w.Ui,b=>m.persistence.referenceDelegate.removeReference(y,w.targetId,b)))))}catch(y){if(!bn(y))throw y;x("LocalStore","Failed to update sequence numbers: "+y)}for(const y of d){const w=y.targetId;if(!y.fromCache){const b=m.os.get(w),V=b.snapshotVersion,N=b.withLastLimboFreeSnapshotVersion(V);m.os=m.os.insert(w,N)}}}(r.localStore,o))}async function sm(n,t){const e=B(n);if(!e.currentUser.isEqual(t)){x("SyncEngine","User change. New user:",t.toKey());const r=await Vu(e.localStore,t);e.currentUser=t,function(o,a){o.ka.forEach(c=>{c.forEach(h=>{h.reject(new k(S.CANCELLED,a))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Dn(e,r.hs)}}function im(n,t){const e=B(n),r=e.Na.get(t);if(r&&r.va)return U().add(r.key);{let s=U();const o=e.Ma.get(t);if(!o)return s;for(const a of o){const c=e.Fa.get(a);s=s.unionWith(c.view.Va)}return s}}function Wu(n){const t=B(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=zu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=im.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=tm.bind(null,t),t.Ca.d_=$f.bind(null,t.eventManager),t.Ca.$a=jf.bind(null,t.eventManager),t}function om(n){const t=B(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=em.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=nm.bind(null,t),t}class Er{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Pr(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return df(this.persistence,new lf,t.initialUser,this.serializer)}Ga(t){return new af(Zs.Zr,this.serializer)}Wa(t){return new Ef}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Er.provider={build:()=>new Er};class xs{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ma(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=sm.bind(null,this.syncEngine),await Bf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new qf}()}createDatastore(t){const e=Pr(t.databaseInfo.databaseId),r=function(o){return new wf(o)}(t.databaseInfo);return function(o,a,c,h){return new bf(o,a,c,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,c){return new Pf(r,s,o,a,c)}(this.localStore,this.datastore,t.asyncQueue,e=>ma(this.syncEngine,e,0),function(){return ca.D()?new ca:new vf}())}createSyncEngine(t,e){return function(s,o,a,c,h,d,m){const y=new Gf(s,o,a,c,h,d);return m&&(y.Qa=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=B(s);x("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Cn(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}xs.provider={build:()=>new xs};/**
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
 */class Qu{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):$t("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class am{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new k(S.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const e=await async function(s,o){const a=B(s),c={documents:o.map(y=>_r(a.serializer,y))},h=await a.Lo("BatchGetDocuments",a.serializer.databaseId,X.emptyPath(),c,o.length),d=new Map;h.forEach(y=>{const w=Ld(a.serializer,y);d.set(w.key.toString(),w)});const m=[];return o.forEach(y=>{const w=d.get(y.toString());H(!!w),m.push(w)}),m}(this.datastore,t);return e.forEach(r=>this.recordVersion(r)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(t.toString())}delete(t){this.write(new br(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((e,r)=>{const s=M.fromPath(r);this.mutations.push(new gu(s,this.precondition(s)))}),await async function(r,s){const o=B(r),a={writes:s.map(c=>Ru(o.serializer,c))};await o.Mo("Commit",o.serializer.databaseId,X.emptyPath(),a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw O();e=F.min()}const r=this.readVersions.get(t.key.toString());if(r){if(!e.isEqual(r))throw new k(S.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(F.min())?ft.exists(!1):ft.updateTime(e):ft.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(F.min()))throw new k(S.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ft.updateTime(e)}return ft.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}/**
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
 */class um{constructor(t,e,r,s,o){this.asyncQueue=t,this.datastore=e,this.options=r,this.updateFunction=s,this.deferred=o,this._u=r.maxAttempts,this.t_=new ei(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const t=new am(this.datastore),e=this.cu(t);e&&e.then(r=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.lu(s)}))}).catch(r=>{this.lu(r)})})}cu(t){try{const e=this.updateFunction(t);return!Sn(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}lu(t){this._u>0&&this.hu(t)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(t)}hu(t){if(t.name==="FirebaseError"){const e=t.code;return e==="aborted"||e==="failed-precondition"||e==="already-exists"||!_u(e)}return!1}}/**
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
 */class cm{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=Tt.UNAUTHENTICATED,this.clientId=Ga.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{x("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(x("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ut;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=ai(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function ds(n,t){n.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Vu(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function ga(n,t){n.asyncQueue.verifyOperationInProgress();const e=await lm(n);x("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>la(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>la(t.remoteStore,s)),n._onlineComponents=t}async function lm(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){x("FirestoreClient","Using user provided OfflineComponentProvider");try{await ds(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===S.FAILED_PRECONDITION||s.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;ke("Error using user provided cache. Falling back to memory cache: "+e),await ds(n,new Er)}}else x("FirestoreClient","Using default OfflineComponentProvider"),await ds(n,new Er);return n._offlineComponents}async function li(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(x("FirestoreClient","Using user provided OnlineComponentProvider"),await ga(n,n._uninitializedComponentsProvider._online)):(x("FirestoreClient","Using default OnlineComponentProvider"),await ga(n,new xs))),n._onlineComponents}function hm(n){return li(n).then(t=>t.syncEngine)}function dm(n){return li(n).then(t=>t.datastore)}async function Ls(n){const t=await li(n),e=t.eventManager;return e.onListen=Wf.bind(null,t.syncEngine),e.onUnlisten=Yf.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Qf.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Jf.bind(null,t.syncEngine),e}function fm(n,t,e={}){const r=new Ut;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,d){const m=new Qu({next:w=>{m.Za(),a.enqueueAndForget(()=>Bu(o,y)),w.fromCache&&h.source==="server"?d.reject(new k(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(w)},error:w=>d.reject(w)}),y=new Uu(c,m,{includeMetadataChanges:!0,_a:!0});return Fu(o,y)}(await Ls(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function Xu(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const _a=new Map;/**
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
 */function Yu(n,t,e){if(!e)throw new k(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function mm(n,t,e,r){if(t===!0&&r===!0)throw new k(S.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function ya(n){if(!M.isDocumentKey(n))throw new k(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ea(n){if(M.isDocumentKey(n))throw new k(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Dr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":O()}function xt(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new k(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Dr(n);throw new k(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class va{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new k(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new k(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}mm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Xu((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new k(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new k(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new k(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class kr{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new va({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new k(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new k(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new va(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Dh;switch(r.type){case"firstParty":return new Lh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new k(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=_a.get(e);r&&(x("ComponentProvider","Removing Datastore"),_a.delete(e),r.terminate())}(this),Promise.resolve()}}function pm(n,t,e,r={}){var s;const o=(n=xt(n,kr))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&ke("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let c,h;if(typeof r.mockUserToken=="string")c=r.mockUserToken,h=Tt.MOCK_USER;else{c=ll(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new k(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new Tt(d)}n._authCredentials=new kh(new Ka(c,h))}}/**
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
 */class re{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new re(this.firestore,t,this._query)}}class Rt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Rt(this.firestore,t,this._key)}}class Jt extends re{constructor(t,e,r){super(t,e,Gs(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Rt(this.firestore,null,new M(t))}withConverter(t){return new Jt(this.firestore,t,this._path)}}function De(n,t,...e){if(n=Ct(n),Yu("collection","path",t),n instanceof kr){const r=X.fromString(t,...e);return Ea(r),new Jt(n,null,r)}{if(!(n instanceof Rt||n instanceof Jt))throw new k(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return Ea(r),new Jt(n.firestore,null,r)}}function Vt(n,t,...e){if(n=Ct(n),arguments.length===1&&(t=Ga.newId()),Yu("doc","path",t),n instanceof kr){const r=X.fromString(t,...e);return ya(r),new Rt(n,null,new M(r))}{if(!(n instanceof Rt||n instanceof Jt))throw new k(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return ya(r),new Rt(n.firestore,n instanceof Jt?n.converter:null,new M(r))}}/**
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
 */class Ta{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new ei(this,"async_queue_retry"),this.Vu=()=>{const r=hs();r&&x("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const e=hs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=hs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new Ut;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!bn(t))throw t;x("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw $t("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=e,e}enqueueAfterDelay(t,e,r){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const s=oi.createAndSchedule(this,t,e,r,o=>this.yu(o));return this.Tu.push(s),s}fu(){this.Eu&&O()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}function Ia(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const s=e;for(const o of r)if(o in s&&typeof s[o]=="function")return!0;return!1}(n,["next","error","complete"])}class pe extends kr{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Ta,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ta(t),this._firestoreClient=void 0,await t}}}function gm(n,t){const e=typeof n=="object"?n:Eh(),r=typeof n=="string"?n:"(default)",s=ph(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=ul("firestore");o&&pm(s,...o)}return s}function kn(n){if(n._terminated)throw new k(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||_m(n),n._firestoreClient}function _m(n){var t,e,r;const s=n._freezeSettings(),o=function(c,h,d,m){return new Wh(c,h,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Xu(m.experimentalLongPollingOptions),m.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new cm(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(n._componentsProvider))}/**
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
 */class ge{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ge(pt.fromBase64String(t))}catch(e){throw new k(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new ge(pt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Nn{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new k(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class hi{constructor(t){this._methodName=t}}/**
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
 */class di{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new k(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new k(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return G(this._lat,t._lat)||G(this._long,t._long)}}/**
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
 */class fi{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
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
 */const ym=/^__.*__$/;class Em{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new ne(t,this.data,this.fieldMask,e,this.fieldTransforms):new Pn(t,this.data,e,this.fieldTransforms)}}class Ju{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new ne(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Zu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}class mi{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new mi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:r,xu:!1});return s.Ou(t),s}Nu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return vr(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(Zu(this.Cu)&&ym.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class vm{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Pr(t)}Qu(t,e,r,s=!1){return new mi({Cu:t,methodName:e,qu:r,path:dt.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Nr(n){const t=n._freezeSettings(),e=Pr(n._databaseId);return new vm(n._databaseId,!!t.ignoreUndefinedProperties,e)}function pi(n,t,e,r,s,o={}){const a=n.Qu(o.merge||o.mergeFields?2:0,t,e,s);gi("Data must be an object, but it was:",a,r);const c=nc(r,a);let h,d;if(o.merge)h=new St(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const y of o.mergeFields){const w=Ms(t,y,e);if(!a.contains(w))throw new k(S.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);sc(m,w)||m.push(w)}h=new St(m),d=a.fieldTransforms.filter(y=>h.covers(y.field))}else h=null,d=a.fieldTransforms;return new Em(new At(c),h,d)}class xr extends hi{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof xr}}function tc(n,t,e,r){const s=n.Qu(1,t,e);gi("Data must be an object, but it was:",s,r);const o=[],a=At.empty();_e(r,(h,d)=>{const m=_i(t,h,e);d=Ct(d);const y=s.Nu(m);if(d instanceof xr)o.push(m);else{const w=xn(d,y);w!=null&&(o.push(m),a.set(m,w))}});const c=new St(o);return new Ju(a,c,s.fieldTransforms)}function ec(n,t,e,r,s,o){const a=n.Qu(1,t,e),c=[Ms(t,r,e)],h=[s];if(o.length%2!=0)throw new k(S.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<o.length;w+=2)c.push(Ms(t,o[w])),h.push(o[w+1]);const d=[],m=At.empty();for(let w=c.length-1;w>=0;--w)if(!sc(d,c[w])){const b=c[w];let V=h[w];V=Ct(V);const N=a.Nu(b);if(V instanceof xr)d.push(b);else{const D=xn(V,N);D!=null&&(d.push(b),m.set(b,D))}}const y=new St(d);return new Ju(m,y,a.fieldTransforms)}function Tm(n,t,e,r=!1){return xn(e,n.Qu(r?4:3,t))}function xn(n,t){if(rc(n=Ct(n)))return gi("Unsupported field value:",t,n),nc(n,t);if(n instanceof hi)return function(r,s){if(!Zu(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const c of r){let h=xn(c,s.Lu(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=Ct(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return gd(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=ot.fromDate(r);return{timestampValue:gr(s.serializer,o)}}if(r instanceof ot){const o=new ot(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:gr(s.serializer,o)}}if(r instanceof di)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ge)return{bytesValue:Tu(s.serializer,r._byteString)};if(r instanceof Rt){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ys(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof fi)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw c.Bu("VectorValues must only contain numeric values.");return Ws(c.serializer,h)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Dr(r)}`)}(n,t)}function nc(n,t){const e={};return Wa(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):_e(n,(r,s)=>{const o=xn(s,t.Mu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function rc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ot||n instanceof di||n instanceof ge||n instanceof Rt||n instanceof hi||n instanceof fi)}function gi(n,t,e){if(!rc(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=Dr(e);throw r==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+r)}}function Ms(n,t,e){if((t=Ct(t))instanceof Nn)return t._internalPath;if(typeof t=="string")return _i(n,t);throw vr("Field path arguments must be of type string or ",n,!1,void 0,e)}const Im=new RegExp("[~\\*/\\[\\]]");function _i(n,t,e){if(t.search(Im)>=0)throw vr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Nn(...t.split("."))._internalPath}catch{throw vr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function vr(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new k(S.INVALID_ARGUMENT,c+n+h)}function sc(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class Tr{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new wm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(yi("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class wm extends Tr{data(){return super.data()}}function yi(n,t){return typeof t=="string"?_i(n,t):t instanceof Nn?t._internalPath:t._delegate._internalPath}/**
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
 */function ic(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new k(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ei{}class oc extends Ei{}function Am(n,t,...e){let r=[];t instanceof Ei&&r.push(t),r=r.concat(e),function(o){const a=o.filter(h=>h instanceof Ti).length,c=o.filter(h=>h instanceof vi).length;if(a>1||a>0&&c>0)throw new k(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class vi extends oc{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new vi(t,e,r)}_apply(t){const e=this._parse(t);return ac(t._query,e),new re(t.firestore,t.converter,bs(t._query,e))}_parse(t){const e=Nr(t.firestore);return function(o,a,c,h,d,m,y){let w;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new k(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Aa(y,m);const b=[];for(const V of y)b.push(wa(h,o,V));w={arrayValue:{values:b}}}else w=wa(h,o,y)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Aa(y,m),w=Tm(c,a,y,m==="in"||m==="not-in");return it.create(d,m,w)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class Ti extends Ei{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Ti(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:kt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,o){let a=s;const c=o.getFlattenedFilters();for(const h of c)ac(a,h),a=bs(a,h)}(t._query,e),new re(t.firestore,t.converter,bs(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ii extends oc{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Ii(t,e)}_apply(t){const e=function(s,o,a){if(s.startAt!==null)throw new k(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new k(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new In(o,a)}(t._query,this._field,this._direction);return new re(t.firestore,t.converter,function(s,o){const a=s.explicitOrderBy.concat([o]);return new Ue(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,e))}}function Rm(n,t="asc"){const e=t,r=yi("orderBy",n);return Ii._create(r,e)}function wa(n,t,e){if(typeof(e=Ct(e))=="string"){if(e==="")throw new k(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ru(t)&&e.indexOf("/")!==-1)throw new k(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(X.fromString(e));if(!M.isDocumentKey(r))throw new k(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return zo(n,new M(r))}if(e instanceof Rt)return zo(n,e._key);throw new k(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Dr(e)}.`)}function Aa(n,t){if(!Array.isArray(n)||n.length===0)throw new k(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function ac(n,t){const e=function(s,o){for(const a of s)for(const c of a.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new k(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new k(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class uc{convertValue(t,e="none"){switch(me(t)){case 0:return null;case 1:return t.booleanValue;case 2:return rt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(fe(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw O()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return _e(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>rt(a.doubleValue));return new fi(o)}convertGeoPoint(t){return new di(rt(t.latitude),rt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=js(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(En(t));default:return null}}convertTimestamp(t){const e=te(t);return new ot(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=X.fromString(t);H(Pu(r));const s=new vn(r.get(1),r.get(3)),o=new M(r.popFirst(5));return s.isEqual(e)||$t(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */function wi(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}class bm extends uc{constructor(t){super(),this.firestore=t}convertBytes(t){return new ge(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Rt(this.firestore,null,e)}}/**
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
 */class Se{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ai extends Tr{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ur(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(yi("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class ur extends Ai{data(t={}){return super.data(t)}}class cc{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Se(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new ur(this._firestore,this._userDataWriter,r.key,r,new Se(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new k(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const h=new ur(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Se(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new ur(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Se(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:Sm(c.type),doc:h,oldIndex:d,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Sm(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}class Lr extends uc{constructor(t){super(),this.firestore=t}convertBytes(t){return new ge(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Rt(this.firestore,null,e)}}function lc(n){n=xt(n,re);const t=xt(n.firestore,pe),e=kn(t),r=new Lr(t);return ic(n._query),fm(e,n._query).then(s=>new cc(t,r,n,s))}function Pm(n,t,e){n=xt(n,Rt);const r=xt(n.firestore,pe),s=wi(n.converter,t,e);return hc(r,[pi(Nr(r),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,ft.none())])}function fs(n,...t){var e,r,s;n=Ct(n);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||Ia(t[a])||(o=t[a],a++);const c={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Ia(t[a])){const y=t[a];t[a]=(e=y.next)===null||e===void 0?void 0:e.bind(y),t[a+1]=(r=y.error)===null||r===void 0?void 0:r.bind(y),t[a+2]=(s=y.complete)===null||s===void 0?void 0:s.bind(y)}let h,d,m;if(n instanceof Rt)d=xt(n.firestore,pe),m=Gs(n._key.path),h={next:y=>{t[a]&&t[a](Vm(d,n,y))},error:t[a+1],complete:t[a+2]};else{const y=xt(n,re);d=xt(y.firestore,pe),m=y._query;const w=new Lr(d);h={next:b=>{t[a]&&t[a](new cc(d,w,y,b))},error:t[a+1],complete:t[a+2]},ic(n._query)}return function(w,b,V,N){const D=new Qu(N),$=new Uu(b,D,V);return w.asyncQueue.enqueueAndForget(async()=>Fu(await Ls(w),$)),()=>{D.Za(),w.asyncQueue.enqueueAndForget(async()=>Bu(await Ls(w),$))}}(kn(d),m,c,h)}function hc(n,t){return function(r,s){const o=new Ut;return r.asyncQueue.enqueueAndForget(async()=>Zf(await hm(r),s,o)),o.promise}(kn(n),t)}function Vm(n,t,e){const r=e.docs.get(t._key),s=new Lr(n);return new Ai(n,s,t._key,r,new Se(e.hasPendingWrites,e.fromCache),t.converter)}/**
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
 */const Cm={maxAttempts:5};/**
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
 */class Dm{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=Nr(t)}set(t,e,r){this._verifyNotCommitted();const s=Wt(t,this._firestore),o=wi(s.converter,e,r),a=pi(this._dataReader,"WriteBatch.set",s._key,o,s.converter!==null,r);return this._mutations.push(a.toMutation(s._key,ft.none())),this}update(t,e,r,...s){this._verifyNotCommitted();const o=Wt(t,this._firestore);let a;return a=typeof(e=Ct(e))=="string"||e instanceof Nn?ec(this._dataReader,"WriteBatch.update",o._key,e,r,s):tc(this._dataReader,"WriteBatch.update",o._key,e),this._mutations.push(a.toMutation(o._key,ft.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=Wt(t,this._firestore);return this._mutations=this._mutations.concat(new br(e._key,ft.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new k(S.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Wt(n,t){if((n=Ct(n)).firestore!==t)throw new k(S.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */class km extends class{constructor(e,r){this._firestore=e,this._transaction=r,this._dataReader=Nr(e)}get(e){const r=Wt(e,this._firestore),s=new bm(this._firestore);return this._transaction.lookup([r._key]).then(o=>{if(!o||o.length!==1)return O();const a=o[0];if(a.isFoundDocument())return new Tr(this._firestore,s,a.key,a,r.converter);if(a.isNoDocument())return new Tr(this._firestore,s,r._key,null,r.converter);throw O()})}set(e,r,s){const o=Wt(e,this._firestore),a=wi(o.converter,r,s),c=pi(this._dataReader,"Transaction.set",o._key,a,o.converter!==null,s);return this._transaction.set(o._key,c),this}update(e,r,s,...o){const a=Wt(e,this._firestore);let c;return c=typeof(r=Ct(r))=="string"||r instanceof Nn?ec(this._dataReader,"Transaction.update",a._key,r,s,o):tc(this._dataReader,"Transaction.update",a._key,r),this._transaction.update(a._key,c),this}delete(e){const r=Wt(e,this._firestore);return this._transaction.delete(r._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=Wt(t,this._firestore),r=new Lr(this._firestore);return super.get(t).then(s=>new Ai(this._firestore,r,e._key,s._document,new Se(!1,!1),e.converter))}}function Ri(n,t,e){n=xt(n,pe);const r=Object.assign(Object.assign({},Cm),e);return function(o){if(o.maxAttempts<1)throw new k(S.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(o,a,c){const h=new Ut;return o.asyncQueue.enqueueAndForget(async()=>{const d=await dm(o);new um(o.asyncQueue,d,c,a,h).au()}),h.promise}(kn(n),s=>t(new km(n,s)),r)}/**
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
 */function dc(n){return kn(n=xt(n,pe)),new Dm(n,t=>hc(n,t))}(function(t,e=!0){(function(s){Be=s})(yh),hr(new gn("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),c=new pe(new Nh(r.getProvider("auth-internal")),new Oh(r.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new k(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vn(d.options.projectId,m)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Ve(Bo,"4.7.3",t),Ve(Bo,"4.7.3","esm2017")})();const Os={SESSION:"lettuce_toto_session"},Ra=5,ba={id:"admin",passwordHash:"28fda2f7f6b87d9802cf03923dd67723d929511ac8cc91fd298f711ebf4d3610"},Sa=["https://lh3.googleusercontent.com/aida-public/AB6AXuCkclluN4crV_lP8Af2ON0US-itf-hazfWkNZS8f6rPtjDgPEFsJlaiR0N_3vHEejTjEIJNsQC1As5Fcajjdn6oeVD2c3C5LPEFHsWzdjpQq25PwEYIcQOO_2dCW4HUii6tPm9_GWAJLEcH7nI_s7-zb-YUHa0Ilz_3qcSQXrnbxJLAOGHA1_TiURHrgJmyA6DygF1WFIuNveybZUiU8zTvyUoDXw_VzZ51vMMip5R3KzSK3nQnbjXpBxnfz8xiVXtHWEc2SHnMKsG","https://lh3.googleusercontent.com/aida-public/AB6AXuAJcZ_nUwcU7xkgPnAmv3yBjxJeH6LHKCcJtZvsuB4Rb6yXc1wa_eoFxzS7xAL6IP33wv8SKuNl95TgkgZx1jhMmYJI0YY7UpO6Bu3XcmuxcNau1BocaocgfxZ_yn8SEWzKGjM7LL5GPVDxaUQUgal4ZD6RFnZPHlI0F9Ik5l4u27YxDIy6GeOKA5vbteMeDUtXwPw8yls-HFWTfwRJqVFekmaZGpNYPmNu98DmnMcRfGV2c7KtsNrhDlXVchnQaA7zPcpJjwU7ehJ6","https://lh3.googleusercontent.com/aida-public/AB6AXuAHvhUTlnbeJLlpXCQXwoaWaLs8eAWfrxFmxeQ4xc3SrMtQqVJObyWlys0_ZusZMevZ9zaDNTlHYON36qxy0J8Kc38Kxh1SAAVV0BaxUeL8B0hkJ01wtTPLzzpGojAYEck0bo23R9aVk9xiesnEcSssNoCYZUJT3_ooWrU1LJrjPITchri-luhUNuJpmG47WkLW1Ba-5BGSf5i93ypGKHW3dh8cgRG3_2CPjKjo0X6L0iolcBhRn6rmb8uxgIgYTQFJf-GMXC_BS2bD"];async function Nm(n){const e=new TextEncoder().encode(n),r=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(r)).map(o=>o.toString(16).padStart(2,"0")).join("")}const we={rank1:5,rank2:4,rank3:3,rank4:2,rank5:1.5,others:.9},xm={apiKey:"AIzaSyDw4wFYBpW--wse_hrFUpcSLKPPQIkvMXg",authDomain:"classtoto3-9.firebaseapp.com",projectId:"classtoto3-9",storageBucket:"classtoto3-9.firebasestorage.app",messagingSenderId:"522595238940",appId:"1:522595238940:web:0eb8848d0617ec90ad8bd9",measurementId:"G-PQ3EWX23W9"},Lm=Oa(xm),nt=gm(Lm);let L={students:[],lettuce:[],currentUser:null,history:[]};function Z(n,t="success"){const e=document.getElementById("toast-container")||(()=>{const o=document.createElement("div");return o.id="toast-container",o.className="toast-container",document.body.appendChild(o),o})(),r=document.createElement("div");r.className=`toast ${t}`;let s="🔔";t==="success"&&(s="✅"),t==="error"&&(s="❌"),t==="warning"&&(s="⚠️"),r.innerHTML=`<span>${s}</span> <span>${n}</span>`,e.appendChild(r),setTimeout(()=>{r.style.opacity="0",r.style.transform="translateY(-10px)",setTimeout(()=>r.remove(),300)},3e3)}function fc(){const n=[];for(let t=1;t<=36;t++){const e=`309${String(t).padStart(2,"0")}`;n.push({id:e,name:`${e} 학생`,password:e,tokens:1e3,bets:{1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0}})}return n}function mc(){const n=[];for(let t=1;t<=10;t++)n.push({id:String(t),name:`상추 ${t}호`,totalBets:0});return n}async function Mm(){try{if((await lc(De(nt,"students"))).empty){console.log("DB가 비어 있습니다. 초기 데이터를 Firestore에 주입합니다...");const t=dc(nt);fc().forEach(s=>{const o=Vt(nt,"students",s.id);t.set(o,s)}),mc().forEach(s=>{const o=Vt(nt,"lettuce",s.id);t.set(o,s)}),await t.commit(),console.log("초기 데이터 주입 완료.")}}catch(n){console.error("초기 데이터 조회/주입 중 오류 발생:",n),n.code==="permission-denied"?Z("Firebase Firestore 권한 오류! 보안 규칙(Security Rules)을 허용으로 설정해주세요.","error"):Z("DB 초기화 실패: "+n.message,"error")}}let bi=!1,pc=!1,gc=!1;function ms(){if(bi&&pc&&gc){if(L.currentUser&&L.currentUser!=="admin"){const n=L.students.find(t=>t.id===L.currentUser.id);n?L.currentUser=n:(L.currentUser=null,Pe())}ce()}}function Om(){fs(De(nt,"students"),t=>{const e=[];t.forEach(r=>{e.push(r.data())}),e.sort((r,s)=>r.id.localeCompare(s.id)),L.students=e,bi=!0,ms()},t=>{console.error("Students Listener Error:",t),t.code==="permission-denied"?Z("학번 데이터 로드 실패: Firestore 보안 규칙을 확인하세요.","error"):Z("학번 로드 실패: "+t.message,"error")}),fs(De(nt,"lettuce"),t=>{const e=[];t.forEach(r=>{e.push(r.data())}),e.sort((r,s)=>parseInt(r.id)-parseInt(s.id)),L.lettuce=e,pc=!0,ms()},t=>{console.error("Lettuce Listener Error:",t),Z("상추 데이터 로드 실패: "+t.message,"error")});const n=Am(De(nt,"history"),Rm("round","asc"));fs(n,t=>{const e=[];t.forEach(r=>{e.push(r.data())}),L.history=e,gc=!0,ms()},t=>{console.error("History Listener Error:",t),Z("정산 기록 로드 실패: "+t.message,"error")})}async function Fm(){await Mm(),Om();const n=localStorage.getItem(Os.SESSION);n?n==="admin"?L.currentUser="admin":L.currentUser={id:n}:L.currentUser=null}function Pe(){L.currentUser?localStorage.setItem(Os.SESSION,L.currentUser==="admin"?"admin":L.currentUser.id):localStorage.removeItem(Os.SESSION)}function ce(){document.querySelectorAll(".view").forEach(n=>n.classList.remove("active")),L.currentUser?L.currentUser==="admin"?(document.getElementById("admin-view").classList.add("active"),qm()):(document.getElementById("student-view").classList.add("active"),Bm()):(document.getElementById("login-view").classList.add("active"),document.getElementById("login-error").classList.add("hidden"),document.getElementById("login-form").reset())}function Bm(){if(!L.currentUser||L.currentUser==="admin")return;const n=L.students.find(c=>c.id===L.currentUser.id);if(!n)return;L.currentUser=n,document.getElementById("student-badge-id").innerText=`${n.id} 학생`,document.getElementById("student-tokens-val").innerText=n.tokens.toLocaleString(),document.getElementById("summary-balance").innerText=n.tokens.toLocaleString();const t=Object.values(n.bets).reduce((c,h)=>c+h,0);document.getElementById("summary-total-bet").innerText=t.toLocaleString();const e=document.getElementById("my-bets-detail-list");e.innerHTML="";let r=!1;Object.entries(n.bets).forEach(([c,h])=>{if(h>0){r=!0;const d=document.createElement("div");d.className="flex justify-between items-center py-3.5 first:pt-0 last:pb-0",d.innerHTML=`
        <span class="font-body-md text-ink font-medium">상추 ${c}호</span>
        <div class="flex items-center gap-3">
          <strong class="font-body-md text-action-blue font-semibold">💰 ${h.toLocaleString()} TKN</strong>
          <button class="btn-cancel-bet btn-interact bg-error-container/10 hover:bg-error-container/20 text-error text-xs font-semibold px-2.5 py-1 rounded-full animate-entrance" data-id="${c}">
            취소
          </button>
        </div>
      `,e.appendChild(d)}}),r||(e.innerHTML='<p class="text-sm text-secondary text-center py-6">이번 주 베팅 내역이 없습니다.</p>');const s=document.getElementById("lettuce-cards-container");s.innerHTML="";const o=L.lettuce.reduce((c,h)=>c+h.totalBets,0);L.lettuce.forEach(c=>{const h=document.createElement("div");h.className="bg-white hairline-border rounded-2xl p-6 flex flex-col items-center card-interact animate-entrance";const d=n.bets[c.id]||0,m=o>0?(c.totalBets/o*100).toFixed(1):"0.0",y=Sa[(parseInt(c.id)-1)%Sa.length],w=d>0?`<button class="w-full bg-error-container/20 hover:bg-error-container/30 text-error py-2.5 rounded-full font-semibold btn-interact mt-2 btn-cancel-card-bet" data-id="${c.id}">베팅 취소</button>`:"";h.innerHTML=`
      <div class="w-full h-44 mb-4 flex items-center justify-center">
        <img src="${y}" alt="${c.name}" class="h-full object-contain lettuce-shadow" />
      </div>
      <div class="text-center w-full">
        <h3 class="font-headline-md text-headline-md mb-2 text-ink flex items-center justify-center gap-1.5 font-bold">
          ${c.name}
          <span class="text-xs bg-action-blue/10 text-action-blue px-2 py-0.5 rounded-full font-semibold">Active</span>
        </h3>
        
        <div class="space-y-1.5 mb-6 text-sm">
          <div class="flex justify-between text-secondary">
            <span>누적 전체 베팅액</span>
            <span class="font-semibold text-ink">💰 ${c.totalBets.toLocaleString()} TKN</span>
          </div>
          
          <div class="py-1">
            <div class="flex justify-between text-xs text-secondary mb-1">
              <span>실시간 점유율</span>
              <span class="font-semibold text-ink">${m}%</span>
            </div>
            <div class="w-full bg-secondary-container h-1.5 rounded-full overflow-hidden">
              <div class="bg-action-blue h-full rounded-full transition-all duration-1000 ease-out" style="width: ${m}%;"></div>
            </div>
          </div>
          
          <div class="flex justify-between text-secondary border-t border-outline-variant pt-2 mt-2">
            <span>내 베팅액</span>
            <span class="font-semibold text-action-blue">💰 ${d.toLocaleString()} TKN</span>
          </div>
        </div>

        <div class="space-y-2.5">
          <div class="flex gap-2">
            <input type="number" class="w-full bg-surface-container-low hairline-border rounded-xl px-3.5 py-2 text-sm text-ink outline-none focus:border-action-blue transition-colors bet-amount-input" 
              id="bet-input-${c.id}" min="5" placeholder="최소 5" />
            <button class="bg-action-blue text-white px-4 py-2.5 rounded-xl font-semibold btn-interact btn-bet text-sm shrink-0" data-id="${c.id}">
              베팅
            </button>
          </div>
          
          <div class="grid grid-cols-4 gap-1.5">
            <button class="bg-surface-container hover:bg-surface-container-high text-xs font-semibold py-1.5 rounded-lg btn-interact btn-quick" data-id="${c.id}" data-amount="5">+5</button>
            <button class="bg-surface-container hover:bg-surface-container-high text-xs font-semibold py-1.5 rounded-lg btn-interact btn-quick" data-id="${c.id}" data-amount="10">+10</button>
            <button class="bg-surface-container hover:bg-surface-container-high text-xs font-semibold py-1.5 rounded-lg btn-interact btn-quick" data-id="${c.id}" data-amount="50">+50</button>
            <button class="bg-surface-container hover:bg-surface-container-high text-xs font-semibold py-1.5 rounded-lg btn-interact btn-quick" data-id="${c.id}" data-amount="100">+100</button>
          </div>
          ${w}
        </div>
      </div>
    `,s.appendChild(h)});const a=document.getElementById("ranking-table-body");a&&(a.innerHTML="",[...L.lettuce].sort((h,d)=>d.totalBets-h.totalBets).forEach((h,d)=>{const m=Math.max(...L.lettuce.map(b=>b.totalBets),1),y=Math.min(100,Math.round(h.totalBets/m*100)),w=document.createElement("tr");w.className="hover:bg-surface-container-low transition-colors group cursor-pointer",w.innerHTML=`
        <td class="py-4 font-body-md text-ink font-semibold pl-2">${d+1}</td>
        <td class="py-4 font-body-md font-bold text-ink">${h.name}</td>
        <td class="py-4 w-1/2">
          <div class="w-full bg-secondary-container h-1.5 rounded-full overflow-hidden">
            <div class="bg-action-blue h-full rounded-full transition-all duration-1000 ease-out" style="width: ${y}%;"></div>
          </div>
        </td>
        <td class="py-4 font-body-md font-semibold text-ink text-right pr-2">💰 ${h.totalBets.toLocaleString()} TKN</td>
      `,a.appendChild(w)})),document.querySelectorAll(".btn-bet").forEach(c=>{c.replaceWith(c.cloneNode(!0))}),document.querySelectorAll(".btn-bet").forEach(c=>{c.addEventListener("click",h=>{const d=h.target.getAttribute("data-id"),m=document.getElementById(`bet-input-${d}`),y=parseInt(m.value);Pa(d,y)})}),document.querySelectorAll(".btn-quick").forEach(c=>{c.replaceWith(c.cloneNode(!0))}),document.querySelectorAll(".btn-quick").forEach(c=>{c.addEventListener("click",h=>{const d=h.target.getAttribute("data-id"),m=parseInt(h.target.getAttribute("data-amount"));Pa(d,m)})}),document.querySelectorAll(".btn-cancel-bet").forEach(c=>{c.replaceWith(c.cloneNode(!0))}),document.querySelectorAll(".btn-cancel-bet").forEach(c=>{c.addEventListener("click",h=>{const d=h.target.getAttribute("data-id");Va(d)})}),document.querySelectorAll(".btn-cancel-card-bet").forEach(c=>{c.replaceWith(c.cloneNode(!0))}),document.querySelectorAll(".btn-cancel-card-bet").forEach(c=>{c.addEventListener("click",h=>{const d=h.target.getAttribute("data-id");Va(d)})}),Um()}function Um(){const n=document.getElementById("ranking-list-container");n.innerHTML="",[...L.students].sort((e,r)=>r.tokens-e.tokens).forEach((e,r)=>{const s=L.currentUser&&L.currentUser.id===e.id,o=document.createElement("div");o.className=`flex justify-between items-center p-3 rounded-xl transition-all duration-300 ${s?"bg-action-blue/10 border border-action-blue/20":"hover:bg-surface-container-low border border-transparent"}`;let a="";r===0?a="🥇":r===1?a="🥈":r===2?a="🥉":a=`<span class="w-5 text-center text-xs font-semibold text-secondary">${r+1}</span>`,o.innerHTML=`
      <div class="flex items-center gap-3">
        <span class="flex items-center justify-center w-5">${a}</span>
        <span class="font-body-md font-semibold text-ink ${s?"text-action-blue":""}">${e.id} 학생</span>
      </div>
      <span class="font-body-md font-bold text-ink">💰 ${e.tokens.toLocaleString()} TKN</span>
    `,n.appendChild(o)})}function qm(){if(L.currentUser!=="admin")return;["rank-1","rank-2","rank-3","rank-4","rank-5"].forEach(t=>{const e=document.getElementById(t);if(!e)return;const r=e.value;e.innerHTML='<option value="" disabled selected>상추 선택</option>',L.lettuce.forEach(s=>{e.innerHTML+=`<option value="${s.id}">${s.name}</option>`}),r&&(e.value=r)}),_c(),$m(),jm()}function $m(){const n=document.getElementById("admin-lettuce-stats-container");if(!n)return;n.innerHTML="";const t=L.lettuce.reduce((e,r)=>e+r.totalBets,0);L.lettuce.forEach(e=>{const r=t>0?(e.totalBets/t*100).toFixed(1):"0.0",s=document.createElement("div");s.className="bg-surface-container-low p-4 rounded-xl space-y-2",s.innerHTML=`
      <div class="flex justify-between items-center">
        <span class="font-body-md font-bold text-ink">${e.name}</span>
        <div class="flex items-center gap-3 text-sm">
          <span class="font-semibold text-ink">💰 ${e.totalBets.toLocaleString()} TKN</span>
          <span class="bg-action-blue/10 text-action-blue px-2 py-0.5 rounded text-xs font-bold">${r}%</span>
        </div>
      </div>
      <div class="w-full bg-secondary-container h-1.5 rounded-full overflow-hidden">
        <div class="bg-action-blue h-full rounded-full transition-all duration-1000 ease-out" style="width: ${r}%;"></div>
      </div>
    `,n.appendChild(s)})}function _c(){const n=document.getElementById("admin-student-table-body"),t=document.getElementById("student-search-input"),e=t?t.value.trim():"";n.innerHTML="",L.students.filter(r=>r.id.includes(e)).forEach(r=>{const s=Object.values(r.bets).reduce((a,c)=>a+c,0),o=document.createElement("tr");o.className="hover:bg-surface-container-low transition-colors",o.innerHTML=`
        <td class="px-4 py-3 font-body-md font-bold text-ink">${r.id}</td>
        <td class="px-4 py-3 font-body-md text-action-blue font-bold">💰 ${r.tokens.toLocaleString()}</td>
        <td class="px-4 py-3 font-body-md text-ink font-semibold">💰 ${s.toLocaleString()}</td>
      `,n.appendChild(o)})}function jm(){const n=document.getElementById("history-list-container");if(n.innerHTML="",L.history.length===0){n.innerHTML='<p class="text-sm text-secondary text-center py-6">아직 완료된 정산 내역이 없습니다.</p>';return}[...L.history].reverse().forEach(t=>{const e=document.createElement("div");e.className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/60 space-y-3";const r=t.ranks.map((s,o)=>{const a=["🥇","🥈","🥉","4위","5위"];return`<span class="px-2.5 py-1 rounded-full text-xs font-bold ${["bg-amber-500/10 text-amber-600","bg-slate-400/10 text-slate-500","bg-amber-700/10 text-amber-800","bg-secondary/10 text-secondary","bg-secondary/10 text-secondary"][o]}">${a[o]} 상추 ${s}호</span>`}).join(" ");e.innerHTML=`
      <div class="flex justify-between items-center border-b border-outline-variant/50 pb-2 flex-wrap gap-2">
        <span class="font-body-sm font-bold text-ink">📅 ${t.date} (${t.round}회차)</span>
        <span class="text-action-blue font-bold text-sm">총 배분: 💰 ${t.totalDistributed.toLocaleString()} TKN</span>
      </div>
      <div class="flex flex-wrap gap-2 py-1">
        ${r}
      </div>
      <div class="flex justify-between text-xs text-secondary pt-1">
        <span>참여 학생: <b class="text-ink">${t.participatedStudents}</b>명</span>
        <span>정산 전 총베팅액: <b class="text-ink">💰 ${t.totalBets.toLocaleString()} TKN</b></span>
      </div>
    `,n.appendChild(e)})}async function Pa(n,t){if(!L.currentUser||L.currentUser==="admin")return;if(isNaN(t)||t<=0||!Number.isInteger(t)){Z("올바른 베팅 금액을 입력하세요.","error");return}if(t<Ra){Z(`최소 베팅 단위는 ${Ra} 토큰입니다.`,"error");return}const e=Vt(nt,"students",L.currentUser.id),r=Vt(nt,"lettuce",n);try{await Ri(nt,async s=>{const o=await s.get(e),a=await s.get(r);if(!o.exists()||!a.exists())throw new Error("데이터가 존재하지 않습니다.");const c=o.data(),h=a.data();if(t>c.tokens)throw new Error("보유하고 있는 토큰 잔액을 초과하여 베팅할 수 없습니다.");const d=c.tokens-t,m=c.bets||{},y={...m,[n]:(m[n]||0)+t},w=(h.totalBets||0)+t;s.update(e,{tokens:d,bets:y}),s.update(r,{totalBets:w})}),Z(`상추 ${n}호에 💰 ${t.toLocaleString()} 토큰을 성공적으로 베팅했습니다!`,"success")}catch(s){Z(s.message||"베팅 중 오류가 발생했습니다.","error")}}async function Va(n){if(!L.currentUser||L.currentUser==="admin")return;const t=Vt(nt,"students",L.currentUser.id),e=Vt(nt,"lettuce",n);try{await Ri(nt,async r=>{const s=await r.get(t),o=await r.get(e);if(!s.exists()||!o.exists())throw new Error("데이터가 존재하지 않습니다.");const a=s.data(),c=o.data(),h=a.bets[n]||0;if(h<=0)throw new Error("해당 상추에 건 베팅이 없습니다.");const d=a.tokens+h,m={...a.bets,[n]:0},y=Math.max(0,(c.totalBets||0)-h);r.update(t,{tokens:d,bets:m}),r.update(e,{totalBets:y})}),Z(`상추 ${n}호의 베팅이 성공적으로 취소 및 환불되었습니다.`,"success")}catch(r){Z(r.message||"베팅 취소 중 오류가 발생했습니다.","error")}}async function zm(n){if(new Set(n).size!==5){Z("1위부터 5위 상추를 중복 없이 모두 지정해야 합니다.","error");return}Z("정산을 진행 중입니다...","warning");try{const e=new Date,r=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")} ${String(e.getHours()).padStart(2,"0")}:${String(e.getMinutes()).padStart(2,"0")}`,s=L.history.length+1;let o=L.lettuce.reduce((h,d)=>h+d.totalBets,0),a=0,c=0;await Ri(nt,async h=>{const d=L.students.map(b=>Vt(nt,"students",b.id)),m=L.lettuce.map(b=>Vt(nt,"lettuce",b.id));(await Promise.all(d.map(b=>h.get(b)))).forEach((b,V)=>{const N=b.data();let D=0,$=!1;Object.entries(N.bets||{}).forEach(([q,Y])=>{Y>0&&($=!0,q===n[0]?D+=Y*we.rank1:q===n[1]?D+=Y*we.rank2:q===n[2]?D+=Y*we.rank3:q===n[3]?D+=Y*we.rank4:q===n[4]?D+=Y*we.rank5:D+=Y*we.others)});const W={1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0};if($){c++;const q=Math.floor(D);a+=q,h.update(d[V],{tokens:N.tokens+q,bets:W})}else h.update(d[V],{bets:W})}),m.forEach(b=>{h.update(b,{totalBets:0})});const w=Vt(De(nt,"history"));h.set(w,{round:s,date:r,ranks:n,totalBets:o,totalDistributed:a,participatedStudents:c})}),Z(`정산이 완료되었습니다! 총 💰 ${a.toLocaleString()} 토큰이 배분되었습니다.`,"success")}catch(e){Z("정산 처리 중 오류가 발생했습니다: "+e.message,"error")}}async function Hm(n,t,e){if(!L.currentUser||L.currentUser==="admin")return;const r=L.students.find(a=>a.id===L.currentUser.id),s=document.getElementById("pwd-change-error"),o=document.getElementById("pwd-change-success");if(s.classList.add("hidden"),o.classList.add("hidden"),r.password!==n){s.innerText="현재 비밀번호가 일치하지 않습니다.",s.classList.remove("hidden");return}if(t!==e){s.innerText="새 비밀번호와 확인 비밀번호가 다릅니다.",s.classList.remove("hidden");return}if(t.trim().length===0){s.innerText="비밀번호는 빈칸일 수 없습니다.",s.classList.remove("hidden");return}try{const a=Vt(nt,"students",L.currentUser.id);await Pm(a,{password:t},{merge:!0}),o.classList.remove("hidden"),document.getElementById("pwd-change-form").reset(),Z("비밀번호가 성공적으로 변경되었습니다.","success"),setTimeout(()=>{document.getElementById("pwd-change-modal").classList.add("hidden"),o.classList.add("hidden")},1500)}catch(a){s.innerText="비밀번호 변경 실패: "+a.message,s.classList.remove("hidden")}}async function Km(){if(confirm("정말로 모든 학생의 자산 및 정산 내역을 초기화하시겠습니까? (이 작업은 되돌릴 수 없습니다)")){Z("데이터 초기화 중...","warning");try{const n=await lc(De(nt,"history")),t=dc(nt);n.forEach(s=>{t.delete(s.ref)}),fc().forEach(s=>{const o=Vt(nt,"students",s.id);t.set(o,s)}),mc().forEach(s=>{const o=Vt(nt,"lettuce",s.id);t.set(o,s)}),await t.commit(),L.currentUser=null,Pe(),ce(),Z("모든 데이터가 성공적으로 초기화되었습니다!","success")}catch(n){Z("초기화 중 오류가 발생했습니다: "+n.message,"error")}}}document.addEventListener("DOMContentLoaded",()=>{Fm(),ce(),document.getElementById("login-form").addEventListener("submit",async m=>{m.preventDefault();const y=document.getElementById("login-id").value.trim(),w=document.getElementById("login-pw").value,b=document.getElementById("login-error");if(b.classList.add("hidden"),y===ba.id){await Nm(w)===ba.passwordHash?(L.currentUser="admin",Pe(),ce(),Z("관리자 계정으로 로그인했습니다.","success")):(b.innerText="관리자 비밀번호가 일치하지 않습니다.",b.classList.remove("hidden"));return}if(!bi){b.innerText="클라우드 데이터를 불러오는 중입니다. 잠시 후 다시 시도해 주세요.",b.classList.remove("hidden");return}const V=L.students.find(N=>N.id===y);V?V.password===w?(L.currentUser=V,Pe(),ce(),Z(`${V.id} 학생으로 로그인했습니다.`,"success")):(b.innerText="비밀번호가 일치하지 않습니다.",b.classList.remove("hidden")):(b.innerText="존재하지 않는 학번입니다. (30901~30936 사이)",b.classList.remove("hidden"))}),document.getElementById("btn-student-logout").addEventListener("click",()=>{L.currentUser=null,Pe(),ce(),Z("로그아웃되었습니다.","success")}),document.getElementById("btn-admin-logout").addEventListener("click",()=>{L.currentUser=null,Pe(),ce(),Z("로그아웃되었습니다.","success")}),document.getElementById("btn-change-pw-open").addEventListener("click",()=>{document.getElementById("pwd-change-error").classList.add("hidden"),document.getElementById("pwd-change-success").classList.add("hidden"),document.getElementById("pwd-change-form").reset(),document.getElementById("pwd-change-modal").classList.remove("hidden")}),document.getElementById("btn-change-pw-close").addEventListener("click",()=>{document.getElementById("pwd-change-modal").classList.add("hidden")}),document.getElementById("pwd-change-form").addEventListener("submit",m=>{m.preventDefault();const y=document.getElementById("change-pw-current").value,w=document.getElementById("change-pw-new").value,b=document.getElementById("change-pw-confirm").value;Hm(y,w,b)});const a=document.getElementById("pwd-change-modal");a.addEventListener("click",m=>{m.target===a&&a.classList.add("hidden")}),document.getElementById("student-search-input").addEventListener("input",()=>{_c()}),document.getElementById("btn-reset-all-data").addEventListener("click",()=>{Km()}),document.getElementById("settlement-form").addEventListener("submit",m=>{m.preventDefault();const y=document.getElementById("rank-1").value,w=document.getElementById("rank-2").value,b=document.getElementById("rank-3").value,V=document.getElementById("rank-4").value,N=document.getElementById("rank-5").value;zm([y,w,b,V,N])})});
