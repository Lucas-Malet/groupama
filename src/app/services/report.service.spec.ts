import { TestBed } from '@angular/core/testing';
import { ReportService } from './report.service';
import { REPORTS_MOCK } from '../mocks/reports.mock';

describe('ReportService', () => {
  let service: ReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send reports list', (done) => {
    service.getReports().subscribe((reports) => {
      expect(reports).toEqual(REPORTS_MOCK);
      done();
    });
  });
});
