import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { InfoComponent } from './info/info.component';
const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },

  {
    path:'contact-us',
    component: ContactUsComponent
  },
  
  {
    path:'info',
    component: InfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
