import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddMissionDialogComponent } from './add-mission-dialog.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { provideNoopAnimations } from '@angular/platform-browser/animations';


describe('AddMissionDialogComponent', () => {
  let component: AddMissionDialogComponent;
  let fixture: ComponentFixture<AddMissionDialogComponent>;
  let mockMatDialogRef: jasmine.SpyObj<MatDialogRef<any>>;

  beforeEach(async () => {
    mockMatDialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);
    mockMatDialogRef.close.and.returnValue();

    await TestBed.configureTestingModule({
      imports: [AddMissionDialogComponent, MatDialogModule],
      providers: [
        { provide: MatDialogRef, useValue: mockMatDialogRef },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        provideNoopAnimations()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMissionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close the dialog when close() is called', () => {
    component.close();
    expect(mockMatDialogRef.close).toHaveBeenCalled();
  });
});
