import { r, Z as y, a9 as t$1, t as t$2, bv as s, ak as m$1 } from './cast-3d5be210.js';
import { i } from './multiOriginJSONSupportUtils-917e4f3f.js';
import { k as kt, K, V, G } from './request-ac4d8bfb.js';
import { t as t$3 } from './uuid-ac104993.js';
import { m, c, I as I$1, h, R as R$1 } from './persistableUrlUtils-5dcd6081.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function p(i){return o[n(i)]||e}function n(i){return i instanceof Blob?i.type:t(i.url)}function t(p){const n=kt(p);return g[n]||a}const o={},a="text/plain",e=o[a],g={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip"};for(const l in g)o[g[l]]=l;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function w(r$1){const e=r(r$1)&&r$1.origins?r$1.origins:[void 0];return (t,o)=>{const i=v(r$1,t,o);for(const r of e){const e=y(t,r,o);for(const t in i)e[t]=i[t];}}}function v(r$1,e,o){if(r(r$1)&&"resource"===r$1.type)return U(r$1,e,o);switch(r(r$1)&&r$1.type?r$1.type:"other"){case"other":return {read:!0,write:!0};case"url":{const{read:t,write:r}=R$1;return {read:t,write:r}}}}function U(e,s$1,u){const p=s(s$1,u);return {type:String,read:(t,r,e)=>{const o=m(t,r,e);return p.type===String?o:"function"==typeof p.type?new p.type({url:o}):void 0},write:{writer(s,a,l,f){if(!f||!f.resources)return "string"==typeof s?void(a[l]=c(s,f)):void(a[l]=s.write({},f));const m=R(s),g=m?c(m,{...f,verifyItemRelativeUrls:f&&f.verifyItemRelativeUrls?{writtenUrls:f.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null},I$1.NO):null,w=p.type!==String&&(!i(this)||f&&f.origin&&this.originIdOf(u)>t$1(f.origin));f&&f.portalItem&&r(g)&&!K(g)?w?I(this,u,s,g,a,l,f,e):O(g,a,l,f):f&&f.portalItem&&(t$2(g)||r(h(g))||V(g)||w)?j(this,u,s,g,a,l,f,e):a[l]=g;}}}}function j(t,r,o,i,u,a,c,l){const m=t$3(),y=b(o,i,c),h=G(m$1(l,"prefix"),m),d=`${h}.${p(y)}`,g=c.portalItem.resourceFromPath(d);V(i)&&c.resources.pendingOperations.push(P(i).then((t=>{g.path=`${h}.${p(t)}`,u[a]=g.itemRelativeUrl;})).catch((()=>{}))),S(t,r,g,y,c.resources.toAdd),u[a]=g.itemRelativeUrl;}function I(t,r,e,o,i,n,s,p$1){const a=s.portalItem.resourceFromPath(o),c=b(e,o,s);p(c)===kt(a.path)?(S(t,r,a,c,s.resources.toUpdate),i[n]=o):j(t,r,e,o,i,n,s,p$1);}function O(t,r,e,o){o.resources.toKeep.push({resource:o.portalItem.resourceFromPath(t)}),r[e]=t;}function S(t,r,e,o,i){i.push({resource:e,content:o,finish:e=>{N(t,r,e);}});}function b(t,r,e){return "string"==typeof t?{url:r}:new Blob([JSON.stringify(t.toJSON(e))],{type:"application/json"})}async function P(t){const r=(await import('./request-ac4d8bfb.js').then(function (n) { return n.L; })).default,{data:e}=await r(t,{responseType:"blob"});return e}function R(t){return t$2(t)?null:"string"==typeof t?t:t.url}function N(t,r,e){"string"==typeof t[r]?t[r]=e.url:t[r].url=e.url;}

export { w };
