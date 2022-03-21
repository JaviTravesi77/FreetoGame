import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { RestService } from '../services/rest.service';
import { AlertController } from '@ionic/angular';
import { ModalController, LoadingController } from '@ionic/angular';
// import { ModalPage } from '../modal/modal.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.page.html',
  styleUrls: ['./userlist.page.scss'],
})
export class UserlistPage {
  users: any;
  user: any;
  //token: any;
  
  /*@Input() firstname: string;
  @Input() lastname: string;
  @Input() email: string;
  @Input() password: string;
  @Input() company_id: number;
  */

  @ViewChild('lista', {static: true}) lista: IonList;

  constructor(private restService: RestService, private alertCtrl: AlertController, public modalController: ModalController, private loadingCtrl: LoadingController, private route: Router) {
    this.restService.login()
    .then(data => {      
      this.showUsers();
      console.log(data);      
    });
  }
 /*
  async ngOnInit() {
   if(this.restService.token!=undefined){
      this.restService.getUsuarios()
      .then(user => {
        this.user=user;
        this.user=this.user.data;
        if(this.user.email_confirmed==1){
          if(this.user.actived==1){
            this.refresh();
          }else{
            alert('Un administrador le debe dar de alta, espere por favor.');
          }
        }else{
          alert('Se le ha enviado un correo electrónico para confirmar su email.');
        }
      })
    }else{
      alert("Datos incorrectos");
      this.route.navigate(['/login']);
    }
  
  }  */
    
  async presentAlert(user) {
    const alert = await this.alertCtrl.create({
      header: 'Mensaje de confirmación',
      //subHeader: 'Subtitle',
      message: '¿Está seguro que quiere eliminar el user '+user.firstname+' '+user.secondname+'?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel', //permite que si se pulsa fuera se dispare este
          cssClass: 'secondary',
          handler: () => {
            console.log('Botón CANCELAR');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.delete(user);
            console.log('Botón OK');
          }
        }
      ]
    });
    await alert.present();
  }

  showUsers(){
    this.restService.getUsuarios()
    .then(user => {
      this.users=user;
      this.users=this.users.data;
      console.log(this.users);
    });
  }
  
  activate(user){
    this.restService.activateUser(user.id);
    //console.log('deactivate', user.actived);
    this.lista.closeSlidingItems();
    this.refresh();
  }

  deactivate(user){
    this.restService.deactivateUser(user.id);
    //console.log('activate', user.actived);    
    this.lista.closeSlidingItems();
    this.refresh();
  }

  // async update(user){
  //   const modal = await this.modalController.create({
  //     component: ModalPage,
  //     //cssClass: 'my-custom-class',
  //     componentProps: {
  //       user: user
  //       /*'firstname': user.firstname,
  //       'secondname': user.secondname,
  //       'email': user.email,
  //       'password': user.password,
  //       'company_id': user.company_id*/
  //     }
  //   });
  //   await modal.present();
  //   this.lista.closeSlidingItems();

  //   /*this.restService.updateUser(user);
  //   //console.log('update', user);
  //   this.lista.closeSlidingItems();
  //   this.refresh();*/
  // }

  delete(user){
    this.restService.deleteUser(user.id);
    //console.log('delete', user.deleted);
    this.lista.closeSlidingItems();
    this.refresh();
  }

  async refresh(){
    const loading=await this.loadingCtrl.create({});
    loading.present();
    setTimeout(() => {
      loading.dismiss();
      this.showUsers()
    }, 100);
  }
}