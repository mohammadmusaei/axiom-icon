import {
  Component,
  OnInit,
  Input,
  ElementRef
} from '@angular/core';

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
  styleUrls: ['./axiom-icon.component.scss']
})
export class AxiomIconComponent implements OnInit {

  @Input('ax-icon') icon: AxIcon;
  @Input() stroke: string = '#000';
  @Input() linecap: AxiomIconLinecap = 'round';
  @Input() linejoin: AxiomIconLinejoin = 'round';
  @Input() size: number = 28;
  @Input() thickness: number = 2;
  @Input() smartColor: boolean = true;
  @Input() parent: Element;

  constructor() { }

  public ngOnInit() {
    this.checkSmartColor();
  }

  private checkSmartColor(): void {
    if (this.smartColor && this.parent) {
      let dark: boolean;
      dark = this.checkParentColor(this.parent);
      if (dark && this.isDark(this.stroke)) {
        this.stroke = '#fff';
      }
      else {
        if (!this.isDark(this.stroke)) {
          this.stroke = '#333';
        }
      }
    }
  }

  private checkParentColor(element: Element): boolean {
    let color: any = window.getComputedStyle(element, null).getPropertyValue('background-color');
    return this.isDark(color);
  }

  private isDark(color: any): boolean {

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
    hsp = Math.sqrt(
      0.299 * (r * r) +
      0.587 * (g * g) +
      0.114 * (b * b)
    );
    if (hsp > 127.5) {
      return false;
    }
    else {
      return true;
    }

  }

}


