import { s as s$1 } from './cast-3d5be210.js';
import { y } from './Field-2973a5cf.js';
import { d } from './FieldsIndex-ea481e79.js';
import { y as y$1 } from './fieldUtils-240a3b99.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const s=s$1.getLogger("esri.layers.support.fieldProperties");function l(){return {fields:{type:[y],value:null},fieldsIndex:{readOnly:!0,get(){return new d(this.fields||[])}},outFields:{type:[String],json:{read:!1},set:function(e){this._userOutFields=e,this.notifyChange("outFields");},get:function(){const e=this._userOutFields;if(!e||!e.length)return null;if(e.includes("*"))return ["*"];if(!this.fields)return e;for(const i of e){this.fieldsIndex.has(i)||s.error("field-attributes-layer:invalid-field",`Invalid field ${i} found in outFields`,{layer:this,outFields:e});}return y$1(this.fieldsIndex,e)}}}}

export { l };
