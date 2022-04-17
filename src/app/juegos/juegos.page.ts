import { Component, OnInit, ViewChild } from '@angular/core';
import { Juegos } from 'src/app/interfaces';
import { GamesService } from '../services/games.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.page.html',
  styleUrls: ['./juegos.page.scss'],
})
export class JuegosPage implements OnInit {

  juegos: any;
  data: any;
  // aqui en vez de declarar todos los campos he creado un array en el cual están todos dentro.
  // juegosPosts: any;

  @ViewChild(IonInfiniteScroll, {static: true}) infiniteScroll: IonInfiniteScroll;

  constructor(private GamesService: GamesService) { }

  ngOnInit() {
    this.mostrarJuegos();
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

      if (this.data.length > 50){
        event.target.complete();
        return;
      }
      const nuevoArr = Array(20);
      this.data.push(...nuevoArr);

      event.target.complete();
      this.infiniteScroll.disabled = true;
      }, 1000);
   }
   
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
