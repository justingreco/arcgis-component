import { a as a$n } from './devEnvironmentUtils-cb76d69b.js';
import { r as r$9, s as s$8, a as s$9, aS as s$a, aA as n$d, t as t$f, aR as p$9, U as k$4, R as e$m, ba as c$j, bc as o$q, bd as e$o, X as f$a, l as a$h, A as v$8, x as m$e, h as e$p, e as e$t, c as a$k, $ as w$6, ak as m$f } from './cast-3d5be210.js';
import { j as j$6 } from './mat3-eb8de168.js';
import { e as e$s } from './quatf64-06b7eadd.js';
import { c as c$i, G as G$3, h as h$c } from './mat4-d5df0e58.js';
import { e as e$r, o as o$s } from './mat4f64-ef2c1a38.js';
import { a as o$o, D as r$c, n as n$f, r as r$d, o as o$p, k as j$5, b as r$e, q, u as u$d, g as t$h, A as A$7, p as p$a, Z as s$b, M as M$4, a5 as f$9, _ as _$6, z as z$1, ah as i$j, a7 as a$i, e as e$q, L as L$4, s as s$c, P as P$6, O as O$4, a6 as e$u, ai as i$m } from './mathUtils-559a53d9.js';
import { a as a$e, q as q$1, w as w$5, h as h$b, B as B$5 } from './aaBoundingBox-b312516d.js';
import { c as c$k, x as x$2, u as u$g, i as i$i, L as L$5, O as O$5, E as E$9 } from './BufferView-a9ba6e5d.js';
import { t as t$j, r as r$j, f as f$b, e as e$w } from './vec33-241a09d2.js';
import { l as l$c, u as u$e, g as g$9, c as c$o, n as n$m, o as o$t, r as r$i, a as r$k, b as n$n, d as o$u, e as e$v, t as t$k, i as i$l, f as o$v, j as n$o } from './DefaultMaterial_COLOR_GAMMA-ba792f7e.js';
import { V as V$4, X as X$1, i as a$g, U as U$3 } from './request-ac4d8bfb.js';
import { a as a$m } from './asyncUtils-96c00c9e.js';
import { r as r$h } from './Version-44ff489f.js';
import { i as i$h, a as c$h, h as l$e, t as t$i, p as a$j, C as C$2, O as O$3, n as n$l, N as N$2, W as W$4, d as c$m, E as E$8, k as h$a, e as l$f, b as a$l, c as c$n, g as i$k, _ as _$8 } from './OrderIndependentTransparency-b8c8f539.js';
import { e as e$l } from './Util-73f4ac53.js';
import { O as O$1 } from './VertexAttribute-ef09ced9.js';
import { n as n$c } from './compilerUtils-d149ad5f.js';
import { n as n$h } from './Collection-a38e0489.js';
import { a as a$f } from './assets-99f5c3ee.js';
import { E as E$7, C as C$1, F as F$2, M as M$3, P as P$5, G as G$2, L as L$3, u as u$h, D as D$2, Y as Y$1, V as V$5, I as I$5, O as O$2 } from './enums-4770f29d.js';
import { a as u$b, u as u$c, n as n$i, c as c$l } from './Texture-f189b7ba.js';
import { f as f$7, c as c$g, _ as _$7, D as D$3, n as n$j } from './FramebufferObject-bfb23fd2.js';
import { t as t$g } from './VertexElementDescriptor-3b53aa99.js';
import { l as l$d } from './ViewingMode-4a1cffad.js';
import { T as T$5 } from './InterleavedLayout-fe763b01.js';
import { r as r$b, n as n$k } from './vec3f32-03e33744.js';
import { r as r$a } from './vec2-4f9a494f.js';
import { f as f$8, n as n$e } from './vec2f64-2956001b.js';
import { a as u$f, y as y$3 } from './utils-eafc976f.js';
import { n as n$g, r as r$f } from './vec4f64-011248e0.js';
import { o as o$r, r as r$g } from './doublePrecisionUtils-5c7a1f3b.js';
import { e as e$n } from './jsonUtils-f3f35e7f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class t$e{}function n$b(t,...n){let o="";for(let r=0;r<n.length;r++)o+=t[r]+n[r];return o+=t[t.length-1],o}!function(t){function n(t){return Math.round(t).toString()}function o(t){return t.toPrecision(8)}t.int=n,t.float=o;}(n$b||(n$b={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var o$n;function d$b(d,a){switch(a.textureCoordinateType){case o$n.Default:return d.attributes.add(O$1.UV0,"vec2"),d.varyings.add("vuv0","vec2"),void d.vertex.code.add(n$b`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case o$n.Atlas:return d.attributes.add(O$1.UV0,"vec2"),d.varyings.add("vuv0","vec2"),d.attributes.add(O$1.UVREGION,"vec4"),d.varyings.add("vuvRegion","vec4"),void d.vertex.code.add(n$b`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);case o$n.None:return void d.vertex.code.add(n$b`void forwardTextureCoordinates() {}`);default:n$c(a.textureCoordinateType);case o$n.COUNT:return}}!function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.COUNT=3]="COUNT";}(o$n||(o$n={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function a$d(a){a.code.add(n$b`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function a$c(a){a.include(a$d),a.code.add(n$b`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var a$b;!function(a){a[a.Pass=0]="Pass",a[a.Draw=1]="Draw";}(a$b||(a$b={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class i$g{constructor(i,s,t,a,n=null){this.name=i,this.type=s,this.arraySize=n,this.bind={[a$b.Pass]:null,[a$b.Draw]:null},r$9(t)&&r$9(a)&&(this.bind[t]=a);}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class e$k extends i$g{constructor(r,e){super(r,"vec2",a$b.Pass,((s,o,t)=>s.setUniform2fv(r,e(o,t))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class e$j extends i$g{constructor(r,e){super(r,"vec3",a$b.Pass,((s,o,t)=>s.setUniform3fv(r,e(o,t))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class e$i extends i$g{constructor(r,e){super(r,"mat4",a$b.Pass,((s,o,t)=>s.setUniformMatrix4fv(r,e(o,t))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const n$a=s$8.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class s$7{constructor(){this.includedModules=new Map;}include(e,r){if(this.includedModules.has(e)){const t=this.includedModules.get(e);if(t!==r){n$a.error("Trying to include shader module multiple times with different sets of options.");const r=new Set;for(const n of Object.keys(t))t[n]!==e[n]&&r.add(n);for(const n of Object.keys(e))t[n]!==e[n]&&r.add(n);r.forEach((r=>console.error(`  ${r}: current ${t[r]} new ${e[r]}`)));}}else this.includedModules.set(e,r),e(this.builder,r);}}class i$f extends s$7{constructor(){super(...arguments),this.vertex=new c$f,this.fragment=new c$f,this.attributes=new u$a,this.varyings=new m$d,this.extensions=new h$9,this.constants=new d$a;}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const r=this.extensions.generateSource(e),t=this.attributes.generateSource(e),n=this.varyings.generateSource(),s="vertex"===e?this.vertex:this.fragment,i=s.uniforms.generateSource(),o=s.code.generateSource(),a="vertex"===e?_$5:l$b,c=this.constants.generateSource().concat(s.constants.generateSource());return `\n${r.join("\n")}\n\n${a}\n\n${c.join("\n")}\n\n${i.join("\n")}\n\n${t.join("\n")}\n\n${n.join("\n")}\n\n${o.join("\n")}`}generateBind(e,r){const n=new Map;this.vertex.uniforms.entries.forEach((r=>{const s=r.bind[e];r$9(s)&&n.set(r.name,s);})),this.fragment.uniforms.entries.forEach((r=>{const s=r.bind[e];r$9(s)&&n.set(r.name,s);}));const s=Array.from(n.values()),i=s.length;return (e,t)=>{for(let n=0;n<i;++n)s[n](r,e,t);}}}class o$m{constructor(){this._entries=new Map;}add(e){if(!Array.isArray(e))return this._add(e);for(const r of e)this._add(r);}_add(r){if(this._entries.has(r.name)&&!this._entries.get(r.name).equals(r))throw new s$9(`Duplicate uniform name ${r.name} for different uniform type`);this._entries.set(r.name,r);}generateSource(){return Array.from(this._entries.values()).map((e=>r$9(e.arraySize)?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`))}get entries(){return Array.from(this._entries.values())}}class a$a{constructor(){this._entries=new Array;}add(e){this._entries.push(e);}generateSource(){return this._entries}}class c$f extends s$7{constructor(){super(...arguments),this.uniforms=new o$m,this.code=new a$a,this.constants=new d$a;}get builder(){return this}}class u$a{constructor(){this._entries=new Array;}add(e,r){this._entries.push([e,r]);}generateSource(e){return "fragment"===e?[]:this._entries.map((e=>`attribute ${e[1]} ${e[0]};`))}}class m$d{constructor(){this._entries=new Array;}add(e,r){this._entries.push([e,r]);}generateSource(){return this._entries.map((e=>`varying ${e[1]} ${e[0]};`))}}class h$9{constructor(){this._entries=new Set;}add(e){this._entries.add(e);}generateSource(e){const r="vertex"===e?h$9.ALLOWLIST_VERTEX:h$9.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>r.includes(e))).map((e=>`#extension ${e} : enable`))}}h$9.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],h$9.ALLOWLIST_VERTEX=[];class d$a{constructor(){this._entries=new Set;}add(e,r,t){let n="ERROR_CONSTRUCTOR_STRING";switch(r){case"float":n=d$a._numberToFloatStr(t);break;case"int":n=d$a._numberToIntStr(t);break;case"bool":n=t.toString();break;case"vec2":n=`vec2(${d$a._numberToFloatStr(t[0])},                            ${d$a._numberToFloatStr(t[1])})`;break;case"vec3":n=`vec3(${d$a._numberToFloatStr(t[0])},                            ${d$a._numberToFloatStr(t[1])},                            ${d$a._numberToFloatStr(t[2])})`;break;case"vec4":n=`vec4(${d$a._numberToFloatStr(t[0])},                            ${d$a._numberToFloatStr(t[1])},                            ${d$a._numberToFloatStr(t[2])},                            ${d$a._numberToFloatStr(t[3])})`;break;case"ivec2":n=`ivec2(${d$a._numberToIntStr(t[0])},                             ${d$a._numberToIntStr(t[1])})`;break;case"ivec3":n=`ivec3(${d$a._numberToIntStr(t[0])},                             ${d$a._numberToIntStr(t[1])},                             ${d$a._numberToIntStr(t[2])})`;break;case"ivec4":n=`ivec4(${d$a._numberToIntStr(t[0])},                             ${d$a._numberToIntStr(t[1])},                             ${d$a._numberToIntStr(t[2])},                             ${d$a._numberToIntStr(t[3])})`;break;case"mat2":case"mat3":case"mat4":n=`${r}(${Array.prototype.map.call(t,(e=>d$a._numberToFloatStr(e))).join(", ")})`;}return this._entries.add(`const ${r} ${e} = ${n};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const l$b="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",_$5="precision highp float;\nprecision highp sampler2D;";

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class t$d{constructor(t,o){this._module=t,this._loadModule=o;}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class e$h{constructor(i,t,e){this.release=e,t&&(this.initializeConfiguration(i,t),this._configuration=t.snapshot()),this._program=this.initializeProgram(i),this._pipeline=this.initializePipeline(i.rctx.capabilities);}destroy(){this._program=s$a(this._program),this._pipeline=this._configuration=null;}reload(t){s$a(this._program),this._program=this.initializeProgram(t),this._pipeline=this.initializePipeline(t.rctx.capabilities);}get program(){return this._program}get compiled(){return this.program.isCompiled}get key(){return this._configuration.key}get configuration(){return this._configuration}bindPass(i,t){this.program.bindPass(i,t);}bindDraw(i,t){this.program.bindDraw(i,t),this.program.rebindTextures();}bindPipelineState(i,t=null,e){i.setPipelineState(this.getPipelineState(t,e));}ensureAttributeLocations(i){this.program.assertCompatibleVertexAttributeLocations(i);}get primitiveType(){return E$7.TRIANGLES}getPipelineState(i,t){return this._pipeline}initializeConfiguration(i,t){}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const E$6=new Map([[O$1.POSITION,0],[O$1.NORMAL,1],[O$1.UV0,2],[O$1.COLOR,3],[O$1.SIZE,4],[O$1.TANGENT,4],[O$1.AUXPOS1,5],[O$1.SYMBOLCOLOR,5],[O$1.AUXPOS2,6],[O$1.FEATUREATTRIBUTE,6],[O$1.INSTANCEFEATUREATTRIBUTE,6],[O$1.INSTANCECOLOR,7],[O$1.MODEL,8],[O$1.MODELNORMAL,12],[O$1.MODELORIGINHI,11],[O$1.MODELORIGINLO,15]]);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class o$l{constructor(t,e,o){this._context=t,this._locations=o,this._textures=new Map,this._freeTextureUnits=new n$d({deallocator:null}),this._glProgram=t.programCache.acquire(e.generate("vertex"),e.generate("fragment"),o),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=e.generateBind(a$b.Pass,this),this.bindDraw=e.generateBind(a$b.Draw,this),this._fragmentUniforms=u$b()?e.fragmentUniforms:null;}dispose(){this._glProgram.dispose();}get glName(){return this._glProgram.glName}get isCompiled(){return this._glProgram.isCompiled}setUniform1b(t,e){this._glProgram.setUniform1i(t,e?1:0);}setUniform1i(t,e){this._glProgram.setUniform1i(t,e);}setUniform1f(t,e){this._glProgram.setUniform1f(t,e);}setUniform2f(t,e,r){this._glProgram.setUniform2f(t,e,r);}setUniform2fv(t,e){this._glProgram.setUniform2fv(t,e);}setUniform3f(t,e,r,i){this._glProgram.setUniform3f(t,e,r,i);}setUniform3fv(t,e){this._glProgram.setUniform3fv(t,e);}setUniform4f(t,e,r,i,s){this._glProgram.setUniform4f(t,e,r,i,s);}setUniform4fv(t,e){this._glProgram.setUniform4fv(t,e);}setUniformMatrix3fv(t,e){this._glProgram.setUniformMatrix3fv(t,e);}setUniformMatrix4fv(t,e){this._glProgram.setUniformMatrix4fv(t,e);}setUniform1fv(t,e){this._glProgram.setUniform1fv(t,e);}setUniform1iv(t,e){this._glProgram.setUniform1iv(t,e);}setUniform2iv(t,e){this._glProgram.setUniform3iv(t,e);}setUniform3iv(t,e){this._glProgram.setUniform3iv(t,e);}setUniform4iv(t,e){this._glProgram.setUniform4iv(t,e);}assertCompatibleVertexAttributeLocations(t){t.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible");}stop(){this._textures.clear(),this._freeTextureUnits.clear();}bindTexture(e,r){if(t$f(r)||null==r.glName){const t=this._textures.get(e);return t&&(this._context.bindTexture(null,t.unit),this._freeTextureUnit(t),this._textures.delete(e)),null}let i=this._textures.get(e);return null==i?(i=this._allocTextureUnit(r),this._textures.set(e,i)):i.texture=r,this._context.useProgram(this),this.setUniform1i(e,i.unit),this._context.bindTexture(r,i.unit),i.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((t,e)=>{this._context.bindTexture(t.texture,t.unit),this.setUniform1i(e,t.unit);})),r$9(this._fragmentUniforms)&&this._fragmentUniforms.forEach((t=>{"sampler2D"!==t.type&&"samplerCube"!==t.type||this._textures.has(t.name)||console.error(`Texture sampler ${t.name} has no bound texture`);}));}_allocTextureUnit(t){return {texture:t,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(t){this._freeTextureUnits.push(t.unit);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class t$c{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map((()=>0)):[],this._parameterNames||(this._parameterNames=[]);}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const t=this._parameterNames,e={key:this.key};for(const r of t)e[r]=this[r];return e}}function e$g(t={}){return (e,r)=>{if(e._parameterNames=e._parameterNames??[],e._parameterNames.push(r),null!=t.constValue)Object.defineProperty(e,r,{get:()=>t.constValue});else {const s=e._parameterNames.length-1,a=t.count||2,i=Math.ceil(Math.log2(a)),o=e._parameterBits??[0];let h=0;for(;o[h]+i>16;)h++,h>=o.length&&o.push(0);e._parameterBits=o;const n=o[h],m=(1<<i)-1<<n;o[h]+=i,Object.defineProperty(e,r,{get(){return this[s]},set(t){if(this[s]!==t&&(this[s]=t,this._keyDirty=!0,this._parameterBits[h]=this._parameterBits[h]&~m|+t<<n&m,"number"!=typeof t&&"boolean"!=typeof t))throw "Configuration value for "+r+" must be boolean or number, got "+typeof t}});}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const n$9=[new t$g(O$1.POSITION,3,C$1.FLOAT,0,12)],w$4=[new t$g(O$1.POSITION,3,C$1.FLOAT,0,20),new t$g(O$1.UV0,2,C$1.FLOAT,12,20)],I$4=[new t$g(O$1.POSITION,3,C$1.FLOAT,0,32),new t$g(O$1.NORMAL,3,C$1.FLOAT,12,32),new t$g(O$1.UV0,2,C$1.FLOAT,24,32)],r$8=[new t$g(O$1.POSITION,3,C$1.FLOAT,0,16),new t$g(O$1.COLOR,4,C$1.UNSIGNED_BYTE,12,16)],t$b=[new t$g(O$1.POSITION,2,C$1.FLOAT,0,8)],A$6=[new t$g(O$1.POSITION,2,C$1.FLOAT,0,16),new t$g(O$1.UV0,2,C$1.FLOAT,8,16)];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function u$9(a,i=t$b,m=E$6,l=-1,T=1){let u=null;if(i===A$6)u=new Float32Array([l,l,0,0,T,l,1,0,l,T,0,1,T,T,1,1]);else u=new Float32Array([l,l,T,l,l,T,T,T]);return new f$7(a,m,{geometry:i},{geometry:c$g.createVertex(a,F$2.STATIC_DRAW,u)})}function g$8(r,a=t$b,i=E$6){const m=new Float32Array([-1,-1,3,-1,-1,3]);return new f$7(r,i,{geometry:a},{geometry:c$g.createVertex(r,F$2.STATIC_DRAW,m)})}const E$5=4;function w$3(e,t=E$5){return new u$c(e,{target:M$3.TEXTURE_2D,pixelFormat:P$5.RGBA,dataType:G$2.UNSIGNED_BYTE,samplingMode:L$3.NEAREST,width:t,height:t})}function A$5(e,t,r=E$5){const o=new Uint8Array(r*r*4);for(let n=0;n<o.length;n+=4)o[n+0]=255*t[0],o[n+1]=255*t[1],o[n+2]=255*t[2],o[n+3]=255*t[3];return new u$c(e,{target:M$3.TEXTURE_2D,pixelFormat:P$5.RGBA,dataType:G$2.UNSIGNED_BYTE,samplingMode:L$3.NEAREST,width:r,height:r},o)}function p$8(e){return new u$c(e,{target:M$3.TEXTURE_2D,pixelFormat:P$5.RGBA,dataType:G$2.UNSIGNED_BYTE,samplingMode:L$3.NEAREST,width:1,height:1},new Uint8Array([255,255,255,255]))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function t$a(t){t.extensions.add("GL_EXT_shader_texture_lod"),t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(n$b`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function a$9(a,s){switch(a.include(d$b,s),a.fragment.code.add(n$b`
  struct TextureLookupParameter {
    vec2 uv;
    ${s.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),s.textureCoordinateType){case o$n.Default:return void a.fragment.code.add(n$b`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return texture2D(texture, params.uv);
}`);case o$n.Atlas:return a.include(t$a),void a.fragment.code.add(n$b`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return textureAtlasLookup(texture, params.size, params.uv, vuvRegion);
}`);default:n$c(s.textureCoordinateType);case o$n.None:case o$n.COUNT:return}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class o$k extends i$g{constructor(r,o){super(r,"vec3",a$b.Draw,((e,s,t)=>e.setUniform3fv(r,o(s,t))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class o$j extends i$g{constructor(r,o){super(r,"vec2",a$b.Draw,((e,s,t)=>e.setUniform2fv(r,o(s,t))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class c$e extends i$g{constructor(r,o){super(r,"sampler2D",a$b.Draw,((s,e,t)=>s.bindTexture(r,o(e,t))));}}function m$c(e,n,i){const m=[new c$e(e,n)];if(i){const i=e+"Size";m.push(new o$j(i,((e,t)=>{const i=n(e,t);return r$9(i)?r$a(p$7,i.descriptor.width,i.descriptor.height):f$8})));}return m}const p$7=n$e();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class c$d extends i$g{constructor(r,s){super(r,"sampler2D",a$b.Pass,((o,e,t)=>o.bindTexture(r,s(e,t))));}}function m$b(e,n,i){const m=[new c$d(e,n)];if(i){const i=e+"Size";m.push(new e$k(i,((e,t)=>{const i=n(e,t);return r$9(i)?r$a(p$6,i.descriptor.width,i.descriptor.height):f$8})));}return m}const p$6=n$e();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class t$9{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output;}dispose(){this._techniqueRepository.release(this._technique);}get technique(){return this._technique}ensureTechnique(e,t,i=this._output){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(i,t),this._technique),this._technique}ensureResources(t){return i$h.LOADED}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class h$8 extends t$9{constructor(t){super(t),this._numLoading=0,this._disposed=!1,this._textureRepository=t.textureRep,this._textureId=t.textureId,this._acquire(t.textureId,(t=>this._texture=t)),this._acquire(t.normalTextureId,(t=>this._textureNormal=t)),this._acquire(t.emissiveTextureId,(t=>this._textureEmissive=t)),this._acquire(t.occlusionTextureId,(t=>this._textureOcclusion=t)),this._acquire(t.metallicRoughnessTextureId,(t=>this._textureMetallicRoughness=t));}dispose(){this._texture=p$9(this._texture),this._textureNormal=p$9(this._textureNormal),this._textureEmissive=p$9(this._textureEmissive),this._textureOcclusion=p$9(this._textureOcclusion),this._textureMetallicRoughness=p$9(this._textureMetallicRoughness),this._disposed=!0;}ensureResources(t){return 0===this._numLoading?i$h.LOADED:i$h.LOADING}get textureBindParameters(){return new o$i(r$9(this._texture)?this._texture.glTexture:null,r$9(this._textureNormal)?this._textureNormal.glTexture:null,r$9(this._textureEmissive)?this._textureEmissive.glTexture:null,r$9(this._textureOcclusion)?this._textureOcclusion.glTexture:null,r$9(this._textureMetallicRoughness)?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){(t$f(this._texture)||e!==this._texture.id)&&(this._texture=p$9(this._texture),this._textureId=e,this._acquire(this._textureId,(t=>this._texture=t)));}_acquire(e,r){if(t$f(e))return void r(null);const u=this._textureRepository.acquire(e);if(k$4(u))return ++this._numLoading,void u.then((e=>{if(this._disposed)return p$9(e),void r(null);r(e);})).finally((()=>--this._numLoading));r(u);}}class o$i extends t$e{constructor(t=null,e=null,s=null,i=null,r=null){super(),this.texture=t,this.textureNormal=e,this.textureEmissive=s,this.textureOcclusion=i,this.textureMetallicRoughness=r;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const u$8=r$b(0,.6,.2);var l$a;!function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.COUNT=5]="COUNT";}(l$a||(l$a={}));class m$a extends o$i{}function d$9(e,n){const u=e.fragment,m=n.hasMetalnessAndRoughnessTexture||n.hasEmissionTexture||n.hasOcclusionTexture;if(n.pbrMode===l$a.Normal&&m&&e.include(a$9,n),n.pbrMode!==l$a.Schematic)if(n.pbrMode!==l$a.Disabled){if(n.pbrMode===l$a.Normal){u.code.add(n$b`vec3 mrr;
vec3 emission;
float occlusion;`);const e=n.supportsTextureAtlas,s=n.pbrTextureBindType;n.hasMetalnessAndRoughnessTexture&&(u.uniforms.add(s===a$b.Pass?m$b("texMetallicRoughness",(e=>e.textureMetallicRoughness),e):m$c("texMetallicRoughness",(e=>e.textureMetallicRoughness),e)),u.code.add(n$b`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),n.hasEmissionTexture&&(u.uniforms.add(s===a$b.Pass?m$b("texEmission",(e=>e.textureEmissive),e):m$c("texEmission",(e=>e.textureEmissive),e)),u.code.add(n$b`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),n.hasOcclusionTexture?(u.uniforms.add(s===a$b.Pass?m$b("texOcclusion",(e=>e.textureOcclusion),e):m$c("texOcclusion",(e=>e.textureOcclusion),e)),u.code.add(n$b`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):u.code.add(n$b`float getBakedOcclusion() { return 1.0; }`),u.uniforms.add(s===a$b.Pass?[new e$j("emissionFactor",(e=>e.emissiveFactor)),new e$j("mrrFactors",(e=>e.mrrFactors))]:[new o$k("emissionFactor",(e=>e.emissiveFactor)),new o$k("mrrFactors",(e=>e.mrrFactors))]),u.code.add(n$b`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${m?"vtc.uv = vuv0;":""}
      ${n.hasMetalnessAndRoughnessTexture?n.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${n.hasEmissionTexture?n.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${n.hasOcclusionTexture?n.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `);}}else u.code.add(n$b`float getBakedOcclusion() { return 1.0; }`);else u.code.add(n$b`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class e$f extends i$g{constructor(r,e){super(r,"vec4",a$b.Pass,((s,o,t)=>s.setUniform4fv(r,e(o,t))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function m$9(n,g){const m=n.fragment,o=void 0!==g.lightingSphericalHarmonicsOrder?g.lightingSphericalHarmonicsOrder:2;0===o?(m.uniforms.add(new e$j("lightingAmbientSH0",((n,t)=>o$o(a$8,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),m.code.add(n$b`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===o?(m.uniforms.add([new e$f("lightingAmbientSH_R",((i,n)=>r$c(r$7,n.lighting.sh.r[0],n.lighting.sh.r[1],n.lighting.sh.r[2],n.lighting.sh.r[3]))),new e$f("lightingAmbientSH_G",((i,n)=>r$c(r$7,n.lighting.sh.g[0],n.lighting.sh.g[1],n.lighting.sh.g[2],n.lighting.sh.g[3]))),new e$f("lightingAmbientSH_B",((i,n)=>r$c(r$7,n.lighting.sh.b[0],n.lighting.sh.b[1],n.lighting.sh.b[2],n.lighting.sh.b[3])))]),m.code.add(n$b`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===o&&(m.uniforms.add([new e$j("lightingAmbientSH0",((n,t)=>o$o(a$8,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new e$f("lightingAmbientSH_R1",((i,n)=>r$c(r$7,n.lighting.sh.r[1],n.lighting.sh.r[2],n.lighting.sh.r[3],n.lighting.sh.r[4]))),new e$f("lightingAmbientSH_G1",((i,n)=>r$c(r$7,n.lighting.sh.g[1],n.lighting.sh.g[2],n.lighting.sh.g[3],n.lighting.sh.g[4]))),new e$f("lightingAmbientSH_B1",((i,n)=>r$c(r$7,n.lighting.sh.b[1],n.lighting.sh.b[2],n.lighting.sh.b[3],n.lighting.sh.b[4]))),new e$f("lightingAmbientSH_R2",((i,n)=>r$c(r$7,n.lighting.sh.r[5],n.lighting.sh.r[6],n.lighting.sh.r[7],n.lighting.sh.r[8]))),new e$f("lightingAmbientSH_G2",((i,n)=>r$c(r$7,n.lighting.sh.g[5],n.lighting.sh.g[6],n.lighting.sh.g[7],n.lighting.sh.g[8]))),new e$f("lightingAmbientSH_B2",((i,n)=>r$c(r$7,n.lighting.sh.b[5],n.lighting.sh.b[6],n.lighting.sh.b[7],n.lighting.sh.b[8])))]),m.code.add(n$b`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),g.pbrMode!==l$a.Normal&&g.pbrMode!==l$a.Schematic||m.code.add(n$b`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`));}const a$8=n$f(),r$7=n$g();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class o$h extends i$g{constructor(r,o){super(r,"float",a$b.Pass,((s,e,t)=>s.setUniform1f(r,o(e,t))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function o$g(o,a){const g=o.fragment;a.isGround?g.uniforms.add(new o$h("lightingFixedFactor",((i,n)=>(1-n.lighting.groundLightingFactor)*(1-n.lighting.globalFactor)))):g.constants.add("lightingFixedFactor","float",0),g.uniforms.add([new e$j("lightingMainDirection",((i,n)=>n.lighting.lightingMainDirection)),new e$j("lightingMainIntensity",((i,n)=>n.lighting.mainLight.intensity))]),g.code.add(n$b`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function t$8(t){t.vertex.code.add(n$b`const float PI = 3.141592653589793;`),t.fragment.code.add(n$b`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class s$6 extends i$g{constructor(o,s){super(o,"bool",a$b.Pass,((r,e,t)=>r.setUniform1b(o,s(e,t))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function e$e(e){e.code.add(n$b`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class o$f extends i$g{constructor(r,o){super(r,"mat3",a$b.Draw,((e,s,t)=>e.setUniformMatrix3fv(r,o(s,t))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function n$8(n,o){o.hasMultipassTerrain&&(n.fragment.include(a$c),n.fragment.uniforms.add(new c$d("terrainDepthTexture",((e,r)=>r.multipassTerrain.linearDepthTexture))),n.fragment.uniforms.add(new e$k("nearFar",((e,r)=>r.camera.nearFar))),n.fragment.uniforms.add(new e$k("inverseViewport",((e,r)=>r.inverseViewport))),n.fragment.code.add(n$b`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${o.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `));}class o$e{constructor(){this.enabled=!1,this.cullAboveGround=!1;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var E$4;!function(E){E[E.INTEGRATED_MESH=0]="INTEGRATED_MESH",E[E.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",E[E.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",E[E.TRANSPARENT_MATERIAL=3]="TRANSPARENT_MATERIAL",E[E.TRANSPARENT_TERRAIN=4]="TRANSPARENT_TERRAIN",E[E.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=5]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",E[E.OCCLUDED_TERRAIN=6]="OCCLUDED_TERRAIN",E[E.OCCLUDER_MATERIAL=7]="OCCLUDER_MATERIAL",E[E.TRANSPARENT_OCCLUDER_MATERIAL=8]="TRANSPARENT_OCCLUDER_MATERIAL",E[E.OCCLUSION_PIXELS=9]="OCCLUSION_PIXELS",E[E.POSTPROCESSING_ENVIRONMENT_OPAQUE=10]="POSTPROCESSING_ENVIRONMENT_OPAQUE",E[E.POSTPROCESSING_ENVIRONMENT_TRANSPARENT=11]="POSTPROCESSING_ENVIRONMENT_TRANSPARENT",E[E.LASERLINES=12]="LASERLINES",E[E.LASERLINES_CONTRAST_CONTROL=13]="LASERLINES_CONTRAST_CONTROL",E[E.HUD_MATERIAL=14]="HUD_MATERIAL",E[E.LABEL_MATERIAL=15]="LABEL_MATERIAL",E[E.LINE_CALLOUTS=16]="LINE_CALLOUTS",E[E.LINE_CALLOUTS_HUD_DEPTH=17]="LINE_CALLOUTS_HUD_DEPTH",E[E.DRAPED_MATERIAL=18]="DRAPED_MATERIAL",E[E.DRAPED_WATER=19]="DRAPED_WATER",E[E.VOXEL=20]="VOXEL",E[E.MAX_SLOTS=21]="MAX_SLOTS";}(E$4||(E$4={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class i$e{constructor(s=n$f()){this.intensity=s;}}class c$c{constructor(i=n$f(),c=r$d(.57735,.57735,.57735)){this.intensity=i,this.direction=c;}}class n$7{constructor(i=n$f(),c=r$d(.57735,.57735,.57735),n=!0,r=1,h=1){this.intensity=i,this.direction=c,this.castShadows=n,this.specularStrength=r,this.environmentStrength=h;}}class r$6{constructor(){this.r=[0],this.g=[0],this.b=[0];}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function t$7(t,n){let e=0;for(let l=0;l<t.length;l++)e+=t[l]*n[l];return e}function n$6(t,n,e){(e=e||t).length=t.length;for(let l=0;l<t.length;l++)e[l]=t[l]*n[l];return e}function e$d(t,n,e){(e=e||t).length=t.length;for(let l=0;l<t.length;l++)e[l]=t[l]*n;return e}function l$9(t,n,e){(e=e||t).length=t.length;for(let l=0;l<t.length;l++)e[l]=t[l]+n[l];return e}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function u$7(t){return (t+1)*(t+1)}function l$8(n){return o$p(Math.floor(Math.sqrt(n)-1),0,2)}function m$8(t,n,o){const r=t[0],e=t[1],s=t[2],i=o||[];return i.length=u$7(n),n>=0&&(i[0]=.28209479177),n>=1&&(i[1]=.4886025119*r,i[2]=.4886025119*s,i[3]=.4886025119*e),n>=2&&(i[4]=1.09254843059*r*e,i[5]=1.09254843059*e*s,i[6]=.31539156525*(3*s*s-1),i[7]=1.09254843059*r*s,i[8]=.54627421529*(r*r-e*e)),i}function p$5(t,n){const o=u$7(t),r=n||{r:[],g:[],b:[]};r.r.length=r.g.length=r.b.length=o;for(let e=0;e<o;e++)r.r[e]=r.g[e]=r.b[e]=0;return r}function y$2(t,o){const r=l$8(o.r.length);for(const e of t)j$5(P$4,e.direction),m$8(P$4,r,v$7),n$6(v$7,k$3),e$d(v$7,e.intensity[0],I$3),l$9(o.r,I$3),e$d(v$7,e.intensity[1],I$3),l$9(o.g,I$3),e$d(v$7,e.intensity[2],I$3),l$9(o.b,I$3);return o}function b$4(t,n){m$8(P$4,0,v$7);for(const o of t)n.r[0]+=v$7[0]*k$3[0]*o.intensity[0]*4*Math.PI,n.g[0]+=v$7[0]*k$3[0]*o.intensity[1]*4*Math.PI,n.b[0]+=v$7[0]*k$3[0]*o.intensity[2]*4*Math.PI;return n}function M$2(t,n,e,s){p$5(n,s),o$o(e.intensity,0,0,0);let i=!1;const u=S$3,l=d$8,m=j$4;u.length=0,l.length=0,m.length=0;for(const o of t)o instanceof n$7&&!i?(r$e(e.direction,o.direction),r$e(e.intensity,o.intensity),e.specularStrength=o.specularStrength,e.environmentStrength=o.environmentStrength,e.castShadows=o.castShadows,i=!0):o instanceof n$7||o instanceof c$c?u.push(o):o instanceof i$e?l.push(o):o instanceof r$6&&m.push(o);y$2(u,s),b$4(l,s);for(const o of m)l$9(s.r,o.r),l$9(s.g,o.g),l$9(s.b,o.b);}const S$3=[],d$8=[],j$4=[],v$7=[0],I$3=[0],P$4=n$f(),k$3=[3.141593,2.094395,2.094395,2.094395,.785398,.785398,.785398,.785398,.785398];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const c$b=.4;class e$c{constructor(){this._shOrder=2,this._oldSunlight={direction:n$f(),ambient:{color:n$f(),intensity:1},diffuse:{color:n$f(),intensity:1}},this.globalFactor=.5,this.groundLightingFactor=.5,this._sphericalHarmonics=new r$6,this._mainLight={intensity:n$f(),direction:r$d(1,0,0),castShadows:!1,specularStrength:1,environmentStrength:1};}get sh(){return this._sphericalHarmonics}get mainLight(){return this._mainLight}get lightingMainDirection(){return this._mainLight.direction}set(o){M$2(o,this._shOrder,this._mainLight,this._sphericalHarmonics),r$e(this._oldSunlight.direction,this._mainLight.direction);const n=1/Math.PI;this._oldSunlight.ambient.color[0]=.282095*this._sphericalHarmonics.r[0]*n,this._oldSunlight.ambient.color[1]=.282095*this._sphericalHarmonics.g[0]*n,this._oldSunlight.ambient.color[2]=.282095*this._sphericalHarmonics.b[0]*n,q(this._oldSunlight.diffuse.color,this._mainLight.intensity,n),r$e(a$7,this._oldSunlight.diffuse.color),q(a$7,a$7,c$b*this.globalFactor),u$d(this._oldSunlight.ambient.color,this._oldSunlight.ambient.color,a$7);}get old(){return this._oldSunlight}}const a$7=n$f();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function r$5(r,o={hasModelTransformation:!1,linearDepth:!1}){if(o.hasModelTransformation)return o.linearDepth?void r.vertex.code.add(n$b`vec4 transformPositionWithDepth(mat4 proj, mat4 view, mat4 model, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * (model * vec4(pos, 1.0));
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):void r.vertex.code.add(n$b`vec4 transformPosition(mat4 proj, mat4 view, mat4 model, vec3 pos) {
return proj * (view * (model * vec4(pos, 1.0)));
}`);o.linearDepth?r.vertex.code.add(n$b`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):r.vertex.code.add(n$b`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class o$d extends i$g{constructor(r){super(r,"mat4");}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class a$6{constructor(i,s,a,c){this.primitiveIndices=i,this._numIndexPerPrimitive=s,this.indices=a,this.position=c,this.center=n$f(),e$l(i.length>=1),e$l(a.length%this._numIndexPerPrimitive==0),e$l(a.length>=i.length*this._numIndexPerPrimitive),e$l(3===c.size||4===c.size);const{data:o,size:d}=c,M=i.length;let l=d*a[this._numIndexPerPrimitive*i[0]];b$3.clear(),b$3.push(l),this.bbMin=r$d(o[l],o[l+1],o[l+2]),this.bbMax=t$h(this.bbMin);for(let t=0;t<M;++t){const s=this._numIndexPerPrimitive*i[t];for(let i=0;i<this._numIndexPerPrimitive;++i){l=d*a[s+i],b$3.push(l);let t=o[l];this.bbMin[0]=Math.min(t,this.bbMin[0]),this.bbMax[0]=Math.max(t,this.bbMax[0]),t=o[l+1],this.bbMin[1]=Math.min(t,this.bbMin[1]),this.bbMax[1]=Math.max(t,this.bbMax[1]),t=o[l+2],this.bbMin[2]=Math.min(t,this.bbMin[2]),this.bbMax[2]=Math.max(t,this.bbMax[2]);}}A$7(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let m=this.radius*this.radius;for(let t=0;t<b$3.length;++t){l=b$3.getItemAt(t);const i=o[l]-this.center[0],s=o[l+1]-this.center[1],e=o[l+2]-this.center[2],n=i*i+s*s+e*e;if(n<=m)continue;const r=Math.sqrt(n),h=.5*(r-this.radius);this.radius=this.radius+h,m=this.radius*this.radius;const a=h/r;this.center[0]+=i*a,this.center[1]+=s*a,this.center[2]+=e*a;}b$3.clear();}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if(p$a(this.bbMin,this.bbMax)>1){const i=A$7(n$f(),this.bbMin,this.bbMax,.5),s=this.primitiveIndices.length,n=new Uint8Array(s),r=new Array(8);for(let t=0;t<8;++t)r[t]=0;const{data:h,size:b}=this.position;for(let t=0;t<s;++t){let s=0;const e=this._numIndexPerPrimitive*this.primitiveIndices[t];let a=b*this.indices[e],c=h[a],o=h[a+1],d=h[a+2];for(let i=1;i<this._numIndexPerPrimitive;++i){a=b*this.indices[e+i];const t=h[a],s=h[a+1],n=h[a+2];t<c&&(c=t),s<o&&(o=s),n<d&&(d=n);}c<i[0]&&(s|=1),o<i[1]&&(s|=2),d<i[2]&&(s|=4),n[t]=s,++r[s];}let c=0;for(let t=0;t<8;++t)r[t]>0&&++c;if(c<2)return;const o=new Array(8);for(let t=0;t<8;++t)o[t]=r[t]>0?new Uint32Array(r[t]):void 0;for(let t=0;t<8;++t)r[t]=0;for(let t=0;t<s;++t){const i=n[t];o[i][r[i]++]=this.primitiveIndices[t];}this._children=new Array(8);for(let t=0;t<8;++t)void 0!==o[t]&&(this._children[t]=new a$6(o[t],this._numIndexPerPrimitive,this.indices,this.position));}return this._children}static prune(){b$3.prune();}}const b$3=new n$d({deallocator:null});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class r$4{constructor(){this.id=e$m();}unload(){}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var e$b;!function(e){e[e.Layer=0]="Layer",e[e.Object=1]="Object",e[e.Geometry=2]="Geometry",e[e.Material=3]="Material",e[e.Texture=4]="Texture",e[e.COUNT=5]="COUNT";}(e$b||(e$b={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class g$7 extends r$4{constructor(t,i=[],n=c$h.Triangle,o=-1){super(),this._primitiveType=n,this.edgeIndicesLength=o,this.type=e$b.Geometry,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[e,s]of t)s&&this._vertexAttributes.set(e,{...s});if(null==i||0===i.length){const t=d$7(this._vertexAttributes),e=l$c(t);this.edgeIndicesLength=this.edgeIndicesLength<0?t:this.edgeIndicesLength;for(const i of this._vertexAttributes.keys())this._indices.set(i,e);}else for(const[e,s]of i)s&&(this._indices.set(e,l$7(s)),e===O$1.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(e).length:this.edgeIndicesLength));}cloneShallow(){const t=new g$7([],void 0,this._primitiveType,void 0),{_vertexAttributes:e,_indices:i}=t;return this._vertexAttributes.forEach(((t,i)=>{e.set(i,t);})),this._indices.forEach(((t,e)=>{i.set(e,t);})),t.screenToWorldRatio=this.screenToWorldRatio,t._boundingInfo=this._boundingInfo,t}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(t){const e=this._vertexAttributes.get(t);return e&&!e.exclusive&&(e.data=Array.from(e.data),e.exclusive=!0),e}get indices(){return this._indices}get indexCount(){const t=this._indices.values().next().value;return t?t.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return t$f(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(t){return this.primitiveType===c$h.Triangle?this._computeAttachmentOriginTriangles(t):this._computeAttachmentOriginPoints(t)}_computeAttachmentOriginTriangles(t){const e=this.indices.get(O$1.POSITION),i=this.vertexAttributes.get(O$1.POSITION);return u$e(i,e,t)}_computeAttachmentOriginPoints(t){const e=this.indices.get(O$1.POSITION),i=this.vertexAttributes.get(O$1.POSITION);return g$9(i,e,t)}invalidateBoundingInfo(){this._boundingInfo=null;}_calculateBoundingInfo(){const t=this.indices.get(O$1.POSITION);if(0===t.length)return null;const n=this.primitiveType===c$h.Triangle?3:1;e$l(t.length%n==0,"Indexing error: "+t.length+" not divisible by "+n);const s=l$c(t.length/n),o=this.vertexAttributes.get(O$1.POSITION);return new a$6(s,n,t,o)}}function d$7(t){const e=t.values().next().value;return null==e?0:e.data.length/e.size}function l$7(t){if(t.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return t;for(const e of t)if(e>=65536)return t;return new Uint16Array(t)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var A$4;!function(A){A[A.MATERIAL=0]="MATERIAL",A[A.MATERIAL_ALPHA=1]="MATERIAL_ALPHA",A[A.MATERIAL_DEPTH=2]="MATERIAL_DEPTH",A[A.MATERIAL_NORMAL=3]="MATERIAL_NORMAL",A[A.MATERIAL_DEPTH_SHADOWMAP_ALL=4]="MATERIAL_DEPTH_SHADOWMAP_ALL",A[A.MATERIAL_HIGHLIGHT=5]="MATERIAL_HIGHLIGHT",A[A.MATERIAL_DEPTH_SHADOWMAP_DEFAULT=6]="MATERIAL_DEPTH_SHADOWMAP_DEFAULT",A[A.MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT=7]="MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT";}(A$4||(A$4={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function r$3(e,t){return new p$4(e,h$7,t)}function n$5(e,t){const{curvatureDependent:a,scaleStart:i,scaleFallOffRange:r}=h$7;return new p$4(e,{curvatureDependent:{min:{curvature:a.min.curvature,tiltAngle:a.min.tiltAngle,scaleFallOffFactor:v$6.curvatureDependent.min.scaleFallOffFactor},max:{curvature:a.max.curvature,tiltAngle:a.max.tiltAngle,scaleFallOffFactor:v$6.curvatureDependent.max.scaleFallOffFactor}},scaleStart:i,scaleFallOffRange:r,minPixelSize:v$6.minPixelSize},t)}function l$6(e){return Math.abs(e*e*e)}function s$5(e,t,a){const i=a.parameters,r=a.paddingPixelsOverride;return x$1.scale=Math.min(i.divisor/(t-i.offset),1),x$1.factor=l$6(e),x$1.minPixelSize=i.minPixelSize,x$1.paddingPixels=r,x$1}function c$a(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}function o$c(t,a){return Math.max(s$b(t*a.scale,t,a.factor),c$a(t,a))}function u$6(e,t,a){const i=s$5(e,t,a);return i.minPixelSize=0,i.paddingPixels=0,o$c(1,i)}function d$6(e,t,a,i){i.scale=u$6(e,t,a),i.factor=0,i.minPixelSize=a.parameters.minPixelSize,i.paddingPixels=a.paddingPixelsOverride;}function f$6(e,t,a=[0,0]){const i=Math.min(Math.max(t.scale,c$a(e[1],t)/Math.max(1e-5,e[1])),1);return a[0]=e[0]*i,a[1]=e[1]*i,a}function m$7(e,t,a,i){return o$c(e,s$5(t,a,i))}class p$4{constructor(e,t,a,r=g$6(),n){this.viewingMode=e,this.description=t,this.ellipsoidRadius=a,this.parameters=r,this._paddingPixelsOverride=n,this.viewingMode===l$d.Local?(this.coverageCompensation=this._surfaceCoverageCompensationLocal,this.calculateCurvatureDependentParameters=this._calculateCurvatureDependentParametersLocal):(this.coverageCompensation=this._surfaceCoverageCompensationGlobal,this.calculateCurvatureDependentParameters=this._calculateCurvatureDependentParametersGlobal);}get paddingPixelsOverride(){return this._paddingPixelsOverride||this.parameters.paddingPixels}update(e){return (!this.parameters||this.parameters.camera.fovY!==e.fovY||this.parameters.camera.distance!==e.distance)&&(this._calculateParameters(e,this.ellipsoidRadius,this.parameters),!0)}overridePadding(e){return e!==this.paddingPixelsOverride?new p$4(this.viewingMode,this.description,this.ellipsoidRadius,this.parameters,e):this}_calculateParameters(e,t,a){const{scaleStart:i,scaleFallOffRange:r,minPixelSize:n}=this.description,{fovY:l,distance:s}=e,c=this.calculateCurvatureDependentParameters(e,t),o=this.coverageCompensation(e,t,c),{tiltAngle:u,scaleFallOffFactor:d}=c,f=Math.sin(u)*s,m=.5*Math.PI-u-l*(.5-i*o),p=f/Math.cos(m),h=m+l*r*o,v=(p-d*(f/Math.cos(h)))/(1-d);return a.camera.fovY=e.fovY,a.camera.distance=e.distance,a.offset=v,a.divisor=p-v,a.minPixelSize=n,a}_calculateCurvatureDependentParametersLocal(e,t,a=P$3){return a.tiltAngle=this.description.curvatureDependent.min.tiltAngle,a.scaleFallOffFactor=this.description.curvatureDependent.min.scaleFallOffFactor,a}_calculateCurvatureDependentParametersGlobal(t,i,r=P$3){const n=this.description.curvatureDependent,l=1+t.distance/i,s=Math.sqrt(l*l-1),[c,o]=[n.min.curvature,n.max.curvature],u=o$p((s-c)/(o-c),0,1),[d,f]=[n.min,n.max];return r.tiltAngle=s$b(d.tiltAngle,f.tiltAngle,u),r.scaleFallOffFactor=s$b(d.scaleFallOffFactor,f.scaleFallOffFactor,u),r}_surfaceCoverageCompensationLocal(e,t,a){return (e.fovY-a.tiltAngle)/e.fovY}_surfaceCoverageCompensationGlobal(e,t,a){const i=t*t,r=a.tiltAngle+.5*Math.PI,{fovY:n,distance:l}=e,s=l*l+i-2*Math.cos(r)*l*t,c=Math.sqrt(s),o=Math.sqrt(s-i);return (Math.acos(o/c)-Math.asin(t/(c/Math.sin(r)))+.5*n)/n}}const h$7={curvatureDependent:{min:{curvature:M$4(10),tiltAngle:M$4(12),scaleFallOffFactor:.5},max:{curvature:M$4(70),tiltAngle:M$4(40),scaleFallOffFactor:.8}},scaleStart:.3,scaleFallOffRange:.65,minPixelSize:0},v$6={curvatureDependent:{min:{scaleFallOffFactor:.7},max:{scaleFallOffFactor:.95}},minPixelSize:14};function g$6(){return {camera:{distance:0,fovY:0},divisor:0,offset:0,minPixelSize:0,paddingPixels:0}}const x$1={scale:0,factor:0,minPixelSize:0,paddingPixels:0},P$3={tiltAngle:0,scaleFallOffFactor:0};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var o$b;!function(o){o[o.Color=0]="Color",o[o.Depth=1]="Depth",o[o.Normal=2]="Normal",o[o.Shadow=3]="Shadow",o[o.Highlight=4]="Highlight",o[o.Draped=5]="Draped",o[o.Occlusion=6]="Occlusion",o[o.Alpha=7]="Alpha",o[o.COUNT=8]="COUNT";}(o$b||(o$b={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function c$9(e){e.vertex.code.add(n$b`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),e.vertex.code.add(n$b`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(n$b`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),e.vertex.code.add(n$b`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),e.vertex.code.add(n$b`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(n$b`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),e.vertex.code.add(n$b`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`);}function t$6(e){e.uniforms.add(new e$f("screenSizePerspective",(e=>o$a(e.screenSizePerspective))));}function i$d(e){e.uniforms.add(new e$f("screenSizePerspectiveAlignment",(e=>o$a(e.screenSizePerspectiveAlignment||e.screenSizePerspective))));}function o$a(a){return r$c(n$4,a.parameters.divisor,a.parameters.offset,a.parameters.minPixelSize,a.paddingPixelsOverride)}const n$4=n$g();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class o$9 extends i$g{constructor(r,o){super(r,"mat4",a$b.Draw,((e,s,t)=>e.setUniformMatrix4fv(r,o(s,t))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function c$8(r,e){e.instancedDoublePrecision?r.constants.add("cameraPosition","vec3",f$9):r.uniforms.add(new o$k("cameraPosition",((r,e)=>o$o(f$5,e.camera.viewInverseTransposeMatrix[3]-r.origin[0],e.camera.viewInverseTransposeMatrix[7]-r.origin[1],e.camera.viewInverseTransposeMatrix[11]-r.origin[2]))));}function d$5(e,i){if(e.vertex.uniforms.add(new e$i("proj",((r,e)=>e.camera.projectionMatrix))),i.instancedDoublePrecision){const i=(r,e)=>o$o(f$5,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]);e.vertex.uniforms.add(new e$i("view",((e,a)=>c$i(v$5,a.camera.viewMatrix,i(e,a)))));const s=new e$j("localOrigin",i);return e.vertex.uniforms.add(s),s}e.vertex.uniforms.add(new o$9("view",((e,a)=>c$i(v$5,a.camera.viewMatrix,e.origin))));const s=new o$k("localOrigin",(r=>r.origin));return e.vertex.uniforms.add(s),s}const v$5=e$n(),f$5=n$f();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function a$5(e,r){const c=e.vertex;r.hasVerticalOffset?(f$4(c),r.hasScreenSizePerspective&&(e.include(c$9),i$d(c),c$8(e.vertex,r)),c.code.add(n$b`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${r.spherical?n$b`vec3 worldNormal = normalize(worldPos + localOrigin);`:n$b`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${r.hasScreenSizePerspective?n$b`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:n$b`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):c.code.add(n$b`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`);}const i$c=n$g();function f$4(r){r.uniforms.add(new e$f("verticalOffset",((r,t)=>{const{minWorldLength:l,maxWorldLength:o,screenLength:c}=r.verticalOffset,s=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),a=t.camera.pixelRatio||1;return r$c(i$c,c*a,s,l,o)})));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const g$5=a$e();function x(t,n,e,o,i,r,s){if(!u$f(n))if(t.boundingInfo){e$l(t.primitiveType===c$h.Triangle);const n=e.tolerance;M$1(t.boundingInfo,o,i,n,r,s);}else {const n=t.indices.get(O$1.POSITION),e=t.vertexAttributes.get(O$1.POSITION);v$4(o,i,0,n.length/3,n,e,void 0,r,s);}}const b$2=n$f();function M$1(t,n,i,r,s,c){if(t$f(t))return;const f=N$1(n,i,b$2);if(q$1(g$5,t.getBBMin()),w$5(g$5,t.getBBMax()),r$9(s)&&s.applyToAabb(g$5),O(g$5,n,f,r)){const{primitiveIndices:e,indices:o,position:f}=t,a=e?e.length:o.length/3;if(a>W$3){const e=t.getChildren();if(void 0!==e){for(let t=0;t<8;++t)void 0!==e[t]&&M$1(e[t],n,i,r,s,c);return}}v$4(n,i,0,a,o,f,e,s,c);}}const y$1=n$f();function v$4(t,n,e,i,r,s,c,f,a){if(c)return I$2(t,n,e,i,r,s,c,f,a);const l=s.data,u=s.stride||s.size,m=t[0],p=t[1],h=t[2],d=n[0]-m,g=n[1]-p,x=n[2]-h;for(let b=e,M=3*e;b<i;++b){let t=u*r[M++],n=l[t++],e=l[t++],i=l[t];t=u*r[M++];let s=l[t++],c=l[t++],v=l[t];t=u*r[M++];let I=l[t++],T=l[t++],j=l[t];r$9(f)&&([n,e,i]=f.applyToVertex(n,e,i,b),[s,c,v]=f.applyToVertex(s,c,v,b),[I,T,j]=f.applyToVertex(I,T,j,b));const N=s-n,O=c-e,V=v-i,L=I-n,S=T-e,B=j-i,E=g*B-S*x,P=x*L-B*d,U=d*S-L*g,W=N*E+O*P+V*U;if(Math.abs(W)<=Number.EPSILON)continue;const z=m-n,k=p-e,R=h-i,C=z*E+k*P+R*U;if(W>0){if(C<0||C>W)continue}else if(C>0||C<W)continue;const H=k*V-O*R,X=R*N-V*z,Y=z*O-N*k,Z=d*H+g*X+x*Y;if(W>0){if(Z<0||C+Z>W)continue}else if(Z>0||C+Z<W)continue;const _=(L*H+S*X+B*Y)/W;if(_>=0){a(_,A$3(N,O,V,L,S,B,y$1),b,!1);}}}function I$2(t,n,e,i,r,s,c,f,a){const l=s.data,u=s.stride||s.size,m=t[0],p=t[1],h=t[2],d=n[0]-m,g=n[1]-p,x=n[2]-h;for(let b=e;b<i;++b){const t=c[b];let n=3*t,e=u*r[n++],i=l[e++],s=l[e++],M=l[e];e=u*r[n++];let v=l[e++],I=l[e++],T=l[e];e=u*r[n];let j=l[e++],N=l[e++],O=l[e];r$9(f)&&([i,s,M]=f.applyToVertex(i,s,M,b),[v,I,T]=f.applyToVertex(v,I,T,b),[j,N,O]=f.applyToVertex(j,N,O,b));const V=v-i,L=I-s,S=T-M,B=j-i,E=N-s,P=O-M,U=g*P-E*x,W=x*B-P*d,z=d*E-B*g,k=V*U+L*W+S*z;if(Math.abs(k)<=Number.EPSILON)continue;const R=m-i,C=p-s,H=h-M,X=R*U+C*W+H*z;if(k>0){if(X<0||X>k)continue}else if(X>0||X<k)continue;const Y=C*S-L*H,Z=H*V-S*R,_=R*L-V*C,q=d*Y+g*Z+x*_;if(k>0){if(q<0||X+q>k)continue}else if(q>0||X+q<k)continue;const w=(B*Y+E*Z+P*_)/k;if(w>=0){a(w,A$3(V,L,S,B,E,P,y$1),t,!1);}}}const T$4=n$f(),j$3=n$f();function A$3(t,n,e,o,c,f,a){return o$o(T$4,t,n,e),o$o(j$3,o,c,f),_$6(a,T$4,j$3),z$1(a,a),a}function N$1(t,n,e){return o$o(e,1/(n[0]-t[0]),1/(n[1]-t[1]),1/(n[2]-t[2]))}function O(t,n,e,o){return V$3(t,n,e,o,1/0)}function V$3(t,n,e,o,i){const r=(t[0]-o-n[0])*e[0],s=(t[3]+o-n[0])*e[0];let c=Math.min(r,s),f=Math.max(r,s);const a=(t[1]-o-n[1])*e[1],l=(t[4]+o-n[1])*e[1];if(f=Math.min(f,Math.max(a,l)),f<0)return !1;if(c=Math.max(c,Math.min(a,l)),c>f)return !1;const u=(t[2]-o-n[2])*e[2],m=(t[5]+o-n[2])*e[2];return f=Math.min(f,Math.max(u,m)),!(f<0)&&(c=Math.max(c,Math.min(u,m)),!(c>f)&&c<i)}function L$2(t,e,i,r,s){let c=(i.screenLength||0)*t.pixelRatio;r$9(s)&&(c=m$7(c,r,e,s));const f=c*Math.tan(.5*t.fovY)/(.5*t.fullHeight);return o$p(f*e,i.minWorldLength||0,null!=i.maxWorldLength?i.maxWorldLength:1/0)}function S$2(t,n){const e=n?S$2(n):{};for(const o in t){let n=t[o];n&&n.forEach&&(n=P$2(n)),null==n&&o in e||(e[o]=n);}return e}function B$4(n,e){let o=!1;for(const i in e){const r=e[i];void 0!==r&&(Array.isArray(r)?null===n[i]?(n[i]=r.slice(),o=!0):c$j(n[i],r)&&(o=!0):n[i]!==r&&(o=!0,n[i]=r));}return o}function E$3(t,e,o,i,r,s){if(!e.options.selectionMode)return;const c=t.vertexAttributes.get(O$1.POSITION).data,f=t.vertexAttributes.get(O$1.SIZE),a=f&&f.data[0],l=i[0],u=i[1],m=((a+r)/2+4)*t.screenToWorldRatio;let p=Number.MAX_VALUE,d=0;for(let h=0;h<c.length-5;h+=3){const t=c[h],e=c[h+1],o=l-t,i=u-e,r=c[h+3]-t,s=c[h+4]-e,f=o$p((r*o+s*i)/(r*r+s*s),0,1),a=r*f-o,m=s*f-i,g=a*a+m*m;g<p&&(p=g,d=h/3);}p<m*m&&s(o.dist,o.normal,d,!1);}function P$2(t){const n=[];return t.forEach((t=>n.push(t))),n}const U$2={multiply:1,ignore:2,replace:3,tint:4},W$3=1e3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class d$4 extends r$4{constructor(e,r){super(),this.type=e$b.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=E$6,this._parameters=S$2(e,r),this.validateParameters(this._parameters);}dispose(){}get parameters(){return this._parameters}update(e){return !1}setParameters(e,r=!0){B$4(this._parameters,e)&&(this.validateParameters(this._parameters),r&&this.parametersChanged());}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged());}shouldRender(e){return this.isVisible()&&this.isVisibleInPass(e.pass)&&0!=(this.renderOccluded&e.renderOccludedMask)}isVisibleInPass(e){return !0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged());}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged());}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){r$9(this.repository)&&this.repository.materialChanged(this);}}var h$6;!function(e){e[e.Occlude=1]="Occlude",e[e.Transparent=2]="Transparent",e[e.OccludeAndTransparent=4]="OccludeAndTransparent",e[e.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",e[e.Opaque=16]="Opaque";}(h$6||(h$6={}));class o$8 extends t$e{constructor(){super(...arguments),this.renderOccluded=h$6.Occlude;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function i$b(t,e,f,o,r=1){const s=f.typedBuffer,n=f.typedBufferStride,i=t.length;if(o*=n,1===r)for(let c=0;c<i;++c)s[o]=e[t[c]],o+=n;else for(let c=0;c<i;++c){const f=e[t[c]];for(let t=0;t<r;t++)s[o]=f,o+=n;}}function c$7(t,e,f,o){const r=f.typedBuffer,s=f.typedBufferStride,n=t.length;o*=s;for(let i=0;i<n;++i){const f=2*t[i];r[o]=e[f],r[o+1]=e[f+1],o+=s;}}function l$5(t,e,f,o,r){const s=f.typedBuffer,n=f.typedBufferStride,i=t.length;if(o*=n,null==r||1===r)for(let c=0;c<i;++c){const f=3*t[c];s[o]=e[f],s[o+1]=e[f+1],s[o+2]=e[f+2],o+=n;}else for(let c=0;c<i;++c){const f=3*t[c];for(let t=0;t<r;++t)s[o]=e[f],s[o+1]=e[f+1],s[o+2]=e[f+2],o+=n;}}function d$3(t,e,f,o,r=1){const s=f.typedBuffer,n=f.typedBufferStride,i=t.length;if(o*=n,1===r)for(let c=0;c<i;++c){const f=4*t[c];s[o]=e[f],s[o+1]=e[f+1],s[o+2]=e[f+2],s[o+3]=e[f+3],o+=n;}else for(let c=0;c<i;++c){const f=4*t[c];for(let t=0;t<r;++t)s[o]=e[f],s[o+1]=e[f+1],s[o+2]=e[f+2],s[o+3]=e[f+3],o+=n;}}function u$5(t,e,f,o){const r=f.typedBuffer,s=f.typedBufferStride,n=t.length;o*=s;for(let i=0;i<n;++i){const f=9*t[i];for(let t=0;t<9;++t)r[o+t]=e[f+t];o+=s;}}function a$4(t,e,f,o){const r=f.typedBuffer,s=f.typedBufferStride,n=t.length;o*=s;for(let i=0;i<n;++i){const f=16*t[i];for(let t=0;t<16;++t)r[o+t]=e[f+t];o+=s;}}function p$3(t,e,f,o,r,s=1){if(!f)return void l$5(t,e,o,r,s);const n=o.typedBuffer,i=o.typedBufferStride,c=t.length,d=f[0],u=f[1],a=f[2],p=f[4],B=f[5],y=f[6],g=f[8],h=f[9],S=f[10],b=f[12],m=f[13],z=f[14];if(r*=i,1===s)for(let l=0;l<c;++l){const f=3*t[l],o=e[f],s=e[f+1],c=e[f+2];n[r]=d*o+p*s+g*c+b,n[r+1]=u*o+B*s+h*c+m,n[r+2]=a*o+y*s+S*c+z,r+=i;}else for(let l=0;l<c;++l){const f=3*t[l],o=e[f],c=e[f+1],O=e[f+2],k=d*o+p*c+g*O+b,F=u*o+B*c+h*O+m,M=a*o+y*c+S*O+z;for(let t=0;t<s;++t)n[r]=k,n[r+1]=F,n[r+2]=M,r+=i;}}function B$3(e,f,o,r,s,n=1){if(!o)return void l$5(e,f,r,s,n);const i=o,c=r.typedBuffer,d=r.typedBufferStride,u=e.length,a=i[0],p=i[1],B=i[2],y=i[4],g=i[5],h=i[6],S=i[8],b=i[9],m=i[10],z=!G$3(i),O=1e-6,k=1-O;if(s*=d,1===n)for(let t=0;t<u;++t){const o=3*e[t],r=f[o],n=f[o+1],i=f[o+2];let l=a*r+y*n+S*i,u=p*r+g*n+b*i,F=B*r+h*n+m*i;if(z){const t=l*l+u*u+F*F;if(t<k&&t>O){const e=1/Math.sqrt(t);l*=e,u*=e,F*=e;}}c[s+0]=l,c[s+1]=u,c[s+2]=F,s+=d;}else for(let t=0;t<u;++t){const o=3*e[t],r=f[o],i=f[o+1],l=f[o+2];let u=a*r+y*i+S*l,F=p*r+g*i+b*l,M=B*r+h*i+m*l;if(z){const t=u*u+F*F+M*M;if(t<k&&t>O){const e=1/Math.sqrt(t);u*=e,F*=e,M*=e;}}for(let t=0;t<n;++t)c[s+0]=u,c[s+1]=F,c[s+2]=M,s+=d;}}function y(e,f,o,r,s,n=1){if(!o)return void d$3(e,f,r,s,n);const i=o,c=r.typedBuffer,l=r.typedBufferStride,u=e.length,a=i[0],p=i[1],B=i[2],y=i[4],g=i[5],h=i[6],S=i[8],b=i[9],m=i[10],z=!G$3(i),O=1e-6,k=1-O;if(s*=l,1===n)for(let t=0;t<u;++t){const o=4*e[t],r=f[o],n=f[o+1],i=f[o+2],d=f[o+3];let u=a*r+y*n+S*i,F=p*r+g*n+b*i,M=B*r+h*n+m*i;if(z){const t=u*u+F*F+M*M;if(t<k&&t>O){const e=1/Math.sqrt(t);u*=e,F*=e,M*=e;}}c[s+0]=u,c[s+1]=F,c[s+2]=M,c[s+3]=d,s+=l;}else for(let t=0;t<u;++t){const o=4*e[t],r=f[o],i=f[o+1],d=f[o+2],u=f[o+3];let F=a*r+y*i+S*d,M=p*r+g*i+b*d,N=B*r+h*i+m*d;if(z){const t=F*F+M*M+N*N;if(t<k&&t>O){const e=1/Math.sqrt(t);F*=e,M*=e,N*=e;}}for(let t=0;t<n;++t)c[s+0]=F,c[s+1]=M,c[s+2]=N,c[s+3]=u,s+=l;}}function g$4(t,e,f,o,r,s=1){const n=o.typedBuffer,i=o.typedBufferStride,c=t.length;if(r*=i,1===s){if(4===f)for(let l=0;l<c;++l){const f=4*t[l];n[r]=e[f],n[r+1]=e[f+1],n[r+2]=e[f+2],n[r+3]=e[f+3],r+=i;}else if(3===f)for(let l=0;l<c;++l){const f=3*t[l];n[r]=e[f],n[r+1]=e[f+1],n[r+2]=e[f+2],n[r+3]=255,r+=i;}}else if(4===f)for(let l=0;l<c;++l){const f=4*t[l];for(let t=0;t<s;++t)n[r]=e[f],n[r+1]=e[f+1],n[r+2]=e[f+2],n[r+3]=e[f+3],r+=i;}else if(3===f)for(let l=0;l<c;++l){const f=3*t[l];for(let t=0;t<s;++t)n[r]=e[f],n[r+1]=e[f+1],n[r+2]=e[f+2],n[r+3]=255,r+=i;}}function h$5(t,i,l,d,u,a){for(const h of i.fieldNames){const i=t.vertexAttributes.get(h),S=t.indices.get(h);if(i&&S)switch(h){case O$1.POSITION:{e$l(3===i.size);const t=u.getField(h,i$i);t&&p$3(S,i.data,l,t,a);break}case O$1.NORMAL:{e$l(3===i.size);const t=u.getField(h,i$i);t&&B$3(S,i.data,d,t,a);break}case O$1.UV0:{e$l(2===i.size);const t=u.getField(h,u$g);t&&c$7(S,i.data,t,a);break}case O$1.COLOR:{e$l(3===i.size||4===i.size);const t=u.getField(h,x$2);t&&g$4(S,i.data,i.size,t,a);break}case O$1.SYMBOLCOLOR:{e$l(3===i.size||4===i.size);const t=u.getField(h,x$2);t&&g$4(S,i.data,i.size,t,a);break}case O$1.TANGENT:{e$l(4===i.size);const t=u.getField(h,c$k);t&&y(S,i.data,d,t,a);break}}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function s$4(){if(t$f(i$a)){const t=t=>a$f(`esri/libs/basisu/${t}`);i$a=import('./basis_transcoder-2ed2d290.js').then((e=>e.b)).then((({default:e})=>e({locateFile:t}).then((e=>(e.initializeBasis(),delete e.then,e)))));}return i$a}let i$a;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var _$4;!function(_){_[_.ETC1_RGB=0]="ETC1_RGB",_[_.ETC2_RGBA=1]="ETC2_RGBA",_[_.BC1_RGB=2]="BC1_RGB",_[_.BC3_RGBA=3]="BC3_RGBA",_[_.BC4_R=4]="BC4_R",_[_.BC5_RG=5]="BC5_RG",_[_.BC7_M6_RGB=6]="BC7_M6_RGB",_[_.BC7_M5_RGBA=7]="BC7_M5_RGBA",_[_.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",_[_.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",_[_.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",_[_.ATC_RGB=11]="ATC_RGB",_[_.ATC_RGBA=12]="ATC_RGBA",_[_.FXT1_RGB=17]="FXT1_RGB",_[_.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",_[_.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",_[_.ETC2_EAC_R11=20]="ETC2_EAC_R11",_[_.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",_[_.RGBA32=13]="RGBA32",_[_.RGB565=14]="RGB565",_[_.BGR565=15]="BGR565",_[_.RGBA4444=16]="RGBA4444";}(_$4||(_$4={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let g$3=null,l$4=null;async function c$6(){return t$f(l$4)&&(l$4=s$4(),g$3=await l$4),l$4}function u$4(t,n){if(t$f(g$3))return t.byteLength;const r=new g$3.BasisFile(new Uint8Array(t)),s=T$3(r)?E$2(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),n):0;return r.close(),r.delete(),s}function m$6(t,n){if(t$f(g$3))return t.byteLength;const r=new g$3.KTX2File(new Uint8Array(t)),s=_$3(r)?E$2(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),n):0;return r.close(),r.delete(),s}function E$2(e,t,n,s,i){const a=_$7(t?u$h.COMPRESSED_RGBA8_ETC2_EAC:u$h.COMPRESSED_RGB8_ETC2),g=i&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(n*s*a*g)}function T$3(e){return e.getNumImages()>=1&&!e.isUASTC()}function _$3(e){return e.getFaces()>=1&&e.isETC1S()}async function h$4(t,n,r){t$f(g$3)&&(g$3=await c$6());const s=new g$3.BasisFile(new Uint8Array(r));if(!T$3(s))return null;s.startTranscoding();const i=p$2(t,n,s.getNumLevels(0),s.getHasAlpha(),s.getImageWidth(0,0),s.getImageHeight(0,0),((e,t)=>s.getImageTranscodedSizeInBytes(0,e,t)),((e,t,n)=>s.transcodeImage(n,0,e,t,0,0)));return s.close(),s.delete(),i}async function A$2(t,n,r){t$f(g$3)&&(g$3=await c$6());const s=new g$3.KTX2File(new Uint8Array(r));if(!_$3(s))return null;s.startTranscoding();const i=p$2(t,n,s.getLevels(),s.getHasAlpha(),s.getWidth(),s.getHeight(),((e,t)=>s.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,n)=>s.transcodeImage(n,e,0,0,t,0,-1,-1)));return s.close(),s.delete(),i}function p$2(e,t,o,g,l,c,u,m){const{compressedTextureETC:E,compressedTextureS3TC:T}=e.capabilities,[_,h]=E?g?[_$4.ETC2_RGBA,u$h.COMPRESSED_RGBA8_ETC2_EAC]:[_$4.ETC1_RGB,u$h.COMPRESSED_RGB8_ETC2]:T?g?[_$4.BC3_RGBA,u$h.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[_$4.BC1_RGB,u$h.COMPRESSED_RGB_S3TC_DXT1_EXT]:[_$4.RGBA32,P$5.RGBA],A=t.hasMipmap?o:Math.min(1,o),p=[];for(let n=0;n<A;n++)p.push(new Uint8Array(u(n,_))),m(n,_,p[n]);const C=p.length>1,d=C?L$3.LINEAR_MIPMAP_LINEAR:L$3.LINEAR,R={...t,samplingMode:d,hasMipmap:C,internalFormat:h,width:l,height:c};return new u$c(e,R,{type:"compressed",levels:p})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const a$3=s$8.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),i$9=542327876,s$3=131072,l$3=4;function u$3(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}function m$5(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}const c$5=u$3("DXT1"),h$3=u$3("DXT3"),p$1=u$3("DXT5"),d$2=31,g$2=0,f$3=1,C=2,w$2=3,D$1=4,_$2=7,T$2=20,A$1=21;function E$1(e,t,n){const{textureData:a,internalFormat:i,width:s,height:l}=S$1(n,t.hasMipmap);return t.samplingMode=a.levels.length>1?L$3.LINEAR_MIPMAP_LINEAR:L$3.LINEAR,t.hasMipmap=a.levels.length>1,t.internalFormat=i,t.width=s,t.height=l,new u$c(e,t,a)}function S$1(e,r){const o=new Int32Array(e,0,d$2);if(o[g$2]!==i$9)return a$3.error("Invalid magic number in DDS header"),null;if(!(o[T$2]&l$3))return a$3.error("Unsupported format, must contain a FourCC code"),null;const u=o[A$1];let E,S;switch(u){case c$5:E=8,S=u$h.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case h$3:E=16,S=u$h.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case p$1:E=16,S=u$h.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return a$3.error("Unsupported FourCC code:",m$5(u)),null}let M=1,R=o[D$1],x=o[w$2];0==(3&R)&&0==(3&x)||(a$3.warn("Rounding up compressed texture size to nearest multiple of 4."),R=R+3&-4,x=x+3&-4);const X=R,b=x;let I,v;o[C]&s$3&&!1!==r&&(M=Math.max(1,o[_$2])),1===M||i$j(R)&&i$j(x)||(a$3.warn("Ignoring mipmaps of non power of two sized compressed texture."),M=1);let F=o[f$3]+4;const L=[];for(let t=0;t<M;++t)v=(R+3>>2)*(x+3>>2)*E,I=new Uint8Array(e,F,v),L.push(I),F+=v,R=Math.max(1,R>>1),x=Math.max(1,x>>1);return {textureData:{type:"compressed",levels:L},internalFormat:S,width:X,height:b}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class L$1 extends r$4{constructor(t,e){super(),this.data=t,this.type=e$b.Texture,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new n$h,this.params=e||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:D$2.REPEAT,t:D$2.REPEAT},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||l$e.STRETCH,this.estimatedTexMemRequired=L$1._estimateTexMemRequired(this.data,this.params),this._startPreload();}_startPreload(){const t=this.data;t$f(t)||(t instanceof HTMLVideoElement?this._startPreloadVideoElement(t):t instanceof HTMLImageElement&&this._startPreloadImageElement(t));}_startPreloadVideoElement(t){if(!(V$4(t.src)||"auto"===t.preload&&t.crossOrigin)){t.preload="auto",t.crossOrigin="anonymous";const e=!t.paused;if(t.src=t.src,e&&t.autoplay){const e=()=>{t.removeEventListener("canplay",e),t.play();};t.addEventListener("canplay",e);}}}_startPreloadImageElement(t){X$1(t.src)||V$4(t.src)||t.crossOrigin||(t.crossOrigin="anonymous",t.src=t.src);}static _getDataDimensions(t){return t instanceof HTMLVideoElement?{width:t.videoWidth,height:t.videoHeight}:t}static _estimateTexMemRequired(t,e){if(t$f(t))return 0;if(o$q(t)||e$o(t))return e.encoding===L$1.KTX2_ENCODING?m$6(t,e.mipmap):e.encoding===L$1.BASIS_ENCODING?u$4(t,e.mipmap):t.byteLength;const{width:r,height:i}=t instanceof Image||t instanceof ImageData||t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement?L$1._getDataDimensions(t):e;return (e.mipmap?4/3:1)*r*i*(e.components||4)||0}dispose(){this.data=void 0;}get width(){return this.params.width}get height(){return this.params.height}_createDescriptor(t){return {target:M$3.TEXTURE_2D,pixelFormat:P$5.RGBA,dataType:G$2.UNSIGNED_BYTE,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?L$3.LINEAR_MIPMAP_LINEAR:L$3.LINEAR,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:this.params.maxAnisotropy??(this.params.mipmap?t.parameters.maxMaxAnisotropy:1)}}get glTexture(){return this._glTexture}load(t,e){if(r$9(this._glTexture))return this._glTexture;if(r$9(this._loadingPromise))return this._loadingPromise;const r=this.data;return t$f(r)?(this._glTexture=new u$c(t,this._createDescriptor(t),null),this._glTexture):"string"==typeof r?this._loadFromURL(t,e,r):r instanceof Image?this._loadFromImageElement(t,e,r):r instanceof HTMLVideoElement?this._loadFromVideoElement(t,e,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this._loadFromImage(t,r,e):(o$q(r)||e$o(r))&&this.params.encoding===L$1.DDS_ENCODING?(this.data=void 0,this._loadFromDDSData(t,r)):(o$q(r)||e$o(r))&&this.params.encoding===L$1.KTX2_ENCODING?(this.data=void 0,this._loadFromKTX2(t,r)):(o$q(r)||e$o(r))&&this.params.encoding===L$1.BASIS_ENCODING?(this.data=void 0,this._loadFromBasis(t,r)):e$o(r)?this._loadFromPixelData(t,r):o$q(r)?this._loadFromPixelData(t,new Uint8Array(r)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(t,e,r){if(!(this.data instanceof HTMLVideoElement)||t$f(this._glTexture))return r;if(this.data.readyState<j$2.HAVE_CURRENT_DATA||r===this.data.currentTime)return r;if(r$9(this._powerOfTwoStretchInfo)){const{framebuffer:r,vao:i,sourceTexture:s}=this._powerOfTwoStretchInfo;s.setData(this.data),this._drawStretchedTexture(t,e,r,i,s,this._glTexture);}else {const{videoWidth:t,videoHeight:e}=this.data,{width:r,height:i}=this._glTexture.descriptor;t!==r||e!==i?this._glTexture.updateData(0,0,0,Math.min(t,r),Math.min(e,i),this.data):this._glTexture.setData(this.data);}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.params.updateCallback&&this.params.updateCallback(),this.data.currentTime}_loadFromDDSData(t,e){return this._glTexture=E$1(t,this._createDescriptor(t),e),this._glTexture}_loadFromKTX2(t,e){return this._loadAsync((()=>A$2(t,this._createDescriptor(t),e).then((t=>(this._glTexture=t,t)))))}_loadFromBasis(t,e){return this._loadAsync((()=>h$4(t,this._createDescriptor(t),e).then((t=>(this._glTexture=t,t)))))}_loadFromPixelData(t,e){e$l(this.params.width>0&&this.params.height>0);const r=this._createDescriptor(t);return r.pixelFormat=1===this.params.components?P$5.LUMINANCE:3===this.params.components?P$5.RGB:P$5.RGBA,r.width=this.params.width,r.height=this.params.height,this._glTexture=new u$c(t,r,e),this._glTexture}_loadFromURL(t,e,r){return this._loadAsync((async i=>{const s=await t$i(r,{signal:i});return f$a(i),this._loadFromImage(t,s,e)}))}_loadFromImageElement(t,e,r){return r.complete?this._loadFromImage(t,r,e):this._loadAsync((async i=>{const s=await a$g(r,r.src,!1,i);return f$a(i),this._loadFromImage(t,s,e)}))}_loadFromVideoElement(t,e,r){return r.readyState>=j$2.HAVE_CURRENT_DATA?this._loadFromImage(t,r,e):this._loadFromVideoElementAsync(t,e,r)}_loadFromVideoElementAsync(t,r,i){return this._loadAsync((s=>new Promise(((a,o)=>{const m=()=>{i.removeEventListener("loadeddata",p),i.removeEventListener("error",d),a$h(_);},p=()=>{i.readyState>=j$2.HAVE_CURRENT_DATA&&(m(),a(this._loadFromImage(t,i,r)));},d=t=>{m(),o(t||new s$9("Failed to load video"));};i.addEventListener("loadeddata",p),i.addEventListener("error",d);const _=v$8(s,(()=>d(m$e())));}))))}_loadFromImage(t,e,r){const s=L$1._getDataDimensions(e);this.params.width=s.width,this.params.height=s.height;const a=this._createDescriptor(t);return a.pixelFormat=3===this.params.components?P$5.RGB:P$5.RGBA,!this._requiresPowerOfTwo(t,a)||i$j(s.width)&&i$j(s.height)?(a.width=s.width,a.height=s.height,this._glTexture=new u$c(t,a,e),this._glTexture):(this._glTexture=this._makePowerOfTwoTexture(t,e,s,a,r),this._glTexture)}_loadAsync(t){const e=new AbortController;this._loadingController=e;const r=t(e.signal);this._loadingPromise=r;const i=()=>{this._loadingController===e&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null);};return r.then(i,i),r}_requiresPowerOfTwo(t,e){const r=D$2.CLAMP_TO_EDGE,i="number"==typeof e.wrapMode?e.wrapMode===r:e.wrapMode.s===r&&e.wrapMode.t===r;return !n$i(t.gl)&&(e.hasMipmap||!i)}_makePowerOfTwoTexture(e,r,i,a,o){const{width:n,height:m}=i,h=a$i(n),l=a$i(m);let p;switch(a.width=h,a.height=l,this.params.powerOfTwoResizeMode){case l$e.PAD:a.textureCoordinateScaleFactor=[n/h,m/l],p=new u$c(e,a),p.updateData(0,0,0,n,m,r);break;case l$e.STRETCH:case null:case void 0:p=this._stretchToPowerOfTwo(e,r,a,o());break;default:n$c(this.params.powerOfTwoResizeMode);}return a.hasMipmap&&p.generateMipmap(),p}_stretchToPowerOfTwo(t,e,r,i){const s=new u$c(t,r),a=new D$3(t,{colorTarget:Y$1.TEXTURE,depthStencilTarget:V$5.NONE},s),o=new u$c(t,{target:M$3.TEXTURE_2D,pixelFormat:r.pixelFormat,dataType:G$2.UNSIGNED_BYTE,wrapMode:D$2.CLAMP_TO_EDGE,samplingMode:L$3.LINEAR,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},e),n=u$9(t),m=t.getBoundFramebufferObject();return this._drawStretchedTexture(t,i,a,n,o,s),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:n,sourceTexture:o,framebuffer:a}:(n.dispose(!0),o.dispose(),a.detachColorTexture(),a.dispose()),t.bindFramebuffer(m),s}_drawStretchedTexture(t,e,r,i,s,a){t.bindFramebuffer(r);const o=t.getViewport();t.setViewport(0,0,a.descriptor.width,a.descriptor.height);const n=t.bindTechnique(e);n.setUniform4f("uColor",1,1,1,1),n.bindTexture("tex",s),t.bindVAO(i),t.drawArrays(E$7.TRIANGLE_STRIP,0,n$j(i,"geometry")),t.bindFramebuffer(null),t.setViewport(o.x,o.y,o.width,o.height);}unload(){if(r$9(this._powerOfTwoStretchInfo)){const{framebuffer:t,vao:e,sourceTexture:r}=this._powerOfTwoStretchInfo;e.dispose(!0),r.dispose(),t.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null;}if(r$9(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),r$9(this._loadingController)){const t=this._loadingController;this._loadingController=null,this._loadingPromise=null,t.abort();}this.events.emit("unloaded");}}var j$2;L$1.DDS_ENCODING="image/vnd-ms.dds",L$1.KTX2_ENCODING="image/ktx2",L$1.BASIS_ENCODING="image/x.basis",function(t){t[t.HAVE_NOTHING=0]="HAVE_NOTHING",t[t.HAVE_METADATA=1]="HAVE_METADATA",t[t.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",t[t.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",t[t.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA";}(j$2||(j$2={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class m$4 extends t$e{constructor(e){super(),this.slicePlaneLocalOrigin=e;}}function p(s,i){H$1(s,i,[new e$j("slicePlaneOrigin",((e,s)=>v$3(i,e,s))),new e$j("slicePlaneBasis1",((s,a)=>B$2(i,s,a,e$p(a.slicePlane)?.basis1))),new e$j("slicePlaneBasis2",((s,a)=>B$2(i,s,a,e$p(a.slicePlane)?.basis2)))]);}function u$2(s,i){H$1(s,i,[new o$k("slicePlaneOrigin",((e,s)=>v$3(i,e,s))),new o$k("slicePlaneBasis1",((s,a)=>B$2(i,s,a,e$p(a.slicePlane)?.basis1))),new o$k("slicePlaneBasis2",((s,a)=>B$2(i,s,a,e$p(a.slicePlane)?.basis2)))]);}function H$1(e,s,i){if(!s.hasSlicePlane){const i=n$b`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return s.hasSliceInVertexProgram&&e.vertex.code.add(i),void e.fragment.code.add(i)}e.extensions.add("GL_OES_standard_derivatives"),s.hasSliceInVertexProgram&&e.vertex.uniforms.add(i),e.fragment.uniforms.add(i);const a=n$b`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,o=n$b`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,c=s.hasSliceHighlight?n$b`
        ${o}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:n$b`#define highlightSlice(_color_, _pos_) (_color_)`;s.hasSliceInVertexProgram&&e.vertex.code.add(a),e.fragment.code.add(a),e.fragment.code.add(c);}function g$1(e,s,i){return e.instancedDoublePrecision?o$o(S,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]):s.slicePlaneLocalOrigin}function I$1(e,s){return r$9(e)?e$q(L,s.origin,e):s.origin}function b$1(e,s,o){return e.hasSliceTranslatedView?r$9(s)?c$i(T$1,o.camera.viewMatrix,s):o.camera.viewMatrix:null}function v$3(e,a,o){if(t$f(o.slicePlane))return f$9;const c=g$1(e,a,o),r=I$1(c,o.slicePlane),t=b$1(e,c,o);return r$9(t)?L$4(L,r,t):r}function B$2(e,a,o,c){if(t$f(c)||t$f(o.slicePlane))return f$9;const f=g$1(e,a,o),d=I$1(f,o.slicePlane),_=b$1(e,f,o);return r$9(_)?(u$d(G$1,c,d),L$4(L,d,_),L$4(G$1,G$1,_),e$q(G$1,G$1,L)):c}const S=n$f(),L=n$f(),G$1=n$f(),T$1=e$r();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const d$1=r$f(1,1,0,1),g=r$f(1,0,1,1);function a$2(e){e.fragment.uniforms.add(new c$d("depthTex",((e,o)=>o.highlightDepthTexture))),e.fragment.uniforms.add(new e$k("highlightViewportPixelSz",((e,o)=>o.inverseViewport))),e.fragment.constants.add("occludedHighlightFlag","vec4",d$1).add("unoccludedHighlightFlag","vec4",g),e.fragment.code.add(n$b`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, fragCoord.xy * highlightViewportPixelSz.xy).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`);}class h$2 extends t$e{constructor(){super(...arguments),this.inverseViewport=n$e();}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class e$a extends i$g{constructor(r,e,o){super(r,"vec4",a$b.Pass,((s,o,t)=>s.setUniform4fv(r,e(o,t))),o);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class o$7 extends i$g{constructor(r,o,e){super(r,"float",a$b.Pass,((s,e,t)=>s.setUniform1fv(r,o(e,t))),e);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class e$9 extends i$g{constructor(r,e){super(r,"mat3",a$b.Pass,((s,o,t)=>s.setUniformMatrix3fv(r,e(o,t))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class v$2 extends o$8{constructor(){super(...arguments),this.vvSizeEnabled=!1,this.vvSizeMinSize=r$d(1,1,1),this.vvSizeMaxSize=r$d(100,100,100),this.vvSizeOffset=r$d(0,0,0),this.vvSizeFactor=r$d(1,1,1),this.vvSizeValue=r$d(1,1,1),this.vvColorEnabled=!1,this.vvColorValues=[0,0,0,0,0,0,0,0],this.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],this.vvOpacityEnabled=!1,this.vvOpacityValues=[0,0,0,0,0,0,0,0],this.vvOpacityOpacities=[1,1,1,1,1,1,1,1],this.vvSymbolAnchor=[0,0,0],this.vvSymbolRotationMatrix=e$s();}}const o$6=8;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function s$2(s,n){n.hasVvInstancing&&(n.vvSize||n.vvColor)&&s.attributes.add(O$1.INSTANCEFEATUREATTRIBUTE,"vec4");const l=s.vertex;n.vvSize?(l.uniforms.add(new e$j("vvSizeMinSize",(e=>e.vvSizeMinSize))),l.uniforms.add(new e$j("vvSizeMaxSize",(e=>e.vvSizeMaxSize))),l.uniforms.add(new e$j("vvSizeOffset",(e=>e.vvSizeOffset))),l.uniforms.add(new e$j("vvSizeFactor",(e=>e.vvSizeFactor))),l.uniforms.add(new e$9("vvSymbolRotationMatrix",(e=>e.vvSymbolRotationMatrix))),l.uniforms.add(new e$j("vvSymbolAnchor",(e=>e.vvSymbolAnchor))),l.code.add(n$b`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),l.code.add(n$b`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${n.hasVvInstancing?n$b`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):l.code.add(n$b`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),n.vvColor?(l.constants.add("vvColorNumber","int",o$6),n.hasVvInstancing&&l.uniforms.add([new o$7("vvColorValues",(e=>e.vvColorValues),o$6),new e$a("vvColorColors",(e=>e.vvColorColors),o$6)]),l.code.add(n$b`
      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${n.hasVvInstancing?n$b`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):l.code.add(n$b`vec4 vvColor() { return vec4(1.0); }`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const o$5=.1,t$5=.001;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class i$8 extends t$c{}e$t([e$g({constValue:!0})],i$8.prototype,"hasSliceHighlight",void 0),e$t([e$g({constValue:!1})],i$8.prototype,"hasSliceInVertexProgram",void 0),e$t([e$g({constValue:!1})],i$8.prototype,"instancedDoublePrecision",void 0),e$t([e$g({constValue:!1})],i$8.prototype,"isGround",void 0),e$t([e$g({constValue:a$b.Pass})],i$8.prototype,"pbrTextureBindType",void 0);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function e$8(e,l){e.fragment.include(a$d),l.output===o$b.Shadow?(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(n$b`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`)):l.output===o$b.Depth&&e.fragment.code.add(n$b`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const i$7={func:I$5.LESS},s$1={func:I$5.ALWAYS},e$7={mask:255},l$2={mask:0},t$4=a=>({function:{func:I$5.NOTEQUAL,ref:a,mask:a},operation:{fail:O$2.KEEP,zFail:O$2.KEEP,zPass:O$2.KEEP}}),u$1=a=>({function:{func:I$5.ALWAYS,ref:a,mask:a},operation:{fail:O$2.KEEP,zFail:O$2.KEEP,zPass:O$2.REPLACE}}),f$2={function:{func:I$5.ALWAYS,ref:a$j.OutlineVisualElementMask,mask:a$j.OutlineVisualElementMask},operation:{fail:O$2.KEEP,zFail:O$2.KEEP,zPass:O$2.ZERO}},o$4={function:{func:I$5.ALWAYS,ref:a$j.OutlineVisualElementMask,mask:a$j.OutlineVisualElementMask},operation:{fail:O$2.KEEP,zFail:O$2.KEEP,zPass:O$2.REPLACE}},P$1={function:{func:I$5.EQUAL,ref:a$j.OutlineVisualElementMask,mask:a$j.OutlineVisualElementMask},operation:{fail:O$2.KEEP,zFail:O$2.KEEP,zPass:O$2.KEEP}},m$3={function:{func:I$5.NOTEQUAL,ref:a$j.OutlineVisualElementMask,mask:a$j.OutlineVisualElementMask},operation:{fail:O$2.KEEP,zFail:O$2.KEEP,zPass:O$2.KEEP}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function o$3(o){const d=n$b`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;o.fragment.code.add(d),o.vertex.code.add(d);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function o$2(o,d){d.normalType===i$6.Attribute&&(o.attributes.add(O$1.NORMAL,"vec3"),o.vertex.code.add(n$b`vec3 normalModel() {
return normal;
}`)),d.normalType===i$6.CompressedAttribute&&(o.include(o$3),o.attributes.add(O$1.NORMALCOMPRESSED,"vec2"),o.vertex.code.add(n$b`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),d.normalType===i$6.ScreenDerivative&&(o.extensions.add("GL_OES_standard_derivatives"),o.fragment.code.add(n$b`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`));}var i$6;!function(e){e[e.Attribute=0]="Attribute",e[e.CompressedAttribute=1]="CompressedAttribute",e[e.Ground=2]="Ground",e[e.ScreenDerivative=3]="ScreenDerivative",e[e.COUNT=4]="COUNT";}(i$6||(i$6={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function o$1(o){o.attributes.add(O$1.POSITION,"vec3"),o.vertex.code.add(n$b`vec3 positionModel() { return position; }`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function i$5({code:e},i){i.doublePrecisionRequiresObfuscation?e.add(n$b`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(n$b`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`);}function r$2(c){return !!a$k("force-double-precision-obfuscation")||c.driverTest.doublePrecisionRequiresObfuscation}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function F$1(r,o){r.include(o$1);const e=r.vertex;e.include(i$5,o),r.varyings.add("vPositionWorldCameraRelative","vec3"),r.varyings.add("vPosition_view","vec3"),e.uniforms.add([new e$j("transformWorldFromViewTH",(r=>r.transformWorldFromViewTH)),new e$j("transformWorldFromViewTL",(r=>r.transformWorldFromViewTL)),new e$9("transformViewFromCameraRelativeRS",(r=>r.transformViewFromCameraRelativeRS)),new e$i("transformProjFromView",(r=>r.transformProjFromView)),new o$f("transformWorldFromModelRS",(r=>r.transformWorldFromModelRS)),new o$k("transformWorldFromModelTH",(r=>r.transformWorldFromModelTH)),new o$k("transformWorldFromModelTL",(r=>r.transformWorldFromModelTL))]),e.code.add(n$b`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),e.code.add(n$b`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${o.spherical?n$b`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:n$b`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),r.fragment.uniforms.add(new e$j("transformWorldFromViewTL",(r=>r.transformWorldFromViewTL))),e.code.add(n$b`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),r.fragment.code.add(n$b`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`);}class c$4 extends t$e{constructor(){super(...arguments),this.transformWorldFromViewTH=n$f(),this.transformWorldFromViewTL=n$f(),this.transformViewFromCameraRelativeRS=e$s(),this.transformProjFromView=e$r();}}class W$2 extends t$e{constructor(){super(...arguments),this.transformWorldFromModelRS=e$s(),this.transformWorldFromModelTH=n$k(),this.transformWorldFromModelTL=n$k();}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function n$3(r,o){if(o.normalType===i$6.Attribute||o.normalType===i$6.CompressedAttribute){r.include(o$2,o),r.varyings.add("vNormalWorld","vec3"),r.varyings.add("vNormalView","vec3");r.vertex.uniforms.add([new o$f("transformNormalGlobalFromModel",(r=>r.transformNormalGlobalFromModel)),new e$9("transformNormalViewFromGlobal",(r=>r.transformNormalViewFromGlobal))]),r.vertex.code.add(n$b`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);}else o.normalType===i$6.Ground?(r.include(F$1,o),r.varyings.add("vNormalWorld","vec3"),r.vertex.code.add(n$b`
    void forwardNormal() {
      vNormalWorld = ${o.spherical?n$b`normalize(vPositionWorldCameraRelative);`:n$b`vec3(0.0, 0.0, 1.0);`}
    }
    `)):r.vertex.code.add(n$b`void forwardNormal() {}`);}class f$1 extends c$4{constructor(){super(...arguments),this.transformNormalViewFromGlobal=e$s();}}class c$3 extends W$2{constructor(){super(...arguments),this.transformNormalGlobalFromModel=e$s(),this.toMapSpace=n$g();}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function t$3(t,i){i.output===o$b.Color&&i.receiveShadows?(t.varyings.add("linearDepth","float"),t.vertex.code.add(n$b`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):i.output===o$b.Depth||i.output===o$b.Shadow?(t.include(F$1,i),t.varyings.add("linearDepth","float"),t.vertex.uniforms.add(new e$k("nearFar",((e,r)=>r.camera.nearFar))),t.vertex.code.add(n$b`void forwardLinearDepth() {
linearDepth = (-vPosition_view.z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)):t.vertex.code.add(n$b`void forwardLinearDepth() {}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class e$6 extends i$g{constructor(r,e){super(r,"int",a$b.Pass,((s,o,i)=>s.setUniform1i(r,e(o,i))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class e$5 extends i$g{constructor(r,e,t,i){switch(e){case a$b.Pass:return void super(r,"mat4",e,((s,e,i)=>s.setUniformMatrix4fv(r,t(e,i))),i);case a$b.Draw:return void super(r,"mat4",e,((s,e,i)=>s.setUniformMatrix4fv(r,t(e,i))),i)}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class n$2 extends t$e{constructor(){super(...arguments),this.origin=n$f();}}function h$1(e,a){a.receiveShadows&&(e.fragment.uniforms.add(new e$5("shadowMapMatrix",a$b.Pass,((e,a)=>a.shadowMap.getShadowMapMatrices(e.origin)),4)),v$1(e));}function c$2(e,a){a.receiveShadows&&(e.fragment.uniforms.add(new e$5("shadowMapMatrix",a$b.Draw,((e,a)=>a.shadowMap.getShadowMapMatrices(e.origin)),4)),v$1(e));}function v$1(e){const i=e.fragment;i.include(a$d),i.uniforms.add([new c$d("shadowMapTex",((e,a)=>a.shadowMap.depthTexture)),new e$6("numCascades",((e,a)=>a.shadowMap.numCascades)),new e$f("cascadeDistances",((e,a)=>a.shadowMap.cascadeDistances)),new o$h("depthHalfPixelSz",((e,a)=>.5/a.shadowMap.textureSize))]),i.code.add(n$b`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture2D(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
float texSize = 0.5 / halfPixelSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, depthHalfPixelSz, shadowMapTex);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function t$2(t){const a=t.fragment.code;a.add(n$b`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),a.add(n$b`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),a.add(n$b`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function n$1(n,r){const l=n.fragment.code;n.include(t$8),r.pbrMode===l$a.Water||r.pbrMode===l$a.WaterOnIntegratedMesh?(l.add(n$b`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${r.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),l.add(n$b`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),l.add(n$b`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),l.add(n$b`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),l.add(n$b`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)):r.pbrMode!==l$a.Normal&&r.pbrMode!==l$a.Schematic||(n.include(t$2),l.add(n$b`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),l.add(n$b`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),l.add(n$b`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),l.add(n$b`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),l.add(n$b`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),l.add(n$b`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function e$4(e,o){const n=e.fragment;switch(n.code.add(n$b`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),o.doubleSidedMode){case i$4.None:n.code.add(n$b`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case i$4.View:n.code.add(n$b`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case i$4.WindingOrder:n.code.add(n$b`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:n$c(o.doubleSidedMode);case i$4.COUNT:}}var i$4;!function(a){a[a.None=0]="None",a[a.View=1]="View",a[a.WindingOrder=2]="WindingOrder",a[a.COUNT=3]="COUNT";}(i$4||(i$4={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function e$3(e){e.vertex.code.add(n$b`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function m$2(r,m){m.instanced&&m.instancedDoublePrecision&&(r.attributes.add(O$1.MODELORIGINHI,"vec3"),r.attributes.add(O$1.MODELORIGINLO,"vec3"),r.attributes.add(O$1.MODEL,"mat3"),r.attributes.add(O$1.MODELNORMAL,"mat3"));const u=r.vertex;m.instancedDoublePrecision&&(u.include(i$5,m),u.uniforms.add(new o$k("viewOriginHi",((r,i)=>o$r(o$o(l$1,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]),l$1)))),u.uniforms.add(new o$k("viewOriginLo",((r,i)=>r$g(o$o(l$1,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]),l$1))))),u.code.add(n$b`
    vec3 calculateVPos() {
      ${m.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `),u.code.add(n$b`
    vec3 subtractOrigin(vec3 _pos) {
      ${m.instancedDoublePrecision?n$b`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),u.code.add(n$b`
    vec3 dpNormal(vec4 _normal) {
      ${m.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `),m.output===o$b.Normal&&(u.uniforms.add(new e$i("viewNormal",((e,r)=>r.camera.viewInverseTransposeMatrix))),u.code.add(n$b`
    vec3 dpNormalView(vec4 _normal) {
      ${m.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),m.hasVertexTangents&&u.code.add(n$b`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${m.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `);}const l$1=n$f();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var r$1;function n(t){switch(t){case"multiply":default:return r$1.Multiply;case"ignore":return r$1.Ignore;case"replace":return r$1.Replace;case"tint":return r$1.Tint}}function o(n,o,l){if(t$f(n)||o===r$1.Ignore)return l[0]=255,l[1]=255,l[2]=255,void(l[3]=255);const p=o$p(Math.round(n[3]*a$1),0,a$1),s=0===p||o===r$1.Tint?0:o===r$1.Replace?c$1:u;l[0]=o$p(Math.round(n[0]*i$3),0,i$3),l[1]=o$p(Math.round(n[1]*i$3),0,i$3),l[2]=o$p(Math.round(n[2]*i$3),0,i$3),l[3]=p+s;}!function(t){t[t.Multiply=1]="Multiply",t[t.Ignore=2]="Ignore",t[t.Replace=3]="Replace",t[t.Tint=4]="Tint";}(r$1||(r$1={}));const i$3=255,a$1=85,c$1=a$1,u=2*a$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function e$2(e){e.vertex.code.add(n$b`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${n$b.int(r$1.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${n$b.int(r$1.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${n$b.int(r$1.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${n$b.int(r$1.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function i$2(i,t){t.hasSymbolColors?(i.include(e$2),i.attributes.add(O$1.SYMBOLCOLOR,"vec4"),i.varyings.add("colorMixMode","mediump float"),i.vertex.code.add(n$b`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(i.fragment.uniforms.add(new e$6("colorMixMode",(o=>U$2[o.colorMixMode]))),i.vertex.code.add(n$b`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function e$1(e,d){d.hasVertexColors?(e.attributes.add(O$1.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(n$b`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(n$b`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(n$b`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function d(d){d.fragment.code.add(n$b`
    #define discardOrAdjustAlpha(color) { if (color.a < ${n$b.float(t$5)}) { discard; } }
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class e extends i$g{constructor(r,e){super(r,"float",a$b.Draw,((o,s,t)=>o.setUniform1f(r,e(s,t))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function s(a,e){l(a,e,new o$h("textureAlphaCutoff",(a=>a.textureAlphaCutoff)));}function t$1(a,r){l(a,r,new e("textureAlphaCutoff",(a=>a.textureAlphaCutoff)));}function l(e,r,s){const t=e.fragment;switch(r.alphaDiscardMode!==C$2.Mask&&r.alphaDiscardMode!==C$2.MaskBlend||t.uniforms.add(s),r.alphaDiscardMode){case C$2.Blend:return e.include(d);case C$2.Opaque:t.code.add(n$b`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case C$2.Mask:t.code.add(n$b`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case C$2.MaskBlend:e.fragment.code.add(n$b`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function f(f,h){const g=f.vertex.code,x=f.fragment.code,j=h.hasModelTransformation;h.output!==o$b.Depth&&h.output!==o$b.Shadow||(d$5(f,h),f.include(r$5,{linearDepth:!0,hasModelTransformation:j}),f.include(d$b,h),f.include(s$2,h),f.include(e$8,h),f.include(u$2,h),f.vertex.uniforms.add(new e$k("nearFar",((o,r)=>r.camera.nearFar))),f.varyings.add("depth","float"),h.hasColorTexture&&f.fragment.uniforms.add(new c$d("tex",(o=>o.texture))),g.add(n$b`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, ${j?"model,":""} vpos, nearFar, depth);
        forwardTextureCoordinates();
      }
    `),f.include(s,h),x.add(n$b`
      void main(void) {
        discardBySlice(vpos);
        ${h.hasColorTexture?n$b`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),h.output===o$b.Normal&&(d$5(f,h),f.include(r$5,{linearDepth:!1,hasModelTransformation:j}),f.include(o$2,h),f.include(n$3,h),f.include(d$b,h),f.include(s$2,h),h.hasColorTexture&&f.fragment.uniforms.add(new c$d("tex",(o=>o.texture))),f.varyings.add("vPositionView","vec3"),g.add(n$b`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${h.normalType===i$6.Attribute?n$b`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${j?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),f.include(u$2,h),f.include(s,h),x.add(n$b`
      void main() {
        discardBySlice(vpos);
        ${h.hasColorTexture?n$b`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${h.normalType===i$6.ScreenDerivative?n$b`
            vec3 normal = screenDerivativeNormal(vPositionView);`:n$b`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),h.output===o$b.Highlight&&(d$5(f,h),f.include(r$5,{linearDepth:!1,hasModelTransformation:j}),f.include(d$b,h),f.include(s$2,h),h.hasColorTexture&&f.fragment.uniforms.add(new c$d("tex",(o=>o.texture))),g.add(n$b`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${j?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),f.include(u$2,h),f.include(s,h),f.include(a$2),x.add(n$b`
      void main() {
        discardBySlice(vpos);
        ${h.hasColorTexture?n$b`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function m$1(m,c){const i=m.fragment;if(c.hasVertexTangents?(m.attributes.add(O$1.TANGENT,"vec4"),m.varyings.add("vTangent","vec4"),c.doubleSidedMode===i$4.WindingOrder?i.code.add(n$b`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):i.code.add(n$b`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(m.extensions.add("GL_OES_standard_derivatives"),i.code.add(n$b`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),c.textureCoordinateType!==o$n.None){m.include(a$9,c);const e=c.supportsTextureAtlas;i.uniforms.add(c.pbrTextureBindType===a$b.Pass?m$b("normalTexture",(e=>e.textureNormal),e):m$c("normalTexture",(e=>e.textureNormal),e)),i.code.add(n$b`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${c.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function a(o,a){const l=o.fragment;a.receiveAmbientOcclusion?(l.uniforms.add([new c$d("ssaoTex",((e,o)=>o.ssaoHelper.colorTexture)),new e$f("viewportPixelSz",((o,r)=>r$c(i$1,r.camera.fullViewport[0],r.camera.fullViewport[1],1/r.ssaoHelper.width,1/r.ssaoHelper.height)))]),l.code.add(n$b`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
return texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}`)):l.code.add(n$b`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`);}const i$1=n$g();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function m(m,g){const h=m.fragment;m.include(a,g),g.pbrMode!==l$a.Disabled&&m.include(n$1,g),m.include(m$9,g),h.constants.add("ambientBoostFactor","float",c$b),m.include(t$8),h.code.add(n$b`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${g.pbrMode===l$a.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),h.uniforms.add(new e$j("lightingMainDirection",((i,n)=>n.lighting.lightingMainDirection))),h.code.add(n$b`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${g.spherical?n$b`normalize(vPosWorld)`:n$b`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),h.uniforms.add([new o$h("lightingGlobalFactor",((i,n)=>n.lighting.globalFactor)),new e$j("lightingMainIntensity",((i,n)=>n.lighting.mainLight.intensity))]),h.code.add(n$b`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),g.pbrMode===l$a.Disabled||g.pbrMode===l$a.WaterOnIntegratedMesh?(m.include(o$g,g),h.code.add(n$b`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`)):g.pbrMode!==l$a.Normal&&g.pbrMode!==l$a.Schematic||(h.code.add(n$b`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = lightingMainDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),h.code.add(n$b`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),g.useFillLights?h.uniforms.add(new s$6("hasFillLights",((i,n)=>n.enableFillLights))):h.constants.add("hasFillLights","bool",!1),h.code.add(n$b`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),h.uniforms.add([new o$h("lightingSpecularStrength",((i,n)=>n.lighting.mainLight.specularStrength)),new o$h("lightingEnvironmentStrength",((i,n)=>n.lighting.mainLight.environmentStrength))]),h.code.add(n$b`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),h.code.add(n$b`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${g.pbrMode===l$a.Schematic?n$b`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:n$b`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function r(r,u){const p=n$b`
  /*
  *  ${u.name}
  *  ${u.output===o$b.Color?"RenderOutput: Color":u.output===o$b.Depth?"RenderOutput: Depth":u.output===o$b.Shadow?"RenderOutput: Shadow":u.output===o$b.Normal?"RenderOutput: Normal":u.output===o$b.Highlight?"RenderOutput: Highlight":""}
  */
  `;c$l()&&(r.fragment.code.add(p),r.vertex.code.add(p));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function i(i){i.include(e$e),i.code.add(n$b`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${n$b.int(r$1.Multiply)}) {
        return allMixed;
      }
      if (mode == ${n$b.int(r$1.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${n$b.int(r$1.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${n$b.int(r$1.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${n$b.int(r$1.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function k$2(k){const W=new i$f,H=W.vertex.code,q=W.fragment.code;W.include(r,{name:"Default Material Shader",output:k.output});const J=d$5(W,k);return W.include(o$1),W.varyings.add("vpos","vec3"),W.include(s$2,k),W.include(m$2,k),W.include(a$5,k),k.output!==o$b.Color&&k.output!==o$b.Alpha||(c$8(W.vertex,k),W.include(o$2,k),W.include(r$5,{linearDepth:!1,hasModelTransformation:k.hasModelTransformation}),k.normalType===i$6.Attribute&&k.offsetBackfaces&&W.include(e$3),W.include(m$1,k),W.include(n$3,k),k.instancedColor&&W.attributes.add(O$1.INSTANCECOLOR,"vec4"),W.varyings.add("localvpos","vec3"),W.include(d$b,k),W.include(t$3,k),W.include(i$2,k),W.include(e$1,k),W.vertex.uniforms.add(new e$f("externalColor",(e=>e.externalColor))),W.varyings.add("vcolorExt","vec4"),k.hasMultipassTerrain&&W.varyings.add("depth","float"),k.hasModelTransformation&&W.vertex.uniforms.add(new e$i("model",(o=>r$9(o.modelTransformation)?o.modelTransformation:o$s))),H.add(n$b`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${k.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${n$b.float(t$5)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${k.normalType===i$6.Attribute?n$b`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${k.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${k.hasModelTransformation?"model,":""} vpos);
          ${k.normalType===i$6.Attribute&&k.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${k.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),k.output===o$b.Alpha&&(W.include(u$2,k),W.include(s,k),W.include(n$8,k),W.fragment.uniforms.add([new o$h("opacity",(e=>e.opacity)),new o$h("layerOpacity",(e=>e.layerOpacity))]),k.hasColorTexture&&W.fragment.uniforms.add(new c$d("tex",(e=>e.texture))),W.fragment.include(i),q.add(n$b`
      void main() {
        discardBySlice(vpos);
        ${k.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${k.hasColorTexture?n$b`
                vec4 texColor = texture2D(tex, vuv0);
                ${k.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:n$b`vec4 texColor = vec4(1.0);`}
        ${k.hasVertexColors?n$b`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:n$b`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        gl_FragColor = vec4(opacity_);
      }
    `)),k.output===o$b.Color&&(W.include(u$2,k),W.include(m,k),W.include(a,k),W.include(s,k),W.include(k.instancedDoublePrecision?h$1:c$2,k),W.include(n$8,k),c$8(W.fragment,k),W.fragment.uniforms.add([J,new e$j("ambient",(e=>e.ambient)),new e$j("diffuse",(e=>e.diffuse)),new o$h("opacity",(e=>e.opacity)),new o$h("layerOpacity",(e=>e.layerOpacity)),new o$h("lightingGlobalFactor",((e,r)=>r.lighting.globalFactor)),new e$j("lightingMainIntensity",((e,r)=>r.lighting.mainLight.intensity))]),W.fragment.constants.add("ambientBoostFactor","float",c$b),k.hasColorTexture&&W.fragment.uniforms.add(new c$d("tex",(e=>e.texture))),W.include(d$9,k),W.include(n$1,k),W.fragment.include(i),W.include(e$4,k),q.add(n$b`
      void main() {
        discardBySlice(vpos);
        ${k.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${k.hasColorTexture?n$b`
                vec4 texColor = texture2D(tex, vuv0);
                ${k.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:n$b`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${k.normalType===i$6.ScreenDerivative?n$b`
                vec3 normal = screenDerivativeNormal(localvpos);`:n$b`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${k.pbrMode===l$a.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        ${k.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":k.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${k.hasVertexColors?n$b`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:n$b`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${k.hasNormalTexture?n$b`
                mat3 tangentSpace = ${k.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);`:n$b`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${k.spherical?n$b`normalize(vpos + localOrigin);`:n$b`vec3(0.0, 0.0, 1.0);`}

        ${k.snowCover?n$b`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${k.pbrMode===l$a.Normal||k.pbrMode===l$a.Schematic?n$b`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
                ${k.snowCover?n$b`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:n$b`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${k.transparencyPassType===O$3.Color?n$b`gl_FragColor = premultiplyAlpha(gl_FragColor);`:""}
      }
    `)),W.include(f,k),W}const W$1=Object.freeze(Object.defineProperty({__proto__:null,build:k$2},Symbol.toStringTag,{value:"Module"}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class F extends f$1{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=r$d(0,1,.5),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=n$l.Back,this.emissiveFactor=r$d(0,0,0),this.instancedDoublePrecision=!1,this.normals="default",this.receiveSSAO=!0,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=r$d(.2,.2,.2),this.diffuse=r$d(.8,.8,.8),this.externalColor=r$f(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=n$f(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSizeEnabled=!1,this.vvSizeMinSize=[1,1,1],this.vvSizeMaxSize=[100,100,100],this.vvSizeOffset=[0,0,0],this.vvSizeFactor=[1,1,1],this.vvSizeValue=[1,1,1],this.vvColorEnabled=!1,this.vvColorValues=[0,0,0,0,0,0,0,0],this.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],this.vvSymbolAnchor=[0,0,0],this.vvSymbolRotationMatrix=e$s(),this.vvOpacityEnabled=!1,this.vvOpacityValues=[],this.vvOpacityOpacities=[],this.transparent=!1,this.writeDepth=!0,this.customDepthTest=N$2.Less,this.textureAlphaMode=C$2.Blend,this.textureAlphaCutoff=o$5,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=h$6.Occlude;}}class _$1 extends c$3{constructor(){super(...arguments),this.origin=n$f(),this.slicePlaneLocalOrigin=this.origin;}}class E extends e$h{initializeConfiguration(e,t){t.spherical=e.viewingMode===l$d.Global,t.doublePrecisionRequiresObfuscation=r$2(e.rctx),t.textureCoordinateType=t.hasColorTexture||t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture||t.hasNormalTexture?o$n.Default:o$n.None;}initializeProgram(e){return this._initializeProgram(e,E.shader)}_initializeProgram(e,t){const i=t.get().build(this.configuration);return new o$l(e.rctx,i,E$6)}_convertDepthTestFunction(e){return e===N$2.Lequal?I$5.LEQUAL:I$5.LESS}_setPipeline(e,t){const i=this.configuration,s=e===O$3.NONE,r=e===O$3.FrontFace;return W$4({blending:i.output!==o$b.Color&&i.output!==o$b.Alpha||!i.transparent?null:s?c$m:E$8(e),culling:V$2(i)&&h$a(i.cullFace),depthTest:{func:l$f(e,this._convertDepthTestFunction(i.customDepthTest))},depthWrite:s||r?i.writeDepth&&a$l:null,colorWrite:c$n,stencilWrite:i.hasOccludees?e$7:null,stencilTest:i.hasOccludees?t?o$4:f$2:null,polygonOffset:s||r?null:i$k(i.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipeline(this.configuration.transparencyPassType,!0),this._setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}function V$2(e){return e.cullFace!==n$l.None||!e.hasSlicePlane&&(!e.transparent&&!e.doubleSidedMode)}E.shader=new t$d(W$1,(()=>import('./DefaultMaterial.glsl-9b48dec0.js')));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class c extends i$8{constructor(){super(...arguments),this.output=o$b.Color,this.alphaDiscardMode=C$2.Opaque,this.doubleSidedMode=i$4.None,this.pbrMode=l$a.Disabled,this.cullFace=n$l.None,this.transparencyPassType=O$3.NONE,this.normalType=i$6.Attribute,this.textureCoordinateType=o$n.None,this.customDepthTest=N$2.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1;}}e$t([e$g({count:o$b.COUNT})],c.prototype,"output",void 0),e$t([e$g({count:C$2.COUNT})],c.prototype,"alphaDiscardMode",void 0),e$t([e$g({count:i$4.COUNT})],c.prototype,"doubleSidedMode",void 0),e$t([e$g({count:l$a.COUNT})],c.prototype,"pbrMode",void 0),e$t([e$g({count:n$l.COUNT})],c.prototype,"cullFace",void 0),e$t([e$g({count:O$3.COUNT})],c.prototype,"transparencyPassType",void 0),e$t([e$g({count:i$6.COUNT})],c.prototype,"normalType",void 0),e$t([e$g({count:o$n.COUNT})],c.prototype,"textureCoordinateType",void 0),e$t([e$g({count:N$2.COUNT})],c.prototype,"customDepthTest",void 0),e$t([e$g()],c.prototype,"spherical",void 0),e$t([e$g()],c.prototype,"hasVertexColors",void 0),e$t([e$g()],c.prototype,"hasSymbolColors",void 0),e$t([e$g()],c.prototype,"hasVerticalOffset",void 0),e$t([e$g()],c.prototype,"hasSlicePlane",void 0),e$t([e$g()],c.prototype,"hasSliceHighlight",void 0),e$t([e$g()],c.prototype,"hasColorTexture",void 0),e$t([e$g()],c.prototype,"hasMetalnessAndRoughnessTexture",void 0),e$t([e$g()],c.prototype,"hasEmissionTexture",void 0),e$t([e$g()],c.prototype,"hasOcclusionTexture",void 0),e$t([e$g()],c.prototype,"hasNormalTexture",void 0),e$t([e$g()],c.prototype,"hasScreenSizePerspective",void 0),e$t([e$g()],c.prototype,"hasVertexTangents",void 0),e$t([e$g()],c.prototype,"hasOccludees",void 0),e$t([e$g()],c.prototype,"hasMultipassTerrain",void 0),e$t([e$g()],c.prototype,"hasModelTransformation",void 0),e$t([e$g()],c.prototype,"offsetBackfaces",void 0),e$t([e$g()],c.prototype,"vvSize",void 0),e$t([e$g()],c.prototype,"vvColor",void 0),e$t([e$g()],c.prototype,"receiveShadows",void 0),e$t([e$g()],c.prototype,"receiveAmbientOcclusion",void 0),e$t([e$g()],c.prototype,"textureAlphaPremultiplied",void 0),e$t([e$g()],c.prototype,"instanced",void 0),e$t([e$g()],c.prototype,"instancedColor",void 0),e$t([e$g()],c.prototype,"instancedDoublePrecision",void 0),e$t([e$g()],c.prototype,"doublePrecisionRequiresObfuscation",void 0),e$t([e$g()],c.prototype,"writeDepth",void 0),e$t([e$g()],c.prototype,"transparent",void 0),e$t([e$g()],c.prototype,"enableOffset",void 0),e$t([e$g()],c.prototype,"cullAboveGround",void 0),e$t([e$g()],c.prototype,"snowCover",void 0),e$t([e$g({constValue:!0})],c.prototype,"hasVvInstancing",void 0),e$t([e$g({constValue:!1})],c.prototype,"useCustomDTRExponentForWater",void 0),e$t([e$g({constValue:!1})],c.prototype,"supportsTextureAtlas",void 0),e$t([e$g({constValue:!0})],c.prototype,"useFillLights",void 0);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function B$1(B){const V=new i$f,I=V.vertex.code,R=V.fragment.code,z=d$5(V,B);return V.include(o$1),V.varyings.add("vpos","vec3"),V.include(s$2,B),V.include(m$2,B),V.include(a$5,B),B.output!==o$b.Color&&B.output!==o$b.Alpha||(c$8(V.vertex,B),V.include(o$2,B),V.include(r$5),B.offsetBackfaces&&V.include(e$3),B.instancedColor&&V.attributes.add(O$1.INSTANCECOLOR,"vec4"),V.varyings.add("vNormalWorld","vec3"),V.varyings.add("localvpos","vec3"),B.hasMultipassTerrain&&V.varyings.add("depth","float"),V.include(d$b,B),V.include(t$3,B),V.include(i$2,B),V.include(e$1,B),V.vertex.uniforms.add(new e$f("externalColor",(e=>e.externalColor))),V.varyings.add("vcolorExt","vec4"),I.add(n$b`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${B.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${n$b.float(t$5)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${B.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${B.hasMultipassTerrain?n$b`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),B.output===o$b.Alpha&&(V.include(u$2,B),V.include(s,B),V.include(n$8,B),V.fragment.uniforms.add([new o$h("opacity",(e=>e.opacity)),new o$h("layerOpacity",(e=>e.layerOpacity)),new o$d("view")]),B.hasColorTexture&&V.fragment.uniforms.add(new c$d("tex",(e=>e.texture))),V.fragment.include(i),R.add(n$b`
      void main() {
        discardBySlice(vpos);
        ${B.hasMultipassTerrain?n$b`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${B.hasColorTexture?n$b`
                vec4 texColor = texture2D(tex, vuv0);
                ${B.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:n$b`vec4 texColor = vec4(1.0);`}
        ${B.hasVertexColors?n$b`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:n$b`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        gl_FragColor = vec4(opacity_);
      }
    `)),B.output===o$b.Color&&(V.include(u$2,B),V.include(m,B),V.include(a,B),V.include(s,B),V.include(B.instancedDoublePrecision?h$1:c$2,B),V.include(n$8,B),c$8(V.fragment,B),V.fragment.uniforms.add([z,new e$j("ambient",(e=>e.ambient)),new e$j("diffuse",(e=>e.diffuse)),new o$h("opacity",(e=>e.opacity)),new o$h("layerOpacity",(e=>e.layerOpacity)),new o$d("view"),new o$h("lightingGlobalFactor",((e,o)=>o.lighting.globalFactor)),new e$j("lightingMainIntensity",((e,o)=>o.lighting.mainLight.intensity))]),V.fragment.constants.add("ambientBoostFactor","float",c$b),B.hasColorTexture&&V.fragment.uniforms.add(new c$d("tex",(e=>e.texture))),V.include(d$9,B),V.include(n$1,B),V.fragment.include(i),V.extensions.add("GL_OES_standard_derivatives"),R.add(n$b`
      void main() {
        discardBySlice(vpos);
        ${B.hasMultipassTerrain?n$b`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${B.hasColorTexture?n$b`
                vec4 texColor = texture2D(tex, vuv0);
                ${B.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:n$b`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${B.pbrMode===l$a.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${B.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":B.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${B.hasVertexColors?n$b`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:n$b`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${B.snowCover?n$b`albedo = mix(albedo, vec3(1), 0.9);`:n$b``}
        ${n$b`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * lightingMainIntensity;`}
        ${B.pbrMode===l$a.Normal||B.pbrMode===l$a.Schematic?B.spherical?n$b`vec3 normalGround = normalize(vpos + localOrigin);`:n$b`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:n$b``}
        ${B.pbrMode===l$a.Normal||B.pbrMode===l$a.Schematic?n$b`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
                ${B.snowCover?n$b`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:n$b`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${B.transparencyPassType===O$3.Color?n$b`gl_FragColor = premultiplyAlpha(gl_FragColor);`:n$b``}
      }
    `)),V.include(f,B),V}const V$1=Object.freeze(Object.defineProperty({__proto__:null,build:B$1},Symbol.toStringTag,{value:"Module"}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class t extends E{initializeConfiguration(i,s){super.initializeConfiguration(i,s),s.hasMetalnessAndRoughnessTexture=!1,s.hasEmissionTexture=!1,s.hasOcclusionTexture=!1,s.hasNormalTexture=!1,s.hasModelTransformation=!1,s.normalType=i$6.Attribute,s.doubleSidedMode=i$4.WindingOrder,s.hasVertexTangents=!1;}initializeProgram(e){return this._initializeProgram(e,t.shader)}}t.shader=new t$d(V$1,(()=>import('./RealisticTree.glsl-11eb8261.js')));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class R extends d$4{constructor(e){super(e,_),this.supportsEdges=!0,this.techniqueConfig=new c,this.vertexBufferLayout=j$1(this.parameters),this.instanceBufferLayout=e.instanced?B(this.parameters):null;}isVisibleInPass(e){return e!==A$4.MATERIAL_DEPTH_SHADOWMAP_ALL&&e!==A$4.MATERIAL_DEPTH_SHADOWMAP_DEFAULT&&e!==A$4.MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT||this.parameters.castShadows}isVisible(){const t=this.parameters;if(!super.isVisible()||0===t.layerOpacity)return !1;const{instanced:r,hasVertexColors:s,hasSymbolColors:i,vvColorEnabled:a}=t,n=r$9(r)&&r.includes("color"),o="replace"===t.colorMixMode,h=t.opacity>0,c=t.externalColor&&t.externalColor[3]>0;return s&&(n||a||i)?!!o||h:s?o?c:h:n||a||i?!!o||h:o?c:h}getConfiguration(t,r){return this.techniqueConfig.output=t,this.techniqueConfig.hasNormalTexture=!!this.parameters.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.parameters.textureId,this.techniqueConfig.hasVertexTangents=this.parameters.hasVertexTangents,this.techniqueConfig.instanced=!!this.parameters.instanced,this.techniqueConfig.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this.techniqueConfig.vvSize=this.parameters.vvSizeEnabled,this.techniqueConfig.hasVerticalOffset=r$9(this.parameters.verticalOffset),this.techniqueConfig.hasScreenSizePerspective=r$9(this.parameters.screenSizePerspective),this.techniqueConfig.hasSlicePlane=this.parameters.hasSlicePlane,this.techniqueConfig.hasSliceHighlight=this.parameters.hasSliceHighlight,this.techniqueConfig.alphaDiscardMode=this.parameters.textureAlphaMode,this.techniqueConfig.normalType="screenDerivative"===this.parameters.normals?i$6.ScreenDerivative:i$6.Attribute,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,r$9(this.parameters.customDepthTest)&&(this.techniqueConfig.customDepthTest=this.parameters.customDepthTest),this.techniqueConfig.hasOccludees=this.parameters.hasOccludees,this.techniqueConfig.cullFace=this.parameters.hasSlicePlane?n$l.None:this.parameters.cullFace,this.techniqueConfig.hasMultipassTerrain=r.multipassTerrain.enabled,this.techniqueConfig.cullAboveGround=r.multipassTerrain.cullAboveGround,this.techniqueConfig.hasModelTransformation=r$9(this.parameters.modelTransformation),t!==o$b.Color&&t!==o$b.Alpha||(this.techniqueConfig.hasVertexColors=this.parameters.hasVertexColors,this.techniqueConfig.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this.techniqueConfig.doubleSidedMode=i$4.WindingOrder:this.techniqueConfig.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?i$4.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?i$4.WindingOrder:i$4.None,this.techniqueConfig.instancedColor=r$9(this.parameters.instanced)&&this.parameters.instanced.includes("color"),this.techniqueConfig.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!!r.ssaoHelper.ready&&this.parameters.receiveSSAO,this.techniqueConfig.vvColor=this.parameters.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this.techniqueConfig.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?l$a.Schematic:l$a.Normal:l$a.Disabled,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.parameters.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this.techniqueConfig.transparencyPassType=r.transparencyPassType,this.techniqueConfig.enableOffset=r.camera.relativeElevation<_$8,this.techniqueConfig.snowCover=this.hasSnowCover(r)),this.techniqueConfig}hasSnowCover(t){return r$9(t.weather)&&t.weatherVisible&&"snowy"===t.weather.type&&"enabled"===t.weather.snowCover}intersect(c,u,p,m,f,d,g){if(r$9(this.parameters.verticalOffset)){const e=m.camera;o$o(z,p[12],p[13],p[14]);let c=null;switch(m.viewingMode){case l$d.Global:c=z$1(U$1,z);break;case l$d.Local:c=r$e(U$1,G);}let u=0;const g=e$q(k$1,z,e.eye),T=s$c(g),C=q(g,g,1/T);let v=null;this.parameters.screenSizePerspective&&(v=P$6(c,C)),u+=L$2(e,T,this.parameters.verticalOffset,v,this.parameters.screenSizePerspective),q(c,c,u),O$4(W,c,m.transform.inverseRotation),f=e$q(V,f,W),d=e$q(H,d,W);}x(c,u,m,f,d,y$3(m.verticalOffset),g);}requiresSlot(e){return e===(this.parameters.transparent?this.parameters.writeDepth?E$4.TRANSPARENT_MATERIAL:E$4.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:E$4.OPAQUE_MATERIAL)||e===E$4.DRAPED_MATERIAL}createGLMaterial(e){return e.output===o$b.Color||e.output===o$b.Alpha||e.output===o$b.Depth||e.output===o$b.Normal||e.output===o$b.Shadow||e.output===o$b.Highlight?new w$1(e):null}createBufferWriter(){return new N(this.vertexBufferLayout,this.instanceBufferLayout)}}class w$1 extends h$8{constructor(e){super({...e,...e.material.parameters});}_updateParameters(e){const r=this._material.parameters;this.updateTexture(r.textureId);const s=e.camera.viewInverseTransposeMatrix;return o$o(r.origin,s[3],s[7],s[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(r.treeRendering?t:E,e)}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled});}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees});}beginSlot(e){return this._output!==o$b.Color&&this._output!==o$b.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e)),this._updateParameters(e)}}class D extends F{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1;}}const _=new D;class N{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t;}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(O$1.POSITION).length}write(e,t,r,s){h$5(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,r,s);}}function j$1(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,r=T$5().vec3f(O$1.POSITION).vec3f(O$1.NORMAL);return e.hasVertexTangents&&r.vec4f(O$1.TANGENT),t&&r.vec2f(O$1.UV0),e.hasVertexColors&&r.vec4u8(O$1.COLOR),e.hasSymbolColors&&r.vec4u8(O$1.SYMBOLCOLOR),r}function B(t){let r=T$5();return r=t.instancedDoublePrecision?r.vec3f(O$1.MODELORIGINHI).vec3f(O$1.MODELORIGINLO).mat3f(O$1.MODEL).mat3f(O$1.MODELNORMAL):r.mat4f(O$1.MODEL).mat4f(O$1.MODELNORMAL),r$9(t.instanced)&&t.instanced.includes("color")&&(r=r.vec4f(O$1.INSTANCECOLOR)),r$9(t.instanced)&&t.instanced.includes("featureAttribute")&&(r=r.vec4f(O$1.INSTANCEFEATUREATTRIBUTE)),r}const V=n$f(),H=n$f(),G=r$d(0,0,1),U$1=n$f(),W=n$f(),z=n$f(),k$1=n$f();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const b=s$8.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function w(e,t){const r=await h(e,t);return {resource:r,textures:await P(r.textureDefinitions,t)}}async function h(r,n){const i=r$9(n)&&n.streamDataRequester;if(i)return v(r,i,n);const u=await a$m(U$3(r,e$p(n)));if(!0===u.ok)return u.value.data;w$6(u.error),j(u.error);}async function v(e,r,n){const a=await a$m(r.request(e,"json",n));if(!0===a.ok)return a.value;w$6(a.error),j(a.error.details.url);}function j(e){throw new s$9("",`Request for object resource failed: ${e}`)}function A(e){const t=e.params,r=t.topology;let n=!0;switch(t.vertexAttributes||(b.warn("Geometry must specify vertex attributes"),n=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(b.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),n=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(b.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),n=!1)):(b.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),n=!1);}}else b.warn("Indexed geometries must specify faces"),n=!1;break}default:b.warn(`Unsupported topology '${r}'`),n=!1;}e.params.material||(b.warn("Geometry requires material"),n=!1);const a=e.params.vertexAttributes;for(const s in a){a[s].values||(b.warn("Geometries with externally defined attributes are not yet supported"),n=!1);}return n}function M(e,t){const r=[],n=[],s=[],o=[],l=e.resource,c=r$h.parse(l.version||"1.0","wosr");k.validate(c);const p=l.model.name,f=l.model.geometries,x=l.materialDefinitions,b=e.textures;let w=0;const h=new Map;for(let i=0;i<f.length;i++){const e=f[i];if(!A(e))continue;const l=T(e),c=e.params.vertexAttributes,p=[];for(const t in c){const e=c[t],r=e.values;p.push([t,{data:r,size:e.valuesPerElement,exclusive:!0}]);}const v=[];if("PerAttributeArray"!==e.params.topology){const t=e.params.faces;for(const e in t)v.push([e,new Uint32Array(t[e].values)]);}const j=b&&b[l.texture];if(j&&!h.has(l.texture)){const{image:e,params:t}=j,r=new L$1(e,t);o.push(r),h.set(l.texture,r);}const M=h.get(l.texture),U=M?M.id:void 0;let P=s[l.material]?s[l.material][l.texture]:null;if(!P){const e=x[l.material.substring(l.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=j&&j.alphaChannelUsage,n=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,o=j?I(j.alphaChannelUsage):void 0,i={ambient:e$u(e.diffuse),diffuse:e$u(e.diffuse),opacity:1-(e.transparency||0),transparent:n,textureAlphaMode:o,textureAlphaCutoff:.33,textureId:U,initTextureTransparent:!0,doubleSided:!0,cullFace:n$l.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!!j&&!!j.params.preMultiplyAlpha};r$9(t)&&t.materialParamsMixin&&Object.assign(i,t.materialParamsMixin),P=new R(i),s[l.material]||(s[l.material]={}),s[l.material][l.texture]=P;}n.push(P);const k=new g$7(p,v);w+=v.position?v.position.length:0,r.push(k);}return {name:p,stageResources:{textures:o,materials:n,geometries:r},pivotOffset:l.model.pivotOffset,boundingBox:U(r),numberOfVertices:w,lodThreshold:null}}function U(e){const t=B$5();return e.forEach((e=>{const r=e.boundingInfo;r$9(r)&&(h$b(t,r.getBBMin()),h$b(t,r.getBBMax()));})),t}async function P(e,t){const r=[];for(const o in e){const n=e[o],s=n.images[0].data;if(!s){b.warn("Externally referenced texture data is not yet supported");continue}const i=n.encoding+";base64,"+s,u="/textureDefinitions/"+o,l="rgba"===n.channels?n.alphaChannelUsage||"transparency":"none",c={noUnpackFlip:!0,wrap:{s:D$2.REPEAT,t:D$2.REPEAT},preMultiplyAlpha:I(l)!==C$2.Opaque},m=r$9(t)&&t.disableTextures?Promise.resolve(null):t$i(i,t);r.push(m.then((e=>({refId:u,image:e,params:c,alphaChannelUsage:l}))));}const n=await Promise.all(r),s={};for(const a of n)s[a.refId]=a;return s}function I(e){switch(e){case"mask":return C$2.Mask;case"maskAndTransparency":return C$2.MaskBlend;case"none":return C$2.Opaque;default:return C$2.Blend}}function T(e){const t=e.params;return {id:1,material:t.material,texture:t.texture,region:t.texture}}const k=new r$h(1,2,"wosr");

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
async function J(s,o){const i=X(a$n(s));if("wosr"===i.fileType){const e=await(o.cache?o.cache.loadWOSR(i.url,o):w(i.url,o)),t=M(e,o);return {lods:[t],referenceBoundingBox:t.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const a=await(o.cache?o.cache.loadGLTF(i.url,o,o.usePBR):c$o(new n$m(o.streamDataRequester),i.url,o,o.usePBR)),u=m$f(a.model.meta,"ESRI_proxyEllipsoid");a.meta.isEsriSymbolResource&&r$9(u)&&a.meta.uri.includes("/RealisticTrees/")&&te(a,u);const n=a.meta.isEsriSymbolResource?{usePBR:o.usePBR,isSchematic:!1,treeRendering:!!a.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:o.usePBR,isSchematic:!1,treeRendering:!1,mrrFactors:[0,1,.5]},l={...o.materialParamsMixin,treeRendering:!!a.customMeta.esriTreeRendering};if(null!=i.specifiedLodIndex){const e=Y(a,n,l,i.specifiedLodIndex);let t=e[0].boundingBox;if(0!==i.specifiedLodIndex){t=Y(a,n,l,0)[0].boundingBox;}return {lods:e,referenceBoundingBox:t,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1,remove:a.remove}}const c=Y(a,n,l);return {lods:c,referenceBoundingBox:c[0].boundingBox,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1,remove:a.remove}}function X(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);if(t)return {fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null};return e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function Y(e,t,s,a){const u=e.model,n=e$s(),l=new Array,c=new Map,m=new Map;return u.lods.forEach(((e,i)=>{if(void 0!==a&&i!==a)return;const d={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:r$9(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:B$5()};l.push(d),e.parts.forEach((e=>{const i=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),a=u.materials.get(e.material),l=r$9(e.attributes.texCoord0),f=r$9(e.attributes.normal),p=Z(a.alphaMode);if(!c.has(i)){if(l){if(r$9(a.textureColor)&&!m.has(a.textureColor)){const e=u.textures.get(a.textureColor),t={...e.parameters,preMultiplyAlpha:p!==C$2.Opaque};m.set(a.textureColor,new L$1(e.data,t));}if(r$9(a.textureNormal)&&!m.has(a.textureNormal)){const e=u.textures.get(a.textureNormal);m.set(a.textureNormal,new L$1(e.data,e.parameters));}if(r$9(a.textureOcclusion)&&!m.has(a.textureOcclusion)){const e=u.textures.get(a.textureOcclusion);m.set(a.textureOcclusion,new L$1(e.data,e.parameters));}if(r$9(a.textureEmissive)&&!m.has(a.textureEmissive)){const e=u.textures.get(a.textureEmissive);m.set(a.textureEmissive,new L$1(e.data,e.parameters));}if(r$9(a.textureMetallicRoughness)&&!m.has(a.textureMetallicRoughness)){const e=u.textures.get(a.textureMetallicRoughness);m.set(a.textureMetallicRoughness,new L$1(e.data,e.parameters));}}const o=a.color[0]**(1/o$t),n=a.color[1]**(1/o$t),d=a.color[2]**(1/o$t),x=a.emissiveFactor[0]**(1/o$t),g=a.emissiveFactor[1]**(1/o$t),h=a.emissiveFactor[2]**(1/o$t),b=r$9(a.textureColor)&&l?m.get(a.textureColor):null;c.set(i,new R({...t,transparent:p===C$2.Blend,customDepthTest:N$2.Lequal,textureAlphaMode:p,textureAlphaCutoff:a.alphaCutoff,diffuse:[o,n,d],ambient:[o,n,d],opacity:a.opacity,doubleSided:a.doubleSided,doubleSidedType:"winding-order",cullFace:a.doubleSided?n$l.None:n$l.Back,hasVertexColors:!!e.attributes.color,hasVertexTangents:!!e.attributes.tangent,normals:f?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:r$9(b)?b.id:void 0,colorMixMode:a.colorMixMode,normalTextureId:r$9(a.textureNormal)&&l?m.get(a.textureNormal).id:void 0,textureAlphaPremultiplied:r$9(b)&&!!b.params.preMultiplyAlpha,occlusionTextureId:r$9(a.textureOcclusion)&&l?m.get(a.textureOcclusion).id:void 0,emissiveTextureId:r$9(a.textureEmissive)&&l?m.get(a.textureEmissive).id:void 0,metallicRoughnessTextureId:r$9(a.textureMetallicRoughness)&&l?m.get(a.textureMetallicRoughness).id:void 0,emissiveFactor:[x,g,h],mrrFactors:[a.metallicFactor,a.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...s}));}const x=ee(e.indices||e.attributes.position.count,e.primitiveType),S=e.attributes.position.count,A=r$i(i$i,S);t$j(A,e.attributes.position,e.transform);const N=[[O$1.POSITION,{data:A.typedBuffer,size:A.elementCount,exclusive:!0}]],I=[[O$1.POSITION,x]];if(r$9(e.attributes.normal)){const t=r$i(i$i,S);j$6(n,e.transform),r$j(t,e.attributes.normal,n),N.push([O$1.NORMAL,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),I.push([O$1.NORMAL,x]);}if(r$9(e.attributes.tangent)){const t=r$i(c$k,S);j$6(n,e.transform),r$k(t,e.attributes.tangent,n),N.push([O$1.TANGENT,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),I.push([O$1.TANGENT,x]);}if(r$9(e.attributes.texCoord0)){const t=r$i(u$g,S);n$n(t,e.attributes.texCoord0),N.push([O$1.UV0,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),I.push([O$1.UV0,x]);}if(r$9(e.attributes.color)){const t=r$i(x$2,S);if(4===e.attributes.color.elementCount)e.attributes.color instanceof c$k?o$u(t,e.attributes.color,255):e.attributes.color instanceof x$2?e$v(t,e.attributes.color):e.attributes.color instanceof L$5&&o$u(t,e.attributes.color,1/256);else {t$k(t,255,255,255,255);const r=new O$5(t.buffer,0,4);e.attributes.color instanceof i$i?f$b(r,e.attributes.color,255):e.attributes.color instanceof O$5?e$w(r,e.attributes.color):e.attributes.color instanceof E$9&&f$b(r,e.attributes.color,1/256);}N.push([O$1.COLOR,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),I.push([O$1.COLOR,x]);}const L=new g$7(N,I);d.stageResources.geometries.push(L),d.stageResources.materials.push(c.get(i)),l&&(r$9(a.textureColor)&&d.stageResources.textures.push(m.get(a.textureColor)),r$9(a.textureNormal)&&d.stageResources.textures.push(m.get(a.textureNormal)),r$9(a.textureOcclusion)&&d.stageResources.textures.push(m.get(a.textureOcclusion)),r$9(a.textureEmissive)&&d.stageResources.textures.push(m.get(a.textureEmissive)),r$9(a.textureMetallicRoughness)&&d.stageResources.textures.push(m.get(a.textureMetallicRoughness))),d.numberOfVertices+=S;const F=L.boundingInfo;r$9(F)&&(h$b(d.boundingBox,F.getBBMin()),h$b(d.boundingBox,F.getBBMax()));}));})),l}function Z(e){switch(e){case"BLEND":return C$2.Blend;case"MASK":return C$2.Mask;case"OPAQUE":case null:case void 0:return C$2.Opaque}}function ee(e,t){switch(t){case E$7.TRIANGLES:return n$o(e);case E$7.TRIANGLE_STRIP:return o$v(e);case E$7.TRIANGLE_FAN:return i$l(e)}}function te(e,t){for(let r=0;r<e.model.lods.length;++r){const o=e.model.lods[r];e.customMeta.esriTreeRendering=!0;for(const i of o.parts){const o=i.attributes.normal;if(t$f(o))return;const x=i.attributes.position,g=x.count,b=n$f(),R=n$f(),B=n$f(),M=r$i(x$2,g),T=r$i(i$i,g),w=h$c(e$r(),i.transform);for(let s=0;s<g;s++){x.getVec(s,R),o.getVec(s,b),L$4(R,R,i.transform),e$q(B,R,t.center),i$m(B,B,t.radius);const a=B[2],u=s$c(B),p=Math.min(.45+.55*u*u,1);i$m(B,B,t.radius),L$4(B,B,w),z$1(B,B),r+1!==e.model.lods.length&&e.model.lods.length>1&&A$7(B,B,b,a>-1?.2:Math.min(-4*a-3.8,1)),T.setVec(s,B),M.set(s,0,255*p),M.set(s,1,255*p),M.set(s,2,255*p),M.set(s,3,255);}i.attributes.normal=T,i.attributes.color=M;}}}

const objectResourceUtils = /*#__PURE__*/Object.freeze({
  __proto__: null,
  fetch: J,
  gltfToEngineResources: Y,
  parseUrl: X
});

export { t$5 as $, A$6 as A, c$d as B, E$4 as C, e$c as D, E$6 as E, o$e as F, r$5 as G, o$d as H, g$7 as I, e$f as J, A$4 as K, n$7 as L, i$e as M, c$c as N, c$9 as O, d$5 as P, c$8 as Q, f$4 as R, i$d as S, L$1 as T, u$2 as U, o$b as V, s$2 as W, t$6 as X, e$a as Y, o$6 as Z, o$7 as _, i$f as a, f$1 as a$, o$5 as a0, a$2 as a1, i$8 as a2, d$4 as a3, o$c as a4, f$6 as a5, d$6 as a6, L$2 as a7, h$8 as a8, o$i as a9, x as aA, p$8 as aB, R as aC, e$1 as aD, E$3 as aE, n as aF, o as aG, B as aH, U$2 as aI, _$1 as aJ, J as aK, v$4 as aL, o$1 as aM, m as aN, a as aO, e$4 as aP, c$b as aQ, i$4 as aR, O as aS, w as aT, r$3 as aU, n$5 as aV, e$6 as aW, V$3 as aX, A$5 as aY, w$3 as aZ, A$3 as a_, h$6 as aa, p$3 as ab, B$3 as ac, g$4 as ad, d$3 as ae, r$4 as af, e$b as ag, t$9 as ah, o$8 as ai, e$8 as aj, n$8 as ak, e$7 as al, o$4 as am, f$2 as an, s$1 as ao, m$3 as ap, l$2 as aq, P$1 as ar, i$7 as as, v$2 as at, c$3 as au, n$1 as av, t$3 as aw, c$2 as ax, r$2 as ay, h$5 as az, e$j as b, r as b0, o$9 as b1, o$k as b2, t$4 as b3, r$1 as b4, N$1 as b5, e$2 as b6, i$6 as b7, i as b8, e as b9, m$4 as bA, S$2 as bB, B$4 as bC, k$2 as bD, B$1 as bE, objectResourceUtils as bF, F$1 as ba, n$3 as bb, a$9 as bc, m$c as bd, t$a as be, t$1 as bf, p as bg, d$9 as bh, m$1 as bi, h$1 as bj, u$1 as bk, t$b as bl, o$j as bm, c$e as bn, n$2 as bo, g as bp, g$8 as bq, c$4 as br, W$2 as bs, e$9 as bt, i$5 as bu, a$6 as bv, c$6 as bw, u$8 as bx, d as by, i$b as bz, a$c as c, d$b as d, e$i as e, e$k as f, e$h as g, o$l as h, i$g as i, t$c as j, e$g as k, t$e as l, a$b as m, n$b as n, o$n as o, o$h as p, e$e as q, a$d as r, s$6 as s, t$d as t, u$9 as u, m$9 as v, l$a as w, t$8 as x, o$g as y, o$f as z };
