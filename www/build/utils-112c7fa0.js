import { o as o$4 } from './mathUtils-559a53d9.js';
import { n as n$4, p as p$1 } from './jsxFactory-4cd653a4.js';
import { s as s$3, aB as r$4, aC as u$3 } from './cast-3d5be210.js';
import { m as m$1, S as S$1, L } from './number-c5a37d3e.js';
import './intl-54ccdc89.js';
import { a as a$2 } from './ColorStop-64c57e35.js';
import { j as j$1 } from './utils-2bda91e5.js';
import { l as l$2 } from './Color-25ce730a.js';
import { m as m$2 } from './symbols-ab3e849a.js';
import { b as a$1 } from './jsonUtils-e7c7add9.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const i$3={heading:"esri-widget__heading"};function n$3(e,n){const l=o$3(e.level),s=`h${l}`;return delete e.level,n$4(s,{...e,class:p$1(i$3.heading,e.class),role:"heading","aria-level":String(l)},n)}function o$3(t){return o$4(Math.ceil(t),1,6)}function l$1(e,t=1){return o$3(e+t)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const n$2=/^-?(\d+)(\.(\d+))?$/i;function e$1(t,n){return t-n}function r$3(t,n){let e,r;return e=Number(t.toFixed(n)),e<t?r=e+1/10**n:(r=e,e-=1/10**n),e=Number(e.toFixed(n)),r=Number(r.toFixed(n)),[e,r]}function o$2(t,n,e,r,o){const i=l(t,n,e,r),u=null==i.previous||i.previous<=o,s=null==i.next||i.next<=o;return u&&s||i.previous+i.next<=2*o}function i$2(t){const e=String(t),r=e.match(n$2);if(r&&r[1])return {integer:r[1].split("").length,fractional:r[3]?r[3].split("").length:0};if(e.toLowerCase().includes("e")){const t=e.split("e"),n=t[0],r=t[1];if(n&&r){const t=Number(n);let e=Number(r);const o=e>0;o||(e=Math.abs(e));const l=i$2(t);return o?(l.integer+=e,e>l.fractional?l.fractional=0:l.fractional-=e):(l.fractional+=e,e>l.integer?l.integer=1:l.integer-=e),l}}return {integer:0,fractional:0}}function l(t,n,e,r){const o={previous:null,next:null};if(null!=e){const r=t-e,i=n-e-r;o.previous=Math.floor(Math.abs(100*i/r));}if(null!=r){const e=r-t,i=r-n-e;o.next=Math.floor(Math.abs(100*i/e));}return o}function u$2(t,n={}){const l=t.slice(0),{tolerance:u=2,strictBounds:s=!1,indexes:c=l.map(((t,n)=>n))}=n;c.sort(e$1);for(let e=0;e<c.length;e++){const t=c[e],n=l[t],a=0===t?null:l[t-1],f=t===l.length-1?null:l[t+1],m=i$2(n).fractional;if(m){let i,c=0,g=!1;for(;c<=m&&!g;){const t=r$3(n,c);i=s&&0===e?t[1]:t[0],g=o$2(n,i,a,f,u),c++;}g&&(l[t]=i);}}return l}const s$2={maximumFractionDigits:20};function c$1(n){return m$1(n,s$2)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const s$1="<",i$1=">",r$2=S$1("short-date");function o$1(t,l,o,e){let n="";0===l?n=`${s$1} `:l===o&&(n=`${i$1} `);let u=null;return u=e?L(t,r$2):c$1(t),n+u}const e=["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAAAAAAAAAHqZRakAAAANUlEQVQ4jWPMy8v7z0BFwMLAwMAwcdIkqhiWn5fHwEQVk5DAqIGjBo4aOGrgqIEQwEjtKgAATl0Hu6JrzFUAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAAAAAAAAAHqZRakAAAANUlEQVQ4jWPMy8v7z0BFwMLAwMAwaeIkqhiWl5/HwEQVk5DAqIGjBo4aOGrgqIEQwEjtKgAATl0Hu6sKxboAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAAAAAAAAAHqZRakAAAANUlEQVQ4jWPMy8v7z0BFwMLAwMAwadJEqhiWl5fPwEQVk5DAqIGjBo4aOGrgqIEQwEjtKgAATl0Hu75+IUcAAAAASUVORK5CYII="];async function n$1(A){if(!("visualVariables"in A)||!A.visualVariables)return null;const t=A.visualVariables.find((A=>"color"===A.type));if(!t)return null;let a=null,l=null;if(t.stops){if(1===t.stops.length)return t.stops[0].color;a=t.stops[0].value,l=t.stops[t.stops.length-1].value;}const s=a+(l-a)/2,{getColor:i}=await import('./UniqueValueRenderer-bb66af10.js').then(function (n) { return n.i; });return i(t,s)}async function u$1(A,t){const a=A.trailCap,s=A.trailWidth||1,i=t||await n$1(A)||A.color;return new m$2({cap:a,color:i,width:s})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const o=new l$2([64,64,64]);function n(l,o){const n=[],r=l.length-1;return 5===l.length?n.push(0,2,4):n.push(0,r),l.map(((l,t)=>n.includes(t)?o$1(l,t,r,o):null))}async function r$1(l,e,o){let r=!1,a=[],u=[];if(l.stops){const e=l.stops;a=e.map((l=>l.value)),r=e.some((l=>!!l.label)),r&&(u=e.map((l=>l.label)));}const s=a[0],i=a[a.length-1];if(null==s&&null==i)return null;const c=r?null:n(a,o);return (await Promise.all(a.map((async(o,n)=>({value:o,color:"opacity"===l.type?await t(o,l,e):(await import('./UniqueValueRenderer-bb66af10.js').then(function (n) { return n.i; })).getColor(l,o),label:r?u[n]:c[n]}))))).reverse()}async function t(e,n,r=o){const t=new l$2(r),a=(await import('./UniqueValueRenderer-bb66af10.js').then(function (n) { return n.i; })).getOpacity(n,e);return null!=a&&(t.a=a),t}function a(l){let e=!1,o=[],r=[];o=l.map((l=>l.value)),e=l.some((l=>!!l.label)),e&&(r=l.map((l=>l.label)));const t=o[0],a=o[o.length-1];if(null==t&&null==a)return null;const s=e?null:n(o,!1);return o.map(((o,n)=>({value:o,color:u(o,l),label:e?r[n]:s[n]}))).reverse()}function u(e,o){const{startIndex:n,endIndex:r,weight:t}=s(e,o);if(n===r)return o[n].color;const a=l$2.blendColors(o[n].color,o[r].color,t);return new l$2(a)}function s(l,e){let o=0,n=e.length-1;return e.some(((e,r)=>l<e.value?(n=r,!0):(o=r,!1))),{startIndex:o,endIndex:n,weight:(l-e[o].value)/(e[n].value-e[o].value)}}function i(e,o){let n=[];if(e&&"multipart"===e.type)e.colorRamps.reverse().forEach(((r,t)=>{0===t?n.push({value:o.max,color:new l$2(r.toColor),label:"high"}):n.push({value:null,color:new l$2(r.toColor),label:""}),t===e.colorRamps.length-1?n.push({value:o.min,color:new l$2(r.fromColor),label:"low"}):n.push({value:null,color:new l$2(r.fromColor),label:""});}));else {let r,t;e&&"algorithmic"===e.type?(r=e.fromColor,t=e.toColor):(r=[0,0,0,1],t=[255,255,255,1]),n=[{value:o.max,color:new l$2(t),label:"high"},{value:o.min,color:new l$2(r),label:"low"}];}return n}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function r(r){if(!r.colorStops)return [];const e=[...r.colorStops].filter((o=>o.color?.a>0));let t=e.length-1;if(e&&e[0]){const r=e[t];r&&1!==r.ratio&&(e.push(new a$1({ratio:1,color:r.color})),t++);}return e.map(((o,e)=>{let l="";return 0===e?l=r.legendOptions?.minLabel||"low":e===t&&(l=r.legendOptions?.maxLabel||"high"),{color:o.color,label:l,ratio:o.ratio}})).reverse()}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const d=s$3.getLogger("esri.renderers.support.utils"),m={lte:"<=",gte:">=",lt:"<",gt:">",pct:"%",ld:"–"},p={millisecond:0,second:1,minute:2,hour:3,day:4,month:5,year:6},c={millisecond:"long-month-day-year-long-time",second:"long-month-day-year-long-time",minute:"long-month-day-year-short-time",hour:"long-month-day-year-short-time",day:"long-month-day-year",month:"long-month-day-year",year:"year"},y=S$1("short-date");function g(e,l,t){r$4(e,l,(()=>[])).push(...t);}async function h(l){const n=new Map;if("visualVariables"in l&&l.visualVariables){const e=l.visualVariables.filter((e=>"color"===e.type));for(const l of e){const e=l.field||l.valueExpression,t=(await r$1(l)).map((e=>e.color));g(n,e,t);}}if("heatmap"===l.type){const e=r(l).map((e=>e.color));g(n,l.field,e);}else if("pie-chart"===l.type){for(const e of l.attributes)g(n,e.field,[e.color]);g(n,null,[l?.othersCategory?.color,j$1(l.backgroundFillSymbol,null)]);}else if("dot-density"===l.type){for(const e of l.attributes)g(n,e.field,[e.color]);g(n,null,[l.backgroundColor]);}else if("unique-value"===l.type)if("predominance"===l.authoringInfo?.type)for(const e of l.uniqueValueInfos)g(n,e.value.toString(),[j$1(e.symbol,null)]);else {const e=l.uniqueValueInfos.map((e=>j$1(e.symbol,null))),{field:t,field2:o,field3:i,valueExpression:a}=l;(t||a)&&g(n,t||a,e),o&&g(n,o,e),i&&g(n,i,e);}else if("class-breaks"===l.type){const e=l.classBreakInfos.map((e=>j$1(e.symbol,null)));g(n,l.field||l.valueExpression,e);}else "simple"===l.type&&g(n,null,[j$1(l.symbol,null)]);return "defaultSymbol"in l&&l.defaultSymbol&&g(n,null,[j$1(l.defaultSymbol,null)]),n.forEach(((l,t)=>{const o=u$3(l.filter(Boolean),((e,l)=>JSON.stringify(e)===JSON.stringify(l)));n.set(t,o);})),n}function b(e,l,n){let t="";return 0===l?t=m.lt+" ":l===n&&(t=m.gt+" "),t+e}function V(e){const{values:l,colors:n,labelIndexes:t,isDate:a,dateFormatOptions:r}=e;return l.map(((e,u)=>{let f=null;if(!t||t.includes(u)){let n;n=a?L(e,r):c$1(e),n&&(f=b(n,u,l.length-1));}return new a$2({value:e,color:n[u],label:f})}))}function v(e){const{stops:l,changes:n,isDate:t,dateFormatOptions:s}=e,r=l.map((e=>e.value)),u=[];for(const o of n)u.push(o.index),r[o.index]=o.value;const f=u$2(r,{indexes:u});l.forEach(((e,n)=>{if(e.value=r[n],null!=e.label){let a,r=null;a=t?L(f[n],s):c$1(f[n]),a&&(r=b(a,n,l.length-1)),e.label=r;}}));}function x(e){let l=e.minValue,n=e.maxValue;const t=e.isFirstBreak?"":m.gt+" ",o="percent-of-total"===e.normalizationType?m.pct:"";return l=null==l?"":c$1(l),n=null==n?"":c$1(n),t+l+o+" "+m.ld+" "+n+o}function F(e){const l=e.classBreakInfos,n=e.normalizationType;let t=[];if(l&&l.length)if("standard-deviation"!==e.classificationMethod)if(e.round){t.push(l[0].minValue);for(const e of l)t.push(e.maxValue);t=u$2(t),l.forEach(((e,l)=>{e.label=x({minValue:0===l?t[0]:t[l],maxValue:t[l+1],isFirstBreak:0===l,normalizationType:n});}));}else l.forEach(((e,l)=>{e.label=x({minValue:e.minValue,maxValue:e.maxValue,isFirstBreak:0===l,normalizationType:n});}));else d.warn("setLabelsForClassBreaks","cannot set labels for class breaks generated using 'standard-deviation' method.");}function z(e){if("standard-deviation"===e.classificationMethod)return void d.warn("updateClassBreak","cannot update labels for class breaks generated using 'standard-deviation' method.");const l=e.classBreaks,n=e.change,t=n.index,o=n.value,i=l.length;let a=-1,s=-1;0===t?a=t:t===i?s=t-1:(s=t-1,a=t);const r=e.normalizationType;let u=null;a>-1&&a<i&&(u=l[a],u.minValue=o,u.label=x({minValue:u.minValue,maxValue:u.maxValue,isFirstBreak:0===a,normalizationType:r})),s>-1&&s<i&&(u=l[s],u.maxValue=o,u.label=x({minValue:u.minValue,maxValue:u.maxValue,isFirstBreak:0===s,normalizationType:r}));}function k(e){const l=e.map((e=>new Date(e))),n=l.length;let t=1/0,o=null;for(let i=0;i<n-1;i++){const e=l[i];let a=1/0,s=null;for(let t=i+1;t<n;t++){const n=l[t],o=(e.getFullYear()!==n.getFullYear()?"year":e.getMonth()!==n.getMonth()&&"month")||e.getDate()!==n.getDate()&&"day"||e.getHours()!==n.getHours()&&"hour"||e.getMinutes()!==n.getMinutes()&&"minute"||e.getSeconds()!==n.getSeconds()&&"second"||"millisecond",i=p[o];i<a&&(a=i,s=o);}a<t&&(t=a,o=s);}return o}function E(e){const{value:l,domain:n,fieldInfo:a,dateFormatInterval:s}=e;let r=String(l);const u=n&&"codedValues"in n&&n.codedValues?n.getName(l):null;return u?r=u:"number"==typeof l&&(r=a&&"date"===a.type?L(l,s&&S$1(c[s])):c$1(l)),r}function B(e,l){return "normalizationField"in e&&e.normalizationField?S(e.field,e.normalizationField):"field"in e&&e.field?I(e.field):"valueExpression"in e&&e.valueExpression?j(e.valueExpression,e.valueExpressionTitle,l):null}function I(e){return {type:"field",field:e}}function S(e,l){return {type:"normalized-field",field:e,normalizationField:l}}function j(e,l,n){return {type:"expression",expression:e,title:l,returnType:n}}function T(l,n){const t=[];if("class-breaks"===l.type||"heatmap"===l.type)t.push(B(l,"number"));else if("unique-value"===l.type){const e=l.authoringInfo;if(e&&"relationship"===e.type){if(e.field1&&e.field2){const l=e.field1.field,n=e.field2.field,o=e.field1.normalizationField,i=e.field2.normalizationField;t.push(B({field:l,normalizationField:o})),t.push(B({field:n,normalizationField:i}));}}else {const e=l.uniqueValueInfos[0];let n=null;if(e&&e.value){const e=typeof l.uniqueValueInfos[0].value;"string"!==e&&"number"!==e||(n=e);}t.push(B(l,n)),[l.field2,l.field3].forEach((e=>e&&t.push(I(e))));}}else "attributes"in l&&l.attributes.forEach((e=>t.push(B(e,"number"))));const o=n?n(l):"visualVariables"in l?l.visualVariables:null;return o&&o.forEach((e=>t.push(B(e,"number")))),u$3(t.filter(Boolean),((e,l)=>"field"===e.type&&"field"===l.type?e.field===l.field:"normalized-field"===e.type&&"normalized-field"===l.type?e.field===l.field&&e.normalizationField===l.normalizationField:"expression"===e.type&&"expression"===l.type&&e.expression===l.expression))}

export { u$1 as a, i$1 as b, u as c, a as d, i as e, n$1 as f, e as g, h, i$2 as i, r$1 as j, l$1 as k, l, n$3 as n, o$1 as o, r, s$1 as s, u$2 as u, y };
