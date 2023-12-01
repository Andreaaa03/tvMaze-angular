import { Component, Input, OnInit } from '@angular/core';
import { Show } from '../models/show.type';

@Component({
  selector: 'app-drink-card',
  templateUrl: './drink-card.component.html',
  // styleUrls: ['./drink-card.component.scss']
})
export class DrinkCardComponent implements OnInit {
  @Input() drink!: Show;
  ngOnInit(){
    if(!this.drink){
      console.log('non hai passato nessun drink');
    }
  }
}
