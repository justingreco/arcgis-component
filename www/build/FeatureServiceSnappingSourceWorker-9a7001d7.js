import { y as y$1, e, d, n, aM as O, t as t$1, s, r as r$1, aa as i, $ as w$3, v as n$1, h as e$1, T as T$2, X as f$1 } from './cast-3d5be210.js';
import { n as n$2 } from './Collection-a38e0489.js';
import { u as u$3 } from './Handles-54afc0a7.js';
import { U, l, j as j$2 } from './reactiveUtils-bd6fe823.js';
import { d as d$1, c as c$2 } from './HandleOwner-fe336959.js';
import { k } from './Point-edff2a11.js';
import { h, u as u$4 } from './FeatureStore-3cedab83.js';
import { Y } from './QueryEngine-115f26ee.js';
import { S as S$3 } from './TileInfo-3c9e9a6a.js';
import { v as v$1 } from './TimeInfo-0c128ef4.js';
import { b } from './Query-1f6c7e43.js';
import { M } from './Extent-f27111e1.js';
import { c, E as E$2, u as u$2, f, y as y$2 } from './aaBoundingRect-5e1a4e52.js';
import { l as le, c as ce, g as ge } from './featureConversionUtils-3f60eb15.js';
import { g } from './arcgisLayerUrl-a268a370.js';
import { a } from './pbfQueryUtils-266d53dd.js';
import { x as x$1, d as d$2, c as c$1, S as S$2 } from './query-993c240b.js';
import { u as u$1 } from './asyncUtils-96c00c9e.js';
import { o as o$1, r as r$2, e as e$2 } from './byteSizeEstimations-5d50d6ff.js';
import './JSONSupport-dce2c67b.js';
import './aaBoundingBox-b312516d.js';
import './PooledRBush-70299040.js';
import './quickselect-d6c9284c.js';
import './optimizedFeatureQueryEngineAdapter-4bdd6f14.js';
import './centroid-a69e0a54.js';
import './OptimizedFeature-a0dba562.js';
import './MemCache-04cdd0cd.js';
import './unitUtils-a0a11e54.js';
import './request-ac4d8bfb.js';
import './Polyline-dcdb3782.js';
import './geometry-2f332a26.js';
import './normalizeUtils-d37dc597.js';
import './QueryEngineResult-4211c0f6.js';
import './quantizationUtils-65995723.js';
import './ItemCache-1f62ab56.js';
import './WhereClause-ae6d22ff.js';
import './_commonjsHelpers-8dd5c177.js';
import './utils-8ef1ee04.js';
import './generateRendererUtils-9d353c6e.js';
import './colorRamps-e3d9340f.js';
import './Color-25ce730a.js';
import './colorUtils-5009883d.js';
import './mathUtils-559a53d9.js';
import './enumeration-6695a859.js';
import './Symbol-573a64f6.js';
import './projectionSupport-d3b04744.js';
import './projection-fbd5d346.js';
import './mat4-d5df0e58.js';
import './assets-99f5c3ee.js';
import './zscale-0befeff4.js';
import './json-063a6f95.js';
import './utils-208ed644.js';
import './fieldUtils-240a3b99.js';
import './QueryEngineCapabilities-30e4c4d1.js';
import './timeSupport-c113f15a.js';
import './FieldsIndex-ea481e79.js';
import './Scheduler-ed7a36dc.js';
import './TimeExtent-66b53603.js';
import './Field-2973a5cf.js';
import './fieldType-eb0b42e4.js';
import './OptimizedFeatureSet-261a115b.js';
import './persistableUrlUtils-5dcd6081.js';
import './pbf-bac0c6a4.js';
import './queryZScale-127601ac.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let r=class extends y$1{constructor(){super(...arguments),this.updating=!1,this.pending=[];}push(s,t){this.pending.push({promise:s,callback:t}),1===this.pending.length&&this._process();}_process(){if(!this.pending.length)return void(this.updating=!1);this.updating=!0;const s=this.pending[0];s.promise.then((t=>s.callback(t))).catch((()=>{})).then((()=>{this.pending.shift(),this._process();}));}};e([d()],r.prototype,"updating",void 0),r=e([n("esri.core.AsyncSequence")],r);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class o{constructor(t,e){this.data=t,this.resolution=e,this.state={type:u.CREATED},this.alive=!0;}process(t){switch(this.state.type){case u.CREATED:return this.state=this._gotoFetchCount(this.state,t),this.state.task.promise.then(t.resume,t.resume);case u.FETCH_COUNT:break;case u.FETCHED_COUNT:return this.state=this._gotoFetchFeatures(this.state,t),this.state.task.promise.then(t.resume,t.resume);case u.FETCH_FEATURES:break;case u.FETCHED_FEATURES:this.state=this._goToDone(this.state,t);case u.DONE:}return null}get debugInfo(){return {data:this.data,featureCount:this.featureCount,state:this.stateToString}}get featureCount(){switch(this.state.type){case u.CREATED:case u.FETCH_COUNT:return 0;case u.FETCHED_COUNT:return this.state.featureCount;case u.FETCH_FEATURES:return this.state.previous.featureCount;case u.FETCHED_FEATURES:return this.state.features.length;case u.DONE:return this.state.previous.features.length}}get stateToString(){switch(this.state.type){case u.CREATED:return "created";case u.FETCH_COUNT:return "fetch-count";case u.FETCHED_COUNT:return "fetched-count";case u.FETCH_FEATURES:return "fetch-features";case u.FETCHED_FEATURES:return "fetched-features";case u.DONE:return "done"}}_gotoFetchCount(e,a){return {type:u.FETCH_COUNT,previous:e,task:O((async e=>{const s=await u$1(a.fetchCount(this,e));this.state.type===u.FETCH_COUNT&&(this.state=this._gotoFetchedCount(this.state,s.ok?s.value:1/0));}))}}_gotoFetchedCount(t,e){return {type:u.FETCHED_COUNT,featureCount:e,previous:t}}_gotoFetchFeatures(e,a){return {type:u.FETCH_FEATURES,previous:e,task:O((async s=>{const r=await u$1(a.fetchFeatures(this,e.featureCount,s));this.state.type===u.FETCH_FEATURES&&(this.state=this._gotoFetchedFeatures(this.state,r.ok?r.value:[]));}))}}_gotoFetchedFeatures(t,e){return {type:u.FETCHED_FEATURES,previous:t,features:e}}_goToDone(t,e){return e.finish(this,t.features),{type:u.DONE,previous:t}}reset(){const t=this.state;switch(this.state={type:u.CREATED},t.type){case u.CREATED:case u.FETCHED_COUNT:case u.FETCHED_FEATURES:case u.DONE:break;case u.FETCH_COUNT:case u.FETCH_FEATURES:t.task.abort();}}intersects(t){return !(!t$1(t)&&this.data.extent)||(c(t,T$1),E$2(this.data.extent,T$1))}}var u;!function(t){t[t.CREATED=0]="CREATED",t[t.FETCH_COUNT=1]="FETCH_COUNT",t[t.FETCHED_COUNT=2]="FETCHED_COUNT",t[t.FETCH_FEATURES=3]="FETCH_FEATURES",t[t.FETCHED_FEATURES=4]="FETCHED_FEATURES",t[t.DONE=5]="DONE";}(u||(u={}));const T$1=u$2();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const S$1=s.getLogger("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher");let C$1=class extends d$1{constructor(e){super(e),this.tilesOfInterest=[],this.availability=0,this.pendingTiles=new Map,this.pendingEdits=new r,this.pendingEditsAbortController=new AbortController;}get minimumVerticesPerFeature(){switch(this.store?.featureStore.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":return 1;case"esriGeometryPolygon":return 4;case"esriGeometryPolyline":return 2}}set filter(e){const t=this._get("filter"),i=this._filterProperties(e);JSON.stringify(t)!==JSON.stringify(i)&&this._set("filter",i);}set customParameters(e){const t=this._get("customParameters");JSON.stringify(t)!==JSON.stringify(e)&&this._set("customParameters",e);}get configuration(){return {filter:this.filter,customParameters:this.customParameters,tileInfo:this.tileInfo,tileSize:this.tileSize}}set tileInfo(e){const t=this._get("tileInfo");t!==e&&(r$1(e)&&r$1(t)&&JSON.stringify(e)===JSON.stringify(t)||(this._set("tileInfo",e),this.store.tileInfo=e));}set tileSize(e){this._get("tileSize")!==e&&this._set("tileSize",e);}get updating(){return this.updatingHandles.updating||this.pendingEdits.updating}initialize(){this._initializeFetchExtent(),this.updatingHandles.add((()=>this.configuration),(()=>this.refresh())),this.updatingHandles.add((()=>this.tilesOfInterest),((e,i$1)=>{i(e,i$1,(({id:e},{id:t})=>e===t))||this._process();}),U);}destroy(){this.pendingTiles.forEach((e=>this._deletePendingTile(e))),this.pendingTiles.clear(),this.store.destroy(),this.tilesOfInterest.length=0,this.pendingEditsAbortController.abort(),this.pendingEditsAbortController=null;}refresh(){this.store.refresh(),this.pendingTiles.forEach((e=>this._deletePendingTile(e))),this._process();}applyEdits(e){this.pendingEdits.push(e,(async e=>{if(0===e.addedFeatures.length&&0===e.updatedFeatures.length&&0===e.deletedFeatures.length)return;for(const[,i]of this.pendingTiles)i.reset();const t={...e,deletedFeatures:e.deletedFeatures.map((({objectId:e,globalId:t})=>e&&-1!==e?e:this._lookupObjectIdByGlobalId(t)))};await this.updatingHandles.addPromise(this.store.processEdits(t,((e,t)=>this._queryFeaturesById(e,t)),this.pendingEditsAbortController.signal)),this._processPendingTiles();}));}_initializeFetchExtent(){if(!this.capabilities.query.supportsExtent||!g(this.url))return;const e=O((async e=>{try{const t=await x$1(this.url,new b({where:"1=1",outSpatialReference:this.spatialReference,cacheHint:!!this.capabilities.query.supportsCacheHint||void 0}),{query:this.configuration.customParameters,signal:e});this.store.extent=M.fromJSON(t.data?.extent);}catch(t){w$3(t),S$1.warn("Failed to fetch data extent",t);}}));this.updatingHandles.addPromise(e.promise.then((()=>this._process()))),this.handles.add(n$1((()=>e.abort())));}get debugInfo(){return {numberOfFeatures:this.store.featureStore.numFeatures,tilesOfInterest:this.tilesOfInterest,pendingTiles:Array.from(this.pendingTiles.values()).map((e=>e.debugInfo)),storedTiles:this.store.debugInfo}}_process(){this._markTilesNotAlive(),this._createPendingTiles(),this._deletePendingTiles(),this._processPendingTiles();}_markTilesNotAlive(){for(const[,e]of this.pendingTiles)e.alive=!1;}_createPendingTiles(){const e=this._collectMissingTilesInfo();if(this._setAvailability(t$1(e)?1:e.coveredArea/e.fullArea),!t$1(e))for(const{data:t,resolution:i}of e.missingTiles){const e=this.pendingTiles.get(t.id);e?(e.resolution=i,e.alive=!0):this._createPendingTile(t,i);}}_collectMissingTilesInfo(){let e=null;for(let t=this.tilesOfInterest.length-1;t>=0;t--){const i=this.tilesOfInterest[t],s=this.store.process(i,((e,t)=>this._verifyTileComplexity(e,t)));t$1(e)?e=s:e.prepend(s);}return e}_deletePendingTiles(){for(const[,e]of this.pendingTiles)e.alive||this._deletePendingTile(e);}_processPendingTiles(){const e={fetchCount:(e,t)=>this._fetchCount(e,t),fetchFeatures:(e,t,i)=>this._fetchFeatures(e,t,i),finish:(e,t)=>this._finishPendingTile(e,t),resume:()=>this._processPendingTiles()};if(this._ensureFetchAllCounts(e))for(const[,t]of this.pendingTiles)this._verifyTileComplexity(this.store.getFeatureCount(t.data),t.resolution)&&this.updatingHandles.addPromise(t.process(e));}_verifyTileComplexity(e,t){return this._verifyVertexComplexity(e)&&this._verifyFeatureDensity(e,t)}_verifyVertexComplexity(e){return e*this.minimumVerticesPerFeature<E$1}_verifyFeatureDensity(e,t){if(t$1(this.tileInfo))return !1;const i=this.tileSize*t;return e*(w$2/(i*i))<q}_ensureFetchAllCounts(e){let t=!0;for(const[,i]of this.pendingTiles)i.state.type<u.FETCHED_COUNT&&this.updatingHandles.addPromise(i.process(e)),i.state.type<=u.FETCH_COUNT&&(t=!1);return t}_finishPendingTile(e,t){this.store.add(e.data,t),this._deletePendingTile(e),this._updateAvailability();}_updateAvailability(){const e=this._collectMissingTilesInfo();this._setAvailability(t$1(e)?1:e.coveredArea/e.fullArea);}_setAvailability(e){this._set("availability",e);}_createPendingTile(e,t){const i=new o(e,t);return this.pendingTiles.set(e.id,i),i}_deletePendingTile(e){e.reset(),this.pendingTiles.delete(e.data.id);}async _fetchCount(e,t){return this.store.fetchCount(e.data,this.url,this._createCountQuery(e),{query:this.customParameters,timeout:x,signal:t})}async _fetchFeatures(e,t,i){let s,r=0,o=0,n=t;for(;;){const a=this._createFeaturesQuery(e),u=this._setPagingParameters(a,r,n),{features:c,exceededTransferLimit:d}=await this._queryFeatures(a,i);if(u&&(r+=e$1(a.num)),o+=c.length,s=s?s.concat(c):c,n=t-o,!u||!d||n<=0)return s}}_filterProperties(e){return t$1(e)?{where:"1=1",gdbVersion:void 0,timeExtent:void 0}:{where:e.where||"1=1",timeExtent:e.timeExtent,gdbVersion:e.gdbVersion}}_lookupObjectIdByGlobalId(e){const t=this.globalIdField,i=this.objectIdField;if(t$1(t))throw new Error("Expected globalIdField to be defined");let s=null;if(this.store.featureStore.forEach((r=>{e===r.attributes[t]&&(s=r.objectId??r.attributes[i]);})),t$1(s))throw new Error(`Expected to find a feature with globalId ${e}`);return s}_queryFeaturesById(e,t){const i=this._createFeaturesQuery(null);return i.objectIds=e,this._queryFeatures(i,t)}_queryFeatures(e,t){return this.capabilities.query.supportsFormatPBF?this._queryFeaturesPBF(e,t):this._queryFeaturesJSON(e,t)}async _queryFeaturesPBF(e,t){const{sourceSpatialReference:i}=this,{data:s}=await d$2(this.url,e,new a({sourceSpatialReference:i}),{query:this.configuration.customParameters,timeout:x,signal:t});return le(s)}async _queryFeaturesJSON(e,t){const{sourceSpatialReference:i}=this,{data:s}=await c$1(this.url,e,i,{query:this.configuration.customParameters,timeout:x,signal:t});return ce(s,this.objectIdField)}_createCountQuery(e){const t=this._createBaseQuery(e);return this.capabilities.query.supportsCacheHint&&(t.cacheHint=!0),t}_createFeaturesQuery(e){const t=this._createBaseQuery(e);return t.outFields=this.globalIdField?[this.globalIdField,this.objectIdField]:[this.objectIdField],t.returnGeometry=!0,r$1(e)&&(this.capabilities.query.supportsResultType?t.resultType="tile":this.capabilities.query.supportsCacheHint&&(t.cacheHint=!0)),t}_createBaseQuery(e){const t=new b({returnZ:!1,returnM:!1,geometry:r$1(this.tileInfo)&&r$1(e)?f(e.data.extent,this.tileInfo.spatialReference):void 0}),i=this.configuration.filter;return r$1(i)&&(t.where=i.where,t.gdbVersion=i.gdbVersion,t.timeExtent=i.timeExtent),t.outSpatialReference=this.spatialReference,t}_setPagingParameters(e,t,i){if(!this.capabilities.query.supportsPagination)return !1;const{supportsMaxRecordCountFactor:s,supportsCacheHint:r,tileMaxRecordCount:o,maxRecordCount:n,supportsResultType:a}=this.capabilities.query,l=s?b.MAX_MAX_RECORD_COUNT_FACTOR:1,u=l*((a||r)&&o?o:n||j$1);return e.start=t,s?(e.maxRecordCountFactor=Math.min(l,Math.ceil(i/u)),e.num=Math.min(i,e.maxRecordCountFactor*u)):e.num=Math.min(i,u),!0}};e([d({constructOnly:!0})],C$1.prototype,"url",void 0),e([d({constructOnly:!0})],C$1.prototype,"objectIdField",void 0),e([d({constructOnly:!0})],C$1.prototype,"globalIdField",void 0),e([d({constructOnly:!0})],C$1.prototype,"capabilities",void 0),e([d({constructOnly:!0})],C$1.prototype,"sourceSpatialReference",void 0),e([d({constructOnly:!0})],C$1.prototype,"spatialReference",void 0),e([d({constructOnly:!0})],C$1.prototype,"store",void 0),e([d({readOnly:!0})],C$1.prototype,"minimumVerticesPerFeature",null),e([d()],C$1.prototype,"filter",null),e([d()],C$1.prototype,"customParameters",null),e([d({readOnly:!0})],C$1.prototype,"configuration",null),e([d()],C$1.prototype,"tileInfo",null),e([d()],C$1.prototype,"tileSize",null),e([d()],C$1.prototype,"tilesOfInterest",void 0),e([d({readOnly:!0})],C$1.prototype,"updating",null),e([d({readOnly:!0})],C$1.prototype,"availability",void 0),C$1=e([n("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher")],C$1);const j$1=2e3,x=6e5,E$1=1e6,w$2=25,q=1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class t{constructor(){this._store=new Map,this._byteSize=0;}set(t,e){this.delete(t),this._store.set(t,e),this._byteSize+=e.byteSize;}delete(t){const e=this._store.get(t);return !!this._store.delete(t)&&(this._byteSize-=e.byteSize,!0)}get(t){return this._used(t),this._store.get(t)}has(t){return this._used(t),this._store.has(t)}clear(){this._store.clear();}applyByteSizeLimit(t,e){for(const[s,r]of this._store){if(this._byteSize<=t)break;this.delete(s),e(r);}}values(){return this._store.values()}[Symbol.iterator](){return this._store[Symbol.iterator]()}_used(t){const e=this._store.get(t);e&&(this._store.delete(t),this._store.set(t,e));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let v=class extends y$1{constructor(e){super(e),this.tileInfo=null,this.extent=null,this.maximumByteSize=10*o$1.MEGABYTES,this.tileBounds=new h,this.tiles=new t,this.refCounts=new Map,this.tileFeatureCounts=new Map,this.tmpBoundingRect=u$2();}add(e,t){const s=[];for(const i of t)this._referenceFeature(i.objectId)===w$1.ADDED&&s.push(i);this._addTileStorage(e,new Set(t.map((({objectId:e})=>e))),y(t)),this.featureStore.addMany(s),this.tiles.applyByteSizeLimit(this.maximumByteSize,(e=>this._removeTileStorage(e)));}destroy(){this.clear(),this.tileFeatureCounts.clear();}clear(){this.featureStore.clear(),this.tileBounds.clear(),this.tiles.clear(),this.refCounts.clear();}refresh(){this.clear(),this.tileFeatureCounts.clear();}processEdits(e,t,s){return this._processEditsDelete(e.deletedFeatures.concat(e.updatedFeatures)),this._processEditsRefetch(e.addedFeatures.concat(e.updatedFeatures),t,s)}_addTileStorage(e,t,s){this.tiles.set(e.id,new S(e,t,s)),this.tileBounds.set(e.id,e.extent),this.tileFeatureCounts.set(e.id,t.size);}_remove({id:e}){const t=this.tiles.get(e);t&&this._removeTileStorage(t);}_removeTileStorage(e){const t=[];for(const i of e.objectIds)this._unreferenceFeature(i)===w$1.REMOVED&&t.push(i);this.featureStore.removeManyById(t);const s=e.data.id;this.tiles.delete(s),this.tileBounds.delete(s);}_processEditsDelete(e){this.featureStore.removeManyById(e);for(const[,t]of this.tiles){for(const s of e)t.objectIds.delete(s);this.tileFeatureCounts.set(t.data.id,t.objectIds.size);}for(const t of e)this.refCounts.delete(t);}async _processEditsRefetch(e,t,s){const i=(await t(e,s)).features,{hasZ:r,hasM:n}=this.featureStore;for(const l of i){const e=ge(this.tmpBoundingRect,l.geometry,r,n);t$1(e)||this.tileBounds.forEachInBounds(e,(e=>{const t=this.tiles.get(e);this.featureStore.add(l),t.objectIds.has(l.objectId)||(t.objectIds.add(l.objectId),this._referenceFeature(l.objectId),this.tileFeatureCounts.set(t.data.id,t.objectIds.size));}));}}process(e,t=(()=>!0)){if(t$1(this.tileInfo)||!e.extent||r$1(this.extent)&&!E$2(c(this.extent,this.tmpBoundingRect),e.extent))return new I$1(e);if(this.tiles.has(e.id))return new I$1(e);const s=this._createTileTree(e,this.tileInfo);return this._simplify(s,t,null,0,1),this._collectMissingTiles(e,s,this.tileInfo)}get debugInfo(){return Array.from(this.tiles.values()).map((({data:e})=>({data:e,featureCount:this.tileFeatureCounts.get(e.id)||0})))}getFeatureCount(e){return this.tileFeatureCounts.get(e.id)??0}async fetchCount(e,t,s,i){const r=this.tileFeatureCounts.get(e.id);if(null!=r)return r;const o=await S$2(t,s,i);return this.tileFeatureCounts.set(e.id,o.data.count),o.data.count}_createTileTree(e,t){const s=new T(e.level,e.row,e.col);return t.updateTileInfo(s,S$3.ExtrapolateOptions.POWER_OF_TWO),this.tileBounds.forEachInBounds(e.extent,(i=>{const r=this.tiles.get(i).data;this._tilesAreRelated(e,r)&&this._populateChildren(s,r,t,this.tileFeatureCounts.get(r.id)||0);})),s}_tilesAreRelated(e,t){if(!e||!t)return !1;if(e.level===t.level)return e.row===t.row&&e.col===t.col;const s=e.level<t.level,i=s?e:t,r=s?t:e,o=1<<r.level-i.level;return Math.floor(r.row/o)===i.row&&Math.floor(r.col/o)===i.col}_populateChildren(e,t,s,i){const r=t.level-e.level-1;if(r<0)return void(e.isLeaf=!0);const o=t.row>>r,l=t.col>>r,a=e.row<<1,c=l-(e.col<<1)+(o-a<<1),h=e.children[c];if(r$1(h))this._populateChildren(h,t,s,i);else {const r=new T(e.level+1,o,l);s.updateTileInfo(r,S$3.ExtrapolateOptions.POWER_OF_TWO),e.children[c]=r,this._populateChildren(r,t,s,i);}}_simplify(e,t,s,i,r){const o=r*r;if(e.isLeaf)return t(this.getFeatureCount(e),r)?0:(this._remove(e),r$1(s)&&(s.children[i]=null),o);const l=r/2,a=l*l;let c=0;for(let h=0;h<e.children.length;h++){const s=e.children[h];c+=r$1(s)?this._simplify(s,t,e,h,l):a;}return 0===c?this._mergeChildren(e):1-c/o<F&&(this._purge(e),r$1(s)&&(s.children[i]=null),c=o),c}_mergeChildren(e){const t=new Set;let s=0;this._forEachLeaf(e,(e=>{const i=this.tiles.get(e.id);if(i){s+=i.byteSize;for(const e of i.objectIds)t.has(e)||(t.add(e),this._referenceFeature(e));this._remove(e);}})),this._addTileStorage(e,t,s),e.isLeaf=!0,e.children[0]=e.children[1]=e.children[2]=e.children[3]=null,this.tileFeatureCounts.set(e.id,t.size);}_forEachLeaf(e,t){for(const s of e.children)t$1(s)||(s.isLeaf?t(s):this._forEachLeaf(s,t));}_purge(e){if(!t$1(e))if(e.isLeaf)this._remove(e);else for(let t=0;t<e.children.length;t++){const s=e.children[t];this._purge(s),e.children[t]=null;}}_collectMissingTiles(e,t,s){const i=new j(s,e,this.extent);return this._collectMissingTilesRecurse(t,i,1),i.info}_collectMissingTilesRecurse(e,t,s){if(e.isLeaf)return;if(!e.hasChildren)return void t.addMissing(e.level,e.row,e.col,s);const i=s/2;for(let r=0;r<e.children.length;r++){const s=e.children[r];t$1(s)?t.addMissing(e.level+1,(e.row<<1)+((2&r)>>1),(e.col<<1)+(1&r),i):this._collectMissingTilesRecurse(s,t,i);}}_referenceFeature(e){const t=(this.refCounts.get(e)||0)+1;return this.refCounts.set(e,t),1===t?w$1.ADDED:w$1.UNCHANGED}_unreferenceFeature(e){const t=(this.refCounts.get(e)||0)-1;return 0===t?(this.refCounts.delete(e),w$1.REMOVED):(t>0&&this.refCounts.set(e,t),w$1.UNCHANGED)}get test(){return {tiles:Array.from(this.tiles.values()).map((e=>`${e.data.id}:[${Array.from(e.objectIds)}]`)),featureReferences:Array.from(this.refCounts.keys()).map((e=>`${e}:${this.refCounts.get(e)}`))}}};function y(e){return e.reduce(((e,t)=>e+C(t)),0)}function C(e){return 32+E(e.geometry)+r$2(e.attributes)}function E(e){if(t$1(e))return 0;const t=e$2(e.lengths,4);return 32+e$2(e.coords,8)+t}e([d({constructOnly:!0})],v.prototype,"featureStore",void 0),e([d()],v.prototype,"tileInfo",void 0),e([d()],v.prototype,"extent",void 0),e([d()],v.prototype,"maximumByteSize",void 0),v=e([n("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore")],v);class S{constructor(e,t,s){this.data=e,this.objectIds=t,this.byteSize=s;}}class T{constructor(e,t,s){this.level=e,this.row=t,this.col=s,this.isLeaf=!1,this.extent=null,this.children=[null,null,null,null];}get hasChildren(){return !this.isLeaf&&(r$1(this.children[0])||r$1(this.children[1])||r$1(this.children[2])||r$1(this.children[3]))}}class I$1{constructor(e,t=[]){this.missingTiles=t,this.fullArea=0,this.coveredArea=0,this.fullArea=y$2(e.extent),this.coveredArea=this.fullArea;}prepend(e){this.missingTiles=e.missingTiles.concat(this.missingTiles),this.coveredArea+=e.coveredArea,this.fullArea+=e.fullArea;}}class j{constructor(e,t,s){this.tileInfo=e,this.extent=null,this.info=new I$1(t),r$1(s)&&(this.extent=c(s));}addMissing(e,t,s,i){const r={id:null,level:e,row:t,col:s};this.tileInfo.updateTileInfo(r,S$3.ExtrapolateOptions.POWER_OF_TWO),t$1(r.extent)||r$1(this.extent)&&!E$2(this.extent,r.extent)||(this.info.missingTiles.push({data:r,resolution:i}),this.info.coveredArea-=y$2(r.extent));}}const F=.18751;var w$1;!function(e){e[e.ADDED=0]="ADDED",e[e.REMOVED=1]="REMOVED",e[e.UNCHANGED=2]="UNCHANGED";}(w$1||(w$1={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let I=class extends n$2.EventedAccessor{constructor(){super(...arguments),this.isInitializing=!0,this.whenSetup=T$2(),this.handles=new u$3,this.updatingHandles=new c$2,this.pendingApplyEdits=new Map;}get updating(){return this.featureFetcher.updating||this.isInitializing||this.updatingHandles.updating}destroy(){this.featureFetcher.destroy(),this.queryEngine.destroy(),this.featureStore.clear(),this.handles.destroy();}async setup(e){const{geometryType:t,objectIdField:i,timeInfo:r,fields:s}=e.serviceInfo;return this.featureStore=new u$4({...e.serviceInfo,hasZ:!1,hasM:!1}),this.queryEngine=new Y({spatialReference:e.spatialReference,featureStore:this.featureStore,geometryType:t,fields:s,hasZ:!1,hasM:!1,objectIdField:i,timeInfo:r?v$1.fromJSON(r):null}),this.featureFetcher=new C$1({store:new v({featureStore:this.featureStore}),url:e.serviceInfo.url,objectIdField:e.serviceInfo.objectIdField,globalIdField:e.serviceInfo.globalIdField,capabilities:e.serviceInfo.capabilities,spatialReference:k.fromJSON(e.spatialReference),sourceSpatialReference:k.fromJSON(e.serviceInfo.spatialReference)}),this.handles.add([l((()=>this.featureFetcher.availability),(e=>this.emit("notify-availability",{availability:e})),U),l((()=>this.updating),(()=>this._notifyUpdating()))]),this.whenSetup.resolve(),this.isInitializing=!1,this.configure(e.configuration)}async configure(e){return await this.updatingHandles.addPromise(this.whenSetup.promise),this._updateFeatureFetcherConfiguration(e),{result:{}}}async fetchCandidates(e,t){await this.whenSetup.promise,f$1(t);return {result:await this.queryEngine.executeQueryForSnapping({point:e.point,distance:e.distance,types:e.types,query:r$1(e.filter)?e.filter:{where:"1=1"}},r$1(t)?t.signal:null)}}async updateTiles(e,t){return await this.updatingHandles.addPromise(this.whenSetup.promise),f$1(t),this.featureFetcher.tileSize=e.tileSize,this.featureFetcher.tilesOfInterest=e.tiles,this.featureFetcher.tileInfo=r$1(e.tileInfo)?S$3.fromJSON(e.tileInfo):null,{result:{}}}async refresh(e,t){return await this.updatingHandles.addPromise(this.whenSetup.promise),f$1(t),this.featureFetcher.refresh(),{result:{}}}async whenNotUpdating(e,t){return await this.updatingHandles.addPromise(this.whenSetup.promise),f$1(t),await j$2((()=>!this.updating),t),f$1(t),{result:{}}}async getDebugInfo(e,t){return f$1(t),{result:this.featureFetcher.debugInfo}}async beginApplyEdits(e,t){this.updatingHandles.addPromise(this.whenSetup.promise),f$1(t);const i=T$2();return this.pendingApplyEdits.set(e.id,i),this.featureFetcher.applyEdits(i.promise),this.updatingHandles.addPromise(i.promise),{result:{}}}async endApplyEdits(e,t){const i=this.pendingApplyEdits.get(e.id);return i&&i.resolve(e.edits),f$1(t),{result:{}}}_updateFeatureFetcherConfiguration(e){this.featureFetcher.filter=r$1(e.filter)?b.fromJSON(e.filter):null,this.featureFetcher.customParameters=e.customParameters;}_notifyUpdating(){this.emit("notify-updating",{updating:this.updating});}};function w(){return new I}e([d({readOnly:!0})],I.prototype,"updating",null),e([d()],I.prototype,"isInitializing",void 0),I=e([n("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorker")],I);

export default w;
export { I as FeatureServiceSnappingSourceWorker };
