import { U } from './request-ac4d8bfb.js';
import { e, d, n as n$1, b } from './cast-3d5be210.js';
import { v, a as a$1 } from './geometry-2f332a26.js';
import { n as n$2, e as e$1 } from './utils-d801fb7f.js';
import { l } from './JSONSupport-dce2c67b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function r(t){return {geometryType:v(t[0]),geometries:t.map((e=>e.toJSON()))}}function o(e,r,o){const n=a$1(r);return e.map((e=>{const t=n.fromJSON(e);return t.spatialReference=o,t}))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let i$1=class extends l{constructor(r){super(r),this.geometries=null,this.outSpatialReference=null,this.transformation=null,this.transformForward=null;}toJSON(){const r=this.geometries.map((r=>r.toJSON())),t=this.geometries[0],o={};return o.outSR=this.outSpatialReference.wkid||JSON.stringify(this.outSpatialReference.toJSON()),o.inSR=t.spatialReference.wkid||JSON.stringify(t.spatialReference.toJSON()),o.geometries=JSON.stringify({geometryType:v(t),geometries:r}),this.transformation&&(o.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),null!=this.transformForward&&(o.transformForward=this.transformForward),o}};e([d()],i$1.prototype,"geometries",void 0),e([d({json:{read:{source:"outSR"}}})],i$1.prototype,"outSpatialReference",void 0),e([d()],i$1.prototype,"transformation",void 0),e([d()],i$1.prototype,"transformForward",void 0),i$1=e([n$1("esri.rest.support.ProjectParameters")],i$1);const a=i$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const i=b(a);async function n(o$1,m,n){m=i(m);const u=n$2(o$1),c={...u.query,f:"json",...m.toJSON()},j=m.outSpatialReference,a=v(m.geometries[0]),f=e$1(c,n);return U(u.path+"/project",f).then((({data:{geometries:r}})=>o(r,a,j)))}

export { a, n };
