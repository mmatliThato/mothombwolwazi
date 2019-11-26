
import { AuthService } from '../user/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import * as firebase from 'firebase';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
declare var window;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  phoneNumber = '';
  password;
  registrationForm;
  smsSent;
  confirmationResult = '';
  inputCode;
  public recaptchaVerifier: firebase.auth.RecaptchaVerifier;

  constructor(
    public authService: AuthService,
    public formBuilder: FormBuilder,
    public alertController: AlertController,
    public route: Router,
    ) {
      this.smsSent = false;

      firebase.auth().languageCode = 'en';

      this.registrationForm = formBuilder.group({
    phoneNumber: [this.phoneNumber, Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
    // throw new Error("Method not implemented.");
  }

  requestCode() {
    this.phoneNumber = this.registrationForm.get('phoneNumber').value;
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    console.log(window.recaptchaVerifier);
    let appVerifier = window.recaptchaVerifier;
    return this.authService.requestLogin(this.phoneNumber, appVerifier).then(result => {
      if (result.success === true) {
        console.log(result);
        this.confirmationResult = result.result;
        console.log(this.confirmationResult);
      }
    });
  }

  logins(code) {
    if (this.confirmationResult !== '') {
      return this.authService.login(code, this.confirmationResult).then(result => {
        console.log(result);
      });
    }
  }

  addUser() {
    this.phoneNumber = this.registrationForm.get('phoneNumber').value;
    console.log(this.phoneNumber);
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      size: 'invisible',
      callback: (response) => {
        console.log('checking here');
        console.log(response);
      },
      'expired-callback': () => {
      }
    });
    console.log(window.recaptchaVerifier);
    let appVerifier = window.recaptchaVerifier;
    return this.authService.requestLogin(this.phoneNumber, appVerifier).then(result => {
      if (result.success === true) {
        console.log(result);
        this.confirmationResult = result.result;
        console.log(this.confirmationResult);
        this.alert();
      }
    });
  }

  async alert() {
    const alert = await this.alertController.create({
      header: 'Verfification code',
      // subHeader: 'Enter verification code',
      inputs: [
        {
          name: 'code',
          type: 'text',
          placeholder: 'Enter code'
        }],
      buttons: [{
        text: 'Submit',
        role: 'submit',
        cssClass: 'secondary',
        handler: (result) => {
          console.log(result.code);
          this.logins(result.code);
          this.route.navigateByUrl('/home');
        }
      }]
    });
    await alert.present();
  }

  login() {
    this.phoneNumber = this.registrationForm.get('phoneNumber').value;
    console.log(this.phoneNumber);
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    console.log(window.recaptchaVerifier);
    let appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(String(this.phoneNumber), appVerifier).then(confirmationResult => {
      window.confirmationResult = confirmationResult;
    }).catch((error) => {
      console.log(error);
    });
  }

}