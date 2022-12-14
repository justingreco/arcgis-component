import { e, d, n } from './cast-3d5be210.js';
import './geometry-2f332a26.js';
import { o, k } from './Point-edff2a11.js';
import { z, r } from './TilemapCache-55eaec41.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const s=s=>{let l=class extends s{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null;}readMinScale(e,r){return null!=r.minLOD&&null!=r.maxLOD?e:0}readMaxScale(e,r){return null!=r.minLOD&&null!=r.maxLOD?e:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(e,r){return r.capabilities&&r.capabilities.includes("Tilemap")?new z({layer:this}):null}};return e([d({json:{read:{source:"copyrightText"}}})],l.prototype,"copyright",void 0),e([d()],l.prototype,"minScale",void 0),e([o("service","minScale")],l.prototype,"readMinScale",null),e([d()],l.prototype,"maxScale",void 0),e([o("service","maxScale")],l.prototype,"readMaxScale",null),e([d({type:k})],l.prototype,"spatialReference",void 0),e([d({readOnly:!0})],l.prototype,"supportsBlankTile",null),e([d(r)],l.prototype,"tileInfo",void 0),e([d()],l.prototype,"tilemapCache",void 0),e([o("service","tilemapCache",["capabilities"])],l.prototype,"readTilemapCache",null),e([d()],l.prototype,"version",void 0),l=e([n("esri.layers.mixins.ArcGISCachedService")],l),l};

export { s };
