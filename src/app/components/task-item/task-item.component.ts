import { Component, Input } from '@angular/core';

import { TaskInterface } from '../../interfaces/task.interface';

@Component({
  selector: 'task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input()
  task: TaskInterface;
}
