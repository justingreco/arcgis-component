import { c as a$1, t as t$3, X as f$1, h as e$2, r as r$2, N as l$1, a as s$5, ar as q } from './cast-3d5be210.js';
import { a as o$2, b as r$3, u as u$1, e as e$3, z as z$1, s as s$7, o as o$4, c as b, M as M$2, m as m$2, n as n$2 } from './mathUtils-559a53d9.js';
import { z, G, R as R$1, I as I$1, E as E$2 } from './unitUtils-a0a11e54.js';
import { e as e$1 } from './Collection-a38e0489.js';
import { x, r as r$4, o as o$3 } from './mat4-d5df0e58.js';
import { M as M$1 } from './Extent-f27111e1.js';
import { v, m, a as m$1 } from './Polyline-dcdb3782.js';
import { a as a$2 } from './assets-99f5c3ee.js';
import { s as s$4, e, t as t$2, E as E$1, I, j, G as G$1, f as k, T as T$1, S as S$1, P as P$1, c as s$6 } from './Point-edff2a11.js';
import { a as a$3 } from './aaBoundingRect-5e1a4e52.js';
import { o as o$1 } from './zscale-0befeff4.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let o,r$1=null;function n$1(){return !!r$1}function _(){return !!a$1("esri-wasm")}function P(){return o||(o=import('./pe-wasm-f976ea1a.js').then((e=>e.p)).then((({default:t})=>t({locateFile:t=>a$2(`esri/geometry/support/${t}`)}))).then((e=>{N(e);})),o)}var s$3,E,i$1;!function(e){function t(e,t,o){r$1.ensureCache.prepare();const n=A(o),_=o===n,P=r$1.ensureFloat64(n),s=r$1._pe_geog_to_proj(r$1.getPointer(e),t,P);return s&&d$1(o,t,P,_),s}function o(e,o,r,_){switch(_){case E.PE_TRANSFORM_P_TO_G:return n(e,o,r);case E.PE_TRANSFORM_G_TO_P:return t(e,o,r)}return 0}function n(e,t,o){return _(e,t,o,0)}function _(e,t,o,n){r$1.ensureCache.prepare();const _=A(o),P=o===_,s=r$1.ensureFloat64(_),E=r$1._pe_proj_to_geog_center(r$1.getPointer(e),t,s,n);return E&&d$1(o,t,s,P),E}e.geogToProj=t,e.projGeog=o,e.projToGeog=n,e.projToGeogCenter=_;}(s$3||(s$3={})),function(e){function t(){e.PE_BUFFER_MAX=r$1.PeDefs.prototype.PE_BUFFER_MAX,e.PE_NAME_MAX=r$1.PeDefs.prototype.PE_NAME_MAX,e.PE_MGRS_MAX=r$1.PeDefs.prototype.PE_MGRS_MAX,e.PE_USNG_MAX=r$1.PeDefs.prototype.PE_USNG_MAX,e.PE_DD_MAX=r$1.PeDefs.prototype.PE_DD_MAX,e.PE_DDM_MAX=r$1.PeDefs.prototype.PE_DDM_MAX,e.PE_DMS_MAX=r$1.PeDefs.prototype.PE_DMS_MAX,e.PE_UTM_MAX=r$1.PeDefs.prototype.PE_UTM_MAX,e.PE_PARM_MAX=r$1.PeDefs.prototype.PE_PARM_MAX,e.PE_TYPE_NONE=r$1.PeDefs.prototype.PE_TYPE_NONE,e.PE_TYPE_GEOGCS=r$1.PeDefs.prototype.PE_TYPE_GEOGCS,e.PE_TYPE_PROJCS=r$1.PeDefs.prototype.PE_TYPE_PROJCS,e.PE_TYPE_GEOGTRAN=r$1.PeDefs.prototype.PE_TYPE_GEOGTRAN,e.PE_TYPE_COORDSYS=r$1.PeDefs.prototype.PE_TYPE_COORDSYS,e.PE_TYPE_UNIT=r$1.PeDefs.prototype.PE_TYPE_UNIT,e.PE_TYPE_LINUNIT=r$1.PeDefs.prototype.PE_TYPE_LINUNIT,e.PE_STR_OPTS_NONE=r$1.PeDefs.prototype.PE_STR_OPTS_NONE,e.PE_STR_AUTH_NONE=r$1.PeDefs.prototype.PE_STR_AUTH_NONE,e.PE_STR_AUTH_TOP=r$1.PeDefs.prototype.PE_STR_AUTH_TOP,e.PE_STR_NAME_CANON=r$1.PeDefs.prototype.PE_STR_NAME_CANON,e.PE_PARM_X0=r$1.PeDefs.prototype.PE_PARM_X0,e.PE_PARM_ND=r$1.PeDefs.prototype.PE_PARM_ND,e.PE_TRANSFORM_1_TO_2=r$1.PeDefs.prototype.PE_TRANSFORM_1_TO_2,e.PE_TRANSFORM_2_TO_1=r$1.PeDefs.prototype.PE_TRANSFORM_2_TO_1,e.PE_TRANSFORM_P_TO_G=r$1.PeDefs.prototype.PE_TRANSFORM_P_TO_G,e.PE_TRANSFORM_G_TO_P=r$1.PeDefs.prototype.PE_TRANSFORM_G_TO_P,e.PE_HORIZON_RECT=r$1.PeDefs.prototype.PE_HORIZON_RECT,e.PE_HORIZON_POLY=r$1.PeDefs.prototype.PE_HORIZON_POLY,e.PE_HORIZON_LINE=r$1.PeDefs.prototype.PE_HORIZON_LINE,e.PE_HORIZON_DELTA=r$1.PeDefs.prototype.PE_HORIZON_DELTA;}e.init=t;}(E||(E={})),function(e){const t={},o={},n=e=>{if(e){const t=e.getType();switch(t){case E.PE_TYPE_GEOGCS:e=r$1.castObject(e,r$1.PeGeogcs);break;case E.PE_TYPE_PROJCS:e=r$1.castObject(e,r$1.PeProjcs);break;case E.PE_TYPE_GEOGTRAN:e=r$1.castObject(e,r$1.PeGeogtran);break;default:t&E.PE_TYPE_UNIT&&(e=r$1.castObject(e,r$1.PeUnit));}}return e};function _(){r$1.PeFactory.prototype.initialize(null);}function P(e){return s(E.PE_TYPE_COORDSYS,e)}function s(e,o){let _=null,P=t[e];if(P||(P={},t[e]=P),P.hasOwnProperty(String(o)))_=P[o];else {const t=r$1.PeFactory.prototype.factoryByType(e,o);r$1.compare(t,r$1.NULL)||(_=t,P[o]=_);}return _=n(_),_}function i(e,t){let _=null,P=o[e];if(P||(P={},o[e]=P),P.hasOwnProperty(t))_=P[t];else {const o=r$1.PeFactory.prototype.fromString(e,t);r$1.compare(o,r$1.NULL)||(_=o,P[t]=_);}return _=n(_),_}function p(e){return s(E.PE_TYPE_GEOGCS,e)}function u(e){return s(E.PE_TYPE_GEOGTRAN,e)}function a(e){return r$1.PeFactory.prototype.getCode(e)}function c(e){return s(E.PE_TYPE_PROJCS,e)}function g(e){return s(E.PE_TYPE_UNIT,e)}e.initialize=_,e.coordsys=P,e.factoryByType=s,e.fromString=i,e.geogcs=p,e.geogtran=u,e.getCode=a,e.projcs=c,e.unit=g;}(i$1||(i$1={}));let p=null;var u,a,c,g,T,f,O,S,l;function N(e){function t(e,t,o){e[t]=o(e[t]);}r$1=e,E.init(),u.init(),T.init(),O.init(),S.init(),p=class extends r$1.PeGCSExtent{destroy(){r$1.destroy(this);}};const o=[r$1.PeDatum,r$1.PeGeogcs,r$1.PeGeogtran,r$1.PeObject,r$1.PeParameter,r$1.PePrimem,r$1.PeProjcs,r$1.PeSpheroid,r$1.PeUnit];for(const r of o)t(r.prototype,"getName",(e=>function(){return e.call(this,new Array(E.PE_NAME_MAX))}));for(const P of [r$1.PeGeogtran,r$1.PeProjcs])t(P.prototype,"getParameters",(e=>function(){const t=new Array(E.PE_PARM_MAX);let o=e.call(this);for(let e=0;e<t.length;e++){const n=r$1.getValue(o,"*");t[e]=n?r$1.wrapPointer(n,r$1.PeParameter):null,o+=Int32Array.BYTES_PER_ELEMENT;}return t}));t(r$1.PeHorizon.prototype,"getCoord",(e=>function(){const t=this.getSize();if(!t)return null;const o=[];return d$1(o,t,e.call(this)),o})),t(r$1.PeGTlistExtendedEntry.prototype,"getEntries",(e=>{const t=r$1._pe_getPeGTlistExtendedGTsSize();return function(){let o=null;const n=e.call(this);if(!r$1.compare(n,r$1.NULL)){o=[n];const e=this.getSteps();if(e>1){const _=r$1.getPointer(n);for(let n=1;n<e;n++)o.push(r$1.wrapPointer(_+t*n,r$1.PeGTlistExtendedGTs));}}return o}}));const n=r$1._pe_getPeHorizonSize(),_=e=>function(){let t=this._cache;if(t||(t=new Map,this._cache=t),t.has(e))return t.get(e);let o=null;const _=e.call(this);if(!r$1.compare(_,r$1.NULL)){o=[_];const e=_.getNump();if(e>1){const t=r$1.getPointer(_);for(let _=1;_<e;_++)o.push(r$1.wrapPointer(t+n*_,r$1.PeHorizon));}}return t.set(e,o),o};t(r$1.PeProjcs.prototype,"horizonGcsGenerate",_),t(r$1.PeProjcs.prototype,"horizonPcsGenerate",_),r$1.PeObject.prototype.toString=function(e=E.PE_STR_OPTS_NONE){r$1.ensureCache.prepare();const t=r$1.getPointer(this),o=r$1.ensureInt8(new Array(E.PE_BUFFER_MAX));return r$1.UTF8ToString(r$1._pe_object_to_string_ext(t,e,o))};}function y(e){if(!e)return;const t=r$1.getClass(e);if(!t)return;const o=r$1.getCache(t);if(!o)return;const n=r$1.getPointer(e);n&&delete o[n];}function M(e,t){const o=[],n=new Array(t);for(let _=0;_<e;_++)o.push(r$1.ensureInt8(n));return o}function A(e){let t;return Array.isArray(e[0])?(t=[],e.forEach((e=>{t.push(e[0],e[1]);}))):t=e,t}function d$1(e,t,o,n=!1){if(n)for(let _=0;_<2*t;_++)e[_]=r$1.getValue(o+_*Float64Array.BYTES_PER_ELEMENT,"double");else {const n=0===e.length;for(let _=0;_<t;_++)n&&(e[_]=new Array(2)),e[_][0]=r$1.getValue(o,"double"),e[_][1]=r$1.getValue(o+Float64Array.BYTES_PER_ELEMENT,"double"),o+=2*Float64Array.BYTES_PER_ELEMENT;}}!function(e){let t;function o(){e.PE_GTLIST_OPTS_COMMON=r$1.PeGTlistExtended.prototype.PE_GTLIST_OPTS_COMMON,t=r$1._pe_getPeGTlistExtendedEntrySize();}function n(e,o,n,_,P,s){let E=null;const i=new r$1.PeInteger(s);try{const p=r$1.PeGTlistExtended.prototype.getGTlist(e,o,n,_,P,i);if((s=i.val)&&(E=[p],s>1)){const e=r$1.getPointer(p);for(let o=1;o<s;o++)E.push(r$1.wrapPointer(e+t*o,r$1.PeGTlistExtendedEntry));}}finally{r$1.destroy(i);}return E}e.init=o,e.getGTlist=n;}(u||(u={})),function(e){function t(e){if(e&&e.length){for(const t of e)y(t),t.getEntries().forEach((e=>{y(e);const t=e.getGeogtran();y(t),t.getParameters().forEach(y),[t.getGeogcs1(),t.getGeogcs2()].forEach((e=>{y(e);const t=e.getDatum();y(t),y(t.getSpheroid()),y(e.getPrimem()),y(e.getUnit());}));}));r$1.PeGTlistExtendedEntry.prototype.Delete(e[0]);}}e.destroy=t;}(a||(a={})),function(e){function t(e,t,o,n,_){r$1.ensureCache.prepare();const P=A(o),s=o===P,E=r$1.ensureFloat64(P);let i=0;n&&(i=r$1.ensureFloat64(n));const p=r$1._pe_geog_to_geog(r$1.getPointer(e),t,E,i,_);return p&&d$1(o,t,E,s),p}e.geogToGeog=t;}(c||(c={})),function(e){const t=(e,t,o,n,_,P)=>{let s,i;switch(r$1.ensureCache.prepare(),e){case"dd":s=r$1._pe_geog_to_dd,i=E.PE_DD_MAX;break;case"ddm":s=r$1._pe_geog_to_ddm,i=E.PE_DDM_MAX;break;case"dms":s=r$1._pe_geog_to_dms,i=E.PE_DMS_MAX;}let p=0;t&&(p=r$1.getPointer(t));const u=A(n),a=r$1.ensureFloat64(u),c=M(o,i),g=s(p,o,a,_,r$1.ensureInt32(c));if(g)for(let E=0;E<o;E++)P[E]=r$1.UTF8ToString(c[E]);return g},o=(e,t,o,n,_)=>{let P;switch(r$1.ensureCache.prepare(),e){case"dd":P=r$1._pe_dd_to_geog;break;case"ddm":P=r$1._pe_ddm_to_geog;break;case"dms":P=r$1._pe_dms_to_geog;}let s=0;t&&(s=r$1.getPointer(t));const E=n.map((e=>r$1.ensureString(e))),i=r$1.ensureInt32(E),p=r$1.ensureFloat64(new Array(2*o)),u=P(s,o,i,p);return u&&d$1(_,o,p),u};function n(e,o,r,n,_){return t("dms",e,o,r,n,_)}function _(e,t,r,n){return o("dms",e,t,r,n)}function P(e,o,r,n,_){return t("ddm",e,o,r,n,_)}function s(e,t,r,n){return o("ddm",e,t,r,n)}function i(e,o,r,n,_){return t("dd",e,o,r,n,_)}function p(e,t,r,n){return o("dd",e,t,r,n)}e.geogToDms=n,e.dmsToGeog=_,e.geogToDdm=P,e.ddmToGeog=s,e.geogToDd=i,e.ddToGeog=p;}(g||(g={})),function(e){function t(){e.PE_MGRS_STYLE_NEW=r$1.PeNotationMgrs.prototype.PE_MGRS_STYLE_NEW,e.PE_MGRS_STYLE_OLD=r$1.PeNotationMgrs.prototype.PE_MGRS_STYLE_OLD,e.PE_MGRS_STYLE_AUTO=r$1.PeNotationMgrs.prototype.PE_MGRS_STYLE_AUTO,e.PE_MGRS_180_ZONE_1_PLUS=r$1.PeNotationMgrs.prototype.PE_MGRS_180_ZONE_1_PLUS,e.PE_MGRS_ADD_SPACES=r$1.PeNotationMgrs.prototype.PE_MGRS_ADD_SPACES;}function o(e,t,o,n,_,P,s){r$1.ensureCache.prepare();let i=0;e&&(i=r$1.getPointer(e));const p=A(o),u=r$1.ensureFloat64(p),a=M(t,E.PE_MGRS_MAX),c=r$1.ensureInt32(a),g=r$1._pe_geog_to_mgrs_extended(i,t,u,n,_,P,c);if(g)for(let E=0;E<t;E++)s[E]=r$1.UTF8ToString(a[E]);return g}function n(e,t,o,n,_){r$1.ensureCache.prepare();let P=0;e&&(P=r$1.getPointer(e));const s=o.map((e=>r$1.ensureString(e))),E=r$1.ensureInt32(s),i=r$1.ensureFloat64(new Array(2*t)),p=r$1._pe_mgrs_to_geog_extended(P,t,E,n,i);return p&&d$1(_,t,i),p}e.init=t,e.geogToMgrsExtended=o,e.mgrsToGeogExtended=n;}(T||(T={})),function(e){function t(e,t,o,n,_,P,s){r$1.ensureCache.prepare();let i=0;e&&(i=r$1.getPointer(e));const p=A(o),u=r$1.ensureFloat64(p),a=M(t,E.PE_MGRS_MAX),c=r$1.ensureInt32(a),g=r$1._pe_geog_to_usng(i,t,u,n,_,P,c);if(g)for(let E=0;E<t;E++)s[E]=r$1.UTF8ToString(a[E]);return g}function o(e,t,o,n){r$1.ensureCache.prepare();let _=0;e&&(_=r$1.getPointer(e));const P=o.map((e=>r$1.ensureString(e))),s=r$1.ensureInt32(P),E=r$1.ensureFloat64(new Array(2*t)),i=r$1._pe_usng_to_geog(_,t,s,E);return i&&d$1(n,t,E),i}e.geogToUsng=t,e.usngToGeog=o;}(f||(f={})),function(e){function t(){e.PE_UTM_OPTS_NONE=r$1.PeNotationUtm.prototype.PE_UTM_OPTS_NONE,e.PE_UTM_OPTS_ADD_SPACES=r$1.PeNotationUtm.prototype.PE_UTM_OPTS_ADD_SPACES,e.PE_UTM_OPTS_NS=r$1.PeNotationUtm.prototype.PE_UTM_OPTS_NS;}function o(e,t,o,n,_){r$1.ensureCache.prepare();let P=0;e&&(P=r$1.getPointer(e));const s=A(o),i=r$1.ensureFloat64(s),p=M(t,E.PE_UTM_MAX),u=r$1.ensureInt32(p),a=r$1._pe_geog_to_utm(P,t,i,n,u);if(a)for(let E=0;E<t;E++)_[E]=r$1.UTF8ToString(p[E]);return a}function n(e,t,o,n,_){r$1.ensureCache.prepare();let P=0;e&&(P=r$1.getPointer(e));const s=o.map((e=>r$1.ensureString(e))),E=r$1.ensureInt32(s),i=r$1.ensureFloat64(new Array(2*t)),p=r$1._pe_utm_to_geog(P,t,E,n,i);return p&&d$1(_,t,i),p}e.init=t,e.geogToUtm=o,e.utmToGeog=n;}(O||(O={})),function(e){const t=new Map;function o(){e.PE_PCSINFO_OPTION_NONE=r$1.PePCSInfo.prototype.PE_PCSINFO_OPTION_NONE,e.PE_PCSINFO_OPTION_DOMAIN=r$1.PePCSInfo.prototype.PE_PCSINFO_OPTION_DOMAIN,e.PE_POLE_OUTSIDE_BOUNDARY=r$1.PePCSInfo.prototype.PE_POLE_OUTSIDE_BOUNDARY,e.PE_POLE_POINT=r$1.PePCSInfo.prototype.PE_POLE_POINT;}function n(o,n=e.PE_PCSINFO_OPTION_DOMAIN){let _,P;return t.has(o)&&(P=t.get(o),P[n]&&(_=P[n])),_||(_=r$1.PePCSInfo.prototype.generate(o,n),P||(P=[],t.set(o,P)),P[n]=_),_}e.init=o,e.generate=n;}(S||(S={})),function(e){function t(){return r$1.PeVersion.prototype.version_string()}e.versionString=t;}(l||(l={}));const R=Object.freeze(Object.defineProperty({__proto__:null,get _pe(){return r$1},isLoaded:n$1,isSupported:_,load:P,get PeCSTransformations(){return s$3},get PeDefs(){return E},get PeFactory(){return i$1},get PeGCSExtent(){return p},get PeGTlistExtended(){return u},get PeGTlistExtendedEntry(){return a},get PeGTTransformations(){return c},get PeNotationDms(){return g},get PeNotationMgrs(){return T},get PeNotationUsng(){return f},get PeNotationUtm(){return O},get PePCSInfo(){return S},get PeVersion(){return l},_init:N},Symbol.toStringTag,{value:"Module"}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const i=Math.PI/180,t$1=/SPHEROID\[([^\]]+)]/i,r=s$4.radius,n=s$4.eccentricitySquared,s$2={a1:r*n,a2:r*n*r*n,a3:r*n*n/2,a4:r*n*r*n*2.5,a5:r*n+r*n*n/2,a6:1-n},d={4267:{a:6378206.4,f:1/294.9786982},4269:{a:6378137,f:1/298.257222101},4326:{a:s$4.radius,f:s$4.flattening},104900:{a:2439700,f:0},104901:{a:6051e3,f:0},104902:{a:6051800,f:0},104903:{a:e.radius,f:e.flattening},104904:{a:3393400,f:1/192.0430107526882},104905:{a:t$2.radius,f:t$2.flattening},104906:{a:6200,f:0},104907:{a:11100,f:0},104908:{a:71492e3,f:.06487439154031222},104909:{a:8200,f:0},104910:{a:83500,f:0},104911:{a:1e4,f:0},104912:{a:2409300,f:0},104913:{a:15e3,f:0},104914:{a:4e4,f:0},104915:{a:1562090,f:0},104916:{a:2632345,f:0},104917:{a:85e3,f:0},104918:{a:1821460,f:0},104919:{a:5e3,f:0},104920:{a:12e3,f:0},104921:{a:3e4,f:3},104922:{a:18e3,f:0},104923:{a:14e3,f:0},104924:{a:49300,f:0},104925:{a:60268e3,f:1/10.2079945799458},104926:{a:16e3,f:0},104927:{a:9500,f:0},104928:{a:56e4,f:0},104929:{a:249400,f:0},104930:{a:59500,f:0},104931:{a:16e3,f:0},104932:{a:133e3,f:0},104933:{a:718e3,f:0},104934:{a:888e3,f:0},104935:{a:1986300,f:0},104936:{a:1e4,f:0},104937:{a:41900,f:0},104938:{a:11e4,f:0},104939:{a:50100,f:0},104940:{a:764e3,f:0},104941:{a:11e3,f:0},104942:{a:529800,f:0},104943:{a:2575e3,f:0},104944:{a:25559e3,f:1/43.61604095563141},104945:{a:578900,f:0},104946:{a:33e3,f:0},104947:{a:21e3,f:0},104948:{a:13e3,f:0},104949:{a:31e3,f:0},104950:{a:27e3,f:0},104951:{a:42e3,f:0},104952:{a:235800,f:0},104953:{a:761400,f:0},104954:{a:15e3,f:0},104955:{a:54e3,f:0},104956:{a:77e3,f:0},104957:{a:27e3,f:0},104958:{a:788900,f:0},104959:{a:584700,f:0},104960:{a:24764e3,f:.01708124697141011},104961:{a:74e3,f:0},104962:{a:79e3,f:0},104963:{a:104e3,f:.14423076923076922},104964:{a:29e3,f:0},104965:{a:17e4,f:0},104966:{a:208e3,f:0},104967:{a:4e4,f:0},104968:{a:1352600,f:0},104969:{a:1195e3,f:0},104970:{a:593e3,f:0},104971:{a:t$2.radius,f:0},104972:{a:47e4,f:0},104973:{a:255e3,f:0},104974:{a:2439400,f:0}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let s$1=0;class t{constructor(t=null){this.uid=s$1++,t?(this._wkt=void 0!==t.wkt?t.wkt:null,this._wkid=void 0!==t.wkid?t.wkid:-1,this._isInverse=void 0!==t.isInverse&&!0===t.isInverse):(this._wkt=null,this._wkid=-1,this._isInverse=!1);}static fromGE(s){const i=new t;return i._wkt=s.wkt,i._wkid=s.wkid,i._isInverse=s.isInverse,i}get wkt(){return this._wkt}set wkt(t){this._wkt=t,this.uid=s$1++;}get wkid(){return this._wkid}set wkid(t){this._wkid=t,this.uid=s$1++;}get isInverse(){return this._isInverse}set isInverse(t){this._isInverse=t,this.uid=s$1++;}getInverse(){const s=new t;return s._wkt=this.wkt,s._wkid=this._wkid,s._isInverse=!this.isInverse,s}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class s{constructor(s){if(this.steps=[],this._cached_projection={},this._chain="",this._gtlistentry=null,s&&s.steps)for(const i of s.steps)i instanceof t?this.steps.push(i):this.steps.push(new t({wkid:i.wkid,wkt:i.wkt,isInverse:i.isInverse}));}static cacheKey(t,s){return [void 0!==t.wkid&&null!==t.wkid?t.wkid.toString():"-1",void 0!==t.wkt&&null!==t.wkt?t.wkt.toString():"",void 0!==s.wkid&&null!==s.wkid?s.wkid.toString():"-1",void 0!==s.wkt&&null!==s.wkt?s.wkt.toString():""].join(",")}static fromGE(i){const e=new s;let n="";for(const s of i.steps){const i=t.fromGE(s);e.steps.push(i),n+=i.uid.toString()+",";}return e._cached_projection={},e._gtlistentry=null,e._chain=n,e}getInverse(){const t=new s;t.steps=[];for(let s=this.steps.length-1;s>=0;s--){const i=this.steps[s];t.steps.push(i.getInverse());}return t}getGTListEntry(){let t="";for(const s of this.steps)t+=s.uid.toString()+",";return t!==this._chain&&(this._gtlistentry=null,this._cached_projection={},this._chain=t),this._gtlistentry}assignCachedGe(t,i,e){this._cached_projection[s.cacheKey(t,i)]=e;}getCachedGeTransformation(t,i){let e="";for(const s of this.steps)e+=s.uid.toString()+",";e!==this._chain&&(this._gtlistentry=null,this._cached_projection={},this._chain=e);const n=this._cached_projection[s.cacheKey(t,i)];return void 0===n?null:n}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let J=null,Q=null,Y=null,$={};const nn=new e$1;function en(){return !!J&&n$1()}function tn(n){return t$3(Y)&&(Y=Promise.all([P(),import('./geometryEngineBase-ee04ca1b.js').then((n=>n.g)),import('./hydrated-235f7f71.js')])),Y.then((([,e,{hydratedAdapter:t}])=>{f$1(n),Q=t,J=e.default,J._enableProjection(R),nn.notify();}))}function rn(n,e,t=null,r=null){return Array.isArray(n)?0===n.length?[]:ln(Q,n,n[0].spatialReference,e,t,r):ln(Q,[n],n.spatialReference,e,t,r)[0]}function ln(n,e,t,r,l=null,i=null){if(t$3(t)||t$3(r))return e;if(An(t,r,l))return e.map((n=>e$2(Sn(n,t,r))));if(t$3(l)){const n=s.cacheKey(t,r);void 0!==$[n]?l=$[n]:(l=on(t,r,null),t$3(l)&&(l=new s),$[n]=l);}if(t$3(J))throw new an;return r$2(i)?J._project(n,e,t,r,l,i):J._project(n,e,t,r,l)}function un(n,e){return t$3(n)?{pending:null,geometry:null}:E$1(n.spatialReference,e)?{pending:null,geometry:n}:I(n.spatialReference)&&I(e)?An(n.spatialReference,e)||en()?{pending:null,geometry:Rn(n,e)}:(l$1(nn),{pending:tn(),geometry:null}):{pending:null,geometry:null}}function on(n,e,t=null){if(t$3(J))throw new an;if(t$3(n)||t$3(e))return null;const r=J._getTransformation(Q,n,e,t,t?.spatialReference);return null!==r?s.fromGE(r):null}function sn(n,e,t=null){if(t$3(J))throw new an;const r=J._getTransformationBySuitability(Q,n,e,t,t?.spatialReference);if(null!==r){const n=[];for(const e of r)n.push(s.fromGE(e));return n}return []}class an extends s$5{constructor(){super("projection:not-loaded","projection engine not fully loaded yet, please call load()");}}var cn;function En(){J=null,Q=null,Y=null,$={};}!function(n){n[n.UNKNOWN=0]="UNKNOWN",n[n.SPHERICAL_ECEF=1]="SPHERICAL_ECEF",n[n.WGS84=2]="WGS84",n[n.WEB_MERCATOR=3]="WEB_MERCATOR",n[n.WGS84_ECEF=4]="WGS84_ECEF",n[n.CGCS2000=5]="CGCS2000",n[n.WGS84_COMPARABLE_LON_LAT=6]="WGS84_COMPARABLE_LON_LAT",n[n.SPHERICAL_MARS_PCPF=7]="SPHERICAL_MARS_PCPF",n[n.GCSMARS2000=8]="GCSMARS2000",n[n.SPHERICAL_MOON_PCPF=9]="SPHERICAL_MOON_PCPF",n[n.GCSMOON2000=10]="GCSMOON2000",n[n.LON_LAT=11]="LON_LAT",n[n.PLATE_CARREE=12]="PLATE_CARREE";}(cn||(cn={}));const Cn={get loadPromise(){return Y}};function Rn(n,e){try{const t=rn(n,e);if(null==t)return null;"xmin"in n&&"xmin"in t&&(t.zmin=n.zmin,t.zmax=n.zmax);const r=o$1(t.type,n.spatialReference,e);return r$2(r)&&r(t),t}catch(t){if(!(t instanceof an))throw t;return null}}function An(n,e,t){return !t&&(!!E$1(n,e)||I(n)&&I(e)&&!!Ie(n,e,je))}async function fn(n,e,t,r){if(en())return q(r);if(Array.isArray(n)){for(const{source:l,dest:u,geographicTransformation:o}of n)if(!An(l,u,o))return tn(r)}else if(!An(n,e,t))return tn(r);return q(r)}function _n(n,e){switch(Ie(n,e,je)){case Jn:return "copy3";case Se:return "wgs84ToSphericalECEF";case ee:return "wgs84ToWebMercator";case le:return "wgs84ToPlateCarree";case he:return "wgs84ToWGS84ECEF";case Qn:return "webMercatorToWGS84";case Yn:return "webMercatorToSphericalECEF";case $n:return "webMercatorToWGS84ECEF";case oe:return "webMercatorToPlateCarree";case We:return "wgs84ECEFToWGS84";case me:return "wgs84ECEFToSphericalECEF";case Te:return "wgs84ECEFToWebMercator";case Oe:return "sphericalECEFToWGS84";case pe:return "sphericalECEFToWebMercator";case Me:return "sphericalMarsPCPFToMars2000";case Le:return "sphericalMoonPCPFToMoon2000";case Ne:return "sphericalECEFToWGS84ECEF";case _e:return "mars2000ToSphericalPCPF";case fe:return "moon2000ToSphericalPCPF";default:return null}}function Sn(n,e,t){return n?"x"in n?Ln(n,e,new j,t,0):"xmin"in n?Fn(n,e,new M$1,t,0):"rings"in n?mn(n,e,new v,t,0):"paths"in n?Nn(n,e,new m,t,0):"points"in n?On(n,e,new m$1,t,0):null:null}function Pn(n,e,t=e.spatialReference,r=0){return !t$3(t)&&r$2(Ln(n,n.spatialReference,e,t,r))}function Ln(n,e,t,r,l){ke[0]=n.x,ke[1]=n.y;const u=n.z;return ke[2]=void 0!==u?u:l,Un(ke,e,0,ke,r,0,1)?(t.x=ke[0],t.y=ke[1],t.spatialReference=r,void 0===u?(t.z=void 0,t.hasZ=!1):(t.z=ke[2],t.hasZ=!0),void 0===n.m?(t.m=void 0,t.hasM=!1):(t.m=n.m,t.hasM=!0),t):null}function Mn(n,e,t=e.spatialReference,r=0){return !t$3(t)&&r$2(On(n,n.spatialReference,e,t,r))}function On(n,e,t,r,l){const{points:u,hasZ:o,hasM:s}=n,i=[],a=u.length,c=[];for(const E of u)c.push(E[0],E[1],o?E[2]:l);if(!Un(c,e,0,c,r,0,a))return null;for(let E=0;E<a;++E){const n=3*E,e=c[n],t=c[n+1];o&&s?i.push([e,t,c[n+2],u[E][3]]):o?i.push([e,t,c[n+2]]):s?i.push([e,t,u[E][2]]):i.push([e,t]);}return t.points=i,t.spatialReference=r,t.hasZ=o,t.hasM=s,t}function pn(n,e,t=e.spatialReference,r=0){return r$2(t)&&r$2(Nn(n,n.spatialReference,e,t,r))}function Nn(n,e,t,r,l){const{paths:u,hasZ:o,hasM:s}=n,i=[];return Kn(u,o,s,e,i,r,l)?(t.paths=i,t.spatialReference=r,t.hasZ=o,t.hasM=s,t):null}function Gn({hasZ:n,spatialReference:e,paths:t},r,l=0){const u=Dn(e,ge),s=Fe[u][cn.WGS84_COMPARABLE_LON_LAT];if(t$3(s))return !1;const i=n?n=>n:n=>o$2(ke,n[0],n[1],l);for(const o of t){const n=[];for(const e of o){const t=[0,0,l];s(i(e),0,t,0),n.push(t);}r.push(n);}return !0}function hn({hasZ:n,spatialReference:e,rings:t},r,l=0){const u=Dn(e,ge),s=Fe[u][cn.WGS84_COMPARABLE_LON_LAT];if(t$3(s))return !1;const i=n?n=>n:n=>o$2(ke,n[0],n[1],l);for(const o of t){const n=[];for(const e of o){const t=[0,0,l];s(i(e),0,t,0),n.push(t);}r.push(n);}return !0}function Wn(n,e,t=e.spatialReference,r=0){return r$2(t)&&r$2(mn(n,n.spatialReference,e,t,r))}function mn(n,e,t,r,l){const{rings:u,hasZ:o,hasM:s}=n,i=[];return Kn(u,o,s,e,i,r,l)?(t.rings=i,t.spatialReference=r,t.hasZ=o,t.hasM=s,t):null}function Tn(n,e,t=e.spatialReference,r=0){return r$2(t)&&r$2(Fn(n,n.spatialReference,e,t,r))}function Fn(n,e,t,r,l){const{xmin:u,ymin:o,xmax:s,ymax:i,hasZ:a,hasM:c}=n;if(!gn(u,o,a?n.zmin:l,e,ke,r))return null;t.xmin=ke[0],t.ymin=ke[1],a&&(t.zmin=ke[2]);return gn(s,i,a?n.zmax:l,e,ke,r)?(t.xmax=ke[0],t.ymax=ke[1],a&&(t.zmax=ke[2]),c&&(t.mmin=n.mmin,t.mmax=n.mmax),t.spatialReference=r,t):null}function In(n,e,t){if(t$3(e)||t$3(t))return null;const r=new j({spatialReference:t});return Un(n,e,0,ke,t,0,1)?(r.x=ke[0],r.y=ke[1],r.z=ke[2],r):null}function dn(n,e,t){return Un(n,e,0,ke,t.spatialReference,0,1)?(t.x=ke[0],t.y=ke[1],t.z=ke[2],t):null}function Hn(n,e,t,r=0){ke[0]=n.x,ke[1]=n.y;const l=n.z;return ke[2]=void 0!==l?l:r,Un(ke,n.spatialReference,0,e,t,0,1)}function gn(n,e,t,r,l,u){return xe[0]=n,xe[1]=e,xe[2]=t,Un(xe,r,0,l,u,0,1)}function Bn(n,e,t,r){return !(t$3(e)||t$3(r)||n.length<2)&&(2===n.length&&(xe[0]=n[0],xe[1]=n[1],xe[2]=0,n=xe),Un(n,e,0,t,r,0,1))}function jn(n,e){ke[0]=n.x,ke[1]=n.y;const t=n.z;return ke[2]=void 0!==t?t:0,yn(ke,n.spatialReference,e)}function yn(n,e,t){return wn(n,e,t)}function wn(n,e,t){if(t$3(e))return !1;const r=Dn(e,ge),l=Fe[r][cn.WGS84_COMPARABLE_LON_LAT];return !t$3(l)&&(l(n,0,xe,0),t!==xe&&(t[0]=xe[0],t[1]=xe[1],t.length>2&&(t[2]=xe[2])),!0)}function Un(n,e,t,r,l,u,s=1){const i=Ie(e,l,je);if(t$3(i))return !1;if(i===Jn){if(n===r&&t===u)return !0;const e=t+3*s;for(let l=t,o=u;l<e;l++,o++)r[o]=n[l];return !0}const a=t+3*s;for(let o=t,c=u;o<a;o+=3,c+=3)i(n,o,r,c);return !0}function xn(n,e,t,r,l){r$3(ke,n),u$1(ze,n,e),Bn(ke,t,ke,l),Bn(ze,t,ze,l),e$3(r,ze,ke),z$1(r,r);}function Kn(n,e,t,r,l,u,o=0){const s=new Array;for(const a of n)for(const n of a)s.push(n[0],n[1],e?n[2]:o);if(!Un(s,r,0,s,u,0,s.length/3))return !1;let i=0;l.length=0;for(const a of n){const n=new Array;for(const r of a)e&&t?n.push([s[i++],s[i++],s[i++],r[3]]):e?n.push([s[i++],s[i++],s[i++]]):t?(n.push([s[i++],s[i++],r[2]]),i++):(n.push([s[i++],s[i++]]),i++);l.push(n);}return !0}function bn(n,e,t,r){if(t$3(e)||t$3(r))return !1;const l=de(e,r,ye);if(l.projector===Jn)return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],!0;if(t$3(l.projector))return !1;const{source:s,dest:i}=l;if(i.spatialReferenceId===cn.WEB_MERCATOR){const e=Fe[s.spatialReferenceId][cn.WGS84];return !t$3(e)&&(e(n,0,Ke,0),ee(Ke,0,t,0),t[3]=kn(Ke[1],n[2],n[3],s$4.radius),!0)}if(s.spatialReferenceId!==cn.WGS84&&s.spatialReferenceId!==cn.CGCS2000||i.spatialReferenceId!==cn.PLATE_CARREE)l.projector(n,0,t,0),t[3]=n[3]*s.metersPerUnit/i.metersPerUnit;else {const e=Fe[s.spatialReferenceId][cn.SPHERICAL_ECEF],r=Fe[cn.SPHERICAL_ECEF][cn.PLATE_CARREE];let o=n[3];r$2(e)&&r$2(r)&&(o=kn(n[1],n[2],n[3],s$4.radius)),l.projector(n,0,t,0),t[3]=o;}return !0}function kn(n,e,t,r){const l=r+e;if(l<r/2||t>l)return Number.MAX_VALUE;const u=Math.abs(we*n)+Math.asin(t/l);return u>=Math.PI/2?Number.MAX_VALUE:t/Math.cos(u)}function zn(n,e,t,r){return null!=n&&(E$1(e,r)?(a$3(t,n),!0):(xe[0]=n[0],xe[1]=n[1],xe[2]=0,!!Un(xe,e,0,xe,r,0,1)&&(t[0]=xe[0],t[1]=xe[1],xe[0]=n[2],xe[1]=n[3],xe[2]=0,!!Un(xe,e,0,xe,r,0,1)&&(t[2]=xe[0],t[3]=xe[1],!0))))}function vn(n,e,t,r){if(t$3(e)||t$3(r))return !1;const l=Dn(e,ge),u=Dn(r,Be);if(l===u&&l!==cn.UNKNOWN||E$1(e,r))return t[0]=1,t[1]=1,t[2]=1,!0;if(l===cn.SPHERICAL_ECEF){const e=s$7(n),r=e/Math.sqrt(n[0]*n[0]+n[1]*n[1]),l=e/s$4.radius;if(u===cn.WEB_MERCATOR)return t[0]=r*l,t[1]=r*l,t[2]=1,!0;if(u===cn.WGS84||u===cn.CGCS2000){const n=re;return t[0]=n*r*l,t[1]=n*l,t[2]=1,!0}}else if(l===cn.PLATE_CARREE){if(u===cn.WGS84||u===cn.CGCS2000)return t[0]=re,t[1]=re,t[2]=1,!0;if(u===cn.WEB_MERCATOR){const e=n[1]/s$4.radius;return t[0]=1,t[1]=1/Math.cos(e),t[2]=1,!0}}return !1}function qn(n,e,t,r){if(t$3(n)||t$3(r))return !1;const l=Dn(n,ge),u=Dn(r,Be);if(l===u&&!Zn(u)&&(l!==cn.UNKNOWN||E$1(n,r)))return x(t,e),!0;if(Zn(u)){const n=Fe[l][cn.LON_LAT],r=Fe[cn.LON_LAT][u];return !t$3(n)&&!t$3(r)&&(n(e,0,Ke,0),r(Ke,0,be,0),Vn(we*Ke[0],we*Ke[1],t),t[12]=be[0],t[13]=be[1],t[14]=be[2],!0)}if((u===cn.WEB_MERCATOR||u===cn.PLATE_CARREE)&&(l===cn.WGS84||l===cn.CGCS2000&&u===cn.PLATE_CARREE||l===cn.SPHERICAL_ECEF||l===cn.WEB_MERCATOR)){const n=Fe[l][cn.LON_LAT],r=Fe[cn.LON_LAT][u];return !t$3(n)&&!t$3(r)&&(n(e,0,Ke,0),r(Ke,0,be,0),l===cn.SPHERICAL_ECEF?Xn(we*Ke[0],we*Ke[1],t):r$4(t),t[12]=be[0],t[13]=be[1],t[14]=be[2],!0)}return !1}function Zn(n){return n===cn.SPHERICAL_ECEF||n===cn.SPHERICAL_MARS_PCPF||n===cn.SPHERICAL_MOON_PCPF}function Vn(n,e,t){const r=Math.sin(n),l=Math.cos(n),u=Math.sin(e),o=Math.cos(e),s=t;return s[0]=-r,s[4]=-u*l,s[8]=o*l,s[12]=0,s[1]=l,s[5]=-u*r,s[9]=o*r,s[13]=0,s[2]=0,s[6]=o,s[10]=u,s[14]=0,s[3]=0,s[7]=0,s[11]=0,s[15]=1,s}function Xn(n,e,t){return Vn(n,e,t),o$3(t,t),t}function Dn(n,e){return e.spatialReference===n?e.spatialReferenceId:(e.spatialReference=n,"metersPerUnit"in e&&(e.metersPerUnit=z(n,1)),n.wkt===G.wkt?e.spatialReferenceId=cn.SPHERICAL_ECEF:G$1(n)?e.spatialReferenceId=cn.WGS84:k(n)?e.spatialReferenceId=cn.WEB_MERCATOR:T$1(n)?e.spatialReferenceId=cn.PLATE_CARREE:n.wkt===R$1.wkt?e.spatialReferenceId=cn.WGS84_ECEF:n.wkid===S$1.CGCS2000?e.spatialReferenceId=cn.CGCS2000:n.wkt===I$1.wkt?e.spatialReferenceId=cn.SPHERICAL_MARS_PCPF:n.wkt===E$2.wkt?e.spatialReferenceId=cn.SPHERICAL_MOON_PCPF:P$1(n)?e.spatialReferenceId=cn.GCSMARS2000:s$6(n)?e.spatialReferenceId=cn.GCSMOON2000:e.spatialReferenceId=cn.UNKNOWN)}function Jn(n,e,t,r){n!==t&&(t[r++]=n[e++],t[r++]=n[e++],t[r]=n[e]);}function Qn(n,e,t,r){t[r++]=Ue*(n[e++]/s$4.radius),t[r++]=Ue*(Math.PI/2-2*Math.atan(Math.exp(-n[e++]/s$4.radius))),t[r]=n[e];}function Yn(n,e,t,r){Qn(n,e,t,r),Se(t,r,t,r);}function $n(n,e,t,r){Qn(n,e,t,r),he(t,r,t,r);}function ne(n,t,r,l,u){const o=.4999999*Math.PI,s=o$4(we*n[t+1],-o,o),i=Math.sin(s);r[l++]=we*n[t]*u.radius,r[l++]=u.halfSemiMajorAxis*Math.log((1+i)/(1-i)),r[l]=n[t+2];}function ee(n,e,t,r){ne(n,e,t,r,s$4);}const te=s$4.radius*Math.PI/180,re=180/(s$4.radius*Math.PI);function le(n,e,t,r){t[r]=n[e]*te,t[r+1]=n[e+1]*te,t[r+2]=n[e+2];}function ue(n,e,t,r){t[r]=n[e]*re,t[r+1]=n[e+1]*re,t[r+2]=n[e+2];}function oe(n,e,t,r){Qn(n,e,t,r),le(t,r,t,r);}function se(n,e,t,r){We(n,e,t,r),le(t,r,t,r);}function ie(n,e,t,r){Oe(n,e,t,r),le(t,r,t,r);}function ae(n,e,t,r){ue(n,e,t,r),Se(t,r,t,r);}function ce(n,e,t,r){ue(n,e,t,r),ee(t,r,t,r);}function Ee(n,e,t,r){ue(n,e,t,r),he(t,r,t,r);}function Ce(n){if(t$3(n))return !1;const e=Dn(n,ge);return !!Fe[e][cn.WGS84_COMPARABLE_LON_LAT]}function Re(n,e,t,r){const l=Math.cos(t);n[0]=Math.cos(e)*l*r,n[1]=Math.sin(e)*l*r,n[2]=Math.sin(t)*r;}function Ae(n,e,t,r,l){const u=l+n[e+2],o=we*n[e+1],s=we*n[e],i=Math.cos(o);t[r++]=Math.cos(s)*i*u,t[r++]=Math.sin(s)*i*u,t[r]=Math.sin(o)*u;}function fe(n,e$1,t,r){Ae(n,e$1,t,r,e.radius);}function _e(n,e,t,r){Ae(n,e,t,r,t$2.radius);}function Se(n,e,t,r){Ae(n,e,t,r,s$4.radius);}function Pe(n,e,t,r,u){const o=n[e],s=n[e+1],i=n[e+2],a=Math.sqrt(o*o+s*s+i*i),c=b(i/(0===a?1:a)),E=Math.atan2(s,o);t[r++]=Ue*E,t[r++]=Ue*c,t[r]=a-u;}function Le(n,e$1,t,r){Pe(n,e$1,t,r,e.radius);}function Me(n,e,t,r){Pe(n,e,t,r,t$2.radius);}function Oe(n,e,t,r){Pe(n,e,t,r,s$4.radius);}function pe(n,e,t,r){Oe(n,e,t,r),ee(t,r,t,r);}function Ne(n,e,t,r){Oe(n,e,t,r),he(t,r,t,r);}function Ge(n,e,t,r,l){const u=we*n[e],o=we*n[e+1],s=n[e+2],i=Math.sin(o),a=Math.cos(o),c=l.radius/Math.sqrt(1-l.eccentricitySquared*i*i);t[r++]=(c+s)*a*Math.cos(u),t[r++]=(c+s)*a*Math.sin(u),t[r++]=(c*(1-l.eccentricitySquared)+s)*i;}function he(n,e,t,r){Ge(n,e,t,r,s$4);}function We(n,e,t,r){const l=s$2,u=n[e],o=n[e+1],s=n[e+2];let i,a,c,E,C,R,A,f,_,S,P,L,M,O,p,N,G,h,W,m,T;i=Math.abs(s),a=u*u+o*o,c=Math.sqrt(a),E=a+s*s,C=Math.sqrt(E),m=Math.atan2(o,u),R=s*s/E,A=a/E,O=l.a2/C,p=l.a3-l.a4/C,A>.3?(f=i/C*(1+A*(l.a1+O+R*p)/C),W=Math.asin(f),S=f*f,_=Math.sqrt(1-S)):(_=c/C*(1-R*(l.a5-O-A*p)/C),W=Math.acos(_),S=1-_*_,f=Math.sqrt(S)),P=1-s$4.eccentricitySquared*S,L=s$4.radius/Math.sqrt(P),M=l.a6*L,O=c-L*_,p=i-M*f,G=_*O+f*p,N=_*p-f*O,h=N/(M/P+G),W+=h,T=G+N*h/2,s<0&&(W=-W),t[r++]=Ue*m,t[r++]=Ue*W,t[r]=T;}function me(n,e,t,r){We(n,e,t,r),Se(t,r,t,r);}function Te(n,e,t,r){We(n,e,t,r),ee(t,r,t,r);}const Fe={[cn.WGS84]:{[cn.CGCS2000]:null,[cn.GCSMARS2000]:null,[cn.GCSMOON2000]:null,[cn.LON_LAT]:Jn,[cn.WGS84_COMPARABLE_LON_LAT]:Jn,[cn.SPHERICAL_ECEF]:Se,[cn.SPHERICAL_MARS_PCPF]:null,[cn.SPHERICAL_MOON_PCPF]:null,[cn.UNKNOWN]:null,[cn.WEB_MERCATOR]:ee,[cn.PLATE_CARREE]:le,[cn.WGS84]:Jn,[cn.WGS84_ECEF]:he},[cn.CGCS2000]:{[cn.CGCS2000]:Jn,[cn.GCSMARS2000]:null,[cn.GCSMOON2000]:null,[cn.LON_LAT]:Jn,[cn.WGS84_COMPARABLE_LON_LAT]:Jn,[cn.SPHERICAL_ECEF]:Se,[cn.SPHERICAL_MARS_PCPF]:null,[cn.SPHERICAL_MOON_PCPF]:null,[cn.UNKNOWN]:null,[cn.WEB_MERCATOR]:null,[cn.PLATE_CARREE]:le,[cn.WGS84]:null,[cn.WGS84_ECEF]:he},[cn.GCSMARS2000]:{[cn.CGCS2000]:null,[cn.GCSMARS2000]:Jn,[cn.GCSMOON2000]:null,[cn.LON_LAT]:Jn,[cn.WGS84_COMPARABLE_LON_LAT]:null,[cn.SPHERICAL_ECEF]:null,[cn.SPHERICAL_MARS_PCPF]:_e,[cn.SPHERICAL_MOON_PCPF]:null,[cn.UNKNOWN]:null,[cn.WEB_MERCATOR]:null,[cn.PLATE_CARREE]:null,[cn.WGS84]:null,[cn.WGS84_ECEF]:null},[cn.GCSMOON2000]:{[cn.CGCS2000]:null,[cn.GCSMARS2000]:null,[cn.GCSMOON2000]:Jn,[cn.LON_LAT]:Jn,[cn.WGS84_COMPARABLE_LON_LAT]:null,[cn.SPHERICAL_ECEF]:null,[cn.SPHERICAL_MARS_PCPF]:null,[cn.SPHERICAL_MOON_PCPF]:fe,[cn.UNKNOWN]:null,[cn.WEB_MERCATOR]:null,[cn.PLATE_CARREE]:null,[cn.WGS84]:null,[cn.WGS84_ECEF]:null},[cn.WEB_MERCATOR]:{[cn.CGCS2000]:null,[cn.GCSMARS2000]:null,[cn.GCSMOON2000]:null,[cn.LON_LAT]:Qn,[cn.WGS84_COMPARABLE_LON_LAT]:Qn,[cn.SPHERICAL_ECEF]:Yn,[cn.SPHERICAL_MARS_PCPF]:null,[cn.SPHERICAL_MOON_PCPF]:null,[cn.UNKNOWN]:null,[cn.WEB_MERCATOR]:Jn,[cn.PLATE_CARREE]:oe,[cn.WGS84]:Qn,[cn.WGS84_ECEF]:$n},[cn.WGS84_ECEF]:{[cn.CGCS2000]:We,[cn.GCSMARS2000]:null,[cn.GCSMOON2000]:null,[cn.LON_LAT]:We,[cn.WGS84_COMPARABLE_LON_LAT]:We,[cn.SPHERICAL_ECEF]:me,[cn.SPHERICAL_MARS_PCPF]:null,[cn.SPHERICAL_MOON_PCPF]:null,[cn.UNKNOWN]:null,[cn.WEB_MERCATOR]:Te,[cn.PLATE_CARREE]:se,[cn.WGS84]:We,[cn.WGS84_ECEF]:Jn},[cn.SPHERICAL_ECEF]:{[cn.CGCS2000]:Oe,[cn.GCSMARS2000]:null,[cn.GCSMOON2000]:null,[cn.LON_LAT]:Oe,[cn.WGS84_COMPARABLE_LON_LAT]:Oe,[cn.SPHERICAL_ECEF]:Jn,[cn.SPHERICAL_MARS_PCPF]:null,[cn.SPHERICAL_MOON_PCPF]:null,[cn.UNKNOWN]:null,[cn.WEB_MERCATOR]:pe,[cn.PLATE_CARREE]:ie,[cn.WGS84]:Oe,[cn.WGS84_ECEF]:Ne},[cn.SPHERICAL_MARS_PCPF]:{[cn.CGCS2000]:null,[cn.GCSMARS2000]:Me,[cn.GCSMOON2000]:null,[cn.LON_LAT]:Me,[cn.WGS84_COMPARABLE_LON_LAT]:null,[cn.SPHERICAL_ECEF]:null,[cn.SPHERICAL_MARS_PCPF]:Jn,[cn.SPHERICAL_MOON_PCPF]:null,[cn.UNKNOWN]:null,[cn.WEB_MERCATOR]:null,[cn.PLATE_CARREE]:null,[cn.WGS84]:null,[cn.WGS84_ECEF]:null},[cn.SPHERICAL_MOON_PCPF]:{[cn.CGCS2000]:null,[cn.GCSMARS2000]:null,[cn.GCSMOON2000]:Le,[cn.LON_LAT]:Le,[cn.WGS84_COMPARABLE_LON_LAT]:null,[cn.SPHERICAL_ECEF]:null,[cn.SPHERICAL_MARS_PCPF]:null,[cn.SPHERICAL_MOON_PCPF]:Jn,[cn.UNKNOWN]:null,[cn.WEB_MERCATOR]:null,[cn.PLATE_CARREE]:null,[cn.WGS84]:null,[cn.WGS84_ECEF]:null},[cn.UNKNOWN]:{[cn.CGCS2000]:null,[cn.GCSMARS2000]:null,[cn.GCSMOON2000]:null,[cn.LON_LAT]:null,[cn.WGS84_COMPARABLE_LON_LAT]:null,[cn.SPHERICAL_ECEF]:null,[cn.SPHERICAL_MARS_PCPF]:null,[cn.SPHERICAL_MOON_PCPF]:null,[cn.UNKNOWN]:Jn,[cn.WEB_MERCATOR]:null,[cn.PLATE_CARREE]:null,[cn.WGS84]:null,[cn.WGS84_ECEF]:null},[cn.LON_LAT]:{[cn.CGCS2000]:Jn,[cn.GCSMARS2000]:Jn,[cn.GCSMOON2000]:Jn,[cn.LON_LAT]:Jn,[cn.WGS84_COMPARABLE_LON_LAT]:Jn,[cn.SPHERICAL_ECEF]:Se,[cn.SPHERICAL_MARS_PCPF]:_e,[cn.SPHERICAL_MOON_PCPF]:fe,[cn.UNKNOWN]:null,[cn.WEB_MERCATOR]:ee,[cn.PLATE_CARREE]:le,[cn.WGS84]:Jn,[cn.WGS84_ECEF]:he},[cn.WGS84_COMPARABLE_LON_LAT]:{[cn.CGCS2000]:null,[cn.GCSMARS2000]:null,[cn.GCSMOON2000]:null,[cn.LON_LAT]:Jn,[cn.WGS84_COMPARABLE_LON_LAT]:Jn,[cn.SPHERICAL_ECEF]:Se,[cn.SPHERICAL_MARS_PCPF]:null,[cn.SPHERICAL_MOON_PCPF]:null,[cn.UNKNOWN]:null,[cn.WEB_MERCATOR]:null,[cn.PLATE_CARREE]:le,[cn.WGS84]:Jn,[cn.WGS84_ECEF]:he},[cn.PLATE_CARREE]:{[cn.CGCS2000]:ue,[cn.GCSMARS2000]:null,[cn.GCSMOON2000]:null,[cn.LON_LAT]:ue,[cn.WGS84_COMPARABLE_LON_LAT]:ue,[cn.SPHERICAL_ECEF]:ae,[cn.SPHERICAL_MARS_PCPF]:null,[cn.SPHERICAL_MOON_PCPF]:null,[cn.UNKNOWN]:null,[cn.WEB_MERCATOR]:ce,[cn.PLATE_CARREE]:Jn,[cn.WGS84]:ue,[cn.WGS84_ECEF]:Ee}};function Ie(n,e,t=He()){return t$3(n)||t$3(e)?null:de(n,e,t).projector}function de(n,e,t){if(t$3(n)||t$3(e)||t.source.spatialReference===n&&t.dest.spatialReference===e)return t;const r=Dn(n,t.source),l=Dn(e,t.dest);return r===cn.UNKNOWN&&l===cn.UNKNOWN?E$1(n,e)?t.projector=Jn:t.projector=null:t.projector=Fe[r][l],t}function He(){return {source:{spatialReference:null,spatialReferenceId:cn.UNKNOWN,metersPerUnit:1},dest:{spatialReference:null,spatialReferenceId:cn.UNKNOWN,metersPerUnit:1},projector:Jn}}const ge={spatialReference:null,spatialReferenceId:cn.UNKNOWN},Be={spatialReference:null,spatialReferenceId:cn.UNKNOWN},je=He(),ye=He(),we=M$2(1),Ue=m$2(1),xe=n$2(),Ke=n$2(),be=n$2(),ke=n$2(),ze=n$2();

export { An as A, Bn as B, Ce as C, Pe as D, E, Hn as H, In as I, Pn as P, Re as R, Sn as S, Un as U, Vn as V, Wn as W, _n as _, s$3 as a, bn as b, c, dn as d, en as e, fn as f, S as g, gn as h, i$1 as i, jn as j, Rn as k, ln as l, d as m, ne as n, on as o, t$1 as p, qn as q, rn as r, s, tn as t, un as u, vn as v, i as w, xn as x, yn as y, zn as z };
