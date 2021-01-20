import React from 'react';
import budgetImage from "../../assets/cover/budget.jpg";
import newsOnTheBalance from "../../assets/cover/newsOnTheBalance.jpg";
import workDayScheduler from "../../assets/cover/workDayScheduler.jpg";
import runBuddy from "../../assets/cover/runBuddy.jpg";
import privateReserve from "../../assets/cover/privateReserve.jpg";
import photoPort from "../../assets/cover/photoPort.jpg";
import bookSearch from "../../assets/cover/bookSearchImg.png"

function Porfolio() {
    return (
        <section className={"my-5"}>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <a href="https://stormy-thicket-95921.herokuapp.com/" target="_blank" rel="noreferrer">
                        <img src={privateReserve} className="my-2" style={{ width: "100%" }} alt="Run Buddy" />
                        </a>
                    </div>
                    <div className="col-sm">
                        <a href="https://github.com/jesusmanteca/Book-Search-Engine" target="_blank" rel="noreferrer">
                        <img src={bookSearch} className="my-2" style={{ width: "100%" }} alt="Run Buddy" />
                        </a>
                    </div>
                    <div className="col-sm">
                        <a href="https://github.com/jesusmanteca/Budget-Tracker" target="_blank" rel="noreferrer">
                        <img src={budgetImage} className="my-2" style={{ width: "100%" }} alt="budgettracker" />
                        </a>
                    </div>
                    <div className="col-sm">
                        <a href="https://github.com/jesusmanteca/News-On-The-Balance" target="_blank" rel="noreferrer">
                        <img src={newsOnTheBalance} className="my-2" style={{ width: "100%" }} alt="news on the balance" />
                        </a>
                    </div>  
                </div>
                <div className="row">
                    <div className="col-sm">
                        <a href="https://github.com/jesusmanteca/Work-Day-Scheduler" target="_blank" rel="noreferrer">
                        <img src={workDayScheduler} className="my-2" style={{ width: "100%" }} alt="Work Day Scheduler" />
                        </a>
                    </div>
                    <div className="col-sm">
                        <a href="https://github.com/jesusmanteca/run-buddy" target="_blank" rel="noreferrer">
                        <img src={runBuddy} className="my-2" style={{ width: "100%" }} alt="Run Buddy" />
                        </a>
                    </div>
                    <div className="col-sm">
                        <a href="https://github.com/jesusmanteca/photo-port" target="_blank" rel="noreferrer">
                        <img src={photoPort} className="my-2" style={{ width: "100%" }} alt="portfolio" />
                        </a>
                    </div>
                </div>
            </div>
            
        </section>
        
      );
}

export default Porfolio;

// THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio