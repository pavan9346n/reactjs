import React, { Component } from "react";
// import'../App.css'

class Header extends Component {
constructor(){
super();
this.state = {

     cources: [
      { name: "All Courses" },
      { name: "Corporate Training" },
      { name: "Placements"},
      { name: "Internship"},
      { name: "Reviews"},
      { name: "Blogs" },
    ]
  };
}
 

  render() {
    
    

    return (
      <header className="header">
        <section className="logo-section">
          <img
            src="https://www.achieversit.com/assets/images/logo-white.png"
            alt="Achievers IT"
            className="logo"
          />
        </section>
        <div className="nav">
          <ul className="nav-list">
            {this.state.cources.map((corse, index) => (
              <li key={index} className="nav-item">
                <a href='#' className="nav-link">{corse.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;

