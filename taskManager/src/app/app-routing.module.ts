import { EditListComponent } from './pages/edit-list/edit-list.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { NewListComponent } from './pages/new-list/new-list.component';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path:'new-list' , component: NewListComponent},
  {path:'edit-list/:listId' , component: EditListComponent},
  {path:'login', component: LoginPageComponent},
  {path:'signup', component: SignupPageComponent},
  {path:'lists', component: TaskViewComponent},
  {path:'lists/:listsId', component: TaskViewComponent},
  {path:'lists/:listsId/new-task' , component: NewTaskComponent},
  {path:'lists/:listId/edit-task/:taskId' , component: EditTaskComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
