import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordAdditionComponent } from './word-addition.component';

describe('WordAdditionComponent', () => {
  let component: WordAdditionComponent;
  let fixture: ComponentFixture<WordAdditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordAdditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
