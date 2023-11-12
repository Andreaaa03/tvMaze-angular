import { Component } from '@angular/core';
import { GetApiServices } from '../services/getApi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Show, singleShow, Cast } from '../models/show.type';
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
  casts!: Cast[];

  constructor(
    private getApiServices: GetApiServices,
    private activatedRoute: ActivatedRoute,
    private searchService: SearchService
  ) { }
  ngOnInit() {
    this.searchById = this.activatedRoute.snapshot.paramMap.get('id');
    this.FunctionSearchById();
    this.FunctionSearchByIdEpisode();
    this.FunctionSearchByIdCast();


    this.searchService.currentSearchQuery.subscribe(query => {
      // Esegui la ricerca o aggiorna la vista in base alla query
      this.searchByName = query;
      this.searchResults = this.FunctionSearchByName();
    });
  }
  // ripeti!!!

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
  FunctionSearchByIdCast(): void {
    if (this.searchById != null) {
      this.getApiServices.getSearchByIdCast(this.searchById).subscribe((res) => {
        if (res) {
          this.casts = res;
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
        }
      });
    }
  }

  menuScelto: string = 'main';
  sceltaMenu = {
    main: 'main',
    season: 'season',
    cast: 'cast',
  };
  selectMenu(scelta: string) {
    switch (scelta) {
      case this.sceltaMenu.main:
        this.menuScelto = this.sceltaMenu.main;
        break;
      case this.sceltaMenu.season:
        this.menuScelto = this.sceltaMenu.season;
        break;
      case this.sceltaMenu.cast:
        this.menuScelto = this.sceltaMenu.cast;
        break;
    }
  }

  //per la ricerca
  onSearch(query: string) {
    console.log(query);
    this.searchService.updateSearchQuery(query);
  }
}

