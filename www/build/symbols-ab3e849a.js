import { e as e$4, d as d$a, n as n$e, S as S$4, m as m$f, r as r$6, V as a$f, I as s$5, y as y$5, s as s$6, t as t$a, W as t$b, X as f$7, Y as s$7, Q as N$1 } from './cast-3d5be210.js';
import { d as d$b } from './CIMSymbol-15bdb580.js';
import { r as r$5 } from './enumeration-6695a859.js';
import { l as l$j } from './JSONSupport-dce2c67b.js';
import { r as r$3, o as o$6 } from './Point-edff2a11.js';
import { l as l$k } from './Color-25ce730a.js';
import { o as o$5, e as e$5 } from './screenUtils-31d073db.js';
import { r as r$4, n as n$f } from './opacityUtils-dcd94f00.js';
import { s as s$4, o as o$7, X, K, F as F$1, e as et, N, G, n as nt } from './request-ac4d8bfb.js';
import { a as a$e } from './Symbol-573a64f6.js';
import { r as r$7, o as o$8 } from './mathUtils-559a53d9.js';
import { u as u$a } from './aaBoundingBox-b312516d.js';
import { i as i$8, c as c$j, m as m$g, p as p$l } from './persistableUrlUtils-5dcd6081.js';
import { j as j$5 } from './Collection-a38e0489.js';
import { n as n$g, t as t$c } from './collectionUtils-302901c0.js';
import { B } from './Portal-5df9f5a7.js';
import { l as l$l } from './Clonable-533c7a05.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let p$k=class extends l$j{constructor(e){super(e),this.enabled=!0,this.type=null;}writeEnabled(e,r,o){e||(r[o]=e);}};e$4([d$a({type:Boolean,json:{read:{source:"enable"},write:{target:"enable"}}})],p$k.prototype,"enabled",void 0),e$4([r$3("enabled")],p$k.prototype,"writeEnabled",null),e$4([d$a({type:["icon","object","line","path","fill","water","extrude","text"],readOnly:!0})],p$k.prototype,"type",void 0),p$k=e$4([n$e("esri.symbols.Symbol3DLayer")],p$k);const a$d=p$k;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function s$3(o,t){const n=null!=t.transparency?r$4(t.transparency):1,s=t.color;return s&&Array.isArray(s)?new l$k([s[0]||0,s[1]||0,s[2]||0,n]):null}function c$i(r,o){o.color=r.toJSON().slice(0,3);const t=n$f(r.a);0!==t&&(o.transparency=t);}const p$j={type:l$k,json:{type:[S$4],default:null,read:{source:["color","transparency"],reader:s$3},write:{target:{color:{type:[S$4]},transparency:{type:S$4}},writer:c$i}}},a$c={type:Number,cast:o$5,json:{write:!0}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let l$i=class extends l$j{constructor(o){super(o),this.color=new l$k([0,0,0,1]),this.extensionLength=0,this.size=e$5(1);}clone(){}cloneProperties(){return {color:m$f(this.color),size:this.size,extensionLength:this.extensionLength}}};e$4([d$a({type:["solid","sketch"],readOnly:!0,json:{read:!0,write:{ignoreOrigin:!0}}})],l$i.prototype,"type",void 0),e$4([d$a(p$j)],l$i.prototype,"color",void 0),e$4([d$a({...a$c,json:{write:{overridePolicy:o=>({enabled:!!o})}}})],l$i.prototype,"extensionLength",void 0),e$4([d$a(a$c)],l$i.prototype,"size",void 0),l$i=e$4([n$e("esri.symbols.edges.Edges3D")],l$i);const m$e=l$i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var t$9;let c$h=t$9=class extends m$e{constructor(r){super(r),this.type="sketch";}clone(){return new t$9(this.cloneProperties())}};e$4([r$5({sketch:"sketch"},{readOnly:!0})],c$h.prototype,"type",void 0),c$h=t$9=e$4([n$e("esri.symbols.edges.SketchEdges3D")],c$h);const p$i=c$h;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var t$8;let p$h=t$8=class extends m$e{constructor(o){super(o),this.type="solid";}clone(){return new t$8(this.cloneProperties())}};e$4([r$5({solid:"solid"},{readOnly:!0})],p$h.prototype,"type",void 0),p$h=t$8=e$4([n$e("esri.symbols.support.SolidEdges3D")],p$h);const c$g=p$h;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const t$7={types:{key:"type",base:m$e,typeMap:{solid:c$g,sketch:p$i}},json:{write:!0}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var p$g;let l$h=p$g=class extends l$j{constructor(o){super(o),this.color=null;}clone(){const o={color:r$6(this.color)?this.color.clone():null};return new p$g(o)}};e$4([d$a(p$j)],l$h.prototype,"color",void 0),l$h=p$g=e$4([n$e("esri.symbols.support.Symbol3DMaterial")],l$h);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var l$g;let c$f=l$g=class extends a$d{constructor(e){super(e),this.type="extrude",this.size=1,this.material=null,this.castShadows=!0,this.edges=null;}clone(){return new l$g({edges:this.edges&&this.edges.clone(),enabled:this.enabled,material:r$6(this.material)?this.material.clone():null,castShadows:this.castShadows,size:this.size})}};e$4([r$5({Extrude:"extrude"},{readOnly:!0})],c$f.prototype,"type",void 0),e$4([d$a({type:Number,json:{write:{enabled:!0,isRequired:!0}},nonNullable:!0})],c$f.prototype,"size",void 0),e$4([d$a({type:l$h,json:{write:!0}})],c$f.prototype,"material",void 0),e$4([d$a({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],c$f.prototype,"castShadows",void 0),e$4([d$a(t$7)],c$f.prototype,"edges",void 0),c$f=l$g=e$4([n$e("esri.symbols.ExtrudeSymbol3DLayer")],c$f);const m$d=c$f;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let i$7=class extends a$e{constructor(r){super(r),this.type="simple-line",this.width=.75;}hash(){return `${this.type}.${this.width}`}};e$4([r$5({esriSLS:"simple-line"},{readOnly:!0})],i$7.prototype,"type",void 0),e$4([d$a({type:Number,cast:o$5,json:{write:!0}})],i$7.prototype,"width",void 0),i$7=e$4([n$e("esri.symbols.LineSymbol")],i$7);const c$e=i$7;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const e$3=["begin","end","begin-end"],n$d=["arrow","circle","square","diamond","cross","x"];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var n$c;let m$c=n$c=class extends l$j{constructor(r){super(r),this.placement="begin-end",this.type="line-marker",this.style="arrow";}writeStyle(r,o,e,t){o[e]="web-map"===t?.origin?"arrow":r;}set color(r){this._set("color",r);}readColor(r){return r&&null!=r[0]?[r[0],r[1],r[2],r[3]/255]:r}writeColor(r,o,e,t){"web-map"===t?.origin||(o[e]=r);}clone(){return new n$c({color:m$f(this.color),placement:this.placement,style:this.style})}hash(){return `${this.placement}.${this.color?.hash()}.${this.style}`}};e$4([d$a({type:["begin","end","begin-end"],json:{write:!0}})],m$c.prototype,"placement",void 0),e$4([r$5({"line-marker":"line-marker"},{readOnly:!0}),d$a({json:{origins:{"web-map":{write:!1}}}})],m$c.prototype,"type",void 0),e$4([d$a({type:n$d})],m$c.prototype,"style",void 0),e$4([r$3("style")],m$c.prototype,"writeStyle",null),e$4([d$a({type:l$k,value:null,json:{write:{allowNull:!0}}})],m$c.prototype,"color",null),e$4([o$6("color")],m$c.prototype,"readColor",null),e$4([r$3("color")],m$c.prototype,"writeColor",null),m$c=n$c=e$4([n$e("esri.symbols.LineSymbolMarker")],m$c);const u$9=m$c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var p$f;const h$8=new s$4({esriSLSSolid:"solid",esriSLSDash:"dash",esriSLSDot:"dot",esriSLSDashDot:"dash-dot",esriSLSDashDotDot:"long-dash-dot-dot",esriSLSNull:"none",esriSLSInsideFrame:"inside-frame",esriSLSShortDash:"short-dash",esriSLSShortDot:"short-dot",esriSLSShortDashDot:"short-dash-dot",esriSLSShortDashDotDot:"short-dash-dot-dot",esriSLSLongDash:"long-dash",esriSLSLongDashDot:"long-dash-dot"});let d$9=p$f=class extends c$e{constructor(...r){super(...r),this.type="simple-line",this.style="solid",this.cap="round",this.join="round",this.marker=null,this.miterLimit=2;}normalizeCtorArgs(r,o,e,s,i,n){if(r&&"string"!=typeof r)return r;const l={};return null!=r&&(l.style=r),null!=o&&(l.color=o),null!=e&&(l.width=o$5(e)),null!=s&&(l.cap=s),null!=i&&(l.join=i),null!=n&&(l.miterLimit=o$5(n)),l}clone(){return new p$f({color:m$f(this.color),style:this.style,width:this.width,cap:this.cap,join:this.join,miterLimit:this.miterLimit,marker:this.marker?.clone()})}hash(){return `${super.hash()}.${this.color?.hash()}.${this.style}.${this.cap}.${this.join}.${this.miterLimit}.${this.marker?.hash()}`}};e$4([r$5({esriSLS:"simple-line"},{readOnly:!0})],d$9.prototype,"type",void 0),e$4([d$a({type:h$8.apiValues,json:{read:h$8.read,write:h$8.write}})],d$9.prototype,"style",void 0),e$4([d$a({type:["butt","round","square"],json:{write:{overridePolicy:(r,o,e)=>({enabled:"round"!==r&&(null==e||null==e.origin)})}}})],d$9.prototype,"cap",void 0),e$4([d$a({type:["miter","round","bevel"],json:{write:{overridePolicy:(r,o,e)=>({enabled:"round"!==r&&(null==e||null==e.origin)})}}})],d$9.prototype,"join",void 0),e$4([d$a({types:{key:"type",base:null,defaultKeyValue:"line-marker",typeMap:{"line-marker":u$9}},json:{write:!0,origins:{"web-scene":{write:!1}}}})],d$9.prototype,"marker",void 0),e$4([d$a({type:Number,json:{read:!1,write:!1}})],d$9.prototype,"miterLimit",void 0),d$9=p$f=e$4([n$e("esri.symbols.SimpleLineSymbol")],d$9);const m$b=d$9;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let l$f=class extends a$e{constructor(e){super(e),this.outline=null,this.type=null;}hash(){return `${this.type}.${this.outline&&this.outline.hash()}`}};e$4([d$a({types:{key:"type",base:null,defaultKeyValue:"simple-line",typeMap:{"simple-line":m$b}},json:{default:null,write:!0}})],l$f.prototype,"outline",void 0),e$4([d$a({type:["simple-fill","picture-fill"],readOnly:!0})],l$f.prototype,"type",void 0),l$f=e$4([n$e("esri.symbols.FillSymbol")],l$f);const p$e=l$f;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let t$6=class extends l$j{constructor(r){super(r);}clone(){}};e$4([d$a({type:["style"],readOnly:!0,json:{read:!0,write:{ignoreOrigin:!0}}})],t$6.prototype,"type",void 0),t$6=e$4([n$e("esri.symbols.patterns.LinePattern3D")],t$6);const p$d=t$6;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const o$4=["dash","dash-dot","dot","long-dash","long-dash-dot","long-dash-dot-dot","none","short-dash","short-dash-dot","short-dash-dot-dot","short-dot","solid"];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var p$c;const h$7=o$7()({dash:"dash","dash-dot":"dash-dot","dash-dot-dot":"long-dash-dot-dot",dot:"dot","long-dash":"long-dash","long-dash-dot":"long-dash-dot",null:"none","short-dash":"short-dash","short-dash-dot":"short-dash-dot","short-dash-dot-dot":"short-dash-dot-dot","short-dot":"short-dot",solid:"solid"});let c$d=p$c=class extends p$d{constructor(o){super(o),this.type="style",this.style="solid";}clone(){const o={style:this.style};return new p$c(o)}};e$4([d$a({type:["style"]})],c$d.prototype,"type",void 0),e$4([r$5(h$7),d$a({type:o$4})],c$d.prototype,"style",void 0),c$d=p$c=e$4([n$e("esri.symbols.patterns.LineStylePattern3D")],c$d);const l$e=c$d;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let t$5=class extends l$j{constructor(r){super(r);}clone(){}};e$4([d$a({type:["style"],readOnly:!0,json:{read:!0,write:{ignoreOrigin:!0}}})],t$5.prototype,"type",void 0),t$5=e$4([n$e("esri.symbols.patterns.Pattern3D")],t$5);const p$b=t$5;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const a$b=["backward-diagonal","cross","diagonal-cross","forward-diagonal","horizontal","none","solid","vertical"];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var p$a;let c$c=p$a=class extends p$b{constructor(s){super(s),this.type="style",this.style="solid";}clone(){const s={style:this.style};return new p$a(s)}};e$4([d$a({type:["style"]})],c$c.prototype,"type",void 0),e$4([d$a({type:a$b,json:{read:!0,write:!0}})],c$c.prototype,"style",void 0),c$c=p$a=e$4([n$e("esri.symbols.patterns.StylePattern3D")],c$c);const a$a=c$c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const s$2={types:{key:"type",base:p$b,typeMap:{style:a$a}},json:{write:!0}},o$3={types:{key:"type",base:p$d,typeMap:{style:l$e}},json:{write:!0}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const o$2=new l$k("white"),r$2=new l$k("black"),e$2=new l$k([255,255,255,0]);function t$4(n){return 0===n.r&&0===n.g&&0===n.b}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var c$b;let l$d=c$b=class extends l$h{constructor(o){super(o),this.colorMixMode=null;}clone(){const o={color:r$6(this.color)?this.color.clone():null,colorMixMode:this.colorMixMode};return new c$b(o)}};e$4([r$5({multiply:"multiply",replace:"replace",tint:"tint"})],l$d.prototype,"colorMixMode",void 0),l$d=c$b=e$4([n$e("esri.symbols.support.Symbol3DFillMaterial")],l$d);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function t$3(r,{isPrimitive:t,width:n,depth:o,height:s}){const c=t?10:1;if(null==n&&null==s&&null==o)return [c*r[0],c*r[1],c*r[2]];const u=r$7(n,o,s);let i;for(let e=0;e<3;e++){const t=u[e];if(null!=t){i=t/r[e];break}}for(let e=0;e<3;e++)null==u[e]&&(u[e]=r[e]*i);return u}const n$b=u$a(-.5,-.5,-.5,.5,.5,.5),o$1=u$a(-.5,-.5,0,.5,.5,1),s$1=u$a(-.5,-.5,0,.5,.5,.5);function c$a(e){switch(e){case"sphere":case"cube":case"diamond":return n$b;case"cylinder":case"cone":case"inverted-cone":return o$1;case"tetrahedron":return s$1;default:return}}const u$8=["butt","square","round"],i$6=[...u$8,"none"],a$9=["miter","bevel","round"];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var m$a;let u$7=m$a=class extends l$j{constructor(r){super(r),this.color=new l$k([0,0,0,1]),this.size=e$5(1),this.pattern=null,this.patternCap="butt";}clone(){const r={color:r$6(this.color)?this.color.clone():null,size:this.size,pattern:r$6(this.pattern)?this.pattern.clone():null,patternCap:this.patternCap};return new m$a(r)}};e$4([d$a(p$j)],u$7.prototype,"color",void 0),e$4([d$a(a$c)],u$7.prototype,"size",void 0),e$4([d$a(o$3)],u$7.prototype,"pattern",void 0),e$4([d$a({type:u$8,json:{default:"butt",write:{overridePolicy(){return {enabled:r$6(this.pattern)}}}}})],u$7.prototype,"patternCap",void 0),u$7=m$a=e$4([n$e("esri.symbols.support.Symbol3DOutline")],u$7);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var d$8;let h$6=d$8=class extends a$d{constructor(t){super(t),this.type="fill",this.material=null,this.pattern=null,this.castShadows=!0,this.outline=null,this.edges=null;}clone(){const t={edges:r$6(this.edges)?this.edges.clone():null,enabled:this.enabled,material:r$6(this.material)?this.material.clone():null,pattern:r$6(this.pattern)?this.pattern.clone():null,castShadows:this.castShadows,outline:r$6(this.outline)?this.outline.clone():null};return new d$8(t)}static fromSimpleFillSymbol(t){const e=t.outline&&t.outline.style&&"inside-frame"!==t.outline.style&&"solid"!==t.outline.style?new l$e({style:t.outline.style}):null,o={size:t.outline?.width??0,color:(t.outline?.color??o$2).clone(),pattern:e};return e&&t.outline?.cap&&(o.patternCap=t.outline.cap),new d$8({material:new l$d({color:(t.color??e$2).clone()}),pattern:t.style&&"solid"!==t.style?new a$a({style:t.style}):null,outline:o})}};e$4([r$5({Fill:"fill"},{readOnly:!0})],h$6.prototype,"type",void 0),e$4([d$a({type:l$d,json:{write:!0}})],h$6.prototype,"material",void 0),e$4([d$a(s$2)],h$6.prototype,"pattern",void 0),e$4([d$a({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],h$6.prototype,"castShadows",void 0),e$4([d$a({type:u$7,json:{write:!0}})],h$6.prototype,"outline",void 0),e$4([d$a(t$7)],h$6.prototype,"edges",void 0),h$6=d$8=e$4([n$e("esri.symbols.FillSymbol3DLayer")],h$6);const f$6=h$6;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const l$c=["none","underline","line-through"],t$2=["normal","italic","oblique"],r$1=["normal","lighter","bold","bolder"],n$a={type:Number,cast:l=>{const t=a$f(l);return 0===t?1:o$8(t,.1,4)},nonNullable:!0},i$5=["left","right","center"],a$8=["baseline","top","middle","bottom"],m$9={type:i$5,nonNullable:!0},p$9={type:a$8,nonNullable:!0};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var n$9;let l$b=n$9=class extends l$j{constructor(t){super(t),this.decoration="none",this.family="sans-serif",this.size=9,this.style="normal",this.weight="normal";}castSize(t){return o$5(t)}clone(){return new n$9({decoration:this.decoration,family:this.family,size:this.size,style:this.style,weight:this.weight})}hash(){return `${this.decoration}.${this.family}.${this.size}.${this.style}.${this.weight}`}};e$4([d$a({type:l$c,json:{default:"none",write:!0}})],l$b.prototype,"decoration",void 0),e$4([d$a({type:String,json:{write:!0}})],l$b.prototype,"family",void 0),e$4([d$a({type:Number,json:{write:{overridePolicy:(t,o,e)=>({enabled:!e||!e.textSymbol3D})}}})],l$b.prototype,"size",void 0),e$4([s$5("size")],l$b.prototype,"castSize",null),e$4([d$a({type:t$2,json:{default:"normal",write:!0}})],l$b.prototype,"style",void 0),e$4([d$a({type:r$1,json:{default:"normal",write:!0}})],l$b.prototype,"weight",void 0),l$b=n$9=e$4([n$e("esri.symbols.Font")],l$b);const m$8=l$b;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var l$a;const d$7=o$7()({circle:"circle",square:"square",cross:"cross",x:"x",kite:"kite",triangle:"triangle"});let h$5=l$a=class extends l$j{constructor(r){super(r);}readHref(r,e,o){return r?i$8(r,o):e.dataURI}writeHref(r,e,o,c){r&&(X(r)?e.dataURI=r:(e.href=c$j(r,c),K(e.href)&&(e.href=F$1(e.href))));}clone(){return new l$a({href:this.href,primitive:this.primitive})}};e$4([d$a({type:String,json:{write:!0,read:{source:["href","dataURI"]}}})],h$5.prototype,"href",void 0),e$4([o$6("href")],h$5.prototype,"readHref",null),e$4([r$3("href",{href:{type:String},dataURI:{type:String}})],h$5.prototype,"writeHref",null),e$4([r$5(d$7)],h$5.prototype,"primitive",void 0),h$5=l$a=e$4([n$e("esri.symbols.support.IconSymbol3DLayerResource")],h$5);const j$4="circle";

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var e$1;let p$8=e$1=class extends y$5{constructor(){super(...arguments),this.x=0,this.y=0;}clone(){return new e$1({x:this.x,y:this.y})}};e$4([d$a({type:Number})],p$8.prototype,"x",void 0),e$4([d$a({type:Number})],p$8.prototype,"y",void 0),p$8=e$1=e$4([n$e("esri.symbols.support.Symbol3DAnchorPosition2D")],p$8);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var l$9;let a$7=l$9=class extends l$j{constructor(o){super(o),this.color=new l$k([0,0,0,1]),this.size=e$5(1);}clone(){const o={color:r$6(this.color)?this.color.clone():null,size:this.size};return new l$9(o)}};e$4([d$a(p$j)],a$7.prototype,"color",void 0),e$4([d$a(a$c)],a$7.prototype,"size",void 0),a$7=l$9=e$4([n$e("esri.symbols.support.Symbol3DIconOutline")],a$7);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var d$6;const f$5=s$6.getLogger("esri.symbols.IconSymbol3DLayer");let b$4=d$6=class extends a$d{constructor(o){super(o),this.material=null,this.resource=null,this.type="icon",this.size=12,this.anchor="center",this.anchorPosition=void 0,this.outline=void 0;}clone(){return new d$6({anchor:this.anchor,anchorPosition:this.anchorPosition&&this.anchorPosition.clone(),enabled:this.enabled,material:r$6(this.material)?this.material.clone():null,outline:r$6(this.outline)?this.outline.clone():null,resource:this.resource&&this.resource.clone(),size:this.size})}static fromSimpleMarkerSymbol(o){const t=o.color||o$2,r=j$3(o),e=o.outline&&o.outline.width>0?{size:o.outline.width,color:(o.outline.color||o$2).clone()}:null;return new d$6({size:o.size,resource:{primitive:w(o.style)},material:{color:t},outline:e,anchor:r?"relative":void 0,anchorPosition:r})}static fromPictureMarkerSymbol(o){const t=!o.color||t$4(o.color)?o$2:o.color,r=j$3(o);return new d$6({size:o.width<=o.height?o.height:o.width,resource:{href:o.url},material:{color:t.clone()},anchor:r?"relative":void 0,anchorPosition:r})}static fromCIMSymbol(o){return new d$6({resource:{href:et({mediaType:"application/json",data:JSON.stringify(o.data)})}})}};function j$3(o){const t="width"in o?o.width:o.size,r="height"in o?o.height:o.size,e=v$1(o.xoffset),i=v$1(o.yoffset);return (e||i)&&t&&r?{x:-e/t,y:i/r}:null}function v$1(o){return isFinite(o)?o:0}e$4([d$a({type:l$h,json:{write:!0}})],b$4.prototype,"material",void 0),e$4([d$a({type:h$5,json:{write:!0}})],b$4.prototype,"resource",void 0),e$4([r$5({Icon:"icon"},{readOnly:!0})],b$4.prototype,"type",void 0),e$4([d$a(a$c)],b$4.prototype,"size",void 0),e$4([r$5({center:"center",left:"left",right:"right",top:"top",bottom:"bottom",topLeft:"top-left",topRight:"top-right",bottomLeft:"bottom-left",bottomRight:"bottom-right",relative:"relative"}),d$a({json:{default:"center"}})],b$4.prototype,"anchor",void 0),e$4([d$a({type:p$8,json:{type:[Number],read:{reader:o=>new p$8({x:o[0],y:o[1]})},write:{writer:(o,t)=>{t.anchorPosition=[o.x,o.y];},overridePolicy(){return {enabled:"relative"===this.anchor}}}}})],b$4.prototype,"anchorPosition",void 0),e$4([d$a({type:a$7,json:{write:!0}})],b$4.prototype,"outline",void 0),b$4=d$6=e$4([n$e("esri.symbols.IconSymbol3DLayer")],b$4);const g$3={circle:"circle",cross:"cross",diamond:"kite",square:"square",x:"x",triangle:"triangle",path:null};function w(o){const t=g$3[o];return t||(f$5.warn(`${o} cannot be mapped to Icon symbol. Fallback to "circle"`),"circle")}const S$3=b$4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let n$8=class extends(l$l(l$j)){constructor(o){super(o),this.type="style",this.placement="begin-end",this.style="arrow",this.color=null;}equals(o){return r$6(o)&&o.placement===this.placement&&o.style===this.style&&(t$a(this.color)&&t$a(o.color)||r$6(this.color)&&r$6(o.color)&&this.color.toJSON()===o.color.toJSON())}};e$4([d$a({type:["style"],readOnly:!0,json:{read:!0,write:{ignoreOrigin:!0}}})],n$8.prototype,"type",void 0),e$4([d$a({type:e$3,json:{default:"begin-end",write:!0}})],n$8.prototype,"placement",void 0),e$4([d$a({type:n$d,json:{default:"arrow",write:!0}})],n$8.prototype,"style",void 0),e$4([d$a({type:l$k,json:{type:[S$4],default:null,write:!0}})],n$8.prototype,"color",void 0),n$8=e$4([n$e("esri.symbols.LineStyleMarker3D")],n$8);const y$4=n$8;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var d$5;let h$4=d$5=class extends a$d{constructor(t){super(t),this.material=null,this.type="line",this.join="miter",this.cap="butt",this.size=e$5(1),this.pattern=null,this.marker=null;}clone(){const t={enabled:this.enabled,material:r$6(this.material)?this.material.clone():null,size:this.size,join:this.join,cap:this.cap,pattern:r$6(this.pattern)?this.pattern.clone():null,marker:r$6(this.marker)?this.marker.clone():null};return new d$5(t)}static fromSimpleLineSymbol(t){const r={enabled:!0,size:t.width??e$5(1),cap:t.cap||"butt",join:t.join||"miter",pattern:t.style&&"inside-frame"!==t.style?new l$e({style:t.style}):null,material:new l$h({color:(t.color||o$2).clone()}),marker:t.marker?new y$4({placement:t.marker.placement,style:t.marker.style,color:t.marker.color?.clone()??null}):null};return new d$5(r)}};e$4([d$a({type:l$h,json:{write:!0}})],h$4.prototype,"material",void 0),e$4([r$5({Line:"line"},{readOnly:!0})],h$4.prototype,"type",void 0),e$4([d$a({type:a$9,json:{write:!0,default:"miter"}})],h$4.prototype,"join",void 0),e$4([d$a({type:u$8,json:{write:!0,default:"butt"}})],h$4.prototype,"cap",void 0),e$4([d$a(a$c)],h$4.prototype,"size",void 0),e$4([d$a(o$3)],h$4.prototype,"pattern",void 0),e$4([d$a({types:{key:"type",base:y$4,typeMap:{style:y$4}},json:{write:!0}})],h$4.prototype,"marker",void 0),h$4=d$5=e$4([n$e("esri.symbols.LineSymbol3DLayer")],h$4);const f$4=h$4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var n$7;const a$6=o$7()({sphere:"sphere",cylinder:"cylinder",cube:"cube",cone:"cone",diamond:"diamond",tetrahedron:"tetrahedron",invertedCone:"inverted-cone"});let m$7=n$7=class extends l$j{clone(){return new n$7({href:this.href,primitive:this.primitive})}};e$4([d$a({type:String,json:{read:m$g,write:p$l}})],m$7.prototype,"href",void 0),e$4([r$5(a$6)],m$7.prototype,"primitive",void 0),m$7=n$7=e$4([n$e("esri.symbols.support.ObjectSymbol3DLayerResource")],m$7);const d$4="sphere";

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var e;let p$7=e=class extends y$5{constructor(){super(...arguments),this.x=0,this.y=0,this.z=0;}clone(){return new e({x:this.x,y:this.y,z:this.z})}};e$4([d$a({type:Number})],p$7.prototype,"x",void 0),e$4([d$a({type:Number})],p$7.prototype,"y",void 0),e$4([d$a({type:Number})],p$7.prototype,"z",void 0),p$7=e=e$4([n$e("esri.symbols.support.Symbol3DAnchorPosition3D")],p$7);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var n$6;let c$9=n$6=class extends a$d{constructor(o){super(o),this.material=null,this.castShadows=!0,this.resource=null,this.type="object",this.width=void 0,this.height=void 0,this.depth=void 0,this.anchor=void 0,this.anchorPosition=void 0,this.heading=void 0,this.tilt=void 0,this.roll=void 0;}clone(){return new n$6({heading:this.heading,tilt:this.tilt,roll:this.roll,anchor:this.anchor,anchorPosition:this.anchorPosition&&this.anchorPosition.clone(),depth:this.depth,enabled:this.enabled,height:this.height,material:r$6(this.material)?this.material.clone():null,castShadows:this.castShadows,resource:this.resource&&this.resource.clone(),width:this.width})}get isPrimitive(){return !this.resource||"string"!=typeof this.resource.href}};e$4([d$a({type:l$h,json:{write:!0}})],c$9.prototype,"material",void 0),e$4([d$a({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],c$9.prototype,"castShadows",void 0),e$4([d$a({type:m$7,json:{write:!0}})],c$9.prototype,"resource",void 0),e$4([r$5({Object:"object"},{readOnly:!0})],c$9.prototype,"type",void 0),e$4([d$a({type:Number,json:{write:!0}})],c$9.prototype,"width",void 0),e$4([d$a({type:Number,json:{write:!0}})],c$9.prototype,"height",void 0),e$4([d$a({type:Number,json:{write:!0}})],c$9.prototype,"depth",void 0),e$4([r$5({center:"center",top:"top",bottom:"bottom",origin:"origin",relative:"relative"}),d$a({json:{default:"origin"}})],c$9.prototype,"anchor",void 0),e$4([d$a({type:p$7,json:{type:[Number],read:{reader:o=>new p$7({x:o[0],y:o[1],z:o[2]})},write:{writer:(o,t)=>{t.anchorPosition=[o.x,o.y,o.z];},overridePolicy(){return {enabled:"relative"===this.anchor}}}}})],c$9.prototype,"anchorPosition",void 0),e$4([d$a({type:Number,json:{write:!0}})],c$9.prototype,"heading",void 0),e$4([d$a({type:Number,json:{write:!0}})],c$9.prototype,"tilt",void 0),e$4([d$a({type:Number,json:{write:!0}})],c$9.prototype,"roll",void 0),e$4([d$a({readOnly:!0})],c$9.prototype,"isPrimitive",null),c$9=n$6=e$4([n$e("esri.symbols.ObjectSymbol3DLayer")],c$9);const l$8=c$9;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var n$5;let d$3=n$5=class extends a$d{constructor(t){super(t),this.material=null,this.castShadows=!0,this.type="path",this.profile="circle",this.join="miter",this.cap="butt",this.width=void 0,this.height=void 0,this.anchor="center",this.profileRotation="all";}readWidth(t,e){return null!=t?t:null==e.height&&null!=e.size?e.size:void 0}readHeight(t,e){return null!=t?t:null==e.width&&null!=e.size?e.size:void 0}clone(){return new n$5({enabled:this.enabled,material:r$6(this.material)?this.material.clone():null,castShadows:this.castShadows,profile:this.profile,join:this.join,cap:this.cap,width:this.width,height:this.height,profileRotation:this.profileRotation,anchor:this.anchor})}};e$4([d$a({type:l$h,json:{write:!0}})],d$3.prototype,"material",void 0),e$4([d$a({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],d$3.prototype,"castShadows",void 0),e$4([r$5({Path:"path"},{readOnly:!0})],d$3.prototype,"type",void 0),e$4([d$a({type:["circle","quad"],json:{write:!0,default:"circle"}})],d$3.prototype,"profile",void 0),e$4([d$a({type:a$9,json:{write:!0,default:"miter"}})],d$3.prototype,"join",void 0),e$4([d$a({type:i$6,json:{write:!0,default:"butt"}})],d$3.prototype,"cap",void 0),e$4([d$a({type:Number,json:{write:{enabled:!0,target:{width:{type:Number},size:{type:Number}}}}})],d$3.prototype,"width",void 0),e$4([o$6("width",["width","size","height"])],d$3.prototype,"readWidth",null),e$4([d$a({type:Number,json:{write:!0}})],d$3.prototype,"height",void 0),e$4([o$6("height",["height","size","width"])],d$3.prototype,"readHeight",null),e$4([d$a({type:["center","bottom","top"],json:{write:!0,default:"center"}})],d$3.prototype,"anchor",void 0),e$4([d$a({type:["heading","all"],json:{write:!0,default:"all"}})],d$3.prototype,"profileRotation",void 0),d$3=n$5=e$4([n$e("esri.symbols.PathSymbol3DLayer")],d$3);const c$8=d$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var m$6;let l$7=m$6=class extends l$j{constructor(){super(...arguments),this.color=new l$k([0,0,0,1]),this.size=0;}clone(){const o={color:m$f(this.color),size:this.size};return new m$6(o)}};e$4([d$a(p$j)],l$7.prototype,"color",void 0),e$4([d$a(a$c)],l$7.prototype,"size",void 0),l$7=m$6=e$4([n$e("esri.symbols.support.Symbol3DHalo")],l$7);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let c$7=class extends(l$l(l$j)){constructor(o){super(o),this.color=null;}};e$4([d$a(p$j)],c$7.prototype,"color",void 0),c$7=e$4([n$e("esri.symbols.support.Symbol3DTextBackground")],c$7);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var g$2;let d$2=g$2=class extends a$d{constructor(t){super(t),this._userSize=void 0,this.halo=null,this.horizontalAlignment="center",this.lineHeight=1,this.material=null,this.background=null,this.text=null,this.type="text",this.verticalAlignment="baseline";}get font(){return this._get("font")||null}set font(t){r$6(t)&&r$6(this._userSize)&&(t.size=this._userSize),this._set("font",t);}writeFont(t,o,e,r){const i={...r,textSymbol3D:!0};o.font=t.write({},i),delete o.font.size;}get size(){return r$6(this._userSize)?this._userSize:r$6(this.font)&&null!=this.font.size?this.font.size:9}set size(t){this._userSize=t,r$6(this.font)&&(this.font.size=this._userSize),this.notifyChange("size");}clone(){const t=new g$2({enabled:this.enabled,font:this.font&&m$f(this.font),halo:this.halo&&m$f(this.halo),horizontalAlignment:this.horizontalAlignment,lineHeight:this.lineHeight,material:r$6(this.material)?this.material.clone():null,text:this.text,verticalAlignment:this.verticalAlignment,background:m$f(this.background)});return t._userSize=this._userSize,t}static fromTextSymbol(t){return new g$2({font:r$6(t.font)?t.font.clone():new m$8,halo:z(t.haloColor,t.haloSize),horizontalAlignment:t.horizontalAlignment,lineHeight:t.lineHeight,material:t.color?new l$h({color:t.color.clone()}):null,text:t.text,verticalAlignment:t.verticalAlignment,background:t.backgroundColor?new c$7({color:t.backgroundColor.clone()}):null})}};function z(t,e){return t&&e>0?new l$7({color:m$f(t),size:e}):null}e$4([d$a({type:m$8,json:{write:!0}})],d$2.prototype,"font",null),e$4([r$3("font")],d$2.prototype,"writeFont",null),e$4([d$a({type:l$7,json:{write:!0}})],d$2.prototype,"halo",void 0),e$4([d$a({...m$9,json:{default:"center",write:!0}})],d$2.prototype,"horizontalAlignment",void 0),e$4([d$a({...n$a,json:{default:1,write:!0}})],d$2.prototype,"lineHeight",void 0),e$4([d$a({type:l$h,json:{write:!0}})],d$2.prototype,"material",void 0),e$4([d$a({type:c$7,json:{write:!0}})],d$2.prototype,"background",void 0),e$4([d$a(a$c)],d$2.prototype,"size",null),e$4([d$a({type:String,json:{write:!0}})],d$2.prototype,"text",void 0),e$4([r$5({Text:"text"},{readOnly:!0})],d$2.prototype,"type",void 0),e$4([d$a({...p$9,json:{default:"baseline",write:!0}})],d$2.prototype,"verticalAlignment",void 0),d$2=g$2=e$4([n$e("esri.symbols.TextSymbol3DLayer")],d$2);const j$2=d$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var l$6;let c$6=l$6=class extends a$d{constructor(e){super(e),this.color=m$5.clone(),this.type="water",this.waterbodySize="medium",this.waveDirection=null,this.waveStrength="moderate";}clone(){return new l$6({color:m$f(this.color),waterbodySize:this.waterbodySize,waveDirection:this.waveDirection,waveStrength:this.waveStrength})}};e$4([d$a({type:l$k,nonNullable:!0,json:{type:[S$4],write:(e,r,t)=>r[t]=e.toArray(l$k.AlphaMode.UNLESS_OPAQUE),default:()=>m$5.clone(),defaultEquals:e=>e.toCss(!0)===m$5.toCss(!0)}})],c$6.prototype,"color",void 0),e$4([r$5({Water:"water"},{readOnly:!0})],c$6.prototype,"type",void 0),e$4([d$a({type:["small","medium","large"],json:{write:!0,default:"medium"}})],c$6.prototype,"waterbodySize",void 0),e$4([d$a({type:Number,json:{write:!0,default:null}})],c$6.prototype,"waveDirection",void 0),e$4([d$a({type:["calm","rippled","slight","moderate"],json:{write:!0,default:"moderate"}})],c$6.prototype,"waveStrength",void 0),c$6=l$6=e$4([n$e("esri.symbols.WaterSymbol3DLayer")],c$6);const m$5=new l$k([0,119,190]),n$4=c$6;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var p$6;let a$5=p$6=class extends y$5{constructor(){super(...arguments),this.portal=null;}clone(){return new p$6({name:this.name,styleUrl:this.styleUrl,styleName:this.styleName,portal:this.portal})}};e$4([d$a({type:String})],a$5.prototype,"name",void 0),e$4([d$a({type:String})],a$5.prototype,"styleUrl",void 0),e$4([d$a({type:String})],a$5.prototype,"styleName",void 0),e$4([d$a({type:B})],a$5.prototype,"portal",void 0),a$5=p$6=e$4([n$e("esri.symbols.support.StyleOrigin")],a$5);const l$5=a$5;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var t$1;let p$5=t$1=class extends y$5{clone(){return new t$1({url:this.url})}};e$4([d$a({type:String})],p$5.prototype,"url",void 0),p$5=t$1=e$4([n$e("esri.symbols.support.Thumbnail")],p$5);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const v={icon:S$3,object:l$8,line:f$4,path:c$8,fill:f$6,extrude:m$d,text:j$2,water:n$4},C$1=j$5.ofType({base:a$d,key:"type",typeMap:v,errorContext:"symbol-layer"}),T=s$6.getLogger("esri.symbols.Symbol3D");let k$1=class extends a$e{constructor(e){super(e),this.styleOrigin=null,this.thumbnail=null,this.type=null;const t=this.__accessor__&&this.__accessor__.metadatas&&this.__accessor__.metadatas.symbolLayers,o=t&&t.type||j$5;this._set("symbolLayers",new o);}get color(){return null}set color(e){this.initialized&&T.error("Symbol3D does not support colors on the symbol level. Colors may be set on individual symbol layer materials instead.");}set symbolLayers(e){n$g(e,this._get("symbolLayers"));}readStyleOrigin(e,r,t){if(e.styleUrl&&e.name){const r=i$8(e.styleUrl,t);return new l$5({styleUrl:r,name:e.name})}if(e.styleName&&e.name)return new l$5({portal:t&&t.portal||B.getDefault(),styleName:e.styleName,name:e.name});t&&t.messages&&t.messages.push(new t$b("symbol3d:incomplete-style-origin","Style origin requires either a 'styleUrl' or 'styleName' and a 'name' property",{context:t,definition:e}));}writeStyleOrigin(e,r,t,o){if(e.styleUrl&&e.name){let t=c$j(e.styleUrl,o);K(t)&&(t=F$1(t)),r.styleOrigin={styleUrl:t,name:e.name};}else e.styleName&&e.name&&(e.portal&&o&&o.portal&&!N(e.portal.restUrl,o.portal.restUrl)?o&&o.messages&&o.messages.push(new t$b("symbol:cross-portal","The symbol style origin cannot be persisted because it refers to an item on a different portal than the one being saved to.",{symbol:this})):r.styleOrigin={styleName:e.styleName,name:e.name});}normalizeCtorArgs(e){return e instanceof a$d||e&&v[e.type]?{symbolLayers:[e]}:Array.isArray(e)?{symbolLayers:e}:e}};e$4([d$a({json:{read:!1,write:!1}})],k$1.prototype,"color",null),e$4([d$a({type:C$1,nonNullable:!0,json:{write:!0}}),s$5(t$c)],k$1.prototype,"symbolLayers",null),e$4([d$a({type:l$5})],k$1.prototype,"styleOrigin",void 0),e$4([o$6("styleOrigin")],k$1.prototype,"readStyleOrigin",null),e$4([r$3("styleOrigin",{"styleOrigin.styleUrl":{type:String},"styleOrigin.styleName":{type:String},"styleOrigin.name":{type:String}})],k$1.prototype,"writeStyleOrigin",null),e$4([d$a({type:p$5,json:{read:!1}})],k$1.prototype,"thumbnail",void 0),e$4([d$a({type:["point-3d","line-3d","polygon-3d","mesh-3d","label-3d"],readOnly:!0})],k$1.prototype,"type",void 0),k$1=e$4([n$e("esri.symbols.Symbol3D")],k$1);const A=k$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let t=class extends l$j{constructor(r){super(r),this.visible=!0;}clone(){}};e$4([d$a({type:["line"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],t.prototype,"type",void 0),e$4([d$a({readOnly:!0})],t.prototype,"visible",void 0),t=e$4([n$e("esri.symbols.callouts.Callout3D")],t);const p$4=t;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var l$4;let a$4=l$4=class extends l$j{constructor(){super(...arguments),this.color=new l$k("white");}clone(){return new l$4({color:m$f(this.color)})}};e$4([d$a(p$j)],a$4.prototype,"color",void 0),a$4=l$4=e$4([n$e("esri.symbols.callouts.LineCallout3DBorder")],a$4);const i$4=a$4,m$4=Object.freeze(Object.defineProperty({__proto__:null,default:i$4},Symbol.toStringTag,{value:"Module"}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var u$6;let d$1=u$6=class extends p$4{constructor(o){super(o),this.type="line",this.color=new l$k([0,0,0,1]),this.size=e$5(1),this.border=null;}get visible(){return this.size>0&&r$6(this.color)&&this.color.a>0}clone(){return new u$6({color:m$f(this.color),size:this.size,border:m$f(this.border)})}};e$4([r$5({line:"line"},{readOnly:!0})],d$1.prototype,"type",void 0),e$4([d$a(p$j)],d$1.prototype,"color",void 0),e$4([d$a(a$c)],d$1.prototype,"size",void 0),e$4([d$a({type:i$4,json:{write:!0}})],d$1.prototype,"border",void 0),e$4([d$a({readOnly:!0})],d$1.prototype,"visible",null),d$1=u$6=e$4([n$e("esri.symbols.callouts.LineCallout3D")],d$1);const y$3=d$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function n$3(t){if(!t)return !1;const e=t.verticalOffset;return !!e&&!(e.screenLength<=0||e.maxWorldLength<=0)}function r(t){if(!t)return !1;if(!t.supportsCallout||!t.supportsCallout())return !1;const e=t.callout;return !!e&&(!!e.visible&&!!n$3(t))}function o(t){return "point-3d"===t.type||"label-3d"===t.type}function i$3(t){return "center"===t.horizontalAlignment}const l$3={types:{key:"type",base:p$4,typeMap:{line:y$3}},json:{write:!0}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var p$3;let i$2=p$3=class extends l$j{constructor(){super(...arguments),this.screenLength=0,this.minWorldLength=0;}clone(){return new p$3({screenLength:this.screenLength,minWorldLength:this.minWorldLength,maxWorldLength:this.maxWorldLength})}};e$4([d$a(a$c)],i$2.prototype,"screenLength",void 0),e$4([d$a({type:Number,json:{write:!0,default:0}})],i$2.prototype,"minWorldLength",void 0),e$4([d$a({type:Number,json:{write:!0}})],i$2.prototype,"maxWorldLength",void 0),i$2=p$3=e$4([n$e("esri.symbols.support.Symbol3DVerticalOffset")],i$2);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var n$2;const u$5=j$5.ofType({base:null,key:"type",typeMap:{text:j$2}});let f$3=n$2=class extends A{constructor(t){super(t),this.verticalOffset=null,this.callout=null,this.styleOrigin=null,this.symbolLayers=new u$5,this.type="label-3d";}supportsCallout(){return !0}hasVisibleCallout(){return r(this)}hasVisibleVerticalOffset(){return n$3(this)}clone(){return new n$2({styleOrigin:m$f(this.styleOrigin),symbolLayers:m$f(this.symbolLayers),thumbnail:m$f(this.thumbnail),callout:m$f(this.callout),verticalOffset:m$f(this.verticalOffset)})}static fromTextSymbol(t){return new n$2({symbolLayers:[j$2.fromTextSymbol(t)]})}};e$4([d$a({type:i$2,json:{write:!0}})],f$3.prototype,"verticalOffset",void 0),e$4([d$a(l$3)],f$3.prototype,"callout",void 0),e$4([d$a({json:{read:!1,write:!1}})],f$3.prototype,"styleOrigin",void 0),e$4([d$a({type:u$5})],f$3.prototype,"symbolLayers",void 0),e$4([r$5({LabelSymbol3D:"label-3d"},{readOnly:!0})],f$3.prototype,"type",void 0),f$3=n$2=e$4([n$e("esri.symbols.LabelSymbol3D")],f$3);const b$3=f$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var l$2;const a$3=j$5.ofType({base:null,key:"type",typeMap:{line:f$4,path:c$8}}),n$1=j$5.ofType({base:null,key:"type",typeMap:{line:f$4,path:c$8}});let c$5=l$2=class extends A{constructor(o){super(o),this.symbolLayers=new a$3,this.type="line-3d";}clone(){return new l$2({styleOrigin:m$f(this.styleOrigin),symbolLayers:m$f(this.symbolLayers),thumbnail:m$f(this.thumbnail)})}static fromSimpleLineSymbol(o){return new l$2({symbolLayers:[f$4.fromSimpleLineSymbol(o)]})}};e$4([d$a({type:a$3,json:{type:n$1}})],c$5.prototype,"symbolLayers",void 0),e$4([r$5({LineSymbol3D:"line-3d"},{readOnly:!0})],c$5.prototype,"type",void 0),c$5=l$2=e$4([n$e("esri.symbols.LineSymbol3D")],c$5);const b$2=c$5;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let p$2=class extends a$e{constructor(t){super(t),this.angle=0,this.type=null,this.xoffset=0,this.yoffset=0,this.size=9;}hash(){return `${this.type}.${this.angle}.${this.size}.${this.xoffset}.${this.yoffset}`}};e$4([d$a({type:Number,json:{read:t=>t&&-1*t,write:(t,e)=>e.angle=t&&-1*t}})],p$2.prototype,"angle",void 0),e$4([d$a({type:["simple-marker","picture-marker"],readOnly:!0})],p$2.prototype,"type",void 0),e$4([d$a({type:Number,cast:o$5,json:{write:!0}})],p$2.prototype,"xoffset",void 0),e$4([d$a({type:Number,cast:o$5,json:{write:!0}})],p$2.prototype,"yoffset",void 0),e$4([d$a({type:Number,cast:t=>"auto"===t?t:o$5(t),json:{write:!0}})],p$2.prototype,"size",void 0),p$2=e$4([n$e("esri.symbols.MarkerSymbol")],p$2);const i$1=p$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var i;const y$2=j$5.ofType({base:null,key:"type",typeMap:{fill:f$6}});let c$4=i=class extends A{constructor(o){super(o),this.symbolLayers=new y$2,this.type="mesh-3d";}clone(){return new i({styleOrigin:m$f(this.styleOrigin),symbolLayers:m$f(this.symbolLayers),thumbnail:m$f(this.thumbnail)})}};e$4([d$a({type:y$2})],c$4.prototype,"symbolLayers",void 0),e$4([r$5({MeshSymbol3D:"mesh-3d"},{readOnly:!0})],c$4.prototype,"type",void 0),c$4=i=e$4([n$e("esri.symbols.MeshSymbol3D")],c$4);const a$2=c$4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function s(a,r,t){return r.imageData?et({mediaType:r.contentType||"image/png",isBase64:!0,data:r.imageData}):l$1(r.url,t)}function l$1(e,t){return p$1(t)&&!K(e)&&t.layer.parsedUrl?G(t.layer.parsedUrl.path,"images",e):i$8(e,t)}function u$4(e,a,r,n){if(X(e)){const t=nt(e);a.contentType=t.mediaType,a.imageData=t.data,r&&r.imageData===a.imageData&&r.url&&p$l(r.url,a,"url",n);}else p$l(e,a,"url",n);}const m$3={json:{read:{source:["imageData","url"],reader:s},write:{writer(e,a,r,t){u$4(e,a,this.source,t);}}}},c$3={readOnly:!0,json:{read:{source:["imageData","url"],reader(e,a,r){const t={};return a.imageData&&(t.imageData=a.imageData),a.contentType&&(t.contentType=a.contentType),a.url&&(t.url=l$1(a.url,r)),t}}}};function p$1(e){return e&&("service"===e.origin||"portal-item"===e.origin)&&e.layer&&("feature"===e.layer.type||"stream"===e.layer.type)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var c$2;let u$3=c$2=class extends p$e{constructor(...t){super(...t),this.type="picture-fill",this.url=null,this.xscale=1,this.yscale=1,this.width=12,this.height=12,this.xoffset=0,this.yoffset=0,this.source=null;}normalizeCtorArgs(t,s,e,r){if(t&&"string"!=typeof t&&null==t.imageData)return t;const i={};return t&&(i.url=t),s&&(i.outline=s),null!=e&&(i.width=o$5(e)),null!=r&&(i.height=o$5(r)),i}clone(){const t=new c$2({color:m$f(this.color),height:this.height,outline:this.outline&&this.outline.clone(),url:this.url,width:this.width,xoffset:this.xoffset,xscale:this.xscale,yoffset:this.yoffset,yscale:this.yscale});return t._set("source",m$f(this.source)),t}hash(){return `${super.hash()}.${this.color?.hash()}.${this.height}.${this.url}.${this.width}.${this.xoffset}.${this.xscale}.${this.yoffset}.${this.yscale}`}};e$4([r$5({esriPFS:"picture-fill"},{readOnly:!0})],u$3.prototype,"type",void 0),e$4([d$a(m$3)],u$3.prototype,"url",void 0),e$4([d$a({type:Number,json:{write:!0}})],u$3.prototype,"xscale",void 0),e$4([d$a({type:Number,json:{write:!0}})],u$3.prototype,"yscale",void 0),e$4([d$a({type:Number,cast:o$5,json:{write:!0}})],u$3.prototype,"width",void 0),e$4([d$a({type:Number,cast:o$5,json:{write:!0}})],u$3.prototype,"height",void 0),e$4([d$a({type:Number,cast:o$5,json:{write:!0}})],u$3.prototype,"xoffset",void 0),e$4([d$a({type:Number,cast:o$5,json:{write:!0}})],u$3.prototype,"yoffset",void 0),e$4([d$a(c$3)],u$3.prototype,"source",void 0),u$3=c$2=e$4([n$e("esri.symbols.PictureFillSymbol")],u$3);const a$1=u$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var l;let a=l=class extends i$1{constructor(...r){super(...r),this.color=null,this.type="picture-marker",this.url=null,this.source=null,this.height=12,this.width=12,this.size=null;}normalizeCtorArgs(r,t,o){if(r&&"string"!=typeof r&&null==r.imageData)return r;const s={};return r&&(s.url=r),null!=t&&(s.width=o$5(t)),null!=o&&(s.height=o$5(o)),s}readHeight(r,t){return t.size||r}readWidth(r,t){return t.size||r}clone(){const r=new l({angle:this.angle,height:this.height,url:this.url,width:this.width,xoffset:this.xoffset,yoffset:this.yoffset});return r._set("source",m$f(this.source)),r}hash(){return `${super.hash()}.${this.height}.${this.url}.${this.width}`}};e$4([d$a({json:{write:!1}})],a.prototype,"color",void 0),e$4([r$5({esriPMS:"picture-marker"},{readOnly:!0})],a.prototype,"type",void 0),e$4([d$a(m$3)],a.prototype,"url",void 0),e$4([d$a(c$3)],a.prototype,"source",void 0),e$4([d$a({type:Number,cast:o$5,json:{write:!0}})],a.prototype,"height",void 0),e$4([o$6("height",["height","size"])],a.prototype,"readHeight",null),e$4([d$a({type:Number,cast:o$5,json:{write:!0}})],a.prototype,"width",void 0),e$4([d$a({json:{write:!1}})],a.prototype,"size",void 0),a=l=e$4([n$e("esri.symbols.PictureMarkerSymbol")],a);const n=a;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var b$1;const f$2=j$5.ofType({base:null,key:"type",typeMap:{icon:S$3,object:l$8,text:j$2}});let S$2=b$1=class extends A{constructor(t){super(t),this.verticalOffset=null,this.callout=null,this.symbolLayers=new f$2,this.type="point-3d";}supportsCallout(){if((this.symbolLayers?this.symbolLayers.length:0)<1)return !1;for(const t of this.symbolLayers.items)switch(t.type){case"icon":case"text":case"object":continue;default:return !1}return !0}hasVisibleCallout(){return r(this)}hasVisibleVerticalOffset(){return n$3(this)}clone(){return new b$1({verticalOffset:m$f(this.verticalOffset),callout:m$f(this.callout),styleOrigin:m$f(this.styleOrigin),symbolLayers:m$f(this.symbolLayers),thumbnail:m$f(this.thumbnail)})}static fromSimpleMarkerSymbol(t){return new b$1({symbolLayers:[S$3.fromSimpleMarkerSymbol(t)]})}static fromPictureMarkerSymbol(t){return new b$1({symbolLayers:[S$3.fromPictureMarkerSymbol(t)]})}static fromCIMSymbol(t){const o=t.data?.symbol?.type;if("CIMPointSymbol"!==o)return null;return t.data.symbol.callout?new b$1({symbolLayers:[S$3.fromCIMSymbol(t)],callout:{type:"line",size:.5,color:[0,0,0]},verticalOffset:{screenLength:40}}):new b$1({symbolLayers:[S$3.fromCIMSymbol(t)]})}static fromTextSymbol(t){return new b$1({symbolLayers:[j$2.fromTextSymbol(t)]})}};e$4([d$a({type:i$2,json:{write:!0}})],S$2.prototype,"verticalOffset",void 0),e$4([d$a(l$3)],S$2.prototype,"callout",void 0),e$4([d$a({type:f$2,json:{origins:{"web-scene":{write:!0}}}})],S$2.prototype,"symbolLayers",void 0),e$4([r$5({PointSymbol3D:"point-3d"},{readOnly:!0})],S$2.prototype,"type",void 0),S$2=b$1=e$4([n$e("esri.symbols.PointSymbol3D")],S$2);const h$3=S$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var L;const u$2=j$5.ofType({base:null,key:"type",typeMap:{extrude:m$d,fill:f$6,icon:S$3,line:f$4,object:l$8,text:j$2,water:n$4}});let j$1=L=class extends A{constructor(o){super(o),this.symbolLayers=new u$2,this.type="polygon-3d";}clone(){return new L({styleOrigin:m$f(this.styleOrigin),symbolLayers:m$f(this.symbolLayers),thumbnail:m$f(this.thumbnail)})}static fromJSON(o){const e=new L;if(e.read(o),2===e.symbolLayers.length&&"fill"===e.symbolLayers.getItemAt(0).type&&"line"===e.symbolLayers.getItemAt(1).type){const r=e.symbolLayers.getItemAt(0),s=e.symbolLayers.getItemAt(1);!s.enabled||o.symbolLayers&&o.symbolLayers[1]&&!1===o.symbolLayers[1].enable||(r.outline={size:s.size,color:r$6(s.material)?s.material.color:null}),e.symbolLayers.removeAt(1);}return e}static fromSimpleFillSymbol(o){return new L({symbolLayers:[f$6.fromSimpleFillSymbol(o)]})}};e$4([d$a({type:u$2,json:{write:!0}})],j$1.prototype,"symbolLayers",void 0),e$4([r$5({PolygonSymbol3D:"polygon-3d"},{readOnly:!0})],j$1.prototype,"type",void 0),j$1=L=e$4([n$e("esri.symbols.PolygonSymbol3D")],j$1);const S$1=j$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var p;const c$1=new s$4({esriSFSSolid:"solid",esriSFSNull:"none",esriSFSHorizontal:"horizontal",esriSFSVertical:"vertical",esriSFSForwardDiagonal:"forward-diagonal",esriSFSBackwardDiagonal:"backward-diagonal",esriSFSCross:"cross",esriSFSDiagonalCross:"diagonal-cross"});let m$2=p=class extends p$e{constructor(...o){super(...o),this.color=new l$k([0,0,0,.25]),this.outline=new m$b,this.type="simple-fill",this.style="solid";}normalizeCtorArgs(o,r,s){if(o&&"string"!=typeof o)return o;const e={};return o&&(e.style=o),r&&(e.outline=r),s&&(e.color=s),e}clone(){return new p({color:m$f(this.color),outline:this.outline&&this.outline.clone(),style:this.style})}hash(){return `${super.hash()}${this.style}.${this.color&&this.color.hash()}`}};e$4([d$a()],m$2.prototype,"color",void 0),e$4([d$a()],m$2.prototype,"outline",void 0),e$4([r$5({esriSFS:"simple-fill"},{readOnly:!0})],m$2.prototype,"type",void 0),e$4([d$a({type:c$1.apiValues,json:{read:c$1.read,write:c$1.write}})],m$2.prototype,"style",void 0),m$2=p=e$4([n$e("esri.symbols.SimpleFillSymbol")],m$2);const S=m$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var h$2;const m$1=new s$4({esriSMSCircle:"circle",esriSMSSquare:"square",esriSMSCross:"cross",esriSMSX:"x",esriSMSDiamond:"diamond",esriSMSTriangle:"triangle",esriSMSPath:"path"});let u$1=h$2=class extends i$1{constructor(...e){super(...e),this.color=new l$k([255,255,255,.25]),this.type="simple-marker",this.size=12,this.style="circle",this.outline=new m$b;}normalizeCtorArgs(e,o,r,t){if(e&&"string"!=typeof e)return e;const i={};return e&&(i.style=e),null!=o&&(i.size=o$5(o)),r&&(i.outline=r),t&&(i.color=t),i}writeColor(e,o){e&&"x"!==this.style&&"cross"!==this.style&&(o.color=e.toJSON()),null===e&&(o.color=null);}set path(e){this.style="path",this._set("path",e);}clone(){return new h$2({angle:this.angle,color:m$f(this.color),outline:this.outline&&this.outline.clone(),path:this.path,size:this.size,style:this.style,xoffset:this.xoffset,yoffset:this.yoffset})}hash(){return `${super.hash()}.${this.color&&this.color.hash()}.${this.path}.${this.style}.${this.outline?.hash()}`}};e$4([d$a()],u$1.prototype,"color",void 0),e$4([r$3("color")],u$1.prototype,"writeColor",null),e$4([r$5({esriSMS:"simple-marker"},{readOnly:!0})],u$1.prototype,"type",void 0),e$4([d$a()],u$1.prototype,"size",void 0),e$4([d$a({type:m$1.apiValues,json:{read:m$1.read,write:m$1.write}})],u$1.prototype,"style",void 0),e$4([d$a({type:String,json:{write:!0}})],u$1.prototype,"path",null),e$4([d$a({types:{key:"type",base:null,defaultKeyValue:"simple-line",typeMap:{"simple-line":m$b}},json:{default:null,write:!0}})],u$1.prototype,"outline",void 0),u$1=h$2=e$4([n$e("esri.symbols.SimpleMarkerSymbol")],u$1);const y$1=u$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var f$1;let g$1=f$1=class extends a$e{constructor(...t){super(...t),this.backgroundColor=null,this.borderLineColor=null,this.borderLineSize=null,this.font=new m$8,this.horizontalAlignment="center",this.kerning=!0,this.haloColor=null,this.haloSize=null,this.rightToLeft=null,this.rotated=!1,this.text="",this.type="text",this.verticalAlignment="baseline",this.xoffset=0,this.yoffset=0,this.angle=0,this.width=null,this.lineWidth=192,this.lineHeight=1;}normalizeCtorArgs(t,o,e){if(t&&"string"!=typeof t)return t;const i={};return t&&(i.text=t),o&&(i.font=o),e&&(i.color=e),i}writeLineWidth(t,o,e,i){i&&"string"!=typeof i?i.origin:o[e]=t;}castLineWidth(t){return o$5(t)}writeLineHeight(t,o,e,i){i&&"string"!=typeof i?i.origin:o[e]=t;}clone(){return new f$1({angle:this.angle,backgroundColor:m$f(this.backgroundColor),borderLineColor:m$f(this.borderLineColor),borderLineSize:this.borderLineSize,color:m$f(this.color),font:this.font&&this.font.clone(),haloColor:m$f(this.haloColor),haloSize:this.haloSize,horizontalAlignment:this.horizontalAlignment,kerning:this.kerning,lineHeight:this.lineHeight,lineWidth:this.lineWidth,rightToLeft:this.rightToLeft,rotated:this.rotated,text:this.text,verticalAlignment:this.verticalAlignment,width:this.width,xoffset:this.xoffset,yoffset:this.yoffset})}hash(){return `${this.backgroundColor&&this.backgroundColor.hash()}.${this.borderLineColor}.${this.borderLineSize}.${this.color.hash()}.${this.font&&this.font.hash()}.${this.haloColor&&this.haloColor.hash()}.${this.haloSize}.${this.horizontalAlignment}.${this.kerning}.${this.rightToLeft}.${this.rotated}.${this.text}.${this.verticalAlignment}.${this.width}.${this.xoffset}.${this.yoffset}.${this.lineHeight}.${this.lineWidth}.${this.angle}`}};e$4([d$a({type:l$k,json:{write:!0}})],g$1.prototype,"backgroundColor",void 0),e$4([d$a({type:l$k,json:{write:!0}})],g$1.prototype,"borderLineColor",void 0),e$4([d$a({type:Number,json:{write:!0}})],g$1.prototype,"borderLineSize",void 0),e$4([d$a({type:m$8,json:{write:!0}})],g$1.prototype,"font",void 0),e$4([d$a({...m$9,json:{write:!0}})],g$1.prototype,"horizontalAlignment",void 0),e$4([d$a({type:Boolean,json:{write:!0}})],g$1.prototype,"kerning",void 0),e$4([d$a({type:l$k,json:{write:!0}})],g$1.prototype,"haloColor",void 0),e$4([d$a({type:Number,cast:o$5,json:{write:!0}})],g$1.prototype,"haloSize",void 0),e$4([d$a({type:Boolean,json:{write:!0}})],g$1.prototype,"rightToLeft",void 0),e$4([d$a({type:Boolean,json:{write:!0}})],g$1.prototype,"rotated",void 0),e$4([d$a({type:String,json:{write:!0}})],g$1.prototype,"text",void 0),e$4([r$5({esriTS:"text"},{readOnly:!0})],g$1.prototype,"type",void 0),e$4([d$a({...p$9,json:{write:!0}})],g$1.prototype,"verticalAlignment",void 0),e$4([d$a({type:Number,cast:o$5,json:{write:!0}})],g$1.prototype,"xoffset",void 0),e$4([d$a({type:Number,cast:o$5,json:{write:!0}})],g$1.prototype,"yoffset",void 0),e$4([d$a({type:Number,json:{read:t=>t&&-1*t,write:(t,o)=>o.angle=t&&-1*t}})],g$1.prototype,"angle",void 0),e$4([d$a({type:Number,json:{write:!0}})],g$1.prototype,"width",void 0),e$4([d$a({type:Number})],g$1.prototype,"lineWidth",void 0),e$4([r$3("lineWidth")],g$1.prototype,"writeLineWidth",null),e$4([s$5("lineWidth")],g$1.prototype,"castLineWidth",null),e$4([d$a(n$a)],g$1.prototype,"lineHeight",void 0),e$4([r$3("lineHeight")],g$1.prototype,"writeLineHeight",null),g$1=f$1=e$4([n$e("esri.symbols.TextSymbol")],g$1);const m=g$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var y;const h$1=s$6.getLogger("esri.symbols.WebStyleSymbol");let u=y=class extends a$e{constructor(t){super(t),this.styleName=null,this.portal=null,this.styleUrl=null,this.thumbnail=null,this.name=null,this.type="web-style";}get fetchCacheKey(){const t=r$6(this.portal)?this.portal:B.getDefault(),e=t.user?t.user.username:null;return `${this.styleName}:${this.styleUrl}:${this.name}:${e}:${t.url}`}read(t,e){this.portal=e?e.portal:void 0,super.read(t,e);}clone(){return new y({name:this.name,styleUrl:this.styleUrl,styleName:this.styleName,portal:this.portal})}fetchSymbol(t){return this._fetchSymbol("webRef",t)}fetchCIMSymbol(t){return this._fetchSymbol("cimRef",t)}async _fetchSymbol(t,e){const s=r$6(e)?e.cache:null,l=s?this.fetchCacheKey:null;if(r$6(s)){const t=s.get(l);if(t)return t.clone()}const i=await f();f$7(e);const p=i.resolveWebStyleSymbol(this,{portal:this.portal},t,e);p.catch((t=>{h$1.error("#fetchSymbol()","Failed to create symbol from style",t);}));const a=await p;return "webRef"===t&&"point-3d"===a.type||"cimRef"===t&&"cim"===a.type?(r$6(s)&&s.set(l,a.clone()),a):null}};function f(){return import('./webStyleSymbolUtils-fc296d98.js')}e$4([d$a({json:{write:!1}})],u.prototype,"color",void 0),e$4([d$a({type:String,json:{write:!0}})],u.prototype,"styleName",void 0),e$4([d$a({type:B,json:{write:!1}})],u.prototype,"portal",void 0),e$4([d$a({type:String,json:{read:m$g,write:p$l}})],u.prototype,"styleUrl",void 0),e$4([d$a({type:p$5,json:{read:!1}})],u.prototype,"thumbnail",void 0),e$4([d$a({type:String,json:{write:!0}})],u.prototype,"name",void 0),e$4([r$5({styleSymbolReference:"web-style"},{readOnly:!0})],u.prototype,"type",void 0),e$4([d$a()],u.prototype,"fetchCacheKey",null),u=y=e$4([n$e("esri.symbols.WebStyleSymbol")],u);const b=u;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function d(e){return e instanceof a$e}function x(e){if(!e)return !1;switch(e.type){case"picture-fill":case"picture-marker":case"simple-fill":case"simple-line":case"simple-marker":case"text":case"cim":return !0;default:return !1}}function c(e){if(!e)return !1;switch(e.type){case"label-3d":case"line-3d":case"mesh-3d":case"point-3d":case"polygon-3d":return !0;default:return !1}}const j={base:a$e,key:"type",typeMap:{"simple-fill":S,"picture-fill":a$1,"picture-marker":n,"simple-line":m$b,"simple-marker":y$1,text:m,"label-3d":b$3,"line-3d":b$2,"mesh-3d":a$2,"point-3d":h$3,"polygon-3d":S$1,"web-style":b,cim:d$b},errorContext:"symbol"},D={base:a$e,key:"type",typeMap:{"picture-marker":n,"simple-marker":y$1,text:m,"web-style":b,cim:d$b},errorContext:"symbol"},k=s$7({types:j}),M={base:a$e,key:"type",typeMap:{"simple-fill":S,"picture-fill":a$1,"picture-marker":n,"simple-line":m$b,"simple-marker":y$1,text:m,"line-3d":b$2,"mesh-3d":a$2,"point-3d":h$3,"polygon-3d":S$1,"web-style":b,cim:d$b},errorContext:"symbol"},P={base:a$e,key:"type",typeMap:{text:m,"label-3d":b$3},errorContext:"symbol"},C={base:a$e,key:"type",typeMap:{"label-3d":b$3,"line-3d":b$2,"mesh-3d":a$2,"point-3d":h$3,"polygon-3d":S$1,"web-style":b},errorContext:"symbol"},h={base:a$e,key:"type",typeMap:{"line-3d":b$2,"mesh-3d":a$2,"point-3d":h$3,"polygon-3d":S$1,"web-style":b,cim:d$b},errorContext:"symbol"},F={base:a$e,key:"type",typeMap:{"label-3d":b$3},errorContext:"symbol"},g=N$1(j);

export { A, p$5 as B, l$5 as C, D, p$8 as E, F, a$2 as G, c$g as H, t$7 as I, M, P, S, m as a, S$1 as b, b as c, c as d, h$3 as e, b$2 as f, g, h, b$3 as i, j, k, l$h as l, m$b as m, n, d$4 as o, p$j as p, i$3 as q, o as r, j$4 as s, c$a as t, t$3 as u, S$3 as v, j$2 as w, x, y$1 as y, f$6 as z };
