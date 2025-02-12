import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportsComponent } from './reports.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReportStore } from '../../stores/report.store';
import { REPORTS_MOCK } from '../../mocks/reports.mock';
import { of } from 'rxjs';

describe('ReportsComponent', () => {
  let component: ReportsComponent;
  let fixture: ComponentFixture<ReportsComponent>;
  // @ts-ignore
  let mockReportStore: jasmine.SpyObj<ReportStore>;
  let mockMatDialog: jasmine.SpyObj<MatDialog>;

  beforeEach(async () => {
    mockReportStore = jasmine.createSpyObj('ReportStore', ['reportsByAgent', 'addReport', 'nextReportId']);
    mockReportStore.reportsByAgent.and.returnValue({ 1: REPORTS_MOCK });
    mockReportStore.nextReportId.and.returnValue(28);
    const mockMatDialogRef = jasmine.createSpyObj('MatDialogRef', ['afterClosed', 'close']);
    mockMatDialogRef.afterClosed.and.returnValue(of(REPORTS_MOCK[0]));

    mockMatDialog = jasmine.createSpyObj('MatDialog', ['open']);
    mockMatDialog.open.and.returnValue(mockMatDialogRef);

    await TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        MatPaginatorModule,
        ReportsComponent
      ],
      providers: [
        { provide: ReportStore, useValue: mockReportStore },
        { provide: MatDialog, useValue: mockMatDialog },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportsComponent);
    component = fixture.componentInstance;
    component.agentId = 1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load reports when component is initialized', () => {
    component.loadReports();
    expect(component.dataSource.data.length).toBe(REPORTS_MOCK.length);
    expect(component.dataSource.data[0].title).toBe(REPORTS_MOCK[0].title);
  });

});
