import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Agent } from '../models/agent.model';
import { AGENTS_MOCK } from '../mocks/agents.mock';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  getAgents(): Observable<Agent[]> {
    return of(AGENTS_MOCK);
  }
}