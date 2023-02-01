import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanarioEditComponent } from './canario-edit.component';

describe('CanarioEditComponent', () => {
  let component: CanarioEditComponent;
  let fixture: ComponentFixture<CanarioEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CanarioEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanarioEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
