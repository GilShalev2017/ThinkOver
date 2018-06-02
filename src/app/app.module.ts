import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {AnimalsComponent} from './components/animals/animals.component';
import {AnimalSetComponent} from './components/animal-set/animal-set.component';
import {AnimalComponent} from './components/animal/animal.component';
import {AnimalsService} from './services/animals.service';


@NgModule({
    declarations: [
        AnimalsComponent, AnimalSetComponent, AnimalComponent
    ],
    imports: [
        BrowserModule, HttpModule, FormsModule
    ],
    providers: [AnimalsService],
    bootstrap: [AnimalsComponent]
})
export class AppModule {
}
