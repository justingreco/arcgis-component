import { af as s } from './cast-3d5be210.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function n(n){const r=s(100*(1-n));return Math.max(0,Math.min(r,100))}function r(t){const n=1-t/100;return Math.max(0,Math.min(n,1))}

export { n, r };
