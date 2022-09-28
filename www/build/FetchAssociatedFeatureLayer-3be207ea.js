import { U, a as n } from './request-ac4d8bfb.js';
import { t, r, $ as w } from './cast-3d5be210.js';
import { K as Ke } from './FeatureLayer-6922c890.js';
import { B } from './Portal-5df9f5a7.js';
import b from './PortalItem-fa114dd2.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class l{constructor(t,r,e,a){this.parsedUrl=t,this.portalItem=r,this.apiKey=e,this.signal=a,this.rootDocument=null;const s=this.parsedUrl.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i);s&&(this.urlParts={root:s[1],layerId:parseInt(s[2],10)});}async fetch(){if(!this.urlParts)return null;const t$1=this.portalItem??await this._portalItemFromServiceItemId();if(t(t$1))return this._loadFromUrl();const r=await this._findAndLoadRelatedPortalItem(t$1);return t(r)?null:this._loadFeatureLayerFromPortalItem(r)}async fetchPortalItem(){if(!this.urlParts)return null;const t$1=this.portalItem??await this._portalItemFromServiceItemId();return t(t$1)?null:this._findAndLoadRelatedPortalItem(t$1)}async _fetchRootDocument(){if(r(this.rootDocument))return this.rootDocument;if(t(this.urlParts))return this.rootDocument={},{};const t$1={query:{f:"json",token:this.apiKey},responseType:"json",signal:this.signal},s=`${this.urlParts.root}/SceneServer`;try{const e=await U(s,t$1);this.rootDocument=e.data;}catch{this.rootDocument={};}return this.rootDocument}async _fetchServiceOwningPortalUrl(){const e=n?.findServerInfo(this.parsedUrl.path);if(e?.owningSystemUrl)return e.owningSystemUrl;const a=this.parsedUrl.path.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const t=(await U(a,{query:{f:"json"},responseType:"json",signal:this.signal})).data.owningSystemUrl;if(t)return t}catch(i){w(i);}return null}async _findAndLoadRelatedPortalItem(t){try{return (await t.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:this.signal})).find((t=>"Feature Service"===t.type))||null}catch(r){return w(r),null}}async _loadFeatureLayerFromPortalItem(t){await t.load({signal:this.signal});const r=await this._findMatchingAssociatedSublayerUrl(t.url);return new Ke({url:r,portalItem:t}).load({signal:this.signal})}async _loadFromUrl(){const t=await this._findMatchingAssociatedSublayerUrl(`${this.urlParts.root}/FeatureServer`);return new Ke({url:t}).load({signal:this.signal})}async _findMatchingAssociatedSublayerUrl(t){const e=t.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i,"$1"),a={query:{f:"json"},responseType:"json",authMode:"no-prompt",signal:this.signal},s=this.urlParts.layerId,i=this._fetchRootDocument(),o=U(e,a),[n,l]=await Promise.all([o,i]),c=l&&l.layers,h=n.data&&n.data.layers;if(!Array.isArray(h))throw new Error("expected layers array");if(Array.isArray(c))for(let r=0;r<Math.min(c.length,h.length);r++){if(c[r].id===s)return `${e}/${h[r].id}`}else if(s<h.length)return `${e}/${h[s].id}`;throw new Error("could not find matching associated sublayer")}async _portalItemFromServiceItemId(){const t=(await this._fetchRootDocument()).serviceItemId;if(!t)return null;const r$1=new b({id:t,apiKey:this.apiKey}),e=await this._fetchServiceOwningPortalUrl();r(e)&&(r$1.portal=new B({url:e}));try{return r$1.load({signal:this.signal})}catch(i){return w(i),null}}}

export { l };