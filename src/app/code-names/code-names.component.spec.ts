import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeNamesComponent } from './code-names.component';

describe('CodeNamesComponent', () => {
  let component: CodeNamesComponent;
  let fixture: ComponentFixture<CodeNamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeNamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
