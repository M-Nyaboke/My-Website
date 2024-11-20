import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../Images/dashboard.png";
import projImg2 from "../Images/gallery.png";
import projImg3 from "../Images/quiz.png";
import projImg4 from "../Images/password.png";
import projImg5 from "../Images/submit.png";
import projImg6 from "../Images/coin.png";
import colorSharp2 from "../Images/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  
  const projects = [
    {
      title: "Miriam's Dashboard",
      description: "Design & Development",
      imgUrl: projImg1,
      Link: "href=https://dashboard-admin-ruby.vercel.app/",
    },
    {
      title: "Miriam's Gallery",
      description: "Design & Development",
      imgUrl: projImg2,
      Link: "https://image-gallery-kohl-ten.vercel.app/"
    },
    {
      title: "Quiz App",
      description: "Design & Development",
      imgUrl: projImg3,
      Link: "https://quiz-app-tau-two.vercel.app/"
    },
    {
      title: "Password Vallidtor",
      description: "Checks the strength of your password",
      imgUrl: projImg4,
      Link: "https://password-vallidator.vercel.app/"
    },
    {
      title: "Login",
      description: "Fill the form to login to the website",
      imgUrl: projImg5,
      Link: "https://submission-form-b7kd.vercel.app/"
    },
    {
      title: "Coin Flipping",
      description: "Click the button to flip the coin",
      imgUrl: projImg6,
      Link: "href=https://coin-flipping-ljgx.vercel.app/"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and 
                  typesetting industry. Lorem Ipsum has been the industry's 
                  standard dummy text ever since the 1500s, when an unknown 
                  printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">                  
                  <Tab.Content 
                    id="slideInUp" 
                    className={isVisible ? "animate__animated animate__slideInUp" : ""}
                    
                  >
                    <Tab.Pane eventKey="first">
                      <Row  className="projectw" style={{ flex: "wrap"}}>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}