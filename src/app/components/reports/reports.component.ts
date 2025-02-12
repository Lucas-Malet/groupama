import { Component, inject, Input, AfterViewInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ReportStore } from '../../stores/report.store';
import { AddReportDialogComponent } from '../add-report-dialog/add-report-dialog.component';
import { Report } from '../../models/report.model';
import { ReportDetailsDialogComponent } from '../report-details-dialog/report-details-dialog.component';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [MatCardModule, MatTableModule, MatButtonModule, MatDialogModule, MatIconModule, MatPaginatorModule, DatePipe],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent implements AfterViewInit {

  @Input() agentId!: number;

  reportStore = inject(ReportStore);
  dialog = inject(MatDialog);
  displayedColumns: string[] = ['date', 'title', 'id', 'actions'];
  dataSource = new MatTableDataSource<Report>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.loadReports();
  }

  loadReports() {
    this.dataSource.data = this.reportStore.reportsByAgent()[this.agentId] || [];
    this.dataSource.paginator = this.paginator;
  }

  openAddReportDialog() {
    const dialogRef = this.dialog.open(AddReportDialogComponent, {
      height: '500px',
      width: '500px',
      data: { agentId: this.agentId }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.reportStore.addReport(result);
        this.loadReports();
      }
    });
  }

  openReportDetailsDialog(report: Report) {
    const dialogRef = this.dialog.open(ReportDetailsDialogComponent, {
      height: '500px',
      width: '500px',
      data: { report }
    });

    dialogRef.afterClosed().subscribe(updatedReport => {
      if (updatedReport) {
        this.loadReports();
      }
    });
  }

}