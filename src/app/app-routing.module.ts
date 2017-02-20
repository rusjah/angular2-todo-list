import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { HistoryComponent } from './components/history/history.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'tasks', component: TasksListComponent },
    { path: 'add-task', component: AddTaskComponent },
    { path: 'history', component: HistoryComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
