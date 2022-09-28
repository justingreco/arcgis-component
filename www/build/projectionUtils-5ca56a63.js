import { t, r, ag as c } from './cast-3d5be210.js';
import { k as Rn } from './projection-fbd5d346.js';
import { k as i } from './viewpointUtils-4c294048.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function n(n,a,p,s=!1){const c$1=Rn(n,a);return t(c$1)?null:(c$1.hasZ&&!s||!r(p)||(c$1.z=c(i(p,c$1),0)),c$1)}function a(o,e,r){r.warnOnce(`Failed to project analysis geometry (id: '${o.id}'), projection from spatial reference (wkid: '${e.wkid}') to view spatial reference is not supported. Projection may be possible after calling projection.load().`);}

export { a, n };
