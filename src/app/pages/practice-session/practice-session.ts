import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule,NgFor } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../components/header/header';

interface PracticeStep {
  phase: 'inhale' | 'hold' | 'exhale' | 'rest';
  duration: number;
  instruction: string;
  description: string;
}

@Component({
  selector: 'app-practice-session',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './practice-session.html',
  styleUrls: ['./practice-session.scss']
})
export class PracticeSessionComponent implements OnInit, OnDestroy {
  practiceId: number = 1; // Default to 4-7-8 Breathing
  practiceTitle: string = '4-7-8 Breathing';
  
  // Practice session state
  isPlaying: boolean = false;
  currentStep: number = 0;
  currentCycle: number = 1;
  totalCycles: number = 4;
  timeRemaining: number = 0;
  progress: number = 0;
  
  // Timer
  private timer: any;
  
  // Practice steps for 4-7-8 Breathing
  practiceSteps: PracticeStep[] = [
    {
      phase: 'exhale',
      duration: 8,
      instruction: 'Exhale Completely',
      description: 'Empty your lungs completely through your mouth'
    },
    {
      phase: 'inhale',
      duration: 4,
      instruction: 'Inhale Slowly',
      description: 'Breathe in quietly through your nose'
    },
    {
      phase: 'hold',
      duration: 7,
      instruction: 'Hold Your Breath',
      description: 'Hold the breath and count slowly'
    },
    {
      phase: 'exhale',
      duration: 8,
      instruction: 'Exhale Completely',
      description: 'Exhale completely through your mouth'
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.practiceId = +params['id'] || 1;
      this.initializePractice();
    });
  }

  ngOnDestroy() {
    this.stopPractice();
  }

  initializePractice() {
    this.isPlaying = false;
    this.currentStep = 0;
    this.currentCycle = 1;
    this.timeRemaining = this.practiceSteps[0].duration;
    this.progress = 0;
  }

  startPractice() {
    this.isPlaying = true;
    this.runStep();
  }

  pausePractice() {
    this.isPlaying = false;
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  stopPractice() {
    this.isPlaying = false;
    this.currentStep = 0;
    this.currentCycle = 1;
    this.timeRemaining = this.practiceSteps[0].duration;
    this.progress = 0;
    
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  runStep() {
    if (!this.isPlaying) return;

    const step = this.practiceSteps[this.currentStep];
    this.timeRemaining = step.duration;
    this.progress = 0;

    const updateTimer = () => {
      if (!this.isPlaying) return;

      this.timeRemaining--;
      this.progress = ((step.duration - this.timeRemaining) / step.duration) * 100;

      if (this.timeRemaining <= 0) {
        this.nextStep();
      } else {
        this.timer = setTimeout(updateTimer, 1000);
      }
    };

    this.timer = setTimeout(updateTimer, 1000);
  }

  nextStep() {
    this.currentStep++;
    
    if (this.currentStep >= this.practiceSteps.length) {
      this.currentStep = 0;
      this.currentCycle++;
      
      if (this.currentCycle > this.totalCycles) {
        this.completePractice();
        return;
      }
    }

    this.runStep();
  }

  completePractice() {
    this.isPlaying = false;
    this.currentStep = 0;
    this.currentCycle = 1;
    alert('Practice completed! Great job!');
  }

  getCurrentStep(): PracticeStep {
    return this.practiceSteps[this.currentStep];
  }

  getCircleSize(): number {
    const step = this.getCurrentStep();
    const baseSize = 120;
    
    switch (step.phase) {
      case 'inhale':
        return baseSize + (this.progress / 100) * 80; // Grow from 120px to 200px
      case 'exhale':
        return baseSize + (1 - this.progress / 100) * 80; // Shrink from 200px to 120px
      default:
        return 200; // Hold at max size
    }
  }

  getCircleColor(): string {
    const step = this.getCurrentStep();
    
    switch (step.phase) {
      case 'inhale': return '#22c55e'; // Green
      case 'hold': return '#3b82f6';   // Blue
      case 'exhale': return '#f59e0b'; // Amber
      default: return '#6b7280';
    }
  }

  skipToNext() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.nextStep();
  }

  goBack() {
    this.router.navigate(['/practices']);
  }
}