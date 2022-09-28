import { a as i, P as d$1, G as r, f as e, n, U as u, ak as n$1, B as c, p as o, V as o$1, a0 as o$2, q as e$1, l as t, g as e$2, h as o$3, E, al as e$3, am as o$4, an as f$2, t as t$1, a2 as i$3, k as e$5, a3 as d$2, aA as x, C as E$2, a8 as h$1, ai as o$6 } from './objectResourceUtils-e575a410.js';
import { O as O$1, W, E as E$1, k as h, e as l, b as a, S, c as c$1, g as i$2, s, n as n$2, _ as _$1 } from './OrderIndependentTransparency-b8c8f539.js';
import { D as i$4, F as i$5, G as o$5 } from './SceneView-ed3703c9.js';
import { r as r$1, e as e$4 } from './cast-3d5be210.js';
import { i as i$1 } from './vec2f64-2956001b.js';
import { O } from './VertexAttribute-ef09ced9.js';
import { R } from './enums-4770f29d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function f$1(f){const w=new i;d$1(w,f),w.include(r),w.attributes.add(O.POSITION,"vec3"),w.attributes.add(O.UV0,"vec2"),w.varyings.add("vpos","vec3"),f.hasMultipassTerrain&&w.varyings.add("depth","float");const{vertex:h,fragment:b}=w;return h.uniforms.add(new e("textureCoordinateScaleFactor",(o=>r$1(o.texture)&&r$1(o.texture.descriptor.textureCoordinateScaleFactor)?o.texture.descriptor.textureCoordinateScaleFactor:i$1))),h.code.add(n`
    void main(void) {
      vpos = position;
      ${f.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0 * textureCoordinateScaleFactor;
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),w.include(u,f),w.include(n$1,f),b.uniforms.add([new c("tex",(e=>e.texture)),new o("opacity",(e=>e.opacity))]),w.varyings.add("vTexCoord","vec2"),f.output===o$1.Alpha?b.code.add(n`
    void main() {
      discardBySlice(vpos);
      ${f.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}

      float alpha = texture2D(tex, vTexCoord).a * opacity;
      if (alpha  < ${n.float(o$2)}) {
        discard;
      }

      gl_FragColor = vec4(alpha);
    }
    `):(b.include(e$1),b.code.add(n`
    void main() {
      discardBySlice(vpos);
      ${f.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
      gl_FragColor = texture2D(tex, vTexCoord) * opacity;

      if (gl_FragColor.a < ${n.float(o$2)}) {
        discard;
      }

      gl_FragColor = highlightSlice(gl_FragColor, vpos);
      ${f.transparencyPassType===O$1.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    }
    `)),w}const w$1=Object.freeze(Object.defineProperty({__proto__:null,build:f$1},Symbol.toStringTag,{value:"Module"}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class N extends t{}class _ extends e$2{initializeProgram(e){const t=_.shader.get().build(this.configuration);return new o$3(e.rctx,t,E)}_setPipelineState(e,r){const i=this.configuration,s=e===O$1.NONE,o=e===O$1.FrontFace;return W({blending:i.output!==o$1.Color&&i.output!==o$1.Alpha||!i.transparent?null:s?C:E$1(e),culling:h(i.cullFace),depthTest:{func:l(e)},depthWrite:s?i.writeDepth&&a:S(e),colorWrite:c$1,stencilWrite:i.hasOccludees?e$3:null,stencilTest:i.hasOccludees?r?o$4:f$2:null,polygonOffset:s||o?null:i$2(i.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}_.shader=new t$1(w$1,(()=>import('./ImageMaterial.glsl-b2df7378.js')));const C=s(R.ONE,R.ONE_MINUS_SRC_ALPHA);class w extends i$3{constructor(){super(...arguments),this.output=o$1.Color,this.cullFace=n$2.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=O$1.NONE,this.hasMultipassTerrain=!1,this.cullAboveGround=!1;}}e$4([e$5({count:o$1.COUNT})],w.prototype,"output",void 0),e$4([e$5({count:n$2.COUNT})],w.prototype,"cullFace",void 0),e$4([e$5()],w.prototype,"hasSlicePlane",void 0),e$4([e$5()],w.prototype,"transparent",void 0),e$4([e$5()],w.prototype,"enableOffset",void 0),e$4([e$5()],w.prototype,"writeDepth",void 0),e$4([e$5()],w.prototype,"hasOccludees",void 0),e$4([e$5({count:O$1.COUNT})],w.prototype,"transparencyPassType",void 0),e$4([e$5()],w.prototype,"hasMultipassTerrain",void 0),e$4([e$5()],w.prototype,"cullAboveGround",void 0);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class m extends d$2{constructor(e){super(e,new f),this.supportsEdges=!0,this.techniqueConfig=new w;}getConfiguration(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.cullFace=this.parameters.cullFace,this.techniqueConfig.hasSlicePlane=this.parameters.hasSlicePlane,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,this.techniqueConfig.hasOccludees=this.parameters.hasOccludees,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.enableOffset=t.camera.relativeElevation<_$1,this.techniqueConfig.hasMultipassTerrain=t.multipassTerrain.enabled,this.techniqueConfig.cullAboveGround=t.multipassTerrain.cullAboveGround,this.techniqueConfig}intersect(e,t,r,i,s,a,n){x(e,t,i,s,a,void 0,n);}requiresSlot(t,i){if(t===E$2.DRAPED_MATERIAL)return !0;if(i$4(i)===o$1.Highlight)return t===E$2.OPAQUE_MATERIAL;return t===(this.parameters.transparent?this.parameters.writeDepth?E$2.TRANSPARENT_MATERIAL:E$2.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:E$2.OPAQUE_MATERIAL)}createGLMaterial(t){return t.output===o$1.Color||t.output===o$1.Alpha||t.output===o$1.Highlight?new d(t):void 0}createBufferWriter(){return new i$5(o$5)}}class d extends h$1{constructor(e){super({...e,...e.material.parameters});}_updateParameters(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(_,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:e.hasOccludees}),this._updateParameters(e));}beginSlot(t){return this._output!==o$1.Color&&this._output!==o$1.Alpha||this._updateOccludeeState(t),this._updateParameters(t)}}class f extends o$6{constructor(){super(...arguments),this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=n$2.None,this.hasOccludees=!1,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0;}}

export { f$1 as f, m };
