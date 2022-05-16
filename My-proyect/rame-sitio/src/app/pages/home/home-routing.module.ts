import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ServiceComponent } from '../../shared/components/service/service.component';
import { WorksComponent } from '../works/works.component';
import { AboutComponent } from 'src/app/shared/components/about/about.component';
import { ContactComponent } from 'src/app/shared/components/contact/contact.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'service',
    loadChildren: () =>
      import('../works/works.component').then(
        (m) => m.WorksComponent
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('../../shared/components/about/about.component').then(
        (m) => m.AboutComponent
      ),
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
