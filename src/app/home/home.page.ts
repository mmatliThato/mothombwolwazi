import { data } from 'jquery';
import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pricess = {
    gl001: null,

    hd001: null,
    pap005: null,
    pap007: null,
    pap001: null,
    pap003: null,
    ld003: null,
    nfalo1:null,
    pet005:null,
    pet003:null
  }
db=firebase.firestore();
price=[];
prices
  constructor() {




  

    this.prices = this.db.collection('price').doc("SinUfRNnbB073KZiDIZE");
    this.prices.get().then((documentSnapshot) => {
      this.price = [];
      console.log(documentSnapshot.data());
      this.price.push(documentSnapshot.data());
      console.log(this.price);
      this.pricess.hd001 = documentSnapshot.data().hd001;
      this.pricess.gl001 = documentSnapshot.data().gl001;
      this.pricess.ld003 = documentSnapshot.data().ld003;
      this.pricess.nfalo1 = documentSnapshot.data().nfalo1;
      this.pricess.pap001 = documentSnapshot.data().pap001;
    
      this.pricess.pap005 = documentSnapshot.data().pap005;
   
      
    });
  }


    update(pricess){
      console.log(pricess)
      
      // To update age and favorite color:
      this.db.collection("price").doc("SinUfRNnbB073KZiDIZE").update({
        gl001:pricess.gl001
      })
      .then(function() {
        console.log("Document successfully updated!");
      });
        
      }


      



}
