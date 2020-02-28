import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './Courses.css';
import Course from "../Course/Course";

class Courses extends Component {
    state = {
        courses: [
            {id: 1, title: 'Angular - The Complete Guide'},
            {id: 2, title: 'Vue - The Complete Guide'},
            {id: 3, title: 'PWA - The Complete Guide'}
        ]
    };

    courseClickHandler = (id) => {
        console.log("clicked course: " + id);
    };

    render() {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map(course => {
                            return (
                                <Link to={'/courses/' + course.id} key={course.id}>
                                    <article className="Course"
                                             onClick={() => this.courseClickHandler(course.id)}>
                                        {course.title}
                                    </article>
                                </Link>

                                // <Course className="Course"
                                //         key={course.id}
                                //         id={course.id}
                                //         title={course.title}
                                //         clicked={() => this.courseClickHandler(course.title)}/>
                            )
                        })
                    }
                </section>
            </div>
        );
    }
}

export default Courses;