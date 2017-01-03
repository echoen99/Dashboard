import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-to-view',
  templateUrl: './info-to-view.component.html'
})
export class InfoToViewComponent implements OnInit {

  isOpen: boolean = false;

  private items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  dropdownMenu: Array<any> = [
    {
      text: 'Dynamic 1',
    },
    {
      text: 'Dynamic 2'
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}

