import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { SubMenuComponent } from './components/sub-menu/sub-menu.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { HistoryComponent } from './components/history/history.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    MainMenuComponent,
    SubMenuComponent,
    AddTaskComponent,
    HistoryComponent,
    TaskItemComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
