import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';

import { MEAT_API } from '../../app.api';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ErrorHandler } from 'app/app.error-handler';
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-item.model';

@Injectable()

export class RestaurantService{
    
    constructor(private http: Http){}

    //metodo que vai retornar um array de restaurants
    restaurants(search?: string): Observable<Restaurant[]>{
        return this.http.get(`${MEAT_API}/restaurants`, {params: {q: search}})
                .map(response => response.json())
                .catch(ErrorHandler.handleError)
    }


    //metodo que retorna apenas um restaurant, noo caso o id do que for selecionado ou chamado
    restaurantById(id: string): Observable<Restaurant>{
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
               .map(response => response.json())
               .catch(ErrorHandler.handleError)
    }

    reviewsOfRestaurant(id: string): Observable<any>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    menuOfRestaurant(id: string): Observable<MenuItem[]>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

}