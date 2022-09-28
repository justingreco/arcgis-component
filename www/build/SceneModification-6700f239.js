import { W as t, m as m$1, e, d, n } from './cast-3d5be210.js';
import './geometry-2f332a26.js';
import { l } from './JSONSupport-dce2c67b.js';
import { r } from './Point-edff2a11.js';
import { w } from './persistable-5b051b1c.js';
import { A as An, W as Wn } from './projection-fbd5d346.js';
import { v } from './Polyline-dcdb3782.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var m;let y=m=class extends l{constructor(e){super(e),this.geometry=null,this.type="clip";}writeGeometry(e,r,o,s){if(s.layer&&s.layer.spatialReference&&!s.layer.spatialReference.equals(this.geometry.spatialReference)){if(!An(e.spatialReference,s.layer.spatialReference))return void(s&&s.messages&&s.messages.push(new t("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:s.layer.spatialReference,context:s})));const p=new v;Wn(e,p,s.layer.spatialReference),r[o]=p.toJSON(s);}else r[o]=e.toJSON(s);delete r[o].spatialReference;}clone(){return new m({geometry:m$1(this.geometry),type:this.type})}};e([d({type:v}),w()],y.prototype,"geometry",void 0),e([r(["web-scene","portal-item"],"geometry")],y.prototype,"writeGeometry",null),e([d({type:["clip","mask","replace"],nonNullable:!0}),w()],y.prototype,"type",void 0),y=m=e([n("esri.layers.support.SceneModification")],y);const f=y;

export { f };
