import { r, m, h as e, e as e$1, d as d$2, n } from './cast-3d5be210.js';
import { d as d$1, c, i } from './geometry-2f332a26.js';
import { g as g$1 } from './Graphic-93f45ded.js';
import { s } from './request-ac4d8bfb.js';
import { l } from './JSONSupport-dce2c67b.js';
import { k, o, r as r$1 } from './Point-edff2a11.js';
import { y } from './Field-2973a5cf.js';
import './Extent-f27111e1.js';
import './Polyline-dcdb3782.js';
import './PopupTemplate-b459951f.js';
import './Collection-a38e0489.js';
import './fieldUtils-240a3b99.js';
import './enumeration-6695a859.js';
import './number-c5a37d3e.js';
import './Promise-d2759b2e.js';
import './ActionToggle-a5849e6f.js';
import './Identifiable-d9658370.js';
import './symbols-ab3e849a.js';
import './CIMSymbol-15bdb580.js';
import './Symbol-573a64f6.js';
import './Color-25ce730a.js';
import './colorUtils-5009883d.js';
import './mathUtils-559a53d9.js';
import './screenUtils-31d073db.js';
import './opacityUtils-dcd94f00.js';
import './aaBoundingBox-b312516d.js';
import './aaBoundingRect-5e1a4e52.js';
import './persistableUrlUtils-5dcd6081.js';
import './collectionUtils-302901c0.js';
import './Portal-5df9f5a7.js';
import './Clonable-533c7a05.js';
import './fieldType-eb0b42e4.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var d;const g=new s({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let j=d=class extends l{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null;}readFeatures(e,t){const o=k.fromJSON(t.spatialReference),s=[];for(let i=0;i<e.length;i++){const t=e[i],a=g$1.fromJSON(t),p=t.geometry&&t.geometry.spatialReference;r(a.geometry)&&!p&&(a.geometry.spatialReference=o);const l=t.aggregateGeometries,y=a.aggregateGeometries;if(l&&r(y))for(const e in y){const t=y[e],r$1=l[e]?.spatialReference;r(t)&&!r$1&&(t.spatialReference=o);}s.push(a);}return s}writeGeometryType(e,t,r$1,o){if(e)return void g.write(e,t,r$1,o);const{features:s}=this;if(s)for(const i of s)if(i&&r(i.geometry))return void g.write(i.geometry.type,t,r$1,o)}readQueryGeometry(e,t){if(!e)return null;const r=!!e.spatialReference,o=d$1(e);return !r&&t.spatialReference&&(o.spatialReference=k.fromJSON(t.spatialReference)),o}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON());const{features:r$1}=this;if(r$1)for(const o of r$1)if(o&&r(o.geometry)&&o.geometry.spatialReference)return void(t.spatialReference=o.geometry.spatialReference.toJSON())}clone(){return new d(this.cloneProperties())}cloneProperties(){return m({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}toJSON(e){const t=this.write();if(t.features&&Array.isArray(e)&&e.length>0)for(let r=0;r<t.features.length;r++){const o=t.features[r];if(o.geometry){const t=e&&e[r];o.geometry=t&&t.toJSON()||o.geometry;}}return t}quantize(e$1){const{scale:[t,r],translate:[o,s]}=e$1,i=e=>Math.round((e-o)/t),n=e=>Math.round((s-e)/r),p=this.features,l=this._getQuantizationFunction(this.geometryType,i,n);for(let y=0,m=p.length;y<m;y++)l(e(p[y].geometry))||(p.splice(y,1),y--,m--);return this.transform=e$1,this}unquantize(){const{geometryType:e,features:t,transform:r$1}=this;if(!r$1)return this;const{translate:[o,s],scale:[i,a]}=r$1,p=e=>e*i+o,l=e=>s-e*a,y=this._getHydrationFunction(e,p,l);for(const{geometry:m}of t)r(m)&&y(m);return this.transform=null,this}_quantizePoints(e,t,r){let o,s;const i=[];for(let n=0,a=e.length;n<a;n++){const a=e[n];if(n>0){const e=t(a[0]),n=r(a[1]);e===o&&n===s||(i.push([e-o,n-s]),o=e,s=n);}else o=t(a[0]),s=r(a[1]),i.push([o,s]);}return i.length>0?i:null}_getQuantizationFunction(e,t,r){return "point"===e?e=>(e.x=t(e.x),e.y=r(e.y),e):"polyline"===e||"polygon"===e?e=>{const o=c(e)?e.rings:e.paths,s=[];for(let i=0,n=o.length;i<n;i++){const e=o[i],n=this._quantizePoints(e,t,r);n&&s.push(n);}return s.length>0?(c(e)?e.rings=s:e.paths=s,e):null}:"multipoint"===e?e=>{const o=this._quantizePoints(e.points,t,r);return o.length>0?(e.points=o,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,r){return "point"===e?e=>{e.x=t(e.x),e.y=r(e.y);}:"polyline"===e||"polygon"===e?e=>{const o=c(e)?e.rings:e.paths;let s,i;for(let n=0,a=o.length;n<a;n++){const e=o[n];for(let o=0,n=e.length;o<n;o++){const n=e[o];o>0?(s+=n[0],i+=n[1]):(s=n[0],i=n[1]),n[0]=t(s),n[1]=r(i);}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax);}:"multipoint"===e?e=>{const o=e.points;let s,i;for(let n=0,a=o.length;n<a;n++){const e=o[n];n>0?(s+=e[0],i+=e[1]):(s=e[0],i=e[1]),e[0]=t(s),e[1]=r(i);}}:void 0}};e$1([d$2({type:String,json:{write:!0}})],j.prototype,"displayFieldName",void 0),e$1([d$2({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],j.prototype,"exceededTransferLimit",void 0),e$1([d$2({type:[g$1],json:{write:!0}})],j.prototype,"features",void 0),e$1([o("features")],j.prototype,"readFeatures",null),e$1([d$2({type:[y],json:{write:!0}})],j.prototype,"fields",void 0),e$1([d$2({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:g.read}}})],j.prototype,"geometryType",void 0),e$1([r$1("geometryType")],j.prototype,"writeGeometryType",null),e$1([d$2({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],j.prototype,"hasM",void 0),e$1([d$2({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],j.prototype,"hasZ",void 0),e$1([d$2({types:i,json:{write:!0}})],j.prototype,"queryGeometry",void 0),e$1([o("queryGeometry")],j.prototype,"readQueryGeometry",null),e$1([d$2({type:k,json:{write:!0}})],j.prototype,"spatialReference",void 0),e$1([r$1("spatialReference")],j.prototype,"writeSpatialReference",null),e$1([d$2({json:{write:!0}})],j.prototype,"transform",void 0),j=d=e$1([n("esri.rest.support.FeatureSet")],j),j.prototype.toJSON.isDefaultToJSON=!0;const x=j;

export default x;
