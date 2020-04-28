import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EuskaraComponent } from './euskara/euskara.component';
import { WordAdditionComponent } from './euskara/word-addition/word-addition.component';
import { CodeNamesComponent } from './code-names/code-names.component';
import { GridComponent } from './code-names/grid/grid.component';
import { GoalComponent } from './code-names/goal/goal.component';


@NgModule({
  declarations: [
    AppComponent,
    EuskaraComponent,
    WordAdditionComponent,
    CodeNamesComponent,
    GridComponent,
    GoalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
