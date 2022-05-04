import { Component, OnInit } from '@angular/core';
import { IonicStorageModule  } from '@ionic/storage-angular';
import { FavsService } from '../services/favs.service';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {
  Storage: any;
  juegos: any;
  public showAll: any = false;
  guardado: any;
  favoritos: any;

  constructor(public IonicStorageModule : IonicStorageModule , public FavsService: FavsService, public GamesService: GamesService) { 
    
   }

  ngOnInit() {
    this.getDatosFavs();

  }

  async cargarFavoritos(){

    const favoritos = await this.Storage.get('favoritos');

    if(favoritos){
      this.juegos = favoritos;
    }
  }

  sliderOpts = {
    allowSlidePrev: false,
    alloSlideNext: false
   };
   
   pipeRead(showAll) {
    showAll = true;
    console.log(showAll);
  }

  allObj: any[] = [];

  getDatosFavs(){
    this.juegos = JSON.parse(localStorage.getItem('favoritos'));

    console.log(this.favoritos);
  }

}