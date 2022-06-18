import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from './components/service/service.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { BannerComponent } from './components/banner/banner.component';
import { PoryectComponent } from './components/poryect/poryect.component';
import { MaterialModule } from './material/material.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MarquesinaComponent } from './components/marquesina/marquesina.component';
import { SliderClientesComponent } from './components/slider-clientes/slider-clientes.component';
import { ClientesGridComponent } from './components/clientes-grid/clientes-grid.component';


@NgModule({
  declarations: [
    ServiceComponent,
    AboutComponent,
    ContactComponent,
    BannerComponent,
    PoryectComponent,
    MarquesinaComponent,
    SliderClientesComponent,
    ClientesGridComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    SlickCarouselModule,
    CarouselModule
  ],
  exports: [
    ServiceComponent,
    AboutComponent,
    ContactComponent,
    BannerComponent,
    PoryectComponent,
    MarquesinaComponent
  ],
})
export class SharedModule {}
