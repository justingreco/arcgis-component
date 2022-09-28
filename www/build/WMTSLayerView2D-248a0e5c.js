import { s, J as g$1, e as e$1, d, n as n$1 } from './cast-3d5be210.js';
import { l } from './reactiveUtils-bd6fe823.js';
import { E } from './Point-edff2a11.js';
import { r, n } from './imageUtils-7771670d.js';
import { f } from './LayerView2D-2fae06b5.js';
import { h } from './TileStore-909b46c6.js';
import { e } from './TileKey-97254206.js';
import { p, r as r$1 } from './TileStrategy-fea1cb17.js';
import { u } from './LayerView-1ee5d9ed.js';
import { i } from './RefreshableLayerView-88a48188.js';
import './JSONSupport-dce2c67b.js';
import './BitmapTileContainer-17e6fbbe.js';
import './aaBoundingRect-5e1a4e52.js';
import './mathUtils-559a53d9.js';
import './Extent-f27111e1.js';
import './DefaultUI-a0db5719.js';
import './Handles-54afc0a7.js';
import './Collection-a38e0489.js';
import './jsxFactory-4cd653a4.js';
import './intl-54ccdc89.js';
import './number-c5a37d3e.js';
import './request-ac4d8bfb.js';
import './Promise-d2759b2e.js';
import './messages-5e9a4a9e.js';
import './assets-99f5c3ee.js';
import './uuid-ac104993.js';
import './index-f980186a.js';
import './HandleOwner-fe336959.js';
import './Feature-d7b2670c.js';
import './aliasOf-bdfe6662.js';
import './byteSizeEstimations-5d50d6ff.js';
import './Cyclical-922b1741.js';
import './unitUtils-a0a11e54.js';
import './Graphic-93f45ded.js';
import './geometry-2f332a26.js';
import './Polyline-dcdb3782.js';
import './PopupTemplate-b459951f.js';
import './fieldUtils-240a3b99.js';
import './enumeration-6695a859.js';
import './ActionToggle-a5849e6f.js';
import './Identifiable-d9658370.js';
import './symbols-ab3e849a.js';
import './CIMSymbol-15bdb580.js';
import './Symbol-573a64f6.js';
import './Color-25ce730a.js';
import './colorUtils-5009883d.js';
import './screenUtils-31d073db.js';
import './opacityUtils-dcd94f00.js';
import './aaBoundingBox-b312516d.js';
import './persistableUrlUtils-5dcd6081.js';
import './collectionUtils-302901c0.js';
import './Portal-5df9f5a7.js';
import './Clonable-533c7a05.js';
import './executeQueryJSON-cbafa4d9.js';
import './utils-d801fb7f.js';
import './query-993c240b.js';
import './normalizeUtils-d37dc597.js';
import './pbfQueryUtils-266d53dd.js';
import './pbf-bac0c6a4.js';
import './OptimizedFeature-a0dba562.js';
import './OptimizedFeatureSet-261a115b.js';
import './queryZScale-127601ac.js';
import './zscale-0befeff4.js';
import './FeatureSet-1b85367a.js';
import './Field-2973a5cf.js';
import './fieldType-eb0b42e4.js';
import './Query-1f6c7e43.js';
import './TimeExtent-66b53603.js';
import './TopFeaturesQuery-babc7c57.js';
import './utils-112c7fa0.js';
import './ColorStop-64c57e35.js';
import './utils-2bda91e5.js';
import './asyncUtils-96c00c9e.js';
import './jsonUtils-f3f35e7f.js';
import './mat4-d5df0e58.js';
import './_commonjsHelpers-8dd5c177.js';
import './ItemCache-1f62ab56.js';
import './MemCache-04cdd0cd.js';
import './utils-8133dc40.js';
import './jsonUtils-e7c7add9.js';
import './UniqueValueRenderer-bb66af10.js';
import './diffUtils-6436a697.js';
import './colorRamps-e3d9340f.js';
import './sizeVariableUtils-5330814d.js';
import './compilerUtils-d149ad5f.js';
import './commonProperties-fca3036e.js';
import './jsonUtils-a25e8eb8.js';
import './styleUtils-d2332fad.js';
import './DictionaryLoader-d0d1b4ff.js';
import './LRUCache-5f25d277.js';
import './heatmapUtils-d302cc7f.js';
import './vec4f64-011248e0.js';
import './widget-a58988b6.js';
import './vmEvent-c5708c9c.js';
import './themeUtils-b1f4a2e4.js';
import './featureConversionUtils-3f60eb15.js';
import './languageUtils-d37e9fbb.js';
import './number-3228daf9.js';
import './FeatureLayer-6922c890.js';
import './MultiOriginJSONSupport-281c1c62.js';
import './sql-817bbae7.js';
import './HeightModelInfo-12951268.js';
import './Layer-569a1fc8.js';
import './workers-c7a27acb.js';
import './APIKeyMixin-04df9c0f.js';
import './ArcGISService-848d76dd.js';
import './arcgisLayerUrl-a268a370.js';
import './BlendLayer-7884099a.js';
import './CustomParametersMixin-f702935f.js';
import './labelingInfo-6e0c44d1.js';
import './LabelClass-936eaa93.js';
import './labelUtils-824fc88a.js';
import './defaultsJSON-5fb6161d.js';
import './OperationalLayer-e04486e0.js';
import './OrderedLayer-d02e1d58.js';
import './PortalLayer-e61e1a42.js';
import './PortalItem-fa114dd2.js';
import './RefreshableLayer-496830b9.js';
import './ScaleRangeLayer-f9a9951f.js';
import './TemporalLayer-6cfc496a.js';
import './TimeInfo-0c128ef4.js';
import './FeatureType-691faa46.js';
import './fieldProperties-fa42dff4.js';
import './FieldsIndex-ea481e79.js';
import './LayerFloorInfo-b83a3647.js';
import './versionUtils-55e187fe.js';
import './styleUtils-106413c0.js';
import './popupUtils-883a107f.js';
import './symbolUtils-7f5a2832.js';
import './colorUtils-e0bbe79f.js';
import './mat2d-677a80fe.js';
import './GoTo-929e809f.js';
import './Map-3fa127ca.js';
import './Basemap-bccaf827.js';
import './loadAll-0acccebb.js';
import './writeUtils-ab23132f.js';
import './layerUtils-160a1a44.js';
import './CollectionFlattener-9ce72729.js';
import './TablesMixin-6752cfb1.js';
import './GraphicsCollection-851bdafb.js';
import './Scheduler-ed7a36dc.js';
import './heightModelInfoUtils-4737da37.js';
import './ViewingMode-4a1cffad.js';
import './projection-fbd5d346.js';
import './Viewpoint-e3d4029a.js';
import './mat3-eb8de168.js';
import './vec2-4f9a494f.js';
import './vec2f32-23e4a539.js';
import './vec2f64-2956001b.js';
import './capabilities-cb32c85a.js';
import './context-util-5ae1bf7b.js';
import './Bitmap-85c4b09d.js';
import './DisplayObject-f25c6d04.js';
import './enums-4770f29d.js';
import './Texture-f189b7ba.js';
import './TiledDisplayObject-2082c8d9.js';
import './brushes-f4d4256e.js';
import './pixelUtils-e251d269.js';
import './DefaultVertexAttributeLayouts-664d07a8.js';
import './FramebufferObject-bfb23fd2.js';
import './VertexElementDescriptor-3b53aa99.js';
import './enums-395c521f.js';
import './Utils-b4b0f45e.js';
import './number-ad66b701.js';
import './ProgramTemplate-6f185b1d.js';
import './Program-634dbdbe.js';
import './MaterialKey-ac9b534a.js';
import './alignmentUtils-4bbd02ca.js';
import './utils-84240eaf.js';
import './StyleDefinition-8856d24f.js';
import './config-5446e136.js';
import './GeometryUtils-744eb819.js';
import './TileContainer-a8b4c326.js';
import './WGLContainer-fea967fb.js';
import './Container-9c6fdd22.js';
import './EffectView-a2b02e73.js';
import './earcut-4e6b97b1.js';
import './quickselect-d6c9284c.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const y=[102113,102100,3857,3785,900913],_=[0,0],w=s.getLogger("esri.views.2d.layers.WMTSLayerView2D");let g=class extends(i(r(f(u)))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this._tileRequests=new Map,this.layer=null;}get tileMatrixSet(){const e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(e.id!==this.layer.activeLayer.tileMatrixSetId&&(this.layer.activeLayer.tileMatrixSetId=e.id),e):null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume();}attach(){if(!this.tileMatrixSet)return;const{tileInfo:e}=this.tileMatrixSet;this._tileInfoView=new h(e),this._fetchQueue=new p({tileInfoView:this._tileInfoView,concurrency:16,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new r$1({cachePolicy:"keep",resampling:!0,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this.handles.add(l((()=>[this.layer?.activeLayer?.styleId,this.tileMatrixSet]),(()=>this._refresh())),this.declaredClass),super.attach();}detach(){super.detach(),this.handles.remove(this.declaredClass),this._tileStrategy?.destroy(),this._fetchQueue?.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null;}moveStart(){this.requestUpdate();}viewChange(){this.requestUpdate();}moveEnd(){this.requestUpdate();}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate();}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return [i.x,i.y]=this._tileInfoView.getTileCoords(_,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}async doRefresh(){this.updateRequested||this.suspended||this._refresh();}isUpdating(){return this._fetchQueue?.updating??!1}async fetchTile(e$1,t={}){const s="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:r,resamplingLevel:a=0}=t;if(!s)return this._fetchImage(e$1,r);const l=new e(0,0,0,0);let o;try{await s.fetchAvailabilityUpsample(e$1.level,e$1.row,e$1.col,l,{signal:r}),o=await this._fetchImage(l,r);}catch(h){if(g$1(h))throw h;if(a<3){const i=this._tileInfoView.getTileParentId(e$1.id);if(i){const s=new e(i),r=await this.fetchTile(s,{...t,resamplingLevel:a+1});return n(this._tileInfoView,r,s,e$1)}}throw h}return n(this._tileInfoView,o,l,e$1)}canResume(){const e=super.canResume();return e?null!==this.tileMatrixSet:e}supportsSpatialReference(e){return this.layer.activeLayer.tileMatrixSets.some((t=>E(t.tileInfo.spatialReference,e)))}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",(()=>this.requestUpdate()));}catch(t){g$1(t)||w.error(t);}this.requestUpdate();}}async _fetchImage(e,t){return this.layer.fetchTile(e.level,e.row,e.col,{signal:t})}_refresh(){this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((e=>{if(!e.bitmap.source)return;const t={id:e.key.id,fulfilled:!1,promise:this._fetchQueue.push(e.key).then((t=>{e.bitmap.source=t;})).catch((t=>{g$1(t)||(e.bitmap.source=null);})).finally((()=>{e.requestRender(),t.fulfilled=!0;}))};this._tileRequests.set(e,t);}));}_getTileMatrixSetBySpatialReference(e){const t=this.view.spatialReference;if(!e.tileMatrixSets)return null;let i=e.tileMatrixSets.find((e=>E(e.tileInfo.spatialReference,t)));return !i&&t.isWebMercator&&(i=e.tileMatrixSets.find((e=>y.includes(e.tileInfo.spatialReference.wkid)))),i}};e$1([d()],g.prototype,"_fetchQueue",void 0),e$1([d({readOnly:!0})],g.prototype,"tileMatrixSet",null),g=e$1([n$1("esri.views.2d.layers.WMTSLayerView2D")],g);const S=g;

export default S;
