import { e, d, n as n$1 } from './cast-3d5be210.js';
import { n, a as a$1 } from './jsonUtils-f3f35e7f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const i={read:{reader:n},write:{allowNull:!0,writer:a$1}},a=t=>{let s=class extends t{constructor(){super(...arguments),this.blendMode="normal",this.effect=null;}};return e([d({type:["average","color-burn","color-dodge","color","darken","destination-atop","destination-in","destination-out","destination-over","difference","exclusion","hard-light","hue","invert","lighten","lighter","luminosity","minus","multiply","normal","overlay","plus","reflect","saturation","screen","soft-light","source-atop","source-in","source-out","vivid-light","xor"],nonNullable:!0,json:{read:!1,write:!1,origins:{"web-map":{read:!0,write:!0},"portal-item":{read:!0,write:!0}}}})],s.prototype,"blendMode",void 0),e([d({json:{read:!1,write:!1,origins:{"web-map":i,"portal-item":i}}})],s.prototype,"effect",void 0),s=e([n$1("esri.layers.mixins.BlendLayer")],s),s};

export { a };
