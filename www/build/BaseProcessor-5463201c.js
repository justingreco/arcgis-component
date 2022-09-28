import { e, d as d$1, n } from './cast-3d5be210.js';
import { d } from './HandleOwner-fe336959.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let s=class extends d{initialize(){}destroy(){}get supportsTileUpdates(){return !1}get spatialReference(){const e=this.get("tileStore.tileScheme.spatialReference");return e&&e.toJSON()||null}};e([d$1({readOnly:!0})],s.prototype,"supportsTileUpdates",null),e([d$1({constructOnly:!0})],s.prototype,"remoteClient",void 0),e([d$1({constructOnly:!0})],s.prototype,"service",void 0),e([d$1()],s.prototype,"spatialReference",null),e([d$1({constructOnly:!0})],s.prototype,"tileInfo",void 0),e([d$1({constructOnly:!0})],s.prototype,"tileStore",void 0),s=e([n("esri.views.2d.layers.features.processors.BaseProcessor")],s);const p=s;

export { p };
