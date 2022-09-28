import { s } from './request-ac4d8bfb.js';
import { t as t$1, r } from './cast-3d5be210.js';
import { Z as Z$1 } from './unitUtils-a0a11e54.js';
import { e as l } from './Polyline-dcdb3782.js';
import { d } from './geometry-2f332a26.js';
import { L as L$1 } from './normalizeUtils-d37dc597.js';
import { h as o, f as k, n as c } from './Point-edff2a11.js';
import { e } from './centroid-a69e0a54.js';
import { G as G$1, L, C, _ as _$1, i as ie, f as fe, y as ye } from './featureConversionUtils-3f60eb15.js';
import { t } from './OptimizedFeature-a0dba562.js';
import { f, g } from './projectionSupport-d3b04744.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const j=new s({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),U=Object.freeze({}),M=new t,F=new t,G=new t,N={esriGeometryPoint:G$1,esriGeometryPolyline:L,esriGeometryPolygon:C,esriGeometryMultipoint:_$1};function O(e,r,i,o=e.hasZ,n=e.hasM){if(t$1(r))return null;const s=e.hasZ&&o,l=e.hasM&&n;if(i){const t=ie(G,r,e.hasZ,e.hasM,"esriGeometryPoint",i,o,n);return G$1(t,s,l)}return G$1(r,s,l)}function _(e$1,t$1,r){return "esriGeometryPolygon"===e$1.geometryType&&t$1&&(t$1.centroid||t$1.geometry)?(t$1.centroid||(t$1.centroid=e(new t,t$1.geometry,e$1.hasZ,e$1.hasM)),O(e$1,t$1.centroid,r)):null}function J(e,i,o,n,s,l,a=i,m=o){const c=i&&a,f=o&&m,g=r(n)?"coords"in n?n:n.geometry:null;if(t$1(g))return null;if(s){let t=fe(F,g,i,o,e,s,a,m);return l&&(t=ie(G,t,c,f,e,l)),N[e](t,c,f)}if(l){const t=ie(G,g,i,o,e,l,a,m);return N[e](t,c,f)}return ye(M,g,i,o,a,m),N[e](M,c,f)}async function P(e,t,r){const{outFields:i,orderByFields:o,groupByFieldsForStatistics:n,outStatistics:s}=e;if(i)for(let l=0;l<i.length;l++)i[l]=i[l].trim();if(o)for(let l=0;l<o.length;l++)o[l]=o[l].trim();if(n)for(let l=0;l<n.length;l++)n[l]=n[l].trim();if(s)for(let l=0;l<s.length;l++)s[l].onStatisticField&&(s[l].onStatisticField=s[l].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),v(e,t,r)}async function v(e,r,i){if(!e)return null;let{where:l$1}=e;if(e.where=l$1=l$1&&l$1.trim(),(!l$1||/^1 *= *1$/.test(l$1)||r&&r===l$1)&&(e.where=null),!e.geometry)return e;let a=await Z(e);if(e.distance=0,e.units=null,"esriSpatialRelEnvelopeIntersects"===e.spatialRel){const{spatialReference:t}=e.geometry;a=l(a),a.spatialReference=t;}e.geometry=a,await f(a.spatialReference,i);const m=(await L$1(d(a)))[0];if(t$1(m))throw U;const c=m.toJSON(),u=await g(c,c.spatialReference,i);if(!u)throw U;return u.spatialReference=i,e.geometry=u,e}async function Z(e){const{geometry:t,distance:r,units:o$1}=e;if(null==r||"vertexAttributes"in t)return t;const n=t.spatialReference,s=o$1?j.fromJSON(o$1):Z$1(n),c$1=n&&(o(n)||k(n))?t:await f(n,c).then((()=>g(t,c)));return (await b())(c$1.spatialReference,c$1,r,s)}async function b(){return (await import('./geometryEngineJSON-94026a46.js')).geodesicBuffer}function x(e){return e&&z in e?JSON.parse(JSON.stringify(e,B)):e}const z="_geVersion",B=(e,t)=>e!==z?t:void 0;

export { J, O, P, U, v, x };
