import { a as s, r, e, n } from './cast-3d5be210.js';
import { I, p as me } from './fieldUtils-240a3b99.js';
import { s as s$1, d } from './popupUtils-37e309e6.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const c=c=>{let u=class extends c{_validateFetchPopupFeatures(e){const{layer:s$2}=this,{popupEnabled:t}=s$2;if(!t)return new s("scenelayerview3d:fetchPopupFeatures","Popups are disabled",{layer:s$2});return s$1(s$2,e)?void 0:new s("scenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",{layer:s$2})}async prepareFetchPopupFeatures(e){}async fetchPopupFeatures(e,r$1){const t=this._validateFetchPopupFeatures(r$1);if(t)throw t;const c=r(r$1)?r$1.clientGraphics:null;if(!c||0===c.length)return [];const u="scene"===this.layer.type&&r(this.layer.associatedLayer)?this.layer.associatedLayer:this.layer,n=I(this.layer.fieldsIndex,await d(u,s$1(this.layer,r$1)));await this.prepareFetchPopupFeatures(n);const l=new Set,h=[],y=[];for(const s of c)me(n,s,l)?y.push(s):h.push(s);return 0===y.length?h:this.whenGraphicAttributes(y,[...l]).catch((()=>y)).then((e=>h.concat(e)))}};return u=e([n("esri.views.3d.layers.support.PopupSceneLayerView")],u),u};

export { c };
