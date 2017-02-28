import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  items: any[];
  isloggedIn: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.firebaseService.af.auth.subscribe((auth) => {
      if (auth) {
        this.items = [
          {
            link: 'home',
            name: 'Home'
          },
          {
            link: 'tasks',
            name: 'Tasks'
          },
          {
            link: 'add-task',
            name: 'New Task'
          },
          {
            link: 'history',
            name: 'History'
          },
          {
            link: 'logout',
            name: 'Logout'
          },
        ];
      } else {
        this.items = [
          {
            link: 'home',
            name: 'Home'
          },
          {
            link: 'login',
            name: 'Login'
          },
        ];
      }
    });
  }

}
