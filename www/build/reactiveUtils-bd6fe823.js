import { l as a$1, P as P$1, p as e, u as r, v as n, w as p$1, x as m$1, z as r$1, A as v$1 } from './cast-3d5be210.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function l(n,t,r={}){return m(n,t,r,y)}function f(n,t,r={}){return m(n,t,r,d)}function m(n,t,r={},e){let i=null;const u=r.once?(n,r)=>{e(n)&&(a$1(i),t(n,r));}:(n,r)=>{e(n)&&t(n,r);};if(i=P$1(n,u,r.sync,r.equals),r.initial){const t=n();u(t,t);}return i}function a(e$1,i,u,s={}){let c=null,f=null,m=null;function a(){c&&f&&(f.remove(),s.onListenerRemove?.(c),c=null,f=null);}function p(n){s.once&&s.once&&a$1(m),u(n);}const j=l(e$1,((r$1,e$1)=>{a(),e(r$1)&&(c=r$1,f=r(r$1,i,p),s.onListenerAdd?.(r$1));}),{sync:s.sync,initial:!0});return m=n((()=>{j.remove(),a();})),m}function p(n,t){return v(n,null,t)}function j(n,t){return v(n,d,t)}function v(n,t,r){if(p$1(r))return Promise.reject(m$1());const c=n();if(t?.(c))return Promise.resolve(c);let l=null;function f(){l=a$1(l);}return new Promise(((o,i)=>{l=r$1([v$1(r,(()=>{f(),i(m$1());})),m(n,(n=>{f(),o(n);}),{sync:!1,once:!0},t??y)]);}))}function y(n){return !0}function d(n){return !!n}function P(n,t,r={}){let e=!1;const o=l(n,((n,r)=>{e||t(n,r);}),r);return {remove(){o.remove();},pause(){e=!0;},resume(){e=!1;}}}const U={sync:!0},h={initial:!0},w={sync:!0,initial:!0};

export { P, U, a, f, h, j, l, w };
