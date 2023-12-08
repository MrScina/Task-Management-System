import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tasks } from '../Models/Tasks.Model';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  
  private baseUrl = 'https://localhost:7221';
  constructor(private http: HttpClient) {}

  getallTasks():Observable<Tasks[]> {
    return this.http.get<Tasks[]>(this.baseUrl+'/api/Tasks');
  }
  getSercheditems(quey:string):Observable<Tasks[]> {
    return this.http.get<Tasks[]>(this.baseUrl+'/api/Tasks/getSearchedItems?query='+`${quey}`);
  }
  
CreatTask(CreatedTask:Tasks):Observable<Tasks>{
  CreatedTask.id='00000000-0000-0000-0000-000000000000';
     return this.http.post<Tasks>(this.baseUrl+'/api/Tasks/AddTask',CreatedTask);
}


getTaskbyId(id:string):Observable<Tasks>{
 return this.http.get<Tasks>(this.baseUrl + `/api/Tasks/getTaskById/${id}`) ;
 
}

updateTask(id:string, updateRequest:Tasks):Observable<Tasks>{
 return this.http.put<Tasks>(this.baseUrl+'/api/Tasks/editTask/'+id,updateRequest);
}
deleteTasks(id:string):Observable<Tasks>{
  return this.http.delete<Tasks>(this.baseUrl+`/api/Tasks/${id}`)
}

}
