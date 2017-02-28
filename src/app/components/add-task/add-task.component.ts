import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { TaskService } from '../../services/task.service';

@Component({
  selector: 'add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  constructor(private taskService: TaskService) { }

  /**
   * handle form submit,
   * add new task
   */
  onSubmit(form: NgForm) {
    this.taskService.addTask(form.value.title)
      .subscribe(
      (task: any) => console.log(`Task "${task.title}" has beed added.`)
      );
    form.reset();
  }

}
