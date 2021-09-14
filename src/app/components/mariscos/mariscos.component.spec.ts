import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MariscosComponent } from './mariscos.component';

describe('MariscosComponent', () => {
  let component: MariscosComponent;
  let fixture: ComponentFixture<MariscosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MariscosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MariscosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
