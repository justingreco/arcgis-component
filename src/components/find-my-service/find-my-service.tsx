import { Component, h } from '@stencil/core';
import { Method, Prop, State } from '@stencil/core/internal';

@Component({
  tag: 'find-my-service',
  styleUrl: 'find-my-service.css',
  shadow: false,
})
export class FindMyService {
  @Prop() groupId: string;
  @State() categories = [];
  @Prop() council: boolean = false;

  search: any;
  @Method()
  public async loadSearchWidget() {
    const [
        { default: Search },
        { default: LocatorSearchSource }
    ] = await Promise.all([
        await import(`@arcgis/core/widgets/Search`),
        await import(`@arcgis/core/widgets/Search/LocatorSearchSource`)
    ]);
    const search = new Search({container: 'search',
    includeDefaultSources: false,
    sources: [new LocatorSearchSource({
      url: "https://maps.raleighnc.gov/arcgis/rest/services/Locators/FindMyService/GeocodeServer",
      placeholder: "Enter your address"
    })] 
  })
    return search;
  }
  @Method()
  public async loadGroup(id) {
    const [
        { default: Portal }
    ] = await Promise.all([
        await import(`@arcgis/core/portal/Portal`)
    ]);
    const portal = new Portal();
    const results = await portal.queryGroups({
      query: `id: ${id}`,
      sortField: 'title'
    });
    if (results.results.length) {
      const group = results.results[0];
      const items = await group.queryItems({
        query: 'type: map',
        sortField: 'title'
      });
      if (items.results.length) {
        return items.results;
      }
    }
  } 
  @Method()
  public async loadMaps(items) {
    const [
      { default: WebMap }
    ] = await Promise.all([
        await import(`@arcgis/core/WebMap`)
    ]);
    const promises = [];
    items.forEach(item => {
      promises.push(new WebMap({portalItem: {id: item.id}}).loadAll());
    });
    return await Promise.all(promises);
  }
  @Method()
  public async searchMapLayers(geometry, maps) {
    this.categories = [...[]];
    let categories = [...[]];
    let mapCount = 0;
    maps.forEach(async map => {
      let layers = [...[]];
      const promises = [];
      map.layers.forEach(async (layer: __esri.FeatureLayer) => {
        promises.push(layer.queryFeatures({ geometry: geometry, outFields: ['*'] }));
      });
      const featuresets = await Promise.all(promises);
      mapCount +=1;
      featuresets.forEach((featureSet: __esri.FeatureSet, i: number) => {
        
          layers = [...layers, { title: map.layers.getItemAt(i).title, features: featureSet.features, id: map.layers.getItemAt(i).id }]
        
      });
      categories = [...categories, { title: map.portalItem.title, layers: layers }];
      if (mapCount === maps.length) {
        this.categories = [...categories];
        categories.sort((a, b) => {
          if (a.title < b.title) {
              return -1
          }
          if (a.title > b.title) {
              return 0;
          }
        });
        this.categories = [...categories];
        console.log(this.categories);

      }      
    });

  }
  async loadFeatureWidget(id, feature) {
    const [
      { default: Feature }
    ] = await Promise.all([
        await import(`@arcgis/core/widgets/Feature`)
    ]);    
      setTimeout(() => {
         let widget = new Feature({ container: id });
          widget.graphic = feature;
      },200) ;        

}  
componentWillLoad() {
  if (this.search) {
    this.search.destroy();
  }
  this.categories = [...[]];
}
  async componentDidLoad() {
    this.search = await this.loadSearchWidget();
    const items = await this.loadGroup(this.groupId);
    const maps = await this.loadMaps(items);
    
    this.search.on('search-complete', event => {
      if (event.results.length) {

        this.searchMapLayers(event.results[0].results[0].feature.geometry, maps);
      }
    });
  }

  render() {
    return (
<div><div id='search'></div>
        <div>
        
        <ol class="o-layout-grid o-layout-grid--3">{this.categories.map((webmap) => {
            return<li class="o-layout-grid__item"><div><h3>{webmap.title}</h3>
            {webmap.layers.map((layer) => {
                return layer.features.length > 0 ? <div>
                {layer.features.map((feature, i) => {
                  {this.loadFeatureWidget(layer.id + '_' + i, feature)}
                    return <div id={layer.id + '_' + i}></div>
                })}</div>
                : <div class="esri-feature esri-widget"><h4 class="esri-feature__title">{layer.title}</h4><div class="esri-feature__text esri-feature__content-element"><div class="esri-feature__main-container">Service not provided for this address</div></div></div>

            })}
            </div></li>

        })}</ol></div></div>
    );
  }

}
