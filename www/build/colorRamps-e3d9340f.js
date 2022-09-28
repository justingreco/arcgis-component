import { e as e$1, d, n, m as m$3, S } from './cast-3d5be210.js';
import { l as l$1 } from './Color-25ce730a.js';
import { r } from './enumeration-6695a859.js';
import { l } from './JSONSupport-dce2c67b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let e=class extends l{constructor(r){super(r),this.type=null;}};e$1([d({readOnly:!0,json:{read:!1,write:!0}})],e.prototype,"type",void 0),e=e$1([n("esri.rest.support.ColorRamp")],e);const p$1=e;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var m$2;let c$1=m$2=class extends p$1{constructor(o){super(o),this.algorithm=null,this.fromColor=null,this.toColor=null,this.type="algorithmic";}clone(){return new m$2({fromColor:m$3(this.fromColor),toColor:m$3(this.toColor),algorithm:this.algorithm})}};e$1([r({esriCIELabAlgorithm:"cie-lab",esriHSVAlgorithm:"hsv",esriLabLChAlgorithm:"lab-lch"})],c$1.prototype,"algorithm",void 0),e$1([d({type:l$1,json:{type:[S],write:!0}})],c$1.prototype,"fromColor",void 0),e$1([d({type:l$1,json:{type:[S],write:!0}})],c$1.prototype,"toColor",void 0),e$1([d({type:["algorithmic"]})],c$1.prototype,"type",void 0),c$1=m$2=e$1([n("esri.rest.support.AlgorithmicColorRamp")],c$1);const a$1=c$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var c;let m$1=c=class extends p$1{constructor(o){super(o),this.colorRamps=null,this.type="multipart";}clone(){return new c({colorRamps:m$3(this.colorRamps)})}};e$1([d({type:[a$1],json:{write:!0}})],m$1.prototype,"colorRamps",void 0),e$1([d({type:["multipart"]})],m$1.prototype,"type",void 0),m$1=c=e$1([n("esri.rest.support.MultipartColorRamp")],m$1);const a=m$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const m={key:"type",base:p$1,typeMap:{algorithmic:a$1,multipart:a}};function p(o){return o&&o.type?"algorithmic"===o.type?a$1.fromJSON(o):"multipart"===o.type?a.fromJSON(o):null:null}

export { a, a$1 as b, m, p };
