import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent }      from './person/person.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { PersonDetailsComponent }  from './person-details/person-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'persons', component: PersonComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: PersonDetailsComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
