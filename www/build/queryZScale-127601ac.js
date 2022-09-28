import { t } from './cast-3d5be210.js';
import { o } from './zscale-0befeff4.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function r(r,t$1,f){if(!f||!f.features||!f.hasZ)return;const s=o(f.geometryType,t$1,r.outSpatialReference);if(!t(s))for(const e of f.features)s(e.geometry);}

export { r };
