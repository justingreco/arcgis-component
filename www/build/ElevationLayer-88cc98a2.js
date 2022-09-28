import { s, aR as p$1, r, a as s$2, $ as w$1, X as f, e, d, n as n$1 } from './cast-3d5be210.js';
import { U, m as I } from './request-ac4d8bfb.js';
import { O } from './MultiOriginJSONSupport-281c1c62.js';
import { o } from './Point-edff2a11.js';
import { v as v$1 } from './HeightModelInfo-12951268.js';
import { b } from './Layer-569a1fc8.js';
import { s as s$1 } from './ArcGISCachedService-ad6ede63.js';
import { p } from './ArcGISService-848d76dd.js';
import { c } from './OperationalLayer-e04486e0.js';
import { v } from './PortalLayer-e61e1a42.js';
import { f as f$1 } from './commonProperties-fca3036e.js';
import { n } from './LercDecoder-0b4fb3f9.js';
import './JSONSupport-dce2c67b.js';
import './unitUtils-a0a11e54.js';
import './geometry-2f332a26.js';
import './Extent-f27111e1.js';
import './Polyline-dcdb3782.js';
import './Collection-a38e0489.js';
import './Identifiable-d9658370.js';
import './Portal-5df9f5a7.js';
import './Promise-d2759b2e.js';
import './TilemapCache-55eaec41.js';
import './TileInfo-3c9e9a6a.js';
import './aaBoundingRect-5e1a4e52.js';
import './mathUtils-559a53d9.js';
import './byteSizeEstimations-5d50d6ff.js';
import './HandleOwner-fe336959.js';
import './Handles-54afc0a7.js';
import './reactiveUtils-bd6fe823.js';
import './LRUCache-5f25d277.js';
import './MemCache-04cdd0cd.js';
import './arcgisLayerUrl-a268a370.js';
import './persistableUrlUtils-5dcd6081.js';
import './asyncUtils-96c00c9e.js';
import './PortalItem-fa114dd2.js';
import './assets-99f5c3ee.js';
import './TimeExtent-66b53603.js';
import './fieldUtils-240a3b99.js';
import './opacityUtils-dcd94f00.js';
import './workers-c7a27acb.js';
import './intl-54ccdc89.js';
import './number-c5a37d3e.js';
import './messages-5e9a4a9e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const w=s.getLogger("esri.layers.ElevationLayer");let T=class extends(s$1(p(c(v(O(b)))))){constructor(...e){super(...e),this.copyright=null,this.heightModelInfo=null,this.path=null,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=n();}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}destroy(){this._lercDecoder=p$1(this._lercDecoder);}set minScale(e){this.constructed&&w.warn(`${this.declaredClass}.minScale support has been removed (since 4.5)`);}get minScale(){}set maxScale(e){this.constructed&&w.warn(`${this.declaredClass}.maxScale support has been removed (since 4.5)`);}get maxScale(){}readVersion(e,r){let t=r.currentVersion;return t||(t=9.3),t}load(e){const r$1=r(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:e=>{for(let r=0;r<e.typeKeywords.length;r++)if("elevation 3d layer"===e.typeKeywords[r].toLowerCase())return !0;throw new s$2("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).catch(w$1).then((()=>this._fetchImageService(r$1)))),Promise.resolve(this)}fetchTile(e,t,o,i){const a=r((i=i||{signal:null}).signal)?i.signal:i.signal=(new AbortController).signal,l={responseType:"array-buffer",signal:a},n={noDataValue:i.noDataValue,returnFileInfo:!0};return this.load().then((()=>this._fetchTileAvailability(e,t,o,i))).then((()=>U(this.getTileUrl(e,t,o),l))).then((e=>this._lercDecoder.decode(e.data,n,a))).then((e=>({values:e.pixelData,width:e.width,height:e.height,maxZError:e.fileInfo.maxZError,noDataValue:e.noDataValue,minValue:e.minValue,maxValue:e.maxValue})))}getTileUrl(e,r,t){const o=!this.tilemapCache&&this.supportsBlankTile,i=I({...this.parsedUrl.query,blankTile:!o&&null});return `${this.parsedUrl.path}/tile/${e}/${r}/${t}${i?"?"+i:""}`}async queryElevation(e,r){const{ElevationQuery:t}=await import('./ElevationQuery-d888eff2.js');f(r);return (new t).query(this,e,r)}async createElevationSampler(e,r){const{ElevationQuery:t}=await import('./ElevationQuery-d888eff2.js');f(r);return (new t).createSampler(this,e,r)}_fetchTileAvailability(e,r,t,o){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,r,t,o):Promise.resolve("unknown")}async _fetchImageService(e){if(this.sourceJSON)return this.sourceJSON;const t={query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e},o=await U(this.parsedUrl.path,t);o.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=o.data,this.read(o.data,{origin:"service",url:this.parsedUrl});}get hasOverriddenFetchTile(){return !this.fetchTile.__isDefault__}};e([d({json:{read:{source:"copyrightText"}}})],T.prototype,"copyright",void 0),e([d({readOnly:!0,type:v$1})],T.prototype,"heightModelInfo",void 0),e([d({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],T.prototype,"path",void 0),e([d({type:["show","hide"]})],T.prototype,"listMode",void 0),e([d({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],T.prototype,"minScale",null),e([d({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],T.prototype,"maxScale",null),e([d({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],T.prototype,"opacity",void 0),e([d({type:["ArcGISTiledElevationServiceLayer"]})],T.prototype,"operationalLayerType",void 0),e([d()],T.prototype,"sourceJSON",void 0),e([d({json:{read:!1},value:"elevation",readOnly:!0})],T.prototype,"type",void 0),e([d(f$1)],T.prototype,"url",void 0),e([d()],T.prototype,"version",void 0),e([o("version",["currentVersion"])],T.prototype,"readVersion",null),T=e([n$1("esri.layers.ElevationLayer")],T),T.prototype.fetchTile.__isDefault__=!0;const x=T;

export default x;
