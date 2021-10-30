"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[202],{8202:(j,k,s)=>{s.r(k),s.d(k,{CheckoutModule:()=>R});var u=s(8583),p=s(15),c=s(665),e=s(3018),b=s(4878),v=s(9508),d=s(8596);function x(r,n){if(1&r){const t=e.EpF();e.TgZ(0,"li",4),e.TgZ(1,"button",5),e.NdJ("click",function(){const a=e.CHM(t).index;return e.oxw().onClick(a)}),e._uU(2),e.qZA(),e.qZA()}if(2&r){const t=n.$implicit,o=n.index,i=e.oxw();e.xp6(1),e.ekj("active",i.selectedIndex==o),e.Q6J("disabled",!0),e.xp6(1),e.hij(" ",t.label," ")}}let T=(()=>{class r extends d.B8{ngOnInit(){this.linear=this.linerModeSelected}onClick(t){this.selectedIndex=t}}return r.\u0275fac=function(){let n;return function(o){return(n||(n=e.n5z(r)))(o||r)}}(),r.\u0275cmp=e.Xpm({type:r,selectors:[["app-stepper"]],inputs:{linerModeSelected:"linerModeSelected"},features:[e._Bn([{provide:d.B8,useExisting:r}]),e.qOj],decls:5,vars:2,consts:[[1,"container"],[1,"nav","nav-pills","nav-justified"],["class","nav-item",4,"ngFor","ngForOf"],[3,"ngTemplateOutlet"],[1,"nav-item"],[1,"nav-link","py-3","text-uppercase","font-weight-bolt","btn-block",3,"disabled","click"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"ul",1),e.YNc(2,x,3,4,"li",2),e.qZA(),e.TgZ(3,"div"),e.GkF(4,3),e.qZA(),e.qZA()),2&t&&(e.xp6(2),e.Q6J("ngForOf",o.steps),e.xp6(2),e.Q6J("ngTemplateOutlet",o.selected.content))},directives:[u.sg,u.tP],styles:["button.nav-link[_ngcontent-%COMP%]{font-weight:bold;background:#e9ecef;border-radius:0;border:none}button.nav-link[_ngcontent-%COMP%]:focus{outline:none}button.nav-link.active[_ngcontent-%COMP%]:hover{color:#fff}button.nav-link[_ngcontent-%COMP%]:active{outline:none}button.nav-link.active[_ngcontent-%COMP%]:focus{outline:none}button.nav-link[_ngcontent-%COMP%]:disabled:not(.active){color:#333}"]}),r})();var f=s(9344),C=s(4015);let _=(()=>{class r{constructor(t,o){this.accountService=t,this.toastr=o}ngOnInit(){}saveUserAddress(){this.accountService.updateUserAddress(this.checkoutForm.get("addressForm").value).subscribe(t=>{this.toastr.success("Address saved"),this.checkoutForm.get("addressForm").reset(t)},t=>{this.toastr.error(t.message),console.log(t)})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(b.B),e.Y36(f._W))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-checkout-address"]],inputs:{checkoutForm:"checkoutForm"},decls:26,vars:9,consts:[[1,"mt-4",3,"formGroup"],[1,"d-flex","justify-content-between","align-items-center"],[1,"btn","btn-outline-success","mb-3",3,"disabled","click"],["formGroupName","addressForm",1,"row"],[1,"form-group","col-6"],["formControlName","firstName",3,"label"],["formControlName","lastName",3,"label"],["formControlName","street",3,"label"],["formControlName","city",3,"label"],["formControlName","state",3,"label"],["formControlName","zipCode",3,"label"],[1,"float-none","d-flex","justify-content-between","flex-column","flex-lg-row","mb-5"],["routerLink","/basket",1,"btn","btn-outline-primary"],[1,"fa","fa-angle-left"],["cdkStepperNext","",1,"btn","btn-primary",3,"disabled"],[1,"fa","fa-angle-right"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"h4"),e._uU(3,"Shipping Address"),e.qZA(),e.TgZ(4,"button",2),e.NdJ("click",function(){return o.saveUserAddress()}),e._uU(5," Save as default address "),e.qZA(),e.qZA(),e.TgZ(6,"div",3),e.TgZ(7,"div",4),e._UZ(8,"app-text-input",5),e.qZA(),e.TgZ(9,"div",4),e._UZ(10,"app-text-input",6),e.qZA(),e.TgZ(11,"div",4),e._UZ(12,"app-text-input",7),e.qZA(),e.TgZ(13,"div",4),e._UZ(14,"app-text-input",8),e.qZA(),e.TgZ(15,"div",4),e._UZ(16,"app-text-input",9),e.qZA(),e.TgZ(17,"div",4),e._UZ(18,"app-text-input",10),e.qZA(),e.qZA(),e.qZA(),e.TgZ(19,"div",11),e.TgZ(20,"button",12),e._UZ(21,"i",13),e._uU(22," Back to Basket "),e.qZA(),e.TgZ(23,"button",14),e._uU(24," Go to Delivery "),e._UZ(25,"i",15),e.qZA(),e.qZA()),2&t&&(e.Q6J("formGroup",o.checkoutForm),e.xp6(4),e.Q6J("disabled",!o.checkoutForm.get("addressForm").valid||!o.checkoutForm.get("addressForm").dirty),e.xp6(4),e.Q6J("label","First Name"),e.xp6(2),e.Q6J("label","Last Name"),e.xp6(2),e.Q6J("label","Street"),e.xp6(2),e.Q6J("label","City"),e.xp6(2),e.Q6J("label","State"),e.xp6(2),e.Q6J("label","Zipcode"),e.xp6(5),e.Q6J("disabled",o.checkoutForm.get("addressForm").invalid))},directives:[c.JL,c.sg,c.x0,C.t,c.JJ,c.u,p.rH,d.st],styles:[""]}),r})();var F=s(8002),A=s(2340),S=s(1841);let Z=(()=>{class r{constructor(t){this.http=t,this.baseUrl=A.N.apiUrl}createOrder(t){return this.http.post(this.baseUrl+"orders",t)}getDeliveryMethods(){return this.http.get(this.baseUrl+"orders/deliveryMethods").pipe((0,F.U)(t=>t.sort((o,i)=>i.price-o.price)))}}return r.\u0275fac=function(t){return new(t||r)(e.LFG(S.eN))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();function U(r,n){if(1&r){const t=e.EpF();e.TgZ(0,"div",9),e.TgZ(1,"input",10),e.NdJ("click",function(){const a=e.CHM(t).$implicit;return e.oxw().setShippingPrice(a)}),e.qZA(),e.TgZ(2,"label",11),e.TgZ(3,"strong"),e._uU(4),e.ALo(5,"currency"),e.qZA(),e._UZ(6,"br"),e.TgZ(7,"span",12),e._uU(8),e.qZA(),e.qZA(),e.qZA()}if(2&r){const t=n.$implicit;e.xp6(1),e.s9C("id",t.id),e.s9C("value",t.id),e.xp6(1),e.s9C("for",t.id),e.xp6(2),e.AsE("",t.shortName," - ",e.lcZ(5,6,t.price),""),e.xp6(4),e.Oqu(t.description)}}let q=(()=>{class r{constructor(t,o){this.checkoutService=t,this.basketService=o}ngOnInit(){this.checkoutService.getDeliveryMethods().subscribe(t=>{this.deliveryMethods=t},t=>{console.log(t)})}setShippingPrice(t){this.basketService.setShippingPrice(t)}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(Z),e.Y36(v.v))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-checkout-delivery"]],inputs:{checkoutForm:"checkoutForm"},decls:12,vars:3,consts:[[1,"mt-4",3,"formGroup"],[1,"mb-3"],["formGroupName","deliveryForm",1,"row","ml-5"],["class","col-6 form-group",4,"ngFor","ngForOf"],[1,"float-none","d-flex","justify-content-between","flex-column","flex-lg-row","mb-5"],["cdkStepperPrevious","",1,"btn","btn-outline-primary"],[1,"fa","fa-angle-left"],["cdkStepperNext","",1,"btn","btn-primary",3,"disabled"],[1,"fa","fa-angle-right"],[1,"col-6","form-group"],["type","radio","formControlName","deliveryMethod",1,"custom-control-input",3,"id","value","click"],[1,"custom-control-label",3,"for"],[1,"label-description"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"h4",1),e._uU(2,"Choose your delivery method"),e.qZA(),e.TgZ(3,"div",2),e.YNc(4,U,9,8,"div",3),e.qZA(),e.qZA(),e.TgZ(5,"div",4),e.TgZ(6,"button",5),e._UZ(7,"i",6),e._uU(8," Back to Address "),e.qZA(),e.TgZ(9,"button",7),e._uU(10," Go to Review "),e._UZ(11,"i",8),e.qZA(),e.qZA()),2&t&&(e.Q6J("formGroup",o.checkoutForm),e.xp6(4),e.Q6J("ngForOf",o.deliveryMethods),e.xp6(5),e.Q6J("disabled",o.checkoutForm.get("deliveryForm").invalid))},directives:[c.JL,c.sg,c.x0,u.sg,d.po,d.st,c._,c.Fj,c.JJ,c.u],pipes:[u.H9],styles:[""]}),r})();var J=s(3449);let N=(()=>{class r{constructor(t,o){this.basketService=t,this.toastr=o}ngOnInit(){}createPaymentIntent(){return this.basketService.createPaymentIntent().subscribe(t=>{this.appStepper.next()},t=>{console.log(t)})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(v.v),e.Y36(f._W))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-checkout-review"]],inputs:{appStepper:"appStepper"},decls:9,vars:1,consts:[[1,"mt-4"],[3,"isBasket"],[1,"float-none","d-flex","justify-content-between","flex-column","flex-lg-row","mb-5"],["cdkStepperPrevious","",1,"btn","btn-outline-primary"],[1,"fa","fa-angle-left"],[1,"btn","btn-primary",3,"click"],[1,"fa","fa-angle-right"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"app-basket-summary",1),e.qZA(),e.TgZ(2,"div",2),e.TgZ(3,"button",3),e._UZ(4,"i",4),e._uU(5," Back to Delivery "),e.qZA(),e.TgZ(6,"button",5),e.NdJ("click",function(){return o.createPaymentIntent()}),e._uU(7," Go to Payment "),e._UZ(8,"i",6),e.qZA(),e.qZA()),2&t&&(e.xp6(1),e.Q6J("isBasket",!1))},directives:[J.b,d.po],styles:[""]}),r})();function y(r,n,t,o,i,a,l){try{var h=r[a](l),m=h.value}catch(H){return void t(H)}h.done?n(m):Promise.resolve(m).then(o,i)}function g(r){return function(){var n=this,t=arguments;return new Promise(function(o,i){var a=r.apply(n,t);function l(m){y(a,o,i,l,h,"next",m)}function h(m){y(a,o,i,l,h,"throw",m)}l(void 0)})}}const M=["cardNumber"],O=["cardExpiry"],E=["cardCvc"];function w(r,n){if(1&r&&(e.ynx(0),e.TgZ(1,"span",17),e._uU(2),e.qZA(),e.BQk()),2&r){const t=e.oxw();e.xp6(2),e.Oqu(t.cardErrors)}}function P(r,n){1&r&&e._UZ(0,"i",18)}let I=(()=>{class r{constructor(t,o,i,a){this.basketService=t,this.checkoutSerive=o,this.toastr=i,this.router=a,this.cardHandler=this.onChange.bind(this),this.loading=!1,this.cardNumberValid=!1,this.cardExpiryValid=!1,this.cardCvcValid=!1}ngAfterViewInit(){this.stripe=Stripe("pk_test_51IXwZdJz2jsPDElMlkiMppCw2zJDnBzLGoWmvvyfsLXN2lnyeK0tFbuxSgotxPYGvlorvFq2EEV25UU2evsP07HB0012tdP3OR");const t=this.stripe.elements();this.cardNumber=t.create("cardNumber"),this.cardNumber.mount(this.cardNumberElement.nativeElement),this.cardNumber.addEventListener("change",this.cardHandler),this.cardExpiry=t.create("cardExpiry"),this.cardExpiry.mount(this.cardExpiryElement.nativeElement),this.cardExpiry.addEventListener("change",this.cardHandler),this.cardCvc=t.create("cardCvc"),this.cardCvc.mount(this.cardCvcElement.nativeElement),this.cardCvc.addEventListener("change",this.cardHandler)}ngOnDestroy(){this.cardNumber.destroy(),this.cardExpiry.destroy(),this.cardCvc.destroy()}onChange(t){switch(this.cardErrors=t.error?t.error.message:null,t.elementType){case"cardNumber":this.cardNumberValid=t.complete;break;case"cardExpiry":this.cardExpiryValid=t.complete;break;case"cardCvc":this.cardCvcValid=t.complete}}submitOrder(){var t=this;return g(function*(){t.loading=!0;const o=t.basketService.getCurrentBasketValue();try{const i=yield t.createOrder(o),a=yield t.confirmPaymentWithStripe(o);a.paymentIntent?(t.basketService.deleteBasket(o),t.router.navigate(["checkout/success"],{state:i})):t.toastr.error(a.error.message),t.loading=!1}catch(i){console.log(i),t.loading=!1}})()}confirmPaymentWithStripe(t){var o=this;return g(function*(){return o.stripe.confirmCardPayment(t.clientSecret,{payment_method:{card:o.cardNumber,billing_details:{name:o.checkoutForm.get("paymentForm").get("nameOnCard").value}}})})()}createOrder(t){var o=this;return g(function*(){const i=o.getOrderToCreate(t);return o.checkoutSerive.createOrder(i).toPromise()})()}getOrderToCreate(t){return{basketId:t.id,deliveryMethodId:+this.checkoutForm.get("deliveryForm").get("deliveryMethod").value,shipToAddress:this.checkoutForm.get("addressForm").value}}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(v.v),e.Y36(Z),e.Y36(f._W),e.Y36(p.F0))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-checkout-payment"]],viewQuery:function(t,o){if(1&t&&(e.Gf(M,7),e.Gf(O,7),e.Gf(E,7)),2&t){let i;e.iGM(i=e.CRH())&&(o.cardNumberElement=i.first),e.iGM(i=e.CRH())&&(o.cardExpiryElement=i.first),e.iGM(i=e.CRH())&&(o.cardCvcElement=i.first)}},inputs:{checkoutForm:"checkoutForm"},decls:22,vars:5,consts:[[1,"mt-4",3,"formGroup"],[1,"row"],["formGroupName","paymentForm",1,"form-group","col-12"],["formControlName","nameOnCard",3,"label"],[1,"form-group","col-6"],[1,"form-control","py-3"],["cardNumber",""],[4,"ngIf"],[1,"form-group","col-3"],["cardExpiry",""],["cardCvc",""],[1,"float-none","d-flex","justify-content-between","flex-column","flex-lg-row","mb-5"],["cdkStepperPrevious","",1,"btn","btn-outline-primary"],[1,"fa","fa-angle-left"],[1,"btn","btn-primary",3,"disabled","click"],[1,"fa","fa-angle-right"],["class","fa fa-spinner fa-spin",4,"ngIf"],[1,"text-danger"],[1,"fa","fa-spinner","fa-spin"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e._UZ(3,"app-text-input",3),e.qZA(),e.TgZ(4,"div",4),e._UZ(5,"div",5,6),e.YNc(7,w,3,1,"ng-container",7),e.qZA(),e.TgZ(8,"div",8),e._UZ(9,"div",5,9),e.qZA(),e.TgZ(11,"div",8),e._UZ(12,"div",5,10),e.qZA(),e.qZA(),e.qZA(),e.TgZ(14,"div",11),e.TgZ(15,"button",12),e._UZ(16,"i",13),e._uU(17," Back to Review "),e.qZA(),e.TgZ(18,"button",14),e.NdJ("click",function(){return o.submitOrder()}),e._uU(19," Submit Order "),e._UZ(20,"i",15),e.YNc(21,P,1,0,"i",16),e.qZA(),e.qZA()),2&t&&(e.Q6J("formGroup",o.checkoutForm),e.xp6(3),e.Q6J("label","Name on Card"),e.xp6(4),e.Q6J("ngIf",o.cardErrors),e.xp6(11),e.Q6J("disabled",o.loading||o.checkoutForm.get("paymentForm").invalid||!o.cardNumberValid||!o.cardExpiryValid||!o.cardCvcValid),e.xp6(3),e.Q6J("ngIf",o.loading))},directives:[c.JL,c.sg,c.x0,C.t,c.JJ,c.u,u.O5,d.po],styles:[""]}),r})();var Q=s(9281);function Y(r,n){if(1&r&&(e.TgZ(0,"button",5),e._uU(1," View your order "),e.qZA()),2&r){const t=e.oxw();e.MGl("routerLink","/orders/",null==t.order?null:t.order.id,"")}}function B(r,n){1&r&&(e.TgZ(0,"button",6),e._uU(1," View your orders "),e.qZA())}const V=[{path:"",component:(()=>{class r{constructor(t,o,i){this.fb=t,this.accountService=o,this.basketService=i}ngOnInit(){this.createCheckoutForm(),this.getAddressFormValues(),this.getDeliveryMethodValue()}createCheckoutForm(){this.checkoutForm=this.fb.group({addressForm:this.fb.group({firstName:[null,c.kI.required],lastName:[null,c.kI.required],street:[null,c.kI.required],city:[null,c.kI.required],state:[null,c.kI.required],zipCode:[null,c.kI.required]}),deliveryForm:this.fb.group({deliveryMethod:[null,c.kI.required]}),paymentForm:this.fb.group({nameOnCard:[null,c.kI.required]})})}getAddressFormValues(){this.accountService.getUserAddress().subscribe(t=>{t&&this.checkoutForm.get("addressForm").patchValue(t)},t=>{console.log(t)})}getDeliveryMethodValue(){const t=this.basketService.getCurrentBasketValue();null!==t.deliveryMethodId&&this.checkoutForm.get("deliveryForm").get("deliveryMethod").patchValue(t.deliveryMethodId.toString())}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(c.qu),e.Y36(b.B),e.Y36(v.v))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-checkout"]],decls:15,vars:11,consts:[[1,"container","mt-5"],[1,"row"],[1,"col-8"],[3,"linerModeSelected"],["appStepper",""],[3,"label","completed"],[3,"checkoutForm"],[3,"label"],[3,"appStepper"],[1,"col-4"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"app-stepper",3,4),e.TgZ(5,"cdk-step",5),e._UZ(6,"app-checkout-address",6),e.qZA(),e.TgZ(7,"cdk-step",5),e._UZ(8,"app-checkout-delivery",6),e.qZA(),e.TgZ(9,"cdk-step",7),e._UZ(10,"app-checkout-review",8),e.qZA(),e.TgZ(11,"cdk-step",7),e._UZ(12,"app-checkout-payment",6),e.qZA(),e.qZA(),e.qZA(),e.TgZ(13,"div",9),e._UZ(14,"app-order-totals"),e.qZA(),e.qZA(),e.qZA()),2&t){const i=e.MAs(4);e.xp6(3),e.Q6J("linerModeSelected",!0),e.xp6(2),e.Q6J("label","Address")("completed",o.checkoutForm.get("addressForm").valid),e.xp6(1),e.Q6J("checkoutForm",o.checkoutForm),e.xp6(1),e.Q6J("label","Delivery")("completed",o.checkoutForm.get("deliveryForm").valid),e.xp6(1),e.Q6J("checkoutForm",o.checkoutForm),e.xp6(1),e.Q6J("label","Review"),e.xp6(1),e.Q6J("appStepper",i),e.xp6(1),e.Q6J("label","Payment"),e.xp6(1),e.Q6J("checkoutForm",o.checkoutForm)}},directives:[T,d.be,_,q,N,I,Q.S],styles:[""]}),r})()},{path:"success",component:(()=>{class r{constructor(t){var o;this.router=t;const i=this.router.getCurrentNavigation(),a=null===(o=null==i?void 0:i.extras)||void 0===o?void 0:o.state;a&&(this.order=a)}ngOnInit(){}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(p.F0))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-checkout-success"]],decls:9,vars:2,consts:[[1,"container","mt-5"],[1,"fa","fa-check-circle","fa-5x",2,"color","green"],[1,"mb-4"],["class","btn btn-outline-success",3,"routerLink",4,"ngIf"],["routerLink","/orders","class","btn btn-outline-success",4,"ngIf"],[1,"btn","btn-outline-success",3,"routerLink"],["routerLink","/orders",1,"btn","btn-outline-success"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div"),e._UZ(2,"i",1),e.qZA(),e.TgZ(3,"h2"),e._uU(4,"Thank you. Your order is confirmed"),e.qZA(),e.TgZ(5,"p",2),e._uU(6," Your order has not shiped yet, but this is to be expected as we are not a real store! "),e.qZA(),e.YNc(7,Y,2,1,"button",3),e.YNc(8,B,2,0,"button",4),e.qZA()),2&t&&(e.xp6(7),e.Q6J("ngIf",o.order),e.xp6(1),e.Q6J("ngIf",!o.order))},directives:[u.O5,p.rH],styles:[""]}),r})()}];let L=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[u.ez,p.Bz.forChild(V)],p.Bz]}),r})();var D=s(4466);let R=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[u.ez,L,D.m]]}),r})()}}]);