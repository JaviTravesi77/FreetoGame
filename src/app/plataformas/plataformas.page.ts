import { Component, OnInit } from '@angular/core';

import { GamesService } from '../services/games.service';
// import { platform } from 'os';

@Component({
  selector: 'app-plataformas',
  templateUrl: './plataformas.page.html',
  styleUrls: ['./plataformas.page.scss'],
})
export class PlataformasPage implements OnInit {

  juegosPC: any;
  juegosBro: any;
  data: any;
  platform: any;
  segmentModel = "favorites";
  // showAll: any;

  constructor(private GamesService: GamesService) { }

  ngOnInit() {
  }

  mostrarJuegosPC(){
      //console.log(company_id);
      this.GamesService.getJuegosPC()
      .then(data => {
        this.juegosPC = data;
        console.log(this.juegosPC);
      });
  }

  mostrarJuegosBrowser(){
    //console.log(company_id);
    this.GamesService.getJuegosBrowser()
    .then(data => {
      this.juegosBro = data;
      console.log(this.juegosBro);
    });
  }
  
  segmentChanged(event){
    console.log(this.segmentModel);
    
    console.log(event);
  }
  // PipeLeer(showAll){
  //   showAll = true;
  //   console.log(showAll);

  // }
}
