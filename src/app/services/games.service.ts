import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

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
        console.log(data);
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
        console.log(data);
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
        console.log(data);
      }, err => {
        console.log('Error al obtener los juegos ' +err)
      });
    });
  }
  
}
