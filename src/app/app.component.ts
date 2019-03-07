
import { AxiomIconLinejoin, AxiomIconLinecap, AxiomIconConfig, AxIcon } from 'ax-icon';
import { Component, ChangeDetectorRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    AxiomIconConfig
  ]
})
export class AppComponent {

  icons = ["arrow-up", "arrow-down", "arrow-left", "arrow-right", "arrow-top-left", "arrow-top-right", "arrow-bottom-left", "arrow-bottom-right", "turn-bottom-left", "turn-bottom-right", "turn-top-left", "turn-top-right", "turn-left-bottom", "turn-left-top", "turn-right-bottom", "turn-right-top", "chevron-bottom", "chevron-top", "chevron-left", "chevron-right", "d-chevron-bottom", "d-chevron-left", "d-chevron-right", "d-chevron-up", "circle-arrow-up", "circle-arrow-bottom", "circle-arrow-left", "circle-arrow-right", "refresh-r", "refresh", "reload-r", "reload", "swap", "login", "login-alt", "login-round", "logout", "logout-alt", "logout-round", "upload", "download", "upload-cloud", "download-cloud", "contract", "expand", "stock-down", "stock-up", "shuffle", "move", "full", "new-window", "hm-menu", "apps", "loading", "warning-circle", "warning-hx", "warning-tr", "question", "information", "hexagon", "triangle", "circle", "square", "plus", "minus", "multiple", "plus-circle", "minus-circle", "multiple-circle", "plus-square", "minus-square", "multiple-square", "check-circle", "check-square", "check", "block", "t-dot-h", "t-dot-v", "edit-square", "edit", "edit-u", "gear", "setting", "search", "zoom-in", "zoom-out", "share", "clock", "eye", "star", "like", "flag", "bookmark", "chat-bubble", "chat-message", "trash", "moon", "thumb-down", "thumb-up", "maximize", "minimize", "bell", "mail", "calendar", "lock", "unlock", "buy", "shopping-cart", "pin",
    "pin-alt", "pin-t", "play", "pause", "play-circle", "pause-circle", "stop-circle", "backward", "forward", "prev", "next", "volume-up", "volume-down", "mute", "volume", "music", "video-off", "video", "camera", "voice", "movie", "picture", "podcast", "file-blank", "file-text", "file-plus", "file-minus", "file-remove", "file-plus-b", "file-minus-b", "file-remove-b", "folder", "folder-plus", "folder-minus", "folder-remove", "folder-plus-b", "folder-minus-b", "folder-remove-b", "bold", "undeline", "italic", "overline", "font", "align-left", "align-center", "align-right", "justify", "table", "table-alt", "list", "save", "cut", "copy", "paste", "tag", "link", "attachment", "remove-t", "a-sign", "precent", "dollar", "bluetooth", "hashtag", "power", "command", "wifi", "screen", "screen-cast", "wifi-alt", "user", "user-check", "user-minus", "user-plus", "user-remove", "users", "user-circle", "bar-asc", "bar", "bar-desc", "bar-alt", "pie", "pie-25", "pie-12", "pie-alt", "pie-40", "line-chart", "line-chart-alt", "computer", "mobile", "tablet", "ipod", "headphone", "tv", "watch", "hard", "database", "phone", "printer", "rack", "cpu", "disk", "layout-sh-l", "layout-sh-r", "layout-h-u", "layout-h-d", "layout-s-l", "layout-s-r"];

  model = {
    color: '#000',
    bg: '#fff',
    smartColor: true,
    linejoin: 'round',
    linecap: 'round',
    size: 28
  };

  linejoins: AxiomIconLinejoin[] = [
    'arcs',
    'round',
    'bevel'
  ]
  linecaps: AxiomIconLinecap[] = [
    'butt',
    'round',
    'square'
  ]

  code: string;
  copyIcon : AxIcon = 'copy';
  copyText  = 'Copy';

  constructor(private _config: AxiomIconConfig, private _changeDetector: ChangeDetectorRef, private _modalService: NgbModal) {

  }

  public bgChange(): void {
    setTimeout(() => {
      this._config.refresh();
    }, 100);
  }

  public copy(elm: HTMLTextAreaElement): void {
    elm.select();
    document.execCommand("copy");
    this.copyIcon = 'check';
    this.copyText  = 'Code copied!';
  }

  public open(content: any, icon: string) {
    this.copyIcon = 'copy';
    this.copyText  = 'Copy';
    this.code = `
    <i [ax-icon]="${icon}" [stroke]="'${this.model.color}'"
      [linejoin]="'${ this.model.linejoin}'" 
      [linecap]="'${ this.model.linecap}'" 
      [smartColor]="'${ this.model.smartColor}'">
    </i>`;
    this._modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg', centered: true, keyboard: true, windowClass: 'code-modal' }).result.then((result) => {

    }, (reason) => {

    });
  }

  public smartColorChange(checked: boolean): void {
    this.model.color = '#000000';
    this.model.bg = '#ffffff';
    if (checked) {
      setTimeout(() => {
        this._config.refresh();
      }, 100);
    }
    else {
      this._changeDetector.detectChanges();
    }
  }

}
