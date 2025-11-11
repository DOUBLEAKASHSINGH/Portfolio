import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  ngOnInit(): void {
    AOS.init();
  }

  achievements = [
    {
      title: 'M.Tech Representative',
      organization: 'IIT Student Council',
      period: '2023 - Present',
      description: 'Leading student initiatives, organizing technical events, and representing student interests in academic committees.',
      icon: 'graduation-cap'
    },
    {
      title: 'GATE Qualified',
      organization: 'IIT GATE Examination',
      period: '2023',
      description: 'Successfully qualified GATE examination with a competitive score, demonstrating strong fundamentals in Computer Science.',
      icon: 'award'
    },
    {
      title: 'Aspire Leaders Program',
      organization: 'Microsoft',
      period: '2022',
      description: 'Selected for Microsoft\'s Aspire Leaders Program, focusing on leadership development and technical innovation.',
      icon: 'users'
    },
    {
      title: 'CiPD Selection',
      organization: 'IIT Bombay',
      period: '2022',
      description: 'Selected for Certificate in Programming and Data Structures program at IIT Bombay.',
      icon: 'code'
    },
    {
      title: 'DSA Problem Solver',
      organization: 'LeetCode & CodeChef',
      period: '2021 - Present',
      description: 'Solved over 500 Data Structures and Algorithms problems across various platforms.',
      icon: 'target'
    }
  ];

  hobbies = [
    {
      name: 'Reading',
      description: 'Technical books and research papers',
      icon: 'book-open'
    },
    {
      name: 'Coding',
      description: 'Open source contributions and personal projects',
      icon: 'code'
    },
    {
      name: 'Photography',
      description: 'Capturing moments and landscapes',
      icon: 'camera'
    },
    {
      name: 'Gaming',
      description: 'Strategy games and competitive gaming',
      icon: 'gamepad-2'
    }
  ];
}
