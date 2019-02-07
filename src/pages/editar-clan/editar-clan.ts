import { ListaClanesProvider } from './../../providers/lista-clanes/lista-clanes';
import { ClanItem } from './../../models/clan-item/clan-item.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-editar-clan',
  templateUrl: 'editar-clan.html',
})
export class EditarClanPage {

  item : ClanItem;

  constructor(public navCtrl: NavController, public navParams: NavParams, private servicioListaCLanes:ListaClanesProvider, private toast:ToastController) {
    this.item = navParams.get("item");
    console.log(navParams.get("item"));
  }

  guardarClan(item:ClanItem){
    this.servicioListaCLanes.editarClan(item)
    .then(()=>{
      this.navCtrl.setRoot("HomePage");
      this.mensaje("Clan editado con éxito.");
    })
  }

  borrarClan(item:ClanItem){
    this.servicioListaCLanes.borrarClan(item)
    .then(()=> {
      this.navCtrl.setRoot("HomePage");
      this.mensaje("Clan eliminado correctamente.");
    })
  }
  
  mensaje(texto: string){
    const toast = this.toast.create({
      message: texto,
      duration: 3000
    });
    toast.present();
  }



}
