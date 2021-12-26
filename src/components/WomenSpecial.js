import React from 'react';
import { Figure } from "react-bootstrap";
import { Button }from "react-bootstrap";
import CardWomenSpecial from './CardWomenSpecial';
import { Link } from 'react-router-dom';

export default function WomenSpecial() {
    return (
        <div >
            <Figure className="container-fluid women-bg text-center ">
                <h1 className="text-center sectionHeading" id="WomenSpecial">
                    Women Special
                </h1>
                <Figure.Image
                    width={701}
                    height={850}
                    alt="171x180"
                    src="WomenSpecialMain.jpg"
                    className='m-auto'
                />
                <br></br>
                <p className="womenCaption h5 sectionParagraph" style={{width:"80%",margin:"2% auto"}}>
                    Nishkaera offers specialised financial services to working women with the aim to enable them to achieve their financial freedom through mix of learning, seasoned advice and a platform to buy women-oriented financial products.
                </p>

                 <Link to="/WomenSpecialHome"><Button className="btn btn-primary mb-5">Read More</Button></Link> 
                <CardWomenSpecial />
            </Figure>
        </div>
    );
}