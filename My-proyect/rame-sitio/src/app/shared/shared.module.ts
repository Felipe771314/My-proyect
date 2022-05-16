import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from './components/service/service.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { BannerComponent } from './components/banner/banner.component';
import { PoryectComponent } from './components/poryect/poryect.component';

@NgModule({
  declarations: [
    ServiceComponent,
    AboutComponent,
    ContactComponent,
    BannerComponent,
    PoryectComponent,


  ],
  imports: [
    CommonModule
  ],
  exports: [
    ServiceComponent,
    AboutComponent,
    ContactComponent,
    BannerComponent,
    PoryectComponent
  ],
})
export class SharedModule {}
