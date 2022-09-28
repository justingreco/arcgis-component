import { e, d, n } from './cast-3d5be210.js';
import './geometry-2f332a26.js';
import { j, k } from './Point-edff2a11.js';
import { x } from './WebTileLayer-a83da385.js';
import { S, p } from './TileInfo-3c9e9a6a.js';
import b from './PortalItem-fa114dd2.js';
import { M } from './Extent-f27111e1.js';
import './Polyline-dcdb3782.js';
import './request-ac4d8bfb.js';
import './JSONSupport-dce2c67b.js';
import './MultiOriginJSONSupport-281c1c62.js';
import './Layer-569a1fc8.js';
import './Collection-a38e0489.js';
import './Identifiable-d9658370.js';
import './Portal-5df9f5a7.js';
import './Promise-d2759b2e.js';
import './BlendLayer-7884099a.js';
import './jsonUtils-f3f35e7f.js';
import './colorUtils-5009883d.js';
import './screenUtils-31d073db.js';
import './mat4-d5df0e58.js';
import './mathUtils-559a53d9.js';
import './_commonjsHelpers-8dd5c177.js';
import './OperationalLayer-e04486e0.js';
import './commonProperties-fca3036e.js';
import './TimeExtent-66b53603.js';
import './persistableUrlUtils-5dcd6081.js';
import './fieldUtils-240a3b99.js';
import './unitUtils-a0a11e54.js';
import './opacityUtils-dcd94f00.js';
import './PortalLayer-e61e1a42.js';
import './asyncUtils-96c00c9e.js';
import './RefreshableLayer-496830b9.js';
import './ScaleRangeLayer-f9a9951f.js';
import './aaBoundingRect-5e1a4e52.js';
import './assets-99f5c3ee.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let c=class extends x{constructor(...e){super(...e),this.portalItem=null,this.isReference=null,this.tileInfo=new S({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new j({x:-20037508.342787,y:20037508.342787,spatialReference:k.WebMercator}),spatialReference:k.WebMercator,lods:[new p({level:0,scale:591657527.591555,resolution:156543.033928}),new p({level:1,scale:295828763.795777,resolution:78271.5169639999}),new p({level:2,scale:147914381.897889,resolution:39135.7584820001}),new p({level:3,scale:73957190.948944,resolution:19567.8792409999}),new p({level:4,scale:36978595.474472,resolution:9783.93962049996}),new p({level:5,scale:18489297.737236,resolution:4891.96981024998}),new p({level:6,scale:9244648.868618,resolution:2445.98490512499}),new p({level:7,scale:4622324.434309,resolution:1222.99245256249}),new p({level:8,scale:2311162.217155,resolution:611.49622628138}),new p({level:9,scale:1155581.108577,resolution:305.748113140558}),new p({level:10,scale:577790.554289,resolution:152.874056570411}),new p({level:11,scale:288895.277144,resolution:76.4370282850732}),new p({level:12,scale:144447.638572,resolution:38.2185141425366}),new p({level:13,scale:72223.819286,resolution:19.1092570712683}),new p({level:14,scale:36111.909643,resolution:9.55462853563415}),new p({level:15,scale:18055.954822,resolution:4.77731426794937}),new p({level:16,scale:9027.977411,resolution:2.38865713397468}),new p({level:17,scale:4513.988705,resolution:1.19432856685505}),new p({level:18,scale:2256.994353,resolution:.597164283559817}),new p({level:19,scale:1128.497176,resolution:.298582141647617})]}),this.subDomains=["a","b","c"],this.fullExtent=new M(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,k.WebMercator),this.urlTemplate="https://{subDomain}.tile.openstreetmap.org/{level}/{col}/{row}.png",this.operationalLayerType="OpenStreetMap",this.type="open-street-map",this.copyright="Map data &copy; OpenStreetMap contributors, CC-BY-SA";}get refreshInterval(){return 0}};e([d({type:b,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],c.prototype,"portalItem",void 0),e([d({type:Boolean,json:{read:!1,write:!1}})],c.prototype,"isReference",void 0),e([d({type:Number,readOnly:!0,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],c.prototype,"refreshInterval",null),e([d({type:S,json:{write:!1}})],c.prototype,"tileInfo",void 0),e([d({type:["show","hide"]})],c.prototype,"listMode",void 0),e([d({readOnly:!0,json:{read:!1,write:!1}})],c.prototype,"subDomains",void 0),e([d({readOnly:!0,json:{read:!1,write:!1},nonNullable:!0})],c.prototype,"fullExtent",void 0),e([d({readOnly:!0,json:{read:!1,write:!1}})],c.prototype,"urlTemplate",void 0),e([d({type:["OpenStreetMap"]})],c.prototype,"operationalLayerType",void 0),e([d({json:{read:!1}})],c.prototype,"type",void 0),e([d({json:{read:!1,write:!1}})],c.prototype,"copyright",void 0),e([d({json:{read:!1,write:!1}})],c.prototype,"wmtsInfo",void 0),c=e([n("esri.layers.OpenStreetMapLayer")],c);const u=c;

export default u;
