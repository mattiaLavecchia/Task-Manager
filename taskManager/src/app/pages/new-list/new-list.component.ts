import { List } from './../../models/list.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskServiceService } from '../../shared/task-service.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {

  constructor(private taskService: TaskServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  createList(title:string){
    this.taskService.createList(title).subscribe((list) => {
      console.table(list);
      this.router.navigate(['/lists', list._id])
    });
  }
}
