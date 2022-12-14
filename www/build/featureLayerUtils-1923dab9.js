import { s, a as s$1, b2 as s$2, E as E$1, t, r, C as x$1 } from './cast-3d5be210.js';
import { i as i$1 } from './originUtils-184f7769.js';
import { K as Ke } from './FeatureLayer-6922c890.js';
import { fetchFeatureService as b } from './arcgisLayers-b0580ac7.js';
import { m } from './arcgisLayerUrl-a268a370.js';
import { a, l } from './layerUtils-160a1a44.js';
import { B as B$1 } from './Portal-5df9f5a7.js';
import b$1 from './PortalItem-fa114dd2.js';
import { o } from './jsonContext-79064d29.js';
import { i, f, a as a$1, c } from './portalItemUtils-a7a5c16f.js';
import './multiOriginJSONSupportUtils-917e4f3f.js';
import './PopupTemplate-b459951f.js';
import './Collection-a38e0489.js';
import './JSONSupport-dce2c67b.js';
import './Point-edff2a11.js';
import './fieldUtils-240a3b99.js';
import './geometry-2f332a26.js';
import './Extent-f27111e1.js';
import './Polyline-dcdb3782.js';
import './request-ac4d8bfb.js';
import './enumeration-6695a859.js';
import './number-c5a37d3e.js';
import './Promise-d2759b2e.js';
import './ActionToggle-a5849e6f.js';
import './Identifiable-d9658370.js';
import './UniqueValueRenderer-bb66af10.js';
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
import './ColorStop-64c57e35.js';
import './diffUtils-6436a697.js';
import './colorRamps-e3d9340f.js';
import './sizeVariableUtils-5330814d.js';
import './Graphic-93f45ded.js';
import './compilerUtils-d149ad5f.js';
import './commonProperties-fca3036e.js';
import './TimeExtent-66b53603.js';
import './unitUtils-a0a11e54.js';
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
import './Field-2973a5cf.js';
import './fieldType-eb0b42e4.js';
import './HeightModelInfo-12951268.js';
import './Layer-569a1fc8.js';
import './HandleOwner-fe336959.js';
import './reactiveUtils-bd6fe823.js';
import './workers-c7a27acb.js';
import './assets-99f5c3ee.js';
import './intl-54ccdc89.js';
import './messages-5e9a4a9e.js';
import './queryZScale-127601ac.js';
import './zscale-0befeff4.js';
import './FeatureSet-1b85367a.js';
import './APIKeyMixin-04df9c0f.js';
import './ArcGISService-848d76dd.js';
import './BlendLayer-7884099a.js';
import './jsonUtils-f3f35e7f.js';
import './mat4-d5df0e58.js';
import './_commonjsHelpers-8dd5c177.js';
import './CustomParametersMixin-f702935f.js';
import './labelingInfo-6e0c44d1.js';
import './Query-1f6c7e43.js';
import './LabelClass-936eaa93.js';
import './labelUtils-824fc88a.js';
import './defaultsJSON-5fb6161d.js';
import './OperationalLayer-e04486e0.js';
import './OrderedLayer-d02e1d58.js';
import './PortalLayer-e61e1a42.js';
import './asyncUtils-96c00c9e.js';
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
import './TopFeaturesQuery-babc7c57.js';
import './popupUtils-883a107f.js';
import './lazyLayerLoader-118316a9.js';
import './projection-fbd5d346.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const I=s.getLogger("esri.layers.FeatureLayer"),S="Feature Service";function g(e,t){return `Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${t}`}function j(e,a){if(a.type!==S)throw new s$1("feature-layer:portal-item-wrong-type",g(e,`should have portal item of type "${S}"`))}async function L(e){if(await e.load(),a(e))throw new s$1("feature-layer:save",g(e,"using an in-memory source cannot be saved to a portal item"))}function P(e,a){let r=e.messages.filter((({type:e})=>"error"===e)).map((({name:e,message:a,details:r})=>new s$1(e,a,r)));if(a?.ignoreUnsupported&&(r=r.filter((({name:e})=>"layer:unsupported"!==e&&"symbol:unsupported"!==e&&"symbol-layer:unsupported"!==e&&"property:unsupported"!==e&&"url:unsupported"!==e))),r.length>0)throw new s$1("feature-layer:save","Failed to save feature layer due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:r})}async function J(e,t,a){"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const r=e.write({},t);return P(t,a),r}function N(e){const{layer:t,layerJSON:a}=e;return t.isTable?{layers:[],tables:[a]}:{layers:[a],tables:[]}}function O(e){i(e,f.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,a)=>a.indexOf(e)===t)));}function E(e){const a=e.portalItem;if(!a)throw I.error("save: requires the portalItem property to be set"),new s$1("feature-layer:portal-item-not-set",g(e,"requires the portalItem property to be set"));if(!a.loaded)throw new s$1("feature-layer:portal-item-not-loaded",g(e,"cannot be saved to a portal item that does not exist or is inaccessible"));j(e,a);}async function T(e,t){return /\/\d+\/?$/.test(e.url)?N(t[0]):$(e,t)}async function $(e,t){const{layer:{url:a,customParameters:r,apiKey:o}}=t[0];let s=await e.fetchData("json");s&&null!=s.layers&&null!=s.tables||(s=await x(s,{url:a,customParameters:r,apiKey:o},t.map((e=>e.layer.layerId))));for(const l of t)K(l.layer,l.layerJSON,s);return s}async function x(e,t,a){var r,o;e||(e={}),(r=e).layers||(r.layers=[]),(o=e).tables||(o.tables=[]);const{url:s,customParameters:l,apiKey:i}=t,{serviceJSON:n,layersJSON:p}=await b(s,{customParameters:l,apiKey:i}),c=A(e.layers,n.layers,a),y=A(e.tables,n.tables,a);e.layers=c.itemResources,e.tables=y.itemResources;const d=[...c.added,...y.added],m=p?[...p.layers,...p.tables]:[];return await U(e,d,s,m),e}function A(t,a,r){const o=s$2(t,a,((e,t)=>e.id===t.id));t=t.filter((e=>!o.removed.some((t=>t.id===e.id))));const s=o.added.map((({id:e})=>({id:e})));return s.forEach((({id:e})=>{t.push({id:e});})),{itemResources:t,added:s.filter((({id:e})=>!r.includes(e)))}}async function U(e,t$1,a,o){const s=t$1.map((({id:e})=>new Ke({url:a,layerId:e,sourceJSON:o.find((({id:t})=>t===e))})));await E$1(s.map((e=>e.load()))),s.forEach((t$1=>{const{layerId:a,loaded:o,defaultPopupTemplate:s}=t$1;if(!o||t(s))return;K(t$1,{id:a,popupInfo:s.toJSON()},e);}));}function K(e,t,a){e.isTable?F(a.tables,t):F(a.layers,t);}function F(e,t){const a=e.findIndex((({id:e})=>e===t.id));-1===a?e.push(t):e[a]=t;}function R(e){const{portalItem:t}=e;return l(e)&&!e.dynamicDataSource&&!!t?.loaded&&t.type===S}async function D(e){if(!e?.length)throw new s$1("feature-layer-utils-saveall:missing-parameters","'layers' array should contain at least one feature layer");await Promise.all(e.map((e=>e.load())));for(const o of e)if(!R(o))throw new s$1("feature-layer-utils-saveall:invalid-parameters",`'layers' array should only contain layers or tables in a feature service loaded from 'Feature Service' item. ${g(o,"does not conform")}`,{layer:o});const a=e.map((e=>e.portalItem.id));if(new Set(a).size>1)throw new s$1("feature-layer-utils-saveall:invalid-parameters","All layers in the 'layers' array should be loaded from the same portal item");const r=e.map((e=>e.layerId));if(new Set(r).size!==r.length)throw new s$1("feature-layer-utils-saveall:invalid-parameters","'layers' array should contain only one instance each of layer or table in a feature service")}function _(e,t){var a,r;let o=b$1.from(t);return o.id&&(o=o.clone(),o.id=null),(a=o).type??(a.type=S),(r=o).portal??(r.portal=B$1.getDefault()),j(e,o),o}async function q(e,t){const{url:a,layerId:r$1,title:s,fullExtent:l,isTable:i$1}=e,n=m(a),u=r(n)&&"FeatureServer"===n.serverType;t.url=u?a:`${a}/${r$1}`,t.title||(t.title=s),t.extent=null,!i$1&&r(l)&&(t.extent=await a$1(l)),c(t,f.METADATA),c(t,f.MULTI_LAYER),i(t,f.SINGLE_LAYER),i$1&&i(t,f.TABLE),O(t);}async function z(e,t,a){const r=e.portal;await r._signIn(),await r.user.addItem({item:e,data:t,folder:a?.folder});}const C=x$1(M);async function M(e,t){await L(e),E(e);const a=e.portalItem,r=o(a),o$1=await J(e,r,t),s=await T(a,[{layer:e,layerJSON:o$1}]);return O(a),await a.update({data:s}),i$1(r),a}const Y=x$1((async(e,t)=>{await D(e);const a=e[0].portalItem,r=o(a),o$1=await Promise.all(e.map((e=>J(e,r,t)))),s=await T(a,e.map(((e,t)=>({layer:e,layerJSON:o$1[t]}))));return O(a),await a.update({data:s}),await Promise.all(e.slice(1).map((e=>e.portalItem.reload()))),i$1(r),a.clone()})),B=x$1(G);async function G(e,t,a){await L(e);const r=_(e,t),o$1=o(r),s=N({layer:e,layerJSON:await J(e,o$1,a)});return await q(e,r),await z(r,s,a),e.portalItem=r,i$1(o$1),r}

export { C as save, Y as saveAll, B as saveAs };
