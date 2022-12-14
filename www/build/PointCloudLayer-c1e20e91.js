import { e as e$1, d as d$1, n as n$2, m, S, s, a0 as o, r as r$1, $ as w, a as s$1 } from './cast-3d5be210.js';
import { d as i$3, B } from './PopupTemplate-b459951f.js';
import { G, U } from './request-ac4d8bfb.js';
import { O as O$1 } from './MultiOriginJSONSupport-281c1c62.js';
import { o as o$1, r as r$2 } from './Point-edff2a11.js';
import { b } from './Layer-569a1fc8.js';
import { i as i$2 } from './APIKeyMixin-04df9c0f.js';
import { p as p$3 } from './ArcGISService-848d76dd.js';
import { c as c$1 } from './OperationalLayer-e04486e0.js';
import { v } from './PortalLayer-e61e1a42.js';
import { t as t$1 } from './ScaleRangeLayer-f9a9951f.js';
import { A as A$1, K } from './SceneService-83b1fafe.js';
import { r } from './enumeration-6695a859.js';
import { l as l$2 } from './JSONSupport-dce2c67b.js';
import { p as p$4, d as d$4, c as c$2 } from './commonProperties-fca3036e.js';
import { y } from './Field-2973a5cf.js';
import { l as l$3 } from './fieldProperties-fa42dff4.js';
import { c as a, d as d$2, b as a$1, a as a$2 } from './PointCloudUniqueValueRenderer-a0799765.js';
import { d as d$3 } from './popupUtils-883a107f.js';
import './Collection-a38e0489.js';
import './fieldUtils-240a3b99.js';
import './geometry-2f332a26.js';
import './Extent-f27111e1.js';
import './Polyline-dcdb3782.js';
import './number-c5a37d3e.js';
import './Promise-d2759b2e.js';
import './ActionToggle-a5849e6f.js';
import './Identifiable-d9658370.js';
import './Portal-5df9f5a7.js';
import './arcgisLayerUrl-a268a370.js';
import './persistableUrlUtils-5dcd6081.js';
import './asyncUtils-96c00c9e.js';
import './PortalItem-fa114dd2.js';
import './assets-99f5c3ee.js';
import './originUtils-184f7769.js';
import './multiOriginJSONSupportUtils-917e4f3f.js';
import './HeightModelInfo-12951268.js';
import './unitUtils-a0a11e54.js';
import './I3SIndexInfo-c5ab16fa.js';
import './saveUtils-afc71761.js';
import './uuid-ac104993.js';
import './resourceUtils-cc76b8e8.js';
import './TimeExtent-66b53603.js';
import './opacityUtils-dcd94f00.js';
import './fieldType-eb0b42e4.js';
import './FieldsIndex-ea481e79.js';
import './ColorStop-64c57e35.js';
import './Color-25ce730a.js';
import './colorUtils-5009883d.js';
import './mathUtils-559a53d9.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let t=class extends l$2{constructor(r){super(r),this.field=null,this.type=null;}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};e$1([d$1({type:String,json:{write:{enabled:!0,isRequired:!0}}})],t.prototype,"field",void 0),e$1([d$1({readOnly:!0,nonNullable:!0,json:{read:!1}})],t.prototype,"type",void 0),t=e$1([n$2("esri.layers.pointCloudFilters.PointCloudFilter")],t);const l$1=t;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var d;let p$2=d=class extends l$1{constructor(e){super(e),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield";}clone(){return new d({field:this.field,requiredClearBits:m(this.requiredClearBits),requiredSetBits:m(this.requiredSetBits)})}};e$1([d$1({type:[S],json:{write:{enabled:!0,overridePolicy(){return {enabled:!0,isRequired:!this.requiredSetBits}}}}})],p$2.prototype,"requiredClearBits",void 0),e$1([d$1({type:[S],json:{write:{enabled:!0,overridePolicy(){return {enabled:!0,isRequired:!this.requiredClearBits}}}}})],p$2.prototype,"requiredSetBits",void 0),e$1([r({pointCloudBitfieldFilter:"bitfield"})],p$2.prototype,"type",void 0),p$2=d=e$1([n$2("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],p$2);const u$2=p$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var n$1;let p$1=n$1=class extends l$1{constructor(r){super(r),this.includedReturns=[],this.type="return";}clone(){return new n$1({field:this.field,includedReturns:m(this.includedReturns)})}};e$1([d$1({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],p$1.prototype,"includedReturns",void 0),e$1([r({pointCloudReturnFilter:"return"})],p$1.prototype,"type",void 0),p$1=n$1=e$1([n$2("esri.layers.pointCloudFilters.PointCloudReturnFilter")],p$1);const u$1=p$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var p;let l=p=class extends l$1{constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[];}clone(){return new p({field:this.field,mode:this.mode,values:m(this.values)})}};e$1([d$1({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],l.prototype,"mode",void 0),e$1([r({pointCloudValueFilter:"value"})],l.prototype,"type",void 0),e$1([d$1({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],l.prototype,"values",void 0),l=p=e$1([n$2("esri.layers.pointCloudFilters.PointCloudValueFilter")],l);const u=l;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const e={key:"type",base:l$1,typeMap:{value:u,bitfield:u$2,return:u$1}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var i$1;let c=i$1=class extends a{constructor(r){super(r),this.type="point-cloud-rgb",this.field=null;}clone(){return new i$1({...this.cloneProperties(),field:m(this.field)})}};e$1([r({pointCloudRGBRenderer:"point-cloud-rgb"})],c.prototype,"type",void 0),e$1([d$1({type:String,json:{write:!0}})],c.prototype,"field",void 0),c=i$1=e$1([n$2("esri.renderers.PointCloudRGBRenderer")],c);const n=c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const i={key:"type",base:a,typeMap:{"point-cloud-class-breaks":d$2,"point-cloud-rgb":n,"point-cloud-stretch":a$1,"point-cloud-unique-value":a$2},errorContext:"renderer"};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const A=s.getLogger("esri.layers.PointCloudLayer"),N=l$3();let R=class extends(A$1(p$3(c$1(v(t$1(O$1(i$2(b)))))))){constructor(...e){super(...e),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.fieldsIndex=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud";}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}getFieldDomain(e){const r=this.fieldsIndex.get(e);return r&&r.domain?r.domain:null}readServiceFields(e,r,t){return Array.isArray(e)?e.map((e=>{const r=new y;return "FieldTypeInteger"===e.type&&((e=m(e)).type="esriFieldTypeInteger"),r.read(e,t),r})):Array.isArray(r.attributeStorageInfo)?r.attributeStorageInfo.map((e=>new y({name:e.name,type:"ELEVATION"===e.name?"double":"integer"}))):null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo();}writeRenderer(e,r,t,o$1){o("layerDefinition.drawingInfo.renderer",e.write({},o$1),r);}load(e){const r=r$1(e)?e.signal:null,t=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(w).then((()=>this._fetchService(r)));return this.addResolvingPromise(t),Promise.resolve(this)}createPopupTemplate(e){const r=d$3(this,e);return this._formatPopupTemplateReturnsField(r),this._formatPopupTemplateRGBField(r),r}_formatPopupTemplateReturnsField(e){const r=this.fieldsIndex.get("RETURNS");if(!r)return;const t=e.fieldInfos.find((e=>e.fieldName===r.name));if(!t)return;const o=new i$3({name:"pcl-returns-decoded",title:r.alias||r.name,expression:`\n        var returnValue = $feature.${r.name};\n        return (returnValue % 16) + " / " + Floor(returnValue / 16);\n      `});e.expressionInfos=[...e.expressionInfos||[],o],t.fieldName="expression/pcl-returns-decoded";}_formatPopupTemplateRGBField(e){const r=this.fieldsIndex.get("RGB");if(!r)return;const t=e.fieldInfos.find((e=>e.fieldName===r.name));if(!t)return;const o=new i$3({name:"pcl-rgb-decoded",title:r.alias||r.name,expression:`\n        var rgb = $feature.${r.name};\n        var red = Floor(rgb / 65536, 0);\n        var green = Floor((rgb - (red * 65536)) / 256,0);\n        var blue = rgb - (red * 65536) - (green * 256);\n\n        return "rgb(" + red + "," + green + "," + blue + ")";\n      `});e.expressionInfos=[...e.expressionInfos||[],o],t.fieldName="expression/pcl-rgb-decoded";}async queryCachedStatistics(e,r){if(await this.load(r),!this.attributeStorageInfo)throw new s$1("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const i=this.fieldsIndex.get(e);if(!i)throw new s$1("pointcloudlayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const o of this.attributeStorageInfo)if(o.name===i.name){const e=G(this.parsedUrl.path,`./statistics/${o.key}`);return U(e,{query:{f:"json",token:this.apiKey},responseType:"json",signal:r?r.signal:null}).then((e=>e.data))}throw new s$1("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,r){return this._debouncedSaveOperations(K.SAVE_AS,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"};return this._debouncedSaveOperations(K.SAVE,e)}validateLayer(e){if(e.layerType&&"PointCloud"!==e.layerType)throw new s$1("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new s$1("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new s$1("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(e){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some((r=>r.name===e))}_getTypeKeywords(){return ["PointCloud"]}_validateElevationInfo(){const e=this.elevationInfo;e&&("absolute-height"!==e.mode&&A.warn(".elevationInfo=","Point cloud layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&A.warn(".elevationInfo=","Point cloud layers do not support featureExpressionInfo"));}};e$1([d$1({type:["PointCloudLayer"]})],R.prototype,"operationalLayerType",void 0),e$1([d$1(p$4)],R.prototype,"popupEnabled",void 0),e$1([d$1({type:B,json:{name:"popupInfo",write:!0}})],R.prototype,"popupTemplate",void 0),e$1([d$1({readOnly:!0,json:{read:!1}})],R.prototype,"defaultPopupTemplate",null),e$1([d$1({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],R.prototype,"opacity",void 0),e$1([d$1({type:["show","hide"]})],R.prototype,"listMode",void 0),e$1([d$1({types:[e],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],R.prototype,"filters",void 0),e$1([d$1({type:[y]})],R.prototype,"fields",void 0),e$1([d$1(N.fieldsIndex)],R.prototype,"fieldsIndex",void 0),e$1([o$1("service","fields",["fields","attributeStorageInfo"])],R.prototype,"readServiceFields",null),e$1([d$1(N.outFields)],R.prototype,"outFields",void 0),e$1([d$1({readOnly:!0})],R.prototype,"attributeStorageInfo",void 0),e$1([d$1(d$4)],R.prototype,"elevationInfo",null),e$1([d$1({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],R.prototype,"path",void 0),e$1([d$1(c$2)],R.prototype,"legendEnabled",void 0),e$1([d$1({types:i,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:i},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],R.prototype,"renderer",void 0),e$1([r$2("renderer")],R.prototype,"writeRenderer",null),e$1([d$1({json:{read:!1},readOnly:!0})],R.prototype,"type",void 0),R=e$1([n$2("esri.layers.PointCloudLayer")],R);const O=R;

export default O;
