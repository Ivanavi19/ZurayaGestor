import { ClanItem } from './../../models/clan-item/clan-item.interface';
import { ListaClanesProvider } from './../../providers/lista-clanes/lista-clanes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  item:ClanItem;
  listaClanes:Observable<ClanItem[]>;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private clan:ListaClanesProvider, 
              private servicioListaClan:ListaClanesProvider, 
              private toast: ToastController) {
    
    this.item = navParams.get("item");
    console.log(navParams.get("item"));

    this.listaClanes = this.clan
    .getClanList()  //devuelve la DB LIST
        .snapshotChanges() //valores
        .pipe (map ( changes => {
            return changes.map ( c=>(
              {
                key: c.payload.key,
                ...c.payload.val(),
              }
            )
            )
        }
        )
        )

  }

  selectClanItem(clanItem:ClanItem){
    this.navCtrl.push("VerClanPage",{"item":clanItem});
  }

  borrarClan(item:ClanItem){
    this.servicioListaClan.borrarClan(item)
    .then(()=> {
      this.navCtrl.setRoot("HomePage");
      this.mensaje("Clan eliminado correctamente.");
    })
  }

  editarClan(clanItem:ClanItem){
    this.navCtrl.push("EditarClanPage",{"item":clanItem});
  }

  mensaje (texto:string){
    const toast = this.toast.create({
      message: texto,
      duration: 3000
    });
    toast.present();
  }


}
