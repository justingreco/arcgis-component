import { n as n$1 } from './utils-d801fb7f.js';
import { S, p } from './query-993c240b.js';
import { b } from './Query-1f6c7e43.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
async function n(n,s,m){const p=n$1(n);return S(p,b.from(s),{...m}).then((o=>o.data.count))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
async function s(s,e,m){const n=n$1(s);return p(n,b.from(e),{...m}).then((o=>o.data.objectIds))}

export { n, s };
