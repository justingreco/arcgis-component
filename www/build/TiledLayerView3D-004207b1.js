import { t, a as s, r, e, d, n } from './cast-3d5be210.js';
import { j } from './reactiveUtils-bd6fe823.js';
import { L, t as t$1, u as e$1 } from './SceneView-ed3703c9.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const c=c=>{let m=class extends c{get imageFormatIsOpaque(){return !1}get fullExtent(){return this.layer.fullExtent}get isOpaque(){return this.fullOpacity>=1&&this.imageFormatIsOpaque}get dataLevelRange(){const e=this.tileInfo.lods,t=e[0].scale,r=e[e.length-1].scale;return this.levelRangeFromScaleRange(t,r)}get displayLevelRange(){const e=this.tileInfo.lods,t=this.layer.minScale||e[0].scale,r=this.layer.maxScale||e[e.length-1].scale,i=this.levelRangeFromScaleRange(t,r);return this.layer.maxScale&&i.maxLevel++,i}getTileUrl(e,t,r){return this.layer.getTileUrl(e,t,r)}_addTilingSchemeMatchPromise(){if(t(this.fullExtent))return this.addResolvingPromise(Promise.reject(new s("tilingscheme:extent-not-defined","This layer doesn't define a fullExtent.")));const e=this._getTileInfoSupportError(this.tileInfo,this.fullExtent);if(r(e))return this.addResolvingPromise(Promise.reject(e));const a=j((()=>this.view?.basemapTerrain?.tilingSchemeLocked)).then((()=>{const e=this.view.basemapTerrain.tilingScheme,t=this._getTileInfoCompatibilityError(this.tileInfo,e);if(t)throw t}));this.addResolvingPromise(a);}_getTileInfoSupportError(e,r){const i=L(e,r,this.view.spatialReference,this.view.state.viewingMode);if(i){const e={layer:this.layer,error:i};let r;switch(i.name){case"tilingscheme:spatial-reference-mismatch":case"tilingscheme:global-unsupported-spatial-reference":case"tilingscheme:local-unsupported-spatial-reference":r=new s("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",e);break;default:r=new s("layerview:tiling-scheme-unsupported","The tiling scheme of this layer is not supported by SceneView",e);}return r}return null}_getTileInfoCompatibilityError(e,r){return r.compatibleWith(e)?null:new s("layerview:tiling-scheme-incompatible","The tiling scheme of this layer is incompatible with the tiling scheme of the surface")}levelRangeFromScaleRange(e,t){const r={minLevel:0,maxLevel:1/0},i=this.view&&this.view.basemapTerrain&&this.view.basemapTerrain.tilingScheme;if(!i)return r;const s=i.levels[0],a=e=>{const t=Math.log(s.scale/e)/Math.LN2;return .5-Math.abs(.5-t%1)<1e-9?Math.round(t):Math.ceil(t)};return null!=e&&e>0&&(r.minLevel=Math.max(0,a(e))),null!=t&&t>0&&(r.maxLevel=Math.max(0,a(t))),r}isUpdating(){return !!(this.view&&this.view.basemapTerrain&&this.view.basemapTerrain.updating)}};return e([d({readOnly:!0})],m.prototype,"imageFormatIsOpaque",null),e([d({readOnly:!0})],m.prototype,"updating",void 0),e([d(t$1)],m.prototype,"updatingProgress",void 0),e([d(e$1)],m.prototype,"updatingProgressValue",void 0),e([d()],m.prototype,"fullExtent",null),e([d({readOnly:!0})],m.prototype,"isOpaque",null),e([d({readOnly:!0})],m.prototype,"dataLevelRange",null),e([d({readOnly:!0})],m.prototype,"displayLevelRange",null),e([d()],m.prototype,"layer",void 0),e([d()],m.prototype,"tileInfo",void 0),m=e([n("esri.views.3d.layers.TiledLayerView3D")],m),m};

export { c };
