import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from '../auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthadminGuard implements CanActivate {
  constructor(private as:AuthService,private router:Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> |Promise<boolean> {
    return new Promise(resolve =>{
      this.as.user.subscribe(user => {
        if (user) resolve(true);
        else{
          this.router.navigate(['/authadmin'])
          resolve(false)
        }
      })
    })
      
  }
}
