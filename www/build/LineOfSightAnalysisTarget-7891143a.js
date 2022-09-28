import { t as t$1, y, ay as w, e, d, n as n$1 } from './cast-3d5be210.js';
import { l as l$2, a } from './Clonable-533c7a05.js';
import { u as u$2 } from './JSONSupport-dce2c67b.js';
import { w as w$1 } from './persistable-5b051b1c.js';
import { j } from './Point-edff2a11.js';
import { x } from './commonProperties-fca3036e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function t(e,t){return l$1(e)===l$1(t)}function l$1(t){if(t$1(t))return null;const l=null!=t.layer?t.layer.id:"";let r=null;return r=null!=t.objectId?t.objectId:null!=t.layer&&"objectIdField"in t.layer&&null!=t.layer.objectIdField&&null!=t.attributes?t.attributes[t.layer.objectIdField]:t.uid,null==r?null:`o-${l}-${r}`}const r={json:{write:{writer:n,target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:u$1}}}};function n(t,l){t$1(t)||null==t.layer?.objectIdField||null==t.attributes||(l.feature={layerId:t.layer.id,objectId:t.attributes[t.layer.objectIdField]});}function u$1(e){if(null!=e.layerId&&null!=e.objectId)return {uid:null,layer:{id:e.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:e.objectId}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let f$1=class extends(u$2(l$2(y))){constructor(o){super(o),this.position=null,this.elevationInfo=null,this.feature=null;}equals(o){return w(this.position,o.position)&&w(this.elevationInfo,o.elevationInfo)&&t(this.feature,o.feature)}};e([d({type:j}),w$1()],f$1.prototype,"position",void 0),e([d({type:x}),w$1()],f$1.prototype,"elevationInfo",void 0),e([d(r)],f$1.prototype,"feature",void 0),f$1=e([n$1("esri.analysis.LineOfSightAnalysisObserver")],f$1);const u=f$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let l=class extends(u$2(a)){constructor(o){super(o),this.position=null,this.elevationInfo=null,this.feature=null;}equals(o){return w(this.position,o.position)&&w(this.elevationInfo,o.elevationInfo)&&t(this.feature,o.feature)}};e([d({type:j}),w$1()],l.prototype,"position",void 0),e([d({type:x}),w$1()],l.prototype,"elevationInfo",void 0),e([d(r)],l.prototype,"feature",void 0),l=e([n$1("esri.analysis.LineOfSightAnalysisTarget")],l);const f=l;

export { f, l$1 as l, u };
