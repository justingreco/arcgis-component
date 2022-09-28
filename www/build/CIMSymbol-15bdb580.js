import { m as m$1, ae as c, e, d as d$1, n } from './cast-3d5be210.js';
import { r as r$1 } from './enumeration-6695a859.js';
import { o, r } from './Point-edff2a11.js';
import { b } from './fieldUtils-240a3b99.js';
import { a } from './Symbol-573a64f6.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var m;let l=m=class extends a{constructor(r){super(r),this.data=null,this.type="cim";}readData(r,o){return o}writeData(r,o){if(r)for(const t in r)o[t]=r[t];}async collectRequiredFields(r,o){if("CIMSymbolReference"===this.data.type){const t=this.data.primitiveOverrides;if(t){const e=t.map((t=>{const e=t.valueExpressionInfo;return b(r,o,e.expression)}));await Promise.all(e);}}}clone(){return new m({data:m$1(this.data)})}hash(){return c(JSON.stringify(this.data)).toString()}};e([d$1({json:{write:!1}})],l.prototype,"color",void 0),e([d$1({json:{write:!0}})],l.prototype,"data",void 0),e([o("data",["symbol"])],l.prototype,"readData",null),e([r("data",{})],l.prototype,"writeData",null),e([r$1({CIMSymbolReference:"cim"},{readOnly:!0})],l.prototype,"type",void 0),l=m=e([n("esri.symbols.CIMSymbol")],l);const d=l;

export { d };
