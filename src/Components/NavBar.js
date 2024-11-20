import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../Images/mariam.jpeg';
import { FacebookOutlined, GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { Link } from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  
  return (
    <Router>
      <Navbar id="navbar" expand="md" className={scrolled ? "scrolled" : "" }>
        <Container className="contents" style={{ display: "flex"}}>
          <Navbar.Brand href="/" className="logo" to="/" >
            <img src={logo} alt="Logo" style={{ paddingTop: "20px"}}/>
          </Navbar.Brand>          
          <Navbar.Collapse id="basic-navbar-nav" style={{ display: "flex", marginLeft: "300px"}} >
            <Nav className="ms-auto" style={{ paddingTop: "20px"}}>
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text" style={{marginLeft: "80px"}}>
              <div className="social-icon">
                <Link to="https://github.com/M-Nyaboke">
                  <GithubOutlined 
                    style=
                    {{ 
                      fontSize: "30px", 
                      color: "#fff", 
                      borderRadius: "50px",
                      marginRight: "10px"
                    }} 
                  />
                </Link>
                <Link to="https://www.facebook.com/profile.php?id=61556092657740">
                  <FacebookOutlined 
                    style=
                    {{ 
                      fontSize: "30px", 
                      color: "#fff", 
                      borderRadius: "50px",
                      marginRight: "10px"
                    }} 
                  />
                </Link>
                <Link to="#/">
                  <LinkedinOutlined 
                    style=
                    {{ 
                      fontSize: "30px", 
                      color: "#fff", 
                      borderRadius: "50px",
                      marginRight: "10px"
                    }} 
                  />
                </Link>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let's Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
         
        </Container>
      </Navbar>
    </Router>
  )
}