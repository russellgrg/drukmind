// cultural-insights.component.ts
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-cultural-insights',
  standalone: true,
  imports: [RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './cultural-insights.html',
  styleUrls: ['./cultural-insights.scss']
})
export class CulturalInsightsComponent { }