import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';

// components
import { LiquorComponent } from './liquor/liquor.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'liquor', component: LiquorComponent},
  { path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
