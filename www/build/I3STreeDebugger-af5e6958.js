import { t, e, d, n } from './cast-3d5be210.js';
import './geometry-2f332a26.js';
import { I } from './mat4-d5df0e58.js';
import { e as e$1 } from './mat4f64-ef2c1a38.js';
import { b as r, L, n as n$1 } from './mathUtils-559a53d9.js';
import { U as Un } from './projection-fbd5d346.js';
import { b } from './TileTreeDebugger-4776ecbb.js';
import { v } from './Polyline-dcdb3782.js';
import './Extent-f27111e1.js';
import './Point-edff2a11.js';
import './JSONSupport-dce2c67b.js';
import './request-ac4d8bfb.js';
import './unitUtils-a0a11e54.js';
import './Collection-a38e0489.js';
import './assets-99f5c3ee.js';
import './aaBoundingRect-5e1a4e52.js';
import './zscale-0befeff4.js';
import './Color-25ce730a.js';
import './colorUtils-5009883d.js';
import './Graphic-93f45ded.js';
import './PopupTemplate-b459951f.js';
import './fieldUtils-240a3b99.js';
import './enumeration-6695a859.js';
import './number-c5a37d3e.js';
import './Promise-d2759b2e.js';
import './ActionToggle-a5849e6f.js';
import './Identifiable-d9658370.js';
import './symbols-ab3e849a.js';
import './CIMSymbol-15bdb580.js';
import './Symbol-573a64f6.js';
import './screenUtils-31d073db.js';
import './opacityUtils-dcd94f00.js';
import './aaBoundingBox-b312516d.js';
import './persistableUrlUtils-5dcd6081.js';
import './collectionUtils-302901c0.js';
import './Portal-5df9f5a7.js';
import './Clonable-533c7a05.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let m=class extends b{constructor(e){super(e);}getTiles(){const e=this.lv.getVisibleNodes(),r=this.view.renderSpatialReference,s=this.nodeSR;return e.map((e=>h(e,r,s))).sort(((e,r)=>e.lij[0]===r.lij[0]?e.label>r.label?-1:1:e.lij[0]-r.lij[0]))}};function h(e,s,o){const i=e.serviceObb;if(t(i)||t(s))return null;I(f,i.quaternion),r(j,i.center),Un(j,o,0,j,s,0,1),f[12]=j[0],f[13]=j[1],f[14]=j[2];const l=[[],[],[]];r(j,i.halfSize),L(j,j,f),Un(j,s,0,j,o,0,1),l[0].push([j[0],j[1]]),r(j,i.halfSize),j[0]=-j[0],L(j,j,f),Un(j,s,0,j,o,0,1),l[0].push([j[0],j[1]]),r(j,i.halfSize),j[0]=-j[0],j[1]=-j[1],L(j,j,f),Un(j,s,0,j,o,0,1),l[0].push([j[0],j[1]]),r(j,i.halfSize),j[1]=-j[1],L(j,j,f),Un(j,s,0,j,o,0,1),l[0].push([j[0],j[1]]),l[1].push(l[0][0]),l[1].push(l[0][1]),r(j,i.halfSize),j[0]=-j[0],j[2]=-j[2],L(j,j,f),Un(j,s,0,j,o,0,1),l[1].push([j[0],j[1]]),r(j,i.halfSize),j[2]=-j[2],L(j,j,f),Un(j,s,0,j,o,0,1),l[1].push([j[0],j[1]]),l[2].push(l[0][0]),l[2].push(l[0][3]),r(j,i.halfSize),j[1]=-j[1],j[2]=-j[2],L(j,j,f),Un(j,s,0,j,o,0,1),l[2].push([j[0],j[1]]),l[2].push(l[1][3]);const a=new v({rings:l,spatialReference:o});return {lij:[e.level,e.childCount,0],label:e.id,geometry:a}}e([d({constructOnly:!0})],m.prototype,"lv",void 0),e([d({constructOnly:!0})],m.prototype,"nodeSR",void 0),m=e([n("esri.views.3d.layers.support.I3STreeDebugger")],m);const f=e$1(),j=n$1();

export { m as I3STreeDebugger };
