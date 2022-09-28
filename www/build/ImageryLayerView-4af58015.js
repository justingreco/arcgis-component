import { a as s, t, r, e, d, n } from './cast-3d5be210.js';
import { j } from './Point-edff2a11.js';
import { g } from './commonProperties-fca3036e.js';
import { b } from './Query-1f6c7e43.js';
import { s as s$1 } from './popupUtils-37e309e6.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const m=m=>{let c=class extends m{constructor(){super(...arguments),this.view=null;}async fetchPopupFeatures(e,s$2){const{layer:p}=this;if(!e)throw new s("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:p});const{popupEnabled:a}=p,m=s$1(p,s$2);if(!a||t(m))throw new s("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:a,popupTemplate:m});const c=await m.getRequiredFields(),l=new b;l.timeExtent=this.timeExtent,l.geometry=e,l.outFields=c,l.outSpatialReference=e.spatialReference;const y=this.view.resolution,h="2d"===this.view.type?new j(y,y,this.view.spatialReference):new j(.5*y,.5*y,this.view.spatialReference),{returnTopmostRaster:w,showNoDataRecords:d}=m.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},f={returnDomainValues:!0,returnTopmostRaster:w,pixelSize:h,showNoDataRecords:d,signal:r(s$2)?s$2.signal:null};return p.queryVisibleRasters(l,f).then((e=>e))}canResume(){return !!super.canResume()&&!this.timeExtent?.isEmpty}};return e([d()],c.prototype,"layer",void 0),e([d()],c.prototype,"suspended",void 0),e([d(g)],c.prototype,"timeExtent",void 0),e([d()],c.prototype,"view",void 0),c=e([n("esri.views.layers.ImageryLayerView")],c),c};

export { m };
