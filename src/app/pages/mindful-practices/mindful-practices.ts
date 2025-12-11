import { Component, OnInit } from '@angular/core';
import { CommonModule,NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer';
import { HeaderComponent } from '../../components/header/header';
import { Router } from '@angular/router';


export interface Practice {
  id: number;
  title: string;
  description: string;
  type: 'breathing' | 'meditation' | 'walking' | 'reflection' | 'posture';
  duration: number; // in minutes
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  steps: string[];
  benefits: string[];
  icon: string;
  image: string;
  featured?: boolean;
}

@Component({
  selector: 'app-mindful-practices',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent, NgIf],
  templateUrl: './mindful-practices.html',
  styleUrls: ['./mindful-practices.scss']
})
export class MindfulPracticesComponent implements OnInit {
  constructor(private router: Router) {}

  // All practices data
  allPractices: Practice[] = [
    {
      id: 1,
      title: '4-7-8 Breathing',
      description: 'A calming breathing exercise that helps reduce anxiety and promote relaxation.',
      type: 'breathing',
      duration: 5,
      difficulty: 'beginner',
      steps: [
        'Sit comfortably with your back straight',
        'Exhale completely through your mouth',
        'Close your mouth and inhale through your nose for 4 counts',
        'Hold your breath for 7 counts',
        'Exhale completely through your mouth for 8 counts',
        'Repeat this cycle 4 times'
      ],
      benefits: [
        'Reduces anxiety and stress',
        'Helps with sleep issues',
        'Improves focus and concentration',
        'Calms the nervous system'
      ],
      icon: 'bi-wind',
      image: 'assets/images/breathing.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Mindful Sitting Meditation',
      description: 'Traditional sitting meditation focusing on breath awareness and present moment awareness.',
      type: 'meditation',
      duration: 10,
      difficulty: 'beginner',
      steps: [
        'Find a comfortable sitting position with spine straight',
        'Rest your hands on your knees or lap',
        'Close your eyes or maintain soft gaze',
        'Focus on your natural breathing rhythm',
        'When mind wanders, gently return to breath',
        'Maintain for desired duration'
      ],
      benefits: [
        'Increases self-awareness',
        'Reduces stress and anxiety',
        'Improves emotional regulation',
        'Enhances focus and attention'
      ],
      icon: 'bi-person-check',
      image: 'assets/images/meditation-practice.jpg'
    },
    {
      id: 3,
      title: 'Walking Meditation',
      description: 'Mindful walking practice that combines movement with breath awareness.',
      type: 'walking',
      duration: 15,
      difficulty: 'beginner',
      steps: [
        'Find a quiet path where you can walk slowly',
        'Stand still and bring awareness to your body',
        'Begin walking slowly, focusing on each step',
        'Coordinate your breath with your steps',
        'Notice the sensations in your feet and legs',
        'If mind wanders, gently return to walking sensation'
      ],
      benefits: [
        'Combines physical activity with mindfulness',
        'Improves body awareness',
        'Reduces mental fatigue',
        'Can be practiced anywhere'
      ],
      icon: 'bi-geo-alt',
      image: 'assets/images/walking.jpg',
      featured: true
    },
    {
      id: 4,
      title: 'Daily Gratitude Reflection',
      description: 'A practice of reflecting on things you are grateful for to cultivate positive mindset.',
      type: 'reflection',
      duration: 5,
      difficulty: 'beginner',
      steps: [
        'Find a quiet space and take a comfortable seat',
        'Take three deep breaths to center yourself',
        'Reflect on three things you are grateful for today',
        'Write them down or mentally note them',
        'Feel the appreciation for each item',
        'Carry this gratitude through your day'
      ],
      benefits: [
        'Increases happiness and life satisfaction',
        'Reduces stress and negative emotions',
        'Improves sleep quality',
        'Strengthens relationships'
      ],
      icon: 'bi-journal',
      image: 'assets/images/reflection-practice.jpg'
    },
    {
      id: 5,
      title: 'Body Scan Meditation',
      description: 'A practice of systematically scanning and relaxing each part of the body.',
      type: 'meditation',
      duration: 20,
      difficulty: 'intermediate',
      steps: [
        'Lie down comfortably on your back',
        'Close your eyes and take a few deep breaths',
        'Bring awareness to your toes and feet',
        'Slowly move awareness up through each body part',
        'Notice sensations without judgment',
        'Release tension as you scan each area'
      ],
      benefits: [
        'Reduces physical tension',
        'Improves body awareness',
        'Helps with insomnia',
        'Reduces chronic pain'
      ],
      icon: 'bi-activity',
      image: 'assets/images/bodyscan-practice.jpg'
    },
    {
      id: 6,
      title: 'Loving-Kindness Meditation',
      description: 'Cultivating compassion and kindness towards yourself and others.',
      type: 'meditation',
      duration: 15,
      difficulty: 'intermediate',
      steps: [
        'Sit comfortably and bring someone you love to mind',
        'Repeat phrases: "May you be happy, may you be healthy..."',
        'Extend these wishes to yourself',
        'Then to neutral people, difficult people, all beings',
        'Feel the warmth and compassion growing',
        'Carry this feeling into your day'
      ],
      benefits: [
        'Increases compassion and empathy',
        'Reduces anger and frustration',
        'Improves social connections',
        'Enhances emotional intelligence'
      ],
      icon: 'bi-heart',
      image: 'assets/images/lovingkindness.jpg',
      featured: true
    },
    {
      id: 7,
      title: 'Proper Meditation Posture',
      description: 'Learn the correct sitting postures for effective meditation practice.',
      type: 'posture',
      duration: 5,
      difficulty: 'beginner',
      steps: [
        'Sit on cushion with legs crossed comfortably',
        'Keep spine straight but relaxed',
        'Rest hands on knees with palms up or down',
        'Chin slightly tucked, gaze softly downward',
        'Relax shoulders away from ears',
        'Maintain alert yet relaxed posture'
      ],
      benefits: [
        'Improves meditation effectiveness',
        'Reduces physical discomfort',
        'Enhances breath awareness',
        'Prevents back pain'
      ],
      icon: 'bi-postage',
      image: 'assets/images/posture-practice.jpg'
    },
    {
      id: 8,
      title: 'Mindful Eating',
      description: 'Bringing full awareness to the experience of eating and drinking.',
      type: 'reflection',
      duration: 10,
      difficulty: 'beginner',
      steps: [
        'Choose one meal to eat mindfully',
        'Before eating, appreciate the food visually',
        'Notice the smells and textures',
        'Take small bites and chew slowly',
        'Pay attention to flavors and sensations',
        'Eat without distractions like phone or TV'
      ],
      benefits: [
        'Improves digestion',
        'Helps with weight management',
        'Enhances enjoyment of food',
        'Develops healthier eating habits'
      ],
      icon: 'bi-egg-fried',
      image: 'assets/images/eating-practice.jpg'
    }
  ];
  

