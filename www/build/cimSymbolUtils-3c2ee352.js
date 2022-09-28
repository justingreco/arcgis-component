import { Y } from './cimAnalyzer-a2a69390.js';
import { c as E, S } from './Utils-b4b0f45e.js';
import { f } from './MaterialKey-ac9b534a.js';
import { c as c$1, a } from './devEnvironmentUtils-cb76d69b.js';
import { a as s$1, X as f$1, r as r$1 } from './cast-3d5be210.js';
import { j as j$1 } from './request-ac4d8bfb.js';
import { B } from './Portal-5df9f5a7.js';
import { i as i$2 } from './persistableUrlUtils-5dcd6081.js';
import { c, U, j, p as p$1, d } from './styleUtils-d2332fad.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const s={marker:E.MARKER,fill:E.FILL,line:E.LINE,text:E.TEXT};class l$1{constructor(e,l,n,r){const c={minScale:l?.minScale,maxScale:l?.maxScale},m=i$1(c);this.layers=e,this.data=l,this.hash=this._createHash()+m,this.rendererKey=n;const o={isOutline:!1,placement:null,symbologyType:S.DEFAULT,vvFlags:n};for(const t of e){const e=s[t.type];o.isOutline="line"===t.type&&t.isOutline,t.materialKey=f(e,o),t.maxVVSize=r,t.scaleInfo=c,t.templateHash+=m;}}get type(){return "expanded-cim"}_createHash(){let e="";for(const t of this.layers)e+=t.templateHash;return e}}function i$1(e){return e.minScale||e.maxScale?e.minScale+"-"+e.maxScale:""}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
async function u(t,r,o){if(!t.name)throw new s$1("style-symbol-reference-name-missing","Missing name in style symbol reference");if(t.styleName&&"Esri2DPointSymbolsStyle"===t.styleName)return p(t,o);try{return b(await c(t,r,o),t.name,r,o)}catch(s){return f$1(s),null}}async function p(t,r){const e=U.replace(/\{SymbolName\}/gi,t.name);try{const t=await j(e,r);return p$1(t.data)}catch(o){return f$1(o),null}}async function b(a$1,i,u,p){const b=a$1.data,d$1={portal:u&&r$1(u.portal)?u.portal:B.getDefault(),url:j$1(a$1.baseUrl),origin:"portal-item"},j$2=b.items.find((t=>t.name===i));if(!j$2){throw new s$1("symbolstyleutils:symbol-name-not-found",`The symbol name '${i}' could not be found`,{symbolName:i})}let h=i$2(d(j$2,"cimRef"),d$1);c$1()&&(h=a(h));try{const t=await j(h,p);return p$1(t.data)}catch(w){return f$1(w),null}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const r=async(e,t,a,r)=>Promise.all(e.map((e=>n(e,t,a,r)))),l=async(a,r,l)=>new l$1(await Y(a.data,r,l),a.data,a.rendererKey,a.maxVVSize),n=async(e,t,r,n)=>{if(!e)return null;if("cim"===e.type)return l(e,t,r);if("web-style"===e.type){const i={type:"cim",data:await u(e,null,n),rendererKey:e.rendererKey,maxVVSize:e.maxVVSize};return l(i,t,r)}return e};function i(e){if(!e)return null;const{type:t,cim:a,url:r,materialHash:l}=e,n={cim:a,type:t,mosaicHash:l,url:r,size:null,dashTemplate:null,path:null,text:null,fontName:null,animatedSymbolProperties:null};switch(t){case"marker":n.size=e.size,n.path=e.path,n.animatedSymbolProperties=e.animatedSymbolProperties;break;case"line":n.dashTemplate=e.dashTemplate;break;case"text":n.text=e.text,n.fontName=e.fontName;}return n}

export { i, n };
