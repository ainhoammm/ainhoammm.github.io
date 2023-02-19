import { Component, OnInit } from '@angular/core';
// import * as EuropassParser from 'europass-parser';

import CVAinhoa from '../../../../assets/cv/ainhoaES.json';
import certifications from '../../../../assets/cv/ainhoaCertificaciones.json';

@Component({
  selector: 'app-cv-container',
  templateUrl: './cv-container.component.html',
  styleUrls: ['./cv-container.component.sass']
})
export class CvContainerComponent implements OnInit {

  sections: any;

  cv: any;
  certifications: any;

  constructor(
  ) {
    this.cv = CVAinhoa;
    this.certifications = certifications;

    this.sections = [
      {name: 'educationTrainings', items: this.cv.profile.educationTrainings},
      {name: 'workExperiences', items: this.cv.profile.workExperiences},
      //{name: 'certifications', items: this.cv.profile.customSections[0].records},
      //{name: 'customSections', items: this.cv.profile.customSections[0].records},
      //{name: 'organisationalSkills', items: this.cv.profile.organisationalSkills}
    ];
  }

  ngOnInit() {
  }

  print(){
    window.print();
  }

}
