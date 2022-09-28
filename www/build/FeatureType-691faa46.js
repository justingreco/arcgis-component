import { e, d, n as n$1 } from './cast-3d5be210.js';
import { l as l$1 } from './Clonable-533c7a05.js';
import { l as l$2 } from './JSONSupport-dce2c67b.js';
import { o, r } from './Point-edff2a11.js';
import { t } from './Field-2973a5cf.js';
import { s } from './request-ac4d8bfb.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const l=new s({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"});let a=class extends(l$1(l$2)){constructor(o){super(o),this.name=null,this.description=null,this.drawingTool=null,this.prototype=null,this.thumbnail=null;}};e([d({json:{write:!0}})],a.prototype,"name",void 0),e([d({json:{write:!0}})],a.prototype,"description",void 0),e([d({json:{read:l.read,write:l.write}})],a.prototype,"drawingTool",void 0),e([d({json:{write:!0}})],a.prototype,"prototype",void 0),e([d({json:{write:!0}})],a.prototype,"thumbnail",void 0),a=e([n$1("esri.layers.support.FeatureTemplate")],a);const p=a;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let c=class extends(l$1(l$2)){constructor(o){super(o),this.id=null,this.name=null,this.domains=null,this.templates=null;}readDomains(o){const r={};for(const s of Object.keys(o))r[s]=t(o[s]);return r}writeDomains(o,r){const s={};for(const t of Object.keys(o))o[t]&&(s[t]=o[t]?.toJSON());r.domains=s;}};e([d({json:{write:!0}})],c.prototype,"id",void 0),e([d({json:{write:!0}})],c.prototype,"name",void 0),e([d({json:{write:!0}})],c.prototype,"domains",void 0),e([o("domains")],c.prototype,"readDomains",null),e([r("domains")],c.prototype,"writeDomains",null),e([d({type:[p],json:{write:!0}})],c.prototype,"templates",void 0),c=e([n$1("esri.layers.support.FeatureType")],c);const n=c;

export { n, p };
