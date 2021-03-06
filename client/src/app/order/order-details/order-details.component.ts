import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOrder } from 'src/app/shared/models/order';
import { BreadcrumbService } from 'xng-breadcrumb';
import { OrderService } from '../order.service';

@Component({
    selector: 'app-order-details',
    templateUrl: './order-details.component.html',
    styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {
    order: IOrder;

    constructor(
        private route: ActivatedRoute,
        private orderService: OrderService,
        private breadcrumbService: BreadcrumbService,
    ) {
        this.breadcrumbService.set('@OrderDetails', '');
    }

    ngOnInit(): void {
        this.getOrder();
    }

    getOrder() {
        const id = +this.route.snapshot.params.id;
        this.orderService.getOrderById(id).subscribe(
            (order) => {
                this.order = order;
                this.breadcrumbService.set('@OrderDetails', `Order# ${order.id} - ${order.status}`);
            },
            (error) => {
                console.log(error);
            },
        );
    }
}
