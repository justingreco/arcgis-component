import { s, f as r, a as s$1 } from './cast-3d5be210.js';
import { U, G } from './request-ac4d8bfb.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const i=s.getLogger("esri.assets");function n(s,o){return U(a(s),o)}function a(t){if(!r.assetsPath)throw i.errorOnce("The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50"),new s$1("assets:path-not-set","config.assetsPath is not set");return G(r.assetsPath,t)}

export { a, n };
