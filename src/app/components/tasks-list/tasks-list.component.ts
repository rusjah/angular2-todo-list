import { Component, OnInit } from '@angular/core';

import { TaskService } from '../../services/task.service';

@Component({
  selector: 'tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  tasks: any[];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    let subscriber = this.taskService.getTasks()
      .subscribe((tasks) => {
        this.tasks = tasks.filter((task: any) => {
          return task.deleted === false && task.completed === false;
        });
      });
    this.taskService.subscribers.push(subscriber);
  }

}
