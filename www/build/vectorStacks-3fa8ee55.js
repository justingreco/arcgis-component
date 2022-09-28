import { az as t$1 } from './cast-3d5be210.js';
import { o as o$2 } from './byteSizeEstimations-5d50d6ff.js';
import { n, a as n$2 } from './quatf64-06b7eadd.js';
import { n as n$1 } from './mat4f64-ef2c1a38.js';
import { o as o$1 } from './vec2f64-2956001b.js';
import { y as u } from './mathUtils-559a53d9.js';
import { u as u$1 } from './vec4f64-011248e0.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class s{constructor(t){this.allocator=t,this._items=[],this._itemsPtr=0,this._grow();}get(){return 0===this._itemsPtr&&t$1((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*i);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0;}_grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,i));t++)this._items.push(this.allocator());}}const i=1024;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class a$1{constructor(t,e,s){this.itemByteSize=t,this.itemCreate=e,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(s/this.itemByteSize);}get(){0===this._itemsPtr&&t$1((()=>this._reset()));const t=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=t;){const t=new ArrayBuffer(this._itemsPerBuffer*this.itemByteSize);for(let e=0;e<this._itemsPerBuffer;++e)this._items.push(this.itemCreate(t,e*this.itemByteSize));this._buffers.push(t);}return this._items[this._itemsPtr++]}_reset(){const t=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>t;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0;}static createVec2f64(t=c$1){return new a$1(16,o$1,t)}static createVec3f64(t=c$1){return new a$1(24,u,t)}static createVec4f64(t=c$1){return new a$1(32,u$1,t)}static createMat3f64(t=c$1){return new a$1(72,n,t)}static createMat4f64(t=c$1){return new a$1(128,n$1,t)}static createQuatf64(t=c$1){return new a$1(32,n$2,t)}get test(){return {size:this._buffers.length*this._itemsPerBuffer*this.itemByteSize}}}const c$1=4*o$2.KILOBYTES;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const t=a$1.createVec2f64(),c=a$1.createVec3f64(),r=a$1.createVec4f64(),a=a$1.createMat3f64(),f=a$1.createMat4f64(),o=a$1.createQuatf64();

export { c, f, o, r, s, t };
