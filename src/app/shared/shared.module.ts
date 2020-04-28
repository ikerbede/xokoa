import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModalComponent } from './carousel-modal/carousel-modal.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    CarouselComponent,
    CarouselModalComponent
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
  ]
})
export class SharedModule { }
