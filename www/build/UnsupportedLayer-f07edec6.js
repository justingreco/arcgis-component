import { O as v$1, a as s, e, d, n } from './cast-3d5be210.js';
import { O } from './MultiOriginJSONSupport-281c1c62.js';
import { b } from './Layer-569a1fc8.js';
import { v } from './PortalLayer-e61e1a42.js';
import './JSONSupport-dce2c67b.js';
import './geometry-2f332a26.js';
import './Extent-f27111e1.js';
import './Point-edff2a11.js';
import './Polyline-dcdb3782.js';
import './request-ac4d8bfb.js';
import './Collection-a38e0489.js';
import './Identifiable-d9658370.js';
import './Portal-5df9f5a7.js';
import './Promise-d2759b2e.js';
import './asyncUtils-96c00c9e.js';
import './PortalItem-fa114dd2.js';
import './assets-99f5c3ee.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let c=class extends(v(O(b))){constructor(r){super(r),this.resourceInfo=null,this.type="unsupported";}initialize(){this.addResolvingPromise(new Promise(((r,o)=>{v$1((()=>{const r=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let s$1="Unsupported layer type";r&&(s$1+=" "+r),o(new s("layer:unsupported-layer-type",s$1,{layerType:r}));}));})));}read(r,e){const o={resourceInfo:r};null!=r.id&&(o.id=r.id),null!=r.title&&(o.title=r.title),super.read(o,e);}write(r){return Object.assign(r||{},this.resourceInfo,{id:this.id})}};e([d({readOnly:!0})],c.prototype,"resourceInfo",void 0),e([d({type:["show","hide"]})],c.prototype,"listMode",void 0),e([d({json:{read:!1},readOnly:!0,value:"unsupported"})],c.prototype,"type",void 0),c=e([n("esri.layers.UnsupportedLayer")],c);const u=c;

export default u;
