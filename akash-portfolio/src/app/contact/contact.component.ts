import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  ngOnInit(): void {
    AOS.init();
  }

  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  submitMessage = '';

  async onSubmit() {
    if (!this.contactForm.name || !this.contactForm.email || !this.contactForm.message) {
      this.submitMessage = 'Please fill in all required fields.';
      return;
    }

    this.isSubmitting = true;
    this.submitMessage = '';

    try {
      // EmailJS configuration - you'll need to set up your own service
      const result = await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: this.contactForm.name,
          from_email: this.contactForm.email,
          subject: this.contactForm.subject,
          message: this.contactForm.message,
          to_email: 'akash@example.com' // Replace with your email
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      this.submitMessage = 'Message sent successfully!';
      this.contactForm = { name: '', email: '', subject: '', message: '' };
    } catch (error) {
      console.error('Email send error:', error);
      this.submitMessage = 'Failed to send message. Please try again.';
    } finally {
      this.isSubmitting = false;
    }
  }

  downloadResume() {
    // Create a link to download the resume
    const link = document.createElement('a');
    link.href = 'assets/resume/akash-singh-resume.pdf'; // Update with actual resume path
    link.download = 'Akash_Singh_Resume.pdf';
    link.click();
  }
}
