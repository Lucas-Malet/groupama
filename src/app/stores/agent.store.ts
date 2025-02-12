import { signalStore, withState, withMethods, patchState, withHooks, withComputed } from '@ngrx/signals';
import { Agent } from '../models/agent.model';
import { AgentService } from '../services/agent.service';
import { computed, inject } from '@angular/core';
import { ReportStore } from './report.store';

type AgentsState = {
  agents: Agent[];
  loading: boolean;
}

export const initialState: AgentsState = {
  agents: [],
  loading: false,
};

export const AgentStore = signalStore(
  { providedIn: 'root' },
  withState(initialState), 

  withMethods((store, agentService = inject(AgentService)) => ({
    loadAllAgents() {
      patchState(store, {loading: true});
      agentService.getAgents().subscribe(agents => {
        patchState(store, { agents, loading: false });
      });
    },
  })),
  withHooks({
    onInit({loadAllAgents}) {
      loadAllAgents();
    }
  }),
  withComputed((store, reportStore = inject(ReportStore)) => ({
    reportsCountByAgent: computed(() => {
      const reports = reportStore.reports();
      const countByAgent = store.agents().reduce((acc, agent) => {
        const count = reports.filter(report => report.agentId === agent.id).length;
        acc[agent.id] = count;
        return acc;
      }, {} as { [agentId: number]: number });
      return countByAgent;
    }) 
  })),
);
