import { r as r$1 } from './cast-3d5be210.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
async function r(e,r){const{WhereClause:t}=await import('./WhereClause-ae6d22ff.js');return t.create(e,r)}function t(r,t){return r$1(r)?r$1(t)?`(${r}) AND (${t})`:r:t}

export { r, t };
