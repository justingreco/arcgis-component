/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var n,i;function e(n){return n&&"esri.renderers.visualVariables.SizeVariable"===n.declaredClass}function l(n){return null!=n&&!isNaN(n)&&isFinite(n)}function t(i){return i.valueExpression?n.Expression:i.field&&"string"==typeof i.field?n.Field:n.Unknown}function a(e,l){const a=l||t(e),o=e.valueUnit||"unknown";return a===n.Unknown?i.Constant:e.stops?i.Stops:null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?i.ClampedLinear:"unknown"===o?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?i.Proportional:i.Additive:i.Identity:i.RealWorldSize}!function(n){n.Unknown="unknown",n.Expression="expression",n.Field="field";}(n||(n={})),function(n){n.Unknown="unknown",n.Stops="stops",n.ClampedLinear="clamped-linear",n.Proportional="proportional",n.Additive="additive",n.Constant="constant",n.Identity="identity",n.RealWorldSize="real-world-size";}(i||(i={}));

export { a, e, i, l, n, t };
