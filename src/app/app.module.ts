import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// internal modules
import { AppRoutingModule } from './app-routing.module';

// external modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';

// components
import { AppComponent } from './app.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { HistoryComponent } from './components/history/history.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';

// guards
import { AuthGuard } from './guards/auth.guard';

//services
import { AuthService } from './services/auth.service';
import { FirebaseService } from './services/firebase.service';
import { TaskService } from './services/task.service';

// config
import { config } from '../config/config';

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    MainMenuComponent,
    AddTaskComponent,
    HistoryComponent,
    TaskItemComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(config.firebase),
    AppRoutingModule
  ],
  providers: [
    FirebaseService,
    AuthService,
    TaskService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
