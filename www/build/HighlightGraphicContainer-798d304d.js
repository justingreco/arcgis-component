import { e, n as n$1 } from './cast-3d5be210.js';
import { I } from './Utils-b4b0f45e.js';
import { t } from './BaseGraphicContainer-5ce21891.js';
import { _ } from './enums-4770f29d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let i=class extends t{doRender(e){e.drawPhase===I.HIGHLIGHT&&super.doRender(e);}renderChildren(e){if(this.attributeView.bindTextures(e.context),!this.children.some((e=>e.hasData)))return;super.renderChildren(e);const{painter:r}=e,s=r.effects.highlight;s.bind(e),e.context.setColorMask(!0,!0,!0,!0),e.context.clear(_.COLOR_BUFFER_BIT),this._renderChildren(e,s.defines.concat(["highlightAll"])),s.draw(e),s.unbind();}};i=e([n$1("esri.views.2d.layers.support.HighlightGraphicContainer")],i);const n=i;

export { n };
