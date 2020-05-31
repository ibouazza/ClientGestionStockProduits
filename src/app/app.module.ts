import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProduitComponent} from './produit/produit.component';
import {ProduitMockService} from './produit/produit.mock.service';



//La liste des declaration(les composants, les téractifes les pipes)
@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent
  ],
  // la liste des models externe ou interne
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // la liste des services
  providers: [ProduitMockService],

  // contient les composant d'entre de notre application
  bootstrap: [AppComponent]
})
export class AppModule { }
