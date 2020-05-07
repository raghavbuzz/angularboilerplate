import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonStyleComponent } from './common-style/common-style.component';
import { ResponsiveComponent } from './responsive/responsive.component';
// tslint:disable-next-line: max-line-length
import { MaterialTableRoundCornerComponent } from './overriding-external-library-styles/material-table-round-corner/material-table-round-corner.component';
import { MaterialTableComponent } from './overriding-external-library-styles/material-table/material-table.component';
import { PreloadImageComponent } from './preload-image/preload-image.component';


const routes: Routes = [
  { path: '', redirectTo: 'responsive', pathMatch: 'full' },
  {
    path: 'materialRoundCornerTable',
    component: MaterialTableRoundCornerComponent
  },

  {
    path: 'materialTable',
    component: MaterialTableComponent
  },
  {
    path: 'responsive',
    component: ResponsiveComponent
  },
  {
    path: 'commonStyle',
    component: CommonStyleComponent
  },
  { path: 'storeImplementation', loadChildren: () => import('./store-implementation/store-implementation.module').then(m => m.StoreImplementationModule) },
  {
    path: 'preLoad',
    component: PreloadImageComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class SampleRoutingModule { }
