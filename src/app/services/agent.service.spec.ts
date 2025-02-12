import { TestBed } from '@angular/core/testing';
import { AgentService } from './agent.service';
import { AGENTS_MOCK } from '../mocks/agents.mock';

describe('AgentService', () => {
  let service: AgentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send agents list', (done) => {
    service.getAgents().subscribe((agents) => {
      expect(agents).toEqual(AGENTS_MOCK);
      done();
    });
  });
});
