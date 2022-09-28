import { y, t, h as e, r, e as e$1, d, n } from './cast-3d5be210.js';
import { v } from './Polyline-dcdb3782.js';
import { u as un } from './projection-fbd5d346.js';
import { c } from './aaBoundingRect-5e1a4e52.js';
import { p } from './normalizeUtilsSync-1f2b7f6d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let a=class extends y{constructor(o){super(o);}get bounds(){const o=this.coords;return t(o)?null:c(o.extent)}get coords(){const o=e(this.element.georeference)?.coords;return un(o,this.spatialReference).geometry}get normalizedCoords(){return v.fromJSON(p(this.coords))}get normalizedBounds(){return r(this.normalizedCoords)?c(this.normalizedCoords.extent):null}};e$1([d()],a.prototype,"spatialReference",void 0),e$1([d()],a.prototype,"element",void 0),e$1([d()],a.prototype,"bounds",null),e$1([d()],a.prototype,"coords",null),e$1([d()],a.prototype,"normalizedCoords",null),e$1([d()],a.prototype,"normalizedBounds",null),a=e$1([n("esri.layers.support.media.MediaElementView")],a);

export { a };
