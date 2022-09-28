import { ag as c, r as r$1, t as t$1 } from './cast-3d5be210.js';
import { o } from './request-ac4d8bfb.js';
import { k as k$1, s, t, e, P as P$1, c as s$1, w as w$1, C as C$1, d as r, A as A$2 } from './Point-edff2a11.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function T$1(e){return new k$1({wkt:`GEOCCS["Spherical geocentric",\n    DATUM["Not specified",\n      SPHEROID["Sphere",${e.radius},0]],\n    PRIMEM["Greenwich",0.0,\n      AUTHORITY["EPSG","8901"]],\n    UNIT["m",1.0],\n    AXIS["Geocentric X",OTHER],\n    AXIS["Geocentric Y",EAST],\n    AXIS["Geocentric Z",NORTH]\n  ]`})}const G$1=T$1(s),I$1=T$1(t),E$1=T$1(e),R$1=new k$1({wkt:`GEOCCS["WGS 84",\n  DATUM["WGS_1984",\n    SPHEROID["WGS 84",${s.radius},298.257223563,\n      AUTHORITY["EPSG","7030"]],\n    AUTHORITY["EPSG","6326"]],\n  PRIMEM["Greenwich",0,\n    AUTHORITY["EPSG","8901"]],\n  UNIT["m",1.0,\n    AUTHORITY["EPSG","9001"]],\n  AXIS["Geocentric X",OTHER],\n  AXIS["Geocentric Y",OTHER],\n  AXIS["Geocentric Z",NORTH],\n  AUTHORITY["EPSG","4978"]\n]`});function A$1(n){return n&&n===t?I$1:n&&n===e?E$1:G$1}function O$1(n){return n&&(P$1(n)||n===I$1)?I$1:n&&(s$1(n)||n===E$1)?E$1:G$1}function p$1(n){return n&&(P$1(n)||n===I$1)?t:n&&(s$1(n)||n===E$1)?e:s}function u(n){return w$1(n)?t:C$1(n)?e:s}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const d=39.37,U=s.radius*Math.PI/200,q=/UNIT\[([^\]]+)\]\]$/i,p=r,h=/UNIT\[([^\]]+)\]/i,B=new Set([4261,4305,4807,4810,4811,4812,4816,4819,4821,4901,4902,37225,104139,104140]),b=o()({meter:"meters",foot:"feet",foot_us:"us-feet",foot_clarke:"clarke-feet",yard_clarke:"clarke-yards",link_clarke:"clarke-links",yard_sears:"sears-yards",foot_sears:"sears-feet",chain_sears:"sears-chains",chain_benoit_1895_b:"benoit-1895-b-chains",yard_indian:"indian-yards",yard_indian_1937:"indian-1937-yards",foot_gold_coast:"gold-coast-feet",chain_sears_1922_truncated:"sears-1922-truncated-chains","50_kilometers":"50-kilometers","150_kilometers":"150-kilometers"}),k=e=>e*e,y=e=>e*e*e,g={length:{baseUnit:"meters",units:{millimeters:{inBaseUnits:.001},centimeters:{inBaseUnits:.01},decimeters:{inBaseUnits:.1},meters:{inBaseUnits:1},kilometers:{inBaseUnits:1e3},inches:{inBaseUnits:.0254},feet:{inBaseUnits:.3048},yards:{inBaseUnits:.9144},miles:{inBaseUnits:1609.344},"nautical-miles":{inBaseUnits:1852},"us-feet":{inBaseUnits:1200/3937}}},area:{baseUnit:"square-meters",units:{"square-millimeters":{inBaseUnits:k(.001)},"square-centimeters":{inBaseUnits:k(.01)},"square-decimeters":{inBaseUnits:k(.1)},"square-meters":{inBaseUnits:1},"square-kilometers":{inBaseUnits:k(1e3)},"square-inches":{inBaseUnits:k(.0254)},"square-feet":{inBaseUnits:k(.3048)},"square-yards":{inBaseUnits:k(.9144)},"square-miles":{inBaseUnits:k(1609.344)},"square-us-feet":{inBaseUnits:k(1200/3937)},acres:{inBaseUnits:.0015625*k(1609.344)},ares:{inBaseUnits:100},hectares:{inBaseUnits:1e4}}},volume:{baseUnit:"liters",units:{liters:{inBaseUnits:1},"cubic-millimeters":{inBaseUnits:1e3*y(.001)},"cubic-centimeters":{inBaseUnits:1e3*y(.01)},"cubic-decimeters":{inBaseUnits:1e3*y(.1)},"cubic-meters":{inBaseUnits:1e3},"cubic-kilometers":{inBaseUnits:1e3*y(1e3)},"cubic-inches":{inBaseUnits:1e3*y(.0254)},"cubic-feet":{inBaseUnits:1e3*y(.3048)},"cubic-yards":{inBaseUnits:1e3*y(.9144)},"cubic-miles":{inBaseUnits:1e3*y(1609.344)}}},angle:{baseUnit:"radians",units:{radians:{inBaseUnits:1},degrees:{inBaseUnits:Math.PI/180}}}},_=(()=>{const e={};for(const s in g)for(const t in g[s].units)e[t]=s;return e})();function M(e,s,t){return e*g[t].units[s].inBaseUnits}function w(e,s,t){return e/g[t].units[s].inBaseUnits}const S=["metric","imperial","square-inches","square-feet","square-yards","square-miles","square-us-feet","square-meters","square-kilometers","acres","ares","hectares"],j=["metric","imperial","inches","feet","yards","miles","nautical-miles","us-feet","meters","kilometers"],I=new Map([["meters","square-meters"],["feet","square-feet"],["us-feet","square-us-feet"]]);function P(e){return "imperial"===e||"metric"===e}function C(e){const s=_[e];if(!s)throw new Error("unknown type");return s}function D(e){return g[e].baseUnit}function x(e){return D(C(e))}function E(e,s=null){return s=s||C(e),g[s].baseUnit===e}function N(e,s,t){if(s===t)return e;const r=C(s);if(r!==C(t))throw new Error("incompatible units");const i=E(s,r)?e:M(e,s,r);return E(t,r)?i:w(i,t,r)}function v(e,s,t){switch(t){case"metric":return R(e,s);case"imperial":return K(e,s);default:return t}}function F(e,s,t){switch(t){case"metric":return J(e,s);case"imperial":return A(e,s);default:return t}}function O(e,s,t){switch(t){case"metric":return T(e,s);case"imperial":return Y(e,s);default:return t}}function R(e,s){const t=N(e,s,"meters");return Math.abs(t)<3e3?"meters":"kilometers"}function J(e,s){const t=N(e,s,"meters");return Math.abs(t)<1e5?"meters":"kilometers"}function K(e,s){const t=N(e,s,"feet");return Math.abs(t)<1e3?"feet":"miles"}function A(e,s){const t=N(e,s,"feet");return Math.abs(t)<1e5?"feet":"miles"}function T(e,s){const t=N(e,s,"square-meters");return Math.abs(t)<3e6?"square-meters":"square-kilometers"}function Y(e,s){const t=N(e,s,"square-feet");return Math.abs(t)<1e6?"square-feet":"square-miles"}function G(e,s,t){return N(e,s,"meters")/(t*Math.PI/180)}function H(e){return b.fromJSON(e.toLowerCase())||null}function L(e){return b.toJSON(e)||null}function W(e){if(e&&"object"==typeof e&&!A$2(e))return 1;const s=z(e);return s>1e5?1:s}function $(e){return z(e)>=(e instanceof k$1?p$1(e).metersPerDegree:1e5)?"meters":Z(e)}function z(e,t=s.metersPerDegree){return c(Q(e,!0),t)}function Q(e$1,s=!1){let t$1,r,i=null;if(null!=e$1&&("object"==typeof e$1?(t$1=e$1.wkid,r=e$1.wkt):"number"==typeof e$1?t$1=e$1:"string"==typeof e$1&&(r=e$1)),t$1){if(w$1(t$1))return t.metersPerDegree;if(C$1(t$1))return e.metersPerDegree;i=p.values[p[t$1]],!i&&s&&B.has(t$1)&&(i=U);}else r&&(ie(r)?i=V(q.exec(r),i):re(r)&&(i=V(h.exec(r),i)));return i}function V(e,s){return e&&e[1]?X(e[1]):s}function X(e){return parseFloat(e.split(",")[1])}function Z(e){let s,r,i=null;if(null!=e&&("object"==typeof e?(s=e.wkid,r=e.wkt):"number"==typeof e?s=e:"string"==typeof e&&(r=e)),s)i=p.units[p[s]];else if(r){const e=ie(r)?q:re(r)?h:null;if(e){const s=e.exec(r);s&&s[1]&&(i=ae(s[1]));}}return r$1(i)?H(i):null}function ee(e){const s=Z(e);return t$1(s)||!j.includes(s)?null:s}function se(e){const s=$(e);return t$1(s)||!j.includes(s)?null:s}function te(e){const s=Z(e);return t$1(s)?null:I.get(s)}function re(e){return /^GEOCCS/i.test(e)}function ie(e){return /^PROJCS/i.test(e)}const ne=1e-7;function ae(e){const s=/[\\"\\']{1}([^\\"\\']+)/.exec(e);let t=s&&s[1];if(!t||!p.units.includes(t)){const s=X(e);t=null;const r=p.values;for(let e=0;e<r.length;++e)if(Math.abs(s-r[e])<ne){t=p.units[e];break}}return t}function ue(e){const s=Z(e);if(t$1(s))return null;switch(s){case"feet":case"us-feet":case"clarke-feet":case"clarke-yards":case"clarke-links":case"sears-yards":case"sears-feet":case"sears-chains":case"benoit-1895-b-chains":case"indian-yards":case"indian-1937-yards":case"gold-coast-feet":case"sears-1922-truncated-chains":return "imperial";case"50-kilometers":case"150-kilometers":case"meters":return "metric"}return null}function ce(e){const t="metric";if(t$1(e))return t;const i=e.map,n=i&&"portalItem"in i?i.portalItem?.portal:null;if(n){switch(n?.user?.units??n.units){case t:return t;case"english":return "imperial"}}return c(ue(e.spatialReference),t)}const oe={esriAcres:"acres",esriAres:"ares",esriHectares:"hectares",esriSquareCentimeters:"square-centimeters",esriSquareDecimeters:"square-decimeters",esriSquareFeet:"square-feet",esriSquareInches:"square-inches",esriSquareKilometers:"square-kilometers",esriSquareMeters:"square-meters",esriSquareMiles:"square-miles",esriSquareMillimeters:"square-millimeters",esriSquareUsFeet:"square-us-feet",esriSquareYards:"square-yards"},le={esriCentimeters:"centimeters",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriYards:"yards"},me=o()(oe),fe=o()(le),de=o()({...oe,...le});

export { $, A, C, E$1 as E, G$1 as G, H, I$1 as I, J, K, N, O$1 as O, R$1 as R, T, W, Y, Z, G as a, R as b, ce as c, d, E as e, fe as f, ee as g, me as m, p$1 as p, se as s, te as t, u, x, z };
