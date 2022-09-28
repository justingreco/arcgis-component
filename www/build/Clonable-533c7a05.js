import { s, a1 as f, a2 as e, a3 as r, a4 as b, e as e$1, n, y } from './cast-3d5be210.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
s.getLogger("esri.core.Clonable");const l=s=>{let r$1=class extends s{clone(){const o=f(e(this),"unable to clone instance of non-accessor class"),s=o.metadatas,r$1=o.store,i={},l=new Map;for(const t in s){const o=s[t],c=r$1?.originOf(t),a=o.clonable;if(o.readOnly||!1===a||c!==r.USER&&c!==r.DEFAULTS&&c!==r.WEB_MAP&&c!==r.WEB_SCENE)continue;const f=this[t];let p=null;p="function"==typeof a?a(f):"reference"===a?f:b(f),null!=f&&null==p||(c===r.DEFAULTS?l.set(t,p):i[t]=p);}const a=new(0,Object.getPrototypeOf(this).constructor)(i);if(l.size){const o=e(a)?.store;if(o)for(const[s,e]of l)o.set(s,e,r.DEFAULTS);}return a}};return r$1=e$1([n("esri.core.Clonable")],r$1),r$1};let a=class extends(l(y)){};a=e$1([n("esri.core.Clonable")],a);

export { a, l };
