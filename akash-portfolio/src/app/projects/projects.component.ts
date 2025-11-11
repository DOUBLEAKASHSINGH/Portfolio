import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  ngOnInit(): void {
    AOS.init();
  }

  projects = [
    {
      title: 'DATA GENIE',
      description: 'An intelligent data analysis platform that automates data cleaning, visualization, and insights generation using machine learning algorithms.',
      image: 'assets/projects/data-genie.jpg',
      techStack: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit', 'Plotly'],
      achievements: ['Automated data preprocessing', 'Interactive dashboards', 'ML model recommendations'],
      githubUrl: 'https://github.com/akashsingh/data-genie',
      demoUrl: 'https://data-genie-demo.vercel.app',
      metrics: 'Processed 10k+ datasets'
    },
    {
      title: 'NIRF Analysis Tool',
      description: 'Comprehensive analysis tool for National Institutional Ranking Framework data, providing insights into educational institutions performance.',
      image: 'assets/projects/nirf-analysis.jpg',
      techStack: ['Python', 'Django', 'PostgreSQL', 'Chart.js', 'Pandas'],
      achievements: ['Real-time ranking analysis', 'Comparative studies', 'Data visualization'],
      githubUrl: 'https://github.com/akashsingh/nirf-analysis',
      demoUrl: 'https://nirf-analysis-demo.vercel.app',
      metrics: 'Analyzed 1000+ institutions'
    },
    {
      title: 'SocialApp',
      description: 'Full-stack social media application with real-time messaging, post sharing, and user interaction features.',
      image: 'assets/projects/socialapp.jpg',
      techStack: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Express'],
      achievements: ['Real-time messaging', 'Scalable architecture', 'User authentication'],
      githubUrl: 'https://github.com/akashsingh/socialapp',
      demoUrl: 'https://socialapp-demo.vercel.app',
      metrics: '1000+ active users'
    },
    {
      title: 'Sentiment Analysis Engine',
      description: 'Advanced NLP-based sentiment analysis tool for social media posts and customer reviews using deep learning models.',
      image: 'assets/projects/sentiment-analysis.jpg',
      techStack: ['Python', 'TensorFlow', 'NLTK', 'Flask', 'React'],
      achievements: ['95% accuracy', 'Multi-language support', 'Real-time processing'],
      githubUrl: 'https://github.com/akashsingh/sentiment-analysis',
      demoUrl: 'https://sentiment-analysis-demo.vercel.app',
      metrics: 'Analyzed 1M+ texts'
    },
    {
      title: 'Internship Management System',
      description: 'Complete internship tracking and management system for educational institutions with automated matching algorithms.',
      image: 'assets/projects/internship-system.jpg',
      techStack: ['Angular', 'Spring Boot', 'MySQL', 'JWT', 'Docker'],
      achievements: ['Automated matching', 'Progress tracking', 'Reporting system'],
      githubUrl: 'https://github.com/akashsingh/internship-system',
      demoUrl: 'https://internship-system-demo.vercel.app',
      metrics: '500+ internships managed'
    }
  ];
}
