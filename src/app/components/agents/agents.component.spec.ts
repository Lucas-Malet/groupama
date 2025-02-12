import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { AgentsComponent } from './agents.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

describe('AgentsComponent', () => {
  let component: AgentsComponent;
  let fixture: ComponentFixture<AgentsComponent>;
  let mockActivatedRoute: jasmine.SpyObj<ActivatedRoute>;

  beforeEach(async () => {
    mockActivatedRoute = jasmine.createSpyObj('ActivatedRoute', [], {
      params: of({ id: '1' })
    });

    await TestBed.configureTestingModule({
      imports: [
        AgentsComponent,
        RouterModule.forRoot([])
      ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
