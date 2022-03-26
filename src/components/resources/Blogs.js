import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import SocialFollow from "../social/SocialFollow";
import ScrollToTop from "../ScrollToTop";
import img1 from "./pl1.jpg";
import img2 from "./pl2.jpg";
import img3 from "./pl3.jpg";

// import { Link } from "react-router-dom";
// import TabComponent from "./TabComponent";

export default function Blog() {
  // const mTop = {
  //   marginTop: "3%",
  // };

  const details = [
    {
      id: 1,
      title: "Personal Loan is Your Friend in Need",
      img: img1,
      text: "Availing a Personal Loan is an affordable solution to manage your unplanned expenses and emergencies. ",
      link: "/Blog1",
    },
    {
      id: 2,
      title: "Six important things to you should check before availing Personal Loan",
      img: img2,
      text: "Personal loan is an easy way to meet your money requirement during an emergency or there is an unplanned expense.",
      link: "/Blog2",
    },
    {
      id: 3,
      title: "Six ways to improve your credit score",
      img: img3,
      text: "Your credit score is a very important parameter for any lender, whether a bank, NBFC or any lending agency, to decide whether they can lend your loan or not.",
      link: "/Blog3",
    },
  ];

  // const [detail, setDetail] = useState();
  // const [searchVal, setSearchVal] = useState("");
  // const [searchSuccess, setSearchSuccess] = useState(false);
  // const handleChange = (e) => {
  //   setSearchVal(e.target.value);
  // };
  // const handleSearchSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(searchVal);
  //   setSearchVal("");
  //   var detail = details.filter(
  //     (d) => d.title.toLowerCase() === searchVal.toLowerCase()
  //   );
  //   if (detail.length > 0) {
  //     setDetail(detail);
  //     setSearchSuccess(true);
  //   } else {
  //     alert("Not found :(");
  //   }
  // };

  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Jumbotron className="container-fluid">
        <h1>Blogs</h1>
        <p style={{ width: "80%", margin: "40px  auto 2% auto" }}>
      
        </p>
        {/* {searchSuccess && (
          <Card className="mb-3" style={{ width: "50%", margin: "auto" }}>
            <Card.Body>
              <Card.Img variant="bottom" src={detail[0].img} />
              <Card.Title className="mt-3">{detail[0].title}</Card.Title>
              <Card.Text>{detail[0].text}</Card.Text>
              <Card.Link href={`${detail[0].link}`}>
                <Link to={`${detail[0].link}`}>Read More</Link>
              </Card.Link>
            </Card.Body>
          </Card>
        )} */}
        {/* <div className="marginTopLearn">
          <form onSubmit={handleSearchSubmit}>
            <InputGroup
              className="mb-3"
              style={{ width: "40%", marginLeft: "auto" }}
            >
              <FormControl
                placeholder="Search"
                aria-label="Search Content"
                aria-describedby="basic-addon2"
                value={searchVal}
                onChange={handleChange}
              />
              <Button
                type="submit"
                variant="outline-secondary"
                id="button-addon2"
                style={{ marginLeft: "-2px" }}
              >
                Submit
              </Button>
            </InputGroup>
          </form>
        </div> */}
        {/* <TabComponent activeTab="learn" details={details} /> */}
        <Row xs={1} md={2} lg={3} className="g-4">
          {details.map((c, i) => (
            <Col key={i}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Img variant="bottom" src={c.img} />
                  <Card.Title className="mt-3">{c.title}</Card.Title>
                  <Card.Text>{c.text}</Card.Text>
                  <Card.Link href={`${c.link}`}>
                    Read More
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Jumbotron>
      <Footer />
    </div>
  );
}
