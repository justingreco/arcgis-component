import { e, d, n, W as t, t as t$1, ak as m, m as m$1, s as s$1, r, $ as w$1, a as s$3, a2 as e$1, a3 as r$1, J as g$1 } from './cast-3d5be210.js';
import { B } from './PopupTemplate-b459951f.js';
import './UniqueValueRenderer-bb66af10.js';
import { n as n$1 } from './jsonUtils-e7c7add9.js';
import { U as U$1, G } from './request-ac4d8bfb.js';
import { j as j$1 } from './Collection-a38e0489.js';
import { O } from './MultiOriginJSONSupport-281c1c62.js';
import { a, U, j as j$2 } from './reactiveUtils-bd6fe823.js';
import { o } from './Point-edff2a11.js';
import { b } from './Layer-569a1fc8.js';
import { i as i$1 } from './APIKeyMixin-04df9c0f.js';
import { p as p$1 } from './ArcGISService-848d76dd.js';
import { c as c$1 } from './OperationalLayer-e04486e0.js';
import { v as v$1 } from './PortalLayer-e61e1a42.js';
import { t as t$2 } from './ScaleRangeLayer-f9a9951f.js';
import { A, K } from './SceneService-83b1fafe.js';
import { t as t$3 } from './capabilities-c37437a0.js';
import { d as d$3, m as m$3, c as c$3, p as p$4, l as l$5 } from './commonProperties-fca3036e.js';
import { t as t$5, b as p$2, r as r$2 } from './labelingInfo-6e0c44d1.js';
import { l as l$3 } from './FetchAssociatedFeatureLayer-3be207ea.js';
import { l as l$2 } from './fieldProperties-fa42dff4.js';
import { d as d$1 } from './FieldsIndex-ea481e79.js';
import { c as c$2 } from './fieldUtils-240a3b99.js';
import { s as s$2, l as l$4, u as u$2, m as m$2 } from './I3SLayerDefinitions-ea40561e.js';
import { j as j$3 } from './LabelClass-936eaa93.js';
import { p as p$3 } from './LayerFloorInfo-b83a3647.js';
import { l as l$1, u } from './JSONSupport-dce2c67b.js';
import { u as u$1 } from './Handles-54afc0a7.js';
import { w } from './persistable-5b051b1c.js';
import { v } from './Polyline-dcdb3782.js';
import { A as An, W as Wn } from './projection-fbd5d346.js';
import { i } from './persistableUrlUtils-5dcd6081.js';
import { t as t$4 } from './styleUtils-106413c0.js';
import { b as b$1 } from './Query-1f6c7e43.js';
import { d as d$2 } from './popupUtils-883a107f.js';
import { r as r$3 } from './opacityUtils-dcd94f00.js';
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
import './aaBoundingBox-b312516d.js';
import './Extent-f27111e1.js';
import './aaBoundingRect-5e1a4e52.js';
import './collectionUtils-302901c0.js';
import './Portal-5df9f5a7.js';
import './Clonable-533c7a05.js';
import './ColorStop-64c57e35.js';
import './diffUtils-6436a697.js';
import './colorRamps-e3d9340f.js';
import './sizeVariableUtils-5330814d.js';
import './Graphic-93f45ded.js';
import './geometry-2f332a26.js';
import './compilerUtils-d149ad5f.js';
import './jsonUtils-a25e8eb8.js';
import './styleUtils-d2332fad.js';
import './DictionaryLoader-d0d1b4ff.js';
import './LRUCache-5f25d277.js';
import './MemCache-04cdd0cd.js';
import './aliasOf-bdfe6662.js';
import './heatmapUtils-d302cc7f.js';
import './vec4f64-011248e0.js';
import './arcgisLayerUrl-a268a370.js';
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
import './jsonUtils-f3f35e7f.js';
import './mat4-d5df0e58.js';
import './_commonjsHelpers-8dd5c177.js';
import './FeatureLayer-6922c890.js';
import './sql-817bbae7.js';
import './Field-2973a5cf.js';
import './fieldType-eb0b42e4.js';
import './HandleOwner-fe336959.js';
import './workers-c7a27acb.js';
import './intl-54ccdc89.js';
import './messages-5e9a4a9e.js';
import './queryZScale-127601ac.js';
import './zscale-0befeff4.js';
import './FeatureSet-1b85367a.js';
import './BlendLayer-7884099a.js';
import './CustomParametersMixin-f702935f.js';
import './OrderedLayer-d02e1d58.js';
import './RefreshableLayer-496830b9.js';
import './TemporalLayer-6cfc496a.js';
import './TimeInfo-0c128ef4.js';
import './FeatureType-691faa46.js';
import './versionUtils-55e187fe.js';
import './TopFeaturesQuery-babc7c57.js';
import './labelUtils-824fc88a.js';
import './defaultsJSON-5fb6161d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let s=class extends l$1{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo";}};e([d({type:String,json:{read:!0,write:!0}})],s.prototype,"name",void 0),e([d({type:String,json:{read:!0,write:!0}})],s.prototype,"field",void 0),e([d({type:[Number],json:{read:!0,write:!0}})],s.prototype,"currentRangeExtent",void 0),e([d({type:[Number],json:{read:!0,write:!0}})],s.prototype,"fullRangeExtent",void 0),e([d({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],s.prototype,"type",void 0),s=e([n("esri.layers.support.RangeInfo")],s);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var c;let p=c=class extends(u(j$1.ofType(v))){constructor(e){super(e);}clone(){return new c(this.items.map((e=>e.clone())))}write(e,r){return this.toJSON(r)}toJSON(e){const r=e?.layer?.spatialReference;return r?this.toArray().map((t$1=>{if(!r.equals(t$1.spatialReference)){if(!An(t$1.spatialReference,r))return e&&e.messages&&e.messages.push(new t("scenefilter:unsupported","Scene filters with incompatible spatial references are not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),null;const s=new v;Wn(t$1,s,r),t$1=s;}const s=t$1.toJSON(e);return delete s.spatialReference,s})).filter((e=>null!=e)):(e?.messages&&e.messages.push(new t("scenefilter:unsupported","Writing Scene filters without context layer is not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),this.toArray().map((r=>r.toJSON(e))))}static fromJSON(e,r){const t=new c;return e.forEach((e=>t.add(v.fromJSON(e,r)))),t}};p=c=e([n("esri.layers.support.PolygonCollection")],p);const l=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var g;let f=g=class extends l$1{constructor(e){super(e),this.spatialRelationship="disjoint",this.geometries=new l,this._geometriesSource=null,this._handles=new u$1;}initialize(){this._handles.add(a((()=>this.geometries),"after-changes",(()=>this.geometries=this.geometries),U));}destroy(){this._handles.destroy();}readGeometries(e,o,r){this._geometriesSource={url:i(e,r),context:r};}async loadGeometries(e,r){if(t$1(this._geometriesSource))return;const{url:s,context:t}=this._geometriesSource,p=await U$1(s,{responseType:"json",signal:m(r,"signal")}),n=e.toJSON(),c=p.data.map((e=>({...e,spatialReference:n})));this.geometries=l.fromJSON(c,t),this._geometriesSource=null;}clone(){return new g({geometries:m$1(this.geometries),spatialRelationship:this.spatialRelationship})}};e([d({type:["disjoint","contains"],nonNullable:!0,json:{write:!0}})],f.prototype,"spatialRelationship",void 0),e([d({type:l,nonNullable:!0,json:{write:!0}}),w({origins:["web-scene","portal-item"],type:"resource",prefix:"geometries"})],f.prototype,"geometries",void 0),e([o(["web-scene","portal-item"],"geometries")],f.prototype,"readGeometries",null),f=g=e([n("esri.layers.support.SceneFilter")],f);const j=f;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const X=["3DObject","Point"],Y=s$1.getLogger("esri.layers.SceneLayer"),ee=l$2();let te=class extends(A(p$1(c$1(v$1(t$2(O(i$1(b)))))))){constructor(...e){super(...e),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.excludeObjectIds=new j$1,this.definitionExpression=null,this.filter=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.priority=null,this.semantic=null,this.cachedDrawingInfo={color:!1},this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0;}normalizeCtorArgs(e,t){return "string"==typeof e?{url:e,...t}:e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){const r=this.getFeatureType(t?.feature)?.domains?.[e];return r&&"inherited"!==r.type?r:this.getField(e)?.domain??null}getFeatureType(e){return e&&r(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}get types(){return r(this.associatedLayer)?this.associatedLayer.types:[]}get typeIdField(){return r(this.associatedLayer)?this.associatedLayer.typeIdField:null}get formTemplate(){return r(this.associatedLayer)?this.associatedLayer.formTemplate:null}get fieldsIndex(){return new d$1(this.fields)}readNodePages(e,t,r){return "Point"===t.layerType&&(e=t.pointNodePages),null==e||"object"!=typeof e?null:s$2.fromJSON(e,r)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo();}get geometryType(){return ie[this.profile]||"mesh"}set renderer(e){c$2(e,this.fieldsIndex),this._set("renderer",e);}readCachedDrawingInfo(e){return null!=e&&"object"==typeof e||(e={}),null==e.color&&(e.color=!1),e}get capabilities(){const e=r(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:t$3,{query:t,editing:{supportsGlobalId:r$1,supportsRollbackOnFailure:i,supportsUploadWithItemId:s,supportsReturnServiceEditsInSourceSpatialReference:o},data:{supportsZ:a,supportsM:p,isVersioned:l,supportsAttachment:d},operations:{supportsEditing:y,supportsUpdate:u,supportsQuery:c,supportsQueryAttachments:f}}=e,h=e.operations.supportsChangeTracking;return {query:t,editing:{supportsGlobalId:r$1,supportsReturnServiceEditsInSourceSpatialReference:o,supportsRollbackOnFailure:i,supportsGeometryUpdate:!1,supportsUploadWithItemId:s},data:{supportsAttachment:d,supportsZ:a,supportsM:p,isVersioned:l},operations:{supportsQuery:c,supportsQueryAttachments:f,supportsEditing:y&&h,supportsAdd:!1,supportsDelete:!1,supportsUpdate:u&&h}}}get editingEnabled(){return this._isOverridden("editingEnabled")?this._get("editingEnabled"):this.userHasEditingPrivileges}set editingEnabled(e){null!=e?this._override("editingEnabled",e):this._clearOverride("editingEnabled");}get defaultPopupTemplate(){return r(this.associatedLayer)||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,t){return !e&&t.fields&&t.fields.some((t=>("esriFieldTypeOID"===t.type&&(e=t.name),!!e))),e||void 0}readGlobalIdField(e,t){return !e&&t.fields&&t.fields.some((t=>("esriFieldTypeGlobalID"===t.type&&(e=t.name),!!e))),e||void 0}get displayField(){return r(this.associatedLayer)?this.associatedLayer.displayField:null}readProfile(e,t){const r=t.store.profile;return null!=r&&re[r]?re[r]:(Y.error("Unknown or missing profile",{profile:r,layer:this}),"mesh-pyramids")}load(e){const t=r(e)?e.signal:null,r$1=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(w$1).then((()=>this._fetchService(t))).then((()=>Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,t),this._setAssociatedFeatureLayer(t),r(this.filter)?this.filter.loadGeometries(this.spatialReference):null]))).then((()=>this._validateElevationInfo())).then((()=>this._applyAssociatedLayerOverrides())).then((()=>this._populateFieldUsageInfo())).then((()=>t$4(this,{origin:"service"},t))).then((()=>c$2(this.renderer,this.fieldsIndex))).then((()=>this.finishLoadEditablePortalLayer(e)));return this.addResolvingPromise(r$1),Promise.resolve(this)}async beforeSave(){r(this.filter)&&await this.load();}createQuery(){const e=new b$1;return "mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryExtent(e||this.createQuery(),t)))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatureCount(e||this.createQuery(),t)))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatures(e||this.createQuery(),t))).then((e=>{if(e?.features)for(const t of e.features)t.layer=this,t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryObjectIds(e||this.createQuery(),t)))}queryAttachments(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryAttachments(e,t)))}getFieldUsageInfo(e){const t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(Y.error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}createPopupTemplate(e){return d$2(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return r(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),t$1(this.associatedLayer))throw new s$3("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load();}catch(e){throw new s$3("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}hasCachedStatistics(e){return null!=this.statisticsInfo&&this.statisticsInfo.some((t=>t.name===e))}async queryCachedStatistics(e,t){if(await this.load(t),!this.statisticsInfo)throw new s$3("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const r=this.fieldsIndex.get(e);if(!r)throw new s$3("scenelayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const s of this.statisticsInfo)if(s.name===r.name){const e=G(this.parsedUrl.path,s.href);return U$1(e,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then((e=>e.data))}throw new s$3("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(K.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"};return this._debouncedSaveOperations(K.SAVE,e)}async applyEdits(e,t){const r=await import('./editingSupport-5ef90092.js');if(await this.load(),t$1(this.associatedLayer))throw new s$3(`${this.type}-layer:not-editable`,"Service is not editable");return await this.associatedLayer.load(),r.applyEdits(this,this.associatedLayer.source,e,t)}on(e,t){return super.on(e,t)}validateLayer(e){if(e.layerType&&!X.includes(e.layerType))throw new s$3("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new s$3("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});if(this.version.major>2)throw new s$3("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});function t(e,t){let r=!1,i=!1;if(null==e)r=!0,i=!0;else {const s=t&&t.isGeographic;switch(e){case"east-north-up":case"earth-centered":r=!0,i=s;break;case"vertex-reference-frame":r=!0,i=!s;break;default:r=!1;}}if(!r)throw new s$3("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!i)throw new s$3("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}t(this.normalReferenceFrame,this.spatialReference);}_getTypeKeywords(){const e=[];if("points"===this.profile)e.push("Point");else {if("mesh-pyramids"!==this.profile)throw new s$3("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject");}return e}_populateFieldUsageInfo(){if(this._fieldUsageInfo={},this.fields)for(const e of this.fields){const t=!(!this.attributeStorageInfo||!this.attributeStorageInfo.some((t=>t.name===e.name))),r$1=!!(r(this.associatedLayer)&&this.associatedLayer.fields&&this.associatedLayer.fields.some((t=>t&&e.name===t.name))),i={supportsLabelingInfo:t,supportsRenderer:t,supportsPopupTemplate:t||r$1,supportsLayerQuery:r$1};this._fieldUsageInfo[e.name]=i;}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides();}_applyAssociatedLayerFieldsOverrides(){if(t$1(this.associatedLayer)||!this.associatedLayer.fields)return;let e=null;for(const t of this.associatedLayer.fields){const r=this.getField(t.name);r?(!r.domain&&t.domain&&(r.domain=t.domain.clone()),r.editable=t.editable,r.nullable=t.nullable,r.length=t.length):(e||(e=this.fields?this.fields.slice():[]),e.push(t.clone()));}e&&this._set("fields",e);}_applyAssociatedLayerPopupOverrides(){if(t$1(this.associatedLayer))return;const e=["popupTemplate","popupEnabled"],t=e$1(this);for(let r=0;r<e.length;r++){const i=e[r],s=this.originIdOf(i),o=this.associatedLayer.originIdOf(i);s<o&&(o===r$1.SERVICE||o===r$1.PORTAL_ITEM)&&t.setAtOrigin(i,this.associatedLayer[i],o);}}async _setAssociatedFeatureLayer(e){if(!["mesh-pyramids","points"].includes(this.profile))return;const t=new l$3(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedLayer=await t.fetch();}catch(r){g$1(r)||this._logWarningOnPopupEnabled();}}async _logWarningOnPopupEnabled(){await j$2((()=>this.popupEnabled&&null!=this.popupTemplate));const e=`this SceneLayer: ${this.title}`;null==this.attributeStorageInfo?Y.warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`):Y.info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`);}_validateElevationInfo(){const e=this.elevationInfo;e&&("mesh-pyramids"===this.profile&&"relative-to-scene"===e.mode&&Y.warn(".elevationInfo=","Mesh scene layers don't support relative-to-scene elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&Y.warn(".elevationInfo=","Scene layers do not support featureExpressionInfo"));}};e([d({types:{key:"type",base:t$5,typeMap:{selection:p$2}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],te.prototype,"featureReduction",void 0),e([d({type:[s],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],te.prototype,"rangeInfos",void 0),e([d({json:{read:!1}})],te.prototype,"associatedLayer",void 0),e([d({type:["show","hide"]})],te.prototype,"listMode",void 0),e([d({type:["ArcGISSceneServiceLayer"]})],te.prototype,"operationalLayerType",void 0),e([d({json:{read:!1},readOnly:!0})],te.prototype,"type",void 0),e([d({...ee.fields,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],te.prototype,"fields",void 0),e([d()],te.prototype,"types",null),e([d()],te.prototype,"typeIdField",null),e([d()],te.prototype,"formTemplate",null),e([d({readOnly:!0})],te.prototype,"fieldsIndex",null),e([d({type:p$3,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],te.prototype,"floorInfo",void 0),e([d(ee.outFields)],te.prototype,"outFields",void 0),e([d({type:s$2,readOnly:!0,json:{read:!1}})],te.prototype,"nodePages",void 0),e([o("service","nodePages",["nodePages","pointNodePages"])],te.prototype,"readNodePages",null),e([d({type:[l$4],readOnly:!0})],te.prototype,"materialDefinitions",void 0),e([d({type:[u$2],readOnly:!0})],te.prototype,"textureSetDefinitions",void 0),e([d({type:[m$2],readOnly:!0})],te.prototype,"geometryDefinitions",void 0),e([d({readOnly:!0})],te.prototype,"serviceUpdateTimeStamp",void 0),e([d({readOnly:!0})],te.prototype,"attributeStorageInfo",void 0),e([d({readOnly:!0})],te.prototype,"statisticsInfo",void 0),e([d({type:j$1.ofType(Number),nonNullable:!0,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.excludeObjectIds",write:{enabled:!0}}})],te.prototype,"excludeObjectIds",void 0),e([d({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],te.prototype,"definitionExpression",void 0),e([d({type:j,json:{name:"layerDefinition.polygonFilter",write:!0}})],te.prototype,"filter",void 0),e([d({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],te.prototype,"path",void 0),e([d(d$3)],te.prototype,"elevationInfo",null),e([d({type:String})],te.prototype,"geometryType",null),e([d(m$3)],te.prototype,"labelsVisible",void 0),e([d({type:[j$3],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:r$2},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:r$2},write:!0}})],te.prototype,"labelingInfo",void 0),e([d(c$3)],te.prototype,"legendEnabled",void 0),e([d({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader(e,t){if("number"==typeof e&&e>=0&&e<=1)return e;const r=t.layerDefinition?.drawingInfo?.transparency;return void 0!==r?r$3(r):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],te.prototype,"opacity",void 0),e([d({type:["Low","High"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],te.prototype,"priority",void 0),e([d({type:["Labels"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],te.prototype,"semantic",void 0),e([d({types:n$1,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],te.prototype,"renderer",null),e([d({json:{read:!1}})],te.prototype,"cachedDrawingInfo",void 0),e([o("service","cachedDrawingInfo")],te.prototype,"readCachedDrawingInfo",null),e([d({readOnly:!0,json:{read:!1}})],te.prototype,"capabilities",null),e([d({type:Boolean,json:{read:!1}})],te.prototype,"editingEnabled",null),e([d(p$4)],te.prototype,"popupEnabled",void 0),e([d({type:B,json:{name:"popupInfo",write:!0}})],te.prototype,"popupTemplate",void 0),e([d({readOnly:!0,json:{read:!1}})],te.prototype,"defaultPopupTemplate",null),e([d({type:String,json:{read:!1}})],te.prototype,"objectIdField",void 0),e([o("service","objectIdField",["objectIdField","fields"])],te.prototype,"readObjectIdField",null),e([d({type:String,json:{read:!1}})],te.prototype,"globalIdField",void 0),e([o("service","globalIdField",["globalIdField","fields"])],te.prototype,"readGlobalIdField",null),e([d({readOnly:!0,type:String,json:{read:!1}})],te.prototype,"displayField",null),e([d({type:String,json:{read:!1}})],te.prototype,"profile",void 0),e([o("service","profile",["store.profile"])],te.prototype,"readProfile",null),e([d({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],te.prototype,"normalReferenceFrame",void 0),e([d(l$5)],te.prototype,"screenSizePerspectiveEnabled",void 0),te=e([n("esri.layers.SceneLayer")],te);const re={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},ie={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"},se=te;

export default se;
