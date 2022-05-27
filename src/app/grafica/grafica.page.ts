import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { GamesService } from '../services/games.service';
import { Juego } from 'src/app/interfaces';

@Component({
  selector: 'app-grafica',
  templateUrl: 'grafica.page.html',
  styleUrls: ['grafica.page.scss'],
})
export class GraficaPage implements AfterViewInit {
  // @ViewChild('barCanvas') private barCanvas: ElementRef;
  @ViewChild('doughnutCanvas') private doughnutCanvas: ElementRef;
  // @ViewChild('lineCanvas') private lineCanvas: ElementRef;

  barChart: any;
  doughnutChart: any;
  lineChart: any;

  Cat1: number;
  Cat2: any;
  Cat3: any;
  Cat4: any;
  Cat5: any;
  Cat6: any;


//   // juegosGraf : Juego[] = [];
  constructor(public GamesService: GamesService) { }

  ngOnInit(){
    this.recibirCategory1();
    this.recibirCategory2();
    this.recibirCategory3();
    this.recibirCategory4();
    this.recibirCategory5();
    this.recibirCategory6();
  }

  ngAfterViewInit() {
    // this.lineChartMethod();
  }
    cargarDatos(){
      this.doughnutChartMethod();
  }


  recibirCategory1(){
    this.GamesService.getCategory1()
    .then((juego: Juego[]) => {
      this.Cat1 = juego.length;
      console.log(this.Cat1);
    })
  } 

  recibirCategory2(){
    this.GamesService.getCategory2()
    .then((juego: Juego[]) => {
      this.Cat2 = juego.length;
      console.log(this.Cat2);
    })
  }
  recibirCategory3(){
    this.GamesService.getCategory3()
    .then((juego: Juego[])=> {
      this.Cat3 = juego.length;
      console.log(this.Cat3);
    })
  }
  recibirCategory4(){
    this.GamesService.getCategory4()
    .then((juego: Juego[]) => {
      this.Cat4 = juego.length;
      console.log(this.Cat4);
    })
  }
  recibirCategory5(){
    this.GamesService.getCategory5()
    .then((juego: Juego[]) => {
      this.Cat5 = juego.length;
      console.log(this.Cat5);
    })
  }
  recibirCategory6(){
    this.GamesService.getCategory6()
    .then((juego: Juego[]) => {
      this.Cat6 = juego.length;
      console.log(this.Cat6);
    })
  }

  

  doughnutChartMethod() {
    // console.log(this.Cat1);
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['MMORPG', 'Shooter', 'Moba', 'Strategy', 'Sports', 'Fighting'],
        datasets: [{
          label: '# of Votes',
          data: [this.Cat1, this.Cat2, this.Cat3, this.Cat4, this.Cat5, this.Cat6],
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(227, 144, 240, 0.2)',
            'rgba(147, 240, 144, 0.2)',
          ],
          hoverBackgroundColor: [
            '#FFCE56',
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#FF6384',
            '#93F090',
          ]
        }]
      }
    });
  }

}