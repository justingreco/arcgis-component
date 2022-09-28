import { d as c$1, c as b$1, e as h, m as m$1, f as b$2, y, n, S, b as S$1, a as m$2, i as b$3, A, k } from './symbols-ab3e849a.js';
import { a as s, r, t } from './cast-3d5be210.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const p$1={retainId:!1,ignoreDrivers:!1,hasLabelingContext:!0};function a$1(a,S$2=p$1){if(!a)return {symbol:null};const{retainId:c=p$1.retainId,ignoreDrivers:u=p$1.ignoreDrivers,hasLabelingContext:d=p$1.hasLabelingContext,retainCIM:j=p$1.retainCIM}=S$2;let D;if(c$1(a)||a instanceof b$1)D=a.clone();else if("cim"===a.type){const o=a.data?.symbol?.type;if("CIMPointSymbol"!==o)return {error:new s("symbol-conversion:unsupported-cim-symbol",`CIM symbol of type '${o||"unknown"}' is unsupported in 3D`,{symbol:a})};D=j?a.clone():h.fromCIMSymbol(a);}else if(a instanceof m$1)D=b$2.fromSimpleLineSymbol(a);else if(a instanceof y)D=h.fromSimpleMarkerSymbol(a);else if(a instanceof n)D=h.fromPictureMarkerSymbol(a);else if(a instanceof S)D=S$1.fromSimpleFillSymbol(a);else {if(!(a instanceof m$2))return {error:new s("symbol-conversion:unsupported-2d-symbol",`2D symbol of type '${a.type||a.declaredClass}' is unsupported in 3D`,{symbol:a})};D=d?b$3.fromTextSymbol(a):h.fromTextSymbol(a);}if(c&&"cim"!==D.type&&(D.id=a.id),u&&c$1(D))for(let o=0;o<D.symbolLayers.length;++o)D.symbolLayers.getItemAt(o)._ignoreDrivers=!0;return {symbol:D}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const l=["building-scene","integrated-mesh","point-cloud","scene"];function m(e,o,t,s){const r$1=a(e,{},{context:s,isLabelSymbol:!1});r(r$1)&&(o[t]=r$1);}function b(e,o,t,s){const r$1=a(e,{},{context:s,isLabelSymbol:!0});r(r$1)&&(o[t]=r$1);}function c(e){return e instanceof A||e instanceof b$1}function a(e,s$1,i){if(t(e))return null;const{context:m,isLabelSymbol:b}=i,a=m?.origin,p=m?.messages;if("web-scene"===a&&!c(e)){const t=a$1(e,{retainCIM:!0,hasLabelingContext:b});return r(t.symbol)?t.symbol.write(s$1,m):(p?.push(new s("symbol:unsupported",`Symbols of type '${e.declaredClass}' are not supported in scenes. Use 3D symbology instead when working with WebScene and SceneView`,{symbol:e,context:m,error:t.error})),null)}return ("web-map"===a||"portal-item"===a&&!l.includes(m?.layer?.type))&&c(e)?(p?.push(new s("symbol:unsupported",`Symbols of type '${e.declaredClass}' are not supported in web maps and portal items. Use 2D symbology and CIMSymbol instead when working with MapView`,{symbol:e,context:m})),null):e.write(s$1,m)}function p(o,n){return k(o,null,n)}

export { a$1 as a, b, m, p };
