import React from 'react';

function Footer(props) {
    return (
        <section className={"my-5 bg-secondary"}>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <a target="_blank" rel='noopener noreferrer' href="https://www.github.com/jesusmanteca/">GitHub</a> 
                    </div>
                    <div className="col-sm">
                      <a target="_blank" rel='noopener noreferrer' href="https://www.linkedin.com/in/jesus-manteca">LinkedIn</a>
                    </div>
                    <div className="col-sm">
                      <a target="_blank" rel='noopener noreferrer' href="https://www.instagram.com/middleclasssocialite/">Instagram</a>
                    </div>
                </div>
            </div>
            
        </section>
        
      );
}

export default Footer;

// THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio