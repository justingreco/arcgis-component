import { e, d, n, s, a as s$1, r, $ as w, S, Y as s$2 } from './cast-3d5be210.js';
import { b as i$1 } from './geometry-2f332a26.js';
import { B } from './PopupTemplate-b459951f.js';
import { P } from './UniqueValueRenderer-bb66af10.js';
import { o as o$1, p as p$3, a as p$6, n as n$2 } from './jsonUtils-e7c7add9.js';
import { U } from './request-ac4d8bfb.js';
import { M as M$1 } from './symbols-ab3e849a.js';
import { O } from './MultiOriginJSONSupport-281c1c62.js';
import { k, o as o$2 } from './Point-edff2a11.js';
import { b } from './Layer-569a1fc8.js';
import { p as p$2 } from './ArcGISService-848d76dd.js';
import { a } from './BlendLayer-7884099a.js';
import { o } from './CustomParametersMixin-f702935f.js';
import { p as p$1, a as p$4, r as r$1 } from './labelingInfo-6e0c44d1.js';
import { c } from './OperationalLayer-e04486e0.js';
import { v } from './PortalLayer-e61e1a42.js';
import { n as n$1 } from './RefreshableLayer-496830b9.js';
import { t as t$1 } from './ScaleRangeLayer-f9a9951f.js';
import { a as a$1 } from './TemporalLayer-6cfc496a.js';
import { x, m as m$1, c as c$2, I, b as b$2, p as p$5, l as l$2, f } from './commonProperties-fca3036e.js';
import { l as l$1 } from './fieldProperties-fa42dff4.js';
import { c as c$1, m } from './fieldUtils-240a3b99.js';
import { j } from './LabelClass-936eaa93.js';
import { l } from './JSONSupport-dce2c67b.js';
import { t as t$2 } from './styleUtils-106413c0.js';
import { b as b$1 } from './Query-1f6c7e43.js';
import { d as d$1 } from './popupUtils-883a107f.js';
import { M } from './Extent-f27111e1.js';
import './Polyline-dcdb3782.js';
import './Collection-a38e0489.js';
import './enumeration-6695a859.js';
import './number-c5a37d3e.js';
import './Promise-d2759b2e.js';
import './ActionToggle-a5849e6f.js';
import './Identifiable-d9658370.js';
import './ColorStop-64c57e35.js';
import './Color-25ce730a.js';
import './colorUtils-5009883d.js';
import './mathUtils-559a53d9.js';
import './diffUtils-6436a697.js';
import './Portal-5df9f5a7.js';
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
import './DictionaryLoader-d0d1b4ff.js';
import './LRUCache-5f25d277.js';
import './MemCache-04cdd0cd.js';
import './CIMSymbol-15bdb580.js';
import './aliasOf-bdfe6662.js';
import './heatmapUtils-d302cc7f.js';
import './vec4f64-011248e0.js';
import './aaBoundingBox-b312516d.js';
import './aaBoundingRect-5e1a4e52.js';
import './collectionUtils-302901c0.js';
import './arcgisLayerUrl-a268a370.js';
import './jsonUtils-f3f35e7f.js';
import './mat4-d5df0e58.js';
import './_commonjsHelpers-8dd5c177.js';
import './TimeExtent-66b53603.js';
import './asyncUtils-96c00c9e.js';
import './PortalItem-fa114dd2.js';
import './assets-99f5c3ee.js';
import './TimeInfo-0c128ef4.js';
import './unitUtils-a0a11e54.js';
import './Field-2973a5cf.js';
import './fieldType-eb0b42e4.js';
import './FieldsIndex-ea481e79.js';
import './labelUtils-824fc88a.js';
import './defaultsJSON-5fb6161d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var t;let i=t=class extends l{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1;}clone(){return new t({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};e([d({type:Number,json:{write:!0}})],i.prototype,"age",void 0),e([d({type:Number,json:{write:!0}})],i.prototype,"ageReceived",void 0),e([d({type:Number,json:{write:!0}})],i.prototype,"displayCount",void 0),e([d({type:Number,json:{write:!0}})],i.prototype,"maxObservations",void 0),i=t=e([n("esri.layers.support.PurgeOptions")],i);const p=i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const X=s.getLogger("esri.layers.StreamLayer"),Y=l$1();let Z=class extends(p$1(a(a$1(t$1(n$1(p$2(c(v(O(o(b))))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new p,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=k.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.webSocketUrl=null;}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}load(e){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new s$1("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const r$1=r(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(w).then((()=>this._fetchService(r$1)))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){c$1(e,this.fieldsIndex),this._set("renderer",e);}readRenderer(e,r,s){const p=(r=r.layerDefinition||r).drawingInfo&&r.drawingInfo.renderer||void 0;if(p){const e=o$1(p,r,s)||void 0;return e||X.error("Failed to create renderer",{rendererDefinition:r.drawingInfo.renderer,layer:this,context:s}),e}if(r.defaultSymbol)return r.types&&r.types.length?new P({defaultSymbol:$(r.defaultSymbol,r,s),field:r.typeIdField,uniqueValueInfos:r.types.map((e=>({id:e.id,symbol:$(e.symbol,e,s)})))}):new p$3({symbol:$(r.defaultSymbol,r,s)})}createPopupTemplate(e){return d$1(this,e)}createQuery(){const e=new b$1;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,r){if(!this.fields)return null;let t=null;return this.fields.some((r=>(r.name===e&&(t=r.domain),!!t))),t}getField(e){return this.fieldsIndex.get(e)}serviceSupportsSpatialReference(e){return !0}async _fetchService(e){if(!!this.webSocketUrl){if(!this.timeInfo?.trackIdField)throw new s$1("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField)throw new s$1("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");if(!this.fields)throw new s$1("stream-layer:missing-metadata","The stream layer fields must be specified.");if(!this.geometryType)throw new s$1("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.url=this.webSocketUrl;}else if(!this.sourceJSON){const{data:r}=await U(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=r;}return this.sourceJSON={...this.sourceJSON??{},objectIdField:"__esri_stream_id__"},this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}),c$1(this.renderer,this.fieldsIndex),m(this.timeInfo,this.fieldsIndex),t$2(this,{origin:"service"})}};e([d({type:String})],Z.prototype,"copyright",void 0),e([d({readOnly:!0})],Z.prototype,"defaultPopupTemplate",null),e([d({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],Z.prototype,"definitionExpression",void 0),e([d({type:String})],Z.prototype,"displayField",void 0),e([d({type:x})],Z.prototype,"elevationInfo",void 0),e([d(p$4)],Z.prototype,"featureReduction",void 0),e([d(Y.fields)],Z.prototype,"fields",void 0),e([d(Y.fieldsIndex)],Z.prototype,"fieldsIndex",void 0),e([d({type:M})],Z.prototype,"geometryDefinition",void 0),e([d({type:i$1.apiValues,json:{read:{reader:i$1.read}}})],Z.prototype,"geometryType",void 0),e([d(m$1)],Z.prototype,"labelsVisible",void 0),e([d({type:[j],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:r$1},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],Z.prototype,"labelingInfo",void 0),e([d(c$2)],Z.prototype,"legendEnabled",void 0),e([d({type:["show","hide"]})],Z.prototype,"listMode",void 0),e([d({type:S})],Z.prototype,"maxReconnectionAttempts",void 0),e([d({type:S})],Z.prototype,"maxReconnectionInterval",void 0),e([d(I)],Z.prototype,"maxScale",void 0),e([d(b$2)],Z.prototype,"minScale",void 0),e([d({type:String})],Z.prototype,"objectIdField",void 0),e([d({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],Z.prototype,"operationalLayerType",void 0),e([d(p$5)],Z.prototype,"popupEnabled",void 0),e([d({type:B,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],Z.prototype,"popupTemplate",void 0),e([d({type:p})],Z.prototype,"purgeOptions",void 0),e([d({types:p$6,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:n$2,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],Z.prototype,"renderer",null),e([o$2("service","renderer",["drawingInfo.renderer","defaultSymbol"]),o$2("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],Z.prototype,"readRenderer",null),e([d(l$2)],Z.prototype,"screenSizePerspectiveEnabled",void 0),e([d()],Z.prototype,"sourceJSON",void 0),e([d({type:k,json:{origins:{service:{read:{source:"spatialReference"}}}}})],Z.prototype,"spatialReference",void 0),e([d({json:{read:!1}})],Z.prototype,"type",void 0),e([d(f)],Z.prototype,"url",void 0),e([d({type:Number})],Z.prototype,"updateInterval",void 0),e([d({type:String})],Z.prototype,"webSocketUrl",void 0),Z=e([n("esri.layers.StreamLayer")],Z);const $=s$2({types:M$1}),ee=Z;

export default ee;
