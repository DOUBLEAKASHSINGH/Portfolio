import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  ngOnInit(): void {
    AOS.init();
  }

  languages = [
    { name: 'Python', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'Java', level: 80 },
    { name: 'C++', level: 75 },
    { name: 'SQL', level: 85 }
  ];

  frameworks = [
    { name: 'React', level: 85 },
    { name: 'Angular', level: 80 },
    { name: 'Node.js', level: 80 },
    { name: 'Django', level: 75 },
    { name: 'Express.js', level: 75 }
  ];

  tools = [
    { name: 'Git', level: 90 },
    { name: 'Docker', level: 70 },
    { name: 'AWS', level: 65 },
    { name: 'MongoDB', level: 80 },
    { name: 'PostgreSQL', level: 75 }
  ];

  expertise = [
    'Machine Learning',
    'Data Analysis',
    'Web Development',
    'Algorithm Design',
    'System Design',
    'Database Management'
  ];
}
