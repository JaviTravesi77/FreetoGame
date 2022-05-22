import { Component, OnInit } from '@angular/core';
import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';
import { GamesService } from '../services/games.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
// import { EmailComposer } from '@ionic-native/email-composer';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage implements OnInit {

  juegos: any;
  htmlSample: any;
  pdfObject: any;
  letterObj = {
    to: '',
    from: '',
    text: ''
  }
  pdfMake: any;
  photoPreview: any;
  myForm: any;
  constructor(private pdfGenerator: PDFGenerator, public GamesService: GamesService, private emailComposer: EmailComposer) {
    this.sendMail();
    // He quitado lo que iba aqui porque no cargaba la pagina
    
   }

  // hay que eliminar los datos del array (carrito) antes de realizar la comprar (pasar a PDF), por si el cliente se arrepiente.

  ngOnInit() {
    this.getFavoritos();
  //   this.emailComposer.isAvailable().then((available: boolean) =>{ 
  //     if(available) { 
  //         this.sendMail();
  //     } else {
  //         //Algo ha fallado, revísalo e inténtalo de nuevo.
  //     }
  // });
    this.generatePDF;
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
  // makePdf() {
  //   var docDefinition = {
  //     content: [
  //       {
  //       columns: [
  //     {
  //       image: 'data:image/jpeg;base64,your_image_here',
  //       fit: [100, 100]
  //     },
  //   [
  //     { text: 'BITCOIN', style: 'header' },
  //     { text: 'Cryptocurrency Payment System', style: 'sub_header' },
  //     { text: 'WEBSITE: https://bitcoin.org/', style: 'url' },
  //   ]
  //   ]
  //   }
  //   ],
  //       styles: {
  //       header: {
  //       bold: true,
  //       fontSize: 20,
  //       alignment: 'right'
  //       },
  //       sub_header: {
  //       fontSize: 18,
  //       alignment: 'right'
  //       },
  //       url: {
  //       fontSize: 16,
  //       alignment: 'right'
  //       }
  //     },
  //       pageSize: 'A4',
  //       pageOrientation: 'portrait'
  //     };
  //   this.pdfMake.createPdf(docDefinition).open();
    
  //   }
  
  generatePDF(){
    alert('PDF generado.');
    const formValue = this.myForm.value;
    const image = this.photoPreview ?  { image: this.photoPreview, width: 300 }: {};
    
    var docDefinition = {
      content: [
        { text: 'REMINDER', style: 'header' },
        { text: new Date().toTimeString(), alignment: 'right' },
 
        { text: 'From', style: 'subheader' },
        { text: this.letterObj.from },
 
        { text: 'To', style: 'subheader' },
        this.letterObj.to,
 
        { text: this.letterObj.text, style: 'story', margin: [0, 20, 0, 20] },
 
        {
          ul: [
            'Bacon',
            'Rips',
            'BBQ',
          ]
        }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 15, 0, 0]
        },
        story: {
          italic: true,
          alignment: 'center',
          width: '50%',
        }
      }
    }
    // crear pdf
    // this.pdfObject = pdfMake.createPdf(docDefinition);
  
    // descargar pdf
    this.pdfObject.download(docDefinition);

    this.pdfObject.fromEmail('javiertravesi@gmail.com').then(base64String => console.log(base64String));
    
  }
  
  
   sendMail(){
       let email = {
         to: 'javiertravesi@gmail.com',
         cc: 'javiertravesi@gmail.com',
         bcc: ['javiertravesi@gmail.com'],
         attachments: [
           'file://img/logo.png',
           'res://icon.png',
           'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
           'file://README.pdf'
         ],
         subject: 'Cordova Icons',
         body: 'How are you? Nice greetings from Leipzig',
         isHtml: true
       };
       
       // Send a text message using default options
       this.emailComposer.open(email);
  }

  
}
