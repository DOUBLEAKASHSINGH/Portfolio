import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  ngOnInit(): void {
    AOS.init();
  }

  downloadResume() {
    // Replace with actual resume URL
    const resumeUrl = 'assets/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Akash_Singh_Resume.pdf';
    link.click();
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
