import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { TodoDetailsComponent } from './pages/todo-details/todo-details.component';
import { AddTodoComponent } from './pages/add-todo/add-todo.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { TaskComponent } from './components/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoDetailsComponent,
    AddTodoComponent,
    SideMenuComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
