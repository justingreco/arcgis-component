import { e as e$1, d as d$2, n as n$3, m as m$4, s, r as r$1, a as s$1, $ as w } from './cast-3d5be210.js';
import { j } from './Collection-a38e0489.js';
import { p as p$7 } from './CollectionFlattener-9ce72729.js';
import { n as n$4 } from './loadAll-0acccebb.js';
import { O } from './MultiOriginJSONSupport-281c1c62.js';
import { U, G } from './request-ac4d8bfb.js';
import { o, k } from './Point-edff2a11.js';
import { b } from './Layer-569a1fc8.js';
import { E } from './BuildingComponentSublayer-b0000040.js';
import { d as d$3 } from './BuildingGroupSublayer-9bcbca35.js';
import { i as i$2 } from './APIKeyMixin-04df9c0f.js';
import { p as p$6 } from './ArcGISService-848d76dd.js';
import { c as c$5 } from './OperationalLayer-e04486e0.js';
import { v } from './PortalLayer-e61e1a42.js';
import { t as t$5 } from './ScaleRangeLayer-f9a9951f.js';
import { A, K as K$1 } from './SceneService-83b1fafe.js';
import { l as l$3 } from './JSONSupport-dce2c67b.js';
import { t as t$4 } from './uuid-ac104993.js';
import { r } from './enumeration-6695a859.js';
import { I as t$3 } from './symbols-ab3e849a.js';
import { m as m$5 } from './Portal-5df9f5a7.js';
import { m as m$6 } from './Promise-d2759b2e.js';
import { j as j$1, y, d as d$4 } from './commonProperties-fca3036e.js';
import { l as l$4 } from './FetchAssociatedFeatureLayer-3be207ea.js';
import './HandleOwner-fe336959.js';
import './Handles-54afc0a7.js';
import './reactiveUtils-bd6fe823.js';
import './asyncUtils-96c00c9e.js';
import './geometry-2f332a26.js';
import './Extent-f27111e1.js';
import './Polyline-dcdb3782.js';
import './Identifiable-d9658370.js';
import './PopupTemplate-b459951f.js';
import './fieldUtils-240a3b99.js';
import './number-c5a37d3e.js';
import './ActionToggle-a5849e6f.js';
import './UniqueValueRenderer-bb66af10.js';
import './ColorStop-64c57e35.js';
import './Color-25ce730a.js';
import './colorUtils-5009883d.js';
import './mathUtils-559a53d9.js';
import './diffUtils-6436a697.js';
import './colorRamps-e3d9340f.js';
import './opacityUtils-dcd94f00.js';
import './screenUtils-31d073db.js';
import './sizeVariableUtils-5330814d.js';
import './Graphic-93f45ded.js';
import './Clonable-533c7a05.js';
import './compilerUtils-d149ad5f.js';
import './jsonUtils-a25e8eb8.js';
import './Symbol-573a64f6.js';
import './persistableUrlUtils-5dcd6081.js';
import './styleUtils-d2332fad.js';
import './jsonUtils-e7c7add9.js';
import './DictionaryLoader-d0d1b4ff.js';
import './LRUCache-5f25d277.js';
import './MemCache-04cdd0cd.js';
import './CIMSymbol-15bdb580.js';
import './aliasOf-bdfe6662.js';
import './heatmapUtils-d302cc7f.js';
import './vec4f64-011248e0.js';
import './FeatureLayer-6922c890.js';
import './sql-817bbae7.js';
import './Field-2973a5cf.js';
import './fieldType-eb0b42e4.js';
import './HeightModelInfo-12951268.js';
import './unitUtils-a0a11e54.js';
import './workers-c7a27acb.js';
import './assets-99f5c3ee.js';
import './intl-54ccdc89.js';
import './messages-5e9a4a9e.js';
import './queryZScale-127601ac.js';
import './zscale-0befeff4.js';
import './FeatureSet-1b85367a.js';
import './aaBoundingBox-b312516d.js';
import './aaBoundingRect-5e1a4e52.js';
import './collectionUtils-302901c0.js';
import './BlendLayer-7884099a.js';
import './jsonUtils-f3f35e7f.js';
import './mat4-d5df0e58.js';
import './_commonjsHelpers-8dd5c177.js';
import './CustomParametersMixin-f702935f.js';
import './labelingInfo-6e0c44d1.js';
import './TimeExtent-66b53603.js';
import './Query-1f6c7e43.js';
import './LabelClass-936eaa93.js';
import './labelUtils-824fc88a.js';
import './defaultsJSON-5fb6161d.js';
import './OrderedLayer-d02e1d58.js';
import './RefreshableLayer-496830b9.js';
import './TemporalLayer-6cfc496a.js';
import './TimeInfo-0c128ef4.js';
import './arcgisLayerUrl-a268a370.js';
import './FeatureType-691faa46.js';
import './fieldProperties-fa42dff4.js';
import './FieldsIndex-ea481e79.js';
import './LayerFloorInfo-b83a3647.js';
import './versionUtils-55e187fe.js';
import './styleUtils-106413c0.js';
import './TopFeaturesQuery-babc7c57.js';
import './popupUtils-883a107f.js';
import './capabilities-c37437a0.js';
import './I3SIndexInfo-c5ab16fa.js';
import './I3SLayerDefinitions-ea40561e.js';
import './PortalItem-fa114dd2.js';
import './originUtils-184f7769.js';
import './multiOriginJSONSupportUtils-917e4f3f.js';
import './saveUtils-afc71761.js';
import './resourceUtils-cc76b8e8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let e=class extends l$3{constructor(){super(...arguments),this.type=null;}};e$1([d$2({type:String,readOnly:!0,json:{write:!0}})],e.prototype,"type",void 0),e=e$1([n$3("esri.layers.support.BuildingFilterAuthoringInfo")],e);const p$5=e;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var p$4;let i$1=p$4=class extends l$3{constructor(){super(...arguments),this.filterType=null,this.filterValues=null;}clone(){return new p$4({filterType:this.filterType,filterValues:m$4(this.filterValues)})}};e$1([d$2({type:String,json:{write:!0}})],i$1.prototype,"filterType",void 0),e$1([d$2({type:[String],json:{write:!0}})],i$1.prototype,"filterValues",void 0),i$1=p$4=e$1([n$3("esri.layers.support.BuildingFilterAuthoringInfoType")],i$1);const l$2=i$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var c$4;const l$1=j.ofType(l$2);let n$2=c$4=class extends l$3{clone(){return new c$4({filterTypes:m$4(this.filterTypes)})}};e$1([d$2({type:l$1,json:{write:!0}})],n$2.prototype,"filterTypes",void 0),n$2=c$4=e$1([n$3("esri.layers.support.BuildingFilterAuthoringInfoBlock")],n$2);const m$3=n$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var p$3;const l=j.ofType(m$3);let n$1=p$3=class extends p$5{constructor(){super(...arguments),this.type="checkbox";}clone(){return new p$3({filterBlocks:m$4(this.filterBlocks)})}};e$1([d$2({type:["checkbox"]})],n$1.prototype,"type",void 0),e$1([d$2({type:l,json:{write:!0}})],n$1.prototype,"filterBlocks",void 0),n$1=p$3=e$1([n$3("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],n$1);const u$3=n$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let t$2=class extends l$3{};e$1([d$2({readOnly:!0,json:{read:!1}})],t$2.prototype,"type",void 0),t$2=e$1([n$3("esri.layers.support.BuildingFilterMode")],t$2);const p$2=t$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var t$1;let p$1=t$1=class extends p$2{constructor(){super(...arguments),this.type="solid";}clone(){return new t$1}};e$1([d$2({type:["solid"],readOnly:!0,json:{write:!0}})],p$1.prototype,"type",void 0),p$1=t$1=e$1([n$3("esri.layers.support.BuildingFilterModeSolid")],p$1);const i=p$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var c$3;let m$2=c$3=class extends p$2{constructor(){super(...arguments),this.type="wire-frame",this.edges=null;}clone(){return new c$3({edges:m$4(this.edges)})}};e$1([r({wireFrame:"wire-frame"})],m$2.prototype,"type",void 0),e$1([d$2(t$3)],m$2.prototype,"edges",void 0),m$2=c$3=e$1([n$3("esri.layers.support.BuildingFilterModeWireFrame")],m$2);const a$1=m$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var t;let p=t=class extends p$2{constructor(){super(...arguments),this.type="x-ray";}clone(){return new t}};e$1([d$2({type:["x-ray"],readOnly:!0,json:{write:!0}})],p.prototype,"type",void 0),p=t=e$1([n$3("esri.layers.support.BuildingFilterModeXRay")],p);const c$2=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var d$1;const a={nonNullable:!0,types:{key:"type",base:p$2,typeMap:{solid:i,"wire-frame":a$1,"x-ray":c$2}},json:{read:e=>{switch(e&&e.type){case"solid":return i.fromJSON(e);case"wireFrame":return a$1.fromJSON(e);case"x-ray":return c$2.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let u$2=d$1=class extends l$3{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new i,this.title="";}clone(){return new d$1({filterExpression:this.filterExpression,filterMode:m$4(this.filterMode),title:this.title})}};e$1([d$2({type:String,json:{write:{enabled:!0,isRequired:!0}}})],u$2.prototype,"filterExpression",void 0),e$1([d$2(a)],u$2.prototype,"filterMode",void 0),e$1([d$2({type:String,json:{write:{enabled:!0,isRequired:!0}}})],u$2.prototype,"title",void 0),u$2=d$1=e$1([n$3("esri.layers.support.BuildingFilterBlock")],u$2);const c$1=u$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var u$1;const d=j.ofType(c$1);let m$1=u$1=class extends l$3{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=t$4(),this.name=null;}clone(){return new u$1({description:this.description,filterBlocks:m$4(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:m$4(this.filterAuthoringInfo)})}};e$1([d$2({type:String,json:{write:!0}})],m$1.prototype,"description",void 0),e$1([d$2({type:d,json:{write:{enabled:!0,isRequired:!0}}})],m$1.prototype,"filterBlocks",void 0),e$1([d$2({types:{key:"type",base:p$5,typeMap:{checkbox:u$3}},json:{read:o=>"checkbox"===(o&&o.type)?u$3.fromJSON(o):null,write:!0}})],m$1.prototype,"filterAuthoringInfo",void 0),e$1([d$2({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],m$1.prototype,"id",void 0),e$1([d$2({type:String,json:{write:{enabled:!0,isRequired:!0}}})],m$1.prototype,"name",void 0),m$1=u$1=e$1([n$3("esri.layers.support.BuildingFilter")],m$1);const f=m$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const u=s.getLogger("esri.layers.support.BuildingSummaryStatistics");let n=class extends l$3{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null;}};e$1([d$2({type:String})],n.prototype,"fieldName",void 0),e$1([d$2({type:String})],n.prototype,"modelName",void 0),e$1([d$2({type:String})],n.prototype,"label",void 0),e$1([d$2({type:Number})],n.prototype,"min",void 0),e$1([d$2({type:Number})],n.prototype,"max",void 0),e$1([d$2({json:{read:e=>Array.isArray(e)&&(e.every((e=>"string"==typeof e))||e.every((e=>"number"==typeof e)))?e.slice():null}})],n.prototype,"mostFrequentValues",void 0),e$1([d$2({type:[Number]})],n.prototype,"subLayerIds",void 0),n=e$1([n$3("esri.layers.support.BuildingFieldStatistics")],n);let m=class extends(m$5.LoadableMixin(m$6(l$3))){constructor(){super(...arguments),this.url=null;}get fields(){return this.loaded||"loading"===this.loadStatus?this._get("fields"):(u.error("building summary statistics are not loaded"),null)}load(e){const r=r$1(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(r)),Promise.resolve(this)}async _fetchService(e){const t=(await U(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(t,{origin:"service"});}};e$1([d$2({constructOnly:!0,type:String})],m.prototype,"url",void 0),e$1([d$2({readOnly:!0,type:[n],json:{read:{source:"summary"}}})],m.prototype,"fields",null),m=e$1([n$3("esri.layers.support.BuildingSummaryStatistics")],m);const c=m;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const B=s.getLogger("esri.layers.BuildingSceneLayer"),_=j.ofType(f),P=m$4(d$3.sublayersProperty);P.json.origins["web-scene"]={type:[E],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},P.json.origins["portal-item"]={type:[E],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}};let K=class extends(A(p$6(c$5(v(t$5(O(i$2(b)))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new p$7({getCollections:()=>[this.sublayers],getChildrenFunction:e=>"building-group"===e.type?e.sublayers:null}),this.sublayers=null,this.sublayerOverrides=null,this.filters=new _,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.type="building-scene";}normalizeCtorArgs(e){return "string"==typeof e?{url:e}:e}destroy(){this.allSublayers.destroy();}readSublayers(e,r,t){const s=d$3.readSublayers(e,r,t);return d$3.forEachSublayer(s,(e=>e.layer=this)),this.sublayerOverrides&&(this.applySublayerOverrides(s,this.sublayerOverrides),this.sublayerOverrides=null),s}applySublayerOverrides(e,{overrides:r,context:t}){d$3.forEachSublayer(e,(e=>e.read(r.get(e.id),t)));}readSublayerOverrides(e,r){const t=new Map;for(const i of e)null!=i&&"object"==typeof i&&"number"==typeof i.id?t.set(i.id,i):r.messages.push(new s$1("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:i}));return {overrides:t,context:r}}writeSublayerOverrides(e,r,t){const s=[];d$3.forEachSublayer(this.sublayers,(e=>{const r=e.write({},t);Object.keys(r).length>1&&s.push(r);})),s.length>0&&(r.sublayers=s);}writeUnappliedOverrides(e,r){r.sublayers=[],e.overrides.forEach((e=>{r.sublayers.push(m$4(e));}));}write(e,r){return e=super.write(e,r),!r||"web-scene"!==r.origin&&"portal-item"!==r.origin||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,r):this.sublayerOverrides&&this.writeUnappliedOverrides(this.sublayerOverrides,e)),e}read(e,r){if(super.read(e,r),r&&("web-scene"===r.origin||"portal-item"===r.origin)&&null!=e&&Array.isArray(e.sublayers)){const t=this.readSublayerOverrides(e.sublayers,r);this.sublayers?this.applySublayerOverrides(this.sublayers,t):this.sublayerOverrides=t;}}readSummaryStatistics(e,r){if("string"==typeof r.statisticsHRef){const e=G(this.parsedUrl.path,r.statisticsHRef);return new c({url:e})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo();}load(e){const r=r$1(e)?e.signal:null,t=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(w).then((()=>this._fetchService(r))).then((()=>this._fetchAssociatedFeatureService(r)));return this.addResolvingPromise(t),Promise.resolve(this)}loadAll(){return n$4(this,(e=>{d$3.forEachSublayer(this.sublayers,(r=>{"building-group"!==r.type&&e(r);})),this.summaryStatistics&&e(this.summaryStatistics);}))}async saveAs(e,r){return this._debouncedSaveOperations(K$1.SAVE_AS,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(K$1.SAVE,e)}validateLayer(e){if(!e.layerType||"Building"!==e.layerType)throw new s$1("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return ["Building"]}_validateElevationInfo(){const e=this.elevationInfo;e&&("absolute-height"!==e.mode&&B.warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&B.warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"));}async _fetchAssociatedFeatureService(e){const r=new l$4(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedFeatureServiceItem=await r.fetchPortalItem();}catch(t){B.warn("Associated feature service item could not be loaded",t);}}};e$1([d$2({type:["BuildingSceneLayer"]})],K.prototype,"operationalLayerType",void 0),e$1([d$2({readOnly:!0})],K.prototype,"allSublayers",void 0),e$1([d$2(P)],K.prototype,"sublayers",void 0),e$1([o("service","sublayers")],K.prototype,"readSublayers",null),e$1([d$2({type:_,nonNullable:!0,json:{write:!0}})],K.prototype,"filters",void 0),e$1([d$2({type:String,json:{write:!0}})],K.prototype,"activeFilterId",void 0),e$1([d$2({readOnly:!0,type:c})],K.prototype,"summaryStatistics",void 0),e$1([o("summaryStatistics",["statisticsHRef"])],K.prototype,"readSummaryStatistics",null),e$1([d$2({type:[String],json:{read:!1}})],K.prototype,"outFields",void 0),e$1([d$2(j$1)],K.prototype,"fullExtent",void 0),e$1([d$2({type:["show","hide","hide-children"]})],K.prototype,"listMode",void 0),e$1([d$2(y(k))],K.prototype,"spatialReference",void 0),e$1([d$2(d$4)],K.prototype,"elevationInfo",null),e$1([d$2({json:{read:!1},readOnly:!0})],K.prototype,"type",void 0),e$1([d$2()],K.prototype,"associatedFeatureServiceItem",void 0),K=e$1([n$3("esri.layers.BuildingSceneLayer")],K);const R=K;

export default R;
