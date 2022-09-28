import { n as n$1 } from './vec2f64-2956001b.js';
import { w } from './mathUtils-559a53d9.js';
import { n } from './vec4f64-011248e0.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const a=n();class o{constructor(t){this.message=t;}toString(){return `AssertException: ${this.message}`}}function e(t,n){if(!t)throw n=n||"assert",console.log(new Error(n).stack),new o(n)}function s(t,n){t||(n=n||"",console.warn("Verify failed: "+n+"\n"+new Error("verify").stack));}function c(t,n,r,a){let o,e=(r[0]-t[0])/n[0],s=(a[0]-t[0])/n[0];e>s&&(o=e,e=s,s=o);let c=(r[1]-t[1])/n[1],u=(a[1]-t[1])/n[1];if(c>u&&(o=c,c=u,u=o),e>u||c>s)return !1;c>e&&(e=c),u<s&&(s=u);let i=(r[2]-t[2])/n[2],f=(a[2]-t[2])/n[2];return i>f&&(o=i,i=f,f=o),!(e>f||i>s)&&(f<s&&(s=f),!(s<0))}function u(n,r,a,o,e,s=n$1()){const c=(o[e]-a[e])*(r[0]-n[0])-(o[0]-a[0])*(r[e]-n[e]),u=(o[0]-a[0])*(n[e]-a[e])-(o[e]-a[e])*(n[0]-a[0]);if(0===c)return !1;const i=u/c;return s[0]=n[0]+i*(r[0]-n[0]),s[1]=n[e]+i*(r[e]-n[e]),!0}function i(t,r,o,s,c){c||(c=t),a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=1,w(a,a,r),c.length>2&&(c[2]=-a[2]),w(a,a,o),e(0!==a[3]),c[0]=a[0]/a[3],c[1]=a[1]/a[3],c[2]=a[2]/a[3],c[0]=(.5*c[0]+.5)*s[2]+s[0],c[1]=(.5*c[1]+.5)*s[3]+s[1];}function f(t,n){return Math.log(t)/Math.log(n)}function h(t,n,r,a){t[12]=n,t[13]=r,t[14]=a;}function M(t){return 1===t[0]&&0===t[1]&&0===t[2]&&0===t[3]&&0===t[4]&&1===t[5]&&0===t[6]&&0===t[7]&&0===t[8]&&0===t[9]&&1===t[10]&&0===t[11]&&1===t[15]}function l(t,n,r){return 2*Math.atan(Math.sqrt(n*n+r*r)*Math.tan(.5*t)/n)}function m(t,n,r){return 2*Math.atan(Math.sqrt(n*n+r*r)*Math.tan(.5*t)/r)}function g(t,n,r){return 2*Math.atan(n*Math.tan(.5*t)/Math.sqrt(n*n+r*r))}function k(t,n,r){return 2*Math.atan(r*Math.tan(.5*t)/Math.sqrt(n*n+r*r))}

export { M, c, e, f, g, h, i, k, l, m, s, u };
