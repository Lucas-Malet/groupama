import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddReportDialogComponent } from './add-report-dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { ReportStore } from '../../stores/report.store';
import { MissionStore } from '../../stores/mission.store';
import { MISSIONS_MOCK } from '../../mocks/missions.mock';
import { provideNoopAnimations } from '@angular/platform-browser/animations';


describe('AddReportDialogComponent', () => {
  let component: AddReportDialogComponent;
  let fixture: ComponentFixture<AddReportDialogComponent>;
  // @ts-ignore
  let mockReportStore: jasmine.SpyObj<ReportStore>;
  // @ts-ignore
  let mockMissionStore: jasmine.SpyObj<MissionStore>;
  let mockMatDialogRef: jasmine.SpyObj<MatDialogRef<AddReportDialogComponent>>;

  beforeEach(async () => {
    mockReportStore = jasmine.createSpyObj('ReportStore', ['nextReportId']);
    mockMissionStore = jasmine.createSpyObj('MissionStore', ['missions']);
    mockMatDialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);

    mockReportStore.nextReportId.and.returnValue(99);
    mockMissionStore.missions.and.returnValue(MISSIONS_MOCK);

    await TestBed.configureTestingModule({
      imports: [
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        FormsModule,
        MatDividerModule,
        AddReportDialogComponent,
      ],
      declarations: [ ],
      providers: [
        { provide: ReportStore, useValue: mockReportStore },
        { provide: MissionStore, useValue: mockMissionStore },
        { provide: MatDialogRef, useValue: mockMatDialogRef },
        { provide: MAT_DIALOG_DATA, useValue: { agentId: 1 } },
        provideNoopAnimations()
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AddReportDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize report with default values', () => {
    expect(component.report.id).toBe(99);
    expect(component.report.agentId).toBe(1);
    expect(component.report.title).toBe('');
    expect(component.report.body).toBe('');
    expect(component.report.missionId).toBe(1);
  });

  it('should close the dialog when close() is called', () => {
    component.close();
    expect(mockMatDialogRef.close).toHaveBeenCalled();
  });

  it('should close the dialog and return the report when save() is called', () => {
    component.report.title = 'Nouveau Rapport';
    component.report.body = 'Contenu du rapport';

    component.save();

    expect(mockMatDialogRef.close).toHaveBeenCalledWith({
      id: 99,
      date: jasmine.any(String),
      title: 'Nouveau Rapport',
      body: 'Contenu du rapport',
      agentId: 1,
      missionId: 1,
    });
  });
});
