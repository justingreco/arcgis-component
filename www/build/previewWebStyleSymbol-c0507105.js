import { U } from './request-ac4d8bfb.js';
import { u } from './screenUtils-31d073db.js';
import { t } from './symbolUtils-7f5a2832.js';
import './cast-3d5be210.js';
import './fieldUtils-240a3b99.js';
import './geometry-2f332a26.js';
import './Extent-f27111e1.js';
import './Point-edff2a11.js';
import './JSONSupport-dce2c67b.js';
import './Polyline-dcdb3782.js';
import './utils-2bda91e5.js';
import './Color-25ce730a.js';
import './colorUtils-5009883d.js';
import './mathUtils-559a53d9.js';
import './symbols-ab3e849a.js';
import './CIMSymbol-15bdb580.js';
import './enumeration-6695a859.js';
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
function n(e,i,n){const o=e.thumbnail&&e.thumbnail.url;return o?U(o,{responseType:"image"}).then((t=>{const e=h(t.data,n);return n&&n.node?(n.node.appendChild(e),n.node):e})):e.fetchSymbol().then((t=>i(t,n)))}function h(t$1,n){const h=!/\\.svg$/i.test(t$1.src)&&n&&n.disableUpsampling,o=Math.max(t$1.width,t$1.height);let r=n&&null!=n.maxSize?u(n.maxSize):t.maxSize;h&&(r=Math.min(o,r));const s="number"==typeof n?.size?n?.size:null,m=Math.min(r,null!=s?u(s):o);if(m!==o){const e=0!==t$1.width&&0!==t$1.height?t$1.width/t$1.height:1;e>=1?(t$1.width=m,t$1.height=m/e):(t$1.width=m*e,t$1.height=m);}return t$1}

export { n as previewWebStyleSymbol };
