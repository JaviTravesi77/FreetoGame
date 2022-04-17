import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(juego: any, length: number = 10, showAll: boolean = false): any {
    if (showAll) {
      return juego.short_description;
    }
    if (juego.short_description.length > length) {
      return juego.short_description.substring(0, length)+' ' ;
    }
    return juego;
  }
}