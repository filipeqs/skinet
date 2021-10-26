import {
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    OnDestroy,
    OnInit,
    ViewChild,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasket } from 'src/app/shared/models/basket';
import { IOrder } from 'src/app/shared/models/order';
import { CheckoutService } from '../checkout.service';

declare var Stripe;

@Component({
    selector: 'app-checkout-payment',
    templateUrl: './checkout-payment.component.html',
    styleUrls: ['./checkout-payment.component.scss'],
})
export class CheckoutPaymentComponent implements AfterViewInit, OnDestroy {
    @Input() checkoutForm: FormGroup;
    @ViewChild('cardNumber', { static: true }) cardNumberElement: ElementRef;
    @ViewChild('cardExpiry', { static: true }) cardExpiryElement: ElementRef;
    @ViewChild('cardCvc', { static: true }) cardCvcElement: ElementRef;
    stripe: any;
    cardNumber: any;
    cardExpiry: any;
    cardCvc: any;
    cardErrors: any;

    constructor(
        private basketService: BasketService,
        private checkoutSerive: CheckoutService,
        private toastr: ToastrService,
        private router: Router,
    ) {}

    ngAfterViewInit() {
        this.stripe = Stripe(
            'pk_test_51IXwZdJz2jsPDElMlkiMppCw2zJDnBzLGoWmvvyfsLXN2lnyeK0tFbuxSgotxPYGvlorvFq2EEV25UU2evsP07HB0012tdP3OR',
        );
        const elements = this.stripe.elements();

        this.cardNumber = elements.create('cardNumber');
        this.cardNumber.mount(this.cardNumberElement.nativeElement);

        this.cardExpiry = elements.create('cardExpiry');
        this.cardExpiry.mount(this.cardExpiryElement.nativeElement);

        this.cardCvc = elements.create('cardCvc');
        this.cardCvc.mount(this.cardCvcElement.nativeElement);
    }

    ngOnDestroy() {
        this.cardNumber.destroy();
        this.cardExpiry.destroy();
        this.cardCvc.destroy();
    }

    submitOrder() {
        const basket = this.basketService.getCurrentBasketValue();
        const orderToCreate = this.getOrderToCreate(basket);
        this.checkoutSerive.createOrder(orderToCreate).subscribe(
            (order: IOrder) => {
                this.toastr.success('Order created successfully');
                this.basketService.deleteLocalBasket(basket.id);
                const navigationExtras: NavigationExtras = { state: order };
                this.router.navigate(['checkout/success'], navigationExtras);
            },
            (error) => {
                this.toastr.error(error.message);
                console.log(error);
            },
        );
    }

    private getOrderToCreate(basket: IBasket) {
        return {
            basketId: basket.id,
            deliveryMethodId: +this.checkoutForm.get('deliveryForm').get('deliveryMethod').value,
            shipToAddress: this.checkoutForm.get('addressForm').value,
        };
    }
}
