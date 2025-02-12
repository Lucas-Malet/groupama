import { Component, computed, effect, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FullCalendarModule } from '@fullcalendar/angular'; 
import multiMonthPlugin from '@fullcalendar/multimonth';
import interactionPlugin from '@fullcalendar/interaction';
import frLocale from '@fullcalendar/core/locales/fr';
import { MissionStore } from '../../stores/mission.store';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-calendar',
  imports: [MatCardModule, FullCalendarModule, MatProgressSpinnerModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {
  
  missionStore = inject(MissionStore);

  constructor() {
    effect(() => {
      this.calendarOptions.events = this.events();
    });
  }

  events = computed<EventInput[]>(() => {
    const missions = this.missionStore.missions().map((mission) => ({
      title: mission.description,
      start: mission.startDate,
      end: mission.endDate,
      backgroundColor: mission.color,
      borderColor: mission.color,
    }));
    return missions;
  });
  
  // Configuration du calendrier
  calendarOptions: CalendarOptions = {
    initialView: 'multiMonthThreeMonth',
    plugins: [multiMonthPlugin, interactionPlugin],
    editable: false,
    events: [],
    locale: frLocale,
    views: {
      multiMonthThreeMonth: {
        type: 'multiMonth',
        duration: { months: 3 },
      },
    },
    headerToolbar: {
      left: undefined,
      center: undefined,
      right: 'prev,next'
    },
  };

}
