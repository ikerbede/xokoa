import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModalComponent } from './carousel-modal/carousel-modal.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MaterialModule } from './material.module';
import { ShufflePipe } from './shuffle.pipe';


@NgModule({
  declarations: [
    CarouselComponent,
    CarouselModalComponent,
    ShufflePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselComponent
  ],
  entryComponents: [
    CarouselModalComponent
  ],
  providers: [
    ShufflePipe
  ]
})
export class SharedModule { }
