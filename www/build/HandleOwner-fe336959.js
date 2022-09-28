import { y, t, O as v, e, d as d$1, n } from './cast-3d5be210.js';
import { u } from './Handles-54afc0a7.js';
import { l, f, a as a$1, U } from './reactiveUtils-bd6fe823.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let c=class extends y{constructor(){super(...arguments),this.updating=!1,this.handleId=0,this.handles=new u,this.scheduleHandleId=0,this.pendingPromises=new Set;}destroy(){this.removeAll(),this.handles.destroy();}add(e,s,t={}){return this._installWatch(e,s,t,l)}addWhen(e,s,t={}){return this._installWatch(e,s,t,f)}addOnCollectionChange(e,s,{initial:t=!1,final:i=!1}={}){const n=++this.handleId;return this.handles.add([a$1(e,"after-changes",this._createSyncUpdatingCallback(),U),a$1(e,"change",s,{onListenerAdd:t?e=>s({added:e.toArray(),removed:[]}):void 0,onListenerRemove:i?e=>s({added:[],removed:e.toArray()}):void 0})],n),{remove:()=>this.handles.remove(n)}}addPromise(e){if(t(e))return e;const s=++this.handleId;this.handles.add({remove:()=>{this.pendingPromises.delete(e)&&(0!==this.pendingPromises.size||this.handles.has(p)||this._set("updating",!1));}},s),this.pendingPromises.add(e),this._set("updating",!0);const t$1=()=>this.handles.remove(s);return e.then(t$1,t$1),e}removeAll(){this.pendingPromises.clear(),this.handles.removeAll(),this._set("updating",!1);}_installWatch(e,s,t={},i){const n=++this.handleId;t.sync||this._installSyncUpdatingWatch(e,n);const d=i(e,s,t);return this.handles.add(d,n),{remove:()=>this.handles.remove(n)}}_installSyncUpdatingWatch(e,s){const t=this._createSyncUpdatingCallback(),i=l(e,t,{sync:!0,equals:()=>!1});return this.handles.add(i,s),i}_createSyncUpdatingCallback(){return ()=>{this.handles.remove(p),++this.scheduleHandleId;const e=this.scheduleHandleId;this._get("updating")||this._set("updating",!0),this.handles.add(v((()=>{e===this.scheduleHandleId&&(this._set("updating",this.pendingPromises.size>0),this.handles.remove(p));})),p);}}};e([d$1({readOnly:!0})],c.prototype,"updating",void 0),c=e([n("esri.core.support.WatchUpdatingTracking")],c);const p=-42;var m;!function(e){e[e.NONE=0]="NONE",e[e.SYNC=1]="SYNC",e[e.INIT=2]="INIT";}(m||(m={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const a=s=>{let a=class extends s{destroy(){this.destroyed||(this._get("handles")?.destroy(),this._get("updatingHandles")?.destroy());}get handles(){return this._get("handles")||new u}get updatingHandles(){return this._get("updatingHandles")||new c}};return e([d$1({readOnly:!0})],a.prototype,"handles",null),e([d$1({readOnly:!0})],a.prototype,"updatingHandles",null),a=e([n("esri.core.HandleOwner")],a),a};let d=class extends(a(y)){};d=e([n("esri.core.HandleOwner")],d);

export { a, c, d };
