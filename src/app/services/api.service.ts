import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'https://api.tvmaze.com/';

  constructor(private http: HttpClient) {}

  searchByName(name: string) {
    return this.http.get(this.baseUrl + 'search/shows?q=' + name);
  }

  searchById(id: string) {
    return this.http.get(this.baseUrl + 'shows/' + id);
  }
  
  searchByIdEpisodes(id: string) {
    return this.http.get(this.baseUrl + "shows/" + id + '/episodes?specials=1');
  }

  searchByIdCast(id: string) {
    return this.http.get(this.baseUrl + "shows/" + id + '/cast');
  }
  
}
