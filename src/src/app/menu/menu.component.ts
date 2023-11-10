import { Component } from '@angular/core';
import { SearchService } from '../services/barra-ricerca.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  // styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  searchQuery: string = '';

  constructor(private searchService: SearchService, private router:Router) {}

  onSearch() {
    if (this.router.url.includes('/detail')) {
      this.router.navigate(['/home']);
    }
    console.log("ciaoo");
    this.searchService.updateSearchQuery(this.searchQuery);
  }
}
