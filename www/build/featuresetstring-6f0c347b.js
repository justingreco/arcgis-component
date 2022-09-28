import { d } from './arcadeUtils-d51c63c3.js';
import { m as P, G, Y, f as je, X, n as ne, J, ai as ce, A as Ae, R as Re, aj as le, p as Fe, ak as fe, e as ee, I, d as ve } from './languageUtils-d37e9fbb.js';
import './geometry-2f332a26.js';
import './cast-3d5be210.js';
import './Extent-f27111e1.js';
import './Point-edff2a11.js';
import './JSONSupport-dce2c67b.js';
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
import './enumeration-6695a859.js';
import './fieldType-eb0b42e4.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function w(a){return a&&a.domain?"coded-value"===a.domain.type||"codedValue"===a.domain.type?d.convertObjectToArcadeDictionary({type:"codedValue",name:a.domain.name,dataType:P[a.field.type],codedValues:a.domain.codedValues.map((n=>({name:n.name,code:n.code})))}):d.convertObjectToArcadeDictionary({type:"range",name:a.domain.name,dataType:P[a.field.type],min:a.domain.min,max:a.domain.max}):null}function h(p){"async"===p.mode&&(p.functions.domain=function(n,s){return p.standardFunctionAsync(n,s,(async function(n,s,d){if(G(d,2,3),Y(d[0])){return w(je(d[0],X(d[1]),void 0===d[2]?void 0:ne(d[2])))}if(J(d[0])){await d[0]._ensureLoaded();return w(ce(X(d[1]),d[0],null,void 0===d[2]?void 0:ne(d[2])))}throw new Error("Invalid Parameter")}))},p.functions.subtypes=function(t,r){return p.standardFunctionAsync(t,r,(async function(t,r,o){if(G(o,1,1),Y(o[0])){const a=Ae(o[0]);return a?d.convertObjectToArcadeDictionary(a):null}if(J(o[0])){await o[0]._ensureLoaded();const a=o[0].subtypes();return a?d.convertObjectToArcadeDictionary(a):null}throw new Error("Invalid Parameter")}))},p.functions.domainname=function(n,t){return p.standardFunctionAsync(n,t,(async function(n,t,s){if(G(s,2,4),Y(s[0]))return Re(s[0],X(s[1]),s[2],void 0===s[3]?void 0:ne(s[3]));if(J(s[0])){await s[0]._ensureLoaded();const n=ce(X(s[1]),s[0],null,void 0===s[3]?void 0:ne(s[3]));return le(n,s[2])}throw new Error("Invalid Parameter")}))},p.signatures.push({name:"domainname",min:"2",max:"4"}),p.functions.domaincode=function(n,t){return p.standardFunctionAsync(n,t,(async function(n,t,s){if(G(s,2,4),Y(s[0]))return Fe(s[0],X(s[1]),s[2],void 0===s[3]?void 0:ne(s[3]));if(J(s[0])){await s[0]._ensureLoaded();const n=ce(X(s[1]),s[0],null,void 0===s[3]?void 0:ne(s[3]));return fe(n,s[2])}throw new Error("Invalid Parameter")}))},p.signatures.push({name:"domaincode",min:"2",max:"4"})),p.functions.text=function(n,e){return p.standardFunctionAsync(n,e,(function(n,e,t){if(G(t,1,2),!J(t[0]))return ee(t[0],t[1]);{const a=I(t[1],"");if(""===a)return t[0].castToText();if("schema"===a.toLowerCase())return t[0].convertToText("schema",n.abortSignal);if("featureset"===a.toLowerCase())return t[0].convertToText("featureset",n.abortSignal)}}))},p.functions.gdbversion=function(n,t){return p.standardFunctionAsync(n,t,(async function(n,t,r){if(G(r,1,1),Y(r[0]))return r[0].gdbVersion();if(J(r[0])){return (await r[0].load()).gdbVersion}throw new Error("Invalid Parameter")}))},p.functions.schema=function(t,r){return p.standardFunctionAsync(t,r,(async function(t,r,o){if(G(o,1,1),J(o[0]))return await o[0].load(),d.convertObjectToArcadeDictionary(o[0].schema());if(Y(o[0])){const a=ve(o[0]);return a?d.convertObjectToArcadeDictionary(a):null}throw new Error("Invalid Parameter")}))};}

export { h as registerFunctions };
