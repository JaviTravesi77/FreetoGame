import { Component, OnInit, ViewChild } from '@angular/core';
import { Juegos } from 'src/app/interfaces';
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
  // array_favs : string[]

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
 

  constructor(private GamesService: GamesService, public alertCtrl : AlertController, public IonicStorageModule : IonicStorageModule , private FavsService: FavsService) { 
    handler: () => {
      console.log('favoritos');
      this.FavsService.guardarJuegos(this.juegos);
    }
  }

  ngOnInit() {
    this.mostrarJuegos();
  }

  public starButton(){
    if (this.star == false){
      this.star == true;
    }else{
      this.star == false;
    }
  }

  mostrarJuegos(){

    this.GamesService.getJuegos()
    .then(data => {
      this.juegos = data;
      console.log(this.juegos);
    })

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

  guardarJuegos(juego: Juegos){
    const existe = this.juegos.find(juego => juego.title === juego.title);
  
  if(!existe){
    this.juegos.unshift(this.juegos);
    this.Storage.set('favoritos', this.juegos);
    }
  }
  
  // localStorage.setItem("key", JSON.stringify(array_favs));

  //  Favs(){
  //   let alert = this.alertCtrl.create({
  //     message: '¿Estás seguro de que deseas añadirlo a favoritos?',
  //     buttons: [
  //       {
  //         text: 'No',
  //         role: 'cancel',
  //         handler: () => {
  //           // Ha respondido que no, así que no hacemos nada
  //         }
  //       },
  //       {
  //         text: 'Si',
  //         handler: () => {
  //              // AquÍ borramos el sitio en la base de datos

  //          }
  //       }
  //     ]
  //  })
  
   
  // onViewDidLoad() {
  //   this.getPosts();//Llamamos a la función getPost cuando la vista se cargue
  // }
  // getPosts() { //llamamos a la funcion getPost de nuestro servicio.
  //   this.GamesService.getPosts()
  //   .then(data => {
  //     this.juegosPosts = data;
  //   });
  // }

}
