import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfjsComponent } from './pdfjs.component';

describe('PdfjsComponent', () => {
  let component: PdfjsComponent;
  let fixture: ComponentFixture<PdfjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
