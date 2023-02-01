import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanarioListComponent } from './canario-list.component';

describe('CanarioListComponent', () => {
  let component: CanarioListComponent;
  let fixture: ComponentFixture<CanarioListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CanarioListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanarioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
