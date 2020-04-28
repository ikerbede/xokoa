import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuskaraComponent } from './euskara.component';

describe('EuskaraComponent', () => {
  let component: EuskaraComponent;
  let fixture: ComponentFixture<EuskaraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuskaraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuskaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
