import { r, s, e, d, n } from './cast-3d5be210.js';
import { m, S } from './arcgisLayerUrl-a268a370.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const p=p=>{let c=class extends p{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const t=m(this.url);if(r(t)&&t.title)return t.title}return this._get("title")||""}set title(t){this._set("title",t);}set url(t){this._set("url",S(t,s.getLogger(this.declaredClass)));}};return e([d()],c.prototype,"title",null),e([d({type:String})],c.prototype,"url",null),c=e([n("esri.layers.mixins.ArcGISService")],c),c};

export { p };
