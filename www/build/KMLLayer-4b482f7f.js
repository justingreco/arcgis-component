import { r, b, e, d as d$1, I as s, bD as u$1, n as n$1, $ as w } from './cast-3d5be210.js';
import './geometry-2f332a26.js';
import { n, j as j$3 } from './Collection-a38e0489.js';
import { p } from './CollectionFlattener-9ce72729.js';
import { O as O$1 } from './MultiOriginJSONSupport-281c1c62.js';
import { j as j$1, l, U } from './reactiveUtils-bd6fe823.js';
import { u as Ut } from './request-ac4d8bfb.js';
import { o, k, r as r$1 } from './Point-edff2a11.js';
import { b as b$1 } from './Layer-569a1fc8.js';
import { a } from './BlendLayer-7884099a.js';
import { c } from './OperationalLayer-e04486e0.js';
import { v as v$1 } from './PortalLayer-e61e1a42.js';
import { n as n$2 } from './RefreshableLayer-496830b9.js';
import { t } from './ScaleRangeLayer-f9a9951f.js';
import { f } from './commonProperties-fca3036e.js';
import { u } from './JSONSupport-dce2c67b.js';
import { m } from './Portal-5df9f5a7.js';
import { j as j$2, S as S$1, g, d } from './kmlUtils-93190b99.js';
import { M as M$1 } from './Extent-f27111e1.js';
import './Polyline-dcdb3782.js';
import './HandleOwner-fe336959.js';
import './Handles-54afc0a7.js';
import './Identifiable-d9658370.js';
import './jsonUtils-f3f35e7f.js';
import './colorUtils-5009883d.js';
import './screenUtils-31d073db.js';
import './mat4-d5df0e58.js';
import './mathUtils-559a53d9.js';
import './_commonjsHelpers-8dd5c177.js';
import './asyncUtils-96c00c9e.js';
import './PortalItem-fa114dd2.js';
import './assets-99f5c3ee.js';
import './Promise-d2759b2e.js';
import './TimeExtent-66b53603.js';
import './persistableUrlUtils-5dcd6081.js';
import './fieldUtils-240a3b99.js';
import './unitUtils-a0a11e54.js';
import './opacityUtils-dcd94f00.js';
import './PopupTemplate-b459951f.js';
import './enumeration-6695a859.js';
import './number-c5a37d3e.js';
import './ActionToggle-a5849e6f.js';
import './aaBoundingBox-b312516d.js';
import './aaBoundingRect-5e1a4e52.js';
import './jsonUtils-e7c7add9.js';
import './UniqueValueRenderer-bb66af10.js';
import './symbols-ab3e849a.js';
import './CIMSymbol-15bdb580.js';
import './Symbol-573a64f6.js';
import './Color-25ce730a.js';
import './collectionUtils-302901c0.js';
import './Clonable-533c7a05.js';
import './ColorStop-64c57e35.js';
import './diffUtils-6436a697.js';
import './colorRamps-e3d9340f.js';
import './sizeVariableUtils-5330814d.js';
import './Graphic-93f45ded.js';
import './compilerUtils-d149ad5f.js';
import './jsonUtils-a25e8eb8.js';
import './styleUtils-d2332fad.js';
import './DictionaryLoader-d0d1b4ff.js';
import './LRUCache-5f25d277.js';
import './MemCache-04cdd0cd.js';
import './aliasOf-bdfe6662.js';
import './heatmapUtils-d302cc7f.js';
import './vec4f64-011248e0.js';
import './FeatureSet-1b85367a.js';
import './Field-2973a5cf.js';
import './fieldType-eb0b42e4.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var v;let j=v=class extends(n.EventedMixin(u(m))){constructor(){super(...arguments),this._sublayersHandles=null,this.description=null,this.id=null,this.networkLink=null,this.title=null,this.sourceJSON=null,this.fullExtent=null;}initialize(){j$1((()=>this.networkLink)).then((()=>j$1((()=>!0===this.visible)))).then((()=>this.load()));}load(e){if(!this.networkLink)return;if(this.networkLink.viewFormat)return;const t=r(e)?e.signal:null,s=this._fetchService(this._get("networkLink").href,t).then((e=>{const t=j$2(e.sublayers);this.fullExtent=M$1.fromJSON(t),this.sourceJSON=e;const s=b(j$3.ofType(v),S$1(v,e));this.sublayers?this.sublayers.addMany(s):this.sublayers=s,this.layer.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers");}));return this.addResolvingPromise(s),Promise.resolve(this)}set sublayers(e){const r=this._get("sublayers");r&&(r.forEach((e=>{e.parent=null,e.layer=null;})),this._sublayersHandles.forEach((e=>e.remove())),this._sublayersHandles=null),e&&(e.forEach((e=>{e.parent=this,e.layer=this.layer;})),this._sublayersHandles=[e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this.layer;})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null;}))]),this._set("sublayers",e);}castSublayers(e){return b(j$3.ofType(v),e)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"));}readVisible(e,r){return !!r.visibility}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((r=>r.layer=e));}_fetchService(e,r){return g(e,this.layer.outSpatialReference,this.layer.refreshInterval,r).then((e=>d(e.data)))}};e([d$1()],j.prototype,"description",void 0),e([d$1()],j.prototype,"id",void 0),e([d$1({readOnly:!0,value:null})],j.prototype,"networkLink",void 0),e([d$1({json:{write:{allowNull:!0}}})],j.prototype,"parent",void 0),e([d$1({value:null,json:{write:{allowNull:!0}}})],j.prototype,"sublayers",null),e([s("sublayers")],j.prototype,"castSublayers",null),e([d$1({value:null,json:{read:{source:"name",reader:e=>u$1(e)}}})],j.prototype,"title",void 0),e([d$1({value:!0})],j.prototype,"visible",null),e([o("visible",["visibility"])],j.prototype,"readVisible",null),e([d$1()],j.prototype,"sourceJSON",void 0),e([d$1({value:null})],j.prototype,"layer",null),e([d$1({type:M$1})],j.prototype,"fullExtent",void 0),j=v=e([n$1("esri.layers.support.KMLSublayer")],j);const S=j;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const F=["kml","xml"];let O=class extends(a(n$2(t(c(v$1(O$1(b$1))))))){constructor(...e){super(...e),this._visibleFolders=[],this.allSublayers=new p({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.outSpatialReference=k.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null;}initialize(){this.own([l((()=>this.sublayers),((e,r)=>{r&&r.forEach((e=>{e.parent=null,e.layer=null;})),e&&e.forEach((e=>{e.parent=this,e.layer=this;}));}),U),this.on("sublayer-update",(()=>this.notifyChange("fullExtent")))]);}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}readSublayersFromItemOrWebMap(e,r){this._visibleFolders=r.visibleFolders;}readSublayers(e,r,t){return S$1(S,r,t,this._visibleFolders)}writeSublayers(e,r){const t=[],o=e.toArray();for(;o.length;){const e=o[0];e.networkLink||(e.visible&&t.push(e.id),e.sublayers&&o.push(...e.sublayers.toArray())),o.shift();}r.visibleFolders=t;}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?Ut(this.url,F)||"KML":e||""}set title(e){this._set("title",e);}get visibleSublayers(){const e=this.sublayers,r=[],t=e=>{e.visible&&(r.push(e),e.sublayers&&e.sublayers.forEach(t));};return e&&e.forEach(t),r}get fullExtent(){return this._recomputeFullExtent()}load(e){const r$1=r(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"]},e).catch(w).then((()=>this._fetchService(r$1)))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy();}async _fetchService(e){const r=await Promise.resolve().then((()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:g(this.url,this.outSpatialReference,this.refreshInterval,e))),t=d(r.data);t&&this.read(t,{origin:"service"});}_recomputeFullExtent(){let e=null;r(this.extent)&&(e=this.extent.clone());const r$1=t=>{if(t.sublayers)for(const s of t.sublayers.items)r$1(s),s.visible&&s.fullExtent&&(r(e)?e.union(s.fullExtent):e=s.fullExtent.clone());};return r$1(this),e}};e([d$1({readOnly:!0})],O.prototype,"allSublayers",void 0),e([d$1({type:k})],O.prototype,"outSpatialReference",void 0),e([d$1({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],O.prototype,"path",void 0),e([d$1({readOnly:!0,json:{read:!1,write:!1}})],O.prototype,"legendEnabled",void 0),e([d$1({type:["show","hide","hide-children"]})],O.prototype,"listMode",void 0),e([d$1({type:["KML"]})],O.prototype,"operationalLayerType",void 0),e([d$1({})],O.prototype,"resourceInfo",void 0),e([d$1({type:j$3.ofType(S),json:{write:{ignoreOrigin:!0}}})],O.prototype,"sublayers",void 0),e([o(["web-map","portal-item"],"sublayers",["visibleFolders"])],O.prototype,"readSublayersFromItemOrWebMap",null),e([o("service","sublayers",["sublayers"])],O.prototype,"readSublayers",null),e([r$1("sublayers")],O.prototype,"writeSublayers",null),e([d$1({readOnly:!0,json:{read:!1}})],O.prototype,"type",void 0),e([d$1({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],O.prototype,"title",null),e([d$1(f)],O.prototype,"url",void 0),e([d$1({readOnly:!0})],O.prototype,"visibleSublayers",null),e([d$1({type:M$1})],O.prototype,"extent",void 0),e([d$1()],O.prototype,"fullExtent",null),O=e([n$1("esri.layers.KMLLayer")],O);const M=O;

export default M;
