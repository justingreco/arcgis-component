import { d as c$2, B as p$2, C as l } from './symbols-ab3e849a.js';
import { c as c$1, a } from './devEnvironmentUtils-cb76d69b.js';
import { a as s, r } from './cast-3d5be210.js';
import { j as j$2, O as Ot } from './request-ac4d8bfb.js';
import { B } from './Portal-5df9f5a7.js';
import { i } from './persistableUrlUtils-5dcd6081.js';
import { p } from './jsonUtils-a25e8eb8.js';
import { j as j$1, c, d as d$1, p as p$1, U } from './styleUtils-d2332fad.js';
import './CIMSymbol-15bdb580.js';
import './enumeration-6695a859.js';
import './Point-edff2a11.js';
import './JSONSupport-dce2c67b.js';
import './fieldUtils-240a3b99.js';
import './geometry-2f332a26.js';
import './Extent-f27111e1.js';
import './Polyline-dcdb3782.js';
import './Symbol-573a64f6.js';
import './Color-25ce730a.js';
import './colorUtils-5009883d.js';
import './mathUtils-559a53d9.js';
import './screenUtils-31d073db.js';
import './opacityUtils-dcd94f00.js';
import './aaBoundingBox-b312516d.js';
import './aaBoundingRect-5e1a4e52.js';
import './Collection-a38e0489.js';
import './collectionUtils-302901c0.js';
import './Clonable-533c7a05.js';
import './Promise-d2759b2e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function j(t,e,r,l){return t.name?t.styleName&&"Esri2DPointSymbolsStyle"===t.styleName?d(t,e,l):c(t,e,l).then((o=>h(o,t.name,e,r,l))):Promise.reject(new s("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function h(f,b,j,h,d){const U=f.data,N=j&&r(j.portal)?j.portal:B.getDefault(),w={portal:N,url:j$2(f.baseUrl),origin:"portal-item"},D=U.items.find((t=>t.name===b));if(!D){const t=`The symbol name '${b}' could not be found`;return Promise.reject(new s("symbolstyleutils:symbol-name-not-found",t,{symbolName:b}))}let P=i(d$1(D,h),w),S=D.thumbnail&&D.thumbnail.href;const E=D.thumbnail&&D.thumbnail.imageData;c$1()&&(P=a(P),S=a(S));const O={portal:N,url:j$2(Ot(P)),origin:"portal-item"};return j$1(P,d).then((e=>{const r="cimRef"===h?p$1(e.data):e.data,o=p(r,O);if(o&&c$2(o)){if(S){const t=i(S,w);o.thumbnail=new p$2({url:t});}else E&&(o.thumbnail=new p$2({url:`data:image/png;base64,${E}`}));f.styleUrl?o.styleOrigin=new l({portal:j.portal,styleUrl:f.styleUrl,name:b}):f.styleName&&(o.styleOrigin=new l({portal:j.portal,styleName:f.styleName,name:b}));}return o}))}function d(t,e,r$1){const o=U.replace(/\{SymbolName\}/gi,t.name),i=r(e.portal)?e.portal:B.getDefault();return j$1(o,r$1).then((t=>{const e=p$1(t.data);return p(e,{portal:i,url:j$2(Ot(o)),origin:"portal-item"})}))}

export { h as fetchSymbolFromStyle, j as resolveWebStyleSymbol };
