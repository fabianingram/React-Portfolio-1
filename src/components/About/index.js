import React from 'react';
import coverImage from "../../assets/cover/cover-image.JPG";

function About(props) {
    return (
        
            <div className="container aboutContainer" >
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
                <div className= "row">
                <p>Hello there. </p>

                    <p>This is the part where I tell you a little about myself, which I intend to do, but forgive me for keeping the more adventurous stories until we meet in real life. </p>

                        <p>The important thing you may want to know about me is that I am part strategist, part creative, and part program developer. These three traits are what allow me to provide top-level solutions for clients. </p>

                        <p>When I lead community management for Miller Lite, several of ConAgra's brands, or Wyndham's La Quinta Hotels, it was with the understanding that each brand has something unique and special to offer its followers. It was not always about being witty, but certainly about always being understanding that people expect brands to feel, to respond, to be relatable.</p>
                        
                        <p>Each platform is a different take on a brand's personality. With the right  brand persona constructs, which I also helped develop, I was able to  understand audiences to amplify each brand's voice and influence. </p>

                </div>
            </div>
      );
    
}

export default About;