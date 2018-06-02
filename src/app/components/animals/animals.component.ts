import {Component, OnInit} from '@angular/core';
import {AnimalSet} from '../../models/app.models';
import {AnimalsService} from '../../services/animals.service';

@Component({
    selector: 'app-animals',
    templateUrl: './animals.component.html',
    styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

    animalSets: AnimalSet[];
    currentSetIndex: number;
    currentSet: AnimalSet;

    constructor(private animalsService: AnimalsService) {
    }

    ngOnInit() {
        this.animalsService.getAnimalSets().subscribe(animalSets => {
            this.animalSets = animalSets;
            this.currentSetIndex = 0;
            this.currentSet = this.animalSets[this.currentSetIndex];
        });
    }

    nextSet() {
        this.currentSetIndex++;

        if (this.currentSetIndex === this.animalSets.length) {
            this.currentSetIndex = 0;
        }

        this.currentSet = this.animalSets[this.currentSetIndex];
    }

    previousSet() {
        this.currentSetIndex--;

        if (this.currentSetIndex === -1) {
            this.currentSetIndex = this.animalSets.length - 1;
        }

        this.currentSet = this.animalSets[this.currentSetIndex];
    }
}
