import { r, c as a } from './cast-3d5be210.js';
import { h } from './PooledRBush-70299040.js';
import { _ } from './georeference-7e228372.js';
import './quickselect-d6c9284c.js';
import './unitUtils-a0a11e54.js';
import './request-ac4d8bfb.js';
import './Point-edff2a11.js';
import './JSONSupport-dce2c67b.js';
import './quatf64-06b7eadd.js';
import './mat4-d5df0e58.js';
import './mathUtils-559a53d9.js';
import './mat4f64-ef2c1a38.js';
import './mat3-eb8de168.js';
import './projection-fbd5d346.js';
import './Collection-a38e0489.js';
import './Extent-f27111e1.js';
import './Polyline-dcdb3782.js';
import './assets-99f5c3ee.js';
import './aaBoundingRect-5e1a4e52.js';
import './zscale-0befeff4.js';
import './quat-43e08490.js';
import './BufferView-a9ba6e5d.js';
import './vec2-4f9a494f.js';
import './vec33-241a09d2.js';
import './projection-a57f78d7.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class o{async createIndex(e,n){const o=new Array;if(!e.vertexAttributes||!e.vertexAttributes.position)return new h;const s=this._createMeshData(e),a=r(n)?await n.invoke("createIndexThread",s,{transferList:o}):this.createIndexThread(s).result;return this._createPooledRBush().fromJSON(a)}createIndexThread(e){const t=new Float64Array(e.position),r=this._createPooledRBush();return e.components?this._createIndexComponentsThread(r,t,e.components.map((e=>new Uint32Array(e)))):this._createIndexAllThread(r,t)}_createIndexAllThread(e,t){const r=new Array(t.length/9);let n=0;for(let o=0;o<t.length;o+=9)r[n++]=s(t,o+0,o+3,o+6);return e.load(r),{result:e.toJSON()}}_createIndexComponentsThread(e,t,r){let n=0;for(const s of r)n+=s.length/3;const o=new Array(n);let a=0;for(const i of r)for(let e=0;e<i.length;e+=3)o[a++]=s(t,3*i[e+0],3*i[e+1],3*i[e+2]);return e.load(o),{result:e.toJSON()}}_createMeshData(e){const t=(e.transform?_({position:e.vertexAttributes.position,normal:null,tangent:null},e.transform,e.spatialReference).position:e.vertexAttributes.position).buffer;return !e.components||e.components.some((e=>!e.faces))?{position:t}:{position:t,components:e.components.map((e=>e.faces))}}_createPooledRBush(){return new h(9,a("esri-csp-restrictions")?e=>e:[".minX",".minY",".maxX",".maxY"])}}function s(e,t,r,n){return {minX:Math.min(e[t+0],e[r+0],e[n+0]),maxX:Math.max(e[t+0],e[r+0],e[n+0]),minY:Math.min(e[t+1],e[r+1],e[n+1]),maxY:Math.max(e[t+1],e[r+1],e[n+1]),p0:[e[t+0],e[t+1],e[t+2]],p1:[e[r+0],e[r+1],e[r+2]],p2:[e[n+0],e[n+1],e[n+2]]}}

export default o;
