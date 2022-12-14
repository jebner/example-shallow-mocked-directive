import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import {MyModuleModule} from "./my-module/my-module.module";



@NgModule({
  declarations: [
    MyLibComponent
  ],
  imports: [
    MyModuleModule
  ],
  exports: [
    MyLibComponent
  ]
})
export class MyLibModule { }
