import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [],
  imports: [
    TranslateModule,
    CommonModule
  ],
  exports: [
    TranslateModule
  ]
})
export class SharedModule { }
