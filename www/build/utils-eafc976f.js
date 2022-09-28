import { r, t } from './cast-3d5be210.js';
import { y as y$1 } from './mat3-eb8de168.js';
import { e as e$1, b as e$3 } from './quatf64-06b7eadd.js';
import { h, o, n, u as u$2 } from './mat4-d5df0e58.js';
import { e } from './mat4f64-ef2c1a38.js';
import { S as S$2 } from './quat-43e08490.js';
import { n as n$1, S as S$1, u as u$3, e as e$2 } from './mathUtils-559a53d9.js';
import { n as n$2 } from './vec3f32-03e33744.js';
import { _ } from './sphere-4710475c.js';
import { h as h$1 } from './Util-73f4ac53.js';
import { t as t$1 } from './doublePrecisionUtils-5c7a1f3b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class u$1{constructor(){this._transform=e(),this._transformInverse=new M({value:this._transform},h,e),this._transformInverseTranspose=new M(this._transformInverse,o,e),this._transformTranspose=new M({value:this._transform},o,e),this._transformInverseRotation=new M({value:this._transform},y$1,e$1);}_invalidateLazyTransforms(){this._transformInverse.invalidate(),this._transformInverseTranspose.invalidate(),this._transformTranspose.invalidate(),this._transformInverseRotation.invalidate();}get transform(){return this._transform}get inverse(){return this._transformInverse.value}get inverseTranspose(){return this._transformInverseTranspose.value}get inverseRotation(){return this._transformInverseRotation.value}get transpose(){return this._transformTranspose.value}setTransformMatrix(t){n(this._transform,t);}multiplyTransform(t){u$2(this._transform,this._transform,t);}set(t){n(this._transform,t),this._invalidateLazyTransforms();}setAndInvalidateLazyTransforms(t,s){this.setTransformMatrix(t),this.multiplyTransform(s),this._invalidateLazyTransforms();}}class M{constructor(t,s,e){this.original=t,this.update=s,this.dirty=!0,this.transform=e();}invalidate(){this.dirty=!0;}get value(){return this.dirty&&(this.update(this.transform,this.original.value),this.dirty=!1),this.transform}}class v{constructor(t=0){this.offset=t,this.tmpVertex=n$1();}applyToVertex(t,s,e){const i=t+this.localOrigin[0],r=s+this.localOrigin[1],a=e+this.localOrigin[2],o=this.offset/Math.sqrt(i*i+r*r+a*a);return this.tmpVertex[0]=t+i*o,this.tmpVertex[1]=s+r*o,this.tmpVertex[2]=e+a*o,this.tmpVertex}applyToAabb(t){for(let r=0;r<3;++r)O[r]=t[0+r]+this.localOrigin[r],z[r]=t[3+r]+this.localOrigin[r],T[r]=O[r];const s=this.applyToVertex(O[0],O[1],O[2]);for(let r=0;r<3;++r)t[r]=s[r],t[r+3]=s[r];const e=s=>{const e=this.applyToVertex(s[0],s[1],s[2]);for(let i=0;i<3;++i)t[i+0]=Math.min(t[i+0],e[i]),t[i+3]=Math.max(t[i+3],e[i]);};for(let r=1;r<8;++r){for(let t=0;t<3;++t)T[t]=0==(r&1<<t)?O[t]:z[t];e(T);}let i=0;for(let r=0;r<3;++r){O[r]*z[r]<0&&(i|=1<<r);}if(0!==i&&7!==i)for(let r=0;r<8;++r)if(0==(i&r)){for(let t=0;t<3;++t)i[t]?T[t]=0:T[t]=0!=(r&1<<t)?O[t]:z[t];e(T);}for(let r=0;r<3;++r)t[r+0]-=this.localOrigin[r],t[r+3]-=this.localOrigin[r];return t}}const O=n$1(),z=n$1(),T=n$1();class g$1{constructor(t=0){this.componentLocalOriginLength=0,this._tmpVertex=n$1(),this._mbs=_(),this._obb={center:n$1(),halfSize:n$2(),quaternion:null},this._totalOffset=0,this._offset=0,this._resetOffset(t);}_resetOffset(t){this._offset=t,this._totalOffset=t;}set offset(t){this._resetOffset(t);}get offset(){return this._offset}set componentOffset(t){this._totalOffset=this._offset+t;}set localOrigin(t){this.componentLocalOriginLength=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);}applyToVertex(t,s,e){const i=t,r=s,a=e+this.componentLocalOriginLength,o=this._totalOffset/Math.sqrt(i*i+r*r+a*a);return this._tmpVertex[0]=t+i*o,this._tmpVertex[1]=s+r*o,this._tmpVertex[2]=e+a*o,this._tmpVertex}applyToAabb(t){const s=t[0],e=t[1],i=t[2]+this.componentLocalOriginLength,r=t[3],a=t[4],o=t[5]+this.componentLocalOriginLength,h=s*r<0?0:Math.min(Math.abs(s),Math.abs(r)),n=e*a<0?0:Math.min(Math.abs(e),Math.abs(a)),f=i*o<0?0:Math.min(Math.abs(i),Math.abs(o)),l=Math.sqrt(h*h+n*n+f*f);if(l<this._totalOffset)return t[0]-=s<0?this._totalOffset:0,t[1]-=e<0?this._totalOffset:0,t[2]-=i<0?this._totalOffset:0,t[3]+=r>0?this._totalOffset:0,t[4]+=a>0?this._totalOffset:0,t[5]+=o>0?this._totalOffset:0,t;const m=Math.max(Math.abs(s),Math.abs(r)),b=Math.max(Math.abs(e),Math.abs(a)),_=Math.max(Math.abs(i),Math.abs(o)),c=Math.sqrt(m*m+b*b+_*_),p=this._totalOffset/c,u=this._totalOffset/l;return t[0]+=s*(s>0?p:u),t[1]+=e*(e>0?p:u),t[2]+=i*(i>0?p:u),t[3]+=r*(r<0?p:u),t[4]+=a*(a<0?p:u),t[5]+=o*(o<0?p:u),t}applyToMbs(t){const s=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]),e=this._totalOffset/s;return this._mbs[0]=t[0]+t[0]*e,this._mbs[1]=t[1]+t[1]*e,this._mbs[2]=t[2]+t[2]*e,this._mbs[3]=t[3]+t[3]*this._totalOffset/s,this._mbs}applyToObb(t){const s=t.center,e=this._totalOffset/Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);this._obb.center[0]=s[0]+s[0]*e,this._obb.center[1]=s[1]+s[1]*e,this._obb.center[2]=s[2]+s[2]*e,S$1(this._obb.halfSize,t.halfSize,t.quaternion),u$3(this._obb.halfSize,this._obb.halfSize,t.center);const i=this._totalOffset/Math.sqrt(this._obb.halfSize[0]*this._obb.halfSize[0]+this._obb.halfSize[1]*this._obb.halfSize[1]+this._obb.halfSize[2]*this._obb.halfSize[2]);return this._obb.halfSize[0]+=this._obb.halfSize[0]*i,this._obb.halfSize[1]+=this._obb.halfSize[1]*i,this._obb.halfSize[2]+=this._obb.halfSize[2]*i,e$2(this._obb.halfSize,this._obb.halfSize,t.center),S$2(I,t.quaternion),S$1(this._obb.halfSize,this._obb.halfSize,I),this._obb.halfSize[0]*=this._obb.halfSize[0]<0?-1:1,this._obb.halfSize[1]*=this._obb.halfSize[1]<0?-1:1,this._obb.halfSize[2]*=this._obb.halfSize[2]<0?-1:1,this._obb.quaternion=t.quaternion,this._obb}}class x{constructor(t=0){this.offset=t,this.sphere=_(),this.tmpVertex=n$1();}applyToVertex(t,s,e){const i=this.objectTransform.transform;let r=i[0]*t+i[4]*s+i[8]*e+i[12],a=i[1]*t+i[5]*s+i[9]*e+i[13],o=i[2]*t+i[6]*s+i[10]*e+i[14];const h=this.offset/Math.sqrt(r*r+a*a+o*o);r+=r*h,a+=a*h,o+=o*h;const n=this.objectTransform.inverse;return this.tmpVertex[0]=n[0]*r+n[4]*a+n[8]*o+n[12],this.tmpVertex[1]=n[1]*r+n[5]*a+n[9]*o+n[13],this.tmpVertex[2]=n[2]*r+n[6]*a+n[10]*o+n[14],this.tmpVertex}applyToMinMax(t,s){const e=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*e,t[1]+=t[1]*e,t[2]+=t[2]*e;const i=this.offset/Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);s[0]+=s[0]*i,s[1]+=s[1]*i,s[2]+=s[2]*i;}applyToAabb(t){const s=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*s,t[1]+=t[1]*s,t[2]+=t[2]*s;const e=this.offset/Math.sqrt(t[3]*t[3]+t[4]*t[4]+t[5]*t[5]);return t[3]+=t[3]*e,t[4]+=t[4]*e,t[5]+=t[5]*e,t}applyToBoundingSphere(t){const s=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]),e=this.offset/s;return this.sphere[0]=t[0]+t[0]*e,this.sphere[1]=t[1]+t[1]*e,this.sphere[2]=t[2]+t[2]*e,this.sphere[3]=t[3]+t[3]*this.offset/s,this.sphere}}const S=new x;function y(s){return r(s)?(S.offset=s,S):null}const q=new g$1;function V(s){return r(s)?(q.offset=s,q):null}const d=new v;function L(s){return r(s)?(d.offset=s,d):null}const j$1="terrain",I=e$3();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function c(r,n){return t(r)&&(r=[]),r.push(n),r}function f(r,n){if(t(r))return null;const o=r.filter((t=>t!==n));return 0===o.length?null:o}function u(t){return !!r(t)&&!t.visible}function l(t,i,m){const c=t.origin.vec3;h$1(j,-c[0],-c[1],-c[2]),r(t.transformation)?u$2(i,j,t.transformation):n(i,j),m&&(h(m,i),o(m,m));}function p(t,r,n,o,s){g[0]=t.get(r,0),g[1]=t.get(r,1),g[2]=t.get(r,2),t$1(g,b,3),n.set(s,0,b[0]),o.set(s,0,b[1]),n.set(s,1,b[2]),o.set(s,1,b[3]),n.set(s,2,b[4]),o.set(s,2,b[5]);}const g=new Float64Array(3),b=new Float32Array(6),j=e();

export { L, V, u as a, c, f, j$1 as j, l, p, u$1 as u, y };