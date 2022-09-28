import { p as p$1 } from './CollectionFlattener-9ce72729.js';
import { s, U as k, e, d as d$1, n as n$3 } from './cast-3d5be210.js';
import { j } from './Collection-a38e0489.js';
import { n as n$2 } from './collectionUtils-302901c0.js';
import { b } from './Layer-569a1fc8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function t(t){return new p$1({getCollections:()=>[t.tables,t.layers],getChildrenFunction:e=>{const t=[];return "tables"in e&&t.push(e.tables),"layers"in e&&t.push(e.layers),t},itemFilterFunction:e=>{const t=e.parent;return t&&"tables"in t&&t.tables.includes(e)}})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function n$1(e,r,t){let s,o;if(e)for(let a=0,i=e.length;a<i;a++){if(s=e.getItemAt(a),s[r]===t)return s;if("group"===s?.type&&(o=n$1(s.layers,r,t),o))return o}}const d=s.getLogger("esri.support.LayersMixin"),y=s=>{let y=class extends s{constructor(...e){super(...e),this.layers=new j;const t=e=>{e.parent&&"remove"in e.parent&&e.parent.remove(e);},s=e=>{e.parent=this,this.layerAdded(e),"elevation"!==e.type&&"base-elevation"!==e.type||d.error(`Layer 'title:${e.title}, id:${e.id}' of type '${e.type}' is not supported as an operational layer and will therefore be ignored.`);},o=e=>{e.parent=null,this.layerRemoved(e);};this.layers.on("before-add",(e=>t(e.item))),this.layers.on("after-add",(e=>s(e.item))),this.layers.on("after-remove",(e=>o(e.item)));}destroy(){const e=this.layers.removeAll();for(const r of e)this.layerRemoved(r),r.destroy();this.layers.destroy();}set layers(e){this._set("layers",n$2(e,this._get("layers")));}add(e,r){const t=this.layers;if(r=t.getNextIndex(r),e instanceof b){const s=e;s.parent===this?this.reorder(s,r):t.add(s,r);}else k(e)?e.then((e=>{this.destroyed||this.add(e,r);})):d.error("#add()","The item being added is not a Layer or a Promise that resolves to a Layer.");}addMany(e,r){const t=this.layers;r=t.getNextIndex(r),e.slice().forEach((e=>{e.parent!==this?(t.add(e,r),r+=1):this.reorder(e,r);}));}findLayerById(e){return n$1(this.layers,"id",e)}findLayerByUid(e){return n$1(this.layers,"uid",e)}remove(e){return this.layers.remove(e)}removeMany(e){return this.layers.removeMany(e)}removeAll(){return this.layers.removeAll()}reorder(e,r){return this.layers.reorder(e,r)}layerAdded(e){}layerRemoved(e){}};return e([d$1()],y.prototype,"layers",null),y=e([n$3("esri.support.LayersMixin")],y),y};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const a="esri.support.TablesMixin",l=s.getLogger(a);function n(t,e,r){if(t)for(let s=0,o=t.length;s<o;s++){const o=t.getItemAt(s);if(o[e]===r)return o;if("group"===o?.type){const t=n(o.tables,e,r);if(t)return t}}}const p=s=>{let p=class extends s{constructor(...t){super(...t),this.tables=new j,this.tables.on("after-add",(t=>{const e=t.item;e.parent&&e.parent!==this&&"tables"in e.parent&&e.parent.tables.remove(e),e.parent=this,"feature"!==e.type&&l.error(`Layer 'title:${e.title}, id:${e.id}' of type '${e.type}' is not supported as a table and will therefore be ignored.`);})),this.tables.on("after-remove",(t=>{t.item.parent=null;}));}destroy(){const t=this.tables.removeAll();for(const e of t)e.destroy();this.tables.destroy();}set tables(t){this._set("tables",n$2(t,this._get("tables")));}findTableById(t){return n(this.tables,"id",t)}findTableByUid(t){return n(this.tables,"uid",t)}};return e([d$1()],p.prototype,"tables",null),p=e([n$3(a)],p),p};

export { p, t, y };
