import { r as r$3, e as e$3, d as d$1, n as n$1, t as t$2 } from './cast-3d5be210.js';
import { O as O$1, z as z$1, W, N as N$1 } from './unitUtils-a0a11e54.js';
import { b as e, e as e$4 } from './quatf64-06b7eadd.js';
import { q as q$2, f, c, h as h$1, u, C as C$1, B as B$2, i } from './mat4-d5df0e58.js';
import { e as e$1, o } from './mat4f64-ef2c1a38.js';
import { j as j$2 } from './mat3-eb8de168.js';
import { q as qn, U as Un } from './projection-fbd5d346.js';
import { l as l$1 } from './JSONSupport-dce2c67b.js';
import { b as r$1, _ as _$1, z, aj as k$2, M as M$1, m as m$1, n, r as r$2, L as L$2, F, g as t$1 } from './mathUtils-559a53d9.js';
import { j as j$1 } from './Point-edff2a11.js';
import { v as v$1, y as y$1, x as x$2 } from './quat-43e08490.js';
import { T as T$1, i as i$1 } from './BufferView-a9ba6e5d.js';
import { t, e as e$2, r as r$4 } from './vec33-241a09d2.js';
import { R, v as v$2, V as V$1, O as O$2, h as h$2, L as L$3, M as M$2, j as j$3, k as k$3 } from './projection-a57f78d7.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function a(n=U$1){return [n[0],n[1],n[2],n[3]]}function m(n,r,t,u){return j(n,r,t,u,w)}function p(n,r){return j(n[0],n[1],n[2],r,w)}function h(n,r=a()){return j(n[0],n[1],n[2],n[3],r)}function j(n,r,t,u,o=a()){return o[0]=n,o[1]=r,o[2]=t,o[3]=u,o}function k$1(n,r,t=a()){return r$1(l(t),n),t[3]=r,t}function q$1(n,r,t=a()){return _$1(t,n,r),z(t,t),t[3]=-k$2(n,r),t}function g(r,c,f=a()){return v$1(b$1,l(r),x$1(r)),v$1(d,l(c),x$1(c)),y$1(b$1,d,b$1),y(f,m$1(x$2(l(f),b$1)))}function l(n){return n}function v(n){return n[3]}function x$1(n){return M$1(n[3])}function y(n,r){return n[3]=r,n}const U$1=[0,0,1,0],b$1=e(),d=e(),w=a();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var T;let B$1=T=class extends l$1{constructor(r){super(r),this.origin=n(),this.translation=n(),this.rotation=a(),this.scale=r$2(1,1,1),this.geographic=!0;}get localMatrix(){const r=e$1();return q$2(r,this.scale),f(r,r,x$1(this.rotation),l(this.rotation)),c(r,r,this.translation),r}get localMatrixInverse(){return h$1(e$1(),this.localMatrix)}applyLocal(r,o){return L$2(o,r,this.localMatrix)}applyLocalInverse(r,o){return L$2(o,r,this.localMatrixInverse)}project(r,o$1){const t$1=new Float64Array(r.length),s=T$1.fromTypedArray(t$1),e=T$1.fromTypedArray(r);if(this.geographic){const r=O$1(o$1),i=e$1();return qn(o$1,this.origin,i,r),u(i,i,this.localMatrix),t(s,e,i),Un(t$1,r,0,t$1,o$1,0,t$1.length/3),t$1}const{localMatrix:i,origin:a}=this;C$1(i,o)?e$2(s,e):t(s,e,i);for(let n=0;n<t$1.length;n+=3)t$1[n+0]+=a[0],t$1[n+1]+=a[1],t$1[n+2]+=a[2];return t$1}getOriginPoint(r){const[o,t,s]=this.origin;return new j$1({x:o,y:t,z:s,spatialReference:r})}equals(r){return r$3(r)&&this.geographic===r.geographic&&F(this.origin,r.origin)&&B$2(this.localMatrix,r.localMatrix)}clone(){const r={origin:t$1(this.origin),translation:t$1(this.translation),rotation:a(this.rotation),scale:t$1(this.scale),geographic:this.geographic};return new T(r)}};e$3([d$1({type:[Number],nonNullable:!0,json:{write:!0}})],B$1.prototype,"origin",void 0),e$3([d$1({type:[Number],nonNullable:!0,json:{write:!0}})],B$1.prototype,"translation",void 0),e$3([d$1({type:[Number],nonNullable:!0,json:{write:!0}})],B$1.prototype,"rotation",void 0),e$3([d$1({type:[Number],nonNullable:!0,json:{write:!0}})],B$1.prototype,"scale",void 0),e$3([d$1({type:Boolean,nonNullable:!0,json:{write:!0}})],B$1.prototype,"geographic",void 0),e$3([d$1()],B$1.prototype,"localMatrix",null),e$3([d$1()],B$1.prototype,"localMatrixInverse",null),B$1=T=e$3([n$1("esri.geometry.support.MeshTransform")],B$1);const L$1=B$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function r(r,e){return r.isGeographic||r.isWebMercator&&(e?.geographic??!0)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function x(n,r$1,t){return r(r$1.spatialReference,t)?B(n,r$1,t):b(n,r$1,t)}function _(t,o,e){const{position:a,normal:i,tangent:l}=t;if(t$2(o))return {position:a,normal:i,tangent:l};const s=o.localMatrix;return x({position:R(a,new Float64Array(a.length),s),normal:r$3(i)?v$2(i,new Float32Array(i.length),s):null,tangent:r$3(l)?V$1(l,new Float32Array(l.length),s):null},o.getOriginPoint(e),{geographic:o.geographic})}function k(n,r$1,t){if(t?.useTransform){const{position:o,normal:e,tangent:a}=n;return {vertexAttributes:{position:o,normal:e,tangent:a},transform:new L$1({origin:[r$1.x,r$1.y,r$1.z??0],geographic:r(r$1.spatialReference,t)})}}return {vertexAttributes:x(n,r$1,t),transform:null}}function M(n,r$1,t){return r(r$1.spatialReference,t)?G(n,r$1,t):Y(n,r$1,t)}function P(r$1,t,o,e){if(t$2(t))return M(r$1,o,e);const a=_(r$1,t,o.spatialReference);return o.equals(t.getOriginPoint(o.spatialReference))?Y(a,o,e):r(o.spatialReference,e)?G(a,o,e):Y(a,o,e)}function b(n,r,t){const o=new Float64Array(n.position.length),e=n.position,a=r.x,i=r.y,l=r.z||0,{horizontal:s,vertical:f}=C(t?t.unit:null,r.spatialReference);for(let c=0;c<e.length;c+=3)o[c+0]=e[c+0]*s+a,o[c+1]=e[c+1]*s+i,o[c+2]=e[c+2]*f+l;return {position:o,normal:n.normal,tangent:n.tangent}}function B(n,r,t){const o=r.spatialReference,e=O(r,t,D),a=new Float64Array(n.position.length),i=L(n.position,e,o,a),l=j$2(I,e);return {position:i,normal:N(i,a,n.normal,l,o),tangent:S(i,a,n.tangent,l,o)}}function L(n,r,t$1,o){t(T$1.fromTypedArray(o),T$1.fromTypedArray(n),r);const e=new Float64Array(n.length);return O$2(o,e,t$1)}function N(r,t,o,e,a){if(t$2(o))return null;const i=new Float32Array(o.length);return r$4(i$1.fromTypedArray(i),i$1.fromTypedArray(o),e),h$2(i,r,t,a,i),i}function S(r,t,o,e,a){if(t$2(o))return null;const i=new Float32Array(o.length);r$4(i$1.fromTypedArray(i,4*Float32Array.BYTES_PER_ELEMENT),i$1.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT),e);for(let n=3;n<i.length;n+=4)i[n]=o[n];return L$3(i,r,t,a,i),i}function Y(n,r,t){const o=new Float64Array(n.position.length),e=n.position,a=r.x,i=r.y,l=r.z||0,{horizontal:s,vertical:f}=C(t?t.unit:null,r.spatialReference);for(let c=0;c<e.length;c+=3)o[c+0]=(e[c+0]-a)/s,o[c+1]=(e[c+1]-i)/s,o[c+2]=(e[c+2]-l)/f;return {position:o,normal:n.normal,tangent:n.tangent}}function G(n,r,t){const o=r.spatialReference;O(r,t,D);const e=h$1(H,D),a=new Float64Array(n.position.length),l=U(n.position,o,e,a),s=j$2(I,e);return {position:l,normal:q(n.normal,n.position,a,o,s),tangent:V(n.tangent,n.position,a,o,s)}}function O(n,r,t){qn(n.spatialReference,[n.x,n.y,n.z||0],t,O$1(n.spatialReference));const{horizontal:o,vertical:e}=C(r?r.unit:null,n.spatialReference);return i(t,t,[o,o,e]),t}function U(n,r,t$1,o){const e=M$2(n,r,o),a=T$1.fromTypedArray(e),i=new Float64Array(e.length),l=T$1.fromTypedArray(i);return t(l,a,t$1),i}function q(r,t,o,e,a){if(t$2(r))return null;const i=j$3(r,t,o,e,new Float32Array(r.length)),l=i$1.fromTypedArray(i);return r$4(l,l,a),i}function V(r,t,o,e,a){if(t$2(r))return null;const i=k$3(r,t,o,e,new Float32Array(r.length)),l=i$1.fromTypedArray(i,4*Float32Array.BYTES_PER_ELEMENT);return r$4(l,l,a),i}function C(r,a){if(t$2(r))return J;const i=a.isGeographic?1:z$1(a),l=a.isGeographic?1:W(a),s=N$1(1,r,"meters");return {horizontal:s*i,vertical:s*l}}const D=e$1(),H=e$1(),I=e$4(),J={horizontal:1,vertical:1};

export { L$1 as L, M, P, _, a, x$1 as b, k$1 as c, g, k, l, r, x };
