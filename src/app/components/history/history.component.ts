import { Component } from '@angular/core';

import { TaskService } from '../../services/task.service';

@Component({
  selector: 'history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {

  private tasks: any[];
  private tasksCompleted: any[] = [];
  private tasksDeleted: any[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    let subscriber = this.taskService.getTasks()
      .subscribe((tasks) => {
        this.tasks = tasks.filter((task: any) => {
          if (task.deleted === true) {
            this.tasksDeleted.push(task);
            return true;
          } else if (task.completed === true) {
            this.tasksCompleted.push(task);
            return true;
          }
          return false;
        });
      });
    this.taskService.subscribers.push(subscriber);
  }

}
