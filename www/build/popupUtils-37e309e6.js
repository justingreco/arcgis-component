import { t, r } from './cast-3d5be210.js';
import { L, y } from './fieldUtils-240a3b99.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
async function d(l,d=l.popupTemplate){if(t(d))return [];const s=await d.getRequiredFields(l.fieldsIndex),{lastEditInfoEnabled:i}=d,{objectIdField:n,typeIdField:u,globalIdField:a,relationships:o}=l;if(s.includes("*"))return ["*"];const r=i?await L(l):[],f=y(l.fieldsIndex,[...s,...r]);return u&&f.push(u),f&&n&&l.fieldsIndex.has(n)&&!f.includes(n)&&f.push(n),f&&a&&l.fieldsIndex.has(a)&&!f.includes(a)&&f.push(a),o&&o.forEach((e=>{const{keyField:p}=e;f&&p&&l.fieldsIndex.has(p)&&!f.includes(p)&&f.push(p);})),f}function s(e,p){return e.popupTemplate?e.popupTemplate:r(p)&&p.defaultPopupTemplateEnabled&&r(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}

export { d, s };
