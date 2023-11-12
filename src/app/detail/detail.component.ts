import { Component } from '@angular/core';
import { GetApiServices } from '../services/getApi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Show, singleShow } from '../models/show.type';
import { MenuComponent } from '../menu/menu.component';
import { SearchService } from '../services/barra-ricerca.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  // styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  name: string = '';
  singleTV!: singleShow;
  searchById: string | null = '';
  searchByName: string | null = '';
  searchResults: any = "";
  allTV!: Show[];
  Stagione:any = {
    bigArray : [],
    specialArray : [],
  }

  constructor(
    private getApiServices: GetApiServices,
    private activatedRoute: ActivatedRoute,
    private searchService: SearchService
  ) { }
  ngOnInit() {
    this.searchById = this.activatedRoute.snapshot.paramMap.get('id');
    this.FunctionSearchById();
    this.FunctionSearchByIdEpisode();


    this.searchService.currentSearchQuery.subscribe(query => {
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
  
  //chiamata per id
  FunctionSearchById(): void {
    if (this.searchById != null) {
      this.getApiServices.getSearchById(this.searchById).subscribe((res) => {
        if (res) {
          this.singleTV = res;
        }
      });
    }
  }

  FunctionSearchByIdEpisode():void{
    if (this.searchById != null) {
      this.getApiServices.getSearchByIdEpisode(this.searchById).subscribe((res) => {
        if (res) {
          console.log(res);
          this.Stagione = res;
          console.log(this.Stagione);
        }
      });
    }
  }

  menuScelto: string = 'main';
  sceltaMenu = {
    main: 'main',
    season: 'season',
  };
  selectMenu(scelta: string) {
    switch (scelta) {
      case this.sceltaMenu.main:
        this.menuScelto = this.sceltaMenu.main;
        break;
      case this.sceltaMenu.season:
        this.menuScelto = this.sceltaMenu.season;
        break;
    }
  }

  //per la ricerca
  onSearch(query: string) {
    console.log(query);
    this.searchService.updateSearchQuery(query);
  }
}

