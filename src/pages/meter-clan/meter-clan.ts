import { ListaClanesProvider } from './../../providers/lista-clanes/lista-clanes';
import { ClanItem } from './../../models/clan-item/clan-item.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-meter-clan',
  templateUrl: 'meter-clan.html',
})
export class MeterClanPage {

  item:ClanItem ={
    nombre: "",
    descripcion: "",
    objetivos: "",
    miembros: ""
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private servicioListaClanes:ListaClanesProvider) {

  }

  meterClan(item:ClanItem){
    this.servicioListaClanes.meterClan(item).then(ref =>{
      console.log(ref.key);
      this.navCtrl.setRoot("HomePage");
    })
  }

}
