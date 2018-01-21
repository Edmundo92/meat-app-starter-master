import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
import { RestaurantService } from 'app/restaurants/restaurant/restaurant.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[];

  //injetei a classe restauranrService neste construtor
  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurantService.restaurants()
        .subscribe(restaurants => this.restaurants = restaurants)
  }

}
