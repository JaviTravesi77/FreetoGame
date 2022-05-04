import { Component, OnInit, ViewChild } from '@angular/core';
import { Juego } from 'src/app/interfaces';
import { GamesService } from '../services/games.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { FavsService } from '../services/favs.service';
import { IonicStorageModule  } from '@ionic/storage-angular';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.page.html',
  styleUrls: ['./juegos.page.scss'],
})
export class JuegosPage implements OnInit {

  juegos: any;
  data: any;
  public showAll: any = false;
  Storage: any;
  public star: any;
  id: any;
  juegosFavs : Juego[] = [];
  thumbnail: any;
  short_description: any;
  game_url: any;
  id_juegos: any;
  data_juegos:  any;

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
 

  constructor(private GamesService: GamesService, public alertCtrl : AlertController, public IonicStorageModule : IonicStorageModule , private FavsService: FavsService) { 
    handler: () => {
      console.log('favoritos');
      this.GamesService.getJuegosId(this.juegos);
    }
  }

  async ngOnInit() {
    this.mostrarJuegos();
    // await this.Storage.create();
  }
  juegos1: Juego[];
  favoritos: Juego[];

  public starButton(){
    if (this.star == false){
      this.star == true;
    }else{
      this.star == false;
    }
  }

  loadData(event) {
    console.log('Cargando los siguientes....');
    setTimeout(() => {

      if (this.data.length > 10){
        event.target.complete();
        return;
      }
      const nuevoArr = Array(20);
      this.data.push(...nuevoArr);

      event.target.complete();
      this.infiniteScroll.disabled = true;
      }, 1000);
   }
   pipeRead(showAll) {
    showAll = true;
    console.log(showAll);
  }

  mostrarJuegos(){

    this.GamesService.getJuegos()
    .then(data => {
      this.juegos = data;
      console.log(this.juegos);
    })
  }

  pulsarClick($event){
    this.id_juegos = $event.srcElement.name;
    this.id_juegos = this.id_juegos.substring(5);
    console.log(this.id_juegos);
    this.GamesService.getJuegosId(this.id_juegos)
    .then(data => {
      this.data_juegos = data;
      this.juegosFavs.push(this.data_juegos);
      console.log(this.data_juegos);
    })
    localStorage.setItem('favoritos', JSON.stringify((this.juegosFavs)));

  }

}