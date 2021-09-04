import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataBlockComponent } from './data-block/data-block.component';
import { ButtonComponent } from './data-block/button/button.component';
import { CardComponent } from './data-block/card/card.component';
import { TableListComponent } from './data-block/table-list/table-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBlockComponent,
    ButtonComponent,
    CardComponent,
    TableListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
