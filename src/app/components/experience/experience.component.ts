import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  title: string;
  company: string;
  companyUrl: string;
  logo: string;
  start: string;   // YYYY-MM
  end: string;     // YYYY-MM or 'Present'
  shortDescription: string;
  fullDescription: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {
  activeModal: Experience | null = null;

  experiences: Experience[] = [
    {
      title: 'Jr Software Engineer',
      company: 'Caliber Technologies',
      companyUrl: 'https://www.caliber.tech',
      logo: 'assets/caliber.png',
      start: '2024-11',
      end: 'Present',
      shortDescription: 'Worked on instrument connectivity in Caliber EMpro and WMS.',
      fullDescription: `
        As a Junior Software Engineer at Caliber Technologies, I was responsible for 
        enhancing the Caliber EMpro platform by integrating both file-based and port-based 
        instrument connectivity. This required a deep understanding of hardware-software 
        communication protocols and real-world problem solving.  
        
        Additionally, I contributed to **WMS (Warehouse Management System)** by implementing 
        robust instrument connectivity solutions, ensuring seamless data exchange between 
        instruments and enterprise applications.  

        Key achievements:
        - Successfully added **file-based & port-based instrument connectivity** to Caliber EMpro.
        - Enhanced instrument data workflows in WMS for better reliability and scalability.
        - Worked closely with senior engineers to optimize performance and troubleshoot complex issues.
      `
    },
    {
      title: 'Trainee Software Engineer',
      company: 'Caliber Technologies',
      companyUrl: 'https://www.caliber.tech',
      logo: 'assets/caliber.png',
      start: '2024-04',
      end: '2024-10',
      shortDescription: 'Focused on upskilling and learning instrument connectivity concepts.',
      fullDescription: `
        During my trainee period, I dedicated myself to **upskilling and understanding business processes**, 
        while getting hands-on exposure to the technical stack.  

        I learned how instrument connectivity works within the **Caliber EMpro platform**, and participated in 
        partially implementing connectivity features in real projects.  

        Key learnings & contributions:
        - Understood core **instrument integration workflows**.
        - Contributed to partial implementation of instrument connectivity in **Caliber EMpro**.
        - Built a strong foundation in C#, ASP.NET, Angular, and ABP frameworks.
        - Gained exposure to real-world enterprise application workflows and collaboration with senior developers.
      `
    }
  ];

  getDuration(start: string, end: string): string {
    const startDate = new Date(start + '-01');
    const endDate = end === 'Present' ? new Date() : new Date(end + '-01');

    let months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
    months += endDate.getMonth() - startDate.getMonth();

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    let result = '';
    if (years > 0) result += `${years} yr${years > 1 ? 's' : ''} `;
    if (remainingMonths > 0) result += `${remainingMonths} mo${remainingMonths > 1 ? 's' : ''}`;
    return result.trim() || '0 months';
  }

  openModal(exp: Experience) {
    this.activeModal = exp;
  }

  closeModal() {
    this.activeModal = null;
  }
}
