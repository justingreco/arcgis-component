import { T, x as m$1, q, J as g$1, e as e$1, n as n$2, y } from './cast-3d5be210.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let n$1,o;const e=globalThis.esriConfig?.locale??globalThis.dojoConfig?.locale;function t(){return e??globalThis.navigator?.language??"en"}function l(){return void 0===o&&(o=t()),o}function c(o){n$1=o||void 0,h$1();}function i(n=l()){return /^([a-zA-Z]{2,3})(?:[_\-]\w+)*$/.exec(n)?.[1].toLowerCase()}const r={he:!0,ar:!0};function a(n=l()){const o=i(n);return void 0!==o&&(r[o]||!1)}const u=[];function s(n){return u.push(n),{remove(){u.splice(u.indexOf(n),1);}}}const f=[];function g(n){return f.push(n),{remove(){u.splice(f.indexOf(n),1);}}}function h$1(){const e=n$1??t();o!==e&&(o=e,[...f].forEach((n=>{n.call(null,e);})),[...u].forEach((n=>{n.call(null,e);})));}globalThis.addEventListener?.("languagechange",h$1);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var h;!function(s){s[s.PENDING=0]="PENDING",s[s.RESOLVED=1]="RESOLVED",s[s.REJECTED=2]="REJECTED";}(h||(h={}));class n{constructor(s){this.instance=s,this._resolver=T(),this._status=h.PENDING,this._resolvingPromises=[],this._resolver.promise.then((()=>{this._status=h.RESOLVED,this._cleanUp();}),(()=>{this._status=h.REJECTED,this._cleanUp();}));}addResolvingPromise(s){this._resolvingPromises.push(s),this._tryResolve();}isResolved(){return this._status===h.RESOLVED}isRejected(){return this._status===h.REJECTED}isFulfilled(){return this._status!==h.PENDING}abort(){this._resolver.reject(m$1());}when(s,e){return this._resolver.promise.then(s,e)}_cleanUp(){this._allPromise=this._resolvingPromises=this._allPromise=null;}_tryResolve(){if(this.isFulfilled())return;const s=T(),e=[...this._resolvingPromises,q(s.promise)],t=this._allPromise=Promise.all(e);t.then((()=>{this.isFulfilled()||this._allPromise!==t||this._resolver.resolve(this.instance);}),(s=>{this.isFulfilled()||this._allPromise!==t||g$1(s)||this._resolver.reject(s);})),s.resolve();}}const m=e=>{let i=class extends e{constructor(...s){super(...s),this._promiseProps=new n(this),this.addResolvingPromise(Promise.resolve());}isResolved(){return this._promiseProps.isResolved()}isRejected(){return this._promiseProps.isRejected()}isFulfilled(){return this._promiseProps.isFulfilled()}when(s,e){return new Promise(((s,e)=>{this._promiseProps.when(s,e);})).then(s,e)}catch(s){return this.when(null,s)}addResolvingPromise(s){s&&!this._promiseProps.isFulfilled()&&this._promiseProps.addResolvingPromise("_promiseProps"in s?s.when():s);}};return i=e$1([n$2("esri.core.Promise")],i),i};let _=class extends(m(y)){};_=e$1([n$2("esri.core.Promise")],_);

export { _, g, l, m, s };
