import { t as t$1, a3 as r } from './cast-3d5be210.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function n(r,e,n){const i=e.flatten((({sublayers:r})=>r)).length;if(i!==r.length)return !0;return !!r.some((r=>r.originIdOf("minScale")>n||r.originIdOf("maxScale")>n||r.originIdOf("renderer")>n||r.originIdOf("labelingInfo")>n||r.originIdOf("opacity")>n||r.originIdOf("labelsVisible")>n||r.originIdOf("source")>n))||!o(r,e)}function i(n,i,t){return !!n.some((n=>{const i=n.source;return !(!i||"map-layer"===i.type&&i.mapLayerId===n.id&&(t$1(i.gdbVersion)||i.gdbVersion===t))||n.originIdOf("renderer")>r.SERVICE||n.originIdOf("labelingInfo")>r.SERVICE||n.originIdOf("opacity")>r.SERVICE||n.originIdOf("labelsVisible")>r.SERVICE}))||!o(n,i)}function o(e,n){if(!e||!e.length||t$1(n))return !0;const i=n.slice().reverse().flatten((({sublayers:r})=>r&&r.toArray().reverse())).map((r=>r.id)).toArray();if(e.length>i.length)return !1;let o=0;const t=i.length;for(const{id:r}of e){for(;o<t&&i[o]!==r;)o++;if(o>=t)return !1}return !0}function t(r){return !!r&&r.some((r=>null!=r.minScale||r.layerDefinition&&null!=r.layerDefinition.minScale))}

export { i, n, t };
