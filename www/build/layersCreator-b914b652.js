import { j } from './Collection-a38e0489.js';
import { E } from './cast-3d5be210.js';
import { a } from './lazyLayerLoader-118316a9.js';
import b from './PortalItem-fa114dd2.js';
import { selectLayerClassPath as l$1 } from './portalLayers-4eaa1192.js';
import { t as t$1 } from './styleUtils-106413c0.js';
import './assets-99f5c3ee.js';
import './request-ac4d8bfb.js';
import './JSONSupport-dce2c67b.js';
import './Portal-5df9f5a7.js';
import './Promise-d2759b2e.js';
import './Point-edff2a11.js';
import './Extent-f27111e1.js';
import './layersLoader-ebf1caa7.js';
import './jsonContext-79064d29.js';
import './portalItemUtils-a7a5c16f.js';
import './projection-fbd5d346.js';
import './mathUtils-559a53d9.js';
import './unitUtils-a0a11e54.js';
import './mat4-d5df0e58.js';
import './Polyline-dcdb3782.js';
import './aaBoundingRect-5e1a4e52.js';
import './zscale-0befeff4.js';
import './asyncUtils-96c00c9e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function e(e){return t(e,"notes")}function r(e){return t(e,"route")}function t(e,r){return !(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)&&e.featureCollectionType===r}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
async function n(e,a,y){if(!a)return;const t=[];for(const r of a){const e=I(r,y);"GroupLayer"===r.layerType?t.push(G(e,r,y)):t.push(e);}const i=await E(t);for(const r of i)!r.value||y.filter&&!y.filter(r.value)||e.add(r.value);}const l={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"VoxelLayer",LineOfSightLayer:"LineOfSightLayer"},c={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},s={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",DefaultTileLayer:"TileLayer"},p={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",OGCFeatureLayer:"OGCFeatureLayer",SubtypeGroupLayer:"UnsupportedLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},S={ArcGISFeatureLayer:"FeatureLayer"},u={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};async function I(e,r){return d(await m(e,r),e,r)}async function d(e,r,a){const y=new e;return y.read(r,a.context),"group"===y.type&&T(r)&&await M(y,r,a.context),await t$1(y,a.context),y}async function m(e$1,r$1){const o=r$1.context,n=g(o);let l=e$1.layerType||e$1.type;!l&&r$1&&r$1.defaultLayerType&&(l=r$1.defaultLayerType);const c=n[l];let s=c?a[c]:a.UnknownLayer;if(f(e$1)){const r=o?.portal;if(e$1.itemId){const t=new b({id:e$1.itemId,portal:r});await t.load();const i=(await l$1(t)).className||"UnknownLayer";s=a[i];}}else "ArcGISFeatureLayer"===l?e(e$1)?s=a.MapNotesLayer:r(e$1)?s=a.RouteLayer:T(e$1)&&(s=a.GroupLayer):e$1.wmtsInfo&&e$1.wmtsInfo.url&&e$1.wmtsInfo.layerIdentifier?s=a.WMTSLayer:"WFS"===l&&"2.0.0"!==e$1.wfsInfo.version&&(s=a.UnsupportedLayer);return s()}function T(e){if("ArcGISFeatureLayer"!==e.layerType||f(e))return !1;return (e.featureCollection?.layers?.length??0)>1}function f(e){return "Feature Collection"===e.type}function g(e){let r;if("web-scene"===e.origin)switch(e.layerContainerType){case"basemap":r=s;break;case"ground":r=c;break;default:r=l;}else switch(e.layerContainerType){case"basemap":r=u;break;case"tables":r=S;break;default:r=p;}return r}async function G(r,a,y){const t=new j,i=n(t,Array.isArray(a.layers)?a.layers:[],y),L=await r;if(await i,"group"===L.type)return L.layers.addMany(t),L}async function M(e,r,y){const t=a.FeatureLayer,i=await t(),L=r.featureCollection,o=L.showLegend,n=L.layers.map(((a,t)=>{const L=new i;L.read(a,y);const n={...y,ignoreDefaults:!0};return L.read({id:`${e.id}-sublayer-${t}`,visibility:r.visibleLayers?.includes(t)??!0},n),null!=o&&L.read({showLegend:o},n),L}));e.layers.addMany(n);}

export { n as populateOperationalLayers };
