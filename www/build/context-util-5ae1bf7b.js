import { r, c as a$1, t } from './cast-3d5be210.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var o;function n(e,r$1,o={}){const n=i(e);for(;n.length>1;){const e=l(r$1,n.shift(),o);if(r(e))return e}return c(r$1,n.shift(),o)}function i(t){const r=a$1("esri-force-webgl");if(r===o.WEBGL1||r===o.WEBGL2)return [r];switch(t){case"2d":return a$1("mac")&&a$1("chrome")?[o.WEBGL1,o.WEBGL2]:[o.WEBGL2,o.WEBGL1];case"3d":return [o.WEBGL2,o.WEBGL1]}}function c(e,t$1,o={}){if(!window.WebGLRenderingContext)return a(e,s),null;const n=l(e,t$1,o);return t(n)&&a(e,u),n}function l(e,t,r={}){const n=t===o.WEBGL1?["webgl","experimental-webgl","webkit-3d","moz-webgl"]:["webgl2"];let i=null;for(const o of n){try{i=e.getContext(o,r);}catch(c){}if(i)break}return i}function a(e,t){const r=e.parentNode;r&&(r.innerHTML='<table style="background-color: #8CE; width: 100%; height: 100%;"><tr><td align="center"><div style="display: table-cell; vertical-align: middle;"><div style="">'+t+"</div></div></td></tr></table>");}!function(e){e[e.WEBGL1=1]="WEBGL1",e[e.WEBGL2=2]="WEBGL2";}(o||(o={}));const s='This page requires a browser that supports WebGL.<br/><a href="http://get.webgl.org">Click here to upgrade your browser.</a>',u='It doesn\'t appear your computer can support WebGL.<br/><a href="http://get.webgl.org/troubleshooting/">Click here for more information.</a>';

export { i, l, n, o };
