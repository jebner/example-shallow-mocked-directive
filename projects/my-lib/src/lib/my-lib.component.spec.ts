import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLibComponent } from './my-lib.component';
import {Shallow} from "shallow-render";
import {MyLibModule} from "./my-lib.module";

describe('MyLibComponent', () => {
  let component: MyLibComponent;

  beforeEach(async () => {
    const shallow = new Shallow<MyLibComponent>(MyLibComponent, MyLibModule);
    const rendering = await shallow
      .render();

    component = rendering.instance;
    rendering.fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
