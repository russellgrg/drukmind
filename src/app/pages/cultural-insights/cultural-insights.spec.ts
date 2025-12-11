import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturalInsights } from './cultural-insights';

describe('CulturalInsights', () => {
  let component: CulturalInsights;
  let fixture: ComponentFixture<CulturalInsights>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CulturalInsights]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CulturalInsights);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
