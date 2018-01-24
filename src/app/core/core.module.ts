import { NgModule } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { RestaurantService } from "app/restaurants/restaurant/restaurant.service";
import { OrderService } from "app/order/order.service";

//nao está a ser usado o core module

@NgModule({
    providers: [ShoppingCartService, RestaurantService, OrderService]
})
export class CoreModule{


} 

/*
    Esse cor module, tem todos os servicos da nossa aplicacao
*/