import { r } from './cast-3d5be210.js';
import { h } from './Program-634dbdbe.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class t{constructor(){this._outer=new Map;}clear(){this._outer.clear();}get empty(){return 0===this._outer.size}get(t,e){return this._outer.get(t)?.get(e)}set(t,e,r){const s=this._outer.get(t);s?s.set(e,r):this._outer.set(t,new Map([[e,r]]));}delete(t,e){const r=this._outer.get(t);r&&(r.delete(e),0===r.size&&this._outer.delete(t));}forEach(t){this._outer.forEach(((e,r)=>t(e,r)));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class s{constructor(r){this._rctx=r,this._store=new t;}dispose(){this._store.forEach((r=>r.forEach((r=>r.dispose())))),this._store.clear();}acquire(t,s,o,c){const i=this._store.get(t,s);if(r(i))return i.ref(),i;const h$1=new h(this._rctx,t,s,o,c);return h$1.ref(),this._store.set(t,s,h$1),h$1}get test(){let r=0;return this._store.forEach((t=>t.forEach((t=>r+=t.hasGLName?2:1)))),{cachedWebGLObjects:r}}}

export { s, t };
