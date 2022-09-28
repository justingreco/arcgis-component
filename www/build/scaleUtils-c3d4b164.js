import { z, d } from './unitUtils-a0a11e54.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const e=96;function r(r,i){const o=i||r.extent,c=r.width,u=z(o&&o.spatialReference);return o&&c?o.width/c*u*d*e:0}function i(r,i){return r/(z(i)*d*e)}function o(r,i){return r*(z(i)*d*e)}function c(t,n){const e=t.extent,r=t.width,o=i(n,e.spatialReference);return e.clone().expand(o*r/e.width)}

export { c, i, r };
