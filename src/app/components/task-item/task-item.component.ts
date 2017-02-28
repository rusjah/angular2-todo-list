import { Component, Input } from '@angular/core';

import { TaskService } from '../../services/task.service';

@Component({
  selector: 'task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {

  @Input() task: any;
  
  constructor(private taskService: TaskService) { }

  /**
   * mark task deleted
   */
  onDelete(task) {
    this.taskService.deleteTasks(task);
  }

  /**
   * mark task completed 
   */
  onComplete(task) {
    this.taskService.completeTasks(task);
  }
  
}
