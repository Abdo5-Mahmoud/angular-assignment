import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { companyDetails } from '../app.component.model';

@Component({
  selector: 'app-header',
  imports:[NgClass,NgIf],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  showButton:boolean=false;

  @Input() headerTitle!: companyDetails;
  @Input() headerDetails!: companyDetails;

  toggleButton(){
    this.showButton=!this.showButton;
    // console.log(this.showButton);

  }
}
