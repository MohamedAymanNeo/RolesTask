import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRoleComponent } from './roles/add-role/add-role.component';
import { ListComponent } from './roles/list/list.component';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';
import { ToastrModule } from 'ngx-toastr';
import { EditRoleComponent } from './roles/edit-role/edit-role.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRoleComponent,
    ListComponent,
    FilterPipe,
    EditRoleComponent,

  ],
  imports: [

  BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    DragDropModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-top-right',
      preventDuplicates: false
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
