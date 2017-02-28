import { Injectable } from '@angular/core';

import { FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './auth.service';
import { FirebaseService } from './firebase.service';

@Injectable()
export class TaskService {

  private tasks: FirebaseListObservable<any>;

  subscribers = [];

  constructor(
    private authService: AuthService,
    private firebaseService: FirebaseService
  ) {
    this.tasks = this.firebaseService.af.database.list('tasks');
  }

  /**
   * add new task
   */
  addTask(title: string) {
    return Observable.create((observer) => {
      let task = {
        title: title,
        completed: false,
        deleted: false,
        uid: this.authService.getUserId(),
        created_at: Date.now(),
        updated_at: Date.now()
      };
      this.tasks.push(task);
      observer.next(task);
    });
  }

  /**
   * Return all tasks
   */
  getTasks() {
    return this.tasks;
  }

  /**
   * mark task as deleted
   */
  deleteTasks(task) {
    task.deleted = true;
    task.updated_at = Date.now();
    return this.firebaseService.af.database.object('/tasks/' + task.$key).update(task);
  }

  /**
   * mark task as completed
   */
  completeTasks(task) {
    task.completed = true;
    task.updated_at = Date.now();
    return this.firebaseService.af.database.object('/tasks/' + task.$key).update(task);
  }

}
