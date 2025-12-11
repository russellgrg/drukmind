import { Component, OnInit } from '@angular/core';
import { CommonModule,NgIf,NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer';
import { HeaderComponent } from '../../components/header/header';

interface Quote {
  id: number;
  text: string;
  author: string;
  category: string;
  source?: string;
  isFavorite: boolean;
}

@Component({
  selector: 'app-wisdom',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent,FooterComponent],
  templateUrl: './wisdom.component.html',
  styleUrls: ['./wisdom.component.scss']
})
export class WisdomComponent implements OnInit {
  // All quotes data
  allQuotes: Quote[] = [
    {
      id: 1,
      text: "Happiness is when what you think, what you say, and what you do are in harmony.",
      author: "His Majesty the Fifth King",
      category: "Happiness",
      source: "Royal Address, 2015",
      isFavorite: false
    },
    {
      id: 2,
      text: "Compassion and kindness are the pillars of a harmonious society where collective happiness thrives.",
      author: "Bhutanese Proverb",
      category: "Compassion",
      isFavorite: false
    },
    {
      id: 3,
      text: "The true measure of a nation's success is not in its economic wealth, but in the happiness and well-being of its people.",
      author: "Gross National Happiness",
      category: "National Philosophy",
      source: "Bhutan Constitution",
      isFavorite: false
    },
    {
      id: 4,
      text: "Walk gently upon this earth, for we do not inherit it from our ancestors but borrow it from our children.",
      author: "Ancient Bhutanese Wisdom",
      category: "Environmental Stewardship",
      isFavorite: false
    },
    {
      id: 5,
      text: "In the silence of meditation, we find the voice of wisdom that guides our path.",
      author: "Buddhist Teaching",
      category: "Meditation",
      isFavorite: false
    },
    {
      id: 6,
      text: "A society grows great when old men plant trees whose shade they know they shall never sit in.",
      author: "Bhutanese Proverb",
      category: "Community",
      isFavorite: false
    },
    {
      id: 7,
      text: "The wise see knowledge and action as one; they understand that knowing without doing is not truly knowing.",
      author: "Drukpa Kunley",
      category: "Wisdom",
      isFavorite: false
    },
    {
      id: 8,
      text: "Contentment is the greatest wealth; he who knows he has enough is truly rich.",
      author: "Bhutanese Wisdom",
      category: "Contentment",
      isFavorite: false
    }
  ];

  // Available categories
  categories = [
    'All',
    'Happiness',
    'Compassion', 
    'National Philosophy',
    'Environmental Stewardship',
    'Meditation',
    'Community',
    'Wisdom',
    'Contentment'
  ];

  filteredQuotes: Quote[] = [];
  selectedCategory = 'All';
  searchQuery = '';

  ngOnInit() {
    this.filteredQuotes = [...this.allQuotes];
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    this.applyFilters();
  }

  onSearchChange(event: any) {
    this.searchQuery = event.target.value;
    this.applyFilters();
  }

  applyFilters() {
    this.filteredQuotes = this.allQuotes.filter(quote => {
      const matchesCategory = this.selectedCategory === 'All' || quote.category === this.selectedCategory;
      const matchesSearch = !this.searchQuery || 
        quote.text.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        quote.author.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        quote.category.toLowerCase().includes(this.searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }

  toggleFavorite(quote: Quote) {
    quote.isFavorite = !quote.isFavorite;
  }

  getFavoriteQuotes(): Quote[] {
    return this.allQuotes.filter(quote => quote.isFavorite);
  }

  getFeaturedQuote(): Quote {
    return this.allQuotes[Math.floor(Math.random() * this.allQuotes.length)];
  }
}