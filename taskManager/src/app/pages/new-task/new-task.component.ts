import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskServiceService } from './../../shared/task-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  constructor(private taskService: TaskServiceService,private route: ActivatedRoute, private router: Router) { }

  listId!: string;

  ngOnInit(): void {

    this.route.params.subscribe(
      (params:Params) => {
        console.table(params);
        this.listId = params['listsId'];
        console.log(this.listId);
      }
    )
  }

  createTask(titleTask:string) {
    this.taskService.createTask(titleTask,this.listId).subscribe((newTask: Task) => {
      this.router.navigate(['../'], {relativeTo: this.route})
    });
  }

}
