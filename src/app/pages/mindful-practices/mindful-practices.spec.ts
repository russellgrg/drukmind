import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MindfulPractices } from './mindful-practices';

describe('MindfulPractices', () => {
  let component: MindfulPractices;
  let fixture: ComponentFixture<MindfulPractices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MindfulPractices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MindfulPractices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
