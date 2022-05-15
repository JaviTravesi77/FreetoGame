import { Component, OnInit } from '@angular/core';
import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage implements OnInit {

  juegos: any;
  htmlSample: any;
  // he hecho lo mismo de la entrega pasada, he cogido el set y lo he pegado en favoritos 
  // en otro método que va al click del "+" , 
  // y el get lo he pegado aquí.

  constructor(private pdfGenerator: PDFGenerator, public GamesService: GamesService) {
    
   }

  // hay que eliminar los datos del array (carrito) antes de realizar la comprar (pasar a PDF), por si el cliente se arrepiente.

  ngOnInit() {
    this.getFavoritos();
  }

  // lo recibo de FAVORITOS
  getFavoritos(){
    this.juegos = JSON.parse(localStorage.getItem('carrito'));
  }

  getPDF(){
    this.htmlSample = "<html><h1>Converted from HTML</h1></html>";
    let options = {
      documentSize: 'A4',
      type: 'share'
    }
 
    this.pdfGenerator.fromData(this.htmlSample, options).
      then(resolve => {
        console.log(resolve);
 
      }
      ).catch((err) => {
        console.error(err);
      });
  }
  
}
