import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Juego } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  static getJuegosId(id_juegos: any): any {
    throw new Error('Method not implemented.');
  }

  apiUrl = 'https://free-to-play-games-database.p.rapidapi.com/api/games'
  token: any;

  constructor(private http: HttpClient) { }
  // getPosts(){
  //   return new Promise(resolve=>{
  //     this.http.get(this.apiUrl).subscribe(data=>{
  //         resolve(data);
  //     },error=>{
  //       console.log(error);
  //     });
  //   });
  // }
  getJuegos(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl ,{
        headers: new HttpHeaders().set('X-RapidAPI-Host', 'free-to-play-games-database.p.rapidapi.com')
        .set('X-RapidAPI-Key', '8e3ce5aa2cmshd0e75d01dc4f6f7p10ff49jsn64a91d823a18')
      })
      .subscribe(data => {
        resolve(data)
        // console.log(data);
      }, err => {
        console.log('Error al mostrar los juegos ' +err)
      });
    });
  }

  getJuegosPC(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'?platform=pc&', {        
        headers: new HttpHeaders().set('X-RapidAPI-Host', 'free-to-play-games-database.p.rapidapi.com')
        .set('X-RapidAPI-Key', '8e3ce5aa2cmshd0e75d01dc4f6f7p10ff49jsn64a91d823a18')
      })
      .subscribe(data => {
        resolve(data)
        // console.log(data);
      }, err => {
        console.log('Error al obtener los juegos ' +err)
      });
    });
  }

  getJuegosBrowser(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'?platform=browser&', {          
        headers: new HttpHeaders().set('X-RapidAPI-Host', 'free-to-play-games-database.p.rapidapi.com')
        .set('X-RapidAPI-Key', '8e3ce5aa2cmshd0e75d01dc4f6f7p10ff49jsn64a91d823a18')
      })
      .subscribe(data => {
        resolve(data)
        // console.log(data);
      }, err => {
        console.log('Error al obtener los juegos ' +err)
      });
    });
  }

  getJuegosId(id: any){
    return new Promise(resolve => {
      this.http.get('https://free-to-play-games-database.p.rapidapi.com/api/game?id=' + id, {
        headers: new HttpHeaders().set('X-RapidAPI-Host', 'free-to-play-games-database.p.rapidapi.com')
        .set('X-RapidAPI-Key', 'b4dabbcbe2msh42b8ff7f2b65cd6p186ac0jsn7baa32af7257')
      })
      .subscribe(data => {
        resolve(data)
        // console.log(data);
      }, err => {
        console.log('Error al obtener los juegos ' +err)
      });
    });
  }

  getCategory1(){
    return new Promise(resolve => {
      this.http.get('https://free-to-play-games-database.p.rapidapi.com/api/games' + '?category=MMORPG&',{
        headers: new HttpHeaders().set('X-RapidAPI-Host', 'free-to-play-games-database.p.rapidapi.com')
        .set('X-RapidAPI-Key', 'b4dabbcbe2msh42b8ff7f2b65cd6p186ac0jsn7baa32af7257')
      })
      .subscribe(data => {
        resolve(data)
        // console.log(data);
      }, err => {
        console.log('Error al obtener los juegos ' +err)
      });
    });
  }
  getCategory2(){
    return new Promise(resolve => {
      this.http.get('https://free-to-play-games-database.p.rapidapi.com/api/games' + '?category=Shooter&' ,{
        headers: new HttpHeaders().set('X-RapidAPI-Host', 'free-to-play-games-database.p.rapidapi.com')
        .set('X-RapidAPI-Key', 'b4dabbcbe2msh42b8ff7f2b65cd6p186ac0jsn7baa32af7257')
      })
      .subscribe(data => {
        resolve(data)
        // console.log(data);
      }, err => {
        console.log('Error al obtener los juegos ' +err)
      });
    });
  }
  getCategory3(){
    return new Promise(resolve => {
      this.http.get('https://free-to-play-games-database.p.rapidapi.com/api/games' + '?category=Moba&',{
        headers: new HttpHeaders().set('X-RapidAPI-Host', 'free-to-play-games-database.p.rapidapi.com')
        .set('X-RapidAPI-Key', 'b4dabbcbe2msh42b8ff7f2b65cd6p186ac0jsn7baa32af7257')
      })
      .subscribe(data => {
        resolve(data)
        // console.log(data);
      }, err => {
        console.log('Error al obtener los juegos ' +err)
      });
    });
  }
  getCategory4(){
    return new Promise(resolve => {
      this.http.get('https://free-to-play-games-database.p.rapidapi.com/api/games' + '?category=Strategy&',{
        headers: new HttpHeaders().set('X-RapidAPI-Host', 'free-to-play-games-database.p.rapidapi.com')
        .set('X-RapidAPI-Key', 'b4dabbcbe2msh42b8ff7f2b65cd6p186ac0jsn7baa32af7257')
      })
      .subscribe(data => {
        resolve(data)
        // console.log(data);
      }, err => {
        console.log('Error al obtener los juegos ' +err)
      });
    });
  }
  getCategory5(){
    return new Promise(resolve => {
      this.http.get('https://free-to-play-games-database.p.rapidapi.com/api/games' + '?category=Sports&',{
        headers: new HttpHeaders().set('X-RapidAPI-Host', 'free-to-play-games-database.p.rapidapi.com')
        .set('X-RapidAPI-Key', 'b4dabbcbe2msh42b8ff7f2b65cd6p186ac0jsn7baa32af7257')
      })
      .subscribe(data => {
        resolve(data)
        // console.log(data);
      }, err => {
        console.log('Error al obtener los juegos ' +err)
      });
    });
  }
  getCategory6(){
    return new Promise(resolve => {
      this.http.get('https://free-to-play-games-database.p.rapidapi.com/api/games' + '?category=Fighting&',{
        headers: new HttpHeaders().set('X-RapidAPI-Host', 'free-to-play-games-database.p.rapidapi.com')
        .set('X-RapidAPI-Key', 'b4dabbcbe2msh42b8ff7f2b65cd6p186ac0jsn7baa32af7257')
      })
      .subscribe(data => {
        resolve(data)
        // console.log(data);
      }, err => {
        console.log('Error al obtener los juegos ' +err)
      });
    });
  }
  
}
