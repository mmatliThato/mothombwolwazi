import { Component, OnInit } from '@angular/core';
declare var window;

import * as firebase from 'firebase'
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../user/auth.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { ActionSheetController } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  name;
  surname;
  role;
  email;
  phoneNumber;
  db = firebase.firestore();

  RegisterForm: FormGroup;
  ErrorMessage;
  confirmationResult;

  // image code
  used;
  image;

  constructor(
    public authService: AuthService,
    public formGroup: FormBuilder,
    private router: Router,
    public alertController: AlertController,
    public route: Router,
    private file: File,
    private camera: Camera,
    public loadingController: LoadingController,
    public actionSheetController: ActionSheetController
  ) {
    // validation
    this.RegisterForm = formGroup.group({
      Name : ['', [Validators.required, Validators.pattern('[a-zA-Z]+$')]],
      Surname : ['', [Validators.required, Validators.pattern('[a-zA-Z]+$')]],
    });

    this.signup();
   }

  ngOnInit() {
    
  }

  signup() {
    // inserting into database
    firebase.firestore().collection('cmsUsers/').doc(firebase.auth().currentUser.uid).collection('cmsUser/').doc().set({
      username: "nathi",
      surnamez: "tcf",
      phoneNumber: "0614719972",
      role: "admin",
      // id: firebase.auth().currentUser.uid,
      // hasProfilePic: false,
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        return errorMessage;
      });
    // this.route.navigateByUrl('/home');
    console.log("user registered");
  }

  signedIn() {
    return new Promise((resolve, reject) => {
     firebase.auth().onAuthStateChanged((user) => {
       if (user) {
           // User is signed in.
           resolve( user.uid);
           // console.log(this.ID);
        } else {
       //No user is signed in.
         //  this.router.navigate(['/login']);
         }
     });
    });
   }

  saveProfilePic(image) {
    this.signedIn().then((userID) => {
      let storageRef = firebase.storage().ref('usersProfilePic/' + firebase.auth().currentUser.uid);
      let rootRef = firebase.database().ref('users/' + firebase.auth().currentUser.uid + '/hasProfilePic');
      console.log(storageRef);
      console.log(image);

      return storageRef.put(image).then( (data) => {
        console.log("saved to database");
        console.log(data);
        return rootRef.set(true);
      });
    });
    }

  pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      console.log(imageData);

      var name = imageData.substring(imageData.lastIndexOf('/') + 1,  imageData.length);
      console.log(name);
      if (sourceType == this.camera.PictureSourceType.PHOTOLIBRARY) {
        name = name.substring(0, name.lastIndexOf('?'));
      }
      console.log(name);

      var dirrectory = imageData.substring(0, imageData.lastIndexOf('/') + 1 );
      this.file.readAsDataURL(dirrectory, name).then((result) => {
        console.log(result);
        this.image = result;
      });

      this.file.readAsArrayBuffer(dirrectory, name).then((buffer) => {
        var blob = new Blob([buffer] , {type: "image/jpeg"});
        console.log(buffer);
        console.log(blob.size);
        console.log(blob);
        this.saveProfilePic(blob);
      }).then(() => {
        if (sourceType == this.camera.PictureSourceType.CAMERA) {
        }
      });
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      // let base64Image = 'data:image/jpeg;base64,' + imageData;

    }, (err) => {
      // Handle error
    });
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [{
        text: 'Load from Gallary',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use Camera',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }

  getUserProfile(userId) {
    return firebase.database().ref("users/" + firebase.auth().currentUser.uid).once('value').then(snapshot => {
      let profile = snapshot.val();
      console.log(profile.hasProfilePic);
      if (profile.hasProfilePic) {
        console.log("has a profile pic");

        return firebase.storage().ref('usersProfilePic/' + firebase.auth().currentUser.uid).getDownloadURL().then( url => {
          profile['profilePicUrl'] = url;
          return profile;
        });
      } else {
        console.log("do not haves a profile pic");
        profile['profilePicUrl'] = 'assets/images/cool-avatar.png';
        return profile;
      }
    });
  }

    async loadData() {
      const loader = await this.loadingController.create({
        spinner: 'bubbles',
  //     message: 'loading user Information...'
      });
      // retrieving profile pic from service
      this.getUserProfile(firebase.auth().currentUser.uid).then( userPic => {
        if (userPic.profilePicUrl) {
          this.image = userPic.profilePicUrl;
        }
        console.log(userPic['profilePicUrl']);
      });
      loader.dismiss();
    }

}
