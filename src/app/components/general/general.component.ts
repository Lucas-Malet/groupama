import { Component } from '@angular/core';
import { AgentsComponent } from "../agents/agents.component";
import { MissionsComponent } from "../missions/missions.component";
import { CalendarComponent } from "../calendar/calendar.component";

@Component({
  selector: 'app-general',
  imports: [AgentsComponent, MissionsComponent, CalendarComponent],
  templateUrl: './general.component.html',
  styleUrl: './general.component.scss'
})
export class GeneralComponent {

}
