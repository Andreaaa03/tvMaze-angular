import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs';
import { Show } from '../models/show.type';

@Injectable({
  providedIn: 'root',
})
export class GetApiServices {
  constructor(private apiService: ApiService) {}

  getSearchByName(name: string) {
    return this.apiService.searchByName(name).pipe(
      map((res: any) => {
        return res as Show[];
      })
    );
  }

  trovaNull(ogg: {}) {
    for (let chiave in ogg) {
      if (typeof (ogg as any)[chiave] === 'object') {
        (ogg as any)[chiave] = this.trovaNull((ogg as any)[chiave]);
      } else if ((ogg as any)[chiave] === null) {
        (ogg as any)[chiave] = 'aaaaaaaaaaaaaaaaaaaaa';
      }


      if ((ogg as any)[chiave] === null) {
        (ogg as any)[chiave] = 'aaaaaaaaaaaaaaaaaaaaa';
      } else if (typeof (ogg as any)[chiave] === 'object') {
        (ogg as any)[chiave] = this.trovaNull((ogg as any)[chiave]);
      } 
    }
    return ogg;
  }
}
