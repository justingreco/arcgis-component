import { s, f as r, J as g, a as s$2, e, d, n as n$1 } from './cast-3d5be210.js';
import './geometry-2f332a26.js';
import { j, U } from './request-ac4d8bfb.js';
import { n } from './Collection-a38e0489.js';
import { s as s$1 } from './Identifiable-d9658370.js';
import { m as m$1 } from './Portal-5df9f5a7.js';
import { M } from './Extent-f27111e1.js';
import { k } from './Point-edff2a11.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const o=s.getLogger("esri.layers.support.fromPortalItem");async function a(t){const a="portalItem"in t?t:{portalItem:t},e=await import('./portalLayers-4eaa1192.js');try{return await e.fromItem(a)}catch(p){const t=a&&a.portalItem,e=t&&t.id||"unset",l=t&&t.portal&&t.portal.url||r.portalUrl;throw o.error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+l+"', id: '"+e+"')",p),p}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let m=0,h=class extends(n.EventedMixin(s$1(m$1))){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new M(-180,-90,180,90,k.WGS84),this.id=Date.now().toString(16)+"-layer-"+m++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=k.WGS84,this.title=null,this.type=null,this.url=null,this.visible=!0;}static async fromArcGISServerUrl(t){const e="string"==typeof t?{url:t}:t;return (await import('./arcgisLayers-b0580ac7.js')).fromUrl(e)}static fromPortalItem(t){return a(t)}initialize(){this.when().catch((t=>{g(t)||s.getLogger(this.declaredClass).error("#load()",`Failed to load layer (title: '${this.title??"no title"}', id: '${this.id??"no id"}')`,{error:t});}));}destroy(){if(this.parent){const t=this,e=this.parent;"layers"in e&&e.layers.includes(t)?e.layers.remove(t):"tables"in e&&e.tables.includes(t)?e.tables.remove(t):"baseLayers"in e&&e.baseLayers.includes(t)?e.baseLayers.remove(t):"baseLayers"in e&&e.referenceLayers.includes(t)&&e.referenceLayers.remove(t);}}get hasAttributionData(){return null!=this.attributionDataUrl}get parsedUrl(){const t=this.url;return t?j(t):null}async fetchAttributionData(){const t=this.attributionDataUrl;if(this.hasAttributionData&&t){return (await U(t,{query:{f:"json"},responseType:"json"})).data}throw new s$2("layer:no-attribution-data","Layer does not have attribution data")}};e([d({type:String})],h.prototype,"attributionDataUrl",void 0),e([d({type:M})],h.prototype,"fullExtent",void 0),e([d({readOnly:!0})],h.prototype,"hasAttributionData",null),e([d({type:String,clonable:!1})],h.prototype,"id",void 0),e([d({type:Boolean,nonNullable:!0})],h.prototype,"legendEnabled",void 0),e([d({type:["show","hide","hide-children"]})],h.prototype,"listMode",void 0),e([d({type:Number,range:{min:0,max:1},nonNullable:!0})],h.prototype,"opacity",void 0),e([d({clonable:!1})],h.prototype,"parent",void 0),e([d({readOnly:!0})],h.prototype,"parsedUrl",null),e([d({type:Boolean})],h.prototype,"popupEnabled",void 0),e([d({type:Boolean})],h.prototype,"attributionVisible",void 0),e([d({type:k})],h.prototype,"spatialReference",void 0),e([d({type:String})],h.prototype,"title",void 0),e([d({readOnly:!0,json:{read:!1}})],h.prototype,"type",void 0),e([d()],h.prototype,"url",void 0),e([d({type:Boolean,nonNullable:!0})],h.prototype,"visible",void 0),h=e([n$1("esri.layers.Layer")],h);const b=h;

export { b };
