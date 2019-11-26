import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {

  db = firebase.firestore();

  prices;
  getprice;

  OverallSubTotal;
  OverallVat;
  OverallGrandTotal;

  GH001;
  NFAL01;
  PAP005;
  PAP007;
  PAP001;
  PAP003;
  HD001;
  LD001;
  LD003;
  PET001;
  PET003;
  PET005;

  GH001mass;
  NFAL01mass;
  PAP005mass;
  PAP007mass;
  PAP001mass;
  PAP003mass;
  HD001mass;
  LD001mass;
  LD003mass;
  PET001mass;
  PET003mass;
  PET005mass;

  GH001storagemass;
  NFAL01storagemass;
  PAP005storagemass;
  PAP007storagemass;
  PAP001storagemass;
  PAP003storagemass;
  HD001storagemass;
  LD001storagemass;
  LD003storagemass;
  PET001storagemass;
  PET003storagemass;
  PET005storagemass;

  // GH001
  GH001SubTotal;
  GH001Vat;
  GH001GrandTotal;

  // NFAL01;
  NFAL01SubTotal;
  NFAL01Vat;
  NFAL01GrandTotal;

  // PAP005;
  PAP005SubTotal;
  PAP005Vat;
  PAP005GrandTotal;

  // PAP007;
  PAP007SubTotal;
  PAP007Vat;
  PAP007GrandTotal;

  // PAP001;
  PAP001SubTotal;
  PAP001Vat;
  PAP001GrandTotal;

  // PAP003;
  PAP003SubTotal;
  PAP003Vat;
  PAP003GrandTotal;

  // HD001;
  HD001SubTotal;
  HD001Vat;
  HD001GrandTotal;

  // LD001;
  LD001SubTotal;
  LD001Vat;
  LD001GrandTotal;

  // LD003;
  LD003SubTotal;
  LD003Vat;
  LD003GrandTotal;

  // PET001;
  PET001SubTotal;
  PET001Vat;
  PET001GrandTotal;

  // PET003;
  PET003SubTotal;
  PET003Vat;
  PET003GrandTotal;

  // PET005;
  PET005SubTotal;
  PET005Vat;
  PET005GrandTotal;
  

  constructor(
    public formBuilder: FormBuilder,
    public alertController: AlertController,
    public route: Router,
  ) { }

  ngOnInit() {
    // GH001
    if (this.GH001mass = null) {
      this.GH001mass = 0;
    } else {
      this.GH001GrandTotal = this.GH001mass * this.GH001;
      this.GH001Vat = this.GH001GrandTotal / 0.15;
      this.GH001SubTotal = this.GH001GrandTotal - this.GH001Vat;
      console.log(this.GH001GrandTotal);
      console.log(this.GH001Vat);
      console.log(this.GH001SubTotal);
    }

    // NFAL01
    if (this.NFAL01mass = null) {
      this.NFAL01mass = 0;
    } else {
      this.NFAL01GrandTotal = this.NFAL01 * this.NFAL01;
      this.NFAL01Vat = this.NFAL01GrandTotal / 0.15;
      this.NFAL01SubTotal = this.NFAL01GrandTotal - this.NFAL01Vat;
      console.log(this.NFAL01GrandTotal);
      console.log(this.NFAL01Vat);
      console.log(this.NFAL01SubTotal);
    }

    //   PAP005;
    if (this.PAP005mass = null) {
      this.PAP005mass = 0;
    } else {
      this.PAP005GrandTotal = this.PAP005mass * this.PAP005;
      this.PAP005Vat = this.PAP005GrandTotal / 0.15;
      this.PAP005SubTotal = this.PAP005GrandTotal - this.PAP005Vat;
      console.log(this.PAP005GrandTotal);
      console.log(this.PAP005Vat);
      console.log(this.PAP005SubTotal);
    }

    // PAP007
    if (this.PAP007mass = null) {
      this.PAP007mass = 0;
    } else {
      this.PAP007GrandTotal = this.PAP007mass * this.PAP007;
      this.PAP007Vat = this.PAP007GrandTotal / 0.15;
      this.PAP007SubTotal = this.PAP007GrandTotal - this.PAP007Vat;
      console.log(this.PAP007GrandTotal);
      console.log(this.PAP007Vat);
      console.log(this.PAP007SubTotal);
    }

    // PAP001
    if (this.PAP001mass = null) {
      this.PAP001mass = 0;
    } else {
      this.PAP001GrandTotal = this.PAP001mass * this.PAP001;
      this.PAP001Vat = this.PAP001GrandTotal / 0.15;
      this.PAP001SubTotal = this.PAP001GrandTotal - this.PAP001Vat;
      console.log(this.PAP001GrandTotal);
      console.log(this.PAP001Vat);
      console.log(this.PAP001SubTotal);
    }

    // PAP003
    if (this.PAP003mass = null) {
      this.PAP003mass = 0;
    } else {
      this.PAP003GrandTotal = this.PAP003mass * this.PAP003;
      this.PAP003Vat = this.PAP003GrandTotal / 0.15;
      this.PAP003SubTotal = this.PAP003GrandTotal - this.PAP003Vat;
      console.log(this.PAP003GrandTotal);
      console.log(this.PAP003Vat);
      console.log(this.PAP003SubTotal);
    }

    // HD001
    if (this.HD001mass = null) {
      this.HD001mass = 0;
    } else {
      this.HD001GrandTotal = this.HD001mass * this.HD001;
      this.HD001Vat = this.HD001GrandTotal / 0.15;
      this.HD001SubTotal = this.HD001GrandTotal - this.HD001Vat;
      console.log(this.HD001GrandTotal);
      console.log(this.HD001Vat);
      console.log(this.HD001SubTotal);
    }

    // LD001
    if (this.LD001mass = null) {
      this.LD001mass = 0;
    } else {
      this.LD001GrandTotal = this.LD001mass * this.LD001;
      this.LD001Vat = this.LD001GrandTotal / 0.15;
      this.LD001SubTotal = this.LD001GrandTotal - this.LD001Vat;
      console.log(this.LD001GrandTotal);
      console.log(this.LD001Vat);
      console.log(this.LD001SubTotal);
    }

    // LD003
    if (this.LD003mass = null) {
      this.LD003mass = 0;
    } else {
      this.LD003GrandTotal = this.LD003mass * this.LD003;
      this.LD003Vat = this.LD003GrandTotal / 0.15;
      this.LD003SubTotal = this.LD003GrandTotal - this.LD003Vat;
      console.log(this.LD003GrandTotal);
      console.log(this.LD003Vat);
      console.log(this.LD003SubTotal);
    }

    // PET005
    if (this.PET005mass = null) {
      this.PET005mass = 0;
    } else {
      this.PET005GrandTotal = this.PET005mass * this.PET005;
      this.PET005Vat = this.PET005GrandTotal / 0.15;
      this.PET005SubTotal = this.PET005GrandTotal - this.PET005Vat;
      console.log(this.PET005GrandTotal);
      console.log(this.PET005Vat);
      console.log(this.PET005SubTotal);
    }

    // PET001
    if (this.PET001mass = null) {
      this.PET001mass = 0;
    } else {
      this.PET001GrandTotal = this.PET001mass * this.PET001;
      this.PET001Vat = this.PET001GrandTotal / 0.15;
      this.PET001SubTotal = this.PET001GrandTotal - this.PET001Vat;
      console.log(this.PET001GrandTotal);
      console.log(this.PET001Vat);
      console.log(this.PET001SubTotal);
    }

    // PET003
    if (this.PET003mass = null) {
      this.PET003mass = 0;
    } else {
      this.PET003GrandTotal = this.PET003mass * this.PET003;
      this.PET003Vat = this.PET003GrandTotal / 0.15;
      this.PET003SubTotal = this.PET003GrandTotal - this.PET003Vat;
      console.log(this.PET003GrandTotal);
      console.log(this.PET003Vat);
      console.log(this.PET003SubTotal);
    }

    // overall GrandTotal
    this.OverallGrandTotal = this.GH001GrandTotal + this.NFAL01GrandTotal + this.PAP005GrandTotal + this.PAP007GrandTotal + this.PAP001GrandTotal + 
    this.PAP003GrandTotal + this.HD001GrandTotal + this.LD001GrandTotal + this.LD003GrandTotal + this.PET001GrandTotal + this.PET003GrandTotal + this.PET005GrandTotal;
    console.log(this.OverallGrandTotal);

    // overall GrandTotal
    this.OverallSubTotal = this.GH001GrandTotal + this.NFAL01GrandTotal + this.PAP005GrandTotal + this.PAP007GrandTotal + this.PAP001GrandTotal + 
    this.PAP003GrandTotal + this.HD001GrandTotal + this.LD001GrandTotal + this.LD003GrandTotal + this.PET001GrandTotal + this.PET003GrandTotal + this.PET005GrandTotal;
    console.log(this.OverallSubTotal);

    // overall GrandTotal
    this.OverallVat = this.GH001GrandTotal + this.NFAL01GrandTotal + this.PAP005GrandTotal + this.PAP007GrandTotal + this.PAP001GrandTotal + 
    this.PAP003GrandTotal + this.HD001GrandTotal + this.LD001GrandTotal + this.LD003GrandTotal + this.PET001GrandTotal + this.PET003GrandTotal + this.PET005GrandTotal;
    console.log(this.OverallVat);

  }

  getprices() {
    this.getprice = this.db.collection('price').onSnapshot(snapshot => {
      snapshot.forEach(element => {
        this.GH001 = element.data().gl001;
        this.HD001 = element.data().hd001;
        this.LD001 = element.data().ld001;
        this.LD003 = element.data().ld003;
        this.NFAL01 = element.data().nfalo1;
        this.PAP001 = element.data().pap001;
        this.PAP003 = element.data().pap003;
        this.PAP005 = element.data().pap005;
        this.PAP007 = element.data().pap007;
        this.PET001 = element.data().pet001;
        this.PET003 = element.data().pet003;
        this.PET005 = element.data().PET005;
      });
      console.log(this.GH001);
      console.log(this.HD001);
      console.log(this.LD003);
      console.log(this.NFAL01);
      console.log(this.PAP001);
      console.log(this.PAP003);
      console.log(this.PAP005);
      console.log(this.PET001);
      console.log(this.PET003);
      console.log(this.PET005);
    });
  }

  getMasses() {
    this.getprice = this.db.collection('storage').onSnapshot(snapshot => {
      snapshot.forEach(element => {
        this.GH001storagemass = element.data().gl001;
        this.NFAL01storagemass = element.data().nfal01;
        this.PAP005storagemass = element.data().pap005;
        this.PAP007storagemass = element.data().pap007;
        this.PAP001storagemass = element.data().pap001;
        this.PAP003storagemass = element.data().pap003;
        this.HD001storagemass = element.data().hd001;
        this.LD001storagemass = element.data().ld001;
        this.LD003storagemass = element.data().ld003;
        this.PET001storagemass = element.data().pet001;
        this.PET003storagemass = element.data().pet003;
        this.PET005storagemass = element.data().pet005;
      });
      console.log(this.GH001);
      console.log(this.HD001);
      console.log(this.LD003);
      console.log(this.NFAL01);
      console.log(this.PAP001);
      console.log(this.PAP003);
      console.log(this.PAP005);
      console.log(this.PET001);
      console.log(this.PET003);
      console.log(this.PET005);
      console.log(this.PET005);
      console.log(this.PET005);
    });
  }

  savedata() {
    
  }

}
