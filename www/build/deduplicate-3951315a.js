import { a7 as a } from './mathUtils-559a53d9.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function n(n,f,i){const u=n.byteLength/(4*f),c=new Uint32Array(n,0,u*f);let s=new Uint32Array(u);const a$1=i?.minReduction??0,h=i?.originalIndices||null,g=h?h.length:0,y=i?.componentOffsets||null;let U=0;if(y)for(let t=0;t<y.length-1;t++){const n=y[t+1]-y[t];n>U&&(U=n);}else U=u;const w=Math.floor(1.1*U)+1;(null==o||o.length<2*w)&&(o=new Uint32Array(a(2*w)));for(let t=0;t<2*w;t++)o[t]=0;let A=0;const m=!!y&&!!h,b=m?g:u,d=m?new Uint32Array(g):null,p=1.96;let M=0!==a$1?Math.ceil(4*p*p/(a$1*a$1)*a$1*(1-a$1)):b,q=1,j=y?y[1]:b;for(let t=0;t<b;t++){if(t===M){const n=1-A/t;if(n+p*Math.sqrt(n*(1-n)/t)<a$1)return null;M*=2;}if(t===j){for(let t=0;t<2*w;t++)o[t]=0;if(h)for(let t=y[q-1];t<y[q];t++)d[t]=s[h[t]];j=y[++q];}const n=m?h[t]:t,r=n*f,i=l(c,r,f);let u=i%w,g=A;for(;0!==o[2*u+1];){if(o[2*u]===i){const t=o[2*u+1]-1;if(e(c,r,t*f,f)){g=s[t];break}}u++,u>=w&&(u-=w);}g===A&&(o[2*u]=i,o[2*u+1]=n+1,A++),s[n]=g;}if(0!==a$1&&1-A/u<a$1)return null;if(m){for(let t=y[q-1];t<d.length;t++)d[t]=s[h[t]];s=d;}const k=new Uint32Array(f*A);A=0;for(let t=0;t<b;t++)if(s[t]===A){r(c,(m?h[t]:t)*f,k,A*f,f),A++;}if(h&&!m){const t=new Uint32Array(g);for(let n=0;n<t.length;n++)t[n]=s[h[n]];s=t;}return {buffer:k.buffer,indices:s,uniqueCount:A}}function e(t,n,e,r){for(let l=0;l<r;l++)if(t[n+l]!==t[e+l])return !1;return !0}function r(t,n,e,r,l){for(let o=0;o<l;o++)e[r+o]=t[n+o];}function l(t,n,e){let r=0;for(let l=0;l<e;l++)r=t[n+l]+r|0,r=r+(r<<11)+(r>>>2)|0;return r>>>0}let o=null;

export { n };
