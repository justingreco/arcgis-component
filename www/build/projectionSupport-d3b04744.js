import { r } from './cast-3d5be210.js';
import { f as fn, l as ln } from './projection-fbd5d346.js';
import { t } from './json-063a6f95.js';
import { y as y$1, q as d, I, E, g as g$1, f as k } from './Point-edff2a11.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const h=[0,0];function c(s,t){if(!t)return null;if("x"in t){const e={x:0,y:0};return [e.x,e.y]=s(t.x,t.y,h),null!=t.z&&(e.z=t.z),null!=t.m&&(e.m=t.m),e}if("xmin"in t){const e={xmin:0,ymin:0,xmax:0,ymax:0};return [e.xmin,e.ymin]=s(t.xmin,t.ymin,h),[e.xmax,e.ymax]=s(t.xmax,t.ymax,h),t.hasZ&&(e.zmin=t.zmin,e.zmax=t.zmax,e.hasZ=!0),t.hasM&&(e.mmin=t.mmin,e.mmax=t.mmax,e.hasM=!0),e}return "rings"in t?{rings:p(t.rings,s),hasM:t.hasM,hasZ:t.hasZ}:"paths"in t?{paths:p(t.paths,s),hasM:t.hasM,hasZ:t.hasZ}:"points"in t?{points:l(t.points,s),hasM:t.hasM,hasZ:t.hasZ}:void 0}function p(s,t){const e=[];for(const n of s)e.push(l(n,t));return e}function l(s,t){const e=[];for(const n of s){const s=t(n[0],n[1],[0,0]);e.push(s),n.length>2&&s.push(n[2]),n.length>3&&s.push(n[3]);}return e}async function f(e,n){if(!n)return;const r$1=Array.isArray(e)?e.map((t=>r(t.geometry)&&t.geometry.spatialReference)):[e];await fn(r$1.map((s=>({source:s,dest:n}))));}const x=c.bind(null,y$1),y=c.bind(null,d);function g(s,t$1,a,m){if(!s)return s;if(a||(a=t$1,t$1=s.spatialReference),!I(t$1)||!I(a)||E(t$1,a))return s;if(g$1(t$1,a)){const t=k(a)?x(s):y(s);return t.spatialReference=a,t}return ln(t,[s],t$1,a,null,m)[0]}class _{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this);}async push(s,t,e){if(!s||!s.length||!t||!e||E(t,e))return s;const n={geometries:s,inSpatialReference:t,outSpatialReference:e,resolve:null};return this._jobs.push(n),new Promise((s=>{n.resolve=s,null===this._timer&&(this._timer=setTimeout(this._process,10));}))}_process(){this._timer=null;const s=this._jobs.shift();if(!s)return;const{geometries:t$1,inSpatialReference:r,outSpatialReference:i,resolve:a}=s;g$1(r,i)?k(i)?a(t$1.map(x)):a(t$1.map(y)):a(ln(t,t$1,r,i,null,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10));}}const j=new _;function M(s,t,e){return j.push(s,t,e)}

export { M, f, g };
