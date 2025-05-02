import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { QuestionComponent } from './question/question.component';


const MAT_MODULES = [MatFormFieldModule, MatInputModule, MatSelectModule, MatCheckboxModule, MatDividerModule];
const NGB_MODULES = [NgbModule];

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MAT_MODULES,
    NGB_MODULES

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
