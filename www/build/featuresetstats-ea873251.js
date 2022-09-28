import { L, I, E, J, G, w } from './languageUtils-d37e9fbb.js';
import { n as l } from './arcadeUtils-d51c63c3.js';
import { WhereClause as m } from './WhereClause-ae6d22ff.js';
import './Point-edff2a11.js';
import './cast-3d5be210.js';
import './JSONSupport-dce2c67b.js';
import './Extent-f27111e1.js';
import './Polyline-dcdb3782.js';
import './number-3228daf9.js';
import './Promise-d2759b2e.js';
import './Field-2973a5cf.js';
import './request-ac4d8bfb.js';
import './enumeration-6695a859.js';
import './fieldType-eb0b42e4.js';
import './geometry-2f332a26.js';
import './featureConversionUtils-3f60eb15.js';
import './OptimizedFeature-a0dba562.js';
import './OptimizedFeatureSet-261a115b.js';
import './unitUtils-a0a11e54.js';
import './sizeVariableUtils-5330814d.js';
import './_commonjsHelpers-8dd5c177.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
async function o(n,e,o,f,l$1,d){if(1===f.length){if(L(f[0]))return l(n,f[0],I(f[1],-1));if(E(f[0]))return l(n,f[0].toArray(),I(f[1],-1))}else if(2===f.length){if(L(f[0]))return l(n,f[0],I(f[1],-1));if(E(f[0]))return l(n,f[0].toArray(),I(f[1],-1));if(J(f[0])){const t=await f[0].load(),r=await s(m.create(f[1],t.getFieldsIndex()),d,l$1);return f[0].calculateStatistic(n,r,I(f[2],1e3),e.abortSignal)}}else if(3===f.length&&J(f[0])){const t=await f[0].load(),r=await s(m.create(f[1],t.getFieldsIndex()),d,l$1);return f[0].calculateStatistic(n,r,I(f[2],1e3),e.abortSignal)}return l(n,f,-1)}async function s(n,t,r){const e=n.getVariables();if(e.length>0){const a=[];for(let n=0;n<e.length;n++){const i={name:e[n]};a.push(await t.evaluateIdentifier(r,i));}const i={};for(let n=0;n<e.length;n++)i[e[n]]=a[n];return n.parameters=i,n}return n}function f(i){"async"===i.mode&&(i.functions.stdev=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return o("stdev",t,r,e,n,i)}))},i.functions.variance=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return o("variance",t,r,e,n,i)}))},i.functions.average=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return o("mean",t,r,e,n,i)}))},i.functions.mean=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return o("mean",t,r,e,n,i)}))},i.functions.sum=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return o("sum",t,r,e,n,i)}))},i.functions.min=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return o("min",t,r,e,n,i)}))},i.functions.max=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return o("max",t,r,e,n,i)}))},i.functions.count=function(u,c){return i.standardFunctionAsync(u,c,(function(i,u,c){if(G(c,1,1),J(c[0]))return c[0].count(i.abortSignal);if(L(c[0])||w(c[0]))return c[0].length;if(E(c[0]))return c[0].length();throw new Error("Invalid Parameters for Count")}))});}

export { f as registerFunctions };
