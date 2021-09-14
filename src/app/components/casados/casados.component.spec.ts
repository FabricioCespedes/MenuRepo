import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasadosComponent } from './casados.component';

describe('CasadosComponent', () => {
  let component: CasadosComponent;
  let fixture: ComponentFixture<CasadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
