import { X as f, r, h as e, a as s, aM as O$1, J as g$1, s as s$1 } from './cast-3d5be210.js';
import { E as E$1, n as c } from './Point-edff2a11.js';
import { t as te, n as ne } from './featureConversionUtils-3f60eb15.js';
import { u } from './FeatureStore-3cedab83.js';
import { g, f as f$1 } from './projectionSupport-d3b04744.js';
import { Y } from './QueryEngine-115f26ee.js';
import { O, L } from './geojson-62adf71f.js';
import { m } from './sourceUtils-bd599482.js';
import { K } from './wfsUtils-d67a0ceb.js';
import { d } from './FieldsIndex-ea481e79.js';
import './JSONSupport-dce2c67b.js';
import './geometry-2f332a26.js';
import './Extent-f27111e1.js';
import './Polyline-dcdb3782.js';
import './request-ac4d8bfb.js';
import './OptimizedFeature-a0dba562.js';
import './OptimizedFeatureSet-261a115b.js';
import './Collection-a38e0489.js';
import './aaBoundingBox-b312516d.js';
import './aaBoundingRect-5e1a4e52.js';
import './mathUtils-559a53d9.js';
import './PooledRBush-70299040.js';
import './quickselect-d6c9284c.js';
import './optimizedFeatureQueryEngineAdapter-4bdd6f14.js';
import './centroid-a69e0a54.js';
import './projection-fbd5d346.js';
import './unitUtils-a0a11e54.js';
import './mat4-d5df0e58.js';
import './assets-99f5c3ee.js';
import './zscale-0befeff4.js';
import './json-063a6f95.js';
import './MemCache-04cdd0cd.js';
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
import './enumeration-6695a859.js';
import './Symbol-573a64f6.js';
import './utils-208ed644.js';
import './fieldUtils-240a3b99.js';
import './QueryEngineCapabilities-30e4c4d1.js';
import './timeSupport-c113f15a.js';
import './Scheduler-ed7a36dc.js';
import './Handles-54afc0a7.js';
import './reactiveUtils-bd6fe823.js';
import './xmlUtils-d69cd7fe.js';
import './Field-2973a5cf.js';
import './fieldType-eb0b42e4.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class E{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async e=>{const{objectIdField:t}=this._queryEngine,s=await K(this._getFeatureUrl,this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map((e=>e.name)),signal:e});await O(s),f(e);const i=L(s,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:t});if(!E$1(this._queryEngine.spatialReference,c))for(const a of i)r(a.geometry)&&(a.geometry=te(g(ne(a.geometry,this._queryEngine.geometryType,!1,!1),c,this._queryEngine.spatialReference)));let o=1;for(const r of i){const e={};m(this._fieldsIndex,e,r.attributes,!0),r.attributes=e,null==r.attributes[t]&&(r.objectId=r.attributes[t]=o++);}return i};}destroy(){this._queryEngine?.destroy(),this._queryEngine=null;}async load(e$1,t){const{getFeatureUrl:r,getFeatureOutputFormat:i,spatialReference:o,fields:n,geometryType:u$1,featureType:p,objectIdField:h,customParameters:c}=e$1;this._featureType=p,this._customParameters=c,this._getFeatureUrl=r,this._getFeatureOutputFormat=i,this._fieldsIndex=new d(n),await this._checkProjection(o),f(t),this._queryEngine=new Y({fields:n,geometryType:u$1,hasM:!1,hasZ:!1,objectIdField:h,spatialReference:o,timeInfo:null,featureStore:new u({geometryType:u$1,hasM:!1,hasZ:!1})});const m=await this._snapshotFeatures(e(t.signal));return this._queryEngine.featureStore.addMany(m),{extent:this._queryEngine.fullExtent}}async applyEdits(){throw new s("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(r){return this._customParameters=r,this._snapshotTask?.abort(),this._snapshotTask=O$1(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e);}),(r=>{this._queryEngine.featureStore.clear(),g$1(r)||s$1.getLogger("esri.layers.WFSLayer").error(new s("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:r}));})),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise;}catch{}return this._waitSnapshotComplete()}}async _checkProjection(t){try{await f$1(c,t);}catch{throw new s("unsupported-projection","Projection not supported",{spatialReference:t})}}}

export default E;
