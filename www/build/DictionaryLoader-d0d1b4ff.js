import { l } from './Color-25ce730a.js';
import { U } from './request-ac4d8bfb.js';
import { s, J as g, ae as c, r, a as s$1 } from './cast-3d5be210.js';
import { e } from './LRUCache-5f25d277.js';
import { a, n } from './fieldUtils-240a3b99.js';
import { d } from './CIMSymbol-15bdb580.js';
import './colorUtils-5009883d.js';
import './mathUtils-559a53d9.js';
import './MemCache-04cdd0cd.js';
import './geometry-2f332a26.js';
import './Extent-f27111e1.js';
import './Point-edff2a11.js';
import './JSONSupport-dce2c67b.js';
import './Polyline-dcdb3782.js';
import './enumeration-6695a859.js';
import './Symbol-573a64f6.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const f=s.getLogger("esri.renderers.support.DictionaryLoader"),h={type:"CIMSimpleLineCallout",lineSymbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",width:.5,color:[0,0,0,255]}]}};class y{constructor(e$1,t,s){this.config=null,this.fieldMap=null,this.url=null,this._ongoingRequests=new Map,this._symbolCache=new e(100),this.url=e$1,this.config=t,this.fieldMap=s;}getSymbolFields(){return this._symbolFields}async getSymbolAsync(t,s){let o;this._dictionaryPromise||(this._dictionaryPromise=this.fetchResources(s));try{o=await this._dictionaryPromise;}catch(d){if(g(d))return this._dictionaryPromise=null,null}const i={};if(this.fieldMap)for(const e of this._symbolFields){const s=this.fieldMap[e];if(s&&null!=t.attributes[s]){const o=""+t.attributes[s];i[e]=o;}else i[e]="";}const a=o(i,s);if(!a||"string"!=typeof a)return null;const c$1=c(a).toString(),m=this._symbolCache.get(c$1);if(m)return m.catch((()=>{this._symbolCache.pop(c$1);})),m;const f=a.split(";"),h=[],y=[];for(const r of f)if(r)if(r.includes("po:")){const t=r.substr(3).split("|");if(3===t.length){const s=t[0],o=t[1];let i=t[2];if("DashTemplate"===o)i=i.split(" ").map((e=>Number(e)));else if("Color"===o){const t=new l(i).toRgba();i=[t[0],t[1],t[2],255*t[3]];}else i=Number(i);y.push({primitiveName:s,propertyName:o,value:i});}}else if(r.includes("|")){for(const e of r.split("|"))if(this._itemNames.has(e)){h.push(e);break}}else this._itemNames.has(r)&&h.push(r);const u=!r(t.geometry)||!t.geometry.hasZ&&"point"===t.geometry.type,p=this._cimPartsToCIMSymbol(h,y,u,s);return this._symbolCache.put(c$1,p,1),p}async fetchResources(e){if(this._dictionaryPromise)return this._dictionaryPromise;if(!this.url)return void f.error("no valid URL!");const o=U(this.url+"/resources/styles/dictionary-info.json",{responseType:"json",query:{f:"json"},signal:r(e)?e.signal:null}),[{data:i}]=await Promise.all([o,a()]);if(!i)throw this._dictionaryPromise=null,new s$1("esri.renderers.DictionaryRenderer","Bad dictionary data!");const n$1=i.expression,l=i.authoringInfo;this._refSymbolUrlTemplate=this.url+"/"+i.cimRefTemplateUrl,this._itemNames=new Set(i.itemsNames),this._symbolFields=l.symbol;const m={};if(this.config){const e=this.config;for(const t in e)m[t]=e[t];}if(l.configuration)for(const t of l.configuration)m.hasOwnProperty(t.name)||(m[t.name]=t.value);const h=[];if(r(e)&&e.fields&&this.fieldMap)for(const t of this._symbolFields){const s=this.fieldMap[t],o=e.fields.filter((e=>e.name===s));o.length>0&&h.push({...o[0],name:t});}return this._dictionaryPromise=n(n$1,r(e)?e.spatialReference:null,h,m).then((e=>{const t={scale:0};return (s,o)=>{const i=e.repurposeFeature({geometry:null,attributes:s});return t.scale=r(o)?o.scale:void 0,e.evaluate({$feature:i,$view:t})}})).catch((e=>(f.error("Creating dictinoary expression failed:",e),null))),this._dictionaryPromise}async _cimPartsToCIMSymbol(e,t,s,o){const i=new Array(e.length);for(let l=0;l<e.length;l++)i[l]=this._getSymbolPart(e[l],o);const r=await Promise.all(i),n=this.fieldMap;for(const l of r)u(l,n);return new d({data:this._combineSymbolParts(r,t,s)})}async _getSymbolPart(e,s){if(this._ongoingRequests.has(e))return this._ongoingRequests.get(e).then((e=>e.data));const o=this._refSymbolUrlTemplate.replace(/\{itemName\}/gi,e),i=U(o,{responseType:"json",query:{f:"json"},...s});this._ongoingRequests.set(e,i);try{return (await i).data}catch(r){throw this._ongoingRequests.delete(e),r}}_combineSymbolParts(e,t,s){if(!e||0===e.length)return null;const o={...e[0]};if(e.length>1){o.symbolLayers=[];for(const t of e){const e=t;o.symbolLayers.unshift(...e.symbolLayers);}}return s&&(o.callout=h),{type:"CIMSymbolReference",symbol:o,primitiveOverrides:t}}}function u(e,t){if(!e)return;const s=e.symbolLayers;if(!s)return;let o=s.length;for(;o--;){const e=s[o];if(e&&!1!==e.enable&&"CIMVectorMarker"===e.type)p(e,t);}}function p(e,t){const s=e.markerGraphics;if(s)for(const o of s){if(!o)continue;const e=o.symbol;if(e)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":u(e,t);break;case"CIMTextSymbol":e.fieldMap=t;}}}

export { y as DictionaryLoader };