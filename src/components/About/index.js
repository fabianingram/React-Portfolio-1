import React from 'react';
import coverImage from "../../assets/cover/cover-image.JPG";

function About() {
    return (
        <section className="my-5">
            <h1 id="about">Who am I? Why am I here?</h1>
            <img src={coverImage} className="my-2" style={{ width: "20%" }} alt="cover" />
        </section>
      );
    
}

export default About;