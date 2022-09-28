import { U } from './request-ac4d8bfb.js';
import { n as n$4, o, e as e$3 } from './utils-d801fb7f.js';
import { e as e$2, d as d$2, n as n$3, b } from './cast-3d5be210.js';
import './geometry-2f332a26.js';
import { l as l$2 } from './JSONSupport-dce2c67b.js';
import { t as t$1 } from './commonProperties-056be17d.js';
import { j, k } from './Point-edff2a11.js';
import { M } from './Extent-f27111e1.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function n$2(n){return n&&"number"==typeof n.x&&"number"==typeof n.y}function e$1(n){return n&&"number"==typeof n.xmin&&"number"==typeof n.ymin&&"number"==typeof n.xmax&&"number"==typeof n.ymax}function r(n){return n?n.clone().normalize():null}function t(n){return n?n.shiftCentralMeridian():null}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let i$1=class extends l$2{constructor(t){super(t),this.address=null,this.attributes=null,this.extent=null,this.location=null,this.score=null;}};e$2([d$2({type:String,json:{write:!0}})],i$1.prototype,"address",void 0),e$2([d$2({type:Object,json:{write:!0}})],i$1.prototype,"attributes",void 0),e$2([d$2({type:M,json:{write:!0}})],i$1.prototype,"extent",void 0),e$2([d$2({type:j,json:{write:!0}})],i$1.prototype,"location",void 0),e$2([d$2({type:Number,json:{write:!0}})],i$1.prototype,"score",void 0),i$1=e$2([n$3("esri.rest.support.AddressCandidate")],i$1);const c$2=i$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let l$1=class extends l$2{constructor(t){super(t),this.address=null,this.apiKey=null,this.categories=null,this.countryCode=null,this.forStorage=null,this.location=null,this.locationType=null,this.magicKey=null,this.maxLocations=null,this.outFields=null,this.outSpatialReference=null,this.searchExtent=null;}};e$2([d$2({type:Object,json:{write:!0}})],l$1.prototype,"address",void 0),e$2([d$2(t$1)],l$1.prototype,"apiKey",void 0),e$2([d$2({type:[String],json:{read:{source:"category",reader:t=>t?t.split(","):null},write:{target:"category",writer:(t,o)=>{o.category=t?t.join(","):null;}}}})],l$1.prototype,"categories",void 0),e$2([d$2({type:String,json:{write:!0}})],l$1.prototype,"countryCode",void 0),e$2([d$2({type:Boolean,json:{write:!0}})],l$1.prototype,"forStorage",void 0),e$2([d$2({type:j,json:{write:{writer:(t,o)=>{o.location=t?t.clone().normalize():null;}}}})],l$1.prototype,"location",void 0),e$2([d$2({type:String,json:{write:!0}})],l$1.prototype,"locationType",void 0),e$2([d$2({type:String,json:{write:!0}})],l$1.prototype,"magicKey",void 0),e$2([d$2({type:Number,json:{write:!0}})],l$1.prototype,"maxLocations",void 0),e$2([d$2({type:[String],json:{write:{writer:(t,o)=>{o.outFields=t?t.join(","):null;}}}})],l$1.prototype,"outFields",void 0),e$2([d$2({type:k,json:{read:{source:"outSR"},write:{target:"outSR"}}})],l$1.prototype,"outSpatialReference",void 0),e$2([d$2({type:M,json:{write:{writer:(t,o)=>{const e=t?t.shiftCentralMeridian():null;o.searchExtent=e;}}}})],l$1.prototype,"searchExtent",void 0),l$1=e$2([n$3("esri.rest.support.AddressToLocationsParameters")],l$1),l$1.from=b(l$1);const c$1=l$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
async function d$1(o$1,n,a){n=c$1.from(n);const d=n$4(o$1),{address:p,...m}=n.toJSON(),u={...p,...m,f:"json"},c=o({...d.query,...u}),j=e$3(c,a),l=`${d.path}/findAddressCandidates`;return U(l,j).then(f)}function f({data:r}){if(!r)return [];const{candidates:t,spatialReference:e}=r;return t?t.map((r=>{if(!r)return;const{extent:t,location:s}=r,i=!t||e$1(t);return n$2(s)&&i?(t&&(t.spatialReference=e),s.spatialReference=e,c$2.fromJSON(r)):void 0})):[]}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let a=class extends l$2{constructor(o){super(o),this.apiKey=null,this.location=null,this.locationType=null,this.outSpatialReference=null;}};e$2([d$2(t$1)],a.prototype,"apiKey",void 0),e$2([d$2({type:j,json:{write:{writer:(o,r)=>{const t=o?o.clone().normalize():null,e=void 0!==t;r.location=e?t:null;}}}})],a.prototype,"location",void 0),e$2([d$2({type:String,json:{write:!0}})],a.prototype,"locationType",void 0),e$2([d$2({type:k,json:{read:{source:"outSR"},write:{target:"outSR"}}})],a.prototype,"outSpatialReference",void 0),a=e$2([n$3("esri.rest.support.LocationToAddressParameters")],a),a.from=b(a);const n$1=a;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
async function n(e,n,i){n=n$1.from(n);const c=n$4(e),m={...n.toJSON(),f:"json"},u=o({...c.query,...m}),f=e$3(u,i),p=`${c.path}/reverseGeocode`;return U(p,f).then(d)}function d({data:r}){if(!r)return;const{address:o,location:t}=r,s=o&&o.Match_addr||"";return c$2.fromJSON({address:s,attributes:o||{},location:t,score:100})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let e=class extends l$2{constructor(o){super(o),this.isCollection=null,this.magicKey=null,this.text=null;}};e$2([d$2({type:Boolean,json:{write:!0}})],e.prototype,"isCollection",void 0),e$2([d$2({type:String,json:{write:!0}})],e.prototype,"magicKey",void 0),e$2([d$2({type:String,json:{write:!0}})],e.prototype,"text",void 0),e=e$2([n$3("esri.rest.support.SuggestionCandidate")],e);const p=e;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let c=class extends l$2{constructor(t){super(t),this.apiKey=null,this.categories=null,this.countryCode=null,this.location=null,this.maxSuggestions=null,this.outSpatialReference=null,this.searchExtent=null,this.text=null;}};e$2([d$2(t$1)],c.prototype,"apiKey",void 0),e$2([d$2({type:[String],json:{read:{source:"category",reader:t=>t?t.split(","):null},write:{target:"category",writer:(t,o)=>{o.category=t?t.join(","):null;}}}})],c.prototype,"categories",void 0),e$2([d$2({type:String,json:{write:!0}})],c.prototype,"countryCode",void 0),e$2([d$2({type:j,json:{write:{writer:(t,o)=>{o.location=t?t.clone().normalize():null;}}}})],c.prototype,"location",void 0),e$2([d$2({type:Number,json:{write:!0}})],c.prototype,"maxSuggestions",void 0),e$2([d$2({type:k,json:{read:{source:"outSR"},write:{target:"outSR"}}})],c.prototype,"outSpatialReference",void 0),e$2([d$2({type:M,json:{write:{writer:(t,o)=>{const e=t?t.shiftCentralMeridian():null;o.searchExtent=JSON.stringify(e);}}}})],c.prototype,"searchExtent",void 0),e$2([d$2({type:String,json:{write:!0}})],c.prototype,"text",void 0),c=e$2([n$3("esri.rest.support.SuggestLocationsParameters")],c),c.from=b(c);const l=c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
async function u(n,u,m){const p=n$4(n),a={...(u=l.from(u)).toJSON(),f:"json"},f=o({...p.query,...a}),g=e$3(f,m),c=`${p.path}/suggest`;return U(c,g).then(i)}function i(t){const{data:o}=t;if(!o)return [];const{suggestions:r}=o;return r?r.map((t=>new p(t))):[]}

export { n$1 as a, c$2 as b, c$1 as c, d$1 as d, l, n, u };
