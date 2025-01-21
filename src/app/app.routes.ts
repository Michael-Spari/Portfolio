import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { HeaderComponent } from './shared/header/header.component'; 
import { AboutTheFoldComponent } from './main-content/about-the-fold/about-the-fold.component';
import { AboutMeComponent } from './main-content/about-me/about-me.component';
import { MySkillsComponent } from './main-content/my-skills/my-skills.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'about-the-fold', component: AboutTheFoldComponent },
    { path: 'about-me', component: AboutMeComponent },
    { path: 'my-skills', component: MySkillsComponent },
];
