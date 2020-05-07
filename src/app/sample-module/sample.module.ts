import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { CommonStyleComponent } from './common-style/common-style.component';
import { AComponent } from './common-style/comp-A/a.component';
import { BComponent } from './common-style/comp-B/b.component';
import { ResponsiveComponent } from './responsive/responsive.component';
import { SampleRoutingModule } from './sample-routing.module';
import { OverridingExternalLibraryStylesModule } from './overriding-external-library-styles/overridingExternalLibraryStyles.module';
import { PreloadImageComponent } from './preload-image/preload-image.component';

@NgModule({
  declarations: [ResponsiveComponent, CommonStyleComponent, AComponent, BComponent, PreloadImageComponent],
  imports: [
    CommonModule,
    MatCardModule,
    OverridingExternalLibraryStylesModule,
    SampleRoutingModule,
    RouterModule
  ],
  exports: [ResponsiveComponent, CommonStyleComponent]
})
export class SampleModule { }
