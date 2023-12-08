import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasklistComponent } from './Component/tasklist/tasklist.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TaskService } from './Services/task.service';
import { FormsModule } from '@angular/forms';
import { AddTaskComponent } from './Component/add-task/add-task.component';
import { EditTaskComponent } from './Component/edit-task/edit-task.component';
import { NgToastModule } from 'ng-angular-popup';
import { SearchPipe } from './search.pipe';




@NgModule({
  declarations: [
    AppComponent,
    TasklistComponent,
    AddTaskComponent,
    EditTaskComponent,
    SearchPipe,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgToastModule
  
  ],
  providers: [TaskService],
  bootstrap: [AppComponent,TasklistComponent,AddTaskComponent],
  
})
export class AppModule { }
