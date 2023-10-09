import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoadingPageComponent } from './loading-page/loading-page.component';
import { ResumeComponent } from './resume/resume.component';

import { DividerModule } from 'primeng/divider';
import { ProgressBarModule } from 'primeng/progressbar';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoadingPageComponent,
    ResumeComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    DividerModule,
    ProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
