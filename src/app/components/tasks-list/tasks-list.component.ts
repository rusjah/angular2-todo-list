import { Component, OnInit } from '@angular/core';

import { TaskInterface } from '../../interfaces/task.interface';

const TASKS: TaskInterface[] = [
  {id: 1, name: "Learn Angular 2", "status": 1},
  {id: 2, name: "Learn English Lesson", "status": 1},
  {id: 3, name: "Create Todo List", "status": 1},
  {id: 4, name: "Learn Node.js", "status": 1},
  {id: 5, name: "Watch movie", "status": 1}
];

const TASK_STATUSES = {
    'active': 1,
    'done': 2,
    'deleted': 3
}

@Component({
  selector: 'tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
    tasks: TaskInterface[];

    ngOnInit() {
      this.tasks = TASKS;
    }
}
