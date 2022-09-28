import { a0 as o$2, s as s$3, f as r$1, q as q$1, a as s$4, r as r$2, t as t$1, c as a$3, w as p$1, h as e, A as v$1, m as m$2, J as g$1, x as m$3 } from './cast-3d5be210.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class s$2{constructor(s,o={ignoreUnknown:!1,useNumericKeys:!1}){this.jsonToAPI=s,this.options=o,this.apiValues=[],this.jsonValues=[],this.apiToJSON=this._invertMap(s),this.apiValues=this._getKeysSorted(this.apiToJSON),this.jsonValues=this._getKeysSorted(this.jsonToAPI),this.read=t=>this.fromJSON(t),this.write=(s,o,i)=>{const n=this.toJSON(s);void 0!==n&&o$2(i,n,o);},this.write.isJSONMapWriter=!0;}toJSON(t){if(this.apiToJSON.hasOwnProperty(t)){const s=this.apiToJSON[t];return this.options.useNumericKeys?+s:s}return this.options.ignoreUnknown?void 0:t}fromJSON(t){return this.jsonToAPI.hasOwnProperty(t)?this.jsonToAPI[t]:this.options.ignoreUnknown?void 0:t}_invertMap(t){const s={};for(const o in t)s[t[o]]=o;return s}_getKeysSorted(t){const s=[];for(const o in t)s.push(o);return s.sort(),s}}function o$1(){return function(t,o){return new s$2(t,{ignoreUnknown:!0,...o})}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const s$1=s$3.getLogger("esri.core.urlUtils"),u$1=r$1.request,c$1="esri/config: esriConfig.request.proxyUrl is not set.",l=/^\s*[a-z][a-z0-9-+.]*:(?![0-9])/i,f$2=/^\s*http:/i,a$2=/^\s*https:/i,h=/^\s*file:/i,p=/:\d+$/,d$2=/^https?:\/\/[^/]+\.arcgis.com\/sharing(\/|$)/i,g=new RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?$"),m$1=new RegExp("^((([^\\[:]+):)?([^@]+)@)?(\\[([^\\]]+)\\]|([^\\[:]*))(:([0-9]+))?$");class y{constructor(t=""){this.uri=t,this.scheme=null,this.authority=null,this.path=null,this.query=null,this.fragment=null,this.user=null,this.password=null,this.host=null,this.port=null;let n=q$1(this.uri.match(g));this.scheme=n[2]||(n[1]?"":null),this.authority=n[4]||(n[3]?"":null),this.path=n[5],this.query=n[7]||(n[6]?"":null),this.fragment=n[9]||(n[8]?"":null),null!=this.authority&&(n=q$1(this.authority.match(m$1)),this.user=n[3]||null,this.password=n[4]||null,this.host=n[6]||n[7],this.port=n[9]||null);}toString(){return this.uri}}const $$1={},x=new y(r$1.applicationUrl);let w=x;const O=q();let U$1=O;const b=()=>w,C=()=>U$1;function q(){const t=q$1(w.path),n=t.substring(0,t.lastIndexOf(t.split("/")[t.split("/").length-1]));return `${`${w.scheme}://${w.host}${null!=w.port?`:${w.port}`:""}`}${n}`}const R$1={setAppUrl:t=>w=t,setAppBaseUrl:t=>U$1=t,restoreUrls:()=>{w=x,U$1=O;}};function j$1(t){const n={path:null,query:null},e=new y(t),r=t.indexOf("?");return null===e.query?n.path=t:(n.path=t.substring(0,r),n.query=v(e.query)),e.fragment&&(n.hash=e.fragment,null===e.query&&(n.path=n.path.substring(0,n.path.length-(e.fragment.length+1)))),n}function v(t){const n=t.split("&"),e={};for(const r of n){if(!r)continue;const t=r.indexOf("=");let n,o;t<0?(n=decodeURIComponent(r),o=""):(n=decodeURIComponent(r.slice(0,t)),o=decodeURIComponent(r.slice(t+1)));let i=e[n];"string"==typeof i&&(i=e[n]=[i]),Array.isArray(i)?i.push(o):e[n]=o;}return e}function L(t){return t&&"object"==typeof t&&"toJSON"in t&&"function"==typeof t.toJSON}function I$1(t,n){return t?n&&"function"==typeof n?Object.keys(t).map((e=>encodeURIComponent(e)+"="+encodeURIComponent(n(e,t[e])))).join("&"):Object.keys(t).map((e=>{const r=t[e];if(null==r)return "";const o=encodeURIComponent(e)+"=",i=n&&n[e];return i?o+encodeURIComponent(i(r)):Array.isArray(r)?r.map((t=>L(t)?o+encodeURIComponent(JSON.stringify(t)):o+encodeURIComponent(t))).join("&"):L(r)?o+encodeURIComponent(JSON.stringify(r)):o+encodeURIComponent(r)})).filter((t=>t)).join("&"):""}function A$1(t=!1){let e,r=u$1.proxyUrl;if("string"==typeof t){e=ht(t);const n=J$1(t);n&&(r=n.proxyUrl);}else e=!!t;if(!r)throw s$1.warn(c$1),new s$4("urlutils:proxy-not-set",c$1);e&&$t()&&(r=mt(r));return j$1(r)}function S(t){const n=J$1(t);let e,r;if(n){const t=P$1(n.proxyUrl);e=t.path,r=t.query?v(t.query):null;}if(e){const n=j$1(t);t=e+"?"+n.path;const o=I$1({...r,...n.query});o&&(t=`${t}?${o}`);}return t}const B$1={path:"",query:""};function P$1(t){const n=t.indexOf("?");return -1!==n?(B$1.path=t.slice(0,n),B$1.query=t.slice(n+1)):(B$1.path=t,B$1.query=null),B$1}function k(t){return t=(t=xt(t=bt(t=P$1(t).path),!0)).toLowerCase()}function E(t){const n={proxyUrl:t.proxyUrl,urlPrefix:k(t.urlPrefix)},e=u$1.proxyRules,r=n.urlPrefix;let o=e.length;for(let i=0;i<e.length;i++){const t=e[i].urlPrefix;if(0===r.indexOf(t)){if(r.length===t.length)return -1;o=i;break}0===t.indexOf(r)&&(o=i+1);}return e.splice(o,0,n),o}function J$1(t){const n=u$1.proxyRules,e=k(t);for(let r=0;r<n.length;r++)if(0===e.indexOf(n[r].urlPrefix))return n[r]}function N$1(t,n){return t=T(t),n=T(n),xt(t)===xt(n)}function T(t){const n=(t=F$1(t)).indexOf("/sharing");return n>0?t.substring(0,n):t.replace(/\/+$/,"")}function W$1(t){const n=n=>null==n||n instanceof RegExp&&n.test(t)||"string"==typeof n&&t.startsWith(n),e=u$1.interceptors;if(e)for(const r of e)if(Array.isArray(r.urls)){if(r.urls.some(n))return r}else if(n(r.urls))return r;return null}function z$1(t,n,e=!1){const r=Lt(t),o=Lt(n);return !(!e&&r.scheme!==o.scheme)&&(null!=r.host&&null!=o.host&&(r.host.toLowerCase()===o.host.toLowerCase()&&r.port===o.port))}function D$1(t){if("string"==typeof t){if(!K$1(t))return !0;t=Lt(t);}if(z$1(t,w))return !0;const n=u$1.trustedServers||[];for(let e=0;e<n.length;e++){const r=M$1(n[e]);for(let n=0;n<r.length;n++)if(z$1(t,r[n]))return !0}return !1}function M$1(t){return $$1[t]||(at(t)||ft(t)?$$1[t]=[new y(Q$1(t))]:$$1[t]=[new y(`http://${t}`),new y(`https://${t}`)]),$$1[t]}function Q$1(t,n=U$1,e){return ft(t)?e&&e.preserveProtocolRelative?t:"http"===w.scheme&&w.authority===H$1(t).slice(2)?`http:${t}`:`https:${t}`:at(t)?t:q$1(G$1("/"===t[0]?wt(n):n,t))}function _$1(t,n=U$1,e){if(!K$1(t))return t;const r=F$1(t),o=r.toLowerCase(),i=F$1(n).toLowerCase().replace(/\/+$/,""),s=e?F$1(e).toLowerCase().replace(/\/+$/,""):null;if(s&&0!==i.indexOf(s))return t;const u=(t,n,e)=>-1===(e=t.indexOf(n,e))?t.length:e;let c=u(o,"/",o.indexOf("//")+2),l=-1;for(;o.slice(0,c+1)===i.slice(0,c)+"/"&&(l=c+1,c!==o.length);)c=u(o,"/",c+1);if(-1===l)return t;if(s&&l<s.length)return t;t=r.slice(l);const f=i.slice(l-1).replace(/[^/]+/g,"").length;if(f>0)for(let a=0;a<f;a++)t=`../${t}`;else t=`./${t}`;return t}function F$1(t){return t=jt(t=Rt(t=qt(t=Q$1(t=t.trim()))))}function G$1(...t){const n=t.filter(r$2);if(!n||!n.length)return;const e=[];if(K$1(n[0])){const t=n[0],r=t.indexOf("//");-1!==r&&(e.push(t.slice(0,r+1)),dt(n[0])&&(e[0]+="/"),n[0]=t.slice(r+2));}else "/"===n[0][0]&&e.push("");const r=n.reduce(((t,n)=>n?t.concat(n.split("/")):t),[]);for(let o=0;o<r.length;o++){const t=r[o];".."===t&&e.length>0&&".."!==e[e.length-1]?e.pop():(!t&&o===r.length-1||t&&("."!==t||0===e.length))&&e.push(t);}return e.join("/")}function H$1(t,n=!1){if(V$1(t)||X$1(t))return null;let e=t.indexOf("://");if(-1===e&&ft(t))e=2;else {if(-1===e)return null;e+=3;}const r=t.indexOf("/",e);return -1!==r&&(t=t.slice(0,r)),n&&(t=xt(t,!0)),t}function K$1(t){return ft(t)||at(t)}function V$1(t){return null!=t&&"blob:"===t.slice(0,5)}function X$1(t){return "data:"===t.slice(0,5)}function Y$1(t){const n=nt(t);if(!n||!n.isBase64)return null;const e=atob(n.data),r=new Uint8Array(e.length);for(let o=0;o<e.length;o++)r[o]=e.charCodeAt(o);return r.buffer}function Z(t){return btoa(String.fromCharCode.apply(null,t)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}const tt=/^data:(.*?)(;base64)?,(.*)$/;function nt(t){const n=t.match(tt);if(!n)return null;const[,e,r,o]=n;return {mediaType:e,isBase64:!!r,data:o}}function et(t){return t.isBase64?`data:${t.mediaType};base64,${t.data}`:`data:${t.mediaType},${t.data}`}function rt(t){const n=Y$1(t);if(!n)return null;const e=nt(t);return new Blob([n],{type:e.mediaType})}function ot(t,n){st(t,n)||ct(t,n);}function it(t,n){ut(t,n)||lt(t,n);}function st(t,n){const e=rt(t);return !!e&&ut(e,n)}function ut(t,n){if(!t)return !1;const e=document.createElement("a");if(!("download"in e))return !1;const r=URL.createObjectURL(t);return e.download=n,e.href=r,e.style.display="none",document.body.appendChild(e),e.click(),document.body.removeChild(e),URL.revokeObjectURL(r),!0}function ct(t,n){const e=rt(t);return !!e&&lt(e,n)}function lt(t,n){return !!window.navigator.msSaveOrOpenBlob&&window.navigator.msSaveOrOpenBlob(t,n)}function ft(t){return null!=t&&void 0!==t&&"/"===t[0]&&"/"===t[1]}function at(t){return l.test(t)}function ht(t){return a$2.test(t)||"https"===w.scheme&&ft(t)}function pt(t){return f$2.test(t)||"http"===w.scheme&&ft(t)}function dt(t){return h.test(t)}function gt(t){return ft(t)?`http:${t}`:t.replace(a$2,"http:")}function mt(t){return ft(t)?`https:${t}`:t.replace(f$2,"https:")}function yt(){return "http"===w.scheme}function $t(){return "https"===w.scheme}function xt(t,n=!1){return ft(t)?t.slice(2):(t=t.replace(l,""),n&&t.length>1&&"/"===t[0]&&"/"===t[1]&&(t=t.slice(2)),t)}function wt(t){const n=t.indexOf("//"),e=t.indexOf("/",n+2);return -1===e?t:t.slice(0,e)}function Ot(t){let n=0;if(K$1(t)){const e=t.indexOf("//");-1!==e&&(n=e+2);}const e=t.lastIndexOf("/");return e<n?t:t.slice(0,e+1)}function Ut(t,n){if(!t)return "";const e=j$1(t).path.replace(/\/+$/,""),r=e.substring(e.lastIndexOf("/")+1);if(!n?.length)return r;const o=new RegExp(`.(${n.join("|")})$`,"ig");return r.replace(o,"")}function bt(t){return t&&"/"===t[t.length-1]?t:`${t}/`}function Ct(t){return t.replace(/\/+$/,"")}function qt(t){if(/^https?:\/\//i.test(t)){const n=P$1(t);t=(t=n.path.replace(/\/{2,}/g,"/")).replace("/","//"),n.query&&(t+=`?${n.query}`);}return t}function Rt(t){return t.replace(/^(https?:\/\/)(arcgis\.com)/i,"$1www.$2")}function jt(t){const n=u$1.httpsDomains;if(!pt(t))return t;const e=t.indexOf("/",7);let r;if(r=-1===e?t:t.slice(0,e),r=r.toLowerCase().slice(7),p.test(r)){if(!r.endsWith(":80"))return t;r=r.slice(0,-3),t=t.replace(":80","");}return yt()&&r===w.authority&&!d$2.test(t)||($t()&&r===w.authority||n&&n.some((t=>r===t||r.endsWith(`.${t}`)))||$t()&&!J$1(t))&&(t=mt(t)),t}function vt(t,n,e){if(!(n&&e&&t&&K$1(t)))return t;const r=t.indexOf("//"),o=t.indexOf("/",r+2),i=t.indexOf(":",r+2),s=Math.min(o<0?t.length:o,i<0?t.length:i);if(t.slice(r+2,s).toLowerCase()!==n.toLowerCase())return t;return `${t.slice(0,r+2)}${e}${t.slice(s)}`}function Lt(t){return "string"==typeof t?new y(Q$1(t)):(t.scheme||(t.scheme=w.scheme),t)}function It(t){return Jt.test(t)}function At(t,n){const e=j$1(t),r=Object.keys(e.query||{});return r.length>0&&n&&n.warn("removeQueryParameters()",`Url query parameters are not supported, the following parameters have been removed: ${r.join(", ")}.`),e.path}function St(t,n,e){const r=j$1(t),o=r.query||{};return o[n]=String(e),`${r.path}?${I$1(o)}`}function Bt(t,n){const e=j$1(t),r=e.query||{};for(const i in n)r[i]=n[i];const o=I$1(r);return o?`${e.path}?${o}`:e.path}function Pt(t,n){const{path:e,query:r}=j$1(t);if(!r)return t;delete r[n];const o=I$1(r);return o?`${e}?${o}`:e}function kt(t){if(t$1(t))return null;const n=t.match(Et);return n?n[1]:null}const Et=/.*?\.([^\/]*)$/,Jt=/(^data:image\/svg|\.svg$)/i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const d$1="20220708",f$1="7fd01dbc0e83d753fcf101c8ff2a8d215430252d";

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const s="4.24",a$1={async request(e,r){const{default:s}=await Promise.resolve().then(function () { return request; }),a=e.options,n=a.responseType;a.signal=r?.signal,a.responseType="native"===n||"native-request-init"===n?"native-request-init":["blob","json","text"].includes(n)&&W$1(e.url)?.after?n:"array-buffer";const o=await s(e.url,a),i={data:o.data,ssl:o.ssl};switch(o.requestOptions.responseType){case"native-request-init":return delete i.data.signal,i;case"blob":i.data=await i.data.arrayBuffer();break;case"json":i.data=(new TextEncoder).encode(JSON.stringify(i.data)).buffer;break;case"text":i.data=(new TextEncoder).encode(i.data).buffer;}return {result:i,transferList:[i.data]}}};let n;function o(e){n=e;}function i(e){const t=n&&n.findCredential(e);return t&&t.token?St(e,"token",t.token):e}a$3("host-webworker")||(a$3("edge")||a$3("trident"))&&console.warn("Deprecated browser - see http://esriurl.com/oldbrowser");

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const t=["elevation3d.arcgis.com","js.arcgis.com","jsdev.arcgis.com","jsqa.arcgis.com","static.arcgis.com"];function c(s){return s&&s.length>4&&s.startsWith("AAPK")}function r(c){const r=H$1(c,!0);return r&&r.endsWith(".arcgis.com")&&!t.includes(r)&&!c.endsWith("/sharing/rest/generateToken")}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function a(r,n,s=!1,i){return new Promise(((c,a)=>{if(p$1(i))return void a(m());let u=()=>{l(),a(new Error(`Unable to load ${n}`));},d=()=>{const e=r;l(),c(e);},f=()=>{if(!r)return;const e=r;l(),e.src="",a(m());};const l=()=>{a$3("esri-image-decode")||(r.removeEventListener("error",u),r.removeEventListener("load",d)),u=null,d=null,r=null,r$2(i)&&i.removeEventListener("abort",f),f=null,s&&URL.revokeObjectURL(n);};r$2(i)&&i.addEventListener("abort",f),a$3("esri-image-decode")?r.decode().then(d,u):(r.addEventListener("error",u),r.addEventListener("load",d));}))}function m(){try{return new DOMException("Aborted","AbortError")}catch{const r=new Error;return r.name="AbortError",r}}function u(e){r$1.request.crossOriginNoCorsDomains||(r$1.request.crossOriginNoCorsDomains={});const o=r$1.request.crossOriginNoCorsDomains;for(let r of e)r=r.toLowerCase(),/^https?:\/\//.test(r)?o[H$1(r)]=0:(o[H$1("http://"+r)]=0,o[H$1("https://"+r)]=0);}function d(e){const o=r$1.request.crossOriginNoCorsDomains;if(o){let r=H$1(e);if(r)return r=r.toLowerCase(),!z$1(r,b())&&o[r]<Date.now()-36e5}return !1}async function f(e){const o=r$1.request.crossOriginNoCorsDomains;o&&(o[H$1(e).toLowerCase()]=Date.now());const t=j$1(e);e=t.path,"json"===t.query?.f&&(e+="?f=json");try{await fetch(e,{mode:"no-cors",credentials:"include"});}catch{}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
async function U(e$1,r){const t=X$1(e$1),o=V$1(e$1);o||t||(e$1=F$1(e$1));const i={url:e$1,requestOptions:{...e(r)}};let l=W$1(e$1);if(l){const e=await G(l,i);if(null!=e)return {data:e,getHeader:M,requestOptions:i.requestOptions,url:i.url};l.after||l.error||(l=null);}if(e$1=i.url,"image"===(r=i.requestOptions).responseType){if(a$3("host-webworker")||a$3("host-node"))throw N("request:invalid-parameters",new Error("responseType 'image' is not supported in Web Workers or Node environment"),i)}else if(t)throw N("request:invalid-parameters",new Error("Data URLs are not supported for responseType = "+r.responseType),i);if("head"===r.method){if(r.body)throw N("request:invalid-parameters",new Error("body parameter cannot be set when method is 'head'"),i);if(t||o)throw N("request:invalid-parameters",new Error("data and blob URLs are not supported for method 'head'"),i)}if(await B(),j)return j.execute(e$1,r);const u=new AbortController;v$1(r,(()=>u.abort()));const m={controller:u,credential:null,credentialToken:null,fetchOptions:null,hasToken:!1,interceptor:l,params:i,redoRequest:!1,useIdentity:P.useIdentity,useProxy:!1,useSSL:!1,withCredentials:!1},f=await Q(m);return l?.after?.(f),f}let j;const P=r$1.request,D="FormData"in globalThis,_=[499,498,403,401],F=["COM_0056","COM_0057","SB_0008"],I=[/\/arcgis\/tokens/i,/\/sharing(\/rest)?\/generatetoken/i,/\/rest\/info/i],M=()=>null,R=Symbol();function H(e){const r=H$1(e);r&&!U._corsServers.includes(r)&&U._corsServers.push(r);}function A(e){const r=H$1(e);return !r||r.endsWith(".arcgis.com")||U._corsServers.includes(r)||D$1(r)}function N(e,r,s,n){let a="Error";const u={url:s.url,requestOptions:s.requestOptions,getHeader:M,ssl:!1};if(r instanceof s$4)return r.details?(r.details=m$2(r.details),r.details.url=s.url,r.details.requestOptions=s.requestOptions):r.details=u,r;if(r){const e=n&&(e=>n.headers.get(e)),t=n&&n.status,s=r.message;s&&(a=s),e&&(u.getHeader=e),u.httpStatus=(null!=r.httpCode?r.httpCode:r.code)||t||0,u.subCode=r.subcode,u.messageCode=r.messageCode,"string"==typeof r.details?u.messages=[r.details]:u.messages=r.details,u.raw=R in r?r[R]:r;}return g$1(r)?m$3():new s$4(e,a,u)}async function B(){a$3("host-webworker")?j||(j=await import('./request-b062b190.js')):U._abortableFetch||(U._abortableFetch=globalThis.fetch.bind(globalThis));}async function $(){n||await import('./IdentityManager-29e321d4.js');}async function z(t){const s=t.params.url,o=t.params.requestOptions,n$1=t.controller.signal,a=o.body;let i=null,l=null;if(D&&"HTMLFormElement"in globalThis&&(a instanceof FormData?i=a:a instanceof HTMLFormElement&&(i=new FormData(a))),"string"==typeof a&&(l=a),t.fetchOptions={cache:o.cacheBust&&!U._abortableFetch.polyfill?"no-cache":"default",credentials:"same-origin",headers:o.headers||{},method:"head"===o.method?"HEAD":"GET",mode:"cors",priority:P.priority,redirect:"follow",signal:n$1},(i||l)&&(t.fetchOptions.body=i||l),"anonymous"===o.authMode&&(t.useIdentity=!1),t.hasToken=!!(/token=/i.test(s)||o.query?.token||i?.get("token")),!t.hasToken&&r$1.apiKey&&r(s)&&(o.query||(o.query={}),o.query.token=r$1.apiKey,t.hasToken=!0),t.useIdentity&&!t.hasToken&&!t.credentialToken&&!K(s)&&!p$1(n$1)){let e;"immediate"===o.authMode?(await $(),e=await n.getCredential(s,{signal:n$1}),t.credential=e):"no-prompt"===o.authMode?(await $(),e=await n.getCredential(s,{prompt:!1,signal:n$1}).catch((()=>{})),t.credential=e):n&&(e=n.findCredential(s)),e&&(t.credentialToken=e.token,t.useSSL=!!e.ssl);}}function K(e){return I.some((r=>r.test(e)))}async function W(e){let t=e.params.url;const o=e.params.requestOptions,n$1=e.fetchOptions,a=V$1(t)||X$1(t),i=o.responseType||"json",u=a?0:null!=o.timeout?o.timeout:P.timeout;let p=!1;if(!a){e.useSSL&&(t=mt(t)),o.cacheBust&&"default"===n$1.cache&&(t=St(t,"request.preventCache",Date.now()));let a={...o.query};e.credentialToken&&(a.token=e.credentialToken);let i=I$1(a);a$3("esri-url-encodes-apostrophe")&&(i=i.replace(/'/g,"%27"));const l=t.length+1+i.length;let u;p="delete"===o.method||"post"===o.method||"put"===o.method||!!o.body||l>P.maxUrlLength;const c=o.useProxy||!!J$1(t);if(c){const e=A$1(t);u=e.path,!p&&u.length+1+l>P.maxUrlLength&&(p=!0),e.query&&(a={...e.query,...a});}if("HEAD"===n$1.method&&(p||c)){if(p){if(l>P.maxUrlLength)throw N("request:invalid-parameters",new Error("URL exceeds maximum length"),e.params);throw N("request:invalid-parameters",new Error("cannot use POST request when method is 'head'"),e.params)}if(c)throw N("request:invalid-parameters",new Error("cannot use proxy when method is 'head'"),e.params)}if(p?(n$1.method="delete"===o.method?"DELETE":"put"===o.method?"PUT":"POST",o.body?t=Bt(t,a):(n$1.body=I$1(a),n$1.headers["Content-Type"]="application/x-www-form-urlencoded")):t=Bt(t,a),c&&(e.useProxy=!0,t=`${u}?${t}`),a.token&&D&&n$1.body instanceof FormData&&!/\/(sharing|usrsvcs)\/(appservices|servers)\//i.test(t)&&n$1.body.set("token",a.token),o.hasOwnProperty("withCredentials"))e.withCredentials=o.withCredentials;else if(!z$1(t,b()))if(D$1(t))e.withCredentials=!0;else if(n){const s=n.findServerInfo(t);s&&s.webTierAuth&&(e.withCredentials=!0);}e.withCredentials&&(n$1.credentials="include",d(t)&&await f(p?Bt(t,a):t));}let h,C,x=0,L=!1;u>0&&(x=setTimeout((()=>{L=!0,e.controller.abort();}),u));try{if("native-request-init"===o.responseType)C=n$1,C.url=t;else if("image"!==o.responseType||"default"!==n$1.cache||"GET"!==n$1.method||p||J(o.headers)||!a&&!e.useProxy&&P.proxyUrl&&!A(t)){if(h=await U._abortableFetch(t,n$1),e.useProxy||H(t),"native"===o.responseType)C=h;else if("HEAD"!==n$1.method)if(h.ok){switch(i){case"array-buffer":C=await h.arrayBuffer();break;case"blob":case"image":C=await h.blob();break;default:C=await h.text();}if(x&&(clearTimeout(x),x=0),"json"===i||"xml"===i||"document"===i)if(C)switch(i){case"json":C=JSON.parse(C);break;case"xml":C=X(C,"application/xml");break;case"document":C=X(C,"text/html");}else C=null;if(C){if("array-buffer"===i||"blob"===i){const e=h.headers.get("Content-Type");if(/application\/json|text\/plain/i.test(e)&&C["blob"===i?"size":"byteLength"]<=750)try{const e=await new Response(C).json();e.error&&(C=e);}catch{}}"image"===i&&C instanceof Blob&&(C=await Y(URL.createObjectURL(C),e,!0));}}else C=await h.text();}else C=await Y(t,e);}catch(j){if("AbortError"===j.name){if(L)throw new Error("Timeout exceeded");throw m$3("Request canceled")}if(!(!h&&j instanceof TypeError&&P.proxyUrl)||o.body||"delete"===o.method||"head"===o.method||"post"===o.method||"put"===o.method||e.useProxy||A(t))throw j;e.redoRequest=!0,E({proxyUrl:P.proxyUrl,urlPrefix:H$1(t)});}finally{x&&clearTimeout(x);}return [h,C]}async function G(e,r){if(null!=e.responseData)return e.responseData;if(e.headers&&(r.requestOptions.headers={...r.requestOptions.headers,...e.headers}),e.query&&(r.requestOptions.query={...r.requestOptions.query,...e.query}),e.before){let o,n;try{n=await e.before(r);}catch(s){o=N("request:interceptor",s,r);}if((n instanceof Error||n instanceof s$4)&&(o=N("request:interceptor",n,r)),o)throw e.error&&e.error(o),o;return n}}function J(e){if(e)for(const r of Object.getOwnPropertyNames(e))if(e[r])return !0;return !1}function X(e,r){let t;try{t=(new DOMParser).parseFromString(e,r);}catch{}if(!t||t.getElementsByTagName("parsererror").length)throw new SyntaxError("XML Parse error");return t}async function Q(e){let t,s;await z(e);try{do{[t,s]=await W(e);}while(!await V(e,t,s))}catch(a){const r=N("request:server",a,e.params,t);throw r.details.ssl=e.useSSL,e.interceptor&&e.interceptor.error&&e.interceptor.error(r),r}const o=e.params.url;if(s&&/\/sharing\/rest\/(accounts|portals)\/self/i.test(o)){if(!e.hasToken&&!e.credentialToken&&s.user?.username&&!D$1(o)){const e=H$1(o,!0);e&&P.trustedServers.push(e);}Array.isArray(s.authorizedCrossOriginNoCorsDomains)&&u(s.authorizedCrossOriginNoCorsDomains);}const n$1=e.credential;if(n$1&&n){const e=n.findServerInfo(n$1.server);let t=e&&e.owningSystemUrl;if(t){t=t.replace(/\/?$/,"/sharing");const e=n.findCredential(t,n$1.userId);e&&-1===n._getIdenticalSvcIdx(t,e)&&e.resources.unshift(t);}}return {data:s,getHeader:t?e=>t.headers.get(e):M,requestOptions:e.params.requestOptions,ssl:e.useSSL,url:e.params.url}}async function V(e,t,s){if(e.redoRequest)return e.redoRequest=!1,!1;const o=e.params.requestOptions;if(!t||"native"===o.responseType||"native-request-init"===o.responseType)return !0;let n$1,a,i,l;if(!t.ok)throw n$1=new Error(`Unable to load ${t.url} status: ${t.status}`),n$1[R]=s,n$1;s?.error&&(n$1=s.error),n$1&&(a=Number(n$1.code),i=n$1.hasOwnProperty("subcode")?Number(n$1.subcode):null,l=n$1.messageCode,l=l&&l.toUpperCase());const u=o.authMode;if(403===a&&(4===i||n$1.message&&n$1.message.toLowerCase().includes("ssl")&&!n$1.message.toLowerCase().includes("permission"))){if(!e.useSSL)return e.useSSL=!0,!1}else if(!e.hasToken&&e.useIdentity&&("no-prompt"!==u||498===a)&&_.includes(a)&&!K(e.params.url)&&(403!==a||!F.includes(l)&&(null==i||2===i&&e.credentialToken))){await $();try{const t=await n.getCredential(e.params.url,{error:N("request:server",n$1,e.params),prompt:"no-prompt"!==u,signal:e.controller.signal,token:e.credentialToken});return e.credential=t,e.credentialToken=t.token,e.useSSL=e.useSSL||t.ssl,!1}catch(c){if("no-prompt"===u)return e.credential=null,e.credentialToken=null,!1;n$1=c;}}if(n$1)throw n$1;return !0}function Y(e,r,t=!1){const s=r.controller.signal,o=new Image;return r.withCredentials?o.crossOrigin="use-credentials":o.crossOrigin="anonymous",o.alt="",o.fetchPriority=P.priority,o.src=e,a(o,e,t,s)}U._abortableFetch=null,U._corsServers=["https://server.arcgisonline.com","https://services.arcgisonline.com"];

const request = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': U
});

export { At as A, Bt as B, Ct as C, C as D, it as E, F$1 as F, G$1 as G, H$1 as H, It as I, J$1 as J, K$1 as K, request as L, N$1 as N, Ot as O, Q$1 as Q, St as S, U, V$1 as V, X$1 as X, Y$1 as Y, Z, _$1 as _, n as a, b, s as c, f$1 as d, et as e, ft as f, d$1 as g, a$1 as h, a as i, j$1 as j, kt as k, i as l, I$1 as m, nt as n, o$1 as o, v as p, o as q, r, s$2 as s, S as t, Ut as u, vt as v, ht as w, mt as x, y, z$1 as z };