import { e } from './screenUtils-31d073db.js';
import { CIMSymbolRasterizer as z } from './CIMSymbolRasterizer-fe061580.js';
import { i, f as c } from './utils-2bda91e5.js';
import { t, l } from './symbolUtils-7f5a2832.js';
import './Color-25ce730a.js';
import './colorUtils-5009883d.js';
import './mathUtils-559a53d9.js';
import './cast-3d5be210.js';
import './request-ac4d8bfb.js';
import './geometry-2f332a26.js';
import './Extent-f27111e1.js';
import './Point-edff2a11.js';
import './JSONSupport-dce2c67b.js';
import './Polyline-dcdb3782.js';
import './cimAnalyzer-a2a69390.js';
import './fieldUtils-240a3b99.js';
import './CIMSymbolHelper-78ca7d84.js';
import './BidiEngine-c95c4945.js';
import './floatRGBA-64e5bf11.js';
import './aaBoundingRect-5e1a4e52.js';
import './enums-395c521f.js';
import './alignmentUtils-4bbd02ca.js';
import './mat2d-677a80fe.js';
import './vec2-4f9a494f.js';
import './vec2f32-23e4a539.js';
import './number-ad66b701.js';
import './utils-8133dc40.js';
import './GeometryUtils-bcda40bd.js';
import './callExpressionWithFeature-cfe9aa0a.js';
import './quantizationUtils-65995723.js';
import './Rasterizer-91e8ce17.js';
import './symbols-ab3e849a.js';
import './CIMSymbol-15bdb580.js';
import './enumeration-6695a859.js';
import './Symbol-573a64f6.js';
import './opacityUtils-dcd94f00.js';
import './aaBoundingBox-b312516d.js';
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
import './colorUtils-e0bbe79f.js';
import './jsxFactory-4cd653a4.js';
import './intl-54ccdc89.js';
import './number-c5a37d3e.js';
import './messages-5e9a4a9e.js';
import './Handles-54afc0a7.js';
import './reactiveUtils-bd6fe823.js';
import './uuid-ac104993.js';
import './index-f980186a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const s=new z(null,!0),n=t.maxSize;async function r(t,a={}){const{size:r,maxSize:c$1,node:m,opacity:f}=a,p=a.cimOptions||a,{feature:y,fieldMap:h,geometryType:u,style:d}=p,g=i(t),w="number"==typeof r?r:null,b=Math.min(null!=w?w:g,null!=c$1?c$1:e(n));b!==g&&(t=t.clone(),c(t,b,{preserveOutlineWidth:!0}));let M=3;t&&t.data&&t.data.symbol&&"CIMPointSymbol"!==t.data.symbol.type&&(M=1);const S=await s.rasterizeCIMSymbolAsync(t,y,h,u,{scaleFactor:M,style:d}),j=document.createElement("canvas");j.width=S.imageData.width,j.height=S.imageData.height;j.getContext("2d").putImageData(S.imageData,0,0);let x=j.width/M,z=j.height/M;if(null!=r&&(null==a?.scale||a?.scale)){const e=x/z;x=e<=1?Math.ceil(b*e):b,z=e<=1?b:Math.ceil(b/e);}const C=new Image(x,z);C.src=j.toDataURL(),null!=f&&(C.style.opacity=`${f}`);let D=C;if(null!=a.effectView){const e={shape:{type:"image",x:0,y:0,width:x,height:z,src:C.src},fill:null,stroke:null,offset:[0,0]};D=l([[e]],[x,z],{effectView:a.effectView});}return m&&m.appendChild(D),D}

export { r as previewCIMSymbol };
