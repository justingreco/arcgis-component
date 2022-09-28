import { u } from './Handles-54afc0a7.js';
import { r as r$2 } from './cast-3d5be210.js';
import { l } from './reactiveUtils-bd6fe823.js';
import { x as x$1, i } from './mat4-d5df0e58.js';
import { e as e$1 } from './mat4f64-ef2c1a38.js';
import { n as n$1, B as a, x, z, e, b as r$1, u as u$1 } from './mathUtils-559a53d9.js';
import { r } from './DefaultVertexAttributeLayouts-664d07a8.js';
import { c } from './vectorStacks-3fa8ee55.js';
import { n } from './LineVisualElement-0571b2ba.js';
import { aa as h, I as g } from './objectResourceUtils-e575a410.js';
import { aZ as m, aS as H, T } from './SceneView-ed3703c9.js';
import { O } from './VertexAttribute-ef09ced9.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class j extends n{constructor(t){super(t),this._handles=new u,this._quadMaterial=null,this._outlineMaterial=null,this._maxSize=0,this._position=n$1(),this._up=n$1(),this._right=n$1(),this._renderOccluded=h.OccludeAndTransparent,this._color=r(1,0,0,1),this._outlineColor=r(0,0,0,1),this._outlineSize=0,this._size=32,this._outlineRenderOccluded=h.Opaque,this.applyProps(t);}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateQuadMaterial());}get color(){return this._color}set color(e){a(this._color,e),this._updateQuadMaterial();}get outlineColor(){return this._outlineColor}set outlineColor(e){a(this._outlineColor,e),this._updateOutlineMaterial();}get outlineSize(){return this._outlineSize}set outlineSize(e){const t=0===this._outlineSize!=(0===e);this._outlineSize=e,t?this.recreateGeometry():this._updateOutlineMaterial();}get size(){return this._size}set size(e){e!==this._size&&(this._size=e,this._updateTransform());}get outlineRenderOccluded(){return this._outlineRenderOccluded}set outlineRenderOccluded(e){this._outlineRenderOccluded=e,this._updateOutlineMaterial();}set geometry({previous:e$1,center:t,next:i}){this._maxSize=Math.min(x(t,e$1),x(t,i))/3,z(this._up,e(this._up,e$1,t)),z(this._right,e(this._right,i,t)),r$1(this._position,t),this.recreateGeometry();}createExternalResources(){this._quadMaterial=new m(this.quadMaterialParameters),this._outlineMaterial=new H(this.outlineMaterialParameters),this._handles.add(l((()=>this.view.state.camera),(()=>this._updateTransform())));}destroyExternalResources(){this._quadMaterial=null,this._outlineMaterial=null,this._handles.removeAll();}forEachExternalMaterial(e){e(this._quadMaterial),e(this._outlineMaterial);}createGeometries(e){this._createQuadGeometry(e),this._createOutlineGeometry(e),this._updateTransform(e);}_createQuadGeometry(e){const t=this._quadGeometryData(this._up,this._right);e.addGeometry(t,this._quadMaterial);}_createOutlineGeometry(e){if(0===this._outlineSize)return;const t=u$1(c.get(),this._up,this._right),i=T.createPolylineGeometry([this._up,t,this._right]);e.addGeometry(i,this._outlineMaterial);}_updateTransform(e=this.object){const i$1=this.view.state.camera,a=this._size*i$1.computeScreenPixelSizeAt(this._position),o=Math.min(this._maxSize,a);x$1(b,this._position),i(b,b,[o,o,o]),r$2(e)&&(e.transformation=b);}_quadGeometryData(e,t){const i=u$1(c.get(),e,t);return new g([[O.POSITION,{size:3,data:[0,0,0,...t,...e,...i],exclusive:!0}]],[[O.POSITION,new Uint16Array([0,1,2,1,2,3])]])}get quadMaterialParameters(){return {color:this._color,transparent:!0,writeDepth:!1,polygonOffset:!0,renderOccluded:this._renderOccluded}}_updateQuadMaterial(){this._quadMaterial&&this._quadMaterial.setParameters(this.quadMaterialParameters);}get outlineMaterialParameters(){return {color:this._outlineColor,width:this._outlineSize,renderOccluded:this._outlineRenderOccluded}}_updateOutlineMaterial(){this._outlineMaterial&&this._outlineMaterial.setParameters(this.outlineMaterialParameters);}}const b=e$1();

export { j };
