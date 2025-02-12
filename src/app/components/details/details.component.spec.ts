import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsComponent } from './details.component';
import { ActivatedRoute } from '@angular/router';
import { AgentStore } from '../../stores/agent.store'; 
import { AGENTS_MOCK } from '../../mocks/agents.mock';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  let mockActivatedRoute: jasmine.SpyObj<ActivatedRoute>;
  //@ts-ignore
  let mockAgentStore: jasmine.SpyObj<AgentStore>;

  beforeEach(async () => {

    mockActivatedRoute = jasmine.createSpyObj('ActivatedRoute', ['snapshot']);
    mockActivatedRoute.snapshot = { paramMap: { get: () => '1' } } as any;

    mockAgentStore = jasmine.createSpyObj('AgentStore', ['agents', 'reportsCountByAgent']);
    mockAgentStore.agents.and.returnValue(AGENTS_MOCK);
    mockAgentStore.reportsCountByAgent.and.returnValue({ 1: 5, 2: 3 });

    await TestBed.configureTestingModule({
      imports: [DetailsComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: AgentStore, useValue: mockAgentStore }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set agent from store based on route param', () => {
    expect(component.agent).toEqual(AGENTS_MOCK[0]);
  });

  it('should call reportsCountByAgent method from agentStore', () => {
    expect(mockAgentStore.reportsCountByAgent).toHaveBeenCalled();
  });

});
