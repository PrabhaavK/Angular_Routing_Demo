import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrabhavComponent } from './prabhav/prabhav.component';
import { PrathmeshComponent } from './prathmesh/prathmesh.component';
import { PratikComponent } from './pratik/pratik.component';
import { RupeshComponent } from './rupesh/rupesh.component';

const routes: Routes = [
  {path:"prabhav",component:PrabhavComponent},
  {path:"prathmesh",component:PrathmeshComponent},
  {path:"pratik",component:PratikComponent},
  {path:"rupesh",component:RupeshComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
