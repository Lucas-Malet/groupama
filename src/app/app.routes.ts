import { Routes } from '@angular/router';
import { GeneralComponent } from './components/general/general.component';
import { DetailsComponent } from './components/details/details.component';

export const routes: Routes = [
    { path: 'agent/:id', component: DetailsComponent },
    { path: '', component: GeneralComponent },
    { path: '**', component: GeneralComponent }
];
