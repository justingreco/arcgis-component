import { m as m$1, e as e$1, d, n as n$3, s as s$1, au as u$2, I as s$2, S as S$2, a2 as e$2, O as v$2, g as r$2, W as t$1, Y as s$3 } from './cast-3d5be210.js';
import { v as v$1, p as p$6, j, l as l$3, P as P$1, N } from './UniqueValueRenderer-bb66af10.js';
import { r } from './Point-edff2a11.js';
import { b as b$2, F } from './fieldUtils-240a3b99.js';
import { DictionaryLoader as y$1 } from './DictionaryLoader-d0d1b4ff.js';
import { l as l$1 } from './Color-25ce730a.js';
import { o as o$1 } from './aliasOf-bdfe6662.js';
import { r as r$1 } from './enumeration-6695a859.js';
import { l } from './JSONSupport-dce2c67b.js';
import { m as m$2, S as S$1, y as y$2 } from './symbols-ab3e849a.js';
import { e as e$3, o as o$2 } from './screenUtils-31d073db.js';
import { l as l$2 } from './Clonable-533c7a05.js';
import { f as f$1, i as i$2, a as a$2 } from './heatmapUtils-d302cc7f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var p$5;let c$4=p$5=class extends(v$1(p$6)){constructor(e){super(e),this.config=null,this.fieldMap=null,this.scaleExpression=null,this.scaleExpressionTitle=null,this.url=null,this.type="dictionary";}get _loader(){return new y$1(this.url,this.config,this.fieldMap)}writeData(e,r){e&&(r.scalingExpressionInfo={expression:e,returnType:"number"});}writeVisualVariables(e,r,s,i){i?.origin||super.writeVisualVariables(e,r,s,i);}clone(){return new p$5({config:m$1(this.config),scaleExpression:this.scaleExpression,scaleExpressionTitle:this.scaleExpressionTitle,fieldMap:m$1(this.fieldMap),url:m$1(this.url),visualVariables:m$1(this.visualVariables)})}async getSymbolAsync(e,r){return this._loader.getSymbolAsync(e,r)}async collectRequiredFields(e,r){await this.collectVVRequiredFields(e,r),this.scaleExpression&&await b$2(e,r,this.scaleExpression);for(const s in this.fieldMap){const i=this.fieldMap[s];r.has(i)&&e.add(i);}}get arcadeRequired(){return !0}getSymbol(){return null}getSymbols(){return []}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce(((e,r)=>e+r.getAttributeHash()),"")}getMeshHash(){return `${this.url}-${JSON.stringify(this.fieldMap)}`}getSymbolFields(){return this._loader.getSymbolFields()}};e$1([d({type:y$1})],c$4.prototype,"_loader",null),e$1([d({type:Object,json:{read:{source:"configuration"},write:{target:"configuration"}}})],c$4.prototype,"config",void 0),e$1([d({type:Object,json:{write:!0}})],c$4.prototype,"fieldMap",void 0),e$1([d({type:String,json:{read:{source:"scalingExpressionInfo.expression"},write:!0}})],c$4.prototype,"scaleExpression",void 0),e$1([r("scaleExpression")],c$4.prototype,"writeData",null),e$1([d({type:String,json:{read:{source:"scalingExpressionInfo.title"},write:{target:"scalingExpressionInfo.title",overridePolicy(e){return {enabled:!!e&&!!this.scaleExpression}}}}})],c$4.prototype,"scaleExpressionTitle",void 0),e$1([d({type:String,json:{write:!0}})],c$4.prototype,"url",void 0),e$1([r("visualVariables")],c$4.prototype,"writeVisualVariables",null),c$4=p$5=e$1([n$3("esri.renderers.DictionaryRenderer")],c$4);const u$1=c$4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var n$2;const u=s$1.getLogger("esri.renderers.support.AttributeColorInfo");let c$3=n$2=class extends l{constructor(r){super(r),this.color=null,this.field=null,this.label=null,this.valueExpression=null,this.valueExpressionTitle=null;}castField(r){return null==r?r:"function"==typeof r?(u.error(".field: field must be a string value"),null):u$2(r)}getAttributeHash(){return `${this.field}-${this.valueExpression}`}clone(){return new n$2({color:this.color&&this.color.clone(),field:this.field,label:this.label,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}};e$1([d({type:l$1,json:{type:[Number],write:!0}})],c$3.prototype,"color",void 0),e$1([d({type:String,json:{write:!0}})],c$3.prototype,"field",void 0),e$1([s$2("field")],c$3.prototype,"castField",null),e$1([d({type:String,json:{write:!0}})],c$3.prototype,"label",void 0),e$1([d({type:String,json:{write:!0}})],c$3.prototype,"valueExpression",void 0),e$1([d({type:String,json:{write:!0}})],c$3.prototype,"valueExpressionTitle",void 0),c$3=n$2=e$1([n$3("esri.renderers.support.AttributeColorInfo")],c$3);const a$1=c$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var e;let p$4=e=class extends l{constructor(){super(...arguments),this.unit=null;}clone(){return new e({unit:this.unit})}};e$1([d({type:String,json:{write:!0}})],p$4.prototype,"unit",void 0),p$4=e=e$1([n$3("esri.renderers.support.DotDensityLegendOptions")],p$4);const c$2=p$4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var m;let y=m=class extends(v$1(p$6)){constructor(e){super(e),this.attributes=null,this.backgroundColor=new l$1([0,0,0,0]),this.blendDots=!0,this.dotBlendingEnabled=!0,this.dotShape="square",this.dotSize=1,this.legendOptions=null,this.outline=new m$2,this.dotValue=null,this.referenceDotValue=null,this.referenceScale=null,this.seed=1,this.type="dot-density";}calculateDotValue(e){if(null==this.referenceScale)return this.dotValue;const t=e/this.referenceScale*this.dotValue;return t<1?1:t}getSymbol(){return new S$1({outline:this.outline})}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return [this.getSymbol()]}getAttributeHash(){return this.attributes&&this.attributes.reduce(((e,t)=>e+t.getAttributeHash()),"")}getMeshHash(){return JSON.stringify(this.outline)}clone(){return new m({attributes:m$1(this.attributes),backgroundColor:m$1(this.backgroundColor),dotBlendingEnabled:m$1(this.dotBlendingEnabled),dotShape:m$1(this.dotShape),dotSize:m$1(this.dotSize),dotValue:m$1(this.dotValue),legendOptions:m$1(this.legendOptions),outline:m$1(this.outline),referenceScale:m$1(this.referenceScale),visualVariables:m$1(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}getControllerHash(){return `${this.attributes.map((e=>e.field||e.valueExpression||""))}-${this.outline&&JSON.stringify(this.outline.toJSON())||""}`}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t);for(const o of this.attributes)o.valueExpression&&await b$2(e,t,o.valueExpression),o.field&&e.add(o.field);}};e$1([d({type:[a$1],json:{write:!0}})],y.prototype,"attributes",void 0),e$1([d({type:l$1,json:{write:!0}})],y.prototype,"backgroundColor",void 0),e$1([d({type:Boolean}),o$1("dotBlendingEnabled")],y.prototype,"blendDots",void 0),e$1([d({type:Boolean,json:{write:!0}})],y.prototype,"dotBlendingEnabled",void 0),e$1([d({type:String,json:{write:!1}})],y.prototype,"dotShape",void 0),e$1([d({type:Number,json:{write:!0,origins:{"web-map":{write:!1},"web-scene":{write:!1}}}})],y.prototype,"dotSize",void 0),e$1([d({type:c$2,json:{write:!0}})],y.prototype,"legendOptions",void 0),e$1([d({type:m$2,json:{default:null,write:!0}})],y.prototype,"outline",void 0),e$1([d({type:Number,json:{write:!0}})],y.prototype,"dotValue",void 0),e$1([d({type:Number}),o$1("dotValue")],y.prototype,"referenceDotValue",void 0),e$1([d({type:Number,json:{write:!0}})],y.prototype,"referenceScale",void 0),e$1([d({type:Number,json:{write:!0}})],y.prototype,"seed",void 0),e$1([r$1({dotDensity:"dot-density"})],y.prototype,"type",void 0),y=m=e$1([n$3("esri.renderers.DotDensityRenderer")],y);const b$1=y;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var c$1;let i$1=c$1=class extends l{constructor(o){super(o),this.color=null,this.ratio=null;}clone(){return new c$1({color:this.color,ratio:this.ratio})}};e$1([d({type:l$1,json:{type:[S$2],default:null,write:!0}})],i$1.prototype,"color",void 0),e$1([d({type:Number,json:{write:!0}})],i$1.prototype,"ratio",void 0),i$1=c$1=e$1([n$3("esri.renderers.support.HeatmapColorStop")],i$1);const a=i$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let p$3=class extends(l$2(l)){constructor(){super(...arguments),this.minLabel=null,this.maxLabel=null,this.title=null;}};e$1([d({type:String,json:{write:!0}})],p$3.prototype,"minLabel",void 0),e$1([d({type:String,json:{write:!0}})],p$3.prototype,"maxLabel",void 0),e$1([d({type:String,json:{write:!0}})],p$3.prototype,"title",void 0),p$3=e$1([n$3("esri.renderers.support.HeatmapLegendOptions")],p$3);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var D;const S=s$1.getLogger("esri.renderers.HeatmapRenderer");function v(e){if(null!=e){const{maxDensity:t,minDensity:i,radius:s}=e;if(null!=t||null!=i||null!=s){const{blurRadius:t,maxPixelIntensity:i,minPixelIntensity:s,...r}=e;return r}}return e}let I=D=class extends p$6{constructor(e){super(e),this.authoringInfo=null,this.colorStops=[new a({ratio:0,color:new l$1("rgba(255, 140, 0, 0)")}),new a({ratio:.75,color:new l$1("rgba(255, 140, 0, 1)")}),new a({ratio:.9,color:new l$1("rgba(255, 0,   0, 1)")})],this.field=null,this.fieldOffset=0,this.legendOptions=null,this.maxDensity=.04,this.minDensity=0,this.radius=18,this.referenceScale=0,this.type="heatmap",this.valueExpression=null,this.valueExpressionTitle=null,this._warnedProps={blurRadius:!1,maxPixelIntensity:!1,minPixelIntensity:!1};}normalizeCtorArgs(e){return v(e)}get blurRadius(){return f$1(this.radius)}set blurRadius(e){const t=this.maxPixelIntensity,i=this.minPixelIntensity;this._set("radius",i$2(e)),this._warnAboutDeprecatedGaussianBlurProp("blurRadius","radius"),this._set("maxDensity",t*this._pixelIntensityToDensity),this._set("minDensity",i*this._pixelIntensityToDensity);}get maxPixelIntensity(){return this.maxDensity/this._pixelIntensityToDensity}set maxPixelIntensity(e){this._set("maxDensity",e*this._pixelIntensityToDensity),this._warnAboutDeprecatedGaussianBlurProp("maxPixelIntensity","maxDensity");}get minPixelIntensity(){return this.minDensity/this._pixelIntensityToDensity}set minPixelIntensity(e){this._set("minDensity",e*this._pixelIntensityToDensity),this._warnAboutDeprecatedGaussianBlurProp("minPixelIntensity","minDensity");}get _pixelIntensityToDensity(){return 24/(a$2**2*this.blurRadius**4)}_warnAboutDeprecatedGaussianBlurProp(e,t){if(this._warnedProps[e])return;"user"===e$2(this).getDefaultOrigin()&&(this._warnedProps[e]=!0,v$2((()=>{r$2(S,e,{replacement:`${String(t)} (suggested value: ${this._get(t)})`,version:"4.24"});})));}read(e,t){e=v(e),super.read(e,t);}getSymbol(){const e=0!==this.referenceScale?5:1,t=Math.min(this.radius*e,e$3(256));return new y$2({size:t})}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return [this.getSymbol()]}async collectRequiredFields(e,t){const i=this.field,s=this.valueExpression;i&&"string"==typeof i&&await F(e,t,i),s&&"string"==typeof s&&await b$2(e,t,s);}getAttributeHash(){return null}getMeshHash(){return `${JSON.stringify(this.colorStops)}.${this.blurRadius}.${this.field}`}clone(){return new D({colorStops:m$1(this.colorStops),field:this.field,legendOptions:m$1(this.legendOptions),maxDensity:this.maxDensity,minDensity:this.minDensity,radius:this.radius,referenceScale:this.referenceScale,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}};e$1([d({type:j,json:{write:!1}})],I.prototype,"authoringInfo",void 0),e$1([d({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],I.prototype,"blurRadius",null),e$1([d({type:[a],json:{write:!0}})],I.prototype,"colorStops",void 0),e$1([d({type:String,json:{write:!0}})],I.prototype,"field",void 0),e$1([d({type:Number,json:{write:{overridePolicy:(e,t,i)=>({enabled:null==i})},origins:{"web-scene":{write:!1}}}})],I.prototype,"fieldOffset",void 0),e$1([d({type:p$3,json:{write:!0}})],I.prototype,"legendOptions",void 0),e$1([d({type:Number,json:{write:!0}})],I.prototype,"maxDensity",void 0),e$1([d({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],I.prototype,"maxPixelIntensity",null),e$1([d({type:Number,json:{write:!0}})],I.prototype,"minDensity",void 0),e$1([d({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],I.prototype,"minPixelIntensity",null),e$1([d({type:Number,cast:o$2,json:{write:!0}})],I.prototype,"radius",void 0),e$1([d({type:Number,range:{min:0},json:{default:0,write:!0}})],I.prototype,"referenceScale",void 0),e$1([r$1({heatmap:"heatmap"})],I.prototype,"type",void 0),e$1([d({type:String,json:{write:!0,origins:{"web-document":{write:!1},"portal-item":{write:!1}}}})],I.prototype,"valueExpression",void 0),e$1([d({type:String})],I.prototype,"valueExpressionTitle",void 0),e$1([d({readOnly:!0})],I.prototype,"_pixelIntensityToDensity",null),I=D=e$1([n$3("esri.renderers.HeatmapRenderer")],I);const P=I;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let i=class extends(l$2(l)){constructor(){super(...arguments),this.color=new l$1([0,0,0,0]),this.label=null,this.threshold=0;}};e$1([d({type:l$1,json:{write:!0}})],i.prototype,"color",void 0),e$1([d({type:String,json:{write:!0}})],i.prototype,"label",void 0),e$1([d({type:Number,range:{min:0,max:1},json:{write:!0}})],i.prototype,"threshold",void 0),i=e$1([n$3("esri.renderers.support.OthersCategory")],i);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let p$2=class extends(l$2(l)){constructor(){super(...arguments),this.title=null;}};e$1([d({type:String,json:{write:!0}})],p$2.prototype,"title",void 0),p$2=e$1([n$3("esri.renderers.support.PieChartLegendOptions")],p$2);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let b=class extends(v$1(l$2(p$6))){constructor(t){super(t),this.attributes=null,this.backgroundFillSymbol=null,this.defaultColor=new l$1([0,0,0,0]),this.defaultLabel=null,this.holePercentage=0,this.othersCategory=new i,this.legendOptions=null,this.outline=null,this.size=12,this.type="pie-chart";}getSymbol(){return new y$2({size:this.size?this.size/2+(this.outline?.width||0):0})}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return [this.getSymbol(),this.backgroundFillSymbol]}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce(((t,e)=>t+e.getAttributeHash()),"")}getMeshHash(){return this.getSymbols().reduce(((t,e)=>t+JSON.stringify(e)),"")}async collectRequiredFields(t,e){await this.collectVVRequiredFields(t,e);for(const o of this.attributes)o.valueExpression&&await b$2(t,e,o.valueExpression),o.field&&t.add(o.field);}};e$1([d({type:[a$1],json:{write:!0}})],b.prototype,"attributes",void 0),e$1([d({type:S$1,json:{default:null,write:!0}})],b.prototype,"backgroundFillSymbol",void 0),e$1([d({type:l$1,json:{write:!0}})],b.prototype,"defaultColor",void 0),e$1([d({type:String,json:{write:!0}})],b.prototype,"defaultLabel",void 0),e$1([d({type:Number,range:{min:0,max:1},json:{write:!0}})],b.prototype,"holePercentage",void 0),e$1([d({type:i,json:{write:!0}})],b.prototype,"othersCategory",void 0),e$1([d({type:p$2,json:{write:!0}})],b.prototype,"legendOptions",void 0),e$1([d({type:m$2,json:{default:null,write:!0}})],b.prototype,"outline",void 0),e$1([d({type:Number,cast:o$2,json:{write:!0}})],b.prototype,"size",void 0),e$1([r$1({pieChart:"pie-chart"})],b.prototype,"type",void 0),b=e$1([n$3("esri.renderers.PieChartRenderer")],b);const f=b;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var c;let n$1=c=class extends(v$1(p$6)){constructor(e){super(e),this.description=null,this.label=null,this.symbol=null,this.type="simple";}async collectRequiredFields(e,s){await Promise.all([this.collectSymbolFields(e,s),this.collectVVRequiredFields(e,s)]);}async collectSymbolFields(e,s){await Promise.all(this.getSymbols().map((r=>r.collectRequiredFields(e,s))));}getSymbol(e,s){return this.symbol}async getSymbolAsync(e,s){return this.symbol}getSymbols(){return this.symbol?[this.symbol]:[]}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce(((e,s)=>e+s.getAttributeHash()),"")}getMeshHash(){return this.getSymbols().reduce(((e,s)=>e+JSON.stringify(s)),"")}get arcadeRequired(){return this.arcadeRequiredForVisualVariables}clone(){return new c({description:this.description,label:this.label,symbol:this.symbol&&this.symbol.clone(),visualVariables:m$1(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}};e$1([d({type:String,json:{write:!0}})],n$1.prototype,"description",void 0),e$1([d({type:String,json:{write:!0}})],n$1.prototype,"label",void 0),e$1([d(l$3)],n$1.prototype,"symbol",void 0),e$1([r$1({simple:"simple"})],n$1.prototype,"type",void 0),n$1=c=e$1([n$3("esri.renderers.SimpleRenderer")],n$1);const p$1=n$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const p={key:"type",base:p$6,typeMap:{heatmap:P,simple:p$1,"unique-value":P$1,"class-breaks":N,"dot-density":b$1,dictionary:u$1,"pie-chart":f},errorContext:"renderer"},n={key:"type",base:p$6,typeMap:{simple:p$1,"unique-value":P$1,"class-breaks":N,heatmap:P},errorContext:"renderer"};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function t(e,r){return o(e,null,r)}const s=s$3({types:p});function o(r,n,t){return r?r&&(r.styleName||r.styleUrl)&&"uniqueValue"!==r.type?(t&&t.messages&&t.messages.push(new t$1("renderer:unsupported","Only UniqueValueRenderer can be referenced from a web style, but found '"+r.type+"'",{definition:r,context:t})),null):s(r,n,t):null}

export { p as a, a as b, n, o, p$1 as p, t };
