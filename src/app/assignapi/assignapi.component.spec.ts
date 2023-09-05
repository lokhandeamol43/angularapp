import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignapiComponent } from './assignapi.component';

describe('AssignapiComponent', () => {
  let component: AssignapiComponent;
  let fixture: ComponentFixture<AssignapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
