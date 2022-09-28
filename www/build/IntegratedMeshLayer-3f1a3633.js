import { ak as m, e, d, n as n$1, $ as w, r, t as t$1, a as s } from './cast-3d5be210.js';
import { u as u$1 } from './Handles-54afc0a7.js';
import { O } from './MultiOriginJSONSupport-281c1c62.js';
import { a as a$1, U as U$1 } from './reactiveUtils-bd6fe823.js';
import { o } from './Point-edff2a11.js';
import { w as w$1 } from './persistable-5b051b1c.js';
import { b as b$1 } from './Layer-569a1fc8.js';
import { i } from './APIKeyMixin-04df9c0f.js';
import { p } from './ArcGISService-848d76dd.js';
import { c } from './OperationalLayer-e04486e0.js';
import { v } from './PortalLayer-e61e1a42.js';
import { t } from './ScaleRangeLayer-f9a9951f.js';
import { A as A$1, K } from './SceneService-83b1fafe.js';
import { d as d$1 } from './commonProperties-fca3036e.js';
import { s as s$1, l as l$1, u as u$2, m as m$1 } from './I3SLayerDefinitions-ea40561e.js';
import { j as j$1, U } from './request-ac4d8bfb.js';
import { j } from './Collection-a38e0489.js';
import { u } from './JSONSupport-dce2c67b.js';
import { f } from './SceneModification-6700f239.js';
import { i as i$1 } from './persistableUrlUtils-5dcd6081.js';
import './multiOriginJSONSupportUtils-917e4f3f.js';
import './uuid-ac104993.js';
import './geometry-2f332a26.js';
import './Extent-f27111e1.js';
import './Polyline-dcdb3782.js';
import './Identifiable-d9658370.js';
import './Portal-5df9f5a7.js';
import './Promise-d2759b2e.js';
import './arcgisLayerUrl-a268a370.js';
import './asyncUtils-96c00c9e.js';
import './PortalItem-fa114dd2.js';
import './assets-99f5c3ee.js';
import './originUtils-184f7769.js';
import './HeightModelInfo-12951268.js';
import './unitUtils-a0a11e54.js';
import './I3SIndexInfo-c5ab16fa.js';
import './saveUtils-afc71761.js';
import './resourceUtils-cc76b8e8.js';
import './TimeExtent-66b53603.js';
import './fieldUtils-240a3b99.js';
import './opacityUtils-dcd94f00.js';
import './enumeration-6695a859.js';
import './projection-fbd5d346.js';
import './mathUtils-559a53d9.js';
import './mat4-d5df0e58.js';
import './aaBoundingRect-5e1a4e52.js';
import './zscale-0befeff4.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var a;let n=a=class extends(u(j.ofType(f))){constructor(r){super(r),this.url=null;}clone(){return new a({url:this.url,items:this.items.map((r=>r.clone()))})}toJSON(r){return this.toArray().map((o=>o.toJSON(r))).filter((r=>!!r.geometry))}static fromJSON(r,o){const t=new a;for(const e of r)t.add(f.fromJSON(e,o));return t}static async fromUrl(r,t,e){const c={url:j$1(r),origin:"service"},p=await U(r,{responseType:"json",signal:m(e,"signal")}),n=t.toJSON(),l=[];for(const o of p.data)l.push(f.fromJSON({...o,geometry:{...o.geometry,spatialReference:n}},c));return new a({url:r,items:l})}};e([d({type:String})],n.prototype,"url",void 0),n=a=e([n$1("esri.layers.support.SceneModifications")],n);const l=n;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let b=class extends(A$1(p(c(v(t(O(i(b$1)))))))){constructor(...e){super(...e),this._handles=new u$1,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null;}destroy(){this._handles.destroy();}initialize(){this._handles.add(a$1((()=>this.modifications),"after-changes",(()=>this.modifications=this.modifications),U$1));}normalizeCtorArgs(e,t){return "string"==typeof e?{url:e,...t}:e}readModifications(e,t,r){this._modificationsSource={url:i$1(e,r),context:r};}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=m(e,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e);}catch(r){w(r);}if(await this._fetchService(t),r(this._modificationsSource)){const t=await l.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null;}await this._fetchIndexAndUpdateExtent(this.nodePages,t);}beforeSave(){if(!t$1(this._modificationsSource))return this.load().then((()=>{}),(()=>{}))}async saveAs(e,t){return this._debouncedSaveOperations(K.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(K.SAVE,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new s("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new s("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new s("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return ["IntegratedMeshLayer"]}};e([d({type:String,readOnly:!0})],b.prototype,"geometryType",void 0),e([d({type:["show","hide"]})],b.prototype,"listMode",void 0),e([d({type:["IntegratedMeshLayer"]})],b.prototype,"operationalLayerType",void 0),e([d({json:{read:!1},readOnly:!0})],b.prototype,"type",void 0),e([d({type:s$1,readOnly:!0})],b.prototype,"nodePages",void 0),e([d({type:[l$1],readOnly:!0})],b.prototype,"materialDefinitions",void 0),e([d({type:[u$2],readOnly:!0})],b.prototype,"textureSetDefinitions",void 0),e([d({type:[m$1],readOnly:!0})],b.prototype,"geometryDefinitions",void 0),e([d({readOnly:!0})],b.prototype,"serviceUpdateTimeStamp",void 0),e([d({type:l}),w$1({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],b.prototype,"modifications",void 0),e([o(["web-scene","portal-item"],"modifications")],b.prototype,"readModifications",null),e([d(d$1)],b.prototype,"elevationInfo",void 0),e([d({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],b.prototype,"path",void 0),b=e([n$1("esri.layers.IntegratedMeshLayer")],b);const A=b;

export default A;
