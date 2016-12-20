import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2ImageGalleryComponent} from './ng2-image-gallery.component';
import { DisplacerComponent } from './ng2-image-gallery-displacer.component';
import { MaterialModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule.forRoot(),
    ],
    declarations: [
        DisplacerComponent,
        Ng2ImageGalleryComponent
    ],
    exports: [
        Ng2ImageGalleryComponent
    ]
})
export class Ng2ImageGalleryModule {}