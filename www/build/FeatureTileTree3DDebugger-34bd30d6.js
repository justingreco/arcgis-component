import { e, d, n as n$1 } from './cast-3d5be210.js';
import './geometry-2f332a26.js';
import { u } from './Handles-54afc0a7.js';
import { h } from './reactiveUtils-bd6fe823.js';
import { c } from './HandleOwner-fe336959.js';
import { b } from './TileTreeDebugger-4776ecbb.js';
import { v } from './Polyline-dcdb3782.js';
import './Extent-f27111e1.js';
import './Point-edff2a11.js';
import './JSONSupport-dce2c67b.js';
import './request-ac4d8bfb.js';
import './Collection-a38e0489.js';
import './Color-25ce730a.js';
import './colorUtils-5009883d.js';
import './mathUtils-559a53d9.js';
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
import './aaBoundingRect-5e1a4e52.js';
import './persistableUrlUtils-5dcd6081.js';
import './collectionUtils-302901c0.js';
import './Portal-5df9f5a7.js';
import './Clonable-533c7a05.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let n=class extends b{constructor(t){super(t),this.watchUpdatingTracking=new c,this.handles=new u;}initialize(){const{featureTiles:t}=this.view;this.handles.add(t.addClient()),this.watchUpdatingTracking.addOnCollectionChange((()=>t?.tiles),(()=>this.update()),h);}destroy(){this.handles&&(this.handles.destroy(),this.handles=null),this.watchUpdatingTracking.destroy();}getTiles(){const t=t=>{const[e,r,o]=t.lij;return v.fromExtent(this.view.featureTiles.tilingScheme.getExtentGeometry(e,r,o))};return this.view.featureTiles.tiles.toArray().sort(((t,e)=>t.loadPriority-e.loadPriority)).map((e=>({...e,geometry:t(e)})))}};e([d({readOnly:!0})],n.prototype,"watchUpdatingTracking",void 0),e([d({readOnly:!0,aliasOf:"watchUpdatingTracking.updating"})],n.prototype,"updating",void 0),e([d()],n.prototype,"view",void 0),n=e([n$1("esri.views.3d.layers.support.FeatureTileTree3DDebugger")],n);

export { n as FeatureTileTree3DDebugger };
