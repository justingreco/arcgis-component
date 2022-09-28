import { s, C as x, r, a as s$1, t, c as a, e, d, n } from './cast-3d5be210.js';
import { b as i } from './geometry-2f332a26.js';
import { B as B$1 } from './PopupTemplate-b459951f.js';
import './UniqueValueRenderer-bb66af10.js';
import { a as p$4, n as n$2 } from './jsonUtils-e7c7add9.js';
import { O } from './MultiOriginJSONSupport-281c1c62.js';
import { j } from './request-ac4d8bfb.js';
import { b } from './Layer-569a1fc8.js';
import { m } from './Portal-5df9f5a7.js';
import { u } from './workers-c7a27acb.js';
import { c } from './clientSideDefaults-2211e21f.js';
import x$1 from './FeatureSet-1b85367a.js';
import { M } from './Extent-f27111e1.js';
import { v } from './Polyline-dcdb3782.js';
import { a as a$1 } from './BlendLayer-7884099a.js';
import { o } from './CustomParametersMixin-f702935f.js';
import { p as p$1, a as p$2, r as r$1 } from './labelingInfo-6e0c44d1.js';
import { c as c$1 } from './OperationalLayer-e04486e0.js';
import { p } from './OrderedLayer-d02e1d58.js';
import { n as n$1 } from './RefreshableLayer-496830b9.js';
import { t as t$1 } from './ScaleRangeLayer-f9a9951f.js';
import { a as a$2 } from './TemporalLayer-6cfc496a.js';
import { d as d$2, v as v$1, m as m$2, c as c$3, w, p as p$3, l as l$1, f as f$1 } from './commonProperties-fca3036e.js';
import { p as p$5, n as n$3 } from './FeatureType-691faa46.js';
import { y } from './Field-2973a5cf.js';
import { l } from './fieldProperties-fa42dff4.js';
import { c as c$2, m as m$1 } from './fieldUtils-240a3b99.js';
import { j as j$1 } from './LabelClass-936eaa93.js';
import { b as b$1 } from './Query-1f6c7e43.js';
import { d as d$1 } from './popupUtils-883a107f.js';
import { k } from './Point-edff2a11.js';
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
import './assets-99f5c3ee.js';
import './intl-54ccdc89.js';
import './messages-5e9a4a9e.js';
import './QueryEngineCapabilities-30e4c4d1.js';
import './defaultsJSON-5fb6161d.js';
import './fieldType-eb0b42e4.js';
import './jsonUtils-f3f35e7f.js';
import './mat4-d5df0e58.js';
import './_commonjsHelpers-8dd5c177.js';
import './TimeExtent-66b53603.js';
import './TimeInfo-0c128ef4.js';
import './unitUtils-a0a11e54.js';
import './FieldsIndex-ea481e79.js';
import './labelUtils-824fc88a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const f=s.getLogger("esri.layers.graphics.sources.GeoJSONSource");let g=class extends m{constructor(){super(...arguments),this.type="geojson",this.refresh=x((async e=>{await this.load();const{extent:t,timeExtent:r}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,r&&(this.sourceJSON.timeInfo.timeExtent=[r.start,r.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}}));}load(e){const t=r(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null;}applyEdits(e){return this.load().then((()=>this._applyEdits(e)))}openPorts(){return this.load().then((()=>this._connection.openPorts()))}queryFeatures(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))).then((e=>x$1.fromJSON(e)))}queryFeaturesJSON(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)))}queryFeatureCount(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)))}queryObjectIds(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)))}queryExtent(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t))).then((e=>({count:e.count,extent:M.fromJSON(e.extent)})))}querySnapping(e,t={}){return this.load(t).then((()=>this._connection.invoke("querySnapping",e,t)))}_applyEdits(e){if(!this._connection)throw new s$1("geojson-layer-source:edit-failure","Memory source not loaded");const r=this.layer.objectIdField,o=[],s=[],i=[];if(e.addFeatures)for(const t of e.addFeatures)o.push(this._serializeFeature(t));if(e.deleteFeatures)for(const t of e.deleteFeatures)"objectId"in t&&null!=t.objectId?s.push(t.objectId):"attributes"in t&&null!=t.attributes[r]&&s.push(t.attributes[r]);if(e.updateFeatures)for(const t of e.updateFeatures)i.push(this._serializeFeature(t));return this._connection.invoke("applyEdits",{adds:o,updates:i,deletes:s}).then((({extent:e,timeExtent:t,featureEditResults:r})=>(this.sourceJSON.extent=e,t&&(this.sourceJSON.timeInfo.timeExtent=[t.start,t.end]),this._createEditsResult(r))))}_createEditsResult(e){return {addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const r=!0===e.success?null:e.error||{code:void 0,description:void 0};return {objectId:e.objectId,globalId:e.globalId,error:r?new s$1("geojson-layer-source:edit-failure",r.description,{code:r.code}):null}}_serializeFeature(e){const{attributes:t}=e,r=this._geometryForSerialization(e);return r?{geometry:r.toJSON(),attributes:t}:{attributes:t}}_geometryForSerialization(e){const{geometry:t$1}=e;return t(t$1)?null:"mesh"===t$1.type||"extent"===t$1.type?v.fromExtent(t$1.extent):t$1}async _startWorker(e){this._connection=await u("GeoJSONSourceWorker",{strategy:a("feature-layers-workers")?"dedicated":"local",signal:e});const{fields:t,spatialReference:o,hasZ:s,geometryType:i$1,objectIdField:n,url:a$1,timeInfo:l,customParameters:c$1}=this.layer,p="defaults"===this.layer.originOf("spatialReference"),h={url:a$1,customParameters:c$1,fields:t&&t.map((e=>e.toJSON())),geometryType:i.toJSON(i$1),hasZ:s,objectIdField:n,timeInfo:l?l.toJSON():null,spatialReference:p?null:o&&o.toJSON()},m=await this._connection.invoke("load",h,{signal:e});for(const r of m.warnings)f.warn(r.message,{layer:this.layer,warning:r});m.featureErrors.length&&f.warn(`Encountered ${m.featureErrors.length} validation errors while loading features`,m.featureErrors),this.sourceJSON=m.layerDefinition,this.capabilities=c(this.sourceJSON.hasZ,!0);}};e([d()],g.prototype,"capabilities",void 0),e([d()],g.prototype,"type",void 0),e([d({constructOnly:!0})],g.prototype,"layer",void 0),e([d()],g.prototype,"sourceJSON",void 0),g=e([n("esri.layers.graphics.sources.GeoJSONSource")],g);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const V=l();let B=class extends(p(o(p$1(a$1(a$2(t$1(n$1(c$1(O(b)))))))))){constructor(e){super(e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new g({layer:this}),this.spatialReference=k.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson",this.typeIdField=null,this.types=null;}destroy(){this.source?.destroy();}load(e){return this.addResolvingPromise(this.source.load(e).then((()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),c$2(this.renderer,this.fieldsIndex),m$1(this.timeInfo,this.fieldsIndex);}))),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&null==this.geometryType}get parsedUrl(){return this.url?j(this.url):null}set renderer(e){c$2(e,this.fieldsIndex),this._set("renderer",e);}set url(e){if(!e)return void this._set("url",e);const t=j(e);this._set("url",t.path),t.query&&(this.customParameters={...this.customParameters,...t.query});}async applyEdits(e,t){const r=await import('./editingSupport-5ef90092.js');await this.load();const i=await r.applyEdits(this,this.source,e,t);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),i}on(e,t){return super.on(e,t)}createPopupTemplate(e){return d$1(this,e)}createQuery(){const e=new b$1,t=this.get("capabilities.data");e.returnGeometry=!0,t&&t.supportsZ&&(e.returnZ=!0),e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:r,timeExtent:i}=this;return e.timeExtent=null!=r&&null!=i?i.offset(-r.value,r.unit):i||null,e}getFieldDomain(e,t){let r,i=!1;const o=t&&t.feature,s=o&&o.attributes,p=this.typeIdField&&s&&s[this.typeIdField];return null!=p&&this.types&&(i=this.types.some((t=>t.id==p&&(r=t.domains&&t.domains[e],r&&"inherited"===r.type&&(r=this._getLayerDomain(e)),!0)))),i||r||(r=this._getLayerDomain(e)),r}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(b$1.from(e)||this.createQuery(),t))).then((e=>{if(e?.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this.load().then((()=>this.source.queryObjectIds(b$1.from(e)||this.createQuery(),t)))}queryFeatureCount(e,t){return this.load().then((()=>this.source.queryFeatureCount(b$1.from(e)||this.createQuery(),t)))}queryExtent(e,t){return this.load().then((()=>this.source.queryExtent(b$1.from(e)||this.createQuery(),t)))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return r(t)&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return !1}_getLayerDomain(e){if(!this.fields)return null;let t=null;return this.fields.some((r=>(r.name===e&&(t=r.domain),!!t))),t}};e([d({readOnly:!0,json:{read:!1,write:!1}})],B.prototype,"capabilities",null),e([d({type:String})],B.prototype,"copyright",void 0),e([d({readOnly:!0})],B.prototype,"createQueryVersion",null),e([d({readOnly:!0})],B.prototype,"defaultPopupTemplate",null),e([d({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],B.prototype,"definitionExpression",void 0),e([d({type:String})],B.prototype,"displayField",void 0),e([d({type:Boolean})],B.prototype,"editingEnabled",void 0),e([d(d$2)],B.prototype,"elevationInfo",void 0),e([d(p$2)],B.prototype,"featureReduction",void 0),e([d({type:[y],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],B.prototype,"fields",void 0),e([d(V.fieldsIndex)],B.prototype,"fieldsIndex",void 0),e([d({type:M,json:{name:"extent"}})],B.prototype,"fullExtent",void 0),e([d({type:["point","polygon","polyline","multipoint"],json:{read:{reader:i.read}}})],B.prototype,"geometryType",void 0),e([d({type:Boolean})],B.prototype,"hasZ",void 0),e([d(v$1)],B.prototype,"id",void 0),e([d({type:Boolean,readOnly:!0})],B.prototype,"isTable",null),e([d(m$2)],B.prototype,"labelsVisible",void 0),e([d({type:[j$1],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:r$1},write:!0}})],B.prototype,"labelingInfo",void 0),e([d(c$3)],B.prototype,"legendEnabled",void 0),e([d({type:["show","hide"]})],B.prototype,"listMode",void 0),e([d({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],B.prototype,"objectIdField",void 0),e([d(w)],B.prototype,"opacity",void 0),e([d({type:["GeoJSON"]})],B.prototype,"operationalLayerType",void 0),e([d({readOnly:!0})],B.prototype,"parsedUrl",null),e([d(p$3)],B.prototype,"popupEnabled",void 0),e([d({type:B$1,json:{name:"popupInfo",write:!0}})],B.prototype,"popupTemplate",void 0),e([d({types:p$4,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:n$2}}}})],B.prototype,"renderer",null),e([d(l$1)],B.prototype,"screenSizePerspectiveEnabled",void 0),e([d({readOnly:!0})],B.prototype,"source",void 0),e([d({type:k})],B.prototype,"spatialReference",void 0),e([d({type:[p$5]})],B.prototype,"templates",void 0),e([d()],B.prototype,"title",void 0),e([d({json:{read:!1},readOnly:!0})],B.prototype,"type",void 0),e([d({type:String,readOnly:!0})],B.prototype,"typeIdField",void 0),e([d({type:[n$3]})],B.prototype,"types",void 0),e([d(f$1)],B.prototype,"url",null),B=e([n("esri.layers.GeoJSONLayer")],B);const Z=B;

export default Z;
