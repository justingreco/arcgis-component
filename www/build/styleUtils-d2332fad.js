import { U as U$1, F, O as Ot } from './request-ac4d8bfb.js';
import { c as a$1, $ as w$1, r as r$1, a as s } from './cast-3d5be210.js';
import { B, d as d$1 } from './Portal-5df9f5a7.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const r=()=>!!a$1("enable-feature:force-wosr"),a=()=>!!a$1("enable-feature:direct-3d-object-feature-layer-display");

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const i={};async function u(e,r){try{return {data:(await j(e,r)).data,baseUrl:Ot(e),styleUrl:e}}catch(t){return w$1(t),null}}function y(e,r,o){const s=r$1(r.portal)?r.portal:B.getDefault();let n;const a=`${s.url} - ${s.user&&s.user.username} - ${e}`;return i[a]||(i[a]=m(e,s,o).then((e=>(n=e,e.fetchData()))).then((r=>({data:r,baseUrl:n.itemUrl,styleName:e})))),i[a]}function m(e,t,o){return t.load(o).then((()=>{const r=new d$1({disableExtraQuery:!0,query:`owner:${w} AND type:${h} AND typekeywords:"${e}"`});return t.queryItems(r,o)})).then((({results:t})=>{let s$1=null;const n=e.toLowerCase();if(t&&Array.isArray(t))for(const e of t){if(e.typeKeywords.some((e=>e.toLowerCase()===n))&&e.type===h&&e.owner===w){s$1=e;break}}if(!s$1)throw new s("symbolstyleutils:style-not-found",`The style '${e}' could not be found`,{styleName:e});return s$1.load(o)}))}function c(e,t,o){return e.styleUrl?u(e.styleUrl,o):e.styleName?y(e.styleName,t,o):Promise.reject(new s("symbolstyleutils:style-url-and-name-missing","Either styleUrl or styleName is required to resolve a style"))}function p(e){return null===e||"CIMSymbolReference"===e.type?e:{type:"CIMSymbolReference",symbol:e}}function d(e,r$1){if("cimRef"===r$1)return e.cimRef;if(e.formatInfos&&!r())for(const t of e.formatInfos)if("gltf"===t.type)return t.href;return e.webRef}function b(e){for(const r of e.typeKeywords)if(/^Esri.*Style$/.test(r)&&"Esri Style"!==r)return r}function j(r,t){const o={responseType:"json",query:{f:"json"},...t};return U$1(F(r),o)}const w="esri_en",h="Style",U="https://cdn.arcgis.com/sharing/rest/content/items/220936cc6ed342c9937abd8f180e7d1e/resources/styles/cim/{SymbolName}.json?f=json";

export { U, a, c, d, j, p };
