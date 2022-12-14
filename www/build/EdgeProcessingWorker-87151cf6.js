import { n as n$3 } from './deduplicate-3951315a.js';
import { T as T$1 } from './InterleavedLayout-fe763b01.js';
import { y as y$3, u as u$3, i, c as c$1, l as l$2, p as p$3, o as o$2, m as m$2, T as T$2, h as h$3, a as a$1, b as b$1, d as d$3, A as A$2, O as O$2, x, g as g$2, w as w$3, E as E$1, L as L$1, B, F as F$1, I as I$2, U, j, V as V$1, M, S as S$1, k, q, v as v$2, z as z$1, C as C$1, D as D$2, G as G$1, H as H$1 } from './BufferView-a9ba6e5d.js';
import { O as O$1 } from './VertexAttribute-ef09ced9.js';
import { C } from './enums-4770f29d.js';
import { t as t$1 } from './VertexElementDescriptor-3b53aa99.js';
import { bh as t$2, bi as p$4, bj as n$2 } from './cast-3d5be210.js';
import { u as u$4, z as z$2, n as n$1, M as M$1, x as x$1, a as o$3, b as r$2, P, _, h as l$3, H as H$2, e as e$1 } from './mathUtils-559a53d9.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function o$1(t,o=0){const n=t.stride;return t.fieldNames.filter((e=>{const o=t.fields.get(e).optional;return !(o&&o.glPadding)})).map((i=>{const s=t.fields.get(i),l=s.constructor.ElementCount,u=r$1(s.constructor.ElementType),f=s.offset,c=!(!s.optional||!s.optional.glNormalized);return new t$1(i,l,u,f,n,c,o)}))}function r$1(t){const e=n[t];if(e)return e;throw new Error("BufferType not supported in WebGL")}const n={u8:C.UNSIGNED_BYTE,u16:C.UNSIGNED_SHORT,u32:C.UNSIGNED_INT,i8:C.BYTE,i16:C.SHORT,i32:C.INT,f32:C.FLOAT};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const A$1=T$1().vec3f(O$1.POSITION).u16(O$1.COMPONENTINDEX).u16(O$1.U16PADDING),e=T$1().vec2u8(O$1.SIDENESS),T=o$1(e),E=T$1().vec3f(O$1.POSITION0).vec3f(O$1.POSITION1).u16(O$1.COMPONENTINDEX).u8(O$1.VARIANTOFFSET,{glNormalized:!0}).u8(O$1.VARIANTSTROKE).u8(O$1.VARIANTEXTENSION,{glNormalized:!0}).u8(O$1.U8PADDING,{glPadding:!0}).u16(O$1.U16PADDING,{glPadding:!0}),S=E.clone().vec3f(O$1.NORMAL),r=E.clone().vec3f(O$1.NORMALA).vec3f(O$1.NORMALB),o=new Map([[O$1.POSITION0,0],[O$1.POSITION1,1],[O$1.COMPONENTINDEX,2],[O$1.VARIANTOFFSET,3],[O$1.VARIANTSTROKE,4],[O$1.VARIANTEXTENSION,5],[O$1.NORMAL,6],[O$1.NORMALA,6],[O$1.NORMALB,7],[O$1.SIDENESS,8]]);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function t(t,o,n){const r=o/3,c=new Uint32Array(n+1),e=new Uint32Array(n+1),s=(t,o)=>{t<o?c[t+1]++:e[o+1]++;};for(let x=0;x<r;x++){const o=t[3*x],n=t[3*x+1],r=t[3*x+2];s(o,n),s(n,r),s(r,o);}let f=0,l=0;for(let x=0;x<n;x++){const t=c[x+1],o=e[x+1];c[x+1]=f,e[x+1]=l,f+=t,l+=o;}const i=new Uint32Array(6*r),a=c[n],w=(t,o,n)=>{if(t<o){const r=c[t+1]++;i[2*r]=o,i[2*r+1]=n;}else {const r=e[o+1]++;i[2*a+2*r]=t,i[2*a+2*r+1]=n;}};for(let x=0;x<r;x++){const o=t[3*x],n=t[3*x+1],r=t[3*x+2];w(o,n,x),w(n,r,x),w(r,o,x);}const y=(t,o)=>{const n=2*t,r=o-t;for(let c=1;c<r;c++){const t=i[n+2*c],o=i[n+2*c+1];let r=c-1;for(;r>=0&&i[n+2*r]>t;r--)i[n+2*r+2]=i[n+2*r],i[n+2*r+3]=i[n+2*r+1];i[n+2*r+2]=t,i[n+2*r+3]=o;}};for(let x=0;x<n;x++)y(c[x],c[x+1]),y(a+e[x],a+e[x+1]);const A=new Int32Array(3*r),U=(o,n)=>o===t[3*n]?0:o===t[3*n+1]?1:o===t[3*n+2]?2:-1,u=(t,o)=>{const n=U(t,o);A[3*o+n]=-1;},p=(t,o,n,r)=>{const c=U(t,o);A[3*o+c]=r;const e=U(n,r);A[3*r+e]=o;};for(let x=0;x<n;x++){let t=c[x];const o=c[x+1];let n=e[x];const r=e[x+1];for(;t<o&&n<r;){const o=i[2*t],r=i[2*a+2*n];o===r?(p(x,i[2*t+1],r,i[2*a+2*n+1]),t++,n++):o<r?(u(x,i[2*t+1]),t++):(u(r,i[2*a+2*n+1]),n++);}for(;t<o;)u(x,i[2*t+1]),t++;for(;n<r;){u(i[2*a+2*n],i[2*a+2*n+1]),n++;}}return A}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function z(e,t){return t.push(e.buffer),{buffer:e.buffer,layout:F(e.layout)}}function D$1(e){return G(e.layout).createView(e.buffer)}function F(e){const t=new Array;return e.fields.forEach(((e,r)=>{const o={...e,constructor:J(e.constructor)};t.push([r,o]);})),{stride:e.stride,fields:t,fieldNames:e.fieldNames}}function G(e){const t=T$1();return t.stride=e.stride,t.fieldNames=e.fieldNames,e.fields.forEach((e=>t.fields.set(e[0],{...e[1],constructor:K(e[1].constructor)}))),t}const H=[y$3,u$3,i,c$1,l$2,p$3,o$2,m$2,T$2,h$3,a$1,b$1,d$3,A$2,O$2,x,g$2,w$3,E$1,L$1,B,F$1,I$2,U,j,V$1,M,S$1,k,q,v$2,z$1,C$1,D$2,G$1,H$1];function J(e){return `${e.ElementType}_${e.ElementCount}`}function K(e){return O.get(e)}const O=new Map;H.forEach((e=>O.set(J(e),e)));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class a{updateSettings(t){this.settings=t,this.edgeHashFunction=t.reducedPrecision?f$1:p$2;}write(t,o,e){const n=this.edgeHashFunction(e);W.seed=n;const i=W.getIntRange(0,255),r=W.getIntRange(0,this.settings.variants-1),s=.7,a=W.getFloat(),c=255*(.5*g$1(-(1-Math.min(a/s,1))+Math.max(0,a-s)/(1-s),1.2)+.5);t.position0.setVec(o,e.position0),t.position1.setVec(o,e.position1),t.componentIndex.set(o,e.componentIndex),t.variantOffset.set(o,i),t.variantStroke.set(o,r),t.variantExtension.set(o,c);}trim(t,o){return t.slice(0,o)}}const c=new Float32Array(6),m$1=new Uint32Array(c.buffer),u$2=new Uint32Array(1);function p$2(t){const o=c;o[0]=t.position0[0],o[1]=t.position0[1],o[2]=t.position0[2],o[3]=t.position1[0],o[4]=t.position1[1],o[5]=t.position1[2],u$2[0]=5381;for(let e=0;e<m$1.length;e++)u$2[0]=31*u$2[0]+m$1[e];return u$2[0]}function f$1(t){const o=c;o[0]=h$2(t.position0[0]),o[1]=h$2(t.position0[1]),o[2]=h$2(t.position0[2]),o[3]=h$2(t.position1[0]),o[4]=h$2(t.position1[1]),o[5]=h$2(t.position1[2]),u$2[0]=5381;for(let e=0;e<m$1.length;e++)u$2[0]=31*u$2[0]+m$1[e];return u$2[0]}const l$1=1e4;function h$2(t){return Math.round(t*l$1)/l$1}function g$1(t,o){const e=t<0?-1:1;return Math.abs(t)**o*e}class d$2{constructor(){this.commonWriter=new a;}updateSettings(t){this.commonWriter.updateSettings(t);}allocate(t){return S.createBuffer(t)}write(t,n,i){this.commonWriter.write(t,n,i),u$4(y$2,i.faceNormal0,i.faceNormal1),z$2(y$2,y$2),t.normal.setVec(n,y$2);}trim(t,o){return this.commonWriter.trim(t,o)}}d$2.Layout=S,d$2.glLayout=o$1(S,1);class w$2{constructor(){this.commonWriter=new a;}updateSettings(t){this.commonWriter.updateSettings(t);}allocate(t){return r.createBuffer(t)}write(t,o,e){this.commonWriter.write(t,o,e),t.normalA.setVec(o,e.faceNormal0),t.normalB.setVec(o,e.faceNormal1);}trim(t,o){return this.commonWriter.trim(t,o)}}w$2.Layout=r,w$2.glLayout=o$1(r,1);const y$2=n$1(),W=new t$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const p$1=-1;var u$1;function h$1(n,i,l,f=N){const g=n.vertices.position,m=n.vertices.componentIndex,u=M$1(f.anglePlanar),h=M$1(f.angleSignificantEdge),V=Math.cos(h),S=Math.cos(u),j=I$1.edge,x=j.position0,E=j.position1,D=j.faceNormal0,F=j.faceNormal1,L=y$1(n),U=w$1(n),b=U.length/4,k=i.allocate(b);let C=0;const H=b,K=l.allocate(H);let M=0,O=0,P$1=0;const T=p$4(0,b),q=new Float32Array(b);n$2(q,((e,t,n)=>{g.getVec(U[4*t+0],x),g.getVec(U[4*t+1],E),n[t]=x$1(x,E);})),T.sort(((e,t)=>q[t]-q[e]));const z=new Array,B=new Array;for(let e=0;e<b;e++){const t=T[e],n=q[t],o=U[4*t+0],r=U[4*t+1],f=U[4*t+2],h=U[4*t+3],w=h===p$1;if(g.getVec(o,x),g.getVec(r,E),w)o$3(D,L[3*f+0],L[3*f+1],L[3*f+2]),r$2(F,D),j.componentIndex=m.get(o),j.cosAngle=P(D,F);else {if(o$3(D,L[3*f+0],L[3*f+1],L[3*f+2]),o$3(F,L[3*h+0],L[3*h+1],L[3*h+2]),j.componentIndex=m.get(o),j.cosAngle=P(D,F),A(j,S))continue;j.cosAngle<-.9999&&r$2(F,D);}O+=n,P$1++,w||v$1(j,V)?(i.write(k,C++,j),z.push(n)):d$1(j,u)&&(l.write(K,M++,j),B.push(n));}const G=new Float32Array(z.reverse()),J=new Float32Array(B.reverse());return {regular:{instancesData:i.trim(k,C),lodInfo:{lengths:G}},silhouette:{instancesData:l.trim(K,M),lodInfo:{lengths:J}},averageEdgeLength:O/P$1}}function v$1(e,t){return e.cosAngle<t}function A(e,t){return e.cosAngle>t}function d$1(e,t){const o=l$3(e.cosAngle),r=I$1.fwd,s=I$1.ortho;H$2(r,e.position1,e.position0);return o*(P(_(s,e.faceNormal0,e.faceNormal1),r)>0?-1:1)>t}function w$1(e){const t=e.faces.length/3,n=e.faces,o=e.neighbors;let r=0;for(let a=0;a<t;a++){const e=o[3*a+0],t=o[3*a+1],s=o[3*a+2],c=n[3*a+0],i=n[3*a+1],l=n[3*a+2];r+=e===p$1||c<i?1:0,r+=t===p$1||i<l?1:0,r+=s===p$1||l<c?1:0;}const s=new Int32Array(4*r);let c=0;for(let a=0;a<t;a++){const e=o[3*a+0],t=o[3*a+1],r=o[3*a+2],i=n[3*a+0],l=n[3*a+1],f=n[3*a+2];(e===p$1||i<l)&&(s[c++]=i,s[c++]=l,s[c++]=a,s[c++]=e),(t===p$1||l<f)&&(s[c++]=l,s[c++]=f,s[c++]=a,s[c++]=t),(r===p$1||f<i)&&(s[c++]=f,s[c++]=i,s[c++]=a,s[c++]=r);}return s}function y$1(e){const t=e.faces.length/3,n=e.vertices.position,o=e.faces,r=V.v0,s=V.v1,c=V.v2,a=new Float32Array(3*t);for(let i=0;i<t;i++){const e=o[3*i+0],t=o[3*i+1],m=o[3*i+2];n.getVec(e,r),n.getVec(t,s),n.getVec(m,c),e$1(s,s,r),e$1(c,c,r),_(r,s,c),z$2(r,r),a[3*i+0]=r[0],a[3*i+1]=r[1],a[3*i+2]=r[2];}return a}!function(e){e[e.SOLID=0]="SOLID",e[e.SKETCH=1]="SKETCH";}(u$1||(u$1={}));const I$1={edge:{position0:n$1(),position1:n$1(),faceNormal0:n$1(),faceNormal1:n$1(),componentIndex:0,cosAngle:0},ortho:n$1(),fwd:n$1()},V={v0:n$1(),v1:n$1(),v2:n$1()},N={anglePlanar:4,angleSignificantEdge:35};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class u{async extract(e){const t=l(e),n=f(t),r=[t.data.buffer];return {result:d(n,r),transferList:r}}async extractComponentsEdgeLocations(e){const t=l(e),n=p(t.data,t.skipDeduplicate,t.indices,t.indicesLength),i=h$1(n,L,D),s=[];return {result:z(i.regular.instancesData,s),transferList:s}}async extractEdgeLocations(e){const t=l(e),n=p(t.data,t.skipDeduplicate,t.indices,t.indicesLength),i=h$1(n,w,D),s=[];return {result:z(i.regular.instancesData,s),transferList:s}}}function f(e){const t=p(e.data,e.skipDeduplicate,e.indices,e.indicesLength);return g.updateSettings(e.writerSettings),h.updateSettings(e.writerSettings),h$1(t,g,h)}function l(e){return {data:A$1.createView(e.dataBuffer),indices:"Uint32Array"===e.indicesType?new Uint32Array(e.indicesBuffer):"Uint16Array"===e.indicesType?new Uint16Array(e.indicesBuffer):void 0,indicesLength:e.indicesLength,writerSettings:e.writerSettings,skipDeduplicate:e.skipDeduplicate}}function d(e,t){t.push(e.regular.lodInfo.lengths.buffer),t.push(e.silhouette.lodInfo.lengths.buffer);return {regular:{instancesData:z(e.regular.instancesData,t),lodInfo:{lengths:e.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:z(e.silhouette.instancesData,t),lodInfo:{lengths:e.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:e.averageEdgeLength}}function p(n,r,i,o){if(r){return {faces:i,facesLength:o,neighbors:t(i,o,n.count),vertices:n}}const a=n$3(n.buffer,n.stride/4,{originalIndices:i,originalIndicesLength:o}),c=t(a.indices,o,a.uniqueCount);return {faces:a.indices,facesLength:a.indices.length,neighbors:c,vertices:A$1.createView(a.buffer)}}const g=new d$2,h=new w$2;class m{allocate(e){return b.createBuffer(e)}trim(e,t){return e.slice(0,t)}write(e,t,n){e.position0.setVec(t,n.position0),e.position1.setVec(t,n.position1);}}class I{allocate(e){return y.createBuffer(e)}trim(e,t){return e.slice(0,t)}write(e,t,n){e.position0.setVec(t,n.position0),e.position1.setVec(t,n.position1),e.componentIndex.set(t,n.componentIndex);}}const w=new m,L=new I,D={allocate:()=>null,write:()=>{},trim:()=>null},b=T$1().vec3f(O$1.POSITION0).vec3f(O$1.POSITION1),y=T$1().vec3f(O$1.POSITION0).vec3f(O$1.POSITION1).u16(O$1.COMPONENTINDEX).u16(O$1.U16PADDING,{glPadding:!0});function v(){return new u}

const EdgeProcessingWorker = /*#__PURE__*/Object.freeze({
	__proto__: null,
	EdgeProcessingWorker: u,
	'default': v,
	extract: f,
	extractComponentsEdgeLocationsLayout: y,
	extractEdgeLocationsLayout: b
});

export { A$1 as A, D$1 as D, EdgeProcessingWorker as E, T, o as a, d$2 as d, e, f, o$1 as o, u$1 as u, w$2 as w, y };
