import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.sass']
})
export class CertificationComponent implements OnInit {

  @Input() certification: any;

  constructor() { }

  ngOnInit(): void {
  }

  getErrorImage(event: any){
    if(event){
      event.target.src='assets/images/no-img.png';
    }
  }

}
