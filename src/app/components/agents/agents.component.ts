import { Component, inject } from '@angular/core';
import { AgentStore } from '../../stores/agent.store';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AgentComponent } from "./components/agent/agent.component";

@Component({
  selector: 'app-agents',
  imports: [MatCardModule, MatProgressSpinnerModule, AgentComponent],
  templateUrl: './agents.component.html',
  styleUrl: './agents.component.scss'
})
export class AgentsComponent {

  agentStore = inject(AgentStore);
  count = this.agentStore.reportsCountByAgent();

}
