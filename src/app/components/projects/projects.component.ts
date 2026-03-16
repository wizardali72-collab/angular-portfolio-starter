import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  activeModal: string | null = null;

  openModal(project: string) {
    this.activeModal = project;
  }

  closeModal() {
    this.activeModal = null;
  }
}
