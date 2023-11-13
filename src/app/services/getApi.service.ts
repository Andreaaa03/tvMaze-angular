import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs';
import { Show, singleShow, Episode, Season, Cast } from '../models/show.type';

@Injectable({
  providedIn: 'root',
})
export class GetApiServices {
  constructor(private apiService: ApiService) { }

  getSearchByName(name: string) {
    return this.apiService.searchByName(name).pipe(
      map((res: any) => {
        for (let i = 0; i < res.length; i++) {
          if (res[i].show.ended) {
            res[i].show.yearEnded = res[i].show.ended.slice(0, 4);
          }
          if (res[i].show.premiered) {
            res[i].show.yearPremiered = res[i].show.premiered.slice(0, 4);
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
  getSearchByIdCast(id: string) {
    return this.apiService.searchByIdCast(id).pipe(
      map((res: any) => {
        return res as Cast[];
      })
    );
  }

  
  oggetto:any = {
    bigArray: [],
    specialArray: [],
  }
  getSearchByIdEpisode(id: string) {
    let season = 1;
    let episodes = 0;
    let newArray:any = [];
    return this.apiService.searchByIdEpisodes(id).pipe(
      map((res: any) => {
        console.log(res);
        newArray = [];
        this.oggetto.bigArray = [];
        this.oggetto.specialArray = [];
        res.forEach((element: any) => {
          if (element.type !== "regular") {
            this.oggetto.specialArray.push(element);
          } else {
            if (element.number != episodes) {
              episodes = element.number;
              newArray.push(element);
            }

            if (element.season !== season) {
              console.log(element.season, season);
              debugger;
              season = element.season;
              this.oggetto.bigArray.push(newArray);
              newArray = [];
              episodes = 0;
            }
            
          }
        })
        if(season===1){
          this.oggetto.bigArray.push(newArray);
        }
        return this.oggetto as Season;
      })
    );
  }

  // trovaNull(ogg: {}) {
  //   for (let chiave in ogg) {
  //     if ((ogg as any)[chiave] === null) {
  //       (ogg as any)[chiave] = '';
  //     } else if (typeof (ogg as any)[chiave] === 'object') {
  //       (ogg as any)[chiave] = this.trovaNull((ogg as any)[chiave]);
  //     } 
  //   }
  //   return ogg;
  // }
}
