import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService,
    private taskService: TaskService,
  ) { }

  ngOnInit() {
    this.onLogout();
  }

  /**
   * logout user
   */
  onLogout() {
    this.authService.logout()
      .then(() => {
        this.taskService.subscribers.forEach(subscriber => {
          subscriber.unsubscribe();
        });
        this.router.navigate(['login']);
      });
  }

}
