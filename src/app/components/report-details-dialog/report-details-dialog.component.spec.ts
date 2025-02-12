import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportDetailsDialogComponent } from './report-details-dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReportStore } from '../../stores/report.store';
import { REPORTS_MOCK } from '../../mocks/reports.mock';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

describe('ReportDetailsDialogComponent', () => {
  let component: ReportDetailsDialogComponent;
  let fixture: ComponentFixture<ReportDetailsDialogComponent>;
  // @ts-ignore
  let mockReportStore: jasmine.SpyObj<ReportStore>;
  let mockMatDialogRef: jasmine.SpyObj<MatDialogRef<ReportDetailsDialogComponent>>;

  beforeEach(async () => {
    mockReportStore = jasmine.createSpyObj('ReportStore', ['updateReport']);
    mockMatDialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);

    await TestBed.configureTestingModule({
      imports: [
        MatButtonModule, 
        MatFormFieldModule, 
        FormsModule, 
        MatInputModule, 
        ReportDetailsDialogComponent],
      declarations: [ ],
      providers: [
        { provide: ReportStore, useValue: mockReportStore },
        { provide: MatDialogRef, useValue: mockMatDialogRef },
        { provide: MAT_DIALOG_DATA, useValue: { report: REPORTS_MOCK[0] } },
        provideNoopAnimations()
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ReportDetailsDialogComponent);
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

  it('should update the report and close the dialog when save() is called', () => {
    component.report.body = 'Nouveau contenu';
    component.save();
    
    expect(mockReportStore.updateReport).toHaveBeenCalledWith({
      ...REPORTS_MOCK[0],
      body: 'Nouveau contenu',
    });
    expect(mockMatDialogRef.close).toHaveBeenCalledWith({
      ...REPORTS_MOCK[0],
      body: 'Nouveau contenu',
    });
  });
});
