import { c as E, S } from './Utils-b4b0f45e.js';
import { A, f, _ } from './MaterialKey-ac9b534a.js';
import './cast-3d5be210.js';
import './mathUtils-559a53d9.js';
import './screenUtils-31d073db.js';
import './enums-395c521f.js';
import './number-ad66b701.js';
import './enums-4770f29d.js';
import './Texture-f189b7ba.js';
import './context-util-5ae1bf7b.js';
import './VertexElementDescriptor-3b53aa99.js';
import './alignmentUtils-4bbd02ca.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function l(e){if("line-marker"===e.type){return {type:"line-marker",color:e.color?.toJSON(),placement:e.placement,style:e.style}}return e.constructor.fromJSON(e.toJSON()).toJSON()}function s(e){return A(e)}function o(e,a,t){if(!e)return null;switch(e.type){case"simple-fill":case"picture-fill":return c(e,a,t);case"simple-marker":case"picture-marker":return h(e,a,t);case"simple-line":return m(e,a,t);case"text":return y(e,a,t);case"label":return i(e,a,t);case"cim":return {type:"cim",rendererKey:a.vvFlags,data:e.data,maxVVSize:a.maxVVSize};case"CIMSymbolReference":return {type:"cim",rendererKey:a.vvFlags,data:e,maxVVSize:a.maxVVSize};case"web-style":return {...l(e),type:"web-style",hash:e.hash(),rendererKey:a.vvFlags,maxVVSize:a.maxVVSize};default:throw new Error(`symbol not supported ${e.type}`)}}function i(a,r,n){const l=a.toJSON(),o=f(E.LABEL,{...r,placement:l.labelPlacement});return {materialKey:n?s(o):o,hash:a.hash(),...l,labelPlacement:l.labelPlacement}}function c(a,r,o){const i=f(E.FILL,r),c=o?s(i):i,m=a.clone(),h=m.outline,y=_(r.symbologyType);y||(m.outline=null);const u={materialKey:c,hash:m.hash(),...l(m)};if(y)return u;const p=[];if(p.push(u),h){const a=f(E.LINE,{...r,isOutline:!0}),n={materialKey:o?s(a):a,hash:h.hash(),...l(h)};p.push(n);}return {type:"composite-symbol",layers:p,hash:p.reduce(((e,a)=>a.hash+e),"")}}function m(r,o,i){const c=_(o.symbologyType)?S.DEFAULT:o.symbologyType,m=f(E.LINE,{...o,symbologyType:c}),h=i?s(m):m,y=r.clone(),u=y.marker;y.marker=null;const p=[];if(p.push({materialKey:h,hash:y.hash(),...l(y)}),u){const a=f(E.MARKER,o),r=i?s(a):a;u.color=u.color??y.color,p.push({materialKey:r,hash:u.hash(),lineWidth:y.width,...l(u)});}return {type:"composite-symbol",layers:p,hash:p.reduce(((e,a)=>a.hash+e),"")}}function h(a,r,n){const o=f(E.MARKER,r),i=n?s(o):o,c=l(a);return {materialKey:i,hash:a.hash(),...c,angle:a.angle,maxVVSize:r.maxVVSize}}function y(a,r,n){const o=f(E.TEXT,r),i=n?s(o):o,c=l(a);return {materialKey:i,hash:a.hash(),...c,angle:a.angle,maxVVSize:r.maxVVSize}}

export { o as createSymbolSchema };
