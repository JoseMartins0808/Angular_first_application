import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopersectionComponent } from './developersection.component';

describe('DevelopersectionComponent', () => {
  let component: DevelopersectionComponent;
  let fixture: ComponentFixture<DevelopersectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevelopersectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevelopersectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
