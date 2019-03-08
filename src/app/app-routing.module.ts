import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { RegisterComponent } from './register/register.component';
import { MessageComponent } from './message/message.component';
import { AuthentificationGuard } from './authentification.guard';

const routes: Routes = [
  { path: 'login', component: AuthentificationComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'message', component: MessageComponent, canActivate : [AuthentificationGuard] },
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
