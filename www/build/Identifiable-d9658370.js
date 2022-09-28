import { e, n } from './cast-3d5be210.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let t=0;const s=s=>{let i=class extends s{constructor(...e){super(...e),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:Date.now().toString(16)+"-object-"+t++});}};return i=e([n("esri.core.Identifiable")],i),i},i=s=>{let i=class extends s{constructor(...e){super(...e),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:t++});}};return i=e([n("esri.core.NumericIdentifiable")],i),i};let o=class extends(s(class{})){};o=e([n("esri.core.Identifiable")],o);

export { o, s };
