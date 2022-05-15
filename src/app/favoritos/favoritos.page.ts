import { Component, OnInit } from '@angular/core';
import { IonicStorageModule  } from '@ionic/storage-angular';
import { Juego } from '../interfaces';
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
  carrito: any[] = [];
  id_juegos: any;
  data_juegos: any;
  juegosFavs : Juego[] = [];
  habilitado : boolean = false;

  constructor(public IonicStorageModule : IonicStorageModule , public FavsService: FavsService, public GamesService: GamesService) { 
    
   }

  ngOnInit() {
    this.getDatosFavs();
    document.getElementsByClassName('favoritos');
    
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

  // lo mando a PEDIDOS
  addPedido($event){
    this.id_juegos = $event.srcElement.name;
    this.id_juegos = this.id_juegos.substring(4);
    this.GamesService.getJuegosId(this.id_juegos)
    .then(data => {
      this.data_juegos = data;
      this.carrito.push(this.data_juegos);
    //const existe = this.data_juegos.find(this.juegos , this.juegos.title === this.juegos.title)
      console.log(this.data_juegos);
    }) 
    //if (this.existe = undefined){
      localStorage.setItem('carrito', JSON.stringify((this.carrito)));

      if (this.habilitado = false){
        this.habilitado = true;
      }
    //}
  }

}