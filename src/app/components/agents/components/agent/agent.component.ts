import { Component, Input } from '@angular/core';
import { Agent } from '../../../../models/agent.model';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-agent',
  imports: [MatCardModule, MatIconModule, MatButtonModule, RouterModule],
  templateUrl: './agent.component.html',
  styleUrl: './agent.component.scss'
})
export class AgentComponent {

  @Input() agent!: Agent;
  @Input() count!: any;

}
