import React, { Component } from 'react';


class Footer extends Component {
  constructor() {
    super();
    this.state = {
      companyLinks: [
        { name: 'Home' },
        { name: 'Placements' },
        { name: 'Corporate Training' },
        { name: 'Contact Us' }
      ],
      trendingCourses: [
        'UI Development Course',
        'Angular JS Course',
        'React JS Course',
        'Digital Marketing Course',
        'Python Course'
      ],
      contactInfo: {
        address: '#63, 1st Floor, 16th Main, 8th Cross, BTM 1st Stage, Bangalore, India - 560029',
        phone: 'India : +91 8431-040-457',
        email: 'info@achieversit.com'
      }
    };
  }


  render() {


    return (
      <footer className="footer">
        <section className="footer-logo">
          <img
            src="https://www.achieversit.com/assets/images/logo-white.png"
            alt="Achievers IT Logo"
            height="55px"
          />
          <p>
            AchieversIT - Provides a wide group of opportunities for freshers and experienced candidates who can
            develop their skills and build their career opportunities across multiple companies.
          </p>
        </section>
        <section className="footer-links">
          <h3>COMPANY</h3>
          <ul>
            {this.state.companyLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </section>
        <section className="footer-courses">
          <h3>TRENDING COURSES</h3>
          <ul>
            {this.state.trendingCourses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </section>
        <section className="footer-contact">
          <h3>CONTACT INFO</h3>
          <p>{this.state.contactInfo.address}</p>
          <p>{this.state.contactInfo.phone}</p>
          <p>{this.state.contactInfo.email}</p>
        </section>
      </footer>
    );
  }
}

export default Footer;
