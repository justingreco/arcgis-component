import { b as c } from './suggestLocations-94082560.js';
export { d as addressToLocations, n as locationToAddress, u as suggestLocations } from './suggestLocations-94082560.js';
import { U } from './request-ac4d8bfb.js';
import { n as n$1, o, e as e$1 } from './utils-d801fb7f.js';
import { e, d, n, b } from './cast-3d5be210.js';
import './geometry-2f332a26.js';
import { l } from './JSONSupport-dce2c67b.js';
import { k } from './Point-edff2a11.js';
import './commonProperties-056be17d.js';
import './Extent-f27111e1.js';
import './Polyline-dcdb3782.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let p=class extends l{constructor(r){super(r),this.addresses=null,this.categories=null,this.countryCode=null,this.locationType=null,this.outSpatialReference=null;}};e([d({type:[Object],json:{read:{reader:r=>r&&r.records?r.records.map((r=>r.attributes)):null},write:{writer:(r,e)=>{const o=[];Array.isArray(r)&&r.forEach((r=>{o.push({attributes:r});})),e.addresses={records:o};}}}})],p.prototype,"addresses",void 0),e([d({type:[String],json:{read:{source:"category",reader:r=>r?r.split(","):null},write:{target:"category",writer:(r,e)=>{e.category=r?r.join(","):null;}}}})],p.prototype,"categories",void 0),e([d({type:String,json:{read:{source:"sourceCountry"},write:{target:"sourceCountry"}}})],p.prototype,"countryCode",void 0),e([d({type:String,json:{write:!0}})],p.prototype,"locationType",void 0),e([d({type:k,json:{read:{source:"outSR"},write:{target:"outSR"}}})],p.prototype,"outSpatialReference",void 0),p=e([n("esri.rest.support.AddressesToLocationsParameters")],p),p.from=b(p);const i$1=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
async function a(s,a,c){a=i$1.from(a);const p=n$1(s),f={...a.toJSON(),f:"json"},m=o({...p.query,...f}),u=e$1(m,c),d=`${p.path}/geocodeAddresses`;return U(d,u).then(i)}function i(o){const{data:r}=o;if(!r)return [];const{locations:t,spatialReference:e}=r;return t?t.map((o=>{const{location:r}=o;return r&&(r.spatialReference=e),c.fromJSON(o)})):[]}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/

export { a as addressesToLocations };
