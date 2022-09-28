import { ap as l$1, C as x, ax as j$1, s as s$1, e, d, n as n$2 } from './cast-3d5be210.js';
import { j } from './Collection-a38e0489.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const t=new j,o=new WeakMap;function n$1(e){c(e)&&t.push(e);}function s(e){c(e)&&t.includes(e)&&t.remove(e);}function c(e){return e&&"object"==typeof e&&"refreshInterval"in e&&"refresh"in e}function i(e,r){return Number.isFinite(e)&&Number.isFinite(r)?r<=0?e:i(r,e%r):0}let f=0,a=0;function l(){const e=Date.now();for(const r of t)if(r.refreshInterval){e-(o.get(r)??0)+5>=6e4*r.refreshInterval&&(o.set(r,e),r.refresh(e));}}l$1((()=>{const e=Date.now();let r=0;for(const n of t)r=i(Math.round(6e4*n.refreshInterval),r),n.refreshInterval?o.get(n)||o.set(n,e):o.delete(n);if(r!==a){if(a=r,clearInterval(f),0===a)return void(f=0);f=setInterval(l,a);}}));const u={get hasRefreshTimer(){return f>0},get tickInterval(){return a},forceRefresh(){l();},hasLayer:e=>c(e)&&t.includes(e),clear(){for(const e of t)o.delete(e);t.removeAll();}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function p(e){return e&&"object"==typeof e&&"refreshTimestamp"in e&&"refresh"in e}const n=p=>{let n=class extends p{constructor(...e){super(...e),this.refreshInterval=0,this.refreshTimestamp=0,this._debounceHasDataChanged=x((()=>this.hasDataChanged())),this.when().then((()=>{n$1(this);}),(()=>{}));}destroy(){s(this);}get refreshParameters(){return {_ts:this.refreshTimestamp||null}}refresh(e=Date.now()){j$1(this._debounceHasDataChanged()).then((r=>{r&&this._set("refreshTimestamp",e),this.emit("refresh",{dataChanged:r});}),(e=>{s$1.getLogger(this.declaredClass).error(e),this.emit("refresh",{dataChanged:!1,error:e});}));}async hasDataChanged(){return !0}};return e([d({type:Number,cast:e=>e>=.1?e:e<=0?0:.1,json:{write:!0}})],n.prototype,"refreshInterval",void 0),e([d({readOnly:!0})],n.prototype,"refreshTimestamp",void 0),e([d()],n.prototype,"refreshParameters",null),n=e([n$2("esri.layers.mixins.RefreshableLayer")],n),n};

export { n, p };
