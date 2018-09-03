import React from 'react'
import '../css/about.css'
import { Grid, Row, Col } from 'react-bootstrap'

class About extends React.Component {
  render() {
    return (
      <Grid id="about">
        <Row>
          <div className="about-row">
            <p>Former paralegal/<wbr></wbr>neuroscience researcher turned <br></br><b>front-end web developer</b>. </p>
            <p><em>Languages & Frameworks</em>
            <br></br>
            JavaScript, React, Redux, Node, jQuery, GreenSock, Ruby, Rails, Sinatra, SQL, HTML, CSS, Webpack, Gulp, Bamboo</p>
          </div>
        </Row>
        <Row>
          <div className="links-row">
            <Col md={6}>
              <p className="s-header">Social</p>
              <ul className="s-items">
                <li><a className="p-link" target="_blank" href="https://www.linkedin.com/in/frederico-de-paoli/">LinkedIn</a></li>
                <li><a className="p-link" target="_blank" href="https://github.com/depaolif">Github</a></li>
              </ul>
            </Col>
            <Col md={6}>
              <p className="s-header">Personal</p>
              <ul className="s-items">
                <li><a className="p-link" target="_blank" href="mailto:frederico.de.paoli@gmail.com">Email</a></li>
                <li><a className="p-link" target="_blank" href="/De Paoli Resume.pdf">Resume</a></li>
              </ul>
            </Col>
          </div>
        </Row>
      </Grid>
    )
  }
}

export default About
