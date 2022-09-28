import { r, t, a as s, e, d, n } from './cast-3d5be210.js';
import { t as t$1, b as i$1 } from './geometry-2f332a26.js';
import { B as B$1 } from './PopupTemplate-b459951f.js';
import './UniqueValueRenderer-bb66af10.js';
import { a as p$4, n as n$2 } from './jsonUtils-e7c7add9.js';
import { O } from './MultiOriginJSONSupport-281c1c62.js';
import { b } from './Layer-569a1fc8.js';
import { m } from './Portal-5df9f5a7.js';
import { q, F, N, S, k as k$1, T, x as x$2, I, j } from './ogcFeatureUtils-e30f0ca6.js';
import x$1 from './FeatureSet-1b85367a.js';
import { k } from './Point-edff2a11.js';
import { i } from './APIKeyMixin-04df9c0f.js';
import { a } from './BlendLayer-7884099a.js';
import { o } from './CustomParametersMixin-f702935f.js';
import { p, a as p$2, r as r$1 } from './labelingInfo-6e0c44d1.js';
import { c } from './OperationalLayer-e04486e0.js';
import { p as p$1 } from './OrderedLayer-d02e1d58.js';
import { v } from './PortalLayer-e61e1a42.js';
import { n as n$1 } from './RefreshableLayer-496830b9.js';
import { t as t$2 } from './ScaleRangeLayer-f9a9951f.js';
import { a as a$1 } from './TemporalLayer-6cfc496a.js';
import { d as d$2, m as m$2, c as c$2, p as p$3, l as l$1, f } from './commonProperties-fca3036e.js';
import { n as n$3 } from './FeatureType-691faa46.js';
import { y } from './Field-2973a5cf.js';
import { l } from './fieldProperties-fa42dff4.js';
import { c as c$1, m as m$1 } from './fieldUtils-240a3b99.js';
import { j as j$1 } from './LabelClass-936eaa93.js';
import { b as b$1 } from './Query-1f6c7e43.js';
import { d as d$1 } from './popupUtils-883a107f.js';
import { M as M$1 } from './Extent-f27111e1.js';
import './Polyline-dcdb3782.js';
import './request-ac4d8bfb.js';
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
import './featureConversionUtils-3f60eb15.js';
import './OptimizedFeature-a0dba562.js';
import './OptimizedFeatureSet-261a115b.js';
import './geojson-62adf71f.js';
import './clientSideDefaults-2211e21f.js';
import './QueryEngineCapabilities-30e4c4d1.js';
import './defaultsJSON-5fb6161d.js';
import './FieldsIndex-ea481e79.js';
import './fieldType-eb0b42e4.js';
import './jsonUtils-f3f35e7f.js';
import './mat4-d5df0e58.js';
import './_commonjsHelpers-8dd5c177.js';
import './TimeExtent-66b53603.js';
import './asyncUtils-96c00c9e.js';
import './PortalItem-fa114dd2.js';
import './assets-99f5c3ee.js';
import './TimeInfo-0c128ef4.js';
import './unitUtils-a0a11e54.js';
import './labelUtils-824fc88a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let x=class extends m{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature";}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getFeatureDefinition(){const{featureDefinition:{collection:e,layerDefinition:t,spatialReference:s,supportedCrs:r},layer:{apiKey:o,capabilities:p,customParameters:i}}=this;return {capabilities:p,collection:e,layerDefinition:t,queryParameters:{apiKey:o,customParameters:i},spatialReference:s,supportedCrs:r}}queryExtent(e,t={}){return null}queryFeatureCount(e,t={}){return null}queryFeatures(e,t={}){return this.queryFeaturesJSON(e,t).then((e=>x$1.fromJSON(e)))}queryFeaturesJSON(e,t={}){const s=this.getFeatureDefinition();return this.load(t).then((()=>q(s,e,t)))}queryObjectIds(e,t={}){return null}serviceSupportsSpatialReference(e){return !(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]}_conformsToType(e,t){const s=new RegExp(`^${t}$`,"i");return e.conformsTo.some((e=>s.test(e)))??!1}_getCapabilities(e,t){const s=r(t)?t.components?.parameters:null;return {analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},query:{maxRecordCount:s?.limit?.schema?.maximum??s?.limitFeatures?.schema?.maximum??5e3,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1}}}_getExtent(e){const t=e.extent?.spatial;if(!t)return null;const s=t.bbox[0],r=4===s.length,o=s[0],p=s[1],i=r?void 0:s[2];return {xmin:o,ymin:p,xmax:r?s[2]:s[3],ymax:r?s[3]:s[4],zmin:i,zmax:r?void 0:s[5],spatialReference:k.WGS84.toJSON()}}_getStorageSpatialReference(e){const t$1=e.storageCrs??F,s=N(t$1);return t(s)?k.WGS84:new k({wkid:s})}_getSupportedSpatialReferences(e,t){const s="#/crs",r=e.crs??[F],o=r.includes(s)?r.filter((e=>e!==s)).concat(t.crs):r,p=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return o.filter((e=>!p.test(e)))}async _loadOGCServices(e,s$1){const o=r(s$1)?s$1.signal:null,{apiKey:p,collectionId:i,customParameters:a,fields:n,geometryType:g,hasZ:h,objectIdField:x,timeInfo:C,url:R}=e,w={fields:n?.map((e=>e.toJSON())),geometryType:t$1.toJSON(g),hasZ:h,objectIdField:x,timeInfo:C?.toJSON()},j$1={apiKey:p,customParameters:a,signal:o},F=await S(R,j$1),[O,v]=await Promise.all([k$1(F,j$1),T(F,j$1)]);if(!this._conformsToType(O,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new s("ogc-feature-layer:no-geojson-support","Server does not support geojson");const b=v.collections.find((e=>e.id===i));if(!b)throw new s("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const D=this._conformsToType(O,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await x$2(F,j$1):null,T$1=await I(b,w,j$1),P=this._getCapabilities(T$1.hasZ,D),_=this._getExtent(b),q=this._getStorageSpatialReference(b).toJSON(),E=this._getSupportedSpatialReferences(b,v),G=new RegExp(`^${j}`,"i"),A={};for(const t of E){const e=N(t);r(e)&&(A[e]||(A[e]=t.replace(G,"")));}T$1.extent=_,this.featureDefinition={capabilities:P,collection:b,layerDefinition:T$1,queryParameters:{},spatialReference:q,supportedCrs:A};}};e([d()],x.prototype,"featureDefinition",void 0),e([d({constructOnly:!0})],x.prototype,"layer",void 0),e([d()],x.prototype,"type",void 0),x=e([n("esri.layers.graphics.sources.OGCFeatureSource")],x);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const B=l();let V=class extends(i(o(p(a(p$1(a$1(t$2(c(v(n$1(O(b)))))))))))){constructor(e){super(e),this.collectionId=null,this.copyright=null,this.definitionExpression=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new x({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null;}destroy(){this.source?.destroy();}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then((()=>this._fetchService(e)))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&null==this.geometryType}set renderer(e){c$1(e,this.fieldsIndex),this._set("renderer",e);}on(e,r){return super.on(e,r)}createPopupTemplate(e){return d$1(this,e)}createQuery(){return new b$1}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,r){let t,i=!1;const o=r?.feature?.attributes,s=this.typeIdField&&o?.[this.typeIdField];return null!=s&&this.types&&(i=this.types.some((r=>r.id==s&&(t=r.domains?.[e],"inherited"===t?.type&&(t=this._getLayerDomain(e)),!0)))),i||t||(t=this._getLayerDomain(e)),t}queryFeatures(e,r){return this.load().then((()=>this.source.queryFeatures(b$1.from(e)||this.createQuery(),r))).then((e=>(e?.features?.forEach((e=>{e.layer=e.sourceLayer=this;})),e)))}serviceSupportsSpatialReference(e){return this.source?.serviceSupportsSpatialReference(e)??!1}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),c$1(this.renderer,this.fieldsIndex),m$1(this.timeInfo,this.fieldsIndex);}_getLayerDomain(e){if(!this.fields)return null;for(const r of this.fields)if(r.name===e&&r.domain)return r.domain;return null}};e([d({readOnly:!0,json:{origins:{service:{read:!0}}}})],V.prototype,"capabilities",void 0),e([d({type:String,json:{write:!0}})],V.prototype,"collectionId",void 0),e([d({type:String})],V.prototype,"copyright",void 0),e([d({readOnly:!0})],V.prototype,"defaultPopupTemplate",null),e([d({type:String})],V.prototype,"definitionExpression",void 0),e([d({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],V.prototype,"description",void 0),e([d({type:String})],V.prototype,"displayField",void 0),e([d(d$2)],V.prototype,"elevationInfo",void 0),e([d(p$2)],V.prototype,"featureReduction",void 0),e([d({type:[y],json:{origins:{service:{name:"layerDefinition.fields"}}}})],V.prototype,"fields",void 0),e([d(B.fieldsIndex)],V.prototype,"fieldsIndex",void 0),e([d({readOnly:!0,type:M$1,json:{origins:{service:{name:"layerDefinition.extent"}}}})],V.prototype,"fullExtent",void 0),e([d({type:i$1.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:i$1.read}}}}})],V.prototype,"geometryType",void 0),e([d({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],V.prototype,"hasZ",void 0),e([d({type:Boolean,readOnly:!0})],V.prototype,"isTable",null),e([d({type:[j$1],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:r$1},write:!0}}}})],V.prototype,"labelingInfo",void 0),e([d(m$2)],V.prototype,"labelsVisible",void 0),e([d(c$2)],V.prototype,"legendEnabled",void 0),e([d({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],V.prototype,"objectIdField",void 0),e([d({type:["OGCFeatureLayer"]})],V.prototype,"operationalLayerType",void 0),e([d(p$3)],V.prototype,"popupEnabled",void 0),e([d({type:B$1,json:{name:"popupInfo",write:!0}})],V.prototype,"popupTemplate",void 0),e([d({types:p$4,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:n$2,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],V.prototype,"renderer",null),e([d(l$1)],V.prototype,"screenSizePerspectiveEnabled",void 0),e([d({readOnly:!0})],V.prototype,"source",void 0),e([d({readOnly:!0,type:k,json:{origins:{service:{read:!0}}}})],V.prototype,"spatialReference",void 0),e([d({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],V.prototype,"title",void 0),e([d({readOnly:!0,json:{read:!1}})],V.prototype,"type",void 0),e([d({type:String,readOnly:!0})],V.prototype,"typeIdField",void 0),e([d({type:[n$3]})],V.prototype,"types",void 0),e([d(f)],V.prototype,"url",void 0),V=e([n("esri.layers.OGCFeatureLayer")],V);const M=V;

export default M;
