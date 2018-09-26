import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Restaurant } from './restaurant/restaurant.model';
import { CM_API } from '../app.api';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { MenuItem } from './restaurant-detail/menu-item/menu-item.model';


@Injectable()
export class RestaurantsService {
    constructor(private http: HttpClient) { }

    // Método
    restaurants(search?: string): Observable<Restaurant[]> {
        let params: HttpParams = undefined;
        if (search) {
            params = new HttpParams().append('q', search);
        }
        return this.http.get<Restaurant[]>(`${CM_API}/restaurants`, {params: params});
     }

    // Método
    restaurantById(id: string): Observable<Restaurant> {
        return this.http.get<Restaurant>(`${CM_API}/restaurants/${id}`);
    }

    reviewsOfRestaurant(id: string): Observable<any> {
        return this.http.get(`${CM_API}/restaurants/${id}/reviews`);
    }

    menuOfRestaurant(id: string): Observable<MenuItem[]> {
        return this.http.get<MenuItem[]>(`${CM_API}/restaurants/${id}/menu`);
    }
}
