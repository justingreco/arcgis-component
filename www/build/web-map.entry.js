import { r as registerInstance, h, g as getElement } from './index-f980186a.js';

const webMapCss = "@import url('https://js.arcgis.com/4.24/@arcgis/core/assets/esri/themes/light/main.css');:host{display:block}.esri-view{min-height:250px;min-width:250px;padding:0}web-map .esri-input{font-family:\"Avenir Next\",\"Helvetica Neue\",Helvetica,Arial,sans-serif !important;font-size:14px !important}";

const WebMap = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.divId = "";
    this.layerlist = false;
    this.legend = false;
    this.search = false;
    this.navigate = true;
    this.width = "100%";
    this.height = "300px";
    this.getRandomString = function () {
      var x = 2147483648;
      return Math.floor(Math.random() * x).toString(36) +
        Math.abs(Math.floor(Math.random() * x) ^ +new Date()).toString(36);
    };
  }
  async loadWebMap(id) {
    const [{ default: WebMap }, { default: MapView }] = await Promise.all([
      await import('./WebMap-6650732a.js'),
      await import('./MapView-7b1d4bc4.js').then(function (n) { return n.M; })
    ]);
    const map = new WebMap({ portalItem: { id: id } });
    return new MapView({ map: map, container: this.divId });
  }
  async loadWebScene(id) {
    const [{ default: WebScene }, { default: SceneView }] = await Promise.all([
      await import('./WebScene-47bcdb42.js'),
      await import('./SceneView-ed3703c9.js').then(function (n) { return n.b$; })
    ]);
    const scene = new WebScene({ portalItem: { id: id } });
    return new SceneView({ map: scene, container: this.divId });
  }
  async loadMap() {
    const [{ default: Map }, { default: MapView }] = await Promise.all([
      await import('./Map-3fa127ca.js').then(function (n) { return n._; }),
      await import('./MapView-7b1d4bc4.js').then(function (n) { return n.M; })
    ]);
    const map = new Map({ basemap: this.basemap });
    return new MapView({ map: map, container: this.divId });
  }
  async loadLayerList(view) {
    const [{ default: LayerList }, { default: Expand }] = await Promise.all([
      await import('./LayerList-5bb5c316.js'),
      await import('./Expand-68cc0b0b.js')
    ]);
    const expand = new Expand({ view: view, content: new LayerList({ container: document.createElement('div'), view: view }) });
    view.ui.add(expand, 'top-right');
  }
  async loadLegend(view) {
    const [{ default: Legend }, { default: Expand }] = await Promise.all([
      await import('./Legend-609eddb5.js'),
      await import('./Expand-68cc0b0b.js')
    ]);
    const expand = new Expand({ view: view, content: new Legend({ container: document.createElement('div'), view: view }) });
    view.ui.add(expand, 'top-right');
  }
  async loadSearch(view) {
    const [{ default: Search }] = await Promise.all([
      await import('./Search-d7e6f0cf.js')
    ]);
    const search = new Search({ container: document.createElement('div'), view: view });
    view.ui.add(search, 'top-left');
  }
  async zoomTo(view) {
    const [{ default: Point }] = await Promise.all([
      await import('./Point-edff2a11.js').then(function (n) { return n.v; })
    ]);
    debugger;
    view.goTo({ center: new Point({ longitude: parseFloat(this.center.split(',')[0]), latitude: parseFloat(this.center.split(',')[1]), spatialReference: { wkid: 4326 } }), zoom: this.zoom });
  }
  async geocodeAddress(view, address, zoom) {
    await Promise.all([
      await import('./locator-a3cba986.js').then(locator => {
        locator.addressToLocations('https://maps.raleighnc.gov/arcgis/rest/services/Locators/Locator/GeocodeServer', { address: { SingleLine: address } }).then(candidates => {
          debugger;
          view.goTo({ target: candidates[0].location, zoom: zoom });
        });
      })
    ]);
  }
  removeNavigation(view) {
    view.on("key-down", (event) => {
      const prohibitedKeys = ["+", "-", "Shift", "_", "="];
      const keyPressed = event.key;
      if (prohibitedKeys.indexOf(keyPressed) !== -1) {
        event.stopPropagation();
      }
    });
    view.on("mouse-wheel", (event) => {
      event.stopPropagation();
    });
    view.on("double-click", (event) => {
      event.stopPropagation();
    });
    view.on("drag", (event) => {
      event.stopPropagation();
    });
    view.on("drag", ["Shift"], (event) => {
      event.stopPropagation();
    });
    view.on("drag", ["Shift", "Control"], (event) => {
      event.stopPropagation();
    });
    view.on("drag", ["Shift"], (event) => {
      event.stopPropagation();
    });
    view.on("drag", ["Shift", "Control"], (event) => {
      event.stopPropagation();
    });
  }
  async componentDidLoad() {
    document.getElementById(this.divId).style.width = this.width;
    document.getElementById(this.divId).style.height = this.height;
    if (this.sceneId) {
      this.view = await this.loadWebScene(this.sceneId);
    }
    else if (this.mapId) {
      this.view = await this.loadWebMap(this.mapId);
    }
    else if (this.basemap) {
      this.view = await this.loadMap();
    }
    this.view.ui.components = ["attribution"];
    this.view.when(() => {
      if (this.layerlist) {
        this.loadLayerList(this.view);
      }
      if (this.legend) {
        this.loadLegend(this.view);
      }
      if (this.address) {
        this.geocodeAddress(this.view, this.address, this.zoom);
      }
      else if (this.center && this.zoom) {
        this.zoomTo(this.view);
      }
      else if (this.zoom) {
        this.view.zoom = this.zoom;
      }
      if (this.search) {
        this.loadSearch(this.view);
      }
      console.log(this.navigate);
      if (!this.navigate) {
        this.removeNavigation(this.view);
      }
    });
  }
  componentWillLoad() {
    this.divId = this.getRandomString();
  }
  componentWillUnload() {
    if (this.view) {
      this.view.detroy();
    }
  }
  render() {
    return h("div", { id: this.divId });
  }
  get element() { return getElement(this); }
};
WebMap.style = webMapCss;

export { WebMap as web_map };
