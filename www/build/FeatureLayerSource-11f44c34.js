import { t, r as r$1, y as y$1, e, d as d$4, n as n$7, c as a$4, aq as y$2, a as s$6, C as x$2, a0 as o$2 } from './cast-3d5be210.js';
import { v, d as d$5 } from './geometry-2f332a26.js';
import { g as g$1 } from './Graphic-93f45ded.js';
import { t as S$1, l as i$2, U, G, j, s as s$7, n as nt } from './request-ac4d8bfb.js';
import { y as y$3 } from './TimeExtent-66b53603.js';
import { m as m$3 } from './Portal-5df9f5a7.js';
import { M } from './Extent-f27111e1.js';
import { u as u$2 } from './clientSideDefaults-2211e21f.js';
import { b, K } from './Query-1f6c7e43.js';
import { l as l$3, a as a$5 } from './executeQueryJSON-cbafa4d9.js';
import { n as n$6 } from './utils-d801fb7f.js';
import { n as n$5 } from './compilerUtils-d149ad5f.js';
import { o as o$1 } from './zscale-0befeff4.js';
import { m as me, n as ne } from './featureConversionUtils-3f60eb15.js';
import { d as d$2, t as t$1, x as x$1 } from './query-993c240b.js';
import x from './FeatureSet-1b85367a.js';
import { c as c$3, d as d$3, S as S$2 } from './TopFeaturesQuery-babc7c57.js';
import { n as n$8, s as s$5 } from './executeForIds-0f103ae7.js';
import { L } from './normalizeUtils-d37dc597.js';
import { r as r$2 } from './queryZScale-127601ac.js';
import { i as i$3 } from './FeatureLayer-6922c890.js';
import { k } from './Point-edff2a11.js';
import './Polyline-dcdb3782.js';
import './PopupTemplate-b459951f.js';
import './Collection-a38e0489.js';
import './JSONSupport-dce2c67b.js';
import './fieldUtils-240a3b99.js';
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
import './QueryEngineCapabilities-30e4c4d1.js';
import './defaultsJSON-5fb6161d.js';
import './Field-2973a5cf.js';
import './fieldType-eb0b42e4.js';
import './unitUtils-a0a11e54.js';
import './OptimizedFeature-a0dba562.js';
import './OptimizedFeatureSet-261a115b.js';
import './pbfQueryUtils-266d53dd.js';
import './pbf-bac0c6a4.js';
import './UniqueValueRenderer-bb66af10.js';
import './ColorStop-64c57e35.js';
import './diffUtils-6436a697.js';
import './colorRamps-e3d9340f.js';
import './sizeVariableUtils-5330814d.js';
import './commonProperties-fca3036e.js';
import './jsonUtils-a25e8eb8.js';
import './styleUtils-d2332fad.js';
import './jsonUtils-e7c7add9.js';
import './DictionaryLoader-d0d1b4ff.js';
import './LRUCache-5f25d277.js';
import './MemCache-04cdd0cd.js';
import './aliasOf-bdfe6662.js';
import './heatmapUtils-d302cc7f.js';
import './vec4f64-011248e0.js';
import './Handles-54afc0a7.js';
import './MultiOriginJSONSupport-281c1c62.js';
import './sql-817bbae7.js';
import './HeightModelInfo-12951268.js';
import './Layer-569a1fc8.js';
import './HandleOwner-fe336959.js';
import './reactiveUtils-bd6fe823.js';
import './workers-c7a27acb.js';
import './assets-99f5c3ee.js';
import './intl-54ccdc89.js';
import './messages-5e9a4a9e.js';
import './APIKeyMixin-04df9c0f.js';
import './ArcGISService-848d76dd.js';
import './arcgisLayerUrl-a268a370.js';
import './BlendLayer-7884099a.js';
import './jsonUtils-f3f35e7f.js';
import './mat4-d5df0e58.js';
import './_commonjsHelpers-8dd5c177.js';
import './CustomParametersMixin-f702935f.js';
import './labelingInfo-6e0c44d1.js';
import './LabelClass-936eaa93.js';
import './labelUtils-824fc88a.js';
import './OperationalLayer-e04486e0.js';
import './OrderedLayer-d02e1d58.js';
import './PortalLayer-e61e1a42.js';
import './asyncUtils-96c00c9e.js';
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

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function i$1(e,t){return t}function n$4(e,t,r,s){switch(r){case 0:return d$1(e,t+s,0);case 1:return "lowerLeft"===e.originPosition?d$1(e,t+s,1):l$2(e,t+s,1)}}function a$3(e,t,r,s){return 2===r?d$1(e,t,2):n$4(e,t,r,s)}function h(e,t,r,s){return 2===r?d$1(e,t,3):n$4(e,t,r,s)}function u$1(e,t,r,s){return 3===r?d$1(e,t,3):a$3(e,t,r,s)}function d$1({translate:e,scale:t},r,s){return e[s]+r*t[s]}function l$2({translate:e,scale:t},r,s){return e[s]-r*t[s]}class c$2{constructor(e){this.options=e,this.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],this.previousCoordinate=[0,0],this.transform=null,this.applyTransform=i$1,this.lengths=[],this.currentLengthIndex=0,this.toAddInCurrentPath=0,this.vertexDimension=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,this._attributesConstructor=()=>{};}createFeatureResult(){return {fields:[],features:[]}}finishFeatureResult(e){if(this.options.applyTransform&&(e.transform=null),this._attributesConstructor=()=>{},this.coordinateBuffer=null,this.lengths.length=0,!e.hasZ)return;const s=o$1(e.geometryType,this.options.sourceSpatialReference,e.spatialReference);if(!t(s))for(const t of e.features)s(t.geometry);}createSpatialReference(){return {}}addField(e,t){e.fields.push(t);const r=e.fields.map((e=>e.name));this._attributesConstructor=function(){for(const e of r)this[e]=null;};}addFeature(e,t){e.features.push(t);}prepareFeatures(t){switch(this.transform=t.transform,this.options.applyTransform&&t.transform&&(this.applyTransform=this._deriveApplyTransform(t)),this.vertexDimension=2,t.hasZ&&this.vertexDimension++,t.hasM&&this.vertexDimension++,t.geometryType){case"esriGeometryPoint":this.addCoordinate=(e,t,r)=>this.addCoordinatePoint(e,t,r),this.createGeometry=e=>this.createPointGeometry(e);break;case"esriGeometryPolygon":this.addCoordinate=(e,t,r)=>this._addCoordinatePolygon(e,t,r),this.createGeometry=e=>this._createPolygonGeometry(e);break;case"esriGeometryPolyline":this.addCoordinate=(e,t,r)=>this._addCoordinatePolyline(e,t,r),this.createGeometry=e=>this._createPolylineGeometry(e);break;case"esriGeometryMultipoint":this.addCoordinate=(e,t,r)=>this._addCoordinateMultipoint(e,t,r),this.createGeometry=e=>this._createMultipointGeometry(e);break;default:n$5(t.geometryType);}}createFeature(){return this.lengths.length=0,this.currentLengthIndex=0,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,{attributes:new this._attributesConstructor}}allocateCoordinates(){}addLength(e,t,r){0===this.lengths.length&&(this.toAddInCurrentPath=t),this.lengths.push(t);}addQueryGeometry(e,t){const{queryGeometry:r,queryGeometryType:i}=t,n=me(r.clone(),r,!1,!1,this.transform),a=ne(n,i,!1,!1);e.queryGeometryType=i,e.queryGeometry={...a};}createPointGeometry(e){const t={x:0,y:0,spatialReference:e.spatialReference};return e.hasZ&&(t.z=0),e.hasM&&(t.m=0),t}addCoordinatePoint(e,t,r){switch(t=this.applyTransform(this.transform,t,r,0),r){case 0:e.x=t;break;case 1:e.y=t;break;case 2:"z"in e?e.z=t:e.m=t;break;case 3:e.m=t;}}_transformPathLikeValue(e,t){let r=0;return t<=1&&(r=this.previousCoordinate[t],this.previousCoordinate[t]+=e),this.applyTransform(this.transform,e,t,r)}_addCoordinatePolyline(e,t,r){this._dehydratedAddPointsCoordinate(e.paths,t,r);}_addCoordinatePolygon(e,t,r){this._dehydratedAddPointsCoordinate(e.rings,t,r);}_addCoordinateMultipoint(e,t,r){0===r&&e.points.push([]);const s=this._transformPathLikeValue(t,r);e.points[e.points.length-1].push(s);}_createPolygonGeometry(e){return {rings:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createPolylineGeometry(e){return {paths:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createMultipointGeometry(e){return {points:[],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_dehydratedAddPointsCoordinate(e,t,r){0===r&&0==this.toAddInCurrentPath--&&(e.push([]),this.toAddInCurrentPath=this.lengths[++this.currentLengthIndex]-1,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0);const s=this._transformPathLikeValue(t,r),o=e[e.length-1];0===r&&(this.coordinateBufferPtr=0,this.coordinateBuffer=new Array(this.vertexDimension),o.push(this.coordinateBuffer)),this.coordinateBuffer[this.coordinateBufferPtr++]=s;}_deriveApplyTransform(e){const{hasZ:t,hasM:r}=e;return t&&r?u$1:t?a$3:r?h:n$4}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
async function s$4(r,e,t){const s=await n$3(r,b.from(e),t);return x.fromJSON(s)}async function n$3(o,s,n){const p=n$6(o),i={...n},u=b.from(s),m=!u.quantizationParameters,{data:f}=await d$2(p,u,new c$2({sourceSpatialReference:u.sourceSpatialReference,applyTransform:m}),i);return f}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function n$2(t){const o=t.toJSON();return o.attachmentTypes&&(o.attachmentTypes=o.attachmentTypes.join(",")),o.keywords&&(o.keywords=o.keywords.join(",")),o.globalIds&&(o.globalIds=o.globalIds.join(",")),o.objectIds&&(o.objectIds=o.objectIds.join(",")),o.size&&(o.size=o.size.join(",")),o}function a$2(o,r){const n={};for(const a of o){const{parentObjectId:o,parentGlobalId:c,attachmentInfos:i}=a;for(const a of i){const{id:i}=a,m=S$1(i$2(`${r}/${o}/attachments/${i}`)),p=l$3.fromJSON(a);p.set({url:m,parentObjectId:o,parentGlobalId:c}),n[o]?n[o].push(p):n[o]=[p];}}return n}function c$1(t,e,s){let a={query:t$1({...t.query,f:"json",...n$2(e)})};return s&&(a={...s,...a,query:{...s.query,...a.query}}),U(t.path+"/queryAttachments",a)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
async function a$1(a,m,n){const s=n$6(a);return c$1(s,c$3.from(m),{...n}).then((t=>a$2(t.data.attachmentGroups,s.path)))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
async function m$2(m,n,s){const p=n$6(m);return x$1(p,b.from(n),{...s}).then((t=>({count:t.data.count,extent:M.fromJSON(t.data.extent)})))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function o(e,t){const o=e.toJSON();return o.objectIds&&(o.objectIds=o.objectIds.join(",")),o.orderByFields&&(o.orderByFields=o.orderByFields.join(",")),o.outFields&&!t?.returnCountOnly?o.outFields.includes("*")?o.outFields="*":o.outFields=o.outFields.join(","):delete o.outFields,o.outSpatialReference&&(o.outSR=o.outSR.wkid||JSON.stringify(o.outSR.toJSON()),delete o.outSpatialReference),o.dynamicDataSource&&(o.layer=JSON.stringify({source:o.dynamicDataSource}),delete o.dynamicDataSource),o}async function r(e,t,o){const r=await s$3(e,t,o),n=r.data,a=n.geometryType,d=n.spatialReference,c={};for(const s of n.relatedRecordGroups){const e={fields:void 0,objectIdFieldName:void 0,geometryType:a,spatialReference:d,hasZ:!!n.hasZ,hasM:!!n.hasM,features:s.relatedRecords};if(null!=s.objectId)c[s.objectId]=e;else for(const t in s)s.hasOwnProperty(t)&&"relatedRecords"!==t&&(c[s[t]]=e);}return {...r,data:c}}async function n$1(e,t,o){const r=await s$3(e,t,o,{returnCountOnly:!0}),n=r.data,a={};for(const s of n.relatedRecordGroups)null!=s.objectId&&(a[s.objectId]=s.count);return {...r,data:a}}async function s$3(r,n,s={},a){const d=t$1({...r.query,f:"json",...a,...o(n,a)});return U(r.path+"/queryRelatedRecords",{...s,query:{...s.query,...d}})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
async function n(e,n,u){n=d$3.from(n);const a=n$6(e);return r(a,n,u).then((t=>{const r=t.data,e={};return Object.keys(r).forEach((t=>e[t]=x.fromJSON(r[t]))),e}))}async function u(r,o,n){o=d$3.from(o);const u=n$6(r);return n$1(u,o,{...n}).then((t=>t.data))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const l$1="Layer does not support extent calculation.";function y(t,r){const o=t.geometry,i=t.toJSON(),s=i;if(r$1(o)&&(s.geometry=JSON.stringify(o),s.geometryType=v(o),s.inSR=o.spatialReference.wkid||JSON.stringify(o.spatialReference)),i.topFilter?.groupByFields&&(s.topFilter.groupByFields=i.topFilter.groupByFields.join(",")),i.topFilter?.orderByFields&&(s.topFilter.orderByFields=i.topFilter.orderByFields.join(",")),i.topFilter&&(s.topFilter=JSON.stringify(s.topFilter)),i.objectIds&&(s.objectIds=i.objectIds.join(",")),i.orderByFields&&(s.orderByFields=i.orderByFields.join(",")),i.outFields&&!(r?.returnCountOnly||r?.returnExtentOnly||r?.returnIdsOnly)?i.outFields.includes("*")?s.outFields="*":s.outFields=i.outFields.join(","):delete s.outFields,i.outSR?s.outSR=i.outSR.wkid||JSON.stringify(i.outSR):o&&i.returnGeometry&&(s.outSR=s.inSR),i.returnGeometry&&delete i.returnGeometry,i.timeExtent){const t=i.timeExtent,{start:e,end:r}=t;null==e&&null==r||(s.time=e===r?e:`${null==e?"null":e},${null==r?"null":r}`),delete i.timeExtent;}return s}async function d(t,e,r,o){const n=await c(t,e,"json",o);return r$2(e,r,n.data),n}async function m$1(t,r,o){return r$1(r.timeExtent)&&r.timeExtent.isEmpty?{data:{objectIds:[]}}:c(t,r,"json",o,{returnIdsOnly:!0})}async function p(t,r,o){return r$1(r.timeExtent)&&r.timeExtent.isEmpty?{data:{count:0,extent:null}}:c(t,r,"json",o,{returnExtentOnly:!0,returnCountOnly:!0}).then((t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(l$1);if(e.hasOwnProperty("count"))throw new Error(l$1);return t}))}function a(t,r,o){return r$1(r.timeExtent)&&r.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):c(t,r,"json",o,{returnIdsOnly:!0,returnCountOnly:!0})}function c(n,u,l,d={},m={}){const p="string"==typeof n?j(n):n,a=u.geometry?[u.geometry]:[];return d.responseType="pbf"===l?"array-buffer":"json",L(a,null,d).then((o=>{const n=o&&o[0];r$1(n)&&((u=u.clone()).geometry=n);const i=t$1({...p.query,f:l,...m,...y(u,m)});return U(G(p.path,"queryTopFeatures"),{...d,query:{...i,...d.query}})}))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
async function s$2(s,p,u,a){const m=n$6(s),i={...a},{data:f}=await d(m,S$2.from(p),u,i);return x.fromJSON(f)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
async function s$1(s,e,p){const a=n$6(s);return (await m$1(a,S$2.from(e),{...p})).data.objectIds}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
async function m(m,s,n){const p$1=n$6(m),a=await p(p$1,S$2.from(s),{...n});return {count:a.data.count,extent:M.fromJSON(a.data.extent)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
async function s(s,e,p){const u=n$6(s);return (await a(u,S$2.from(e),{...p})).data.count}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let i=class extends y$1{constructor(...r){super(...r),this.requestOptions=null,this.url=null;}normalizeCtorArgs(r,s){return "string"!=typeof r?r:{url:r,...s}}get parsedUrl(){return this._parseUrl(this.url)}_parseUrl(r){return r?j(r):null}_encode(r,s,t){const o={};for(const e in r){if("declaredClass"===e)continue;const i=r[e];if(null!=i&&"function"!=typeof i)if(Array.isArray(i)){o[e]=[];for(let r=0;r<i.length;r++)o[e][r]=this._encode(i[r]);}else if("object"==typeof i)if(i.toJSON){const r=i.toJSON(t&&t[e]);o[e]=s?r:JSON.stringify(r);}else o[e]=s?i:JSON.stringify(i);else o[e]=i;}return o}};e([d$4({readOnly:!0})],i.prototype,"parsedUrl",null),e([d$4()],i.prototype,"requestOptions",void 0),e([d$4({type:String})],i.prototype,"url",void 0),i=e([n$7("esri.tasks.Task")],i);const l=i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let g=class extends l{constructor(t){super(t),this.dynamicDataSource=null,this.fieldsIndex=null,this.format="json",this.gdbVersion=null,this.infoFor3D=null,this.sourceSpatialReference=null;}execute(t,e){return this.executeJSON(t,e).then((r=>this.featureSetFromJSON(t,r,e)))}async executeJSON(t,e){const o={...this.requestOptions,...e},s=this._normalizeQuery(t),i=null!=t.outStatistics?.[0],u=a$4("featurelayer-pbf-statistics"),n=!i||u;let a;if("pbf"===this.format&&n)try{a=await n$3(this.url,s,o);}catch(m){if("query:parsing-pbf"!==m.name)throw m;this.format="json";}return "json"!==this.format&&n||(a=await a$5(this.url,s,o)),this._normalizeFields(a.fields),a}async featureSetFromJSON(t$1,e,r){if(!this._queryIs3DObjectFormat(t$1)||t(this.infoFor3D)||!e.features||!e.features.length)return x.fromJSON(e);const{meshFeatureSetFromJSON:s}=await y$2(import('./meshFeatureSet-7db42a23.js'),r);return s(t$1,this.infoFor3D,e)}executeForCount(t,e){const r={...this.requestOptions,...e},o=this._normalizeQuery(t);return n$8(this.url,o,r)}executeForExtent(t,e){const r={...this.requestOptions,...e},o=this._normalizeQuery(t);return m$2(this.url,o,r)}executeForIds(t,e){const r={...this.requestOptions,...e},o=this._normalizeQuery(t);return s$5(this.url,o,r)}executeRelationshipQuery(t,e){t=d$3.from(t);const r={...this.requestOptions,...e};return (this.gdbVersion||this.dynamicDataSource)&&((t=t.clone()).gdbVersion=t.gdbVersion||this.gdbVersion,t.dynamicDataSource=t.dynamicDataSource||this.dynamicDataSource),n(this.url,t,r)}executeRelationshipQueryForCount(t,e){t=d$3.from(t);const r={...this.requestOptions,...e};return (this.gdbVersion||this.dynamicDataSource)&&((t=t.clone()).gdbVersion=t.gdbVersion||this.gdbVersion,t.dynamicDataSource=t.dynamicDataSource||this.dynamicDataSource),u(this.url,t,r)}executeAttachmentQuery(t,e){const r={...this.requestOptions,...e};return a$1(this.url,t,r)}executeTopFeaturesQuery(t,e){const r={...this.requestOptions,...e};return s$2(this.parsedUrl,t,this.sourceSpatialReference,r)}executeForTopIds(t,e){const r={...this.requestOptions,...e};return s$1(this.parsedUrl,t,r)}executeForTopExtents(t,e){const r={...this.requestOptions,...e};return m(this.parsedUrl,t,r)}executeForTopCount(t,e){const r={...this.requestOptions,...e};return s(this.parsedUrl,t,r)}_normalizeQuery(t$1){let r=b.from(t$1);if(r.sourceSpatialReference=r.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(r=r===t$1?r.clone():r,r.gdbVersion=t$1.gdbVersion||this.gdbVersion,r.dynamicDataSource=t$1.dynamicDataSource?K.from(t$1.dynamicDataSource):this.dynamicDataSource),r$1(this.infoFor3D)&&this._queryIs3DObjectFormat(t$1)){r=r===t$1?r.clone():r,r.formatOf3DObjects=null;for(const t of this.infoFor3D.queryFormats){if("3D_glb"===t.id){r.formatOf3DObjects=t.id;break}"3D_gltf"!==t.id||r.formatOf3DObjects||(r.formatOf3DObjects=t.id);}if(!r.formatOf3DObjects)throw new s$6("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(t(r.outFields)||!r.outFields.includes("*")){r=r===t$1?r.clone():r,t(r.outFields)&&(r.outFields=[]);const{originX:e,originY:s,originZ:i,translationX:u,translationY:n,translationZ:a,scaleX:c,scaleY:p,scaleZ:m,rotationX:f,rotationY:l,rotationZ:h,rotationDeg:d}=this.infoFor3D.transformFieldRoles;r.outFields.push(e,s,i,u,n,a,c,p,m,f,l,h,d);}}return r}_normalizeFields(t){if(r$1(this.fieldsIndex)&&r$1(t))for(const e of t){const t=this.fieldsIndex.get(e.name);t&&Object.assign(e,t.toJSON());}}_queryIs3DObjectFormat(t){return r$1(this.infoFor3D)&&t.returnGeometry&&"xyFootprint"!==t.multipatchOption&&!t.outStatistics}};e([d$4({type:K})],g.prototype,"dynamicDataSource",void 0),e([d$4()],g.prototype,"fieldsIndex",void 0),e([d$4()],g.prototype,"format",void 0),e([d$4()],g.prototype,"gdbVersion",void 0),e([d$4()],g.prototype,"infoFor3D",void 0),e([d$4()],g.prototype,"sourceSpatialReference",void 0),g=e([n$7("esri.tasks.QueryTask")],g);const Q=g;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const I=new s$7({originalAndCurrentFeatures:"original-and-current-features",none:"none"});async function _(e){if("string"==typeof e){const t=nt(e);return t||{data:e}}return new Promise(((t,r)=>{const s=new FileReader;s.readAsDataURL(e),s.onload=()=>t(nt(s.result)),s.onerror=e=>r(e);}))}const O=new Set(["Feature Layer","Table"]);let S=class extends m$3{constructor(){super(...arguments),this.type="feature-layer",this.refresh=x$2((async()=>{await this.load();const e=this.sourceJSON.editingInfo?.lastEditDate;if(null==e)return {dataChanged:!0,updates:{}};try{await this._fetchService(null);}catch{return {dataChanged:!0,updates:{}}}const t=e!==this.sourceJSON.editingInfo?.lastEditDate;return {dataChanged:t,updates:t?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}}));}load(e){const t=r$1(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(this.layer.sourceJSON,t)),Promise.resolve(this)}get queryTask(){const{capabilities:{query:{supportsFormatPBF:e}},parsedUrl:t$1,dynamicDataSource:r,infoFor3D:s,gdbVersion:a,spatialReference:o,fieldsIndex:n}=this.layer,u=a$4("featurelayer-pbf")&&e&&t(s)?"pbf":"json";return new Q({url:t$1.path,format:u,fieldsIndex:n,infoFor3D:s,dynamicDataSource:r,gdbVersion:a,sourceSpatialReference:o})}async addAttachment(e,t){await this.load();const s=e.attributes[this.layer.objectIdField],a=this.layer.parsedUrl.path+"/"+s+"/addAttachment",i=this._getLayerRequestOptions(),o=this._getFormDataForAttachment(t,i.query);try{const e=await U(a,{body:o});return this._createFeatureEditResult(e.data.addAttachmentResult)}catch(n){throw this._createAttachmentErrorResult(s,n)}}async updateAttachment(e,t,s){await this.load();const a=e.attributes[this.layer.objectIdField],i=this.layer.parsedUrl.path+"/"+a+"/updateAttachment",o=this._getLayerRequestOptions({query:{attachmentId:t}}),n=this._getFormDataForAttachment(s,o.query);try{const e=await U(i,{body:n});return this._createFeatureEditResult(e.data.updateAttachmentResult)}catch(u){throw this._createAttachmentErrorResult(a,u)}}async applyEdits(e,t){await this.load();const s=e.addFeatures.map(this._serializeFeature,this),a=e.updateFeatures.map(this._serializeFeature,this),i=this._getFeatureIds(e.deleteFeatures,t?.globalIdUsed);i$3(s,a,this.layer.spatialReference);const o=[],n=[],u=[...e.deleteAttachments];for(const r of e.addAttachments)o.push(await this._serializeAttachment(r));for(const r of e.updateAttachments)n.push(await this._serializeAttachment(r));const d=o.length||n.length||u.length?{adds:o,updates:n,deletes:u}:null,l={gdbVersion:t?.gdbVersion||this.layer.gdbVersion,rollbackOnFailure:t?.rollbackOnFailureEnabled,useGlobalIds:t?.globalIdUsed,returnEditMoment:t?.returnEditMoment,usePreviousEditMoment:t?.usePreviousEditMoment,sessionId:t?.sessionId};t?.returnServiceEditsOption?(l.edits=JSON.stringify([{id:this.layer.layerId,adds:s,updates:a,deletes:i,attachments:d}]),l.returnServiceEditsOption=I.toJSON(t?.returnServiceEditsOption),l.returnServiceEditsInSourceSR=t?.returnServiceEditsInSourceSR):(l.adds=s.length?JSON.stringify(s):null,l.updates=a.length?JSON.stringify(a):null,l.deletes=i.length?t?.globalIdUsed?JSON.stringify(i):i.join(","):null,l.attachments=d&&JSON.stringify(d));const c=this._getLayerRequestOptions({method:"post",query:l}),h=t?.returnServiceEditsOption?this.layer.url:this.layer.parsedUrl.path,p=await U(h+"/applyEdits",c);return this._createEditsResult(p)}async deleteAttachments(e,t){await this.load();const s=e.attributes[this.layer.objectIdField],a=this.layer.parsedUrl.path+"/"+s+"/deleteAttachments";try{return (await U(a,this._getLayerRequestOptions({query:{attachmentIds:t.join(",")},method:"post"}))).data.deleteAttachmentResults.map(this._createFeatureEditResult)}catch(i){throw this._createAttachmentErrorResult(s,i)}}fetchRecomputedExtents(e={}){const t=e.signal;return this.load({signal:t}).then((async()=>{const t=this._getLayerRequestOptions({...e,query:{returnUpdates:!0}}),{layerId:a,url:i}=this.layer,{data:o}=await U(`${i}/${a}`,t),{id:n,extent:u,fullExtent:d,timeExtent:l}=o,c=u||d;return {id:n,fullExtent:c&&M.fromJSON(c),timeExtent:l&&y$3.fromJSON({start:l[0],end:l[1]})}}))}async queryAttachments(e,t={}){const{parsedUrl:s}=this.layer,a=s.path;await this.load();const i=this._getLayerRequestOptions(t);if(!this.layer.get("capabilities.operations.supportsQueryAttachments")){const{objectIds:t}=e,s=[];for(const e of t){const t=a+"/"+e+"/attachments";s.push(U(t,i));}return Promise.all(s).then((e=>t.map(((t,r)=>({parentObjectId:t,attachmentInfos:e[r].data.attachmentInfos}))))).then((e=>a$2(e,a)))}return this.queryTask.executeAttachmentQuery(e,i)}async queryFeatures(e,t){return await this.load(),this.queryTask.execute(e,{...t,query:this._createRequestQueryOptions(t)})}async queryFeaturesJSON(e,t){return await this.load(),this.queryTask.executeJSON(e,{...t,query:this._createRequestQueryOptions(t)})}async queryObjectIds(e,t){return await this.load(),this.queryTask.executeForIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryFeatureCount(e,t){return await this.load(),this.queryTask.executeForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryExtent(e,t){return await this.load(),this.queryTask.executeForExtent(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeatures(e,t){return await this.load(),this.queryTask.executeRelationshipQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeaturesCount(e,t){return await this.load(),this.queryTask.executeRelationshipQueryForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopFeatures(e,t){return await this.load(),this.queryTask.executeTopFeaturesQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopObjectIds(e,t){return await this.load(),this.queryTask.executeForTopIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopExtents(e,t){return await this.load(),this.queryTask.executeForTopExtents(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopCount(e,t){return await this.load(),this.queryTask.executeForTopCount(e,{...t,query:this._createRequestQueryOptions(t)})}_createRequestQueryOptions(e){const t={...this.layer.customParameters,token:this.layer.apiKey,...e?.query};return this.layer.datesInUnknownTimezone&&(t.timeReferenceUnknownClient=!0),t}async _fetchService(e,t){if(!e){const{data:s}=await U(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:a$4("featurelayer-advanced-symbols")?{returnAdvancedSymbols:!0}:{},signal:t}));e=s;}this.sourceJSON=this._patchServiceJSON(e);const s=e.type;if(!O.has(s))throw new s$6("feature-layer-source:unsupported-type",`Source type "${s}" is not supported`)}_patchServiceJSON(e){if("Table"!==e.type&&e.geometryType&&!e?.drawingInfo?.renderer&&!e.defaultSymbol){const t=u$2(e.geometryType).renderer;o$2("drawingInfo.renderer",t,e);}return "esriGeometryMultiPatch"===e.geometryType&&e.infoFor3D&&(e.geometryType="mesh"),e}_serializeFeature(e){const{geometry:t$1,attributes:r}=e;return t(t$1)?{attributes:r}:"mesh"===t$1.type||"extent"===t$1.type?null:{geometry:t$1.toJSON(),attributes:r}}async _serializeAttachment(e){const{feature:t,attachment:r}=e,{globalId:s,name:a,contentType:i,data:o,uploadId:n}=r,u={globalId:s,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null};if(t&&(u.parentGlobalId="attributes"in t?t.attributes&&t.attributes[this.layer.globalIdField]:t.globalId),n)u.uploadId=n;else if(o){const e=await _(o);u.contentType=e.mediaType,u.data=e.data,o instanceof File&&(u.name=o.name);}return a&&(u.name=a),i&&(u.contentType=i),u}_getFeatureIds(e,t){const r=e[0];return r?this._canUseGlobalIds(t,e)?this._getGlobalIdsFromFeatureIdentifier(e):"objectId"in r?this._getObjectIdsFromFeatureIdentifier(e):this._getIdsFromFeatures(e):[]}_getIdsFromFeatures(e){const t=this.layer.objectIdField;return e.map((e=>e.attributes&&e.attributes[t]))}_canUseGlobalIds(e,t){return e&&"globalId"in t[0]}_getObjectIdsFromFeatureIdentifier(e){return e.map((e=>e.objectId))}_getGlobalIdsFromFeatureIdentifier(e){return e.map((e=>e.globalId))}_createEditsResult(e){const t=e.data,{layerId:r}=this.layer,s=[];let a=null;if(Array.isArray(t))for(const n of t)s.push({id:n.id,editedFeatures:n.editedFeatures}),n.id===r&&(a={addResults:n.addResults,updateResults:n.updateResults,deleteResults:n.deleteResults,attachments:n.attachments,editMoment:n.editMoment});else a=t;const i=a?.attachments,o={addFeatureResults:a.addResults?a.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:a.updateResults?a.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:a.deleteResults?a.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:i&&i.addResults?i.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:i&&i.updateResults?i.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:i&&i.deleteResults?i.deleteResults.map(this._createFeatureEditResult,this):[]};if(a.editMoment&&(o.editMoment=a.editMoment),s.length>0){o.editedFeatureResults=[];for(const e of s){const{adds:t,updates:r,deletes:s,spatialReference:a}=e.editedFeatures,i=a?new k(a):null;o.editedFeatureResults.push({layerId:e.id,editedFeatures:{adds:t?.map((e=>this._createEditedFeature(e,i)))||[],updates:r?.map((e=>({original:this._createEditedFeature(e[0],i),current:this._createEditedFeature(e[1],i)})))||[],deletes:s?.map((e=>this._createEditedFeature(e,i)))||[],spatialReference:i}});}}return o}_createEditedFeature(e,r){return new g$1({attributes:e.attributes,geometry:d$5({...e.geometry,spatialReference:r})})}_createFeatureEditResult(e){const t=!0===e.success?null:e.error||{code:void 0,description:void 0};return {objectId:e.objectId,globalId:e.globalId,error:t?new s$6("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}_createAttachmentErrorResult(e,t){const r=t.details.messages&&t.details.messages[0]||t.message,s=t.details.httpStatus||t.details.messageCode;return {objectId:e,globalId:null,error:new s$6("feature-layer-source:attachment-failure",r,{code:s})}}_getFormDataForAttachment(e,t){const r=e instanceof FormData?e:e&&e.elements?new FormData(e):null;if(r)for(const s in t){const e=t[s];null!=e&&(r.set?r.set(s,e):r.append(s,e));}return r}_getLayerRequestOptions(e={}){const{parsedUrl:t,gdbVersion:r,dynamicDataSource:s}=this.layer;return {...e,query:{gdbVersion:r,layer:s?JSON.stringify({source:s}):void 0,...t.query,f:"json",...this._createRequestQueryOptions(e)},responseType:"json"}}};e([d$4()],S.prototype,"type",void 0),e([d$4({constructOnly:!0})],S.prototype,"layer",void 0),e([d$4({readOnly:!0})],S.prototype,"queryTask",null),S=e([n$7("esri.layers.graphics.sources.FeatureLayerSource")],S);const E=S;

export default E;
