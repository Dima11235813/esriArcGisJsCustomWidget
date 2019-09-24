/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import {subclass, declared, property} from "esri/core/accessorSupport/decorators";

import Widget = require("esri/widgets/Widget");

import { renderable, tsx } from "esri/widgets/support/widget";

const CSS = {
  base: "esri-hello-world",
  emphasis: "esri-hello-world--emphasis"
};

@subclass("esri.widgets.HelloWorld")
class HelloWorld extends declared(Widget) {

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  firstName
  //----------------------------------

  @property()
  @renderable()
  firstName: string = "John";

  //----------------------------------
  //  lastName
  //----------------------------------

  @property()
  @renderable()
  lastName: string = "Smith";

  //----------------------------------
  //  emphasized
  //----------------------------------

  @property()
  @renderable()
  emphasized: boolean = false;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------


  render() {
    const greeting = this._getGreeting();
    const classes = {
      [CSS.emphasis]: this.emphasized
    };

    return (
      <div class={this.classes(CSS.base, classes)}>
        {greeting}
      </div>
      );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _getGreeting(): string {
    return `Hello, my name is ${this.firstName} ${this.lastName}!`;
  }

}

export = HelloWorld;
        //The first two lines refer to triple slash directives used in TypeScript. These import directives are still needed as our TypeScript library relies on some functionality within them. 
        //The __extends and __decorate names are helpers when extending a class or decorating members of a class.
        //https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html
        
        
        
        // import EsriMap from "esri/Map";
        // import MapView from "esri/views/MapView";
        // // esri/widgets/Editor
        // import Editor from 'esri/widgets/Editor'
        
// declare var require: any

// const map = new EsriMap({
//     basemap: "streets"
// });

// const view = new MapView({
//     map: map,
//     container: "viewDiv",
//     center: [-118.244, 34.052],
//     zoom: 12
// });

// var editor = new Editor({
//     view: view
// });

// view.ui.add(editor, "top-right");