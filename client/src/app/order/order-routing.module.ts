import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

const routes: Routes = [
    { path: '', component: OrdersComponent },
    {
        path: ':id',
        component: OrderDetailsComponent,
        data: { breadcrumb: { alias: 'OrderDetails' } },
    },
];

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OrderRoutingModule {}
