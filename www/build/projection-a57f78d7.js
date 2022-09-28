import { s, t } from './cast-3d5be210.js';
import { j as j$1, z, a, o as o$1 } from './mat3-eb8de168.js';
import { e as e$1 } from './quatf64-06b7eadd.js';
import { e } from './mat4f64-ef2c1a38.js';
import { O as O$2, z as z$1, n } from './mathUtils-559a53d9.js';
import { U as Un, q as qn } from './projection-fbd5d346.js';
import { O as O$1 } from './unitUtils-a0a11e54.js';
import { u, P, c as s$1, l as c } from './Point-edff2a11.js';
import { i, T } from './BufferView-a9ba6e5d.js';
import { t as t$1, r, o } from './vec33-241a09d2.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const g=s.getLogger("esri.geometry.support.meshUtils.normalProjection");function j(r,e,o,t,n){return S(t)?(B(Y.TO_PCPF,i.fromTypedArray(r),T.fromTypedArray(e),T.fromTypedArray(o),t,i.fromTypedArray(n)),n):(g.error("Cannot convert spatial reference to PCPF"),n)}function h(r,e,o,t,n){return S(t)?(B(Y.FROM_PCPF,i.fromTypedArray(r),T.fromTypedArray(e),T.fromTypedArray(o),t,i.fromTypedArray(n)),n):(g.error("Cannot convert to spatial reference from PCPF"),n)}function M(r,e,o){return Un(r,e,0,o,O$1(e),0,r.length/3),o}function O(r,e,o){return Un(r,O$1(o),0,e,o,0,r.length/3),e}function R(r,o,t$2){if(t(r))return o;const n=T.fromTypedArray(r),f=T.fromTypedArray(o);return t$1(f,n,t$2),o}function v(r$1,n,f){if(t(r$1))return n;j$1(x,f);const a=i.fromTypedArray(r$1),c=i.fromTypedArray(n);return r(c,a,x),z(x)||o(c,c),n}function V(r$1,n,f){if(t(r$1))return n;j$1(x,f);const a=i.fromTypedArray(r$1,4*Float32Array.BYTES_PER_ELEMENT),c=i.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT);if(r(c,a,x),z(x)||o(c,c),r$1!==n)for(let e=3;e<r$1.length;e+=4)n[e]=r$1[e];return n}function k(r,e,o,t,n){if(!S(t))return g.error("Cannot convert spatial reference to PCPF"),n;B(Y.TO_PCPF,i.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),T.fromTypedArray(e),T.fromTypedArray(o),t,i.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT));for(let f=3;f<r.length;f+=4)n[f]=r[f];return n}function L(r,e,o,t,n){if(!S(t))return g.error("Cannot convert to spatial reference from PCPF"),n;B(Y.FROM_PCPF,i.fromTypedArray(r,16),T.fromTypedArray(e),T.fromTypedArray(o),t,i.fromTypedArray(n,16));for(let f=3;f<r.length;f+=4)n[f]=r[f];return n}function B(r,e,o,t,a$1,c$1){if(!e)return;const i=o.count,y=O$1(a$1);if(b(a$1))for(let s=0;s<i;s++)t.getVec(s,U),e.getVec(s,w),qn(y,U,W,y),a(x,W),r===Y.FROM_PCPF&&o$1(x,x),O$2(w,w,x),c$1.setVec(s,w);else for(let u=0;u<i;u++){t.getVec(u,U),e.getVec(u,w),qn(y,U,W,y),a(x,W);const a$1=c(o.get(u,1));let i=Math.cos(a$1);r===Y.TO_PCPF&&(i=1/i),x[0]*=i,x[1]*=i,x[2]*=i,x[3]*=i,x[4]*=i,x[5]*=i,r===Y.FROM_PCPF&&o$1(x,x),O$2(w,w,x),z$1(w,w),c$1.setVec(u,w);}return c$1}function S(r){return b(r)||N(r)}function b(r){return r.isWGS84||u(r)||P(r)||s$1(r)}function N(r){return r.isWebMercator}var Y;!function(r){r[r.TO_PCPF=0]="TO_PCPF",r[r.FROM_PCPF=1]="FROM_PCPF";}(Y||(Y={}));const U=n(),w=n(),W=e(),x=e$1();

export { L, M, O, R, V, h, j, k, v };