  // Practice categories
  categories = [
    { id: 'all', name: 'All Practices', icon: 'bi-grid', count: 0 },
    { id: 'breathing', name: 'Breathing', icon: 'bi-wind', count: 0 },
    { id: 'meditation', name: 'Meditation', icon: 'bi-person-check', count: 0 },
    { id: 'walking', name: 'Walking', icon: 'bi-geo-alt', count: 0 },
    { id: 'reflection', name: 'Reflection', icon: 'bi-journal', count: 0 },
    { id: 'posture', name: 'Posture', icon: 'bi-postage', count: 0 }
  ];

  // Difficulty levels
  difficulties = [
    { id: 'all', name: 'All Levels' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' }
  ];

  filteredPractices: Practice[] = [];
  selectedCategory = 'all';
  selectedDifficulty = 'all';
  searchQuery = '';
  featuredPractices: Practice[] = [];

  ngOnInit() {
    this.updateCategoryCounts();
    this.filteredPractices = [...this.allPractices];
    this.featuredPractices = this.allPractices.filter(practice => practice.featured);
  }

  updateCategoryCounts() {
    this.categories.forEach(category => {
      if (category.id === 'all') {
        category.count = this.allPractices.length;
      } else {
        category.count = this.allPractices.filter(p => p.type === category.id).length;
      }
    });
  }

  filterByCategory(categoryId: string) {
    this.selectedCategory = categoryId;
    this.applyFilters();
  }

  filterByDifficulty(difficultyId: string) {
    this.selectedDifficulty = difficultyId;
    this.applyFilters();
  }

  onSearchChange(event: any) {
    this.searchQuery = event.target.value;
    this.applyFilters();
  }

  applyFilters() {
    this.filteredPractices = this.allPractices.filter(practice => {
      const matchesCategory = this.selectedCategory === 'all' || practice.type === this.selectedCategory;
      const matchesDifficulty = this.selectedDifficulty === 'all' || practice.difficulty === this.selectedDifficulty;
      const matchesSearch = !this.searchQuery || 
        practice.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        practice.description.toLowerCase().includes(this.searchQuery.toLowerCase());
      
      return matchesCategory && matchesDifficulty && matchesSearch;
    });
  }

  getCategoryDisplayName(categoryId: string): string {
    const category = this.categories.find(c => c.id === categoryId);
    return category ? category.name : '';
  }

  getCategoryIcon(categoryId: string): string {
    const category = this.categories.find(c => c.id === categoryId);
    return category ? category.icon : 'bi-circle';
  }

  getPracticeTypeIcon(type: string): string {
    return this.getCategoryIcon(type);
  }

  getDifficultyColor(difficulty: string): string {
    switch (difficulty) {
      case 'beginner': return '#22c55e';
      case 'intermediate': return '#eab308';
      case 'advanced': return '#ef4444';
      default: return '#6b7280';
    }
  }

  startPractice(practice: Practice) {
  // Navigate to practice session for the first practice (4-7-8 Breathing)
  if (practice.id === 1) {
    this.router.navigate(['/practice', practice.id]);
  } else {
    // For other practices, show the alert (temporary)
    console.log('Starting practice:', practice.title);
    alert(`Starting ${practice.title} practice! This would open the practice session in a real app.`);
  }
}

  getDurationText(minutes: number): string {
    if (minutes < 1) return '< 1 min';
    if (minutes === 1) return '1 min';
    return `${minutes} mins`;
  }
}