import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Feedback {
  id: number;
  name: string;
  email: string;
  practice: string;
  rating: number;
  comment: string;
  date: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent implements OnInit {
  feedbackList: Feedback[] = [];
  
  // Form model
  newFeedback = {
    name: '',
    email: '',
    practice: '',
    rating: 0,
    comment: ''
  };

  // Practice options
  practices = [
    '4-7-8 Breathing',
    'Mindful Meditation',
    'Body Scan',
    'Loving-Kindness',
    'Walking Meditation',
    'Mountain Pose',
    'Gratitude Journaling'
  ];

  // Star rating hover state
  hoverRating = 0;

  ngOnInit() {
    this.loadFeedback();
  }

  // Load feedback from localStorage
  loadFeedback() {
    const savedFeedback = localStorage.getItem('drukmind-feedback');
    if (savedFeedback) {
      this.feedbackList = JSON.parse(savedFeedback);
    }
  }

  // Save feedback to localStorage
  saveFeedback() {
    localStorage.setItem('drukmind-feedback', JSON.stringify(this.feedbackList));
  }

  // Set star rating
  setRating(rating: number) {
    this.newFeedback.rating = rating;
  }

  // Submit feedback form
  submitFeedback() {
    if (this.isFormValid()) {
      const feedback: Feedback = {
        id: Date.now(),
        name: this.newFeedback.name,
        email: this.newFeedback.email,
        practice: this.newFeedback.practice,
        rating: this.newFeedback.rating,
        comment: this.newFeedback.comment,
        date: new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'short', 
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      this.feedbackList.unshift(feedback); // Add to beginning of array
      this.saveFeedback();
      this.resetForm();
      
      // Show success message (we'll implement this in the template)
      alert('Thank you for your feedback!');
    }
  }

  // Check if form is valid
  isFormValid(): boolean {
    return this.newFeedback.name.trim() !== '' &&
           this.newFeedback.email.trim() !== '' &&
           this.newFeedback.practice !== '' &&
           this.newFeedback.rating > 0 &&
           this.newFeedback.comment.trim() !== '';
  }

  // Reset form
  resetForm() {
    this.newFeedback = {
      name: '',
      email: '',
      practice: '',
      rating: 0,
      comment: ''
    };
    this.hoverRating = 0;
  }

  // Delete feedback
  deleteFeedback(id: number) {
    if (confirm('Are you sure you want to delete this feedback?')) {
      this.feedbackList = this.feedbackList.filter(feedback => feedback.id !== id);
      this.saveFeedback();
    }
  }

  // Get star display for rating
  getStars(rating: number): string {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  }
}