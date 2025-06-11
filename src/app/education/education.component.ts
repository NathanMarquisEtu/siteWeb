import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngFor
import { EducationItem, EducationService } from './education.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  public educationItems: EducationItem[] = [];

  constructor(private educationService: EducationService) {}

  ngOnInit(): void {
    this.educationItems = this.educationService.getEducationHistory();
  }
}
