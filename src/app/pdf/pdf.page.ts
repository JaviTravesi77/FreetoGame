import { Component, OnInit } from '@angular/core';
import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';
import { GamesService } from '../services/games.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
// import { EmailComposer } from '@ionic-native/email-composer';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.page.html',
  styleUrls: ['./pdf.page.scss'],
})
export class PdfPage implements OnInit {

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
  getBase64ImageFromURL: any;

  constructor(private pdfGenerator: PDFGenerator, public GamesService: GamesService, private emailComposer: EmailComposer) {
    
    
    // He quitado lo que iba aqui porque no cargaba la pagina
    
   }

  // hay que eliminar los datos del array (carrito) antes de realizar la comprar (pasar a PDF), por si el cliente se arrepiente.

  ngOnInit() {
    this.sendMail();
    this.getDatos();
    this.getFavoritos();
  //   this.emailComposer.isAvailable().then((available: boolean) =>{ 
  //     if(available) { 
  //         this.sendMail();
  //     } else {
  //         //Algo ha fallado, revísalo e inténtalo de nuevo.
  //     }
  // });
    this.generarPDF;
    // this.getPDF();
  }

  // lo recibo de FAVORITOS
  getFavoritos(){
    this.juegos = JSON.parse(localStorage.getItem('carrito'));
  }

  // getPDF(){
  //   this.htmlSample = "<html><h1>Converted from HTML</h1></html>";
  //   let options = {
  //     documentSize: 'A4',
  //     type: 'share'
  //   }
 
  //   this.pdfGenerator.fromData(this.htmlSample, options).
  //     then(resolve => {
  //       console.log(resolve);
 
  //     }
  //     ).catch((err) => {
  //       console.error(err);
  //     });
  // }

  getDatos(){
    this.juegos = JSON.parse(localStorage.getItem('carrito'));
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

  // este lo genera y lo descarga.
  generarPDF(){
    alert('PDF generado.');
    // this.content=document.getElementById('aqui');
    
    let var1 = {
      content: [

      ]
    };
    this.pdfObject = pdfMake.createPdf(var1);
    this.pdfObject.download();
  }
  
  // nuevoPdf() {
  //   const pdfBlock = document.getElementById("print-wrapper");
    
  //   const options = { 
  //     background: "white", 
  //     height: pdfBlock.clientWidth, 
  //     width: pdfBlock.clientHeight 
  //   };
  //   domtoimage.toPng(pdfBlock, options).then((fileUrl) => {
  //     var doc = new JSPDF("p","mm","a4");
  //     doc.addImage(fileUrl, 'PNG', 10, 10, 240, 180);
  
  //     let docRes = doc.output();
  //     let buffer = new ArrayBuffer(docRes.length);
  //     let array = new Uint8Array(buffer);
  //     for (var i = 0; i < docRes.length; i++) {
  //         array[i] = docRes.charCodeAt(i);
  //     }
  
  
  //     const directory = this.file.dataDirectory;
  //     const fileName = "user-data.pdf";
  //     let options: IWriteOptions = { 
  //       replace: true 
  //     };
  
  //     this.file.checkFile(directory, fileName).then((res)=> {
  //       this.file.writeFile(directory, fileName,buffer, options)
  //       .then((res)=> {
  //         console.log("File generated" + JSON.stringify(res));
  //         this.fileOpener.open(this.file.dataDirectory + fileName, 'application/pdf')
  //           .then(() => console.log('File is exported'))
  //           .catch(e => console.log(e));
  //       }).catch((error)=> {
  //         console.log(JSON.stringify(error));
  //       });
  //     }).catch((error)=> {
  //       this.file.writeFile(directory,fileName,buffer).then((res)=> {
  //         console.log("File generated" + JSON.stringify(res));
  //         this.fileOpener.open(this.file.dataDirectory + fileName, 'application/pdf')
  //           .then(() => console.log('File exported'))
  //           .catch(e => console.log(e));
  //       })
  //       .catch((error)=> {
  //         console.log(JSON.stringify(error));
  //       });
  //     });
  //   }).catch(function (error) {
  //     console.error(error);
  //   });
  // }
   sendMail(){
       let email = {
         to: 'javiertravesi@gmail.com',
        //  cc: 'javiertravesi@gmail.com',
        //  bcc: ['javiertravesi@gmail.com'],
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

  OpenEmailComposer(){
    this.emailComposer.open({
      to:'javiertravesi@gmail.com'
    })
  }

  // table(data){
  //   var value = [];
  //   var column = [];
  //   column.push({ text: 'Título', style: 'tableHeader' });
  //   column.push({ text: 'Desarrollador', style: 'tableHeader' });
  //   column.push({ text: 'Plataforma', style: 'tableHeader' });
  //   value.push(column);
  //   value.push(column);
  //   for (let i = 0; i < data.lenght; i++){
  //     const juegos = data[i];
  //   }
  //   return row = new Array();
  //   row.push(juegos.id);
  //   row.push(titulo.id);
  //   row.push(short_description.id);
  //   row.push("Gratuito");
  //   value.push(row);

  //   console.log(data);
  //   return{
  //     table: {
  //       widths: [ 'º'],
  //       headerRows: 1,
  //       body: value
  //     }
  //   }
    
  // }

  // crearPdf(){
  //   var docDefinition = {
  //     content: [
  //       { image:  this.getBase64ImageFromURL("src/app/pdf/1024_2000.jpg")},
  //       { text: '\n FreeToGame.com', style: 'header' },
  //       { text: 'Pedido: ', style: 'subheader' },
        
  //       this.table(this.juegos)
  //     ],
  //     styles: {
  //       header: {
  //         fontSize: 18,
  //         bold: true,
  //       },
  //       subheader: {
  //         fontSize: 14,
  //         bold: true,
  //         margin: [0, 15, 0, 0]
  //       },
  //       story: {
  //         italic: true,
  //         alignment: 'center',
  //         width: '50%',
  //       }
  //     }
  //   }
  //   this.pdfObject = pdfMake.createPdf(docDefinition);
  // }
  
}
