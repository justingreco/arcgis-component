import { e as e$1, d as d$1, n as n$2, y, c as a$1, h as e$2, aQ as D, ax as j, G as b, r, s as s$2, C as x, as as o$1, a as s$3, m, J as g$1, t } from './cast-3d5be210.js';
import { g } from './Graphic-93f45ded.js';
import './geometry-2f332a26.js';
import { j as j$1 } from './Collection-a38e0489.js';
import { l as l$4, h as h$1, j as j$2 } from './reactiveUtils-bd6fe823.js';
import { h } from './EffectView-a2b02e73.js';
import { y as y$1 } from './labelingInfo-6e0c44d1.js';
import x$1 from './FeatureSet-1b85367a.js';
import { b as b$1 } from './Query-1f6c7e43.js';
import { S } from './enums-395c521f.js';
import { f } from './LayerView2D-2fae06b5.js';
import { a as d$2, f as f$1, x as x$2, m as m$1, b as c$2, z, v } from './schemaUtils-7d44ec06.js';
import { a as l$2, b as l$3 } from './TileStore-909b46c6.js';
import { _ } from './Promise-d2759b2e.js';
import { u as u$2 } from './workers-c7a27acb.js';
import { e as e$4 } from './util-5c5a1b58.js';
import { e as e$3 } from './TileKey-97254206.js';
import { A as A$1 } from './FeatureLayerView-509bd781.js';
import { u as u$3 } from './LayerView-1ee5d9ed.js';
import { i as i$1 } from './RefreshableLayerView-88a48188.js';
import { l as l$5 } from './capabilities-cb32c85a.js';
import { M as M$1 } from './Extent-f27111e1.js';
import './PopupTemplate-b459951f.js';
import './JSONSupport-dce2c67b.js';
import './Point-edff2a11.js';
import './fieldUtils-240a3b99.js';
import './request-ac4d8bfb.js';
import './enumeration-6695a859.js';
import './number-c5a37d3e.js';
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
import './Portal-5df9f5a7.js';
import './Clonable-533c7a05.js';
import './Polyline-dcdb3782.js';
import './jsonUtils-f3f35e7f.js';
import './mat4-d5df0e58.js';
import './_commonjsHelpers-8dd5c177.js';
import './TimeExtent-66b53603.js';
import './UniqueValueRenderer-bb66af10.js';
import './ColorStop-64c57e35.js';
import './diffUtils-6436a697.js';
import './colorRamps-e3d9340f.js';
import './sizeVariableUtils-5330814d.js';
import './compilerUtils-d149ad5f.js';
import './commonProperties-fca3036e.js';
import './unitUtils-a0a11e54.js';
import './jsonUtils-a25e8eb8.js';
import './styleUtils-d2332fad.js';
import './jsonUtils-e7c7add9.js';
import './DictionaryLoader-d0d1b4ff.js';
import './LRUCache-5f25d277.js';
import './MemCache-04cdd0cd.js';
import './aliasOf-bdfe6662.js';
import './heatmapUtils-d302cc7f.js';
import './vec4f64-011248e0.js';
import './LabelClass-936eaa93.js';
import './labelUtils-824fc88a.js';
import './defaultsJSON-5fb6161d.js';
import './Field-2973a5cf.js';
import './fieldType-eb0b42e4.js';
import './Container-9c6fdd22.js';
import './DefaultUI-a0db5719.js';
import './Handles-54afc0a7.js';
import './jsxFactory-4cd653a4.js';
import './intl-54ccdc89.js';
import './messages-5e9a4a9e.js';
import './assets-99f5c3ee.js';
import './uuid-ac104993.js';
import './index-f980186a.js';
import './HandleOwner-fe336959.js';
import './Feature-d7b2670c.js';
import './byteSizeEstimations-5d50d6ff.js';
import './Cyclical-922b1741.js';
import './executeQueryJSON-cbafa4d9.js';
import './utils-d801fb7f.js';
import './query-993c240b.js';
import './normalizeUtils-d37dc597.js';
import './pbfQueryUtils-266d53dd.js';
import './pbf-bac0c6a4.js';
import './OptimizedFeature-a0dba562.js';
import './OptimizedFeatureSet-261a115b.js';
import './queryZScale-127601ac.js';
import './zscale-0befeff4.js';
import './TopFeaturesQuery-babc7c57.js';
import './utils-112c7fa0.js';
import './utils-2bda91e5.js';
import './asyncUtils-96c00c9e.js';
import './ItemCache-1f62ab56.js';
import './utils-8133dc40.js';
import './widget-a58988b6.js';
import './vmEvent-c5708c9c.js';
import './themeUtils-b1f4a2e4.js';
import './featureConversionUtils-3f60eb15.js';
import './languageUtils-d37e9fbb.js';
import './number-3228daf9.js';
import './FeatureLayer-6922c890.js';
import './MultiOriginJSONSupport-281c1c62.js';
import './sql-817bbae7.js';
import './HeightModelInfo-12951268.js';
import './Layer-569a1fc8.js';
import './APIKeyMixin-04df9c0f.js';
import './ArcGISService-848d76dd.js';
import './arcgisLayerUrl-a268a370.js';
import './BlendLayer-7884099a.js';
import './CustomParametersMixin-f702935f.js';
import './OperationalLayer-e04486e0.js';
import './OrderedLayer-d02e1d58.js';
import './PortalLayer-e61e1a42.js';
import './PortalItem-fa114dd2.js';
import './RefreshableLayer-496830b9.js';
import './ScaleRangeLayer-f9a9951f.js';
import './TemporalLayer-6cfc496a.js';
import './TimeInfo-0c128ef4.js';
import './FeatureType-691faa46.js';
import './fieldProperties-fa42dff4.js';
import './FieldsIndex-ea481e79.js';
import './LayerFloorInfo-b83a3647.js';
import './versionUtils-55e187fe.js';
import './styleUtils-106413c0.js';
import './popupUtils-883a107f.js';
import './symbolUtils-7f5a2832.js';
import './colorUtils-e0bbe79f.js';
import './mat2d-677a80fe.js';
import './GoTo-929e809f.js';
import './Map-3fa127ca.js';
import './Basemap-bccaf827.js';
import './loadAll-0acccebb.js';
import './writeUtils-ab23132f.js';
import './layerUtils-160a1a44.js';
import './CollectionFlattener-9ce72729.js';
import './TablesMixin-6752cfb1.js';
import './GraphicsCollection-851bdafb.js';
import './Scheduler-ed7a36dc.js';
import './heightModelInfoUtils-4737da37.js';
import './ViewingMode-4a1cffad.js';
import './projection-fbd5d346.js';
import './Viewpoint-e3d4029a.js';
import './mat3-eb8de168.js';
import './vec2-4f9a494f.js';
import './vec2f32-23e4a539.js';
import './vec2f64-2956001b.js';
import './context-util-5ae1bf7b.js';
import './DisplayObject-f25c6d04.js';
import './Utils-b4b0f45e.js';
import './number-ad66b701.js';
import './enums-4770f29d.js';
import './Texture-f189b7ba.js';
import './VertexElementDescriptor-3b53aa99.js';
import './utils-84240eaf.js';
import './MaterialKey-ac9b534a.js';
import './alignmentUtils-4bbd02ca.js';
import './visualVariablesUtils-dc5fe9fe.js';
import './createSymbolSchema-b1774621.js';
import './CIMSymbolHelper-78ca7d84.js';
import './BidiEngine-c95c4945.js';
import './floatRGBA-64e5bf11.js';
import './GeometryUtils-bcda40bd.js';
import './cimSymbolUtils-3c2ee352.js';
import './cimAnalyzer-a2a69390.js';
import './callExpressionWithFeature-cfe9aa0a.js';
import './quantizationUtils-65995723.js';
import './devEnvironmentUtils-cb76d69b.js';
import './MD5-72be4fba.js';
import './quickselect-d6c9284c.js';
import './floorFilterUtils-904cfc06.js';
import './popupUtils-37e309e6.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let p=class extends g{constructor(){super(...arguments),this.isAggregate=!0;}getEffectivePopupTemplate(e=!1){if(this.popupTemplate)return this.popupTemplate;const r=this.sourceLayer&&this.sourceLayer.featureReduction;return r&&"popupTemplate"in r&&r.popupEnabled?r.popupTemplate:null}getObjectId(){return this.objectId}};e$1([d$1({type:Boolean})],p.prototype,"isAggregate",void 0),e$1([d$1({type:[String,Number],json:{read:!0}})],p.prototype,"objectId",void 0),p=e$1([n$2("esri.AggregateGraphic")],p);const s$1=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let o=class extends y{constructor(e){super(e),this._filter=null,this.duration=a$1("mapview-transitions-duration"),this._excludedEffectView=new h(e),this._includedEffectView=new h(e);}get excludedEffects(){return this._excludedEffectView.effects}set featureEffect(e){this._get("featureEffect")!==e&&this._transitionTo(e);}get filter(){return this._filter||e$2(this.featureEffect)?.filter||null}get hasEffects(){return this._excludedEffectView.hasEffects||this._includedEffectView.hasEffects}get includedEffects(){return this._includedEffectView.effects}set scale(e){this._set("scale",e),this._excludedEffectView.scale=e,this._includedEffectView.scale=e;}get transitioning(){return this._excludedEffectView.transitioning||this._includedEffectView.transitioning}transitionStep(e,t){this._set("scale",t),this.transitioning?(this._includedEffectView.transitionStep(e,t),this._excludedEffectView.transitionStep(e,t),this.transitioning||(this._filter=null)):(this._excludedEffectView.scale=t,this._includedEffectView.scale=t);}end(){this._includedEffectView.end(),this._excludedEffectView.end(),this._filter=null;}_transitionTo(e){const t=this._get("featureEffect"),i=e$2(e),f=e$2(i?.includedEffect),c=e$2(i?.excludedEffect),r=this._includedEffectView.canTransitionTo(f)&&this._excludedEffectView.canTransitionTo(c);this._includedEffectView.effect=f,this._excludedEffectView.effect=c,this._set("featureEffect",i),this._filter=i?.filter||t?.filter||null,r||this.end();}};e$1([d$1()],o.prototype,"_filter",void 0),e$1([d$1()],o.prototype,"_excludedEffectView",void 0),e$1([d$1()],o.prototype,"_includedEffectView",void 0),e$1([d$1()],o.prototype,"duration",void 0),e$1([d$1()],o.prototype,"excludedEffects",null),e$1([d$1()],o.prototype,"featureEffect",null),e$1([d$1()],o.prototype,"filter",null),e$1([d$1()],o.prototype,"hasEffects",null),e$1([d$1()],o.prototype,"includedEffects",null),e$1([d$1({value:0})],o.prototype,"scale",null),e$1([d$1()],o.prototype,"transitioning",null),o=e$1([n$2("esri.layers.effects.FeatureEffectView")],o);const n$1=o;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
async function e(e,r){if(!e)return null;switch(e.type){case"symbol":return new((await import('./SymbolTileRenderer-60c2ba99.js')).default)(r);case"heatmap":return new((await import('./HeatmapTileRenderer-e92c7e7f.js')).default)(r)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function a(e){return e.some((e=>e.globalId))}function d(e){return e.filter((e=>!e.error)).map((e=>e.objectId??e.globalId))}function i(e,r){const s=new Set(e);for(const t of r.values())s.add(t);return s}function n(e,r){const s=new Set(e);for(const t of r.values())s.delete(t);return s}let c$1=class extends y{constructor(e){super(e),this._hasGlobalIds=!1;}normalizeCtorArgs(e){return this._queueProcessor=new l$2({concurrency:1,process:e.process}),{}}destroy(){this.clear();}get updating(){return this._queueProcessor.length>0}clear(){this._queueProcessor.clear();}push(e){const r=this._queueProcessor,s=r.last();switch(e.type){case"update":case"refresh":if(s?.type===e.type)return;r.push(e).finally((()=>this.notifyChange("updating")));break;case"edit":{const t="processed-edit"===s?.type?s:null;t&&r.popLast();const o=this._mergeEdits(t,e);for(const e of o)r.push(e).finally((()=>this.notifyChange("updating")));break}}this.notifyChange("updating");}_mergeEdits(e,r){const{addedFeatures:s,deletedFeatures:t,updatedFeatures:o}=r.edits;if(this._hasGlobalIds=this._hasGlobalIds||a(s)||a(o)||a(t),this._hasGlobalIds){return [e,{type:"processed-edit",edits:{addOrModified:[...s,...o],removed:t}}]}const c=new Set(d(e?.edits.addOrModified??[])),u=new Set(d(e?.edits.removed??[])),p=new Set([...d(s),...d(o)]),l=new Set(d(t));return [{type:"processed-edit",edits:{addOrModified:Array.from(i(n(c,l),p)).map((e=>({objectId:e}))),removed:Array.from(i(n(u,p),l)).map((e=>({objectId:e})))}}]}};e$1([d$1({readOnly:!0})],c$1.prototype,"updating",null),c$1=e$1([n$2("esri.views.2d.layers.support.FeatureCommandQueue")],c$1);const u$1=c$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function c(e){return Array.isArray(e)}let l$1=class extends _{constructor(e){super(e),this._startupResolver=D(),this.isReady=!1;}initialize(){this._controller=new AbortController,this.addResolvingPromise(this._startWorker(this._controller.signal));}destroy(){this._controller.abort(),this._connection&&this._connection.close();}set tileRenderer(e){this.client.tileRenderer=e;}get closed(){return this._connection.closed}async startup(e,t,r,s){await this.when();const o=this._controller.signal,i=c(r.source)?{transferList:r.source,signal:o}:void 0,n={service:r,config:t,tileInfo:e.tileInfo.toJSON(),tiles:s};await this._connection.invoke("startup",n,i),this._startupResolver.resolve(),this._set("isReady",!0);}async updateTiles(e){return await this._startupResolver.promise,j(this._connection.invoke("updateTiles",e))}async update(e){const t={config:e};return await this._startupResolver.promise,this._connection.invoke("update",t)}async applyUpdate(e){return await this._startupResolver.promise,this._connection.invoke("applyUpdate",e)}async setHighlight(e){return await this._startupResolver.promise,j(this._connection.invoke("controller.setHighlight",e))}async stop(){if(await this._startupResolver.promise,!this.closed)return j(this._connection.invoke("stop"))}async refresh(e){return await this._startupResolver.promise,j(this._connection.invoke("controller.refresh",e))}async querySummaryStatistics(e,t,r){return await this._startupResolver.promise,this._connection.invoke("controller.querySummaryStatistics",{query:e.toJSON(),params:t},r)}async queryUniqueValues(e,t,r){return await this._startupResolver.promise,this._connection.invoke("controller.queryUniqueValues",{query:e.toJSON(),params:t},r)}async queryClassBreaks(e,t,r){return await this._startupResolver.promise,this._connection.invoke("controller.queryClassBreaks",{query:e.toJSON(),params:t},r)}async queryHistogram(e,t,r){return await this._startupResolver.promise,this._connection.invoke("controller.queryHistogram",{query:e.toJSON(),params:t},r)}async queryFeatures(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryFeatures",e.toJSON(),t)}async queryVisibleFeatures(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryVisibleFeatures",e.toJSON(),t)}async queryObjectIds(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryObjectIds",e.toJSON(),t)}async queryFeatureCount(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryFeatureCount",e.toJSON(),t)}async queryExtent(e,t){return this._connection.invoke("controller.queryExtent",e.toJSON(),t)}async queryLatestObservations(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryLatestObservations",e.toJSON(),t)}async queryStatistics(e){return await this._startupResolver.promise,this._connection.invoke("controller.queryStatistics",e)}async getObjectId(e){return await this._startupResolver.promise,this._connection.invoke("controller.getObjectId",e)}async getDisplayId(e){return await this._startupResolver.promise,this._connection.invoke("controller.getDisplayId",e)}async getFeatures(e){return await this._startupResolver.promise,this._connection.invoke("controller.getFeatures",e)}async getAggregates(){return await this._startupResolver.promise,this._connection.invoke("controller.getAggregates")}async getAggregateValueRanges(){return await this._startupResolver.promise,this._connection.invoke("controller.getAggregateValueRanges")}async mapValidDisplayIds(e){return await this._startupResolver.promise,this._connection.invoke("controller.mapValidDisplayIds",e)}async onEdits(e){return await this._startupResolver.promise,j(this._connection.invoke("controller.onEdits",e))}async enableEvent(e,t){return await this._startupResolver.promise,j(this._connection.invoke("controller.enableEvent",{name:e,value:t}))}pauseStream(){return j(this._connection.invoke("controller.pauseStream"))}resumeStream(){return j(this._connection.invoke("controller.resumeStream"))}async _startWorker(e){try{this._connection=await u$2("Pipeline",{client:this.client,strategy:"dedicated",signal:e});}catch(t){b(t);}}};e$1([d$1()],l$1.prototype,"isReady",void 0),e$1([d$1()],l$1.prototype,"client",void 0),e$1([d$1()],l$1.prototype,"tileRenderer",null),l$1=e$1([n$2("esri.views.2d.layers.support.FeatureLayerProxy")],l$1);const u=l$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const l=1e-6;class s{constructor(e){this._tiles=new Map,this.buffer=0,this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,this.buffer=e.buffer;}destroy(){}clear(){this._tiles.forEach((e=>this._releaseTile(e)));}tileKeys(){const e=[];return this._tiles.forEach(((i,t)=>e.push(t))),e}update(e){const l=this.tileInfoView.getTileCoverage(e.state,this.buffer,"closest"),{spans:s,lodInfo:r}=l,{level:a}=r,o=[],d=[],h=new Set,n=new Set;for(const{row:i,colFrom:c,colTo:f}of s)for(let e=c;e<=f;e++){const l=e$3.getId(a,i,r.normalizeCol(e),r.getWorldForColumn(e)),s=this._getOrAcquireTile(o,l);h.add(l),s.isReady?s.visible=!0:n.add(s.key);}n.forEach((e=>this._addPlaceholders(h,e))),this._tiles.forEach((e=>{h.has(e.key.id)||(d.push(e.key.id),this._releaseTile(e));})),l$3.pool.release(l);return {hasMissingTiles:n.size>0,added:o,removed:d}}_getOrAcquireTile(e,i){if(!this._tiles.has(i)){const l=this.acquireTile(new e$3(i));e.push(i),this._tiles.set(i,l),l.visible=!1;}return this._tiles.get(i)}_getTile(e){return this._tiles.get(e)}_releaseTile(e){this._tiles.delete(e.key.id),this.releaseTile(e);}_addPlaceholders(e,i){const t=this._addPlaceholderChildren(e,i);if(!(Math.abs(1-t)<l)){if(!this._addPlaceholderParent(e,i)){this._getTile(i.id).visible=!0;}}}_addPlaceholderChildren(e,i){let t=0;return this._tiles.forEach((l=>{t+=this._addPlaceholderChild(e,l,i);})),t}_addPlaceholderChild(e,i,t){if(i.key.level<=t.level||!i.hasData||!t.contains(i.key))return 0;i.visible=!0,e.add(i.key.id);return 1/(1<<2*(i.key.level-t.level))}_addPlaceholderParent(i,t){let l=t.getParentKey(),s=0,r$1=null;for(;r(l);){if(i.has(l.id))return !0;const e=this._getTile(l.id);if(e?.isReady)return e.visible=!0,i.add(e.key.id),!0;e?.hasData&&e.patchCount>s&&(s=e.patchCount,r$1=e),l=l.getParentKey();}return !!r$1&&(r$1.visible=!0,i.add(r$1.key.id),!0)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function Q(e){return e&&"openPorts"in e}const A=s$2.getLogger("esri.views.2d.layers.FeatureLayerView2D");let M=class extends(A$1(i$1(f(u$3)))){constructor(){super(...arguments),this._pipelineIsUpdating=!0,this._commandsQueue=new u$1({process:e=>{switch(e.type){case"processed-edit":return this._doEdit(e);case"refresh":return this._doRefresh(e.dataChanged);case"update":return this._doUpdate()}}}),this._visibilityOverrides=new Set,this._highlightIds=new Map,this._updateHighlight=x((async()=>this._proxy.setHighlight(Array.from(this._highlightIds.keys())))),this._uploadsLocked=!1,this._needsClusterSizeUpdate=!1,this.featureEffectView=new n$1,this._lastDefinitionExpression=null;}destroy(){o$1(this._updateClusterSizeTask,(e=>e.remove())),this._proxy?.destroy(),this._commandsQueue.destroy();}initialize(){this.addResolvingPromise(Promise.all([this._initProxy(),this._initServiceOptions()])),this.handles.add([this.on("valueRangesChanged",(e=>{this._set("_aggregateValueRanges",e.valueRanges);})),l$4((()=>this.featureEffect),(e=>{this.featureEffectView.featureEffect=e;}),{initial:!0,sync:!0})]);}async _initProxy(){const e=this.layer;if("isTable"in e&&e.isTable)throw new s$3("featurelayerview:table-not-supported","table feature layer can't be displayed",{layer:this.layer});const t="feature"===e.type||"subtype-group"===e.type,i="capabilities"in e&&e.capabilities.operations.supportsQuery;if(t&&!i)throw new s$3("featurelayerview:query-not-supported","layer view requires a layer with query capability",{layer:e});this._proxy&&this._proxy.destroy();const r=this._createClientOptions();return this._set("_proxy",new u({client:r})),this._proxy.when()}async _initServiceOptions(){return this._set("_serviceOptions",await this._createServiceOptions()),this._serviceOptions}get orderByFields(){return "stream"!==this._serviceOptions.type&&this._serviceOptions.orderByFields}get labelsVisible(){const e="subtype-group"===this.layer.type?this.layer.sublayers.items:[this.layer];return !this.suspended&&e.some((e=>e.labelingInfo&&e.labelsVisible))}get queryMode(){return this._serviceOptions.type}get renderingConfigHash(){if(!this.layer)return null;const e=this.availableFields,t=this.layer,i=this.view.floors,{definitionExpression:r$1}=t,s="subtype-group"!==this.layer.type&&this.layer.labelsVisible&&this.layer.labelingInfo,a="renderer"in t&&t.renderer,n="feature"===t.type?t.gdbVersion:void 0,o="feature"===t.type&&t.historicMoment?t.historicMoment.getTime():void 0,{timeExtent:l}=this,u="customParameters"in t?JSON.stringify(t.customParameters):void 0,d="apiKey"in t?t.apiKey:void 0,p="stream"===t.type?`${JSON.stringify(t.geometryDefinition)}${t.definitionExpression}`:null,y=JSON.stringify(this.clips),c=t.featureReduction&&t.featureReduction.toJSON(),f="orderBy"in this.layer&&JSON.stringify(this.layer.orderBy),g="sublayers"in this.layer&&this.layer.sublayers.items.reduce(((e,t)=>e+`${t.visible?1:0}.${JSON.stringify(t.renderer)}.${t.labelsVisible}\n.${JSON.stringify(t.labelingInfo)}`),""),m="subtypeCode"in this.layer&&this.layer.subtypeCode;return JSON.stringify({orderBy:f,sublayerHash:g,subtypeCode:m,filterHash:r(this.filter)&&this.filter.toJSON(),effectHash:r(this.featureEffect)&&this.featureEffect.toJSON(),streamFilter:p,gdbVersion:n,definitionExpression:r$1,historicMoment:o,availableFields:e,renderer:a,labelingInfo:s,timeExtent:l,floors:i,clipsHash:y,featureReduction:c,customParameters:u,apiKey:d})}highlight(e){let t;return e instanceof g?t=[e.getObjectId()]:"number"==typeof e||"string"==typeof e?t=[e]:Array.isArray(e)&&e.length>0?t="number"==typeof e[0]||"string"==typeof e[0]?e:e.map((e=>e?.getObjectId())):j$1.isCollection(e)&&e.length>0&&(t=e.map((e=>e?.getObjectId())).toArray()),t=t?.filter((e=>null!=e)),t&&t.length?(this._addHighlight(t),{remove:()=>this._removeHighlight(t)}):{remove:()=>{}}}hasHighlight(){return !!this._highlightIds.size}async hitTest(e,r){if(!this.tileRenderer)return null;const s=await this.tileRenderer.hitTest(r);if(0===s.length)return null;const{features:a,aggregates:n}=await this._proxy.getFeatures(s);return [...n.map((i=>this._createGraphicHit(e,s$1.fromJSON(i)))),...a.map((t=>this._createGraphicHit(e,g.fromJSON(t))))]}async queryAggregates(){return (await this._proxy.getAggregates()).map((e=>s$1.fromJSON(e)))}queryStatistics(){return this._proxy.queryStatistics()}async querySummaryStatistics(e,t,i){const r={...t,scale:this.view.scale};return this._proxy.querySummaryStatistics(this._cleanUpQuery(e),r,i)}async queryUniqueValues(e,t,i){const r={...t,scale:this.view.scale};return this._proxy.queryUniqueValues(this._cleanUpQuery(e),r,i)}async queryClassBreaks(e,t,i){const r={...t,scale:this.view.scale};return this._proxy.queryClassBreaks(this._cleanUpQuery(e),r,i)}async queryHistogram(e,t,i){const r={...t,scale:this.view.scale};return this._proxy.queryHistogram(this._cleanUpQuery(e),r,i)}queryFeatures(e,t){return this.queryFeaturesJSON(e,t).then((e=>{const t=x$1.fromJSON(e);return t.features.forEach((e=>this._setLayersForFeature(e))),t}))}queryVisibleFeatures(e,t){return this._proxy.queryVisibleFeatures(this._cleanUpQuery(e),t).then((e=>{const t=x$1.fromJSON(e);return t.features.forEach((e=>this._setLayersForFeature(e))),t}))}queryFeaturesJSON(e,t){return this._proxy.queryFeatures(this._cleanUpQuery(e),t)}queryObjectIds(e,t){return this._proxy.queryObjectIds(this._cleanUpQuery(e),t)}queryFeatureCount(e,t){return this._proxy.queryFeatureCount(this._cleanUpQuery(e),t)}queryExtent(e,t){return this._proxy.queryExtent(this._cleanUpQuery(e),t).then((e=>({count:e.count,extent:M$1.fromJSON(e.extent)})))}setVisibility(e,t){t?this._visibilityOverrides.delete(e):this._visibilityOverrides.add(e),this._update();}update(e){if(!this._tileStrategy||!this.tileRenderer)return;const{hasMissingTiles:t,added:i,removed:r}=this._tileStrategy.update(e);(i.length||r.length)&&this._proxy.updateTiles({added:i,removed:r}),t&&this.requestUpdate(),this.notifyChange("updating");}attach(){this.view.timeline.record(`${this.layer.title} (FeatureLayer) Attach`),this._tileStrategy=new s({acquireTile:e=>this._acquireTile(e),releaseTile:e=>this._releaseTile(e),tileInfoView:this.view.featuresTilingScheme,buffer:0}),this.handles.add(l$4((()=>this.renderingConfigHash),(()=>this._update()),h$1),"attach"),"stream"!==this.layer.type&&this.handles.add(this.layer.on("edits",(e=>this._edit(e))),"attach");}detach(){this._commandsQueue.clear(),this._proxy?.stop(),this.container.removeAllChildren(),this.handles.remove("attach"),this.tileRenderer&&(this.tileRenderer.uninstall(this.container),this.tileRenderer=null),this._tileStrategy&&(this._tileStrategy.destroy(),this._tileStrategy=null),this._tileRendererHash=null;}moveStart(){this.requestUpdate();}viewChange(){this.requestUpdate();}moveEnd(){this.requestUpdate();}isUpdating(){const e="renderer"in this.layer&&null!=this.layer.renderer,t=this._commandsQueue.updating,i=null!=this._updatingRequiredFieldsPromise,r=!this._proxy||!this._proxy.isReady,s=this._pipelineIsUpdating,n=null==this.tileRenderer||this.tileRenderer?.updating,o=e&&(t||i||r||s||n);return a$1("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${t}\n  -> updatingRequiredFields ${i}\n  -> updatingProxy ${r}\n  -> updatingPipeline ${s}\n  -> updatingTileRenderer ${n}\n`),o}_createClientOptions(){return {setUpdating:e=>{this._set("_pipelineIsUpdating",e);},emitEvent:e=>{this.emit(e.name,e.event);}}}async _detectQueryMode(e){const t="path"in e,i="editingInfo"in this.layer&&this.layer.editingInfo?.lastEditDate,r$1=!!this.layer.refreshInterval,s=!i&&r$1;if(t&&("feature"===this.layer.type||"subtype-group"===this.layer.type)&&"point"===this.layer.geometryType&&this.layer.capabilities.query.supportsPagination&&!this.layer.capabilities.operations.supportsEditing&&!s&&a$1("featurelayer-snapshot-enabled"))try{const e=await this.layer.queryFeatureCount();if(e<=a$1("featurelayer-snapshot-point-min-threshold"))return {mode:"snapshot",featureCount:e};const t=a$1("featurelayer-snapshot-point-max-threshold"),i=a$1("featurelayer-snapshot-point-coverage"),r$1=this.view.extent,s=e$2(this.layer.fullExtent),n=s?.clone().intersection(r$1),o=r(n)?n.width*n.height:0,l=s?.width*s?.height,d=0===l?0:o/l;if(e<=t&&d>=i)return {mode:"snapshot",featureCount:e}}catch(n){A.warn("mapview-feature-layer","Encountered an error when querying for featureCount",{error:n});}return {mode:"on-demand"}}async _createServiceOptions(){const e=this.layer;if("stream"===e.type)return null;const{capabilities:t,objectIdField:i}=e,r$1=e.fields.map((e=>e.toJSON())),s=r(e.fullExtent)&&e.fullExtent.toJSON(),a=e$4(e.geometryType),o=e.timeInfo&&e.timeInfo.toJSON()||null,l=e.spatialReference?e.spatialReference.toJSON():null,u="feature"===e.type?e.globalIdField:null;let d;"ogc-feature"===e.type?d=e.source.getFeatureDefinition():Q(e.source)?d=await e.source.openPorts():e.parsedUrl&&(d=m(e.parsedUrl),"dynamicDataSource"in e&&e.dynamicDataSource&&(d.query={layer:JSON.stringify({source:e.dynamicDataSource})}));const p="datesInUnknownTimezone"in this.layer&&this.layer.datesInUnknownTimezone,y=("subtypeField"in this.layer&&this.layer.subtypeField)??null,{mode:c,featureCount:f}=await this._detectQueryMode(d);let g=this.layer.objectIdField;if("feature"===this.layer.type&&r(this.layer.orderBy)&&this.layer.orderBy.length){const e=!this.layer.orderBy[0].valueExpression&&this.layer.orderBy[0].field;e&&(g=e);}return {type:c,timeReferenceUnknownClient:p,subtypeField:y,featureCount:f,globalIdField:u,maxRecordCount:t.query.maxRecordCount,tileMaxRecordCount:t.query.tileMaxRecordCount,capabilities:t,fields:r$1,fullExtent:s,geometryType:a,objectIdField:i,source:d,timeInfo:o,spatialReference:l,orderByFields:g}}async _createMemoryServiceOptions(e){const t=await e.openPorts();return {...this._createServiceOptions(),type:"memory",source:t}}_cleanUpQuery(e){const t=b$1.from(e)||this.createQuery();return t.outSpatialReference||(t.outSpatialReference=this.view.spatialReference),t}async _update(){return this._commandsQueue.push({type:"update"})}async _edit(e){if(this.suspended)return void this._clearTiles();return this._validateEdit(e)?this._commandsQueue.push({type:"edit",edits:e}):void 0}async doRefresh(e){if(this._tileStrategy.tileKeys().length)return this.suspended&&e?void this._clearTiles():this._commandsQueue.push({type:"refresh",dataChanged:e})}_clearTiles(){this._tileStrategy.tileKeys().length&&(this._proxy.updateTiles({added:[],removed:this._tileStrategy.tileKeys()}),this._tileStrategy.clear(),this.requestUpdate(),this._commandsQueue.clear(),this._update());}_validateEdit(e){const t="globalIdField"in this.layer&&this.layer.globalIdField,i=e.deletedFeatures.some((e=>-1===e.objectId||!e.objectId)),r=t&&this.availableFields.includes(t);return i&&!r?(A.error(new s$3("mapview-apply-edits",`Editing the specified service requires the layer's globalIdField, ${t} to be included the layer's outFields for updates to be reflected on the map`)),null):e}async _doUpdate(){try{if(this.destroyed||!this._hasRequiredSupport(this.layer)||!this._tileStrategy)return;const{featureEffectView:t,filter:i}=this;await this._updateRequiredFields();const{renderer:r}=this._getEffectiveRenderer();this._set("_effectiveRenderer",r);const s=this._createSchemaConfig(),a=this._createConfiguration(s,i,t.filter),n=this._lastDefinitionExpression!==a.schema.source.definitionExpression;this._lastDefinitionExpression=a.schema.source.definitionExpression;const o=a.schema.tileRenderer,l=this._createTileRendererHash(o);if("snapshot"===this._serviceOptions.type&&(a.schema.source.featureCount=this._serviceOptions.featureCount),l!==this._tileRendererHash){await this._initTileRenderer(o,r);const e=this.layer,t="stream"===e.type?await this._initServiceOptions():this._serviceOptions;this.tileRenderer.onConfigUpdate(r),"stream"!==e.type&&Q(e.source)&&(t.source=await e.source.openPorts());const i={added:this._tileStrategy.tileKeys(),removed:[]};await this._proxy.startup(this.view.featuresTilingScheme,a,t,i),this.hasHighlight()&&await this._proxy.setHighlight(Array.from(this._highlightIds.keys())),await this._onceTilesUpdated(),this.tileRenderer.onConfigUpdate(r);}else {"snapshot"===this._serviceOptions.type&&n&&(a.schema.source.featureCount=await this.layer.queryFeatureCount());const t=await this._proxy.update(a);(t.mesh||t.targets.aggregate)&&this._lockGPUUploads();try{await this._proxy.applyUpdate(t);}catch(e){g$1(e)||A.error(e);}(t.mesh||t.targets.aggregate)&&this._unlockGPUUploads(),this.tileRenderer.onConfigUpdate(r),this._updateClusterSizeVariable(),this._forceAttributeTextureUpload();}this._tileRendererHash=l,this.tileRenderer.invalidateLabels(),this.requestUpdate();}catch(e){}}async _doEdit(e){try{await this._proxy.onEdits(e);}catch(t){g$1(t),0;}}async _doRefresh(e){this._lockGPUUploads();try{await this._proxy.refresh(e);}catch(t){g$1(t),0;}this._unlockGPUUploads(),this.layer?.featureReduction&&this._updateClusterSizeVariable();}_updateClusterSizeVariable(){this._needsClusterSizeUpdate&&(this.tileRenderer.onConfigUpdate(this._effectiveRenderer),this._needsClusterSizeUpdate=!1);}_createUpdateClusterSizeTask(e,t){return l$4((()=>this._aggregateValueRanges),(i=>{this._updateClusterEffectiveRendererSizeVariable(e,t,i),this._needsClusterSizeUpdate=!0,this._uploadsLocked||this._updateClusterSizeVariable();}))}async _updateClusterEffectiveRendererSizeVariable(e,t,i){if(e.dynamicClusterSize&&"visualVariables"in e&&e.visualVariables){const r$1=d$2(e.visualVariables);if(r(r$1)&&"cluster_count"===r$1.field){const s=e.visualVariables.indexOf(r$1);e.visualVariables[s]=f$1(t,i);const a=e.clone();a.dynamicClusterSize=!0,this._set("_effectiveRenderer",a);}}}_getEffectiveRenderer(){const e="renderer"in this.layer&&this.layer.renderer,t=this.layer.featureReduction;if(r(this._updateClusterSizeTask)&&(this._updateClusterSizeTask.remove(),this._updateClusterSizeTask=null),t&&"renderer"in t&&t.renderer){const e=[];for(const i of t.fields??[])x$2(e,i);return {renderer:t.renderer,aggregateFields:e,featureReduction:t}}if(t&&"cluster"===t.type&&m$1(e)){const i=t,r=[],s=c$2(r,e,i,this._aggregateValueRanges);return o$1(this._updateClusterSizeTask,(e=>e.remove())),this._updateClusterSizeTask=this._createUpdateClusterSizeTask(s,i),{renderer:s,aggregateFields:r,featureReduction:t}}return {renderer:e,aggregateFields:[],featureReduction:null}}_acquireTile(e){const t=this.tileRenderer.acquireTile(e);return t.once("attach",(()=>{this.requestUpdate();})),t}_releaseTile(e){this.tileRenderer.releaseTile(e);}async _initTileRenderer(e$1,t){const i=await e(e$1,{layerView:this,tileInfoView:this.view.featuresTilingScheme,layer:this.layer});return this.tileRenderer&&(this._tileStrategy.clear(),this.tileRenderer.uninstall(this.container),this.tileRenderer.destroy(),this.tileRenderer=null),this.destroyed?null:(this._proxy.tileRenderer=i,this._set("tileRenderer",i),this.tileRenderer.install(this.container),this.tileRenderer.onConfigUpdate(t),this.requestUpdate(),this.tileRenderer)}_createTileRendererHash(e){return `${e.type}`}get hasFilter(){const e=!!("floorInfo"in this.layer&&this.layer.floorInfo&&this.view.floors&&this.view.floors.length);return !!this.filter||e||!!this._visibilityOverrides.size||!!this.timeExtent}_injectOverrides(e){const t=r(e)?e.timeExtent:null,i=r(this.timeExtent)&&r(t)?this.timeExtent.intersection(t):this.timeExtent||t;let r$1=null;const s="floorInfo"in this.layer&&this.layer.floorInfo;if(s){const t=r(e)&&e.where;r$1=this._addFloorFilterClause(t);}if(!this._visibilityOverrides.size&&!i&&!s)return r(e)?e.toJSON():null;(e=r(e)&&e.clone()||new y$1).timeExtent=i,r$1&&(e.where=r$1);const a=e.toJSON();return a.hiddenIds=Array.from(this._visibilityOverrides),a}_addFloorFilterClause(e){const t=this.layer;let i=e||"";if("floorInfo"in t&&t.floorInfo){let e=this.view.floors;if(!e||!e.length)return i;t.floorInfo.viewAllLevelIds?.length&&(e=t.floorInfo.viewAllLevelIds);const r$1=e.filter((e=>""!==e)).map((e=>"'"+e+"'"));r$1.push("''");const s=t.floorInfo.floorField;let a="("+s+" IN ({ids}) OR "+s+" IS NULL)";if(a=a.replace("{ids}",r$1.join(", ")),r(i)&&i.includes(s)){let e=new RegExp("AND \\("+s+".*NULL\\)","g");i=i.replace(e,""),e=new RegExp("\\("+s+".*NULL\\)","g"),i=i.replace(e,""),i=i.replace(/\s+/g," ").trim();}i=""!==i?"("+i+") AND "+a:a;}return ""!==i?i:null}_createConfiguration(e,t$1,i){const r$1="feature"===this.layer.type&&this.layer.historicMoment?this.layer.historicMoment.getTime():void 0,s="feature"===this.layer.type?this.layer.gdbVersion:void 0,a=new Array(S),n=this._injectOverrides(t$1);a[0]=n,a[1]=r(i)?i.toJSON():null;const o=z(e);if(t(o))return null;const l=l$5("2d");return {availableFields:this.availableFields,gdbVersion:s,historicMoment:r$1,devicePixelRatio:window.devicePixelRatio||1,filters:a,schema:o,supportsTextureFloat:l.supportsTextureFloat,maxTextureSize:l.maxTextureSize}}_hasRequiredSupport(e){return !("renderer"in e)||v(e.renderer)}_onceTilesUpdated(){return this.requestUpdate(),j$2((()=>!this._pipelineIsUpdating))}_lockGPUUploads(){this.tileRenderer&&(this._uploadsLocked=!0,this.tileRenderer.lockGPUUploads());}_unlockGPUUploads(){this.tileRenderer&&(this._uploadsLocked=!1,this.tileRenderer.unlockGPUUploads());}_forceAttributeTextureUpload(){this.tileRenderer&&this.tileRenderer.forceAttributeTextureUpload();}_createSchemaConfig(){const e="feature"===this.layer.type?this.layer.historicMoment:null,t="feature"===this.layer.type?this.layer.gdbVersion:null;return {renderer:"renderer"in this.layer&&this.layer.renderer,spatialReference:this.layer.spatialReference,timeExtent:this.layer.timeExtent,definitionExpression:this.layer.definitionExpression,featureReduction:this.layer.featureReduction,fields:this.layer.fields,geometryType:this.layer.geometryType,historicMoment:e,labelsVisible:"labelsVisible"in this.layer&&this.layer.labelsVisible,labelingInfo:"labelingInfo"in this.layer&&this.layer.labelingInfo,availableFields:this.availableFields,featureEffect:this.featureEffect,filter:this.filter,gdbVersion:t,pixelBuffer:0,orderBy:"orderBy"in this.layer&&this.layer.orderBy?this.layer.orderBy:null,customParameters:{..."customParameters"in this.layer?this.layer.customParameters:void 0,token:"apiKey"in this.layer?this.layer.apiKey:void 0},subtypeCode:"subtypeCode"in this.layer?this.layer.subtypeCode:void 0,subtypeField:"subtypeField"in this.layer?this.layer.subtypeField:void 0}}_addHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1);}else this._highlightIds.set(t,1);this._updateHighlight().catch((e=>{g$1(e)||A.error(e);}));}_removeHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;0===e?this._highlightIds.delete(t):this._highlightIds.set(t,e);}this._updateHighlight().catch((e=>{g$1(e)||A.error(e);}));}_setLayersForFeature(e){const t=this.layer;e.layer=t,e.sourceLayer=t;}_createGraphicHit(e,t){return this._setLayersForFeature(t),r(t.geometry)&&(t.geometry.spatialReference=this.view.spatialReference),{type:"graphic",graphic:t,layer:this.layer,mapPoint:e}}};e$1([d$1()],M.prototype,"_serviceOptions",void 0),e$1([d$1()],M.prototype,"_proxy",void 0),e$1([d$1()],M.prototype,"_pipelineIsUpdating",void 0),e$1([d$1()],M.prototype,"_effectiveRenderer",void 0),e$1([d$1()],M.prototype,"_aggregateValueRanges",void 0),e$1([d$1()],M.prototype,"_commandsQueue",void 0),e$1([d$1()],M.prototype,"featureEffectView",void 0),e$1([d$1()],M.prototype,"labelsVisible",null),e$1([d$1({readOnly:!0})],M.prototype,"queryMode",null),e$1([d$1()],M.prototype,"renderingConfigHash",null),e$1([d$1()],M.prototype,"tileRenderer",void 0),e$1([d$1()],M.prototype,"updating",void 0),M=e$1([n$2("esri.views.2d.layers.FeatureLayerView2D")],M);const B=M;

export default B;
