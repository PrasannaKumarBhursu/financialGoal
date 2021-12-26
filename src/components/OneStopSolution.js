import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
// import Button from 'react-bootstrap/Button'
import CardDeckOneStopSol from './CardDeckOneStopSol';


export default function OneStopSolution() {
    return (
        <div >
            <Jumbotron className="container-fluid removePadd " style={{ marginTop: '0' }}>
                <h1 className="sectionHeading" style={{ marginTop: '0' }}>One Stop Solution</h1> <h4 className="sectionParagraph"> Learn, Invest and Grow</h4>
                <p>
                    {/* <Button variant="primary">Learn more</Button> */}
                </p>
                <CardDeckOneStopSol />
            </Jumbotron>
        </div>
    )
}