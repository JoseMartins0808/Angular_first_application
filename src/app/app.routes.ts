import { Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "contato", component: ContactComponent },
    { path: "sobre", component: AboutPageComponent }
];
