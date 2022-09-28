import { U, G, j } from './request-ac4d8bfb.js';
import { r } from './cast-3d5be210.js';
import { v } from './geometry-2f332a26.js';
import { L } from './normalizeUtils-d37dc597.js';
import { t as t$1 } from './pbfQueryUtils-266d53dd.js';
import { r as r$1 } from './queryZScale-127601ac.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function t(n){const o={};for(const e in n){if("declaredClass"===e)continue;const r=n[e];if(null!=r&&"function"!=typeof r)if(Array.isArray(r)){o[e]=[];for(let n=0;n<r.length;n++)o[e][n]=t(r[n]);}else "object"==typeof r?r.toJSON&&(o[e]=JSON.stringify(r)):o[e]=r;}return o}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const l="Layer does not support extent calculation.";function m(e,t){if(t&&"extent"===e.type)return `${e.xmin},${e.ymin},${e.xmax},${e.ymax}`;if(t&&"point"===e.type)return `${e.x},${e.y}`;const r=e.toJSON();return delete r.spatialReference,JSON.stringify(r)}function y(e,r$1){const n=e.geometry,o=e.toJSON();delete o.compactGeometryEnabled,delete o.defaultSpatialReferenceEnabled;const a=o;let s,u,l;if(r(n)&&(u=n.spatialReference,l=n.spatialReference.wkid||JSON.stringify(n.spatialReference),a.geometryType=v(n),a.geometry=m(n,e.compactGeometryEnabled),a.inSR=l),o.groupByFieldsForStatistics&&(a.groupByFieldsForStatistics=o.groupByFieldsForStatistics.join(",")),o.objectIds&&(a.objectIds=o.objectIds.join(",")),o.orderByFields&&(a.orderByFields=o.orderByFields.join(",")),!o.outFields||!o.returnDistinctValues&&(r$1?.returnCountOnly||r$1?.returnExtentOnly||r$1?.returnIdsOnly)?delete a.outFields:o.outFields.includes("*")?a.outFields="*":a.outFields=o.outFields.join(","),o.outSR?(a.outSR=o.outSR.wkid||JSON.stringify(o.outSR),s=e.outSpatialReference):n&&(o.returnGeometry||o.returnCentroid)&&(a.outSR=a.inSR,s=u),o.returnGeometry&&delete o.returnGeometry,o.outStatistics&&(a.outStatistics=JSON.stringify(o.outStatistics)),o.pixelSize&&(a.pixelSize=JSON.stringify(o.pixelSize)),o.quantizationParameters&&(e.defaultSpatialReferenceEnabled&&r(u)&&r(e.quantizationParameters)&&r(e.quantizationParameters.extent)&&u.equals(e.quantizationParameters.extent.spatialReference)&&delete o.quantizationParameters.extent.spatialReference,a.quantizationParameters=JSON.stringify(o.quantizationParameters)),o.parameterValues&&(a.parameterValues=JSON.stringify(o.parameterValues)),o.rangeValues&&(a.rangeValues=JSON.stringify(o.rangeValues)),o.dynamicDataSource&&(a.layer=JSON.stringify({source:o.dynamicDataSource}),delete o.dynamicDataSource),o.timeExtent){const e=o.timeExtent,{start:t,end:r}=e;null==t&&null==r||(a.time=t===r?t:`${null==t?"null":t},${null==r?"null":r}`),delete o.timeExtent;}return e.defaultSpatialReferenceEnabled&&r(u)&&r(s)&&u.equals(s)&&(a.defaultSR=a.inSR,delete a.inSR,delete a.outSR),a}async function c(e,r$2,n,i){const o=r(r$2.timeExtent)&&r$2.timeExtent.isEmpty?{data:{features:[]}}:await E(e,r$2,"json",i);return r$1(r$2,n,o.data),o}async function d(e,r$1,n,i){if(r(r$1.timeExtent)&&r$1.timeExtent.isEmpty)return {data:n.createFeatureResult()};const o=await f(e,r$1,i),a=o;return a.data=t$1(o.data,n),a}function f(e,t,r){return E(e,t,"pbf",r)}function p(e,r$1,n){return r(r$1.timeExtent)&&r$1.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):E(e,r$1,"json",n,{returnIdsOnly:!0})}function S(e,r$1,n){return r(r$1.timeExtent)&&r$1.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):E(e,r$1,"json",n,{returnIdsOnly:!0,returnCountOnly:!0})}function x(e,r$1,n){return r(r$1.timeExtent)&&r$1.timeExtent.isEmpty?Promise.resolve({data:{count:0,extent:null}}):E(e,r$1,"json",n,{returnExtentOnly:!0,returnCountOnly:!0}).then((e=>{const t=e.data;if(t.hasOwnProperty("extent"))return e;if(t.features)throw new Error(l);if(t.hasOwnProperty("count"))throw new Error(l);return e}))}function E(i,s,u,l={},m={}){const c="string"==typeof i?j(i):i,d=s.geometry?[s.geometry]:[];return l.responseType="pbf"===u?"array-buffer":"json",L(d,null,l).then((n=>{const i=n&&n[0];r(i)&&((s=s.clone()).geometry=i);const o=t({...c.query,f:u,...m,...y(s,m)});return U(G(c.path,"query"),{...l,query:{...o,...l.query}})}))}

const query = /*#__PURE__*/Object.freeze({
	__proto__: null,
	encodeGeometry: m,
	executeQuery: c,
	executeQueryForCount: S,
	executeQueryForExtent: x,
	executeQueryForIds: p,
	executeQueryPBF: d,
	executeQueryPBFBuffer: f,
	queryToQueryStringParameters: y,
	runQuery: E
});

export { E, S, c, d, f, p, query as q, t, x };
