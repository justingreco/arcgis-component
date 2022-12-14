import { a as s$1 } from './cast-3d5be210.js';
import { o as o$1, Z, r as r$1, i } from './Extent-f27111e1.js';
import { v as v$1, c as c$1, s } from './geometry-2f332a26.js';
import { I as I$1 } from './Point-edff2a11.js';
import { D } from './featureConversionUtils-3f60eb15.js';
import { t as t$2 } from './OptimizedFeature-a0dba562.js';
import { f } from './projectionSupport-d3b04744.js';
import { J } from './utils-208ed644.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function n$2(n){return "mesh"===n?o$1:Z(n)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function n$1(n,t){return n?t?4:3:t?3:2}function t$1(n,t,r,e){return o(n,t,r,e.coords[0],e.coords[1])}function r(t,r,e,c,u,f){const s=n$1(u,f),{coords:i,lengths:l}=c;if(!l)return !1;for(let n=0,d=0;n<l.length;n++,d+=s)if(!o(t,r,e,i[d],i[d+1]))return !1;return !0}function o(t,r,o,c,u){if(!t)return !1;const f=n$1(r,o),{coords:s,lengths:i}=t;let l=!1,d=0;for(const n of i)l=e$1(l,s,f,d,n,c,u),d+=n*f;return l}function e$1(n,t,r,o,e,c,u){let f=n,s=o;for(let i=o,l=o+e*r;i<l;i+=r){s=i+r,s===l&&(s=o);const n=t[i],e=t[i+1],d=t[s],g=t[s+1];(e<u&&g>=u||g<u&&e>=u)&&n+(u-e)/(g-e)*(d-n)<c&&(f=!f);}return f}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const c="feature-store:unsupported-query",R={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},S={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function G(e){return !0===S.spatialRelationship[e]}function g(e){return !0===S.queryGeometry[v$1(e)]}function j(e){return !0===S.layerGeometry[e]}function h(){return import('./geometryEngineJSON-94026a46.js')}function v(e,n,l,y,c){if(c$1(n)&&"esriGeometryPoint"===l&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){const e=D(new t$2,n,!1,!1);return Promise.resolve((r=>t$1(e,!1,!1,r)))}if(c$1(n)&&"esriGeometryMultipoint"===l){const r$1=D(new t$2,n,!1,!1);if("esriSpatialRelContains"===e)return Promise.resolve((e=>r(r$1,!1,!1,e,y,c)))}if(s(n)&&"esriGeometryPoint"===l&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return Promise.resolve((e=>r$1(n,J(l,y,c,e))));if(s(n)&&"esriGeometryMultipoint"===l&&"esriSpatialRelContains"===e)return Promise.resolve((e=>i(n,J(l,y,c,e))));if(s(n)&&"esriSpatialRelIntersects"===e){const e=n$2(l);return Promise.resolve((r=>e(n,J(l,y,c,r))))}return h().then((r=>{const t=r[R[e]].bind(null,n.spatialReference,n);return e=>t(J(l,y,c,e))}))}async function P(r,t,i){const{spatialRel:s,geometry:o}=r;if(o){if(!G(s))throw new s$1(c,"Unsupported query spatial relationship",{query:r});if(I$1(o.spatialReference)&&I$1(i)){if(!g(o))throw new s$1(c,"Unsupported query geometry type",{query:r});if(!j(t))throw new s$1(c,"Unsupported layer geometry type",{query:r});if(r.outSR)return f(r.geometry&&r.geometry.spatialReference,r.outSR)}}}function I(e){if(s(e))return !0;if(c$1(e)){for(const r of e.rings){if(5!==r.length)return !1;if(r[0][0]!==r[1][0]||r[0][0]!==r[4][0]||r[2][0]!==r[3][0]||r[0][1]!==r[3][1]||r[0][1]!==r[4][1]||r[1][1]!==r[2][1])return !1}return !0}return !1}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function t(t,n){if(!t)return null;const e=n.featureAdapter,{startTimeField:u,endTimeField:l}=t;let r=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;if(u&&l)n.forEach((t=>{const n=e.getAttribute(t,u),o=e.getAttribute(t,l);null==n||isNaN(n)||(r=Math.min(r,n)),null==o||isNaN(o)||(i=Math.max(i,o));}));else {const t=u||l;n.forEach((n=>{const u=e.getAttribute(n,t);null==u||isNaN(u)||(r=Math.min(r,u),i=Math.max(i,u));}));}return {start:r,end:i}}function n(t,n,r){if(!n||!t)return null;const{startTimeField:i,endTimeField:o}=t;if(!i&&!o)return null;const{start:s,end:a}=n;return null===s&&null===a?null:void 0===s&&void 0===a?l():i&&o?e(r,i,o,s,a):u(r,i||o,s,a)}function e(t,n,e,u,l){return null!=u&&null!=l?r=>{const i=t.getAttribute(r,n),o=t.getAttribute(r,e);return (null==i||i<=l)&&(null==o||o>=u)}:null!=u?n=>{const l=t.getAttribute(n,e);return null==l||l>=u}:null!=l?e=>{const u=t.getAttribute(e,n);return null==u||u<=l}:void 0}function u(t,n,e,u){return null!=e&&null!=u&&e===u?u=>t.getAttribute(u,n)===e:null!=e&&null!=u?l=>{const r=t.getAttribute(l,n);return r>=e&&r<=u}:null!=e?u=>t.getAttribute(u,n)>=e:null!=u?e=>t.getAttribute(e,n)<=u:void 0}function l(){return ()=>!1}

export { I, P, n, t, v };
