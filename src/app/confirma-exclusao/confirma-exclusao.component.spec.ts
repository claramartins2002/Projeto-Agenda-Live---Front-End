import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmaExclusaoComponent } from './confirma-exclusao.component';

describe('ConfirmaExclusaoComponent', () => {
  let component: ConfirmaExclusaoComponent;
  let fixture: ComponentFixture<ConfirmaExclusaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmaExclusaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmaExclusaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
