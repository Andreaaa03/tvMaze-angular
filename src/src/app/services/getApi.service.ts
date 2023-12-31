import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs';
import { Show, singleShow } from '../models/show.type';

@Injectable({
  providedIn: 'root',
})
export class GetApiServices {
  constructor(private apiService: ApiService) {}

  getSearchByName(name: string) {
    return this.apiService.searchByName(name).pipe(
      map((res: any) => {
        for(let i=0; i<res.length; i++) {
          if(res[i].show.ended){
            res[i].show.yearEnded=res[i].show.ended.slice(0, 4);
          }
          if(res[i].show.premiered){
            res[i].show.yearPremiered=res[i].show.premiered.slice(0, 4);
          }
        }
        return res as Show[];
      })
    );
  }
  
  getSearchById(id: string) {
    return this.apiService.searchById(id).pipe(
      map((res: any) => {
        return res as singleShow;
      })
    );
  }

  // trovaNull(ogg: {}) {
  //   for (let chiave in ogg) {
  //     if ((ogg as any)[chiave] === null) {
  //       (ogg as any)[chiave] = 'aaaaaaaaaaaaaaaaaaaaa';
  //     } else if (typeof (ogg as any)[chiave] === 'object') {
  //       (ogg as any)[chiave] = this.trovaNull((ogg as any)[chiave]);
  //     } 
  //   }
  //   return ogg;
  // }
}
