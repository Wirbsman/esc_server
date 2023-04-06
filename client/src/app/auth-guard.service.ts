import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {CurrentUser} from "./current-user";
import {AuthenticationService} from "./authentication.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router: Router, private currentUser: CurrentUser, private authService: AuthenticationService) {
  }

   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean {
   if (this.currentUser.isLoggedIn()){
      return true;
    } else {
    this.router.navigateByUrl("/login")
    return false;
    }
  }
}
