import React from 'react';
import coverImage from "../../assets/cover/cover-image.JPG";

function About() {
    return (
        
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
                    </div>
                    <div className="col-sm">
                        <h1 id="about">Jesus Manteca</h1>
                        <h4 className="text-muted">Bilingual Community Manager / Account Strategist</h4>
                        <h4 className="text-muted">Full Stack Web Developer</h4>
                        <h4 className="text-muted">Hiker</h4>
                    </div>
                </div>
            </div>
      );
    
}

export default About;