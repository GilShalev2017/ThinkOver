import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AnimalSet} from '../../models/app.models';

@Component({
    selector: 'app-animal-set',
    templateUrl: './animal-set.component.html',
    styleUrls: ['./animal-set.component.css']
})
export class AnimalSetComponent {

    @Input() animalSet: AnimalSet;
    @Output() setMouseOver = new EventEmitter();
    @Output() setNextImage = new EventEmitter();
    @Output() setPreviousImage = new EventEmitter();

    constructor() {
    }

    onMouseOver() {
        this.setMouseOver.emit();
    }

    firePreviousImage() {
        this.setPreviousImage.emit();
    }

    fireNextImage() {
        this.setNextImage.emit();
    }
}

