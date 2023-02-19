import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  @Input() personalInformation: any;
  @Input() photo: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
