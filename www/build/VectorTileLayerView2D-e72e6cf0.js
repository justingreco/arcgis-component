import { t as t$2, r as r$1, h as e$4, aQ as D, s as s$1, J as g$1, m as m$2, e as e$5, d, n as n$3 } from './cast-3d5be210.js';
import { g } from './Graphic-93f45ded.js';
import { l as l$3, h as h$2 } from './reactiveUtils-bd6fe823.js';
import { m as m$1, a as a$3 } from './diffUtils-6436a697.js';
import { u } from './aaBoundingRect-5e1a4e52.js';
import { E } from './Point-edff2a11.js';
import { L as L$1 } from './enums-33a95ace.js';
import { r as r$2, i as i$1, l as l$1, c as c$2, o as o$2 } from './SymbolRepository-440cbd28.js';
import { e } from './LRUCache-5f25d277.js';
import { b as l, h as h$1 } from './TileStore-909b46c6.js';
import { e as e$1 } from './TileKey-97254206.js';
import { s, a as a$1, m as m$3 } from './VectorTile-93124859.js';
import { n as n$2 } from './Collection-a38e0489.js';
import { c as c$1, e as e$2 } from './config-5446e136.js';
import { i as i$2, a as a$2 } from './StyleDefinition-8856d24f.js';
import { I as I$1 } from './Utils-b4b0f45e.js';
import { M as e$3 } from './DefaultUI-a0db5719.js';
import { r as r$3 } from './TiledDisplayObject-2082c8d9.js';
import { o as o$1 } from './TileContainer-a8b4c326.js';
import { O, I as I$2, R } from './enums-4770f29d.js';
import { l as l$2 } from './StyleRepository-de1f9a41.js';
import { f as f$1 } from './LayerView2D-2fae06b5.js';
import { v } from './Bitmap-85c4b09d.js';
import { t as t$3 } from './BitmapContainer-691188c5.js';
import { S } from './TileInfo-3c9e9a6a.js';
import { p } from './TileStrategy-fea1cb17.js';
import { u as u$1 } from './LayerView-1ee5d9ed.js';
import './geometry-2f332a26.js';
import './Extent-f27111e1.js';
import './Polyline-dcdb3782.js';
import './request-ac4d8bfb.js';
import './PopupTemplate-b459951f.js';
import './JSONSupport-dce2c67b.js';
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
import './persistableUrlUtils-5dcd6081.js';
import './collectionUtils-302901c0.js';
import './Portal-5df9f5a7.js';
import './Clonable-533c7a05.js';
import './workers-c7a27acb.js';
import './assets-99f5c3ee.js';
import './intl-54ccdc89.js';
import './messages-5e9a4a9e.js';
import './BidiEngine-c95c4945.js';
import './Texture-f189b7ba.js';
import './context-util-5ae1bf7b.js';
import './pbf-bac0c6a4.js';
import './CIMSymbolHelper-78ca7d84.js';
import './floatRGBA-64e5bf11.js';
import './enums-395c521f.js';
import './alignmentUtils-4bbd02ca.js';
import './mat2d-677a80fe.js';
import './vec2-4f9a494f.js';
import './vec2f32-23e4a539.js';
import './number-ad66b701.js';
import './utils-8133dc40.js';
import './GeometryUtils-bcda40bd.js';
import './MemCache-04cdd0cd.js';
import './quickselect-d6c9284c.js';
import './Query-1f6c7e43.js';
import './TimeExtent-66b53603.js';
import './Field-2973a5cf.js';
import './fieldType-eb0b42e4.js';
import './mat3-eb8de168.js';
import './FramebufferObject-bfb23fd2.js';
import './VertexElementDescriptor-3b53aa99.js';
import './Handles-54afc0a7.js';
import './jsxFactory-4cd653a4.js';
import './uuid-ac104993.js';
import './index-f980186a.js';
import './HandleOwner-fe336959.js';
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
import './OptimizedFeature-a0dba562.js';
import './OptimizedFeatureSet-261a115b.js';
import './queryZScale-127601ac.js';
import './zscale-0befeff4.js';
import './FeatureSet-1b85367a.js';
import './TopFeaturesQuery-babc7c57.js';
import './utils-112c7fa0.js';
import './ColorStop-64c57e35.js';
import './utils-2bda91e5.js';
import './asyncUtils-96c00c9e.js';
import './jsonUtils-f3f35e7f.js';
import './mat4-d5df0e58.js';
import './_commonjsHelpers-8dd5c177.js';
import './ItemCache-1f62ab56.js';
import './jsonUtils-e7c7add9.js';
import './UniqueValueRenderer-bb66af10.js';
import './colorRamps-e3d9340f.js';
import './sizeVariableUtils-5330814d.js';
import './compilerUtils-d149ad5f.js';
import './commonProperties-fca3036e.js';
import './jsonUtils-a25e8eb8.js';
import './styleUtils-d2332fad.js';
import './DictionaryLoader-d0d1b4ff.js';
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
import './vec2f64-2956001b.js';
import './capabilities-cb32c85a.js';
import './DisplayObject-f25c6d04.js';
import './WGLContainer-fea967fb.js';
import './brushes-f4d4256e.js';
import './pixelUtils-e251d269.js';
import './DefaultVertexAttributeLayouts-664d07a8.js';
import './ProgramTemplate-6f185b1d.js';
import './Program-634dbdbe.js';
import './MaterialKey-ac9b534a.js';
import './utils-84240eaf.js';
import './GeometryUtils-744eb819.js';
import './Container-9c6fdd22.js';
import './EffectView-a2b02e73.js';
import './earcut-4e6b97b1.js';
import './unitBezier-f1aeb191.js';
import './Geometry-7a3815d2.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const r=512,o=1e-6,n$1=(e,i)=>e+1/(1<<2*i);class a{constructor(i,t){this._tiles=new Map,this._tileCache=new e(40,(e=>e.dispose())),this._viewSize=[0,0],this._visibleTiles=new Map,this.acquireTile=i.acquireTile,this.releaseTile=i.releaseTile,this.tileInfoView=i.tileInfoView,this._container=t;}destroy(){for(const[e,i]of this._tiles)i.dispose();this._tiles=null,this._tileCache.clear(),this._tileCache=null;}update(e){this._updateCacheSize(e);const i=this.tileInfoView,t=i.getTileCoverage(e.state,0,"smallest"),{spans:r,lodInfo:o}=t,{level:n}=o,a=this._tiles,c=new Set,h=new Set;for(const{row:s,colFrom:_,colTo:f}of r)for(let e=_;e<=f;e++){const i=e$1.getId(n,s,o.normalizeCol(e),o.getWorldForColumn(e)),t=this._getOrAcquireTile(i);c.add(i),t.processed()?this._addToContainer(t):h.add(new e$1(i));}for(const[s,l]of a)l.isCoverage=c.has(s);for(const s of h)this._findPlaceholdersForMissingTiles(s,c);let d=!1;for(const[s,l]of a)l.neededForCoverage=c.has(s),l.neededForCoverage||l.isHoldingForFade&&i.intersects(t,l.key)&&c.add(s),l.isFading&&(d=!0);for(const[s,l]of this._tiles)c.has(s)||this._releaseTile(s);return l.pool.release(t),!d}clear(){this._tiles.clear(),this._tileCache.clear(),this._visibleTiles.clear();}clearCache(){this._tileCache.clear();}_findPlaceholdersForMissingTiles(e,i){const t=[];for(const[l,r]of this._tiles)this._addPlaceholderChild(t,r,e,i);const s=t.reduce(n$1,0);Math.abs(1-s)<o||this._addPlaceholderParent(e.id,i);}_addPlaceholderChild(e,i,t,s){i.key.level<=t.level||!i.hasData()||h(t,i.key)&&(this._addToContainer(i),s.add(i.id),e.push(i.key.level-t.level));}_addPlaceholderParent(e,i){const t=this._tiles;let s=e;for(;;){if(s=c(s),!s||i.has(s))return;const e=t.get(s);if(e&&e.hasData())return this._addToContainer(e),void i.add(e.id)}}_getOrAcquireTile(e){let i=this._tiles.get(e);return i||(i=this._tileCache.pop(e),i||(i=this.acquireTile(new e$1(e))),this._tiles.set(e,i),i)}_releaseTile(e){const i=this._tiles.get(e);this.releaseTile(i),this._removeFromContainer(i),this._tiles.delete(e),i.hasData()?this._tileCache.put(e,i,1):i.dispose();}_addToContainer(e){let s;const l=[],r=this._container;if(r.contains(e))return;const o=this._visibleTiles;for(const[t,n]of o)this._canConnectDirectly(e,n)&&l.push(n),t$2(s)&&this._canConnectDirectly(n,e)&&(s=n);if(r$1(s)){for(const i of l)s.childrenTiles.delete(i),e.childrenTiles.add(i),i.parentTile=e;s.childrenTiles.add(e),e.parentTile=s;}else for(const i of l)e.childrenTiles.add(i),i.parentTile=e;o.set(e.id,e),r.addChild(e);}_removeFromContainer(e){if(this._visibleTiles.delete(e.id),this._container.removeChild(e),r$1(e.parentTile)){e.parentTile.childrenTiles.delete(e);for(const i of e.childrenTiles)r$1(e.parentTile)&&e.parentTile.childrenTiles.add(i);}for(const i of e.childrenTiles)i.parentTile=e.parentTile;e.parentTile=null,e.childrenTiles.clear();}_canConnectDirectly(e,i){const t=e.key;let{level:s,row:l,col:r,world:o}=i.key;const n=this._visibleTiles;for(;s>0;){if(s--,l>>=1,r>>=1,t.level===s&&t.row===l&&t.col===r&&t.world===o)return !0;if(n.has(`${s}/${l}/${r}/${o}`))return !1}return !1}_updateCacheSize(e){const i=e.state.size;if(i[0]===this._viewSize[0]&&i[1]===this._viewSize[1])return;const t=Math.ceil(i[0]/r)+1,s=Math.ceil(i[1]/r)+1;this._viewSize[0]=i[0],this._viewSize[1]=i[1],this._tileCache.maxSize=5*t*s;}}function c(e){const[i,t,s,l]=e.split("/"),r=parseInt(i,10);return 0===r?null:`${r-1}/${parseInt(t,10)>>1}/${parseInt(s,10)>>1}/${parseInt(l,10)}`}function h(e,i){const t=i.level-e.level;return e.row===i.row>>t&&e.col===i.col>>t&&e.world===i.world}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const n=.5,_$1=1e-6;class m extends n$2{constructor(t,e){super(),this.styleRepository=t,this._tileToHandle=new Map,this._viewState={scale:0,rotation:0,center:[0,0],size:[0,0]},this._declutterViewState={scale:0,rotation:0,center:[0,0],size:[0,0]},this._completed=!1,this._symbolRepository=new r$2(4096,e,(()=>new s)),this._symbolDeclutterer=new i$1(e,this._symbolRepository,((t,e,i)=>new l$1(t,e,i,this.styleRepository,this._zoom,this._viewState.rotation)),((t,e)=>{t.allSymbolsFadingOut=!0,t.lastOpacityUpdate=e,a$1(t,e,!0),t.decluttered=!0,t.requestRender();}),((t,e)=>this.styleRepository.getStyleLayerByUID(t.styleLayerUID).z-this.styleRepository.getStyleLayerByUID(e.styleLayerUID).z),(t=>{const e=this.styleRepository.getStyleLayerByUID(t);if(this._zoom+_$1<e.minzoom||this._zoom-_$1>=e.maxzoom)return !1;const i=e.getLayoutProperty("visibility");return !i||i.getValue()!==i$2.NONE}));}addTile(t){t.decluttered=!1,this._tileToHandle.set(t,t.on("symbols-changed",(()=>{this._symbolRepository.add(t),this.restartDeclutter();}))),this._symbolRepository.add(t),this.restartDeclutter();}removeTile(t){const e=this._tileToHandle.get(t);e&&(this._symbolRepository.removeTile(t),this.restartDeclutter(),e.remove(),this._tileToHandle.delete(t));}update(t,e){return this._zoom=t,this._viewState={scale:e.scale,rotation:e.rotation,center:[e.center[0],e.center[1]],size:[e.size[0],e.size[1]]},this._continueDeclutter(),this._completed}restartDeclutter(){this._completed=!1,this._symbolDeclutterer.restart(),this._notifyUnstable();}clear(){this._completed=!1,this._symbolRepository=null,this._symbolDeclutterer.restart(),this._tileToHandle.forEach((t=>t.remove())),this._tileToHandle.clear();}get stale(){return this._zoom!==this._declutterZoom||this._viewState.size[0]!==this._declutterViewState.size[0]||this._viewState.size[1]!==this._declutterViewState.size[1]||this._viewState.scale!==this._declutterViewState.scale||this._viewState.rotation!==this._declutterViewState.rotation}deleteStyleLayers(t){this._symbolRepository.deleteStyleLayers(t);}_continueDeclutter(){this._completed&&!this.stale||(this._symbolDeclutterer.running||(this._declutterZoom=this._zoom,this._declutterViewState.center[0]=this._viewState.center[0],this._declutterViewState.center[1]=this._viewState.center[1],this._declutterViewState.rotation=this._viewState.rotation,this._declutterViewState.scale=this._viewState.scale,this._declutterViewState.size[0]=this._viewState.size[0],this._declutterViewState.size[1]=this._viewState.size[1],this._symbolDeclutterer.restart()),this._symbolDeclutterer.setScreenSize(this._viewState.size[0],this._viewState.size[1]),this._completed=this._symbolDeclutterer.continue(c$1),this._completed&&this._scheduleNotifyStable());}_scheduleNotifyStable(){r$1(this._stableNotificationHandle)&&clearTimeout(this._stableNotificationHandle),this._stableNotificationHandle=setTimeout((()=>{this._stableNotificationHandle=null,this.emit("fade-complete");}),(1+n)*e$2);}_notifyUnstable(){r$1(this._stableNotificationHandle)&&(clearTimeout(this._stableNotificationHandle),this._stableNotificationHandle=null),this.emit("fade-start");}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class t$1 extends r$3{_createTransforms(){return {dvs:e$3(),tileMat3:e$3()}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const _=1e-6;function f(e,t){if(e){const s=e.getLayoutProperty("visibility");if(!s||s.getValue()!==i$2.NONE&&(void 0===e.minzoom||e.minzoom<t+_)&&(void 0===e.maxzoom||e.maxzoom>=t-_))return !0}return !1}class b$1 extends o$1{constructor(e){super(e),this._backgroundTiles=[],this._pointToCallbacks=new Map;}destroy(){this.removeAllChildren(),this._spriteMosaic&&(this._spriteMosaic.dispose(),this._spriteMosaic=null),this._glyphMosaic&&(this._glyphMosaic.dispose(),this._glyphMosaic=null),r$1(this._symbolFader)&&(this._symbolFader.clear(),this._symbolFader=null),this._styleRepository=null,this._backgroundTiles=[],this._pointToCallbacks.clear();}setStyleResources(e,r,i){if(this._spriteMosaic=e,this._glyphMosaic=r,this._styleRepository=i,t$2(this._symbolFader)){const e=new m(this._styleRepository,this.children);e.on("fade-start",(()=>{this.emit("fade-start"),this.requestRender();})),e.on("fade-complete",(()=>{this.emit("fade-complete"),this.requestRender();})),this._symbolFader=e;}e$4(this._symbolFader).styleRepository=i;}setSpriteMosaic(e){this._spriteMosaic.dispose(),this._spriteMosaic=e;}deleteStyleLayers(t){r$1(this._symbolFader)&&this._symbolFader.deleteStyleLayers(t);}async hitTest(e){const t=D();return this._pointToCallbacks.set(e,t),this.requestRender(),t.promise}enterTileInvalidation(){for(const e of this.children)e.invalidating=!0;}createRenderParams(e){return {...super.createRenderParams(e),renderPass:null,styleLayer:null,styleLayerUID:-1,glyphMosaic:this._glyphMosaic,spriteMosaic:this._spriteMosaic,hasClipping:!!this._clippingInfos}}doRender(e){!this.visible||e.drawPhase!==I$1.MAP&&e.drawPhase!==I$1.DEBUG||void 0===this._spriteMosaic||super.doRender(e);}addChild(t){return super.addChild(t),r$1(this._symbolFader)?this._symbolFader.addTile(t):t.decluttered=!0,this.requestRender(),t}removeChild(t){return r$1(this._symbolFader)&&this._symbolFader.removeTile(t),this.requestRender(),super.removeChild(t)}renderChildren(e){const{drawPhase:t}=e;if(t!==I$1.DEBUG){if(this._doRender(e),this._pointToCallbacks.size>0){e.drawPhase=I$1.HITTEST;const s=e.painter.effects.hittestVTL;s.bind(e),this._doRender(e),s.draw(e,this._pointToCallbacks),s.unbind(e),e.drawPhase=t;}}else super.renderChildren(e);}removeAllChildren(){for(let t=0;t<this.children.length;t++){const s=this.children[t];r$1(this._symbolFader)&&this._symbolFader.removeTile(s),s.dispose();}super.removeAllChildren();}getStencilTarget(){return this.children.filter((e=>e.neededForCoverage&&e.hasData()))}restartDeclutter(){r$1(this._symbolFader)&&this._symbolFader.restartDeclutter();}_doRender(e){const{context:t}=e,s=this._styleRepository;if(!s)return;const r=s.layers;let i=!0;e.drawPhase===I$1.HITTEST&&(i=!1),s.backgroundBucketIds.length>0&&(e.renderPass="background",this._renderBackgroundLayers(e,s.backgroundBucketIds)),super.renderChildren(e),e.drawPhase===I$1.MAP&&this._fade(e.displayLevel,e.state);const o=this.children.filter((e=>e.visible&&e.hasData()));if(!o||0===o.length)return t.bindVAO(),t.setStencilTestEnabled(!0),void t.setBlendingEnabled(!0);for(const l of o)l.triangleCount=0;t.setStencilWriteMask(0),t.setColorMask(!0,!0,!0,!0),t.setStencilOp(O.KEEP,O.KEEP,O.REPLACE),t.setStencilTestEnabled(!0),t.setBlendingEnabled(!1),t.setDepthTestEnabled(!0),t.setDepthWriteEnabled(!0),t.setDepthFunction(I$2.LEQUAL),t.setClearDepth(1),t.clear(t.gl.DEPTH_BUFFER_BIT),e.renderPass="opaque";for(let l=r.length-1;l>=0;l--)this._renderStyleLayer(r[l],e,o);t.setDepthWriteEnabled(!1),t.setBlendingEnabled(i),t.setBlendFunctionSeparate(R.ONE,R.ONE_MINUS_SRC_ALPHA,R.ONE,R.ONE_MINUS_SRC_ALPHA),e.renderPass="translucent";for(let l=0;l<r.length;l++)this._renderStyleLayer(r[l],e,o);t.setDepthTestEnabled(!1),e.renderPass="symbol";for(let l=0;l<r.length;l++)this._renderStyleLayer(r[l],e,o);t.bindVAO(),t.setStencilTestEnabled(!0),t.setBlendingEnabled(!0);}_fade(t,s){r$1(this._symbolFader)&&(this._symbolFader.update(t,s)||this.requestRender());}_renderStyleLayer(e,t,s){const{painter:r,renderPass:i}=t;if(void 0===e)return;const o=e.getLayoutProperty("visibility");if(o&&o.getValue()===i$2.NONE)return;let a;switch(e.type){case a$2.BACKGROUND:return;case a$2.FILL:if("opaque"!==i&&"translucent"!==t.renderPass)return;a="vtlFill";break;case a$2.LINE:if("translucent"!==i)return;a="vtlLine";break;case a$2.CIRCLE:if("symbol"!==i)return;a="vtlCircle";break;case a$2.SYMBOL:if("symbol"!==i)return;a="vtlSymbol";}if(s=e.type===a$2.SYMBOL?s.filter((e=>e.decluttered)):s.filter((e=>e.neededForCoverage)),"vtlSymbol"!==a){const r=t.displayLevel;if(0===s.length||void 0!==e.minzoom&&e.minzoom>=r+_||void 0!==e.maxzoom&&e.maxzoom<r-_)return}const d=e.uid;t.styleLayerUID=d,t.styleLayer=e;for(const l of s)if(l.layerData.has(d)){r.renderObjects(t,s,a);break}}_renderBackgroundLayers(t,s){const{context:r,displayLevel:o,painter:l$1,state:h}=t,u$1=this._styleRepository;let _=!1;for(const e of s){if(u$1.getLayerById(e).type===a$2.BACKGROUND&&f(u$1.getLayerById(e),o)){_=!0;break}}if(!_)return;const b=this._tileInfoView.getTileCoverage(t.state,0,"smallest"),{spans:g,lodInfo:T}=b,{level:E}=T,C=u(),L=[];if(this._renderPasses){const s=this._renderPasses[0];r$1(this._clippingInfos)&&(s.brushes[0].prepareState(t,this._clippingInfos[0]),s.brushes[0].drawMany(t,this._clippingInfos));}const v=this._backgroundTiles;let S,P=0;for(const{row:e,colFrom:n,colTo:a}of g)for(let t=n;t<=a;t++){if(P<v.length)S=v[P],S.key.set(E,e,T.normalizeCol(t),T.getWorldForColumn(t)),this._tileInfoView.getTileBounds(C,S.key,!1),S.x=C[0],S.y=C[3];else {const s=new e$1(E,e,T.normalizeCol(t),T.getWorldForColumn(t)),r=this._tileInfoView.getTileBounds(u(),s);S=new t$1(s,r[0],r[3],512,512,4096,4096),v.push(S);}S.setTransform(h,this._tileInfoView.getTileResolution(S.key)),L.push(S),P++;}r.setStencilWriteMask(0),r.setColorMask(!0,!0,!0,!0),r.setStencilOp(O.KEEP,O.KEEP,O.REPLACE),r.setStencilFunction(I$2.EQUAL,0,255);let R=!0;t.drawPhase===I$1.HITTEST&&(R=!1),r.setStencilTestEnabled(R);for(const e of s){const s=u$1.getLayerById(e);s.type===a$2.BACKGROUND&&f(s,o)&&(t.styleLayerUID=s.uid,t.styleLayer=s,l$1.renderObjects(t,L,"vtlBackground"));}l.pool.release(b);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class i extends t$3{constructor(e){super(),this.requestRender=this.requestRender.bind(this),this._layerView=e,this._canvas=document.createElement("canvas"),this._context=this._canvas.getContext("2d"),this._bitmap=new v(null,"standard",!1),this.addChild(this._bitmap);}doRender(t){const e=t.state,i=this._createCustomRenderParams(t),a=this._canvas,s=this._bitmap,n=window.devicePixelRatio;a.width=e.size[0]*n,a.height=e.size[1]*n,s.resolution=e.resolution;const o=e.clone();o.pixelRatio=n,s.pixelRatio=n,i.state=o,s.x=e.viewpoint.targetGeometry.x-Math.abs(e.extent.xmax-e.extent.xmin)/2,s.y=e.viewpoint.targetGeometry.y+Math.abs(e.extent.ymax-e.extent.ymin)/2,this._layerView.render(i),s.source=a,s.rotation=e.rotation,super.doRender({...t,state:o});}_createCustomRenderParams(t){return {globalOpacity:t.globalOpacity,state:t.state,stationary:t.stationary,pixelRatio:window.devicePixelRatio,context:this._context}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class t extends h$1{constructor(){super(...arguments),this._fullCacheLodInfos=null,this._levelByScale={};}getTileParentId(e){const l=e$1.pool.acquire(e),t=0===l.level?null:e$1.getId(l.level-1,l.row>>1,l.col>>1,l.world);return e$1.pool.release(l),t}getTileCoverage(e,l,s){const t=super.getTileCoverage(e,l,s);if(!t)return t;const o=1<<t.lodInfo.level;return t.spans=t.spans.filter((e=>e.row>=0&&e.row<o)),t}scaleToLevel(e){if(this._fullCacheLodInfos||this._initializeFullCacheLODs(this._lodInfos),this._levelByScale[e])return this._levelByScale[e];{const l=this._fullCacheLodInfos;if(e>l[0].scale)return l[0].level;let s,t;for(let o=0;o<l.length-1;o++)if(t=l[o+1],e>t.scale)return s=l[o],s.level+(s.scale-e)/(s.scale-t.scale);return l[l.length-1].level}}_initializeFullCacheLODs(l){let s;if(0===l[0].level)s=l.map((e=>({level:e.level,resolution:e.resolution,scale:e.scale})));else {const l=this.tileInfo.size[0],t=this.tileInfo.spatialReference;s=S.create({size:l,spatialReference:t}).lods.map((e=>({level:e.level,resolution:e.resolution,scale:e.scale})));}for(let e=0;e<s.length;e++)this._levelByScale[s[e].scale]=s[e].level;this._fullCacheLodInfos=s;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const Q=s$1.getLogger("esri.views.2d.layers.VectorTileLayerView2D");let L=class extends(f$1(u$1)){constructor(){super(...arguments),this._styleChanges=[],this._fetchQueue=null,this._parseQueue=null,this._isTileHandlerReady=!1,this.fading=!1;}async hitTest(e,i){if(!this._tileHandlerPromise)return null;await this._tileHandlerPromise;const s=await this._vectorTileContainer.hitTest(i);if(!s||0===s.length)return null;const r=s[0]-1,a=this._styleRepository,l=a.getStyleLayerByUID(r);if(!l)return null;const n=a.getStyleLayerIndex(l.id);return [{type:"graphic",mapPoint:e,layer:this.layer,graphic:new g({attributes:{layerId:n,layerName:l.id,layerUID:r},layer:this.layer,sourceLayer:this.layer})}]}update(e){if(this._tileHandlerPromise&&this._isTileHandlerReady)return e.pixelRatio!==this._tileHandler.devicePixelRatio?(this._start(),void(this._tileHandler.devicePixelRatio=e.pixelRatio)):void(this._styleChanges.length>0?this._tileHandlerPromise=this._applyStyleChanges():(this._fetchQueue.pause(),this._parseQueue.pause(),this._fetchQueue.state=e.state,this._parseQueue.state=e.state,this._tileManager.update(e)||this.requestUpdate(),this._parseQueue.resume(),this._fetchQueue.resume()))}attach(){const{style:e}=this.layer.currentStyleInfo;this._styleRepository=new l$2(e),this._tileInfoView=new t(this.layer.tileInfo,this.layer.fullExtent),this._vectorTileContainer=new b$1(this._tileInfoView),this._tileHandler=new c$2(this.layer,this._styleRepository,window.devicePixelRatio||1),this.container.addChild(this._vectorTileContainer),this._start(),this.handles.add([this._vectorTileContainer.on("fade-start",(()=>{this.fading=!0,this.notifyChange("updating"),this.requestUpdate();})),this._vectorTileContainer.on("fade-complete",(()=>{this._collisionBoxesDisplay?.requestRender(),this.fading=!1,this.notifyChange("updating"),this.requestUpdate();})),l$3((()=>this.layer.symbolCollisionBoxesVisible),(e=>{e?(this._collisionBoxesDisplay=new i({render:e=>this._renderCollisionBoxes(e.context)}),this.container.addChild(this._collisionBoxesDisplay)):(this.container.removeChild(this._collisionBoxesDisplay),this._collisionBoxesDisplay=null);}),h$2),this.layer.on("paint-change",(e=>{if(e.isDataDriven)this._styleChanges.push({type:L$1.PAINTER_CHANGED,data:e}),this.notifyChange("updating"),this.requestUpdate();else {const t=this._styleRepository,i=t.getLayerById(e.layer);if(!i)return;const s=i.type===a$2.SYMBOL;t.setPaintProperties(e.layer,e.paint),s&&this._vectorTileContainer.restartDeclutter(),this._vectorTileContainer.requestRender();}})),this.layer.on("layout-change",(e=>{const t=this._styleRepository,i=t.getLayerById(e.layer);if(!i)return;const s=m$1(i.layout,e.layout);if(!t$2(s)){if(a$3(s,"visibility")&&1===b(s))return t.setLayoutProperties(e.layer,e.layout),i.type===a$2.SYMBOL&&this._vectorTileContainer.restartDeclutter(),void this._vectorTileContainer.requestRender();this._styleChanges.push({type:L$1.LAYOUT_CHANGED,data:e}),this.notifyChange("updating"),this.requestUpdate();}})),this.layer.on("style-layer-visibility-change",(e=>{const t=this._styleRepository,i=t.getLayerById(e.layer);i&&(t.setStyleLayerVisibility(e.layer,e.visibility),i.type===a$2.SYMBOL&&this._vectorTileContainer.restartDeclutter(),this._vectorTileContainer.requestRender());})),this.layer.on("style-layer-change",(e=>{this._styleChanges.push({type:L$1.LAYER_CHANGED,data:e}),this.notifyChange("updating"),this.requestUpdate();})),this.layer.on("delete-style-layer",(e=>{this._styleChanges.push({type:L$1.LAYER_REMOVED,data:e}),this.notifyChange("updating"),this.requestUpdate();})),this.layer.on("load-style",(()=>this._loadStyle())),this.layer.on("spriteSource-change",(e=>{this._newSpriteSource=e.spriteSource,this._styleChanges.push({type:L$1.SPRITES_CHANGED,data:null});const t=this._styleRepository.layers;for(const i of t)switch(i.type){case a$2.SYMBOL:i.getLayoutProperty("icon-image")&&this._styleChanges.push({type:L$1.LAYOUT_CHANGED,data:{layer:i.id,layout:i.layout}});break;case a$2.LINE:i.getPaintProperty("line-pattern")&&this._styleChanges.push({type:L$1.PAINTER_CHANGED,data:{layer:i.id,paint:i.paint,isDataDriven:i.isPainterDataDriven()}});break;case a$2.FILL:i.getLayoutProperty("fill-pattern")&&this._styleChanges.push({type:L$1.PAINTER_CHANGED,data:{layer:i.id,paint:i.paint,isDataDriven:i.isPainterDataDriven()}});}this.notifyChange("updating"),this.requestUpdate();}))],this.declaredClass);}detach(){this._stop(),this.container.removeAllChildren(),this._vectorTileContainer?.destroy(),this._vectorTileContainer=null,this._tileHandler?.destroy(),this._tileHandler=null,this.handles.remove(this.declaredClass);}moveStart(){this.requestUpdate();}viewChange(){this.requestUpdate();}moveEnd(){this._collisionBoxesDisplay&&this._vectorTileContainer.restartDeclutter(),this.requestUpdate();}supportsSpatialReference(e){return E(this.layer.tileInfo?.spatialReference,e)}canResume(){let e=super.canResume();const{currentStyleInfo:t}=this.layer;if(e&&t?.layerDefinition){const i=this.view.scale,{minScale:s,maxScale:r}=t.layerDefinition;t&&t.layerDefinition&&(s&&s<i&&(e=!1),r&&r>i&&(e=!1));}return e}isUpdating(){const e=this._vectorTileContainer.children;return !this._isTileHandlerReady||!this._fetchQueue||!this._parseQueue||this._fetchQueue.updating||this._parseQueue.updating||e.length>0&&e.some((e=>e.invalidating))||this.fading}acquireTile(e){const t=this._createVectorTile(e);return this._tileHandlerPromise.then((()=>{this._fetchQueue.push(t.key).then((e=>this._parseQueue.push({key:t.key,data:e}))).then((e=>{t.once("attach",(()=>this.requestUpdate())),t.setData(e),this.requestUpdate(),this.notifyChange("updating");})).catch((e=>{this.notifyChange("updating"),g$1(e)||Q.error(e);}));})),t}releaseTile(e){const t=e.key.id;this._fetchQueue.abort(t),this._parseQueue.abort(t),this.requestUpdate();}_start(){if(this._stop(),this._tileManager=new a({acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView},this._vectorTileContainer),!this.layer.currentStyleInfo)return;const e=new AbortController,t=this._tileHandler.start({signal:e.signal}).then((()=>{this._fetchQueue=new p({tileInfoView:this._tileInfoView,process:(e,t)=>this._getTileData(e,t),concurrency:15}),this._parseQueue=new p({tileInfoView:this._tileInfoView,process:(e,t)=>this._parseTileData(e,t),concurrency:8}),this.requestUpdate(),this._isTileHandlerReady=!0;}));this._tileHandler.spriteMosaic.then((e=>{this._vectorTileContainer.setStyleResources(e,this._tileHandler.glyphMosaic,this._styleRepository),this.requestUpdate();})),this._tileHandlerAbortController=e,this._tileHandlerPromise=t;}_stop(){if(!this._tileHandlerAbortController||!this._vectorTileContainer)return;const e=this._tileHandlerAbortController;e&&e.abort(),this._tileHandlerPromise=null,this._isTileHandlerReady=!1,this._fetchQueue&&(this._fetchQueue.destroy(),this._fetchQueue=null),this._parseQueue&&(this._parseQueue.destroy(),this._parseQueue=null),this._tileManager&&(this._tileManager.destroy(),this._tileManager=null),this._vectorTileContainer.removeAllChildren();}async _getTileData(e,t){const i=await this._tileHandler.fetchTileData(e,t);return this.notifyChange("updating"),i}async _parseTileData(e,t){return this._tileHandler.parseTileData(e,t)}async _applyStyleChanges(){this._isTileHandlerReady=!1,this._fetchQueue.pause(),this._parseQueue.pause(),this._fetchQueue.clear(),this._parseQueue.clear(),this._tileManager.clearCache();const e=this._styleChanges;try{await this._tileHandler.updateStyle(e);}catch(l){Q.error("error applying vector-tiles style update",l.message),this._fetchQueue.resume(),this._parseQueue.resume(),this._isTileHandlerReady=!0;}const t=this._styleRepository,i=[];e.forEach((e=>{if(e.type!==L$1.LAYER_REMOVED)return;const s=e.data,r=t.getLayerById(s.layer);r&&i.push(r.uid);}));const s=[];let r;e.forEach((e=>{const i=e.type,a=e.data;switch(i){case L$1.PAINTER_CHANGED:t.setPaintProperties(a.layer,a.paint),r=a.layer;break;case L$1.LAYOUT_CHANGED:t.setLayoutProperties(a.layer,a.layout),r=a.layer;break;case L$1.LAYER_REMOVED:return void t.deleteStyleLayer(a.layer);case L$1.LAYER_CHANGED:t.setStyleLayer(a.layer,a.index),r=a.layer.id;break;case L$1.SPRITES_CHANGED:this._vectorTileContainer.setSpriteMosaic(this._tileHandler.setSpriteSource(this._newSpriteSource)),this._newSpriteSource=null,r=null;}const l=t.getLayerById(r);l&&s.push(l.uid);}));const a=this._vectorTileContainer.children;if(i.length>0){this._vectorTileContainer.deleteStyleLayers(i);for(const e of a)e.deleteLayerData(i);}if(this._fetchQueue.resume(),this._parseQueue.resume(),s.length>0){const e=[];for(const t of a){const i=this._fetchQueue.push(t.key).then((e=>this._parseQueue.push({key:t.key,data:e,styleLayerUIDs:s}))).then((e=>t.setData(e)));e.push(i);}await Promise.all(e);}this._styleChanges=[],this._isTileHandlerReady=!0,this.notifyChange("updating"),this.requestUpdate();}async _loadStyle(){const{style:e}=this.layer.currentStyleInfo,t=m$2(e);this._isTileHandlerReady=!1,this._fetchQueue.pause(),this._parseQueue.pause(),this._fetchQueue.clear(),this._parseQueue.clear(),this.notifyChange("updating"),this._styleRepository=new l$2(t),this._vectorTileContainer.destroy(),this._tileManager.clear(),this._tileHandlerAbortController.abort(),this._tileHandlerAbortController=new AbortController;const{signal:s}=this._tileHandlerAbortController;try{this._tileHandlerPromise=this._tileHandler.setStyle(this._styleRepository,t),await this._tileHandlerPromise;}catch(l){if(!g$1(l))throw l}if(s.aborted)return this._fetchQueue.resume(),this._parseQueue.resume(),this._isTileHandlerReady=!0,this.notifyChange("updating"),void this.requestUpdate();const r=await this._tileHandler.spriteMosaic;this._vectorTileContainer.setStyleResources(r,this._tileHandler.glyphMosaic,this._styleRepository),this._fetchQueue.resume(),this._parseQueue.resume(),this._isTileHandlerReady=!0,this.notifyChange("updating"),this.requestUpdate();}_createVectorTile(e){const t=this._tileInfoView.getTileBounds(u(),e);return new m$3(e,t[0],t[3],512,512,this._styleRepository)}_renderCollisionBoxes(e){for(const t of this._vectorTileContainer.children)if(t.symbols){const i=[];for(const[e,s]of t.symbols)i.push(...s);o$2(e,i);}}};function b(e){if(t$2(e))return 0;switch(e.type){case"partial":return Object.keys(e.diff).length;case"complete":return Math.max(Object.keys(e.oldValue).length,Object.keys(e.newValue).length);case"collection":return Object.keys(e.added).length+Object.keys(e.changed).length+Object.keys(e.removed).length}}e$5([d()],L.prototype,"_fetchQueue",void 0),e$5([d()],L.prototype,"_parseQueue",void 0),e$5([d()],L.prototype,"_isTileHandlerReady",void 0),e$5([d()],L.prototype,"fading",void 0),L=e$5([n$3("esri.views.2d.layers.VectorTileLayerView2D")],L);const I=L;

export default I;
