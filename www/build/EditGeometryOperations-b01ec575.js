import { A as An } from './projection-fbd5d346.js';
import { O, G, R as R$2 } from './unitUtils-a0a11e54.js';
import { n as n$3 } from './Collection-a38e0489.js';
import { r as r$6, aa as i$3, t as t$3, h as e$5, b1 as F } from './cast-3d5be210.js';
import { m as m$3, v as v$1 } from './Polyline-dcdb3782.js';
import { A as A$1, m as m$2, a, j as j$3, p as p$2, l as l$3, o, s as s$1, d as d$2, q, v as v$2, I as I$1, w } from './vec2-4f9a494f.js';
import { n, r as r$2, e as e$2, t as t$4 } from './vec2f64-2956001b.js';
import { r as r$3, n as n$1, A as A$2, x as x$1, a6 as e$3, b as r$4, j as j$2, B as a$1, T as p$3, H, P, k as j$4, _, z, u, q as q$1, a0 as G$1, M as M$1 } from './mathUtils-559a53d9.js';
import { n as n$2, r as r$5, e as e$4 } from './vec4f64-011248e0.js';
import { j as j$1, b as R$3 } from './Point-edff2a11.js';
import { l as l$2 } from './ViewingMode-4a1cffad.js';
import { p as p$4, _ as _$1, W, Z as Z$2, A as A$3, V } from './frustum-95850b85.js';
import { a as a$2, f } from './sphere-4710475c.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function i$2(i){const m=O(i),n=m===G?R$2:m;return An(i,n)?n:i}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var m$1;!function(e){e[e.Z=0]="Z",e[e.M=1]="M";}(m$1||(m$1={}));class Z$1{constructor(e){this.spatialReference=e;}createVector(){return this._tag(n())}pointToVector(e){return this._tag(r$2(e.x,e.y))}arrayToVector(e){return this._tag(r$2(e[0],e[1]))}vectorToArray(e){return [e[0],e[1]]}pointToArray(e){return [e.x,e.y]}vectorToPoint(e,t=new j$1){return t.x=e[0],t.y=e[1],t.z=void 0,t.m=void 0,t.spatialReference=this.spatialReference,t}arrayToPoint(e,t=new j$1){return t.x=e[0],t.y=e[1],t.z=void 0,t.m=void 0,t.spatialReference=this.spatialReference,t}vectorToDehydratedPoint(e,t={x:void 0,y:void 0,z:void 0,m:void 0,hasZ:void 0,hasM:void 0,spatialReference:void 0,type:"point"}){return t.x=e[0],t.y=e[1],t.z=void 0,t.m=void 0,t.hasZ=!1,t.hasM=!1,t.spatialReference=this.spatialReference,t}lerp(t,r,a,i){return A$1(i,t,r,a)}addDelta(e,t,r){e[0]+=t,e[1]+=r;}distance(e,r){return m$2(e,r)}getZ(e,t){return t}hasZ(){return !1}getM(e,t){return t}hasM(){return !1}clone(e){return this._tag(e$2(e))}copy(e,t){return a(t,e)}fromXYZ(e){return this._tag(r$2(e[0],e[1]))}toXYZ(e,t=0){return r$3(e[0],e[1],t)}_tag(e){return e}}class g$1{constructor(e,t){this.valueType=e,this.spatialReference=t;}createVector(){return this._tag(n$1())}pointToVector(e){return this._tag(r$3(e.x,e.y,this.valueType===m$1.Z?e.z:e.m))}arrayToVector(e){return this._tag(r$3(e[0],e[1],e[2]||0))}vectorToArray(e){return [e[0],e[1],e[2]]}pointToArray(e){return this.valueType===m$1.Z?[e.x,e.y,e.z]:[e.x,e.y,e.m]}vectorToPoint(e,t=new j$1){return t.x=e[0],t.y=e[1],t.z=this.valueType===m$1.Z?e[2]:void 0,t.m=this.valueType===m$1.M?e[2]:void 0,t.spatialReference=this.spatialReference,t}arrayToPoint(e,t=new j$1){return t.x=e[0],t.y=e[1],t.z=this.valueType===m$1.Z?e[2]:void 0,t.m=this.valueType===m$1.M?e[2]:void 0,t.spatialReference=this.spatialReference,t}vectorToDehydratedPoint(e,t={x:void 0,y:void 0,z:void 0,m:void 0,hasZ:void 0,hasM:void 0,spatialReference:void 0,type:"point"}){const r=this.valueType===m$1.Z,a=this.valueType===m$1.M;return t.x=e[0],t.y=e[1],t.z=r?e[2]:void 0,t.m=a?e[2]:void 0,t.hasZ=r,t.hasM=a,t.spatialReference=this.spatialReference,t}lerp(e,t,r,a){return A$2(a,e,t,r)}addDelta(e,t,r,a){e[0]+=t,e[1]+=r,this.valueType===m$1.Z&&(e[2]+=a);}distance(e,r){return this.valueType===m$1.Z?x$1(e,r):m$2(e,r)}getZ(e,t){return this.valueType===m$1.Z?e[2]:t}hasZ(){return this.valueType===m$1.Z}getM(e,t){return this.valueType===m$1.M?e[2]:t}hasM(){return this.valueType===m$1.M}clone(e){return this._tag(e$3(e))}copy(e,t){return r$4(t,e)}fromXYZ(e,t=0,r=0){return this._tag(r$3(e[0],e[1],this.valueType===m$1.Z?e.length>2?e[2]:t:r))}toXYZ(e,t=0){return this._tag(r$3(e[0],e[1],this.valueType===m$1.Z?e[2]:t))}_tag(e){return e}}class R$1{constructor(e){this.spatialReference=e;}createVector(){return this._tag(n$2())}pointToVector(e){return this._tag(r$5(e.x,e.y,e.z,e.m))}arrayToVector(e){return this._tag(r$5(e[0],e[1],e[2]||0,e[3]||0))}vectorToArray(e){return [e[0],e[1],e[2],e[3]]}pointToArray(e){return [e.x,e.y,e.z,e.m]}vectorToPoint(e,t=new j$1){return t.x=e[0],t.y=e[1],t.z=e[2],t.m=e[3],t.spatialReference=this.spatialReference,t}arrayToPoint(e,t=new j$1){return t.x=e[0],t.y=e[1],t.z=e[2],t.m=e[3],t.spatialReference=this.spatialReference,t}vectorToDehydratedPoint(e,t={x:void 0,y:void 0,z:void 0,m:void 0,hasZ:void 0,hasM:void 0,spatialReference:void 0,type:"point"}){return t.x=e[0],t.y=e[1],t.z=e[2],t.m=e[3],t.hasZ=!0,t.hasM=!0,t.spatialReference=this.spatialReference,t}lerp(e,t,r,a){return j$2(a,e,t,r)}addDelta(e,t,r,a){e[0]+=t,e[1]+=r,e[2]+=a;}distance(e,t){return x$1(e,t)}getZ(e){return e[2]}hasZ(){return !0}getM(e){return e[3]}hasM(){return !0}clone(e){return this._tag(e$4(e))}copy(e,t){return a$1(t,e)}fromXYZ(e,t=0,r=0){return this._tag(r$5(e[0],e[1],e.length>2?e[2]:t,r))}toXYZ(e){return r$3(e[0],e[1],e[2])}_tag(e){return e}}function x(e,t,r){return e&&t?new R$1(r):t?new g$1(m$1.M,r):e?new g$1(m$1.Z,r):new Z$1(r)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function e$1(o,r){if(!r.supported)return;let e=1/0,p=-1/0;const n=r.upperBoundX-r.lowerBoundX;o.forEach((o=>{let u=o.pos[0];for(;u<r.lowerBoundX;)u+=n;for(;u>r.upperBoundX;)u-=n;e=Math.min(e,u),p=Math.max(p,u),o.pos[0]=u;}));const u=p-e;n-u<u&&o.forEach((o=>{o.pos[0]<0&&(o.pos[0]+=n);}));}function p$1(e,p){const n=R$3(e);return p===l$2.Global&&n?{supported:!0,lowerBoundX:n.valid[0],upperBoundX:n.valid[1]}:{supported:!1,lowerBoundX:null,upperBoundX:null}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class c$1{constructor(e){this.component=e,this.leftEdge=null,this.rightEdge=null,this.type="vertex",this.index=null;}get pos(){return this._pos}set pos(e){this._pos=e,this.component.unnormalizeVertexPositions();}}class l$1{constructor(e,t,s){this.component=e,this.leftVertex=t,this.rightVertex=s,this.type="edge",t.rightEdge=this,s.leftEdge=this;}}class p{constructor(e,t){this.spatialReference=e,this.viewingMode=t,this.vertices=[],this.edges=[];}unnormalizeVertexPositions(){this.vertices.length<=1||e$1(this.vertices,p$1(this.spatialReference,this.viewingMode));}updateVertexIndex(e,t){if(0===this.vertices.length)return;const s=this.vertices[0];let i=null,r=e,o=t;do{i=r,i.index=o++,r=i.rightEdge?i.rightEdge.rightVertex:null;}while(null!=r&&r!==s);i.leftEdge&&i!==this.vertices[this.vertices.length-1]&&this.swapVertices(this.vertices.indexOf(i),this.vertices.length-1);}getFirstVertex(){return 0===this.vertices.length?null:this.vertices[0]}getLastVertex(){return 0===this.vertices.length?null:this.vertices[this.vertices.length-1]}isClosed(){return this.vertices.length>2&&null!==this.vertices[0].leftEdge}swapVertices(e,t){const s=this.vertices[e];this.vertices[e]=this.vertices[t],this.vertices[t]=s;}iterateVertices(e){if(0===this.vertices.length)return;const t=this.vertices[0];let i=t;do{e(i,i.index),i=r$6(i.rightEdge)?i.rightEdge.rightVertex:null;}while(i!==t&&null!=i)}}class g extends n$3{constructor(e,t){super(),this.type=e,this.coordinateHelper=t,this._geometry=null,this.dirty=!0,this.components=[];}get geometry(){if(this.dirty){switch(this.type){case"point":this._geometry=this._toPoint();break;case"polyline":this._geometry=this._toPolyline();break;case"polygon":this._geometry=this._toPolygon();}this.dirty=!1;}return this._geometry}get spatialReference(){return this.coordinateHelper.spatialReference}notifyChanges(e){this.dirty=!0,this.emit("change",e);}_toPoint(){return 0===this.components.length||0===this.components[0].vertices.length?null:this.coordinateHelper.vectorToPoint(this.components[0].vertices[0].pos)}_toPolyline(){const e=[],t=this.coordinateHelper.vectorToArray;for(const s of this.components){if(s.vertices.length<1)continue;const i=[];let r=s.vertices.find((e=>null==e.leftEdge));const o=r;do{i.push(t(r.pos)),r=r.rightEdge?r.rightEdge.rightVertex:null;}while(r&&r!==o);e.push(i);}return new m$3({paths:e,spatialReference:this.spatialReference,hasZ:this.coordinateHelper.hasZ(),hasM:this.coordinateHelper.hasM()})}_toPolygon(){const e=[],t=this.coordinateHelper.vectorToArray;for(const i of this.components){if(i.vertices.length<1)continue;const r=[],o=i.vertices[0];let n=o;const h=n;do{r.push(t(n.pos)),n=r$6(n.rightEdge)?n.rightEdge.rightVertex:null;}while(n&&n!==h);i.isClosed()&&r.push(t(o.pos)),e.push(r);}return new v$1({rings:e,spatialReference:this.spatialReference,hasZ:this.coordinateHelper.hasZ(),hasM:this.coordinateHelper.hasM()})}static fromGeometry(t,s){const i=t.spatialReference,r=x(t.hasZ,t.hasM,i),n=new g(t.type,r);switch(t.type){case"polygon":{const o=t.rings;for(let t=0;t<o.length;++t){const h=o[t],g=new p(i,s),a=h.length>2&&i$3(h[0],h[h.length-1]),d=a?h.length-1:h.length;for(let e=0;e<d;++e){const t=r.arrayToVector(h[e]),s=new c$1(g);g.vertices.push(s),s.pos=t,s.index=e;}const u=g.vertices.length-1;for(let e=0;e<u;++e){const t=g.vertices[e],s=g.vertices[e+1],i=new l$1(g,t,s);g.edges.push(i);}if(a){const e=new l$1(g,g.vertices[g.vertices.length-1],g.vertices[0]);g.edges.push(e);}n.components.push(g);}break}case"polyline":for(const e of t.paths){const t=new p(i,s),o=e.length;for(let s=0;s<o;++s){const i=r.arrayToVector(e[s]),o=new c$1(t);t.vertices.push(o),o.pos=i,o.index=s;}const h=t.vertices.length-1;for(let e=0;e<h;++e){const s=t.vertices[e],i=t.vertices[e+1],r=new l$1(t,s,i);t.edges.push(r);}n.components.push(t);}break;case"point":{const e=new p(i,s),o=new c$1(e);o.index=0,o.pos=r.pointToVector(t),e.vertices.push(o),n.components.push(e);break}}return n}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var E$1;!function(E){E[E.NEW_STEP=0]="NEW_STEP",E[E.ACCUMULATE_STEPS=1]="ACCUMULATE_STEPS";}(E$1||(E$1={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class d$1{constructor(e,t,i){this.editGeometry=e,this.component=t,this.pos=i,this.addedVertex=null,this.originalEdge=null,this.left=null,this.right=null;}apply(){let d="redo";t$3(this.addedVertex)&&(d="apply",this.addedVertex=new c$1(this.component));const h=this.component.getLastVertex();if(t$3(h))this.component.vertices.push(this.addedVertex),this.addedVertex.pos=this.pos,this.addedVertex.index=0;else {let i=null;h.rightEdge&&(this.originalEdge=h.rightEdge,i=this.originalEdge.rightVertex,this.component.edges.splice(this.component.edges.indexOf(this.originalEdge),1)),this.component.vertices.push(this.addedVertex),this.addedVertex.pos=this.pos,t$3(this.left)&&(this.left=new l$1(this.component,h,this.addedVertex)),this.component.edges.push(this.left),h.rightEdge=this.left,r$6(this.originalEdge)&&r$6(i)&&(t$3(this.right)&&(this.right=new l$1(this.component,this.addedVertex,i)),this.component.edges.push(this.right),i.leftEdge=this.right),this.component.updateVertexIndex(this.addedVertex,h.index+1);}this.editGeometry.notifyChanges({operation:d,addedVertices:[this.addedVertex]});}undo(){if(t$3(this.addedVertex))return null;this.component.vertices.splice(this.component.vertices.indexOf(this.addedVertex),1),r$6(this.left)&&(this.component.edges.splice(this.component.edges.indexOf(this.left),1),this.left.leftVertex.rightEdge=null),r$6(this.right)&&(this.component.edges.splice(this.component.edges.indexOf(this.right),1),this.right.rightVertex.leftEdge=null),r$6(this.originalEdge)&&(this.component.edges.push(this.originalEdge),this.originalEdge.leftVertex.rightEdge=this.originalEdge,this.originalEdge.rightVertex.leftEdge=this.originalEdge),r$6(this.left)?this.component.updateVertexIndex(this.left.leftVertex,this.left.leftVertex.index):this.component.updateVertexIndex(this.addedVertex,0),this.editGeometry.notifyChanges({operation:"undo",removedVertices:[this.addedVertex]});}accumulate(){return !1}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class t$2{constructor(t,e,i){this.editGeometry=t,this.vertices=e,this.operation=i,this.undone=!1;}apply(){this.vertices.forEach((t=>this.operation.apply(t))),this.editGeometry.components.forEach((t=>t.unnormalizeVertexPositions())),this.editGeometry.notifyChanges({operation:this.undone?"redo":"apply",updatedVertices:this.vertices});}undo(){this.vertices.forEach((t=>this.operation.undo(t))),this.editGeometry.notifyChanges({operation:"undo",updatedVertices:this.vertices}),this.undone=!0;}canAccumulate(t){if(this.undone||t.vertices.length!==this.vertices.length)return !1;for(let e=0;e<t.vertices.length;++e)if(t.vertices[e]!==this.vertices[e])return !1;return this.operation.canAccumulate(t.operation)}accumulate(e){return !!(e instanceof t$2&&this.canAccumulate(e))&&(this.vertices.forEach((t=>this.operation.accumulate(t,e.operation))),this.operation.accumulateParams(e.operation),this.editGeometry.components.forEach((t=>t.unnormalizeVertexPositions())),this.editGeometry.notifyChanges({operation:"apply",updatedVertices:this.vertices}),!0)}}var e;!function(t){t[t.CUMULATIVE=0]="CUMULATIVE",t[t.REPLACE=1]="REPLACE";}(e||(e={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class r$1{constructor(e,t,r=0){this.editGeometry=e,this.vertices=t,this.minNumberOfVertices=r,this.removedVertices=null;}apply(){let t="redo";null==this.removedVertices?(this.removedVertices=[],this.vertices.forEach((t=>{const r=this._removeVertex(t);r$6(r)&&this.removedVertices.push(r);})),t="apply"):this.removedVertices.forEach((e=>{this._removeVertex(e.removedVertex);})),this.editGeometry.notifyChanges({operation:t,removedVertices:this.vertices});}undo(){this.removedVertices.forEach((e=>{this._undoRemoveVertex(e);})),this.editGeometry.notifyChanges({operation:"undo",addedVertices:this.vertices});}accumulate(){return !1}_removeVertex(e){const r=e.component;if(r.vertices.length<=this.minNumberOfVertices)return null;const i={removedVertex:e,createdEdge:null},s=e.leftEdge,d=e.rightEdge;return r.vertices.splice(r.vertices.indexOf(e),1),s&&(r.edges.splice(r.edges.indexOf(s),1),s.leftVertex.rightEdge=null),d&&(r.edges.splice(r.edges.indexOf(d),1),d.rightVertex.leftEdge=null),0===e.index&&d&&this.vertices.length>0&&r.swapVertices(r.vertices.indexOf(d.rightVertex),0),s&&d&&(i.createdEdge=new l$1(r,s.leftVertex,d.rightVertex),r.edges.push(i.createdEdge)),d&&r.updateVertexIndex(d.rightVertex,d.rightVertex.index-1),i}_undoRemoveVertex(e){const t=e.removedVertex,r=e.removedVertex.component,i=t.leftEdge,s=t.rightEdge;e.createdEdge&&r.edges.splice(r.edges.indexOf(e.createdEdge),1),r.vertices.push(t),i&&(r.edges.push(i),i.leftVertex.rightEdge=i),s&&(r.edges.push(s),s.rightVertex.leftEdge=s),r.updateVertexIndex(t,t.index);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class r{constructor(e,t,i){this.editGeometry=e,this.edge=t,this.t=i,this.createdVertex=null,this.left=null,this.right=null;}apply(){let r="redo";const s=this.edge,d=s.component,h=s.leftVertex,g=s.rightVertex;d.edges.splice(d.edges.indexOf(s),1),t$3(this.createdVertex)&&(r="apply",this.createdVertex=new c$1(s.component)),d.vertices.push(this.createdVertex),this.createdVertex.pos=this.editGeometry.coordinateHelper.lerp(s.leftVertex.pos,s.rightVertex.pos,this.t,this.editGeometry.coordinateHelper.createVector()),t$3(this.left)&&(this.left=new l$1(d,h,this.createdVertex)),this.left.leftVertex.leftEdge?d.edges.push(this.left):d.edges.unshift(this.left),h.rightEdge=this.left,t$3(this.right)&&(this.right=new l$1(d,this.createdVertex,g)),d.edges.push(this.right),g.leftEdge=this.right,d.updateVertexIndex(this.createdVertex,h.index+1),this.editGeometry.notifyChanges({operation:r,addedVertices:[this.createdVertex]});}undo(){if(t$3(this.createdVertex)||t$3(this.left)||t$3(this.right))return null;const t=this.edge,i=t.component,r=this.createdVertex.leftEdge,s=this.createdVertex.rightEdge,d=r.leftVertex,h=s.rightVertex;i.vertices.splice(i.vertices.indexOf(this.createdVertex),1),i.edges.splice(i.edges.indexOf(this.left),1),i.edges.splice(i.edges.indexOf(this.right),1),this.edge.leftVertex.leftEdge?i.edges.push(this.edge):i.edges.unshift(this.edge),d.rightEdge=t,h.leftEdge=t,i.updateVertexIndex(d,d.index),this.editGeometry.notifyChanges({operation:"undo",removedVertices:[this.createdVertex]});}accumulate(){return !1}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class i$1{constructor(t,e,i){this.editGeometry=t,this.vertex=e,this.pos=i;}apply(){const e=t$3(this.originalPosition);e&&(this.originalPosition=this.vertex.pos),this._apply(e?"apply":"redo");}undo(){this.vertex.pos=e$5(this.originalPosition),this.editGeometry.notifyChanges({operation:"undo",updatedVertices:[this.vertex]});}accumulate(t){return t instanceof i$1&&t.vertex===this.vertex&&(this.pos=t.pos,this._apply("apply"),!0)}_apply(t){this.vertex.pos=this.pos,this.editGeometry.components.forEach((t=>t.unnormalizeVertexPositions())),this.editGeometry.notifyChanges({operation:t,updatedVertices:[this.vertex]});}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class i{constructor(e,t){this.editGeometry=e,this.component=t,this.createdEdge=null;}apply(){let e="redo";if(t$3(this.createdEdge)){e="apply";const i=this.component.getFirstVertex(),o=this.component.getLastVertex();if(this.component.isClosed()||this.component.vertices.length<3||t$3(i)||t$3(o))return;this.createdEdge=new l$1(this.component,o,i);}this.createdEdge.leftVertex.rightEdge=this.createdEdge,this.createdEdge.rightVertex.leftEdge=this.createdEdge,this.component.edges.push(this.createdEdge),this.editGeometry.notifyChanges({operation:e});}undo(){t$3(this.createdEdge)||(F(this.component.edges,this.createdEdge),this.createdEdge.leftVertex.rightEdge=null,this.createdEdge.rightVertex.leftEdge=null,this.editGeometry.notifyChanges({operation:"undo"}));}accumulate(){return !1}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class t$1{constructor(t,s,d,h){this.helper=t,this.dx=s,this.dy=d,this.dz=h;}_move(t,s,d,h){this.helper.addDelta(t.pos,s,d,h);}apply(t){this._move(t,this.dx,this.dy,this.dz);}undo(t){this._move(t,-this.dx,-this.dy,-this.dz);}canAccumulate(s){return s instanceof t$1}accumulate(t,s){this._move(t,s.dx,s.dy,s.dz);}accumulateParams(t){this.dx+=t.dx,this.dy+=t.dy,this.dz+=t.dz;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function h(t,n){return t[0]*n[1]-t[1]*n[0]}function E(t,r,s){const e=(r[0]-t[0])*(s[1]-t[1])-(r[1]-t[1])*(s[0]-t[0]);return Math.abs(e)/m$2(r,s)}function I(t,n,o){const u=j$3(o,n)/p$2(o);return l$3(t,o,u)}function L(t,n,r,s,e=r){return o(M,s,r),o(A,n,e),I(R,A,M),s$1(t,e,R)}function N(t,n,e,u){o(M,u,e),o(A,n,e);const f=j$3(M,A)/p$2(M);return f>0?d$2(t,e,M,f):a(t,e)}function m(t,n,r,s){o(M,n,r);const e=s/q(M);return d$2(t,r,M,e)}function y(n,r){return L(A,r,n.start,n.end),p$3(A[0],r[0])&&p$3(A[1],r[1])?[t$4(r)]:[]}function d(n,r,s){return m(A,s,n,r),p$3(A[0],s[0])&&p$3(A[1],s[1])?[t$4(s)]:[]}function j(t,n){const r=t.start,s=t.end,e=n.start,u=n.end,a=o(M,s,r),f=o(k,u,e),i=h(a,f);if(Math.abs(i)<=l)return [];const p=o(A,r,e),E=h(f,p)/i,I=h(a,p)/i;if(E>=0){if(I>=0||n.type===b.LINE)return [d$2(R,r,a,E)]}else if(t.type===b.LINE&&(I>=0||n.type===b.LINE))return [d$2(R,r,a,E)];return []}function v(t,n,e){const u=[],a=o(M,t.end,t.start),f=o(k,t.start,n),i=p$2(a),p=2*j$3(a,f),h=p*p-4*i*(p$2(f)-e*e);if(0===h){const n=-p/(2*i);(t.type===b.LINE||n>=0)&&u.push(d$2(R,t.start,a,n));}else if(h>0){const n=Math.sqrt(h),r=(-p+n)/(2*i);(t.type===b.LINE||r>=0)&&u.push(d$2(R,t.start,a,r));const s=(-p-n)/(2*i);(t.type===b.LINE||s>=0)&&u.push(d$2(A,t.start,a,s));}return u}var b;!function(t){t[t.RAY=0]="RAY",t[t.LINE=1]="LINE";}(b||(b={}));const l=1e-6,M=n(),k=n(),A=n(),R=n();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class X{constructor(t,i,e,s=0,n=Z.IMMEDIATE){this.helper=t,this.planeType=i,this.edge=e,this.distance=s,this._plane=p$4(),this._offsetPlane=p$4(),this._minDistance=-1/0,this._maxDistance=1/0,n===Z.IMMEDIATE&&this._initialize();}get plane(){return this._plane}get requiresSplitEdgeLeft(){return !this._left.isOriginalDirection}get requiresSplitEdgeRight(){return !this._right.isOriginalDirection}get edgeDirection(){return this._edgeDirection}_initialize(){this._initializeNeighbors(),this._initializePlane(),this._initializeDistanceConstraints();}_initializeNeighbors(){const t=this._toXYZ(this.edge.leftVertex.pos),i=this._toXYZ(this.edge.leftVertex.leftEdge?.leftVertex?.pos),e=this._toXYZ(this.edge.rightVertex.pos),s=this._toXYZ(this.edge.rightVertex.rightEdge?.rightVertex?.pos);this._edgeDirection=H(n$1(),t,e),this._left=this._computeNeighbor(t,i,this._edgeDirection),this._right=this._computeNeighbor(e,s,this._edgeDirection);}_toXYZ(t){return r$6(t)?this.helper.toXYZ(t):null}_computeNeighbor(t,i,s){if(t$3(i))return {start:t,end:i,direction:r$3(-s[1],s[0],0),isOriginalDirection:!0};const n=H(n$1(),t,i),r=!this._passesBisectingAngleThreshold(n,s);return {start:t,end:i,direction:r?this._bisectVectorsPerpendicular(s,n):n,isOriginalDirection:!r}}_passesBisectingAngleThreshold(t,i){const e=Math.abs(a$2(i,t));return e>=Y&&e<=Math.PI-Y}_bisectVectorsPerpendicular(t,i){const e=P(t,i)<0?t:j$4(n$1(),t),s=Math.abs(P(e,i));if(!(s<.001||s>.999))return this._bisectDirection(e,i);const n=_(n$1(),e,[0,0,1]);return z(n,n)}_bisectDirection(t,i){const e=u(n$1(),t,i);return z(e,e)}_initializePlane(){const t=this._computeNormalDirection(this._left),i=this._computeNormalDirection(this._right);P(t,i)<0&&j$4(i,i),_$1(this._left.start,this._bisectDirection(t,i),this._plane);}_computeNormalDirection(t){const i=_(n$1(),t.direction,this._edgeDirection);z(i,i);const e=_(n$1(),this._edgeDirection,i);return this.planeType===T.XY&&(e[2]=0),z(e,e)}_initializeDistanceConstraints(){r$6(this._left.end)&&!this.requiresSplitEdgeLeft&&this._updateDistanceConstraint(W(this._plane,this._left.end)),r$6(this._right.end)&&!this.requiresSplitEdgeRight&&this._updateDistanceConstraint(W(this._plane,this._right.end)),this._updateIntersectDistanceConstraint(this._plane);}_updateDistanceConstraint(t){t<=0&&(this._minDistance=Math.max(this._minDistance,t)),t>=0&&(this._maxDistance=Math.min(this._maxDistance,t));}_updateIntersectDistanceConstraint(t){const i=Z$2(t),e=this._edgeDirection,a=u(n$1(),this._left.start,this._left.direction),o$1=u(n$1(),this._right.start,this._right.direction),c=this._pointInBasis2D(n(),i,e,this._left.start),_=this._pointInBasis2D(n(),i,e,a),l=this._pointInBasis2D(n(),i,e,this._right.start),d=this._pointInBasis2D(n(),i,e,o$1),[f]=j({start:_,end:c,type:b.LINE},{start:d,end:l,type:b.LINE});if(!f)return;const u$1=o(n(),c,_);v$2(u$1,u$1);const D=o(n(),f,_),E=j$3(u$1,D),b$1=u(n$1(),a,q$1(n$1(),this._left.direction,-E)),I=W(t,b$1);this._updateDistanceConstraint(I);}_pointInBasis2D(t,i,e,s){return t[0]=f(i,s),t[1]=f(e,s),t}_offset(t,e){Number.isFinite(this._minDistance)&&(e=Math.max(this._minDistance,e)),Number.isFinite(this._maxDistance)&&(e=Math.min(this._maxDistance,e)),A$3(this._offsetPlane,this._plane),this._offsetPlane[3]-=e;const s=(t,e,s)=>r$6(e)&&V(this._offsetPlane,t,u(n$1(),t,e),s),n=n$1();(t===this.edge.leftVertex?s(this._left.start,this._left.direction,n):s(this._right.start,this._right.direction,n))&&this.helper.copy(this.helper.fromXYZ(n,void 0,this.helper.getM(t.pos)),t.pos);}signedDistanceToPoint(t){return W(this.plane,this.helper.toXYZ(this.helper.pointToVector(t)))}apply(t){this._offset(t,this.distance);}undo(t){this._offset(t,0);}canAccumulate(t){return t instanceof X&&this.edge.leftVertex.index===t.edge.leftVertex.index&&this.edge.rightVertex.index===t.edge.rightVertex.index&&this.edge.component===t.edge.component&&this._maybeEqualsVec3(this._left.direction,t._left.direction)&&this._maybeEqualsVec3(this._right.direction,t._right.direction)&&G$1(Z$2(this._plane),Z$2(t._plane))}accumulate(t,i){const e=this._plane[3]-i._plane[3]+i.distance;this._offset(t,e);}accumulateParams(t){const i=t.distance-t._plane[3];this.distance=i+this._plane[3];}clone(){const t=new X(this.helper,this.planeType,this.edge,this.distance,Z.DEFERRED);return A$3(t._plane,this._plane),A$3(t._offsetPlane,this._offsetPlane),t._maxDistance=this._maxDistance,t._minDistance=this._minDistance,t._left=this._cloneNeighbor(this._left),t._right=this._cloneNeighbor(this._right),t._edgeDirection=r$4(n$1(),this._edgeDirection),t}_maybeEqualsVec3(t,s){return t$3(t)&&t$3(s)||r$6(t)&&r$6(s)&&G$1(t,s)}_cloneNeighbor({start:t,end:e,direction:s,isOriginalDirection:n}){return {start:r$4(n$1(),t),end:r$6(e)?r$4(n$1(),e):null,direction:r$4(n$1(),s),isOriginalDirection:n}}}const Y=M$1(15);var T,Z;!function(t){t[t.XYZ=0]="XYZ",t[t.XY=1]="XY";}(T||(T={})),function(t){t[t.IMMEDIATE=0]="IMMEDIATE",t[t.DEFERRED=1]="DEFERRED";}(Z||(Z={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class s{constructor(t,a,s=e.CUMULATIVE){this.origin=t,this.angle=a,this.accumulationType=s;}_rotate(t,i){I$1(t.pos,t.pos,this.origin,i);}apply(t){this._rotate(t,this.angle);}undo(t){this._rotate(t,-this.angle);}canAccumulate(a){return a instanceof s&&i$3(this.origin,a.origin)}accumulate(t,a){const s=a.accumulationType===e.REPLACE;this._rotate(t,s?a.angle-this.angle:a.angle);}accumulateParams(t){const a=t.accumulationType===e.REPLACE;this.angle=a?t.angle:this.angle+t.angle;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class c{constructor(t,a,c,o,r=e.CUMULATIVE){this.origin=t,this.axis1=a,this.factor1=c,this.factor2=o,this.accumulationType=r,this.axis2=r$2(a[1],-a[0]);}_scale(t,s,i){w(t.pos,t.pos,this.origin,this.axis1,s),w(t.pos,t.pos,this.origin,this.axis2,i);}apply(t){this._scale(t,this.factor1,this.factor2);}undo(t){this._scale(t,1/this.factor1,1/this.factor2);}canAccumulate(s){return s instanceof c&&i$3(this.origin,s.origin)&&i$3(this.axis1,s.axis1)}accumulate(t,s){s.accumulationType===e.REPLACE?this._scale(t,s.factor1/this.factor1,s.factor2/this.factor2):this._scale(t,s.factor1,s.factor2);}accumulateParams(t){const s=t.accumulationType===e.REPLACE;this.factor1=s?t.factor1:this.factor1*t.factor1,this.factor2=s?t.factor2:this.factor2*t.factor2;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class t{constructor(){this.operations=[],this.closed=!1;}close(){this.closed=!0;}apply(){for(const t of this.operations)t.apply();}undo(){for(let t=this.operations.length-1;t>=0;t--)this.operations[t].undo();}accumulate(t){if(this.closed)return !1;const o=this.operations.length?this.operations[this.operations.length-1]:null;return o&&o.accumulate(t)||(this.operations.push(t),t.apply()),!0}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class S extends n$3{constructor(e){super(),this.data=e,this.undoStack=[],this.redoStack=[],this.listener=this.data.on("change",(e=>{e.addedVertices&&this.emit("vertex-add",{type:"vertex-add",vertices:e.addedVertices,operation:e.operation}),e.removedVertices&&this.emit("vertex-remove",{type:"vertex-remove",vertices:e.removedVertices,operation:e.operation}),e.updatedVertices&&this.emit("vertex-update",{type:"vertex-update",vertices:e.updatedVertices,operation:e.operation});}));}destroy(){this.listener.remove();}splitEdge(e,t){return this._apply(new r(this.data,e,t))}updateVertices(e,t,r=E$1.ACCUMULATE_STEPS){return this._apply(new t$2(this.data,e,t),r)}moveVertices(e,t,r,s,i=E$1.ACCUMULATE_STEPS){return this.updateVertices(e,new t$1(this.data.coordinateHelper,t,r,s),i)}scaleVertices(e$1,t,r,s,i,a=E$1.ACCUMULATE_STEPS,p=e.CUMULATIVE){return this.updateVertices(e$1,new c(t,r,s,i,p),a)}rotateVertices(e$1,t,r,s$1=E$1.ACCUMULATE_STEPS,i=e.CUMULATIVE){return this.updateVertices(e$1,new s(t,r,i),s$1)}removeVertices(e){return this._apply(new r$1(this.data,e,this._minNumVerticesPerType))}appendVertex(e){return 0===this.data.components.length?null:this._apply(new d$1(this.data,this.data.components[0],e))}setVertexPosition(e,t){return this._apply(new i$1(this.data,e,t))}offsetEdge(e,t,r,s=E$1.ACCUMULATE_STEPS){return this.updateVertices([t.leftVertex,t.rightVertex],new X(this.data.coordinateHelper,e,t,r),s)}closeComponent(e){return this.data.components.includes(e)?this._apply(new i(this.data,e)):null}canRemoveVertex(){return this.data.components[0].vertices.length>this._minNumVerticesPerType}createUndoGroup(){const e=new t;return this._apply(e),{remove:()=>e.close()}}undo(){if(this.undoStack.length>0){const e=this.undoStack.pop();return e.undo(),this.redoStack.push(e),e}return null}redo(){if(this.redoStack.length>0){const e=this.redoStack.pop();return e.apply(),this.undoStack.push(e),e}return null}get canUndo(){return this.undoStack.length>0}get canRedo(){return this.redoStack.length>0}get lastOperation(){return this.undoStack.length>0?this.undoStack[this.undoStack.length-1]:null}get _minNumVerticesPerType(){switch(this.data.type){case"point":return 1;case"polyline":return 2;case"polygon":return 3;default:return 0}}_apply(e,r=E$1.ACCUMULATE_STEPS){return r!==E$1.NEW_STEP&&!t$3(this.lastOperation)&&this.lastOperation.accumulate(e)||(e.apply(),this.undoStack.push(e),this.redoStack=[]),e}static fromGeometry(e,t){return new S(g.fromGeometry(e,t))}}

export { E, L, N, S, b, d, g, i$2 as i, j, m, p, v, x, y };