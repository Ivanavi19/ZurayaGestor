import { ClanItem } from './../../models/clan-item/clan-item.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ListaClanesProvider {

  private refListaClanes = this.db.list<ClanItem>('listaClanes');

  constructor(private db:AngularFireDatabase) {
    
  }

  meterClan(item:ClanItem){
    return this.refListaClanes.push(item);
  }

  getClanList(){
    return this.refListaClanes;
  }

  editarClan(item:ClanItem){
    return this.refListaClanes.update(item.key,item);
  }

  borrarClan(item:ClanItem){
    return this.refListaClanes.remove(item.key);
  }



}
