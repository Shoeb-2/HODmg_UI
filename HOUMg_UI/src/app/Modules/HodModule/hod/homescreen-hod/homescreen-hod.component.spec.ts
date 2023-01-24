import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomescreenHODComponent } from './homescreen-hod.component';

describe('HomescreenHODComponent', () => {
  let component: HomescreenHODComponent;
  let fixture: ComponentFixture<HomescreenHODComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomescreenHODComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomescreenHODComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
