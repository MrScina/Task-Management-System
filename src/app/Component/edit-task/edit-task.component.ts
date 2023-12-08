import { Component } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import { Status, Tasks } from 'src/app/Models/Tasks.Model';
import { TaskService } from 'src/app/Services/task.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent {
 
constructor(private route:ActivatedRoute,private taskService : TaskService,private http: HttpClient,private router:Router,private toast: NgToastService){}

perTask :Tasks={
  id:'',
  tittle:'',
  description:'',
  status:''
};

statuses:Status[]=[
{name:'To Do'},
{name:'In Progress'},
{name:'Completed'}]

public selectedStatus: Status = {  name: '' };

showError() {
  this.toast.error({detail:"ERROR",summary:'Tittle and status are required',sticky:true});
}
ngOnInit(){
  this.route.paramMap.subscribe({
    next:(params)=>{
      
    const id=params.get('id');
  
    if(id){
      
      this.taskService.getTaskbyId(id).
      subscribe({
        next:(results)=>{
        this.perTask=results;
        }
      })
      
    }
  }
  })
}

showSuccessTopCenter(note:string) {
  this.toast.success({detail:"SUCCESS",summary:note,duration:7000, position:'topCenter'});
}

updateTask(){
 
 if (this.perTask.tittle == "") {
  console.log(this.perTask.tittle);
  console.log(this.selectedStatus.name);
  this.showError();
}
  else if (this.selectedStatus.name== "") {
    this.taskService.updateTask(this.perTask.id,this.perTask).subscribe({
      next:(results)=>{
        this.showSuccessTopCenter("Task "+results.tittle+" is successfully updated");
       this.router.navigate(["tasklist"])
      }
    })
  }else {
    
  this.perTask.status=this.selectedStatus.name;
  this.taskService.updateTask(this.perTask.id,this.perTask).subscribe({
  next:(results)=>{
    this.showSuccessTopCenter("Task "+results.tittle+" is successfully updated");
   this.router.navigate(["tasklist"])
  }
})
}}

deleteTasks(id:string){

this.taskService.deleteTasks(id).
subscribe({
  next:(results)=>{
    this.showSuccessTopCenter("Task "+results.tittle+" is successfully deleted");
    this.router.navigate(["tasklist"])
  }
})
}

}




