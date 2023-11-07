import { Component, OnInit } from '@angular/core';
import { GetApiServices } from '../services/getApi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private getApiServices: GetApiServices) {}

  name: string = '';
  AllTV: any = [];


  ngOnInit(): void {
    this.FunctionSearchByName('Miss Mamma Mia');
  }

  FunctionSearchByName(name: string): void {
    if (name != null) {
      this.getApiServices.getSearchByName(name).subscribe((res) => {
        if (res) {
          this.AllTV = res;
        }
      });
    }
  }
}
