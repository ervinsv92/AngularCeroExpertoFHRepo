import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/HomePage/home-page.component';
import { SearchBoxComponent } from './components/SearchBox/search-box.component';
import { CardListComponent } from './components/CardList/card-list.component';
import { CardComponent } from './components/Card/Card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent,
    CardComponent
  ],
  imports: [
    CommonModule, 
    SharedModule
  ],
  exports:[
    HomePageComponent
  ]
})
export class GifsModule { }
