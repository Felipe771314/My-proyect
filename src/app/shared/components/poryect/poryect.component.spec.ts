import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoryectComponent } from './poryect.component';

describe('PoryectComponent', () => {
  let component: PoryectComponent;
  let fixture: ComponentFixture<PoryectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoryectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoryectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
