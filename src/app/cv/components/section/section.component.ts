import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.sass']
})
export class SectionComponent implements OnInit {

  @Input() section: any;

  constructor() { }

  ngOnInit(): void {
  }

  getErrorImage(event: any){
    if(event){
      event.target.src='assets/images/no-img.png';
    }

  }

}
