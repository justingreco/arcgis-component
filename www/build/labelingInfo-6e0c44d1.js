import { m as m$2, e as e$1, d as d$2, r as r$2, n as n$3, a as s$1, a0 as o } from './cast-3d5be210.js';
import { l } from './JSONSupport-dce2c67b.js';
import { n as n$4, a as a$1 } from './jsonUtils-f3f35e7f.js';
import { i as i$1 } from './geometry-2f332a26.js';
import { y as y$2 } from './TimeExtent-66b53603.js';
import { s } from './request-ac4d8bfb.js';
import { b } from './Query-1f6c7e43.js';
import { B } from './PopupTemplate-b459951f.js';
import './UniqueValueRenderer-bb66af10.js';
import { a as p$7 } from './jsonUtils-e7c7add9.js';
import { r as r$3 } from './enumeration-6695a859.js';
import { m as m$3, p as p$6 } from './commonProperties-fca3036e.js';
import { j as j$1 } from './LabelClass-936eaa93.js';
import { D } from './symbols-ab3e849a.js';
import { o as o$1 } from './screenUtils-31d073db.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var c$4;const m$1=new s({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),u$1=new s({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let d$1=c$4=class extends l{constructor(e){super(e),this.where=null,this.geometry=null,this.spatialRelationship="intersects",this.distance=void 0,this.objectIds=null,this.units=null,this.timeExtent=null;}createQuery(e={}){const{where:t,geometry:i,spatialRelationship:r,timeExtent:s,objectIds:n,units:a,distance:l}=this;return new b({geometry:m$2(i),objectIds:m$2(n),spatialRelationship:r,timeExtent:m$2(s),where:t,units:a,distance:l,...e})}clone(){const{where:e,geometry:t,spatialRelationship:i,timeExtent:r,objectIds:s,units:n,distance:a}=this;return new c$4({geometry:m$2(t),objectIds:m$2(s),spatialRelationship:i,timeExtent:m$2(r),where:e,units:n,distance:a})}};e$1([d$2({type:String,json:{write:!0}})],d$1.prototype,"where",void 0),e$1([d$2({types:i$1,json:{write:!0}})],d$1.prototype,"geometry",void 0),e$1([d$2({type:m$1.apiValues,json:{name:"spatialRel",read:{reader:m$1.read},write:{allowNull:!1,writer:m$1.write,overridePolicy(){return {enabled:r$2(this.geometry)}}}}})],d$1.prototype,"spatialRelationship",void 0),e$1([d$2({type:Number,json:{write:{overridePolicy(e){return {enabled:null!=e&&null!=this.geometry}}}}})],d$1.prototype,"distance",void 0),e$1([d$2({type:[Number],json:{write:!0}})],d$1.prototype,"objectIds",void 0),e$1([d$2({type:u$1.apiValues,json:{read:u$1.read,write:{writer:u$1.write,overridePolicy(e){return {enabled:null!=e&&null!=this.geometry}}}}})],d$1.prototype,"units",void 0),e$1([d$2({type:y$2,json:{write:!0}})],d$1.prototype,"timeExtent",void 0),d$1=c$4=e$1([n$3("esri.layers.support.FeatureFilter")],d$1);const y$1=d$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var d;const n$2={read:{reader:n$4},write:{writer:a$1,overridePolicy(){return {allowNull:null!=this.excludedEffect,isRequired:null==this.excludedEffect}}}},a={read:{reader:n$4},write:{writer:a$1,overridePolicy(){return {allowNull:null!=this.includedEffect,isRequired:null==this.includedEffect}}}},p$5={name:"showExcludedLabels",default:!0};let m=d=class extends l{constructor(e){super(e),this.filter=null,this.includedEffect=null,this.excludedEffect=null,this.excludedLabelsVisible=!1;}write(e,t){const l=super.write(e,t);if(t?.origin){if(l.filter){const e=Object.keys(l.filter);if(e.length>1||"where"!==e[0])return t.messages?.push(new s$1("web-document-write:unsupported-feature-effect","Invalid feature effect 'filter'. A filter can only contain a 'where' property",{layer:t.layer,effect:this})),null}if("showExcludedLabels"in l)return t.messages?.push(new s$1("web-document-write:unsupported-feature-effect","Invalid value for property 'excludedLabelsVisible' which should always be 'true'",{layer:t.layer,effect:this})),null}return l}clone(){return new d({filter:r$2(this.filter)&&this.filter.clone(),includedEffect:this.includedEffect,excludedEffect:this.excludedEffect,excludedLabelsVisible:this.excludedLabelsVisible})}};e$1([d$2({type:y$1,json:{write:{allowNull:!0,writer(e,r,t,l){const s=e?.write({},l);s&&0!==Object.keys(s).length?o(t,s,r):o(t,null,r);}}}})],m.prototype,"filter",void 0),e$1([d$2({json:{write:!0,origins:{"web-map":n$2,"portal-item":n$2}}})],m.prototype,"includedEffect",void 0),e$1([d$2({json:{write:!0,origins:{"web-map":a,"portal-item":a}}})],m.prototype,"excludedEffect",void 0),e$1([d$2({type:Boolean,json:{write:!0,name:"showExcludedLabels",origins:{"web-map":p$5,"portal-item":p$5}}})],m.prototype,"excludedLabelsVisible",void 0),m=d=e$1([n$3("esri.layers.support.FeatureEffect")],m);const w=m;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const t$3={write:{allowNull:!0}},p$4=p=>{let c=class extends p{constructor(){super(...arguments),this.featureEffect=null;}};return e$1([d$2({type:w,json:{origins:{"web-map":t$3,"portal-item":t$3}}})],c.prototype,"featureEffect",void 0),c=e$1([n$3("esri.layers.mixins.FeatureEffectLayer")],c),c};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let t$2=class extends l{constructor(){super(...arguments),this.type=null;}};e$1([d$2({type:["selection","cluster","binning"],readOnly:!0,json:{read:!1,write:!0}})],t$2.prototype,"type",void 0),t$2=e$1([n$3("esri.layers.support.FeatureReduction")],t$2);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var r$1;let e=r$1=class extends l{constructor(){super(...arguments),this.statisticType=null,this.onStatisticField=null,this.onStatisticValueExpression=null;}clone(){return new r$1({statisticType:this.statisticType,onStatisticField:this.onStatisticField,onStatisticValueExpression:this.onStatisticValueExpression})}};e$1([d$2({type:String,json:{write:!0}})],e.prototype,"statisticType",void 0),e$1([d$2({type:String,json:{write:!0}})],e.prototype,"onStatisticField",void 0),e$1([d$2({type:String,json:{write:!0}})],e.prototype,"onStatisticValueExpression",void 0),e=r$1=e$1([n$3("esri.layers.support.OutStatistic")],e);const p$3=e;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var i;let p$2=i=class extends l{constructor(){super(...arguments),this.name=null,this.outStatistic=null;}clone(){return new i({name:this.name,outStatistic:this.outStatistic.clone()})}};e$1([d$2({type:String,json:{write:!0}})],p$2.prototype,"name",void 0),e$1([d$2({type:p$3,json:{write:!0}})],p$2.prototype,"outStatistic",void 0),p$2=i=e$1([n$3("esri.layers.support.AggregateField")],p$2);const c$3=p$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var u;let c$2=u=class extends t$2{constructor(e){super(e),this.type="binning",this.fixedBinLevel=3,this.labelingInfo=null,this.labelsVisible=!0,this.popupEnabled=!0,this.popupTemplate=null,this.fields=[],this.renderer=null;}clone(){return new u({fields:m$2(this.fields),fixedBinLevel:this.fixedBinLevel,labelingInfo:m$2(this.labelingInfo),labelsVisible:this.labelsVisible,popupEnabled:this.popupEnabled,popupTemplate:m$2(this.popupTemplate),renderer:m$2(this.renderer)})}};e$1([r$3({binning:"binning"})],c$2.prototype,"type",void 0),e$1([d$2({type:Number,json:{write:!0}})],c$2.prototype,"fixedBinLevel",void 0),e$1([d$2({type:[j$1],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],c$2.prototype,"labelingInfo",void 0),e$1([d$2(m$3)],c$2.prototype,"labelsVisible",void 0),e$1([d$2(p$6)],c$2.prototype,"popupEnabled",void 0),e$1([d$2({type:B,json:{name:"popupInfo",write:!0}})],c$2.prototype,"popupTemplate",void 0),e$1([d$2({type:[c$3],json:{write:!0,origins:{"web-document":{write:!1},"portal-item":{write:!1}}}})],c$2.prototype,"fields",void 0),e$1([d$2({types:p$7,json:{write:!0}})],c$2.prototype,"renderer",void 0),c$2=u=e$1([n$3("esri.layers.support.FeatureReductionBinning")],c$2);const f=c$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var c$1;let y=c$1=class extends l{constructor(e){super(e),this.type="cluster",this.clusterRadius=o$1("80px"),this.clusterMinSize=o$1("12px"),this.clusterMaxSize=o$1("50px"),this.popupEnabled=!0,this.popupTemplate=null,this.symbol=null,this.labelingInfo=null,this.labelsVisible=!0,this.fields=null;}clone(){return new c$1({clusterRadius:this.clusterRadius,clusterMinSize:this.clusterMinSize,clusterMaxSize:this.clusterMaxSize,labelingInfo:m$2(this.labelingInfo),labelsVisible:this.labelsVisible,fields:m$2(this.fields),renderer:m$2(this.renderer),popupEnabled:this.popupEnabled,popupTemplate:m$2(this.popupTemplate)})}};e$1([d$2({type:["cluster"],readOnly:!0,json:{write:!0}})],y.prototype,"type",void 0),e$1([d$2({type:Number,cast:e=>"auto"===e?e:o$1(e),json:{write:!0}})],y.prototype,"clusterRadius",void 0),e$1([d$2({type:Number,cast:o$1,json:{write:!0}})],y.prototype,"clusterMinSize",void 0),e$1([d$2({type:Number,cast:o$1,json:{write:!0}})],y.prototype,"clusterMaxSize",void 0),e$1([d$2(p$6)],y.prototype,"popupEnabled",void 0),e$1([d$2({type:B,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],y.prototype,"popupTemplate",void 0),e$1([d$2({types:p$7,json:{write:!0}})],y.prototype,"renderer",void 0),e$1([d$2({types:D})],y.prototype,"symbol",void 0),e$1([d$2({type:[j$1],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],y.prototype,"labelingInfo",void 0),e$1([d$2(m$3)],y.prototype,"labelsVisible",void 0),e$1([d$2({type:[c$3],json:{write:!0,origins:{"web-document":{write:!1},"portal-item":{write:!1}}}})],y.prototype,"fields",void 0),y=c$1=e$1([n$3("esri.layers.support.FeatureReductionCluster")],y);const j=y;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var t$1;let c=t$1=class extends t$2{constructor(r){super(r),this.type="selection";}clone(){return new t$1}};e$1([d$2({type:["selection"]})],c.prototype,"type",void 0),c=t$1=e$1([n$3("esri.layers.support.FeatureReductionSelection")],c);const p$1=c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const n$1={key:"type",base:t$2,typeMap:{selection:j}},p={types:{key:"type",base:t$2,typeMap:{selection:p$1,cluster:j,binning:f}},json:{name:"layerDefinition.featureReduction",write:{allowNull:!0},origins:{"web-map":{types:n$1},"portal-item":{types:n$1},"web-scene":{types:{key:"type",base:t$2,typeMap:{selection:p$1}}}}}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const n=/\[([^\[\]]+)\]/gi;function r(r,i,o){return r?r.map((r=>{const s=new j$1;if(s.read(r,o),s.labelExpression){const e=i.fields||i.layerDefinition&&i.layerDefinition.fields||this.fields;s.labelExpression=s.labelExpression.replace(n,((n,r)=>`[${t(r,e)}]`));}return s})):null}function t(e,n){if(!n)return e;const r=e.toLowerCase();for(let t=0;t<n.length;t++){const e=n[t].name;if(e.toLowerCase()===r)return e}return e}

export { p as a, p$1 as b, p$4 as p, r, t$2 as t, w, y$1 as y };
