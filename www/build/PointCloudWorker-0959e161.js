import { r, bc as o } from './cast-3d5be210.js';
import { S } from './quat-43e08490.js';
import { e } from './I3SBinaryReader-1f7e5bc9.js';
import { S as S$1 } from './mathUtils-559a53d9.js';
import { r as r$1, n } from './vec3f32-03e33744.js';
import { U as Un } from './projection-fbd5d346.js';
import { k } from './Point-edff2a11.js';
import { c as c$1, a, f, m } from './PointCloudWorkerUtil-b9ef0d1e.js';
import './quatf64-06b7eadd.js';
import './VertexAttribute-ef09ced9.js';
import './unitUtils-a0a11e54.js';
import './request-ac4d8bfb.js';
import './Collection-a38e0489.js';
import './mat4-d5df0e58.js';
import './Extent-f27111e1.js';
import './Polyline-dcdb3782.js';
import './assets-99f5c3ee.js';
import './aaBoundingRect-5e1a4e52.js';
import './zscale-0befeff4.js';
import './JSONSupport-dce2c67b.js';
import './PointCloudUniqueValueRenderer-a0799765.js';
import './enumeration-6695a859.js';
import './ColorStop-64c57e35.js';
import './Color-25ce730a.js';
import './colorUtils-5009883d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class c{transform(e){const a=this._transform(e),o$1=[a.points.buffer,a.rgb.buffer];r(a.pointIdFilterMap)&&o$1.push(a.pointIdFilterMap.buffer);for(const t of a.attributes)"buffer"in t.values&&o(t.values.buffer)&&t.values.buffer!==a.rgb.buffer&&o$1.push(t.values.buffer);return Promise.resolve({result:a,transferList:o$1})}_transform(r$1){const e=c$1(r$1.schema,r$1.geometryBuffer);let a$1=e.length/3,o=null;const f$1=[],s=a(r$1.primaryAttributeData,e,a$1);r(r$1.primaryAttributeData)&&s&&f$1.push({attributeInfo:r$1.primaryAttributeData.attributeInfo,values:s});const i=a(r$1.modulationAttributeData,e,a$1);r(r$1.modulationAttributeData)&&i&&f$1.push({attributeInfo:r$1.modulationAttributeData.attributeInfo,values:i});let c=f(r$1.rendererInfo,s,i,a$1);if(r$1.filterInfo&&r$1.filterInfo.length>0&&r(r$1.filterAttributesData)){const t=r$1.filterAttributesData.map((t=>{const r=a(t,e,a$1),o={attributeInfo:t.attributeInfo,values:r};return f$1.push(o),o}));o=new Uint32Array(a$1),a$1=m(e,c,o,r$1.filterInfo,t);}for(const t of r$1.userAttributesData){const r=a(t,e,a$1);f$1.push({attributeInfo:t.attributeInfo,values:r});}3*a$1<c.length&&(c=new Uint8Array(c.buffer.slice(0,3*a$1))),this._applyElevationOffsetInPlace(e,a$1,r$1.elevationOffset);const p=this._transformCoordinates(e,a$1,r$1.obb,k.fromJSON(r$1.inSR),k.fromJSON(r$1.outSR));return {obb:r$1.obb,points:p,rgb:c,attributes:f$1,pointIdFilterMap:o}}_transformCoordinates(t,r,a,n$1,u){if(!Un(t,n$1,0,t,u,0,r))throw Error("Can't reproject");const l=r$1(a.center[0],a.center[1],a.center[2]),b=n(),m=n();S(p,a.quaternion);const c=new Float32Array(3*r);for(let e=0;e<r;e++)b[0]=t[3*e]-l[0],b[1]=t[3*e+1]-l[1],b[2]=t[3*e+2]-l[2],S$1(m,b,p),a.halfSize[0]=Math.max(a.halfSize[0],Math.abs(m[0])),a.halfSize[1]=Math.max(a.halfSize[1],Math.abs(m[1])),a.halfSize[2]=Math.max(a.halfSize[2],Math.abs(m[2])),c[3*e]=b[0],c[3*e+1]=b[1],c[3*e+2]=b[2];return c}_applyElevationOffsetInPlace(t,r,e){if(0!==e)for(let a=0;a<r;a++)t[3*a+2]+=e;}}const p=e();function h(){return new c}

export default h;
