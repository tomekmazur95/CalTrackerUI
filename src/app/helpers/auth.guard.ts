import {CanActivateFn, Router} from '@angular/router';
import {AuthenticationService} from "../services/authentication.service";
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthenticationService);
  if(!authService.isLoggedIn()) {
    router.navigate(['/login']);
  }
  return true;
};


