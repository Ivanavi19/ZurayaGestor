import { ClanItem } from './../../models/clan-item/clan-item.interface';
import { ListaClanesProvider } from './../../providers/lista-clanes/lista-clanes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  listaClanes:Observable<ClanItem[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private clan:ListaClanesProvider) {
    
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
    this.navCtrl.push("EditarClanPage",{"item":clanItem});
  }


}
