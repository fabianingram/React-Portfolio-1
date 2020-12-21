import React from 'react';
import resume from '../../assets/cover/Jesus_Manteca.jpg';

function Resume() {
    return (
        <section className={"my-5"}>
            <div className="container">
                <div className="row">
                <div className="col-sm">
                        <a href="https://www.linkedin.com/in/jesus-manteca/" target="_blank" rel="noreferrer">
                        <img src={resume} className="my-2" style={{ width: "100%" }} alt="resume" />
                        </a>
                    </div>
                </div>
            </div>
            
        </section>
        
      );
}

export default Resume;

