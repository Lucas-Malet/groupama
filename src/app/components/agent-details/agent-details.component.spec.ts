import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgentDetailsComponent } from './agent-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Agent } from '../../models/agent.model'; 
import { AGENTS_MOCK } from '../../mocks/agents.mock';

describe('AgentDetailsComponent', () => {
  let component: AgentDetailsComponent;
  let fixture: ComponentFixture<AgentDetailsComponent>;
  const mockAgent: Agent = AGENTS_MOCK[0]; 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCardModule, MatIconModule, MatButtonModule, AgentDetailsComponent],
      declarations: []
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentDetailsComponent);
    component = fixture.componentInstance;

    component.agent = mockAgent;
    component.nbReports = 5;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
