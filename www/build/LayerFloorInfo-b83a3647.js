import { e, d, n } from './cast-3d5be210.js';
import { j } from './Collection-a38e0489.js';
import { l as l$1 } from './JSONSupport-dce2c67b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var l;let i=l=class extends l$1{constructor(o){super(o),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new j;}clone(){return new l({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}};e([d({type:String,json:{write:!0}})],i.prototype,"floorField",void 0),e([d({json:{read:!1,write:!1}})],i.prototype,"viewAllMode",void 0),e([d({json:{read:!1,write:!1}})],i.prototype,"viewAllLevelIds",void 0),i=l=e([n("esri.layers.support.LayerFloorInfo")],i);const p=i;

export { p };
