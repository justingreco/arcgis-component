import { B, P } from './fieldUtils-240a3b99.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function t(e){return "date"===e.type||"esriFieldTypeDate"===e.type}function s(e){return "oid"===e.type||"esriFieldTypeOID"===e.type}function l(e){return "global-id"===e.type||"esriFieldTypeGlobalID"===e.type}class d{constructor(i){if(this.fields=i,this._fieldsMap=new Map,this._dateFieldsSet=new Set,this._numericFieldsSet=new Set,this.dateFields=[],this.numericFields=[],this._requiredFields=null,!i)return;const d=[];for(const n of i){const i=n&&n.name;if(i){const u=r(i);this._fieldsMap.set(i,n),this._fieldsMap.set(u,n),d.push(u),t(n)?(this.dateFields.push(n),this._dateFieldsSet.add(n)):B(n)&&(this._numericFieldsSet.add(n),this.numericFields.push(n)),s(n)||l(n)||(n.editable=null==n.editable||!!n.editable,n.nullable=null==n.nullable||!!n.nullable);}}d.sort(),this.uid=d.join(",");}destroy(){this._fieldsMap.clear();}get requiredFields(){if(!this._requiredFields){this._requiredFields=[];for(const e of this.fields)s(e)||l(e)||e.nullable||void 0!==P(e)||this._requiredFields.push(e);}return this._requiredFields}has(e){return null!=this.get(e)}get(e){return null!=e?this._fieldsMap.get(e)||this._fieldsMap.get(r(e)):void 0}isDateField(e){return this._dateFieldsSet.has(this.get(e))}isNumericField(e){return this._numericFieldsSet.has(this.get(e))}normalizeFieldName(e){const i=this.get(e);if(i)return i.name}}function r(e){return e.toLowerCase().trim()}

export { d };
