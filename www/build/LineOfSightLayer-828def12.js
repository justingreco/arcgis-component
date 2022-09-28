import { y, r, e, d as d$1, n as n$1, t, as as o, h as e$1 } from './cast-3d5be210.js';
import { l as l$1 } from './Clonable-533c7a05.js';
import { s } from './Identifiable-d9658370.js';
import { u as u$1 } from './JSONSupport-dce2c67b.js';
import { f as f$1, u as u$3 } from './LineOfSightAnalysisTarget-7891143a.js';
import { j as j$1 } from './Collection-a38e0489.js';
import { n as n$2, t as t$1 } from './collectionUtils-302901c0.js';
import { l as l$2, w } from './reactiveUtils-bd6fe823.js';
import { u as un } from './projection-fbd5d346.js';
import { u as u$2, h, m } from './aaBoundingBox-b312516d.js';
import { s as s$1 } from './elevationInfoUtils-d6676eee.js';
import { O } from './MultiOriginJSONSupport-281c1c62.js';
import { b } from './Layer-569a1fc8.js';
import { c as c$1 } from './OperationalLayer-e04486e0.js';
import './persistable-5b051b1c.js';
import './multiOriginJSONSupportUtils-917e4f3f.js';
import './request-ac4d8bfb.js';
import './uuid-ac104993.js';
import './persistableUrlUtils-5dcd6081.js';
import './Point-edff2a11.js';
import './commonProperties-fca3036e.js';
import './TimeExtent-66b53603.js';
import './Extent-f27111e1.js';
import './fieldUtils-240a3b99.js';
import './geometry-2f332a26.js';
import './Polyline-dcdb3782.js';
import './unitUtils-a0a11e54.js';
import './opacityUtils-dcd94f00.js';
import './mathUtils-559a53d9.js';
import './mat4-d5df0e58.js';
import './assets-99f5c3ee.js';
import './aaBoundingRect-5e1a4e52.js';
import './zscale-0befeff4.js';
import './Portal-5df9f5a7.js';
import './Promise-d2759b2e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let n=0,l=class extends(u$1(l$1(s(y)))){constructor(e){super(e),this.id=`${Date.now().toString(16)}-analysis-${n++}`,this.title=null;}get parent(){return this._get("parent")}set parent(e){const t=this.parent;if(r(t))switch(t.type){case"line-of-sight":t.removeAnalysis(this);break;case"2d":case"3d":t.analyses.includes(this)&&t.analyses.remove(this);}this._set("parent",e);}get isEditable(){return this.requiredPropertiesForEditing.every(r)}};e([d$1({type:String,constructOnly:!0,clonable:!1})],l.prototype,"id",void 0),e([d$1({type:String})],l.prototype,"title",void 0),e([d$1({constructOnly:!0})],l.prototype,"type",void 0),e([d$1({clonable:!1,value:null})],l.prototype,"parent",null),e([d$1({readOnly:!0})],l.prototype,"extent",void 0),e([d$1({readOnly:!0})],l.prototype,"isEditable",null),e([d$1({readOnly:!0})],l.prototype,"requiredPropertiesForEditing",void 0),e([d$1({readOnly:!0})],l.prototype,"nonEditableMessage",void 0),l=e([n$1("esri.analysis.Analysis")],l);const c=l;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const j=j$1.ofType(f$1);let x=class extends c{constructor(e){super(e),this.type="line-of-sight",this.observer=null,this.extent=null,this.nonEditableMessage="Assign an observer location to the analysis to allow editing.";}initialize(){this.own(l$2((()=>this._computeExtent()),(e=>{(t(e)||t(e.pending))&&this._set("extent",r(e)?e.extent:null);}),w));}get targets(){return this._get("targets")||new j}set targets(e){this._set("targets",n$2(e,this.targets,j));}get spatialReference(){return r(this.observer)&&r(this.observer.position)?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){return [o(this.observer,(e=>e.position))]}async waitComputeExtent(){const e=this._computeExtent();return r(e)?e$1(e.pending):null}_computeExtent(){const e=this.spatialReference;if(t(this.observer)||t(this.observer.position)||t(e))return null;const t$1=e=>"absolute-height"===s$1(e.position,e.elevationInfo),o=this.observer.position,r$1=u$2(o.x,o.y,o.z,o.x,o.y,o.z);for(const i of this.targets)if(r(i.position)){const t=un(i.position,e);if(r(t.pending))return {pending:t.pending,extent:null};if(r(t.geometry)){const{x:e,y:o,z:s}=t.geometry;h(r$1,[e,o,s]);}}const s=m(r$1,e);return t$1(this.observer)&&this.targets.every(t$1)||(s.zmin=null,s.zmax=null),{pending:null,extent:s}}clear(){this.observer=null,this.targets.removeAll();}};e([d$1({type:["line-of-sight"]})],x.prototype,"type",void 0),e([d$1({type:u$3,json:{read:!0,write:!0}})],x.prototype,"observer",void 0),e([d$1({cast:t$1,type:j,nonNullable:!0,json:{read:!0,write:!0}})],x.prototype,"targets",null),e([d$1({value:null,readOnly:!0})],x.prototype,"extent",void 0),e([d$1({readOnly:!0})],x.prototype,"spatialReference",null),e([d$1({readOnly:!0})],x.prototype,"requiredPropertiesForEditing",null),e([d$1({readOnly:!0})],x.prototype,"nonEditableMessage",void 0),x=e([n$1("esri.analysis.LineOfSightAnalysis")],x);const E=x;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const u=j$1.ofType(f$1);let d=class extends(c$1(O(b))){constructor(e){super(e),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new E,this.opacity=1;}initialize(){this.own(l$2((()=>this.analysis),((e,t)=>{r(t)&&t.parent===this&&(t.parent=null),r(e)&&(e.parent=this);}),w));}async load(){return r(this.analysis)&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){return o(this.analysis,(e=>e.observer))}set observer(e){o(this.analysis,(t=>t.observer=e));}get targets(){return r(this.analysis)?this.analysis.targets:null}set targets(e){o(this.analysis,(t=>t.targets=e));}get fullExtent(){return r(this.analysis)?this.analysis.extent:null}get spatialReference(){return r(this.analysis)?this.analysis.spatialReference:null}removeAnalysis(e){this.analysis===e&&(this.analysis=new E);}};e([d$1({json:{read:!1},readOnly:!0})],d.prototype,"type",void 0),e([d$1({type:["LineOfSightLayer"]})],d.prototype,"operationalLayerType",void 0),e([d$1({type:u$3,json:{read:!0,write:{ignoreOrigin:!0}}})],d.prototype,"observer",null),e([d$1({type:u,json:{read:!0,write:{ignoreOrigin:!0}}})],d.prototype,"targets",null),e([d$1({nonNullable:!0,json:{read:!1,write:!1}})],d.prototype,"analysis",void 0),e([d$1({readOnly:!0})],d.prototype,"fullExtent",null),e([d$1({readOnly:!0})],d.prototype,"spatialReference",null),e([d$1({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],d.prototype,"opacity",void 0),e([d$1({type:["show","hide"]})],d.prototype,"listMode",void 0),d=e([n$1("esri.layers.LineOfSightLayer")],d);const f=d;

export default f;
