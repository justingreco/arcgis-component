import { e as e$1, d, n, m, S } from './cast-3d5be210.js';
import { l as l$2 } from './JSONSupport-dce2c67b.js';
import { j } from './Collection-a38e0489.js';
import { o, r as r$1 } from './Point-edff2a11.js';
import { r } from './enumeration-6695a859.js';
import { i as i$7 } from './fieldType-eb0b42e4.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let s$2=class extends l$2{constructor(r){super(r),this.facilityIdField=null,this.layerId=null,this.nameField=null,this.siteIdField=null,this.sublayerId=null;}};e$1([d({type:String,json:{write:!0}})],s$2.prototype,"facilityIdField",void 0),e$1([d({type:String,json:{write:!0}})],s$2.prototype,"layerId",void 0),e$1([d({type:String,json:{write:!0}})],s$2.prototype,"nameField",void 0),e$1([d({type:String,json:{write:!0}})],s$2.prototype,"siteIdField",void 0),e$1([d({type:Number,json:{read:{source:"subLayerId"},write:{target:"subLayerId"},origins:{"web-scene":{read:!1,write:!1}}}})],s$2.prototype,"sublayerId",void 0),s$2=e$1([n("esri.layers.support.FacilityLayerInfo")],s$2);const i$6=s$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let i$5=class extends l$2{constructor(e){super(e),this.facilityIdField=null,this.layerId=null,this.levelIdField=null,this.levelNumberField=null,this.longNameField=null,this.shortNameField=null,this.sublayerId=null,this.verticalOrderField=null;}};e$1([d({type:String,json:{write:!0}})],i$5.prototype,"facilityIdField",void 0),e$1([d({type:String,json:{write:!0}})],i$5.prototype,"layerId",void 0),e$1([d({type:String,json:{write:!0}})],i$5.prototype,"levelIdField",void 0),e$1([d({type:String,json:{write:!0}})],i$5.prototype,"levelNumberField",void 0),e$1([d({type:String,json:{write:!0}})],i$5.prototype,"longNameField",void 0),e$1([d({type:String,json:{write:!0}})],i$5.prototype,"shortNameField",void 0),e$1([d({type:Number,json:{read:{source:"subLayerId"},write:{target:"subLayerId"},origins:{"web-scene":{read:!1,write:!1}}}})],i$5.prototype,"sublayerId",void 0),e$1([d({type:String,json:{write:!0}})],i$5.prototype,"verticalOrderField",void 0),i$5=e$1([n("esri.layers.support.LevelLayerInfo")],i$5);const s$1=i$5;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let s=class extends l$2{constructor(r){super(r),this.layerId=null,this.nameField=null,this.siteIdField=null,this.sublayerId=null;}};e$1([d({type:String,json:{write:!0}})],s.prototype,"layerId",void 0),e$1([d({type:String,json:{write:!0}})],s.prototype,"nameField",void 0),e$1([d({type:String,json:{write:!0}})],s.prototype,"siteIdField",void 0),e$1([d({type:Number,json:{read:{source:"subLayerId"},write:{target:"subLayerId"},origins:{"web-scene":{read:!1,write:!1}}}})],s.prototype,"sublayerId",void 0),s=e$1([n("esri.layers.support.SiteLayerInfo")],s);const i$4=s;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let a$4=class extends l$2{constructor(r){super(r),this.levelLayer=null,this.facilityLayer=null,this.siteLayer=null;}};e$1([d({type:s$1,json:{write:!0}})],a$4.prototype,"levelLayer",void 0),e$1([d({type:i$6,json:{write:!0}})],a$4.prototype,"facilityLayer",void 0),e$1([d({type:i$4,json:{write:!0}})],a$4.prototype,"siteLayer",void 0),a$4=e$1([n("esri.support.MapFloorInfo")],a$4);const l$1=a$4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const h$1={width:600,height:400},t$1=1.5;function i$3(i,e){e=e||h$1;let{width:d,height:n}=e;const g=d/n;return g<t$1?n=d/t$1:g>t$1&&(d=n*t$1),d>i.width&&(n*=i.width/d,d=i.width),n>i.height&&(d*=i.height/n,n=i.height),{width:Math.round(d),height:Math.round(n)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function e(e){return {enabled:!!e?.length}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var c$3;let a$3=c$3=class extends l$2{constructor(r){super(r),this.exactMatch=!1,this.name=null,this.type=null;}clone(){return new c$3({exactMatch:this.exactMatch,type:this.type,name:this.name})}};e$1([d({type:Boolean,json:{write:!0}})],a$3.prototype,"exactMatch",void 0),e$1([d({type:String,json:{write:!0}})],a$3.prototype,"name",void 0),e$1([r(i$7)],a$3.prototype,"type",void 0),a$3=c$3=e$1([n("esri.webdoc.applicationProperties.SearchLayerField")],a$3);const i$2=a$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var c$2;let a$2=c$2=class extends l$2{constructor(r){super(r),this.field=null,this.id=null,this.subLayer=null;}clone(){return new c$2(m({field:this.field,id:this.id,subLayer:this.subLayer}))}};e$1([d({type:i$2,json:{write:{isRequired:!0}}})],a$2.prototype,"field",void 0),e$1([d({type:String,json:{write:{isRequired:!0}}})],a$2.prototype,"id",void 0),e$1([d({type:S,json:{write:!0}})],a$2.prototype,"subLayer",void 0),a$2=c$2=e$1([n("esri.webdoc.applicationProperties.SearchLayer")],a$2);const u$1=a$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var c$1;let a$1=c$1=class extends l$2{constructor(r){super(r),this.exactMatch=!1,this.name=null,this.type=null;}clone(){return new c$1({exactMatch:this.exactMatch,type:this.type,name:this.name})}};e$1([d({type:Boolean,json:{write:!0}})],a$1.prototype,"exactMatch",void 0),e$1([d({type:String,json:{write:!0}})],a$1.prototype,"name",void 0),e$1([r(i$7)],a$1.prototype,"type",void 0),a$1=c$1=e$1([n("esri.webdoc.applicationProperties.SearchTableField")],a$1);const i$1=a$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var p$3;let c=p$3=class extends l$2{constructor(r){super(r),this.field=null,this.id=null;}clone(){return new p$3(m({field:this.field,id:this.id}))}};e$1([d({type:i$1,json:{write:{isRequired:!0}}})],c.prototype,"field",void 0),e$1([d({type:String,json:{write:{isRequired:!0}}})],c.prototype,"id",void 0),c=p$3=e$1([n("esri.webdoc.applicationProperties.SearchTable")],c);const l=c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var p$2;const b=j.ofType(u$1),h=j.ofType(l);let u=p$2=class extends l$2{constructor(e){super(e),this.addressSearchEnabled=!0,this.enabled=!0,this.hintText=null,this.layers=new b,this.tables=new h;}readAddressSearchEnabled(e){return !e}writeAddressSearchEnabled(e,r,o){r[o]=!e;}clone(){return new p$2(m({addressSearchEnabled:this.addressSearchEnabled,enabled:this.enabled,hintText:this.hintText,layers:this.layers,tables:this.tables}))}};e$1([d({type:Boolean,nonNullable:!0,json:{read:{source:"disablePlaceFinder"},write:{target:"disablePlaceFinder",isRequired:!0},origins:{"web-scene":{read:!1,write:!1}}}})],u.prototype,"addressSearchEnabled",void 0),e$1([o("addressSearchEnabled")],u.prototype,"readAddressSearchEnabled",null),e$1([r$1("addressSearchEnabled")],u.prototype,"writeAddressSearchEnabled",null),e$1([d({type:Boolean,nonNullable:!0,json:{write:!0,origins:{"web-map":{write:{isRequired:!0}},"web-scene":{default:!0,write:!0}}}})],u.prototype,"enabled",void 0),e$1([d({type:String,json:{write:!0}})],u.prototype,"hintText",void 0),e$1([d({type:b,json:{write:{overridePolicy:e},origins:{"web-scene":{write:{isRequired:!0}}}}})],u.prototype,"layers",void 0),e$1([d({type:h,json:{read:!0,write:{overridePolicy:e}}})],u.prototype,"tables",void 0),u=p$2=e$1([n("esri.webdoc.applicationProperties.Search")],u);const y=u;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var p$1;let a=p$1=class extends l$2{constructor(r){super(r),this.search=null;}clone(){return new p$1(m({search:this.search}))}};e$1([d({type:y,json:{write:!0}})],a.prototype,"search",void 0),a=p$1=e$1([n("esri.webdoc.applicationProperties.Viewing")],a);const i=a;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var t;let p=t=class extends l$2{constructor(){super(...arguments),this.url="";}destroy(){this.url="";}clone(){return new t({url:this.url})}};e$1([d({type:String,json:{write:{isRequired:!0}}})],p.prototype,"url",void 0),p=t=e$1([n("esri.webdoc.support.SlideThumbnail")],p);

export { i$3 as a, i, l$1 as l, p };
