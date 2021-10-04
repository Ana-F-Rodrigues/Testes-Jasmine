import { LikeWidgeModule } from './like-widget.module';

import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';

import { LikeWidgetComponent } from "./like-widget.component";

describe(LikeWidgetComponent.name, () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeWidgeModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
  });

  it('Should create component', () => {
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('Should auto generate ID when id input property is missing', () => {
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  it('Should NOT generate ID when id input property is present', () => {
    const component = fixture.componentInstance;
    const someId = 'someId';
    component.id = someId;
    fixture.detectChanges();''
    expect(component.id).toBe(someId);
  });




});
