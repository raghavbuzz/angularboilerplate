import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MaterialTableRoundCornerComponent } from './material-table-round-corner/material-table-round-corner.component';
import { MaterialTableComponent } from './material-table/material-table.component';


@NgModule({
  declarations: [MaterialTableComponent, MaterialTableRoundCornerComponent],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [
    MaterialTableComponent,
    MaterialTableRoundCornerComponent
  ]
})
export class OverridingExternalLibraryStylesModule { }
