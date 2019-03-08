# Axiom Icon

### Online Demo

[Usage Demo](http://app.musaei.me/angular/icon/)

### Demo source is here

[source](https://github.com/mohammadmusaei/axiom-icon/tree/master/src)

### Installation

##### Install component package from npm :

`npm install ax-icon`

##### Import component module :

```typescript

import { AxiomIconModule } from 'ax-icon';

...

@NgModule({
  imports: [
    AxiomIconModule
  ], 
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})

...

```

### Usage

Use `[ax-icon]` attribute component for `<i>` tag and assign an icon name to it. 

```html

<i [ax-icon]="download"
   [stroke]="'#000" 
   [size]="32" 
   [linejoin]="'round'"
   [linecap]="'round'">
</i>


```

### Smart Color

By assigning `[smartColor]` and `[parent]` attributes to `ax-icon`, Component adapt its stroke color with parent background. Therefore when parent background is dark, stroke color will be light, and vice-versa.

```html

 <div #parent>
  
   <i [ax-icon]="download"
     [stroke]="'#000" 
     [smartColor]="true"
     [parent]="parent"
     [size]="32" 
     [linejoin]="'round'"
     [linecap]="'round'">
  </i>
  
 </div>

```

When parent background change dynamaticaly, you can call icons refreshing themselves by `AxiomIconConfig` service.

First import it:

```typescript

  constructor(private _config: AxiomIconConfig) {

  }
  
```
And then use refresh function:

```typescript

  this._config.refresh();
  
```

Because `AxiomIconConfig` is a global service, All icons will refresh.


### @Input() Params

| Name | Type | Default | Usage |
| ------ | ------ | ------ | ------ |
| ax-icon | AxIcon | --- | Icon name |
| stroke | string | #00000 |  Icon color |
| size | number | 28 | Icon size in pixel |
| linejoin | AxiomIconLinejoin | round | `linejoin` is a presentation attribute defining the shape to be used at the corners of paths when they are stroked. Available values are : `arcs`, `round`, `bevel` |
| linecap | AxiomIconLinecap  | round | `linecap` attribute is a presentation attribute defining the shape to be used at the end of open subpaths when they are stroked. Available values are : `butt`, `round`, `square` |
| smartColor | boolean  | true | Adaptive stroke color related to parent background |
| parent | element  | --- | Parent element that will be use for smart color feature |

## License

[MIT](http://opensource.org/licenses/MIT)
