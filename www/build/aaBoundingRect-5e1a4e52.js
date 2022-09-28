import { t } from './cast-3d5be210.js';
import { o as o$1 } from './mathUtils-559a53d9.js';
import { M as M$1 } from './Extent-f27111e1.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function i(n){return n}function u(n=L){return i([n[0],n[1],n[2],n[3]])}function e(n){return i([n[0],n[1],n[2],n[3]])}function a(n,t){return n!==t&&(n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3]),n}function o(n,t,r,i,e=u()){return e[0]=n,e[1]=t,e[2]=r,e[3]=i,e}function c(n,t=u()){return t[0]=n.xmin,t[1]=n.ymin,t[2]=n.xmax,t[3]=n.ymax,t}function f(n,t){return new M$1({xmin:n[0],ymin:n[1],xmax:n[2],ymax:n[3],spatialReference:t})}function m(n,t){t[0]<n[0]&&(n[0]=t[0]),t[0]>n[2]&&(n[2]=t[0]),t[1]<n[1]&&(n[1]=t[1]),t[1]>n[3]&&(n[3]=t[1]);}function h(n,r,i){if(t(r))a(i,n);else if("length"in r)G(r)?(i[0]=Math.min(n[0],r[0]),i[1]=Math.min(n[1],r[1]),i[2]=Math.max(n[2],r[2]),i[3]=Math.max(n[3],r[3])):2!==r.length&&3!==r.length||(i[0]=Math.min(n[0],r[0]),i[1]=Math.min(n[1],r[1]),i[2]=Math.max(n[2],r[0]),i[3]=Math.max(n[3],r[1]));else switch(r.type){case"extent":i[0]=Math.min(n[0],r.xmin),i[1]=Math.min(n[1],r.ymin),i[2]=Math.max(n[2],r.xmax),i[3]=Math.max(n[3],r.ymax);break;case"point":i[0]=Math.min(n[0],r.x),i[1]=Math.min(n[1],r.y),i[2]=Math.max(n[2],r.x),i[3]=Math.max(n[3],r.y);}}function x(n,t,r=n){const i=t.length;let u=n[0],e=n[1],a=n[2],o=n[3];for(let c=0;c<i;c++){const n=t[c];u=Math.min(u,n[0]),e=Math.min(e,n[1]),a=Math.max(a,n[0]),o=Math.max(o,n[1]);}return r[0]=u,r[1]=e,r[2]=a,r[3]=o,r}function M(n){for(let t=0;t<4;t++)if(!isFinite(n[t]))return !1;return !0}function s(n){return t(n)||n[0]>=n[2]?0:n[2]-n[0]}function l(n){return n[1]>=n[3]?0:n[3]-n[1]}function y(n){return s(n)*l(n)}function p(n,t=[0,0]){return t[0]=(n[0]+n[2])/2,t[1]=(n[1]+n[3])/2,t}function b(n,t){return w(n,t[0],t[1])}function g(n,t){const r=t[3],i=.5*(n[0]+n[2]),u=Math.abs(t[0]-i),e=.5*(n[2]-n[0]);if(u>r+e)return !1;const a=.5*(n[1]+n[3]),o=.5*(n[3]-n[1]),c=Math.abs(t[1]-a);if(c>r+o)return !1;if(u<e||c<o)return !0;const f=u-e,m=c-o;return f*f+m*m<=r*r}function j(n,t,r){const i=n[0],u=n[1],e=n[2],a=n[3],{x:o,y:c}=t,{x:f,y:m}=r,h=(n,t)=>(m-c)*n+(o-f)*t+(f*c-o*m)<0,x=h(i,a),M=h(e,a),s=h(e,u),l=h(i,u);return !(x===M&&M===s&&s===l&&l===x||o<i&&f<i||o>e&&f>e||c>a&&m>a||c<u&&m<u)}function F(n,t){return w(n,t.x,t.y)}function w(n,t,r){return t>=n[0]&&r>=n[1]&&t<=n[2]&&r<=n[3]}function k(n,t,r,i){return t>=n[0]-i&&r>=n[1]-i&&t<=n[2]+i&&r<=n[3]+i}function q(n,t,r){return t[0]>=n[0]-r&&t[1]>=n[1]-r&&t[0]<=n[2]+r&&t[1]<=n[3]+r}function E(n,t){return Math.max(t[0],n[0])<=Math.min(t[2],n[2])&&Math.max(t[1],n[1])<=Math.min(t[3],n[3])}function R(n,t){return t[0]>=n[0]&&t[2]<=n[2]&&t[1]>=n[1]&&t[3]<=n[3]}function U(r,i,u){if(t(i))return a(u,r);const e=i[0],o=i[1],c=i[2],f=i[3];return u[0]=o$1(r[0],e,c),u[1]=o$1(r[1],o,f),u[2]=o$1(r[2],e,c),u[3]=o$1(r[3],o,f),u}function d(n,t){const r=(n[0]+n[2])/2,i=(n[1]+n[3])/2,u=Math.max(Math.abs(t[0]-r)-s(n)/2,0),e=Math.max(Math.abs(t[1]-i)-l(n)/2,0);return Math.sqrt(u*u+e*e)}function v(n,t){t[0]=n[2]-n[0],t[1]=n[3]-n[1];}function z(n,t,r,i=n){return i[0]=n[0]+t,i[1]=n[1]+r,i[2]=n[2]+t,i[3]=n[3]+r,i}function A(n,t,r=n){return r[0]=n[0]-t,r[1]=n[1]-t,r[2]=n[2]+t,r[3]=n[3]+t,r}function B(n,t,r=n){return r[0]=t[0],r[1]=t[1],r!==n&&(r[2]=n[2],r[3]=n[3]),r}function C(n,t,r=n){return r[2]=t[0],r[3]=t[1],r!==n&&(r[0]=n[0],r[1]=n[1]),n}function D(n){return n?a(n,K):u(K)}function G(n){return null!=n&&4===n.length}function H(n){return !(0!==s(n)&&isFinite(n[0])||0!==l(n)&&isFinite(n[1]))}function I(n,t){return G(n)&&G(t)?n[0]===t[0]&&n[1]===t[1]&&n[2]===t[2]&&n[3]===t[3]:n===t}const J=i([-1/0,-1/0,1/0,1/0]),K=i([1/0,1/0,-1/0,-1/0]),L=i([0,0,0,0]),N=i([0,0,1,1]);

export { D, E, F, H, I, J, K, M, R, U, a, b, c, d, e, f, g, h, j, k, l, m, o, p, q, s, u, w, x, y, z };
