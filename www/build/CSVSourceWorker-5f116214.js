import './geometry-2f332a26.js';
import { j, U, u as Ut } from './request-ac4d8bfb.js';
import { a as s$2, aM as O$1, J as g, s as s$3 } from './cast-3d5be210.js';
import { l as ln } from './projection-fbd5d346.js';
import { t as t$1 } from './json-063a6f95.js';
import { E, f as k$1, y, k as k$2, n as c$1 } from './Point-edff2a11.js';
import { s as s$4, t as t$2 } from './OptimizedFeature-a0dba562.js';
import { u as u$2 } from './FeatureStore-3cedab83.js';
import { f as f$1 } from './projectionSupport-d3b04744.js';
import { Y } from './QueryEngine-115f26ee.js';
import { u as u$1, a as a$2 } from './clientSideDefaults-2211e21f.js';
import { a as a$1 } from './number-3228daf9.js';
import { d as d$1 } from './FieldsIndex-ea481e79.js';
import { P as P$1 } from './fieldUtils-240a3b99.js';
import './Extent-f27111e1.js';
import './Polyline-dcdb3782.js';
import './mathUtils-559a53d9.js';
import './unitUtils-a0a11e54.js';
import './Collection-a38e0489.js';
import './mat4-d5df0e58.js';
import './assets-99f5c3ee.js';
import './aaBoundingRect-5e1a4e52.js';
import './zscale-0befeff4.js';
import './JSONSupport-dce2c67b.js';
import './aaBoundingBox-b312516d.js';
import './featureConversionUtils-3f60eb15.js';
import './OptimizedFeatureSet-261a115b.js';
import './PooledRBush-70299040.js';
import './quickselect-d6c9284c.js';
import './optimizedFeatureQueryEngineAdapter-4bdd6f14.js';
import './centroid-a69e0a54.js';
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
import './Promise-d2759b2e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const n$1=/^\s*"([\S\s]*)"\s*$/,t=/""/g,e="\n",o$1=[","," ",";","|","\t"];function*c(n,t,e){let o=0;for(;o<=n.length;){const c=n.indexOf(t,o),i=n.substring(o,c>-1?c:void 0);o+=i.length+t.length,e&&!i.trim()||(yield i);}}function i$1(n){const t=n.includes("\r\n")?"\r\n":e;return c(n,t,!0)}function r$1(n,t){return c(n,t,!1)}function f(n){const t=n.trim();let e=0,c="";for(const i of o$1){const n=t.split(i).length;n>e&&(e=n,c=i);}return ""===c?null:c}function*l$1(o,c,i,f=(()=>Object.create(null))){let l="",u="",d=0,g=f(),x=0;n:for(const h of o){const o=r$1(h,i);for(const e of o)if(l+=u+e,u="",d+=s$1(e),d%2==0){if(d>0){const e=n$1.exec(l);if(!e){g=f(),x=0,l="",d=0;continue n}g[c[x]]=e[1].replace(t,'"'),x++;}else g[c[x]]=l,x++;l="",d=0;}else u=i;0===d?(yield g,g=f(),x=0):u=e;}}function s$1(n){let t=0,e=0;for(e=n.indexOf('"',e);e>=0;)t++,e=n.indexOf('"',e+1);return t}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function r(e){const t=e.map((e=>e.toLowerCase()));return {longitudeFieldName:e[t.indexOf(d.find((e=>t.includes(e))))],latitudeFieldName:e[t.indexOf(s.find((e=>t.includes(e))))]}}function n(e,r,n,l){const o=[],a=l$1(e,n,r),u=[];for(const t of a){if(10===u.length)break;u.push(t);}for(const t of n)if(t===l.longitudeFieldName||t===l.latitudeFieldName)o.push({name:t,type:"esriFieldTypeDouble",alias:t});else {const e=i(u.map((e=>e[t]))),r={name:t,type:null,alias:t};switch(e){case"integer":r.type="esriFieldTypeInteger";break;case"double":r.type="esriFieldTypeDouble";break;case"date":r.type="esriFieldTypeDate",r.length=36;break;default:r.type="esriFieldTypeString",r.length=255;}o.push(r);}return o}function i(e){if(!e.length)return "string";const t=/[^+-.,0-9]/;return e.map((e=>{let r=!1;if(""!==e){if(t.test(e))r=!0;else {let t=o(e);if(!isNaN(t))return /[.,]/.test(e)||!Number.isInteger(t)||t>214783647||t<-214783648?"double":"integer";if(e.includes("E")){if(t=Number(e),!isNaN(t))return "double";if(e.includes(",")){if(e=e.replace(",","."),t=Number(e),!isNaN(t))return "double";r=!0;}else r=!0;}else r=!0;}if(r){if(!/^[-]?\d*[.,]?\d*$/.test(e)){return l(new Date(e),e)?"date":"string"}return "string"}return "string"}})).reduce(((e,t)=>void 0===e||e===t?t:"string"===e||"string"===t?"string":"double"===e||"double"===t?"double":void 0))}function l(e,t){if(!e||"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))return !1;let r=!0;if(!u&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,n=0;for(;!t&&n<=e.length;)t=!a.test(e[n]),n++;r=!t;}}return r}const o=function(){const t=a$1(),r=new RegExp("^"+t.regexp+"$"),n=new RegExp("["+t.group+"\\s\\xa0]","g"),i=t.factor;return e=>{const l=r.exec(e);if(t.factor=i,!l)return NaN;let o=l[1];if(!l[1]){if(!l[2])return NaN;o=l[2],t.factor*=-1;}return o=o.replace(n,"").replace(t.decimal,"."),+o*t.factor}}(),a=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,u=Number.isNaN(new Date("technology 10").getTime()),s=["lat","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point-y"],d=["lon","lng","long","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point-x"];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const b=u$1("esriGeometryPoint"),v=["csv"],D=[0,0];class O{constructor(e,t){this.x=e,this.y=t;}}class k{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)};}destroy(){this._queryEngine?.destroy(),this._queryEngine=null;}async load(e,t={}){this.loadOptions=e;const[i]=await Promise.all([this._fetch(t.signal),this._checkProjection(e?.parsingOptions?.spatialReference)]),n=P(i,e);this.locationInfo=n.locationInfo,this.delimiter=n.delimiter,this._queryEngine=this._createQueryEngine(n);const r=await this._createFeatures(i);if(this._queryEngine.featureStore.addMany(r),n.layerDefinition.extent=this._queryEngine.fullExtent,n.layerDefinition.timeInfo){const{start:e,end:t}=this._queryEngine.timeExtent;n.layerDefinition.timeInfo.timeExtent=[e,t];}return n}async applyEdits(){throw new s$2("csv-layer:editing-not-supported","applyEdits() is not supported on CSVLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){return this.loadOptions.customParameters=e,this._snapshotTask?.abort(),this._snapshotTask=O$1(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e);}),(e=>{this._queryEngine.featureStore.clear(),g(e)||s$3.getLogger("esri.layers.CSVLayer").error(new s$2("csv-layer:refresh","An error occurred during refresh",{error:e}));})),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise;}catch{}return this._waitSnapshotComplete()}}async _fetch(i){const{url:n,customParameters:r}=this.loadOptions;if(!n)throw new s$2("csv-layer:invalid-source","url not defined");const o=j(n);return (await U(o.path,{query:{...o.query,...r},responseType:"text",signal:i})).data}_createQueryEngine(e){const{objectIdField:t,fields:i,extent:n,timeInfo:r}=e.layerDefinition,s=new u$2({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1});return new Y({fields:i,geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:r,objectIdField:t,spatialReference:n.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:s})}async _createFeatures(e){const{latitudeFieldName:t,longitudeFieldName:i}=this.locationInfo,{objectIdField:n,fieldsIndex:r,spatialReference:s}=this._queryEngine;let o$1=[];const u=[],y$1=r.fields.filter((e=>e.name!==n)).map((e=>e.name));let h=0;const g=i$1(e);g.next();const I={};for(const a of r.fields)if("esriFieldTypeOID"!==a.type&&"esriFieldTypeGlobalID"!==a.type){const e=P$1(a);void 0!==e&&(I[a.name]=e);}const E$1=l$1(g,y$1,this.delimiter,a$2(I,n));for(const a of E$1){const e=this._parseCoordinateValue(a[t]),s=this._parseCoordinateValue(a[i]);if(null!=s&&null!=e&&!isNaN(e)&&!isNaN(s)){a[t]=e,a[i]=s;for(const e in a)if(e!==t&&e!==i)if(r.isDateField(e)){const t=new Date(a[e]);a[e]=l(t,a[e])?t.getTime():null;}else if(r.isNumericField(e)){const t=o(a[e]);isNaN(t)?a[e]=null:a[e]=t;}a[n]=h,h++,o$1.push(new O(s,e)),u.push(a);}}if(!E({wkid:4326},s))if(k$1(s))for(const a of o$1)[a.x,a.y]=y(a.x,a.y,D);else o$1=ln(t$1,o$1,k$2.WGS84,s,null,null);const N=[];for(let a=0;a<o$1.length;a++){const{x:e,y:t}=o$1[a],i=u[a];i[n]=a+1,N.push(new s$4(new t$2([],[e,t]),i,null,i[n]));}return N}_parseCoordinateValue(e){if(null==e||""===e)return null;let t=o(e);return (isNaN(t)||Math.abs(t)>181)&&(t=parseFloat(e)),t}async _checkProjection(e){try{await f$1(c$1,e);}catch{throw new s$2("csv-layer:projection-not-supported","Projection not supported")}}}function P(e,i){const n$1=i.parsingOptions||{},r$1={delimiter:n$1.delimiter,layerDefinition:null,locationInfo:{latitudeFieldName:n$1.latitudeField,longitudeFieldName:n$1.longitudeField}},s=i$1(e);let a=s.next().value;if(!a)throw new s$2("csv-layer:empty-csv","CSV is empty",{csv:e});if(a=a.trim(),!n$1.delimiter){const e=f(a);if(!e)throw new s$2("csv-layer:invalid-delimiter","Unable to detect the delimiter from CSV");r$1.delimiter=e;}const l=a.split(r$1.delimiter).filter((e=>!!e)),d=r$1.layerDefinition={name:Ut(i.url,v)||"csv",drawingInfo:b,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:n$1.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:n$1.spatialReference||{wkid:102100}}};if(!n$1.latitudeField||!n$1.longitudeField){const e=r(l);if(!n$1.longitudeField&&!e.longitudeFieldName||!n$1.latitudeField&&!e.latitudeFieldName)throw new s$2("csv-layer:location-fields-not-found","Unable to identify latitude and longitude fields from the CSV file");r$1.locationInfo={longitudeFieldName:n$1.longitudeField||e.longitudeFieldName,latitudeFieldName:n$1.latitudeField||e.latitudeFieldName};}const m=n(s,r$1.delimiter,l,r$1.locationInfo);if(n$1.fields&&n$1.fields.length){const e=new Map;for(const t of n$1.fields)e.set(t.name.toLowerCase(),t);for(const t of m){const i=e.get(t.name.toLowerCase());if(i){const e=t.name;Object.assign(t,i),t.name=e;}}}d.fields=m;if(!d.fields.some((e=>"esriFieldTypeOID"===e.type&&(d.objectIdField=e.name,!0)))){const e={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};d.objectIdField=e.name,d.fields.unshift(e);}if(d.timeInfo){const e=new d$1(d.fields),t=d.timeInfo;if(t.startTimeField){const i=e.get(t.startTimeField);i?(t.startTimeField=i.name,i.type="esriFieldTypeDate"):t.startTimeField=null;}if(t.endTimeField){const i=e.get(t.endTimeField);i?(t.endTimeField=i.name,i.type="esriFieldTypeDate"):t.endTimeField=null;}if(t.trackIdField){const i=e.get(t.trackIdField);t.trackIdField=i?i.name:null;}t.startTimeField||t.endTimeField||(d.timeInfo=null);}return r$1}

export default k;
