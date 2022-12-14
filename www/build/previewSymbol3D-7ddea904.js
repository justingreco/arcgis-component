import { a } from './assets-99f5c3ee.js';
import { y, p } from './colorUtils-e0bbe79f.js';
import { s, r, t as t$1, E as E$1, a as s$2 } from './cast-3d5be210.js';
import { u } from './screenUtils-31d073db.js';
import { c as x, g, k, e as w, d as d$1 } from './utils-2bda91e5.js';
import { o as d, s as j$1 } from './symbols-ab3e849a.js';
import { t, h, u as u$1, s as s$1, L, n, o, a as l, f, l as l$1, c as m, e, p as p$1, d as c } from './symbolUtils-7f5a2832.js';
import { resolveWebStyleSymbol as j } from './webStyleSymbolUtils-fc296d98.js';
import './request-ac4d8bfb.js';
import './Color-25ce730a.js';
import './colorUtils-5009883d.js';
import './mathUtils-559a53d9.js';
import './asyncUtils-96c00c9e.js';
import './jsonUtils-f3f35e7f.js';
import './mat4-d5df0e58.js';
import './_commonjsHelpers-8dd5c177.js';
import './ItemCache-1f62ab56.js';
import './MemCache-04cdd0cd.js';
import './utils-8133dc40.js';
import './CIMSymbol-15bdb580.js';
import './enumeration-6695a859.js';
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
import './jsxFactory-4cd653a4.js';
import './intl-54ccdc89.js';
import './number-c5a37d3e.js';
import './messages-5e9a4a9e.js';
import './Handles-54afc0a7.js';
import './reactiveUtils-bd6fe823.js';
import './uuid-ac104993.js';
import './index-f980186a.js';
import './mat2d-677a80fe.js';
import './devEnvironmentUtils-cb76d69b.js';
import './jsonUtils-a25e8eb8.js';
import './styleUtils-d2332fad.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const O=t.size,C=t.maxSize,I=t.maxOutlineSize,R=t.lineWidth,E=t.tallSymbolWidth,Z=s.getLogger("esri.symbols.support.previewSymbol3D");function q(e){const t=e.outline,s=r(e.material)?e.material.color:null,r$1=r(s)?s.toHex():null;if(t$1(t)||"pattern"in t&&r(t.pattern)&&"style"===t.pattern.type&&"none"===t.pattern.style)return "fill"===e.type&&"#ffffff"===r$1?{color:"#bdc3c7",width:.75}:null;const a=u(t.size)||0;return {color:"rgba("+(r(t.color)?t.color.toRgba():"255,255,255,1")+")",width:Math.min(a,I),style:"pattern"in t&&r(t.pattern)&&"style"===t.pattern.type?x(t.pattern.style):null,join:"butt",cap:"patternCap"in t?t.patternCap:"butt"}}function A(t,s){const r=s&&s.resource,a$1=r&&r.href;if(t.thumbnail&&t.thumbnail.url)return Promise.resolve(t.thumbnail.url);if(a$1&&"object"!==s.type)return Promise.resolve(g(t,s));const o=a("esri/images/Legend/legend3dsymboldefault.png");return t.styleOrigin&&(t.styleOrigin.styleName||t.styleOrigin.styleUrl)?j(t.styleOrigin,{portal:t.styleOrigin.portal},"webRef").catch((e=>e)).then((e=>e?.thumbnail?.url||o)):Promise.resolve(o)}function H(e,r=1){const a=e.a,o=y(e),n=o.h,l=o.s/r,i=100-(100-o.v)/r,{r:c,g:p$1,b:h}=p({h:n,s:l,v:i});return [c,p$1,h,a]}function N(e){return "water"===e.type?t$1(e.color)?null:e.color:t$1(e.material)||t$1(e.material.color)?null:e.material.color}function T(e,t=0){const s=N(e);if(!s){if("fill"===e.type)return null;const s=k.r,r=h(s,t);return [r,r,r,100]}const r=s.toRgba();for(let a=0;a<3;a++)r[a]=h(r[a],t);return r}async function W(t,s){const r=t.style;if("none"===r)return null;return {type:"pattern",x:0,y:0,src:await w(a(`esri/symbols/patterns/${r}.png`),s.toCss(!0)),width:5,height:5}}function $(e){return e.outline?q(e):{color:"rgba(0, 0, 0, 1)",width:1.5}}function B(e,t){const s=N(e);if(!s)return null;let r="rgba(";return r+=h(s.r,t)+",",r+=h(s.g,t)+",",r+=h(s.b,t)+",",r+s.a+");"}function F(e,t){const s=B(e,t);if(!s)return {};if("pattern"in e&&r(e.pattern)&&"style"===e.pattern.type&&"none"===e.pattern.style)return null;return {color:s,width:Math.min(e.size?u(e.size):.75,I),style:"pattern"in e&&r(e.pattern)&&"style"===e.pattern.type?x(e.pattern.style):null,cap:"cap"in e?e.cap:null,join:"join"in e?"miter"===e.join?u(2):e.join:null}}function G(e,t,s){const r=.75*s;return {type:"linear",x1:r?.25*r:0,y1:r?.5*r:0,x2:r||4,y2:r?.5*r:4,colors:[{color:e,offset:0},{color:t,offset:1}]}}function J(e){const t=e.depth,s=e.height,r=e.width;return r&&t&&s&&r===t&&r<s}function K(e,t,s){const r=[];if(!e)return r;switch(e.type){case"icon":{const s=0,a=0,o=t,n=t;switch(e.resource&&e.resource.primitive||j$1){case"circle":r.push({shape:{type:"circle",cx:0,cy:0,r:.5*t},fill:T(e,0),stroke:q(e)});break;case"square":r.push({shape:{type:"path",path:[{command:"M",values:[s,n]},{command:"L",values:[s,a]},{command:"L",values:[o,a]},{command:"L",values:[o,n]},{command:"Z",values:[]}]},fill:T(e,0),stroke:q(e)});break;case"triangle":r.push({shape:{type:"path",path:[{command:"M",values:[s,n]},{command:"L",values:[.5*o,a]},{command:"L",values:[o,n]},{command:"Z",values:[]}]},fill:T(e,0),stroke:q(e)});break;case"cross":r.push({shape:{type:"path",path:[{command:"M",values:[.5*o,a]},{command:"L",values:[.5*o,n]},{command:"M",values:[s,.5*n]},{command:"L",values:[o,.5*n]}]},stroke:$(e)});break;case"x":r.push({shape:{type:"path",path:[{command:"M",values:[s,a]},{command:"L",values:[o,n]},{command:"M",values:[o,a]},{command:"L",values:[s,n]}]},stroke:$(e)});break;case"kite":r.push({shape:{type:"path",path:[{command:"M",values:[s,.5*n]},{command:"L",values:[.5*o,a]},{command:"L",values:[o,.5*n]},{command:"L",values:[.5*o,n]},{command:"Z",values:[]}]},fill:T(e,0),stroke:q(e)});}break}case"object":switch(e.resource&&e.resource.primitive||d){case"cone":{const a=G(T(e,0),T(e,-.6),s?E:t),o=l(t,s);r.push({shape:o[0],fill:a}),r.push({shape:o[1],fill:a});break}case"inverted-cone":{const s=T(e,0),a=G(s,T(e,-.6),t),o$1=o(t);r.push({shape:o$1[0],fill:a}),r.push({shape:o$1[1],fill:s});break}case"cube":{const a=n(t,s);r.push({shape:a[0],fill:T(e,0)}),r.push({shape:a[1],fill:T(e,-.3)}),r.push({shape:a[2],fill:T(e,-.5)});break}case"cylinder":{const a=G(T(e,0),T(e,-.6),s?E:t),o=L(t,s);r.push({shape:o[0],fill:a}),r.push({shape:o[1],fill:a}),r.push({shape:o[2],fill:T(e,0)});break}case"diamond":{const s=s$1(t);r.push({shape:s[0],fill:T(e,-.3)}),r.push({shape:s[1],fill:T(e,0)}),r.push({shape:s[2],fill:T(e,-.3)}),r.push({shape:s[3],fill:T(e,-.7)});break}case"sphere":{const s=G(T(e,0),T(e,-.6));s.x1=0,s.y1=0,s.x2=.25*t,s.y2=.25*t,r.push({shape:{type:"circle",cx:0,cy:0,r:.5*t},fill:s});break}case"tetrahedron":{const s=u$1(t);r.push({shape:s[0],fill:T(e,-.3)}),r.push({shape:s[1],fill:T(e,0)}),r.push({shape:s[2],fill:T(e,-.6)});break}}break}return r}function Q(e){const t="number"==typeof e?.size?e?.size:null;return t?u(t):null}function V(e){return "icon"===e.type?"multiply":"tint"}function X(e,t){const s=Q(t),r=t&&t.maxSize?u(t.maxSize):null,a=t&&t.disableUpsampling,o=e.symbolLayers,n=[];let c=0,p=0;const h=o.getItemAt(o.length-1);let u$1;return h&&"icon"===h.type&&(u$1=h.size&&u(h.size)),o.forEach((o=>{if("icon"!==o.type&&"object"!==o.type)return;const l="icon"===o.type?o.size&&u(o.size):0,h=s||l?Math.ceil(Math.min(s||l,r||C)):O;if(o&&o.resource&&o.resource.href){const t=A(e,o).then((e=>{const t=o.get("material.color"),s=V(o);return f(e,h,t,s,a)})).then((e=>{const t=e.width,s=e.height;return c=Math.max(c,t),p=Math.max(p,s),[{shape:{type:"image",x:0,y:0,width:t,height:s,src:e.url},fill:null,stroke:null}]}));n.push(t);}else {let e=h;"icon"===o.type&&u$1&&s&&(e=h*(l/u$1));const r="tall"===t?.symbolConfig||t?.symbolConfig?.isTall||"object"===o.type&&J(o);c=Math.max(c,r?E:e),p=Math.max(p,e),n.push(Promise.resolve(K(o,e,r)));}})),E$1(n).then((e=>{const s=[];return e.forEach((e=>{e.value?s.push(e.value):e.error&&Z.warn("error while building swatchInfo!",e.error);})),l$1(s,[c,p],{node:t&&t.node,scale:!1,opacity:t&&t.opacity})}))}function Y(e$1,t){const s=e$1.symbolLayers,r=[],a=d$1(e$1),n=Q(t),l=(t&&t.maxSize?u(t.maxSize):null)||I;let c,p=0,h=0;return s.forEach(((e$1,t)=>{if(!e$1)return;if("line"!==e$1.type&&"path"!==e$1.type)return;const s=[];switch(e$1.type){case"line":{const r=F(e$1,0);if(t$1(r))break;const a=r&&r.width||0;0===t&&(c=a);const i=Math.min(n||a,l),u=0===t?i:n?i*(a/c):i,m=u>R/2?2*u:R;h=Math.max(h,u),p=Math.max(p,m),r.width=u,s.push({shape:{type:"path",path:[{command:"M",values:[0,.5*h]},{command:"L",values:[p,.5*h]}]},stroke:r});break}case"path":{const t=Math.min(n||O,l),r=T(e$1,0),a=T(e$1,-.2),o=B(e$1,-.4),i=o?{color:o,width:1}:{};if("quad"===e$1.profile){const t=e$1.width,o=e$1.height,n=m(t&&o?t/o:1,0===o,0===t),l={...i,join:"bevel"};s.push({shape:n[0],fill:a,stroke:l}),s.push({shape:n[1],fill:a,stroke:l}),s.push({shape:n[2],fill:r,stroke:l});}else s.push({shape:e.pathSymbol3DLayer[0],fill:a,stroke:i}),s.push({shape:e.pathSymbol3DLayer[1],fill:r,stroke:i});h=Math.max(h,t),p=h;}}r.push(s);})),Promise.resolve(l$1(r,[p,h],{node:t&&t.node,scale:a,opacity:t&&t.opacity}))}async function _(e$1,t){const s="mesh-3d"===e$1.type,r$1=e$1.symbolLayers,a=Q(t),l=t&&t.maxSize?u(t.maxSize):null,c$1=a||O,p=[];let h=0,u$1=0,m=!1;for(let i=0;i<r$1.length;i++){const e$1=r$1.getItemAt(i),t=[];if(s&&"fill"!==e$1.type)continue;const a=e.fill[0];switch(e$1.type){case"fill":{const r$1=q(e$1),o=Math.min(c$1,l||C);h=Math.max(h,o),u$1=Math.max(u$1,o),m=!0;let i=T(e$1,0);const p="pattern"in e$1&&e$1.pattern,f=N(e$1);!s&&r(p)&&"style"===p.type&&"solid"!==p.style&&f&&(i=await W(p,f)),t.push({shape:a,fill:i,stroke:r$1});break}case"line":{const s=F(e$1,0);if(t$1(s))break;const r={stroke:s,shape:a};h=Math.max(h,O),u$1=Math.max(u$1,O),t.push(r);break}case"extrude":{const s={join:"round",width:1,...F(e$1,-.4)},r=T(e$1,0),a=T(e$1,-.2),o=Math.min(c$1,l||C),n=c(o);s.width=1,t.push({shape:n[0],fill:a,stroke:s}),t.push({shape:n[1],fill:a,stroke:s}),t.push({shape:n[2],fill:r,stroke:s});const i=O,p=.7*O+.5*o;h=Math.max(h,i),u$1=Math.max(u$1,p);break}case"water":{const s=N(e$1),r=H(s),a=H(s,2),o=H(s,3),n=p$1();m=!0,t.push({shape:n[0],fill:r}),t.push({shape:n[1],fill:a}),t.push({shape:n[2],fill:o});const i=Math.min(c$1,l||C);h=Math.max(h,i),u$1=Math.max(u$1,i);break}}p.push(t);}return l$1(p,[h,u$1],{node:t&&t.node,scale:m,opacity:t&&t.opacity})}function ee(e,t){if(0===e.symbolLayers.length)return Promise.reject(new s$2("symbolPreview: renderPreviewHTML3D","No symbolLayers in the symbol."));switch(e.type){case"point-3d":return X(e,t);case"line-3d":return Y(e,t);case"polygon-3d":case"mesh-3d":return _(e,t)}return Promise.reject(new s$2("symbolPreview: swatchInfo3D","symbol not supported."))}

export { W as getPatternDescriptor, Q as getSizeFromOptions, T as getSymbolLayerFill, ee as previewSymbol3D };
