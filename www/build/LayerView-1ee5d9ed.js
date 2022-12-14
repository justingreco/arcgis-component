import { y, s as s$1, ag as c, e, d as d$1, n as n$1 } from './cast-3d5be210.js';
import { n } from './Collection-a38e0489.js';
import { a } from './HandleOwner-fe336959.js';
import { s } from './Identifiable-d9658370.js';
import { m } from './Promise-d2759b2e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let d=class extends(a(s(m(n.EventedMixin(y))))){constructor(e){super(e),this.layer=null,this.parent=null;}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const r=this.layer&&this.layer.id||"no id",t=this.layer&&this.layer.title||"no title";s$1.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${t}', id: '${r}')`,e);}}));}get fullOpacity(){return c(this.get("layer.opacity"),1)*c(this.get("parent.fullOpacity"),1)}get suspended(){return !this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return !this.suspended&&!0===this.layer?.legendEnabled}get updating(){return !(!this.updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return !0===this.layer?.visible}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible");}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{},r=this;return r.view&&r.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return !1}};e([d$1()],d.prototype,"fullOpacity",null),e([d$1()],d.prototype,"layer",void 0),e([d$1()],d.prototype,"parent",void 0),e([d$1({readOnly:!0})],d.prototype,"suspended",null),e([d$1({readOnly:!0})],d.prototype,"suspendInfo",null),e([d$1({readOnly:!0})],d.prototype,"legendEnabled",null),e([d$1({type:Boolean,readOnly:!0})],d.prototype,"updating",null),e([d$1({readOnly:!0})],d.prototype,"updatingProgress",null),e([d$1()],d.prototype,"visible",null),e([d$1()],d.prototype,"view",void 0),d=e([n$1("esri.views.layers.LayerView")],d);const u=d;

export { u };
