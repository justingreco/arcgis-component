import { aw as A, W as t, e, d as d$1, n } from './cast-3d5be210.js';
import { o } from './request-ac4d8bfb.js';
import { l } from './JSONSupport-dce2c67b.js';
import { H, $ } from './unitUtils-a0a11e54.js';
import { r, o as o$1 } from './Point-edff2a11.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var d;const p=o()({orthometric:"gravity-related-height",gravity_related_height:"gravity-related-height",ellipsoidal:"ellipsoidal"}),u=p.jsonValues.slice();A(u,"orthometric");const g=o()({meter:"meters",foot:"feet","us-foot":"us-feet","clarke-foot":"clarke-feet","clarke-yard":"clarke-yards","clarke-link":"clarke-links","sears-yard":"sears-yards","sears-foot":"sears-feet","sears-chain":"sears-chains","benoit-1895-b-chain":"benoit-1895-b-chains","indian-yard":"indian-yards","indian-1937-yard":"indian-1937-yards","gold-coast-foot":"gold-coast-feet","sears-1922-truncated-chain":"sears-1922-truncated-chains","50-kilometers":"50-kilometers","150-kilometers":"150-kilometers"});let m=d=class extends l{constructor(e){super(e),this.heightModel="gravity-related-height",this.heightUnit="meters",this.vertCRS=null;}writeHeightModel(e,t,r){return p.write(e,t,r)}readHeightModel(e,t,r){const o=p.read(e);return o||(r&&r.messages&&r.messages.push(f(e,{context:r})),null)}readHeightUnit(e,t,r){const o=g.read(e);return o||(r&&r.messages&&r.messages.push(y(e,{context:r})),null)}readHeightUnitService(e,t,r){const o=H(e)||g.read(e);return o||(r&&r.messages&&r.messages.push(y(e,{context:r})),null)}readVertCRS(e,t){return t.vertCRS||t.ellipsoid||t.geoid}clone(){return new d({heightModel:this.heightModel,heightUnit:this.heightUnit,vertCRS:this.vertCRS})}equals(e){return !!e&&(this===e||this.heightModel===e.heightModel&&this.heightUnit===e.heightUnit&&this.vertCRS===e.vertCRS)}static deriveUnitFromSR(e,t){const r=$(t);return new d({heightModel:e.heightModel,heightUnit:r,vertCRS:e.vertCRS})}write(e,t){return t={origin:"web-scene",...t},super.write(e,t)}static fromJSON(e){if(!e)return null;const t=new d;return t.read(e,{origin:"web-scene"}),t}};function y(e,t$1){return new t("height-unit:unsupported",`Height unit of value '${e}' is not supported`,t$1)}function f(e,t$1){return new t("height-model:unsupported",`Height model of value '${e}' is not supported`,t$1)}e([d$1({type:p.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:u,default:"ellipsoidal"}}}})],m.prototype,"heightModel",void 0),e([r("web-scene","heightModel")],m.prototype,"writeHeightModel",null),e([o$1(["web-scene","service"],"heightModel")],m.prototype,"readHeightModel",null),e([d$1({type:g.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:g.jsonValues,write:g.write}}}})],m.prototype,"heightUnit",void 0),e([o$1("web-scene","heightUnit")],m.prototype,"readHeightUnit",null),e([o$1("service","heightUnit")],m.prototype,"readHeightUnitService",null),e([d$1({type:String,constructOnly:!0,json:{origins:{"web-scene":{write:!0}}}})],m.prototype,"vertCRS",void 0),e([o$1("service","vertCRS",["vertCRS","ellipsoid","geoid"])],m.prototype,"readVertCRS",null),m=d=e([n("esri.geometry.HeightModelInfo")],m);const v=m;

export { v };