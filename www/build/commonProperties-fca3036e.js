import { y as y$1, n as n$1 } from './TimeExtent-66b53603.js';
import { M } from './Extent-f27111e1.js';
import { s as s$1, o as o$2, r as r$2, k } from './Point-edff2a11.js';
import { p as p$2 } from './persistableUrlUtils-5dcd6081.js';
import { t, h as e$1, E, r as r$1, e as e$2, d as d$2, n as n$2, ay as w$1 } from './cast-3d5be210.js';
import { o as o$1, s as s$2 } from './request-ac4d8bfb.js';
import { l as l$1 } from './JSONSupport-dce2c67b.js';
import { b as b$1 } from './fieldUtils-240a3b99.js';
import { N, a as G } from './unitUtils-a0a11e54.js';
import { r as r$3 } from './opacityUtils-dcd94f00.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const m$3={inches:N(1,"meters","inches"),feet:N(1,"meters","feet"),"us-feet":N(1,"meters","us-feet"),yards:N(1,"meters","yards"),miles:N(1,"meters","miles"),"nautical-miles":N(1,"meters","nautical-miles"),millimeters:N(1,"meters","millimeters"),centimeters:N(1,"meters","centimeters"),decimeters:N(1,"meters","decimeters"),meters:N(1,"meters","meters"),kilometers:N(1,"meters","kilometers"),"decimal-degrees":1/G(1,"meters",s$1.radius)};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function m$2(e){return void 0!==e.timeInfo}async function s(n,r){if(0===n.length)return y$1.allTime;const s=n.filter(m$2);await Promise.all(s.map((e=>e.load({signal:r}))));const a=[],f=[];for(const e of s)"feature"!==e?.type&&"map-image"!==e?.type||!e.timeInfo.hasLiveData?f.push(e):a.push(e);const u=e=>t(e)||e.isAllTime,c=f.map((e=>e.timeInfo.fullTimeExtent));if(c.some(u))return y$1.allTime;const l=a.map((async e=>{const{timeExtent:n}=await e.fetchRecomputedExtents({signal:r});return n||e$1(e.timeInfo.fullTimeExtent)})),p=(await E(l)).map((e=>e.value));if(p.some(u))return y$1.allTime;return p.concat(c).reduce(((e,t)=>e.union(t)))}function a(t){if(!t)return t;const{start:i,end:o}=t;return new y$1({start:r$1(i)?n$1(i,-i.getTimezoneOffset(),"minutes"):i,end:r$1(o)?n$1(o,-o.getTimezoneOffset(),"minutes"):o})}function f$1(t){if(!t)return t;const{start:i,end:o}=t;return new y$1({start:r$1(i)?n$1(i,i.getTimezoneOffset(),"minutes"):i,end:r$1(o)?n$1(o,o.getTimezoneOffset(),"minutes"):o})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var i;let p$1=i=class extends l$1{async collectRequiredFields(r,e){return b$1(r,e,this.expression)}clone(){return new i({expression:this.expression,title:this.title})}equals(r){return this.expression===r.expression&&this.title===r.title}};e$2([d$2({type:String,json:{write:!0}})],p$1.prototype,"expression",void 0),e$2([d$2({type:String,json:{write:!0}})],p$1.prototype,"title",void 0),p$1=i=e$2([n$2("esri.layers.support.FeatureExpressionInfo")],p$1);const c$2=p$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function n(n){return null!=m$3[n]}function r(n){return 1/(m$3[n]||1)}function e(){const n=Object.keys(m$3);return n.sort(),n}const o=e();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var m$1;const d$1=o$1()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),c$1=new s$2({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});let h=m$1=class extends l$1{constructor(){super(...arguments),this.offset=null;}readFeatureExpressionInfo(e,r){return null!=e?e:r.featureExpression&&0===r.featureExpression.value?{expression:"0"}:void 0}writeFeatureExpressionInfo(e,r,o,t){r[o]=e.write({},t),"0"===e.expression&&(r.featureExpression={value:0});}get mode(){const{offset:e,featureExpressionInfo:r}=this;return this._isOverridden("mode")?this._get("mode"):r$1(e)||r?"relative-to-ground":"on-the-ground"}set mode(e){this._override("mode",e);}set unit(e){this._set("unit",e);}write(e,r){return this.offset||this.mode||this.featureExpressionInfo||this.unit?super.write(e,r):null}clone(){return new m$1({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})}equals(e){return this.mode===e.mode&&this.offset===e.offset&&this.unit===e.unit&&w$1(this.featureExpressionInfo,e.featureExpressionInfo)}};e$2([d$2({type:c$2,json:{write:!0}})],h.prototype,"featureExpressionInfo",void 0),e$2([o$2("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],h.prototype,"readFeatureExpressionInfo",null),e$2([r$2("featureExpressionInfo",{featureExpressionInfo:{type:c$2},"featureExpression.value":{type:[0]}})],h.prototype,"writeFeatureExpressionInfo",null),e$2([d$2({type:d$1.apiValues,nonNullable:!0,json:{type:d$1.jsonValues,read:d$1.read,write:{writer:d$1.write,isRequired:!0}}})],h.prototype,"mode",null),e$2([d$2({type:Number,json:{write:!0}})],h.prototype,"offset",void 0),e$2([d$2({type:o,json:{type:String,read:c$1.read,write:c$1.write}})],h.prototype,"unit",null),h=m$1=e$2([n$2("esri.layers.support.ElevationInfo")],h);const x=h;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const l={type:Boolean,value:!0,json:{origins:{service:{read:!1,write:!1},"web-map":{read:!1,write:!1}},name:"screenSizePerspective",write:!0}},p={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:(e,r)=>!r.disablePopup},write:{enabled:!0,writer(e,r,i){r[i]=!e;}}}},m={type:Boolean,value:!0,json:{name:"showLabels",write:!0}},f={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:p$2}}},c={type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:!0}},d={value:null,type:x,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:!0}};function y(e){return {type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}const w={type:Number,json:{origins:{"web-document":{write:!0,read:!0},"portal-item":{write:!0}}}},u={...w,json:{...w.json,origins:{"web-document":{...w.json.origins["web-document"],write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}}},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:(e,r,i)=>i&&"service"!==i.origin||!r.drawingInfo||void 0===r.drawingInfo.transparency?r.layerDefinition&&r.layerDefinition.drawingInfo&&void 0!==r.layerDefinition.drawingInfo.transparency?r$3(r.layerDefinition.drawingInfo.transparency):void 0:r$3(r.drawingInfo.transparency)}}},g={type:y$1,readOnly:!0,get(){if(!this.layer?.timeInfo)return null;const{datesInUnknownTimezone:e,timeOffset:r,useViewTime:i}=this.layer,n=this.view?.timeExtent;let a$1=this.layer.timeExtent;e&&(a$1=f$1(a$1));let s=i?n&&a$1?n.intersection(a$1):n||a$1:a$1;if(!s||s.isEmpty||s.isAllTime)return s;r&&(s=s.offset(-r.value,r.unit)),e&&(s=a(s));const l=this._get("timeExtent");return s.equals(l)?l:s}},j={type:M,readOnly:!0,json:{origins:{service:{read:{source:["fullExtent","spatialReference"],reader:(e,n)=>{const t=M.fromJSON(e);return null!=n.spatialReference&&"object"==typeof n.spatialReference&&(t.spatialReference=k.fromJSON(n.spatialReference)),t}}}},read:!1}},v={type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}}}},b={type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.minScale"},write:{target:"layerDefinition.minScale"}}},I={type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.maxScale"},write:{target:"layerDefinition.maxScale"}}},D={json:{write:{ignoreOrigin:!0},origins:{"web-map":{read:!1,write:!1}}}};

export { D, I, m$3 as a, b, c, d, f, g, j, l, m, n, p, r, u, v, w, x, y };
