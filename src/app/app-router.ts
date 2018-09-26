import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { BelezaComponent } from './beleza/beleza.component';
import { AcademiasComponent } from './academias/academias.component';
import { ModaComponent } from './moda/moda.component';
import { PetshopComponent } from './petshop/petshop.component';
import { FarmaciasComponent } from './farmacias/farmacias.component';
import { ImoveisComponent } from './imoveis/imoveis.component';
import { ConstrucaoComponent } from './construcao/construcao.component';
import { ServicosComponent } from './servicos/servicos.component';
import { RestaurantDetailComponent } from './restaurants/restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurants/restaurant-detail/menu/menu.component';
import { ReviewsComponent } from './restaurants/restaurant-detail/reviews/reviews.component';
import { OrderSumaryComponent } from './order-sumary/order-sumary.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './security/login/login.component';
import { LoggedInGuard } from './security/loggedin.guard';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    { path: 'login/:to', component: LoginComponent },
    {path: 'login', component: LoginComponent},
    {path: 'restaurants/:id', component: RestaurantDetailComponent,
        children: [
            {path: '', redirectTo: 'menu', pathMatch: 'full'},
            {path: 'menu', component: MenuComponent},
            {path: 'reviews', component: ReviewsComponent}
        ]},
    { path: 'restaurants', component: RestaurantsComponent },
    {path: 'beleza', component: BelezaComponent},
    {path: 'academias', component: AcademiasComponent},
    {path: 'moda', component: ModaComponent},
    {path: 'petshop', component: PetshopComponent},
    {path: 'farmacias', component: FarmaciasComponent},
    {path: 'imoveis', component: ImoveisComponent},
    {path: 'construcao', component: ConstrucaoComponent},
    {path: 'servicos', component: ServicosComponent},
    {path: 'about', loadChildren: './about/about.module#AboutModule'},
    {path: 'order', loadChildren: './order/order.module#OrderModule',
        canLoad: [LoggedInGuard], canActivate: [LoggedInGuard]},
    {path: 'orderSumary', component: OrderSumaryComponent},
    {path: '**', component: NotFoundComponent}
];
