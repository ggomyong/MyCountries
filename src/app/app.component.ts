import { Component } from '@angular/core';
import {Animal} from './animal';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';


/* 
  https://fontawesome.com/license
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyCountries';


  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'flag-usa-solid',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/flag-usa-solid.svg')
    );

  }



}
