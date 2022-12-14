import { v as n$1, X as f, e, d, n as n$2 } from './cast-3d5be210.js';
import { j } from './reactiveUtils-bd6fe823.js';
import { g, o } from './heightModelInfoUtils-4737da37.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const n=n=>{let c=class extends n{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1;}postscript(e){super.postscript(e),g(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo());}async _validateHeightModelInfo(){const e=new AbortController,o$1=e.signal;this.handles.add(n$1((()=>e.abort()))),await j((()=>this.view.defaultsFromMap?.heightModelInfoReady),o$1),f(o$1);const i=o(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(i)throw i}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return super.canResume()&&(!e||!e.minScale||!e.maxScale||e.minScale>=e.maxScale)}getSuspendInfo(){const e=super.getSuspendInfo(),s=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return s&&s.minScale&&s.maxScale&&s.minScale<s.maxScale&&(e.outsideScaleRange=!0),e}};return e([d()],c.prototype,"view",void 0),e([d()],c.prototype,"slicePlaneEnabled",void 0),c=e([n$2("esri.views.3d.layers.LayerView3D")],c),c};

export { n };
