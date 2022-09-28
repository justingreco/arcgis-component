import { b as i } from './geometry-2f332a26.js';
import { U as U$1, w as ht, z as z$1, x as mt } from './request-ac4d8bfb.js';
import { br as n$1, a as s$1, t as t$1, bs as o$1, E as E$2, r } from './cast-3d5be210.js';
import { f as fn, r as rn } from './projection-fbd5d346.js';
import { n as c, k as k$1, E as E$1 } from './Point-edff2a11.js';
import { i as i$1 } from './geojson-62adf71f.js';
import { n as n$2, o } from './xmlUtils-d69cd7fe.js';
import { y } from './Field-2973a5cf.js';
import { M as M$1 } from './Extent-f27111e1.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function e(e){return t(e)??n(e)}function n(e){const n=new Date(e).getTime();return Number.isNaN(n)?null:n}function t(e){const n=s.exec(e);if(!n)return null;const t=n.groups,u=+t.year,o=+t.month-1,r=+t.day,f=+(t.hours??"0"),i=+(t.minutes??"0"),d=+(t.seconds??"0");if(f>23)return null;if(i>59)return null;if(d>59)return null;const l=t.ms??"0",c=l?+l.padEnd(3,"0").substring(0,3):0;let a;if(t.isUTC)a=Date.UTC(u,o,r,f,i,d,c);else if(t.offsetSign){const e=+t.offsetHours,n=+t.offsetMinutes;a=6e4*("+"===t.offsetSign?-1:1)*(60*e+n)+Date.UTC(u,o,r,f,i,d,c);}else a=new Date(u,o,r,f,i,d,c).getTime();return Number.isNaN(a)?null:a}const s=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const S="xlink:href",x="2.0.0",C="__esri_wfs_id__",E="wfs-layer:getWFSLayerTypeInfo-error",N="wfs-layer:empty-service",P="wfs-layer:feature-type-not-found",R="wfs-layer:geojson-not-supported",j="wfs-layer:kvp-encoding-not-supported",A="wfs-layer:malformed-json",G="wfs-layer:unknown-geometry-type",k="wfs-layer:unknown-field-type",v="wfs-layer:unsupported-spatial-reference",U="wfs-layer:unsupported-wfs-version";async function D(t,r){const n=I((await U$1(t,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:x,...r?.customParameters},signal:r?.signal})).data);return $(t,n),n}function I(e){const t=te(e);ne(t),ae(t);const r=t.firstElementChild,a=n$1(M(r));return {operations:L(r),get featureTypes(){return Array.from(a())},readFeatureTypes:a}}const O=new Set(["json","application/json","geojson","application/json; subtype=geojson"]);function L(e){let r=!1;const n={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}};if(o(e,{OperationsMetadata:{Operation:e=>{switch(e.getAttribute("name")){case"GetCapabilities":return {DCP:{HTTP:{Get:e=>{n.GetCapabilities.url=e.getAttribute(S);}}}};case"DescribeFeatureType":return {DCP:{HTTP:{Get:e=>{n.DescribeFeatureType.url=e.getAttribute(S);}}}};case"GetFeature":return {DCP:{HTTP:{Get:e=>{n.GetFeature.url=e.getAttribute(S);}}},Parameter:e=>{if("outputFormat"===e.getAttribute("name"))return {AllowedValues:{Value:e=>{const t=e.textContent;O.has(t.toLowerCase())&&(n.GetFeature.outputFormat=t);}}}}}}},Constraint:e=>{switch(e.getAttribute("name")){case"KVPEncoding":return {DefaultValue:e=>{r="true"===e.textContent.toLowerCase();}};case"ImplementsResultPaging":return {DefaultValue:e=>{n.GetFeature.supportsPagination="true"===e.textContent.toLowerCase();}}}}}}),!r)throw new s$1(j,"WFS service doesn't support key/value pair (KVP) encoding");if(t$1(n.GetFeature.outputFormat))throw new s$1(R,"WFS service doesn't support GeoJSON output format");return n}function $(e,t){ht(e)&&(z$1(e,t.operations.DescribeFeatureType.url,!0)&&(t.operations.DescribeFeatureType.url=mt(t.operations.DescribeFeatureType.url)),z$1(e,t.operations.GetFeature.url,!0)&&(t.operations.GetFeature.url=mt(t.operations.GetFeature.url)));}function M(e){return n$2(e,{FeatureTypeList:{FeatureType:e=>{const t={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",supportedSpatialReferences:[]},r=new Set([4326]),n=e=>{const t=parseInt(e.textContent.match(/(?<wkid>\d+$)/i)?.groups?.wkid,10);Number.isNaN(t)||r.add(t);};return o(e,{Name:e=>{const{name:r,prefix:n}=re(e.textContent);t.typeName=`${n}:${r}`,t.name=r,t.namespacePrefix=n,t.namespaceUri=e.lookupNamespaceURI(n);},Abstract:e=>{t.description=e.textContent;},Title:e=>{t.title=e.textContent;},WGS84BoundingBox:e=>{t.extent=V(e);},DefaultSRS:n,DefaultCRS:n,OtherSRS:n,OtherCRS:n}),t.title||(t.title=t.name),t.supportedSpatialReferences.push(...r),t}}})}function V(e){let t,r,n,a;for(const o of e.children)switch(o.localName){case"LowerCorner":[t,r]=o.textContent.split(" ").map((e=>Number.parseFloat(e)));break;case"UpperCorner":[n,a]=o.textContent.split(" ").map((e=>Number.parseFloat(e)));}return {xmin:t,ymin:r,xmax:n,ymax:a,spatialReference:c}}function W(e,t,n){return o$1(e,(e=>n?e.name===t&&e.namespaceUri===n:e.typeName===t||e.name===t))}async function X(e,t,r,n={}){const{featureType:a,extent:o}=await Y(e,t,r,n),{fields:s,geometryType:i,swapXY:p,objectIdField:u,geometryField:c}=await q(e,a.typeName,n);return {url:e.operations.GetCapabilities.url,name:a.name,namespaceUri:a.namespaceUri,fields:s,geometryField:c,geometryType:i,objectIdField:u,spatialReference:n.spatialReference??k$1.WGS84,extent:o,swapXY:p,wfsCapabilities:e,customParameters:n.customParameters}}async function Y(e,r,n,o={}){const{spatialReference:s=k$1.WGS84}=o,i=e.readFeatureTypes(),p=r?W(i,r,n):i.next().value;if(t$1(p))throw r?new s$1(P,`The type '${r}' could not be found in the service`):new s$1(N,"The service is empty");let u=new M$1({...p.extent,spatialReference:s});if(!E$1(s,c))try{await fn(c,s,void 0,o),u=rn(u,c);}catch{throw new s$1(v,"Projection not supported")}return {extent:u,spatialReference:s,featureType:p}}async function q(e,r,n={}){const[o,i]=await E$2([J(e.operations.DescribeFeatureType.url,r,n),_(e,r,n)]);if(o.error||i.error)throw new s$1(E,`An error occurred while getting info about the feature type '${r}'`,{error:o.error||i.error});const{fields:p,errors:u}=o.value,c=o.value.geometryType||i.value.geometryType,l=i.value.swapXY;if(t$1(c))throw new s$1(G,`The geometry type could not be determined for type '${r}`,{typeName:r,geometryType:c,fields:p,errors:u});return {...z(p),geometryType:c,swapXY:l}}function z(e){const t=e.find((e=>"geometry"===e.type));let r=e.find((e=>"oid"===e.type));return e=e.filter((e=>"geometry"!==e.type)),r||(r=new y({name:C,type:"oid",alias:C}),e.unshift(r)),{geometryField:t?.name??null,objectIdField:r.name,fields:e}}async function _(t,r,n={}){let a,o=!1;const[s,i$2]=await Promise.all([K(t.operations.GetFeature.url,r,t.operations.GetFeature.outputFormat,{...n,count:1}),U$1(t.operations.GetFeature.url,{responseType:"text",query:Z(r,void 0,{...n,count:1}),signal:n?.signal})]),p="FeatureCollection"===s.type&&s.features[0]?.geometry;if(p){let e;switch(a=i.fromJSON(i$1(p.type)),p.type){case"Point":e=p.coordinates;break;case"LineString":case"MultiPoint":e=p.coordinates[0];break;case"MultiLineString":case"Polygon":e=p.coordinates[0][0];break;case"MultiPolygon":e=p.coordinates[0][0][0];}const t=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(i$2.data);if(t){const r=e[0].toFixed(3),n=e[1].toFixed(3),a=parseFloat(t[1]).toFixed(3);r===parseFloat(t[2]).toFixed(3)&&n===a&&(o=!0);}}return {geometryType:a,swapXY:o}}async function J(t,r,n){return Q(r,(await U$1(t,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:x,TYPENAME:r,...n?.customParameters},signal:n?.signal})).data)}function Q(e,n){const{name:a}=re(e),s=te(n);ae(s);const i=o$1(n$2(s.firstElementChild,{element:e=>({name:e.getAttribute("name"),typeName:re(e.getAttribute("type")).name})}),(({name:e})=>e===a));if(r(i)){const e=o$1(n$2(s.firstElementChild,{complexType:e=>e}),(e=>e.getAttribute("name")===i.typeName));if(r(e))return B(e)}throw new s$1(P,`Type '${e}' not found in document`,{document:(new XMLSerializer).serializeToString(s)})}const H=new Set(["objectid","fid"]);function B(e){const r=[],n=[];let a;const o$1=n$2(e,{complexContent:{extension:{sequence:{element:e=>e}}}});for(const s of o$1){const o$1=s.getAttribute("name");if(!o$1)continue;let i,p;if(s.hasAttribute("type")?i=re(s.getAttribute("type")).name:o(s,{simpleType:{restriction:e=>(i=re(e.getAttribute("base")).name,{maxLength:e=>{p=+e.getAttribute("value");}})}}),!i)continue;const u="true"===s.getAttribute("nillable");let c=!1;switch(i.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":n.push(new y({name:o$1,alias:o$1,type:"integer",nullable:u}));break;case"float":case"double":case"decimal":n.push(new y({name:o$1,alias:o$1,type:"double",nullable:u}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":n.push(new y({name:o$1,alias:o$1,type:"string",nullable:u,length:p??255}));break;case"datetime":case"date":n.push(new y({name:o$1,alias:o$1,type:"date",nullable:u,length:p??36}));break;case"pointpropertytype":a="point",c=!0;break;case"multipointpropertytype":a="multipoint",c=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":a="polyline",c=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":a="polygon",c=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":c=!0,r.push(new s$1(G,`geometry type '${i}' is not supported`,{type:(new XMLSerializer).serializeToString(e)}));break;default:r.push(new s$1(k,`Unknown field type '${i}'`,{type:(new XMLSerializer).serializeToString(e)}));}c&&n.push(new y({name:o$1,alias:o$1,type:"geometry",nullable:u}));}for(const t of n)if("integer"===t.type&&!t.nullable&&H.has(t.name.toLowerCase())){t.type="oid";break}return {geometryType:a,fields:n,errors:r}}async function K(r,n,a,o){let{data:s}=await U$1(r,{responseType:"text",query:Z(n,a,o),signal:o?.signal});s=s.replace(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{if(o?.dateFields?.length){const e$1=new Set(o.dateFields);return JSON.parse(s,((t,r)=>e$1.has(t)?e(r):r))}return JSON.parse(s)}catch(i){throw new s$1(A,"Error while parsing the response",{response:s,error:i})}}function Z(e,t,r){return {SERVICE:"WFS",REQUEST:"GetFeature",VERSION:x,TYPENAMES:e,OUTPUTFORMAT:t,SRSNAME:"EPSG:4326",STARTINDEX:r?.startIndex,COUNT:r?.count,...r?.customParameters}}async function ee(t,r,n){const a=te((await U$1(t,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:x,TYPENAMES:r,RESULTTYPE:"hits",...n?.customParameters},signal:n?.signal})).data);ae(a);const o=Number.parseFloat(a.firstElementChild.getAttribute("numberMatched"));return Number.isNaN(o)?0:o}function te(e){return (new DOMParser).parseFromString(e.trim(),"text/xml")}function re(e){const[t,r]=e.split(":");return {prefix:r?t:"",name:r??t}}function ne(e){const r=e.firstElementChild.getAttribute("version");if(r&&r!==x)throw new s$1(U,`Unsupported WFS version ${r}. Supported version: ${x}`)}function ae(e){let r,n;if(o(e.firstElementChild,{Exception:e=>(r=e.getAttribute("exceptionCode"),{ExceptionText:e=>{n=e.textContent;}})}),r)throw new s$1(`wfs-layer:${r}`,n)}

export { C, D, K, W, X, z };