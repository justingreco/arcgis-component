import { a as s } from './cast-3d5be210.js';
import { a } from './lazyLayerLoader-118316a9.js';
import b from './PortalItem-fa114dd2.js';
import { f as f$1, I as I$1, m as m$1, n } from './layersLoader-ebf1caa7.js';
import { s as s$1 } from './portalItemUtils-a7a5c16f.js';
import './assets-99f5c3ee.js';
import './request-ac4d8bfb.js';
import './JSONSupport-dce2c67b.js';
import './Portal-5df9f5a7.js';
import './Promise-d2759b2e.js';
import './Point-edff2a11.js';
import './Extent-f27111e1.js';
import './jsonContext-79064d29.js';
import './styleUtils-106413c0.js';
import './asyncUtils-96c00c9e.js';
import './projection-fbd5d346.js';
import './mathUtils-559a53d9.js';
import './unitUtils-a0a11e54.js';
import './Collection-a38e0489.js';
import './mat4-d5df0e58.js';
import './Polyline-dcdb3782.js';
import './aaBoundingRect-5e1a4e52.js';
import './zscale-0befeff4.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function u(e){return !e.portalItem||e.portalItem instanceof b||(e={...e,portalItem:new b(e.portalItem)}),i(e.portalItem).then((r=>{const t={portalItem:e.portalItem,...r.properties};return new(0,r.constructor)(t)}))}function i(e){return e.load().then(l).then(y)}function l(r){switch(r.type){case"Map Service":return m(r);case"Feature Service":return p(r);case"Feature Collection":return L(r);case"Scene Service":return f(r);case"Image Service":return d(r);case"Stream Service":return N();case"Vector Tile Service":return S();case"KML":return I();case"WFS":return h();case"WMTS":return w();case"WMS":return g();case"Feed":return T();default:return Promise.reject(new s("portal:unknown-item-type","Unknown item type '${type}'",{type:r.type}))}}function y(e){return (0,a[e.className])().then((r=>({constructor:r,properties:e.properties})))}function m(e){return M(e).then((e=>e?{className:"TileLayer"}:{className:"MapImageLayer"}))}function p(e){return j(e).then((e=>{if("object"==typeof e){const r={};return null!=e.id&&(r.layerId=e.id),{className:"FeatureLayer",properties:r}}return {className:"GroupLayer"}}))}function f(e){return j(e).then((r=>{if("object"==typeof r){const t={};let a;if(null!=r.id?(t.layerId=r.id,a=`${e.url}/layers/${r.id}`):a=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0){const r={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};for(const t of Object.keys(r))if(e.typeKeywords.includes(t))return {className:r[t]}}return n(a).then((e=>{let r="SceneLayer";const a={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&a[e.layerType]&&(r=a[e.layerType]),{className:r,properties:t}}))}return !1===r?n(e.url).then((e=>"Voxel"===e?.layerType?{className:"VoxelLayer"}:{className:"GroupLayer"})):{className:"GroupLayer"}}))}async function L(e){await e.load();if(s$1(e,"Map Notes"))return {className:"MapNotesLayer"};if(s$1(e,"Route Layer"))return {className:"RouteLayer"};const r=await e.fetchData();return 1===I$1(r)?{className:"FeatureLayer"}:{className:"GroupLayer"}}async function d(e){await e.load();const r=e.typeKeywords?.map((e=>e.toLowerCase()))??[];if(r.includes("elevation 3d layer"))return {className:"ElevationLayer"};if(r.includes("tiled imagery"))return {className:"ImageryTileLayer"};const t=(await e.fetchData())?.layerType;if("ArcGISTiledImageServiceLayer"===t)return {className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===t)return {className:"ImageryLayer"};const a=(await n(e.url)).cacheType?.toLowerCase();return "map"===a?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}function N(){return {className:"StreamLayer"}}function S(){return {className:"VectorTileLayer"}}function I(){return {className:"KMLLayer"}}function h(){return {className:"WFSLayer"}}function g(){return {className:"WMSLayer"}}function w(){return {className:"WMTSLayer"}}function T(){return {className:"StreamLayer"}}function M(e){return n(e.url).then((e=>e.tileInfo))}function j(e){return !e.url||e.url.match(/\/\d+$/)?Promise.resolve({}):e.load().then((()=>e.fetchData())).then((async r=>{if("Feature Service"===e.type)return v(r=await f$1(r,e.url));return I$1(r)>0?v(r):n(e.url).then(v)}))}function v(e){return 1===I$1(e)&&{id:m$1(e)}}

export { u as fromItem, l as selectLayerClassPath };
