import { Directive } from '@angular/core';

@Directive({
  selector: '[libMyDirective]'
})
export class MyDirectiveDirective {

  constructor() {
    console.log("HERE WE GO!!!");
  }

}
