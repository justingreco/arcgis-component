import { m, L } from './number-c5a37d3e.js';
import { s as s$2, j as r, k as t, a as s$3, r as r$1 } from './cast-3d5be210.js';
import './Promise-d2759b2e.js';
import { u as u$1, l } from './messages-5e9a4a9e.js';
import { U } from './request-ac4d8bfb.js';
import { a as a$2 } from './assets-99f5c3ee.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const i$1=s$2.getLogger("esri.intl");function s$1(t,r$1,n={}){const{format:o={}}=n;return r(t,(t=>u(t,r$1,o)))}function u(t$1,e,n){let o,i;const s=t$1.indexOf(":");if(-1===s?o=t$1.trim():(o=t$1.slice(0,s).trim(),i=t$1.slice(s+1).trim()),!o)return "";const u=t(o,e);if(null==u)return "";const m=n[i]||n[o];return m?c$1(u,m):i?a$1(u,i):f(u)}function c$1(t,r){switch(r.type){case"date":return L(t,r.intlOptions);case"number":return m(t,r.intlOptions);default:return i$1.warn("missing format descriptor for key {key}"),f(t)}}function a$1(t,r){switch(r.toLowerCase()){case"dateformat":return L(t);case"numberformat":return m(t);default:return i$1.warn(`inline format is unsupported since 4.12: ${r}`),/^(dateformat|datestring)/i.test(r)?L(t):/^numberformat/i.test(r)?m(t):f(t)}}function f(t){switch(typeof t){case"string":return t;case"number":return m(t);case"boolean":return ""+t;default:return t instanceof Date?L(t):""}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
async function o(e,n,o,i){const a=n.exec(o);if(!a)throw new s$3("esri-intl:invalid-bundle",`Bundle id "${o}" is not compatible with the pattern "${n}"`);const c=a[1]?`${a[1]}/`:"",l=a[2],w=u$1(i),h=`${c}${l}.json`,u=w?`${c}${l}_${w}.json`:h;let f;try{f=await s(e(u));}catch(d){if(u===h)throw new s$3("intl:unknown-bundle",`Bundle "${o}" cannot be loaded`,{error:d});try{f=await s(e(h));}catch(d){throw new s$3("intl:unknown-bundle",`Bundle "${o}" cannot be loaded`,{error:d})}}return f}async function s(t){if(r$1(c.fetchBundleAsset))return c.fetchBundleAsset(t);const r=await U(t,{responseType:"text"});return JSON.parse(r.data)}class i{constructor({base:e="",pattern:t,location:n=new URL(window.location.href)}){let r;r="string"==typeof n?e=>new URL(e,new URL(n,window.location.href)).href:n instanceof URL?e=>new URL(e,n).href:n,this.pattern="string"==typeof t?new RegExp(`^${t}`):t,this.getAssetUrl=r,e=e?e.endsWith("/")?e:e+"/":"",this.matcher=new RegExp(`^${e}(?:(.*)/)?(.*)$`);}fetchMessageBundle(e,t){return o(this.getAssetUrl,this.matcher,e,t)}}function a(e){return new i(e)}const c={};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
l(a({pattern:"esri/",location:a$2}));

export { s$1 as s };
