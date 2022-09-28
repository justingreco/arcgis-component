import { U } from './request-ac4d8bfb.js';
import { a as s, aM as O$1, J as g, s as s$1, r } from './cast-3d5be210.js';
import { v } from './geometry-2f332a26.js';
import { n as c, E } from './Point-edff2a11.js';
import { t as te, n as ne, W, e as ee, Q } from './featureConversionUtils-3f60eb15.js';
import { u as u$1 } from './FeatureStore-3cedab83.js';
import { f, g as g$1 } from './projectionSupport-d3b04744.js';
import { Y } from './QueryEngine-115f26ee.js';
import { T, L, O as O$2 } from './geojson-62adf71f.js';
import { u, l, a } from './clientSideDefaults-2211e21f.js';
import { w, m, f as f$1, a as a$1, g as g$2 } from './sourceUtils-bd599482.js';
import { d } from './FieldsIndex-ea481e79.js';
import { i } from './fieldType-eb0b42e4.js';
import { P } from './fieldUtils-240a3b99.js';
import './Extent-f27111e1.js';
import './Polyline-dcdb3782.js';
import './JSONSupport-dce2c67b.js';
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
import './QueryEngineCapabilities-30e4c4d1.js';
import './timeSupport-c113f15a.js';
import './Scheduler-ed7a36dc.js';
import './Handles-54afc0a7.js';
import './reactiveUtils-bd6fe823.js';
import './defaultsJSON-5fb6161d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const O={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class C{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)};}destroy(){this._queryEngine?.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null;}async load(e,s$1={}){this.loadOptions={url:e.url,customParameters:e.customParameters};const i$1=[];await this._checkProjection(e.spatialReference);let r=null;e.url&&(r=await this._fetch(s$1?.signal));const n=T(r,{geometryType:e.geometryType}),a$1=e.fields||n.fields||[],u$2=null!=e.hasZ?e.hasZ:n.hasZ,l$1=n.geometryType,d$1=e.objectIdField||n.objectIdFieldName||"__OBJECTID",p=e.spatialReference||c;let c$1=e.timeInfo;a$1===n.fields&&n.unknownFields.length>0&&i$1.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:n.unknownFields}});let y=a$1.find((e=>e.name===d$1));y?("esriFieldTypeString"!==y.type&&(y.type="esriFieldTypeOID"),y.editable=!1,y.nullable=!1):(y={alias:d$1,name:d$1,type:"string"===n.objectIdFieldType?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},a$1.unshift(y));const m={};for(const o of a$1){if(null==o.name&&(o.name=o.alias),null==o.alias&&(o.alias=o.name),!o.name)throw new s("geojson-layer:invalid-field-name","field name is missing",{field:o});if(!i.jsonValues.includes(o.type))throw new s("geojson-layer:invalid-field-type",`invalid type for field "${o.name}"`,{field:o});if(o.name!==y.name){const e=P(o);void 0!==e&&(m[o.name]=e);}}this._fieldsIndex=new d(a$1);const f=this._fieldsIndex.requiredFields.indexOf(y);if(f>-1&&this._fieldsIndex.requiredFields.splice(f,1),c$1){if(c$1.startTimeField){const e=this._fieldsIndex.get(c$1.startTimeField);e?(c$1.startTimeField=e.name,e.type="esriFieldTypeDate"):c$1.startTimeField=null;}if(c$1.endTimeField){const e=this._fieldsIndex.get(c$1.endTimeField);e?(c$1.endTimeField=e.name,e.type="esriFieldTypeDate"):c$1.endTimeField=null;}if(c$1.trackIdField){const e=this._fieldsIndex.get(c$1.trackIdField);e?c$1.trackIdField=e.name:(c$1.trackIdField=null,i$1.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:c$1}}));}c$1.startTimeField||c$1.endTimeField||(i$1.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:c$1}}),c$1=null);}const I=l$1?u(l$1):null,j={warnings:i$1,featureErrors:[],layerDefinition:{...O,drawingInfo:I,templates:l(m),extent:null,geometryType:l$1,objectIdField:d$1,fields:a$1,hasZ:!!u$2,timeInfo:c$1}};this._queryEngine=new Y({fields:a$1,geometryType:l$1,hasM:!1,hasZ:u$2,objectIdField:d$1,spatialReference:p,timeInfo:c$1,featureStore:new u$1({geometryType:l$1,hasM:!1,hasZ:u$2}),cacheSpatialQueries:!0}),this._createDefaultAttributes=a(m,d$1);const T$1=await this._createFeatures(r);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,T$1);const w=this._normalizeFeatures(T$1,j.warnings,j.featureErrors);if(this._queryEngine.featureStore.addMany(w),j.layerDefinition.extent=this._queryEngine.fullExtent,j.layerDefinition.timeInfo){const{start:e,end:t}=this._queryEngine.timeExtent;j.layerDefinition.timeInfo.timeExtent=[e,t];}return j}async applyEdits(e){const{spatialReference:t,geometryType:s}=this._queryEngine;return await Promise.all([w(t,s),f(e.adds,t),f(e.updates,t)]),await this._waitSnapshotComplete(),this._applyEdits(e)}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){return this.loadOptions.customParameters=e,this._snapshotTask?.abort(),this._snapshotTask=O$1(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,e);const t=this._normalizeFeatures(e);t&&this._queryEngine.featureStore.addMany(t);}),(e=>{this._queryEngine.featureStore.clear(),g(e)||s$1.getLogger("esri.layers.GeoJSONLayer").error(new s("geojson-layer:refresh","An error occurred during refresh",{error:e}));})),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent}}async _createFeatures(e){const{geometryType:t,hasZ:s,objectIdField:r$1}=this._queryEngine,n=L(e,{geometryType:t,hasZ:s,objectIdField:r$1});if(!E(this._queryEngine.spatialReference,c))for(const a of n)r(a.geometry)&&(a.geometry=te(g$1(ne(a.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),c,this._queryEngine.spatialReference)));return n}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise;}catch{}return this._waitSnapshotComplete()}}async _fetch(t){const{url:s,customParameters:i}=this.loadOptions,r=(await U(s,{responseType:"json",query:{...i},signal:t})).data;return await O$2(r),r}_normalizeFeatures(e,t,s){const{objectIdField:i}=this._queryEngine,r=[];for(const n of e){const e=this._createDefaultAttributes(),a=m(this._fieldsIndex,e,n.attributes,!0,t);a?s?.push(a):(this._assignObjectId(e,n.attributes,!0),n.attributes=e,n.objectId=e[i],r.push(n));}return r}_applyEdits(e){const{adds:t,updates:s,deletes:i}=e,r={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(r,t),s&&s.length&&this._applyUpdateEdits(r,s),i&&i.length){for(const e of i)r.deleteResults.push(f$1(e));this._queryEngine.featureStore.removeManyById(i);}return {extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent,featureEditResults:r}}_applyAddEdits(e,t){const{addResults:s}=e,{geometryType:r$1,hasM:n,hasZ:o,objectIdField:u,spatialReference:l,featureStore:d}=this._queryEngine,c=[];for(const p of t){if(p.geometry&&r$1!==v(p.geometry)){s.push(a$1("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),n=m(this._fieldsIndex,t,p.attributes);if(n)s.push(n);else {if(this._assignObjectId(t,p.attributes),p.attributes=t,null!=p.uid){const t=p.attributes[u];e.uidToObjectId[p.uid]=t;}r(p.geometry)&&(p.geometry=g$1(g$2(p.geometry,l),p.geometry.spatialReference,l)),c.push(p),s.push(f$1(p.attributes[u]));}}d.addMany(W([],c,r$1,o,n,u));}_applyUpdateEdits({updateResults:e},t){const{geometryType:s,hasM:r$1,hasZ:n,objectIdField:o,spatialReference:u,featureStore:l}=this._queryEngine;for(const d of t){const{attributes:t,geometry:p}=d,h=t&&t[o];if(null==h){e.push(a$1(`Identifier field ${o} missing`));continue}if(!l.has(h)){e.push(a$1(`Feature with object id ${h} missing`));continue}const m$1=ee(l.getFeature(h),s,n,r$1);if(r(p)){if(s!==v(p)){e.push(a$1("Incorrect geometry type."));continue}m$1.geometry=g$1(g$2(p,u),p.spatialReference,u);}if(t){const s=m(this._fieldsIndex,m$1.attributes,t);if(s){e.push(s);continue}}l.add(Q(m$1,s,n,r$1,o)),e.push(f$1(h));}}_createObjectIdGenerator(e,t){const s=e.fieldsIndex.get(e.objectIdField);if("esriFieldTypeString"===s.type)return ()=>s.name+"-"+Date.now().toString(16);let i=Number.NEGATIVE_INFINITY;for(const r of t)r.objectId&&(i=Math.max(i,r.objectId));return i=Math.max(0,i)+1,()=>i++}_assignObjectId(e,t,s=!1){const i=this._queryEngine.objectIdField;e[i]=s&&i in t?t[i]:this._objectIdGenerator();}async _checkProjection(e){try{await f(c,e);}catch{throw new s("geojson-layer","Projection not supported")}}}

export default C;
