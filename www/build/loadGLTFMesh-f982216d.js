import { l } from './Color-25ce730a.js';
import { U } from './request-ac4d8bfb.js';
import { r, h as e, as as o, t, aB as r$2 } from './cast-3d5be210.js';
import { r as r$4, an as w } from './mathUtils-559a53d9.js';
import { j } from './mat3-eb8de168.js';
import { e as e$1 } from './quatf64-06b7eadd.js';
import { r as r$3 } from './vec4f64-011248e0.js';
import { m, a as c$1, p, f } from './MeshComponent-b778671b.js';
import { T, i, c as c$2, x, u, L, O, E } from './BufferView-a9ba6e5d.js';
import { t as t$1, r as r$5, o as o$2, b as t$2, f as f$2, e as e$3, n as n$3 } from './vec33-241a09d2.js';
import { n, c, r as r$1, o as o$1, a as r$6, k as f$1, t as t$3, b as n$1, m as d, d as o$3, e as e$2, p as n$2, i as i$1, f as o$4, j as n$4, q as a } from './DefaultMaterial_COLOR_GAMMA-ba792f7e.js';
import { k } from './georeference-7e228372.js';
import { E as E$1, D } from './enums-4770f29d.js';
import './colorUtils-5009883d.js';
import './earcut-4e6b97b1.js';
import './Polyline-dcdb3782.js';
import './Point-edff2a11.js';
import './JSONSupport-dce2c67b.js';
import './Extent-f27111e1.js';
import './deduplicate-3951315a.js';
import './persistableUrlUtils-5dcd6081.js';
import './screenshotUtils-af7d4bfe.js';
import './vec2-4f9a494f.js';
import './types-4487be8c.js';
import './asyncUtils-96c00c9e.js';
import './mat4f64-ef2c1a38.js';
import './compilerUtils-d149ad5f.js';
import './Version-44ff489f.js';
import './mat4-d5df0e58.js';
import './quat-43e08490.js';
import './vectorStacks-3fa8ee55.js';
import './byteSizeEstimations-5d50d6ff.js';
import './vec2f64-2956001b.js';
import './lineSegment-99193ade.js';
import './unitUtils-a0a11e54.js';
import './projection-fbd5d346.js';
import './Collection-a38e0489.js';
import './assets-99f5c3ee.js';
import './aaBoundingRect-5e1a4e52.js';
import './zscale-0befeff4.js';
import './projection-a57f78d7.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
async function W(t,e,r$1){const o=new n(X(r$1)),n$1=(await c(o,e,r$1,!0)).model,s=n$1.lods.shift(),a=new Map,c$1=new Map;n$1.textures.forEach(((t,e)=>a.set(e,et(t)))),n$1.materials.forEach(((t,e)=>c$1.set(e,rt(t,a))));const l=tt(s);for(const i of l.parts)ot(l,i,c$1);const{position:u,normal:f,tangent:m,color:p$1,texCoord0:d}=l.vertexAttributes,h={position:u.typedBuffer,normal:r(f)?f.typedBuffer:null,tangent:r(m)?m.typedBuffer:null,uv:r(d)?d.typedBuffer:null,color:r(p$1)?p$1.typedBuffer:null},x=k(h,t,r$1);return {transform:x.transform,components:l.components,spatialReference:t.spatialReference,vertexAttributes:new p({position:x.vertexAttributes.position,normal:x.vertexAttributes.normal,tangent:x.vertexAttributes.tangent,color:h.color,uv:h.uv})}}function X(t){return t?.resolveFile?{busy:!1,request:async(r$1,o,n)=>{const s=t.resolveFile(r$1),a="image"===o?"image":"binary"===o?"array-buffer":"json";return (await U(s,{responseType:a,signal:r(n)?n.signal:null})).data}}:null}function Y(t$1,e){if(t(t$1))return "-";const o=t$1.typedBuffer;return `${r$2(e,o.buffer,(()=>e.size))}/${o.byteOffset}/${o.byteLength}`}function Z(t){return r(t)?t.toString():"-"}function tt(t){let e=0;const o={color:!1,tangent:!1,normal:!1,texCoord0:!1},n=new Map,s=new Map,i$1=[];for(const a of t.parts){const{attributes:{position:t,normal:c,color:l,tangent:u,texCoord0:f}}=a,m=`\n      ${Y(t,n)}/\n      ${Y(c,n)}/\n      ${Y(l,n)}/\n      ${Y(u,n)}/\n      ${Y(f,n)}/\n      ${Z(a.transform)}\n    `;let p=!1;const d=r$2(s,m,(()=>(p=!0,{start:e,length:t.count})));p&&(e+=t.count),c&&(o.normal=!0),l&&(o.color=!0),u&&(o.tangent=!0),f&&(o.texCoord0=!0),i$1.push({gltf:a,writeVertices:p,region:d});}return {vertexAttributes:{position:r$1(T,e),normal:o.normal?r$1(i,e):null,tangent:o.tangent?r$1(c$2,e):null,color:o.color?r$1(x,e):null,texCoord0:o.texCoord0?r$1(u,e):null},parts:i$1,components:[]}}function et(t){return new m({data:t.data,wrap:at(t.parameters.wrap)})}function rt(e$1,r){const o$1=new l(ut(e$1.color,e$1.opacity)),i=e$1.emissiveFactor?new l(ft(e$1.emissiveFactor)):null;return new c$1({color:o$1,colorTexture:e(o(e$1.textureColor,(t=>r.get(t)))),normalTexture:e(o(e$1.textureNormal,(t=>r.get(t)))),emissiveColor:i,emissiveTexture:e(o(e$1.textureEmissive,(t=>r.get(t)))),occlusionTexture:e(o(e$1.textureOcclusion,(t=>r.get(t)))),alphaMode:it(e$1.alphaMode),alphaCutoff:e$1.alphaCutoff,doubleSided:e$1.doubleSided,metallic:e$1.metallicFactor,roughness:e$1.roughnessFactor,metallicRoughnessTexture:e(o(e$1.textureMetallicRoughness,(t=>r.get(t))))})}function ot(t,e,r){e.writeVertices&&nt(t,e);const o=e.gltf,n=st(o.indices||o.attributes.position.count,o.primitiveType),s=e.region.start;if(s)for(let i=0;i<n.length;i++)n[i]+=s;t.components.push(new f({faces:n,material:r.get(o.material),trustSourceNormals:!0}));}function nt(t,e){const{position:r$1,normal:n,tangent:s,color:a,texCoord0:u}=t.vertexAttributes,f=e.region.start,{attributes:m,transform:p}=e.gltf,d$1=m.position.count;if(t$1(r$1.slice(f,d$1),m.position,p),r(m.normal)&&r(n)){const t=j(e$1(),p),e=n.slice(f,d$1);r$5(e,m.normal,t),w(t)&&o$2(e,e);}else r(n)&&t$2(n,0,0,1,{dstIndex:f,count:d$1});if(r(m.tangent)&&r(s)){const t=j(e$1(),p),e=s.slice(f,d$1);r$6(e,m.tangent,t),w(t)&&f$1(e,e);}else r(s)&&t$3(s,0,0,1,1,{dstIndex:f,count:d$1});if(r(m.texCoord0)&&r(u)?n$1(u.slice(f,d$1),m.texCoord0):r(u)&&d(u,0,0,{dstIndex:f,count:d$1}),r(m.color)&&r(a)){const t=m.color,e=a.slice(f,d$1);if(4===t.elementCount)t instanceof c$2?o$3(e,t,255):t instanceof x?e$2(e,t):t instanceof L&&n$2(e,t,8);else {t$3(e,255,255,255,255);const r=O.fromTypedArray(e.typedBuffer,e.typedBufferStride);t instanceof i?f$2(r,t,255):t instanceof O?e$3(r,t):t instanceof E&&n$3(r,t,8);}}else r(a)&&t$3(a.slice(f,d$1),255,255,255,255);}function st(t,e){switch(e){case E$1.TRIANGLES:return n$4(t,a);case E$1.TRIANGLE_STRIP:return o$4(t);case E$1.TRIANGLE_FAN:return i$1(t)}}function it(t){switch(t){case"OPAQUE":return "opaque";case"MASK":return "mask";case"BLEND":return "blend"}}function at(t){return {horizontal:ct(t.s),vertical:ct(t.t)}}function ct(t){switch(t){case D.CLAMP_TO_EDGE:return "clamp";case D.MIRRORED_REPEAT:return "mirror";case D.REPEAT:return "repeat"}}function lt(t){return t**(1/o$1)*255}function ut(t,e){return r$3(lt(t[0]),lt(t[1]),lt(t[2]),e)}function ft(t){return r$4(lt(t[0]),lt(t[1]),lt(t[2]))}

export { W as loadGLTFMesh };
