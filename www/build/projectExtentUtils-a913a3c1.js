import { r, t } from './cast-3d5be210.js';
import { M } from './Point-edff2a11.js';
import { projectGeometry as a } from './geometryServiceUtils-b4e25893.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function l(l){const s=l.view.spatialReference,i=l.layer.fullExtent,n=r(i)&&i.spatialReference;if(t(i)||!n)return Promise.resolve(null);if(n.equals(s))return Promise.resolve(i.clone());const a$1=M(i,s);return r(a$1)?Promise.resolve(a$1):l.view.state.isLocal?a(i,s,l.layer.portalItem).then((e=>!l.destroyed&&e?e:void 0)).catch((()=>null)):Promise.resolve(null)}

export { l };
