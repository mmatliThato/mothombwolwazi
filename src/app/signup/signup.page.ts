import { Component, OnInit } from '@angular/core';
declare var window;

import * as firebase from 'firebase'
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../user/auth.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

firebase.auth().languageCode = 'it';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  name;
  surname;
  role;
  email;
  phoneNumber;
  db = firebase.firestore();

  RegisterForm: FormGroup;
  ErrorMessage;
  confirmationResult;


  constructor(
    public authService: AuthService,
    public formGroup: FormBuilder,
    private router: Router,
    public alertController: AlertController,
    public route: Router,
  ) {
   }

  ngOnInit() {
  }

}
