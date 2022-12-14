import { s as s$1, a as s$3 } from './cast-3d5be210.js';
import { L, S, m } from './number-c5a37d3e.js';
import { s as s$2, B } from './fieldUtils-240a3b99.js';
import { x, _ } from './labelUtils-824fc88a.js';
import './request-ac4d8bfb.js';
import './Promise-d2759b2e.js';
import './geometry-2f332a26.js';
import './Extent-f27111e1.js';
import './Point-edff2a11.js';
import './JSONSupport-dce2c67b.js';
import './Polyline-dcdb3782.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const s=s$1.getLogger("esri.layers.support.labelFormatUtils"),c={type:"simple",evaluate:()=>null},f={getAttribute:(e,r)=>e.field(r)};async function p(r,t,a){if(!r||!r.symbol)return c;const n=r.where,o=x(r),p=n?await import('./WhereClause-ae6d22ff.js'):null;let m;if("arcade"===o.type){const r=await s$2(o.expression,a,t);m={type:"arcade",evaluate(t){try{const e=r.evaluate({$feature:"attributes"in t?r.repurposeFeature(t):t});if(null!=e)return e.toString()}catch(a){s.error(new s$3("arcade-expression-error","Encountered an error when evaluating label expression for feature",{feature:t,expression:o}));}return null},needsHydrationToEvaluate:()=>null==_(o.expression)};}else m={type:"simple",evaluate:e=>o.expression.replace(/{[^}]*}/g,(r=>{const a=r.slice(1,-1),n=t.get(a);if(!n)return r;let o=null;if("attributes"in e){e&&e.attributes&&(o=e.attributes[n.name]);}else o=e.field(n.name);return null==o?"":d(o,n)}))};if(n){let r;try{r=p.WhereClause.create(n,t);}catch(g){return s.error(new s$3("bad-where-clause","Encountered an error when evaluating where clause, ignoring",{where:n,error:g})),c}const a=m.evaluate;m.evaluate=t=>{const o="attributes"in t?void 0:f;try{if(r.testFeature(t,o))return a(t)}catch(g){s.error(new s$3("bad-where-clause","Encountered an error when evaluating where clause for feature",{where:n,feature:t,error:g}));}return null};}return m}function d(e,r){if(null==e)return "";const l=r.domain;if(l)if("codedValue"===l.type||"coded-value"===l.type){const r=e;for(const e of l.codedValues)if(e.code===r)return e.name}else if("range"===l.type){const r=+e,t="range"in l?l.range[0]:l.minValue,a="range"in l?l.range[1]:l.maxValue;if(t<=r&&r<=a)return l.name}let i=e;return "date"===r.type||"esriFieldTypeDate"===r.type?i=L(i,S("short-date")):B(r)&&(i=m(+i)),i||""}

export { p as createLabelFunction, d as formatField };
