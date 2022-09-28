import { r, $ as w$1, f as r$1, e, d, n as n$2 } from './cast-3d5be210.js';
import { u as Ut, U } from './request-ac4d8bfb.js';
import { m, n, y, S } from './symbols-ab3e849a.js';
import { O } from './MultiOriginJSONSupport-281c1c62.js';
import { G, o } from './Point-edff2a11.js';
import { M } from './Extent-f27111e1.js';
import { b } from './Layer-569a1fc8.js';
import { a as a$1 } from './BlendLayer-7884099a.js';
import { c } from './OperationalLayer-e04486e0.js';
import { v } from './PortalLayer-e61e1a42.js';
import { n as n$1 } from './RefreshableLayer-496830b9.js';
import { t } from './ScaleRangeLayer-f9a9951f.js';
import { v as v$1, c as c$1, f } from './commonProperties-fca3036e.js';
import { a } from './Symbol-573a64f6.js';
import './CIMSymbol-15bdb580.js';
import './enumeration-6695a859.js';
import './fieldUtils-240a3b99.js';
import './geometry-2f332a26.js';
import './Polyline-dcdb3782.js';
import './JSONSupport-dce2c67b.js';
import './Color-25ce730a.js';
import './colorUtils-5009883d.js';
import './mathUtils-559a53d9.js';
import './screenUtils-31d073db.js';
import './opacityUtils-dcd94f00.js';
import './aaBoundingBox-b312516d.js';
import './aaBoundingRect-5e1a4e52.js';
import './persistableUrlUtils-5dcd6081.js';
import './Collection-a38e0489.js';
import './collectionUtils-302901c0.js';
import './Portal-5df9f5a7.js';
import './Promise-d2759b2e.js';
import './Clonable-533c7a05.js';
import './Identifiable-d9658370.js';
import './jsonUtils-f3f35e7f.js';
import './mat4-d5df0e58.js';
import './_commonjsHelpers-8dd5c177.js';
import './asyncUtils-96c00c9e.js';
import './PortalItem-fa114dd2.js';
import './assets-99f5c3ee.js';
import './TimeExtent-66b53603.js';
import './unitUtils-a0a11e54.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const L=["atom","xml"],R={base:a,key:"type",typeMap:{"simple-line":m},errorContext:"symbol"},k={base:a,key:"type",typeMap:{"picture-marker":n,"simple-marker":y},errorContext:"symbol"},_={base:a,key:"type",typeMap:{"simple-fill":S},errorContext:"symbol"};let w=class extends(a$1(n$1(c(v(t(O(b))))))){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss";}normalizeCtorArgs(e,o){return "string"==typeof e?{url:e,...o}:e}readFeatureCollections(e,o){return o.featureCollection.layers.forEach((e=>{const o=e.layerDefinition.drawingInfo.renderer.symbol;o&&"esriSFS"===o.type&&o.outline?.style.includes("esriSFS")&&(o.outline.style="esriSLSSolid");})),o.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?Ut(this.url,L)||"GeoRSS":e||""}set title(e){this._set("title",e);}load(e){const o=r(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(w$1).then((()=>this._fetchService(o))).then((e=>{this.read(e,{origin:"service"});}))),Promise.resolve(this)}async hasDataChanged(){const e=await this._fetchService();return this.read(e,{origin:"service",ignoreDefaults:!0}),!0}async _fetchService(e){const t=this.spatialReference,{data:s}=await U(r$1.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:G(t)?void 0:t.wkid??JSON.stringify(t)},signal:e});return s}_hasGeometry(e){return this.featureCollections?.some((o=>o.featureSet?.geometryType===e&&o.featureSet.features?.length>0))??!1}};e([d()],w.prototype,"description",void 0),e([d()],w.prototype,"featureCollections",void 0),e([o("service","featureCollections",["featureCollection.layers"])],w.prototype,"readFeatureCollections",null),e([d({type:M,json:{name:"lookAtExtent"}})],w.prototype,"fullExtent",void 0),e([d(v$1)],w.prototype,"id",void 0),e([d(c$1)],w.prototype,"legendEnabled",void 0),e([d({types:R,json:{write:!0}})],w.prototype,"lineSymbol",void 0),e([d({type:["show","hide"]})],w.prototype,"listMode",void 0),e([d({types:k,json:{write:!0}})],w.prototype,"pointSymbol",void 0),e([d({types:_,json:{write:!0}})],w.prototype,"polygonSymbol",void 0),e([d({type:["GeoRSS"]})],w.prototype,"operationalLayerType",void 0),e([d(f)],w.prototype,"url",void 0),e([d({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],w.prototype,"title",null),e([d({readOnly:!0,json:{read:!1},value:"geo-rss"})],w.prototype,"type",void 0),w=e([n$2("esri.layers.GeoRSSLayer")],w);const F=w;

export default F;
