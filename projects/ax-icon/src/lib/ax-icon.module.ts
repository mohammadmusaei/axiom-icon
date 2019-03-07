import { NgModule } from '@angular/core';
import { AxiomIconComponent } from './axiom-icon.component';
import { CommonModule } from '@angular/common';

export { AxiomIconConfig } from './axiom-icon-config';

@NgModule({
  declarations: [
    AxiomIconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [AxiomIconComponent]
})
export class AxIconModule { }
