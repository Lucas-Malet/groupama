import { TestBed } from '@angular/core/testing';
import { MissionService } from './mission.service';
import { MISSIONS_MOCK } from '../mocks/missions.mock';

describe('MissionService', () => {
  let service: MissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send missions list', (done) => {
    service.getMissions().subscribe((missions) => {
      expect(missions).toEqual(MISSIONS_MOCK);
      done();
    });
  });
});