import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AgentStore } from '../../stores/agent.store';
import { Agent } from '../../models/agent.model';
import { ActivatedRoute } from '@angular/router';
import { AgentDetailsComponent } from "../agent-details/agent-details.component";
import { RouterModule } from '@angular/router';
import { ReportsComponent } from "../reports/reports.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-details',
  imports: [MatCardModule, AgentDetailsComponent, MatButtonModule, RouterModule, ReportsComponent, MatIconModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

  agentStore = inject(AgentStore);
  agent: Agent | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    const agentId = Number(this.route.snapshot.paramMap.get('id'));
    this.agent = this.agentStore.agents().find(agent => agent.id === agentId) ?? null;

  }

}
