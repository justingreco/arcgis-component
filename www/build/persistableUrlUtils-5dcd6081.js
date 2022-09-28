import { r } from './cast-3d5be210.js';
import { Q, _, K, v as vt, F, X, b, z } from './request-ac4d8bfb.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function i(e,o){const s=o&&o.url&&o.url.path;if(e&&s&&(e=Q(e,s,{preserveProtocolRelative:!0}),o.portalItem&&o.readResourcePaths)){const r=_(e,o.portalItem.itemUrl);v.test(r)&&o.readResourcePaths.push(o.portalItem.resourceFromPath(r).path);}return y(e,o&&o.portal)}function c(e,a,u=I.YES){if(!e)return e;!K(e)&&a&&a.blockedRelativeUrls&&a.blockedRelativeUrls.push(e);let n=Q(e);if(a){const r=a.verifyItemRelativeUrls&&a.verifyItemRelativeUrls.rootPath||a.url&&a.url.path;if(r){const o=y(r,a.portal);n=_(y(n,a.portal),o,o),n!==e&&a.verifyItemRelativeUrls&&a.verifyItemRelativeUrls.writtenUrls.push(n);}}return n=U(n,a&&a.portal),K(n)&&(n=F(n)),a?.resources&&a?.portalItem&&!K(n)&&!X(n)&&u===I.YES&&a.resources.toKeep.push({resource:a.portalItem.resourceFromPath(n)}),n}function m(e,r,t){return i(e,t)}function p(e,r,t,o){const s=c(e,o);void 0!==s&&(r[t]=s);}const f=/\/items\/([^\/]+)\/resources\//,v=/^\.\/resources\//;function h(r$1){const t=r(r$1)?r$1.match(f):null;return r(t)?t[1]:null}function U(e,r){return r&&!r.isPortal&&r.urlKey&&r.customBaseUrl?vt(e,`${r.urlKey}.${r.customBaseUrl}`,r.portalHostname):e}function y(e,r){if(!r||r.isPortal||!r.urlKey||!r.customBaseUrl)return e;const t=`${r.urlKey}.${r.customBaseUrl}`,o=b();return z(o,`${o.scheme}://${t}`)?vt(e,r.portalHostname,t):vt(e,t,r.portalHostname)}var I;!function(e){e[e.YES=0]="YES",e[e.NO=1]="NO";}(I||(I={}));const R=Object.freeze(Object.defineProperty({__proto__:null,fromJSON:i,toJSON:c,read:m,write:p,itemIdFromResourceUrl:h,ensureMainOnlineDomain:U,get MarkKeep(){return I}},Symbol.toStringTag,{value:"Module"}));

export { I, R, U, c, h, i, m, p };
