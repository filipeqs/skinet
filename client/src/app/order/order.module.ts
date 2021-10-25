import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { OrderRoutingModule } from './order-routing.module';
import { OrderDetailsComponent } from './order-details/order-details.component';

@NgModule({
    declarations: [OrdersComponent, OrderDetailsComponent],
    imports: [CommonModule, OrderRoutingModule],
})
export class OrderModule {}
