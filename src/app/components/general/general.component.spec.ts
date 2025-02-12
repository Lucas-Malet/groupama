import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeneralComponent } from './general.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('GeneralComponent', () => {
  let component: GeneralComponent;
  let fixture: ComponentFixture<GeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { params: {} }, queryParams: of({}) }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(GeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
