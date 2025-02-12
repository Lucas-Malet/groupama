import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MISSIONS_MOCK } from '../mocks/missions.mock';
import { Mission } from '../models/mission.model';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  getMissions(): Observable<Mission[]> {
    return of(MISSIONS_MOCK);
  }
}
