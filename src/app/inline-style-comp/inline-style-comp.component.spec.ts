import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineStyleCompComponent } from './inline-style-comp.component';

describe('InlineStyleCompComponent', () => {
  let component: InlineStyleCompComponent;
  let fixture: ComponentFixture<InlineStyleCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineStyleCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineStyleCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
