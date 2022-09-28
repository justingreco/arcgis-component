import { y, e as e$1, d, n } from './cast-3d5be210.js';
import { s } from './Identifiable-d9658370.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var r$2;let p=r$2=class extends(s(y)){constructor(t){super(t),this.active=!1,this.className=null,this.disabled=!1,this.id=null,this.indicator=!1,this.title=null,this.type=null,this.visible=!0;}clone(){return new r$2({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible})}};e$1([d()],p.prototype,"active",void 0),e$1([d()],p.prototype,"className",void 0),e$1([d()],p.prototype,"disabled",void 0),e$1([d()],p.prototype,"id",void 0),e$1([d()],p.prototype,"indicator",void 0),e$1([d()],p.prototype,"title",void 0),e$1([d()],p.prototype,"type",void 0),e$1([d()],p.prototype,"visible",void 0),p=r$2=e$1([n("esri.support.actions.ActionBase")],p);const c=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var r$1;let e=r$1=class extends c{constructor(s){super(s),this.image=null,this.type="button";}clone(){return new r$1({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible,image:this.image})}};e$1([d()],e.prototype,"image",void 0),e=r$1=e$1([n("esri.support.Action.ActionButton")],e);const a$1=e;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var o;let r=o=class extends c{constructor(s){super(s),this.image=null,this.type="toggle",this.value=!1;}clone(){return new o({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible,image:this.image,value:this.value})}};e$1([d()],r.prototype,"image",void 0),e$1([d()],r.prototype,"value",void 0),r=o=e$1([n("esri.support.Action.ActionToggle")],r);const a=r;

export { a$1 as a, a as b, c };
