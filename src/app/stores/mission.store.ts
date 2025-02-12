import { signalStore, withState, withMethods, patchState, withHooks, withComputed } from '@ngrx/signals';
import { Mission } from '../models/mission.model';
import { MissionService } from '../services/mission.service';
import { computed, inject } from '@angular/core';

type MissionFilters = 'all' | 'upcoming' | 'inProgress' | 'completed';

type MissionsState = {
  missions: Mission[];
  loading: boolean;
  filter: MissionFilters;
}

export const initialState: MissionsState = {
  missions: [],
  loading: false,
  filter: 'all',
};

export const MissionStore = signalStore(
  { providedIn: 'root' },
  withState(initialState), 

  withMethods((store, agentService = inject(MissionService)) => ({
    loadAllMissions() {
      patchState(store, {loading: true});
      agentService.getMissions().subscribe(missions => {
        patchState(store, { missions, loading: false });
      });
    },
    nextMissionId() {
      const missions = store.missions();
      return missions.length > 0 ? Math.max(...missions.map((m: Mission) => m.id)) + 1 : 1;
    },
    addMission(newMission: Mission) {
      patchState(store, { missions: [...store.missions(), newMission] });
    },
    updateFilter (filter: MissionFilters) {
      patchState(store, { filter });
    }
  })),
  withComputed((state) => ({
    filteredMission: computed(() => {
      const missions = state.missions();
      let filteredMissions = [];

      switch (state.filter()) {
        case 'upcoming':
          filteredMissions = missions.filter(m => new Date(m.startDate) > new Date());
          break;
        case 'inProgress':
          filteredMissions = missions.filter(m => new Date(m.startDate) <= new Date() && new Date(m.endDate) >= new Date());
          break;
        case 'completed':
          filteredMissions = missions.filter(m => new Date(m.endDate) < new Date());
          break;
        default:
          filteredMissions = missions;
          break;
      }
      return filteredMissions.sort((a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime());
    }),
  })),

  withHooks((store) => ({
    onInit() {
      store.loadAllMissions();
    }
  })),
);
