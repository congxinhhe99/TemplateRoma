import {Component} from '@angular/core';
import {Car} from '../../components/domain/car';
import {CarService} from '../../service/carservice';

@Component({
    selector:'app-picklist',
    templateUrl: './picklistdemo.html'
})
export class PickListDemo {

    sourceCars: Car[];
    
    targetCars: Car[];
    
    constructor(private carService: CarService) { }

    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.sourceCars = cars);
        this.targetCars = [];
    }
}