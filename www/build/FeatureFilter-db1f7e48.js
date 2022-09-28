import { s as s$1, a as s$2, t as t$1 } from './cast-3d5be210.js';
import { u } from './aaBoundingRect-5e1a4e52.js';
import { c } from './Polyline-dcdb3782.js';
import { v as v$1, n } from './timeSupport-c113f15a.js';
import { v } from './utils-208ed644.js';
import { b } from './Query-1f6c7e43.js';
import { u as u$1 } from './FeatureStore2D-68cd96ff.js';
import './mathUtils-559a53d9.js';
import './Extent-f27111e1.js';
import './Point-edff2a11.js';
import './JSONSupport-dce2c67b.js';
import './geometry-2f332a26.js';
import './request-ac4d8bfb.js';
import './featureConversionUtils-3f60eb15.js';
import './OptimizedFeature-a0dba562.js';
import './OptimizedFeatureSet-261a115b.js';
import './projectionSupport-d3b04744.js';
import './projection-fbd5d346.js';
import './unitUtils-a0a11e54.js';
import './Collection-a38e0489.js';
import './mat4-d5df0e58.js';
import './assets-99f5c3ee.js';
import './zscale-0befeff4.js';
import './json-063a6f95.js';
import './normalizeUtils-d37dc597.js';
import './centroid-a69e0a54.js';
import './TimeExtent-66b53603.js';
import './enumeration-6695a859.js';
import './Field-2973a5cf.js';
import './fieldType-eb0b42e4.js';
import './CircularArray-06e241ea.js';
import './TileStore-909b46c6.js';
import './workers-c7a27acb.js';
import './intl-54ccdc89.js';
import './number-c5a37d3e.js';
import './Promise-d2759b2e.js';
import './messages-5e9a4a9e.js';
import './TileKey-97254206.js';
import './quickselect-d6c9284c.js';
import './aaBoundingBox-b312516d.js';
import './diffUtils-6436a697.js';
import './fieldUtils-240a3b99.js';
import './ComputedAttributeStorage-d95b750e.js';
import './FieldsIndex-ea481e79.js';
import './enums-395c521f.js';
import './visualVariablesUtils-61e64f04.js';
import './screenUtils-31d073db.js';
import './Utils-b4b0f45e.js';
import './number-ad66b701.js';
import './enums-4770f29d.js';
import './Texture-f189b7ba.js';
import './context-util-5ae1bf7b.js';
import './VertexElementDescriptor-3b53aa99.js';
import './visualVariablesUtils-dc5fe9fe.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const t=s$1.getLogger("esri.views.2d.layers.features.support.whereUtils"),a={getAttribute:(e,r)=>e.field(r)};async function s(r,s){const n=await import('./WhereClause-ae6d22ff.js');try{const o=n.WhereClause.create(r,s);if(!o.isStandardized){const r=new s$2("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",o);t.error(r);}return e=>{const r=e.readArcadeFeature();return o.testFeature(r,a)}}catch(o){return t.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",r),e=>!0}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const m=s$1.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter"),_=1,p=2;class y{constructor(t){this._geometryBounds=u(),this._idToVisibility=new Map,this._serviceInfo=t;}get hash(){return this._hash}check(t){return this._applyFilter(t)}clear(){const t=this._resetAllHiddenIds();return this.update(),{show:t,hide:[]}}invalidate(){this._idToVisibility.forEach(((t,e)=>{this._idToVisibility.set(e,0);}));}setKnownIds(t){for(const e of t)this._idToVisibility.set(e,_);}setTrue(t){const e=[],i=[],s=new Set(t);return this._idToVisibility.forEach(((t,r)=>{const o=!!(this._idToVisibility.get(r)&_),h=s.has(r);!o&&h?e.push(r):o&&!h&&i.push(r),this._idToVisibility.set(r,h?_|p:0);})),{show:e,hide:i}}createQuery(){const{geometry:t,spatialRel:e,where:i,timeExtent:s,objectIds:r}=this;return b.fromJSON({geometry:t,spatialRel:e,where:i,timeExtent:s,objectIds:r})}async update(t,e){this._hash=JSON.stringify(t);const i=await v(t,null,e);await Promise.all([this._setGeometryFilter(i),this._setIdFilter(i),this._setAttributeFilter(i),this._setTimeFilter(i)]);}async _setAttributeFilter(t){if(!t||!t.where)return this._clause=null,void(this.where=null);this._clause=await s(t.where,this._serviceInfo.fieldsIndex),this.where=t.where;}_setIdFilter(t){this._idsToShow=t&&t.objectIds&&new Set(t.objectIds),this._idsToHide=t&&t.hiddenIds&&new Set(t.hiddenIds),this.objectIds=t&&t.objectIds;}async _setGeometryFilter(t){if(!t||!t.geometry)return this._spatialQueryOperator=null,this.geometry=null,void(this.spatialRel=null);const e=t.geometry,i=t.spatialRel||"esriSpatialRelIntersects",s=await v$1(i,e,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM);c(this._geometryBounds,e),this._spatialQueryOperator=s,this.geometry=e,this.spatialRel=i;}_setTimeFilter(e){if(this.timeExtent=this._timeOperator=null,e&&e.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=e.timeExtent,this._timeOperator=n(this._serviceInfo.timeInfo,e.timeExtent,u$1);else {const i=new s$2("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",e.timeExtent);m.error(i);}}_applyFilter(t){return this._filterByGeometry(t)&&this._filterById(t)&&this._filterByTime(t)&&this._filterByExpression(t)}_filterByExpression(t){return !this.where||this._clause(t)}_filterById(t){return (!this._idsToHide||!this._idsToHide.size||!this._idsToHide.has(t.getObjectId()))&&(!this._idsToShow||!this._idsToShow.size||this._idsToShow.has(t.getObjectId()))}_filterByGeometry(t){if(!this.geometry)return !0;const e=t.readHydratedGeometry();return !!e&&this._spatialQueryOperator(e)}_filterByTime(t){return !!t$1(this._timeOperator)||this._timeOperator(t)}_resetAllHiddenIds(){const t=[];return this._idToVisibility.forEach(((e,i)=>{e&_||(this._idToVisibility.set(i,_),t.push(i));})),t}}

export default y;
