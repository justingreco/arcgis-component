import { r, as as o$1, e, n } from './cast-3d5be210.js';
import { m } from './diffUtils-6436a697.js';
import { l as l$2 } from './heatmapUtils-d302cc7f.js';
import { o } from './enums-395c521f.js';
import { p as p$1 } from './BaseProcessor-5463201c.js';
import { l as l$1 } from './tileUtils-b3394458.js';
import './Collection-a38e0489.js';
import './mathUtils-559a53d9.js';
import './screenUtils-31d073db.js';
import './vec4f64-011248e0.js';
import './HandleOwner-fe336959.js';
import './Handles-54afc0a7.js';
import './reactiveUtils-bd6fe823.js';
import './TileStore-909b46c6.js';
import './workers-c7a27acb.js';
import './request-ac4d8bfb.js';
import './assets-99f5c3ee.js';
import './intl-54ccdc89.js';
import './number-c5a37d3e.js';
import './Promise-d2759b2e.js';
import './messages-5e9a4a9e.js';
import './Point-edff2a11.js';
import './JSONSupport-dce2c67b.js';
import './TileKey-97254206.js';
import './quickselect-d6c9284c.js';
import './Extent-f27111e1.js';
import './aaBoundingRect-5e1a4e52.js';
import './Query-1f6c7e43.js';
import './geometry-2f332a26.js';
import './Polyline-dcdb3782.js';
import './TimeExtent-66b53603.js';
import './enumeration-6695a859.js';
import './Field-2973a5cf.js';
import './fieldType-eb0b42e4.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class p{constructor(e,t){this.offset=e,this.extent=t;}}function c(e){const t=e.key,s=new Map,r=256,i=o,o$1=e.tileInfoView.tileInfo.isWrappable;return s.set(l$1(t,-1,-1,o$1).id,new p([-i,-i],[i-r,i-r,i,i])),s.set(l$1(t,0,-1,o$1).id,new p([0,-i],[0,i-r,i,i])),s.set(l$1(t,1,-1,o$1).id,new p([i,-i],[0,i-r,r,i])),s.set(l$1(t,-1,0,o$1).id,new p([-i,0],[i-r,0,i,i])),s.set(l$1(t,1,0,o$1).id,new p([i,0],[0,0,r,i])),s.set(l$1(t,-1,1,o$1).id,new p([-i,i],[i-r,0,i,r])),s.set(l$1(t,0,1,o$1).id,new p([0,i],[0,0,i,r])),s.set(l$1(t,1,1,o$1).id,new p([i,i],[0,0,r,r])),s}let l=class extends p$1{constructor(){super(...arguments),this.type="heatmap",this._tileKeyToFeatureSets=new Map;}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))]);}async update(e,t){const s=t.schema.processors[0];if("heatmap"!==s.type)return;m(this._schema,s)&&(e.mesh=!0,this._schema=s);}onTileUpdate(e){for(const t of e.removed)this._tileKeyToFeatureSets.delete(t.key.id);}onTileClear(e){const t={clear:!0};return this._tileKeyToFeatureSets.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t})}async onTileMessage(e,r$1,i){this._tileKeyToFeatureSets.has(e.key.id)||this._tileKeyToFeatureSets.set(e.key.id,new Map);const a=this._tileKeyToFeatureSets.get(e.key.id);if(r(r$1.addOrUpdate)&&r$1.addOrUpdate.hasFeatures&&a.set(r$1.addOrUpdate.instance,r$1),r$1.end){const t=[],r=c(e);this._tileKeyToFeatureSets.forEach(((i,o)=>{if(o===e.key.id)i.forEach((e=>o$1(e.addOrUpdate,(e=>t.push(e)))));else if(r.has(o)){const e=r.get(o),[a,n]=e.offset;i.forEach((e=>o$1(e.addOrUpdate,(e=>{const s=e.transform(a,n,1,1);t.push(s);}))));}}));const a=l$2(t,this._schema.mesh,512,512),n={tileKey:e.key.id,intensityInfo:a},d=[a.matrix];return this.remoteClient.invoke("tileRenderer.onTileData",n,{...i,transferList:d})}}onTileError(e,t,s){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t},s)}};l=e([n("esri.views.2d.layers.features.processors.HeatmapProcessor")],l);const h=l;

export default h;
