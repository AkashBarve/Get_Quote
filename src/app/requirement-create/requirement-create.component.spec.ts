import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementCreateComponent } from './requirement-create.component';

describe('RequirementCreateComponent', () => {
  let component: RequirementCreateComponent;
  let fixture: ComponentFixture<RequirementCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequirementCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
