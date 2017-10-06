import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Restaurant} from './restaurant/restaurant.model';

import { MEAT_API } from 'app/app.api';

@Injectable()
export class RestaurantsService{

// este array agora está a vir direito de uma api que será consumida
//     rests: Restaurant[] = [
//         {
//         id: "bread-bakery",
//         name: "Bread & Bakery",
//         category: "Bakery",
//         deliveryEstimate: "25m",
//         rating: 4.9,
//         imagePath: "assets/img/restaurants/breadbakery.png"
//         },
//         {
//         id: "burger-house",
//         name: "Burger House",
//         category: "Hamburgers",
//         deliveryEstimate: "100m",
//         rating: 3.5,
//         imagePath: "assets/img/restaurants/burgerhouse.png"
//         }
//    ];

    constructor(private http: Http){}

    restaurats(): Observable<Restaurant[]>{
        return this.http.get(`${MEAT_API}/restaurants`).map(response => response.json());
    }
}