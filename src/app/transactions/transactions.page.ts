import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {

  db = firebase.firestore();

  prices;
  getprice;

  GH001;
  HD001;
  LD003;
  NFAL01;
  PAP001;
  PAP003;
  PAP005;
  PET001;
  PET003;
  PET005;

  constructor(
    public formBuilder: FormBuilder,
    public alertController: AlertController,
    public route: Router,
  ) { }

  ngOnInit() {
  }

  getprices() {
    this.getprice = this.db.collection('price').onSnapshot(snapshot => {
      snapshot.forEach(element => {
        this.GH001 = element.data().gl001;
        this.HD001 = element.data().hd001;
        this.LD003 = element.data().ld003;
        this.NFAL01 = element.data().nfalo1;
        this.PAP001 = element.data().pap001;
        this.PAP003 = element.data().pap003;
        this.PAP005 = element.data().pap005;
        this.PET001 = element.data().pet001;
        this.PET003 = element.data().pet003;
        this.PET005 = element.data().PET005;
      });
      console.log();
      
    });
  }

  // this.db.collection('Reports').doc(firebase.auth().currentUser.uid).collection('report').onSnapshot(snapshot => {

  //   snapshot.forEach(element => {
  //     let ids = {};
  //     let comments = {};
  //     let dates = {};
  //     let observables = {};
  //     let sites = {};

  //     ids = this.id = element.id;
  //     comments = this.comment = element.data().Comments;
  //     dates = this.date = element.data().date;
  //     observables = this.observable = element.data().Observationmethod;
  //     sites = this.site = element.data().Site;

  //     // this.reports = [];
  //     this.reports.push({
  //       id: ids,
  //       comment: comments,
  //       date: dates,
  //       observable: observables,
  //       site: sites
  //     });
  //     // console.log(this.reports);
  //   });
  // });

  // this.prices = this.db.collection('price').doc("SinUfRNnbB073KZiDIZE");
  //   this.prices.get().then((documentSnapshot) => {
  //     this.price = [];
  //     console.log(documentSnapshot.data());
  //     this.price.push(documentSnapshot.data());
  //     console.log(this.price);
  //     this.pricess.gl001 = documentSnapshot.data().gl001;
  //     this.pricess.hd001 = documentSnapshot.data().hd001;
  //     this.pricess.ld003 = documentSnapshot.data().ld003;
  //     this.pricess.nfalo1 = documentSnapshot.data().nfalo1;
  //     this.pricess.pap001 = documentSnapshot.data().pap001;
  //     this.pricess.pap003 =documentSnapshot.data().pap003;
  //     this.pricess.pap005 = documentSnapshot.data().pap005;
  //     this.pricess.pet001= documentSnapshot.data().pet001;
  //  this.pricess.pet003=documentSnapshot.data().pet003;
  //  this.pricess.pet005=documentSnapshot.data().pet005;
      
  //   });

}
