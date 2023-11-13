import { Component, OnInit } from '@angular/core';
import { GetApiServices } from '../services/getApi.service';
import { Show } from '../models/show.type';
import { SearchService } from '../services/barra-ricerca.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private getApiServices: GetApiServices,
    private searchService: SearchService,
    private router: Router,
  ) {}

  name: string = '';
  allTV: Show[] = [];
  searchByName: string = '';
  searchResults: any[] = [];

  ngOnInit(): void {
    this.searchService.currentSearchQuery.subscribe((query) => {
      // Esegui la ricerca o aggiorna la vista in base alla query
      this.searchByName = query;
      this.searchResults = this.FunctionSearchByName();
      
    });
  }


  FunctionSearchByName() {
    if (this.searchByName != null) {
      this.getApiServices
        .getSearchByName(this.searchByName)
        .subscribe((res) => {
          if (res) {
            this.allTV = res;
          }
        });
    }
    return this.allTV;
  }


  onSearch(query: string) {
    this.searchService.updateSearchQuery(query);
  }
}
