import { m as m$1, e, d, n } from './cast-3d5be210.js';
import { l as l$1 } from './Color-25ce730a.js';
import { l } from './JSONSupport-dce2c67b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var p;let a=p=class extends l{constructor(o){super(o),this.color=new l$1([0,0,0,1]);}clone(){return new p(m$1({color:this.color}))}};e([d({type:l$1,json:{write:!0}})],a.prototype,"color",void 0),a=p=e([n("esri.webmap.background.ColorBackground")],a);const m=a;

export { m };
