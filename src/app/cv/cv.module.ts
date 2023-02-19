import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvRoutingModule } from './cv-routing.module';
import { TranslateModule } from '@ngx-translate/core';

import { CvContainerComponent } from './containers/cv-container/cv-container.component';
import { HeaderComponent } from './components/header/header.component';
import { SectionComponent } from './components/section/section.component';
import { SharedModule } from "../shared/shared.module";
import { CertificationComponent } from "./components/certification/certification.component";

@NgModule({
  declarations: [
    CvContainerComponent,
    HeaderComponent,
    SectionComponent,
    CertificationComponent
  ],
    imports: [
      CommonModule,
      CvRoutingModule,
      TranslateModule,
      SharedModule
    ]
})
export class CvModule { }
