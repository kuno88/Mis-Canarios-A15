import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanarioAddComponent } from './canario-add.component';

describe('CanarioAddComponent', () => {
  let component: CanarioAddComponent;
  let fixture: ComponentFixture<CanarioAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CanarioAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanarioAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
