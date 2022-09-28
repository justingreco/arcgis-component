import { h as e, a as s, t, e as e$1, d, n } from './cast-3d5be210.js';
import { g } from './Graphic-93f45ded.js';
import { g as g$1 } from './commonProperties-fca3036e.js';
import { T, F } from './rasterProjectionHelper-0a6312a6.js';
import { s as s$1 } from './popupUtils-37e309e6.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const m=m=>{let f=class extends m{constructor(){super(...arguments),this._rasterFieldPrefix="Raster.",this.layer=null,this.view=null,this.tileInfo=null;}get fullExtent(){return this._getfullExtent()}_getfullExtent(){return this.projectFullExtent(this.view.spatialReference)}get hasTilingEffects(){return this.layer.renderer&&"dynamicRangeAdjustment"in this.layer.renderer&&this.layer.renderer.dynamicRangeAdjustment}get datumTransformation(){return T(e(this.layer.fullExtent),this.view.spatialReference,!0)}supportsSpatialReference(t){return !!this.projectFullExtent(t)}projectFullExtent(t){const e$1=e(this.layer.fullExtent),r=T(e$1,t,!1);return F(e$1,t,r)}async fetchPopupFeatures(t$1,i){const{layer:s$2}=this;if(!t$1)throw new s("imageryTileLayerView:fetchPopupFeatures","Nothing to fetch without area",{layer:s$2});const{popupEnabled:a}=s$2,n=s$1(s$2,i);if(!a||t(n))throw new s("imageryTileLayerView:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:a,popupTemplate:n});const l=[],{value:u,magdirValue:m}=await s$2.identify(t$1,{timeExtent:this.timeExtent});let f="";if(u&&u.length){f="imagery-tile"===s$2.type&&s$2.hasStandardTime()&&null!=u[0]?u.map((t=>s$2.getStandardTimeValue(t))).join(", "):u.join(", ");const t={ObjectId:0},r="Raster.ServicePixelValue";t[r]=this._formatAttributeValue(f,r);const i=s$2.rasterInfo?.attributeTable?.features;if(i&&i.length>0){const e=i.filter((t=>{const e=t.attributes.value||t.attributes.Value||t.attributes.VALUE;return String(e)===f}));if(e.length>0){const r=e[0];if(r)for(const e in r.attributes)if(r.attributes.hasOwnProperty(e)){const i=this._rasterFieldPrefix+e;t[i]=this._formatAttributeValue(r.attributes[e],i);}}}const o=s$2.rasterInfo.dataType;"vector-magdir"!==o&&"vector-uv"!==o||(t["Raster.Magnitude"]=m?.[0],t["Raster.Direction"]=m?.[1]);const a=new g(this.fullExtent.clone(),null,t);a.layer=s$2,a.sourceLayer=a.layer,l.push(a);}return l}_formatAttributeValue(t,e){if("string"==typeof t){const r=this.layer.popupTemplate&&this.layer.popupTemplate.fieldInfos,i=this._getFieldInfo(r,e),o=i&&i.format;if(o){let e,r;return t.trim().includes(",")?(e=",",r=e+" ",this._formatDelimitedString(t,e,r,o)):t.trim().includes(" ")?(e=r=" ",this._formatDelimitedString(t,e,r,o)):this._formatNumberFromString(t,o)}}return t}_getFieldInfo(t,e){if(!t||!t.length||!e)return;const r=e.toLowerCase();let i;return t.some((t=>!(!t.fieldName||t.fieldName.toLowerCase()!==r&&t.fieldName.toLowerCase()!==r.replace(/ /g,"_"))&&(i=t,!0))),i}_formatDelimitedString(t,e,r,i){return t&&e&&r&&i?t.trim().split(e).map((t=>this._formatNumberFromString(t,i))).join(r):t}_formatNumberFromString(t,e){if(!t||!e)return t;const r=Number(t);return isNaN(r)?t:e.format(r)}};return e$1([d()],f.prototype,"layer",void 0),e$1([d(g$1)],f.prototype,"timeExtent",void 0),e$1([d()],f.prototype,"view",void 0),e$1([d()],f.prototype,"fullExtent",null),e$1([d()],f.prototype,"tileInfo",void 0),e$1([d({readOnly:!0})],f.prototype,"hasTilingEffects",null),f=e$1([n("esri.views.layers.ImageryTileLayerView")],f),f};

export { m };