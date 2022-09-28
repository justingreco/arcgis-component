import { e, n } from './cast-3d5be210.js';
import './geometry-2f332a26.js';
import { l, h } from './reactiveUtils-bd6fe823.js';
import { f } from './aaBoundingRect-5e1a4e52.js';
import { b } from './TileTreeDebugger-4776ecbb.js';
import { v } from './Polyline-dcdb3782.js';
import './Extent-f27111e1.js';
import './Point-edff2a11.js';
import './JSONSupport-dce2c67b.js';
import './request-ac4d8bfb.js';
import './mathUtils-559a53d9.js';
import './Color-25ce730a.js';
import './colorUtils-5009883d.js';
import './Graphic-93f45ded.js';
import './PopupTemplate-b459951f.js';
import './Collection-a38e0489.js';
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
let a=class extends b{constructor(e){super(e),this.enablePolygons=!1;}initialize(){l((()=>this.enabled),(e=>this.view.basemapTerrain.renderPatchBorders=e),h);}getTiles(){return this.view.basemapTerrain.test.getRenderedTiles().map((e=>({...e,geometry:v.fromExtent(f(e.extent,this.view.basemapTerrain.spatialReference))})))}};a=e([n("esri.views.3d.layers.support.TerrainTileTree3DDebugger")],a);

export { a as TerrainTileTree3DDebugger };
