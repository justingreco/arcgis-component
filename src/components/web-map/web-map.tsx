import { Component, Prop, h, Element, State } from '@stencil/core';
import { HTMLStencilElement, Method } from '@stencil/core/internal';


@Component({
  tag: 'web-map',
  styleUrl: 'web-map.css',
  shadow: false,
})
export class WebMap {
  @Element() element: HTMLStencilElement;
  @State() divId:string = "";
  @Prop() mapId: string;
  @Prop() sceneId: string;
  @Prop() layerlist: boolean = false;
  @Prop() legend: boolean = false;
  @Prop() search: boolean = false;
  @Prop() navigate: boolean = true;
  @Prop() basemap: string;
  @Prop() center: string;
  @Prop() zoom: number;
  @Prop() address: string;
  @Prop() width: string = "100%";
  @Prop() height: string = "300px";

  view: any;

  getRandomString = function() {
    var x = 2147483648;
    return Math.floor(Math.random() * x).toString(36) +
    Math.abs(Math.floor(Math.random() * x) ^ +new Date()).toString(36);
};   

@Method()
public async loadWebMap(id) {
  const [
      { default: WebMap },
      { default: MapView}
  ] = await Promise.all([
      await import(`@arcgis/core/WebMap`),
      await import('@arcgis/core/views/MapView')
  ]);
  const map = new WebMap({portalItem: { id: id }})
  return new MapView({map: map, container: this.divId });
}
@Method()
public async loadWebScene(id) {
  const [
      { default: WebScene },
      { default: SceneView}
  ] = await Promise.all([
      await import(`@arcgis/core/WebScene`),
      await import('@arcgis/core/views/SceneView')
  ]);
  const scene = new WebScene({portalItem: { id: id }})
  return new SceneView({map: scene, container: this.divId });
}
@Method()
public async loadMap() {
  const [
      { default: Map },
      { default: MapView}
  ] = await Promise.all([
      await import(`@arcgis/core/Map`),
      await import('@arcgis/core/views/MapView')
  ]);
  const map = new Map({basemap: this.basemap});
  return new MapView({map: map, container: this.divId });
}

@Method()
public async loadLayerList(view) {
  const [
      { default: LayerList },
      { default: Expand }
  ] = await Promise.all([
      await import(`@arcgis/core/widgets/LayerList`),
      await import(`@arcgis/core/widgets/Expand`)

  ]);
  const expand = new Expand({view: view, content: new LayerList({container: document.createElement('div'), view: view}) });
  view.ui.add(expand ,'top-right');
}
@Method()
public async loadLegend(view) {
  const [
      { default: Legend },
      { default: Expand }
  ] = await Promise.all([
      await import(`@arcgis/core/widgets/Legend`),
      await import(`@arcgis/core/widgets/Expand`)

  ]);
  const expand = new Expand({view: view, content: new Legend({container: document.createElement('div'), view: view}) });
  view.ui.add(expand ,'top-right');
}

@Method()
public async loadSearch(view) {
  const [
      { default: Search }
  ] = await Promise.all([
      await import(`@arcgis/core/widgets/Search`)

  ]);
  const search = new Search({container: document.createElement('div'), view: view});
  view.ui.add(search ,'top-left');
}
@Method()
public async zoomTo(view) {
  const [
      { default: Point }
  ] = await Promise.all([
      await import(`@arcgis/core/geometry/Point`)

  ]);
  debugger
  view.goTo({center: new Point({longitude: parseFloat(this.center.split(',')[0]), latitude: parseFloat(this.center.split(',')[1]), spatialReference: {wkid: 4326}}), zoom: this.zoom})
}
@Method()
public async geocodeAddress(view, address, zoom) {
await Promise.all([
      await import(`@arcgis/core/rest/locator`).then(locator => {
        locator.addressToLocations('https://maps.raleighnc.gov/arcgis/rest/services/Locators/Locator/GeocodeServer',
        {address: {SingleLine: address}}).then(candidates => {
          debugger
          view.goTo({target: candidates[0].location, zoom: zoom});
        })
      })

  ]);
}
@Method()
public removeNavigation(view) 
{
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
    } else if (this.mapId) {
      this.view = await this.loadWebMap(this.mapId);
    } else if (this.basemap) {
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
      } else if (this.zoom) {
        this.view.zoom = this.zoom;
      }
      if (this.search) {
        this.loadSearch(this.view);
      }
      console.log(this.navigate)
      if (!this.navigate){
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
    return <div id={this.divId}></div>;
  }

}
