import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReportStore } from '../../stores/report.store';
import { Report } from '../../models/report.model';

@Component({
  selector: 'app-report-details-dialog',
  imports: [MatButtonModule, MatFormFieldModule, FormsModule, MatInputModule],
  templateUrl: './report-details-dialog.component.html',
  styleUrl: './report-details-dialog.component.scss'
})
export class ReportDetailsDialogComponent {

  dialogRef = inject(MatDialogRef<ReportDetailsDialogComponent>);
  reportStore = inject(ReportStore);
  report: Report;
  
    constructor(@Inject(MAT_DIALOG_DATA) public data: { report: Report }) {
      this.report = { ...data.report };
     }

    save() {
      const updatedReport = { ...this.data.report, body: this.report.body };
      this.reportStore.updateReport(updatedReport);
      this.dialogRef.close(updatedReport);
    }
    
    close() {
      this.dialogRef.close();
    }

}
