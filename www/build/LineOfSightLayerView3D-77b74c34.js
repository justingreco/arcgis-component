import { r, a as s, aM as O, H as l$1, aL as h, t, w as p, e, d as d$1, n as n$1 } from './cast-3d5be210.js';
import { l, w } from './reactiveUtils-bd6fe823.js';
import { n } from './LayerView3D-eec9cc5a.js';
import { u } from './LayerView-1ee5d9ed.js';
import './heightModelInfoUtils-4737da37.js';
import './HeightModelInfo-12951268.js';
import './request-ac4d8bfb.js';
import './JSONSupport-dce2c67b.js';
import './unitUtils-a0a11e54.js';
import './Point-edff2a11.js';
import './arcgisLayerUrl-a268a370.js';
import './persistableUrlUtils-5dcd6081.js';
import './Collection-a38e0489.js';
import './HandleOwner-fe336959.js';
import './Handles-54afc0a7.js';
import './Identifiable-d9658370.js';
import './Promise-d2759b2e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const d="analysis-view-handles";let V=class extends(n(u)){constructor(s){super(s),this.type="line-of-sight-3d",this._analysisModules={"line-of-sight":null};}initialize(){this.handles.add(l((()=>this.layer.analysis),(s=>{this._destroyAnalysisView(),r(s)&&this._createAnalysisView(s);}),w),d);}destroy(){this.handles.remove(d),this._destroyAnalysisView();}async whenAnalysisView(){if(r(this.analysisView))return this.analysisView;if(r(this._createAnalysisViewTask))return this._createAnalysisViewTask.promise;throw new s("layerview:no-analysisview-for-analysis","The analysis has not been set on the LineOfSightLayer of this layer view")}isUpdating(){return r(this._createAnalysisViewTask)||r(this.analysisView)&&this.analysisView.updating}_createAnalysisView(s){const i=O((async e=>(this.analysisView=await this._createAnalysisViewPromise(s,e),this._createAnalysisViewTask===i&&(this._createAnalysisViewTask=null),this.analysisView)));this._createAnalysisViewTask=i;}_destroyAnalysisView(){this.analysisView=l$1(this.analysisView),this._createAnalysisViewTask=h(this._createAnalysisViewTask);}async _createAnalysisViewPromise(s$1,e){const a=s$1.type;let t$1=this._analysisModules[a];if(t(t$1)){const s=await this._loadAnalysisModule(a);this._analysisModules[a]=s,t$1=s;}const n=new t$1.default({analysis:s$1,view:this.view,parent:this});if(await n.when(),p(e))throw n.destroy(),new s("layerview:no-analysisview-for-analysis","The analysis has not been added to the LineOfSightLayer of this layer view",{analysis:s$1});return n}_loadAnalysisModule(s){return "line-of-sight"===s?import('./LineOfSightAnalysisView3D-af94cf77.js'):null}};e([d$1()],V.prototype,"type",void 0),e([d$1()],V.prototype,"layer",void 0),e([d$1()],V.prototype,"analysisView",void 0),e([d$1()],V.prototype,"_createAnalysisViewTask",void 0),V=e([n$1("esri.views.3d.layers.LineOfSightLayerView3D")],V);const f=V;

export default f;
