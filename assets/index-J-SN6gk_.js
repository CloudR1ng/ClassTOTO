(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();var bo={};/**
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
 */const Va=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Jc=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],c=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Ca={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,c=a?n[s+1]:0,h=s+2<n.length,f=h?n[s+2]:0,m=o>>2,E=(o&3)<<4|c>>4;let A=(c&15)<<2|f>>6,S=f&63;h||(S=64,a||(A=64)),r.push(e[m],e[E],e[A],e[S])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Va(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Jc(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const f=s<n.length?e[n.charAt(s)]:64;++s;const E=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||c==null||f==null||E==null)throw new Zc;const A=o<<2|c>>4;if(r.push(A),f!==64){const S=c<<4&240|f>>2;if(r.push(S),E!==64){const V=f<<6&192|E;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Zc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tl=function(n){const t=Va(n);return Ca.encodeByteArray(t,!0)},cr=function(n){return tl(n).replace(/\./g,"")},el=function(n){try{return Ca.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function nl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const rl=()=>nl().__FIREBASE_DEFAULTS__,sl=()=>{if(typeof process>"u"||typeof bo>"u")return;const n=bo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},il=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&el(n[1]);return t&&JSON.parse(t)},Fs=()=>{try{return rl()||sl()||il()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ol=n=>{var t,e;return(e=(t=Fs())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},al=n=>{const t=ol(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Da=()=>{var n;return(n=Fs())===null||n===void 0?void 0:n.config};/**
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
 */class ul{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function cl(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[cr(JSON.stringify(e)),cr(JSON.stringify(a)),""].join(".")}/**
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
 */function ll(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hl(){var n;const t=(n=Fs())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function dl(){return!hl()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function fl(){try{return typeof indexedDB=="object"}catch{return!1}}function ml(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
 */const pl="FirebaseError";class Oe extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=pl,Object.setPrototypeOf(this,Oe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ka.prototype.create)}}class ka{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?gl(o,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Oe(s,c,r)}}function gl(n,t){return n.replace(_l,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const _l=/\{\$([^}]+)}/g;function ps(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(Vo(o)&&Vo(a)){if(!ps(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Vo(n){return n!==null&&typeof n=="object"}/**
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
 */class yl{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new ul;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(vl(t))try{this.getOrInitializeService({instanceIdentifier:ue})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=ue){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ue){return this.instances.has(t)}getOptions(t=ue){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:El(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ue){return this.component?this.component.multipleInstances?t:ue:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function El(n){return n===ue?void 0:n}function vl(n){return n.instantiationMode==="EAGER"}/**
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
 */class Tl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new yl(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(z||(z={}));const Il={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},wl=z.INFO,Al={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},Rl=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=Al[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Na{constructor(t){this.name=t,this._logLevel=wl,this._logHandler=Rl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in z))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Il[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...t),this._logHandler(this,z.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...t),this._logHandler(this,z.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,z.INFO,...t),this._logHandler(this,z.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,z.WARN,...t),this._logHandler(this,z.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...t),this._logHandler(this,z.ERROR,...t)}}const Sl=(n,t)=>t.some(e=>n instanceof e);let Co,Do;function Pl(){return Co||(Co=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bl(){return Do||(Do=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const La=new WeakMap,gs=new WeakMap,Ma=new WeakMap,os=new WeakMap,Bs=new WeakMap;function Vl(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(Yt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&La.set(e,n)}).catch(()=>{}),Bs.set(t,n),t}function Cl(n){if(gs.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});gs.set(n,t)}let _s={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return gs.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Ma.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Yt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Dl(n){_s=n(_s)}function kl(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(as(this),t,...e);return Ma.set(r,t.sort?t.sort():[t]),Yt(r)}:bl().includes(n)?function(...t){return n.apply(as(this),t),Yt(La.get(this))}:function(...t){return Yt(n.apply(as(this),t))}}function Nl(n){return typeof n=="function"?kl(n):(n instanceof IDBTransaction&&Cl(n),Sl(n,Pl())?new Proxy(n,_s):n)}function Yt(n){if(n instanceof IDBRequest)return Vl(n);if(os.has(n))return os.get(n);const t=Nl(n);return t!==n&&(os.set(n,t),Bs.set(t,n)),t}const as=n=>Bs.get(n);function Ll(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),c=Yt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Yt(a.result),h.oldVersion,h.newVersion,Yt(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const Ml=["get","getKey","getAll","getAllKeys","count"],xl=["put","add","delete","clear"],us=new Map;function ko(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(us.get(t))return us.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=xl.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ml.includes(e)))return;const o=async function(a,...c){const h=this.transaction(a,s?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[e](...c),s&&h.done]))[0]};return us.set(t,o),o}Dl(n=>({...n,get:(t,e,r)=>ko(t,e)||n.get(t,e,r),has:(t,e)=>!!ko(t,e)||n.has(t,e)}));/**
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
 */class Ol{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Fl(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Fl(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ys="@firebase/app",No="0.10.13";/**
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
 */const qt=new Na("@firebase/app"),Bl="@firebase/app-compat",Ul="@firebase/analytics-compat",ql="@firebase/analytics",$l="@firebase/app-check-compat",jl="@firebase/app-check",zl="@firebase/auth",Gl="@firebase/auth-compat",Kl="@firebase/database",Hl="@firebase/data-connect",Wl="@firebase/database-compat",Ql="@firebase/functions",Yl="@firebase/functions-compat",Xl="@firebase/installations",Jl="@firebase/installations-compat",Zl="@firebase/messaging",th="@firebase/messaging-compat",eh="@firebase/performance",nh="@firebase/performance-compat",rh="@firebase/remote-config",sh="@firebase/remote-config-compat",ih="@firebase/storage",oh="@firebase/storage-compat",ah="@firebase/firestore",uh="@firebase/vertexai-preview",ch="@firebase/firestore-compat",lh="firebase",hh="10.14.1";/**
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
 */const Es="[DEFAULT]",dh={[ys]:"fire-core",[Bl]:"fire-core-compat",[ql]:"fire-analytics",[Ul]:"fire-analytics-compat",[jl]:"fire-app-check",[$l]:"fire-app-check-compat",[zl]:"fire-auth",[Gl]:"fire-auth-compat",[Kl]:"fire-rtdb",[Hl]:"fire-data-connect",[Wl]:"fire-rtdb-compat",[Ql]:"fire-fn",[Yl]:"fire-fn-compat",[Xl]:"fire-iid",[Jl]:"fire-iid-compat",[Zl]:"fire-fcm",[th]:"fire-fcm-compat",[eh]:"fire-perf",[nh]:"fire-perf-compat",[rh]:"fire-rc",[sh]:"fire-rc-compat",[ih]:"fire-gcs",[oh]:"fire-gcs-compat",[ah]:"fire-fst",[ch]:"fire-fst-compat",[uh]:"fire-vertex","fire-js":"fire-js",[lh]:"fire-js-all"};/**
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
 */const lr=new Map,fh=new Map,vs=new Map;function Lo(n,t){try{n.container.addComponent(t)}catch(e){qt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function hr(n){const t=n.name;if(vs.has(t))return qt.debug(`There were multiple attempts to register component ${t}.`),!1;vs.set(t,n);for(const e of lr.values())Lo(e,n);for(const e of fh.values())Lo(e,n);return!0}function mh(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const ph={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xt=new ka("app","Firebase",ph);/**
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
 */class gh{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Xt.create("app-deleted",{appName:this._name})}}/**
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
 */const _h=hh;function xa(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Es,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Xt.create("bad-app-name",{appName:String(s)});if(e||(e=Da()),!e)throw Xt.create("no-options");const o=lr.get(s);if(o){if(ps(e,o.options)&&ps(r,o.config))return o;throw Xt.create("duplicate-app",{appName:s})}const a=new Tl(s);for(const h of vs.values())a.addComponent(h);const c=new gh(e,r,a);return lr.set(s,c),c}function yh(n=Es){const t=lr.get(n);if(!t&&n===Es&&Da())return xa();if(!t)throw Xt.create("no-app",{appName:n});return t}function be(n,t,e){var r;let s=(r=dh[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const c=[`Unable to register library "${s}" with version "${t}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),qt.warn(c.join(" "));return}hr(new gn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Eh="firebase-heartbeat-database",vh=1,_n="firebase-heartbeat-store";let cs=null;function Oa(){return cs||(cs=Ll(Eh,vh,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(_n)}catch(e){console.warn(e)}}}}).catch(n=>{throw Xt.create("idb-open",{originalErrorMessage:n.message})})),cs}async function Th(n){try{const e=(await Oa()).transaction(_n),r=await e.objectStore(_n).get(Fa(n));return await e.done,r}catch(t){if(t instanceof Oe)qt.warn(t.message);else{const e=Xt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});qt.warn(e.message)}}}async function Mo(n,t){try{const r=(await Oa()).transaction(_n,"readwrite");await r.objectStore(_n).put(t,Fa(n)),await r.done}catch(e){if(e instanceof Oe)qt.warn(e.message);else{const r=Xt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});qt.warn(r.message)}}}function Fa(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Ih=1024,wh=30*24*60*60*1e3;class Ah{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Sh(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=xo();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=wh}),this._storage.overwrite(this._heartbeatsCache))}catch(r){qt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=xo(),{heartbeatsToSend:r,unsentEntries:s}=Rh(this._heartbeatsCache.heartbeats),o=cr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return qt.warn(e),""}}}function xo(){return new Date().toISOString().substring(0,10)}function Rh(n,t=Ih){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Oo(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Oo(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Sh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fl()?ml().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Th(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Mo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Mo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Oo(n){return cr(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Ph(n){hr(new gn("platform-logger",t=>new Ol(t),"PRIVATE")),hr(new gn("heartbeat",t=>new Ah(t),"PRIVATE")),be(ys,No,n),be(ys,No,"esm2017"),be("fire-js","")}Ph("");var bh="firebase",Vh="10.14.1";/**
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
 */be(bh,Vh,"app");var Fo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var he,Ba;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,p){function _(){}_.prototype=p.prototype,T.D=p.prototype,T.prototype=new _,T.prototype.constructor=T,T.C=function(y,v,w){for(var g=Array(arguments.length-2),Ot=2;Ot<arguments.length;Ot++)g[Ot-2]=arguments[Ot];return p.prototype[v].apply(y,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,p,_){_||(_=0);var y=Array(16);if(typeof p=="string")for(var v=0;16>v;++v)y[v]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(v=0;16>v;++v)y[v]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=T.g[0],_=T.g[1],v=T.g[2];var w=T.g[3],g=p+(w^_&(v^w))+y[0]+3614090360&4294967295;p=_+(g<<7&4294967295|g>>>25),g=w+(v^p&(_^v))+y[1]+3905402710&4294967295,w=p+(g<<12&4294967295|g>>>20),g=v+(_^w&(p^_))+y[2]+606105819&4294967295,v=w+(g<<17&4294967295|g>>>15),g=_+(p^v&(w^p))+y[3]+3250441966&4294967295,_=v+(g<<22&4294967295|g>>>10),g=p+(w^_&(v^w))+y[4]+4118548399&4294967295,p=_+(g<<7&4294967295|g>>>25),g=w+(v^p&(_^v))+y[5]+1200080426&4294967295,w=p+(g<<12&4294967295|g>>>20),g=v+(_^w&(p^_))+y[6]+2821735955&4294967295,v=w+(g<<17&4294967295|g>>>15),g=_+(p^v&(w^p))+y[7]+4249261313&4294967295,_=v+(g<<22&4294967295|g>>>10),g=p+(w^_&(v^w))+y[8]+1770035416&4294967295,p=_+(g<<7&4294967295|g>>>25),g=w+(v^p&(_^v))+y[9]+2336552879&4294967295,w=p+(g<<12&4294967295|g>>>20),g=v+(_^w&(p^_))+y[10]+4294925233&4294967295,v=w+(g<<17&4294967295|g>>>15),g=_+(p^v&(w^p))+y[11]+2304563134&4294967295,_=v+(g<<22&4294967295|g>>>10),g=p+(w^_&(v^w))+y[12]+1804603682&4294967295,p=_+(g<<7&4294967295|g>>>25),g=w+(v^p&(_^v))+y[13]+4254626195&4294967295,w=p+(g<<12&4294967295|g>>>20),g=v+(_^w&(p^_))+y[14]+2792965006&4294967295,v=w+(g<<17&4294967295|g>>>15),g=_+(p^v&(w^p))+y[15]+1236535329&4294967295,_=v+(g<<22&4294967295|g>>>10),g=p+(v^w&(_^v))+y[1]+4129170786&4294967295,p=_+(g<<5&4294967295|g>>>27),g=w+(_^v&(p^_))+y[6]+3225465664&4294967295,w=p+(g<<9&4294967295|g>>>23),g=v+(p^_&(w^p))+y[11]+643717713&4294967295,v=w+(g<<14&4294967295|g>>>18),g=_+(w^p&(v^w))+y[0]+3921069994&4294967295,_=v+(g<<20&4294967295|g>>>12),g=p+(v^w&(_^v))+y[5]+3593408605&4294967295,p=_+(g<<5&4294967295|g>>>27),g=w+(_^v&(p^_))+y[10]+38016083&4294967295,w=p+(g<<9&4294967295|g>>>23),g=v+(p^_&(w^p))+y[15]+3634488961&4294967295,v=w+(g<<14&4294967295|g>>>18),g=_+(w^p&(v^w))+y[4]+3889429448&4294967295,_=v+(g<<20&4294967295|g>>>12),g=p+(v^w&(_^v))+y[9]+568446438&4294967295,p=_+(g<<5&4294967295|g>>>27),g=w+(_^v&(p^_))+y[14]+3275163606&4294967295,w=p+(g<<9&4294967295|g>>>23),g=v+(p^_&(w^p))+y[3]+4107603335&4294967295,v=w+(g<<14&4294967295|g>>>18),g=_+(w^p&(v^w))+y[8]+1163531501&4294967295,_=v+(g<<20&4294967295|g>>>12),g=p+(v^w&(_^v))+y[13]+2850285829&4294967295,p=_+(g<<5&4294967295|g>>>27),g=w+(_^v&(p^_))+y[2]+4243563512&4294967295,w=p+(g<<9&4294967295|g>>>23),g=v+(p^_&(w^p))+y[7]+1735328473&4294967295,v=w+(g<<14&4294967295|g>>>18),g=_+(w^p&(v^w))+y[12]+2368359562&4294967295,_=v+(g<<20&4294967295|g>>>12),g=p+(_^v^w)+y[5]+4294588738&4294967295,p=_+(g<<4&4294967295|g>>>28),g=w+(p^_^v)+y[8]+2272392833&4294967295,w=p+(g<<11&4294967295|g>>>21),g=v+(w^p^_)+y[11]+1839030562&4294967295,v=w+(g<<16&4294967295|g>>>16),g=_+(v^w^p)+y[14]+4259657740&4294967295,_=v+(g<<23&4294967295|g>>>9),g=p+(_^v^w)+y[1]+2763975236&4294967295,p=_+(g<<4&4294967295|g>>>28),g=w+(p^_^v)+y[4]+1272893353&4294967295,w=p+(g<<11&4294967295|g>>>21),g=v+(w^p^_)+y[7]+4139469664&4294967295,v=w+(g<<16&4294967295|g>>>16),g=_+(v^w^p)+y[10]+3200236656&4294967295,_=v+(g<<23&4294967295|g>>>9),g=p+(_^v^w)+y[13]+681279174&4294967295,p=_+(g<<4&4294967295|g>>>28),g=w+(p^_^v)+y[0]+3936430074&4294967295,w=p+(g<<11&4294967295|g>>>21),g=v+(w^p^_)+y[3]+3572445317&4294967295,v=w+(g<<16&4294967295|g>>>16),g=_+(v^w^p)+y[6]+76029189&4294967295,_=v+(g<<23&4294967295|g>>>9),g=p+(_^v^w)+y[9]+3654602809&4294967295,p=_+(g<<4&4294967295|g>>>28),g=w+(p^_^v)+y[12]+3873151461&4294967295,w=p+(g<<11&4294967295|g>>>21),g=v+(w^p^_)+y[15]+530742520&4294967295,v=w+(g<<16&4294967295|g>>>16),g=_+(v^w^p)+y[2]+3299628645&4294967295,_=v+(g<<23&4294967295|g>>>9),g=p+(v^(_|~w))+y[0]+4096336452&4294967295,p=_+(g<<6&4294967295|g>>>26),g=w+(_^(p|~v))+y[7]+1126891415&4294967295,w=p+(g<<10&4294967295|g>>>22),g=v+(p^(w|~_))+y[14]+2878612391&4294967295,v=w+(g<<15&4294967295|g>>>17),g=_+(w^(v|~p))+y[5]+4237533241&4294967295,_=v+(g<<21&4294967295|g>>>11),g=p+(v^(_|~w))+y[12]+1700485571&4294967295,p=_+(g<<6&4294967295|g>>>26),g=w+(_^(p|~v))+y[3]+2399980690&4294967295,w=p+(g<<10&4294967295|g>>>22),g=v+(p^(w|~_))+y[10]+4293915773&4294967295,v=w+(g<<15&4294967295|g>>>17),g=_+(w^(v|~p))+y[1]+2240044497&4294967295,_=v+(g<<21&4294967295|g>>>11),g=p+(v^(_|~w))+y[8]+1873313359&4294967295,p=_+(g<<6&4294967295|g>>>26),g=w+(_^(p|~v))+y[15]+4264355552&4294967295,w=p+(g<<10&4294967295|g>>>22),g=v+(p^(w|~_))+y[6]+2734768916&4294967295,v=w+(g<<15&4294967295|g>>>17),g=_+(w^(v|~p))+y[13]+1309151649&4294967295,_=v+(g<<21&4294967295|g>>>11),g=p+(v^(_|~w))+y[4]+4149444226&4294967295,p=_+(g<<6&4294967295|g>>>26),g=w+(_^(p|~v))+y[11]+3174756917&4294967295,w=p+(g<<10&4294967295|g>>>22),g=v+(p^(w|~_))+y[2]+718787259&4294967295,v=w+(g<<15&4294967295|g>>>17),g=_+(w^(v|~p))+y[9]+3951481745&4294967295,T.g[0]=T.g[0]+p&4294967295,T.g[1]=T.g[1]+(v+(g<<21&4294967295|g>>>11))&4294967295,T.g[2]=T.g[2]+v&4294967295,T.g[3]=T.g[3]+w&4294967295}r.prototype.u=function(T,p){p===void 0&&(p=T.length);for(var _=p-this.blockSize,y=this.B,v=this.h,w=0;w<p;){if(v==0)for(;w<=_;)s(this,T,w),w+=this.blockSize;if(typeof T=="string"){for(;w<p;)if(y[v++]=T.charCodeAt(w++),v==this.blockSize){s(this,y),v=0;break}}else for(;w<p;)if(y[v++]=T[w++],v==this.blockSize){s(this,y),v=0;break}}this.h=v,this.o+=p},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var p=1;p<T.length-8;++p)T[p]=0;var _=8*this.o;for(p=T.length-8;p<T.length;++p)T[p]=_&255,_/=256;for(this.u(T),T=Array(16),p=_=0;4>p;++p)for(var y=0;32>y;y+=8)T[_++]=this.g[p]>>>y&255;return T};function o(T,p){var _=c;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=p(T)}function a(T,p){this.h=p;for(var _=[],y=!0,v=T.length-1;0<=v;v--){var w=T[v]|0;y&&w==p||(_[v]=w,y=!1)}this.g=_}var c={};function h(T){return-128<=T&&128>T?o(T,function(p){return new a([p|0],0>p?-1:0)}):new a([T|0],0>T?-1:0)}function f(T){if(isNaN(T)||!isFinite(T))return E;if(0>T)return D(f(-T));for(var p=[],_=1,y=0;T>=_;y++)p[y]=T/_|0,_*=4294967296;return new a(p,0)}function m(T,p){if(T.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(T.charAt(0)=="-")return D(m(T.substring(1),p));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=f(Math.pow(p,8)),y=E,v=0;v<T.length;v+=8){var w=Math.min(8,T.length-v),g=parseInt(T.substring(v,v+w),p);8>w?(w=f(Math.pow(p,w)),y=y.j(w).add(f(g))):(y=y.j(_),y=y.add(f(g)))}return y}var E=h(0),A=h(1),S=h(16777216);n=a.prototype,n.m=function(){if(N(this))return-D(this).m();for(var T=0,p=1,_=0;_<this.g.length;_++){var y=this.i(_);T+=(0<=y?y:4294967296+y)*p,p*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(V(this))return"0";if(N(this))return"-"+D(this).toString(T);for(var p=f(Math.pow(T,6)),_=this,y="";;){var v=X(_,p).g;_=$(_,v.j(p));var w=((0<_.g.length?_.g[0]:_.h)>>>0).toString(T);if(_=v,V(_))return w+y;for(;6>w.length;)w="0"+w;y=w+y}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function V(T){if(T.h!=0)return!1;for(var p=0;p<T.g.length;p++)if(T.g[p]!=0)return!1;return!0}function N(T){return T.h==-1}n.l=function(T){return T=$(this,T),N(T)?-1:V(T)?0:1};function D(T){for(var p=T.g.length,_=[],y=0;y<p;y++)_[y]=~T.g[y];return new a(_,~T.h).add(A)}n.abs=function(){return N(this)?D(this):this},n.add=function(T){for(var p=Math.max(this.g.length,T.g.length),_=[],y=0,v=0;v<=p;v++){var w=y+(this.i(v)&65535)+(T.i(v)&65535),g=(w>>>16)+(this.i(v)>>>16)+(T.i(v)>>>16);y=g>>>16,w&=65535,g&=65535,_[v]=g<<16|w}return new a(_,_[_.length-1]&-2147483648?-1:0)};function $(T,p){return T.add(D(p))}n.j=function(T){if(V(this)||V(T))return E;if(N(this))return N(T)?D(this).j(D(T)):D(D(this).j(T));if(N(T))return D(this.j(D(T)));if(0>this.l(S)&&0>T.l(S))return f(this.m()*T.m());for(var p=this.g.length+T.g.length,_=[],y=0;y<2*p;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var v=0;v<T.g.length;v++){var w=this.i(y)>>>16,g=this.i(y)&65535,Ot=T.i(v)>>>16,$e=T.i(v)&65535;_[2*y+2*v]+=g*$e,W(_,2*y+2*v),_[2*y+2*v+1]+=w*$e,W(_,2*y+2*v+1),_[2*y+2*v+1]+=g*Ot,W(_,2*y+2*v+1),_[2*y+2*v+2]+=w*Ot,W(_,2*y+2*v+2)}for(y=0;y<p;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=p;y<2*p;y++)_[y]=0;return new a(_,0)};function W(T,p){for(;(T[p]&65535)!=T[p];)T[p+1]+=T[p]>>>16,T[p]&=65535,p++}function q(T,p){this.g=T,this.h=p}function X(T,p){if(V(p))throw Error("division by zero");if(V(T))return new q(E,E);if(N(T))return p=X(D(T),p),new q(D(p.g),D(p.h));if(N(p))return p=X(T,D(p)),new q(D(p.g),p.h);if(30<T.g.length){if(N(T)||N(p))throw Error("slowDivide_ only works with positive integers.");for(var _=A,y=p;0>=y.l(T);)_=xt(_),y=xt(y);var v=ct(_,1),w=ct(y,1);for(y=ct(y,2),_=ct(_,2);!V(y);){var g=w.add(y);0>=g.l(T)&&(v=v.add(_),w=g),y=ct(y,1),_=ct(_,1)}return p=$(T,v.j(p)),new q(v,p)}for(v=E;0<=T.l(p);){for(_=Math.max(1,Math.floor(T.m()/p.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),w=f(_),g=w.j(p);N(g)||0<g.l(T);)_-=y,w=f(_),g=w.j(p);V(w)&&(w=A),v=v.add(w),T=$(T,g)}return new q(v,T)}n.A=function(T){return X(this,T).h},n.and=function(T){for(var p=Math.max(this.g.length,T.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)&T.i(y);return new a(_,this.h&T.h)},n.or=function(T){for(var p=Math.max(this.g.length,T.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)|T.i(y);return new a(_,this.h|T.h)},n.xor=function(T){for(var p=Math.max(this.g.length,T.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)^T.i(y);return new a(_,this.h^T.h)};function xt(T){for(var p=T.g.length+1,_=[],y=0;y<p;y++)_[y]=T.i(y)<<1|T.i(y-1)>>>31;return new a(_,T.h)}function ct(T,p){var _=p>>5;p%=32;for(var y=T.g.length-_,v=[],w=0;w<y;w++)v[w]=0<p?T.i(w+_)>>>p|T.i(w+_+1)<<32-p:T.i(w+_);return new a(v,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ba=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=m,he=a}).apply(typeof Fo<"u"?Fo:typeof self<"u"?self:typeof window<"u"?window:{});var tr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ua,an,qa,sr,Ts,$a,ja,za;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,u,l){return i==Array.prototype||i==Object.prototype||(i[u]=l.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof tr=="object"&&tr];for(var u=0;u<i.length;++u){var l=i[u];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function s(i,u){if(u)t:{var l=r;i=i.split(".");for(var d=0;d<i.length-1;d++){var I=i[d];if(!(I in l))break t;l=l[I]}i=i[i.length-1],d=l[i],u=u(d),u!=d&&u!=null&&t(l,i,{configurable:!0,writable:!0,value:u})}}function o(i,u){i instanceof String&&(i+="");var l=0,d=!1,I={next:function(){if(!d&&l<i.length){var R=l++;return{value:u(R,i[R]),done:!1}}return d=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}s("Array.prototype.values",function(i){return i||function(){return o(this,function(u,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(i){var u=typeof i;return u=u!="object"?u:i?Array.isArray(i)?"array":u:"null",u=="array"||u=="object"&&typeof i.length=="number"}function f(i){var u=typeof i;return u=="object"&&i!=null||u=="function"}function m(i,u,l){return i.call.apply(i.bind,arguments)}function E(i,u,l){if(!i)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,d),i.apply(u,I)}}return function(){return i.apply(u,arguments)}}function A(i,u,l){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:E,A.apply(null,arguments)}function S(i,u){var l=Array.prototype.slice.call(arguments,1);return function(){var d=l.slice();return d.push.apply(d,arguments),i.apply(this,d)}}function V(i,u){function l(){}l.prototype=u.prototype,i.aa=u.prototype,i.prototype=new l,i.prototype.constructor=i,i.Qb=function(d,I,R){for(var C=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)C[Q-2]=arguments[Q];return u.prototype[I].apply(d,C)}}function N(i){const u=i.length;if(0<u){const l=Array(u);for(let d=0;d<u;d++)l[d]=i[d];return l}return[]}function D(i,u){for(let l=1;l<arguments.length;l++){const d=arguments[l];if(h(d)){const I=i.length||0,R=d.length||0;i.length=I+R;for(let C=0;C<R;C++)i[I+C]=d[C]}else i.push(d)}}class ${constructor(u,l){this.i=u,this.j=l,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function W(i){return/^[\s\xa0]*$/.test(i)}function q(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function X(i){return X[" "](i),i}X[" "]=function(){};var xt=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function ct(i,u,l){for(const d in i)u.call(l,i[d],d,i)}function T(i,u){for(const l in i)u.call(void 0,i[l],l,i)}function p(i){const u={};for(const l in i)u[l]=i[l];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(i,u){let l,d;for(let I=1;I<arguments.length;I++){d=arguments[I];for(l in d)i[l]=d[l];for(let R=0;R<_.length;R++)l=_[R],Object.prototype.hasOwnProperty.call(d,l)&&(i[l]=d[l])}}function v(i){var u=1;i=i.split(":");const l=[];for(;0<u&&i.length;)l.push(i.shift()),u--;return i.length&&l.push(i.join(":")),l}function w(i){c.setTimeout(()=>{throw i},0)}function g(){var i=xr;let u=null;return i.g&&(u=i.g,i.g=i.g.next,i.g||(i.h=null),u.next=null),u}class Ot{constructor(){this.h=this.g=null}add(u,l){const d=$e.get();d.set(u,l),this.h?this.h.next=d:this.g=d,this.h=d}}var $e=new $(()=>new _c,i=>i.reset());class _c{constructor(){this.next=this.g=this.h=null}set(u,l){this.h=u,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let je,ze=!1,xr=new Ot,Pi=()=>{const i=c.Promise.resolve(void 0);je=()=>{i.then(yc)}};var yc=()=>{for(var i;i=g();){try{i.h.call(i.g)}catch(l){w(l)}var u=$e;u.j(i),100>u.h&&(u.h++,i.next=u.g,u.g=i)}ze=!1};function zt(){this.s=this.s,this.C=this.C}zt.prototype.s=!1,zt.prototype.ma=function(){this.s||(this.s=!0,this.N())},zt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function gt(i,u){this.type=i,this.g=this.target=u,this.defaultPrevented=!1}gt.prototype.h=function(){this.defaultPrevented=!0};var Ec=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,u=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};c.addEventListener("test",l,u),c.removeEventListener("test",l,u)}catch{}return i}();function Ge(i,u){if(gt.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var l=this.type=i.type,d=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=u,u=i.relatedTarget){if(xt){t:{try{X(u.nodeName);var I=!0;break t}catch{}I=!1}I||(u=null)}}else l=="mouseover"?u=i.fromElement:l=="mouseout"&&(u=i.toElement);this.relatedTarget=u,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:vc[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Ge.aa.h.call(this)}}V(Ge,gt);var vc={2:"touch",3:"pen",4:"mouse"};Ge.prototype.h=function(){Ge.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Mn="closure_listenable_"+(1e6*Math.random()|0),Tc=0;function Ic(i,u,l,d,I){this.listener=i,this.proxy=null,this.src=u,this.type=l,this.capture=!!d,this.ha=I,this.key=++Tc,this.da=this.fa=!1}function xn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function On(i){this.src=i,this.g={},this.h=0}On.prototype.add=function(i,u,l,d,I){var R=i.toString();i=this.g[R],i||(i=this.g[R]=[],this.h++);var C=Fr(i,u,d,I);return-1<C?(u=i[C],l||(u.fa=!1)):(u=new Ic(u,this.src,R,!!d,I),u.fa=l,i.push(u)),u};function Or(i,u){var l=u.type;if(l in i.g){var d=i.g[l],I=Array.prototype.indexOf.call(d,u,void 0),R;(R=0<=I)&&Array.prototype.splice.call(d,I,1),R&&(xn(u),i.g[l].length==0&&(delete i.g[l],i.h--))}}function Fr(i,u,l,d){for(var I=0;I<i.length;++I){var R=i[I];if(!R.da&&R.listener==u&&R.capture==!!l&&R.ha==d)return I}return-1}var Br="closure_lm_"+(1e6*Math.random()|0),Ur={};function bi(i,u,l,d,I){if(Array.isArray(u)){for(var R=0;R<u.length;R++)bi(i,u[R],l,d,I);return null}return l=Di(l),i&&i[Mn]?i.K(u,l,f(d)?!!d.capture:!1,I):wc(i,u,l,!1,d,I)}function wc(i,u,l,d,I,R){if(!u)throw Error("Invalid event type");var C=f(I)?!!I.capture:!!I,Q=$r(i);if(Q||(i[Br]=Q=new On(i)),l=Q.add(u,l,d,C,R),l.proxy)return l;if(d=Ac(),l.proxy=d,d.src=i,d.listener=l,i.addEventListener)Ec||(I=C),I===void 0&&(I=!1),i.addEventListener(u.toString(),d,I);else if(i.attachEvent)i.attachEvent(Ci(u.toString()),d);else if(i.addListener&&i.removeListener)i.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Ac(){function i(l){return u.call(i.src,i.listener,l)}const u=Rc;return i}function Vi(i,u,l,d,I){if(Array.isArray(u))for(var R=0;R<u.length;R++)Vi(i,u[R],l,d,I);else d=f(d)?!!d.capture:!!d,l=Di(l),i&&i[Mn]?(i=i.i,u=String(u).toString(),u in i.g&&(R=i.g[u],l=Fr(R,l,d,I),-1<l&&(xn(R[l]),Array.prototype.splice.call(R,l,1),R.length==0&&(delete i.g[u],i.h--)))):i&&(i=$r(i))&&(u=i.g[u.toString()],i=-1,u&&(i=Fr(u,l,d,I)),(l=-1<i?u[i]:null)&&qr(l))}function qr(i){if(typeof i!="number"&&i&&!i.da){var u=i.src;if(u&&u[Mn])Or(u.i,i);else{var l=i.type,d=i.proxy;u.removeEventListener?u.removeEventListener(l,d,i.capture):u.detachEvent?u.detachEvent(Ci(l),d):u.addListener&&u.removeListener&&u.removeListener(d),(l=$r(u))?(Or(l,i),l.h==0&&(l.src=null,u[Br]=null)):xn(i)}}}function Ci(i){return i in Ur?Ur[i]:Ur[i]="on"+i}function Rc(i,u){if(i.da)i=!0;else{u=new Ge(u,this);var l=i.listener,d=i.ha||i.src;i.fa&&qr(i),i=l.call(d,u)}return i}function $r(i){return i=i[Br],i instanceof On?i:null}var jr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Di(i){return typeof i=="function"?i:(i[jr]||(i[jr]=function(u){return i.handleEvent(u)}),i[jr])}function _t(){zt.call(this),this.i=new On(this),this.M=this,this.F=null}V(_t,zt),_t.prototype[Mn]=!0,_t.prototype.removeEventListener=function(i,u,l,d){Vi(this,i,u,l,d)};function It(i,u){var l,d=i.F;if(d)for(l=[];d;d=d.F)l.push(d);if(i=i.M,d=u.type||u,typeof u=="string")u=new gt(u,i);else if(u instanceof gt)u.target=u.target||i;else{var I=u;u=new gt(d,i),y(u,I)}if(I=!0,l)for(var R=l.length-1;0<=R;R--){var C=u.g=l[R];I=Fn(C,d,!0,u)&&I}if(C=u.g=i,I=Fn(C,d,!0,u)&&I,I=Fn(C,d,!1,u)&&I,l)for(R=0;R<l.length;R++)C=u.g=l[R],I=Fn(C,d,!1,u)&&I}_t.prototype.N=function(){if(_t.aa.N.call(this),this.i){var i=this.i,u;for(u in i.g){for(var l=i.g[u],d=0;d<l.length;d++)xn(l[d]);delete i.g[u],i.h--}}this.F=null},_t.prototype.K=function(i,u,l,d){return this.i.add(String(i),u,!1,l,d)},_t.prototype.L=function(i,u,l,d){return this.i.add(String(i),u,!0,l,d)};function Fn(i,u,l,d){if(u=i.i.g[String(u)],!u)return!0;u=u.concat();for(var I=!0,R=0;R<u.length;++R){var C=u[R];if(C&&!C.da&&C.capture==l){var Q=C.listener,lt=C.ha||C.src;C.fa&&Or(i.i,C),I=Q.call(lt,d)!==!1&&I}}return I&&!d.defaultPrevented}function ki(i,u,l){if(typeof i=="function")l&&(i=A(i,l));else if(i&&typeof i.handleEvent=="function")i=A(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(i,u||0)}function Ni(i){i.g=ki(()=>{i.g=null,i.i&&(i.i=!1,Ni(i))},i.l);const u=i.h;i.h=null,i.m.apply(null,u)}class Sc extends zt{constructor(u,l){super(),this.m=u,this.l=l,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ni(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ke(i){zt.call(this),this.h=i,this.g={}}V(Ke,zt);var Li=[];function Mi(i){ct(i.g,function(u,l){this.g.hasOwnProperty(l)&&qr(u)},i),i.g={}}Ke.prototype.N=function(){Ke.aa.N.call(this),Mi(this)},Ke.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var zr=c.JSON.stringify,Pc=c.JSON.parse,bc=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function Gr(){}Gr.prototype.h=null;function xi(i){return i.h||(i.h=i.i())}function Oi(){}var He={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Kr(){gt.call(this,"d")}V(Kr,gt);function Hr(){gt.call(this,"c")}V(Hr,gt);var se={},Fi=null;function Bn(){return Fi=Fi||new _t}se.La="serverreachability";function Bi(i){gt.call(this,se.La,i)}V(Bi,gt);function We(i){const u=Bn();It(u,new Bi(u))}se.STAT_EVENT="statevent";function Ui(i,u){gt.call(this,se.STAT_EVENT,i),this.stat=u}V(Ui,gt);function wt(i){const u=Bn();It(u,new Ui(u,i))}se.Ma="timingevent";function qi(i,u){gt.call(this,se.Ma,i),this.size=u}V(qi,gt);function Qe(i,u){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},u)}function Ye(){this.g=!0}Ye.prototype.xa=function(){this.g=!1};function Vc(i,u,l,d,I,R){i.info(function(){if(i.g)if(R)for(var C="",Q=R.split("&"),lt=0;lt<Q.length;lt++){var K=Q[lt].split("=");if(1<K.length){var yt=K[0];K=K[1];var Et=yt.split("_");C=2<=Et.length&&Et[1]=="type"?C+(yt+"="+K+"&"):C+(yt+"=redacted&")}}else C=null;else C=R;return"XMLHTTP REQ ("+d+") [attempt "+I+"]: "+u+`
`+l+`
`+C})}function Cc(i,u,l,d,I,R,C){i.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+I+"]: "+u+`
`+l+`
`+R+" "+C})}function Ee(i,u,l,d){i.info(function(){return"XMLHTTP TEXT ("+u+"): "+kc(i,l)+(d?" "+d:"")})}function Dc(i,u){i.info(function(){return"TIMEOUT: "+u})}Ye.prototype.info=function(){};function kc(i,u){if(!i.g)return u;if(!u)return null;try{var l=JSON.parse(u);if(l){for(i=0;i<l.length;i++)if(Array.isArray(l[i])){var d=l[i];if(!(2>d.length)){var I=d[1];if(Array.isArray(I)&&!(1>I.length)){var R=I[0];if(R!="noop"&&R!="stop"&&R!="close")for(var C=1;C<I.length;C++)I[C]=""}}}}return zr(l)}catch{return u}}var Un={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},$i={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Wr;function qn(){}V(qn,Gr),qn.prototype.g=function(){return new XMLHttpRequest},qn.prototype.i=function(){return{}},Wr=new qn;function Gt(i,u,l,d){this.j=i,this.i=u,this.l=l,this.R=d||1,this.U=new Ke(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ji}function ji(){this.i=null,this.g="",this.h=!1}var zi={},Qr={};function Yr(i,u,l){i.L=1,i.v=Gn(Ft(u)),i.m=l,i.P=!0,Gi(i,null)}function Gi(i,u){i.F=Date.now(),$n(i),i.A=Ft(i.v);var l=i.A,d=i.R;Array.isArray(d)||(d=[String(d)]),io(l.i,"t",d),i.C=0,l=i.j.J,i.h=new ji,i.g=Ao(i.j,l?u:null,!i.m),0<i.O&&(i.M=new Sc(A(i.Y,i,i.g),i.O)),u=i.U,l=i.g,d=i.ca;var I="readystatechange";Array.isArray(I)||(I&&(Li[0]=I.toString()),I=Li);for(var R=0;R<I.length;R++){var C=bi(l,I[R],d||u.handleEvent,!1,u.h||u);if(!C)break;u.g[C.key]=C}u=i.H?p(i.H):{},i.m?(i.u||(i.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,u)):(i.u="GET",i.g.ea(i.A,i.u,null,u)),We(),Vc(i.i,i.u,i.A,i.l,i.R,i.m)}Gt.prototype.ca=function(i){i=i.target;const u=this.M;u&&Bt(i)==3?u.j():this.Y(i)},Gt.prototype.Y=function(i){try{if(i==this.g)t:{const Et=Bt(this.g);var u=this.g.Ba();const Ie=this.g.Z();if(!(3>Et)&&(Et!=3||this.g&&(this.h.h||this.g.oa()||fo(this.g)))){this.J||Et!=4||u==7||(u==8||0>=Ie?We(3):We(2)),Xr(this);var l=this.g.Z();this.X=l;e:if(Ki(this)){var d=fo(this.g);i="";var I=d.length,R=Bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ie(this),Xe(this);var C="";break e}this.h.i=new c.TextDecoder}for(u=0;u<I;u++)this.h.h=!0,i+=this.h.i.decode(d[u],{stream:!(R&&u==I-1)});d.length=0,this.h.g+=i,this.C=0,C=this.h.g}else C=this.g.oa();if(this.o=l==200,Cc(this.i,this.u,this.A,this.l,this.R,Et,l),this.o){if(this.T&&!this.K){e:{if(this.g){var Q,lt=this.g;if((Q=lt.g?lt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!W(Q)){var K=Q;break e}}K=null}if(l=K)Ee(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Jr(this,l);else{this.o=!1,this.s=3,wt(12),ie(this),Xe(this);break t}}if(this.P){l=!0;let Dt;for(;!this.J&&this.C<C.length;)if(Dt=Nc(this,C),Dt==Qr){Et==4&&(this.s=4,wt(14),l=!1),Ee(this.i,this.l,null,"[Incomplete Response]");break}else if(Dt==zi){this.s=4,wt(15),Ee(this.i,this.l,C,"[Invalid Chunk]"),l=!1;break}else Ee(this.i,this.l,Dt,null),Jr(this,Dt);if(Ki(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Et!=4||C.length!=0||this.h.h||(this.s=1,wt(16),l=!1),this.o=this.o&&l,!l)Ee(this.i,this.l,C,"[Invalid Chunked Response]"),ie(this),Xe(this);else if(0<C.length&&!this.W){this.W=!0;var yt=this.j;yt.g==this&&yt.ba&&!yt.M&&(yt.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),ss(yt),yt.M=!0,wt(11))}}else Ee(this.i,this.l,C,null),Jr(this,C);Et==4&&ie(this),this.o&&!this.J&&(Et==4?vo(this.j,this):(this.o=!1,$n(this)))}else Yc(this.g),l==400&&0<C.indexOf("Unknown SID")?(this.s=3,wt(12)):(this.s=0,wt(13)),ie(this),Xe(this)}}}catch{}finally{}};function Ki(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Nc(i,u){var l=i.C,d=u.indexOf(`
`,l);return d==-1?Qr:(l=Number(u.substring(l,d)),isNaN(l)?zi:(d+=1,d+l>u.length?Qr:(u=u.slice(d,d+l),i.C=d+l,u)))}Gt.prototype.cancel=function(){this.J=!0,ie(this)};function $n(i){i.S=Date.now()+i.I,Hi(i,i.I)}function Hi(i,u){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Qe(A(i.ba,i),u)}function Xr(i){i.B&&(c.clearTimeout(i.B),i.B=null)}Gt.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Dc(this.i,this.A),this.L!=2&&(We(),wt(17)),ie(this),this.s=2,Xe(this)):Hi(this,this.S-i)};function Xe(i){i.j.G==0||i.J||vo(i.j,i)}function ie(i){Xr(i);var u=i.M;u&&typeof u.ma=="function"&&u.ma(),i.M=null,Mi(i.U),i.g&&(u=i.g,i.g=null,u.abort(),u.ma())}function Jr(i,u){try{var l=i.j;if(l.G!=0&&(l.g==i||Zr(l.h,i))){if(!i.K&&Zr(l.h,i)&&l.G==3){try{var d=l.Da.g.parse(u)}catch{d=null}if(Array.isArray(d)&&d.length==3){var I=d;if(I[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<i.F)Xn(l),Qn(l);else break t;rs(l),wt(18)}}else l.za=I[1],0<l.za-l.T&&37500>I[2]&&l.F&&l.v==0&&!l.C&&(l.C=Qe(A(l.Za,l),6e3));if(1>=Yi(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else ae(l,11)}else if((i.K||l.g==i)&&Xn(l),!W(u))for(I=l.Da.g.parse(u),u=0;u<I.length;u++){let K=I[u];if(l.T=K[0],K=K[1],l.G==2)if(K[0]=="c"){l.K=K[1],l.ia=K[2];const yt=K[3];yt!=null&&(l.la=yt,l.j.info("VER="+l.la));const Et=K[4];Et!=null&&(l.Aa=Et,l.j.info("SVER="+l.Aa));const Ie=K[5];Ie!=null&&typeof Ie=="number"&&0<Ie&&(d=1.5*Ie,l.L=d,l.j.info("backChannelRequestTimeoutMs_="+d)),d=l;const Dt=i.g;if(Dt){const Zn=Dt.g?Dt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Zn){var R=d.h;R.g||Zn.indexOf("spdy")==-1&&Zn.indexOf("quic")==-1&&Zn.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(ts(R,R.h),R.h=null))}if(d.D){const is=Dt.g?Dt.g.getResponseHeader("X-HTTP-Session-Id"):null;is&&(d.ya=is,J(d.I,d.D,is))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-i.F,l.j.info("Handshake RTT: "+l.R+"ms")),d=l;var C=i;if(d.qa=wo(d,d.J?d.ia:null,d.W),C.K){Xi(d.h,C);var Q=C,lt=d.L;lt&&(Q.I=lt),Q.B&&(Xr(Q),$n(Q)),d.g=C}else yo(d);0<l.i.length&&Yn(l)}else K[0]!="stop"&&K[0]!="close"||ae(l,7);else l.G==3&&(K[0]=="stop"||K[0]=="close"?K[0]=="stop"?ae(l,7):ns(l):K[0]!="noop"&&l.l&&l.l.ta(K),l.v=0)}}We(4)}catch{}}var Lc=class{constructor(i,u){this.g=i,this.map=u}};function Wi(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Qi(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Yi(i){return i.h?1:i.g?i.g.size:0}function Zr(i,u){return i.h?i.h==u:i.g?i.g.has(u):!1}function ts(i,u){i.g?i.g.add(u):i.h=u}function Xi(i,u){i.h&&i.h==u?i.h=null:i.g&&i.g.has(u)&&i.g.delete(u)}Wi.prototype.cancel=function(){if(this.i=Ji(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Ji(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let u=i.i;for(const l of i.g.values())u=u.concat(l.D);return u}return N(i.i)}function Mc(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var u=[],l=i.length,d=0;d<l;d++)u.push(i[d]);return u}u=[],l=0;for(d in i)u[l++]=i[d];return u}function xc(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var u=[];i=i.length;for(var l=0;l<i;l++)u.push(l);return u}u=[],l=0;for(const d in i)u[l++]=d;return u}}}function Zi(i,u){if(i.forEach&&typeof i.forEach=="function")i.forEach(u,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,u,void 0);else for(var l=xc(i),d=Mc(i),I=d.length,R=0;R<I;R++)u.call(void 0,d[R],l&&l[R],i)}var to=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Oc(i,u){if(i){i=i.split("&");for(var l=0;l<i.length;l++){var d=i[l].indexOf("="),I=null;if(0<=d){var R=i[l].substring(0,d);I=i[l].substring(d+1)}else R=i[l];u(R,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function oe(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof oe){this.h=i.h,jn(this,i.j),this.o=i.o,this.g=i.g,zn(this,i.s),this.l=i.l;var u=i.i,l=new tn;l.i=u.i,u.g&&(l.g=new Map(u.g),l.h=u.h),eo(this,l),this.m=i.m}else i&&(u=String(i).match(to))?(this.h=!1,jn(this,u[1]||"",!0),this.o=Je(u[2]||""),this.g=Je(u[3]||"",!0),zn(this,u[4]),this.l=Je(u[5]||"",!0),eo(this,u[6]||"",!0),this.m=Je(u[7]||"")):(this.h=!1,this.i=new tn(null,this.h))}oe.prototype.toString=function(){var i=[],u=this.j;u&&i.push(Ze(u,no,!0),":");var l=this.g;return(l||u=="file")&&(i.push("//"),(u=this.o)&&i.push(Ze(u,no,!0),"@"),i.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&i.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(Ze(l,l.charAt(0)=="/"?Uc:Bc,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",Ze(l,$c)),i.join("")};function Ft(i){return new oe(i)}function jn(i,u,l){i.j=l?Je(u,!0):u,i.j&&(i.j=i.j.replace(/:$/,""))}function zn(i,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);i.s=u}else i.s=null}function eo(i,u,l){u instanceof tn?(i.i=u,jc(i.i,i.h)):(l||(u=Ze(u,qc)),i.i=new tn(u,i.h))}function J(i,u,l){i.i.set(u,l)}function Gn(i){return J(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Je(i,u){return i?u?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Ze(i,u,l){return typeof i=="string"?(i=encodeURI(i).replace(u,Fc),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Fc(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var no=/[#\/\?@]/g,Bc=/[#\?:]/g,Uc=/[#\?]/g,qc=/[#\?@]/g,$c=/#/g;function tn(i,u){this.h=this.g=null,this.i=i||null,this.j=!!u}function Kt(i){i.g||(i.g=new Map,i.h=0,i.i&&Oc(i.i,function(u,l){i.add(decodeURIComponent(u.replace(/\+/g," ")),l)}))}n=tn.prototype,n.add=function(i,u){Kt(this),this.i=null,i=ve(this,i);var l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(u),this.h+=1,this};function ro(i,u){Kt(i),u=ve(i,u),i.g.has(u)&&(i.i=null,i.h-=i.g.get(u).length,i.g.delete(u))}function so(i,u){return Kt(i),u=ve(i,u),i.g.has(u)}n.forEach=function(i,u){Kt(this),this.g.forEach(function(l,d){l.forEach(function(I){i.call(u,I,d,this)},this)},this)},n.na=function(){Kt(this);const i=Array.from(this.g.values()),u=Array.from(this.g.keys()),l=[];for(let d=0;d<u.length;d++){const I=i[d];for(let R=0;R<I.length;R++)l.push(u[d])}return l},n.V=function(i){Kt(this);let u=[];if(typeof i=="string")so(this,i)&&(u=u.concat(this.g.get(ve(this,i))));else{i=Array.from(this.g.values());for(let l=0;l<i.length;l++)u=u.concat(i[l])}return u},n.set=function(i,u){return Kt(this),this.i=null,i=ve(this,i),so(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[u]),this.h+=1,this},n.get=function(i,u){return i?(i=this.V(i),0<i.length?String(i[0]):u):u};function io(i,u,l){ro(i,u),0<l.length&&(i.i=null,i.g.set(ve(i,u),N(l)),i.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],u=Array.from(this.g.keys());for(var l=0;l<u.length;l++){var d=u[l];const R=encodeURIComponent(String(d)),C=this.V(d);for(d=0;d<C.length;d++){var I=R;C[d]!==""&&(I+="="+encodeURIComponent(String(C[d]))),i.push(I)}}return this.i=i.join("&")};function ve(i,u){return u=String(u),i.j&&(u=u.toLowerCase()),u}function jc(i,u){u&&!i.j&&(Kt(i),i.i=null,i.g.forEach(function(l,d){var I=d.toLowerCase();d!=I&&(ro(this,d),io(this,I,l))},i)),i.j=u}function zc(i,u){const l=new Ye;if(c.Image){const d=new Image;d.onload=S(Ht,l,"TestLoadImage: loaded",!0,u,d),d.onerror=S(Ht,l,"TestLoadImage: error",!1,u,d),d.onabort=S(Ht,l,"TestLoadImage: abort",!1,u,d),d.ontimeout=S(Ht,l,"TestLoadImage: timeout",!1,u,d),c.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=i}else u(!1)}function Gc(i,u){const l=new Ye,d=new AbortController,I=setTimeout(()=>{d.abort(),Ht(l,"TestPingServer: timeout",!1,u)},1e4);fetch(i,{signal:d.signal}).then(R=>{clearTimeout(I),R.ok?Ht(l,"TestPingServer: ok",!0,u):Ht(l,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(I),Ht(l,"TestPingServer: error",!1,u)})}function Ht(i,u,l,d,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),d(l)}catch{}}function Kc(){this.g=new bc}function Hc(i,u,l){const d=l||"";try{Zi(i,function(I,R){let C=I;f(I)&&(C=zr(I)),u.push(d+R+"="+encodeURIComponent(C))})}catch(I){throw u.push(d+"type="+encodeURIComponent("_badmap")),I}}function Kn(i){this.l=i.Ub||null,this.j=i.eb||!1}V(Kn,Gr),Kn.prototype.g=function(){return new Hn(this.l,this.j)},Kn.prototype.i=function(i){return function(){return i}}({});function Hn(i,u){_t.call(this),this.D=i,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(Hn,_t),n=Hn.prototype,n.open=function(i,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=u,this.readyState=1,nn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(u.body=i),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,en(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,nn(this)),this.g&&(this.readyState=3,nn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;oo(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function oo(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var u=i.value?i.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!i.done}))&&(this.response=this.responseText+=u)}i.done?en(this):nn(this),this.readyState==3&&oo(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,en(this))},n.Qa=function(i){this.g&&(this.response=i,en(this))},n.ga=function(){this.g&&en(this)};function en(i){i.readyState=4,i.l=null,i.j=null,i.v=null,nn(i)}n.setRequestHeader=function(i,u){this.u.append(i,u)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],u=this.h.entries();for(var l=u.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=u.next();return i.join(`\r
`)};function nn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Hn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function ao(i){let u="";return ct(i,function(l,d){u+=d,u+=":",u+=l,u+=`\r
`}),u}function es(i,u,l){t:{for(d in l){var d=!1;break t}d=!0}d||(l=ao(l),typeof i=="string"?l!=null&&encodeURIComponent(String(l)):J(i,u,l))}function et(i){_t.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(et,_t);var Wc=/^https?$/i,Qc=["POST","PUT"];n=et.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,u,l,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);u=u?u.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Wr.g(),this.v=this.o?xi(this.o):xi(Wr),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(u,String(i),!0),this.B=!1}catch(R){uo(this,R);return}if(i=l||"",l=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var I in d)l.set(I,d[I]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const R of d.keys())l.set(R,d.get(R));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(l.keys()).find(R=>R.toLowerCase()=="content-type"),I=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Qc,u,void 0))||d||I||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,C]of l)this.g.setRequestHeader(R,C);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ho(this),this.u=!0,this.g.send(i),this.u=!1}catch(R){uo(this,R)}};function uo(i,u){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=u,i.m=5,co(i),Wn(i)}function co(i){i.A||(i.A=!0,It(i,"complete"),It(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,It(this,"complete"),It(this,"abort"),Wn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Wn(this,!0)),et.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?lo(this):this.bb())},n.bb=function(){lo(this)};function lo(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Bt(i)!=4||i.Z()!=2)){if(i.u&&Bt(i)==4)ki(i.Ea,0,i);else if(It(i,"readystatechange"),Bt(i)==4){i.h=!1;try{const C=i.Z();t:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var l;if(!(l=u)){var d;if(d=C===0){var I=String(i.D).match(to)[1]||null;!I&&c.self&&c.self.location&&(I=c.self.location.protocol.slice(0,-1)),d=!Wc.test(I?I.toLowerCase():"")}l=d}if(l)It(i,"complete"),It(i,"success");else{i.m=6;try{var R=2<Bt(i)?i.g.statusText:""}catch{R=""}i.l=R+" ["+i.Z()+"]",co(i)}}finally{Wn(i)}}}}function Wn(i,u){if(i.g){ho(i);const l=i.g,d=i.v[0]?()=>{}:null;i.g=null,i.v=null,u||It(i,"ready");try{l.onreadystatechange=d}catch{}}}function ho(i){i.I&&(c.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Bt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Bt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var u=this.g.responseText;return i&&u.indexOf(i)==0&&(u=u.substring(i.length)),Pc(u)}};function fo(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Yc(i){const u={};i=(i.g&&2<=Bt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<i.length;d++){if(W(i[d]))continue;var l=v(i[d]);const I=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const R=u[I]||[];u[I]=R,R.push(l)}T(u,function(d){return d.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function rn(i,u,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||u}function mo(i){this.Aa=0,this.i=[],this.j=new Ye,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=rn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=rn("baseRetryDelayMs",5e3,i),this.cb=rn("retryDelaySeedMs",1e4,i),this.Wa=rn("forwardChannelMaxRetries",2,i),this.wa=rn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Wi(i&&i.concurrentRequestLimit),this.Da=new Kc,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=mo.prototype,n.la=8,n.G=1,n.connect=function(i,u,l,d){wt(0),this.W=i,this.H=u||{},l&&d!==void 0&&(this.H.OSID=l,this.H.OAID=d),this.F=this.X,this.I=wo(this,null,this.W),Yn(this)};function ns(i){if(po(i),i.G==3){var u=i.U++,l=Ft(i.I);if(J(l,"SID",i.K),J(l,"RID",u),J(l,"TYPE","terminate"),sn(i,l),u=new Gt(i,i.j,u),u.L=2,u.v=Gn(Ft(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=u.v,l=!0),l||(u.g=Ao(u.j,null),u.g.ea(u.v)),u.F=Date.now(),$n(u)}Io(i)}function Qn(i){i.g&&(ss(i),i.g.cancel(),i.g=null)}function po(i){Qn(i),i.u&&(c.clearTimeout(i.u),i.u=null),Xn(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function Yn(i){if(!Qi(i.h)&&!i.s){i.s=!0;var u=i.Ga;je||Pi(),ze||(je(),ze=!0),xr.add(u,i),i.B=0}}function Xc(i,u){return Yi(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=u.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Qe(A(i.Ga,i,u),To(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const I=new Gt(this,this.j,i);let R=this.o;if(this.S&&(R?(R=p(R),y(R,this.S)):R=this.S),this.m!==null||this.O||(I.H=R,R=null),this.P)t:{for(var u=0,l=0;l<this.i.length;l++){e:{var d=this.i[l];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(u+=d,4096<u){u=l;break t}if(u===4096||l===this.i.length-1){u=l+1;break t}}u=1e3}else u=1e3;u=_o(this,I,u),l=Ft(this.I),J(l,"RID",i),J(l,"CVER",22),this.D&&J(l,"X-HTTP-Session-Id",this.D),sn(this,l),R&&(this.O?u="headers="+encodeURIComponent(String(ao(R)))+"&"+u:this.m&&es(l,this.m,R)),ts(this.h,I),this.Ua&&J(l,"TYPE","init"),this.P?(J(l,"$req",u),J(l,"SID","null"),I.T=!0,Yr(I,l,null)):Yr(I,l,u),this.G=2}}else this.G==3&&(i?go(this,i):this.i.length==0||Qi(this.h)||go(this))};function go(i,u){var l;u?l=u.l:l=i.U++;const d=Ft(i.I);J(d,"SID",i.K),J(d,"RID",l),J(d,"AID",i.T),sn(i,d),i.m&&i.o&&es(d,i.m,i.o),l=new Gt(i,i.j,l,i.B+1),i.m===null&&(l.H=i.o),u&&(i.i=u.D.concat(i.i)),u=_o(i,l,1e3),l.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),ts(i.h,l),Yr(l,d,u)}function sn(i,u){i.H&&ct(i.H,function(l,d){J(u,d,l)}),i.l&&Zi({},function(l,d){J(u,d,l)})}function _o(i,u,l){l=Math.min(i.i.length,l);var d=i.l?A(i.l.Na,i.l,i):null;t:{var I=i.i;let R=-1;for(;;){const C=["count="+l];R==-1?0<l?(R=I[0].g,C.push("ofs="+R)):R=0:C.push("ofs="+R);let Q=!0;for(let lt=0;lt<l;lt++){let K=I[lt].g;const yt=I[lt].map;if(K-=R,0>K)R=Math.max(0,I[lt].g-100),Q=!1;else try{Hc(yt,C,"req"+K+"_")}catch{d&&d(yt)}}if(Q){d=C.join("&");break t}}}return i=i.i.splice(0,l),u.D=i,d}function yo(i){if(!i.g&&!i.u){i.Y=1;var u=i.Fa;je||Pi(),ze||(je(),ze=!0),xr.add(u,i),i.v=0}}function rs(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Qe(A(i.Fa,i),To(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,Eo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Qe(A(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,wt(10),Qn(this),Eo(this))};function ss(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function Eo(i){i.g=new Gt(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var u=Ft(i.qa);J(u,"RID","rpc"),J(u,"SID",i.K),J(u,"AID",i.T),J(u,"CI",i.F?"0":"1"),!i.F&&i.ja&&J(u,"TO",i.ja),J(u,"TYPE","xmlhttp"),sn(i,u),i.m&&i.o&&es(u,i.m,i.o),i.L&&(i.g.I=i.L);var l=i.g;i=i.ia,l.L=1,l.v=Gn(Ft(u)),l.m=null,l.P=!0,Gi(l,i)}n.Za=function(){this.C!=null&&(this.C=null,Qn(this),rs(this),wt(19))};function Xn(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function vo(i,u){var l=null;if(i.g==u){Xn(i),ss(i),i.g=null;var d=2}else if(Zr(i.h,u))l=u.D,Xi(i.h,u),d=1;else return;if(i.G!=0){if(u.o)if(d==1){l=u.m?u.m.length:0,u=Date.now()-u.F;var I=i.B;d=Bn(),It(d,new qi(d,l)),Yn(i)}else yo(i);else if(I=u.s,I==3||I==0&&0<u.X||!(d==1&&Xc(i,u)||d==2&&rs(i)))switch(l&&0<l.length&&(u=i.h,u.i=u.i.concat(l)),I){case 1:ae(i,5);break;case 4:ae(i,10);break;case 3:ae(i,6);break;default:ae(i,2)}}}function To(i,u){let l=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(l*=2),l*u}function ae(i,u){if(i.j.info("Error code "+u),u==2){var l=A(i.fb,i),d=i.Xa;const I=!d;d=new oe(d||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||jn(d,"https"),Gn(d),I?zc(d.toString(),l):Gc(d.toString(),l)}else wt(2);i.G=0,i.l&&i.l.sa(u),Io(i),po(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),wt(2)):(this.j.info("Failed to ping google.com"),wt(1))};function Io(i){if(i.G=0,i.ka=[],i.l){const u=Ji(i.h);(u.length!=0||i.i.length!=0)&&(D(i.ka,u),D(i.ka,i.i),i.h.i.length=0,N(i.i),i.i.length=0),i.l.ra()}}function wo(i,u,l){var d=l instanceof oe?Ft(l):new oe(l);if(d.g!="")u&&(d.g=u+"."+d.g),zn(d,d.s);else{var I=c.location;d=I.protocol,u=u?u+"."+I.hostname:I.hostname,I=+I.port;var R=new oe(null);d&&jn(R,d),u&&(R.g=u),I&&zn(R,I),l&&(R.l=l),d=R}return l=i.D,u=i.ya,l&&u&&J(d,l,u),J(d,"VER",i.la),sn(i,d),d}function Ao(i,u,l){if(u&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=i.Ca&&!i.pa?new et(new Kn({eb:l})):new et(i.pa),u.Ha(i.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ro(){}n=Ro.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Jn(){}Jn.prototype.g=function(i,u){return new St(i,u)};function St(i,u){_t.call(this),this.g=new mo(u),this.l=i,this.h=u&&u.messageUrlParams||null,i=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(i?i["X-WebChannel-Content-Type"]=u.messageContentType:i={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(i?i["X-WebChannel-Client-Profile"]=u.va:i={"X-WebChannel-Client-Profile":u.va}),this.g.S=i,(i=u&&u.Sb)&&!W(i)&&(this.g.m=i),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!W(u)&&(this.g.D=u,i=this.h,i!==null&&u in i&&(i=this.h,u in i&&delete i[u])),this.j=new Te(this)}V(St,_t),St.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){ns(this.g)},St.prototype.o=function(i){var u=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.u&&(l={},l.__data__=zr(i),i=l);u.i.push(new Lc(u.Ya++,i)),u.G==3&&Yn(u)},St.prototype.N=function(){this.g.l=null,delete this.j,ns(this.g),delete this.g,St.aa.N.call(this)};function So(i){Kr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var u=i.__sm__;if(u){t:{for(const l in u){i=l;break t}i=void 0}(this.i=i)&&(i=this.i,u=u!==null&&i in u?u[i]:void 0),this.data=u}else this.data=i}V(So,Kr);function Po(){Hr.call(this),this.status=1}V(Po,Hr);function Te(i){this.g=i}V(Te,Ro),Te.prototype.ua=function(){It(this.g,"a")},Te.prototype.ta=function(i){It(this.g,new So(i))},Te.prototype.sa=function(i){It(this.g,new Po)},Te.prototype.ra=function(){It(this.g,"b")},Jn.prototype.createWebChannel=Jn.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,za=function(){return new Jn},ja=function(){return Bn()},$a=se,Ts={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Un.NO_ERROR=0,Un.TIMEOUT=8,Un.HTTP_ERROR=6,sr=Un,$i.COMPLETE="complete",qa=$i,Oi.EventType=He,He.OPEN="a",He.CLOSE="b",He.ERROR="c",He.MESSAGE="d",_t.prototype.listen=_t.prototype.K,an=Oi,et.prototype.listenOnce=et.prototype.L,et.prototype.getLastError=et.prototype.Ka,et.prototype.getLastErrorCode=et.prototype.Ba,et.prototype.getStatus=et.prototype.Z,et.prototype.getResponseJson=et.prototype.Oa,et.prototype.getResponseText=et.prototype.oa,et.prototype.send=et.prototype.ea,et.prototype.setWithCredentials=et.prototype.Ha,Ua=et}).apply(typeof tr<"u"?tr:typeof self<"u"?self:typeof window<"u"?window:{});const Bo="@firebase/firestore";/**
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
 */const de=new Na("@firebase/firestore");function on(){return de.logLevel}function L(n,...t){if(de.logLevel<=z.DEBUG){const e=t.map(Us);de.debug(`Firestore (${Fe}): ${n}`,...e)}}function $t(n,...t){if(de.logLevel<=z.ERROR){const e=t.map(Us);de.error(`Firestore (${Fe}): ${n}`,...e)}}function De(n,...t){if(de.logLevel<=z.WARN){const e=t.map(Us);de.warn(`Firestore (${Fe}): ${n}`,...e)}}function Us(n){if(typeof n=="string")return n;try{/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends Oe{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ga{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ch{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Tt.UNAUTHENTICATED))}shutdown(){}}class Dh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class kh{constructor(t){this.t=t,this.currentUser=Tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){G(this.o===void 0);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new Ut;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Ut,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},c=h=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Ut)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(G(typeof r.accessToken=="string"),new Ga(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return G(t===null||typeof t=="string"),new Tt(t)}}class Nh{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=Tt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Lh{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Nh(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Mh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xh{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){G(this.o===void 0);const r=o=>{o.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,L("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(G(typeof e.token=="string"),this.R=e.token,new Mh(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Oh(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class Ka{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=Oh(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%t.length))}return r}}function H(n,t){return n<t?-1:n>t?1:0}function ke(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
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
 */class ot{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new k(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new k(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new k(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new k(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ot.fromMillis(Date.now())}static fromDate(t){return ot.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new ot(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?H(this.nanoseconds,t.nanoseconds):H(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class yn{constructor(t,e,r){e===void 0?e=0:e>t.length&&O(),r===void 0?r=t.length-e:r>t.length-e&&O(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return yn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof yn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=t.get(s),a=e.get(s);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Y extends yn{construct(t,e,r){return new Y(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new k(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new Y(e)}static emptyPath(){return new Y([])}}const Fh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dt extends yn{construct(t,e,r){return new dt(t,e,r)}static isValidIdentifier(t){return Fh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new dt(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new k(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new k(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new k(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(o(),s++)}if(o(),a)throw new k(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new dt(e)}static emptyPath(){return new dt([])}}/**
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
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(Y.fromString(t))}static fromName(t){return new M(Y.fromString(t).popFirst(5))}static empty(){return new M(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Y.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Y.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new Y(t.slice()))}}function Bh(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=F.fromTimestamp(r===1e9?new ot(e+1,0):new ot(e,r));return new Zt(s,M.empty(),t)}function Uh(n){return new Zt(n.readTime,n.key,-1)}class Zt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Zt(F.min(),M.empty(),-1)}static max(){return new Zt(F.max(),M.empty(),-1)}}function qh(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(n.documentKey,t.documentKey),e!==0?e:H(n.largestBatchId,t.largestBatchId))}/**
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
 */const $h="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Rn(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==$h)throw n;L("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class b{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new b((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof b?e:b.resolve(e)}catch(e){return b.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):b.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):b.reject(e)}static resolve(t){return new b((e,r)=>{e(t)})}static reject(t){return new b((e,r)=>{r(t)})}static waitFor(t){return new b((e,r)=>{let s=0,o=0,a=!1;t.forEach(c=>{++s,c.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=b.resolve(!1);for(const r of t)e=e.next(s=>s?b.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new b((r,s)=>{const o=t.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(m=>{a[f]=m,++c,c===o&&r(a)},m=>s(m))}})}static doWhile(t,e){return new b((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function zh(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Sn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class qs{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}qs.oe=-1;function Pn(n){return n==null}function dr(n){return n===0&&1/n==-1/0}function Gh(n){return typeof n=="number"&&Number.isInteger(n)&&!dr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Uo(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function _e(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Ha(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class pt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Wa("Invalid base64 string: "+o):o}}(t);return new pt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new pt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return H(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const Kh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function te(n){if(G(!!n),typeof n=="string"){let t=0;const e=Kh.exec(n);if(G(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:rt(n.seconds),nanos:rt(n.nanos)}}function rt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function fe(n){return typeof n=="string"?pt.fromBase64String(n):pt.fromUint8Array(n)}/**
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
 */class Hh{constructor(t,e,r,s,o,a,c,h,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=f}}class vn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new vn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof vn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const nr={mapValue:{}};function me(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?$s(n)?4:Qh(n)?9007199254740991:Wh(n)?10:11:O()}function Mt(n,t){if(n===t)return!0;const e=me(n);if(e!==me(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return En(n).isEqual(En(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=te(s.timestampValue),c=te(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return fe(s.bytesValue).isEqual(fe(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return rt(s.geoPointValue.latitude)===rt(o.geoPointValue.latitude)&&rt(s.geoPointValue.longitude)===rt(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return rt(s.integerValue)===rt(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=rt(s.doubleValue),c=rt(o.doubleValue);return a===c?dr(a)===dr(c):isNaN(a)&&isNaN(c)}return!1}(n,t);case 9:return ke(n.arrayValue.values||[],t.arrayValue.values||[],Mt);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},c=o.mapValue.fields||{};if(Uo(a)!==Uo(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!Mt(a[h],c[h])))return!1;return!0}(n,t);default:return O()}}function Tn(n,t){return(n.values||[]).find(e=>Mt(e,t))!==void 0}function Ne(n,t){if(n===t)return 0;const e=me(n),r=me(t);if(e!==r)return H(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return H(n.booleanValue,t.booleanValue);case 2:return function(o,a){const c=rt(o.integerValue||o.doubleValue),h=rt(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(n,t);case 3:return $o(n.timestampValue,t.timestampValue);case 4:return $o(En(n),En(t));case 5:return H(n.stringValue,t.stringValue);case 6:return function(o,a){const c=fe(o),h=fe(a);return c.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const c=o.split("/"),h=a.split("/");for(let f=0;f<c.length&&f<h.length;f++){const m=H(c[f],h[f]);if(m!==0)return m}return H(c.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const c=H(rt(o.latitude),rt(a.latitude));return c!==0?c:H(rt(o.longitude),rt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return jo(n.arrayValue,t.arrayValue);case 10:return function(o,a){var c,h,f,m;const E=o.fields||{},A=a.fields||{},S=(c=E.value)===null||c===void 0?void 0:c.arrayValue,V=(h=A.value)===null||h===void 0?void 0:h.arrayValue,N=H(((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0,((m=V==null?void 0:V.values)===null||m===void 0?void 0:m.length)||0);return N!==0?N:jo(S,V)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===nr.mapValue&&a===nr.mapValue)return 0;if(o===nr.mapValue)return 1;if(a===nr.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),f=a.fields||{},m=Object.keys(f);h.sort(),m.sort();for(let E=0;E<h.length&&E<m.length;++E){const A=H(h[E],m[E]);if(A!==0)return A;const S=Ne(c[h[E]],f[m[E]]);if(S!==0)return S}return H(h.length,m.length)}(n.mapValue,t.mapValue);default:throw O()}}function $o(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return H(n,t);const e=te(n),r=te(t),s=H(e.seconds,r.seconds);return s!==0?s:H(e.nanos,r.nanos)}function jo(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=Ne(e[s],r[s]);if(o)return o}return H(e.length,r.length)}function Le(n){return Is(n)}function Is(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=te(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return fe(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return M.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Is(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Is(e.fields[a])}`;return s+"}"}(n.mapValue):O()}function zo(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function ws(n){return!!n&&"integerValue"in n}function zs(n){return!!n&&"arrayValue"in n}function Go(n){return!!n&&"nullValue"in n}function Ko(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ir(n){return!!n&&"mapValue"in n}function Wh(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function hn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return _e(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=hn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=hn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Qh(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class At{constructor(t){this.value=t}static empty(){return new At({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!ir(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=hn(e)}setAll(t){let e=dt.emptyPath(),r={},s=[];t.forEach((a,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=c.popLast()}a?r[c.lastSegment()]=hn(a):s.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());ir(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Mt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];ir(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){_e(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new At(hn(this.value))}}function Qa(n){const t=[];return _e(n.fields,(e,r)=>{const s=new dt([e]);if(ir(r)){const o=Qa(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new Pt(t)}/**
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
 */class fr{constructor(t,e){this.position=t,this.inclusive=e}}function Ho(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=M.comparator(M.fromName(a.referenceValue),e.key):r=Ne(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Wo(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Mt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Ya{}class it extends Ya{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Jh(t,e,r):e==="array-contains"?new ed(t,r):e==="in"?new nd(t,r):e==="not-in"?new rd(t,r):e==="array-contains-any"?new sd(t,r):new it(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Zh(t,r):new td(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Ne(e,this.value)):e!==null&&me(this.value)===me(e)&&this.matchesComparison(Ne(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class kt extends Ya{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new kt(t,e)}matches(t){return Xa(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Xa(n){return n.op==="and"}function Ja(n){return Xh(n)&&Xa(n)}function Xh(n){for(const t of n.filters)if(t instanceof kt)return!1;return!0}function As(n){if(n instanceof it)return n.field.canonicalString()+n.op.toString()+Le(n.value);if(Ja(n))return n.filters.map(t=>As(t)).join(",");{const t=n.filters.map(e=>As(e)).join(",");return`${n.op}(${t})`}}function Za(n,t){return n instanceof it?function(r,s){return s instanceof it&&r.op===s.op&&r.field.isEqual(s.field)&&Mt(r.value,s.value)}(n,t):n instanceof kt?function(r,s){return s instanceof kt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,c)=>o&&Za(a,s.filters[c]),!0):!1}(n,t):void O()}function tu(n){return n instanceof it?function(e){return`${e.field.canonicalString()} ${e.op} ${Le(e.value)}`}(n):n instanceof kt?function(e){return e.op.toString()+" {"+e.getFilters().map(tu).join(" ,")+"}"}(n):"Filter"}class Jh extends it{constructor(t,e,r){super(t,e,r),this.key=M.fromName(r.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class Zh extends it{constructor(t,e){super(t,"in",e),this.keys=eu("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class td extends it{constructor(t,e){super(t,"not-in",e),this.keys=eu("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function eu(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>M.fromName(r.referenceValue))}class ed extends it{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return zs(e)&&Tn(e.arrayValue,this.value)}}class nd extends it{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Tn(this.value.arrayValue,e)}}class rd extends it{constructor(t,e){super(t,"not-in",e)}matches(t){if(Tn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Tn(this.value.arrayValue,e)}}class sd extends it{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!zs(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Tn(this.value.arrayValue,r))}}/**
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
 */class id{constructor(t,e=null,r=[],s=[],o=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=c,this.ue=null}}function Qo(n,t=null,e=[],r=[],s=null,o=null,a=null){return new id(n,t,e,r,s,o,a)}function Gs(n){const t=B(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>As(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Pn(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Le(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Le(r)).join(",")),t.ue=e}return t.ue}function Ks(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Yh(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Za(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Wo(n.startAt,t.startAt)&&Wo(n.endAt,t.endAt)}function Rs(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Be{constructor(t,e=null,r=[],s=[],o=null,a="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function od(n,t,e,r,s,o,a,c){return new Be(n,t,e,r,s,o,a,c)}function Hs(n){return new Be(n)}function Yo(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function nu(n){return n.collectionGroup!==null}function dn(n){const t=B(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new mt(dt.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new In(o,r))}),e.has(dt.keyField().canonicalString())||t.ce.push(new In(dt.keyField(),r))}return t.ce}function Nt(n){const t=B(n);return t.le||(t.le=ad(t,dn(n))),t.le}function ad(n,t){if(n.limitType==="F")return Qo(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new In(s.field,o)});const e=n.endAt?new fr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new fr(n.startAt.position,n.startAt.inclusive):null;return Qo(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Ss(n,t){const e=n.filters.concat([t]);return new Be(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Ps(n,t,e){return new Be(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Ir(n,t){return Ks(Nt(n),Nt(t))&&n.limitType===t.limitType}function ru(n){return`${Gs(Nt(n))}|lt:${n.limitType}`}function Ae(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>tu(s)).join(", ")}]`),Pn(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>Le(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>Le(s)).join(",")),`Target(${r})`}(Nt(n))}; limitType=${n.limitType})`}function wr(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):M.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of dn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,c,h){const f=Ho(a,c,h);return a.inclusive?f<=0:f<0}(r.startAt,dn(r),s)||r.endAt&&!function(a,c,h){const f=Ho(a,c,h);return a.inclusive?f>=0:f>0}(r.endAt,dn(r),s))}(n,t)}function ud(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function su(n){return(t,e)=>{let r=!1;for(const s of dn(n)){const o=cd(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function cd(n,t,e){const r=n.field.isKeyField()?M.comparator(t.key,e.key):function(o,a,c){const h=a.data.field(o),f=c.data.field(o);return h!==null&&f!==null?Ne(h,f):O()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return O()}}/**
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
 */class Ue{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){_e(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return Ha(this.inner)}size(){return this.innerSize}}/**
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
 */const ld=new tt(M.comparator);function jt(){return ld}const iu=new tt(M.comparator);function un(...n){let t=iu;for(const e of n)t=t.insert(e.key,e);return t}function ou(n){let t=iu;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function le(){return fn()}function au(){return fn()}function fn(){return new Ue(n=>n.toString(),(n,t)=>n.isEqual(t))}const hd=new tt(M.comparator),dd=new mt(M.comparator);function U(...n){let t=dd;for(const e of n)t=t.add(e);return t}const fd=new mt(H);function md(){return fd}/**
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
 */function Ws(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:dr(t)?"-0":t}}function uu(n){return{integerValue:""+n}}function pd(n,t){return Gh(t)?uu(t):Ws(n,t)}/**
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
 */class Ar{constructor(){this._=void 0}}function gd(n,t,e){return n instanceof mr?function(s,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&$s(o)&&(o=js(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):n instanceof wn?lu(n,t):n instanceof An?hu(n,t):function(s,o){const a=cu(s,o),c=Xo(a)+Xo(s.Pe);return ws(a)&&ws(s.Pe)?uu(c):Ws(s.serializer,c)}(n,t)}function _d(n,t,e){return n instanceof wn?lu(n,t):n instanceof An?hu(n,t):e}function cu(n,t){return n instanceof pr?function(r){return ws(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class mr extends Ar{}class wn extends Ar{constructor(t){super(),this.elements=t}}function lu(n,t){const e=du(t);for(const r of n.elements)e.some(s=>Mt(s,r))||e.push(r);return{arrayValue:{values:e}}}class An extends Ar{constructor(t){super(),this.elements=t}}function hu(n,t){let e=du(t);for(const r of n.elements)e=e.filter(s=>!Mt(s,r));return{arrayValue:{values:e}}}class pr extends Ar{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Xo(n){return rt(n.integerValue||n.doubleValue)}function du(n){return zs(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function yd(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof wn&&s instanceof wn||r instanceof An&&s instanceof An?ke(r.elements,s.elements,Mt):r instanceof pr&&s instanceof pr?Mt(r.Pe,s.Pe):r instanceof mr&&s instanceof mr}(n.transform,t.transform)}class Ed{constructor(t,e){this.version=t,this.transformResults=e}}class ft{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ft}static exists(t){return new ft(void 0,t)}static updateTime(t){return new ft(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function or(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Rr{}function fu(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Sr(n.key,ft.none()):new bn(n.key,n.data,ft.none());{const e=n.data,r=At.empty();let s=new mt(dt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new ne(n.key,r,new Pt(s.toArray()),ft.none())}}function vd(n,t,e){n instanceof bn?function(s,o,a){const c=s.value.clone(),h=Zo(s.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,t,e):n instanceof ne?function(s,o,a){if(!or(s.precondition,o))return void o.convertToUnknownDocument(a.version);const c=Zo(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(mu(s)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function mn(n,t,e,r){return n instanceof bn?function(o,a,c,h){if(!or(o.precondition,a))return c;const f=o.value.clone(),m=ta(o.fieldTransforms,h,a);return f.setAll(m),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof ne?function(o,a,c,h){if(!or(o.precondition,a))return c;const f=ta(o.fieldTransforms,h,a),m=a.data;return m.setAll(mu(o)),m.setAll(f),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(E=>E.field))}(n,t,e,r):function(o,a,c){return or(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,t,e)}function Td(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=cu(r.transform,s||null);o!=null&&(e===null&&(e=At.empty()),e.set(r.field,o))}return e||null}function Jo(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ke(r,s,(o,a)=>yd(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class bn extends Rr{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ne extends Rr{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function mu(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Zo(n,t,e){const r=new Map;G(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,c=t.data.field(o.field);r.set(o.field,_d(a,c,e[s]))}return r}function ta(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,gd(o,a,t))}return r}class Sr extends Rr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class pu extends Rr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Id{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&vd(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=mn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=mn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=au();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=e.has(s.key)?null:c;const h=fu(a,c);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(F.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),U())}isEqual(t){return this.batchId===t.batchId&&ke(this.mutations,t.mutations,(e,r)=>Jo(e,r))&&ke(this.baseMutations,t.baseMutations,(e,r)=>Jo(e,r))}}class Qs{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){G(t.mutations.length===r.length);let s=function(){return hd}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new Qs(t,e,r,s)}}/**
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
 */class wd{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Ad{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */function Rd(){return new TextEncoder}/**
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
 */const Sd=new he([4294967295,4294967295],0);function ea(n){const t=Rd().encode(n),e=new Ba;return e.update(t),new Uint8Array(e.digest())}function na(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new he([e,r],0),new he([s,o],0)]}class Ys{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new cn(`Invalid padding: ${e}`);if(r<0)throw new cn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new cn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new cn(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=he.fromNumber(this.Ie)}Ee(t,e,r){let s=t.add(e.multiply(he.fromNumber(r)));return s.compare(Sd)===1&&(s=new he([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=ea(t),[r,s]=na(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);if(!this.de(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Ys(o,s,e);return r.forEach(c=>a.insert(c)),a}insert(t){if(this.Ie===0)return;const e=ea(t),[r,s]=na(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class cn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Pr{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,Vn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Pr(F.min(),s,new tt(H),jt(),U())}}class Vn{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Vn(r,e,U(),U(),U())}}/**
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
 */class ar{constructor(t,e,r,s){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=s}}class yu{constructor(t,e){this.targetId=t,this.me=e}}class Eu{constructor(t,e,r=pt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class ra{constructor(){this.fe=0,this.ge=ia(),this.pe=pt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=U(),e=U(),r=U();return this.ge.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:O()}}),new Vn(this.pe,this.ye,t,e,r)}Ce(){this.we=!1,this.ge=ia()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,G(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Pd{constructor(t){this.Le=t,this.Be=new Map,this.ke=jt(),this.qe=sa(),this.Qe=new tt(H)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:O()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,r=t.me.count,s=this.Je(e);if(s){const o=s.target;if(Rs(o))if(r===0){const a=new M(o.path);this.Ue(e,a,ut.newNoDocument(a,F.min()))}else G(r===1);else{const a=this.Ye(e);if(a!==r){const c=this.Ze(t),h=c?this.Xe(c,t,a):1;if(h!==0){this.je(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,f)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,c;try{a=fe(r).toUint8Array()}catch(h){if(h instanceof Wa)return De("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new Ys(a,s,o)}catch(h){return De(h instanceof cn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.Ie===0?null:c}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.Ue(e,o,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((o,a)=>{const c=this.Je(a);if(c){if(o.current&&Rs(c.target)){const h=new M(c.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,ut.newNoDocument(h,t))}o.be&&(e.set(a,o.ve()),o.Ce())}});let r=U();this.qe.forEach((o,a)=>{let c=!0;a.forEachWhile(h=>{const f=this.Je(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const s=new Pr(t,e,this.Qe,this.ke,r);return this.ke=jt(),this.qe=sa(),this.Qe=new tt(H),s}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new ra,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new mt(H),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||L("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new ra),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function sa(){return new tt(M.comparator)}function ia(){return new tt(M.comparator)}const bd={asc:"ASCENDING",desc:"DESCENDING"},Vd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Cd={and:"AND",or:"OR"};class Dd{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function bs(n,t){return n.useProto3Json||Pn(t)?t:{value:t}}function gr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function vu(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function kd(n,t){return gr(n,t.toTimestamp())}function bt(n){return G(!!n),F.fromTimestamp(function(e){const r=te(e);return new ot(r.seconds,r.nanos)}(n))}function Xs(n,t){return Vs(n,t).canonicalString()}function Vs(n,t){const e=function(s){return new Y(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Tu(n){const t=Y.fromString(n);return G(Pu(t)),t}function _r(n,t){return Xs(n.databaseId,t.path)}function pn(n,t){const e=Tu(t);if(e.get(1)!==n.databaseId.projectId)throw new k(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new k(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new M(wu(e))}function Iu(n,t){return Xs(n.databaseId,t)}function Nd(n){const t=Tu(n);return t.length===4?Y.emptyPath():wu(t)}function Cs(n){return new Y(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function wu(n){return G(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function oa(n,t,e){return{name:_r(n,t),fields:e.value.mapValue.fields}}function Ld(n,t){return"found"in t?function(r,s){G(!!s.found),s.found.name,s.found.updateTime;const o=pn(r,s.found.name),a=bt(s.found.updateTime),c=s.found.createTime?bt(s.found.createTime):F.min(),h=new At({mapValue:{fields:s.found.fields}});return ut.newFoundDocument(o,a,c,h)}(n,t):"missing"in t?function(r,s){G(!!s.missing),G(!!s.readTime);const o=pn(r,s.missing),a=bt(s.readTime);return ut.newNoDocument(o,a)}(n,t):O()}function Md(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:O()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(f,m){return f.useProto3Json?(G(m===void 0||typeof m=="string"),pt.fromBase64String(m||"")):(G(m===void 0||m instanceof Buffer||m instanceof Uint8Array),pt.fromUint8Array(m||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(f){const m=f.code===void 0?P.UNKNOWN:_u(f.code);return new k(m,f.message||"")}(a);e=new Eu(r,s,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=pn(n,r.document.name),o=bt(r.document.updateTime),a=r.document.createTime?bt(r.document.createTime):F.min(),c=new At({mapValue:{fields:r.document.fields}}),h=ut.newFoundDocument(s,o,a,c),f=r.targetIds||[],m=r.removedTargetIds||[];e=new ar(f,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=pn(n,r.document),o=r.readTime?bt(r.readTime):F.min(),a=ut.newNoDocument(s,o),c=r.removedTargetIds||[];e=new ar([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=pn(n,r.document),o=r.removedTargetIds||[];e=new ar([],o,s,null)}else{if(!("filter"in t))return O();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new Ad(s,o),c=r.targetId;e=new yu(c,a)}}return e}function Au(n,t){let e;if(t instanceof bn)e={update:oa(n,t.key,t.value)};else if(t instanceof Sr)e={delete:_r(n,t.key)};else if(t instanceof ne)e={update:oa(n,t.key,t.data),updateMask:zd(t.fieldMask)};else{if(!(t instanceof pu))return O();e={verify:_r(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const c=a.transform;if(c instanceof mr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof wn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof An)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof pr)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw O()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:kd(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:O()}(n,t.precondition)),e}function xd(n,t){return n&&n.length>0?(G(t!==void 0),n.map(e=>function(s,o){let a=s.updateTime?bt(s.updateTime):bt(o);return a.isEqual(F.min())&&(a=bt(o)),new Ed(a,s.transformResults||[])}(e,t))):[]}function Od(n,t){return{documents:[Iu(n,t.path)]}}function Fd(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Iu(n,s);const o=function(f){if(f.length!==0)return Su(kt.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(f){if(f.length!==0)return f.map(m=>function(A){return{field:Re(A.field),direction:qd(A.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=bs(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{_t:e,parent:s}}function Bd(n){let t=Nd(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){G(r===1);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(E){const A=Ru(E);return A instanceof kt&&Ja(A)?A.getFilters():[A]}(e.where));let a=[];e.orderBy&&(a=function(E){return E.map(A=>function(V){return new In(Se(V.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(A))}(e.orderBy));let c=null;e.limit&&(c=function(E){let A;return A=typeof E=="object"?E.value:E,Pn(A)?null:A}(e.limit));let h=null;e.startAt&&(h=function(E){const A=!!E.before,S=E.values||[];return new fr(S,A)}(e.startAt));let f=null;return e.endAt&&(f=function(E){const A=!E.before,S=E.values||[];return new fr(S,A)}(e.endAt)),od(t,s,a,o,c,"F",h,f)}function Ud(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Ru(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Se(e.unaryFilter.field);return it.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Se(e.unaryFilter.field);return it.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Se(e.unaryFilter.field);return it.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Se(e.unaryFilter.field);return it.create(a,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(n):n.fieldFilter!==void 0?function(e){return it.create(Se(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return kt.create(e.compositeFilter.filters.map(r=>Ru(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return O()}}(e.compositeFilter.op))}(n):O()}function qd(n){return bd[n]}function $d(n){return Vd[n]}function jd(n){return Cd[n]}function Re(n){return{fieldPath:n.canonicalString()}}function Se(n){return dt.fromServerFormat(n.fieldPath)}function Su(n){return n instanceof it?function(e){if(e.op==="=="){if(Ko(e.value))return{unaryFilter:{field:Re(e.field),op:"IS_NAN"}};if(Go(e.value))return{unaryFilter:{field:Re(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ko(e.value))return{unaryFilter:{field:Re(e.field),op:"IS_NOT_NAN"}};if(Go(e.value))return{unaryFilter:{field:Re(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Re(e.field),op:$d(e.op),value:e.value}}}(n):n instanceof kt?function(e){const r=e.getFilters().map(s=>Su(s));return r.length===1?r[0]:{compositeFilter:{op:jd(e.op),filters:r}}}(n):O()}function zd(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Pu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Gd{constructor(t){this.ct=t}}function Kd(n){const t=Bd({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ps(t,t.limit,"L"):t}/**
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
 */class Hd{constructor(){this.un=new Wd}addToCollectionParentIndex(t,e){return this.un.add(e),b.resolve()}getCollectionParents(t,e){return b.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return b.resolve()}deleteFieldIndex(t,e){return b.resolve()}deleteAllFieldIndexes(t){return b.resolve()}createTargetIndexes(t,e){return b.resolve()}getDocumentsMatchingTarget(t,e){return b.resolve(null)}getIndexType(t,e){return b.resolve(0)}getFieldIndexes(t,e){return b.resolve([])}getNextCollectionGroupToUpdate(t){return b.resolve(null)}getMinOffset(t,e){return b.resolve(Zt.min())}getMinOffsetFromCollectionGroup(t,e){return b.resolve(Zt.min())}updateCollectionGroup(t,e,r){return b.resolve()}updateIndexEntries(t,e){return b.resolve()}}class Wd{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new mt(Y.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new mt(Y.comparator)).toArray()}}/**
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
 */class Qd{constructor(){this.changes=new Ue(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ut.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?b.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Xd{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&mn(r.mutation,s,Pt.empty(),ot.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,U()).next(()=>r))}getLocalViewOfDocuments(t,e,r=U()){const s=le();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=un();return o.forEach((c,h)=>{a=a.insert(c,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=le();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,U()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,c)=>{e.set(a,c)})})}computeViews(t,e,r,s){let o=jt();const a=fn(),c=function(){return fn()}();return e.forEach((h,f)=>{const m=r.get(f.key);s.has(f.key)&&(m===void 0||m.mutation instanceof ne)?o=o.insert(f.key,f):m!==void 0?(a.set(f.key,m.mutation.getFieldMask()),mn(m.mutation,f,m.mutation.getFieldMask(),ot.now())):a.set(f.key,Pt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,m)=>a.set(f,m)),e.forEach((f,m)=>{var E;return c.set(f,new Yd(m,(E=a.get(f))!==null&&E!==void 0?E:null))}),c))}recalculateAndSaveOverlays(t,e){const r=fn();let s=new tt((a,c)=>a-c),o=U();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const c of a)c.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let m=r.get(h)||Pt.empty();m=c.applyToLocalView(f,m),r.set(h,m);const E=(s.get(c.batchId)||U()).add(h);s=s.insert(c.batchId,E)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),f=h.key,m=h.value,E=au();m.forEach(A=>{if(!o.has(A)){const S=fu(e.get(A),r.get(A));S!==null&&E.set(A,S),o=o.add(A)}}),a.push(this.documentOverlayCache.saveOverlays(t,f,E))}return b.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return M.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):nu(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):b.resolve(le());let c=-1,h=o;return a.next(f=>b.forEach(f,(m,E)=>(c<E.largestBatchId&&(c=E.largestBatchId),o.get(m)?b.resolve():this.remoteDocumentCache.getEntry(t,m).next(A=>{h=h.insert(m,A)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,U())).next(m=>({batchId:c,changes:ou(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(r=>{let s=un();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=un();return this.indexManager.getCollectionParents(t,o).next(c=>b.forEach(c,h=>{const f=function(E,A){return new Be(A,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next(m=>{m.forEach((E,A)=>{a=a.insert(E,A)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,f)=>{const m=f.getKey();a.get(m)===null&&(a=a.insert(m,ut.newInvalidDocument(m)))});let c=un();return a.forEach((h,f)=>{const m=o.get(h);m!==void 0&&mn(m.mutation,f,Pt.empty(),ot.now()),wr(e,f)&&(c=c.insert(h,f))}),c})}}/**
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
 */class Jd{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return b.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:bt(s.createTime)}}(e)),b.resolve()}getNamedQuery(t,e){return b.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(s){return{name:s.name,query:Kd(s.bundledQuery),readTime:bt(s.readTime)}}(e)),b.resolve()}}/**
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
 */class Zd{constructor(){this.overlays=new tt(M.comparator),this.Ir=new Map}getOverlay(t,e){return b.resolve(this.overlays.get(e))}getOverlays(t,e){const r=le();return b.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.ht(t,e,o)}),b.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),b.resolve()}getOverlaysForCollection(t,e,r){const s=le(),o=e.length+1,a=new M(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return b.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new tt((f,m)=>f-m);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let m=o.get(f.largestBatchId);m===null&&(m=le(),o=o.insert(f.largestBatchId,m)),m.set(f.getKey(),f)}}const c=le(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,m)=>c.set(f,m)),!(c.size()>=s)););return b.resolve(c)}ht(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new wd(e,r));let o=this.Ir.get(e);o===void 0&&(o=U(),this.Ir.set(e,o)),this.Ir.set(e,o.add(r.key))}}/**
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
 */class tf{constructor(){this.sessionToken=pt.EMPTY_BYTE_STRING}getSessionToken(t){return b.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,b.resolve()}}/**
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
 */class Js{constructor(){this.Tr=new mt(at.Er),this.dr=new mt(at.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const r=new at(t,e);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Vr(new at(t,e))}mr(t,e){t.forEach(r=>this.removeReference(r,e))}gr(t){const e=new M(new Y([])),r=new at(e,t),s=new at(e,t+1),o=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new M(new Y([])),r=new at(e,t),s=new at(e,t+1);let o=U();return this.dr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new at(t,0),r=this.Tr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class at{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return M.comparator(t.key,e.key)||H(t.wr,e.wr)}static Ar(t,e){return H(t.wr,e.wr)||M.comparator(t.key,e.key)}}/**
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
 */class ef{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new mt(at.Er)}checkEmpty(t){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Id(o,e,r,s);this.mutationQueue.push(a);for(const c of s)this.br=this.br.add(new at(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return b.resolve(a)}lookupMutationBatch(t,e){return b.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.vr(r),o=s<0?0:s;return b.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new at(e,0),s=new at(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,s],a=>{const c=this.Dr(a.wr);o.push(c)}),b.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new mt(H);return e.forEach(s=>{const o=new at(s,0),a=new at(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],c=>{r=r.add(c.wr)})}),b.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const a=new at(new M(o),0);let c=new mt(H);return this.br.forEachWhile(h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(c=c.add(h.wr)),!0)},a),b.resolve(this.Cr(c))}Cr(t){const e=[];return t.forEach(r=>{const s=this.Dr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){G(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return b.forEach(e.mutations,s=>{const o=new at(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.br=r})}On(t){}containsKey(t,e){const r=new at(e,0),s=this.br.firstAfterOrEqual(r);return b.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,b.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class nf{constructor(t){this.Mr=t,this.docs=function(){return new tt(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.Mr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return b.resolve(r?r.document.mutableCopy():ut.newInvalidDocument(e))}getEntries(t,e){let r=jt();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():ut.newInvalidDocument(s))}),b.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=jt();const a=e.path,c=new M(a.child("")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:f,value:{document:m}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||qh(Uh(m),r)<=0||(s.has(m.key)||wr(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return b.resolve(o)}getAllFromCollectionGroup(t,e,r,s){O()}Or(t,e){return b.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new rf(this)}getSize(t){return b.resolve(this.size)}}class rf extends Qd{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.cr.addEntry(t,s)):this.cr.removeEntry(r)}),b.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
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
 */class sf{constructor(t){this.persistence=t,this.Nr=new Ue(e=>Gs(e),Ks),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Js,this.targetCount=0,this.kr=Me.Bn()}forEachTarget(t,e){return this.Nr.forEach((r,s)=>e(s)),b.resolve()}getLastRemoteSnapshotVersion(t){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return b.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Lr&&(this.Lr=e),b.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new Me(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,b.resolve()}updateTargetData(t,e){return this.Kn(e),b.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,b.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),b.waitFor(o).next(()=>s)}getTargetCount(t){return b.resolve(this.targetCount)}getTargetData(t,e){const r=this.Nr.get(e)||null;return b.resolve(r)}addMatchingKeys(t,e,r){return this.Br.Rr(e,r),b.resolve()}removeMatchingKeys(t,e,r){this.Br.mr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),b.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),b.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Br.yr(e);return b.resolve(r)}containsKey(t,e){return b.resolve(this.Br.containsKey(e))}}/**
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
 */class of{constructor(t,e){this.qr={},this.overlays={},this.Qr=new qs(0),this.Kr=!1,this.Kr=!0,this.$r=new tf,this.referenceDelegate=t(this),this.Ur=new sf(this),this.indexManager=new Hd,this.remoteDocumentCache=function(s){return new nf(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Gd(e),this.Gr=new Jd(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Zd,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.qr[t.toKey()];return r||(r=new ef(e,this.referenceDelegate),this.qr[t.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,r){L("MemoryPersistence","Starting transaction:",t);const s=new af(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(o=>this.referenceDelegate.jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Hr(t,e){return b.or(Object.values(this.qr).map(r=>()=>r.containsKey(t,e)))}}class af extends jh{constructor(t){super(),this.currentSequenceNumber=t}}class Zs{constructor(t){this.persistence=t,this.Jr=new Js,this.Yr=null}static Zr(t){return new Zs(t)}get Xr(){if(this.Yr)return this.Yr;throw O()}addReference(t,e,r){return this.Jr.addReference(r,e),this.Xr.delete(r.toString()),b.resolve()}removeReference(t,e,r){return this.Jr.removeReference(r,e),this.Xr.add(r.toString()),b.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),b.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Xr,r=>{const s=M.fromPath(r);return this.ei(t,s).next(o=>{o||e.removeEntry(s,F.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(r=>{r?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return b.or([()=>b.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
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
 */class uf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class cf{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return dl()?8:zh(ll())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.Yi(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new uf;return this.Xi(t,e,a).next(c=>{if(o.result=c,this.zi)return this.es(t,e,a,c.size)})}).next(()=>o.result)}es(t,e,r,s){return r.documentReadCount<this.ji?(on()<=z.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",Ae(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),b.resolve()):(on()<=z.DEBUG&&L("QueryEngine","Query:",Ae(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(on()<=z.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",Ae(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Nt(e))):b.resolve())}Yi(t,e){if(Yo(e))return b.resolve(null);let r=Nt(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Ps(e,null,"F"),r=Nt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=U(...o);return this.Ji.getDocuments(t,a).next(c=>this.indexManager.getMinOffset(t,r).next(h=>{const f=this.ts(e,c);return this.ns(e,f,a,h.readTime)?this.Yi(t,Ps(e,null,"F")):this.rs(t,f,e,h)}))})))}Zi(t,e,r,s){return Yo(e)||s.isEqual(F.min())?b.resolve(null):this.Ji.getDocuments(t,r).next(o=>{const a=this.ts(e,o);return this.ns(e,a,r,s)?b.resolve(null):(on()<=z.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ae(e)),this.rs(t,a,e,Bh(s,-1)).next(c=>c))})}ts(t,e){let r=new mt(su(t));return e.forEach((s,o)=>{wr(t,o)&&(r=r.add(o))}),r}ns(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Xi(t,e,r){return on()<=z.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",Ae(e)),this.Ji.getDocumentsMatchingQuery(t,e,Zt.min(),r)}rs(t,e,r,s){return this.Ji.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */class lf{constructor(t,e,r,s){this.persistence=t,this.ss=e,this.serializer=s,this.os=new tt(H),this._s=new Ue(o=>Gs(o),Ks),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(r)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Xd(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function hf(n,t,e,r){return new lf(n,t,e,r)}async function bu(n,t){const e=B(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.ls(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],c=[];let h=U();for(const f of s){a.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}for(const f of o){c.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(r,h).next(f=>({hs:f,removedBatchIds:a,addedBatchIds:c}))})})}function df(n,t){const e=B(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.cs.newChangeBuffer({trackRemovals:!0});return function(c,h,f,m){const E=f.batch,A=E.keys();let S=b.resolve();return A.forEach(V=>{S=S.next(()=>m.getEntry(h,V)).next(N=>{const D=f.docVersions.get(V);G(D!==null),N.version.compareTo(D)<0&&(E.applyToRemoteDocument(N,f),N.isValidDocument()&&(N.setReadTime(f.commitVersion),m.addEntry(N)))})}),S.next(()=>c.mutationQueue.removeMutationBatch(h,E))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let h=U();for(let f=0;f<c.mutationResults.length;++f)c.mutationResults[f].transformResults.length>0&&(h=h.add(c.batch.mutations[f].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function Vu(n){const t=B(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function ff(n,t){const e=B(n),r=t.snapshotVersion;let s=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});s=e.os;const c=[];t.targetChanges.forEach((m,E)=>{const A=s.get(E);if(!A)return;c.push(e.Ur.removeMatchingKeys(o,m.removedDocuments,E).next(()=>e.Ur.addMatchingKeys(o,m.addedDocuments,E)));let S=A.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(E)!==null?S=S.withResumeToken(pt.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):m.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(m.resumeToken,r)),s=s.insert(E,S),function(N,D,$){return N.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(A,S,m)&&c.push(e.Ur.updateTargetData(o,S))});let h=jt(),f=U();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),c.push(mf(o,a,t.documentUpdates).next(m=>{h=m.Ps,f=m.Is})),!r.isEqual(F.min())){const m=e.Ur.getLastRemoteSnapshotVersion(o).next(E=>e.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(m)}return b.waitFor(c).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.os=s,o))}function mf(n,t,e){let r=U(),s=U();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=jt();return e.forEach((c,h)=>{const f=o.get(c);h.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(c)),h.isNoDocument()&&h.version.isEqual(F.min())?(t.removeEntry(c,h.readTime),a=a.insert(c,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),a=a.insert(c,h)):L("LocalStore","Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",h.version)}),{Ps:a,Is:s}})}function pf(n,t){const e=B(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function gf(n,t){const e=B(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Ur.getTargetData(r,t).next(o=>o?(s=o,b.resolve(s)):e.Ur.allocateTargetId(r).next(a=>(s=new Qt(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.os=e.os.insert(r.targetId,r),e._s.set(t,r.targetId)),r})}async function Ds(n,t,e){const r=B(n),s=r.os.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Sn(a))throw a;L("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.os=r.os.remove(t),r._s.delete(s.target)}function aa(n,t,e){const r=B(n);let s=F.min(),o=U();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,f,m){const E=B(h),A=E._s.get(m);return A!==void 0?b.resolve(E.os.get(A)):E.Ur.getTargetData(f,m)}(r,a,Nt(t)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,c.targetId).next(h=>{o=h})}).next(()=>r.ss.getDocumentsMatchingQuery(a,t,e?s:F.min(),e?o:U())).next(c=>(_f(r,ud(t),c),{documents:c,Ts:o})))}function _f(n,t,e){let r=n.us.get(t)||F.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.us.set(t,r)}class ua{constructor(){this.activeTargetIds=md()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class yf{constructor(){this.so=new ua,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,r){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new ua,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Ef{_o(t){}shutdown(){}}/**
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
 */class ca{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const vf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Tf{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
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
 */const vt="WebChannelConnection";class If extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+e.host,this.vo=`projects/${s}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Fo(){return!1}Mo(e,r,s,o,a){const c=ls(),h=this.xo(e,r.toUriEncodedString());L("RestConnection",`Sending RPC '${e}' ${c}:`,h,s);const f={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(f,o,a),this.No(e,h,f,s).then(m=>(L("RestConnection",`Received RPC '${e}' ${c}: `,m),m),m=>{throw De("RestConnection",`RPC '${e}' ${c} failed with error: `,m,"url: ",h,"request:",s),m})}Lo(e,r,s,o,a,c){return this.Mo(e,r,s,o,a)}Oo(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Fe}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>e[a]=o),s&&s.headers.forEach((o,a)=>e[a]=o)}xo(e,r){const s=vf[e];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,r,s){const o=ls();return new Promise((a,c)=>{const h=new Ua;h.setWithCredentials(!0),h.listenOnce(qa.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case sr.NO_ERROR:const m=h.getResponseJson();L(vt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(m)),a(m);break;case sr.TIMEOUT:L(vt,`RPC '${t}' ${o} timed out`),c(new k(P.DEADLINE_EXCEEDED,"Request time out"));break;case sr.HTTP_ERROR:const E=h.getStatus();if(L(vt,`RPC '${t}' ${o} failed with status:`,E,"response text:",h.getResponseText()),E>0){let A=h.getResponseJson();Array.isArray(A)&&(A=A[0]);const S=A==null?void 0:A.error;if(S&&S.status&&S.message){const V=function(D){const $=D.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf($)>=0?$:P.UNKNOWN}(S.status);c(new k(V,S.message))}else c(new k(P.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new k(P.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{L(vt,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(s);L(vt,`RPC '${t}' ${o} sending request:`,s),h.send(e,"POST",f,r,15)})}Bo(t,e,r){const s=ls(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=za(),c=ja(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Oo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const m=o.join("");L(vt,`Creating RPC '${t}' stream ${s}: ${m}`,h);const E=a.createWebChannel(m,h);let A=!1,S=!1;const V=new Tf({Io:D=>{S?L(vt,`Not sending because RPC '${t}' stream ${s} is closed:`,D):(A||(L(vt,`Opening RPC '${t}' stream ${s} transport.`),E.open(),A=!0),L(vt,`RPC '${t}' stream ${s} sending:`,D),E.send(D))},To:()=>E.close()}),N=(D,$,W)=>{D.listen($,q=>{try{W(q)}catch(X){setTimeout(()=>{throw X},0)}})};return N(E,an.EventType.OPEN,()=>{S||(L(vt,`RPC '${t}' stream ${s} transport opened.`),V.yo())}),N(E,an.EventType.CLOSE,()=>{S||(S=!0,L(vt,`RPC '${t}' stream ${s} transport closed`),V.So())}),N(E,an.EventType.ERROR,D=>{S||(S=!0,De(vt,`RPC '${t}' stream ${s} transport errored:`,D),V.So(new k(P.UNAVAILABLE,"The operation could not be completed")))}),N(E,an.EventType.MESSAGE,D=>{var $;if(!S){const W=D.data[0];G(!!W);const q=W,X=q.error||(($=q[0])===null||$===void 0?void 0:$.error);if(X){L(vt,`RPC '${t}' stream ${s} received error:`,X);const xt=X.status;let ct=function(_){const y=st[_];if(y!==void 0)return _u(y)}(xt),T=X.message;ct===void 0&&(ct=P.INTERNAL,T="Unknown error status: "+xt+" with message "+X.message),S=!0,V.So(new k(ct,T)),E.close()}else L(vt,`RPC '${t}' stream ${s} received:`,W),V.bo(W)}}),N(c,$a.STAT_EVENT,D=>{D.stat===Ts.PROXY?L(vt,`RPC '${t}' stream ${s} detected buffering proxy`):D.stat===Ts.NOPROXY&&L(vt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{V.wo()},0),V}}function hs(){return typeof document<"u"?document:null}/**
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
 */function br(n){return new Dd(n,!0)}/**
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
 */class ei{constructor(t,e,r=1e3,s=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=r,this.qo=s,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,e-r);s>0&&L("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Cu{constructor(t,e,r,s,o,a,c,h){this.ui=t,this.Ho=r,this.Jo=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new ei(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?($t(e.toString()),$t("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===e&&this.P_(r,s)},r=>{t(()=>{const s=new k(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(t,e){const r=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return L("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wf extends Cu{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=Md(this.serializer,t),r=function(o){if(!("targetChange"in o))return F.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?F.min():a.readTime?bt(a.readTime):F.min()}(t);return this.listener.d_(e,r)}A_(t){const e={};e.database=Cs(this.serializer),e.addTarget=function(o,a){let c;const h=a.target;if(c=Rs(h)?{documents:Od(o,h)}:{query:Fd(o,h)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=vu(o,a.resumeToken);const f=bs(o,a.expectedCount);f!==null&&(c.expectedCount=f)}else if(a.snapshotVersion.compareTo(F.min())>0){c.readTime=gr(o,a.snapshotVersion.toTimestamp());const f=bs(o,a.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,t);const r=Ud(this.serializer,t);r&&(e.labels=r),this.a_(e)}R_(t){const e={};e.database=Cs(this.serializer),e.removeTarget=t,this.a_(e)}}class Af extends Cu{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return G(!!t.streamToken),this.lastStreamToken=t.streamToken,G(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){G(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=xd(t.writeResults,t.commitTime),r=bt(t.commitTime);return this.listener.g_(r,e)}p_(){const t={};t.database=Cs(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Au(this.serializer,r))};this.a_(e)}}/**
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
 */class Rf extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new k(P.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(t,Vs(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new k(P.UNKNOWN,o.toString())})}Lo(t,e,r,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(t,Vs(e,r),s,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new k(P.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Sf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
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
 */class Pf{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{r.enqueueAndForget(async()=>{ye(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(h){const f=B(h);f.L_.add(4),await Cn(f),f.q_.set("Unknown"),f.L_.delete(4),await Vr(f)}(this))})}),this.q_=new Sf(r,s)}}async function Vr(n){if(ye(n))for(const t of n.B_)await t(!0)}async function Cn(n){for(const t of n.B_)await t(!1)}function Du(n,t){const e=B(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),ii(e)?si(e):qe(e).r_()&&ri(e,t))}function ni(n,t){const e=B(n),r=qe(e);e.N_.delete(t),r.r_()&&ku(e,t),e.N_.size===0&&(r.r_()?r.o_():ye(e)&&e.q_.set("Unknown"))}function ri(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(F.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}qe(n).A_(t)}function ku(n,t){n.Q_.xe(t),qe(n).R_(t)}function si(n){n.Q_=new Pd({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),qe(n).start(),n.q_.v_()}function ii(n){return ye(n)&&!qe(n).n_()&&n.N_.size>0}function ye(n){return B(n).L_.size===0}function Nu(n){n.Q_=void 0}async function bf(n){n.q_.set("Online")}async function Vf(n){n.N_.forEach((t,e)=>{ri(n,t)})}async function Cf(n,t){Nu(n),ii(n)?(n.q_.M_(t),si(n)):n.q_.set("Unknown")}async function Df(n,t,e){if(n.q_.set("Online"),t instanceof Eu&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const c of o.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.N_.delete(c),s.Q_.removeTarget(c))}(n,t)}catch(r){L("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await yr(n,r)}else if(t instanceof ar?n.Q_.Ke(t):t instanceof yu?n.Q_.He(t):n.Q_.We(t),!e.isEqual(F.min()))try{const r=await Vu(n.localStore);e.compareTo(r)>=0&&await function(o,a){const c=o.Q_.rt(a);return c.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.N_.get(f);m&&o.N_.set(f,m.withResumeToken(h.resumeToken,a))}}),c.targetMismatches.forEach((h,f)=>{const m=o.N_.get(h);if(!m)return;o.N_.set(h,m.withResumeToken(pt.EMPTY_BYTE_STRING,m.snapshotVersion)),ku(o,h);const E=new Qt(m.target,h,f,m.sequenceNumber);ri(o,E)}),o.remoteSyncer.applyRemoteEvent(c)}(n,e)}catch(r){L("RemoteStore","Failed to raise snapshot:",r),await yr(n,r)}}async function yr(n,t,e){if(!Sn(t))throw t;n.L_.add(1),await Cn(n),n.q_.set("Offline"),e||(e=()=>Vu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await Vr(n)})}function Lu(n,t){return t().catch(e=>yr(n,e,t))}async function Cr(n){const t=B(n),e=ee(t);let r=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;kf(t);)try{const s=await pf(t.localStore,r);if(s===null){t.O_.length===0&&e.o_();break}r=s.batchId,Nf(t,s)}catch(s){await yr(t,s)}Mu(t)&&xu(t)}function kf(n){return ye(n)&&n.O_.length<10}function Nf(n,t){n.O_.push(t);const e=ee(n);e.r_()&&e.V_&&e.m_(t.mutations)}function Mu(n){return ye(n)&&!ee(n).n_()&&n.O_.length>0}function xu(n){ee(n).start()}async function Lf(n){ee(n).p_()}async function Mf(n){const t=ee(n);for(const e of n.O_)t.m_(e.mutations)}async function xf(n,t,e){const r=n.O_.shift(),s=Qs.from(r,t,e);await Lu(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Cr(n)}async function Of(n,t){t&&ee(n).V_&&await async function(r,s){if(function(a){return gu(a)&&a!==P.ABORTED}(s.code)){const o=r.O_.shift();ee(r).s_(),await Lu(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Cr(r)}}(n,t),Mu(n)&&xu(n)}async function la(n,t){const e=B(n);e.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const r=ye(e);e.L_.add(3),await Cn(e),r&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await Vr(e)}async function Ff(n,t){const e=B(n);t?(e.L_.delete(2),await Vr(e)):t||(e.L_.add(2),await Cn(e),e.q_.set("Unknown"))}function qe(n){return n.K_||(n.K_=function(e,r,s){const o=B(e);return o.w_(),new wf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:bf.bind(null,n),Ro:Vf.bind(null,n),mo:Cf.bind(null,n),d_:Df.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),ii(n)?si(n):n.q_.set("Unknown")):(await n.K_.stop(),Nu(n))})),n.K_}function ee(n){return n.U_||(n.U_=function(e,r,s){const o=B(e);return o.w_(),new Af(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Lf.bind(null,n),mo:Of.bind(null,n),f_:Mf.bind(null,n),g_:xf.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await Cr(n)):(await n.U_.stop(),n.O_.length>0&&(L("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class oi{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Ut,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,c=new oi(t,e,a,s,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ai(n,t){if($t("AsyncQueue",`${t}: ${n}`),Sn(n))return new k(P.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class Ve{constructor(t){this.comparator=t?(e,r)=>t(e,r)||M.comparator(e.key,r.key):(e,r)=>M.comparator(e.key,r.key),this.keyedMap=un(),this.sortedSet=new tt(this.comparator)}static emptySet(t){return new Ve(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ve)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
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
 */class ha{constructor(){this.W_=new tt(M.comparator)}track(t){const e=t.doc.key,r=this.W_.get(e);r?t.type!==0&&r.type===3?this.W_=this.W_.insert(e,t):t.type===3&&r.type!==1?this.W_=this.W_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.W_=this.W_.remove(e):t.type===1&&r.type===2?this.W_=this.W_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):O():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,r)=>{t.push(r)}),t}}class xe{constructor(t,e,r,s,o,a,c,h,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(c=>{a.push({type:0,doc:c})}),new xe(t,e,Ve.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ir(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Bf{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class Uf{constructor(){this.queries=da(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,r){const s=B(e),o=s.queries;s.queries=da(),o.forEach((a,c)=>{for(const h of c.j_)h.onError(r)})})(this,new k(P.ABORTED,"Firestore shutting down"))}}function da(){return new Ue(n=>ru(n),Ir)}async function Ou(n,t){const e=B(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.H_()&&t.J_()&&(r=2):(o=new Bf,r=t.J_()?0:1);try{switch(r){case 0:o.z_=await e.onListen(s,!0);break;case 1:o.z_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const c=ai(a,`Initialization of query '${Ae(t.query)}' failed`);return void t.onError(c)}e.queries.set(s,o),o.j_.push(t),t.Z_(e.onlineState),o.z_&&t.X_(o.z_)&&ui(e)}async function Fu(n,t){const e=B(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.j_.indexOf(t);a>=0&&(o.j_.splice(a,1),o.j_.length===0?s=t.J_()?0:1:!o.H_()&&t.J_()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function qf(n,t){const e=B(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const c of a.j_)c.X_(s)&&(r=!0);a.z_=s}}r&&ui(e)}function $f(n,t,e){const r=B(n),s=r.queries.get(t);if(s)for(const o of s.j_)o.onError(e);r.queries.delete(t)}function ui(n){n.Y_.forEach(t=>{t.next()})}var ks,fa;(fa=ks||(ks={})).ea="default",fa.Cache="cache";class Bu{constructor(t,e,r){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new xe(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const r=e!=="Offline";return(!this.options._a||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=xe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==ks.Cache}}/**
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
 */class Uu{constructor(t){this.key=t}}class qu{constructor(t){this.key=t}}class jf{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=U(),this.mutatedKeys=U(),this.Aa=su(t),this.Ra=new Ve(this.Aa)}get Va(){return this.Ta}ma(t,e){const r=e?e.fa:new ha,s=e?e.Ra:this.Ra;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,c=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((m,E)=>{const A=s.get(m),S=wr(this.query,E)?E:null,V=!!A&&this.mutatedKeys.has(A.key),N=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let D=!1;A&&S?A.data.isEqual(S.data)?V!==N&&(r.track({type:3,doc:S}),D=!0):this.ga(A,S)||(r.track({type:2,doc:S}),D=!0,(h&&this.Aa(S,h)>0||f&&this.Aa(S,f)<0)&&(c=!0)):!A&&S?(r.track({type:0,doc:S}),D=!0):A&&!S&&(r.track({type:1,doc:A}),D=!0,(h||f)&&(c=!0)),D&&(S?(a=a.add(S),o=N?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{Ra:a,fa:r,ns:c,mutatedKeys:o}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((m,E)=>function(S,V){const N=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return N(S)-N(V)}(m.type,E.type)||this.Aa(m.doc,E.doc)),this.pa(r),s=s!=null&&s;const c=e&&!s?this.ya():[],h=this.da.size===0&&this.current&&!s?1:0,f=h!==this.Ea;return this.Ea=h,a.length!==0||f?{snapshot:new xe(this.query,t.Ra,o,a,t.mutatedKeys,h===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new ha,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=U(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const e=[];return t.forEach(r=>{this.da.has(r)||e.push(new qu(r))}),this.da.forEach(r=>{t.has(r)||e.push(new Uu(r))}),e}ba(t){this.Ta=t.Ts,this.da=U();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return xe.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class zf{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Gf{constructor(t){this.key=t,this.va=!1}}class Kf{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Ue(c=>ru(c),Ir),this.Ma=new Map,this.xa=new Set,this.Oa=new tt(M.comparator),this.Na=new Map,this.La=new Js,this.Ba={},this.ka=new Map,this.qa=Me.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Hf(n,t,e=!0){const r=Hu(n);let s;const o=r.Fa.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Da()):s=await $u(r,t,e,!0),s}async function Wf(n,t){const e=Hu(n);await $u(e,t,!0,!1)}async function $u(n,t,e,r){const s=await gf(n.localStore,Nt(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let c;return r&&(c=await Qf(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&Du(n.remoteStore,s),c}async function Qf(n,t,e,r,s){n.Ka=(E,A,S)=>async function(N,D,$,W){let q=D.view.ma($);q.ns&&(q=await aa(N.localStore,D.query,!1).then(({documents:T})=>D.view.ma(T,q)));const X=W&&W.targetChanges.get(D.targetId),xt=W&&W.targetMismatches.get(D.targetId)!=null,ct=D.view.applyChanges(q,N.isPrimaryClient,X,xt);return pa(N,D.targetId,ct.wa),ct.snapshot}(n,E,A,S);const o=await aa(n.localStore,t,!0),a=new jf(t,o.Ts),c=a.ma(o.documents),h=Vn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),f=a.applyChanges(c,n.isPrimaryClient,h);pa(n,e,f.wa);const m=new zf(t,e,a);return n.Fa.set(t,m),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),f.snapshot}async function Yf(n,t,e){const r=B(n),s=r.Fa.get(t),o=r.Ma.get(s.targetId);if(o.length>1)return r.Ma.set(s.targetId,o.filter(a=>!Ir(a,t))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ds(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&ni(r.remoteStore,s.targetId),Ns(r,s.targetId)}).catch(Rn)):(Ns(r,s.targetId),await Ds(r.localStore,s.targetId,!0))}async function Xf(n,t){const e=B(n),r=e.Fa.get(t),s=e.Ma.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),ni(e.remoteStore,r.targetId))}async function Jf(n,t,e){const r=im(n);try{const s=await function(a,c){const h=B(a),f=ot.now(),m=c.reduce((S,V)=>S.add(V.key),U());let E,A;return h.persistence.runTransaction("Locally write mutations","readwrite",S=>{let V=jt(),N=U();return h.cs.getEntries(S,m).next(D=>{V=D,V.forEach(($,W)=>{W.isValidDocument()||(N=N.add($))})}).next(()=>h.localDocuments.getOverlayedDocuments(S,V)).next(D=>{E=D;const $=[];for(const W of c){const q=Td(W,E.get(W.key).overlayedDocument);q!=null&&$.push(new ne(W.key,q,Qa(q.value.mapValue),ft.exists(!0)))}return h.mutationQueue.addMutationBatch(S,f,$,c)}).next(D=>{A=D;const $=D.applyToLocalDocumentSet(E,N);return h.documentOverlayCache.saveOverlays(S,D.batchId,$)})}).then(()=>({batchId:A.batchId,changes:ou(E)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,h){let f=a.Ba[a.currentUser.toKey()];f||(f=new tt(H)),f=f.insert(c,h),a.Ba[a.currentUser.toKey()]=f}(r,s.batchId,e),await Dn(r,s.changes),await Cr(r.remoteStore)}catch(s){const o=ai(s,"Failed to persist write");e.reject(o)}}async function ju(n,t){const e=B(n);try{const r=await ff(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Na.get(o);a&&(G(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?G(a.va):s.removedDocuments.size>0&&(G(a.va),a.va=!1))}),await Dn(e,r,t)}catch(r){await Rn(r)}}function ma(n,t,e){const r=B(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Fa.forEach((o,a)=>{const c=a.view.Z_(t);c.snapshot&&s.push(c.snapshot)}),function(a,c){const h=B(a);h.onlineState=c;let f=!1;h.queries.forEach((m,E)=>{for(const A of E.j_)A.Z_(c)&&(f=!0)}),f&&ui(h)}(r.eventManager,t),s.length&&r.Ca.d_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Zf(n,t,e){const r=B(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Na.get(t),o=s&&s.key;if(o){let a=new tt(M.comparator);a=a.insert(o,ut.newNoDocument(o,F.min()));const c=U().add(o),h=new Pr(F.min(),new Map,new tt(H),a,c);await ju(r,h),r.Oa=r.Oa.remove(o),r.Na.delete(t),ci(r)}else await Ds(r.localStore,t,!1).then(()=>Ns(r,t,e)).catch(Rn)}async function tm(n,t){const e=B(n),r=t.batch.batchId;try{const s=await df(e.localStore,t);Gu(e,r,null),zu(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Dn(e,s)}catch(s){await Rn(s)}}async function em(n,t,e){const r=B(n);try{const s=await function(a,c){const h=B(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let m;return h.mutationQueue.lookupMutationBatch(f,c).next(E=>(G(E!==null),m=E.keys(),h.mutationQueue.removeMutationBatch(f,E))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,m,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,m)).next(()=>h.localDocuments.getDocuments(f,m))})}(r.localStore,t);Gu(r,t,e),zu(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Dn(r,s)}catch(s){await Rn(s)}}function zu(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function Gu(n,t,e){const r=B(n);let s=r.Ba[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Ba[r.currentUser.toKey()]=s}}function Ns(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Ma.get(t))n.Fa.delete(r),e&&n.Ca.$a(r,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(r=>{n.La.containsKey(r)||Ku(n,r)})}function Ku(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(ni(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),ci(n))}function pa(n,t,e){for(const r of e)r instanceof Uu?(n.La.addReference(r.key,t),nm(n,r)):r instanceof qu?(L("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,t),n.La.containsKey(r.key)||Ku(n,r.key)):O()}function nm(n,t){const e=t.key,r=e.path.canonicalString();n.Oa.get(e)||n.xa.has(r)||(L("SyncEngine","New document in limbo: "+e),n.xa.add(r),ci(n))}function ci(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new M(Y.fromString(t)),r=n.qa.next();n.Na.set(r,new Gf(e)),n.Oa=n.Oa.insert(e,r),Du(n.remoteStore,new Qt(Nt(Hs(e.path)),r,"TargetPurposeLimboResolution",qs.oe))}}async function Dn(n,t,e){const r=B(n),s=[],o=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((c,h)=>{a.push(r.Ka(h,t,e).then(f=>{var m;if((f||e)&&r.isPrimaryClient){const E=f?!f.fromCache:(m=e==null?void 0:e.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,E?"current":"not-current")}if(f){s.push(f);const E=ti.Wi(h.targetId,f);o.push(E)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(h,f){const m=B(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>b.forEach(f,A=>b.forEach(A.$i,S=>m.persistence.referenceDelegate.addReference(E,A.targetId,S)).next(()=>b.forEach(A.Ui,S=>m.persistence.referenceDelegate.removeReference(E,A.targetId,S)))))}catch(E){if(!Sn(E))throw E;L("LocalStore","Failed to update sequence numbers: "+E)}for(const E of f){const A=E.targetId;if(!E.fromCache){const S=m.os.get(A),V=S.snapshotVersion,N=S.withLastLimboFreeSnapshotVersion(V);m.os=m.os.insert(A,N)}}}(r.localStore,o))}async function rm(n,t){const e=B(n);if(!e.currentUser.isEqual(t)){L("SyncEngine","User change. New user:",t.toKey());const r=await bu(e.localStore,t);e.currentUser=t,function(o,a){o.ka.forEach(c=>{c.forEach(h=>{h.reject(new k(P.CANCELLED,a))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Dn(e,r.hs)}}function sm(n,t){const e=B(n),r=e.Na.get(t);if(r&&r.va)return U().add(r.key);{let s=U();const o=e.Ma.get(t);if(!o)return s;for(const a of o){const c=e.Fa.get(a);s=s.unionWith(c.view.Va)}return s}}function Hu(n){const t=B(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=ju.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=sm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Zf.bind(null,t),t.Ca.d_=qf.bind(null,t.eventManager),t.Ca.$a=$f.bind(null,t.eventManager),t}function im(n){const t=B(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=tm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=em.bind(null,t),t}class Er{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=br(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return hf(this.persistence,new cf,t.initialUser,this.serializer)}Ga(t){return new of(Zs.Zr,this.serializer)}Wa(t){return new yf}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Er.provider={build:()=>new Er};class Ls{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ma(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=rm.bind(null,this.syncEngine),await Ff(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Uf}()}createDatastore(t){const e=br(t.databaseInfo.databaseId),r=function(o){return new If(o)}(t.databaseInfo);return function(o,a,c,h){return new Rf(o,a,c,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,c){return new Pf(r,s,o,a,c)}(this.localStore,this.datastore,t.asyncQueue,e=>ma(this.syncEngine,e,0),function(){return ca.D()?new ca:new Ef}())}createSyncEngine(t,e){return function(s,o,a,c,h,f,m){const E=new Kf(s,o,a,c,h,f);return m&&(E.Qa=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=B(s);L("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Cn(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Ls.provider={build:()=>new Ls};/**
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
 */class om{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new k(P.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const e=await async function(s,o){const a=B(s),c={documents:o.map(E=>_r(a.serializer,E))},h=await a.Lo("BatchGetDocuments",a.serializer.databaseId,Y.emptyPath(),c,o.length),f=new Map;h.forEach(E=>{const A=Ld(a.serializer,E);f.set(A.key.toString(),A)});const m=[];return o.forEach(E=>{const A=f.get(E.toString());G(!!A),m.push(A)}),m}(this.datastore,t);return e.forEach(r=>this.recordVersion(r)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(t.toString())}delete(t){this.write(new Sr(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((e,r)=>{const s=M.fromPath(r);this.mutations.push(new pu(s,this.precondition(s)))}),await async function(r,s){const o=B(r),a={writes:s.map(c=>Au(o.serializer,c))};await o.Mo("Commit",o.serializer.databaseId,Y.emptyPath(),a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw O();e=F.min()}const r=this.readVersions.get(t.key.toString());if(r){if(!e.isEqual(r))throw new k(P.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(F.min())?ft.exists(!1):ft.updateTime(e):ft.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(F.min()))throw new k(P.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ft.updateTime(e)}return ft.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}/**
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
 */class am{constructor(t,e,r,s,o){this.asyncQueue=t,this.datastore=e,this.options=r,this.updateFunction=s,this.deferred=o,this._u=r.maxAttempts,this.t_=new ei(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const t=new om(this.datastore),e=this.cu(t);e&&e.then(r=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.lu(s)}))}).catch(r=>{this.lu(r)})})}cu(t){try{const e=this.updateFunction(t);return!Pn(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}lu(t){this._u>0&&this.hu(t)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(t)}hu(t){if(t.name==="FirebaseError"){const e=t.code;return e==="aborted"||e==="failed-precondition"||e==="already-exists"||!gu(e)}return!1}}/**
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
 */class um{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=Tt.UNAUTHENTICATED,this.clientId=Ka.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{L("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(L("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ut;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=ai(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function ds(n,t){n.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await bu(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function ga(n,t){n.asyncQueue.verifyOperationInProgress();const e=await cm(n);L("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>la(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>la(t.remoteStore,s)),n._onlineComponents=t}async function cm(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){L("FirestoreClient","Using user provided OfflineComponentProvider");try{await ds(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;De("Error using user provided cache. Falling back to memory cache: "+e),await ds(n,new Er)}}else L("FirestoreClient","Using default OfflineComponentProvider"),await ds(n,new Er);return n._offlineComponents}async function li(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(L("FirestoreClient","Using user provided OnlineComponentProvider"),await ga(n,n._uninitializedComponentsProvider._online)):(L("FirestoreClient","Using default OnlineComponentProvider"),await ga(n,new Ls))),n._onlineComponents}function lm(n){return li(n).then(t=>t.syncEngine)}function hm(n){return li(n).then(t=>t.datastore)}async function Ms(n){const t=await li(n),e=t.eventManager;return e.onListen=Hf.bind(null,t.syncEngine),e.onUnlisten=Yf.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Wf.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Xf.bind(null,t.syncEngine),e}function dm(n,t,e={}){const r=new Ut;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,f){const m=new Wu({next:A=>{m.Za(),a.enqueueAndForget(()=>Fu(o,E)),A.fromCache&&h.source==="server"?f.reject(new k(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(A)},error:A=>f.reject(A)}),E=new Bu(c,m,{includeMetadataChanges:!0,_a:!0});return Ou(o,E)}(await Ms(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function Yu(n,t,e){if(!e)throw new k(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function fm(n,t,e,r){if(t===!0&&r===!0)throw new k(P.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function ya(n){if(!M.isDocumentKey(n))throw new k(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ea(n){if(M.isDocumentKey(n))throw new k(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Dr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":O()}function Lt(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new k(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Dr(n);throw new k(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class va{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new k(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new k(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}fm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Qu((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new k(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new k(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new k(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class kr{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new va({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new k(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new k(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new va(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ch;switch(r.type){case"firstParty":return new Lh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new k(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=_a.get(e);r&&(L("ComponentProvider","Removing Datastore"),_a.delete(e),r.terminate())}(this),Promise.resolve()}}function mm(n,t,e,r={}){var s;const o=(n=Lt(n,kr))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&De("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let c,h;if(typeof r.mockUserToken=="string")c=r.mockUserToken,h=Tt.MOCK_USER;else{c=cl(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new k(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new Tt(f)}n._authCredentials=new Dh(new Ga(c,h))}}/**
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
 */class re{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new re(this.firestore,t,this._query)}}class Rt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Rt(this.firestore,t,this._key)}}class Jt extends re{constructor(t,e,r){super(t,e,Hs(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Rt(this.firestore,null,new M(t))}withConverter(t){return new Jt(this.firestore,t,this._path)}}function Ce(n,t,...e){if(n=Ct(n),Yu("collection","path",t),n instanceof kr){const r=Y.fromString(t,...e);return Ea(r),new Jt(n,null,r)}{if(!(n instanceof Rt||n instanceof Jt))throw new k(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(t,...e));return Ea(r),new Jt(n.firestore,null,r)}}function Vt(n,t,...e){if(n=Ct(n),arguments.length===1&&(t=Ka.newId()),Yu("doc","path",t),n instanceof kr){const r=Y.fromString(t,...e);return ya(r),new Rt(n,null,new M(r))}{if(!(n instanceof Rt||n instanceof Jt))throw new k(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(t,...e));return ya(r),new Rt(n.firestore,n instanceof Jt?n.converter:null,new M(r))}}/**
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
 */class Ta{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new ei(this,"async_queue_retry"),this.Vu=()=>{const r=hs();r&&L("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const e=hs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=hs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new Ut;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!Sn(t))throw t;L("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw $t("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=e,e}enqueueAfterDelay(t,e,r){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const s=oi.createAndSchedule(this,t,e,r,o=>this.yu(o));return this.Tu.push(s),s}fu(){this.Eu&&O()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}function Ia(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const s=e;for(const o of r)if(o in s&&typeof s[o]=="function")return!0;return!1}(n,["next","error","complete"])}class pe extends kr{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Ta,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ta(t),this._firestoreClient=void 0,await t}}}function pm(n,t){const e=typeof n=="object"?n:yh(),r=typeof n=="string"?n:"(default)",s=mh(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=al("firestore");o&&mm(s,...o)}return s}function kn(n){if(n._terminated)throw new k(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||gm(n),n._firestoreClient}function gm(n){var t,e,r;const s=n._freezeSettings(),o=function(c,h,f,m){return new Hh(c,h,f,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Qu(m.experimentalLongPollingOptions),m.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new um(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(n._componentsProvider))}/**
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
 */class ge{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ge(pt.fromBase64String(t))}catch(e){throw new k(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new ge(pt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Nn{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new k(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class di{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new k(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new k(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return H(this._lat,t._lat)||H(this._long,t._long)}}/**
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
 */const _m=/^__.*__$/;class ym{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new ne(t,this.data,this.fieldMask,e,this.fieldTransforms):new bn(t,this.data,e,this.fieldTransforms)}}class Xu{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new ne(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Ju(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}class mi{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new mi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:r,xu:!1});return s.Ou(t),s}Nu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return vr(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(Ju(this.Cu)&&_m.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class Em{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||br(t)}Qu(t,e,r,s=!1){return new mi({Cu:t,methodName:e,qu:r,path:dt.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Nr(n){const t=n._freezeSettings(),e=br(n._databaseId);return new Em(n._databaseId,!!t.ignoreUndefinedProperties,e)}function pi(n,t,e,r,s,o={}){const a=n.Qu(o.merge||o.mergeFields?2:0,t,e,s);gi("Data must be an object, but it was:",a,r);const c=ec(r,a);let h,f;if(o.merge)h=new Pt(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const E of o.mergeFields){const A=xs(t,E,e);if(!a.contains(A))throw new k(P.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);rc(m,A)||m.push(A)}h=new Pt(m),f=a.fieldTransforms.filter(E=>h.covers(E.field))}else h=null,f=a.fieldTransforms;return new ym(new At(c),h,f)}class Lr extends hi{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Lr}}function Zu(n,t,e,r){const s=n.Qu(1,t,e);gi("Data must be an object, but it was:",s,r);const o=[],a=At.empty();_e(r,(h,f)=>{const m=_i(t,h,e);f=Ct(f);const E=s.Nu(m);if(f instanceof Lr)o.push(m);else{const A=Ln(f,E);A!=null&&(o.push(m),a.set(m,A))}});const c=new Pt(o);return new Xu(a,c,s.fieldTransforms)}function tc(n,t,e,r,s,o){const a=n.Qu(1,t,e),c=[xs(t,r,e)],h=[s];if(o.length%2!=0)throw new k(P.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<o.length;A+=2)c.push(xs(t,o[A])),h.push(o[A+1]);const f=[],m=At.empty();for(let A=c.length-1;A>=0;--A)if(!rc(f,c[A])){const S=c[A];let V=h[A];V=Ct(V);const N=a.Nu(S);if(V instanceof Lr)f.push(S);else{const D=Ln(V,N);D!=null&&(f.push(S),m.set(S,D))}}const E=new Pt(f);return new Xu(m,E,a.fieldTransforms)}function vm(n,t,e,r=!1){return Ln(e,n.Qu(r?4:3,t))}function Ln(n,t){if(nc(n=Ct(n)))return gi("Unsupported field value:",t,n),ec(n,t);if(n instanceof hi)return function(r,s){if(!Ju(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const c of r){let h=Ln(c,s.Lu(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=Ct(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return pd(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=ot.fromDate(r);return{timestampValue:gr(s.serializer,o)}}if(r instanceof ot){const o=new ot(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:gr(s.serializer,o)}}if(r instanceof di)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ge)return{bytesValue:vu(s.serializer,r._byteString)};if(r instanceof Rt){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Xs(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof fi)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw c.Bu("VectorValues must only contain numeric values.");return Ws(c.serializer,h)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Dr(r)}`)}(n,t)}function ec(n,t){const e={};return Ha(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):_e(n,(r,s)=>{const o=Ln(s,t.Mu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function nc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ot||n instanceof di||n instanceof ge||n instanceof Rt||n instanceof hi||n instanceof fi)}function gi(n,t,e){if(!nc(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=Dr(e);throw r==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+r)}}function xs(n,t,e){if((t=Ct(t))instanceof Nn)return t._internalPath;if(typeof t=="string")return _i(n,t);throw vr("Field path arguments must be of type string or ",n,!1,void 0,e)}const Tm=new RegExp("[~\\*/\\[\\]]");function _i(n,t,e){if(t.search(Tm)>=0)throw vr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Nn(...t.split("."))._internalPath}catch{throw vr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function vr(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new k(P.INVALID_ARGUMENT,c+n+h)}function rc(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class Tr{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Im(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(yi("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Im extends Tr{data(){return super.data()}}function yi(n,t){return typeof t=="string"?_i(n,t):t instanceof Nn?t._internalPath:t._delegate._internalPath}/**
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
 */function sc(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new k(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ei{}class ic extends Ei{}function wm(n,t,...e){let r=[];t instanceof Ei&&r.push(t),r=r.concat(e),function(o){const a=o.filter(h=>h instanceof Ti).length,c=o.filter(h=>h instanceof vi).length;if(a>1||a>0&&c>0)throw new k(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class vi extends ic{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new vi(t,e,r)}_apply(t){const e=this._parse(t);return oc(t._query,e),new re(t.firestore,t.converter,Ss(t._query,e))}_parse(t){const e=Nr(t.firestore);return function(o,a,c,h,f,m,E){let A;if(f.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new k(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Aa(E,m);const S=[];for(const V of E)S.push(wa(h,o,V));A={arrayValue:{values:S}}}else A=wa(h,o,E)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Aa(E,m),A=vm(c,a,E,m==="in"||m==="not-in");return it.create(f,m,A)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class Ti extends Ei{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Ti(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:kt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,o){let a=s;const c=o.getFlattenedFilters();for(const h of c)oc(a,h),a=Ss(a,h)}(t._query,e),new re(t.firestore,t.converter,Ss(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ii extends ic{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Ii(t,e)}_apply(t){const e=function(s,o,a){if(s.startAt!==null)throw new k(P.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new k(P.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new In(o,a)}(t._query,this._field,this._direction);return new re(t.firestore,t.converter,function(s,o){const a=s.explicitOrderBy.concat([o]);return new Be(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,e))}}function Am(n,t="asc"){const e=t,r=yi("orderBy",n);return Ii._create(r,e)}function wa(n,t,e){if(typeof(e=Ct(e))=="string"){if(e==="")throw new k(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!nu(t)&&e.indexOf("/")!==-1)throw new k(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(Y.fromString(e));if(!M.isDocumentKey(r))throw new k(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return zo(n,new M(r))}if(e instanceof Rt)return zo(n,e._key);throw new k(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Dr(e)}.`)}function Aa(n,t){if(!Array.isArray(n)||n.length===0)throw new k(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function oc(n,t){const e=function(s,o){for(const a of s)for(const c of a.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new k(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new k(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class ac{convertValue(t,e="none"){switch(me(t)){case 0:return null;case 1:return t.booleanValue;case 2:return rt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(fe(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw O()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return _e(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>rt(a.doubleValue));return new fi(o)}convertGeoPoint(t){return new di(rt(t.latitude),rt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=js(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(En(t));default:return null}}convertTimestamp(t){const e=te(t);return new ot(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=Y.fromString(t);G(Pu(r));const s=new vn(r.get(1),r.get(3)),o=new M(r.popFirst(5));return s.isEqual(e)||$t(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */function wi(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}class Rm extends ac{constructor(t){super(),this.firestore=t}convertBytes(t){return new ge(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Rt(this.firestore,null,e)}}/**
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
 */class Pe{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ai extends Tr{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ur(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(yi("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class ur extends Ai{data(t={}){return super.data(t)}}class uc{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Pe(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new ur(this._firestore,this._userDataWriter,r.key,r,new Pe(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new k(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const h=new ur(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Pe(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new ur(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Pe(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,m=-1;return c.type!==0&&(f=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:Sm(c.type),doc:h,oldIndex:f,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Sm(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}class Mr extends ac{constructor(t){super(),this.firestore=t}convertBytes(t){return new ge(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Rt(this.firestore,null,e)}}function cc(n){n=Lt(n,re);const t=Lt(n.firestore,pe),e=kn(t),r=new Mr(t);return sc(n._query),dm(e,n._query).then(s=>new uc(t,r,n,s))}function Pm(n,t,e){n=Lt(n,Rt);const r=Lt(n.firestore,pe),s=wi(n.converter,t,e);return lc(r,[pi(Nr(r),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,ft.none())])}function fs(n,...t){var e,r,s;n=Ct(n);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||Ia(t[a])||(o=t[a],a++);const c={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Ia(t[a])){const E=t[a];t[a]=(e=E.next)===null||e===void 0?void 0:e.bind(E),t[a+1]=(r=E.error)===null||r===void 0?void 0:r.bind(E),t[a+2]=(s=E.complete)===null||s===void 0?void 0:s.bind(E)}let h,f,m;if(n instanceof Rt)f=Lt(n.firestore,pe),m=Hs(n._key.path),h={next:E=>{t[a]&&t[a](bm(f,n,E))},error:t[a+1],complete:t[a+2]};else{const E=Lt(n,re);f=Lt(E.firestore,pe),m=E._query;const A=new Mr(f);h={next:S=>{t[a]&&t[a](new uc(f,A,E,S))},error:t[a+1],complete:t[a+2]},sc(n._query)}return function(A,S,V,N){const D=new Wu(N),$=new Bu(S,D,V);return A.asyncQueue.enqueueAndForget(async()=>Ou(await Ms(A),$)),()=>{D.Za(),A.asyncQueue.enqueueAndForget(async()=>Fu(await Ms(A),$))}}(kn(f),m,c,h)}function lc(n,t){return function(r,s){const o=new Ut;return r.asyncQueue.enqueueAndForget(async()=>Jf(await lm(r),s,o)),o.promise}(kn(n),t)}function bm(n,t,e){const r=e.docs.get(t._key),s=new Mr(n);return new Ai(n,s,t._key,r,new Pe(e.hasPendingWrites,e.fromCache),t.converter)}/**
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
 */class Cm{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=Nr(t)}set(t,e,r){this._verifyNotCommitted();const s=Wt(t,this._firestore),o=wi(s.converter,e,r),a=pi(this._dataReader,"WriteBatch.set",s._key,o,s.converter!==null,r);return this._mutations.push(a.toMutation(s._key,ft.none())),this}update(t,e,r,...s){this._verifyNotCommitted();const o=Wt(t,this._firestore);let a;return a=typeof(e=Ct(e))=="string"||e instanceof Nn?tc(this._dataReader,"WriteBatch.update",o._key,e,r,s):Zu(this._dataReader,"WriteBatch.update",o._key,e),this._mutations.push(a.toMutation(o._key,ft.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=Wt(t,this._firestore);return this._mutations=this._mutations.concat(new Sr(e._key,ft.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new k(P.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Wt(n,t){if((n=Ct(n)).firestore!==t)throw new k(P.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */class Dm extends class{constructor(e,r){this._firestore=e,this._transaction=r,this._dataReader=Nr(e)}get(e){const r=Wt(e,this._firestore),s=new Rm(this._firestore);return this._transaction.lookup([r._key]).then(o=>{if(!o||o.length!==1)return O();const a=o[0];if(a.isFoundDocument())return new Tr(this._firestore,s,a.key,a,r.converter);if(a.isNoDocument())return new Tr(this._firestore,s,r._key,null,r.converter);throw O()})}set(e,r,s){const o=Wt(e,this._firestore),a=wi(o.converter,r,s),c=pi(this._dataReader,"Transaction.set",o._key,a,o.converter!==null,s);return this._transaction.set(o._key,c),this}update(e,r,s,...o){const a=Wt(e,this._firestore);let c;return c=typeof(r=Ct(r))=="string"||r instanceof Nn?tc(this._dataReader,"Transaction.update",a._key,r,s,o):Zu(this._dataReader,"Transaction.update",a._key,r),this._transaction.update(a._key,c),this}delete(e){const r=Wt(e,this._firestore);return this._transaction.delete(r._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=Wt(t,this._firestore),r=new Mr(this._firestore);return super.get(t).then(s=>new Ai(this._firestore,r,e._key,s._document,new Pe(!1,!1),e.converter))}}function Ri(n,t,e){n=Lt(n,pe);const r=Object.assign(Object.assign({},Vm),e);return function(o){if(o.maxAttempts<1)throw new k(P.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(o,a,c){const h=new Ut;return o.asyncQueue.enqueueAndForget(async()=>{const f=await hm(o);new am(o.asyncQueue,f,c,a,h).au()}),h.promise}(kn(n),s=>t(new Dm(n,s)),r)}/**
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
 */function hc(n){return kn(n=Lt(n,pe)),new Cm(n,t=>lc(n,t))}(function(t,e=!0){(function(s){Fe=s})(_h),hr(new gn("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),c=new pe(new kh(r.getProvider("auth-internal")),new xh(r.getProvider("app-check-internal")),function(f,m){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new k(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vn(f.options.projectId,m)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),be(Bo,"4.7.3",t),be(Bo,"4.7.3","esm2017")})();const Os={SESSION:"lettuce_toto_session"},Ra=5,Sa={id:"admin",password:"1liA22@aa"},we={rank1:5,rank2:4,rank3:3,rank4:2,rank5:1.5,others:.9},km={apiKey:"AIzaSyDw4wFYBpW--wse_hrFUpcSLKPPQIkvMXg",authDomain:"classtoto3-9.firebaseapp.com",projectId:"classtoto3-9",storageBucket:"classtoto3-9.firebasestorage.app",messagingSenderId:"522595238940",appId:"1:522595238940:web:0eb8848d0617ec90ad8bd9",measurementId:"G-PQ3EWX23W9"},Nm=xa(km),nt=pm(Nm);let x={students:[],lettuce:[],currentUser:null,history:[]};function Z(n,t="success"){const e=document.getElementById("toast-container")||(()=>{const o=document.createElement("div");return o.id="toast-container",o.className="toast-container",document.body.appendChild(o),o})(),r=document.createElement("div");r.className=`toast ${t}`;let s="🔔";t==="success"&&(s="✅"),t==="error"&&(s="❌"),t==="warning"&&(s="⚠️"),r.innerHTML=`<span>${s}</span> <span>${n}</span>`,e.appendChild(r),setTimeout(()=>{r.style.opacity="0",r.style.transform="translateY(-10px)",setTimeout(()=>r.remove(),300)},3e3)}function dc(){const n=[];for(let t=1;t<=36;t++){const e=`309${String(t).padStart(2,"0")}`;n.push({id:e,name:`${e} 학생`,password:e,tokens:1e3,bets:{1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0}})}return n}function fc(){const n=[];for(let t=1;t<=10;t++)n.push({id:String(t),name:`상추 ${t}호`,totalBets:0});return n}async function Lm(){try{if((await cc(Ce(nt,"students"))).empty){console.log("DB가 비어 있습니다. 초기 데이터를 Firestore에 주입합니다...");const t=hc(nt);dc().forEach(s=>{const o=Vt(nt,"students",s.id);t.set(o,s)}),fc().forEach(s=>{const o=Vt(nt,"lettuce",s.id);t.set(o,s)}),await t.commit(),console.log("초기 데이터 주입 완료.")}}catch(n){console.error("초기 데이터 조회/주입 중 오류 발생:",n),n.code==="permission-denied"?Z("Firebase Firestore 권한 오류! 보안 규칙(Security Rules)을 허용으로 설정해주세요.","error"):Z("DB 초기화 실패: "+n.message,"error")}}let Si=!1,mc=!1,pc=!1;function ms(){if(Si&&mc&&pc){if(x.currentUser&&x.currentUser!=="admin"){const n=x.students.find(t=>t.id===x.currentUser.id);n&&(x.currentUser=n)}ce()}}function Mm(){fs(Ce(nt,"students"),t=>{const e=[];t.forEach(r=>{e.push(r.data())}),e.sort((r,s)=>r.id.localeCompare(s.id)),x.students=e,Si=!0,ms()},t=>{console.error("Students Listener Error:",t),t.code==="permission-denied"?Z("학번 데이터 로드 실패: Firestore 보안 규칙을 확인하세요.","error"):Z("학번 로드 실패: "+t.message,"error")}),fs(Ce(nt,"lettuce"),t=>{const e=[];t.forEach(r=>{e.push(r.data())}),e.sort((r,s)=>parseInt(r.id)-parseInt(s.id)),x.lettuce=e,mc=!0,ms()},t=>{console.error("Lettuce Listener Error:",t),Z("상추 데이터 로드 실패: "+t.message,"error")});const n=wm(Ce(nt,"history"),Am("round","asc"));fs(n,t=>{const e=[];t.forEach(r=>{e.push(r.data())}),x.history=e,pc=!0,ms()},t=>{console.error("History Listener Error:",t),Z("정산 기록 로드 실패: "+t.message,"error")})}async function xm(){await Lm(),Mm();const n=localStorage.getItem(Os.SESSION);n?n==="admin"?x.currentUser="admin":x.currentUser={id:n}:x.currentUser=null}function ln(){x.currentUser?localStorage.setItem(Os.SESSION,x.currentUser==="admin"?"admin":x.currentUser.id):localStorage.removeItem(Os.SESSION)}function ce(){document.querySelectorAll(".view").forEach(n=>n.classList.remove("active")),x.currentUser?x.currentUser==="admin"?(document.getElementById("admin-view").classList.add("active"),Bm()):(document.getElementById("student-view").classList.add("active"),Om()):(document.getElementById("login-view").classList.add("active"),document.getElementById("login-error").classList.add("hidden"),document.getElementById("login-form").reset())}function Om(){if(!x.currentUser||x.currentUser==="admin")return;const n=x.students.find(a=>a.id===x.currentUser.id);if(!n)return;x.currentUser=n,document.getElementById("student-badge-id").innerText=`${n.id} 학생`,document.getElementById("student-tokens-val").innerText=n.tokens.toLocaleString(),document.getElementById("summary-balance").innerText=n.tokens.toLocaleString();const t=Object.values(n.bets).reduce((a,c)=>a+c,0);document.getElementById("summary-total-bet").innerText=t.toLocaleString();const e=document.getElementById("my-bets-detail-list");e.innerHTML="";let r=!1;Object.entries(n.bets).forEach(([a,c])=>{if(c>0){r=!0;const h=document.createElement("div");h.className="my-bet-item",h.style.display="flex",h.style.justifyContent="space-between",h.style.alignItems="center",h.innerHTML=`
        <span>상추 ${a}호</span>
        <div style="display: flex; align-items: center; gap: 8px;">
          <strong>💰 ${c.toLocaleString()}</strong>
          <button class="btn-danger-sm btn-cancel-bet" data-id="${a}" style="padding: 2px 6px; font-size: 0.75rem; border-radius: 4px;">취소</button>
        </div>
      `,e.appendChild(h)}}),r||(e.innerHTML='<p class="no-data" style="padding: 10px 0;">이번 주 베팅 내역이 없습니다.</p>');const s=document.getElementById("lettuce-cards-container");s.innerHTML="";const o=x.lettuce.reduce((a,c)=>a+c.totalBets,0);x.lettuce.forEach(a=>{const c=document.createElement("div");c.className="lettuce-card";const h=n.bets[a.id]||0,f=o>0?(a.totalBets/o*100).toFixed(1):"0.0",m=["🥬","🥗","🌱","🥦","🍀","🌿","🍃","🌵","🪴","🌳"],E=m[(parseInt(a.id)-1)%m.length],A=h>0?`<button class="btn-danger-sm btn-cancel-card-bet" data-id="${a.id}" style="width: 100%; margin-top: 8px; padding: 6px; border-radius: var(--radius-sm);">베팅 취소</button>`:"";c.innerHTML=`
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
        ${A}
      </div>
    `,s.appendChild(c)}),document.querySelectorAll(".btn-bet").forEach(a=>{a.replaceWith(a.cloneNode(!0))}),document.querySelectorAll(".btn-bet").forEach(a=>{a.addEventListener("click",c=>{const h=c.target.getAttribute("data-id"),f=document.getElementById(`bet-input-${h}`),m=parseInt(f.value);Pa(h,m)})}),document.querySelectorAll(".btn-quick").forEach(a=>{a.replaceWith(a.cloneNode(!0))}),document.querySelectorAll(".btn-quick").forEach(a=>{a.addEventListener("click",c=>{const h=c.target.getAttribute("data-id"),f=parseInt(c.target.getAttribute("data-amount"));Pa(h,f)})}),document.querySelectorAll(".btn-cancel-bet").forEach(a=>{a.replaceWith(a.cloneNode(!0))}),document.querySelectorAll(".btn-cancel-bet").forEach(a=>{a.addEventListener("click",c=>{const h=c.target.getAttribute("data-id");ba(h)})}),document.querySelectorAll(".btn-cancel-card-bet").forEach(a=>{a.replaceWith(a.cloneNode(!0))}),document.querySelectorAll(".btn-cancel-card-bet").forEach(a=>{a.addEventListener("click",c=>{const h=c.target.getAttribute("data-id");ba(h)})}),Fm()}function Fm(){const n=document.getElementById("ranking-list-container");n.innerHTML="",[...x.students].sort((e,r)=>r.tokens-e.tokens).forEach((e,r)=>{const s=x.currentUser&&x.currentUser.id===e.id,o=document.createElement("div");o.className=`ranking-item ${s?"current-user":""}`,o.innerHTML=`
      <div class="ranking-left">
        <span class="rank-number">${r+1}</span>
        <span class="rank-id">${e.id} 학생</span>
      </div>
      <span class="rank-tokens">💰 ${e.tokens.toLocaleString()}</span>
    `,n.appendChild(o)})}function Bm(){if(x.currentUser!=="admin")return;["rank-1","rank-2","rank-3","rank-4","rank-5"].forEach(t=>{const e=document.getElementById(t);if(!e)return;const r=e.value;e.innerHTML='<option value="" disabled selected>상추 선택</option>',x.lettuce.forEach(s=>{e.innerHTML+=`<option value="${s.id}">${s.name}</option>`}),r&&(e.value=r)}),gc(),Um(),qm()}function Um(){const n=document.getElementById("admin-lettuce-stats-container");if(!n)return;n.innerHTML="";const t=x.lettuce.reduce((e,r)=>e+r.totalBets,0);x.lettuce.forEach(e=>{const r=t>0?(e.totalBets/t*100).toFixed(1):"0.0",s=document.createElement("div");s.className="lettuce-stat-item",s.innerHTML=`
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
    `,n.appendChild(s)})}function gc(){const n=document.getElementById("admin-student-table-body"),t=document.getElementById("student-search-input"),e=t?t.value.trim():"";n.innerHTML="",x.students.filter(r=>r.id.includes(e)).forEach(r=>{const s=Object.values(r.bets).reduce((a,c)=>a+c,0),o=document.createElement("tr");o.innerHTML=`
        <td style="font-weight: 600;">${r.id}</td>
        <td class="text-primary" style="font-weight: 700;">💰 ${r.tokens.toLocaleString()}</td>
        <td>💰 ${s.toLocaleString()}</td>
      `,n.appendChild(o)})}function qm(){const n=document.getElementById("history-list-container");if(n.innerHTML="",x.history.length===0){n.innerHTML='<p class="no-data">아직 완료된 정산 내역이 없습니다.</p>';return}[...x.history].reverse().forEach(t=>{const e=document.createElement("div");e.className="history-item";const r=t.ranks.map((s,o)=>`<span class="history-rank-tag">${["🥇","🥈","🥉","4위","5위"][o]} 상추 ${s}호</span>`).join(" ");e.innerHTML=`
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
    `,n.appendChild(e)})}async function Pa(n,t){if(!x.currentUser||x.currentUser==="admin")return;if(isNaN(t)||t<=0||!Number.isInteger(t)){Z("올바른 베팅 금액을 입력하세요.","error");return}if(t<Ra){Z(`최소 베팅 단위는 ${Ra} 토큰입니다.`,"error");return}const e=Vt(nt,"students",x.currentUser.id),r=Vt(nt,"lettuce",n);try{await Ri(nt,async s=>{const o=await s.get(e),a=await s.get(r);if(!o.exists()||!a.exists())throw new Error("데이터가 존재하지 않습니다.");const c=o.data(),h=a.data();if(t>c.tokens)throw new Error("보유하고 있는 토큰 잔액을 초과하여 베팅할 수 없습니다.");const f=c.tokens-t,m=c.bets||{},E={...m,[n]:(m[n]||0)+t},A=(h.totalBets||0)+t;s.update(e,{tokens:f,bets:E}),s.update(r,{totalBets:A})}),Z(`상추 ${n}호에 💰 ${t.toLocaleString()} 토큰을 성공적으로 베팅했습니다!`,"success")}catch(s){Z(s.message||"베팅 중 오류가 발생했습니다.","error")}}async function ba(n){if(!x.currentUser||x.currentUser==="admin")return;const t=Vt(nt,"students",x.currentUser.id),e=Vt(nt,"lettuce",n);try{await Ri(nt,async r=>{const s=await r.get(t),o=await r.get(e);if(!s.exists()||!o.exists())throw new Error("데이터가 존재하지 않습니다.");const a=s.data(),c=o.data(),h=a.bets[n]||0;if(h<=0)throw new Error("해당 상추에 건 베팅이 없습니다.");const f=a.tokens+h,m={...a.bets,[n]:0},E=Math.max(0,(c.totalBets||0)-h);r.update(t,{tokens:f,bets:m}),r.update(e,{totalBets:E})}),Z(`상추 ${n}호의 베팅이 성공적으로 취소 및 환불되었습니다.`,"success")}catch(r){Z(r.message||"베팅 취소 중 오류가 발생했습니다.","error")}}async function $m(n){if(new Set(n).size!==5){Z("1위부터 5위 상추를 중복 없이 모두 지정해야 합니다.","error");return}Z("정산을 진행 중입니다...","warning");try{const e=new Date,r=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")} ${String(e.getHours()).padStart(2,"0")}:${String(e.getMinutes()).padStart(2,"0")}`,s=x.history.length+1;let o=x.lettuce.reduce((h,f)=>h+f.totalBets,0),a=0,c=0;await Ri(nt,async h=>{const f=x.students.map(S=>Vt(nt,"students",S.id)),m=x.lettuce.map(S=>Vt(nt,"lettuce",S.id));(await Promise.all(f.map(S=>h.get(S)))).forEach((S,V)=>{const N=S.data();let D=0,$=!1;Object.entries(N.bets||{}).forEach(([q,X])=>{X>0&&($=!0,q===n[0]?D+=X*we.rank1:q===n[1]?D+=X*we.rank2:q===n[2]?D+=X*we.rank3:q===n[3]?D+=X*we.rank4:q===n[4]?D+=X*we.rank5:D+=X*we.others)});const W={1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0};if($){c++;const q=Math.floor(D);a+=q,h.update(f[V],{tokens:N.tokens+q,bets:W})}else h.update(f[V],{bets:W})}),m.forEach(S=>{h.update(S,{totalBets:0})});const A=Vt(Ce(nt,"history"));h.set(A,{round:s,date:r,ranks:n,totalBets:o,totalDistributed:a,participatedStudents:c})}),Z(`정산이 완료되었습니다! 총 💰 ${a.toLocaleString()} 토큰이 배분되었습니다.`,"success")}catch(e){Z("정산 처리 중 오류가 발생했습니다: "+e.message,"error")}}async function jm(n,t,e){if(!x.currentUser||x.currentUser==="admin")return;const r=x.students.find(a=>a.id===x.currentUser.id),s=document.getElementById("pwd-change-error"),o=document.getElementById("pwd-change-success");if(s.classList.add("hidden"),o.classList.add("hidden"),r.password!==n){s.innerText="현재 비밀번호가 일치하지 않습니다.",s.classList.remove("hidden");return}if(t!==e){s.innerText="새 비밀번호와 확인 비밀번호가 다릅니다.",s.classList.remove("hidden");return}if(t.trim().length===0){s.innerText="비밀번호는 빈칸일 수 없습니다.",s.classList.remove("hidden");return}try{const a=Vt(nt,"students",x.currentUser.id);await Pm(a,{password:t},{merge:!0}),o.classList.remove("hidden"),document.getElementById("pwd-change-form").reset(),Z("비밀번호가 성공적으로 변경되었습니다.","success"),setTimeout(()=>{document.getElementById("pwd-change-modal").classList.add("hidden"),o.classList.add("hidden")},1500)}catch(a){s.innerText="비밀번호 변경 실패: "+a.message,s.classList.remove("hidden")}}async function zm(){if(confirm("정말로 모든 학생의 자산 및 정산 내역을 초기화하시겠습니까? (이 작업은 되돌릴 수 없습니다)")){Z("데이터 초기화 중...","warning");try{const n=await cc(Ce(nt,"history")),t=hc(nt);n.forEach(s=>{t.delete(s.ref)}),dc().forEach(s=>{const o=Vt(nt,"students",s.id);t.set(o,s)}),fc().forEach(s=>{const o=Vt(nt,"lettuce",s.id);t.set(o,s)}),await t.commit(),x.currentUser=null,ln(),ce(),Z("모든 데이터가 성공적으로 초기화되었습니다!","success")}catch(n){Z("초기화 중 오류가 발생했습니다: "+n.message,"error")}}}document.addEventListener("DOMContentLoaded",()=>{xm(),ce(),document.getElementById("login-form").addEventListener("submit",m=>{m.preventDefault();const E=document.getElementById("login-id").value.trim(),A=document.getElementById("login-pw").value,S=document.getElementById("login-error");if(S.classList.add("hidden"),E===Sa.id){A===Sa.password?(x.currentUser="admin",ln(),ce(),Z("관리자 계정으로 로그인했습니다.","success")):(S.innerText="관리자 비밀번호가 일치하지 않습니다.",S.classList.remove("hidden"));return}if(!Si){S.innerText="클라우드 데이터를 불러오는 중입니다. 잠시 후 다시 시도해 주세요.",S.classList.remove("hidden");return}const V=x.students.find(N=>N.id===E);V?V.password===A?(x.currentUser=V,ln(),ce(),Z(`${V.id} 학생으로 로그인했습니다.`,"success")):(S.innerText="비밀번호가 일치하지 않습니다.",S.classList.remove("hidden")):(S.innerText="존재하지 않는 학번입니다. (30901~30936 사이)",S.classList.remove("hidden"))}),document.getElementById("btn-student-logout").addEventListener("click",()=>{x.currentUser=null,ln(),ce(),Z("로그아웃되었습니다.","success")}),document.getElementById("btn-admin-logout").addEventListener("click",()=>{x.currentUser=null,ln(),ce(),Z("로그아웃되었습니다.","success")}),document.getElementById("btn-change-pw-open").addEventListener("click",()=>{document.getElementById("pwd-change-error").classList.add("hidden"),document.getElementById("pwd-change-success").classList.add("hidden"),document.getElementById("pwd-change-form").reset(),document.getElementById("pwd-change-modal").classList.remove("hidden")}),document.getElementById("btn-change-pw-close").addEventListener("click",()=>{document.getElementById("pwd-change-modal").classList.add("hidden")}),document.getElementById("pwd-change-form").addEventListener("submit",m=>{m.preventDefault();const E=document.getElementById("change-pw-current").value,A=document.getElementById("change-pw-new").value,S=document.getElementById("change-pw-confirm").value;jm(E,A,S)});const a=document.getElementById("pwd-change-modal");a.addEventListener("click",m=>{m.target===a&&a.classList.add("hidden")}),document.getElementById("student-search-input").addEventListener("input",()=>{gc()}),document.getElementById("btn-reset-all-data").addEventListener("click",()=>{zm()}),document.getElementById("settlement-form").addEventListener("submit",m=>{m.preventDefault();const E=document.getElementById("rank-1").value,A=document.getElementById("rank-2").value,S=document.getElementById("rank-3").value,V=document.getElementById("rank-4").value,N=document.getElementById("rank-5").value;$m([E,A,S,V,N])})});
