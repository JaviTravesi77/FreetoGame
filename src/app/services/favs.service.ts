import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Juegos } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FavsService {

  juegos: Juegos[] = [];

  constructor(private storage: Storage) { }

  guardarJuegos(juego: Juegos){
    this.juegos.unshift(juego);
    this.storage.set('favoritos', this.juegos);
  }

  cargarFavoritos(){

  }
}
