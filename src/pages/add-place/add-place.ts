import { Location } from './../../models/location';
import { SetLocationPage } from './../set-location/set-location';
import { Component } from '@angular/core';
import {ModalController, IonicPage,  NavController,  NavParams} from 'ionic-angular';
import { NgForm } from "@angular/forms";

@IonicPage()
@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html',
})
export class AddPlacePage {

  location : Location = {
    lat : 40.7623444,
    lng : -70.974
  };

  constructor(
              public navCtrl: NavController, public navParams: NavParams,
              private modalCtrl : ModalController
             ) {
  }

  onSubmit (form : NgForm){
    console.log(form);
  }

  onOpenMap(){
    const modal = this.modalCtrl.create(SetLocationPage, {location : this.location});
    modal.present();
  }
}
