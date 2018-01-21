import { Component, OnInit, Input } from '@angular/core';
import { RestaurantsComponent } from 'app/restaurants/restaurants.component'; // esta é a interface, que está como tipo da var restaurant

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html'
})
export class RestaurantComponent implements OnInit {

  @Input() restaurant: RestaurantsComponent

  constructor() { }

  ngOnInit() {
  }

}
