import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//1 Para trabajar con Reactive Forms
import {ReactiveFormsModule} from "@angular/forms";

//2 Para trabajar con cont peticioes http
import { HttpClientModule } from '@angular/common/http';

//3 Trabajar con material
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

//4 Trabajar con controles de formularios de material
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker' ;
import { MatNativeDateModule } from '@angular/material/core' ;
import { MomentDateModule } from '@angular/material-moment-adapter' ;

//5 Trabajar con alertas
import {MatSnackBarModule} from '@angular/material/snack-bar';

//6 Trabajar con iconos
import {MatIconModule} from '@angular/material/icon';

//7 Trabajar con modales de material
import {MatDialogModule} from '@angular/material/dialog';

//8 Trabajar con cuadriculas
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MomentDateModule,
    MatSnackBarModule,
    MatIconModule,
    MatDialogModule,
    MatGridListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
