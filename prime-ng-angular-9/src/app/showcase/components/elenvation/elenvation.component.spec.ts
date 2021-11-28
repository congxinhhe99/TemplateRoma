import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElenvationComponent } from './elenvation.component';

describe('ElenvationComponent', () => {
  let component: ElenvationComponent;
  let fixture: ComponentFixture<ElenvationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElenvationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElenvationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
