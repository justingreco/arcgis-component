import { r as r$3, A as v, x as m$1, _ as d$2, T, O as v$1, t, U as k, M as e$4, B as t$1, c as a$4 } from './cast-3d5be210.js';
import { e as e$2 } from './workers-c7a27acb.js';
import { b as R } from './Point-edff2a11.js';
import { e as e$3 } from './TileKey-97254206.js';
import { n as n$5 } from './Collection-a38e0489.js';
import { a as a$2 } from './quickselect-d6c9284c.js';
import { M } from './Extent-f27111e1.js';
import { u as u$2 } from './aaBoundingRect-5e1a4e52.js';
import { a as a$3 } from './Query-1f6c7e43.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class u$1{constructor(e,s){this.item=e,this.controller=s,this.promise=null;}}class l$4{constructor(s){this._deferreds=new Map,this._controllers=new Map,this._processingItems=new Map,this._isPaused=!1,this._schedule=null,this._task=null,this.concurrency=1,s.concurrency&&(this.concurrency=s.concurrency),this._queue=new e$2(s.peeker),this.process=s.process;const t=s.scheduler;s.priority&&r$3(t)&&(this._task=t.registerTask(s.priority,this));}destroy(){this.clear(),this._schedule&&(this._schedule.remove(),this._schedule=null),this._task&&(this._task.remove(),this._task=null);}get length(){return this._processingItems.size+this._queue.length}abort(e){const s=this._controllers.get(e);s&&s.abort();}clear(){this._queue.clear();const e=[];this._controllers.forEach((s=>e.push(s))),this._controllers.clear(),e.forEach((e=>e.abort())),this._processingItems.clear(),this._cancelNext();}forEach(e){this._deferreds.forEach(((s,t)=>e(t)));}get(e){const s=this._deferreds.get(e);return s?s.promise:void 0}isOngoing(e){return this._processingItems.has(e)}has(e){return this._deferreds.has(e)}pause(){this._isPaused||(this._isPaused=!0,this._cancelNext());}push(s,h){const c=this.get(s);if(c)return c;const n=new AbortController;let u=null;h&&(u=v(h,(()=>n.abort())));const l=()=>{const e=this._processingItems.get(s);e&&e.controller.abort(),_(),a.reject(m$1());},_=()=>{p.remove(),r$3(u)&&u.remove(),this._deferreds.delete(s),this._controllers.delete(s),this._queue.remove(s),this._processingItems.delete(s),this._scheduleNext();},p=d$2(n.signal,l),a=T();return this._deferreds.set(s,a),this._controllers.set(s,n),a.promise.then(_,_),this._queue.push(s),this._scheduleNext(),a.promise}last(){return this._queue.last()}peek(){return this._queue.peek()}popLast(){return this._queue.popLast()}reset(){const e=[];this._processingItems.forEach((s=>e.push(s))),this._processingItems.clear();for(const s of e)this._queue.push(s.item),s.controller.abort();this._scheduleNext();}resume(){this._isPaused&&(this._isPaused=!1,this._scheduleNext());}takeAll(){const e=[];for(;this._queue.length;)e.push(this._queue.pop());return this.clear(),e}get running(){return !this._isPaused&&this._queue.length>0&&this._processingItems.size<this.concurrency}runTask(e){for(;!e.done&&this._queue.length>0&&this._processingItems.size<this.concurrency;)this._process(this._queue.pop()),e.madeProgress();}_scheduleNext(){this._task||this._isPaused||this._schedule||(this._schedule=v$1((()=>{this._schedule=null,this._next();})));}_next(){for(;this._queue.length>0&&this._processingItems.size<this.concurrency;)this._process(this._queue.pop());}_cancelNext(){this._schedule&&(this._schedule.remove(),this._schedule=null);}_processResult(e,s){this._canProcessFulfillment(e)&&(this._scheduleNext(),this._deferreds.get(e.item).resolve(s));}_processError(e,s){this._canProcessFulfillment(e)&&(this._scheduleNext(),this._deferreds.get(e.item).reject(s));}_canProcessFulfillment(e){return !!this._deferreds.get(e.item)&&this._processingItems.get(e.item)===e}_process(e){if(t(e))return;let t$1;const r=new AbortController,i=new u$1(e,r);this._processingItems.set(e,i);try{t$1=this.process(e,r.signal);}catch(o){this._processError(i,o);}k(t$1)?(i.promise=t$1,t$1.then((e=>this._processResult(i,e)),(e=>this._processError(i,e)))):this._processResult(i,t$1);}get test(){return {update:e=>this.runTask(e)}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function i$2(t,r){return [t,r]}function e$1(t,r,o){return t[0]=r,t[1]=o,t}function s$1(t,r,o,i,e){return t[0]=r,t[1]=o,t[2]=i,t[3]=e,t}const n$4=new e$3("0/0/0/0");class l$3{constructor(t,r,o,i,e,s,n,l,h,a,u,m){this.level=t,this.resolution=r,this.scale=o,this.origin=i,this.first=e,this.last=s,this.size=n,this.norm=l,this.worldStart=h,this.worldEnd=a,this.worldSize=u,this.wrap=m;}static create(o,s,n=null){const h=R(o.spatialReference),a=s.origin||i$2(o.origin.x,o.origin.y),u=i$2(o.size[0]*s.resolution,o.size[1]*s.resolution),m=i$2(-1/0,-1/0),g=i$2(1/0,1/0),w=i$2(1/0,1/0);r$3(n)&&(e$1(m,Math.max(0,Math.floor((n.xmin-a[0])/u[0])),Math.max(0,Math.floor((a[1]-n.ymax)/u[1]))),e$1(g,Math.max(0,Math.floor((n.xmax-a[0])/u[0])),Math.max(0,Math.floor((a[1]-n.ymin)/u[1]))),e$1(w,g[0]-m[0]+1,g[1]-m[1]+1));const{cols:c,rows:d}=s;let f,F,z,p;return !n&&c&&d&&(e$1(m,c[0],d[0]),e$1(g,c[1],d[1]),e$1(w,c[1]-c[0]+1,d[1]-d[0]+1)),o.isWrappable?(f=i$2(Math.ceil(Math.round((h.valid[1]-h.valid[0])/s.resolution)/o.size[0]),w[1]),F=i$2(Math.floor((h.origin[0]-a[0])/u[0]),m[1]),z=i$2(f[0]+F[0]-1,g[1]),p=!0):(F=m,z=g,f=w,p=!1),new l$3(s.level,s.resolution,s.scale,a,m,g,w,u,F,z,f,p)}normalizeCol(t){if(!this.wrap)return t;const r=this.worldSize[0];return t<0?r-1-Math.abs((t+1)%r):t%r}denormalizeCol(t,r){return this.wrap?this.worldSize[0]*r+t:t}getWorldForColumn(t){return this.wrap?Math.floor(t/this.worldSize[0]):0}getFirstColumnForWorld(t){return t*this.worldSize[0]+this.first[0]}getLastColumnForWorld(t){return t*this.worldSize[0]+this.first[0]+this.size[0]-1}getColumnForX(t){return (t-this.origin[0])/this.norm[0]}getXForColumn(t){return this.origin[0]+t*this.norm[0]}getRowForY(t){return (this.origin[1]-t)/this.norm[1]}getYForRow(t){return this.origin[1]-t*this.norm[1]}getTileBounds(t,r,o=!1){n$4.set(r);const i=o?n$4.col:this.denormalizeCol(n$4.col,n$4.world),e=n$4.row;return s$1(t,this.getXForColumn(i),this.getYForRow(e+1),this.getXForColumn(i+1),this.getYForRow(e)),t}getTileCoords(t,r,o=!1){n$4.set(r);const i=o?n$4.col:this.denormalizeCol(n$4.col,n$4.world);return Array.isArray(t)?e$1(t,this.getXForColumn(i),this.getYForRow(n$4.row)):(t.x=this.getXForColumn(i),t.y=this.getYForRow(n$4.row)),t}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class l$2{constructor(){this.spans=[];}acquire(o){this.lodInfo=o;}release(){this.lodInfo=null,this.spans.length=0;}forEach(o,l){const{spans:s,lodInfo:t}=this,{level:e}=t;if(0!==s.length)for(const{row:r,colFrom:n,colTo:c}of s)for(let s=n;s<=c;s++)o.call(l,e,r,t.normalizeCol(s),t.getWorldForColumn(s));}}l$2.pool=new e$4(l$2);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class o$1{constructor(o,s,t){this.row=o,this.colFrom=s,this.colTo=t;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const i$1=new e$3("0/0/0/0");class n$3{constructor(e,t,o,l,s,i,n,r){this.x=e,this.ymin=t,this.ymax=o,this.invM=l,this.leftAdjust=s,this.rightAdjust=i,this.leftBound=n,this.rightBound=r;}static create(e,t){e[1]>t[1]&&([e,t]=[t,e]);const[o,l]=e,[s,i]=t,r=s-o,a=i-l,h=0!==a?r/a:0,c=(Math.ceil(l)-l)*h,f=(Math.floor(l)-l)*h;return new n$3(o,Math.floor(l),Math.ceil(i),h,r<0?c:f,r<0?f:c,r<0?s:o,r<0?o:s)}incrRow(){this.x+=this.invM;}getLeftCol(){return Math.max(this.x+this.leftAdjust,this.leftBound)}getRightCol(){return Math.min(this.x+this.rightAdjust,this.rightBound)}}const r$2=[[0,0],[0,0],[0,0],[0,0]],a$1=1e-6;class h$1{constructor(e,o=null){this.tileInfo=e,this.fullExtent=o,this.scales=[],this._lodInfos=null,this._infoByScale={},this._infoByLevel={};const l=e.lods.slice();l.sort(((e,t)=>t.scale-e.scale));const s=this._lodInfos=l.map((l=>l$3.create(e,l,o)));l.forEach(((e,t)=>{this._infoByLevel[e.level]=s[t],this._infoByScale[e.scale]=s[t],this.scales[t]=e.scale;}),this),this._wrap=e.isWrappable;}get spatialReference(){return this.tileInfo.spatialReference}getLODInfoAt(e){return this._infoByLevel["number"==typeof e?e:e.level]}getTileBounds(e,t,o=!1){i$1.set(t);const l=this._infoByLevel[i$1.level];return l?l.getTileBounds(e,i$1,o):e}getTileCoords(e,t,o=!1){i$1.set(t);const l=this._infoByLevel[i$1.level];return l?l.getTileCoords(e,i$1,o):e}getTileCoverage(e,t=192,l="closest"){const i="closest"===l?this.getClosestInfoForScale(e.scale):this.getSmallestInfoForScale(e.scale),a=l$2.pool.acquire(i),h=this._wrap;let c,f,u,m=1/0,g=-1/0;const d=a.spans;r$2[0][0]=r$2[0][1]=r$2[1][1]=r$2[3][0]=-t,r$2[1][0]=r$2[2][0]=e.size[0]+t,r$2[2][1]=r$2[3][1]=e.size[1]+t;for(const o of r$2)e.toMap(o,o),o[0]=i.getColumnForX(o[0]),o[1]=i.getRowForY(o[1]);const y=[];let _=3;for(let o=0;o<4;o++){if(r$2[o][1]===r$2[_][1]){_=o;continue}const e=n$3.create(r$2[o],r$2[_]);m=Math.min(e.ymin,m),g=Math.max(e.ymax,g),void 0===y[e.ymin]&&(y[e.ymin]=[]),y[e.ymin].push(e),_=o;}if(null==m||null==g||g-m>100)return null;let v=[];for(c=m;c<g;){null!=y[c]&&(v=v.concat(y[c])),f=1/0,u=-1/0;for(let e=v.length-1;e>=0;e--){const t=v[e];f=Math.min(f,t.getLeftCol()),u=Math.max(u,t.getRightCol());}if(f=Math.floor(f),u=Math.floor(u),c>=i.first[1]&&c<=i.last[1])if(h)if(i.size[0]<i.worldSize[0]){const e=Math.floor(u/i.worldSize[0]);for(let t=Math.floor(f/i.worldSize[0]);t<=e;t++)d.push(new o$1(c,Math.max(i.getFirstColumnForWorld(t),f),Math.min(i.getLastColumnForWorld(t),u)));}else d.push(new o$1(c,f,u));else f>i.last[0]||u<i.first[0]||(f=Math.max(f,i.first[0]),u=Math.min(u,i.last[0]),d.push(new o$1(c,f,u)));c+=1;for(let e=v.length-1;e>=0;e--){const t=v[e];t.ymax>=c?t.incrRow():v.splice(e,1);}}return a}getTileParentId(e){i$1.set(e);const t=this._infoByLevel[i$1.level],o=this._lodInfos.indexOf(t)-1;return o<0?null:(this._getTileIdAtLOD(i$1,this._lodInfos[o],i$1),i$1.id)}getTileResolution(e){const t=this._infoByLevel["object"==typeof e?e.level:e];return t?t.resolution:-1}getTileScale(e){const t=this._infoByLevel[e.level];return t?t.scale:-1}intersects(e,t){i$1.set(t);const o=this._infoByLevel[i$1.level],l=e.lodInfo;if(l.resolution>o.resolution){this._getTileIdAtLOD(i$1,l,i$1);const t=l.denormalizeCol(i$1.col,i$1.world);for(const o of e.spans)if(o.row===i$1.row&&o.colFrom<=t&&o.colTo>=t)return !0}if(l.resolution<o.resolution){const[t,s,n,r]=e.spans.reduce(((e,t)=>(e[0]=Math.min(e[0],t.row),e[1]=Math.max(e[1],t.row),e[2]=Math.min(e[2],t.colFrom),e[3]=Math.max(e[3],t.colTo),e)),[1/0,-1/0,1/0,-1/0]),a=o.denormalizeCol(i$1.col,i$1.world),h=l.getColumnForX(o.getXForColumn(a)),c=l.getRowForY(o.getYForRow(i$1.row)),f=l.getColumnForX(o.getXForColumn(a+1))-1,u=l.getRowForY(o.getYForRow(i$1.row+1))-1;return !(h>r||f<n||c>s||u<t)}const s=l.denormalizeCol(i$1.col,i$1.world);return e.spans.some((e=>e.row===i$1.row&&e.colFrom<=s&&e.colTo>=s))}normalizeBounds(t,o,l){if(t[0]=o[0],t[1]=o[1],t[2]=o[2],t[3]=o[3],this._wrap){const o=R(this.tileInfo.spatialReference),s=-l*(o.valid[1]-o.valid[0]);t[0]+=s,t[2]+=s;}return t}getSmallestInfoForScale(e){const t=this.scales;if(this._infoByScale[e])return this._infoByScale[e];if(e>t[0])return this._infoByScale[t[0]];for(let o=1;o<t.length-1;o++)if(e>t[o]+a$1)return this._infoByScale[t[o-1]];return this._infoByScale[t[t.length-1]]}getClosestInfoForScale(e){const t=this.scales;return this._infoByScale[e]||(e=t.reduce(((t,o)=>Math.abs(o-e)<Math.abs(t-e)?o:t),t[0])),this._infoByScale[e]}scaleToLevel(e){const t=this.scales;if(this._infoByScale[e])return this._infoByScale[e].level;for(let o=t.length-1;o>=0;o--)if(e<t[o]){if(o===t.length-1)return this._infoByScale[t[t.length-1]].level;return this._infoByScale[t[o]].level+(t[o]-e)/(t[o]-t[o+1])}return this._infoByScale[t[0]].level}scaleToZoom(e){return this.tileInfo.scaleToZoom(e)}_getTileIdAtLOD(e,t,o){const l=this._infoByLevel[o.level];return e.set(o),t.resolution<l.resolution?null:(t.resolution===l.resolution||(e.level=t.level,e.col=Math.floor(o.col*l.resolution/t.resolution+.01),e.row=Math.floor(o.row*l.resolution/t.resolution+.01)),e)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function i(t,n){if(!(this instanceof i))return new i(t,n);this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),n&&("function"==typeof n?this.toBBox=n:this._initFormat(n)),this.clear();}function n$2(t,i,n){if(!n)return i.indexOf(t);for(var h=0;h<i.length;h++)if(n(t,i[h]))return h;return -1}function h(t,i){a(t,0,t.children.length,i,t);}function a(t,i,n,h,a){a||(a=x(null)),a.minX=1/0,a.minY=1/0,a.maxX=-1/0,a.maxY=-1/0;for(var e,o=i;o<n;o++)e=t.children[o],r$1(a,t.leaf?h(e):e);return a}function r$1(t,i){return t.minX=Math.min(t.minX,i.minX),t.minY=Math.min(t.minY,i.minY),t.maxX=Math.max(t.maxX,i.maxX),t.maxY=Math.max(t.maxY,i.maxY),t}function e(t,i){return t.minX-i.minX}function o(t,i){return t.minY-i.minY}function s(t){return (t.maxX-t.minX)*(t.maxY-t.minY)}function l$1(t){return t.maxX-t.minX+(t.maxY-t.minY)}function m(t,i){return (Math.max(i.maxX,t.maxX)-Math.min(i.minX,t.minX))*(Math.max(i.maxY,t.maxY)-Math.min(i.minY,t.minY))}function c(t,i){var n=Math.max(t.minX,i.minX),h=Math.max(t.minY,i.minY),a=Math.min(t.maxX,i.maxX),r=Math.min(t.maxY,i.maxY);return Math.max(0,a-n)*Math.max(0,r-h)}function u(t,i){return t.minX<=i.minX&&t.minY<=i.minY&&i.maxX<=t.maxX&&i.maxY<=t.maxY}function f(t,i){return i.minX<=t.maxX&&i.minY<=t.maxY&&i.maxX>=t.minX&&i.maxY>=t.minY}function x(t){return {children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function d$1(i,n,h,a,r){for(var e,o=[n,h];o.length;)(h=o.pop())-(n=o.pop())<=a||(e=n+Math.ceil((h-n)/a/2)*a,a$2(i,e,n,h,r),o.push(n,e,e,h));}i.prototype={all:function(){return this._all(this.data,[])},search:function(t){var i=this.data,n=[],h=this.toBBox;if(!f(t,i))return n;for(var a,r,e,o,s=[];i;){for(a=0,r=i.children.length;a<r;a++)e=i.children[a],f(t,o=i.leaf?h(e):e)&&(i.leaf?n.push(e):u(t,o)?this._all(e,n):s.push(e));i=s.pop();}return n},collides:function(t){var i=this.data,n=this.toBBox;if(!f(t,i))return !1;for(var h,a,r,e,o=[];i;){for(h=0,a=i.children.length;h<a;h++)if(r=i.children[h],f(t,e=i.leaf?n(r):r)){if(i.leaf||u(t,e))return !0;o.push(r);}i=o.pop();}return !1},load:function(t){if(!t||!t.length)return this;if(t.length<this._minEntries){for(var i=0,n=t.length;i<n;i++)this.insert(t[i]);return this}var h=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===h.height)this._splitRoot(this.data,h);else {if(this.data.height<h.height){var a=this.data;this.data=h,h=a;}this._insert(h,this.data.height-h.height-1,!0);}else this.data=h;return this},insert:function(t){return t&&this._insert(t,this.data.height-1),this},clear:function(){return this.data=x([]),this},remove:function(t,i){if(!t)return this;for(var h,a,r,e,o=this.data,s=this.toBBox(t),l=[],m=[];o||l.length;){if(o||(o=l.pop(),a=l[l.length-1],h=m.pop(),e=!0),o.leaf&&-1!==(r=n$2(t,o.children,i)))return o.children.splice(r,1),l.push(o),this._condense(l),this;e||o.leaf||!u(o,s)?a?(h++,o=a.children[h],e=!1):o=null:(l.push(o),m.push(h),h=0,a=o,o=o.children[0]);}return this},toBBox:function(t){return t},compareMinX:e,compareMinY:o,toJSON:function(){return this.data},fromJSON:function(t){return this.data=t,this},_all:function(t,i){for(var n=[];t;)t.leaf?i.push.apply(i,t.children):n.push.apply(n,t.children),t=n.pop();return i},_build:function(t,i,n,a){var r,e=n-i+1,o=this._maxEntries;if(e<=o)return h(r=x(t.slice(i,n+1)),this.toBBox),r;a||(a=Math.ceil(Math.log(e)/Math.log(o)),o=Math.ceil(e/Math.pow(o,a-1))),(r=x([])).leaf=!1,r.height=a;var s,l,m,c,u=Math.ceil(e/o),f=u*Math.ceil(Math.sqrt(o));for(d$1(t,i,n,f,this.compareMinX),s=i;s<=n;s+=f)for(d$1(t,s,m=Math.min(s+f-1,n),u,this.compareMinY),l=s;l<=m;l+=u)c=Math.min(l+u-1,m),r.children.push(this._build(t,l,c,a-1));return h(r,this.toBBox),r},_chooseSubtree:function(t,i,n,h){for(var a,r,e,o,l,c,u,f;h.push(i),!i.leaf&&h.length-1!==n;){for(u=f=1/0,a=0,r=i.children.length;a<r;a++)l=s(e=i.children[a]),(c=m(t,e)-l)<f?(f=c,u=l<u?l:u,o=e):c===f&&l<u&&(u=l,o=e);i=o||i.children[0];}return i},_insert:function(t,i,n){var h=this.toBBox,a=n?t:h(t),e=[],o=this._chooseSubtree(a,this.data,i,e);for(o.children.push(t),r$1(o,a);i>=0&&e[i].children.length>this._maxEntries;)this._split(e,i),i--;this._adjustParentBBoxes(a,e,i);},_split:function(t,i){var n=t[i],a=n.children.length,r=this._minEntries;this._chooseSplitAxis(n,r,a);var e=this._chooseSplitIndex(n,r,a),o=x(n.children.splice(e,n.children.length-e));o.height=n.height,o.leaf=n.leaf,h(n,this.toBBox),h(o,this.toBBox),i?t[i-1].children.push(o):this._splitRoot(n,o);},_splitRoot:function(t,i){this.data=x([t,i]),this.data.height=t.height+1,this.data.leaf=!1,h(this.data,this.toBBox);},_chooseSplitIndex:function(t,i,n){var h,r,e,o,l,m,u,f;for(m=u=1/0,h=i;h<=n-i;h++)o=c(r=a(t,0,h,this.toBBox),e=a(t,h,n,this.toBBox)),l=s(r)+s(e),o<m?(m=o,f=h,u=l<u?l:u):o===m&&l<u&&(u=l,f=h);return f},_chooseSplitAxis:function(t,i,n){var h=t.leaf?this.compareMinX:e,a=t.leaf?this.compareMinY:o;this._allDistMargin(t,i,n,h)<this._allDistMargin(t,i,n,a)&&t.children.sort(h);},_allDistMargin:function(t,i,n,h){t.children.sort(h);var e,o,s=this.toBBox,m=a(t,0,i,s),c=a(t,n-i,n,s),u=l$1(m)+l$1(c);for(e=i;e<n-i;e++)o=t.children[e],r$1(m,t.leaf?s(o):o),u+=l$1(m);for(e=n-i-1;e>=i;e--)o=t.children[e],r$1(c,t.leaf?s(o):o),u+=l$1(c);return u},_adjustParentBBoxes:function(t,i,n){for(var h=n;h>=0;h--)r$1(i[h],t);},_condense:function(t){for(var i,n=t.length-1;n>=0;n--)0===t[n].children.length?n>0?(i=t[n-1].children).splice(i.indexOf(t[n]),1):this.clear():h(t[n],this.toBBox);},_initFormat:function(t){var i=["return a"," - b",";"];this.compareMinX=new Function("a","b",i.join(t[0])),this.compareMinY=new Function("a","b",i.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};");}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class n$1{constructor(t,e){this.key=new e$3(0,0,0,0),this.bounds=u$2(),this.objectIds=new Set,this.key.set(e);const s=t.getLODInfoAt(this.key);this.tileInfoView=t,this.tileInfoView.getTileBounds(this.bounds,this.key,!0),this.resolution=s.resolution,this.scale=s.scale,this.level=s.level;}get id(){return this.key.id}get extent(){return M.fromBounds(this.bounds,this.tileInfoView.tileInfo.spatialReference)}get transform(){return {originPosition:"upperLeft",scale:[this.resolution,this.resolution],translate:[this.bounds[0],this.bounds[3]]}}createChildTiles(){const e=this.key.getChildKeys(),i=t$1.acquire();for(let t=0;t<e.length;t++)i[t]=new n$1(this.tileInfoView,e[t]);return i}getQuantizationParameters(){return a$3.fromJSON({mode:"view",originPosition:"upperLeft",tolerance:this.resolution,extent:{xmin:this.bounds[0],ymin:this.bounds[1],xmax:this.bounds[2],ymax:this.bounds[3],spatialReference:this.tileInfoView.tileInfo.spatialReference}})}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const n={added:[],removed:[]},r=new Set,d=new e$3(0,0,0,0);class l extends n$5{constructor(e){super(),this._tiles=new Map,this._index=i(9,a$4("esri-csp-restrictions")?e=>({minX:e.bounds[0],minY:e.bounds[1],maxX:e.bounds[2],maxY:e.bounds[3]}):[".bounds[0]",".bounds[1]",".bounds[2]",".bounds[3]"]),this.tiles=[],this.tileScheme=e;}destroy(){this.clear();}clear(){this.tiles.length=0,this._tiles.clear(),this._index.clear();}has(e){return this._tiles.has(e)}get(e){return this._tiles.get(e)}boundsIntersections(e){return this._index.search({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]})}updateTiles(e){const t={added:[],removed:[]};for(const s of e.added)if(!this.has(s)){const e=new n$1(this.tileScheme,s);this._tiles.set(s,e),this._index.insert(e),t.added.push(e);}for(const s of e.removed)if(this.has(s)){const e=this.get(s);this._tiles.delete(s),this._index.remove(e),t.removed.push(e);}this.tiles.length=0,this._tiles.forEach((e=>this.tiles.push(e))),(t.added.length||t.removed.length)&&this.emit("update",t);}setViewState(e){const t=this.tileScheme.getTileCoverage(e,0);if(!t)return;const{spans:s,lodInfo:h}=t,{level:l}=h;if(s.length>0)for(const{row:o,colFrom:a,colTo:m}of s)for(let e=a;e<=m;e++){const t=d.set(l,o,h.normalizeCol(e),h.getWorldForColumn(e)).id;if(r.add(t),!this.has(t)){const e=new n$1(this.tileScheme,t);this._tiles.set(t,e),this._index.insert(e),this.tiles.push(e),n.added.push(e);}}for(let i=this.tiles.length-1;i>=0;i--){const e=this.tiles[i];r.has(e.id)||(this._tiles.delete(e.id),this.tiles.splice(i,1),this._index.remove(e),n.removed.push(e));}(n.added.length||n.removed.length)&&this.emit("update",n),l$2.pool.release(t),r.clear(),n.added.length=0,n.removed.length=0;}}

export { l$4 as a, l$2 as b, h$1 as h, i, l, n$1 as n };
