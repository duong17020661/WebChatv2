import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';	
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'chat/duong' , component: ChatComponent },
  { path: 'chat/duong/:id', component: ChatComponent},
  { path: '**' , component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
        ChatComponent,
        LoginComponent
]