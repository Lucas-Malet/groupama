import { Component, Inject, inject } from '@angular/core';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ReportStore } from '../../stores/report.store';
import { Report } from '../../models/report.model';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MissionStore } from '../../stores/mission.store';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-add-report-dialog',
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, CommonModule, MatDividerModule, MatDialogModule],
  templateUrl: './add-report-dialog.component.html',
  styleUrl: './add-report-dialog.component.scss'
})
export class AddReportDialogComponent {

  dialogRef = inject(MatDialogRef<AddReportDialogComponent>);
  reportStore = inject(ReportStore);
  missionStore = inject(MissionStore);
  report: Report = {} as Report;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { agentId: number }) {
    this.report = {
      id: this.reportStore.nextReportId(),
      date: new Date().toISOString().split('T')[0],
      title: '',
      body: '',
      agentId: data.agentId,
      missionId: 1,
    };
  }

  save() {
    this.dialogRef.close(this.report);
  }

  close() {
    this.dialogRef.close();
  }

}
