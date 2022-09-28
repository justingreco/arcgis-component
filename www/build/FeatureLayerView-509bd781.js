import { s, g as r, r as r$1, E, t, a as s$1, e, d as d$1, n } from './cast-3d5be210.js';
import { l, w, a } from './reactiveUtils-bd6fe823.js';
import { g as g$1 } from './commonProperties-fca3036e.js';
import { w as w$1, y as y$1 } from './labelingInfo-6e0c44d1.js';
import { y, I, a as a$1, l as j, A as A$1, V, N, _, g, F, e as de } from './fieldUtils-240a3b99.js';
import { o } from './floorFilterUtils-904cfc06.js';
import { b } from './Query-1f6c7e43.js';
import { s as s$2, d } from './popupUtils-37e309e6.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const O=s.getLogger("esri.views.layers.FeatureLayerView"),A=i=>{let A=class extends i{constructor(...e){super(...e),this._updatingRequiredFieldsPromise=null,this.filter=null,this.timeExtent=null,this.layer=null,this.requiredFields=[],this.view=null;}initialize(){this.handles.add([l((()=>{const e=this.layer;return [e?.elevationInfo?.featureExpressionInfo,e?.displayField,e?.timeInfo,e&&"renderer"in e&&e.renderer,e&&"labelingInfo"in e&&e.labelingInfo,e&&"floorInfo"in e&&e.floorInfo,this.filter,this.featureEffect,this.timeExtent]}),(()=>this._handleRequiredFieldsChange()),w),a((()=>this.view?.floors),"change",(()=>this._handleRequiredFieldsChange())),a((()=>{const e=this.layer;return e&&"sublayers"in e&&e.sublayers}),"change",(()=>this._handleRequiredFieldsChange()))]);}get availableFields(){const{layer:e,layer:{fieldsIndex:t},requiredFields:r}=this;return "outFields"in e&&e.outFields?y(t,[...I(t,e.outFields),...r]):y(t,r)}set effect(e){r(O,"effect",{replacement:"featureEffect",version:"4.22"}),this.featureEffect=e;}get effect(){return r(O,"effect",{replacement:"featureEffect",version:"4.22"}),this.featureEffect}get featureEffect(){return this.layer&&"featureEffect"in this.layer?this.layer.featureEffect:null}set featureEffect(e){void 0!==e?this._override("featureEffect",e):this._clearOverride("featureEffect");}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(e){O.error("#maximumNumberOfFeatures=","Setting maximum number of features is not supported");}get maximumNumberOfFeaturesExceeded(){return !1}highlight(e){throw new Error("missing implementation")}createQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference},t=r$1(this.filter)?this.filter.createQuery(e):new b(e);if("feature"===this.layer.type){const e=o(this);r$1(e)&&(t.where=t.where?`(${t.where}) AND (${e})`:e);}return r$1(this.timeExtent)&&(t.timeExtent=r$1(t.timeExtent)?t.timeExtent.intersection(this.timeExtent):this.timeExtent.clone()),t}queryFeatures(e,t){throw new Error("missing implementation")}queryObjectIds(e,t){throw new Error("missing implementation")}queryFeatureCount(e,t){throw new Error("missing implementation")}queryExtent(e,t){throw new Error("missing implementation")}async fetchPopupFeatures(e,t){const r=this.validateFetchPopupFeatures(t);if(r)throw r;return this.fetchClientPopupFeatures(t)}_loadArcadeModules(e){if(e.get("expressionInfos.length")||Array.isArray(e.content)&&e.content.some((e=>"expression"===e.type)))return a$1()}_handleRequiredFieldsChange(){const e=this._updateRequiredFields();this._set("_updatingRequiredFieldsPromise",e),e.then((()=>{this._updatingRequiredFieldsPromise===e&&this._set("_updatingRequiredFieldsPromise",null);}));}async _updateRequiredFields(){if(!this.layer||!this.view)return;const e="3d"===this.view.type,{layer:t,layer:{fieldsIndex:r,objectIdField:i}}=this,o="renderer"in t&&t.renderer,a="orderBy"in t&&t.orderBy,l=t.featureReduction,u=new Set,p=await E([o?o.collectRequiredFields(u,r):null,j(u,t),e?A$1(u,t):null,r$1(this.filter)?V(u,t,this.filter):null,r$1(this.featureEffect)?V(u,t,this.featureEffect.filter):null,l?N(u,t,l):null,a?_(u,t,a):null]);if(t.timeInfo&&this.timeExtent&&g(u,t.fieldsIndex,[t.timeInfo.startField,t.timeInfo.endField]),"feature"===t.type&&t.floorInfo&&g(u,t.fieldsIndex,[t.floorInfo.floorField]),"subtype-group"===t.type){F(u,r,t.subtypeField);const e=t.sublayers.map((e=>Promise.all([e.renderer?.collectRequiredFields(u,r),j(u,e)])));await E(e);}for(const s of p)s.error&&O.error(s.error);F(u,r,i),e&&"displayField"in t&&t.displayField&&F(u,r,t.displayField);const f=Array.from(u).sort();this._set("requiredFields",f);}validateFetchPopupFeatures(e){if(t(e))return null;for(const t of e.clientGraphics){const i=t.layer;if("popupEnabled"in i&&!i.popupEnabled)return new s$1("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:i});if(t.isAggregate){if(!(i.featureReduction&&"popupTemplate"in i.featureReduction&&i.featureReduction.popupEnabled&&i.featureReduction.popupTemplate))return new s$1("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:i})}else if("popupTemplate"in i){if(!s$2(i,e))return new s$1("featurelayerview:fetchPopupFeatures","Layer does not define a popup template",{layer:i})}}}async fetchClientPopupFeatures(e){const t$1=r$1(e)?e.clientGraphics:null;if(!t$1||0===t$1.length)return [];const r=new Array(t$1.length),i=new Map,n=await this.createPopupQuery(e);for(let s=0;s<t$1.length;s++){const a=t$1[s];if(a.isAggregate){r[s]=a;continue}const{layer:l}=a;if(!("popupEnabled"in l))continue;const u=I(this.layer.fieldsIndex,n.outFields),p=s$2(l,e);if(t(p))continue;const f=await this._loadArcadeModules(p);f&&f.arcadeUtils.hasGeometryOperations(p)||!de(u,a)?i.set(a.getObjectId(),s):r[s]=a;}if("stream"===this.layer.type||0===i.size)return r.filter(Boolean);n.objectIds=Array.from(i.keys());try{const e=await this.layer.queryFeatures(n);for(const t of e.features){r[i.get(t.getObjectId())]=t;}}catch{}return r.filter(Boolean)}async createPopupQuery(e){const t$1=this.layer.createQuery(),r=new Set;let i=!1;const n=r$1(e)&&e.clientGraphics?e.clientGraphics.map((e=>e.layer)):[this.layer];for(const s of n){if(!("popupEnabled"in s))continue;const t$1=s$2(s,e);if(t(t$1))continue;const n=await this._loadArcadeModules(t$1),a=n&&n.arcadeUtils.hasGeometryOperations(t$1);i=!("point"!==this.layer.geometryType&&!a);const l=await d(this.layer,t$1);for(const e of l)r.add(e);}if(t$1.returnGeometry=i,t$1.returnZ=i,t$1.returnM=i,t$1.outFields=Array.from(r),t$1.outSpatialReference=this.view.spatialReference,"feature"===this.layer.type){const e=o(this);r$1(e)&&(t$1.where=t$1.where?`(${t$1.where}) AND (${e})`:e);}return t$1}canResume(){return !!super.canResume()&&(!r$1(this.timeExtent)||!this.timeExtent.isEmpty)}};return e([d$1()],A.prototype,"_updatingRequiredFieldsPromise",void 0),e([d$1({readOnly:!0})],A.prototype,"availableFields",null),e([d$1()],A.prototype,"effect",null),e([d$1({type:w$1})],A.prototype,"featureEffect",null),e([d$1({type:y$1})],A.prototype,"filter",void 0),e([d$1(g$1)],A.prototype,"timeExtent",void 0),e([d$1()],A.prototype,"layer",void 0),e([d$1({type:Number})],A.prototype,"maximumNumberOfFeatures",null),e([d$1({readOnly:!0,type:Boolean})],A.prototype,"maximumNumberOfFeaturesExceeded",null),e([d$1({readOnly:!0})],A.prototype,"requiredFields",void 0),e([d$1()],A.prototype,"suspended",void 0),e([d$1()],A.prototype,"view",void 0),A=e([n("esri.views.layers.FeatureLayerView")],A),A};

export { A };