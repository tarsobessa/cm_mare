import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ImputComponent } from './imput/imput.component';
import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component';

import { ShoppingCartService } from '../restaurants/restaurant-detail/shopping-cart/shopping-cart.service';
import { RestaurantsService } from '../restaurants/restaurants.service';
import { OrderService } from '../order/order.service';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { NotificationService } from './messages/notification.service';
import { LoginService } from '../security/login/login.service';
import { LoggedInGuard } from '../security/loggedin.guard';
import { LeavOrderGuard } from '../order/leav-order-guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../security/auth.Interceptor';

@NgModule({
    declarations: [ImputComponent, RadioComponent, RatingComponent, SnackbarComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [ImputComponent, RadioComponent, SnackbarComponent, RatingComponent,
              CommonModule, FormsModule, ReactiveFormsModule]
})

export  class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [ShoppingCartService,
            RestaurantsService, OrderService,
            NotificationService, LoginService,
            LoggedInGuard, LeavOrderGuard,
                { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
            ]
        };
    }
}
