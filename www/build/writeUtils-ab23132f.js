import { r, k as t, an as a$2, a as s$1, m as m$1 } from './cast-3d5be210.js';
import { a as a$1 } from './layerUtils-160a1a44.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const l=new Set(["bing-maps","imagery","imagery-tile","map-image","open-street-map","tile","unknown","unsupported","vector-tile","web-tile","wms","wmts"]),a=new Set(["csv","feature","geo-rss","geojson","group","imagery","imagery-tile","kml","map-image","map-notes","ogc-feature","route","tile","unknown","unsupported","vector-tile","web-tile","wfs","wms","wmts"]);function s(e){l.delete(e),a.delete(e);}function m(e){l.add(e),a.add(e);}function p(e){return "basemap"===e.layerContainerType?l:"operational-layers"===e.layerContainerType?a:null}function c(e,t){if(t.restrictedWebMapWriting){const r$1=p(t);return !r(r$1)||r$1.has(e.type)&&!a$1(e)}return !0}function u(e,t$1){if(a$1(e)){const n=t("featureCollection.layers",t$1),i=n&&n[0]&&n[0].layerDefinition;i&&d(e,i);}else if("stream"===e.type){d(e,t$1.layerDefinition=t$1.layerDefinition||{});}else "group"!==e.type&&d(e,t$1);}function d(e,t){"maxScale"in e&&(t.maxScale=a$2(e.maxScale)),"minScale"in e&&(t.minScale=a$2(e.minScale));}function f(e,t){if(u(e,t),"blendMode"in e&&(t.blendMode=e.blendMode,"normal"===t.blendMode&&delete t.blendMode),t.opacity=a$2(e.opacity),t.title=e.title||"Layer",t.visibility=e.visible,"legendEnabled"in e&&"wmts"!==e.type)if(a$1(e)){const n=t.featureCollection;n&&(n.showLegend=e.legendEnabled);}else t.showLegend=e.legendEnabled;}function y(r$1,i,o){if(!("write"in r$1)||!r$1.write)return o&&o.messages&&o.messages.push(new s$1("layer:unsupported",`Layers (${r$1.title}, ${r$1.id}) of type '${r$1.declaredClass}' cannot be persisted`,{layer:r$1})),null;if(c(r$1,o)){const e={};return r$1.write(e,o)?e:null}return r(i)&&f(r$1,i=m$1(i)),i}

export { y };
