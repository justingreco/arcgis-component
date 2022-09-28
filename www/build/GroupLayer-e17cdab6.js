import { r, a2 as e, e as e$1, d, n as n$1 } from './cast-3d5be210.js';
import { p as p$1 } from './CollectionFlattener-9ce72729.js';
import { n } from './loadAll-0acccebb.js';
import { O } from './MultiOriginJSONSupport-281c1c62.js';
import { l, U } from './reactiveUtils-bd6fe823.js';
import { r as r$1 } from './Point-edff2a11.js';
import { b } from './Layer-569a1fc8.js';
import { a } from './BlendLayer-7884099a.js';
import { c } from './OperationalLayer-e04486e0.js';
import { v } from './PortalLayer-e61e1a42.js';
import { t } from './ScaleRangeLayer-f9a9951f.js';
import { p, y, t as t$1 } from './TablesMixin-6752cfb1.js';
import { y as y$1 } from './writeUtils-ab23132f.js';
import './Collection-a38e0489.js';
import './HandleOwner-fe336959.js';
import './Handles-54afc0a7.js';
import './asyncUtils-96c00c9e.js';
import './Portal-5df9f5a7.js';
import './request-ac4d8bfb.js';
import './JSONSupport-dce2c67b.js';
import './Promise-d2759b2e.js';
import './Extent-f27111e1.js';
import './geometry-2f332a26.js';
import './Polyline-dcdb3782.js';
import './Identifiable-d9658370.js';
import './jsonUtils-f3f35e7f.js';
import './colorUtils-5009883d.js';
import './screenUtils-31d073db.js';
import './mat4-d5df0e58.js';
import './mathUtils-559a53d9.js';
import './_commonjsHelpers-8dd5c177.js';
import './commonProperties-fca3036e.js';
import './TimeExtent-66b53603.js';
import './persistableUrlUtils-5dcd6081.js';
import './fieldUtils-240a3b99.js';
import './unitUtils-a0a11e54.js';
import './opacityUtils-dcd94f00.js';
import './PortalItem-fa114dd2.js';
import './assets-99f5c3ee.js';
import './collectionUtils-302901c0.js';
import './layerUtils-160a1a44.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let _=class extends(a(t(c(v(p(y(O(b)))))))){constructor(i){super(i),this._visibilityHandles={},this.allLayers=new p$1({getCollections:()=>[this.layers],getChildrenFunction:i=>"layers"in i?i.layers:null}),this.allTables=t$1(this),this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group";}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.own(l((()=>this.visible),this._onVisibilityChange.bind(this),U));}_writeLayers(i,e,t,r$1){const o=[];if(!i)return o;i.forEach((i=>{const e=y$1(i,r$1.webmap?r$1.webmap.getLayerJSONFromResourceInfo(i):null,r$1);r(e)&&e.layerType&&o.push(e);})),e.layers=o;}set portalItem(i){this._set("portalItem",i);}set visibilityMode(i){const e=this._get("visibilityMode")!==i;this._set("visibilityMode",i),e&&this._enforceVisibility(i,this.visible);}load(i){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]},i)),Promise.resolve(this)}loadAll(){return n(this,(i=>{i(this.layers,this.tables);}))}layerAdded(i){i.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(i):"inherited"===this.visibilityMode&&(i.visible=this.visible),this._visibilityHandles[i.uid]=l((()=>i.visible),(e=>this._onChildVisibilityChange(i,e)),U);}layerRemoved(i){const e=this._visibilityHandles[i.uid];e&&(e.remove(),delete this._visibilityHandles[i.uid]),this._enforceVisibility(this.visibilityMode,this.visible);}_turnOffOtherLayers(i){this.layers.forEach((e=>{e!==i&&(e.visible=!1);}));}_enforceVisibility(i,e$1){if(!e(this).initialized)return;const t=this.layers;let s=t.find((i=>i.visible));switch(i){case"exclusive":t.length&&!s&&(s=t.getItemAt(0),s.visible=!0),this._turnOffOtherLayers(s);break;case"inherited":t.forEach((i=>{i.visible=e$1;}));}}_onVisibilityChange(i){"inherited"===this.visibilityMode&&this.layers.forEach((e=>{e.visible=i;}));}_onChildVisibilityChange(i,e){switch(this.visibilityMode){case"exclusive":e?this._turnOffOtherLayers(i):this._isAnyLayerVisible()||(i.visible=!0);break;case"inherited":i.visible=this.visible;}}_isAnyLayerVisible(){return this.layers.some((i=>i.visible))}};e$1([d({readOnly:!0,dependsOn:[]})],_.prototype,"allLayers",void 0),e$1([d({readOnly:!0})],_.prototype,"allTables",void 0),e$1([d()],_.prototype,"fullExtent",void 0),e$1([d({json:{read:!1,write:{ignoreOrigin:!0}}})],_.prototype,"layers",void 0),e$1([r$1("layers")],_.prototype,"_writeLayers",null),e$1([d({type:["GroupLayer"]})],_.prototype,"operationalLayerType",void 0),e$1([d({json:{origins:{"web-document":{read:!1,write:!1}}}})],_.prototype,"portalItem",null),e$1([d()],_.prototype,"spatialReference",void 0),e$1([d({json:{read:!1},readOnly:!0,value:"group"})],_.prototype,"type",void 0),e$1([d({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{read:!1,write:!1}}}})],_.prototype,"visibilityMode",null),_=e$1([n$1("esri.layers.GroupLayer")],_);const L=_;

export default L;
