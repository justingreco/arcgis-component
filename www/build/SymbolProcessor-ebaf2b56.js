import { J as g, r, as as o, s, X as f, t as t$1, h as e, a1 as f$1, e as e$1, n as n$1 } from './cast-3d5be210.js';
import { n } from './CIMSymbolHelper-78ca7d84.js';
import { m, a } from './diffUtils-6436a697.js';
import { k } from './Point-edff2a11.js';
import { p as p$1 } from './visualVariablesUtils-61e64f04.js';
import { x as x$1, l, b as l$1, E, t as t$2 } from './Matcher-b931b6ec.js';
import { p } from './BaseProcessor-5463201c.js';
import './Color-25ce730a.js';
import './colorUtils-5009883d.js';
import './mathUtils-559a53d9.js';
import './BidiEngine-c95c4945.js';
import './floatRGBA-64e5bf11.js';
import './screenUtils-31d073db.js';
import './aaBoundingRect-5e1a4e52.js';
import './Extent-f27111e1.js';
import './Polyline-dcdb3782.js';
import './geometry-2f332a26.js';
import './request-ac4d8bfb.js';
import './enums-395c521f.js';
import './alignmentUtils-4bbd02ca.js';
import './mat2d-677a80fe.js';
import './vec2-4f9a494f.js';
import './vec2f32-23e4a539.js';
import './number-ad66b701.js';
import './utils-8133dc40.js';
import './GeometryUtils-bcda40bd.js';
import './Collection-a38e0489.js';
import './JSONSupport-dce2c67b.js';
import './Utils-b4b0f45e.js';
import './enums-4770f29d.js';
import './Texture-f189b7ba.js';
import './context-util-5ae1bf7b.js';
import './VertexElementDescriptor-3b53aa99.js';
import './visualVariablesUtils-dc5fe9fe.js';
import './TileStrategy-fea1cb17.js';
import './TileStore-909b46c6.js';
import './workers-c7a27acb.js';
import './assets-99f5c3ee.js';
import './intl-54ccdc89.js';
import './number-c5a37d3e.js';
import './Promise-d2759b2e.js';
import './messages-5e9a4a9e.js';
import './TileKey-97254206.js';
import './quickselect-d6c9284c.js';
import './Query-1f6c7e43.js';
import './TimeExtent-66b53603.js';
import './enumeration-6695a859.js';
import './Field-2973a5cf.js';
import './fieldType-eb0b42e4.js';
import './tileUtils-b3394458.js';
import './TileClipper-e58bd4ae.js';
import './Geometry-7a3815d2.js';
import './GeometryUtils-744eb819.js';
import './MaterialKey-ac9b534a.js';
import './featureConversionUtils-3f60eb15.js';
import './OptimizedFeature-a0dba562.js';
import './OptimizedFeatureSet-261a115b.js';
import './cimAnalyzer-a2a69390.js';
import './fieldUtils-240a3b99.js';
import './callExpressionWithFeature-cfe9aa0a.js';
import './quantizationUtils-65995723.js';
import './defaultsJSON-5fb6161d.js';
import './earcut-4e6b97b1.js';
import './cimSymbolUtils-3c2ee352.js';
import './devEnvironmentUtils-cb76d69b.js';
import './Portal-5df9f5a7.js';
import './persistableUrlUtils-5dcd6081.js';
import './styleUtils-d2332fad.js';
import './LRUCache-5f25d277.js';
import './MemCache-04cdd0cd.js';
import './HandleOwner-fe336959.js';
import './Handles-54afc0a7.js';
import './reactiveUtils-bd6fe823.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class t{constructor(e){this._remoteClient=e,this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null;}destroy(){}async fetchResource(t,r){const s=this._resourceMap,i=s.get(t);if(i)return i;let n=this._inFlightResourceMap.get(t);if(n)return n;try{n=this._remoteClient.invoke("tileRenderer.fetchResource",{url:t},{...r}),this._inFlightResourceMap.set(t,n),n.then((e=>(this._inFlightResourceMap.delete(t),s.set(t,e),e)));}catch(o){return g(o)?null:{width:0,height:0}}return n}getResource(e){return this._resourceMap.get(e)??null}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function I(e,t){return (!e.minScale||e.minScale>=t)&&(!e.maxScale||e.maxScale<=t)}function v(e){const t=e.message,s={message:{data:{},tileKey:t.tileKey,tileKeyOrigin:t.tileKeyOrigin,version:t.version},transferList:new Array};for(const i in t.data){const e=t.data[i];if(s.message.data[i]=null,r(e)){const t=e.stride,a=e.indices.slice(0),o$1=e.vertices.slice(0),n=e.records.slice(0),l={stride:t,indices:a,vertices:o$1,records:n,metrics:o(e.metrics,(e=>e.slice(0)))};s.transferList.push(a,o$1,n),s.message.data[i]=l;}}return s}s.getLogger("esri.views.2d.layers.features.processors.SymbolProcessor");let M=class extends p{constructor(){super(...arguments),this.type="symbol",this._matchers={feature:null,aggregate:null},this._bufferData=new Map,this._bufferIds=new Map;}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))]),this._resourceManagerProxy=new t(this.remoteClient);}destroy(){this._resourceManagerProxy.destroy();}get supportsTileUpdates(){return !0}forEachBufferId(e){this._bufferIds.forEach((t=>{t.forEach(e);}));}async update(e,t){const s=t.schema.processors[0];if("symbol"!==s.type)return;const r=m(this._schema,s);a(r,"mesh")&&(e.mesh=!0,e.why.mesh.push("Symbology changed"),this._schema=s,this._factory=this._createFactory(s),this._factory.update(s,this.tileStore.tileScheme.tileInfo));}onTileMessage(e,t,s,r){return f(r),this._onTileData(e,t,s,r)}onTileClear(e){const t={clear:!0};return this._bufferData.delete(e.key.id),this._bufferIds.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t})}onTileError(e,t,s){const r=s.signal,i={tileKey:e.id,error:t};return this.remoteClient.invoke("tileRenderer.onTileError",i,{signal:r})}onTileUpdate(e){for(const t of e.removed)this._bufferData.has(t.key.id)&&this._bufferData.delete(t.key.id),this._bufferIds.has(t.key.id)&&this._bufferIds.delete(t.key.id);for(const t of e.added)this._bufferData.forEach((e=>{for(const s of e)s.message.tileKey===t.id&&this._updateTileMesh("append",t,v(s),[],!1,!1,null);}));}_addBufferData(e,t){this._bufferData.has(e)||this._bufferData.set(e,[]),this._bufferData.get(e).push(v(t));}_createFactory(e){const{geometryType:t,objectIdField:s,fields:i}=this.service,a=(e,t)=>this.remoteClient.invoke("tileRenderer.getMaterialItems",e,t),o$1={geometryType:t,fields:i,spatialReference:k.fromJSON(this.spatialReference)},n=new x$1(a,this.tileStore.tileScheme.tileInfo),{matcher:l$2,aggregateMatcher:c}=e.mesh;return this._store=n,this._matchers.feature=l(l$2,n,o$1,this._resourceManagerProxy),this._matchers.aggregate=o(c,(e=>l(e,n,o$1,this._resourceManagerProxy))),new l$1(t,s,n)}async _onTileData(e,t,s,r$1){f(r$1);const{type:o,addOrUpdate:n,remove:c,clear:d,end:h}=t,f$1=!!this._schema.mesh.sortKey;if(!n){const t={type:o,addOrUpdate:null,remove:c,clear:d,end:h,sort:f$1};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t},r$1)}const m=this._processFeatures(e,n,s,r$1,t.status.version);try{const s=await m;if(t$1(s)){const t={type:o,addOrUpdate:null,remove:c,clear:d,end:h,sort:f$1};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t},r$1)}const n=[];for(const t of s){let s=!1;const r$1=t.message.bufferIds,i=e.key.id,o=t.message.tileKey;if(i!==o&&r(r$1)){if(!this.tileStore.get(o)){this._addBufferData(i,t),n.push(t);continue}let e=this._bufferIds.get(o);e||(e=new Set,this._bufferIds.set(o,e));const a=Array.from(r$1);for(const t of a){if(e.has(t)){s=!0;break}e.add(t);}}s||(this._addBufferData(i,t),n.push(t));}await Promise.all(n.map((s=>{const i=e.key.id===s.message.tileKey,a=i?t.remove:[],n=i&&t.end;return this._updateTileMesh(o,e,s,a,n,t.clear,r$1.signal)})));}catch(u){this._handleError(e,u,r$1);}}async _updateTileMesh(e$1,t,s,i,a,o$1,c){const d=e$1,h=s.message.tileKey,f$1=!!this._schema.mesh.sortKey;h!==t.key.id&&(a=!1);const m=o(s,(e=>e.message)),u=o(s,(e=>e.transferList))||[],p={type:d,addOrUpdate:m,remove:i,clear:o$1,end:a,sort:f$1},g={transferList:e(u)||[],signal:c};return f(g),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:h,data:p},g)}async _processFeatures(e,t,s,r,a){if(t$1(t)||!t.hasFeatures)return null;const o={transform:e.transform,hasZ:!1,hasM:!1},n=this._factory,c={viewingMode:"",scale:e.scale},d=await this._matchers.feature,h=await this._matchers.aggregate;f(r);const f$1=this._getLabelInfos(e,t);return await n.analyze(t.getCursor(),this._resourceManagerProxy,d,h,o,c),f(r),this._writeFeatureSet(e,t,o,f$1,n,s,a)}_writeFeatureSet(e,t,s,r$1,i,o,n){const l=t.getSize(),c=new E(e.key.id,{features:l,records:l,metrics:0},this._schema.mesh.matcher.symbologyType,o,!0,n),d={viewingMode:"",scale:e.scale},h=t.getCursor();for(;h.next();)try{const t=h.getDisplayId(),o=r(r$1)?r$1.get(t):null;i.writeCursor(c,h,s,d,e.level,o,this._resourceManagerProxy);}catch(m){}const f=e.tileInfoView.tileInfo.isWrappable;return c.serialize(f)}_handleError(e,t,s){if(!g(t)){const r={tileKey:e.id,error:t.message};return this.remoteClient.invoke("tileRenderer.onTileError",r,{signal:s.signal})}}_getLabelingSchemaForScale(e){const t=this._schema.mesh.labels;if(t$1(t))return null;if("subtype"===t.type){const s={type:"subtype",classes:{}};let r=!1;for(const i in t.classes){const a=t.classes[i].filter((t=>I(t,e.scale)));r=r||!!a.length,s.classes[i]=a;}return r?s:null}const s=t.classes.filter((t=>I(t,e.scale)));return s.length?{type:"simple",classes:s}:null}_getLabels(e,t){if("subtype"===t.type){const s=this.service.subtypeField,r=f$1(s,"Expected to find subtype Field"),i=e.readAttribute(r);return null==i?[]:t.classes[i]??[]}return t.classes}_getLabelInfos(e,s){const r=this._getLabelingSchemaForScale(e);if(t$1(r))return null;const a=new Map,o=s.getCursor();for(;o.next();){const e=o.getDisplayId(),s=[],i=p$1(e),n$1=i&&1!==o.readAttribute("cluster_count")?"aggregate":"feature",l=this._getLabels(o,r);for(const r of l){if(r.target!==n$1)continue;const a=o.getStorage(),l=i&&"feature"===n$1?a.getComputedStringAtIndex(o.readAttribute("referenceId"),r.fieldIndex):a.getComputedStringAtIndex(e,r.fieldIndex);if(!l)continue;const c=n(l.toString()),d=c[0],h=c[1];this._store.getMosaicItem(r.symbol,t$2(d)).then((e=>{s[r.index]={glyphs:e.glyphMosaicItems,rtl:h,index:r.index};}));}a.set(e,s);}return a}};M=e$1([n$1("esri.views.2d.layers.features.processors.SymbolProcessor")],M);const x=M;

export default x;
