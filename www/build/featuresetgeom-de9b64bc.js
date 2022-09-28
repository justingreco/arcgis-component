import { q as s } from './arcadeUtils-d51c63c3.js';
import { y as ye, J, G, X } from './languageUtils-d37e9fbb.js';
import { e as c, g as a } from './SpatialFilter-063c6399.js';
import { p } from './Point-edff2a11.js';
import { w as w$1, A, x, O, p as p$1, g, h } from './geometryEngineAsync-db9b059a.js';
import './geometry-2f332a26.js';
import './cast-3d5be210.js';
import './Extent-f27111e1.js';
import './Polyline-dcdb3782.js';
import './request-ac4d8bfb.js';
import './featureConversionUtils-3f60eb15.js';
import './OptimizedFeature-a0dba562.js';
import './OptimizedFeatureSet-261a115b.js';
import './Promise-d2759b2e.js';
import './unitUtils-a0a11e54.js';
import './number-3228daf9.js';
import './sizeVariableUtils-5330814d.js';
import './Field-2973a5cf.js';
import './JSONSupport-dce2c67b.js';
import './enumeration-6695a859.js';
import './fieldType-eb0b42e4.js';
import './WhereClause-ae6d22ff.js';
import './_commonjsHelpers-8dd5c177.js';
import './FieldsIndex-ea481e79.js';
import './fieldUtils-240a3b99.js';
import './workers-c7a27acb.js';
import './assets-99f5c3ee.js';
import './intl-54ccdc89.js';
import './number-c5a37d3e.js';
import './messages-5e9a4a9e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function w(e){return e instanceof p}function y(r,i,h,y){return y(r,i,(async function(r,i,y){if(y.length<2)throw new Error("Missing Parameters");if(null===(y=ye(y))[0]&&null===y[1])return !1;if(J(y[0])){if(y[1]instanceof p)return new c({parentfeatureset:y[0],relation:h,relationGeom:y[1]});if(null===y[1])return new a({parentfeatureset:y[0]});throw new Error("Spatial Relation cannot accept this parameter type")}if(w(y[0])){if(w(y[1])){switch(h){case"esriSpatialRelEnvelopeIntersects":return g(s(y[0]),s(y[1]));case"esriSpatialRelIntersects":return g(y[0],y[1]);case"esriSpatialRelContains":return p$1(y[0],y[1]);case"esriSpatialRelOverlaps":return O(y[0],y[1]);case"esriSpatialRelWithin":return x(y[0],y[1]);case"esriSpatialRelTouches":return A(y[0],y[1]);case"esriSpatialRelCrosses":return w$1(y[0],y[1])}throw new Error("Unrecognised Relationship")}if(J(y[1]))return new c({parentfeatureset:y[1],relation:h,relationGeom:y[0]});if(null===y[1])return !1;throw new Error("Spatial Relation cannot accept this parameter type")}if(null!==y[0])throw new Error("Spatial Relation cannot accept this parameter type");return J(y[1])?new a({parentfeatureset:y[1]}):!(y[1]instanceof p||null===y[1])&&void 0}))}function d(e){"async"===e.mode&&(e.functions.intersects=function(n,t){return y(n,t,"esriSpatialRelIntersects",e.standardFunctionAsync)},e.functions.envelopeintersects=function(n,t){return y(n,t,"esriSpatialRelEnvelopeIntersects",e.standardFunctionAsync)},e.signatures.push({name:"envelopeintersects",min:"2",max:"2"}),e.functions.contains=function(n,t){return y(n,t,"esriSpatialRelContains",e.standardFunctionAsync)},e.functions.overlaps=function(n,t){return y(n,t,"esriSpatialRelOverlaps",e.standardFunctionAsync)},e.functions.within=function(n,t){return y(n,t,"esriSpatialRelWithin",e.standardFunctionAsync)},e.functions.touches=function(n,t){return y(n,t,"esriSpatialRelTouches",e.standardFunctionAsync)},e.functions.crosses=function(n,t){return y(n,t,"esriSpatialRelCrosses",e.standardFunctionAsync)},e.functions.relate=function(a$1,u){return e.standardFunctionAsync(a$1,u,(function(e,a$1,u){if(u=ye(u),G(u,3,3),w(u[0])&&w(u[1]))return h(u[0],u[1],X(u[2]));if(u[0]instanceof p&&null===u[1])return !1;if(u[1]instanceof p&&null===u[0])return !1;if(J(u[0])&&null===u[1])return new a({parentfeatureset:u[0]});if(J(u[1])&&null===u[0])return new a({parentfeatureset:u[1]});if(J(u[0])&&u[1]instanceof p)return u[0].relate(u[1],X(u[2]));if(J(u[1])&&u[0]instanceof p)return u[1].relate(u[0],X(u[2]));if(null===u[0]&&null===u[1])return !1;throw new Error("Illegal Argument")}))});}

export { d as registerFunctions };
