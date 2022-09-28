import { ai as E, a3 as r, m as m$1, q, a2 as e, a9 as t, aj as n, e as e$2, n as n$1, y } from './cast-3d5be210.js';
import { e as e$1, a as u$1, b as d } from './JSONSupport-dce2c67b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class i{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(E),this._values=new Map,this.multipleOriginsSupported=!0;}clone(s){const o=new i,n=this._originStores[r.DEFAULTS];n&&n.forEach(((s,e)=>{o.set(e,m$1(s),r.DEFAULTS);}));for(let i=r.SERVICE;i<E;i++){const e=this._originStores[i];e&&e.forEach(((e,r)=>{s&&s.has(r)||o.set(r,m$1(e),i);}));}return o}get(t,s){const e=void 0===s?this._values:this._originStores[s];return e?e.get(t):void 0}keys(t){const s=null==t?this._values:this._originStores[t];return s?[...s.keys()]:[]}set(t,e,i=r.USER){let o=this._originStores[i];if(o||(o=new Map,this._originStores[i]=o),o.set(t,e),!this._values.has(t)||q(this._propertyOriginMap.get(t))<=i){const s=this._values.get(t);return this._values.set(t,e),this._propertyOriginMap.set(t,i),s!==e}return !1}delete(t,s=r.USER){const e=this._originStores[s];if(!e)return;const i=e.get(t);if(e.delete(t),this._values.has(t)&&this._propertyOriginMap.get(t)===s){this._values.delete(t);for(let e=s-1;e>=0;e--){const s=this._originStores[e];if(s&&s.has(t)){this._values.set(t,s.get(t)),this._propertyOriginMap.set(t,e);break}}}return i}has(t,s){const e=void 0===s?this._values:this._originStores[s];return !!e&&e.has(t)}revert(t,s){for(;s>0&&!this.has(t,s);)--s;const e=this._originStores[s],r=e&&e.get(t),i=this._values.get(t);return this._values.set(t,r),this._propertyOriginMap.set(t,s),i!==r}originOf(t){return this._propertyOriginMap.get(t)||r.DEFAULTS}forEach(t){this._values.forEach(t);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const a=t$1=>{let a=class extends t$1{constructor(...r){super(...r);const t=q(e(this)),i$1=t.store,c=new i;t.store=c,e$1(t,i$1,c);}read(r,t){u$1(this,r,t);}getAtOrigin(r,t$1){const s=m(this),o=t(t$1);if("string"==typeof r)return s.get(r,o);const e={};return r.forEach((r=>{e[r]=s.get(r,o);})),e}originOf(r){return n(this.originIdOf(r))}originIdOf(r){return m(this).originOf(r)}revert(r,t$1){const s=m(this),o=t(t$1),e$1=e(this);let c;c="string"==typeof r?"*"===r?s.keys(o):[r]:r,c.forEach((r=>{e$1.invalidate(r),s.revert(r,o),e$1.commit(r);}));}};return a=e$2([n$1("esri.core.ReadOnlyMultiOriginJSONSupport")],a),a};function m(r){return e(r).store}let f=class extends(a(y)){};f=e$2([n$1("esri.core.ReadOnlyMultiOriginJSONSupport")],f);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const u=t$1=>{let s=class extends t$1{constructor(...r){super(...r);}clear(r,t$1="user"){return l(this).delete(r,t(t$1))}write(r={},t){return d(this,r=r||{},t),r}setAtOrigin(r,t$1,s){e(this).setAtOrigin(r,t$1,t(s));}removeOrigin(r$1){const t$1=l(this),s=t(r$1),i=t$1.keys(s);for(const e of i)t$1.originOf(e)===s&&t$1.set(e,t$1.get(e,s),r.USER);}updateOrigin(r,t$1){const s=l(this),o=t(t$1),c=this.get(r);for(let e=o+1;e<E;++e)s.delete(r,e);s.set(r,c,o);}toJSON(r){return this.write({},r)}};return s=e$2([n$1("esri.core.WriteableMultiOriginJSONSupport")],s),s.prototype.toJSON.isDefaultToJSON=!0,s};function l(r){return e(r).store}const O=t=>{let e=class extends(u(a(t))){constructor(...r){super(...r);}};return e=e$2([n$1("esri.core.MultiOriginJSONSupport")],e),e};let S=class extends(O(y)){};S=e$2([n$1("esri.core.MultiOriginJSONSupport")],S);

export { O, S };
