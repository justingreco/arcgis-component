import { y, r, t, e, d, n } from './cast-3d5be210.js';
import { l } from './Color-25ce730a.js';
import { g } from './Graphic-93f45ded.js';
import { Z as s } from './mathUtils-559a53d9.js';
import { S, e as h, w as j, a as m$1 } from './symbols-ab3e849a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const m=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]];let b=class extends y{constructor(e){super(e),this.updating=!1,this.enablePolygons=!0,this.enableLabels=!0,this._polygons=new Map,this._labels=new Map,this._enabled=!0;}initialize(){this._symbols=m.map((e=>new S({color:[e[0],e[1],e[2],.6],outline:{color:"black",width:1}}))),this.update();}destroy(){this._enabled=!1,this.clear();}get enabled(){return this._enabled}set enabled(e){this._enabled!==e&&(this._enabled=e,this.update());}update(){if(!this._enabled)return void this.clear();const e=e=>{if(r(e.label))return e.label;let s=e.lij.toString();return r(e.loadPriority)&&(s+=` (${e.loadPriority})`),s},t$1=this.getTiles(),a=new Array,n=new Set((this._labels.size,this._labels.keys()));t$1.forEach(((p,m)=>{const b=p.lij.toString();n.delete(b);const d=p.lij[0],g$1=p.geometry;if(this.enablePolygons&&!this._polygons.has(b)){const e=new g({geometry:g$1,symbol:this._symbols[d%this._symbols.length]});this._polygons.set(b,e),a.push(e);}if(this.enableLabels){const n=e(p),d=m/(t$1.length-1),u=s(0,200,d),_=s(20,6,d)/.75,f=r(p.loadPriority)&&p.loadPriority>=t$1.length,w=new l([u,f?0:u,f?0:u]),j$1="3d"===this.view.type?()=>new h({verticalOffset:{screenLength:40/.75},callout:{type:"line",color:"white",border:{color:"black"}},symbolLayers:[new j({text:n,halo:{color:"white",size:1/.75},material:{color:w},size:_})]}):()=>new m$1({text:n,haloColor:"white",haloSize:1/.75,color:w,size:_});if(this._labels.has(b)){const e=this._labels.get(b),s=j$1();(t(e.symbol)||JSON.stringify(s)!==JSON.stringify(e.symbol))&&(e.symbol=s);}else {const e=new g({geometry:g$1.extent.center,symbol:j$1()});this._labels.set(b,e),a.push(e);}}}));const p=new Array;n.forEach((e=>{this._polygons.has(e)&&(p.push(this._polygons.get(e)),this._polygons.delete(e)),this._labels.has(e)&&(p.push(this._labels.get(e)),this._labels.delete(e));})),this.view.graphics.removeMany(p),this.view.graphics.addMany(a);}clear(){this.view.graphics.removeMany(Array.from(this._polygons.values())),this.view.graphics.removeMany(Array.from(this._labels.values())),this._polygons.clear(),this._labels.clear();}};e([d({constructOnly:!0})],b.prototype,"view",void 0),e([d({readOnly:!0})],b.prototype,"updating",void 0),e([d()],b.prototype,"enabled",null),b=e([n("esri.views.support.TileTreeDebugger")],b);

export { b };
