import { e as e$4, d as d$2, n as n$5, m as m$2, S as S$2, y, s as s$7, Q as N, U as k, I as s$8 } from './cast-3d5be210.js';
import { j } from './Collection-a38e0489.js';
import { l as l$5 } from './JSONSupport-dce2c67b.js';
import { r as r$2, o as o$2 } from './Point-edff2a11.js';
import { g, b as b$1 } from './fieldUtils-240a3b99.js';
import { o as o$1, s as s$6 } from './request-ac4d8bfb.js';
import { r as r$1 } from './enumeration-6695a859.js';
import { L as L$1, S as S$1, m as m$3, u as u$2 } from './number-c5a37d3e.js';
import { c as c$9, a as a$a, b as a$b } from './ActionToggle-a5849e6f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let e$3=class extends l$5{constructor(r){super(r),this.type=null;}};e$4([d$2({type:["attachments","custom","fields","media","text","expression"],readOnly:!0,json:{read:!1,write:!0}})],e$3.prototype,"type",void 0),e$3=e$4([n$5("esri.popup.content.Content")],e$3);const p$i=e$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var s$5;let p$h=s$5=class extends p$i{constructor(t){super(t),this.description=null,this.displayType="auto",this.title=null,this.type="attachments";}clone(){return new s$5({description:this.description,displayType:this.displayType,title:this.title})}};e$4([d$2({type:String,json:{write:!0}})],p$h.prototype,"description",void 0),e$4([d$2({type:["auto","preview","list"],json:{write:!0}})],p$h.prototype,"displayType",void 0),e$4([d$2({type:String,json:{write:!0}})],p$h.prototype,"title",void 0),e$4([d$2({type:["attachments"],readOnly:!0,json:{read:!1,write:!0}})],p$h.prototype,"type",void 0),p$h=s$5=e$4([n$5("esri.popup.content.AttachmentsContent")],p$h);const i$9=p$h;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var p$g;let c$8=p$g=class extends p$i{constructor(o){super(o),this.creator=null,this.destroyer=null,this.outFields=null,this.type="custom";}clone(){return new p$g({creator:this.creator,destroyer:this.destroyer,outFields:Array.isArray(this.outFields)?m$2(this.outFields):null})}};e$4([d$2()],c$8.prototype,"creator",void 0),e$4([d$2()],c$8.prototype,"destroyer",void 0),e$4([d$2()],c$8.prototype,"outFields",void 0),e$4([d$2({type:["custom"],readOnly:!0})],c$8.prototype,"type",void 0),c$8=p$g=e$4([n$5("esri.popup.content.CustomContent")],c$8);const i$8=c$8;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var s$4;let p$f=s$4=class extends l$5{constructor(r){super(r),this.title=null,this.expression=null,this.returnType="dictionary";}clone(){return new s$4({title:this.title,expression:this.expression})}};e$4([d$2({type:String,json:{write:!0}})],p$f.prototype,"title",void 0),e$4([d$2({type:String,json:{write:!0}})],p$f.prototype,"expression",void 0),e$4([d$2({type:["dictionary"],readOnly:!0,json:{read:!1,write:!0}})],p$f.prototype,"returnType",void 0),p$f=s$4=e$4([n$5("esri.popup.ElementExpressionInfo")],p$f);const i$7=p$f;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var p$e;let n$4=p$e=class extends p$i{constructor(o){super(o),this.expressionInfo=null,this.type="expression";}clone(){return new p$e({expressionInfo:this.expressionInfo?.clone()})}};e$4([d$2({type:i$7,json:{write:!0}})],n$4.prototype,"expressionInfo",void 0),e$4([d$2({type:["expression"],readOnly:!0,json:{read:!1,write:!0}})],n$4.prototype,"type",void 0),n$4=p$e=e$4([n$5("esri.popup.content.ExpressionContent")],n$4);const i$6=n$4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const e$2={"short-date":"(datePattern: 'M/d/y', selector: 'date')","short-date-short-time":"(datePattern: 'M/d/y', timePattern: 'h:mm a', selector: 'date and time')","short-date-short-time-24":"(datePattern: 'M/d/y', timePattern: 'H:mm', selector: 'date and time')","short-date-long-time":"(datePattern: 'M/d/y', timePattern: 'h:mm:ss a', selector: 'date and time')","short-date-long-time-24":"(datePattern: 'M/d/y', timePattern: 'H:mm:ss', selector: 'date and time')","short-date-le":"(datePattern: 'd/M/y', selector: 'date')","short-date-le-short-time":"(datePattern: 'd/M/y', timePattern: 'h:mm a', selector: 'date and time')","short-date-le-short-time-24":"(datePattern: 'd/M/y', timePattern: 'H:mm', selector: 'date and time')","short-date-le-long-time":"(datePattern: 'd/M/y', timePattern: 'h:mm:ss a', selector: 'date and time')","short-date-le-long-time-24":"(datePattern: 'd/M/y', timePattern: 'H:mm:ss', selector: 'date and time')","long-month-day-year":"(datePattern: 'MMMM d, y', selector: 'date')","long-month-day-year-short-time":"(datePattern: 'MMMM d, y', timePattern: 'h:mm a', selector: 'date and time')","long-month-day-year-short-time-24":"(datePattern: 'MMMM d, y', timePattern: 'H:mm', selector: 'date and time')","long-month-day-year-long-time":"(datePattern: 'MMMM d, y', timePattern: 'h:mm:ss a', selector: 'date and time')","long-month-day-year-long-time-24":"(datePattern: 'MMMM d, y', timePattern: 'H:mm:ss', selector: 'date and time')","day-short-month-year":"(datePattern: 'd MMM y', selector: 'date')","day-short-month-year-short-time":"(datePattern: 'd MMM y', timePattern: 'h:mm a', selector: 'date and time')","day-short-month-year-short-time-24":"(datePattern: 'd MMM y', timePattern: 'H:mm', selector: 'date and time')","day-short-month-year-long-time":"(datePattern: 'd MMM y', timePattern: 'h:mm:ss a', selector: 'date and time')","day-short-month-year-long-time-24":"(datePattern: 'd MMM y', timePattern: 'H:mm:ss', selector: 'date and time')","long-date":"(datePattern: 'EEEE, MMMM d, y', selector: 'date')","long-date-short-time":"(datePattern: 'EEEE, MMMM d, y', timePattern: 'h:mm a', selector: 'date and time')","long-date-short-time-24":"(datePattern: 'EEEE, MMMM d, y', timePattern: 'H:mm', selector: 'date and time')","long-date-long-time":"(datePattern: 'EEEE, MMMM d, y', timePattern: 'h:mm:ss a', selector: 'date and time')","long-date-long-time-24":"(datePattern: 'EEEE, MMMM d, y', timePattern: 'H:mm:ss', selector: 'date and time')","long-month-year":"(datePattern: 'MMMM y', selector: 'date')","short-month-year":"(datePattern: 'MMM y', selector: 'date')",year:"(datePattern: 'y', selector: 'date')"},a$9=o$1()({shortDate:"short-date",shortDateShortTime:"short-date-short-time",shortDateShortTime24:"short-date-short-time-24",shortDateLongTime:"short-date-long-time",shortDateLongTime24:"short-date-long-time-24",shortDateLE:"short-date-le",shortDateLEShortTime:"short-date-le-short-time",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLELongTime:"short-date-le-long-time",shortDateLELongTime24:"short-date-le-long-time-24",longMonthDayYear:"long-month-day-year",longMonthDayYearShortTime:"long-month-day-year-short-time",longMonthDayYearShortTime24:"long-month-day-year-short-time-24",longMonthDayYearLongTime:"long-month-day-year-long-time",longMonthDayYearLongTime24:"long-month-day-year-long-time-24",dayShortMonthYear:"day-short-month-year",dayShortMonthYearShortTime:"day-short-month-year-short-time",dayShortMonthYearShortTime24:"day-short-month-year-short-time-24",dayShortMonthYearLongTime:"day-short-month-year-long-time",dayShortMonthYearLongTime24:"day-short-month-year-long-time-24",longDate:"long-date",longDateShortTime:"long-date-short-time",longDateShortTime24:"long-date-short-time-24",longDateLongTime:"long-date-long-time",longDateLongTime24:"long-date-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year",year:"year"}),o=a$9.toJSON.bind(a$9),r=a$9.fromJSON.bind(a$9);function n$3(t){return e$2[t]}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var d$1;let l$4=d$1=class extends l$5{constructor(t){super(t),this.dateFormat=null,this.dateTimeFormatOptions=null,this.digitSeparator=!1,this.places=null;}clone(){return new d$1({dateFormat:this.dateFormat,digitSeparator:this.digitSeparator,places:this.places})}format(t){return this.dateFormat?L$1(t,{...S$1(this.dateFormat),...this.dateTimeFormatOptions}):m$3(t,u$2(this))}formatRasterPixelValue(t){let r,o;return t.trim().includes(",")?(r=",",o=r+" ",this._formatDelimitedString(t,r,o,this)):t.trim().includes(";")?(r=";",o=r+" ",this._formatDelimitedString(t,r,o,this)):t.trim().includes(" ")?(r=o=" ",this._formatDelimitedString(t,r,o,this)):this.format(Number(t))}_formatDelimitedString(t,r,o,e){return t&&r&&o&&e?t.trim().split(r).map((t=>this.format(Number(t)))).join(o):t}};e$4([r$1(a$9)],l$4.prototype,"dateFormat",void 0),e$4([d$2({type:Object,json:{read:!1}})],l$4.prototype,"dateTimeFormatOptions",void 0),e$4([d$2({type:Boolean,json:{write:!0}})],l$4.prototype,"digitSeparator",void 0),e$4([d$2({type:S$2,json:{write:!0}})],l$4.prototype,"places",void 0),l$4=d$1=e$4([n$5("esri.popup.support.FieldInfoFormat")],l$4);const u$1=l$4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var a$8;let n$2=a$8=class extends l$5{constructor(t){super(t),this.fieldName=null,this.format=null,this.isEditable=!1,this.label=null,this.stringFieldOption="text-box",this.statisticType=null,this.tooltip=null,this.visible=!0;}clone(){return new a$8({fieldName:this.fieldName,format:this.format?m$2(this.format):null,isEditable:this.isEditable,label:this.label,stringFieldOption:this.stringFieldOption,statisticType:this.statisticType,tooltip:this.tooltip,visible:this.visible})}};e$4([d$2({type:String,json:{write:!0}})],n$2.prototype,"fieldName",void 0),e$4([d$2({type:u$1,json:{write:!0}})],n$2.prototype,"format",void 0),e$4([d$2({type:Boolean,json:{write:!0,default:!1}})],n$2.prototype,"isEditable",void 0),e$4([d$2({type:String,json:{write:!0}})],n$2.prototype,"label",void 0),e$4([r$1(new s$6({richtext:"rich-text",textarea:"text-area",textbox:"text-box"}),{default:"text-box"})],n$2.prototype,"stringFieldOption",void 0),e$4([d$2({type:["count","sum","min","max","avg","stddev","var"],json:{write:!0}})],n$2.prototype,"statisticType",void 0),e$4([d$2({type:String,json:{write:!0}})],n$2.prototype,"tooltip",void 0),e$4([d$2({type:Boolean,json:{write:!0}})],n$2.prototype,"visible",void 0),n$2=a$8=e$4([n$5("esri.popup.FieldInfo")],n$2);const c$7=n$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var n$1;let l$3=n$1=class extends p$i{constructor(t){super(t),this.attributes=null,this.description=null,this.fieldInfos=null,this.title=null,this.type="fields";}writeFieldInfos(t,o){o.fieldInfos=t&&t.map((t=>t.toJSON()));}clone(){return new n$1(m$2({attributes:this.attributes,description:this.description,fieldInfos:this.fieldInfos,title:this.title}))}};e$4([d$2({type:Object,json:{write:!0}})],l$3.prototype,"attributes",void 0),e$4([d$2({type:String,json:{write:!0}})],l$3.prototype,"description",void 0),e$4([d$2({type:[c$7]})],l$3.prototype,"fieldInfos",void 0),e$4([r$2("fieldInfos")],l$3.prototype,"writeFieldInfos",null),e$4([d$2({type:String,json:{write:!0}})],l$3.prototype,"title",void 0),e$4([d$2({type:["fields"],readOnly:!0,json:{read:!1,write:!0}})],l$3.prototype,"type",void 0),l$3=n$1=e$4([n$5("esri.popup.content.FieldsContent")],l$3);const c$6=l$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let s$3=class extends l$5{constructor(t){super(t),this.altText=null,this.caption="",this.title="",this.type=null;}};e$4([d$2({type:String,json:{write:!0}})],s$3.prototype,"altText",void 0),e$4([d$2({type:String,json:{write:!0}})],s$3.prototype,"caption",void 0),e$4([d$2({type:String,json:{write:!0}})],s$3.prototype,"title",void 0),e$4([d$2({type:["image","bar-chart","column-chart","line-chart","pie-chart"],readOnly:!0,json:{read:!1,write:!0}})],s$3.prototype,"type",void 0),s$3=e$4([n$5("esri.popup.content.mixins.MediaInfo")],s$3);const p$d=s$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var s$2;let p$c=s$2=class extends y{constructor(o){super(o),this.fieldName=null,this.tooltip=null,this.value=null;}clone(){return new s$2({fieldName:this.fieldName,tooltip:this.tooltip,value:this.value})}};e$4([d$2()],p$c.prototype,"fieldName",void 0),e$4([d$2()],p$c.prototype,"tooltip",void 0),e$4([d$2()],p$c.prototype,"value",void 0),p$c=s$2=e$4([n$5("esri.popup.content.support.ChartMediaInfoValueSeries")],p$c);const i$5=p$c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var p$b;let l$2=p$b=class extends l$5{constructor(o){super(o),this.fields=[],this.normalizeField=null,this.series=[],this.tooltipField=null;}clone(){return new p$b({fields:m$2(this.fields),normalizeField:this.normalizeField,tooltipField:this.tooltipField})}};e$4([d$2({type:[String],json:{write:!0}})],l$2.prototype,"fields",void 0),e$4([d$2({type:String,json:{write:!0}})],l$2.prototype,"normalizeField",void 0),e$4([d$2({type:[i$5],json:{read:!1}})],l$2.prototype,"series",void 0),e$4([d$2({type:String,json:{write:!0}})],l$2.prototype,"tooltipField",void 0),l$2=p$b=e$4([n$5("esri.popup.content.support.ChartMediaInfoValue")],l$2);const n=l$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let p$a=class extends p$d{constructor(r){super(r),this.type=null,this.value=null;}};e$4([d$2({type:["bar-chart","column-chart","line-chart","pie-chart"],readOnly:!0,json:{read:!1,write:!0}})],p$a.prototype,"type",void 0),e$4([d$2({type:n,json:{write:!0}})],p$a.prototype,"value",void 0),p$a=e$4([n$5("esri.popup.content.mixins.ChartMediaInfo")],p$a);const a$7=p$a;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const c$5=o$1()({barchart:"bar-chart",columnchart:"column-chart",linechart:"line-chart",piechart:"pie-chart"});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var a$6;let p$9=a$6=class extends a$7{constructor(t){super(t),this.type="bar-chart";}clone(){return new a$6({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}};e$4([d$2({type:["bar-chart"],readOnly:!0,json:{type:["barchart"],read:!1,write:c$5.write}})],p$9.prototype,"type",void 0),p$9=a$6=e$4([n$5("esri.popup.content.BarChartMediaInfo")],p$9);const i$4=p$9;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var a$5;let p$8=a$5=class extends a$7{constructor(t){super(t),this.type="column-chart";}clone(){return new a$5({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}};e$4([d$2({type:["column-chart"],readOnly:!0,json:{type:["columnchart"],read:!1,write:c$5.write}})],p$8.prototype,"type",void 0),p$8=a$5=e$4([n$5("esri.popup.content.ColumnChartMediaInfo")],p$8);const c$4=p$8;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var e$1;let p$7=e$1=class extends l$5{constructor(r){super(r),this.linkURL=null,this.sourceURL=null;}clone(){return new e$1({linkURL:this.linkURL,sourceURL:this.sourceURL})}};e$4([d$2({type:String,json:{write:!0}})],p$7.prototype,"linkURL",void 0),e$4([d$2({type:String,json:{write:!0}})],p$7.prototype,"sourceURL",void 0),p$7=e$1=e$4([n$5("esri.popup.content.support.ImageMediaInfoValue")],p$7);const c$3=p$7;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var a$4;let i$3=a$4=class extends p$d{constructor(e){super(e),this.refreshInterval=null,this.type="image",this.value=null;}clone(){return new a$4({altText:this.altText,title:this.title,caption:this.caption,refreshInterval:this.refreshInterval,value:this.value?this.value.clone():null})}};e$4([d$2({type:Number,json:{write:!0}})],i$3.prototype,"refreshInterval",void 0),e$4([d$2({type:["image"],readOnly:!0,json:{read:!1,write:!0}})],i$3.prototype,"type",void 0),e$4([d$2({type:c$3,json:{write:!0}})],i$3.prototype,"value",void 0),i$3=a$4=e$4([n$5("esri.popup.content.ImageMediaInfo")],i$3);const p$6=i$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var i$2;let a$3=i$2=class extends a$7{constructor(t){super(t),this.type="line-chart";}clone(){return new i$2({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}};e$4([d$2({type:["line-chart"],readOnly:!0,json:{type:["linechart"],read:!1,write:c$5.write}})],a$3.prototype,"type",void 0),a$3=i$2=e$4([n$5("esri.popup.content.LineChartMediaInfo")],a$3);const p$5=a$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var p$4;let i$1=p$4=class extends a$7{constructor(t){super(t),this.type="pie-chart";}clone(){return new p$4({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}};e$4([d$2({type:["pie-chart"],readOnly:!0,json:{type:["piechart"],read:!1,write:c$5.write}})],i$1.prototype,"type",void 0),i$1=p$4=e$4([n$5("esri.popup.content.PieChartMediaInfo")],i$1);const a$2=i$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const m$1={base:p$d,key:"type",defaultKeyValue:"image",typeMap:{"bar-chart":i$4,"column-chart":c$4,"line-chart":p$5,"pie-chart":a$2,image:p$6}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var l$1;let u=l$1=class extends p$i{constructor(t){super(t),this.activeMediaInfoIndex=null,this.attributes=null,this.description=null,this.mediaInfos=null,this.title=null,this.type="media";}readMediaInfos(t){return t&&t.map((t=>"image"===t.type?p$6.fromJSON(t):"barchart"===t.type?i$4.fromJSON(t):"columnchart"===t.type?c$4.fromJSON(t):"linechart"===t.type?p$5.fromJSON(t):"piechart"===t.type?a$2.fromJSON(t):void 0)).filter(Boolean)}writeMediaInfos(t,o){o.mediaInfos=t&&t.map((t=>t.toJSON()));}clone(){return new l$1(m$2({activeMediaInfoIndex:this.activeMediaInfoIndex,attributes:this.attributes,description:this.description,mediaInfos:this.mediaInfos,title:this.title}))}};e$4([d$2()],u.prototype,"activeMediaInfoIndex",void 0),e$4([d$2({type:Object,json:{write:!0}})],u.prototype,"attributes",void 0),e$4([d$2({type:String,json:{write:!0}})],u.prototype,"description",void 0),e$4([d$2({types:[m$1]})],u.prototype,"mediaInfos",void 0),e$4([o$2("mediaInfos")],u.prototype,"readMediaInfos",null),e$4([r$2("mediaInfos")],u.prototype,"writeMediaInfos",null),e$4([d$2({type:String,json:{write:!0}})],u.prototype,"title",void 0),e$4([d$2({type:["media"],readOnly:!0,json:{read:!1,write:!0}})],u.prototype,"type",void 0),u=l$1=e$4([n$5("esri.popup.content.MediaContent")],u);const I=u;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var s$1;let p$3=s$1=class extends p$i{constructor(t){super(t),this.text=null,this.type="text";}clone(){return new s$1({text:this.text})}};e$4([d$2({type:String,json:{write:!0}})],p$3.prototype,"text",void 0),e$4([d$2({type:["text"],readOnly:!0,json:{read:!1,write:!0}})],p$3.prototype,"type",void 0),p$3=s$1=e$4([n$5("esri.popup.content.TextContent")],p$3);const c$2=p$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function a$1(t){return t instanceof p$i}const m={base:null,key:"type",typeMap:{attachment:i$9,media:I,text:c$2,expression:i$6,field:c$6}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var s;let p$2=s=class extends l$5{constructor(r){super(r),this.name=null,this.title=null,this.expression=null,this.returnType=null;}clone(){return new s({name:this.name,title:this.title,expression:this.expression,returnType:this.returnType})}};e$4([d$2({type:String,json:{write:!0}})],p$2.prototype,"name",void 0),e$4([d$2({type:String,json:{write:!0}})],p$2.prototype,"title",void 0),e$4([d$2({type:String,json:{write:!0}})],p$2.prototype,"expression",void 0),e$4([d$2({type:["string","number"],json:{write:!0}})],p$2.prototype,"returnType",void 0),p$2=s=e$4([n$5("esri.popup.ExpressionInfo")],p$2);const i=p$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var e;let p$1=e=class extends l$5{constructor(o){super(o),this.returnTopmostRaster=null,this.showNoDataRecords=null;}clone(){return new e({showNoDataRecords:this.showNoDataRecords,returnTopmostRaster:this.returnTopmostRaster})}};e$4([d$2({type:Boolean,json:{write:!0}})],p$1.prototype,"returnTopmostRaster",void 0),e$4([d$2({type:Boolean,json:{write:!0}})],p$1.prototype,"showNoDataRecords",void 0),p$1=e=e$4([n$5("esri.popup.LayerOptions")],p$1);const a=p$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var t;let p=t=class extends l$5{constructor(r){super(r),this.field=null,this.order=null;}clone(){return new t({field:this.field,order:this.order})}};e$4([d$2({type:String,json:{write:!0}})],p.prototype,"field",void 0),e$4([d$2({type:["asc","desc"],json:{write:!0}})],p.prototype,"order",void 0),p=t=e$4([n$5("esri.popup.support.RelatedRecordsInfoFieldOrder")],p);const c$1=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var d;let c=d=class extends l$5{constructor(o){super(o),this.showRelatedRecords=null,this.orderByFields=null;}clone(){return new d({showRelatedRecords:this.showRelatedRecords,orderByFields:this.orderByFields?m$2(this.orderByFields):null})}};e$4([d$2({type:Boolean,json:{write:!0}})],c.prototype,"showRelatedRecords",void 0),e$4([d$2({type:[c$1],json:{write:!0}})],c.prototype,"orderByFields",void 0),c=d=e$4([n$5("esri.popup.RelatedRecordsInfo")],c);const l=c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var S;const T=j.ofType({key:"type",defaultKeyValue:"button",base:c$9,typeMap:{button:a$a,toggle:a$b}}),b={base:p$i,key:"type",typeMap:{media:I,custom:i$8,text:c$2,attachments:i$9,fields:c$6,expression:i$6}},R="esri.PopupTemplate",L=s$7.getLogger(R),J=["attachments","fields","media","text","expression"];let M=S=class extends l$5{constructor(){super(...arguments),this.actions=null,this.content="",this.expressionInfos=null,this.fieldInfos=null,this.layerOptions=null,this.lastEditInfoEnabled=!0,this.outFields=null,this.overwriteActions=!1,this.returnGeometry=!1,this.title="",this.relatedRecordsInfo=null;}castContent(t){return Array.isArray(t)?t.map((t=>N(b,t))):"string"==typeof t||"function"==typeof t||t instanceof HTMLElement||k(t)?t:(L.error("content error","unsupported content value",{value:t}),null)}readContent(t,e){const{popupElements:o}=e;return Array.isArray(o)&&o.length>0?this._readPopupInfoElements(e):this._readPopupInfo(e)}writeContent(t,e,o,s){"string"!=typeof t?Array.isArray(t)&&(e.popupElements=t.filter((t=>J.includes(t.type))).map((t=>t&&t.toJSON(s))),e.popupElements.forEach((t=>{"attachments"===t.type?this._writeAttachmentContent(e):"media"===t.type?this._writeMediaContent(t,e):"text"===t.type&&this._writeTextContent(t,e);}))):e.description=t;}writeFieldInfos(t,e,o,s){const{content:i}=this,r=Array.isArray(i)?i:null;if(t){const o=r?r.filter((t=>"fields"===t.type)):[],i=o.length&&o.every((t=>t.fieldInfos?.length));e.fieldInfos=t.filter(Boolean).map((t=>{const e=t.toJSON(s);return i&&(e.visible=!1),e}));}if(r)for(const n of r)"fields"===n.type&&this._writeFieldsContent(n,e);}writeLayerOptions(t,e,o,s){e[o]=!t||null===t.showNoDataRecords&&null===t.returnTopmostRaster?null:t.toJSON(s);}writeTitle(t,e){e.title=t||"";}clone(){const{actions:t}=this,e=t?m$2(t.toArray()):[];return new S({actions:e,content:Array.isArray(this.content)?m$2(this.content):this.content,expressionInfos:Array.isArray(this.expressionInfos)?m$2(this.expressionInfos):null,fieldInfos:Array.isArray(this.fieldInfos)?m$2(this.fieldInfos):null,layerOptions:this.layerOptions?m$2(this.layerOptions):null,lastEditInfoEnabled:this.lastEditInfoEnabled,outFields:Array.isArray(this.outFields)?m$2(this.outFields):null,overwriteActions:this.overwriteActions,returnGeometry:this.returnGeometry,title:this.title,relatedRecordsInfo:this.relatedRecordsInfo?m$2(this.relatedRecordsInfo):null})}async collectRequiredFields(t,e){const o=this.expressionInfos||[];await this._collectExpressionInfoFields(t,e,[...o,...this._getContentExpressionInfos(this.content,o)]),g(t,e,[...this.outFields||[],...this._getActionsFields(this.actions),...this._getTitleFields(this.title),...this._getContentFields(this.content)]);}async getRequiredFields(t){const e=new Set;return await this.collectRequiredFields(e,t),[...e].sort()}_writeFieldsContent(t,e){if(!Array.isArray(t.fieldInfos)||!t.fieldInfos.length)return;const o=m$2(t.fieldInfos);Array.isArray(e.fieldInfos)?o.forEach((t=>{const o=e.fieldInfos.find((e=>e.fieldName.toLowerCase()===t.fieldName.toLowerCase()));o?o.visible=!0:e.fieldInfos.push(t);})):e.fieldInfos=o;}_writeAttachmentContent(t){t.showAttachments||(t.showAttachments=!0);}_writeTextContent(t,e){!e.description&&t.text&&(e.description=t.text);}_writeMediaContent(t,e){if(!Array.isArray(t.mediaInfos)||!t.mediaInfos.length)return;const o=m$2(t.mediaInfos);Array.isArray(e.mediaInfos)?e.mediaInfos=[...e.mediaInfos,...o]:e.mediaInfos=o;}_readPopupInfoElements({description:t,mediaInfos:e,popupElements:o}){const s={description:!1,mediaInfos:!1};return o.map((o=>"media"===o.type?(o.mediaInfos||!e||s.mediaInfos||(o.mediaInfos=e,s.mediaInfos=!0),I.fromJSON(o)):"text"===o.type?(o.text||!t||s.description||(o.text=t,s.description=!0),c$2.fromJSON(o)):"attachments"===o.type?i$9.fromJSON(o):"fields"===o.type?c$6.fromJSON(o):"expression"===o.type?i$6.fromJSON(o):void 0)).filter(Boolean)}_readPopupInfo({description:t,mediaInfos:e,showAttachments:o}){const s=[];return t?s.push(new c$2({text:t})):s.push(new c$6),Array.isArray(e)&&e.length&&s.push(I.fromJSON({mediaInfos:e})),o&&s.push(i$9.fromJSON({displayType:"auto"})),s.length?s:t}_getContentElementFields(t){const e=t?.type;if("attachments"===e)return [...this._extractFieldNames(t.title),...this._extractFieldNames(t.description)];if("custom"===e)return t.outFields||[];if("fields"===e)return [...this._extractFieldNames(t.title),...this._extractFieldNames(t.description),...this._getFieldInfoFields(t.fieldInfos||this.fieldInfos)];if("media"===e){const e=t.mediaInfos||[];return [...this._extractFieldNames(t.title),...this._extractFieldNames(t.description),...e.reduce(((t,e)=>[...t,...this._getMediaInfoFields(e)]),[])]}return "text"===e?this._extractFieldNames(t.text):[]}_getMediaInfoFields(t){const{caption:e,title:o,value:s}=t,i=s||{},{fields:r=[],normalizeField:n,tooltipField:p,sourceURL:l,linkURL:a}=i,d=[...this._extractFieldNames(o),...this._extractFieldNames(e),...this._extractFieldNames(l),...this._extractFieldNames(a),...r];return n&&d.push(n),p&&d.push(p),d}_getContentExpressionInfos(t,e){return Array.isArray(t)?t.reduce(((t,e)=>[...t,..."expression"===e.type&&e.expressionInfo?[e.expressionInfo]:[]]),e):[]}_getContentFields(t){return "string"==typeof t?this._extractFieldNames(t):Array.isArray(t)?t.reduce(((t,e)=>[...t,...this._getContentElementFields(e)]),[]):[]}async _collectExpressionInfoFields(t,e,o){o&&await Promise.all(o.map((o=>b$1(t,e,o.expression))));}_getFieldInfoFields(t){return t?t.filter((t=>void 0===t.visible||!!t.visible)).map((t=>t.fieldName)).filter((t=>!t.includes("relationships/")&&!t.includes("expression/"))):[]}_getActionsFields(t){return t?t.toArray().reduce(((t,e)=>[...t,...this._getActionFields(e)]),[]):[]}_getActionFields(t){const{className:e,title:o,type:s}=t,i="button"===s||"toggle"===s?t.image:"";return [...this._extractFieldNames(o),...this._extractFieldNames(e),...this._extractFieldNames(i)]}_getTitleFields(t){return "string"==typeof t?this._extractFieldNames(t):[]}_extractFieldNames(t){if(!t||"string"!=typeof t)return [];const e=/{[^}]*}/g,o=t.match(e);if(!o)return [];const s=/\{(\w+):.+\}/,i=o.filter((t=>!(0===t.indexOf("{relationships/")||0===t.indexOf("{expression/")))).map((t=>t.replace(s,"{$1}")));return i?i.map((t=>t.slice(1,-1))):[]}};e$4([d$2({type:T})],M.prototype,"actions",void 0),e$4([d$2()],M.prototype,"content",void 0),e$4([s$8("content")],M.prototype,"castContent",null),e$4([o$2("content",["description","fieldInfos","popupElements","mediaInfos","showAttachments"])],M.prototype,"readContent",null),e$4([r$2("content",{popupElements:{type:j.ofType(m)},showAttachments:{type:Boolean},mediaInfos:{type:j.ofType(m$1)},description:{type:String}})],M.prototype,"writeContent",null),e$4([d$2({type:[i],json:{write:!0}})],M.prototype,"expressionInfos",void 0),e$4([d$2({type:[c$7]})],M.prototype,"fieldInfos",void 0),e$4([r$2("fieldInfos")],M.prototype,"writeFieldInfos",null),e$4([d$2({type:a})],M.prototype,"layerOptions",void 0),e$4([r$2("layerOptions")],M.prototype,"writeLayerOptions",null),e$4([d$2({type:Boolean,json:{read:{source:"showLastEditInfo"},write:{target:"showLastEditInfo"},default:!0}})],M.prototype,"lastEditInfoEnabled",void 0),e$4([d$2()],M.prototype,"outFields",void 0),e$4([d$2()],M.prototype,"overwriteActions",void 0),e$4([d$2()],M.prototype,"returnGeometry",void 0),e$4([d$2({json:{type:String}})],M.prototype,"title",void 0),e$4([r$2("title")],M.prototype,"writeTitle",null),e$4([d$2({type:l,json:{write:!0}})],M.prototype,"relatedRecordsInfo",void 0),M=S=e$4([n$5(R)],M);const B=M;

export { B, I, c$7 as a, c$6 as b, c$1 as c, i as d, i$5 as e, c$2 as f, i$7 as g, i$9 as i, u$1 as u };
