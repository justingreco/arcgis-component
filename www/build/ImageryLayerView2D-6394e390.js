import { s, y as y$1, J as g$2, r, e, d as d$2, n, C as x, t as t$2, h as e$1 } from './cast-3d5be210.js';
import { g as g$3 } from './Graphic-93f45ded.js';
import { j } from './Collection-a38e0489.js';
import { l, w, U as U$1 } from './reactiveUtils-bd6fe823.js';
import { c } from './GraphicsCollection-851bdafb.js';
import { y as y$2, d as d$4 } from './RasterVFDisplayObject-0960b9fd.js';
import { f as f$2 } from './LayerView2D-2fae06b5.js';
import { a as ae } from './BaseGraphicContainer-5ce21891.js';
import { n as n$1 } from './HighlightGraphicContainer-798d304d.js';
import { f as f$1 } from './pixelUtils-e251d269.js';
import { t as t$1 } from './BitmapContainer-691188c5.js';
import { s as s$1 } from './Container-9c6fdd22.js';
import { i } from './Bitmap-85c4b09d.js';
import { S } from './ExportStrategy-558eaf7f.js';
import { U } from './request-ac4d8bfb.js';
import { d as d$3 } from './HandleOwner-fe336959.js';
import { M } from './Extent-f27111e1.js';
import { F } from './rasterProjectionHelper-0a6312a6.js';
import { M as M$1, m as m$2 } from './dataUtils-b96dda79.js';
import { m as m$1 } from './brushes-f4d4256e.js';
import { I } from './Utils-b4b0f45e.js';
import { a } from './WGLContainer-fea967fb.js';
import { m as m$3 } from './ImageryLayerView-4af58015.js';
import { u as u$1 } from './LayerView-1ee5d9ed.js';
import { i as i$1 } from './RefreshableLayerView-88a48188.js';
import './geometry-2f332a26.js';
import './Point-edff2a11.js';
import './JSONSupport-dce2c67b.js';
import './Polyline-dcdb3782.js';
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
import './Color-25ce730a.js';
import './colorUtils-5009883d.js';
import './mathUtils-559a53d9.js';
import './screenUtils-31d073db.js';
import './opacityUtils-dcd94f00.js';
import './aaBoundingBox-b312516d.js';
import './aaBoundingRect-5e1a4e52.js';
import './persistableUrlUtils-5dcd6081.js';
import './collectionUtils-302901c0.js';
import './Portal-5df9f5a7.js';
import './Clonable-533c7a05.js';
import './FramebufferObject-bfb23fd2.js';
import './enums-4770f29d.js';
import './Texture-f189b7ba.js';
import './context-util-5ae1bf7b.js';
import './VertexElementDescriptor-3b53aa99.js';
import './mat3-eb8de168.js';
import './DefaultUI-a0db5719.js';
import './Handles-54afc0a7.js';
import './jsxFactory-4cd653a4.js';
import './intl-54ccdc89.js';
import './messages-5e9a4a9e.js';
import './assets-99f5c3ee.js';
import './uuid-ac104993.js';
import './index-f980186a.js';
import './Feature-d7b2670c.js';
import './aliasOf-bdfe6662.js';
import './byteSizeEstimations-5d50d6ff.js';
import './Cyclical-922b1741.js';
import './unitUtils-a0a11e54.js';
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
import './Scheduler-ed7a36dc.js';
import './heightModelInfoUtils-4737da37.js';
import './ViewingMode-4a1cffad.js';
import './projection-fbd5d346.js';
import './Viewpoint-e3d4029a.js';
import './vec2-4f9a494f.js';
import './vec2f32-23e4a539.js';
import './vec2f64-2956001b.js';
import './capabilities-cb32c85a.js';
import './DisplayObject-f25c6d04.js';
import './CIMSymbolHelper-78ca7d84.js';
import './BidiEngine-c95c4945.js';
import './floatRGBA-64e5bf11.js';
import './enums-395c521f.js';
import './alignmentUtils-4bbd02ca.js';
import './number-ad66b701.js';
import './GeometryUtils-bcda40bd.js';
import './normalizeUtilsSync-1f2b7f6d.js';
import './projectionSupport-d3b04744.js';
import './json-063a6f95.js';
import './FeatureContainer-7c1691c5.js';
import './TiledDisplayObject-2082c8d9.js';
import './TileKey-97254206.js';
import './visualVariablesUtils-61e64f04.js';
import './visualVariablesUtils-dc5fe9fe.js';
import './TileContainer-a8b4c326.js';
import './utils-84240eaf.js';
import './MaterialKey-ac9b534a.js';
import './Matcher-b931b6ec.js';
import './TileStrategy-fea1cb17.js';
import './TileStore-909b46c6.js';
import './quickselect-d6c9284c.js';
import './tileUtils-b3394458.js';
import './TileClipper-e58bd4ae.js';
import './Geometry-7a3815d2.js';
import './GeometryUtils-744eb819.js';
import './cimAnalyzer-a2a69390.js';
import './callExpressionWithFeature-cfe9aa0a.js';
import './quantizationUtils-65995723.js';
import './earcut-4e6b97b1.js';
import './cimSymbolUtils-3c2ee352.js';
import './devEnvironmentUtils-cb76d69b.js';
import './schemaUtils-7d44ec06.js';
import './createSymbolSchema-b1774621.js';
import './MD5-72be4fba.js';
import './util-5c5a1b58.js';
import './ComputedAttributeStorage-d95b750e.js';
import './centroid-a69e0a54.js';
import './GraphicsView-6c28b8e2.js';
import './vec3f32-03e33744.js';
import './EffectView-a2b02e73.js';
import './TileInfo-3c9e9a6a.js';
import './DefaultVertexAttributeLayouts-664d07a8.js';
import './ProgramTemplate-6f185b1d.js';
import './Program-634dbdbe.js';
import './StyleDefinition-8856d24f.js';
import './config-5446e136.js';
import './popupUtils-37e309e6.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const d$1=s.getLogger("esri.views.2d.layers.imagery.ImageryView2D");let u=class extends y$1{constructor(){super(...arguments),this.attached=!1,this.container=new s$1,this.updateRequested=!1,this.type="imagery",this._bitmapView=new t$1;}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1;}get updating(){return !this.attached||this.isUpdating()}update(e){this.strategy.update(e).catch((e=>{g$2(e)||d$1.error(e);}));}hitTest(e){return new g$3({attributes:{},geometry:e.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const e=this.layer.version>=10,t=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,r=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new S({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t,imageMaxWidth:r,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()});}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1;}redraw(){this.strategy.updateExports((e=>{e.source instanceof HTMLImageElement?e.requestRender():this.layer.applyRenderer({pixelBlock:e.source.pixelBlock}).then((t=>{const r=e.source;r.pixelBlock=t.pixelBlock,r.filter=e=>this.layer.applyFilter(e),this.container.requestRender();}));}));}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate());}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.bitmaps;if(1===e.length&&e[0].source)return {extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,r$1=e.map((e=>e.source)).filter((e=>e.extent&&e.extent.intersects(t))).map((e=>({extent:e.extent,pixelBlock:e.originalPixelBlock}))),i=f$1(r$1,t);return r(i)?{extent:i.extent,pixelBlock:i.pixelBlock}:null}return null}_fetchImage(e,t,r,i$1){return (i$1=i$1||{}).timeExtent=this.timeExtent,i$1.requestAsImageElement=!0,this.layer.fetchImage(e,t,r,i$1).then((e=>e.imageElement?e.imageElement:this.layer.applyRenderer(e.pixelData,{signal:i$1.signal}).then((t=>{const r=new i(t.pixelBlock,t.extent.clone(),e.pixelData.pixelBlock);return r.filter=e=>this.layer.applyFilter(e),r}))))}};e([d$2()],u.prototype,"attached",void 0),e([d$2()],u.prototype,"container",void 0),e([d$2()],u.prototype,"layer",void 0),e([d$2()],u.prototype,"strategy",void 0),e([d$2()],u.prototype,"timeExtent",void 0),e([d$2()],u.prototype,"view",void 0),e([d$2()],u.prototype,"updateRequested",void 0),e([d$2()],u.prototype,"updating",null),e([d$2()],u.prototype,"type",void 0),u=e([n("esri.views.2d.layers.imagery.ImageryView2D")],u);const y=u;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class t extends a{constructor(){super(...arguments),this.symbolTypes=["triangle"];}get requiresDedicatedFBO(){return !1}prepareRenderPasses(s){const t=s.registerRenderPass({name:"imagery (vf)",brushes:[m$1],target:()=>this.children,drawPhase:I.MAP});return [...super.prepareRenderPasses(s),t]}doRender(e){this.visible&&e.drawPhase===I.MAP&&this.symbolTypes.forEach((r=>{e.renderPass=r,super.doRender(e);}));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const p=s.getLogger("esri.views.2d.layers.imagery.VectorFieldView2D");let m=class extends y$1{constructor(e){super(e),this.update=x(((e,t)=>this._update(e,t).catch((e=>{g$2(e)||p.error(e);}))));}get updating(){return !!this._loading}redraw(e){if(!this.container.children.length)return;const t=this.container.children[0];t.symbolizerParameters=e,t.invalidateVAO(),this.container.symbolTypes="wind_speed"===e.style?["scalar","triangle"]:"simple_scalar"===e.style?["scalar"]:["triangle"],this.container.requestRender();}async _update(e,t,r){if(!e.stationary)return;const{extent:i,spatialReference:s}=e.state,o=new M({xmin:i.xmin,ymin:i.ymin,xmax:i.xmax,ymax:i.ymax,spatialReference:s}),[a,n]=e.state.size;this._loading=this.fetchPixels(o,a,n,r);const c=await this._loading;this._addToDisplay(c,t,e.state),this._loading=null;}_addToDisplay(e,t,r){if(t$2(e.pixelBlock))return this.container.children.forEach((e=>e.destroy())),void this.container.removeAllChildren();const{extent:s,pixelBlock:o}=e,a=new y$2(o);a.offset=[0,0],a.symbolizerParameters=t,a.rawPixelData=e,a.invalidateVAO(),a.x=s.xmin,a.y=s.ymax,a.pixelRatio=r.pixelRatio,a.rotation=r.rotation,a.resolution=r.resolution,a.width=o.width*t.symbolTileSize,a.height=o.height*t.symbolTileSize,this.container.children.forEach((e=>e.destroy())),this.container.removeAllChildren(),this.container.symbolTypes="wind_speed"===t.style?["scalar","triangle"]:"simple_scalar"===t.style?["scalar"]:["triangle"],this.container.addChild(a);}};e([d$2()],m.prototype,"fetchPixels",void 0),e([d$2()],m.prototype,"container",void 0),e([d$2()],m.prototype,"_loading",void 0),e([d$2()],m.prototype,"updating",null),m=e([n("esri.views.2d.layers.imagery.ImageryVFStrategy")],m);const d=m;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let f=class extends d$3{constructor(){super(...arguments),this.attached=!1,this.container=new t,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(e,t,r$1,i)=>{const n=await this._projectFullExtentPromise,{symbolTileSize:l}=this.layer.renderer,{extent:c,width:m,height:p}=M$1(e,t,r$1,l,n);if(r(n)&&!n.intersects(e))return {extent:c,pixelBlock:null};const h={bbox:`${c.xmin}, ${c.ymin}, ${c.xmax}, ${c.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:l,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(h)){const e=this.getPixelData();if(r(e)){if(`${e.extent.xmin}, ${e.extent.ymin}, ${e.extent.xmax}, ${e.extent.ymax}`===h.bbox)return e}}const{pixelData:u}=await this.layer.fetchImage(c,m,p,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:i});if(this._dataParameters=h,t$2(u.pixelBlock))return {extent:c,pixelBlock:null};return {extent:c,pixelBlock:"vector-uv"===this.layer.rasterInfo.dataType?e$1(m$2(u.pixelBlock,"vector-uv")):u.pixelBlock}};}get updating(){return !this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new d({container:this.container,fetchPixels:this._fetchpixels}),this.handles.add(l((()=>this.layer.renderer),(e=>this._updateSymbolizerParams(e)),w),"vector-field-view-update");}detach(){this._strategy.destroy(),this.container.children.forEach((e=>e.destroy())),this.container.removeAllChildren(),this.handles.remove("vector-field-view-update"),this._strategy=this.container=this._projectFullExtentPromise=null;}getPixelData(){if(this.updating||!this.container.children.length)return null;const{extent:e,pixelBlock:t}=this.container.children[0].rawPixelData;return {extent:e,pixelBlock:t}}hitTest(e){return new g$3({attributes:{},geometry:e.clone(),layer:this.layer})}update(e){this._strategy.update(e,this._symbolizerParams);}redraw(){this._updateSymbolizerParams(this.layer.renderer),this._strategy.redraw(this._symbolizerParams);}_canReuseVectorFieldData(e){const t=this._dataParameters.exportParametersVersion===e.exportParametersVersion,r=this._dataParameters.time===e.time,i=this._dataParameters.symbolTileSize===e.symbolTileSize,s=this._dataParameters.bbox===e.bbox;return t&&r&&i&&s}async _getProjectedFullExtent(e){try{return await F(this.layer.fullExtent,e)}catch(t){try{const t=(await U(this.layer.url,{query:{option:"footprints",outSR:e.wkid||JSON.stringify(e.toJSON()),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return t?M.fromJSON(t):null}catch{return null}}}_updateSymbolizerParams(e){"vector-field"===e.type&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}));}};e([d$2()],f.prototype,"attached",void 0),e([d$2()],f.prototype,"container",void 0),e([d$2()],f.prototype,"layer",void 0),e([d$2()],f.prototype,"timeExtent",void 0),e([d$2()],f.prototype,"type",void 0),e([d$2()],f.prototype,"view",void 0),e([d$2()],f.prototype,"updating",null),f=e([n("esri.views.2d.layers.imagery.VectorFieldView2D")],f);const g$1=f;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let g=class extends(m$3(i$1(f$2(u$1)))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new c,this.subview=null;}get pixelData(){return this.updating?null:"getPixelData"in this.subview?this.subview.getPixelData():null}get updating(){return !!(!this.subview||"updating"in this.subview&&this.subview.updating)}async hitTest(e,i){return this.subview?[{type:"graphic",graphic:this.subview.hitTest(e),layer:this.layer,mapPoint:e}]:null}update(e){this.subview?.update(e);}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new ae({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new n$1(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.handles.add([l((()=>this.layer.blendMode??"normal"),(e=>this.subview.container.blendMode=e),w),l((()=>this.layer.effect??null),(e=>this.subview.container.effect=e),w),l((()=>this.layer.exportImageServiceParameters.version),(e=>{e&&this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate());}),U$1),l((()=>this.timeExtent),(e=>{this.subview.timeExtent=e,"redraw"in this.subview?this.requestUpdate():this.subview.redrawOrRefetch();}),U$1),this.layer.on("redraw",(()=>{"redraw"in this.subview?this.subview.redraw():this.subview.redrawOrRefetch();})),l((()=>this.layer.renderer),(()=>this._setSubView()))],"imagerylayerview-update");}detach(){this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),this.subview?.destroy(),this.handles.remove("imagerylayerview-update"),this.subview=null,this._highlightView?.destroy(),this._exportImageVersion=-1;}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}highlight(e,r){if(!((Array.isArray(e)?e[0]:j.isCollection(e)?e.getItemAt(0):e)instanceof g$3))return {remove:()=>{}};let s=[];return Array.isArray(e)||j.isCollection(e)?s=e.map((e=>e.clone())):e instanceof g$3&&(s=[e.clone()]),this._highlightGraphics.addMany(s),{remove:()=>{this._highlightGraphics.removeMany(s);}}}async doRefresh(){this.requestUpdate();}isUpdating(){return !this.subview||this.subview.updating}_setSubView(){if(!this.view)return;const e=this.layer.renderer?.type;let i="imagery";if("vector-field"===e?i="imageryVF":"flow"===e&&(i="flow"),this.subview){if(this.subview.type===i)return this._attachSubview(this.subview),void("flow"===this.subview.type&&this.subview.redrawOrRefetch());this._detachSubview(this.subview),this.subview?.destroy();}this.subview="imagery"===i?new y({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):"imageryVF"===i?new g$1({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new d$4({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate();}_attachSubview(e){e&&!e.attached&&(e.attach(),e.attached=!0,this.container.addChildAt(e.container,0),e.container.blendMode=this.layer.blendMode,e.container.effect=this.layer.effect);}_detachSubview(e){e?.attached&&(this.container.removeChild(e.container),e.detach(),e.attached=!1);}};e([d$2()],g.prototype,"pixelData",null),e([d$2({readOnly:!0})],g.prototype,"updating",null),e([d$2()],g.prototype,"subview",void 0),g=e([n("esri.views.2d.layers.ImageryLayerView2D")],g);const b=g;

export default b;
