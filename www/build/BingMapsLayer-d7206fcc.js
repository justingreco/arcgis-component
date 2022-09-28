import { a as s, e, d as d$1, n as n$1, r, t as t$1 } from './cast-3d5be210.js';
import { U, s as s$1 } from './request-ac4d8bfb.js';
import { O } from './MultiOriginJSONSupport-281c1c62.js';
import { k } from './Point-edff2a11.js';
import { M } from './Extent-f27111e1.js';
import { u as u$1 } from './aaBoundingRect-5e1a4e52.js';
import { b as b$1 } from './Layer-569a1fc8.js';
import { a } from './BlendLayer-7884099a.js';
import { n } from './RefreshableLayer-496830b9.js';
import { t } from './ScaleRangeLayer-f9a9951f.js';
import { S } from './TileInfo-3c9e9a6a.js';
import { c } from './OperationalLayer-e04486e0.js';
import './JSONSupport-dce2c67b.js';
import './mathUtils-559a53d9.js';
import './geometry-2f332a26.js';
import './Polyline-dcdb3782.js';
import './Collection-a38e0489.js';
import './Identifiable-d9658370.js';
import './Portal-5df9f5a7.js';
import './Promise-d2759b2e.js';
import './jsonUtils-f3f35e7f.js';
import './colorUtils-5009883d.js';
import './screenUtils-31d073db.js';
import './mat4-d5df0e58.js';
import './_commonjsHelpers-8dd5c177.js';
import './unitUtils-a0a11e54.js';
import './commonProperties-fca3036e.js';
import './TimeExtent-66b53603.js';
import './persistableUrlUtils-5dcd6081.js';
import './fieldUtils-240a3b99.js';
import './opacityUtils-dcd94f00.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const u={id:"0/0/0",level:0,row:0,col:0,extent:null};let y$1=class extends(a(t(n(b$1)))){constructor(){super(...arguments),this.tileInfo=S.create({spatialReference:k.WebMercator,size:256}),this.type="base-tile",this.fullExtent=new M(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,k.WebMercator),this.spatialReference=k.WebMercator;}getTileBounds(e,t,r,o){const s=o||u$1();return u.level=e,u.row=t,u.col=r,u.extent=s,this.tileInfo.updateTileInfo(u),u.extent=null,s}fetchTile(e,r,o,s={}){const{signal:i}=s,l=this.getTileUrl(e,r,o),p={responseType:"image",signal:i,query:{...this.refreshParameters}};return U(l,p).then((e=>e.data))}getTileUrl(){throw new s("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")}};e([d$1({type:S})],y$1.prototype,"tileInfo",void 0),e([d$1({type:["show","hide"]})],y$1.prototype,"listMode",void 0),e([d$1({readOnly:!0,value:"base-tile"})],y$1.prototype,"type",void 0),e([d$1({nonNullable:!0})],y$1.prototype,"fullExtent",void 0),e([d$1()],y$1.prototype,"spatialReference",void 0),y$1=e([n$1("esri.layers.BaseTileLayer")],y$1);const d=y$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const y=new s$1({BingMapsAerial:"aerial",BingMapsRoad:"road",BingMapsHybrid:"hybrid"}),h="https://dev.virtualearth.net";let m=class extends(a(c(O(d)))){constructor(e){super(e),this.type="bing-maps",this.tileInfo=new S({size:[256,256],dpi:96,origin:{x:-20037508.342787,y:20037508.342787,spatialReference:k.WebMercator},spatialReference:k.WebMercator,lods:[{level:1,resolution:78271.5169639999,scale:295828763.795777},{level:2,resolution:39135.7584820001,scale:147914381.897889},{level:3,resolution:19567.8792409999,scale:73957190.948944},{level:4,resolution:9783.93962049996,scale:36978595.474472},{level:5,resolution:4891.96981024998,scale:18489297.737236},{level:6,resolution:2445.98490512499,scale:9244648.868618},{level:7,resolution:1222.99245256249,scale:4622324.434309},{level:8,resolution:611.49622628138,scale:2311162.217155},{level:9,resolution:305.748113140558,scale:1155581.108577},{level:10,resolution:152.874056570411,scale:577790.554289},{level:11,resolution:76.4370282850732,scale:288895.277144},{level:12,resolution:38.2185141425366,scale:144447.638572},{level:13,resolution:19.1092570712683,scale:72223.819286},{level:14,resolution:9.55462853563415,scale:36111.909643},{level:15,resolution:4.77731426794937,scale:18055.954822},{level:16,resolution:2.38865713397468,scale:9027.977411},{level:17,resolution:1.19432856685505,scale:4513.988705},{level:18,resolution:.597164283559817,scale:2256.994353},{level:19,resolution:.298582141647617,scale:1128.497176},{level:20,resolution:.1492910708238085,scale:564.248588}]}),this.key=null,this.style="road",this.culture="en-US",this.region=null,this.portalUrl=null,this.hasAttributionData=!0;}get bingMetadata(){return this._get("bingMetadata")}set bingMetadata(e){this._set("bingMetadata",e);}get copyright(){return r(this.bingMetadata)?this.bingMetadata.copyright:null}get operationalLayerType(){return y.toJSON(this.style)}get bingLogo(){return r(this.bingMetadata)?this.bingMetadata.brandLogoUri:null}load(e){return this.key?this.addResolvingPromise(this._getMetadata()):this.portalUrl?this.addResolvingPromise(this._getPortalBingKey().then((()=>this._getMetadata()))):this.addResolvingPromise(Promise.reject(new s("bingmapslayer:load","Bing layer must have bing key."))),Promise.resolve(this)}getTileUrl(e,t,r){if(!this.loaded||t$1(this.bingMetadata))return null;const o=this.bingMetadata.resourceSets[0].resources[0],a=o.imageUrlSubdomains[t%o.imageUrlSubdomains.length],i=this._getQuadKey(e,t,r);return o.imageUrl.replace("{subdomain}",a).replace("{quadkey}",i)}async fetchAttributionData(){return this.load().then((()=>{if(t$1(this.bingMetadata))return null;return {contributors:this.bingMetadata.resourceSets[0].resources[0].imageryProviders.map((e=>({attribution:e.attribution,coverageAreas:e.coverageAreas.map((e=>({zoomMin:e.zoomMin,zoomMax:e.zoomMax,score:1,bbox:[e.bbox[0],e.bbox[1],e.bbox[2],e.bbox[3]]})))})))}}))}_getMetadata(){const e={road:"roadOnDemand",aerial:"aerial",hybrid:"aerialWithLabelsOnDemand"}[this.style];return U(`${h}/REST/v1/Imagery/Metadata/${e}`,{responseType:"json",query:{include:"ImageryProviders",uriScheme:"https",key:this.key,suppressStatus:!0,output:"json",culture:this.culture,userRegion:this.region}}).then((e=>{const t=e.data;if(200!==t.statusCode)throw new s("bingmapslayer:getmetadata",t.statusDescription);if(this.bingMetadata=t,0===this.bingMetadata.resourceSets.length)throw new s("bingmapslayer:getmetadata","no bing resourcesets");if(0===this.bingMetadata.resourceSets[0].resources.length)throw new s("bingmapslayer:getmetadata","no bing resources")})).catch((e=>{throw new s("bingmapslayer:getmetadata",e.message)}))}_getPortalBingKey(){return U(this.portalUrl,{responseType:"json",authMode:"no-prompt",query:{f:"json"}}).then((e=>{if(!e.data.bingKey)throw new s("bingmapslayer:getportalbingkey","The referenced Portal does not contain a valid bing key");this.key=e.data.bingKey;})).catch((e=>{throw new s("bingmapslayer:getportalbingkey",e.message)}))}_getQuadKey(e,t,r){let o="";for(let a=e;a>0;a--){let e=0;const s=1<<a-1;0!=(r&s)&&(e+=1),0!=(t&s)&&(e+=2),o+=e.toString();}return o}};e([d$1({json:{read:!1,write:!1},value:null})],m.prototype,"bingMetadata",null),e([d$1({json:{read:!1,write:!1},value:"bing-maps",readOnly:!0})],m.prototype,"type",void 0),e([d$1({type:S})],m.prototype,"tileInfo",void 0),e([d$1({type:String,readOnly:!0,json:{read:!1,write:!1}})],m.prototype,"copyright",null),e([d$1({type:String,json:{write:!1,read:!1}})],m.prototype,"key",void 0),e([d$1({type:y.apiValues,nonNullable:!0,json:{read:{source:"layerType",reader:y.read}}})],m.prototype,"style",void 0),e([d$1({type:["BingMapsAerial","BingMapsHybrid","BingMapsRoad"]})],m.prototype,"operationalLayerType",null),e([d$1({type:String,json:{write:!1,read:!1}})],m.prototype,"culture",void 0),e([d$1({type:String,json:{write:!1,read:!1}})],m.prototype,"region",void 0),e([d$1({type:String,json:{write:!0,read:!0}})],m.prototype,"portalUrl",void 0),e([d$1({type:Boolean,json:{write:!1,read:!1}})],m.prototype,"hasAttributionData",void 0),e([d$1({type:String,readOnly:!0})],m.prototype,"bingLogo",null),m=e([n$1("esri.layers.BingMapsLayer")],m);const b=m;

export default b;
