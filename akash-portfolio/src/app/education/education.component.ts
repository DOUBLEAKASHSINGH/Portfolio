import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  ngOnInit(): void {
    AOS.init();
  }

  education = [
    {
      degree: 'M.Tech in Computer Science',
      institution: 'Indian Institute of Technology (IIT)',
      year: '2023 - Present',
      cgpa: '8.5/10',
      courses: ['Advanced Algorithms', 'Machine Learning', 'Data Structures', 'Computer Networks']
    },
    {
      degree: 'B.Tech in Computer Science',
      institution: 'National Institute of Technology (NIT)',
      year: '2019 - 2023',
      cgpa: '8.7/10',
      courses: ['Data Structures & Algorithms', 'Database Systems', 'Web Technologies', 'Operating Systems']
    },
    {
      degree: 'Higher Secondary Certificate',
      institution: 'Central Board of Secondary Education',
      year: '2017 - 2019',
      cgpa: '92%',
      courses: ['Mathematics', 'Physics', 'Chemistry', 'Computer Science']
    }
  ];
}
