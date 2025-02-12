import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mission-details-dialog',
  imports: [MatButtonModule, MatFormFieldModule, FormsModule, MatInputModule],
  templateUrl: './mission-details-dialog.component.html',
  styleUrl: './mission-details-dialog.component.scss'
})
export class MissionDetailsDialogComponent {

  dialogRef = inject(MatDialogRef<MissionDetailsDialogComponent>);

  constructor(@Inject(MAT_DIALOG_DATA) public data: { description: string }) { }
  
  close() {
    this.dialogRef.close();
  }
}
