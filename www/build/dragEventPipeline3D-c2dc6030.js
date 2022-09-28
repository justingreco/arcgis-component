import { r, t as t$1, ag as c$1 } from './cast-3d5be210.js';
import { d, l, i } from './screenUtils-31d073db.js';
import { n, _, e, b as r$1, u as u$1, s as s$1, P as P$1, q as q$2 } from './mathUtils-559a53d9.js';
import { P as Pn } from './projection-fbd5d346.js';
import { q as q$1, p, _ as _$1 } from './frustum-95850b85.js';
import { e as e$1, d as d$1 } from './sphere-4710475c.js';
import { t } from './vectorStacks-3fa8ee55.js';
import { c, u } from './elevationInfoUtils-d6676eee.js';
import { aY as s } from './SceneView-ed3703c9.js';
import { x, s as t$2, q as i$1 } from './viewpointUtils-4c294048.js';
import { j } from './utils-eafc976f.js';
import { G as G$1 } from './analysisViewUtils-869adced.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function C(e,r){return D(e,(()=>r))}function T(e){return D(e,(e=>e.plane))}function D(t$2,s$1){const c=n(),l$1=n();let i=!1;return a=>{const u=s$1(a);if("start"===a.action){const r$1=d(a.screenStart,l(t.get())),s$1=s(t$2.state.camera,r$1,L);r(s$1)&&(i=q$1(u,s$1,c));}if(!i)return null;const p=d(a.screenEnd,l(t.get())),m=s(t$2.state.camera,p,L);return t$1(m)?null:q$1(u,m,l$1)?{...a,renderStart:c,renderEnd:l$1,plane:u,ray:m}:null}}function M(t,n,o,c=null,l=null){let i$1=null;return a=>{if("start"===a.action&&(i$1=t.sceneIntersectionHelper.intersectElevationFromScreen(i(a.screenStart.x,a.screenStart.y),n,o,l),r(i$1)&&r(c)&&!Pn(i$1,i$1,c)))return null;if(t$1(i$1))return null;const u=t.sceneIntersectionHelper.intersectElevationFromScreen(i(a.screenEnd.x,a.screenEnd.y),n,o,l);return r(u)?r(c)&&!Pn(u,u,c)?null:{...a,mapStart:i$1,mapEnd:u}:null}}function N(e,r,t,n=null,o=null){return M(e,t,c(r,e,t),n,o)}function P(e,r,t,n=null,o=null){return N(e,t,u(r),n,o)}function h(r$1,t,n,o){const s=t.toMap(r$1.screenStart,{include:[n]});return r(s)?P(t,n,s,o):null}function k(e$1,r){const t=J,n=K,o=p();e$1.renderCoordsHelper.worldUpAtPosition(r,t);const s=_(o,t,e(n,r,e$1.state.camera.eye));return _(s,s,t),_$1(r,s,o)}function G(e,r,t){let n=null;const o=new G$1;return o.next(C(e,k(e,r))).next(A(e,r)).next(F(e,t)).next((e=>{e.mapEnd.x=e.mapStart.x,e.mapEnd.y=e.mapStart.y,n=e;})),e=>(n=null,o.execute(e),n)}function A(e$2,r){const t=n(),n$1=s$1(r);e$2.renderCoordsHelper.worldUpAtPosition(r,t);const o=n(),s=n(),m=o=>{if(e(o,o,r),e$1(t,o,o),"global"===e$2.viewingMode){s$1(o)*Math.sign(P$1(t,o))<.001-n$1&&e(o,q$2(o,t,.001),r);}return u$1(o,o,r),o};return e=>(e.renderStart=m(r$1(o,e.renderStart)),e.renderEnd=m(r$1(s,e.renderEnd)),e)}function F(r$1,t){const n=r$1.renderCoordsHelper;return r$1=>{const o=n.fromRenderCoords(r$1.renderStart,t),s=n.fromRenderCoords(r$1.renderEnd,t);return r(o)&&r(s)?{...r$1,mapStart:o,mapEnd:s}:null}}var q;function z(r$1){let t=null;return n=>{switch(n.action){case"start":t=r$1.disableDisplay();break;case"end":case"cancel":r(t)&&(t.remove(),t=null);}return n}}function B(o,c=null){const l=x(o.state.viewingMode);l.options.selectionMode=!0,l.options.store=t$2.MIN,l.options.hud=!1;const i$2=i(),a={requiresGroundFeedback:!0,enableDraped:!0,exclude:new Set},u=n(),p=c$1(c,o.spatialReference),m=e=>{o.map.ground&&o.map.ground.opacity<1?a.exclude.add(j):a.exclude.delete(j),o.sceneIntersectionHelper.intersectIntersectorScreen(d(e,i$2),l,a);const r=l.results.min;let t;if(r.getIntersectionPoint(u))t=r.intersector===i$1.TERRAIN?q.GROUND:q.OTHER;else {if(!l.results.ground.getIntersectionPoint(u))return null;t=q.GROUND;}return {location:o.renderCoordsHelper.fromRenderCoords(u,p),surfaceType:t}};let f;return t=>{if("start"===t.action){const r$1=m(t.screenStart);f=r(r$1)?r$1.location:null;}if(t$1(f))return null;const n=m(t.screenEnd);return r(n)&&r(n.location)?{...t,mapStart:f,mapEnd:n.location,surfaceType:n.surfaceType}:null}}!function(e){e[e.GROUND=0]="GROUND",e[e.OTHER=1]="OTHER";}(q||(q={}));const J=n(),K=n(),L=d$1();

export { B, C, z };
