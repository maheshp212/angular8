import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Global } from './../global';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {

        let retrievedData = localStorage.getItem('currentUser');
        if (retrievedData) {
            let userdata = JSON.parse(retrievedData);
            if (parseInt(userdata.user_role_id, 0) === Global.role.superAdmin) {
             // navigate to superadmin dashboard
              // this.router.navigate(['/dashboard/s']);
              return true;
          }
      }

        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    }
}
