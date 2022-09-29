import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public headerOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  } 

  toggleHeader() {
    this.headerOpen = !this.headerOpen
    console.log("click");

  }

}
