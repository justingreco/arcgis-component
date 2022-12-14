import { a as s, t as t$1, r } from './cast-3d5be210.js';
import { l, v } from './geometry-2f332a26.js';
import { n as c } from './Point-edff2a11.js';
import { W, e as ee, Q } from './featureConversionUtils-3f60eb15.js';
import { t, n } from './objectIdUtils-db38aada.js';
import { u as u$1 } from './FeatureStore-3cedab83.js';
import { f, g } from './projectionSupport-d3b04744.js';
import { Y } from './QueryEngine-115f26ee.js';
import { a, u, l as l$1 } from './clientSideDefaults-2211e21f.js';
import { w as w$1, a as a$1, m, f as f$1, g as g$1 } from './sourceUtils-bd599482.js';
import { d } from './FieldsIndex-ea481e79.js';
import { i } from './fieldType-eb0b42e4.js';
import { P } from './fieldUtils-240a3b99.js';
import './Extent-f27111e1.js';
import './Polyline-dcdb3782.js';
import './request-ac4d8bfb.js';
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
const R=c,q={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:c},D={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function O(e){return l(e)?null!=e.z:!!e.hasZ}function w(e){return l(e)?null!=e.m:!!e.hasM}class S{constructor(){this._queryEngine=null,this._nextObjectId=null;}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null;}async load(t$1){const i$1=[],{features:s$1}=t$1,r=this._inferLayerProperties(s$1,t$1.fields),n$1=t$1.fields||[],a$1=null!=t$1.hasM?t$1.hasM:r.hasM,o=null!=t$1.hasZ?t$1.hasZ:r.hasZ,l=!t$1.spatialReference&&!r.spatialReference,y=l?R:t$1.spatialReference||r.spatialReference,I=l?q:null,b=t$1.geometryType||r.geometryType,F=!b;let j=t$1.objectIdField||r.objectIdField,_=t$1.timeInfo;if(!F&&(l&&i$1.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!b))throw new s("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!j)throw new s("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(r.objectIdField&&j!==r.objectIdField&&(i$1.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${j}" doesn't match the field name "${r.objectIdField}", found in the provided fields`}),j=r.objectIdField),j&&!r.objectIdField){let e=null;n$1.some((t=>t.name===j&&(e=t,!0)))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):n$1.unshift({alias:j,name:j,type:"esriFieldTypeOID",editable:!1,nullable:!1});}for(const u of n$1){if(null==u.name&&(u.name=u.alias),null==u.alias&&(u.alias=u.name),!u.name)throw new s("feature-layer:invalid-field-name","field name is missing",{field:u});if(u.name===j&&(u.type="esriFieldTypeOID"),!i.jsonValues.includes(u.type))throw new s("feature-layer:invalid-field-type",`invalid type for field "${u.name}"`,{field:u})}const O={};for(const e of n$1)if("esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type){const t=P(e);void 0!==t&&(O[e.name]=t);}if(this._fieldsIndex=new d(n$1),this._createDefaultAttributes=a(O,j),_){if(_.startTimeField){const e=this._fieldsIndex.get(_.startTimeField);e?(_.startTimeField=e.name,e.type="esriFieldTypeDate"):_.startTimeField=null;}if(_.endTimeField){const e=this._fieldsIndex.get(_.endTimeField);e?(_.endTimeField=e.name,e.type="esriFieldTypeDate"):_.endTimeField=null;}if(_.trackIdField){const e=this._fieldsIndex.get(_.trackIdField);e?_.trackIdField=e.name:(_.trackIdField=null,i$1.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:_}}));}_.startTimeField||_.endTimeField||(i$1.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:_}}),_=null);}const w={warnings:i$1,featureErrors:[],layerDefinition:{...D,drawingInfo:u(b),templates:l$1(O),extent:I,geometryType:b,objectIdField:j,fields:n$1,hasZ:!!o,hasM:!!a$1,timeInfo:_},assignedObjectIds:{}};if(this._queryEngine=new Y({fields:n$1,geometryType:b,hasM:a$1,hasZ:o,objectIdField:j,spatialReference:y,featureStore:new u$1({geometryType:b,hasM:a$1,hasZ:o}),timeInfo:_,cacheSpatialQueries:!0}),!s$1||!s$1.length)return this._nextObjectId=t,w;const S=n(j,s$1);return this._nextObjectId=S+1,await f(s$1,y),this._loadInitialFeatures(w,s$1)}async applyEdits(e){const{spatialReference:t,geometryType:i}=this._queryEngine;return await Promise.all([w$1(t,i),f(e.adds,t),f(e.updates,t)]),this._applyEdits(e)}queryFeatures(e,t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,i){let r,n,a=null,o=null,l=null;for(const u of e){const e=u.geometry;if(!t$1(e)&&(a||(a=v(e)),o||(o=e.spatialReference),null==r&&(r=O(e)),null==n&&(n=w(e)),a&&o&&null!=r&&null!=n))break}if(i&&i.length){let e=null;i.some((t=>{const i="esriFieldTypeOID"===t.type,s=!t.type&&t.name&&"objectid"===t.name.toLowerCase();return e=t,i||s}))&&(l=e.name);}return {geometryType:a,spatialReference:o,objectIdField:l,hasM:n,hasZ:r}}_loadInitialFeatures(e,t){const{geometryType:r$1,hasM:n,hasZ:o,objectIdField:l,spatialReference:u,featureStore:d}=this._queryEngine,p=[];for(const a of t){if(null!=a.uid&&(e.assignedObjectIds[a.uid]=-1),a.geometry&&r$1!==v(a.geometry)){e.featureErrors.push(a$1("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),n=m(this._fieldsIndex,t,a.attributes,!0,e.warnings);n?e.featureErrors.push(n):(this._assignObjectId(t,a.attributes,!0),a.attributes=t,null!=a.uid&&(e.assignedObjectIds[a.uid]=a.attributes[l]),r(a.geometry)&&(a.geometry=g(a.geometry,a.geometry.spatialReference,u)),p.push(a));}if(d.addMany(W([],p,r$1,o,n,l)),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:t,end:i}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[t,i];}return e}_applyEdits(e){const{adds:t,updates:i,deletes:s}=e,r={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(r,t),i&&i.length&&this._applyUpdateEdits(r,i),s&&s.length){for(const e of s)r.deleteResults.push(f$1(e));this._queryEngine.featureStore.removeManyById(s);}return {fullExtent:this._queryEngine.fullExtent,featureEditResults:r}}_applyAddEdits(e,t){const{addResults:r$1}=e,{geometryType:n,hasM:o,hasZ:l,objectIdField:u,spatialReference:d,featureStore:p}=this._queryEngine,f=[];for(const a of t){if(a.geometry&&n!==v(a.geometry)){r$1.push(a$1("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),o=m(this._fieldsIndex,t,a.attributes);if(o)r$1.push(o);else {if(this._assignObjectId(t,a.attributes),a.attributes=t,null!=a.uid){const t=a.attributes[u];e.uidToObjectId[a.uid]=t;}r(a.geometry)&&(a.geometry=g(g$1(a.geometry,d),a.geometry.spatialReference,d)),f.push(a),r$1.push(f$1(a.attributes[u]));}}p.addMany(W([],f,n,l,o,u));}_applyUpdateEdits({updateResults:e},t){const{geometryType:r$1,hasM:n,hasZ:a,objectIdField:u,spatialReference:d,featureStore:p}=this._queryEngine;for(const f of t){const{attributes:t,geometry:c}=f,m$1=t&&t[u];if(null==m$1){e.push(a$1(`Identifier field ${u} missing`));continue}if(!p.has(m$1)){e.push(a$1(`Feature with object id ${m$1} missing`));continue}const h=ee(p.getFeature(m$1),r$1,a,n);if(r(c)){if(r$1!==v(c)){e.push(a$1("Incorrect geometry type."));continue}h.geometry=g(g$1(c,d),c.spatialReference,d);}if(t){const i=m(this._fieldsIndex,h.attributes,t);if(i){e.push(i);continue}}p.add(Q(h,r$1,a,n,u)),e.push(f$1(m$1));}}_assignObjectId(e,t,i=!1){const s=this._queryEngine.objectIdField;i&&t&&isFinite(t[s])?e[s]=t[s]:e[s]=this._nextObjectId++;}}

export default S;
