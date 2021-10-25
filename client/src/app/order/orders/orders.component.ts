import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/shared/models/order';
import { OrderService } from '../order.service';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
    orders: IOrder[];

    constructor(private orderService: OrderService) {}

    ngOnInit(): void {
        this.getOrders();
    }

    getOrders() {
        this.orderService.getOrders().subscribe(
            (orders) => {
                this.orders = orders;
            },
            (error) => {
                console.log(error);
            },
        );
    }
}
