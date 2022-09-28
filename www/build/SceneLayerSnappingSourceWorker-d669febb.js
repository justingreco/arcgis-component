import { X as f, t, ag as c, e, n as n$1 } from './cast-3d5be210.js';
import { n, aa as g, u, x, g as t$1 } from './mathUtils-559a53d9.js';
import { v, l, d } from './lineSegment-99193ade.js';
import { _, E as E$1, Q } from './sphere-4710475c.js';
import { E as E$2 } from './QueryEngineResult-4211c0f6.js';
import { G } from './Octree-38bc90df.js';
import { y as y$1 } from './EdgeProcessingWorker-87151cf6.js';
import './vectorStacks-3fa8ee55.js';
import './byteSizeEstimations-5d50d6ff.js';
import './quatf64-06b7eadd.js';
import './mat4f64-ef2c1a38.js';
import './vec2f64-2956001b.js';
import './vec4f64-011248e0.js';
import './mat4-d5df0e58.js';
import './Polyline-dcdb3782.js';
import './Point-edff2a11.js';
import './JSONSupport-dce2c67b.js';
import './Extent-f27111e1.js';
import './quantizationUtils-65995723.js';
import './geometry-2f332a26.js';
import './request-ac4d8bfb.js';
import './ItemCache-1f62ab56.js';
import './MemCache-04cdd0cd.js';
import './WhereClause-ae6d22ff.js';
import './_commonjsHelpers-8dd5c177.js';
import './utils-8ef1ee04.js';
import './generateRendererUtils-9d353c6e.js';
import './colorRamps-e3d9340f.js';
import './Color-25ce730a.js';
import './colorUtils-5009883d.js';
import './enumeration-6695a859.js';
import './Symbol-573a64f6.js';
import './projectionSupport-d3b04744.js';
import './projection-fbd5d346.js';
import './unitUtils-a0a11e54.js';
import './Collection-a38e0489.js';
import './assets-99f5c3ee.js';
import './aaBoundingRect-5e1a4e52.js';
import './zscale-0befeff4.js';
import './json-063a6f95.js';
import './utils-208ed644.js';
import './normalizeUtils-d37dc597.js';
import './centroid-a69e0a54.js';
import './featureConversionUtils-3f60eb15.js';
import './OptimizedFeature-a0dba562.js';
import './OptimizedFeatureSet-261a115b.js';
import './fieldUtils-240a3b99.js';
import './frustum-95850b85.js';
import './Util-73f4ac53.js';
import './deduplicate-3951315a.js';
import './InterleavedLayout-fe763b01.js';
import './BufferView-a9ba6e5d.js';
import './vec2-4f9a494f.js';
import './types-4487be8c.js';
import './VertexAttribute-ef09ced9.js';
import './enums-4770f29d.js';
import './VertexElementDescriptor-3b53aa99.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let j=class{constructor(){this._idToComponent=new Map,this._components=new G((e=>e.bounds)),this._edges=new G((e=>e.bounds)),this._tmpLineSegment=v(),this._tmpP1=n(),this._tmpP2=n(),this._tmpP3=n(),this.remoteClient=null;}async fetchCandidates(e,t){await Promise.resolve(),f(t),await this._ensureEdgeLocations(e,t);const s=[];return this._edges.forEachNeighbor((t=>this._addCandidates(e,t,s)),e.bounds),{result:{candidates:s}}}async _ensureEdgeLocations(e,o){const n=[];if(this._components.forEachNeighbor((e=>{if(t(e.info)){const{id:t,uid:s}=e;n.push({id:t,uid:s});}}),e.bounds),!n.length)return;const i={components:n},r=await this.remoteClient.invoke("fetchAllEdgeLocations",i,c(o,{}));for(const t of r.components)this._setFetchEdgeLocations(t);}async add(e){const t=new C(e.id,e.bounds);return this._idToComponent.set(t.id,t),this._components.add([t]),{result:{}}}async remove(e){const t=this._idToComponent.get(e.id);if(t){const e=[];this._edges.forEachNeighbor((s=>{s.component===t&&e.push(s);}),t.bounds),this._edges.remove(e),this._components.remove([t]),this._idToComponent.delete(t.id);}return {result:{}}}_setFetchEdgeLocations(e){const s=this._idToComponent.get(e.id);if(t(s)||e.uid!==s.uid)return;const o=y$1.createView(e.locations),n$1=new Array(o.count),a=n(),p=n();for(let t=0;t<o.count;t++){const c=_(),u$1=E$1(c);o.position0.getVec(t,a),o.position1.getVec(t,p),g(u$1,u$1,a,.5),g(u$1,u$1,p,.5),u(u$1,u$1,e.origin),c[3]=x(u$1,a);const m=new E(s,t,c);n$1[t]=m;}this._edges.add(n$1);const{objectIds:u$1,origin:m}=e;s.info={locations:o,objectIds:u$1,origin:m};}_addCandidates(e,t,s){const{locations:o,origin:n,objectIds:i}=t.component.info,d=o.position0.getVec(t.index,this._tmpP1),c=o.position1.getVec(t.index,this._tmpP2);u(d,d,n),u(c,c,n);const a=i[o.componentIndex.get(t.index)];this._addEdgeCandidate(e,a,d,c,s),this._addVertexCandidate(e,a,d,s),this._addVertexCandidate(e,a,c,s);}_addEdgeCandidate(e,t,s,o,n){if(!(e.types&E$2.EDGE))return;const i=E$1(e.bounds),r=l(s,o,this._tmpLineSegment),c=d(r,i,this._tmpP3);if(!Q(e.bounds,c))return null;n.push({type:"edge",objectId:t,target:t$1(c),distance:x(i,c),start:t$1(s),end:t$1(o)});}_addVertexCandidate(e,t,s,o){if(!(e.types&E$2.VERTEX))return;const n=E$1(e.bounds);if(!Q(e.bounds,s))return null;o.push({type:"vertex",objectId:t,target:t$1(s),distance:x(n,s)});}};function y(){return new j}j=e([n$1("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],j);class C{constructor(e,t){this.id=e,this.bounds=t,this.info=null,this.uid=++C.uid;}}C.uid=0;class E{constructor(e,t,s){this.component=e,this.index=t,this.bounds=s;}}

export default y;
export { j as SceneLayerSnappingSourceWorker };
