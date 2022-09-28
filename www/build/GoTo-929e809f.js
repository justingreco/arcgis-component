import { t as t$1, e as e$2, d, n } from './cast-3d5be210.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function e$1(n){return n&&"function"==typeof n.highlight}function t(n){return n&&"function"==typeof n.maskOccludee}function c(e,t,c){return t$1(e)||e>c&&(0===t||e<t)}function o(n,e){return n>0||e>0}function r(n){const e=n.effectiveScaleRange;return {minScale:e?.minScale??0,maxScale:e?.maxScale??0}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const e=e=>{let t=class extends e{constructor(...o){super(...o),this.goToOverride=null,this.view=null;}callGoTo(o){const{view:r}=this;return this.goToOverride?this.goToOverride(r,o):r.goTo(o.target,o.options)}};return e$2([d()],t.prototype,"goToOverride",void 0),e$2([d()],t.prototype,"view",void 0),t=e$2([n("esri.widgets.support.GoTo")],t),t};

export { e$1 as a, c, e, o, r, t };
