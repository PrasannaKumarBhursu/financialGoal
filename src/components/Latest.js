import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CardDeck, Col, Jumbotron, Row, Spinner } from 'react-bootstrap'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Latest() {
    const [latest, setlatest] = useState(null)

    const fetchlatest = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_APIURL}/api/latest/`)
           
            setlatest(res.data.data)

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchlatest()
    }, [])

    return (
        <div className="container-latest" id="Latest" >
            <Jumbotron className="container-fluid" style={{ backgroundImage: "url(/LatestBG.jpg)", opacity: 0.8 }} >

                <h1 className="sectionHeading" style={{ color: "black", fontWeight: "bold", marginTop: "1.5rem" }}> Latest</h1>
                <h3 className="sectionParagraph" style={{ color: "black", textShadow: "white -2px -1px" }}>Get the latest news and developments on financial matters here.</h3>
                <div className="column">
                   
 
                        <Row>
                        {latest?latest.map(l=>
                            <Col lg={6} style={{marginTop:"30px"}} >
                                <Card  >
                                    <Card.Body>
                                        <Card.Title> <Card.Link href={l.link}>{l.title}</Card.Link> </Card.Title>
                                        <Card.Text>
                                            {l.descp}
                                        </Card.Text>
                                      
                                    </Card.Body>
                                </Card>

                            </Col>):<div style={{display:'flex',justifyContent:"center"}}><Spinner animation="border" /></div>}
                            
                          
                        </Row> 
                        {/* <CardDeck >
                            <Card >
                                <Card.Body>
                                    <Card.Title> <Card.Link href="https://economictimes.indiatimes.com/news/international/business/imf-forecasts-6-global-growth-this-year-as-economies-reopen/articleshow/84793828.cms?utm_source=ETTopNews&utm_medium=HP&utm_campaign=TN&utm_content=23">IMF forecast 6% global growth as economies reopen</Card.Link> </Card.Title>
                                    <Card.Text>
                                        The International Monetary Fund is sharply upgrading its economic outlook
                                    </Card.Text>
                                    <Card.Link href="https://www.business-standard.com/article/pf/covid-impact-itr-filing-deadline-for-fy21-extended-to-sept-30-2021-121052001027_1.html">Read More</Card.Link> 
                                     <Button href="https://www.financialexpress.com/market/dodla-dairy-shares-list-at-over-28-premium-to-ipo-price-stock-makes-strong-market-debut/2279549/">Read More</Button>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Body>
                                    <Card.Title> <Card.Link href="https://www.business-standard.com/article/companies/indigo-q1-net-loss-widens-to-rs-3-174-crore-misses-street-estimates-121072701038_1.html ">IndiGo Q1 net loss widens to Rs 3,174 crore; misses Street estimates  </Card.Link> </Card.Title>
                                    <Card.Text>
                                        The budget carrier's revenue declined 51.6 per cent at Rs 3,006.9 crore during the quarte
                                    </Card.Text>
                                    <Card.Link href="https://economictimes.indiatimes.com/wealth/personal-finance-news/rbi-keeps-repo-rate-unchanged-what-home-loan-auto-loan-personal-loan-borrowers-should-do-now/articleshow/83215165.cms">Read More</Card.Link>
                                     <Button href="https://economictimes.indiatimes.com/news/economy/policy/nirmala-sitharaman-announces-eight-economic-relief-measures-among-others/articleshow/83916894.cms">Read More</Button>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                        <br></br>
                        <CardDeck >
                            <Card>
                                <Card.Body >
                                    <Card.Title><Card.Link href="https://www.business-standard.com/article/companies/byju-s-on-an-acquisition-spree-buys-great-learning-for-600-mn-121072600807_1.html ">Byju's on an acquisition spree, buys Great Learning for $600 mn </Card.Link></Card.Title>
                                    <Card.Text>
                                        Edtech decacorn Byju’s is on an acquisition spree to grow rapidly in India
                                    </Card.Text>
                                 <Card.Link href="https://www.livemint.com/companies/news/kedaara-capital-backed-vijaya-diagnostic-files-ipo-papers-11622965932047.html">Read More</Card.Link> 
                                 <Button href="https://www.financialexpress.com/money/mutual-funds/sachin-bansals-navi-mutual-fund-launches-nifty-50-index-fund-with-lowest-expense-ratio-should-you-invest/2279705/">Read More</Button> 
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Body>
                                    <Card.Title><Card.Link href="https://www.financialexpress.com/market/ipo-news/glenmark-life-sciences-ipo-subscription-update-public-issue-open-full-subscribe-day-1-grey-market-premium/2298550/ ">Glenmark Life Sciences IPO fully subscribed on Day 1;  </Card.Link> </Card.Title>
                                    <Card.Text>
                                        Glenmark Life Sciences initial public offering (IPO) opened today and received a strong response from investors
                                    </Card.Text>
                                    <Card.Link href="https://economictimes.indiatimes.com/wealth/plan/retirement-planning-is-not-just-about-income-and-expenses-6-questions-about-old-age-you-should-ponder/articleshow/83058254.cms">Read More</Card.Link> 
                                    <Button href="https://www-cnbc-com.cdn.ampproject.org/c/s/www.cnbc.com/amp/2021/06/24/credit-suisse-investment-outlook-2021-global-growth.html">Read More</Button> 

                                </Card.Body>
                            </Card>
                        </CardDeck>
                        <br></br>
                        <CardDeck>
                            <Card>
                                <Card.Body >
                                    <Card.Title> LATEST IPO </Card.Title>
                                    <Card.Title>
                                        <Card.Link href="https://www.thehindubusinessline.com/economy/gold-reserves-with-rbi-surged-over-12-times-in-20-years-govt-data/article35562643.ece?homepage=true ">Gold reserves with RBI surged over 12 times in 20 years - Govt Data </Card.Link>
                                    </Card.Title>
                                    <Card.Text>
                                        Around ₹50,000 crore lying as unclaimed deposit with banks, insurance companies
                                    </Card.Text>
                                    <Card.Link href="https://www.livemint.com/companies/news/kedaara-capital-backed-vijaya-diagnostic-files-ipo-papers-11622965932047.html">Read More</Card.Link>
                                    <Button href="https://www.moneycontrol.com/news/business/ipo/clean-science-and-technology-ipo-subscribed-21-on-day-1-7138391.html">Read More</Button>
                                </Card.Body>

                            </Card>
                            <Card>
                                <Card.Body>
                                    <Card.Title>LATEST IPO </Card.Title>
                                    <Card.Title>
                                        <Card.Link href="https://www.moneycontrol.com/news/business/private-equity-firms-to-scramble-for-exit-after-chinas-new-tutoring-rules-7234451.html ">Private equity firms to scramble for exit after China's new tutoring rules </Card.Link>
                                    </Card.Title>
                                    <Card.Text>China's move to ban private tutoring firms from making a profit from teaching core school subjects and raising capital is set to trigger a scramble. </Card.Text>
                                    <Card.Link href="https://economictimes.indiatimes.com/wealth/plan/retirement-planning-is-not-just-about-income-and-expenses-6-questions-about-old-age-you-should-ponder/articleshow/83058254.cms">Read More</Card.Link>
                                    <Button href="https://www.moneycontrol.com/news/business/ipo/gr-infraprojects-ipo-subscribed-36-on-day-1-retail-portion-booked-73-7138671.html">Read More</Button>
                                </Card.Body>


                            </Card>
                        </CardDeck> */}


                   

                    <div className="container-fluid">
                        <br></br>
                        <br></br>
                        <h3 ><Link to="/SocialPost"><Button className="btn btn-primary btn-lg btn-block" >Our Latest Posts</Button></Link></h3>
                        {/* <SocialPostEmbedded /> */}
                    </div>
                </div>

            </Jumbotron>
        </div>
    );
}