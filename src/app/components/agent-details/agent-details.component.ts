import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Agent } from '../../models/agent.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-agent-details',
  imports: [MatCardModule, MatIconModule, MatButtonModule, DatePipe],
  templateUrl: './agent-details.component.html',
  styleUrl: './agent-details.component.scss'
})

export class AgentDetailsComponent {

  @Input() agent: Agent | null = null;
  @Input() nbReports: number = 0;
  
}