/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function e(e,n,t,r){const u=3*e,i=3*(t-e)-u,a=1-u-i,o=3*n,s=3*(r-n)-o,f=1-o-s;function c(e){return ((a*e+i)*e+u)*e}function l(e){return ((f*e+s)*e+o)*e}function b(e){return (3*a*e+2*i)*e+u}function p(e,n){let t,r,u,i,a,o;for(u=e,o=0;o<8;o++){if(i=c(u)-e,Math.abs(i)<n)return u;if(a=b(u),Math.abs(a)<1e-6)break;u-=i/a;}if(t=0,r=1,u=e,u<t)return t;if(u>r)return r;for(;t<r;){if(i=c(u),Math.abs(i-e)<n)return u;e>i?t=u:r=u,u=.5*(r-t)+t;}return u}return function(e,n=1e-6){return l(p(e,n))}}const n=/^cubic-bezier\((.*)\)/,t={};function r(r){let u=t[r]||null;if(!u){const t=n.exec(r);if(t){const n=t[1].split(",").map((e=>parseFloat(e.trim())));4!==n.length||n.some((e=>isNaN(e)))||(u=e.apply(e,n));}}return u}t.ease=e(.25,.1,.25,1),t.linear=e(0,0,1,1),t.easeIn=t["ease-in"]=e(.42,0,1,1),t.easeOut=t["ease-out"]=e(0,0,.58,1),t.easeInOut=t["ease-in-out"]=e(.42,0,.58,1);

export { e, r, t };
