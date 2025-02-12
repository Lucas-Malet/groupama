import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Report } from '../models/report.model';
import { REPORTS_MOCK } from '../mocks/reports.mock';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  getReports(): Observable<Report[]> {
    return of(REPORTS_MOCK);
  }
}
