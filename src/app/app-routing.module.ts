import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasklistComponent } from './Component/tasklist/tasklist.component';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './Component/add-task/add-task.component';
import { EditTaskComponent } from './Component/edit-task/edit-task.component';



const routes: Routes = [
  
  {
    path:'tasklist',
    component:TasklistComponent
  },
  {
    path:'',
    component:TasklistComponent
  },
  {
    path:'tasklist/add',
    component:AddTaskComponent
  },
  {
    path:'tasklist/edit/:id',
    component:EditTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
