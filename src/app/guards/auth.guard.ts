import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from '../auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  // constructor(private afAuth:AngularFireAuth){}
  // async canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot):  Promise<boolean | UrlTree>  {


  //     const user = await this.afAuth.currentUser;
  //     const isAuthenticated = user ? true : false;
  //     if (!isAuthenticated) {
  //       alert('You must be authenticated in order to pass a command ');
  //     }
  //     return isAuthenticated;
  

  // }
  constructor(private as:AuthService,private router:Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> |Promise<boolean> {
    return new Promise(resolve =>{
      this.as.user.subscribe(user => {
        if (user) resolve(true);
        else{
          this.router.navigate(['/login'])
          resolve(false)
        }
      })
    })
      
  }
}
