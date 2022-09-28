import { a as s$1 } from './cast-3d5be210.js';
import { e, s, t } from './validationUtilsAjv-164e2f9e.js';
import './_commonjsHelpers-8dd5c177.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const i$4={title:"Building Scene Layer config on layer item",type:"object",properties:{layers:{type:"array",items:{properties:{activeFilterId:{type:"string",description:"specifies the id of the currently active filter"},filters:{type:"array",description:"A list of filters available for this layer. Overrides filters defined on the service.",items:{$ref:"#/definitions/buildingSceneLayer_filter_schema.json"},uniqueItems:!0},id:{type:"integer",description:"ID of the service layer."},layerDefinition:{type:"object",description:"Additional properties that can define an elevation offset for the layer.",allOf:[{$ref:"#/definitions/layerDefinition_schema.json"},{properties:{elevationInfo:{},maxScale:{},minScale:{}},additionalProperties:!1}]},listMode:{type:"string",description:"To show or hide the sublayer in the layer list. If the layer has sublayers, selecting `hide-children` will hide them in the layer list.",enum:["hide","hide-children","show"],default:"show"},opacity:{type:"number",description:"The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.",minimum:0,maximum:1,default:1},sublayers:{type:"array",description:"An array of objects specifying overrides for building scene layer sublayers",items:{$ref:"#/definitions/buildingSceneLayer_sublayer_schema.json"},uniqueItems:!0},visibility:{type:"boolean",description:"Boolean property determining whether the layer is initially visible in the web scene",default:!0}},additionalProperties:!1}}},additionalProperties:!1,$schema:"http://json-schema.org/draft-07/schema",definitions:e};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const i$3={title:"Integrated Mesh Layer config on layer item",type:"object",properties:{layers:{type:"array",items:{properties:{id:{type:"integer",description:"ID of the service layer."},layerDefinition:{type:"object",description:"A layerDefinition object defining the attribute schema and drawing information for the layer.",allOf:[{$ref:"#/definitions/layerDefinition_schema.json"},{properties:{elevationInfo:{},maxScale:{},minScale:{}},additionalProperties:!1}]},listMode:{type:"string",description:"To show or hide layers in the layer list",enum:["hide","show"],default:"show"},modifications:{type:"string",description:"URL to modifications json file, typically stored in `ITEM/resources`. Content of the file follows the $ref:[Modifications schema](modifications_schema.json)."},opacity:{type:"number",description:"The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.",minimum:0,maximum:1,default:1},visibility:{type:"boolean",description:"Boolean property determining whether the layer is initially visible in the web scene.",default:!0}},additionalProperties:!1}}},additionalProperties:!1,$schema:"http://json-schema.org/draft-07/schema",definitions:e};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const i$2={title:"PointCloud Layer config on layer item",type:"object",properties:{layers:{type:"array",items:{properties:{disablePopup:{type:"boolean",description:"disablePopups allows a client to ignore popups defined by the service item."},id:{type:"integer",description:"ID of the service layer."},layerDefinition:{type:"object",description:"A layerDefinition object defining the attribute schema and drawing information for the layer.",allOf:[{$ref:"#/definitions/layerDefinition_schema.json"},{properties:{drawingInfo:{allOf:[{$ref:"#/definitions/drawingInfo_schema.json"},{properties:{renderer:{},transparency:{}},additionalProperties:!1}]},elevationInfo:{},filters:{},maxScale:{},minScale:{}},additionalProperties:!1}]},listMode:{type:"string",description:"To show or hide the layer in the layer list",enum:["hide","show"],default:"show"},popupInfo:{description:"A popupInfo object defining the content of pop-up windows when you click a point.",$ref:"#/definitions/popupInfo_schema.json"},showLegend:{type:"boolean",description:"Boolean value indicating whether to display the layer in the legend. Default value is `true`.",default:!0},visibility:{type:"boolean",description:"Boolean property determining whether the layer is initially visible",default:!0}},additionalProperties:!1}}},additionalProperties:!1,$schema:"http://json-schema.org/draft-07/schema",definitions:e};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const i$1={title:"Scene Layer config on layer item",type:"object",properties:{layers:{type:"array",items:{properties:{disablePopup:{type:"boolean",description:"disablePopups allows a client to ignore popups defined by the service item."},id:{type:"integer",description:"ID of the service layer."},layerDefinition:{type:"object",description:"A layerDefinition object defining the attribute schema and drawing information for the layer.",allOf:[{$ref:"#/definitions/layerDefinition_schema.json"},{properties:{definitionExpression:{},drawingInfo:{allOf:[{$ref:"#/definitions/drawingInfo_schema.json"},{properties:{labelingInfo:{},renderer:{},transparency:{}},additionalProperties:!1}]},elevationInfo:{},excludeObjectIds:{},featureReduction:{},floorInfo:{},maxScale:{},minScale:{},polygonFilter:{},rangeInfos:{}},additionalProperties:!1}]},listMode:{type:"string",description:"To show or hide layers in the layer list",enum:["hide","show"],default:"show"},opacity:{type:"number",description:"The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.",minimum:0,maximum:1,default:1},popupInfo:{description:"A popupInfo object defining the content of pop-up windows when you click or query a feature.",$ref:"#/definitions/popupInfo_schema.json"},screenSizePerspective:{type:"boolean",description:"Apply [perspective scaling](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#screenSizePerspectiveEnabled) to screen-size symbols.",default:!0},showLabels:{type:"boolean",description:"If the layer has a labelingInfo property then labels show on the scene only if the showLabels property it true.",default:!1},showLegend:{type:"boolean",description:"Boolean value indicating whether to display the layer in the legend. Default value is `true`.",default:!0},visibility:{type:"boolean",description:"Boolean property determining whether the layer is initially visible in the web scene",default:!0}},additionalProperties:!1}}},additionalProperties:!1,$schema:"http://json-schema.org/draft-07/schema",definitions:e};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const i=new s({allErrors:!0,extendRefs:!0});function m(e,r){return i.validate(c(r),e),t(i.errors||[])}function c(r){switch(r){case"building-scene":return i$4;case"integrated-mesh":return i$3;case"point-cloud":return i$2;case"scene":return i$1;default:throw new s$1("portalitemlayertype:unknown","Can not validate against unknown PortalItemLayerType.")}}

export { m as validate };
