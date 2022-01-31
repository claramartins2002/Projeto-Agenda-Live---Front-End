import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarLiveComponent } from './editar-live.component';

describe('EditarLiveComponent', () => {
  let component: EditarLiveComponent;
  let fixture: ComponentFixture<EditarLiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarLiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
