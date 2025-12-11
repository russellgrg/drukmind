import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  footerSections = {
    explore: [
      { name: 'Daily Wisdom', link: '/wisdom', icon: 'bi-quote' },
      { name: 'Breathing Exercises', link: '/breathing', icon: 'bi-wind' },
      { name: 'Meditation Guides', link: '/meditation', icon: 'bi-heart' },
      { name: 'Cultural Values', link: '/culture', icon: 'bi-globe' }
    ],
    resources: [
      { name: 'GNH Philosophy', link: '/gnh', icon: 'bi-lightbulb' },
      { name: 'Mindfulness Tips', link: '/tips', icon: 'bi-journal' },
      { name: 'Bhutanese Wisdom', link: '/wisdom-library', icon: 'bi-book' },
      { name: 'Practice Library', link: '/practices', icon: 'bi-collection' }
    ],
    support: [
      { name: 'Help Center', link: '/help', icon: 'bi-question-circle' },
      { name: 'Contact Us', link: '/contact', icon: 'bi-envelope' },
      { name: 'Feedback', link: '/feedback', icon: 'bi-chat' },
      { name: 'Community', link: '/community', icon: 'bi-people' }
    ],
    company: [
      { name: 'About DrukMind', link: '/about', icon: 'bi-info-circle' },
      { name: 'Our Mission', link: '/mission', icon: 'bi-star' },
      { name: 'Privacy Policy', link: '/privacy', icon: 'bi-shield' },
      { name: 'Terms of Service', link: '/terms', icon: 'bi-file-text' }
    ]
  };

  socialLinks = [
    { name: 'Facebook', icon: 'bi-facebook', link: '#', color: '#1877F2' },
    { name: 'Instagram', icon: 'bi-instagram', link: '#', color: '#E4405F' },
    { name: 'Twitter', icon: 'bi-twitter', link: '#', color: '#1DA1F2' },
    { name: 'YouTube', icon: 'bi-youtube', link: '#', color: '#FF0000' },
    { name: 'LinkedIn', icon: 'bi-linkedin', link: '#', color: '#0A66C2' }
  ];

  newsletterSubscribe(event: Event) {
    event.preventDefault();
    // Add newsletter subscription logic here
    console.log('Newsletter subscription');
  }
}