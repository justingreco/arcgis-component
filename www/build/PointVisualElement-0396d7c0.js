import { r, t as t$1, e as e$7, aS as s$3, aR as p$2 } from './cast-3d5be210.js';
import { n as n$4, a as o$3, e as e$6, M, L, b as r$3, w as w$2, x as x$1, z as z$2, _ as _$4, u as u$3, g as t$5, Q as D, B as a$1, o as o$a, a7 as a$2 } from './mathUtils-559a53d9.js';
import { v as v$1, h as h$1, j, m as m$4 } from './lineSegment-99193ade.js';
import { t as t$4 } from './LineVisualElement-0571b2ba.js';
import { n as n$5, r as r$4 } from './vec4f64-011248e0.js';
import { _ as _$2, p as p$1, G as p$3, M as m$3, N as l, R as v$2, S as s$4 } from './frustum-95850b85.js';
import { _ as _$3, j as j$1 } from './sphere-4710475c.js';
import { o as o$4 } from './EdgeProcessingWorker-87151cf6.js';
import { T } from './InterleavedLayout-fe763b01.js';
import { O as O$1 } from './VertexAttribute-ef09ced9.js';
import { c as a, p as o$1, b as e$1, B as c$1, f as e$2, n as n$2, a as i, e as e$3, g as e$5, h as o$2, t, j as t$2, k as e$8, l as t$3, E as E$1, bB as S$1, C as E$2, bC as B$1, u as u$2, ag as e$9, T as L$1 } from './objectResourceUtils-e575a410.js';
import { c as c$2 } from './mat4-d5df0e58.js';
import { e as e$4 } from './mat4f64-ef2c1a38.js';
import { r as r$1 } from './vec2-4f9a494f.js';
import { n as n$3 } from './vec2f64-2956001b.js';
import { a_ as n$1, a$ as s$1, au as o$5, b0 as o$6, aE as o$7, b1 as r$2, l as l$1, aR as O$2, b2 as o$9, b3 as J, aj as m$5, ah as h$3, T as T$1, b4 as a$3 } from './SceneView-ed3703c9.js';
import { R, E, F } from './enums-4770f29d.js';
import { W, s as s$2, c as c$3, o as o$8 } from './OrderIndependentTransparency-b8c8f539.js';
import { f, c as c$4 } from './FramebufferObject-bfb23fd2.js';
import { B as Bn } from './projection-fbd5d346.js';
import { M as M$1 } from './aaBoundingBox-b312516d.js';
import { c as c$5 } from './vectorStacks-3fa8ee55.js';
import { l as l$2, h as h$2 } from './reactiveUtils-bd6fe823.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function s(s,p){s.extensions.add("GL_OES_standard_derivatives");const u=s.fragment;u.include(a),s.include(n$1),u.uniforms.add([new o$1("globalAlpha",(o=>o.globalAlpha)),new e$1("glowColor",(o=>o.glowColor)),new o$1("glowWidth",((o,e)=>o.glowWidth*e.camera.pixelRatio)),new o$1("glowFalloff",(o=>o.glowFalloff)),new e$1("innerColor",(o=>o.innerColor)),new o$1("innerWidth",((o,e)=>o.innerWidth*e.camera.pixelRatio)),new c$1("depthMap",((o,e)=>e.linearDepthTexture)),new e$2("nearFar",((o,e)=>e.camera.nearFar)),new s$1("frameColor")]),u.code.add(n$2`vec4 blendPremultiplied(vec4 source, vec4 dest) {
float oneMinusSourceAlpha = 1.0 - source.a;
return vec4(
source.rgb + dest.rgb * oneMinusSourceAlpha,
source.a + dest.a * oneMinusSourceAlpha
);
}`),u.code.add(n$2`vec4 premultipliedColor(vec3 rgb, float alpha) {
return vec4(rgb * alpha, alpha);
}`),u.code.add(n$2`vec4 laserlineProfile(float dist) {
if (dist > glowWidth) {
return vec4(0.0);
}
float innerAlpha = (1.0 - smoothstep(0.0, innerWidth, dist));
float glowAlpha = pow(max(0.0, 1.0 - dist / glowWidth), glowFalloff);
return blendPremultiplied(
premultipliedColor(innerColor, innerAlpha),
premultipliedColor(glowColor, glowAlpha)
);
}`),u.code.add(n$2`bool laserlineReconstructFromDepth(out vec3 pos, out vec3 normal, out float depthDiscontinuityAlpha) {
float depth = linearDepthFromTexture(depthMap, uv, nearFar);
if (-depth == nearFar[0]) {
return false;
}
pos = reconstructPosition(gl_FragCoord.xy, depth);
normal = normalize(cross(dFdx(pos), dFdy(pos)));
float ddepth = fwidth(depth);
depthDiscontinuityAlpha = 1.0 - smoothstep(0.0, 0.01, -ddepth / depth);
return true;
}`),p.contrastControlEnabled?(u.uniforms.add(new o$1("globalAlphaContrastBoost",(e=>r(e.globalAlphaContrastBoost)?e.globalAlphaContrastBoost:1))),u.code.add(n$2`float rgbToLuminance(vec3 color) {
return dot(vec3(0.2126, 0.7152, 0.0722), color);
}
vec4 laserlineOutput(vec4 color) {
float backgroundLuminance = rgbToLuminance(texture2D(frameColor, uv).rgb);
float alpha = clamp(globalAlpha * max(backgroundLuminance * globalAlphaContrastBoost, 1.0), 0.0, 1.0);
return color * alpha;
}`)):u.code.add(n$2`vec4 laserlineOutput(vec4 color) {
return color * globalAlpha;
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function v(i$1){const r=new i;r.include(s,i$1);const{vertex:v,fragment:w}=r;return v.uniforms.add([new e$3("modelView",((i,o)=>c$2(m$2,o.camera.viewMatrix,i.origin))),new e$3("proj",((e,i)=>i.camera.projectionMatrix)),new o$1("glowWidth",((e,i)=>e.glowWidth*i.camera.pixelRatio)),new e$2("pixelToNDC",((e,i)=>r$1(p,2/i.camera.fullViewport[2],2/i.camera.fullViewport[3])))]),r.attributes.add(O$1.START,"vec3"),r.attributes.add(O$1.END,"vec3"),r.attributes.add(O$1.UP,"vec3"),r.attributes.add(O$1.EXTRUDE,"vec2"),r.varyings.add("uv","vec2"),r.varyings.add("vViewStart","vec3"),r.varyings.add("vViewEnd","vec3"),r.varyings.add("vViewPlane","vec4"),v.code.add(n$2`void main() {
vec3 pos = mix(start, end, extrude.x);
vec4 viewPos = modelView * vec4(pos, 1);
vec4 projPos = proj * viewPos;
vec2 ndcPos = projPos.xy / projPos.w;
vec3 viewUp = (modelView * vec4(extrude.y * up, 0)).xyz;
vec4 projPosUp = proj * vec4(viewPos.xyz + viewUp, 1);
vec2 projExtrudeDir = normalize(projPosUp.xy / projPosUp.w - ndcPos);
vec2 lxy = abs(sign(projExtrudeDir) - ndcPos);
ndcPos += length(lxy) * projExtrudeDir;
vec3 worldPlaneNormal = normalize(cross(up, normalize(end - start)));
vec3 viewPlaneNormal = (modelView * vec4(worldPlaneNormal, 0)).xyz;
vViewStart = (modelView * vec4(start, 1)).xyz;
vViewEnd = (modelView * vec4(end, 1)).xyz;
vViewPlane = vec4(viewPlaneNormal, -dot(viewPlaneNormal, vViewStart));
float xPaddingPixels = sign(dot(viewPlaneNormal, viewPos.xyz)) * (extrude.x * 2.0 - 1.0) * glowWidth;
ndcPos.x += xPaddingPixels * pixelToNDC.x;
uv = ndcPos * 0.5 + 0.5;
gl_Position = vec4(ndcPos, 0, 1);
}`),w.uniforms.add(new o$1("perScreenPixelRatio",((e,i)=>i.camera.perScreenPixelRatio))),w.code.add(n$2`float planeDistancePixels(vec4 plane, vec3 pos, vec3 start, vec3 end) {
vec3 origin = mix(start, end, 0.5);
vec3 basis = end - origin;
vec3 posAtOrigin = pos - origin;
float x = dot(normalize(basis), posAtOrigin);
float y = dot(plane.xyz, posAtOrigin);
float dx = max(abs(x) - length(basis), 0.0);
float dy = y;
float dist = length(vec2(dx, dy));
float width = fwidth(y);
float maxPixelDistance = length(pos) * perScreenPixelRatio * 2.0;
float pixelDist = dist / min(width, maxPixelDistance);
return abs(pixelDist);
}
void main() {
vec3 pos;
vec3 normal;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, depthDiscontinuityAlpha)) {
discard;
}
float distance = planeDistancePixels(vViewPlane, pos, vViewStart, vViewEnd);
vec4 color = laserlineProfile(distance);
float alpha = 1.0 - smoothstep(0.995, 0.999, abs(dot(normal, vViewPlane.xyz)));
gl_FragColor = laserlineOutput(color * alpha * depthDiscontinuityAlpha);
}`),r}const p=n$3(),m$2=e$4(),w$1=Object.freeze(Object.defineProperty({__proto__:null,build:v},Symbol.toStringTag,{value:"Module"}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class m$1 extends e$5{initializeProgram(e){const r=m$1.shader.get().build(this.configuration);return new o$2(e.rctx,r,m$1.attributeLocations)}initializePipeline(){return W({blending:s$2(R.ONE,R.ONE_MINUS_SRC_ALPHA),colorWrite:c$3})}}m$1.shader=new t(w$1,(()=>import('./LaserlinePath.glsl-b576dcc7.js'))),m$1.attributeLocations=new Map([[O$1.START,0],[O$1.END,1],[O$1.UP,2],[O$1.EXTRUDE,3]]);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class _$1{constructor(e){this._renderCoordsHelper=e,this._buffers=null,this._origin=n$4(),this._dirty=!1,this._count=0,this._vao=null;}set vertices(e){const t=new Float64Array(3*e.length);let r=0;for(const s of e)t[r++]=s[0],t[r++]=s[1],t[r++]=s[2];this.buffers=[t];}set buffers(e){if(this._buffers=e,this._buffers.length>0){const e=this._buffers[0],t=3*Math.floor(e.length/3/2);o$3(this._origin,e[t+0],e[t+1],e[t+2]);}else o$3(this._origin,0,0,0);this._dirty=!0;}get origin(){return this._origin}draw(t){const r$1=this._ensureVAO(t);r(r$1)&&(t.bindVAO(r$1),t.drawArrays(E.TRIANGLES,0,this._count));}dispose(){r(this._vao)&&this._vao.dispose();}_ensureVAO(e){return t$1(this._buffers)?null:(t$1(this._vao)&&(this._vao=this._createVAO(e,this._buffers)),this._ensureVertexData(this._vao,this._buffers),this._vao)}_createVAO(e,t){const r=this._createDataBuffer(t);return this._dirty=!1,new f(e,m$1.attributeLocations,{data:o$4(V)},{data:c$4.createVertex(e,F.STATIC_DRAW,r)})}_ensureVertexData(e,t){if(!this._dirty)return;const r=this._createDataBuffer(t);e.vertexBuffers.data.setData(r),this._dirty=!1;}_numberOfRenderVertices(e){return 3*(2*(e.length/3-1))}_createDataBuffer(e){const t=e.reduce(((e,t)=>e+this._numberOfRenderVertices(t)),0);this._count=t;const i=V.createBuffer(t),o=this._origin;let n=0,f=0;for(const u of e){for(let e=0;e<u.length;e+=3){const t=o$3(b$1,u[e+0],u[e+1],u[e+2]);0===e?f=this._renderCoordsHelper.getAltitude(t):this._renderCoordsHelper.setAltitude(t,f);const a=this._renderCoordsHelper.worldUpAtPosition(t,d$1),c=n+2*e,h=e$6(b$1,t,o);if(e<u.length-3){i.up.setVec(c,a),i.up.setVec(c+3,a),i.up.setVec(c+5,a);for(let e=0;e<6;e++)i.start.setVec(c+e,h);i.extrude.setValues(c+0,0,-1),i.extrude.setValues(c+1,1,-1),i.extrude.setValues(c+2,1,1),i.extrude.setValues(c+3,0,-1),i.extrude.setValues(c+4,1,1),i.extrude.setValues(c+5,0,1);}if(e>0){i.up.setVec(c-2,a),i.up.setVec(c-4,a),i.up.setVec(c-5,a);for(let e=-6;e<0;e++)i.end.setVec(c+e,h);}}n+=this._numberOfRenderVertices(u);}return i.buffer}}const d$1=n$4(),b$1=n$4(),V=T().vec3f(O$1.START).vec3f(O$1.END).vec3f(O$1.UP).vec2f(O$1.EXTRUDE);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class e extends t$2{constructor(){super(...arguments),this.contrastControlEnabled=!1;}}e$7([e$8()],e.prototype,"contrastControlEnabled",void 0);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const h=M(6);function m(e){const i$1=new i;i$1.extensions.add("GL_OES_standard_derivatives"),i$1.include(o$5),i$1.include(s,e);const n=i$1.fragment;return e.heightManifoldEnabled&&n.uniforms.add(new o$6("heightPlane")),e.pointDistanceEnabled&&n.uniforms.add(new o$6("pointDistanceSphere")),e.lineVerticalPlaneEnabled&&(n.uniforms.add(new o$6("lineVerticalPlane")),n.uniforms.add(new o$7("lineVerticalStart")),n.uniforms.add(new o$7("lineVerticalEnd"))),(e.heightManifoldEnabled||e.pointDistanceEnabled||e.lineVerticalPlaneEnabled)&&n.uniforms.add(new r$2("maxPixelDistance")),(e.lineVerticalPlaneEnabled||e.heightManifoldEnabled)&&n.code.add(n$2`float planeDistancePixels(vec4 plane, vec3 pos) {
float dist = dot(plane.xyz, pos) + plane.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`),e.pointDistanceEnabled&&n.code.add(n$2`float sphereDistancePixels(vec4 sphere, vec3 pos) {
float dist = distance(sphere.xyz, pos) - sphere.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`),e.intersectsLineEnabled&&(n.uniforms.add(new o$7("intersectsLineStart")),n.uniforms.add(new o$7("intersectsLineEnd")),n.uniforms.add(new o$7("intersectsLineDirection")),n.uniforms.add(new r$2("intersectsLineRadius")),n.uniforms.add(new o$1("perScreenPixelRatio",((e,i)=>i.camera.perScreenPixelRatio))),n.code.add(n$2`float lineDistancePixels(vec3 start, vec3 dir, float radius, vec3 pos) {
float dist = length(cross(dir, pos - start)) / (length(pos) * perScreenPixelRatio);
return abs(dist) - radius;
}`)),(e.lineVerticalPlaneEnabled||e.intersectsLineEnabled)&&n.code.add(n$2`bool pointIsWithinLine(vec3 pos, vec3 start, vec3 end) {
vec3 dir = end - start;
float t2 = dot(dir, pos - start);
float l2 = dot(dir, dir);
return t2 >= 0.0 && t2 <= l2;
}`),n.code.add(n$2`void main() {
vec3 pos;
vec3 normal;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, depthDiscontinuityAlpha)) {
discard;
}
vec4 color = vec4(0, 0, 0, 0);`),e.heightManifoldEnabled&&(n.uniforms.add(new e$2("angleCutoff",(e=>u$1(e)))),n.code.add(n$2`{
float heightManifoldAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, heightPlane.xyz)));
vec4 heightManifoldColor = laserlineProfile(planeDistancePixels(heightPlane, pos));
color = max(color, heightManifoldColor * heightManifoldAlpha);
}`)),e.pointDistanceEnabled&&(n.uniforms.add(new e$2("angleCutoff",(e=>u$1(e)))),n.code.add(n$2`{
float pointDistanceSphereDistance = sphereDistancePixels(pointDistanceSphere, pos);
vec4 pointDistanceSphereColor = laserlineProfile(pointDistanceSphereDistance);
float pointDistanceSphereAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, normalize(pos - pointDistanceSphere.xyz))));
color = max(color, pointDistanceSphereColor * pointDistanceSphereAlpha);
}`)),e.lineVerticalPlaneEnabled&&(n.uniforms.add(new e$2("angleCutoff",(e=>u$1(e)))),n.code.add(n$2`{
if (pointIsWithinLine(pos, lineVerticalStart, lineVerticalEnd)) {
float lineVerticalDistance = planeDistancePixels(lineVerticalPlane, pos);
vec4 lineVerticalColor = laserlineProfile(lineVerticalDistance);
float lineVerticalAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, lineVerticalPlane.xyz)));
color = max(color, lineVerticalColor * lineVerticalAlpha);
}
}`)),e.intersectsLineEnabled&&(n.uniforms.add(new e$2("angleCutoff",(e=>u$1(e)))),n.code.add(n$2`{
if (pointIsWithinLine(pos, intersectsLineStart, intersectsLineEnd)) {
float intersectsLineDistance = lineDistancePixels(intersectsLineStart, intersectsLineDirection, intersectsLineRadius, pos);
vec4 intersectsLineColor = laserlineProfile(intersectsLineDistance);
float intersectsLineAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, 1.0 - abs(dot(normal, intersectsLineDirection)));
color = max(color, intersectsLineColor * intersectsLineAlpha);
}
}`)),n.code.add(n$2`gl_FragColor = laserlineOutput(color * depthDiscontinuityAlpha);
}`),i$1}function u$1(t){const a=r(t.angleCutoff)?t.angleCutoff:h;return r$1(g,Math.cos(a),Math.cos(Math.max(0,a-M(2))))}const g=n$3(),w=Object.freeze(Object.defineProperty({__proto__:null,defaultAngleCutoff:h,build:m},Symbol.toStringTag,{value:"Module"}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class c extends t$3{}class d extends e$5{initializeProgram(e){const r=d.shader.get().build(this.configuration);return new o$2(e.rctx,r,E$1)}initializePipeline(){return W({blending:s$2(R.ONE,R.ONE_MINUS_SRC_ALPHA),colorWrite:c$3})}}d.shader=new t(w,(()=>import('./Laserlines.glsl-42c9e9b5.js')));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class n extends e{constructor(){super(...arguments),this.heightManifoldEnabled=!1,this.pointDistanceEnabled=!1,this.lineVerticalPlaneEnabled=!1,this.intersectsLineEnabled=!1;}}e$7([e$8()],n.prototype,"heightManifoldEnabled",void 0),e$7([e$8()],n.prototype,"pointDistanceEnabled",void 0),e$7([e$8()],n.prototype,"lineVerticalPlaneEnabled",void 0),e$7([e$8()],n.prototype,"intersectsLineEnabled",void 0);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const O=n$4(),y=n$5(),I={glowColor:[1,.5,0],glowWidth:8,glowFalloff:8,innerColor:[1,1,1],innerWidth:1,globalAlpha:.75,angleCutoff:M(6),globalAlphaContrastBoost:2,__tagStrict:"NoParameters"};function N(e,t,i,n){const s=O,h=y;L(s,t,n),r$3(h,i),h[3]=0,w$2(h,h,n),_$2(s,h,e);}class H{constructor(e,t={},i={contrastControlEnabled:!1}){this._renderCoordsHelper=e,this._config=i,this._technique=null,this._heightManifoldEnabled=!1,this._heightManifoldTarget=n$4(),this._pointDistanceEnabled=!1,this._pointDistanceOrigin=n$4(),this._pointDistanceTarget=n$4(),this._lineVerticalPlaneEnabled=!1,this._lineVerticalPlaneSegment=v$1(),this._intersectsLineEnabled=!1,this._intersectsLineSegment=v$1(),this._intersectsLineRadius=3,this._intersectsLineInfinite=!1,this._pathVerticalPlaneEnabled=!1,this._pathVerticalPlaneData=null,this._pathTechnique=null,this.canRender=!0,this._tempNormal=n$4(),this._tempDir=n$4(),this._tempUp=n$4(),this._tempVec3A=n$4(),this._tempVec3B=n$4(),this._tempVec4=n$5(),this._tempPlane=p$1(),this._tempSphere=_$3(),this._parameters=S$1(t,I);}get renderSlots(){return [this._config.contrastControlEnabled?E$2.LASERLINES_CONTRAST_CONTROL:E$2.LASERLINES]}get needsLinearDepth(){return !0}get heightManifoldEnabled(){return this._heightManifoldEnabled}set heightManifoldEnabled(e){this._heightManifoldEnabled!==e&&(this._heightManifoldEnabled=e,this._requestRender());}get heightManifoldTarget(){return this._heightManifoldTarget}set heightManifoldTarget(e){r$3(this._heightManifoldTarget,e),this._requestRender();}get pointDistanceEnabled(){return this._pointDistanceEnabled}set pointDistanceEnabled(e){e!==this._pointDistanceEnabled&&(this._pointDistanceEnabled=e,this._requestRender());}get pointDistanceTarget(){return this._pointDistanceTarget}set pointDistanceTarget(e){r$3(this._pointDistanceTarget,e),this._requestRender();}get pointDistanceOrigin(){return this._pointDistanceOrigin}set pointDistanceOrigin(e){r$3(this._pointDistanceOrigin,e),this._requestRender();}get lineVerticalPlaneEnabled(){return this._lineVerticalPlaneEnabled}set lineVerticalPlaneEnabled(e){e!==this._lineVerticalPlaneEnabled&&(this._lineVerticalPlaneEnabled=e,this._requestRender());}get lineVerticalPlaneSegment(){return this._lineVerticalPlaneSegment}set lineVerticalPlaneSegment(e){h$1(e,this._lineVerticalPlaneSegment),this._requestRender();}get intersectsLineEnabled(){return this._intersectsLineEnabled}set intersectsLineEnabled(e){e!==this._intersectsLineEnabled&&(this._intersectsLineEnabled=e,this._requestRender());}get intersectsLineSegment(){return this._intersectsLineSegment}set intersectsLineSegment(e){h$1(e,this._intersectsLineSegment),this._requestRender();}get intersectsLineRadius(){return this._intersectsLineRadius}set intersectsLineRadius(e){e!==this._intersectsLineRadius&&(this._intersectsLineRadius=e,this._requestRender());}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(e){e!==this._intersectsLineInfinite&&(this._intersectsLineInfinite=e,this._requestRender());}get pathVerticalPlaneEnabled(){return this._pathVerticalPlaneEnabled}set pathVerticalPlaneEnabled(e){e!==this._pathVerticalPlaneEnabled&&(this._pathVerticalPlaneEnabled=e,r(this._pathVerticalPlaneData)&&this._requestRender());}set pathVerticalPlaneVertices(e){t$1(this._pathVerticalPlaneData)&&(this._pathVerticalPlaneData=new _$1(this._renderCoordsHelper)),this._pathVerticalPlaneData.vertices=e,this.pathVerticalPlaneEnabled&&this._requestRender();}set pathVerticalPlaneBuffers(e){t$1(this._pathVerticalPlaneData)&&(this._pathVerticalPlaneData=new _$1(this._renderCoordsHelper)),this._pathVerticalPlaneData.buffers=e,this.pathVerticalPlaneEnabled&&this._requestRender();}setParameters(e){B$1(this._parameters,e)&&this._requestRender();}initializeRenderContext(e$1){this._context=e$1;const t=e$1.renderContext.rctx;this._quadVAO=u$2(t),this._techniqueRepository=e$1.shaderTechniqueRepository,this._techniqueConfig=new n;const i=new e;i.contrastControlEnabled=this._config.contrastControlEnabled,this._pathTechnique=this._techniqueRepository.acquire(m$1,i);}uninitializeRenderContext(){this._quadVAO=s$3(this._quadVAO),this._technique=p$2(this._technique),this._pathVerticalPlaneData=s$3(this._pathVerticalPlaneData),this._pathTechnique=p$2(this._pathTechnique);}prepareTechnique(){return this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled?(this._techniqueConfig.heightManifoldEnabled=this.heightManifoldEnabled,this._techniqueConfig.lineVerticalPlaneEnabled=this.lineVerticalPlaneEnabled,this._techniqueConfig.pointDistanceEnabled=this.pointDistanceEnabled,this._techniqueConfig.intersectsLineEnabled=this.intersectsLineEnabled,this._techniqueConfig.contrastControlEnabled=this._config.contrastControlEnabled,this._technique=this._techniqueRepository.releaseAndAcquire(d,this._techniqueConfig,this._technique),this._technique):this._pathTechnique}render(e,t){(this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled)&&this._renderUnified(e,t),this.pathVerticalPlaneEnabled&&this._renderPath(e);}_renderUnified(e,t){const i=e.rctx,n=i.bindTechnique(t,this._parameters,e.bindParameters);this._bindGlobalUniforms(e,n),this._bindHeightManifoldUniforms(e,n),this._bindPointDistanceUniforms(e,n),this._bindLineVerticalPlaneUniforms(e,n),this._bindIntersectsLineUniforms(e,n),i.bindVAO(this._quadVAO),i.drawArrays(E.TRIANGLE_STRIP,0,4);}_renderPath(e){if(t$1(this._pathVerticalPlaneData)||t$1(this._pathTechnique))return;const t=e.rctx,n=this._pathTechnique,s=t.bindTechnique(n,{...this._parameters,origin:this._pathVerticalPlaneData.origin},e.bindParameters);this._bindGlobalUniforms(e,s),this._pathVerticalPlaneData.draw(e.rctx);}_bindHeightManifoldUniforms(e,t){if(!this.heightManifoldEnabled)return;const i=this._tempVec3A,n=this._tempPlane,s=e.bindParameters.camera;this._renderCoordsHelper.worldUpAtPosition(this._heightManifoldTarget,i),N(n,this._heightManifoldTarget,i,s.viewMatrix),t.setUniform4fv("heightPlane",n);}_bindPointDistanceUniforms(e,t){if(!this._pointDistanceEnabled)return;const i=e.bindParameters.camera,n=this._tempSphere;r$3(n,this._pointDistanceOrigin),L(n,n,i.viewMatrix),n[3]=x$1(this._pointDistanceOrigin,this._pointDistanceTarget),t.setUniform4f("pointDistanceSphere",n[0],n[1],n[2],n[3]);}_bindLineVerticalPlaneUniforms(e,t){if(!this._lineVerticalPlaneEnabled)return;const i=this._renderCoordsHelper,n=e.bindParameters.camera,s=this._tempPlane,h=this._tempVec3A,_=this._tempUp,d=this._tempDir,m=this._tempNormal;j(this._lineVerticalPlaneSegment,.5,h),i.worldUpAtPosition(h,_),z$2(d,this._lineVerticalPlaneSegment.vector),_$4(m,_,d),z$2(m,m),N(s,this._lineVerticalPlaneSegment.origin,m,n.viewMatrix),t.setUniform4fv("lineVerticalPlane",s);const p=this._tempVec3A;r$3(p,this._lineVerticalPlaneSegment.origin),i.setAltitude(p,0),L(p,p,n.viewMatrix),t.setUniform3fv("lineVerticalStart",p);const g=this._tempVec3B;u$3(g,this._lineVerticalPlaneSegment.origin,this._lineVerticalPlaneSegment.vector),i.setAltitude(g,0),L(g,g,n.viewMatrix),t.setUniform3fv("lineVerticalEnd",g);}_bindIntersectsLineUniforms(e,t){if(!this._intersectsLineEnabled)return;const i=z$1,n=B,s=e.bindParameters.camera;if(this._intersectsLineInfinite){if(p$3(j$1(this._intersectsLineSegment.origin,this._intersectsLineSegment.vector),k),k.c0=-Number.MAX_VALUE,!m$3(s.frustum,k))return;l(k,i),v$2(k,n);}else r$3(i,this._intersectsLineSegment.origin),u$3(n,this._intersectsLineSegment.origin,this._intersectsLineSegment.vector);const h=this._tempVec3A;L(h,i,s.viewMatrix),t.setUniform3fv("intersectsLineStart",h);const o=this._tempVec4;r$3(o,this._intersectsLineSegment.vector),this._tempVec4[3]=0,w$2(this._tempVec4,this._tempVec4,s.viewMatrix),L(n,n,s.viewMatrix),t.setUniform3fv("intersectsLineEnd",n),z$2(o,o),t.setUniform3f("intersectsLineDirection",o[0],o[1],o[2]),t.setUniform1f("intersectsLineRadius",this._intersectsLineRadius);}_bindGlobalUniforms(e,t){const i=e.bindParameters.camera;this._heightManifoldEnabled?t.setUniform1f("maxPixelDistance",2*i.computeScreenPixelSizeAt(this._heightManifoldTarget)):this._pointDistanceEnabled?t.setUniform1f("maxPixelDistance",2*i.computeScreenPixelSizeAt(this._pointDistanceTarget)):this._lineVerticalPlaneEnabled&&t.setUniform1f("maxPixelDistance",2*i.computeScreenPixelSizeAt(this._lineVerticalPlaneSegment.origin)),t.bindTexture("frameColor",e.offscreenRenderingHelper.mainColorTexture);}_requestRender(){this._context&&this._context.requestRender();}}const k=s$4(),z$1=n$4(),B=n$4();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class _ extends t$4{constructor(e){super(e.view),this._angleCutoff=h,this._style={},this._heightManifoldTarget=n$4(),this._heightManifoldEnabled=!1,this._intersectsLine=v$1(),this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._lineVerticalPlaneSegment=null,this._pathVerticalPlaneBuffers=null,this._pointDistanceLine=null,this.applyProps(e);}get testData(){return this.renderer}createResources(){this._ensureRenderer();}destroyResources(){this._disposeRenderer();}updateVisibility(){this._syncRenderer(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance();}get angleCutoff(){return this._angleCutoff}set angleCutoff(e){this._angleCutoff!==e&&(this._angleCutoff=e,this._syncAngleCutoff());}get style(){return this._style}set style(e){this._style=e,this._syncStyle();}get heightManifoldTarget(){return this._heightManifoldEnabled?this._heightManifoldTarget:null}set heightManifoldTarget(t){r(t)?(r$3(this._heightManifoldTarget,t),this._heightManifoldEnabled=!0):this._heightManifoldEnabled=!1,this._syncRenderer(),this._syncHeightManifold();}set intersectsWorldUpAtLocation(e){if(t$1(e))return void(this.intersectsLine=null);const i=this.view.renderCoordsHelper.worldUpAtPosition(e,o);this.intersectsLine=m$4(e,i),this.intersectsLineInfinite=!0;}get intersectsLine(){return this._intersectsLineEnabled?this._intersectsLine:null}set intersectsLine(t){r(t)?(h$1(t,this._intersectsLine),this._intersectsLineEnabled=!0):this._intersectsLineEnabled=!1,this._syncIntersectsLine(),this._syncRenderer();}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(e){this._intersectsLineInfinite=e,this._syncIntersectsLineInfinite();}get lineVerticalPlaneSegment(){return this._lineVerticalPlaneSegment}set lineVerticalPlaneSegment(t){this._lineVerticalPlaneSegment=r(t)?h$1(t):null,this._syncLineVerticalPlane(),this._syncRenderer();}get pathVerticalPlane(){return this._pathVerticalPlaneBuffers}set pathVerticalPlane(e){this._pathVerticalPlaneBuffers=e,this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncRenderer();}get pointDistanceLine(){return this._pointDistanceLine}set pointDistanceLine(t){this._pointDistanceLine=r(t)?{origin:t$5(t.origin),target:t$5(t.target)}:null,this._syncPointDistance(),this._syncRenderer();}_syncRenderer(){this.attached&&this.visible&&(this._intersectsLineEnabled||this._heightManifoldEnabled||r(this._pointDistanceLine)||r(this._pathVerticalPlaneBuffers))?this._ensureRenderer():this._disposeRenderer();}_ensureRenderer(){r(this.renderer)||(this.renderer=new H(this.view.renderCoordsHelper,void 0,{contrastControlEnabled:!0}),this._syncStyle(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncIntersectsLineInfinite(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncAngleCutoff(),this.view._stage&&this.view._stage.addRenderPlugin(this.renderer.renderSlots,this.renderer));}_syncStyle(){t$1(this.renderer)||(this.renderer.setParameters(this._style),null!=this._style.intersectsLineRadius&&(this.renderer.intersectsLineRadius=this._style.intersectsLineRadius));}_syncAngleCutoff(){t$1(this.renderer)||this.renderer.setParameters({angleCutoff:this._angleCutoff});}_syncHeightManifold(){t$1(this.renderer)||(this.renderer.heightManifoldEnabled=this._heightManifoldEnabled&&this.visible,this._heightManifoldEnabled&&(this.renderer.heightManifoldTarget=this._heightManifoldTarget));}_syncIntersectsLine(){t$1(this.renderer)||(this.renderer.intersectsLineEnabled=this._intersectsLineEnabled&&this.visible,this._intersectsLineEnabled&&(this.renderer.intersectsLineSegment=this._intersectsLine));}_syncIntersectsLineInfinite(){t$1(this.renderer)||(this.renderer.intersectsLineInfinite=this._intersectsLineInfinite);}_syncPathVerticalPlane(){t$1(this.renderer)||(this.renderer.pathVerticalPlaneEnabled=r(this._pathVerticalPlaneBuffers)&&this.visible,r(this._pathVerticalPlaneBuffers)&&(this.renderer.pathVerticalPlaneBuffers=this._pathVerticalPlaneBuffers));}_syncLineVerticalPlane(){t$1(this.renderer)||(this.renderer.lineVerticalPlaneEnabled=r(this._lineVerticalPlaneSegment)&&this.visible,r(this._lineVerticalPlaneSegment)&&(this.renderer.lineVerticalPlaneSegment=this._lineVerticalPlaneSegment));}_syncPointDistance(){t$1(this.renderer)||(this.renderer.pointDistanceEnabled=r(this._pointDistanceLine)&&this.visible,r(this._pointDistanceLine)&&(this.renderer.pointDistanceOrigin=this._pointDistanceLine.origin,this.renderer.pointDistanceTarget=this._pointDistanceLine.target));}_disposeRenderer(){r(this.renderer)&&this.view._stage&&(this.view._stage.removeRenderPlugin(this.renderer),this.renderer=null);}}const o=n$4();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class u{constructor(e){this.resourceFactory=e,this._resources=null,this._visible=!0,this._attached=!1;}destroy(){this._destroyResources();}get object(){return r(this._resources)?this._resources.object:null}get resources(){return r(this._resources)?this._resources.external:null}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this._syncVisible());}get attached(){return this._attached}set attached(e){e!==this._attached&&(this._attached=e,this._createOrDestroyResources());}recreate(){this.attached&&this._createResources();}recreateGeometry(){if(!this.resourceFactory.recreateGeometry)return void this.recreate();const e=this.resourceFactory.view._stage;if(t$1(this._resources)||!e)return;const r=this._resources.object;this._resources.external.forEach((s=>{s.type===e$9.Geometry&&e.remove(s);})),r.removeAllGeometries();const t=this.resourceFactory.recreateGeometry(this._resources.external,r,this._resources.layer);e.addMany(t);}_createOrDestroyResources(){this._attached?this._resources||this._createResources():this._destroyResources();}_createResources(){this._destroyResources();const e=this.resourceFactory,s=e.view,i=s._stage;if(!i)return;const u=new l$1({isPickable:!1,updatePolicy:o$8.SYNC});i.add(u);const n=new O$2({castShadow:!1}),l=e.createResources(n,u);l.forEach((e=>{i.add(e),e instanceof L$1&&i.loadImmediate(e);})),i.add(n),u.add(n);const _=e.cameraChanged?l$2((()=>s.state.camera),(s=>e.cameraChanged(s)),h$2):null;this._resources={layer:u,object:n,external:l,cameraHandle:_},this._syncVisible();}_destroyResources(){if(t$1(this._resources))return;const e=this.resourceFactory.view._stage;e?.remove(this._resources.object),e?.remove(this._resources.layer),this._resources.external.forEach((s=>{e?.remove(s),"dispose"in s&&s.dispose();})),this._resources.object.dispose(),this._resources.cameraHandle&&this._resources.cameraHandle.remove(),this._resources=null;}_syncVisible(){t$1(this._resources)||this._resources.object.setVisible(this._visible);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class S{constructor(e){this.view=null,this._geometry=null,this._size=3,this._color=r$4(1,0,1,1),this._pixelSnappingEnabled=!0,this._primitive="square",this._outlineSize=1,this._outlineColor=r$4(1,1,1,1),this._elevationInfo=null,this.resources=new u({view:e.view,createResources:e=>this._createResources(e),recreateGeometry:(e,t)=>(e.geometry=this._recreateGeometry(t,e.material),r(e.geometry)?[e.geometry]:[])});let t=!0;for(const r in e)r in this?"attached"===r?t=e[r]:this[r]=e[r]:console.error("Cannot set unknown property",r);this.attached=t;}destroy(){this.resources.destroy();}get visible(){return this.resources.visible}set visible(e){this.resources.visible=e;}get attached(){return this.resources.attached}set attached(e){this.resources.attached=e;}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this.resources.recreateGeometry();}get size(){return this._size}set size(e){if(e!==this._size){const t=this.preferredTextureSize;this._size=e,t<this.preferredTextureSize?r(this.resources)&&this.resources.recreate():this._updateSizeAttribute();}}get color(){return this._color}set color(e){D(e,this._color)||(a$1(this._color,e),this._updateMaterial());}get pixelSnappingEnabled(){return this._pixelSnappingEnabled}set pixelSnappingEnabled(e){this._pixelSnappingEnabled!==e&&(this._pixelSnappingEnabled=e,this._updateMaterial());}get primitive(){return this._primitive}set primitive(e){this._primitive!==e&&(this._primitive=e,r(this.resources)&&this.resources.recreate());}get outlineSize(){return this._outlineSize}set outlineSize(e){e!==this._outlineSize&&(this._outlineSize=e,this._updateMaterial());}get outlineColor(){return this._outlineColor}set outlineColor(e){D(e,this._outlineColor)||(a$1(this._outlineColor,e),this._updateMaterial());}get elevationInfo(){return this._elevationInfo}set elevationInfo(e){this._elevationInfo=e,this.resources&&this.resources.recreateGeometry();}_updateMaterial(){const e=this.resources.resources;t$1(e)||e.material.setParameters(this._materialParameters(e.texture.id));}_updateSizeAttribute(){const e=this.resources.resources,t=this.resources.object;if(t$1(e)||t$1(t))return;const r=e.geometry;if(t$1(r))return;const s=r.getMutableAttribute(O$1.SIZE).data,o=this.geometrySize;s[0]=o,s[1]=o,t.geometryVertexAttrsUpdated(t.geometryRecords[0]);}_materialParameters(e){return {color:this._color,textureIsSignedDistanceField:!0,distanceFieldBoundingBox:z,occlusionTest:!1,outlineColor:this._outlineColor,outlineSize:this._outlineSize,textureId:e,polygonOffset:!1,shaderPolygonOffset:0,drawInSecondSlot:!0,depthEnabled:!1,pixelSnappingEnabled:this.pixelSnappingEnabled}}get geometrySize(){return this._size/b}_recreateGeometry(e,t){const i=this._createRenderGeometry();return r(i)&&e.addGeometry(i,t),i}_createResources(e){const t=o$9(this._primitive,this.preferredTextureSize),i=new J(this._materialParameters(t.id)),s=this._recreateGeometry(e,i);return {material:i,texture:t,geometry:s,forEach(e){e(t),e(i),r(this.geometry)&&e(this.geometry);}}}get preferredTextureSize(){return o$a(a$2(2*this.geometrySize),16,128)}calculateMapBounds(e){if(t$1(this.resources.resources)||t$1(this.resources.resources.geometry))return !1;const t=this.resources.resources.geometry.vertexAttributes.get(O$1.POSITION);return Bn(t.data,this.view.renderCoordsHelper.spatialReference,x,this.view.spatialReference),M$1(e,x),!0}_createRenderGeometry(){const e=this.geometry;if(t$1(e))return null;const{renderCoordsHelper:t,elevationProvider:r}=this.view,o=m$5(e,r,h$3.fromElevationInfo(this.elevationInfo),t),n=o$3(c$5.get(),e.x,e.y,o),a=c$5.get();Bn(n,e.spatialReference,a,t.spatialReference);const l=this.geometrySize;return T$1.createPointGeometry(null,a,null,[l,l],[0,0,0,1])}}const b=a$3,z=[b/2,b/2,1-b/2,1-b/2],x=n$4();

export { S, _, h, m, v };
