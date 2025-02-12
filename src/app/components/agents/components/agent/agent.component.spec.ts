import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgentComponent } from './agent.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AGENTS_MOCK } from '../../../../mocks/agents.mock'; 

describe('AgentComponent', () => {
  let component: AgentComponent;
  let fixture: ComponentFixture<AgentComponent>;

  const mockCount = { 1: 5, 2: 3 };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AgentComponent,
        RouterModule.forRoot([]),
        MatCardModule,
        MatIconModule,
        MatButtonModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AgentComponent);
    component = fixture.componentInstance;

    component.agent = AGENTS_MOCK[0];
    component.count = mockCount;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the agent name', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('mat-card-title').textContent).toContain(AGENTS_MOCK[0].name);
  });

  it('should display the agent ID', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.info-value').textContent).toContain(AGENTS_MOCK[0].id);
  });

  it('should display the correct report count for John Doe', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('.info-value')[1].textContent).toContain('5');
  });

});
