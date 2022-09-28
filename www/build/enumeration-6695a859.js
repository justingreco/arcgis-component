import { s } from './request-ac4d8bfb.js';
import { d } from './cast-3d5be210.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function r(r,o={}){const a=r instanceof s?r:new s(r,o),t={type:o?.ignoreUnknown??1?a.apiValues:String,json:{type:a.jsonValues,read:!o?.readOnly&&{reader:a.read},write:{writer:a.write}}};return void 0!==o?.readOnly&&(t.readOnly=!!o.readOnly),void 0!==o?.default&&(t.json.default=o.default),void 0!==o?.name&&(t.json.name=o.name),d(t)}

export { r };
