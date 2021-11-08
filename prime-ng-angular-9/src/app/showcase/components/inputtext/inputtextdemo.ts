import {Component} from '@angular/core';

@Component({
    selector:'app-input-text',
    templateUrl: './inputtextdemo.html'
})
export class InputTextDemo {

    text: string;

    disabled: boolean = true;

    toggleDisabled() {
        this.disabled = !this.disabled;
    }
}