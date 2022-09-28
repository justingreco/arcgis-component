import { f as r, a as s } from './cast-3d5be210.js';
import { B } from './Portal-5df9f5a7.js';
import { a as a$1, n as n$1 } from './project-248cf8a5.js';
import './request-ac4d8bfb.js';
import './JSONSupport-dce2c67b.js';
import './Promise-d2759b2e.js';
import './Point-edff2a11.js';
import './Extent-f27111e1.js';
import './geometry-2f332a26.js';
import './Polyline-dcdb3782.js';
import './utils-d801fb7f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
async function n(o=null,i){if(r.geometryServiceUrl)return r.geometryServiceUrl;if(!o)throw new s("internal:geometry-service-url-not-configured");let n;n="portal"in o?o.portal||B.getDefault():o,await n.load({signal:i});const a=n.helperServices?.geometry?.url;if(!a)throw new s("internal:geometry-service-url-not-configured");return a}async function a(r,t,a=null,l){const c=await n(a,l),s$1=new a$1;s$1.geometries=[r],s$1.outSpatialReference=t;const m=await n$1(c,s$1,{signal:l});if(m&&Array.isArray(m)&&1===m.length)return m[0];throw new s("internal:geometry-service-projection-failed")}

export { n as getGeometryServiceURL, a as projectGeometry };
