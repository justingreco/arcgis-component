import { C as x, r, a as s, h as e, E, c as a$1, e as e$1, d, n, a0 as o$1, S } from './cast-3d5be210.js';
import { b as i } from './geometry-2f332a26.js';
import { B } from './PopupTemplate-b459951f.js';
import './UniqueValueRenderer-bb66af10.js';
import { a as p$4, n as n$2 } from './jsonUtils-e7c7add9.js';
import { O } from './MultiOriginJSONSupport-281c1c62.js';
import { j as j$1 } from './request-ac4d8bfb.js';
import { k as k$1, r as r$1 } from './Point-edff2a11.js';
import { b } from './Layer-569a1fc8.js';
import { a } from './HandleOwner-fe336959.js';
import { m } from './Portal-5df9f5a7.js';
import { u } from './workers-c7a27acb.js';
import { c, u as u$1 } from './clientSideDefaults-2211e21f.js';
import { D, X, z, W, C } from './wfsUtils-d67a0ceb.js';
import x$1 from './FeatureSet-1b85367a.js';
import { M as M$1 } from './Extent-f27111e1.js';
import { a as a$2 } from './BlendLayer-7884099a.js';
import { o } from './CustomParametersMixin-f702935f.js';
import { p as p$1, a as p$2, r as r$2 } from './labelingInfo-6e0c44d1.js';
import { c as c$1 } from './OperationalLayer-e04486e0.js';
import { p } from './OrderedLayer-d02e1d58.js';
import { v } from './PortalLayer-e61e1a42.js';
import { n as n$1 } from './RefreshableLayer-496830b9.js';
import { t } from './ScaleRangeLayer-f9a9951f.js';
import { a as a$3 } from './TemporalLayer-6cfc496a.js';
import { d as d$2, m as m$2, c as c$3, u as u$2, p as p$3, l as l$1, f } from './commonProperties-fca3036e.js';
import { y } from './Field-2973a5cf.js';
import { l } from './fieldProperties-fa42dff4.js';
import { c as c$2, m as m$1 } from './fieldUtils-240a3b99.js';
import { j as j$2 } from './LabelClass-936eaa93.js';
import { b as b$1 } from './Query-1f6c7e43.js';
import { d as d$1 } from './popupUtils-883a107f.js';
import './Polyline-dcdb3782.js';
import './Collection-a38e0489.js';
import './JSONSupport-dce2c67b.js';
import './enumeration-6695a859.js';
import './number-c5a37d3e.js';
import './Promise-d2759b2e.js';
import './ActionToggle-a5849e6f.js';
import './Identifiable-d9658370.js';
import './symbols-ab3e849a.js';
import './CIMSymbol-15bdb580.js';
import './Symbol-573a64f6.js';
import './Color-25ce730a.js';
import './colorUtils-5009883d.js';
import './mathUtils-559a53d9.js';
import './screenUtils-31d073db.js';
import './opacityUtils-dcd94f00.js';
import './aaBoundingBox-b312516d.js';
import './aaBoundingRect-5e1a4e52.js';
import './persistableUrlUtils-5dcd6081.js';
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
import './Handles-54afc0a7.js';
import './reactiveUtils-bd6fe823.js';
import './assets-99f5c3ee.js';
import './intl-54ccdc89.js';
import './messages-5e9a4a9e.js';
import './QueryEngineCapabilities-30e4c4d1.js';
import './defaultsJSON-5fb6161d.js';
import './projection-fbd5d346.js';
import './unitUtils-a0a11e54.js';
import './mat4-d5df0e58.js';
import './zscale-0befeff4.js';
import './geojson-62adf71f.js';
import './OptimizedFeature-a0dba562.js';
import './xmlUtils-d69cd7fe.js';
import './fieldType-eb0b42e4.js';
import './jsonUtils-f3f35e7f.js';
import './_commonjsHelpers-8dd5c177.js';
import './TimeExtent-66b53603.js';
import './asyncUtils-96c00c9e.js';
import './PortalItem-fa114dd2.js';
import './TimeInfo-0c128ef4.js';
import './FieldsIndex-ea481e79.js';
import './labelUtils-824fc88a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let j=class extends(a(m)){constructor(){super(...arguments),this.capabilities=c(!1,!1),this.type="wfs",this.refresh=x((async e=>{await this.load();const{extent:t}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,{dataChanged:!0,updates:{extent:this.sourceJSON.extent}}}));}load(e){const t=(r(e)&&e.signal)??null;return this.addResolvingPromise(this._startWorker({signal:t})),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null;}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e,t={}){await this.load(t);const r=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return x$1.fromJSON(r)}async queryFeaturesJSON(e,t={}){return await this.load(t),this._connection.invoke("queryFeatures",e?e.toJSON():null,t)}async queryFeatureCount(e,t={}){return await this.load(t),this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)}async queryObjectIds(e,t={}){return await this.load(t),this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)}async queryExtent(e,t={}){await this.load(t);const r=await this._connection.invoke("queryExtent",e?e.toJSON():null,t);return {count:r.count,extent:M$1.fromJSON(r.extent)}}async querySnapping(e,t={}){return await this.load(t),this._connection.invoke("querySnapping",e,t)}async _createLoadOptions(e$1){const{url:r,customParameters:o,name:s$1,namespaceUri:a,spatialReference:n,fields:c,geometryType:p,swapXY:l}=this.layer;if(!r)throw new s("wfs-layer:missing-url","WFSLayer must be created with a url");this.wfsCapabilities||(this.wfsCapabilities=await D(r,{customParameters:o,...e$1}));const u=["fields","geometryType","name","namespaceUri","spatialReference","swapXY"].some((e=>null==this.layer[e])),y=u?await X(this.wfsCapabilities,s$1,a,{spatialReference:n,customParameters:o,signal:e$1?.signal}):{...z(c),geometryType:p,name:s$1,namespaceUri:a,spatialReference:n,swapXY:l},d=e(W(this.wfsCapabilities.readFeatureTypes(),y.name,y.namespaceUri)),S=i.toJSON(y.geometryType);return {customParameters:o,featureType:d,fields:y.fields.map((e=>e.toJSON())),geometryField:y.geometryField,geometryType:S,getFeatureUrl:this.wfsCapabilities.operations.GetFeature.url,getFeatureOutputFormat:this.wfsCapabilities.operations.GetFeature.outputFormat,objectIdField:y.objectIdField,spatialReference:y.spatialReference.toJSON(),swapXY:y.swapXY}}async _startWorker(e){const[t,r]=await E([this._createLoadOptions(e),u("WFSSourceWorker",{...e,strategy:a$1("feature-layers-workers")?"dedicated":"local"})]),s=t.error||r.error||null,a=r.value||null;if(s)throw a&&a.close(),s;const i=t.value;this._connection=r.value;const{extent:n}=await this._connection.invoke("load",i,e);this.sourceJSON={extent:n,fields:i.fields,geometryType:i.geometryType,objectIdField:i.objectIdField,geometryField:i.geometryField,drawingInfo:u$1(i.geometryType),name:i.featureType.title,wfsInfo:{name:i.featureType.name,featureUrl:i.getFeatureUrl,maxFeatures:3e3,swapXY:i.swapXY,supportedSpatialReferences:i.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:i.featureType.namespaceUri}};}};e$1([d()],j.prototype,"capabilities",void 0),e$1([d({constructOnly:!0})],j.prototype,"layer",void 0),e$1([d()],j.prototype,"sourceJSON",void 0),e$1([d()],j.prototype,"type",void 0),e$1([d()],j.prototype,"wfsCapabilities",void 0),j=e$1([n("esri.layers.graphics.sources.WFSSource")],j);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var J;const M=l();let _=J=class extends(p(o(p$1(a$2(a$3(n$1(t(c$1(v(O(b))))))))))){constructor(e){super(e),this.capabilities=null,this.copyright=null,this.customParameters=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.featureUrl=void 0,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="WFS",this.maxFeatures=3e3,this.mode=0,this.name=null,this.namespaceUri=null,this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new j({layer:this}),this.spatialReference=k$1.WGS84,this.spatialReferences=[4326],this.swapXY=void 0,this.title="WFS",this.type="wfs",this.url=null,this.version=void 0;}static fromWFSLayerInfo(e){const{customParameters:r,fields:t,geometryField:i,geometryType:o,name:s,namespaceUri:n,objectIdField:p,spatialReference:a,swapXY:l,url:d,wfsCapabilities:m}=e;return new J({customParameters:r,fields:t,geometryField:i,geometryType:o,name:s,namespaceUri:n,objectIdField:p,spatialReference:a,swapXY:l,url:d,wfsCapabilities:m})}destroy(){this.source?.destroy();}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then((()=>this.source.load(e))).then((()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),c$2(this.renderer,this.fieldsIndex),m$1(this.timeInfo,this.fieldsIndex);}))),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}writeFields(e,r,t){const i=e.filter((e=>e.name!==C));this.geometryField&&i.unshift(new y({name:this.geometryField,alias:this.geometryField,type:"geometry"})),o$1(t,i.map((e=>e.toJSON())),r);}get parsedUrl(){return this.url?j$1(this.url):null}set renderer(e){c$2(e,this.fieldsIndex),this._set("renderer",e);}createPopupTemplate(e){return d$1(this,e)}createQuery(){const e=new b$1;e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:r,timeExtent:t}=this;return e.timeExtent=null!=r&&null!=t?t.offset(-r.value,r.unit):t||null,e}getFieldDomain(e,r){return this.getField(e)?.domain}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,r){return this.load().then((()=>this.source.queryFeatures(b$1.from(e)||this.createQuery(),r))).then((e=>{if(e?.features)for(const r of e.features)r.layer=r.sourceLayer=this;return e}))}queryObjectIds(e,r){return this.load().then((()=>this.source.queryObjectIds(b$1.from(e)||this.createQuery(),r)))}queryFeatureCount(e,r){return this.load().then((()=>this.source.queryFeatureCount(b$1.from(e)||this.createQuery(),r)))}queryExtent(e,r){return this.load().then((()=>this.source.queryExtent(b$1.from(e)||this.createQuery(),r)))}async hasDataChanged(){try{const{dataChanged:e,updates:r$1}=await this.source.refresh(this.customParameters);return r(r$1)&&this.read(r$1,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return !1}};e$1([d({readOnly:!0,aliasOf:"source.capabilities"})],_.prototype,"capabilities",void 0),e$1([d({type:String})],_.prototype,"copyright",void 0),e$1([d({readOnly:!0})],_.prototype,"createQueryVersion",null),e$1([d({json:{name:"wfsInfo.customParameters",write:{ignoreOrigin:!0}}})],_.prototype,"customParameters",void 0),e$1([d({readOnly:!0})],_.prototype,"defaultPopupTemplate",null),e$1([d({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],_.prototype,"definitionExpression",void 0),e$1([d({type:String})],_.prototype,"displayField",void 0),e$1([d(d$2)],_.prototype,"elevationInfo",void 0),e$1([d(p$2)],_.prototype,"featureReduction",void 0),e$1([d({type:String,readOnly:!0,json:{name:"wfsInfo.featureUrl",write:{ignoreOrigin:!0,isRequired:!0}}})],_.prototype,"featureUrl",void 0),e$1([d({type:[y],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],_.prototype,"fields",void 0),e$1([r$1("fields")],_.prototype,"writeFields",null),e$1([d(M.fieldsIndex)],_.prototype,"fieldsIndex",void 0),e$1([d({type:M$1,json:{name:"extent"}})],_.prototype,"fullExtent",void 0),e$1([d()],_.prototype,"geometryField",void 0),e$1([d({type:String,json:{read:{source:"layerDefinition.geometryType",reader:i.read},write:{target:"layerDefinition.geometryType",writer:i.write,ignoreOrigin:!0},origins:{service:{read:i.read}}}})],_.prototype,"geometryType",void 0),e$1([d({type:String})],_.prototype,"id",void 0),e$1([d(m$2)],_.prototype,"labelsVisible",void 0),e$1([d({type:[j$2],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:r$2},write:!0}})],_.prototype,"labelingInfo",void 0),e$1([d(c$3)],_.prototype,"legendEnabled",void 0),e$1([d({type:["show","hide"]})],_.prototype,"listMode",void 0),e$1([d({type:String})],_.prototype,"objectIdField",void 0),e$1([d({type:["WFS"]})],_.prototype,"operationalLayerType",void 0),e$1([d({type:S,json:{name:"wfsInfo.maxFeatures",write:{ignoreOrigin:!0,isRequired:!0}}})],_.prototype,"maxFeatures",void 0),e$1([d({type:[0],readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],_.prototype,"mode",void 0),e$1([d({type:String,json:{name:"wfsInfo.name",write:{ignoreOrigin:!0,isRequired:!0}}})],_.prototype,"name",void 0),e$1([d({type:String,json:{name:"wfsInfo.wfsNamespace",write:{ignoreOrigin:!0,isRequired:!0}}})],_.prototype,"namespaceUri",void 0),e$1([d(u$2)],_.prototype,"opacity",void 0),e$1([d(M.outFields)],_.prototype,"outFields",void 0),e$1([d({readOnly:!0})],_.prototype,"parsedUrl",null),e$1([d(p$3)],_.prototype,"popupEnabled",void 0),e$1([d({type:B,json:{name:"popupInfo",write:!0}})],_.prototype,"popupTemplate",void 0),e$1([d({types:p$4,json:{origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:n$2,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:{ignoreOrigin:!0}}})],_.prototype,"renderer",null),e$1([d(l$1)],_.prototype,"screenSizePerspectiveEnabled",void 0),e$1([d({readOnly:!0})],_.prototype,"source",void 0),e$1([d({type:k$1,json:{name:"layerDefinition.spatialReference",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"extent.spatialReference"}}}})],_.prototype,"spatialReference",void 0),e$1([d({readOnly:!0,type:[S],json:{name:"wfsInfo.supportedSpatialReferences",write:{ignoreOrigin:!0,isRequired:!0}}})],_.prototype,"spatialReferences",void 0),e$1([d({type:Boolean,value:!1,json:{name:"wfsInfo.swapXY",write:{ignoreOrigin:!0,isRequired:!0}}})],_.prototype,"swapXY",void 0),e$1([d({json:{write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"name"}}}})],_.prototype,"title",void 0),e$1([d({json:{read:!1},readOnly:!0})],_.prototype,"type",void 0),e$1([d(f)],_.prototype,"url",void 0),e$1([d({type:String,readOnly:!0,json:{name:"wfsInfo.version",write:{ignoreOrigin:!0,isRequired:!0}}})],_.prototype,"version",void 0),e$1([d({aliasOf:"source.wfsCapabilities"})],_.prototype,"wfsCapabilities",void 0),_=J=e$1([n("esri.layers.WFSLayer")],_);const k=_;

export default k;
