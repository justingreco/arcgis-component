import { s as s$1, a as s$2, X as f, J as g$1, m as m$1, f as r$3, $ as w$1, h as e$3, aM as O$1, e as e$4, d as d$1, n as n$2 } from './cast-3d5be210.js';
import { j, m as I, U as U$1, K, G, B as Bt, C as Ct, H, f as ft, F, O as Ot, D as C } from './request-ac4d8bfb.js';
import { O } from './MultiOriginJSONSupport-281c1c62.js';
import { k, r as r$4, o as o$5 } from './Point-edff2a11.js';
import { M } from './Extent-f27111e1.js';
import { b } from './Layer-569a1fc8.js';
import { i } from './APIKeyMixin-04df9c0f.js';
import { s as s$3 } from './ArcGISCachedService-ad6ede63.js';
import { p } from './ArcGISService-848d76dd.js';
import { a as a$1 } from './BlendLayer-7884099a.js';
import { o as o$4 } from './CustomParametersMixin-f702935f.js';
import { c } from './OperationalLayer-e04486e0.js';
import { v as v$1 } from './PortalLayer-e61e1a42.js';
import { t as t$1 } from './ScaleRangeLayer-f9a9951f.js';
import { S as S$1 } from './TileInfo-3c9e9a6a.js';
import { n as n$1, z } from './TilemapCache-55eaec41.js';
import { e as e$1 } from './TileKey-97254206.js';
import { e as e$2 } from './jsonContext-79064d29.js';
import { U as U$2 } from './persistableUrlUtils-5dcd6081.js';
import { l as l$3 } from './StyleRepository-de1f9a41.js';
import { l as l$2 } from './capabilities-cb32c85a.js';
import './JSONSupport-dce2c67b.js';
import './geometry-2f332a26.js';
import './Polyline-dcdb3782.js';
import './Collection-a38e0489.js';
import './Identifiable-d9658370.js';
import './Portal-5df9f5a7.js';
import './Promise-d2759b2e.js';
import './arcgisLayerUrl-a268a370.js';
import './jsonUtils-f3f35e7f.js';
import './colorUtils-5009883d.js';
import './screenUtils-31d073db.js';
import './mat4-d5df0e58.js';
import './mathUtils-559a53d9.js';
import './_commonjsHelpers-8dd5c177.js';
import './commonProperties-fca3036e.js';
import './TimeExtent-66b53603.js';
import './fieldUtils-240a3b99.js';
import './unitUtils-a0a11e54.js';
import './opacityUtils-dcd94f00.js';
import './asyncUtils-96c00c9e.js';
import './PortalItem-fa114dd2.js';
import './assets-99f5c3ee.js';
import './aaBoundingRect-5e1a4e52.js';
import './byteSizeEstimations-5d50d6ff.js';
import './HandleOwner-fe336959.js';
import './Handles-54afc0a7.js';
import './reactiveUtils-bd6fe823.js';
import './LRUCache-5f25d277.js';
import './MemCache-04cdd0cd.js';
import './StyleDefinition-8856d24f.js';
import './enums-395c521f.js';
import './enums-33a95ace.js';
import './enums-4770f29d.js';
import './VertexElementDescriptor-3b53aa99.js';
import './Color-25ce730a.js';
import './colorUtils-e0bbe79f.js';
import './unitBezier-f1aeb191.js';
import './GeometryUtils-bcda40bd.js';
import './Geometry-7a3815d2.js';
import './context-util-5ae1bf7b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let A=null;function o$3(o){if(A)return A;const l={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"};return A=new Promise((A=>{const n=new Image;n.onload=()=>{n.onload=n.onerror=null,A(n.width>0&&n.height>0);},n.onerror=()=>{n.onload=n.onerror=null,A(!1);},n.src="data:image/webp;base64,"+l[o];})),A}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const h$2=s$1.getLogger("esri.layers.support.SpriteSource"),r$2=1.15;class o$2{constructor(t,e,i,s){this.baseURL=t,this.devicePixelRatio=e,this.maxTextureSize=i,this._spriteImageFormat=s,this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded";}get spriteNames(){const t=[];for(const e in this._spritesData)t.push(e);return t.sort(),t}getSpriteInfo(t){return this._spritesData[t]}async load(t){if(this.baseURL){this.loadStatus="loading";try{await this._loadSprites(t),this.loadStatus="loaded";}catch{this.loadStatus="failed";}}else this.loadStatus="failed";}_loadSprites(i){this._isRetina=this.devicePixelRatio>r$2;const o=j(this.baseURL),l=o.query?"?"+I(o.query):"",n=this._isRetina?"@2x":"",d=`${o.path}${n}.${this._spriteImageFormat}${l}`,g=`${o.path}${n}.json${l}`;return Promise.all([U$1(g,i),U$1(d,{responseType:"image",...i})]).then((([t,i])=>{const s=Object.keys(t.data);if(!s||0===s.length||1===s.length&&"_ssl"===s[0]||!i||!i.data)return this._spritesData=this.image=null,this.width=this.height=0,null;this._spritesData=t.data;const a=i.data,r=Math.max(this.maxTextureSize,4096);if(a.width>r||a.height>r){const t=`Sprite resource for style ${o.path} is bigger than the maximum allowed of ${r} pixels}`;throw h$2.error(t),new s$2("SpriteSource",t)}this.width=a.width,this.height=a.height;const l=document.createElement("canvas"),n=l.getContext("2d");l.width=a.width,l.height=a.height,n.drawImage(a,0,0,a.width,a.height);const d=n.getImageData(0,0,a.width,a.height),g=new Uint8Array(d.data);let u;for(let e=0;e<g.length;e+=4)u=g[e+3]/255,g[e]=g[e]*u,g[e+1]=g[e+1]*u,g[e+2]=g[e+2]*u;this.image=g;}))}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class l$1{constructor(e){this.url=e;}async fetchTileIndex(){return this._tileIndexPromise||(this._tileIndexPromise=U$1(this.url).then((e=>e.data.index))),this._tileIndexPromise}async dataKey(e,r){const l=await this.fetchTileIndex();return f(r),this._getIndexedDataKey(l,e)}_getIndexedDataKey(e,t){const l=[t];if(t.level<0||t.row<0||t.col<0||t.row>>t.level>0||t.col>>t.level>0)return null;let i=t;for(;0!==i.level;)i=new e$1(i.level-1,i.row>>1,i.col>>1,i.world),l.push(i);let o,s,n=e,a=l.pop();if(1===n)return a;for(;l.length;)if(o=l.pop(),s=(1&o.col)+((1&o.row)<<1),n){if(0===n[s]){a=null;break}if(1===n[s]){a=o;break}a=o,n=n[s];}return a}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class r$1{constructor(e,t){this._tilemap=e,this._tileIndexUrl=t;}async fetchTileIndex(t){return this._tileIndexPromise||(this._tileIndexPromise=U$1(this._tileIndexUrl,{query:{...t?.query}}).then((e=>e.data.index))),this._tileIndexPromise}dataKey(e,r){const{level:l,row:s,col:o}=e,n=new e$1(e);return this._tilemap.fetchAvailabilityUpsample(l,s,o,n,r).then((()=>(n.world=e.world,n))).catch((e=>{if(g$1(e))throw e;return null}))}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const r=new Map;function n(e,t,r,n,c){return o$1(e.replace(/\{z\}/gi,t.toString()).replace(/\{y\}/gi,r.toString()).replace(/\{x\}/gi,n.toString()),c)}function o$1(n,o){const c=r.get(n);if(c)return c.then((e=>m$1(e)));const i=U$1(n,{responseType:"array-buffer",...o}).then((({data:e})=>(r.delete(n),e))).catch((e=>{throw r.delete(n),e}));return r.set(n,i),i}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class h$1{constructor(u,h,m){this.tilemap=null,this.tileInfo=null,this.capabilities=null,this.fullExtent=null,this.name=u,this.sourceUrl=h;const f=j(this.sourceUrl),c=m$1(m),x=c.tiles;if(f)for(let t=0;t<x.length;t++){const s=j(x[t]);s&&(K(s.path)||(s.path=G(f.path,s.path)),x[t]=Bt(s.path,{...f.query,...s.query}));}this.tileServers=x;const d=m.capabilities&&m.capabilities.split(",").map((t=>t.toLowerCase().trim())),y=!0===m?.exportTilesAllowed,T=!0===d?.includes("tilemap"),g=y&&m.hasOwnProperty("maxExportTilesCount")?m.maxExportTilesCount:0;this.capabilities={operations:{supportsExportTiles:y,supportsTileMap:T},exportTiles:y?{maxExportTilesCount:+g}:null},this.tileInfo=n$1(c.tileInfo,c,null,{ignoreMinMaxLOD:!0});const M$1=m.tileMap?Bt(G(f.path,m.tileMap),f.query):null;T?(this.type="vector-tile",this.tilemap=new r$1(new z({layer:{parsedUrl:f,tileInfo:this.tileInfo,type:"vector-tile",tileServers:this.tileServers}}),M$1)):M$1&&(this.tilemap=new l$1(M$1)),this.fullExtent=M.fromJSON(m.fullExtent);}destroy(){}async getRefKey(t,e){return this.tilemap?.dataKey(t,e)??t}requestTile(t,e,i,r){const l=this.tileServers[e%this.tileServers.length];return n(l,t,e,i,r)}isCompatibleWith(t){const e=this.tileInfo,i=t.tileInfo;if(!e.spatialReference.equals(i.spatialReference))return !1;if(!e.origin.equals(i.origin))return !1;if(Math.round(e.dpi)!==Math.round(i.dpi))return !1;const r=e.lods,l=i.lods,s=Math.min(r.length,l.length);for(let o=0;o<s;o++){const t=r[o],e=l[o];if(t.level!==e.level||Math.round(t.scale)!==Math.round(e.scale))return !1}return !0}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const y=r$3.defaults&&r$3.defaults.io.corsEnabledServers;async function m(e,r){const t={source:null,sourceBase:null,sourceUrl:null,validatedSource:null,style:null,styleBase:null,styleUrl:null,sourceNameToSource:{},primarySourceName:"",spriteFormat:"png"},[s,o]="string"==typeof e?[e,null]:[null,e.jsonUrl];await S(t,"esri",e,o,r);const l={layerDefinition:t.validatedSource,url:s,serviceUrl:t.sourceUrl,style:t.style,styleUrl:t.styleUrl,spriteUrl:t.style.sprite&&h(t.styleBase,t.style.sprite),spriteFormat:t.spriteFormat,glyphsUrl:t.style.glyphs&&h(t.styleBase,t.style.glyphs),sourceNameToSource:t.sourceNameToSource,primarySourceName:t.primarySourceName};return d(l.spriteUrl),d(l.glyphsUrl),l}function d(e){if(!e)return;const r=H(e);y&&!y.includes(r)&&y.push(r);}function h(...e){let r;for(let t=0;t<e.length;++t)if(ft(e[t])){if(r){const s=r.split("://")[0];r=s+":"+e[t].trim();}}else r=K(e[t])?e[t]:G(r,e[t]);return Ct(r)}async function S(e,s,o,l,n){let i,c,a;if(f(n),"string"==typeof o){const e=F(o);d(e),a=await U$1(e,{...n,responseType:"json",query:{f:"json",...n?.query}}),a.ssl&&(i&&(i=i.replace(/^http:/i,"https:")),c&&(c=c.replace(/^http:/i,"https:"))),i=e,c=e;}else a={data:o},i=o.jsonUrl||null,c=l;const f$1=a.data;if(U(f$1))return e.styleUrl=i||null,x(e,f$1,c,n);if(w(f$1))return e.sourceUrl?g(e,f$1,c,!1,s,n):(e.sourceUrl=i||null,g(e,f$1,c,!0,s,n));throw new Error("You must specify the URL or the JSON for a service or for a style.")}function U(e){return !!e.sources}function w(e){return !U(e)}async function x(e,r,t,s){const o=t?Ot(t):C();e.styleBase=o,e.style=r,e.styleUrl&&d(e.styleUrl),r["sprite-format"]&&"webp"===r["sprite-format"].toLowerCase()&&(e.spriteFormat="webp");const l=[];if(r.sources&&r.sources.esri){const t=r.sources.esri;t.url?await S(e,"esri",h(o,t.url),void 0,s):l.push(S(e,"esri",t,o,s));}for(const n of Object.keys(r.sources))"esri"!==n&&"vector"===r.sources[n].type&&(r.sources[n].url?l.push(S(e,n,h(o,r.sources[n].url),void 0,s)):r.sources[n].tiles&&l.push(S(e,n,r.sources[n],o,s)));await Promise.all(l);}async function g(e,r,t,o,l,n){const i=t?Ct(t)+"/":C(),u=v(r,i),c=new h$1(l,Bt(i,n?.query),u);if(!o&&e.primarySourceName in e.sourceNameToSource){const r=e.sourceNameToSource[e.primarySourceName];if(!r.isCompatibleWith(c))return;null!=c.fullExtent&&(null!=r.fullExtent?r.fullExtent.union(c.fullExtent):r.fullExtent=c.fullExtent.clone()),r.tileInfo.lods.length<c.tileInfo.lods.length&&(r.tileInfo=c.tileInfo);}if(o?(e.sourceBase=i,e.source=r,e.validatedSource=u,e.primarySourceName=l,e.sourceUrl&&d(e.sourceUrl)):d(i),e.sourceNameToSource[l]=c,!e.style){if(null==r.defaultStyles)throw new Error;return "string"==typeof r.defaultStyles?S(e,"",h(i,r.defaultStyles,"root.json"),void 0,n):S(e,"",r.defaultStyles,h(i,"root.json"),n)}}function v(e,r){if(e.hasOwnProperty("tileInfo"))return e;const t={xmin:-20037507.067161843,ymin:-20037507.067161843,xmax:20037507.067161843,ymax:20037507.067161843,spatialReference:{wkid:102100}},s=512;let o=78271.51696400007,l=295828763.7957775;const n=[],i=e.hasOwnProperty("minzoom")?+e.minzoom:0,u=e.hasOwnProperty("maxzoom")?+e.maxzoom:22;for(let c=0;c<=u;c++)c>=i&&n.push({level:c,scale:l,resolution:o}),o/=2,l/=2;for(const c of e.tiles)d(h(r,c));return {capabilities:"TilesOnly",initialExtent:t,fullExtent:t,minScale:0,maxScale:0,tiles:e.tiles,tileInfo:{rows:s,cols:s,dpi:96,format:"pbf",origin:{x:-20037508.342787,y:20037508.342787},lods:n,spatialReference:{wkid:102100}}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const a=/^https:\/\/([a-z\d-]+)(\.maps([^.]*))?\.arcgis\.com/i,e={devext:{customBaseUrl:"mapsdevext.arcgis.com",portalHostname:"devext.arcgis.com"},qaext:{customBaseUrl:"mapsqa.arcgis.com",portalHostname:"qaext.arcgis.com"},www:{customBaseUrl:"maps.arcgis.com",portalHostname:"www.arcgis.com"}};function t(t){const s=t?.match(a);if(!s)return null;const[,o,r,l]=s;if(!o)return null;let c=null,m=null,n=null;const{devext:u,qaext:i,www:p}=e;if(r)if(c=o,l)switch(l.toLowerCase()){case"devext":({customBaseUrl:m,portalHostname:n}=u);break;case"qa":({customBaseUrl:m,portalHostname:n}=i);break;default:return null}else ({customBaseUrl:m,portalHostname:n}=p);else switch(o.toLowerCase()){case"devext":({customBaseUrl:m,portalHostname:n}=u);break;case"qaext":({customBaseUrl:m,portalHostname:n}=i);break;case"www":({customBaseUrl:m,portalHostname:n}=p);break;default:return null}return {customBaseUrl:m,isPortal:!1,portalHostname:n,urlKey:c}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const l=1e-6;function s(e,s){if(e===s)return !0;if(!e&&null!=s)return !1;if(null!=e&&!s)return !1;if(!e.spatialReference.equals(s.spatialReference)||e.dpi!==s.dpi)return !1;const o=e.origin,r=s.origin;if(Math.abs(o.x-r.x)>=l||Math.abs(o.y-r.y)>=l)return !1;let n,t;e.lods[0].scale>s.lods[0].scale?(n=e,t=s):(t=e,n=s);for(let i=n.lods[0].scale;i>=t.lods[t.lods.length-1].scale-l;i/=2)if(Math.abs(i-t.lods[0].scale)<l)return !0;return !1}function o(l,s){if(l===s)return l;if(!l&&null!=s)return s;if(null!=l&&!s)return l;const o=l.size[0],r=l.format,n=l.dpi,t={x:l.origin.x,y:l.origin.y},i=l.spatialReference.toJSON(),a=l.lods[0].scale>s.lods[0].scale?l.lods[0]:s.lods[0],d=l.lods[l.lods.length-1].scale<=s.lods[s.lods.length-1].scale?l.lods[l.lods.length-1]:s.lods[s.lods.length-1],f=a.scale,u=a.resolution,c=d.scale,p=[];let g=f,h=u,x=0;for(;g>c;)p.push({level:x,resolution:h,scale:g}),x++,g/=2,h/=2;return new S$1({size:[o,o],dpi:n,format:r||"pbf",origin:t,lods:p,spatialReference:i})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let B=class extends(a$1(t$1(s$3(p(c(v$1(o$4(i(O(b)))))))))){constructor(...e){super(...e),this._spriteSourceMap=new Map,this.currentStyleInfo=null,this.style=null,this.isReference=null,this.operationalLayerType="VectorTileLayer",this.type="vector-tile",this.url=null,this.symbolCollisionBoxesVisible=!1,this.path=null;}normalizeCtorArgs(e,t){return "string"==typeof e?{url:e,...t}:e}destroy(){if(this.sourceNameToSource)for(const e of Object.values(this.sourceNameToSource))e?.destroy();this._spriteSourceMap.clear();}async prefetchResources(e){await this.loadSpriteSource(globalThis.devicePixelRatio||1,e);}load(e){const r=this.loadFromPortal({supportedTypes:["Vector Tile Service"],supportsData:!1},e).catch(w$1).then((async()=>{if(!this.portalItem||!this.portalItem.id)return;const r=`${this.portalItem.itemUrl}/resources/styles/root.json`;(await U$1(r,{...e,query:{f:"json",...this.customParameters,token:this.apiKey}})).data&&this.read({url:r},e$2(this.portalItem));})).catch(w$1).then((()=>this._loadStyle(e)));return this.addResolvingPromise(r),Promise.resolve(this)}get attributionDataUrl(){const e=this.currentStyleInfo,t=e&&e.serviceUrl&&j(e.serviceUrl);if(!t)return null;const r=this._getDefaultAttribution(t.path);return r?Bt(r,{...this.customParameters,token:this.apiKey}):null}get capabilities(){const e=this.primarySource;return e?e.capabilities:{operations:{supportsExportTiles:!1,supportsTileMap:!1},exportTiles:null}}get fullExtent(){return this.primarySource?.fullExtent||null}get parsedUrl(){return this.serviceUrl?j(this.serviceUrl):null}get serviceUrl(){return this.currentStyleInfo&&this.currentStyleInfo.serviceUrl||null}get spatialReference(){return this.tileInfo&&this.tileInfo.spatialReference||null}get styleUrl(){return this.currentStyleInfo&&this.currentStyleInfo.styleUrl||null}writeStyleUrl(e,t$1){e&&ft(e)&&(e=`https:${e}`);const r=e$3(t(e));t$1.styleUrl=U$2(e,r);}get tileInfo(){const e=[];for(const r in this.sourceNameToSource)e.push(this.sourceNameToSource[r]);let t=this.primarySource?.tileInfo||new S$1;if(e.length>1)for(let r=0;r<e.length;r++)s(t,e[r].tileInfo)&&(t=o(t,e[r].tileInfo));return t}readVersion(e,t){return t.version?parseFloat(t.version):parseFloat(t.currentVersion)}async loadSpriteSource(e=1,t){if(!this._spriteSourceMap.has(e)){const r=l$2("2d").maxTextureSize,o=this.currentStyleInfo?.spriteUrl?Bt(this.currentStyleInfo.spriteUrl,{...this.customParameters,token:this.apiKey}):null,s=new o$2(o,e,r,this.currentStyleInfo.spriteFormat);await s.load(t),this._spriteSourceMap.set(e,s);}return this._spriteSourceMap.get(e)}async setSpriteSource(e,t="png",r=1,o){const s=l$2("2d").maxTextureSize,i=e?Bt(e,{...this.customParameters,token:this.apiKey}):null;if(!i)return null;const a=new o$2(i,r,s,t);try{return await a.load(o),this._spriteSourceMap.clear(),this._spriteSourceMap.set(r,a),this.currentStyleInfo.spriteUrl=i,this.emit("spriteSource-change",{spriteSource:a}),a}catch(n){w$1(n);}return null}async loadStyle(e,t){const r=e||this.style||this.url;return this._loadingTask&&"string"==typeof r&&this.url===r||(this._loadingTask?.abort(),this._loadingTask=O$1((e=>(this._spriteSourceMap.clear(),this._getSourceAndStyle(r,{signal:e}))),t)),this._loadingTask.promise}getStyleLayerId(e){return this.styleRepository.getStyleLayerId(e)}getStyleLayerIndex(e){return this.styleRepository.getStyleLayerIndex(e)}getPaintProperties(e){return m$1(this.styleRepository.getPaintProperties(e))}setPaintProperties(e,t){const r=this.styleRepository.isPainterDataDriven(e);this.styleRepository.setPaintProperties(e,t);const o=this.styleRepository.isPainterDataDriven(e);this.emit("paint-change",{layer:e,paint:t,isDataDriven:r||o});}getStyleLayer(e){return m$1(this.styleRepository.getStyleLayer(e))}setStyleLayer(e,t){this.styleRepository.setStyleLayer(e,t),this.emit("style-layer-change",{layer:e,index:t});}deleteStyleLayer(e){this.styleRepository.deleteStyleLayer(e),this.emit("delete-style-layer",{layer:e});}getLayoutProperties(e){return m$1(this.styleRepository.getLayoutProperties(e))}setLayoutProperties(e,t){this.styleRepository.setLayoutProperties(e,t),this.emit("layout-change",{layer:e,layout:t});}setStyleLayerVisibility(e,t){this.styleRepository.setStyleLayerVisibility(e,t),this.emit("style-layer-visibility-change",{layer:e,visibility:t});}getStyleLayerVisibility(e){return this.styleRepository.getStyleLayerVisibility(e)}write(e,t){return t?.origin&&!this.styleUrl?(t.messages&&t.messages.push(new s$2("vectortilelayer:unsupported",`VectorTileLayer (${this.title}, ${this.id}) with style defined by JSON only are not supported`,{layer:this})),null):super.write(e,t)}getTileUrl(e,t,r){return null}async _getSourceAndStyle(e,t){if(!e)throw new Error("invalid style!");const r=await m(e,{...t,query:{...this.customParameters,token:this.apiKey}});if("webp"===r.spriteFormat){await o$3("lossy")||(r.spriteFormat="png");}this._set("currentStyleInfo",{...r}),"string"==typeof e?(this.url=e,this.style=null):(this.url=null,this.style=e),this._set("sourceNameToSource",r.sourceNameToSource),this._set("primarySource",r.sourceNameToSource[r.primarySourceName]),this._set("styleRepository",new l$3(r.style)),this.read(r.layerDefinition,{origin:"service"}),this.emit("load-style");}_getDefaultAttribution(e){const t=e.match(/^https?:\/\/(?:basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i),r=["OpenStreetMap_v2","OpenStreetMap_Daylight_v2","OpenStreetMap_Export_v2","OpenStreetMap_FTS_v2","OpenStreetMap_GCS_v2","World_Basemap","World_Basemap_v2","World_Basemap_Export_v2","World_Basemap_GCS_v2","World_Basemap_WGS84","World_Contours_v2"];if(!t)return;const o=t[2]&&t[2].toLowerCase();if(!o)return;const s=t[1]||"";for(const i of r)if(i.toLowerCase().includes(o))return F(`//static.arcgis.com/attribution/Vector${s}/${i}`)}async _loadStyle(e){return this._loadingTask?.promise??this.loadStyle(null,e)}};e$4([d$1({readOnly:!0})],B.prototype,"attributionDataUrl",null),e$4([d$1({type:["show","hide"]})],B.prototype,"listMode",void 0),e$4([d$1({json:{read:!0,write:!0}})],B.prototype,"blendMode",void 0),e$4([d$1({readOnly:!0,json:{read:!1}})],B.prototype,"capabilities",null),e$4([d$1({readOnly:!0})],B.prototype,"currentStyleInfo",void 0),e$4([d$1({json:{read:!1},readOnly:!0,type:M})],B.prototype,"fullExtent",null),e$4([d$1()],B.prototype,"style",void 0),e$4([d$1({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],B.prototype,"isReference",void 0),e$4([d$1({type:["VectorTileLayer"]})],B.prototype,"operationalLayerType",void 0),e$4([d$1({readOnly:!0})],B.prototype,"parsedUrl",null),e$4([d$1({readOnly:!0})],B.prototype,"serviceUrl",null),e$4([d$1({type:k,readOnly:!0})],B.prototype,"spatialReference",null),e$4([d$1({readOnly:!0})],B.prototype,"styleRepository",void 0),e$4([d$1({readOnly:!0})],B.prototype,"sourceNameToSource",void 0),e$4([d$1({readOnly:!0})],B.prototype,"primarySource",void 0),e$4([d$1({type:String,readOnly:!0,json:{write:{ignoreOrigin:!0},origins:{"web-document":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],B.prototype,"styleUrl",null),e$4([r$4(["portal-item","web-document"],"styleUrl")],B.prototype,"writeStyleUrl",null),e$4([d$1({json:{read:!1,origins:{service:{read:!1}}},readOnly:!0,type:S$1})],B.prototype,"tileInfo",null),e$4([d$1({json:{read:!1},readOnly:!0,value:"vector-tile"})],B.prototype,"type",void 0),e$4([d$1({json:{origins:{"web-document":{read:{source:"styleUrl"}},"portal-item":{read:{source:"url"}}},write:!1,read:!1}})],B.prototype,"url",void 0),e$4([d$1({readOnly:!0})],B.prototype,"version",void 0),e$4([o$5("version",["version","currentVersion"])],B.prototype,"readVersion",null),e$4([d$1({type:Boolean})],B.prototype,"symbolCollisionBoxesVisible",void 0),e$4([d$1({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],B.prototype,"path",void 0),B=e$4([n$2("esri.layers.VectorTileLayer")],B);const E=B;

export default E;
