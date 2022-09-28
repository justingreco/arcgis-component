import { e, a } from './asyncUtils-96c00c9e.js';
import { j } from './Collection-a38e0489.js';
import { m } from './Portal-5df9f5a7.js';
import { t } from './cast-3d5be210.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
async function n(o,r){return await o.load(),i(o,r)}async function i(n,i){const c=[],f=(...o)=>{for(const r of o)t(r)||(Array.isArray(r)?f(...r):j.isCollection(r)?r.forEach((o=>f(o))):m.isLoadable(r)&&c.push(r));};i(f);let e$1=null;if(await e(c,(async o=>{!1!==(await a(s(o)?o.loadAll():o.load())).ok||e$1||(e$1=o);})),e$1)throw e$1.loadError;return n}function s(o){return "loadAll"in o&&"function"==typeof o.loadAll}

export { i, n };
