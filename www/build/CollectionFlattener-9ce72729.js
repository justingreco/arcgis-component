import { ap as l$1, r, t, e, d, n } from './cast-3d5be210.js';
import { j } from './Collection-a38e0489.js';
import { a } from './HandleOwner-fe336959.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let l=class extends(a(j)){constructor(t){super(t),this.getCollections=null;}initialize(){this.handles.add(l$1((()=>this._refresh())));}destroy(){this.getCollections=null;}_refresh(){const t$1=r(this.getCollections)?this.getCollections():null;if(t(t$1))return void this.removeAll();let o=0;for(const s of t$1)r(s)&&(o=this._processCollection(o,s));this.splice(o,this.length);}_createNewInstance(t){return new j(t)}_processCollection(t,o){if(!o)return t;const s=this.itemFilterFunction?this.itemFilterFunction:t=>!!t;for(const r of o)if(r){if(s(r)){const o=this.indexOf(r,t);o>=0?o!==t&&this.reorder(r,t):this.add(r,t),++t;}if(this.getChildrenFunction){const o=this.getChildrenFunction(r);if(Array.isArray(o))for(const s of o)t=this._processCollection(t,s);else t=this._processCollection(t,o);}}return t}};e([d()],l.prototype,"getCollections",void 0),e([d()],l.prototype,"getChildrenFunction",void 0),e([d()],l.prototype,"itemFilterFunction",void 0),l=e([n("esri.core.CollectionFlattener")],l);const p=l;

export { p };
