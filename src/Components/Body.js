import React, { Component } from "react";

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {

            papularcourses: [
                { nameOfCourseName: 'ANGULAR DEVELOPMENT COURSE', courseDetails: 'Achievers IT React JS Certification Course in Bangalore. We teach you detailed explanations of JSX, Unidirectional data flow .....' },
                { nameOfCourseName: 'REACT DEVELOPMENT COURSE', courseDetails: 'Achievers IT React JS Certification Course in Bangalore. We teach you detailed explanations of JSX, Unidirectional data flow .....' },
                { nameOfCourseName: 'MEAN STACK DEVELOPMENT COURSE', courseDetails: 'Achievers IT React JS Certification Course in Bangalore. We teach you detailed explanations of JSX, Unidirectional data flow .....' },
                { nameOfCourseName: 'MERN STACK DEVELOPMENT COURSE', courseDetails: 'Achievers IT React JS Certification Course in Bangalore. We teach you detailed explanations of JSX, Unidirectional data flow .....' },
                { nameOfCourseName: 'WEB  DEVELOPMENT COURSE', courseDetails: 'Achievers IT React JS Certification Course in Bangalore. We teach you detailed explanations of JSX, Unidirectional data flow .....' },
                { nameOfCourseName: 'DIGITALMARKETING COURSE', courseDetails: 'Achievers IT React JS Certification Course in Bangalore. We teach you detailed explanations of JSX, Unidirectional data flow .....' },
                { nameOfCourseName: 'REACT NATIVE DEVELOPMENT COURSE', courseDetails: 'Achievers IT React JS Certification Course in Bangalore. We teach you detailed explanations of JSX, Unidirectional data flow .....' },
                { nameOfCourseName: 'IONIC DEVELOPMENT COURSE', courseDetails: 'Achievers IT React JS Certification Course in Bangalore. We teach you detailed explanations of JSX, Unidirectional data flow .....' },
            ],
            recentAdditions: [
                { recentCoursename: 'USER INTERFACE DEVELOPMENT COURSE', recentCoursDetails: 'UI development course in bangalore, you will  as CSS3, CSS, HTML, JavaScript, Bootstrap, HTML5, JQuery. Complete your dream about working for top MNC Companies. Below are the Training institute in Bangalore' },
                { recentCoursename: 'VUEJS DEVELOPMENT COURSE', recentCoursDetails: 'UI development course in bangalore, you will  as CSS3, CSS, HTML, JavaScript, Bootstrap, HTML5, JQuery. Complete your dream about working for top MNC Companies. Below are the Training institute in Bangalore' },
                { recentCoursename: 'WORD PRESS DEVELOPMENT COURSE', recentCoursDetails: 'UI development course in bangalore, you will  as CSS3, CSS, HTML, JavaScript, Bootstrap, HTML5, JQuery. Complete your dream about working for top MNC Companies. Below are the Training institute in Bangalore' },
                { recentCoursename: 'PHYTHON DEVELOPMENT COURSE', recentCoursDetails: 'UI development course in bangalore, you will  as CSS3, CSS, HTML, JavaScript, Bootstrap, HTML5, JQuery. Complete your dream about working for top MNC Companies. Below are the Training institute in Bangalore' }
            ]
        }
    }

    render() {
        return (
            <main>
                <section>
                    <img src="https://tse1.mm.bing.net/th?id=OIP.Jiqup7Tn5q5NaJSXlt1kSQHaB8&pid=Api&P=0&h=180"
                        alt="reactjs-img" height="300px" width="100%" />
                </section>
                <section className="knowmore-maincontainer">
                    <div className="knowmore-container">
                        <p>Become a <br /> <b>UI Developer</b></p>
                        <p id="para">Know More</p>
                    </div>
                    <div className="knowmore-container">
                        <p>Become a <br /> <b>Angular Developer</b></p>
                        <p id="para">Know More</p>
                    </div>
                    <div className="knowmore-container">
                        <p>Become a <br /> <b>ReactJS Developer</b></p>
                        <p id="para">Know More</p>
                    </div>

                </section>
                <section className="trendingcourses-maincon">
                    <h1>TRENDING COURSES</h1>
                    <section className="trendingcourses-container">
                        {this.state.papularcourses.map(trending => (
                            <section className="trendingcourses-indcont">
                                <h2 style={{ backgroundColor: "lightblue" }}>{trending.nameOfCourseName}</h2>
                                <p >{trending.courseDetails}</p>
                                <hr />
                                <p>Reviews</p>
                            </section>

                        ))}
                    </section>
                </section>
                <section className="trendingcourses-maincon">
                    <h1>RECENT ADDITIONS</h1>
                    <section className="trendingcourses-container">
                        {this.state.recentAdditions.map(recent => (
                            <section className="trendingcourses-indcont">
                                <h2 style={{backgroundColor:'lightgreen'}}>{recent.recentCoursename}</h2>
                                <p >{recent.recentCoursDetails}</p>
                                <hr />
                                <p>Reviews</p>
                            </section>

                        ))}
                    </section>
                </section>




            </main>
        )
    }
}
export default Body;