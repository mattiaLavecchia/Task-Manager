import { TaskServiceService } from './../../shared/task-service.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.scss']
})
export class EditListComponent implements OnInit {

  constructor(private route: ActivatedRoute, private taskService: TaskServiceService,private router: Router) { }
  listId!:string;

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params) => {
        this.listId = params['listId'];  
      })
      }

  updateList(title:string) {
    this.taskService.updateList(this.listId, title).subscribe(() => {
      this.router.navigate(['/lists',this.listId]);
    })

  }

}
