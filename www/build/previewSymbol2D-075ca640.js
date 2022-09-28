import { l } from './Color-25ce730a.js';
import { r, a as s } from './cast-3d5be210.js';
import { e as e$1, u as u$1 } from './screenUtils-31d073db.js';
import { e as w$1, b as b$1, a as j$1 } from './utils-2bda91e5.js';
import { t, e as e$2, i as d$1, l as l$1 } from './symbolUtils-7f5a2832.js';
import './colorUtils-5009883d.js';
import './mathUtils-559a53d9.js';
import './symbols-ab3e849a.js';
import './CIMSymbol-15bdb580.js';
import './enumeration-6695a859.js';
import './request-ac4d8bfb.js';
import './Point-edff2a11.js';
import './JSONSupport-dce2c67b.js';
import './fieldUtils-240a3b99.js';
import './geometry-2f332a26.js';
import './Extent-f27111e1.js';
import './Polyline-dcdb3782.js';
import './Symbol-573a64f6.js';
import './opacityUtils-dcd94f00.js';
import './aaBoundingBox-b312516d.js';
import './aaBoundingRect-5e1a4e52.js';
import './persistableUrlUtils-5dcd6081.js';
import './Collection-a38e0489.js';
import './collectionUtils-302901c0.js';
import './Portal-5df9f5a7.js';
import './Promise-d2759b2e.js';
import './Clonable-533c7a05.js';
import './asyncUtils-96c00c9e.js';
import './jsonUtils-f3f35e7f.js';
import './mat4-d5df0e58.js';
import './_commonjsHelpers-8dd5c177.js';
import './assets-99f5c3ee.js';
import './ItemCache-1f62ab56.js';
import './MemCache-04cdd0cd.js';
import './utils-8133dc40.js';
import './colorUtils-e0bbe79f.js';
import './jsxFactory-4cd653a4.js';
import './intl-54ccdc89.js';
import './number-c5a37d3e.js';
import './messages-5e9a4a9e.js';
import './Handles-54afc0a7.js';
import './reactiveUtils-bd6fe823.js';
import './uuid-ac104993.js';
import './index-f980186a.js';
import './mat2d-677a80fe.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
async function n(r){await r.whenReady();const n=r.basemapView.baseLayerViews.map((t=>t.layer));if(!n.length){const n=getComputedStyle(r.container).backgroundColor,a=n&&new l(n);return r.get("background.color")||(a&&0!==a.a?a:null)||null}const a=(await r.takeScreenshot({format:"png",layers:n.toArray()})).data.data,o=a.length;let e=0,u=0,l$1=0,c=0,s=0,i=0;for(let t=0;t<o;t+=4){const r=a[t],n=a[t+1],o=a[t+2],h=a[t+3],d=h/255;e+=r*r*d,u+=n*n*d,l$1+=o*o*d,s+=d,h&&(c+=h,i++);}e=Math.round(Math.sqrt(e/s)),u=Math.round(Math.sqrt(u/s)),l$1=Math.round(Math.sqrt(l$1/s));return new l([e,u,l$1,c/i/255])}async function a(t){if(!t)return null;const a=await n(t);return r(a)?o(a):null}function o(t){return e(t).isBright?"light":"dark"}function e(r){let{r:n,g:a,b:o,a:e}=r;return e<1&&(n=Math.round(e*n+255*(1-e)),a=Math.round(e*a+255*(1-e)),o=Math.round(e*o+255*(1-e))),new l({r:n,g:a,b:o})}function u(t){const{r,g:n,b:a}=e(t);return .2126*r+.7152*n+.0722*a}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const h="picture-fill",p="picture-marker",d="simple-fill",f="simple-line",y="simple-marker",v="text",w="Aa",g=t.size,b=t.maxSize,M=t.maxOutlineSize,k=t.lineWidth,x=225,z=document.createElement("canvas");function L(e,t){const a=z.getContext("2d"),n=[];return t&&(t.weight&&n.push(t.weight),t.size&&n.push(t.size+"px"),t.family&&n.push(t.family)),a.font=n.join(" "),a.measureText(e).width}const j=7.2/2.54,C=72/2.54;function S(e){if(0===e.length)return 0;if(e.length>2){const t=e$1(1),a=parseFloat(e);switch(e.slice(-2)){case"px":return a;case"pt":return a*t;case"in":return 72*a*t;case"pc":return 12*a*t;case"mm":return a*j*t;case"cm":return a*C*t}}return parseFloat(e)}function F(e){const t=e?.size;return {width:null!=t&&"object"==typeof t&&"width"in t?u$1(t.width):null,height:null!=t&&"object"==typeof t&&"height"in t?u$1(t.height):null}}async function U(e,t){const a=t.fill,n=e.color;if("pattern"===a?.type&&n&&e.type!==h){const e=await w$1(a.src,n.toCss(!0));a.src=e,t.fill=a;}}function E(e,t){return e>t?"dark":"light"}function Z(e,t){const n="number"==typeof t?.size?t?.size:null,o=null!=n?u$1(n):null,i=null!=t?.maxSize?u$1(t.maxSize):null,r=null!=t?.rotation?t.rotation:"angle"in e?e.angle:null,m=b$1(e);let u=j$1(e);"dark"!==D(e,245)||t?.ignoreWhiteSymbols||(u={width:.75,...u,color:"#bdc3c7"});const x={shape:null,fill:m,stroke:u,offset:[0,0]};u?.width&&(u.width=Math.min(u.width,M));const z=u?.width||0;let j=null!=t?.size&&(null==t?.scale||t?.scale),C=0,U=0,E=!1;switch(e.type){case y:{const t=e.style,n=Math.min(null!=o?o:u$1(e.size),i||b);switch(C=n,U=n,t){case"circle":x.shape={type:"circle",cx:0,cy:0,r:.5*n},j||(C+=z,U+=z);break;case"cross":x.shape={type:"path",path:[{command:"M",values:[0,.5*U]},{command:"L",values:[C,.5*U]},{command:"M",values:[.5*C,0]},{command:"L",values:[.5*C,U]}]};break;case"diamond":x.shape={type:"path",path:[{command:"M",values:[0,.5*U]},{command:"L",values:[.5*C,0]},{command:"L",values:[C,.5*U]},{command:"L",values:[.5*C,U]},{command:"Z",values:[]}]},j||(C+=z,U+=z);break;case"square":x.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[C,0]},{command:"L",values:[C,U]},{command:"L",values:[0,U]},{command:"Z",values:[]}]},j||(C+=z,U+=z),r&&(E=!0);break;case"triangle":x.shape={type:"path",path:[{command:"M",values:[.5*C,0]},{command:"L",values:[C,U]},{command:"L",values:[0,U]},{command:"Z",values:[]}]},j||(C+=z,U+=z),r&&(E=!0);break;case"x":x.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[C,U]},{command:"M",values:[C,0]},{command:"L",values:[0,U]}]},r&&(E=!0);break;case"path":x.shape={type:"path",path:e.path||""},j||(C+=z,U+=z),r&&(E=!0),j=!0;}break}case f:{const{width:e,height:a}=F(t),n=null!=a?a:Math.min(null!=o?o:z,i||M),l=null!=e?e:k;u.width=n,C=l,U=n;const s=x?.stroke?.cap||"butt",c="round"===s;j=!0,x.stroke.cap="butt"===s?"square":s,x.shape={type:"path",path:[{command:"M",values:[c?n/2:0,U/2]},{command:"L",values:[c?C-n/2:C,U/2]}]};break}case h:case d:{const e="object"==typeof t?.symbolConfig&&t?.symbolConfig.isSquareFill,{width:a,height:n}=F(t);C=e&&null!=a?a:null!=o?o:g,U=e&&null!=n?n:C,j||(C+=z,U+=z),j=!0,x.shape=e?{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[C,0]},{command:"L",values:[C,U]},{command:"L",values:[0,U]},{command:"L",values:[0,0]},{command:"Z",values:[]}]}:e$2.fill[0];break}case p:{let t=u$1(e.width),n=u$1(e.height);const l=null!=o?o:Math.max(t,n),s=t/n;t=s<=1?Math.ceil(l*s):l,n=s<=1?l:Math.ceil(l/s),C=Math.min(t,i||b),U=Math.min(n,i||b),x.shape={type:"image",x:-Math.round(C/2),y:-Math.round(U/2),width:C,height:U,src:e.url||""},r&&(E=!0);break}case v:{const t=e,n=t.text||w,l=t.font,s=Math.min(null!=o?o:u$1(l.size),i||b),c=L(n,{weight:l.weight,size:s,family:l.family}),r=/[\uE600-\uE6FF]/.test(n);C=r?s:c,U=s;let m=.25*S((l?s:0).toString());r&&(m+=5),x.shape={type:"text",text:n,x:t.xoffset||0,y:t.yoffset||m,align:"middle",alignBaseline:t.verticalAlignment,decoration:l&&l.decoration,rotated:t.rotated,kerning:t.kerning},x.font=l&&{size:s,style:l.style,decoration:l.decoration,weight:l.weight,family:l.family};break}}return {shapeDescriptor:x,size:[C,U],renderOptions:{node:t?.node,scale:j,opacity:t?.opacity,rotation:r,useRotationSize:E,effectView:t?.effectView}}}async function q(e,a){const{shapeDescriptor:n,size:l,renderOptions:s$1}=Z(e,a);if(!n.shape)throw new s("symbolPreview: renderPreviewHTML2D","symbol not supported.");await U(e,n);const o=[[n]];if("object"==typeof a?.symbolConfig&&a?.symbolConfig.applyColorModulation){const e=.6*l[0];o.unshift([{...n,offset:[-e,0],fill:d$1(n.fill,-.3)}]),o.push([{...n,offset:[e,0],fill:d$1(n.fill,.3)}]),l[0]+=2*e,s$1.scale=!1;}return l$1(o,l,s$1)}function D(t,a=x){const n=b$1(t),o=j$1(t),i=!n||"type"in n?null:new l(n),c=o?.color?new l(o?.color):null,r=i?E(u(i),a):null,m=c?E(u(c),a):null;return m?r?r===m?r:a>=x?"light":"dark":m:r}

export { D as getContrastingBackgroundTheme, Z as getRenderSymbolParameters, q as previewSymbol2D };
