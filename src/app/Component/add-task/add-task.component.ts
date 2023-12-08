import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Status, Tasks } from 'src/app/Models/Tasks.Model';
import { TaskService } from 'src/app/Services/task.service';
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  constructor(private taskService : TaskService,private router:Router,private toast: NgToastService){}



  showSuccessTopCenter(note:string) {
    this.toast.success({detail:"SUCCESS",summary:note,duration:7000, position:'topCenter'});
  }
  
  showError() {
    this.toast.error({detail:"ERROR",summary:'Tittle and status are required',sticky:true});
  }
AddedTasks :Tasks={
  id:"",
  tittle:"",
  description:"",
  status:""
};

statuses:Status[]=[
  {name:'To Do'},
  {name:'In Progress'},
  {name:'Completed'}]

selectedStatus: Status = {  name: '' };


CreateTask(){

  if (this.AddedTasks.tittle == "" || this.selectedStatus.name== "") {
   
    this.showError();
  }else{

  this.AddedTasks.status=this.selectedStatus.name
  console.log(this.AddedTasks);
  this.taskService.CreatTask(this.AddedTasks)
  .subscribe({
    next:(results)=>{
      this.showSuccessTopCenter("Task "+results.tittle+" is successfully added");
      this.router.navigate(['tasklist'])
    }
  })
}
}
}
  