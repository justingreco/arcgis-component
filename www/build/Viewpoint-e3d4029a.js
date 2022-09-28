import { V as a, e, d as d$1, I as s, n as n$1, r as r$1 } from './cast-3d5be210.js';
import { l as l$1 } from './Clonable-533c7a05.js';
import { s as s$1 } from './Cyclical-922b1741.js';
import { l as l$2 } from './JSONSupport-dce2c67b.js';
import { o as o$1 } from './mathUtils-559a53d9.js';
import { j, r, o } from './Point-edff2a11.js';
import { i, d as d$2 } from './geometry-2f332a26.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let u$1=class extends(l$1(l$2)){constructor(...o){super(...o),this.position=new j([0,0,0]),this.heading=0,this.tilt=0,this.fov=55;}normalizeCtorArgs(o,r,t,e){if(o&&"object"==typeof o&&("x"in o||Array.isArray(o))){const s={position:o};return null!=r&&(s.heading=r),null!=t&&(s.tilt=t),null!=e&&(s.fov=e),s}return o}writePosition(o,r,t,e){const s=o.clone();s.x=a(o.x||0),s.y=a(o.y||0),s.z=o.hasZ?a(o.z||0):o.z,r[t]=s.write({},e);}readPosition(o,r){const t=new j;return t.read(o,r),t.x=a(t.x||0),t.y=a(t.y||0),t.z=t.hasZ?a(t.z||0):t.z,t}equals(o){return !!o&&(this.tilt===o.tilt&&this.heading===o.heading&&this.fov===o.fov&&this.position.equals(o.position))}};e([d$1({type:j,json:{write:{isRequired:!0}}})],u$1.prototype,"position",void 0),e([r("position")],u$1.prototype,"writePosition",null),e([o("position")],u$1.prototype,"readPosition",null),e([d$1({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),s((o=>s$1.normalize(a(o))))],u$1.prototype,"heading",void 0),e([d$1({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),s((o=>o$1(a(o),-180,180)))],u$1.prototype,"tilt",void 0),e([d$1({type:Number,nonNullable:!0,json:{read:!1,write:!1}})],u$1.prototype,"fov",void 0),u$1=e([n$1("esri.Camera")],u$1);const d=u$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var m;let n=m=class extends l$2{constructor(r){super(r),this.rotation=0,this.scale=0,this.targetGeometry=null,this.camera=null;}castRotation(r){return (r%=360)<0&&(r+=360),r}clone(){return new m({rotation:this.rotation,scale:this.scale,targetGeometry:r$1(this.targetGeometry)?this.targetGeometry.clone():null,camera:r$1(this.camera)?this.camera.clone():null})}};function l(){return {enabled:!this.camera}}e([d$1({type:Number,json:{write:!0,origins:{"web-map":{default:0,write:!0},"web-scene":{write:{overridePolicy:l}}}}})],n.prototype,"rotation",void 0),e([s("rotation")],n.prototype,"castRotation",null),e([d$1({type:Number,json:{write:!0,origins:{"web-map":{default:0,write:!0},"web-scene":{write:{overridePolicy:l}}}}})],n.prototype,"scale",void 0),e([d$1({types:i,json:{read:d$2,write:!0,origins:{"web-scene":{read:d$2,write:{overridePolicy:l}}}}})],n.prototype,"targetGeometry",void 0),e([d$1({type:d,json:{write:!0}})],n.prototype,"camera",void 0),n=m=e([n$1("esri.Viewpoint")],n);const u=n;

export { d, u };
