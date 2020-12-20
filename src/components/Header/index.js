import React from 'react';
import About from '../About';

function Header(props) {
    return (
        <section className={"my-5"}>
            <div className="container">
                <div className="row">
                    <div onClick={() => props.setCurrentPage('about')} className="col-sm">
                    About
                    </div>
                    <div onClick={() => props.setCurrentPage('portfolio')} className="col-sm">
                    Portfolio
                    </div>
                    <div onClick={() => props.setCurrentPage('contact')} className="col-sm">
                    Contact
                    </div>
                </div>
            </div>
            
        </section>
        
      );
}

export default Header;

// THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio