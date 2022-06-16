import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ContactComponent } from 'src/app/shared/components/contact/contact.component';
import { WorksComponent } from '../works/works.component';
import { AboutComponent } from '../../shared/components/about/about.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {path:'works', component:WorksComponent},

  {
    path: 'nosotros', component: AboutComponent
  },

  {
    path: 'contact',component: ContactComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
