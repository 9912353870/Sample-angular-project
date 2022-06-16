import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineTemplateCompComponent } from './inline-template-comp.component';

describe('InlineTemplateCompComponent', () => {
  let component: InlineTemplateCompComponent;
  let fixture: ComponentFixture<InlineTemplateCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineTemplateCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineTemplateCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
