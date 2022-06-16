import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineTemplateAndstyleComponentComponent } from './inline-template-andstyle-component.component';

describe('InlineTemplateAndstyleComponentComponent', () => {
  let component: InlineTemplateAndstyleComponentComponent;
  let fixture: ComponentFixture<InlineTemplateAndstyleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineTemplateAndstyleComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineTemplateAndstyleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
