import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCommandDialogComponent } from './new-command-dialog.component';

describe('NewCommandDialogComponent', () => {
  let component: NewCommandDialogComponent;
  let fixture: ComponentFixture<NewCommandDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCommandDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCommandDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
