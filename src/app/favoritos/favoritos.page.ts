import { Component, OnInit } from '@angular/core';
import { IonicStorageModule  } from '@ionic/storage-angular';
import { FavsService } from '../services/favs.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {
  Storage: any;
  juegos: any;
  public showAll: any = false;

  constructor(public IonicStorageModule : IonicStorageModule , public FavsService: FavsService) { 
    this.cargarFavoritos();
   }

  ngOnInit() {
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
  // tmb se podría crear un array con el id de los juegos favoritos
}