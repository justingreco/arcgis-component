import { s, y as y$1, r, t, a as s$1, ak as m, e as e$1, d, I as s$2, n as n$1, al as v, m as m$2, am as y$2 } from './cast-3d5be210.js';
import { a } from './assets-99f5c3ee.js';
import { u } from './JSONSupport-dce2c67b.js';
import { m as m$1, B } from './Portal-5df9f5a7.js';
import { K, _, X, Q } from './request-ac4d8bfb.js';
import { o } from './Point-edff2a11.js';
import { M } from './Extent-f27111e1.js';
import './Promise-d2759b2e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const h=s.getLogger("esri.portal.PortalItemResource");let n=class extends y$1{constructor(t){super(t),this.portalItem=null;}normalizeCtorArgs(t){return t&&t.portalItem&&t.path?{...t,path:this._normalizePath(t.path,t.portalItem)}:t}set path(t){r(t)&&K(t)?h.error("portalitemresource:invalid-path","A portal item resource path must be relative"):this._set("path",t);}_castPath(t){return this._normalizePath(t,this.portalItem)}get url(){return this.portalItem&&this.path?`${this.portalItem.itemUrl}/resources/${this.path}`:null}get itemRelativeUrl(){return this.portalItem&&this.path?`./resources/${this.path}`:null}fetch(t$1="json",r){const o=this.url;if(t(o))throw new s$1("portal-item-resource:fetch","Portal item resource does not refer to a valid item or path");return this.portalItem.portal._request(o,{responseType:t$1,query:{token:this.portalItem.apiKey},signal:m(r,"signal")})}async update(t,r){return (await import('./resourceUtils-cc76b8e8.js')).addOrUpdateResource(this,"update",t,r)}hasPath(){return r(this.path)}_normalizePath(t$1,r$1){return t(t$1)?t$1:(t$1=t$1.replace(/^\/+/,""),r(r$1)&&K(t$1)&&(t$1=_(t$1,r$1.itemUrl)),t$1.replace(/^\/+/,"").replace(/^(\.\/)?resources\//,""))}};e$1([d()],n.prototype,"portalItem",void 0),e$1([d({type:String,value:null})],n.prototype,"path",null),e$1([s$2("path")],n.prototype,"_castPath",null),e$1([d({type:String,readOnly:!0})],n.prototype,"url",null),e$1([d({type:String,readOnly:!0})],n.prototype,"itemRelativeUrl",null),n=e$1([n$1("esri.portal.PortalItemResource")],n);const y=n;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let e=class extends y$1{constructor(r){super(r),this.created=null,this.rating=null;}};e$1([d()],e.prototype,"created",void 0),e$1([d()],e.prototype,"rating",void 0),e=e$1([n$1("esri.portal.PortalRating")],e);const c=e;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var w;let f=w=class extends(u(m$1)){constructor(e){super(e),this.access=null,this.accessInformation=null,this.apiKey=null,this.applicationProxies=null,this.avgRating=null,this.categories=null,this.created=null,this.culture=null,this.description=null,this.extent=null,this.groupCategories=null,this.id=null,this.itemControl=null,this.licenseInfo=null,this.modified=null,this.name=null,this.numComments=null,this.numRatings=null,this.numViews=null,this.owner=null,this.ownerFolder=null,this.portal=null,this.screenshots=null,this.size=null,this.snippet=null,this.sourceJSON=null,this.spatialReference=null,this.tags=null,this.title=null,this.type=null,this.typeKeywords=null,this.url=null;}static from(e){return v(w,e)}destroy(){this.portal=null;}get displayName(){const e=this.type,t=this.typeKeywords||[];let i=e;return "Feature Service"===e||"Feature Collection"===e?i=t.includes("Table")?"Table":t.includes("Route Layer")?"Route Layer":t.includes("Markup")?"Markup":"Feature Layer":"Image Service"===e?i=t.includes("Elevation 3D Layer")?"Elevation Layer":t.includes("Tiled Imagery")?"Tiled Imagery Layer":"Imagery Layer":"Scene Service"===e?i="Scene Layer":"Video Service"===e?i="Video Layer":"Scene Package"===e?i="Scene Layer Package":"Stream Service"===e?i="Feature Layer":"Geoprocessing Service"===e&&this.portal&&this.portal.isPortal?i=t.includes("Web Tool")?"Tool":"Geoprocessing Service":"Geocoding Service"===e?i="Locator":"Geoenrichment Service"===e?i="GeoEnrichment Service":"Microsoft Powerpoint"===e?i="Microsoft PowerPoint":"GeoJson"===e?i="GeoJSON":"Globe Service"===e?i="Globe Layer":"Vector Tile Service"===e?i="Tile Layer":"netCDF"===e?i="NetCDF":"Map Service"===e?i=t.includes("Spatiotemporal")||!t.includes("Hosted Service")&&!t.includes("Tiled")||t.includes("Relational")?"Map Image Layer":"Tile Layer":e&&e.toLowerCase().includes("add in")?i=e.replace(/(add in)/gi,"Add-In"):"datastore catalog service"===e?i="Big Data File Share":"Compact Tile Package"===e?i="Tile Package (tpkx)":"OGCFeatureServer"===e?i="OGC Feature Layer":"web mapping application"===e&&t.includes("configurableApp")&&(i="Instant App"),i}readExtent(e){return e&&e.length?new M(e[0][0],e[0][1],e[1][0],e[1][1]):null}get iconUrl(){const e=this.type&&this.type.toLowerCase()||"",i=this.typeKeywords||[],r="esri/images/portal/",o="16";let s,a$1=!1,n=!1,l=!1,p=!1,c=!1,d=!1;return e.indexOf("service")>0||"feature collection"===e||"kml"===e||"wms"===e||"wmts"===e||"wfs"===e?(a$1=i.includes("Hosted Service"),"feature service"===e||"feature collection"===e||"kml"===e||"wfs"===e?(n=i.includes("Table"),l=i.includes("Route Layer"),p=i.includes("Markup"),c=i.includes("Spatiotemporal"),d=i.includes("UtilityNetwork"),s=c&&n?"spatiotemporaltable":n?"table":l?"routelayer":p?"markup":c?"spatiotemporal":a$1?"featureshosted":d?"utilitynetwork":"features"):s="map service"===e||"wms"===e||"wmts"===e?a$1||i.includes("Tiled")||"wmts"===e?"maptiles":"mapimages":"scene service"===e?i.includes("Line")?"sceneweblayerline":i.includes("3DObject")?"sceneweblayermultipatch":i.includes("Point")?"sceneweblayerpoint":i.includes("IntegratedMesh")?"sceneweblayermesh":i.includes("PointCloud")?"sceneweblayerpointcloud":i.includes("Polygon")?"sceneweblayerpolygon":i.includes("Building")?"sceneweblayerbuilding":i.includes("Voxel")?"sceneweblayervoxel":"sceneweblayer":"image service"===e?i.includes("Elevation 3D Layer")?"elevationlayer":i.includes("Tiled Imagery")?"tiledimagerylayer":"imagery":"stream service"===e?"streamlayer":"video service"===e?"mediaservice":"vector tile service"===e?"vectortile":"datastore catalog service"===e?"datastorecollection":"geocoding service"===e?"geocodeservice":"geoprocessing service"===e?i.includes("Web Tool")&&this.portal&&this.portal.isPortal?"tool":"layers":"geodata service"===e?"geodataservice":"layers"):s="web map"===e||"cityengine web scene"===e?"maps":"web scene"===e?i.includes("ViewingMode-Local")?"webscenelocal":"websceneglobal":"web mapping application"===e&&i.includes("configurableApp")?"instantapps":"web mapping application"===e||"mobile application"===e||"application"===e||"operation view"===e||"desktop application"===e?"apps":"map document"===e||"map package"===e||"published map"===e||"scene document"===e||"globe document"===e||"basemap package"===e||"mobile basemap package"===e||"mobile map package"===e||"project package"===e||"project template"===e||"pro map"===e||"layout"===e||"layer"===e&&i.includes("ArcGIS Pro")||"explorer map"===e&&i.indexOf("Explorer Document")?"mapsgray":"service definition"===e||"csv"===e||"shapefile"===e||"cad drawing"===e||"geojson"===e||"360 vr experience"===e||"netcdf"===e||"administrative report"===e?"datafiles":"explorer add in"===e||"desktop add in"===e||"windows viewer add in"===e||"windows viewer configuration"===e?"appsgray":"arcgis pro add in"===e||"arcgis pro configuration"===e?"addindesktop":"rule package"===e||"file geodatabase"===e||"sqlite geodatabase"===e||"csv collection"===e||"kml collection"===e||"windows mobile package"===e||"map template"===e||"desktop application template"===e||"gml"===e||"arcpad package"===e||"code sample"===e||"form"===e||"document link"===e||"earth configuration"===e||"operations dashboard add in"===e||"rules package"===e||"image"===e||"workflow manager package"===e||"explorer map"===e&&i.includes("Explorer Mapping Application")||i.includes("Document")?"datafilesgray":"network analysis service"===e||"geoprocessing service"===e||"geodata service"===e||"geometry service"===e||"geoprocessing package"===e||"locator package"===e||"geoprocessing sample"===e||"workflow manager service"===e?"toolsgray":"layer"===e||"layer package"===e||"explorer layer"===e?"layersgray":"scene package"===e?"scenepackage":"mobile scene package"===e?"mobilescenepackage":"tile package"===e||"compact tile package"===e?"tilepackage":"task file"===e?"taskfile":"report template"===e?"report-template":"statistical data collection"===e?"statisticaldatacollection":"insights workbook"===e?"workbook":"insights model"===e?"insightsmodel":"insights page"===e?"insightspage":"insights theme"===e?"insightstheme":"hub initiative"===e?"hubinitiative":"hubpage"===e?"hubpage":"hub event"===e?"hubevent":"hub site application"===e?"hubsite":"hub project"===e?"hubproject":"relational database connection"===e?"relationaldatabaseconnection":"big data file share"===e?"datastorecollection":"image collection"===e?"imagecollection":"style"===e?"style":"desktop style"===e?"desktopstyle":"dashboard"===e?"dashboard":"raster function template"===e?"rasterprocessingtemplate":"vector tile package"===e?"vectortilepackage":"ortho mapping project"===e?"orthomappingproject":"ortho mapping template"===e?"orthomappingtemplate":"solution"===e?"solutions":"geopackage"===e?"geopackage":"deep learning package"===e?"deeplearningpackage":"real time analytic"===e?"realtimeanalytics":"big data analytic"===e?"bigdataanalytics":"feed"===e?"feed":"excalibur imagery project"===e?"excaliburimageryproject":"notebook"===e?"notebook":"storymap"===e?"storymap":"survey123 add in"===e?"survey123addin":"mission"===e?"mission":"mission report"===e?"missionreport":"quickcapture project"===e?"quickcaptureproject":"pro report"===e?"proreport":"urban model"===e?"urbanmodel":"web experience"===e?"experiencebuilder":"web experience template"===e?"webexperiencetemplate":"experience builder widget"===e?"experiencebuilderwidget":"experience builder widget package"===e?"experiencebuilderwidgetpackage":"workflow"===e?"workflow":"insights script"===e?"insightsscript":"kernel gateway connection"===e?"kernelgatewayconnection":"hub initiative template"===e?"hubinitiativetemplate":"storymap theme"===e?"storymaptheme":"knowledge graph"===e?"knowledgegraph":"native application"===e?"nativeapp":"native application installer"===e?"nativeappinstaller":"link chart"===e?"linkchart":"investigation"===e?"investigation":"ogcfeatureserver"===e?"features":"pro project"===e?"proproject":"insights workbook package"===e?"insightsworkbookpackage":"apache parquet"===e?"apacheparquet":"notebook code snippets"===e?"notebookcodesnippets":"suitability model"===e?"suitabilitymodel":"esri classifier definition"===e?"classifierdefinition":"esri classification schema"===e?"classificationschema":"insights data engineering workbook"===e?"dataengineeringworkbook":"insights data engineering model"===e?"dataengineeringmodel":"deep learning studio project"===e?"deeplearningproject":"maps",s?a(r+s+o+".png"):null}get isLayer(){return ["Map Service","Feature Service","Feature Collection","Scene Service","Image Service","Stream Service","Vector Tile Service","WMTS","WMS"].includes(this.type)}get itemUrl(){const e=this.get("portal.restUrl");return e&&this.id?`${e}/content/items/${this.id}`:null}get thumbnailUrl(){const e=this.itemUrl,t=this.thumbnail;return e&&t?this.portal._normalizeUrl(`${e}/info/${t}?f=json`):null}get userItemUrl(){const e=this.get("portal.restUrl");if(!e)return null;const t=this.owner||this.get("portal.user.username");if(!t)return null;return `${e}/content/users/${this.ownerFolder?`${t}/${this.ownerFolder}`:t}/items/${this.id}`}load(e){this.portal||(this.portal=B.getDefault());const t=this.portal.load(e).then((()=>this.sourceJSON?this.sourceJSON:this.id&&this.itemUrl?this.portal._request(this.itemUrl,{signal:r(e)?e.signal:null,query:{token:this.apiKey}}):{})).then((e=>{this.sourceJSON=e,this.read(e);}));return this.addResolvingPromise(t),Promise.resolve(this)}addRating(e){const t={method:"post",query:{}};return e instanceof c&&(e=e.rating),isNaN(e)||"number"!=typeof e||(t.query.rating=e),this.portal._request(this.itemUrl+"/addRating",t).then((()=>new c({rating:e,created:new Date})))}clone(){const e={access:this.access,accessInformation:this.accessInformation,applicationProxies:m$2(this.applicationProxies),avgRating:this.avgRating,categories:m$2(this.categories),created:m$2(this.created),culture:this.culture,description:this.description,extent:m$2(this.extent),groupCategories:m$2(this.groupCategories),id:this.id,itemControl:this.itemControl,licenseInfo:this.licenseInfo,modified:m$2(this.modified),name:this.name,numComments:this.numComments,numRatings:this.numRatings,numViews:this.numViews,owner:this.owner,ownerFolder:this.ownerFolder,portal:this.portal,screenshots:m$2(this.screenshots),size:this.size,snippet:this.snippet,spatialReference:this.spatialReference,tags:m$2(this.tags),thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:m$2(this.typeKeywords),url:this.url};return this.loaded&&(e.loadStatus="loaded"),new w({sourceJSON:this.sourceJSON}).set(e)}createPostQuery(){const e=this.toJSON();for(const i of ["tags","typeKeywords","categories"])e[i]&&(e[i]=e[i].join(", "));const{extent:t}=e;return t&&(e.extent=JSON.stringify(t)),e}deleteRating(){return this.portal._request(this.itemUrl+"/deleteRating",{method:"post"}).then((()=>{}))}fetchData(e="json",t){return this.portal._request(this.itemUrl+"/data",{responseType:e,...t,query:{token:this.apiKey}})}fetchRating(e){return this.portal._request(this.itemUrl+"/rating",{query:{token:this.apiKey},...e}).then((e=>null!=e.rating?(e.created=new Date(e.created),new c(e)):null))}fetchRelatedItems(e,t){return this.portal._requestToTypedArray(this.itemUrl+"/relatedItems",{query:{...e,token:this.apiKey},...t},w)}getThumbnailUrl(e){let t=this.thumbnailUrl;return t&&e&&(t+=`&w=${e}`),t}reload(){return this.portal._request(this.itemUrl,{cacheBust:!0,query:{token:this.apiKey}}).then((e=>(this.sourceJSON=e,this.read(e),this)))}update(e){return this.id?this.load().then((()=>this.portal._signIn())).then((()=>{const t=e&&e.data,i={method:"post"};i.query=this.createPostQuery();for(const e in i.query)null===i.query[e]&&(i.query[e]="");return i.query.clearEmptyFields=!0,null!=t&&("string"==typeof t?i.query.text=t:"object"==typeof t&&(i.query.text=JSON.stringify(t))),this.portal._request(`${this.userItemUrl}/update`,i).then((()=>this.reload()))})):Promise.reject(new s$1("portal:item-does-not-exist","The item does not exist yet and cannot be updated"))}updateThumbnail(e){return this.id?this.load().then((()=>this.portal._signIn())).then((()=>{const t=e.thumbnail,i=e.filename,r$1={method:"post"};if("string"==typeof t)X(t)?r$1.query={data:t}:r$1.query={url:Q(t)},r(i)&&(r$1.query.filename=i);else {const e=new FormData;r(i)?e.append("file",t,i):e.append("file",t),r$1.body=e;}return this.portal._request(`${this.userItemUrl}/updateThumbnail`,r$1).then((()=>this.reload()))})):Promise.reject(new s$1("portal:item-does-not-exist","The item does not exist yet and cannot be updated"))}async fetchResources(e={},t){return (await import('./resourceUtils-cc76b8e8.js')).fetchResources(this,e,t)}async addResource(e,t,i){const r=await import('./resourceUtils-cc76b8e8.js');return e.portalItem=this,r.addOrUpdateResource(e,"add",t,i)}async removeResource(e,t){const r=await import('./resourceUtils-cc76b8e8.js');if(e.portalItem&&e.portalItem.itemUrl!==this.itemUrl)throw new s$1("removeresource:portal-item-mismatch","The portal item associated with the provided resource does not match the item");return r.removeResource(this,e,t)}async removeAllResources(e){return (await import('./resourceUtils-cc76b8e8.js')).removeAllResources(this,e)}resourceFromPath(e){return new y({portalItem:this,path:e})}toJSON(){const e=this.extent,t={accessInformation:this.accessInformation,categories:m$2(this.categories),created:this.created&&this.created.getTime(),description:this.description,extent:e&&[[e.xmin,e.ymin],[e.xmax,e.ymax]],id:this.id,licenseInfo:this.licenseInfo,modified:this.modified&&this.modified.getTime(),name:this.name,owner:this.owner,ownerFolder:this.ownerFolder,snippet:this.snippet,spatialReference:this.spatialReference,tags:m$2(this.tags),thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:m$2(this.typeKeywords),url:this.url};return y$2(t)}static fromJSON(e){if(!e)return null;if(e.declaredClass)throw new Error("JSON object is already hydrated");return new w({sourceJSON:e})}_getPostQuery(){const e=this.toJSON();for(const t in e)"tags"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"typeKeywords"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"extent"===t&&e[t]&&(e[t]=JSON.stringify(e[t]));return e}};e$1([d({type:["private","shared","org","public"]})],f.prototype,"access",void 0),e$1([d()],f.prototype,"accessInformation",void 0),e$1([d({type:String})],f.prototype,"apiKey",void 0),e$1([d({json:{read:{source:"appProxies"}}})],f.prototype,"applicationProxies",void 0),e$1([d()],f.prototype,"avgRating",void 0),e$1([d()],f.prototype,"categories",void 0),e$1([d({type:Date})],f.prototype,"created",void 0),e$1([d()],f.prototype,"culture",void 0),e$1([d()],f.prototype,"description",void 0),e$1([d({readOnly:!0})],f.prototype,"displayName",null),e$1([d({type:M})],f.prototype,"extent",void 0),e$1([o("extent")],f.prototype,"readExtent",null),e$1([d()],f.prototype,"groupCategories",void 0),e$1([d({readOnly:!0})],f.prototype,"iconUrl",null),e$1([d()],f.prototype,"id",void 0),e$1([d({readOnly:!0})],f.prototype,"isLayer",null),e$1([d()],f.prototype,"itemControl",void 0),e$1([d({readOnly:!0})],f.prototype,"itemUrl",null),e$1([d()],f.prototype,"licenseInfo",void 0),e$1([d({type:Date})],f.prototype,"modified",void 0),e$1([d()],f.prototype,"name",void 0),e$1([d()],f.prototype,"numComments",void 0),e$1([d()],f.prototype,"numRatings",void 0),e$1([d()],f.prototype,"numViews",void 0),e$1([d()],f.prototype,"owner",void 0),e$1([d()],f.prototype,"ownerFolder",void 0),e$1([d({type:B})],f.prototype,"portal",void 0),e$1([d()],f.prototype,"screenshots",void 0),e$1([d()],f.prototype,"size",void 0),e$1([d()],f.prototype,"snippet",void 0),e$1([d()],f.prototype,"sourceJSON",void 0),e$1([d({type:String})],f.prototype,"spatialReference",void 0),e$1([d()],f.prototype,"tags",void 0),e$1([d()],f.prototype,"thumbnail",void 0),e$1([d({readOnly:!0})],f.prototype,"thumbnailUrl",null),e$1([d()],f.prototype,"title",void 0),e$1([d()],f.prototype,"type",void 0),e$1([d()],f.prototype,"typeKeywords",void 0),e$1([d({type:String,json:{read(e,t){if("KML"!==t.type)return e;const i=this.portal?.restUrl;return e||(e=i&&this.id?`${i}/content/items/${this.id}/data`:null),e}}})],f.prototype,"url",void 0),e$1([d({readOnly:!0})],f.prototype,"userItemUrl",null),f=w=e$1([n$1("esri.portal.PortalItem")],f);const b=f;

export default b;