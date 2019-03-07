import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnDestroy,
  Renderer2
} from '@angular/core';
import { AxiomIconConfig } from './axiom-icon-config';

export type AxIcon =
  'arrow-up' |
  'arrow-down' |
  'arrow-left' |
  'arrow-right' |
  'arrow-top-left' |
  'arrow-top-right' |
  'arrow-bottom-left' |
  'arrow-bottom-right' |
  'turn-bottom-left' |
  'turn-bottom-right' |
  'turn-top-left' |
  'turn-top-right' |
  'turn-left-bottom' |
  'turn-left-top' |
  'turn-right-bottom' |
  'turn-right-top' |
  'chevron-bottom' |
  'chevron-top' |
  'chevron-left' |
  'chevron-right' |
  'd-chevron-bottom' |
  'd-chevron-left' |
  'd-chevron-right' |
  'd-chevron-up' |
  'circle-arrow-up' |
  'circle-arrow-bottom' |
  'circle-arrow-left' |
  'circle-arrow-right' |
  'refresh-r' |
  'refresh' |
  'reload-r' |
  'reload' |
  'swap' |
  'login' |
  'login-alt' |
  'login-round' |
  'logout' |
  'logout-alt' |
  'logout-round' |
  'upload' |
  'download' |
  'upload-cloud' |
  'download-cloud' |
  'contract' |
  'expand' |
  'stock-down' |
  'stock-up' |
  'shuffle' |
  'move' |
  'full' |
  'new-window' |
  'hm-menu' |
  'apps' |
  'loading' |
  'warning-circle' |
  'warning-hx' |
  'warning-tr' |
  'question' |
  'information' |
  'hexagon' |
  'triangle' |
  'circle' |
  'square' |
  'plus' |
  'minus' |
  'multiple' |
  'plus-circle' |
  'minus-circle' |
  'multiple-circle' |
  'plus-square' |
  'minus-square' |
  'multiple-square' |
  'check-circle' |
  'check-square' |
  'check' |
  'block' |
  't-dot-h' |
  't-dot-v' |
  'edit-square' |
  'edit' |
  'edit-u' |
  'gear' |
  'setting' |
  'search' |
  'zoom-in' |
  'zoom-out' |
  'share' |
  'clock' |
  'eye' |
  'star' |
  'like' |
  'flag' |
  'bookmark' |
  'chat-bubble' |
  'chat-message' |
  'trash' |
  'moon' |
  'thumb-down' |
  'thumb-up' |
  'maximize' |
  'minimize' |
  'bell' |
  'mail' |
  'calendar' |
  'lock' |
  'unlock' |
  'buy' |
  'shopping-cart' |
  'pin' |
  'pin-altّ' |
  'pin-t' |
  'play' |
  'pause' |
  'play-circle' |
  'pause-circle' |
  'stop-circle' |
  'backward' |
  'forward' |
  'prev' |
  'next' |
  'volume-up' |
  'volume-down' |
  'mute' |
  'volume' |
  'music' |
  'video-off' |
  'video' |
  'camera' |
  'voice' |
  'movie' |
  'picture' |
  'podcast' |
  'file-blank' |
  'file-text' |
  'file-plus' |
  'file-minus' |
  'file-remove' |
  'file-plus-b' |
  'file-minus-b' |
  'file-remove-b' |
  'folder' |
  'folder-plus' |
  'folder-minus' |
  'folder-remove' |
  'folder-plus-b' |
  'folder-minus-b' |
  'folder-remove-b' |
  'bold' |
  'undeline' |
  'italic' |
  'overline' |
  'font' |
  'align-left' |
  'align-center' |
  'align-right' |
  'justify' |
  'table' |
  'table-alt' |
  'list' |
  'save' |
  'cut' |
  'copy' |
  'paste' |
  'tag' |
  'link' |
  'attachment' |
  'remove-t' |
  'a-sign' |
  'precent' |
  'dollar' |
  'bluetooth' |
  'hashtag' |
  'power' |
  'command' |
  'wifi' |
  'screen' |
  'screen-cast' |
  'wifi-alt' |
  'user' |
  'user-check' |
  'user-minus' |
  'user-plus' |
  'user-remove' |
  'users' |
  'user-circle' |
  'bar-asc' |
  'bar' |
  'bar-desc' |
  'bar-alt' |
  'pie' |
  'pie-25' |
  'pie-12' |
  'pie-alt' |
  'pie-40' |
  'line-chart' |
  'line-chart-alt' |
  'computer' |
  'mobile' |
  'tablet' |
  'ipod' |
  'headphone' |
  'tv' |
  'watch' |
  'hard' |
  'database' |
  'phone' |
  'printer' |
  'rack' |
  'cpu' |
  'disk' |
  'layout-sh-l' |
  'layout-sh-r' |
  'layout-h-u' |
  'layout-h-d' |
  'layout-s-l' |
  'layout-s-r';

export type AxiomIconLinecap = 'butt' | 'round' | 'square';
export type AxiomIconLinejoin = 'arcs' | 'round' | 'bevel';

@Component({
  selector: 'ax-icon,[ax-icon]',
  templateUrl: './axiom-icon.component.html',
  styleUrls: ['./axiom-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host:{
    'class' : 'ax-icon',
    '[style.height.px]' : 'size',
    '[style.width.px]' : 'size'
  }
})
export class AxiomIconComponent implements OnInit, OnDestroy {

  @Input('ax-icon') icon: AxIcon;
  @Input() stroke: string = '#000';
  @Input() linecap: AxiomIconLinecap = 'round';
  @Input() linejoin: AxiomIconLinejoin = 'round';
  @Input() size: number = 28;
  @Input() thickness: number = 2;
  @Input() smartColor: boolean = true;
  @Input() parent: Element;

  constructor(config: AxiomIconConfig, private _change: ChangeDetectorRef, private _renderer: Renderer2) {
    this.stroke = config.stroke;
    this.linecap = config.linecap;
    this.linejoin = config.linejoin;
    this.size = config.size;
    this.thickness = config.thickness;
    this.smartColor = config.smartColor;
    this.parent = config.parent;
    config.refreshRequest.subscribe(r => {
      r && this.checkSmartColor();
    });
  }

  public ngOnInit() {
    this.checkSmartColor();
  }

  public ngOnDestroy(): void {

  }

  private checkSmartColor(): void {
    if (this.smartColor && this.parent) {
      const brightnessFactor = 123;
      let brightness = this.checkParentColor(this.parent);
      if (brightness < brightnessFactor && this.brightness(this.stroke) < brightnessFactor) {
        this.stroke = 'rgb(255,255,255)';
        this._change.detectChanges();
      }
      else if (brightness >= brightnessFactor && this.brightness(this.stroke) >= brightnessFactor) {
        this.stroke = 'rgb(3,3,3)';
        this._change.detectChanges();
      }
    }
  }

  private checkParentColor(element: Element): number {
    let color: any = window.getComputedStyle(element, null).getPropertyValue('background-color');
    return this.brightness(color);
  }

  private brightness(color: any): number {
    let r: number, g: number, b: number, hsp: number;
    if (color.match(/^rgb/)) {
      color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
      r = color[1];
      g = color[2];
      b = color[3];
    }
    else {
      color = +("0x" + color.slice(1).replace(
        color.length < 5 && /./g, '$&$&'));
      r = color >> 16;
      g = color >> 8 & 255;
      b = color & 255;
    }
    return (r * 299 + g * 587 + b * 114) / 1000;
  }

}


