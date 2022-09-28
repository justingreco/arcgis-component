import { y, r, t as t$1, e as e$1, d as d$1, n as n$2, v as n$3, aq as y$1, bz as t$2 } from './cast-3d5be210.js';
import { d as d$2, a as a$1 } from './HandleOwner-fe336959.js';
import { l as l$1, U, h } from './reactiveUtils-bd6fe823.js';
import { a as o } from './mathUtils-559a53d9.js';
import { n as n$1 } from './vec4f64-011248e0.js';
import { a0 as Q, a1 as es, G } from './viewpointUtils-4c294048.js';
import { c } from './GoTo-929e809f.js';
import { b_ as s } from './SceneView-ed3703c9.js';
import { o as o$2 } from './queryEngineUtils-4f36f40a.js';
import { u as u$1 } from './Handles-54afc0a7.js';
import { v } from './Polyline-dcdb3782.js';
import { f as f$1, o as o$1 } from './aaBoundingRect-5e1a4e52.js';
import { b } from './TileTreeDebugger-4776ecbb.js';
import { a as n$4 } from './LercDecoder-0b4fb3f9.js';
import { b as i } from './geometry-2f332a26.js';
import { j } from './Point-edff2a11.js';
import { S, p as p$3 } from './TileInfo-3c9e9a6a.js';
import { p as p$4 } from './Scheduler-ed7a36dc.js';
import './JSONSupport-dce2c67b.js';
import './enumeration-6695a859.js';
import './request-ac4d8bfb.js';
import './Color-25ce730a.js';
import './colorUtils-5009883d.js';
import './symbols-ab3e849a.js';
import './CIMSymbol-15bdb580.js';
import './fieldUtils-240a3b99.js';
import './Symbol-573a64f6.js';
import './screenUtils-31d073db.js';
import './opacityUtils-dcd94f00.js';
import './aaBoundingBox-b312516d.js';
import './Extent-f27111e1.js';
import './persistableUrlUtils-5dcd6081.js';
import './Collection-a38e0489.js';
import './collectionUtils-302901c0.js';
import './Portal-5df9f5a7.js';
import './Promise-d2759b2e.js';
import './Clonable-533c7a05.js';
import './Viewpoint-e3d4029a.js';
import './Cyclical-922b1741.js';
import './Graphic-93f45ded.js';
import './PopupTemplate-b459951f.js';
import './number-c5a37d3e.js';
import './ActionToggle-a5849e6f.js';
import './Identifiable-d9658370.js';
import './asyncUtils-96c00c9e.js';
import './mat3-eb8de168.js';
import './quatf64-06b7eadd.js';
import './mat4f64-ef2c1a38.js';
import './projection-fbd5d346.js';
import './unitUtils-a0a11e54.js';
import './mat4-d5df0e58.js';
import './assets-99f5c3ee.js';
import './zscale-0befeff4.js';
import './frustum-95850b85.js';
import './vectorStacks-3fa8ee55.js';
import './byteSizeEstimations-5d50d6ff.js';
import './vec2f64-2956001b.js';
import './sphere-4710475c.js';
import './ViewingMode-4a1cffad.js';
import './lineSegment-99193ade.js';
import './utils-eafc976f.js';
import './quat-43e08490.js';
import './vec3f32-03e33744.js';
import './Util-73f4ac53.js';
import './doublePrecisionUtils-5c7a1f3b.js';
import './scaleUtils-c3d4b164.js';
import './jsxFactory-4cd653a4.js';
import './intl-54ccdc89.js';
import './messages-5e9a4a9e.js';
import './uuid-ac104993.js';
import './index-f980186a.js';
import './workers-c7a27acb.js';
import './GraphicsCollection-851bdafb.js';
import './HeightModelInfo-12951268.js';
import './layerUtils-160a1a44.js';
import './DefaultUI-a0db5719.js';
import './Feature-d7b2670c.js';
import './aliasOf-bdfe6662.js';
import './executeQueryJSON-cbafa4d9.js';
import './utils-d801fb7f.js';
import './query-993c240b.js';
import './normalizeUtils-d37dc597.js';
import './pbfQueryUtils-266d53dd.js';
import './pbf-bac0c6a4.js';
import './OptimizedFeature-a0dba562.js';
import './OptimizedFeatureSet-261a115b.js';
import './queryZScale-127601ac.js';
import './FeatureSet-1b85367a.js';
import './Field-2973a5cf.js';
import './fieldType-eb0b42e4.js';
import './Query-1f6c7e43.js';
import './TimeExtent-66b53603.js';
import './TopFeaturesQuery-babc7c57.js';
import './utils-112c7fa0.js';
import './ColorStop-64c57e35.js';
import './utils-2bda91e5.js';
import './jsonUtils-f3f35e7f.js';
import './_commonjsHelpers-8dd5c177.js';
import './ItemCache-1f62ab56.js';
import './MemCache-04cdd0cd.js';
import './utils-8133dc40.js';
import './jsonUtils-e7c7add9.js';
import './UniqueValueRenderer-bb66af10.js';
import './diffUtils-6436a697.js';
import './colorRamps-e3d9340f.js';
import './sizeVariableUtils-5330814d.js';
import './compilerUtils-d149ad5f.js';
import './commonProperties-fca3036e.js';
import './jsonUtils-a25e8eb8.js';
import './styleUtils-d2332fad.js';
import './DictionaryLoader-d0d1b4ff.js';
import './LRUCache-5f25d277.js';
import './heatmapUtils-d302cc7f.js';
import './widget-a58988b6.js';
import './vmEvent-c5708c9c.js';
import './themeUtils-b1f4a2e4.js';
import './featureConversionUtils-3f60eb15.js';
import './languageUtils-d37e9fbb.js';
import './number-3228daf9.js';
import './FeatureLayer-6922c890.js';
import './MultiOriginJSONSupport-281c1c62.js';
import './sql-817bbae7.js';
import './Layer-569a1fc8.js';
import './APIKeyMixin-04df9c0f.js';
import './ArcGISService-848d76dd.js';
import './arcgisLayerUrl-a268a370.js';
import './BlendLayer-7884099a.js';
import './CustomParametersMixin-f702935f.js';
import './labelingInfo-6e0c44d1.js';
import './LabelClass-936eaa93.js';
import './labelUtils-824fc88a.js';
import './defaultsJSON-5fb6161d.js';
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
import './Map-3fa127ca.js';
import './Basemap-bccaf827.js';
import './loadAll-0acccebb.js';
import './writeUtils-ab23132f.js';
import './CollectionFlattener-9ce72729.js';
import './TablesMixin-6752cfb1.js';
import './heightModelInfoUtils-4737da37.js';
import './vec2-4f9a494f.js';
import './vec2f32-23e4a539.js';
import './capabilities-cb32c85a.js';
import './context-util-5ae1bf7b.js';
import './ElevationSampler-86027644.js';
import './objectResourceUtils-e575a410.js';
import './devEnvironmentUtils-cb76d69b.js';
import './BufferView-a9ba6e5d.js';
import './vec33-241a09d2.js';
import './DefaultMaterial_COLOR_GAMMA-ba792f7e.js';
import './types-4487be8c.js';
import './enums-4770f29d.js';
import './Version-44ff489f.js';
import './OrderIndependentTransparency-b8c8f539.js';
import './VertexAttribute-ef09ced9.js';
import './Texture-f189b7ba.js';
import './FramebufferObject-bfb23fd2.js';
import './VertexElementDescriptor-3b53aa99.js';
import './InterleavedLayout-fe763b01.js';
import './EdgeProcessingWorker-87151cf6.js';
import './deduplicate-3951315a.js';
import './RenderingContext-f60b1ec5.js';
import './ProgramCache-0964dba1.js';
import './Program-634dbdbe.js';
import './floatRGBA-64e5bf11.js';
import './DefaultVertexAttributeLayouts-664d07a8.js';
import './dehydratedFeatures-7b45465d.js';
import './quantizationUtils-65995723.js';
import './labelFormatUtils-d19cf46d.js';
import './earcut-4e6b97b1.js';
import './MeshComponent-b778671b.js';
import './screenshotUtils-af7d4bfe.js';
import './Octree-38bc90df.js';
import './callExpressionWithFeature-cfe9aa0a.js';
import './projection-a57f78d7.js';
import './geometryServiceUtils-b4e25893.js';
import './project-248cf8a5.js';
import './VectorTile-93124859.js';
import './enums-33a95ace.js';
import './config-5446e136.js';
import './TiledDisplayObject-2082c8d9.js';
import './DisplayObject-f25c6d04.js';
import './TileKey-97254206.js';
import './I3SBinaryReader-1f7e5bc9.js';
import './DimensioningAnalysisView3D-c2c2dfcd.js';
import './LineVisualElement-0571b2ba.js';
import './analysisViewUtils-869adced.js';
import './PointVisualElement-0396d7c0.js';
import './RightAngleQuadVisualElement-bde59657.js';
import './Segment-ff1a2d80.js';
import './elevationInfoUtils-d6676eee.js';
import './dragEventPipeline3D-c2dc6030.js';
import './EditGeometryOperations-b01ec575.js';
import './QueryEngineResult-4211c0f6.js';
import './WhereClause-ae6d22ff.js';
import './utils-8ef1ee04.js';
import './generateRendererUtils-9d353c6e.js';
import './projectionSupport-d3b04744.js';
import './json-063a6f95.js';
import './utils-208ed644.js';
import './centroid-a69e0a54.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function t(n,o$1){return Q(o$1.extent,e),es(e,o(a,n.x,n.y,0))}const e=G(),a=n$1();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let p$2=class extends y{constructor(e){super(e),this.pointOfInterest=null;}get tiles(){const e=this.tilesCoveringView,t$1=r(this.pointOfInterest)?this.pointOfInterest:this.view.center;return e.sort(((e,r)=>t(t$1,e)-t(t$1,r))),e}_scaleEnabled(){return c(this.view.scale,this.layer.minScale||0,this.layer.maxScale||0)}get tilesCoveringView(){if(!this.view.ready||!this.view.featuresTilingScheme||!this.view.state||t$1(this.tileInfo))return [];if(!this._scaleEnabled)return [];const{spans:e,lodInfo:t}=this.view.featuresTilingScheme.getTileCoverage(this.view.state,0),{level:r}=t,o=[];for(const{row:i,colFrom:s,colTo:l}of e)for(let e=s;e<=l;e++){const s={id:null,level:r,row:i,col:t.normalizeCol(e)};this.tileInfo.updateTileInfo(s),o.push(s);}return o}get tileInfo(){return this.view.featuresTilingScheme?.tileInfo??null}get tileSize(){return r(this.tileInfo)?this.tileInfo.size[0]:256}initialize(){this.own(l$1((()=>this.view?.state?.viewpoint),(()=>this.notifyChange("tilesCoveringView")),U));}};e$1([d$1({readOnly:!0})],p$2.prototype,"tiles",null),e$1([d$1({readOnly:!0})],p$2.prototype,"_scaleEnabled",null),e$1([d$1({readOnly:!0})],p$2.prototype,"tilesCoveringView",null),e$1([d$1({readOnly:!0})],p$2.prototype,"tileInfo",null),e$1([d$1({readOnly:!0})],p$2.prototype,"tileSize",null),e$1([d$1({constructOnly:!0})],p$2.prototype,"view",void 0),e$1([d$1({constructOnly:!0})],p$2.prototype,"layer",void 0),e$1([d$1()],p$2.prototype,"pointOfInterest",void 0),p$2=e$1([n$2("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles2D")],p$2);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let p$1=class extends d$2{constructor(e){super(e),this.pointOfInterest=null;}get tiles(){const e=this.tilesCoveringView,t$1=this.effectivePointOfInterest;if(r(t$1)){const r=e.map((e=>t(t$1,e)));for(let i=1;i<r.length;i++)if(r[i-1]>r[i])return e.sort(((e,r)=>t(t$1,e)-t(t$1,r))),e.slice()}return e}get tilesCoveringView(){return this._filterTiles(this.view.featureTiles?.tiles?.toArray()).map(u)}get tileInfo(){return this.view.featureTiles?.tilingScheme.toTileInfo()??null}get tileSize(){return this.view.featureTiles?.tileSize??256}get effectivePointOfInterest(){const e=this.pointOfInterest;return r(e)?e:this.view.pointsOfInterest?.focus.location}initialize(){this.handles.add(l$1((()=>this.view.featureTiles),(e=>{this.handles.remove(m),e&&this.handles.add(e.addClient(),m);}),h));}_filterTiles(e){if(t$1(e))return [];return e.filter((e=>Math.abs(e.measures.screenRect[3]-e.measures.screenRect[1])>f&&e.measures.visibility===s.VISIBLE_ON_SURFACE))}};function u({lij:[e,t,r],extent:i}){return {id:`${e}/${t}/${r}`,level:e,row:t,col:r,extent:i}}e$1([d$1({readOnly:!0})],p$1.prototype,"tiles",null),e$1([d$1({readOnly:!0})],p$1.prototype,"tilesCoveringView",null),e$1([d$1({readOnly:!0})],p$1.prototype,"tileInfo",null),e$1([d$1({readOnly:!0})],p$1.prototype,"tileSize",null),e$1([d$1({constructOnly:!0})],p$1.prototype,"view",void 0),e$1([d$1()],p$1.prototype,"pointOfInterest",void 0),e$1([d$1()],p$1.prototype,"effectivePointOfInterest",null),p$1=e$1([n$2("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles3D")],p$1);const f=50,m="feature-tiles";

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let d=class extends b{constructor(e){super(e),this.handles=new u$1;}initialize(){const e=setInterval((()=>this._fetchDebugInfo()),2e3);this.handles.add(n$3((()=>clearInterval(e))));}destroy(){this.handles.destroy();}getTiles(){if(!this.debugInfo)return [];const e=new Map,t=new Map;this.debugInfo.storedTiles.forEach((t=>{e.set(t.data.id,t.featureCount);})),this.debugInfo.pendingTiles.forEach((r=>{e.set(r.data.id,r.featureCount),t.set(r.data.id,r.state);}));const r=r=>{const o=t.get(r),s=e.get(r)??"?";return o?`${o}:${s}\n${r}`:`store:${s}\n${r}`},o=new Map;return this.debugInfo.storedTiles.forEach((e=>{o.set(e.data.id,e.data);})),this.debugInfo.pendingTiles.forEach((e=>{o.set(e.data.id,e.data);})),Array.from(o.values()).map((e=>({lij:[e.level,e.row,e.col],geometry:v.fromExtent(f$1(e.extent,this.view.spatialReference)),label:r(e.id)})))}_fetchDebugInfo(){this.handle.getDebugInfo(null).then((e=>{this.debugInfo=e,this.update();}));}};e$1([d$1({constructOnly:!0})],d.prototype,"handle",void 0),d=e$1([n$2("esri.views.interactive.snapping.featureSources.WorkerTileTreeDebugger")],d);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let l=class extends d$2{constructor(e){super(e),this.availability=0,this.workerHandleUpdating=!0,this.editId=0;}get updating(){return this.updatingHandles.updating||this.workerHandleUpdating}destroy(){this.workerHandle.destroy();}initialize(){this.workerHandle=new p(this.schedule),this.handles.add([this.workerHandle.on("notify-updating",(({updating:e})=>this.workerHandleUpdating=e)),this.workerHandle.on("notify-availability",(({availability:e})=>this._set("availability",e)))]);}async setup(e,t){const r=this._serviceInfoFromLayer(e.layer);if(t$1(r))return;const o={configuration:this._convertConfiguration(e.configuration),serviceInfo:r,spatialReference:e.spatialReference.toJSON()};await this.updatingHandles.addPromise(this.workerHandle.invokeMethod("setup",o,t)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},t));}async configure(e,t){const i=this._convertConfiguration(e);await this.updatingHandles.addPromise(this.workerHandle.invokeMethod("configure",i,t)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},t));}async refresh(e){await this.updatingHandles.addPromise(this.workerHandle.invokeMethod("refresh",{},e)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},e));}async fetchCandidates(e,t){const i={distance:e.distance,point:e.coordinateHelper.vectorToPoint(e.point).toJSON(),types:e.types,filter:r(e.filter)?e.filter.createQuery().toJSON():null};return this.workerHandle.invoke(i,t)}async updateTiles(e,t){const i={tiles:e.tiles,tileInfo:r(e.tileInfo)?e.tileInfo.toJSON():null,tileSize:e.tileSize};await this.updatingHandles.addPromise(this.workerHandle.invokeMethod("updateTiles",i,t)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},t));}async applyEdits(e,t){const i=this.editId++,r={id:i};await this.updatingHandles.addPromise(this.workerHandle.invokeMethod("beginApplyEdits",r,t));const a=await this.updatingHandles.addPromise(y$1(e.result,t)),s={id:i,edits:{addedFeatures:a.addedFeatures?.map((({objectId:e})=>e))??[],deletedFeatures:a.deletedFeatures?.map((({objectId:e,globalId:t})=>({objectId:e,globalId:t})))??[],updatedFeatures:a.updatedFeatures?.map((({objectId:e})=>e))??[]}};await this.updatingHandles.addPromise(this.workerHandle.invokeMethod("endApplyEdits",s,t)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},t));}getDebugInfo(e){return this.workerHandle.invokeMethod("getDebugInfo",{},e)}_convertConfiguration(e){return {filter:r(e.filter)?e.filter.toJSON():null,customParameters:e.customParameters}}_serviceInfoFromLayer(e){return "multipatch"===e.geometryType||"mesh"===e.geometryType?null:{url:e.parsedUrl.path,fields:e.fields.map((e=>e.toJSON())),geometryType:i.toJSON(e.geometryType),capabilities:e.capabilities,objectIdField:e.objectIdField,globalIdField:e.globalIdField,spatialReference:e.spatialReference.toJSON(),timeInfo:e.timeInfo?.toJSON()}}};e$1([d$1({constructOnly:!0})],l.prototype,"schedule",void 0),e$1([d$1({readOnly:!0})],l.prototype,"updating",null),e$1([d$1({readOnly:!0})],l.prototype,"availability",void 0),e$1([d$1()],l.prototype,"workerHandleUpdating",void 0),l=e$1([n$2("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorkerHandle")],l);class p extends n$4{constructor(e){super("FeatureServiceSnappingSourceWorker","fetchCandidates",{},e,{strategy:"dedicated"});}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let n=class extends y{constructor(e){super(e),this.pointOfInterest=null;}get tiles(){return [{id:"0/0/0",level:0,row:0,col:0,extent:o$1(-1e8,-1e8,1e8,1e8)}]}get tileInfo(){return new S({origin:new j({x:-1e8,y:1e8,spatialReference:this.layer.spatialReference}),size:[512,512],lods:[new p$3({level:0,scale:1,resolution:390625})],spatialReference:this.layer.spatialReference})}get tileSize(){return this.tileInfo.size[0]}};e$1([d$1({readOnly:!0})],n.prototype,"tiles",null),e$1([d$1({readOnly:!0})],n.prototype,"tileInfo",null),e$1([d$1({readOnly:!0})],n.prototype,"tileSize",null),e$1([d$1({constructOnly:!0})],n.prototype,"layer",void 0),e$1([d$1()],n.prototype,"pointOfInterest",void 0),n=e$1([n$2("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTilesSimple")],n);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let g=class extends(a$1(y)){constructor(e){super(e);}get updateTilesParameters(){return {tiles:this.tilesOfInterest.tiles,tileInfo:this.tilesOfInterest.tileInfo,tileSize:this.tilesOfInterest.tileSize}}get updating(){return this.workerHandle.updating||this.updatingHandles.updating}get configuration(){return {filter:this.layer.createQuery(),customParameters:this.layer.customParameters}}get availability(){return this.workerHandle.availability}get layer(){return this.layerSource.layer}initialize(){const e=this.view;if(r(e))switch(e.type){case"2d":this.tilesOfInterest=new p$2({view:e,layer:this.layer}),this.workerHandle=new l;break;case"3d":{const r=e.resourceController;this.tilesOfInterest=new p$1({view:e}),this.workerHandle=new l({schedule:e=>r.schedule(e)});break}}else this.tilesOfInterest=new n({layer:this.layer}),this.workerHandle=new l;this.handles.add([t$2(this.workerHandle)]),this.workerHandle.setup({layer:this.layer,spatialReference:this.spatialReference,configuration:this.configuration},null),this.updatingHandles.add((()=>this.updateTilesParameters),(()=>this.workerHandle.updateTiles(this.updateTilesParameters,null)),h),this.handles.add([l$1((()=>this.configuration),(e=>this.workerHandle.configure(e,null)),U)]),r(e)&&this.handles.add(l$1((()=>p$4.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES),(r=>{r&&!this.debug?(this.debug=new d({view:e,handle:this.workerHandle}),this.handles.add(t$2(this.debug),"debug")):!r&&this.debug&&this.handles.remove("debug");}),h)),this.handles.add(this.layerSource.layer.on("apply-edits",(e=>{this.workerHandle.applyEdits(e,null);})));}refresh(){this.workerHandle.refresh(null);}async fetchCandidates(e,r){return this.tilesOfInterest.pointOfInterest=e.coordinateHelper.vectorToPoint(e.point),(await this.workerHandle.fetchCandidates({...e,filter:null},r)).candidates.map((r=>o$2(r,e.coordinateHelper,e.elevationInfo)))}getDebugInfo(e){return this.workerHandle.getDebugInfo(e)}};e$1([d$1({constructOnly:!0})],g.prototype,"spatialReference",void 0),e$1([d$1({constructOnly:!0})],g.prototype,"layerSource",void 0),e$1([d$1({constructOnly:!0})],g.prototype,"view",void 0),e$1([d$1()],g.prototype,"tilesOfInterest",void 0),e$1([d$1({readOnly:!0})],g.prototype,"updateTilesParameters",null),e$1([d$1({readOnly:!0})],g.prototype,"updating",null),e$1([d$1({readOnly:!0})],g.prototype,"configuration",null),e$1([d$1({readOnly:!0})],g.prototype,"availability",null),g=e$1([n$2("esri.views.interactive.snapping.featureSources.FeatureServiceSnappingSource")],g);

export { g as FeatureServiceSnappingSource };
