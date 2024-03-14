import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdComponentComponent } from './md-component/md-component.component';

@NgModule({
  declarations: [MdComponentComponent],
  imports: [CommonModule],
  exports: [MdComponentComponent],
})
export class FirstModuleModule {}
