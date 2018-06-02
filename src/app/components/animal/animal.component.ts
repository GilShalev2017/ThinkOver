import {Component, Input} from '@angular/core';
import {Animal} from '../../models/app.models';

@Component({
    selector: 'app-animal',
    templateUrl: './animal.component.html',
    styleUrls: ['./animal.component.css']
})
export class AnimalComponent {

    @Input() animal: Animal;

    constructor() {
    }
}

