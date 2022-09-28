import { e, d, n, S } from './cast-3d5be210.js';
import { l } from './JSONSupport-dce2c67b.js';
import { l as l$1 } from './Color-25ce730a.js';
import { r } from './Point-edff2a11.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var s;let p=s=class extends l{constructor(){super(...arguments),this.title=null;}clone(){return new s({title:this.title})}};e([d({type:String,json:{write:!0}})],p.prototype,"title",void 0),p=s=e([n("esri.renderers.support.LegendOptions")],p);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var i;let c=i=class extends l{constructor(r){super(r),this.color=null,this.label=null,this.value=null;}writeValue(r,o,e){o[e]=null==r?0:r;}clone(){return new i({color:this.color&&this.color.clone(),label:this.label,value:this.value})}};e([d({type:l$1,json:{type:[S],write:!0}})],c.prototype,"color",void 0),e([d({type:String,json:{write:!0}})],c.prototype,"label",void 0),e([d({type:Number,json:{write:{writerEnsuresNonNull:!0}}})],c.prototype,"value",void 0),e([r("value")],c.prototype,"writeValue",null),c=i=e([n("esri.renderers.visualVariables.support.ColorStop")],c);const a=c;

export { a, p };
