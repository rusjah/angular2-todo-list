import { Injectable } from '@angular/core';

import { AuthProviders, AuthMethods } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

import { FirebaseService } from './firebase.service';

@Injectable()
export class AuthService {
  
  private userId: string = null;

  constructor(public firebaseService: FirebaseService) {
    this.setUserId();
    this.firebaseService.af.auth
      .subscribe((auth) => {
        if (auth && auth.uid) {
          localStorage.setItem('currentUser', JSON.stringify({ userId: auth.uid }));
          this.userId = auth.uid
        }
      });
  }

  /**
   * set user id
   */
  private setUserId() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.userId = currentUser && currentUser.userId;
  }

  /**
   * return user id
   */
  getUserId() {
    return this.userId;
  }

  /**
   * login user via Google
   */
  loginWithGoogle() {
    return this.firebaseService.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    });
  }

  /**
   * logout user
   */
  logout() {
    localStorage.removeItem('currentUser');
    return this.firebaseService.af.auth.logout();
  }

}
