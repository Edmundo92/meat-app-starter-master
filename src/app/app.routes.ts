import { Routes } from '@angular/router';
import { HomeComponent } from 'app/home/home.component';
import { AboutComponent } from 'app/about/about.component';
import { RestaurantsComponent } from 'app/restaurants/restaurants.component';
import { RestaurantDetailComponent } from 'app/restaurant-detail/restaurant-detail.component';
import { MenuComponent } from 'app/restaurant-detail/menu/menu.component';
import { ReviewsComponent } from 'app/restaurant-detail/reviews/reviews.component';
import { OrderSumaryComponent } from 'app/order-sumary/order-sumary.component';

export const ROUTES: Routes = [

    {path: '', component: HomeComponent},
    {path: 'about', loadChildren:'./about/about.module#AboutModule'},
    {path: 'restaurants', component: RestaurantsComponent},
    {path: 'restaurants/:id', component: RestaurantDetailComponent,
        children: [
            {path: '', redirectTo: 'menu', pathMatch: 'full'},
            {path: 'menu', component: MenuComponent},
            {path: 'reviews', component: ReviewsComponent}
        ]
    },
    {path: 'order-sumary', component: OrderSumaryComponent},
    {path: 'order', loadChildren:'./order/order.module#OrderModule'}


]


/*
    Sempre que definir o nome de um component, deve-se importar o component.
    Nao esquecer de importar a classe app.routes no modulo raiz que é o aap.module.ts, da seguinte formar:

    import { ROUTES } from './app.routes';

    de seguida, devo preencher a campo de metadado com o seguinte:
    RouterModule.forRoot(ROUTES)
*/