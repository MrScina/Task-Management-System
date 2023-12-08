import { Component } from '@angular/core';
import { Tasks } from 'src/app/Models/Tasks.Model';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent  {
  constructor(private taskService : TaskService){}
  todotask:Tasks[]=[]
 
  ngOnInit():void {
    this.taskService.getallTasks()
    .subscribe({
      next:(Task)=>{
        this.todotask=Task;
        console.log(Task);
      },
      error:(response)=>{
        console.log(response)
      }
    })
 
  }
  query:string= '';
  getSercheditem(){
    if(this.query==""){
      this.ngOnInit()
    }
this.taskService.getSercheditems(this.query).subscribe({
  next:(result)=>{
    this.todotask=result;
  }
})
  }
  
}
