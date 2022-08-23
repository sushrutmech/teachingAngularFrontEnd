import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboarcontainerComponent } from './dashboarcontainer.component';

describe('DashboarcontainerComponent', () => {
  let component: DashboarcontainerComponent;
  let fixture: ComponentFixture<DashboarcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboarcontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboarcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
