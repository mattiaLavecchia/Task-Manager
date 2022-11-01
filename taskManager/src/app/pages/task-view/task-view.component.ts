import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { List } from 'src/app/models/list.model';
import { Task } from 'src/app/models/task.model';
import { TaskServiceService } from '../../shared/task-service.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  lists!: List[] ;
  tasks!: Task[];
  selectedListId!: string;

  constructor(private taskService: TaskServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params:Params) => {
        if(params['listsId']){
          this.selectedListId = params['listsId']
          this.taskService.getTasks(params['listsId']).subscribe((task:Task[]) => {
          this.tasks= task;
        })
       }else {
        this.tasks;
       }
      }
    )
    
    this.taskService.getLists().subscribe((list: List[]) => {
      if(list.length == 0) {
        this.lists = [];
      }else {
        this.lists= list;
      }
    })
  }

  onTaskClick(task:Task){
    this.taskService.completeTask(task).subscribe(() => {
      console.log('Task completata')
      task.completed= !task.completed;
    });
  }

  onDeleteListClick() {
    this.taskService.deleteList(this.selectedListId).subscribe((res: any) => {
      this.router.navigate(['/lists']);
      console.log(res);
    })
  }

  onTaskDeleteClick(taskId:string) {
    this.taskService.deleteTask(this.selectedListId,taskId).subscribe((res: any) => {
      this.tasks = this.tasks.filter(val => val._id !==taskId)
      console.log(res);
    })
  }


  

}
