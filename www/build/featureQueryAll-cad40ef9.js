import { t as t$1 } from './cast-3d5be210.js';
import { b } from './Query-1f6c7e43.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
async function t(r,t,o){t=t.clone(),r.capabilities.query.supportsMaxRecordCountFactor&&(t.maxRecordCountFactor=u(r));const i=a(r),n=r.capabilities.query.supportsPagination;t.start=0,t.num=i;let s=null;for(;;){const a=await r.source.queryFeaturesJSON(t,o);if(t$1(s)?s=a:s.features=s.features.concat(a.features),s.exceededTransferLimit=a.exceededTransferLimit,!n||!a.exceededTransferLimit)break;t.start+=i;}return s}function a(e){return u(e)*o(e)}function o(e){return e.capabilities.query.maxRecordCount||2e3}function u(e){return e.capabilities.query.supportsMaxRecordCountFactor?b.MAX_MAX_RECORD_COUNT_FACTOR:1}

export { a, t };
