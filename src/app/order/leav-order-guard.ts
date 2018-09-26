import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { OrderComponent } from './order.component';
import { Order } from './order.model';

export class LeavOrderGuard implements CanDeactivate<OrderComponent> {
  canDeactivate (orderComponent: OrderComponent, activateRoute: ActivatedRouteSnapshot,
    routerState: RouterStateSnapshot): boolean {
      if (!orderComponent.isOrderCompleted()) {
        return window.confirm('Deseja desistir da compra?');
      }else {
        return true;
      }
    }
}
