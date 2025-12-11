import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../components/footer/footer';
import { HeaderComponent } from '../components/header/header';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FooterComponent, HeaderComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {
  // Professional features with proper icons
  features = [
    {
      icon: 'bi-quote',
      title: 'Daily Wisdom',
      description: 'Begin each day with curated Bhutanese wisdom, inspirational quotes, and timeless proverbs that guide mindful living.',
      route: '/wisdom',
      gradient: 'linear-gradient(135deg, #2c5530 0%, #4a7c59 100%)',
      stats: '500+ Quotes'
    },
    {
      icon: 'bi-wind',
      title: 'Mindful Practices',
      description: 'Guided breathing exercises, meditation sessions, and mindfulness techniques rooted in Buddhist traditions.',
      route: '/practices',
      gradient: 'linear-gradient(135deg, #4a7c59 0%, #8fb996 100%)',
      stats: '25+ Practices'
    },
    {
      icon: 'bi-globe',
      title: 'Cultural Insights',
      description: 'Deep dive into Gross National Happiness, Bhutanese values, and cultural wisdom that shapes mindful societies.',
      route: '/culture',
      gradient: 'linear-gradient(135deg, #8fb996 0%, #d4a574 100%)',
      stats: '15+ Insights'
    },
    {
      icon: 'bi-heart',
      title: 'Personal Growth',
      description: 'Track your mindfulness journey, set intentions, and build lasting habits for mental and emotional well-being.',
      route: '/growth',
      gradient: 'linear-gradient(135deg, #d4a574 0%, #e8c8a9 100%)',
      stats: 'Personalized'
    }
  ];

  // Enhanced daily quotes
  dailyQuotes = [
    {
      text: "Happiness is when what you think, what you say, and what you do are in harmony.",
      author: "His Majesty the Fifth King",
      category: "Personal Harmony",
      source: "Royal Address, 2015"
    },
    {
      text: "Compassion and kindness are the pillars of a harmonious society where collective happiness thrives.",
      author: "Bhutanese Proverb",
      category: "Social Harmony",
      source: "Traditional Wisdom"
    },
    {
      text: "The true measure of a nation's success is not in its economic wealth, but in the happiness and well-being of its people.",
      author: "Gross National Happiness",
      category: "National Philosophy",
      source: "Bhutan Constitution"
    },
    {
      text: "Walk gently upon this earth, for we do not inherit it from our ancestors but borrow it from our children.",
      author: "Ancient Bhutanese Wisdom",
      category: "Environmental Stewardship",
      source: "Cultural Heritage"
    }
  ];

  currentQuoteIndex = 0;

  // Professional testimonials
  testimonials = [
    {
      text: "DrukMind has transformed my morning routine. The Bhutanese wisdom brings a unique perspective that modern mindfulness apps lack. It's like having a personal guide to Gross National Happiness.",
      author: "Dr. Karma Wangchuk",
      role: "Psychology Professor",
      location: "Royal Thimphu College",
      avatar: "assets/images/avatar1.jpg",
      rating: 5
    },
    {
      text: "As a healthcare professional, I recommend DrukMind to my patients. The breathing exercises are scientifically sound, and the cultural context adds depth to the practice.",
      author: "Dr. Dechen Zangmo",
      role: "Clinical Psychologist",
      location: "JDW National Hospital",
      avatar: "assets/images/avatar2.jpg",
      rating: 5
    },
    {
      text: "The integration of traditional Bhutanese values with modern mindfulness techniques is brilliant. This app helps bridge ancient wisdom with contemporary life challenges.",
      author: "Tashi Dorji",
      role: "Mindfulness Coach",
      location: "Punakha Valley",
      avatar: "assets/images/avatar3.jpg",
      rating: 5
    }
  ];

  // App statistics
  appStats = [
    { number: '50,000+', label: 'Active Users', icon: 'bi-people' },
    { number: '500+', label: 'Wisdom Quotes', icon: 'bi-chat-quote' },
    { number: '25+', label: 'Mindful Practices', icon: 'bi-heart' },
    { number: '98%', label: 'User Satisfaction', icon: 'bi-star' }
  ];

  // Trust indicators
  trustIndicators = [
    { text: 'No Registration Required', icon: 'bi-shield-check' },
    { text: '100% Free Forever', icon: 'bi-gift' },
    { text: 'Privacy-First Approach', icon: 'bi-eye-slash' },
    { text: 'Cultural Authenticity', icon: 'bi-award' }
  ];

  constructor() {
    this.currentQuoteIndex = Math.floor(Math.random() * this.dailyQuotes.length);
  }

  get currentQuote() {
    return this.dailyQuotes[this.currentQuoteIndex];
  }

  nextQuote(): void {
    this.currentQuoteIndex = (this.currentQuoteIndex + 1) % this.dailyQuotes.length;
  }

  // Generate star ratings
  generateStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}