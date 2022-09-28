import { a } from './asyncUtils-96c00c9e.js';
import { r, t, a as s, aq as y, $ as w$1, E as E$1 } from './cast-3d5be210.js';
import { z } from './unitUtils-a0a11e54.js';
import { a as m, m as m$1 } from './Polyline-dcdb3782.js';
import { j } from './Point-edff2a11.js';
import { f as fn, r as rn } from './projection-fbd5d346.js';
import { c, u, R as R$1 } from './aaBoundingRect-5e1a4e52.js';
import { p } from './ElevationSampler-86027644.js';
import './request-ac4d8bfb.js';
import './Extent-f27111e1.js';
import './JSONSupport-dce2c67b.js';
import './mathUtils-559a53d9.js';
import './Collection-a38e0489.js';
import './mat4-d5df0e58.js';
import './assets-99f5c3ee.js';
import './zscale-0befeff4.js';
import './geometry-2f332a26.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class i{constructor(a,i=null){if(this.tile=a,this.zmin=0,this.zmax=0,r(i)){const t=a.extent;this.samplerData={pixelData:i.values,width:i.width,height:i.height,safeWidth:.99999999*(i.width-1),noDataValue:i.noDataValue,dx:(i.width-1)/(t[2]-t[0]),dy:(i.width-1)/(t[3]-t[1]),x0:t[0],y1:t[3]},this.zmin=i.minValue,this.zmax=i.maxValue;}}sample(t$1,i){if(t(this.samplerData))return;const{safeWidth:h,width:s,pixelData:l,noDataValue:n,dx:o,dy:r,y1:m,x0:d}=this.samplerData,u=e(r*(m-i),0,h),x=e(o*(t$1-d),0,h),f=Math.floor(u),c=Math.floor(x),p=f*s+c,D=p+s,w=l[p],y=l[D],V=l[p+1],z=l[D+1];if(w!==n&&y!==n&&V!==n&&z!==n){const t=x-c,a=w+(V-w)*t;return a+(y+(z-y)*t-a)*(u-f)}}}function e(t,a,i){return t<a?a:t>i?i:t}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class v{async queryAll(e,i,o){if(!(e=o&&o.ignoreInvisibleLayers?e.filter((e=>e.visible)):e.slice()).length)throw new s("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");const s$1=x.fromGeometry(i);let l=!1;o&&o.returnSampleInfo||(l=!0);const n={...R,...o,returnSampleInfo:!0},a=await this.query(e[e.length-1],s$1,n),r=await this._queryAllContinue(e,a,n);return r.geometry=r.geometry.export(),l&&delete r.sampleInfo,r}async query(e,i,o){if(!e)throw new s("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!i||!(i instanceof x)&&"point"!==i.type&&"multipoint"!==i.type&&"polyline"!==i.type)throw new s("elevation-query:invalid-geometry","Only point, polyline and multipoint geometries can be used to query elevation");const s$1={...R,...o},l=new w(e,i.spatialReference,s$1),n=s$1.signal;return await e.load({signal:n}),await this._createGeometryDescriptor(l,i,n),await this._selectTiles(l,n),await this._populateElevationTiles(l,n),this._sampleGeometryWithElevation(l),this._createQueryResult(l,n)}async createSampler(e,i,o){if(!e)throw new s("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!i||"extent"!==i.type)throw new s("elevation-query:invalid-extent","Invalid or undefined extent");const s$1={...R,...o};return this._createSampler(e,i,s$1)}async createSamplerAll(e,i,o){if(!(e=o&&o.ignoreInvisibleLayers?e.filter((e=>e.visible)):e.slice()).length)throw new s("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");if(!i||"extent"!==i.type)throw new s("elevation-query:invalid-extent","Invalid or undefined extent");const s$1={...R,...o,returnSampleInfo:!0},l=await this._createSampler(e[e.length-1],i,s$1);return this._createSamplerAllContinue(e,i,l,s$1)}async _createSampler(e,t,i,o){const s=i.signal;await e.load({signal:s});const l=t.spatialReference,n=e.tileInfo.spatialReference;l.equals(n)||(await fn([{source:l,dest:n}],{signal:s}),t=rn(t,n));const a=new _(e,t,i,o);return await this._selectTiles(a,s),await this._populateElevationTiles(a,s),new p(a.elevationTiles,a.layer.tileInfo,a.options.noDataValue)}async _createSamplerAllContinue(e,t,i,o){if(e.pop(),!e.length)return i;const s=i.samplers.map((e=>c(e.extent))),l=await this._createSampler(e[e.length-1],t,o,s);if(0===l.samplers.length)return i;const n=i.samplers.concat(l.samplers),a=new p(n,o.noDataValue);return this._createSamplerAllContinue(e,t,a,o)}async _queryAllContinue(e,t,i){const o=e.pop(),s=t.geometry.coordinates,l=[],n=[];for(let c=0;c<s.length;c++){const i=t.sampleInfo[c];i.demResolution>=0?i.source||(i.source=o):e.length&&(l.push(s[c]),n.push(c));}if(!e.length||0===l.length)return t;const a=t.geometry.clone(l),r=await this.query(e[e.length-1],a,i);return n.forEach(((e,i)=>{s[e].z=r.geometry.coordinates[i].z,t.sampleInfo[e].demResolution=r.sampleInfo[i].demResolution;})),this._queryAllContinue(e,t,i)}async _createQueryResult(e,t){const i={geometry:(await e.geometry.project(e.outSpatialReference,t)).export(),noDataValue:e.options.noDataValue};return e.options.returnSampleInfo&&(i.sampleInfo=this._extractSampleInfo(e)),e.geometry.coordinates.forEach((e=>{e.tile=null,e.elevationTile=null;})),i}async _createGeometryDescriptor(e,i,o){let s$1;const l=e.layer.tileInfo.spatialReference;if(i instanceof x?s$1=await i.project(l,o):(await fn([{source:i.spatialReference,dest:l}],{signal:o}),s$1=rn(i,l)),!s$1)throw new s("elevation-query:spatial-reference-mismatch",`Cannot query elevation in '${i.spatialReference.wkid}' on an elevation service in '${l.wkid}'`);e.geometry=x.fromGeometry(s$1);}async _selectTiles(e,i){const o=e.options.demResolution;if("geometry"===e.type&&this._preselectOutsideLayerExtent(e),"number"==typeof o)this._selectTilesClosestResolution(e);else if("finest-contiguous"===o)await this._selectTilesFinestContiguous(e,i);else {if("auto"!==o)throw new s("elevation-query:invalid-dem-resolution",`Invalid dem resolution value '${o}', expected a number, "finest-contiguous" or "auto"`);await this._selectTilesAuto(e,i);}}_preselectOutsideLayerExtent(e){if(t(e.layer.fullExtent))return;const t$1=new i(null);t$1.sample=()=>e.options.noDataValue,e.outsideExtentTile=t$1;const o=e.layer.fullExtent;e.geometry.coordinates.forEach((e=>{const i=e.x,s=e.y;(i<o.xmin||i>o.xmax||s<o.ymin||s>o.ymax)&&(e.elevationTile=t$1);}));}_selectTilesClosestResolution(e){const t=e.layer.tileInfo,i=this._findNearestDemResolutionLODIndex(t,e.options.demResolution);e.selectTilesAtLOD(i);}_findNearestDemResolutionLODIndex(e,t){const i=t/z(e.spatialReference);let o=e.lods[0],s=0;for(let l=1;l<e.lods.length;l++){const t=e.lods[l];Math.abs(t.resolution-i)<Math.abs(o.resolution-i)&&(o=t,s=l);}return s}async _selectTilesFinestContiguous(e,t){const i=E(e.layer.tileInfo,e.options.minDemResolution);await this._selectTilesFinestContiguousAt(e,i,t);}async _selectTilesFinestContiguousAt(e,i,o){const n=e.layer;if(e.selectTilesAtLOD(i),i<0)return;const a=n.tilemapCache,r=e.getTilesToFetch();try{if(a)await y(Promise.all(r.map((e=>a.fetchAvailability(e.level,e.row,e.col,{signal:o})))),o);else if(await this._populateElevationTiles(e,o),!e.allElevationTilesFetched())throw e.clearElevationTiles(),new s("elevation-query:has-unavailable-tiles")}catch(c){w$1(c),await this._selectTilesFinestContiguousAt(e,i-1,o);}}async _populateElevationTiles(e,t){const i$1=e.getTilesToFetch(),l={},a=e.options.cache,r$1=e.options.noDataValue,c=i$1.map((async i$1=>{const s=`${e.layer.uid}:${i$1.id}:${r$1}`,n=r(a)?a.get(s):null,c=r(n)?n:await e.layer.fetchTile(i$1.level,i$1.row,i$1.col,{noDataValue:r$1,signal:t});r(a)&&a.put(s,c),l[i$1.id]=new i(i$1,c);}));await y(E$1(c),t),e.populateElevationTiles(l);}async _selectTilesAuto(t,i){this._selectTilesAutoFinest(t),this._reduceTilesForMaximumRequests(t);const o=t.layer.tilemapCache;if(!o)return this._selectTilesAutoPrefetchUpsample(t,i);const n=t.getTilesToFetch(),a$1={},r=n.map((async t=>{const s={id:null,level:0,row:0,col:0,extent:u()},n=await a(o.fetchAvailabilityUpsample(t.level,t.row,t.col,s,{signal:i}));!1===n.ok?w$1(n.error):a$1[t.id]=s;}));await y(Promise.all(r),i),t.remapTiles(a$1);}_reduceTilesForMaximumRequests(e){const t=e.layer.tileInfo;let i=0;const o={},s=e=>{e.id in o?o[e.id]++:(o[e.id]=1,i++);},l=e=>{const t=o[e.id];1===t?(delete o[e.id],i--):o[e.id]=t-1;};e.forEachTileToFetch(s,l);let n=!0;for(;n&&(n=!1,e.forEachTileToFetch((o=>{i<=e.options.maximumAutoTileRequests||(l(o),t.upsampleTile(o)&&(n=!0),s(o));}),l),n););}_selectTilesAutoFinest(e){const t=E(e.layer.tileInfo,e.options.minDemResolution);e.selectTilesAtLOD(t,e.options.maximumAutoTileRequests);}async _selectTilesAutoPrefetchUpsample(e,t){const i=e.layer.tileInfo;await this._populateElevationTiles(e,t);let o=!1;e.forEachTileToFetch(((e,t)=>{i.upsampleTile(e)?o=!0:t();})),o&&await this._selectTilesAutoPrefetchUpsample(e,t);}_sampleGeometryWithElevation(e){e.geometry.coordinates.forEach((t=>{const i=t.elevationTile;let s=e.options.noDataValue;if(i){const e=i.sample(t.x,t.y);r(e)?s=e:t.elevationTile=null;}t.z=s;}));}_extractSampleInfo(e){const t=e.layer.tileInfo,i=z(t.spatialReference);return e.geometry.coordinates.map((o=>{let s=-1;if(o.elevationTile&&o.elevationTile!==e.outsideExtentTile){s=t.lodAt(o.elevationTile.tile.level).resolution*i;}return {demResolution:s}}))}}class x{export(){return this._exporter(this.coordinates,this.spatialReference)}clone(e){const t=new x;return t.geometry=this.geometry,t.spatialReference=this.spatialReference,t.coordinates=e||this.coordinates.map((e=>this._cloneCoordinate(e))),t._exporter=this._exporter,t}async project(e,t){if(this.spatialReference.equals(e))return this.clone();await fn([{source:this.spatialReference,dest:e}],{signal:t});const i=new m({spatialReference:this.spatialReference,points:this.coordinates.map((e=>[e.x,e.y]))}),o=rn(i,e);if(!o)return null;const s=this.coordinates.map(((e,t)=>{const i=this._cloneCoordinate(e),s=o.points[t];return i.x=s[0],i.y=s[1],i})),l=this.clone(s);return l.spatialReference=e,l}_cloneCoordinate(e){return {x:e.x,y:e.y,z:e.z,m:e.m,tile:null,elevationTile:null}}static fromGeometry(e){const t=new x;if(t.geometry=e,t.spatialReference=e.spatialReference,e instanceof x)t.coordinates=e.coordinates.map((e=>t._cloneCoordinate(e))),t._exporter=(t,i)=>{const o=e.clone(t);return o.spatialReference=i,o};else switch(e.type){case"point":{const i=e,{hasZ:o,hasM:s}=i;t.coordinates=o&&s?[{x:i.x,y:i.y,z:i.z,m:i.m}]:o?[{x:i.x,y:i.y,z:i.z}]:s?[{x:i.x,y:i.y,m:i.m}]:[{x:i.x,y:i.y}],t._exporter=(t,i)=>e.hasM?new j(t[0].x,t[0].y,t[0].z,t[0].m,i):new j(t[0].x,t[0].y,t[0].z,i);break}case"multipoint":{const i=e,{hasZ:o,hasM:s}=i;t.coordinates=o&&s?i.points.map((e=>({x:e[0],y:e[1],z:e[2],m:e[3]}))):o?i.points.map((e=>({x:e[0],y:e[1],z:e[2]}))):s?i.points.map((e=>({x:e[0],y:e[1],m:e[2]}))):i.points.map((e=>({x:e[0],y:e[1]}))),t._exporter=(t,i)=>e.hasM?new m({points:t.map((e=>[e.x,e.y,e.z,e.m])),hasZ:!0,hasM:!0,spatiaReference:i}):new m(t.map((e=>[e.x,e.y,e.z])),i);break}case"polyline":{const i=e,o=[],s=[],{hasZ:l,hasM:n}=e;let a=0;for(const e of i.paths)if(s.push([a,a+e.length]),a+=e.length,l&&n)for(const t of e)o.push({x:t[0],y:t[1],z:t[2],m:t[3]});else if(l)for(const t of e)o.push({x:t[0],y:t[1],z:t[2]});else if(n)for(const t of e)o.push({x:t[0],y:t[1],m:t[2]});else for(const t of e)o.push({x:t[0],y:t[1]});t.coordinates=o,t._exporter=(t,i)=>{const o=e.hasM?t.map((e=>[e.x,e.y,e.z,e.m])):t.map((e=>[e.x,e.y,e.z])),l=s.map((e=>o.slice(e[0],e[1])));return new m$1({paths:l,hasM:e.hasM,hasZ:!0,spatialReference:i})};break}}return t}}class g{constructor(e,t){this.layer=e,this.options=t;}}class w extends g{constructor(e,t,i){super(e,i),this.outSpatialReference=t,this.type="geometry";}selectTilesAtLOD(e){if(e<0)this.geometry.coordinates.forEach((e=>e.tile=null));else {const t=this.layer.tileInfo,i=t.lods[e].level;this.geometry.coordinates.forEach((e=>{e.tile=t.tileAt(i,e.x,e.y);}));}}allElevationTilesFetched(){return !this.geometry.coordinates.some((e=>!e.elevationTile))}clearElevationTiles(){for(const e of this.geometry.coordinates)e.elevationTile!==this.outsideExtentTile&&(e.elevationTile=null);}populateElevationTiles(e){for(const t of this.geometry.coordinates)!t.elevationTile&&t.tile&&(t.elevationTile=e[t.tile.id]);}remapTiles(e){for(const t of this.geometry.coordinates)t.tile=e[t.tile.id];}getTilesToFetch(){const e={},t=[];for(const i of this.geometry.coordinates){const o=i.tile;i.elevationTile||!i.tile||e[o.id]||(e[o.id]=o,t.push(o));}return t}forEachTileToFetch(e){for(const t of this.geometry.coordinates)t.tile&&!t.elevationTile&&e(t.tile,(()=>t.tile=null));}}class _ extends g{constructor(e,t,i,o){super(e,i),this.type="extent",this.elevationTiles=[],this.candidateTiles=[],this.fetchedCandidates=new Set,this.extent=t.intersection(e.fullExtent),this.maskExtents=o;}selectTilesAtLOD(e,t){const i=this._maximumLodForRequests(t),o=Math.min(i,e);o<0?this.candidateTiles.length=0:this._selectCandidateTilesCoveringExtentAt(o);}_maximumLodForRequests(e){const t$1=this.layer.tileInfo;if(!e)return t$1.lods.length-1;const o=this.extent;if(t(o))return -1;for(let i=t$1.lods.length-1;i>=0;i--){const s=t$1.lods[i],l=s.resolution*t$1.size[0],n=s.resolution*t$1.size[1];if(Math.ceil(o.width/l)*Math.ceil(o.height/n)<=e)return i}return -1}allElevationTilesFetched(){return this.candidateTiles.length===this.elevationTiles.length}clearElevationTiles(){this.elevationTiles.length=0,this.fetchedCandidates.clear();}populateElevationTiles(e){for(const t of this.candidateTiles){const i=e[t.id];i&&(this.fetchedCandidates.add(t),this.elevationTiles.push(i));}}remapTiles(e){this.candidateTiles=this._uniqueNonOverlappingTiles(this.candidateTiles.map((t=>e[t.id])));}getTilesToFetch(){return this.candidateTiles}forEachTileToFetch(e,t){const i=this.candidateTiles;this.candidateTiles=[],i.forEach((i=>{if(this.fetchedCandidates.has(i))return void(t&&t(i));let o=!1;e(i,(()=>o=!0)),o?t&&t(i):this.candidateTiles.push(i);})),this.candidateTiles=this._uniqueNonOverlappingTiles(this.candidateTiles,t);}_uniqueNonOverlappingTiles(e,t){const i={},o=[];for(const l of e)i[l.id]?t&&t(l):(i[l.id]=l,o.push(l));const s=o.sort(((e,t)=>e.level-t.level));return s.filter(((e,i)=>{for(let o=0;o<i;o++)if(R$1(s[o].extent,e.extent))return t&&t(e),!1;return !0}))}_selectCandidateTilesCoveringExtentAt(e){this.candidateTiles.length=0;const t$1=this.extent;if(t(t$1))return;const o=this.layer.tileInfo,s=o.lods[e],l=o.tileAt(s.level,t$1.xmin,t$1.ymin),n=s.resolution*o.size[0],a=s.resolution*o.size[1],r=Math.ceil((t$1.xmax-l.extent[0])/n),c=Math.ceil((t$1.ymax-l.extent[1])/a);for(let i=0;i<c;i++)for(let e=0;e<r;e++){const t={id:null,level:l.level,row:l.row-i,col:l.col+e};o.updateTileInfo(t),this._tileIsMasked(t)||this.candidateTiles.push(t);}}_tileIsMasked(e){return !!this.maskExtents&&this.maskExtents.some((t=>R$1(t,e.extent)))}}function E(e,t){let i=e.lods.length-1;if(t>0){const o=e.lods.findIndex((e=>e.resolution<t));0===o?i=0:o>0&&(i=o-1);}return i}const R={maximumAutoTileRequests:20,noDataValue:0,returnSampleInfo:!1,demResolution:"auto",minDemResolution:0};

export { v as ElevationQuery, x as GeometryDescriptor, E as getFinestLodIndex };
