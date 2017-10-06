import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Restaurant} from './restaurant/restaurant.model';
import {MenuItem} from '../restaurant-detail/menu-item/menu-item.model';

import { MEAT_API } from 'app/app.api';

import {ErrorHandler} from '../app.error-handler';

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
        return this.http.get(`${MEAT_API}/restaurants`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError);
    }

    restaurantById(id: string): Observable<Restaurant>{
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError);
    }

    reviewsOfRestaurant(id: string): Observable<any>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError);
    }

    menuOfRestaurant(id: string): Observable<MenuItem[]>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError);
    }    

}