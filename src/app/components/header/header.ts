import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent {
  navItems = [
    { path: '/home', label: 'Home', icon: 'bi-house' },
    { path: '/wisdom', label: 'Wisdom', icon: 'bi-quote' },
    { path: '/practices', label: 'Practices', icon: 'bi-wind' },
    { path: '/cultural-insights', label: 'Culture', icon: 'bi-globe' },
    { path: '/about', label: 'About', icon: 'bi-info-circle' },
    { path: '/contact', label: 'Contact', icon: 'bi-chat' }

  ];
}