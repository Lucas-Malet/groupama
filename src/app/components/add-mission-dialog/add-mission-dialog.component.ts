import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { Mission } from '../../models/mission.model';
import { MissionStore } from '../../stores/mission.store';


@Component({
  selector: 'app-add-mission-dialog',
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, FormsModule, CommonModule],
  templateUrl: './add-mission-dialog.component.html',
  styleUrl: './add-mission-dialog.component.scss',
})

export class AddMissionDialogComponent {

  dialogRef = inject(MatDialogRef<AddMissionDialogComponent>);
  missionStore = inject(MissionStore);

  mission: Mission = {
    id: this.missionStore.nextMissionId(),
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    color: '#000000',
  };

  updateDateFormat(field: 'startDate' | 'endDate', event: any) {
    if (event.value) {
      const date: Date = event.value;
      this.mission[field] = date.toISOString().split('T')[0];
    }
  }

  save() {
    this.dialogRef.close(this.mission);
  }

  close() {
    this.dialogRef.close();
  }

}
