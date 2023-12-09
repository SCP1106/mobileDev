import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  selectedOption: string | null = null;

  selectOption(option: string) {
    this.selectedOption = option;
    console.log('Selected Option:', option);
    // You can perform actions based on the selected option here
  }
  constructor() {}

  ngOnInit() {}
}

// export class RadioButtonStringPage {

// }
