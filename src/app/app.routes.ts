import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
}, {
    path: 'home',
    component: HomeComponent
}, {
    path: 'presentation',
    component: PresentationComponent
}, {
    path: 'contact',
    component: ContactComponent
}, {
    path: '**',
    component: NotFoundComponent
}];
