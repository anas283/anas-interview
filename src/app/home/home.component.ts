import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  contactForm!: FormGroup;
  countrySelected = false;
  formError = false;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.contactForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      work_email: ['', Validators.required],
      company_name: ['', Validators.required],
      company_size: ['', Validators.required],
      country: ['', Validators.required],
      notes: ['']
    })
  }

  selectCountry() {
    this.countrySelected = true;
  }

  submit() {
    if(this.contactForm.valid) {
      this.formError = false;
      console.log(this.contactForm.value);
    } else {
      this.formError = true;
    }
  }
}
