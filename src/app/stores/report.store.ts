import { signalStore, withState, withMethods, patchState, withHooks, withComputed } from '@ngrx/signals';
import { Report } from '../models/report.model';
import { ReportService } from '../services/report.service';
import { computed, inject } from '@angular/core';

type ReportsState = {
  reports: Report[];
  loading: boolean;
}

export const initialState: ReportsState = {
  reports: [],
  loading: false
};

export const ReportStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),

  withMethods((store, reportService = inject(ReportService)) => ({
    loadAllReports() {
      patchState(store, { loading: true });
      reportService.getReports().subscribe(reports => {
        patchState(store, { reports, loading: false });
      });
    },
    nextReportId() {
          const reports = store.reports();
          return reports.length > 0 ? Math.max(...reports.map((m: Report) => m.id)) + 1 : 1;
    },
    addReport(newReport: Report) {
      patchState(store, { reports: [...store.reports(), newReport] });
    },
    updateReport(updatedReport: Report) {
      const updatedReports = store.reports().map(report =>
        report.id === updatedReport.id ? updatedReport : report
      );
      patchState(store, { reports: updatedReports });
    }
  })),

  withHooks({
    onInit({ loadAllReports }) {
      loadAllReports();
    }
  }),

  withComputed((store) => ({
    reportsByAgent: computed(() => {
      const reportsByAgent = store.reports().reduce((acc, report) => {
        const agentId = report.agentId;
        if (!acc[agentId]) {
          acc[agentId] = [];
        }
        acc[agentId].push(report);
        return acc;
      }, {} as { [agentId: number]: Report[] });
  
      // Tri
      Object.keys(reportsByAgent).forEach(agentIdStr => {
        const agentId = Number(agentIdStr);
        reportsByAgent[agentId].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      });
  
      return reportsByAgent;
    })
  }))
);