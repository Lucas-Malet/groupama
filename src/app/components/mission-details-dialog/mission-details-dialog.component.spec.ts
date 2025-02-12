import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MissionDetailsDialogComponent } from './mission-details-dialog.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

describe('MissionDetailsDialogComponent', () => {
  let component: MissionDetailsDialogComponent;
  let fixture: ComponentFixture<MissionDetailsDialogComponent>;
  let mockMatDialogRef: jasmine.SpyObj<MatDialogRef<any>>;

  const mockDialogData = { description: 'Une mission test pour vérifier le comportement du composant.' };

  beforeEach(async () => {
    mockMatDialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);
    mockMatDialogRef.close.and.returnValue();

    await TestBed.configureTestingModule({
      imports: [
        MissionDetailsDialogComponent, 
        MatDialogModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: mockMatDialogRef },
        { provide: MAT_DIALOG_DATA, useValue: mockDialogData },
        provideNoopAnimations(),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with correct description data', () => {
    expect(component.data.description).toBe(mockDialogData.description);
  });

  it('should close the dialog when close() is called', () => {
    component.close();
    expect(mockMatDialogRef.close).toHaveBeenCalled();
  });
});
