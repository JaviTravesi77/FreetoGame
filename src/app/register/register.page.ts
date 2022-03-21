import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from '../services/rest.service';
import { MenuController, AlertController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user: any;
  esValido = false;

  formRegister = new FormGroup({
    firstname: new FormControl('',[Validators.required, Validators.minLength(3)]),
    secondname: new FormControl('',[Validators.required, Validators.minLength(3)]),
    email: new FormControl('',[Validators.required, Validators.minLength(3)]),
    password: new FormControl('',[Validators.required, Validators.minLength(3)]),
    c_password: new FormControl('',[Validators.required, Validators.minLength(3)]),
  });

  constructor(public RestService : RestService, public formBuilder: FormBuilder, public AlertController:AlertController, public router: Router, public mnuCtrl:MenuController, public modalForm: ModalController) { }

  ngOnInit() {
  }

  async register() {
    this.esValido=true;
    if(!this.formRegister.valid){
      const alert = await this.AlertController.create({
        message: 'Datos incorrectos o insuficientes',
        buttons: ['OK']
      });
      await alert.present();
      return false;
    }else{
      var i = this.formRegister.value;
    
      var user = {
        firstname: i.nombre,
        secondname: i.apellidos,
        email: i.email,
        password: i.contraseña,
        c_password: i.confirmar_contraseña
      }    
      this.RestService.registerUser(user);
      const alert = await this.AlertController.create({
        message: 'Registrado correctamente',
          buttons: ['OK']
      });
      await alert.present();
    }
      
    this.router.navigateByUrl('/login');
    localStorage.setItem('user', JSON.stringify(user));
  }
}
