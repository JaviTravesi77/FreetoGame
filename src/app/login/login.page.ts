import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from '../services/rest.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user:any;
  data:any;
  password:string;

  formLogin = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.minLength(3)]),
    password: new FormControl('',[Validators.required, Validators.minLength(3)]),
  })

  constructor(public FormBuilder: FormBuilder, public alertController: AlertController, public RestService: RestService, public router: Router) { }

  ngOnInit() {
  }
  async login_real(){ 

    if(this.formLogin.invalid){
      this.showAlert('Datos incompletos', 'Es obligatorio rellenar todos los campos.');
      return;
    }
      this.RestService.login_real(this.formLogin.value.email, this.formLogin.value.password)

    .then(data => {
      this.user = data;
      this.user = this.user.data;
    
      this.RestService.getUserData(this.user.id)

    .then(user => {
      this.user = user;
      //console.log(user);
      this.user = this.user.data;

      //if(this.user.email_confirmed == 0){
        if(this.user.actived == 1){
          if(this.user.type == 'a'){
            this.router.navigate(['/userlist']);
          }else{
            this.router.navigate(['/pagina-inventada'/*, this.user.company_id*/]);//va a una pagina inventada que haremos en la 2a entrega
          }
        }else{
          this.showAlert('Error', 'Espere a ser activado por el administrador.');
        }
      
      //}else{
      //  this.showAlert('Error', 'Confirme el email en su bandeja de entrada');
      //}
      })
    })
  }
  async showAlert(header, message){
      
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['Aceptar']
    });
    await alert.present();
  }
}
