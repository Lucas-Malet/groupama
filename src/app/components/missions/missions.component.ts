import { AfterViewInit, Component, effect, inject, ViewChild, viewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MissionStore } from '../../stores/mission.store';
import { DatePipe } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddMissionDialogComponent } from '../add-mission-dialog/add-mission-dialog.component';
import { MissionDetailsDialogComponent } from '../mission-details-dialog/mission-details-dialog.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonToggleChange, MatButtonToggleGroup, MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { Mission } from '../../models/mission.model';

@Component({
  selector: 'app-missions',
  imports: [MatCardModule, MatTableModule, MatButtonModule, DatePipe, MatDialogModule, MatIconModule, MatButtonToggleModule, FormsModule, MatPaginatorModule],
  templateUrl: './missions.component.html',
  styleUrl: './missions.component.scss'
})
export class MissionsComponent implements AfterViewInit{

  missionStore = inject(MissionStore);
  dialog = inject(MatDialog);

  displayedColumns: string[] = ['color', 'title', 'startDate', 'endDate', 'details'];
  filter = viewChild.required(MatButtonToggleGroup);

  dataSource = new MatTableDataSource<Mission>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {
    effect(() => {
      const filter = this.filter();
      filter.value = this.missionStore.filter();
    });
  }

  ngAfterViewInit() {
    this.dataSource.data = this.missionStore.filteredMission();
    this.dataSource.paginator = this.paginator;
  }

  filterMissions(event: MatButtonToggleChange) {
    const filter = event.value;
    this.missionStore.updateFilter(filter);
    this.dataSource.data = this.missionStore.filteredMission();
  }

  openAddMissionDialog() {
    const dialogRef = this.dialog.open(AddMissionDialogComponent, {
      height: '500px',
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.missionStore.addMission(result);
        this.dataSource.data = this.missionStore.filteredMission();
      }
    });
  }

  openMissionDetailsDialog(description: string) {
    const dialogRef = this.dialog.open(MissionDetailsDialogComponent, {
      height: '500px',
      width: '500px',
      data: { description }
    });
  }

}
