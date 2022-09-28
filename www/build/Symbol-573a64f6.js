import { e, d, n } from './cast-3d5be210.js';
import { l as l$1 } from './Color-25ce730a.js';
import { s } from './request-ac4d8bfb.js';
import { l } from './JSONSupport-dce2c67b.js';
import { o } from './Point-edff2a11.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const p=new s({esriSMS:"simple-marker",esriPMS:"picture-marker",esriSLS:"simple-line",esriSFS:"simple-fill",esriPFS:"picture-fill",esriTS:"text",esriSHD:"shield-label-symbol",PointSymbol3D:"point-3d",LineSymbol3D:"line-3d",PolygonSymbol3D:"polygon-3d",WebStyleSymbol:"web-style",MeshSymbol3D:"mesh-3d",LabelSymbol3D:"label-3d",CIMSymbolReference:"cim"});let c=0,m=class extends l{constructor(r){super(r),this.id="sym"+c++,this.type=null,this.color=new l$1([0,0,0,1]);}readColor(r){return r&&null!=r[0]?[r[0],r[1],r[2],r[3]/255]:r}async collectRequiredFields(r,o){}hash(){return JSON.stringify(this.toJSON())}clone(){}};e([d({type:p.apiValues,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:p.write}}})],m.prototype,"type",void 0),e([d({type:l$1,json:{write:{allowNull:!0}}})],m.prototype,"color",void 0),e([o("color")],m.prototype,"readColor",null),m=e([n("esri.symbols.Symbol")],m);const a=m;

export { a };
