import { Routes } from '@angular/router';
import { WondersDetailsComponent } from './wonders-details/wonders-details.component';

export const routes: Routes = [
    {path: 'wonder/:id', component: WondersDetailsComponent},
];
