import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";
import { OrderComponent } from "app/order/order.component";
import { OrderItensComponent } from "app/order/order-itens/order-itens.component";
import { DeliveryComponent } from "app/order/delivery/delivery.component";

import { SharedModule } from "app/shared/shared.module";

const ROUTES: Routes = [
    {path: '', component: OrderComponent}
]

@NgModule({
    declarations: [OrderComponent, OrderItensComponent, DeliveryComponent],
    imports: [RouterModule.forChild(ROUTES), SharedModule]
})
export class OrderModule{


} 