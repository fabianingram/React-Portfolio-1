import React from 'react';

function Header(props) {
    return (
        <section className={"my-5 bg-light text-dark"}>
            <div className="container ">
                <div className="row">
                    <div onClick={() => props.setCurrentPage('about')} className="col-sm hovering">
                        About
                    </div>
                    <div onClick={() => props.setCurrentPage('portfolio')} className="col-sm hovering">
                        Portfolio
                    </div>
                    <div onClick={() => props.setCurrentPage('contact')} className="col-sm hovering">
                        Contact
                    </div>
                    <div onClick={() => props.setCurrentPage('resume')} className="col-sm hovering">
                        Resume
                    </div>
                </div>
            </div>
            
        </section>
        
      );
}

export default Header;

// THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio