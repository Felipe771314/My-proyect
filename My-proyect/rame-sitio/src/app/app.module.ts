import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/Components/header/header.component';
import { FooterComponent } from './core/Components/footer/footer.component';
import { SidenavComponent } from './core/Components/sidenav/sidenav.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { MarketingComponent } from './pages/marketing/marketing.component';
import { DisenioComponent } from './pages/disenio/disenio.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { WorksComponent } from './pages/works/works.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    BlogComponent,
    PortfolioComponent,
    MarketingComponent,
    DisenioComponent,
    WorksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    SlickCarouselModule
  ],
  providers: [SharedModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
