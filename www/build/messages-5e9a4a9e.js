import { a as s, T } from './cast-3d5be210.js';
import { l as l$1, g } from './Promise-d2759b2e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const r=/^([a-z]{2})(?:[-_]([A-Za-z]{2}))?$/,o={ar:!0,bg:!0,bs:!0,ca:!0,cs:!0,da:!0,de:!0,el:!0,en:!0,es:!0,et:!0,fi:!0,fr:!0,he:!0,hr:!0,hu:!0,id:!0,it:!0,ja:!0,ko:!0,lt:!0,lv:!0,nb:!0,nl:!0,pl:!0,"pt-BR":!0,"pt-PT":!0,ro:!0,ru:!0,sk:!0,sl:!0,sr:!0,sv:!0,th:!0,tr:!0,uk:!0,vi:!0,"zh-CN":!0,"zh-HK":!0,"zh-TW":!0};function i(t){return o[t]??!1}const a=[],c=new Map;function d(t){for(const e of c.keys())m(t.pattern,e)&&c.delete(e);}function l(t){return a.includes(t)||(d(t),a.unshift(t)),{remove(){const e=a.indexOf(t);e>-1&&(a.splice(e,1),d(t));}}}async function h(t){const e=l$1();c.has(t)||c.set(t,f(t,e));const n=c.get(t);return await _.add(n),n}function u(t){if(!r.test(t))return null;const[,e,n]=r.exec(t),s=e+(n?"-"+n.toUpperCase():"");return i(s)?s:i(e)?e:null}async function f(e,n){const s$1=[];for(const t of a)if(m(t.pattern,e))try{return await t.fetchMessageBundle(e,n)}catch(r){s$1.push(r);}if(s$1.length)throw new s("intl:message-bundle-error",`Errors occurred while loading "${e}"`,{errors:s$1});throw new s("intl:no-message-bundle-loader",`No loader found for message bundle "${e}"`)}function m(t,e){return "string"==typeof t?e.startsWith(t):t.test(e)}g((()=>{c.clear();}));const _=new class{constructor(){this._numLoading=0;}async waitForAll(){this._dfd&&await this._dfd.promise;}add(t){return this._increase(),t.then((()=>this._decrease()),(()=>this._decrease())),this.waitForAll()}_increase(){this._numLoading++,this._dfd||(this._dfd=T());}_decrease(){this._numLoading=Math.max(this._numLoading-1,0),this._dfd&&0===this._numLoading&&(this._dfd.resolve(),this._dfd=null);}},p={cache:c,loaders:a};

export { h, l, u };
