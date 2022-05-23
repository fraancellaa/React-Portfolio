import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import profileImage from "../../assets/profile-image.jpeg"

function About() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6 mt-5 pt-5 offset-md-1'>
                    <p>Hello, I'm Francella! I am a full stack web developer. I have knowledge of front-end and back-end programming.
                        <p>I enjoy learning new technologies as I adapt easily to new software.</p>
                    </p>
                </div>
                <div className='col-4 mt-5 pt-5 offset-md-1'>
                    <img src={profileImage} className="img-fluid" />
                </div>
            </div>
        </div>
    );
}

export default About;