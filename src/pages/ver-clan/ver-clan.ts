import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClanItem } from '../../models/clan-item/clan-item.interface';
import { ListaClanesProvider } from '../../providers/lista-clanes/lista-clanes';

@IonicPage()
@Component({
  selector: 'page-ver-clan',
  templateUrl: 'ver-clan.html',
})
export class VerClanPage {

  item:ClanItem;

  constructor(public navCtrl: NavController, public navParams: NavParams, private servicioListaClanes:ListaClanesProvider) {
    this.item = navParams.get("item");
    console.log(navParams.get("item"));
  }

  volverHome(){
    this.navCtrl.push("HomePage");
  }

  verClan(item:ClanItem){
    this.servicioListaClanes.verClan(item);
  }

}
