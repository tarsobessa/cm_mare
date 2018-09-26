import {Injectable} from '@angular/core';
import { ShoppingCartService } from '../restaurants/restaurant-detail/shopping-cart/shopping-cart.service';
import { CartItem } from '../restaurants/restaurant-detail/shopping-cart/cart-item.model';
import { Order } from './order.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { CM_API } from '../app.api';

@Injectable()

export class OrderService {
    constructor(private cartService: ShoppingCartService,
        private http: HttpClient) {}

    itemsValue(): number {
        return this.cartService.total();
    }

    cartItems(): CartItem[] {
        return this.cartService.items;
    }

    increaseQty(item: CartItem) {
        this.cartService.increaseQty(item);
    }

    decreaseQty(item: CartItem) {
        this.cartService.decreaseQty(item);
    }

    remove(item: CartItem) {
        this.cartService.removeItem(item);
    }

    clear() {
        this.cartService.clear();
    }

    checkOrder(order: Order): Observable<string> {
        return this.http.post<Order>(`${CM_API}/orders`, order)
            .map(order => order.id);
    }
}
