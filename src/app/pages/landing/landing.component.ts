import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  navigations = [
    { name: 'Introduction', img: '../../../assets/images/cropped.jpg', url: '/who-we-are', subtitle: 'Hello' },
    { name: 'Shop', img: '../../../assets/images/pexels-igor-starkov-1002740.jpg', url: '/buy-from-us', subtitle: 'Buy!'},
    { name: 'Activity', img: '../../../assets/images/pexels-igor-starkov-1002740.jpg', url: '/what-we-did', subtitle: 'Hola!'},
  ]
  breakpoint:number=3;

  test:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  onResize() {
    console.log(window.innerWidth);

    if (window.innerWidth<850) {
      this.breakpoint=1;
    }
    else if (window.innerWidth<1050) {
      this.breakpoint=2;
    }
    else if (window.innerWidth<1200) {
      this.breakpoint=3;
    }
    else {
      this.breakpoint=3;
    }
  }

}
