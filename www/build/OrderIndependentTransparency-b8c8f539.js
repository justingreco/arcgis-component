import { U } from './request-ac4d8bfb.js';
import { T as T$1, N as N$3, S as S$2, R as R$1, I as I$1 } from './enums-4770f29d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var n,N$2,e,O$1,t$1,i$1,a$1,o$1,u$1,c$2,l$2,A$2,C$1,D$1;!function(n){n[n.None=0]="None",n[n.Front=1]="Front",n[n.Back=2]="Back",n[n.COUNT=3]="COUNT";}(n||(n={})),function(n){n[n.Less=0]="Less",n[n.Lequal=1]="Lequal",n[n.COUNT=2]="COUNT";}(N$2||(N$2={})),function(n){n[n.NONE=0]="NONE",n[n.SMAA=1]="SMAA";}(e||(e={})),function(n){n[n.Color=0]="Color",n[n.Alpha=1]="Alpha",n[n.FrontFace=2]="FrontFace",n[n.NONE=3]="NONE",n[n.COUNT=4]="COUNT";}(O$1||(O$1={})),function(n){n[n.BACKGROUND=0]="BACKGROUND",n[n.UPDATE=1]="UPDATE";}(t$1||(t$1={})),function(n){n[n.NOT_LOADED=0]="NOT_LOADED",n[n.LOADING=1]="LOADING",n[n.LOADED=2]="LOADED";}(i$1||(i$1={})),function(n){n[n.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",n[n.OutlineVisualElementMask=2]="OutlineVisualElementMask";}(a$1||(a$1={})),function(n){n[n.ASYNC=0]="ASYNC",n[n.SYNC=1]="SYNC";}(o$1||(o$1={})),function(n){n[n.Highlight=0]="Highlight",n[n.MaskOccludee=1]="MaskOccludee",n[n.COUNT=2]="COUNT";}(u$1||(u$1={})),function(n){n[n.Triangle=0]="Triangle",n[n.Point=1]="Point",n[n.Line=2]="Line";}(c$2||(c$2={})),function(n){n[n.STRETCH=1]="STRETCH",n[n.PAD=2]="PAD";}(l$2||(l$2={})),function(n){n[n.CHANGED=0]="CHANGED",n[n.UNCHANGED=1]="UNCHANGED";}(A$2||(A$2={})),function(n){n[n.Blend=0]="Blend",n[n.Opaque=1]="Opaque",n[n.Mask=2]="Mask",n[n.MaskBlend=3]="MaskBlend",n[n.COUNT=4]="COUNT";}(C$1||(C$1={})),function(n){n[n.OFF=0]="OFF",n[n.ON=1]="ON";}(D$1||(D$1={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function s(t,e,i=T$1.ADD,s=[0,0,0,0]){return {srcRgb:t,srcAlpha:t,dstRgb:e,dstAlpha:e,opRgb:i,opAlpha:i,color:{r:s[0],g:s[1],b:s[2],a:s[3]}}}function l$1(t,e,i,s,l=T$1.ADD,r=T$1.ADD,o=[0,0,0,0]){return {srcRgb:t,srcAlpha:e,dstRgb:i,dstAlpha:s,opRgb:l,opAlpha:r,color:{r:o[0],g:o[1],b:o[2],a:o[3]}}}const r={face:N$3.BACK,mode:S$2.CCW},o={face:N$3.FRONT,mode:S$2.CCW},h=e=>e===n.Back?r:e===n.Front?o:null,a={zNear:0,zFar:1},c$1={r:!0,g:!0,b:!0,a:!0};function _$1(t){return T.intern(t)}function d(t){return D.intern(t)}function p(t){return C.intern(t)}function u(t){return A$1.intern(t)}function g(t){return w.intern(t)}function f$1(t){return B.intern(t)}function v(t){return z.intern(t)}function I(t){return j.intern(t)}function W(t){return N$1.intern(t)}class S$1{constructor(t,e){this.makeKey=t,this.makeRef=e,this.interns=new Map;}intern(t){if(!t)return null;const e=this.makeKey(t),i=this.interns;return i.has(e)||i.set(e,this.makeRef(t)),i.get(e)}}function b(t){return "["+t.join(",")+"]"}const T=new S$1(y,(t=>({__tag:"Blending",...t})));function y(t){return t?b([t.srcRgb,t.srcAlpha,t.dstRgb,t.dstAlpha,t.opRgb,t.opAlpha,t.color.r,t.color.g,t.color.b,t.color.a]):null}const D=new S$1(O,(t=>({__tag:"Culling",...t})));function O(t){return t?b([t.face,t.mode]):null}const C=new S$1(m,(t=>({__tag:"PolygonOffset",...t})));function m(t){return t?b([t.factor,t.units]):null}const A$1=new S$1(R,(t=>({__tag:"DepthTest",...t})));function R(t){return t?b([t.func]):null}const w=new S$1(k,(t=>({__tag:"StencilTest",...t})));function k(t){return t?b([t.function.func,t.function.ref,t.function.mask,t.operation.fail,t.operation.zFail,t.operation.zPass]):null}const B=new S$1(P,(t=>({__tag:"DepthWrite",...t})));function P(t){return t?b([t.zNear,t.zFar]):null}const z=new S$1(F,(t=>({__tag:"ColorWrite",...t})));function F(t){return t?b([t.r,t.g,t.b,t.a]):null}const j=new S$1(K,(t=>({__tag:"StencilWrite",...t})));function K(t){return t?b([t.mask]):null}const N$1=new S$1(x,(t=>({blending:_$1(t.blending),culling:d(t.culling),polygonOffset:p(t.polygonOffset),depthTest:u(t.depthTest),stencilTest:g(t.stencilTest),depthWrite:f$1(t.depthWrite),colorWrite:v(t.colorWrite),stencilWrite:I(t.stencilWrite)})));function x(t){return t?b([y(t.blending),O(t.culling),m(t.polygonOffset),R(t.depthTest),k(t.stencilTest),P(t.depthWrite),F(t.colorWrite),K(t.stencilWrite)]):null}class M{constructor(t){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._stateSetters=t;}setPipeline(t){(this._pipelineInvalid||t!==this._pipeline)&&(this._setBlending(t.blending),this._setCulling(t.culling),this._setPolygonOffset(t.polygonOffset),this._setDepthTest(t.depthTest),this._setStencilTest(t.stencilTest),this._setDepthWrite(t.depthWrite),this._setColorWrite(t.colorWrite),this._setStencilWrite(t.stencilWrite),this._pipeline=t),this._pipelineInvalid=!1;}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0;}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0;}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0;}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0;}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0;}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0;}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0;}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0;}_setBlending(t){this._blending=this._setSubState(t,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1;}_setCulling(t){this._culling=this._setSubState(t,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1;}_setPolygonOffset(t){this._polygonOffset=this._setSubState(t,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1;}_setDepthTest(t){this._depthTest=this._setSubState(t,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1;}_setStencilTest(t){this._stencilTest=this._setSubState(t,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1;}_setDepthWrite(t){this._depthWrite=this._setSubState(t,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1;}_setColorWrite(t){this._colorWrite=this._setSubState(t,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1;}_setStencilWrite(t){this._stencilWrite=this._setSubState(t,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1;}_setSubState(t,e,i,n){return (i||t!==e)&&(n(t),this._pipelineInvalid=!0),t}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
async function t(t,r){const{data:a}=await U(t,{responseType:"image",...r});return a}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const c=l$1(R$1.SRC_ALPHA,R$1.ONE,R$1.ONE_MINUS_SRC_ALPHA,R$1.ONE_MINUS_SRC_ALPHA),N=s(R$1.ONE,R$1.ONE),A=s(R$1.ZERO,R$1.ONE_MINUS_SRC_ALPHA);function E(r){return r===O$1.FrontFace?null:r===O$1.Alpha?A:N}function S(r){return r===O$1.FrontFace?a:null}const _=5e5,f={factor:-1,units:-2};function i(n){return n?f:null}function l(r,e=I$1.LESS){return r===O$1.NONE||r===O$1.FrontFace?e:I$1.LEQUAL}

export { A$2 as A, C$1 as C, D$1 as D, E, M, N$2 as N, O$1 as O, S, W, _, c$2 as a, a as b, c$1 as c, c as d, l as e, f, i as g, l$2 as h, i$1 as i, o as j, h as k, l$1 as l, t$1 as m, n, o$1 as o, a$1 as p, e as q, r, s, t, u$1 as u, A as v };
