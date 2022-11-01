import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Task } from 'src/app/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private webReqService: WebRequestService) { }

  createList(title:string){
    return this.webReqService.post('lists', {title});    
  }

  updateList(id:string,title:string){
    return this.webReqService.patch(`lists/${id}`, {title});    
  }

  getLists() {
    return this.webReqService.get('lists') ;
  }

  deleteList(id:string) {
    return this.webReqService.delete(`lists/${id}`);
  }

  createTask(title:string, listId: string){
    return this.webReqService.post(`lists/${listId}/tasks`, {title});    
  }

  updateTask(listid:string,taskId:string,title:string){
    return this.webReqService.patch(`lists/${listid}/tasks/${taskId}`, {title});    
  }

  getTasks(listId:string){
    return this.webReqService.get(`lists/${listId}/tasks`)
  }

  completeTask(task:Task) {
    return this.webReqService.patch(`lists/${task._listId}/tasks/${task._id}`, {
      completed: !task.completed
    })
  }

  deleteTask(listId:string, taskId:string){
    return this.webReqService.delete(`lists/${listId}/tasks/${taskId}`);

  }


}
