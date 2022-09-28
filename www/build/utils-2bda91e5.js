import { l as l$3 } from './Color-25ce730a.js';
import { d as c$3, x as x$2, l as l$4 } from './symbols-ab3e849a.js';
import { n } from './asyncUtils-96c00c9e.js';
import { ak as m$2, r, t, c as a$2, h as e$2 } from './cast-3d5be210.js';
import { u as u$3, e as e$1 } from './screenUtils-31d073db.js';
import { l as l$5 } from './mathUtils-559a53d9.js';
import { i as i$2 } from './jsonUtils-f3f35e7f.js';
import { a as a$1 } from './assets-99f5c3ee.js';
import { U as U$1 } from './request-ac4d8bfb.js';
import { e } from './ItemCache-1f62ab56.js';
import { c as c$2, l as l$2, u as u$2, s as s$1, f as f$2, i as i$1 } from './utils-8133dc40.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function i(e){const s=c$2(e);if("CIMTextSymbol"===s.type)return s.height;let n=0;if(s.symbolLayers)for(const t of s.symbolLayers)l$2(t)&&t.size>n?n=t.size:u$2(t)&&t.width>n?n=t.width:s$1(t);return n}function c$1(e,o,a){const r=c$2(e),s=i(e);if(0===s)return void f$1(r,o);l$1(r,o/s,!1,a);}function f$1(e,t){if("CIMTextSymbol"!==e.type){if(e.symbolLayers)for(const o of e.symbolLayers)switch(o.type){case"CIMPictureMarker":case"CIMVectorMarker":o.size=t;break;case"CIMPictureStroke":case"CIMSolidStroke":o.width=t;}}else e.height=t;}function l$1(e,t,o,a){if("CIMTextSymbol"!==e.type){if(o&&e.effects)for(const o of e.effects)C$1(o,t);if(e.symbolLayers)for(const o of e.symbolLayers)switch(o.type){case"CIMPictureMarker":case"CIMVectorMarker":m$1(o,t,a);break;case"CIMPictureStroke":case"CIMSolidStroke":!a?.preserveOutlineWidth&&o.width&&(o.width*=t);break;case"CIMPictureFill":o.height&&(o.height*=t),o.offsetX&&(o.offsetX*=t),o.offsetY&&(o.offsetY*=t);break;case"CIMHatchFill":l$1(o.lineSymbol,t,!0,{...a,preserveOutlineWidth:!1}),o.offsetX&&(o.offsetX*=t),o.offsetY&&(o.offsetY*=t),o.separation&&(o.separation*=t);}}else e.height*=t;}function m$1(e,t,o){if(e.markerPlacement&&M$1(e.markerPlacement,t),e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t),e.anchorPoint&&"Absolute"===e.anchorPointUnits&&(e.anchorPoint={x:e.anchorPoint.x*t,y:e.anchorPoint.y*t}),e.size*=t,"CIMVectorMarker"===e.type&&e.markerGraphics)for(const a of e.markerGraphics)e.scaleSymbolsProportionally||l$1(a.symbol,t,!0,o);}function M$1(e,t){switch(f$2(e)&&e.offset&&(e.offset*=t),e.type){case"CIMMarkerPlacementAlongLineRandomSize":case"CIMMarkerPlacementAlongLineSameSize":if(e.customEndingOffset&&(e.customEndingOffset*=t),e.offsetAlongLine&&(e.offsetAlongLine*=t),e.placementTemplate&&e.placementTemplate.length){const o=e.placementTemplate.map((e=>e*t));e.placementTemplate=o;}break;case"CIMMarkerPlacementAlongLineVariableSize":if(e.maxRandomOffset&&(e.maxRandomOffset*=t),e.placementTemplate&&e.placementTemplate.length){const o=e.placementTemplate.map((e=>e*t));e.placementTemplate=o;}break;case"CIMMarkerPlacementOnLine":e.startPointOffset&&(e.startPointOffset*=t);break;case"CIMMarkerPlacementAtExtremities":e.offsetAlongLine&&(e.offsetAlongLine*=t);break;case"CIMMarkerPlacementAtMeasuredUnits":case"CIMMarkerPlacementOnVertices":break;case"CIMMarkerPlacementAtRatioPositions":e.beginPosition&&(e.beginPosition*=t),e.endPosition&&(e.endPosition*=t);break;case"CIMMarkerPlacementPolygonCenter":e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t);break;case"CIMMarkerPlacementInsidePolygon":e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t),e.stepX&&(e.stepX*=t),e.stepY&&(e.stepY*=t);}}function C$1(e,t){switch(e.type){case"CIMGeometricEffectArrow":case"CIMGeometricEffectDonut":e.width&&(e.width*=t);break;case"CIMGeometricEffectBuffer":e.size&&(e.size*=t);break;case"CIMGeometricEffectCut":e.beginCut&&(e.beginCut*=t),e.endCut&&(e.endCut*=t),e.middleCut&&(e.middleCut*=t);break;case"CIMGeometricEffectDashes":if(e.customEndingOffset&&(e.customEndingOffset*=t),e.offsetAlongLine&&(e.offsetAlongLine*=t),e.dashTemplate&&e.dashTemplate.length){const o=e.dashTemplate.map((e=>e*t));e.dashTemplate=o;}break;case"CIMGeometricEffectExtension":case"CIMGeometricEffectJog":case"CIMGeometricEffectRadial":e.length&&(e.length*=t);break;case"CIMGeometricEffectMove":e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t);break;case"CIMGeometricEffectOffset":case"CIMGeometricEffectOffsetTangent":e.offset&&(e.offset*=t);break;case"CIMGeometricEffectRegularPolygon":e.radius&&(e.radius*=t);break;case"CIMGeometricEffectTaperedPolygon":e.fromWidth&&(e.fromWidth*=t),e.length&&(e.length*=t),e.toWidth&&(e.toWidth*=t);break;case"CIMGeometricEffectWave":e.amplitude&&(e.amplitude*=t),e.period&&(e.period*=t);}}function y$1(o){const a=[];return k$2(c$2(o),a),a.length?new l$3(i$1(a[0])):null}function k$2(e,t){let r;r="CIMTextSymbol"===e.type?e.symbol:e;const n="CIMPolygonSymbol"===e.type;if(r.symbolLayers)for(const i of r.symbolLayers)if(!(i.colorLocked||n&&(u$2(i)||l$2(i)&&i.markerPlacement&&f$2(i.markerPlacement))))switch(i.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":i.tintColor&&b$2(t,i.tintColor);break;case"CIMVectorMarker":i.markerGraphics.forEach((e=>{k$2(e.symbol,t);}));break;case"CIMSolidStroke":case"CIMSolidFill":b$2(t,i.color);break;case"CIMHatchFill":k$2(i.lineSymbol,t);}}function b$2(e,t){for(const o of e)if(o.join(".")===t.join("."))return;e.push(t);}function p$2(o,a,r){a instanceof l$3||(a=new l$3(a));const s=c$2(o);s&&I$1(s,a,r);}function I$1(e,t,n){let i;i="CIMTextSymbol"===e.type?e.symbol:e;const c="CIMPolygonSymbol"===i.type;if(i.symbolLayers)for(const f of i.symbolLayers){if(f.colorLocked)continue;if(c)if(n){const{layersToColor:e}=n;if((u$2(f)||l$2(f)&&f.markerPlacement&&f$2(f.markerPlacement))&&"fill"===e||s$1(f)&&"outline"===e)continue}else if(u$2(f)||l$2(f)&&f.markerPlacement&&f$2(f.markerPlacement))continue;const e=t.toArray();switch(f.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":f.tintColor=e;break;case"CIMVectorMarker":f.markerGraphics.forEach((e=>{I$1(e.symbol,t,n);}));break;case"CIMSolidStroke":case"CIMSolidFill":f.color=e;break;case"CIMHatchFill":I$1(f.lineSymbol,t,n);}}}function u$1(e,o=!1){const a=c$2(e);return "CIMTextSymbol"===a.type||"CIMPointSymbol"===a.type?o&&0!==a.angle?360-a.angle:a.angle||0:0}function h$2(e,a,r=!1){const s=c$2(e);if(r&&0!==a&&(a=360-a),"CIMTextSymbol"!==s.type){if("CIMPointSymbol"===s.type&&s.symbolLayers){const e=a-(s.angle||0);for(const t of s.symbolLayers)if(l$2(t)){let o=t.rotation||0;t.rotateClockwise?o-=e:o+=e,t.rotation=o;}s.angle=a;}}else s.angle=a;}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const s="picture-fill",l="simple-fill",a="simple-line",c="simple-marker",m="text",u="cim",p$1={left:"start",center:"middle",right:"end",justify:"start"},f={top:"text-before-edge",middle:"central",baseline:"alphabetic",bottom:"text-after-edge"},d$1=new e(1e3);function h$1(e){let t=e.horizontalAlignment;return t=t&&p$1[t.toLowerCase()]||"middle",t}function g$1(e){const t=e.verticalAlignment;return t&&f[t.toLowerCase()]||"alphabetic"}function y(e){return "bottom"===e.verticalAlignment?"super":null}function b$1(t){const r=t.style;let o=null;if(t)switch(t.type){case c:"cross"!==r&&"x"!==r&&(o=t.color);break;case l:"solid"===r?o=t.color:"none"!==r&&(o={type:"pattern",x:0,y:0,src:a$1(`esri/symbols/patterns/${r}.png`),width:5,height:5});break;case s:o={type:"pattern",src:t.url,width:u$3(t.width)*t.xscale,height:u$3(t.height)*t.yscale,x:u$3(t.xoffset),y:u$3(t.yoffset)};break;case m:o=t.color;break;case u:o=y$1(t);}return o}function w$1(e,t){const o=e+"-"+t;return void 0!==d$1.get(o)?Promise.resolve(d$1.get(o)):U$1(e,{responseType:"image"}).then((e=>{const r=e.data,n=r.naturalWidth,i=r.naturalHeight,s=document.createElement("canvas");s.width=n,s.height=i;const l=s.getContext("2d");l.fillStyle=t,l.fillRect(0,0,n,i),l.globalCompositeOperation="destination-in",l.drawImage(r,0,0);const a=s.toDataURL();return d$1.put(o,a),a}))}function j$1(e){if(!e)return null;let t;switch(e.type){case l:case s:case c:t=j$1(e.outline);break;case a:{const r=u$3(e.width);"none"!==e.style&&0!==r&&(t={color:e.color,style:x$1(e.style),width:r,cap:e.cap,join:"miter"===e.join?u$3(e.miterLimit):e.join});break}default:t=null;}return t}const x$1=(()=>{const e={};return t=>{if(e[t])return e[t];const r=t.replace(/-/g,"");return e[t]=r,r}})(),k$1=new l$3([128,128,128]);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const p=/\/resource\/(.*?)\.svg$/,h=new l$3("white");function b(e){const t=e.symbolLayers&&e.symbolLayers.length;if(!t)return;const r=e.symbolLayers.getItemAt(t-1);return "outline"in r?m$2(r,"outline","size"):void 0}function w(e){if(!e)return 0;if(c$3(e)){const t=b(e);return r(t)?t:0}const r$1=j$1(e);return r$1&&e$1(r$1.width)||0}function d(e){if(t(e)||!("symbolLayers"in e)||t(e.symbolLayers))return !1;switch(e.type){case"point-3d":return e.symbolLayers.some((e=>"object"===e.type));case"line-3d":return e.symbolLayers.some((e=>"path"===e.type));case"polygon-3d":return e.symbolLayers.some((e=>"object"===e.type||"extrude"===e.type));default:return !1}}function g(e,t){const r=t.resource.href;return !a$2("esri-canvas-svg-support")&&e.styleOrigin&&p.test(r)?r.replace(p,"/resource/png/$1.png"):r}function j(o,n){if(!o)return null;let l=null;return c$3(o)?l=k(o):x$2(o)&&(l=o.color?new l$3(o.color):null),l?L(l,n):null}function k(t){const r$1=t.symbolLayers;if(!r$1)return null;let o=null;return r$1.forEach((e=>{"object"===e.type&&null!=e.resource.href||(o="water"===e.type?e$2(e.color):r(e.material)?e$2(e.material.color):null);})),o?new l$3(o):null}function L(t,r){if(null==r)return t;const o=t.toRgba();return o[3]=o[3]*r,new l$3(o)}function z(e,t$1,r$1){const o=e.symbolLayers;if(!o)return;const n=e=>{const o=r(e)?e:null;return L(t$1=t$1||o||null!=r$1&&h,r$1)};o.forEach((e=>{if("object"!==e.type||null==e.resource.href||t$1)if("water"===e.type)e.color=n(e.color);else {const t$1=r(e.material)?e.material.color:null,o=n(t$1);t(e.material)?e.material=new l$4({color:o}):e.material.color=o,null!=r$1&&"outline"in e&&r(e.outline)&&r(e.outline.color)&&(e.outline.color=L(e.outline.color,r$1));}}));}function v(e,t,r){(t=t||e.color)&&(e.color=L(t,r)),null!=r&&"outline"in e&&e.outline&&e.outline.color&&(e.outline.color=L(e.outline.color,r));}function x(o,n,l){o&&(n||null!=l)&&(n&&(n=new l$3(n)),c$3(o)?z(o,n,l):x$2(o)&&v(o,n,l));}async function S(e,t){const r=e.symbolLayers;r&&await n(r,(async e=>U(e,t)));}async function U(e,t){switch(e.type){case"extrude":R(e,t);break;case"icon":case"line":case"text":O(e,t);break;case"path":A(e,t);break;case"object":await $(e,t);}}function O(e,t){const r$1=E(t);r(r$1)&&(e.size=r$1);}function E(e){for(const t of e)if("number"==typeof t)return t;return null}function R(e,t){e.size="number"==typeof t[2]?t[2]:0;}async function $(e,t){const{resourceSize:r,symbolSize:o}=await D(e),n=C(t,r,o);e.width=I(t[0],o[0],r[0],n),e.depth=I(t[1],o[1],r[1],n),e.height=I(t[2],o[2],r[2],n);}function A(e,t){const r=C(t,l$5,[e.width,void 0,e.height]);e.width=I(t[0],e.width,1,r),e.height=I(t[2],e.height,1,r);}function C(e,t,r){for(let o=0;o<3;o++){const n=e[o];switch(n){case"symbol-value":return null!=r[o]?r[o]/t[o]:1;case"proportional":break;default:if(n&&t[o])return n/t[o]}}return 1}async function D(e){const t=await import('./symbolLayerUtils-a6517f5c.js'),r=await t.computeObjectLayerResourceSize(e,10),{width:o,height:n,depth:l}=e,i=[o,l,n];let s=1;for(let c=0;c<3;c++)if(null!=i[c]){s=i[c]/r[c];break}for(let c=0;c<3;c++)null==i[c]&&(i[c]=r[c]*s);return {resourceSize:r,symbolSize:i}}function I(e,t,r,o){switch(e){case"proportional":return r*o;case"symbol-value":return null!=t?t:r;default:return e}}function J(e,t$1){const r=E(t$1);if(!t(r))switch(e.type){case"simple-marker":e.size=r;break;case"picture-marker":{const t=e.width/e.height;t>1?(e.width=r,e.height=r*t):(e.width=r*t,e.height=r);break}case"simple-line":e.width=r;break;case"text":e.font.size=r;}}async function M(e,o){if(e&&o)return c$3(e)?S(e,o):void(x$2(e)&&J(e,o))}function N(e,o,n){if(e&&null!=o)if(c$3(e)){const t=e.symbolLayers;t&&t.forEach((e=>{if(e&&"object"===e.type)switch(n){case"tilt":e.tilt=o;break;case"roll":e.roll=o;break;default:e.heading=o;}}));}else x$2(e)&&("simple-marker"!==e.type&&"picture-marker"!==e.type&&"text"!==e.type||(e.angle=o));}function q(e){if(!e)return null;const t=e.effects.filter((e=>"bloom"!==e.type)).map((e=>e.toJSON()));return i$2(t)}

export { L, M, N, j$1 as a, b$1 as b, x$1 as c, d, w$1 as e, c$1 as f, g, i, j, k$1 as k, m$1 as m, p$2 as p, q, w, x };