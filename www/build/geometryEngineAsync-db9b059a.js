import { d as d$1 } from './geometry-2f332a26.js';
import { u as u$1 } from './workers-c7a27acb.js';
import { j as j$1 } from './Point-edff2a11.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function e(n){return Array.isArray(n)?n[0]?.spatialReference:n?.spatialReference}function i(n){return n?Array.isArray(n)?n.map(i):n.toJSON?n.toJSON():n:n}function o(n){return Array.isArray(n)?n.map((n=>d$1(n))):d$1(n)}function a(n,t){let r;return Array.isArray(n)?r=n:(r=[],r.push(n),null!=t&&r.push(t)),r}let c;async function u(){return c||(c=u$1("geometryEngineWorker",{strategy:"distributed"})),c}async function s(n,t){return (await u()).invoke("executeGEOperation",{operation:n,parameters:i(t)})}function f(n){return s("extendedSpatialReferenceInfo",[n])}async function l(n,t){return o(await s("clip",[e(n),n,t]))}async function y(n,t){return o(await s("cut",[e(n),n,t]))}function p(n,t){return s("contains",[e(n),n,t])}function w(n,t){return s("crosses",[e(n),n,t])}function m(n,t,r){return s("distance",[e(n),n,t,r])}function d(n,t){return s("equals",[e(n),n,t])}function g(n,t){return s("intersects",[e(n),n,t])}function A(n,t){return s("touches",[e(n),n,t])}function x(n,t){return s("within",[e(n),n,t])}function S(n,t){return s("disjoint",[e(n),n,t])}function O(n,t){return s("overlaps",[e(n),n,t])}function h(n,t,r){return s("relate",[e(n),n,t,r])}function J(n){return s("isSimple",[e(n),n])}async function N(n){return o(await s("simplify",[e(n),n]))}async function R(n,t=!1){return o(await s("convexHull",[e(n),n,t]))}async function E(n,t){return o(await s("difference",[e(n),n,t]))}async function j(n,t){return o(await s("symmetricDifference",[e(n),n,t]))}async function k(n,t){return o(await s("intersect",[e(n),n,t]))}async function I(n,t=null){const r=a(n,t);return o(await s("union",[e(r),r]))}async function v(n,t,r,i,a,c){return o(await s("offset",[e(n),n,t,r,i,a,c]))}async function V(n,t,r,i=!1){const a=[e(n),n,t,r,i];return o(await s("buffer",a))}async function b(n,t,r,i,a,c){const u=[e(n),n,t,r,i,a,c];return o(await s("geodesicBuffer",u))}async function z(n,r,i=!0){const o=await s("nearestCoordinate",[e(n),n,r,i]);return {...o,coordinate:j$1.fromJSON(o.coordinate)}}async function D(n,r){const i=await s("nearestVertex",[e(n),n,r]);return {...i,coordinate:j$1.fromJSON(i.coordinate)}}async function H(n,r,i,o){return (await s("nearestVertices",[e(n),n,r,i,o])).map((n=>({...n,coordinate:j$1.fromJSON(n.coordinate)})))}function L(n){return "xmin"in n?n.center:"x"in n?n:n.extent.center}async function q(n,t,r){if(null==n)throw new Error("Illegal Argument Exception");const e=n.spatialReference;r=r??L(n);const i=n.constructor.fromJSON(await s("rotate",[e,n,t,r]));return i.spatialReference=e,i}async function B(n,t){if(null==n)throw new Error("Illegal Argument Exception");const r=n.spatialReference;t=t??L(n);const e=n.constructor.fromJSON(await s("flipHorizontal",[r,n,t]));return e.spatialReference=r,e}async function C(n,t){if(null==n)throw new Error("Illegal Argument Exception");const r=n.spatialReference;t=t??L(n);const e=n.constructor.fromJSON(await s("flipVertical",[r,n,t]));return e.spatialReference=r,e}async function G(n,t,r,i){return o(await s("generalize",[e(n),n,t,r,i]))}async function P(n,t,r){return o(await s("densify",[e(n),n,t,r]))}async function U(n,t,r,i=0){return o(await s("geodesicDensify",[e(n),n,t,r,i]))}function W(n,t){return s("planarArea",[e(n),n,t])}function F(n,t){return s("planarLength",[e(n),n,t])}function K(n,t,r){return s("geodesicArea",[e(n),n,t,r])}function M(n,t,r){return s("geodesicLength",[e(n),n,t,r])}

export { A, E, F, G, I, J, K, M, N, O, P, S, U, V, W, b, d, g, h, j, k, l, m, p, q, v, w, x, y };
