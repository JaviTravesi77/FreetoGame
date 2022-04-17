import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  apiUrl = 'http://semillero.allsites.es/public/api';
  user:any;
  token: any;
  id : any;
  type : any;
  actived : any;
  email: any;
  password: any;
  c_password: any;
  firstname: any;
  secondname: any;
  getJuegosPlataforma: any;

  constructor(private http: HttpClient) { }

  login_real(n_email: string, n_password: string){//login app
    return new Promise(resolve => {
      this.http.post<any>(this.apiUrl + '/login', 
      {
        email: n_email, 
        password: n_password
      })     
      .subscribe(data => {
        this.token=data.data.token;
        this.id = data.data.id;
        //console.log(this.id);
        this.type = data.data.type;
        this.actived = data.data.actived;
        // this.email=n_email;
        // this.password=n_password;
        resolve(data);             
        console.log(data);
        //console.log(this.id);
        //console.log(this.company_id);
        err=> {
          console.log(err)
        }
      });
    });
  }
  registerUser(n_firstname: string, n_secondname: string, n_email: string, n_password: string, n_c_password: string){
    console.log();
    return new Promise(resolve => {
      this.http.post<any>(this.apiUrl+'/register', {
        firstname: n_firstname,
        secondname: n_secondname,
        email: n_email,
        password: n_password,
        c_password: n_c_password,
      })
        .subscribe(data => {   
          this.token = data.data.token;
          this.firstname = data.data.firstname;
          this.secondname = data.data.secondname;
          this.email = data.data.email;
          this.password = data.data.password;
          this.c_password = data.data.c_password;
          console.log(this.token);

          resolve(data); 
          console.log(data);       
        }, err => {
          console.log('Error al registrar usuario ' +err);
        });
    });
  }
  getUserData(id: number){
    console.log(id);
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/user/'+id, {
        headers: new HttpHeaders().set('Authorization','Bearer '+this.token)
      }).subscribe(data => {
        resolve(data)
        this.user = data;      
      }, err => {
        console.log('Error al obtener los datos del usuario ' +err)
      });
    });
  }
  getUsuarios(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/users', {
        headers: new HttpHeaders().set('Authorization','Bearer '+this.token)
      }).subscribe(data => {
        resolve(data);
        console.log(data);      
      }, err => {
        console.log('Error al mostrar los usuarios ' +err);
      });
    });
  }
  login(){//login api
    return new Promise(resolve => {
      this.http.post<any>(this.apiUrl + '/login', 
      {
        email: 'raul@raul.com', 
        password: '123456'
      })     
      .subscribe(data => {
        this.token = data.data.token;
        resolve(data);             
        //console.log(this.token); 
      });
    });
  }
  activateUser(id: number){
    return new Promise(resolve => {
      this.http.post(this.apiUrl+'/activate', {user_id: id}, {
        headers: new HttpHeaders().set('Authorization','Bearer '+this.token)
      }).subscribe(data => {        
        resolve(data);
        console.log(data);        
      }, err => {
        console.log('Error al activar el usuario ' +err);
      });
    });
  }

  deactivateUser(id: number){
    return new Promise(resolve => {
      this.http.post(this.apiUrl+'/deactivate', {user_id: id}, {
        headers: new HttpHeaders().set('Authorization','Bearer '+this.token)
      }).subscribe(data => {        
        resolve(data);
        console.log(data);      
      }, err => {
        console.log('Error al desactivar el usuario ' +err);
      });
    });
  }

  // no sé si el metodo actulizar es necesario
  updateUser(user: any){
    //console.log(this.token);
    //console.log(id);
    return new Promise(resolve => {
      this.http.post(this.apiUrl+'/user/updated/'+user.id,
        {
          user_id: user.id,
          firstname: user.firstname,
          secondname: user.secondname,
          email: user.email,
          password: user.password,
          company_id: user.company_id
        },
        {        
         headers: new HttpHeaders().set('Authorization','Bearer '+this.token)      
      }).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log('Error al editar el usuario ' +err);
      });
    });
  }

  deleteUser(id: number){
    //console.log(this.token);
    //console.log(id);
    return new Promise(resolve => {
      this.http.post(this.apiUrl+'/user/deleted/'+id,
       {
        user_id: id
       },
       {
        headers: new HttpHeaders().set('Authorization','Bearer '+this.token)
      }).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log('Error al eliminar usuario ' +err);
      });
    });
  }
  
  // showAdmins(id: number, type){
  //   return new Promise(resolve =>{
  //     this.http.get(this.user.id),
  //     {
  //       user_id: id
  //     }
  //     {
  //       headers: new HttpHeaders().set('Authorization', 'Bearer'+this.token)
  //     }).subscribe(data);
  //   }, err => {
  //     console.log('Error al mostrar los usuarios administradores')
  //   })
  // }
}
