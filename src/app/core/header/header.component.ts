import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  collapse: boolean=false;
  toggle: boolean =false;


  age: number = 3;
  name: string= 'John Doe';


  constructor() { }

  ngOnInit(): void {
    console.log(window.innerWidth);
    //if screen size is smaller than some value
    // collapse=true;
    //if screen size is greater than some value
    // collapse=false;
  }

  clickEvent() {
    
  }

  clickFunction() {
    //if toggle is false
    //  toggle=true;
    //if toggle is true
    //  toggle=false;

    this.toggle=!this.toggle;
  }

}
