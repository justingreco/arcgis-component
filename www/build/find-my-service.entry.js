import { r as registerInstance, h } from './index-f980186a.js';

const findMyServiceCss = "@import url('https://js.arcgis.com/4.24/@arcgis/core/assets/esri/themes/light/main.css');find-my-service input,textarea{font-size:0.88889rem !important;border:1px solid #999 !important;border-top-color:#333 !important;max-width:100% !important;padding:0.5rem 0.66667rem !important;-webkit-transition:all .2s ease-out !important;transition:all .2s ease-out !important}find-my-service input:focus,textarea:focus{line-height:22px !important}find-my-service .esri-search__input-container{height:100% !important}find-my-service .esri-feature__title{font-size:1rem;line-height:1.333;color:#01426A;font-family:\"Typold W05\",sans-serif;font-weight:500;margin:1em 0}@media (min-width: 37.5em){find-my-service input,textarea{font-size:0.77778rem !important}}@media (min-width: 37.5em){find-my-service input,textarea{padding:0.66667rem 1rem !important}}find-my-service button,input,optgroup,select,textarea{color:inherit !important;font:inherit !important;margin:0 !important;font-size:1rem !important;color:#333 !important;font-family:\"Merriweather\", serif !important;width:100%}find-my-service .esri-search{width:100% !important;flex-flow:row nowrap !important;justify-content:center !important;align-items:center !important;overflow:visible !important;line-height:22px !important;-webkit-transition:none !important;transition:none !important}find-my-service .esri-search__submit-button{background-color:#4C8C2B !important;border:1px solid #4C8C2B !important;color:#fff !important;font-size:0.83333rem !important;font-family:\"Typold W05\", sans-serif !important;font-weight:500 !important;letter-spacing:.1em !important;line-height:1rem !important;padding:0.5rem 0.66667rem !important;text-transform:uppercase !important;height:50px !important;width:120px !important}find-my-service .esri-input[type=\"text\"]{border:none !important;flex-flow:row nowrap !important;justify-content:center !important;align-items:center !important;overflow:visible !important;padding:12px 18px !important;-webkit-transition:none !important;transition:none !important;height:48px !important}find-my-service .esri-input[type=\"text\"]:focus-within{-webkit-box-shadow:none !important;box-shadow:none !important;outline:none}find-my-service .esri-search__input-container{border-top-color:#333 !important;border:1px solid #999 !important}find-my-service .esri-search__input-container:focus-within{border-color:#01426A !important;-webkit-box-shadow:0 1px 5px 2px rgba(1, 66, 106, 0.25) !important;box-shadow:0 1px 5px 2px rgba(1, 66, 106, 0.25) !important;outline:none !important}find-my-service .esri-menu__list-item{color:#333;font-family:\"Merriweather\", serif !important}find-my-service .esri-icon-search:before{content:'SEARCH' !important;background-color:#4C8C2B;border:1px solid #4C8C2B;color:#fff;font-size:0.83333rem;font-family:\"Typold W05\", sans-serif;font-weight:500;letter-spacing:.1em;line-height:1rem;padding:0.5rem 0.66667rem;text-transform:uppercase}find-my-service .esri-feature{background:none !important;font-family:\"Merriweather\", serif !important}@media (min-width: 37.5em){find-my-service body{font-size:1rem !important}}find-my-service .esri-search__clear-button:hover{background:none !important}find-my-service .esri-icon-close{height:100%}";

const FindMyService = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.categories = [];
    this.council = false;
  }
  async loadSearchWidget() {
    const [{ default: Search }, { default: LocatorSearchSource }] = await Promise.all([
      await import('./Search-d7e6f0cf.js'),
      await import('./LocatorSearchSource-660fdf8a.js').then(function (n) { return n.L; })
    ]);
    const search = new Search({ container: 'search',
      includeDefaultSources: false,
      sources: [new LocatorSearchSource({
          url: "https://maps.raleighnc.gov/arcgis/rest/services/Locators/FindMyService/GeocodeServer",
          placeholder: "Enter your address"
        })]
    });
    return search;
  }
  async loadGroup(id) {
    const [{ default: Portal }] = await Promise.all([
      await import('./Portal-5df9f5a7.js').then(function (n) { return n.P; })
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
  async loadMaps(items) {
    const [{ default: WebMap }] = await Promise.all([
      await import('./WebMap-6650732a.js')
    ]);
    const promises = [];
    items.forEach(item => {
      promises.push(new WebMap({ portalItem: { id: item.id } }).loadAll());
    });
    return await Promise.all(promises);
  }
  async searchMapLayers(geometry, maps) {
    this.categories = [...[]];
    let categories = [...[]];
    let mapCount = 0;
    maps.forEach(async (map) => {
      let layers = [...[]];
      const promises = [];
      map.layers.forEach(async (layer) => {
        promises.push(layer.queryFeatures({ geometry: geometry, outFields: ['*'] }));
      });
      const featuresets = await Promise.all(promises);
      mapCount += 1;
      featuresets.forEach((featureSet, i) => {
        layers = [...layers, { title: map.layers.getItemAt(i).title, features: featureSet.features, id: map.layers.getItemAt(i).id }];
      });
      categories = [...categories, { title: map.portalItem.title, layers: layers }];
      if (mapCount === maps.length) {
        this.categories = [...categories];
        categories.sort((a, b) => {
          if (a.title < b.title) {
            return -1;
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
    const [{ default: Feature }] = await Promise.all([
      await import('./Feature-d7b2670c.js').then(function (n) { return n.a; })
    ]);
    setTimeout(() => {
      let widget = new Feature({ container: id });
      widget.graphic = feature;
    }, 200);
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
    return (h("div", null, h("div", { id: 'search' }), h("div", null, h("ol", { class: "o-layout-grid o-layout-grid--3" }, this.categories.map((webmap) => {
      return h("li", { class: "o-layout-grid__item" }, h("div", null, h("h3", null, webmap.title), webmap.layers.map((layer) => {
        return layer.features.length > 0 ? h("div", null, layer.features.map((feature, i) => {
          {
            this.loadFeatureWidget(layer.id + '_' + i, feature);
          }
          return h("div", { id: layer.id + '_' + i });
        }))
          : h("div", { class: "esri-feature esri-widget" }, h("h4", { class: "esri-feature__title" }, layer.title), h("div", { class: "esri-feature__text esri-feature__content-element" }, h("div", { class: "esri-feature__main-container" }, "Service not provided for this address")));
      })));
    })))));
  }
};
FindMyService.style = findMyServiceCss;

export { FindMyService as find_my_service };
