import { Component, OnInit} from '@angular/core';

import { Restaurant } from './restaurant/restaurant.model';

import { RestaurantsService } from './restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  //este trecho passou para page que representa os serviços do app
  // restaurants: Restaurant[] = [
  //   {
  //     id: "bread-bakery",
  //     name: "Bread & Bakery",
  //     category: "Bakery",
  //     deliveryEstimate: "25m",
  //     rating: 4.9,
  //     imagePath: "assets/img/restaurants/breadbakery.png"
  //   },
  //   {
  //     id: "burger-house",
  //     name: "Burger House",
  //     category: "Hamburgers",
  //     deliveryEstimate: "100m",
  //     rating: 3.5,
  //     imagePath: "assets/img/restaurants/burgerhouse.png"
  //   }
  // ];

  restaurants: Restaurant[] = [];

  constructor(private restaurantsService: RestaurantsService) { }
  
  //este método será chamado uma vez durante a aplicação
  ngOnInit() {
    // this.restaurants = this.restaurantsService.restaurats();
    this.restaurantsService.restaurats()
    .subscribe(restaurants => this.restaurants = restaurants);
  }

}
