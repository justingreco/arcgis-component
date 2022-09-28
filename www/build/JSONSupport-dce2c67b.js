import { m as m$1, a3 as r, a5 as s$2, a6 as o, a7 as a$2, a2 as e$1, a8 as u$2, s as s$3, a as s$4, a9 as t$1, aa as i$1, ab as s$5, ac as o$1, ad as c$2, q, e as e$2, n as n$1, y } from './cast-3d5be210.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class s$1{constructor(){this._values=new Map,this.multipleOriginsSupported=!1;}clone(e){const t=new s$1;return this._values.forEach(((s,r)=>{e&&e.has(r)||t.set(r,m$1(s.value),s.origin);})),t}get(i,e){e=this._normalizeOrigin(e);const s=this._values.get(i);return null==e||s?.origin===e?s?.value:void 0}originOf(i){return this._values.get(i)?.origin??r.USER}keys(i){i=this._normalizeOrigin(i);const e=[...this._values.keys()];return null==i?e:e.filter((e=>this._values.get(e)?.origin===i))}set(i,s,r$1){if((r$1=this._normalizeOrigin(r$1))===r.DEFAULTS){const e=this._values.get(i);if(e&&null!=e.origin&&e.origin>r$1)return}this._values.set(i,new t(s,r$1));}delete(i,e){null!=(e=this._normalizeOrigin(e))&&this._values.get(i)?.origin!==e||this._values.delete(i);}has(i,e){return null!=(e=this._normalizeOrigin(e))?this._values.get(i)?.origin===e:this._values.has(i)}forEach(i){this._values.forEach((({value:e},s)=>i(e,s)));}_normalizeOrigin(i){if(null!=i)return i===r.DEFAULTS?i:r.USER}}class t{constructor(i,e){this.value=i,this.origin=e;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function e(e,r$1,n){r$1.keys().forEach((e=>{n.set(e,r$1.get(e),r.DEFAULTS);}));const o=e.metadatas;Object.keys(o).forEach((r$1=>{e.internalGet(r$1)&&n.set(r$1,e.internalGet(r$1),r.DEFAULTS);}));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function s(e,r,n){if(!e||!e.read||!1===e.read.enabled||!e.read.source)return !1;const o=e.read.source;if("string"==typeof o){if(o===r)return !0;if(o.includes(".")&&0===o.indexOf(r)&&s$2(o,n))return !0}else for(const s of o){if(s===r)return !0;if(s.includes(".")&&0===s.indexOf(r)&&s$2(s,n))return !0}return !1}function i(e){return e&&(!e.read||!1!==e.read.enabled&&!e.read.source)}function a$1(e,t,r,o$1,a){let f=o(t[r],a);i(f)&&(e[r]=!0);for(const i of Object.getOwnPropertyNames(t))f=o(t[i],a),s(f,r,o$1)&&(e[i]=!0);}function f$1(e,t,r,n){const s=r.metadatas,i=a$2(s[t],"any",n),a=i&&i.default;if(void 0===a)return;const f="function"==typeof a?a.call(e,t,n):a;void 0!==f&&r.set(t,f);}const c$1={origin:"service"};function u$1(t,o$1,s=c$1){if(!o$1||"object"!=typeof o$1)return;const i=e$1(t),u=i.metadatas,d={};for(const e of Object.getOwnPropertyNames(o$1))a$1(d,u,e,o$1,s);i.setDefaultOrigin(s.origin);for(const r of Object.getOwnPropertyNames(d)){const a=o(u[r],s).read,f=a&&a.source;let c;c=f&&"string"==typeof f?u$2(o$1,f):o$1[r],a&&a.reader&&(c=a.reader.call(t,c,o$1,s)),void 0!==c&&i.set(r,c);}if(!s||!s.ignoreDefaults){i.setDefaultOrigin("defaults");for(const e of Object.getOwnPropertyNames(u))d[e]||f$1(t,e,i,s);}i.setDefaultOrigin("user");}function d$1(e,t,r,n=c$1){const o={...n,messages:[]};r(o),o.messages?.forEach((t=>{"warning"!==t.type||e.loaded?n&&n.messages&&n.messages.push(t):e.loadWarnings.push(t);}));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const a=s$3.getLogger("esri.core.accessorSupport.write");function f(r,e,t,i,o){const n={};return e.write?.writer?.call(r,i,n,t,o),n}function p(r$1,t,i,s,u,l){if(!s||!s.write)return !1;const f=r$1.get(i);if(!u&&s.write.overridePolicy){const e=s.write.overridePolicy.call(r$1,f,i,l);void 0!==e&&(u=e);}if(u||(u=s.write),!u||!1===u.enabled)return !1;if((null===f&&!u.allowNull&&!u.writerEnsuresNonNull||void 0===f)&&u.isRequired){const t=new s$4("web-document-write:property-required",`Missing value for required property '${i}' on '${r$1.declaredClass}'`,{propertyName:i,target:r$1});return t&&l&&l.messages?l.messages.push(t):t&&!l&&a.error(t.name,t.message),!1}if(void 0===f)return !1;if(null===f&&!u.allowNull&&!u.writerEnsuresNonNull)return !1;if((!t.store.multipleOriginsSupported||t.store.originOf(i)===r.DEFAULTS)&&c(r$1,i,l,s,f))return !1;if(!u.ignoreOrigin&&l&&l.origin&&t.store.multipleOriginsSupported){if(t.store.originOf(i)<t$1(l.origin))return !1}return !0}function c(e,t,i,o,n){const s=o.default;if(void 0===s)return !1;if(null!=o.defaultEquals)return o.defaultEquals(n);if("function"==typeof s){if(Array.isArray(n)){const o=s.call(e,t,i);return i$1(o,n)}return !1}return s===n}function g(r,e,t,i){const o=e$1(r),n=o.metadatas,u=s$5(n[e],i);return !!u&&p(r,o,e,u,t,i)}function d(r,e,t){if(r&&"function"==typeof r.toJSON&&(!r.toJSON.isDefaultToJSON||!r.write))return o$1(e,r.toJSON(t));const o=e$1(r),n=o.metadatas;for(const s in n){const a=s$5(n[s],t);if(!p(r,o,s,a,void 0,t))continue;const c=r.get(s),g=f(r,a,a.write&&"string"==typeof a.write.target?a.write.target:s,c,t);Object.keys(g).length>0&&(e=o$1(e,g),t?.resources?.pendingOperations?.length&&Promise.all(t.resources.pendingOperations).then((()=>o$1(e,g))),t&&t.writtenProperties&&t.writtenProperties.push({target:r,propName:s,oldOrigin:c$2(o.store.originOf(s)),newOrigin:t.origin}));}return e}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const u=t=>{let u=class extends t{constructor(...r){super(...r);const t=q(e$1(this)),i=t.store,p=new s$1;t.store=p,e(t,i,p);}read(r,t){u$1(this,r,t);}write(r={},t){return d(this,r,t)}toJSON(r){return this.write({},r)}static fromJSON(r,t){return n.call(this,r,t)}};return u=e$2([n$1("esri.core.JSONSupport")],u),u.prototype.toJSON.isDefaultToJSON=!0,u};function n(r,t){if(!r)return null;if(r.declaredClass)throw new Error("JSON object is already hydrated");const s=new this;return s.read(r,t),s}function m(r){return r&&"read"in r&&"write"in r&&"toJSON"in r}let l=class extends(u(y)){};l=e$2([n$1("esri.core.JSONSupport")],l);

export { u$1 as a, d as b, d$1 as d, e, g, l, u };
