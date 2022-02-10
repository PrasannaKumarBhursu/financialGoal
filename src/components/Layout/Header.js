import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Header.css";
import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { Link, NavLink, useHistory } from "react-router-dom";
import { AppContext } from "../../context/AppContext";


export default function Header() {
  const { user, dispatch } = useContext(AppContext);
  const [loginuser, setLoginuser] = useState(null);
  const history = useHistory();
  const pathname = window.location.pathname;

  const Styles = {
    color: "#3AD4AF",
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    history.push("/");
  };
  useEffect(() => {
    setLoginuser(user);
  }, [user]);

  return (
    <Navbar
      style={{
        backgroundColor: "white",
      }}
      collapseOnSelect
      expand="xl"
    >
      {/* <Navbar.Brand href="#home">Nishka Era</Navbar.Brand> */}
      <Navbar>
        <Navbar.Brand>
          <Link style={Styles} to="/">
            <img
              src="/NishkaEra_Logo.png"
              width="auto"
              height="70"
              className="d-inline-block align-top align-items-center nav-img"
              alt="Nishka Era logo"
            />
          </Link>
        </Navbar.Brand>
      </Navbar>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="navbar-items">
        <Nav className="navigationBar">
          {/* <Nav.Link href="#"><Link style={Styles} to="/" ></Link></Nav.Link> */}

          {/* <Nav.Link active={pathname.startsWith("/OurStory")} href="/OurStory">
            Our Story
          </Nav.Link> */}

          <NavDropdown title="Products" id="collasible-nav-dropdown">
            <NavDropdown.Item style={Styles} href="/FixedDeposits">
                  Fixed Deposit - Grow and Protect<br/> Your Capital
              </NavDropdown.Item>
              <NavDropdown.Item style={Styles} href="/PersonalLoan">
                  Personal Loan
              </NavDropdown.Item>
          </NavDropdown>

          <Nav.Link
            active={pathname.startsWith("/#FinancialPulse")}
            href="/#FinancialPulse"
          >
            Financial Pulse{" "}
          </Nav.Link>
          <NavDropdown title="Resources" id="collasible-nav-dropdown">
            <NavDropdown.Item style={Styles} href="/Learn">
              Learn
            </NavDropdown.Item>
            {/* <NavDropdown.Item style={Styles} href="/Invest">
                  Invest
              </NavDropdown.Item>
              <NavDropdown.Item style={Styles} href="/Grow">
                  Grow
              </NavDropdown.Item> */}
            {/* <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
          </NavDropdown>
          <Nav.Link
            active={pathname.startsWith("/WomenSpecialHome")}
            href="/#WomenSpecial"
          >
            Women Special
          </Nav.Link>
          <Nav.Link active={pathname.startsWith("/SocialPost")} href="/#Latest">
            Latest
          </Nav.Link>
          <NavDropdown title="Markets" id="collasible-nav-dropdown">
            <NavDropdown.Item style={Styles} href="/IPOWatch">
              IPO Watch
            </NavDropdown.Item>
            {/* <NavDropdown.Item style={Styles} href="/ResultsCorner">
            
                  Results Corner
              
              </NavDropdown.Item> */}
          </NavDropdown>
          <Nav.Link active={pathname.startsWith("/Webinar")} href="/Webinar">
            Webinar
          </Nav.Link>
          {/* <Nav.Link active={pathname.startsWith('/Login')} href="/Login">Login</Nav.Link> */}
        </Nav>
        <Nav>
          {loginuser ? (
            <>
              <div className="name-holder" >
                <h5 style={{ margin: "0px", color: "#3AD4AF" }}>Welcome  {loginuser.name}</h5>
              </div>
              <Button variant="outline-danger" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (

            <>

              <Nav.Link href="/login">Login</Nav.Link>
            </>
          )}
        </Nav>
        {/* <Nav className="rightNavProfile">
                        <Nav.Link href="#deets" >Login</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Get Registered
                        </Nav.Link>
                    </Nav> */}
      </Navbar.Collapse>
    </Navbar>
  );
}
