import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EducationComponent } from './components/education/education.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/nav/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    EducationComponent,
    ContactComponent
  ],
  template: `
    <app-navbar></app-navbar>
    <main class="pt-16"> <!-- offset for sticky navbar -->
      <app-hero></app-hero>
      <app-about></app-about>
      <app-skills></app-skills>
      <app-experience></app-experience>
      <app-projects></app-projects>
      <app-education></app-education>
      <app-contact></app-contact>
      <footer class="text-center py-10 text-sm text-gray-500">
        © {{year}} Syed Mahmood Ali
      </footer>
    </main>
  `
})
export class AppComponent {
  year = new Date().getFullYear();
}
