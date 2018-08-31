import React, { Component } from 'react'
import NavBar from './components/navbar'
import About from './components/about'
import ProjectsList from './components/projects_list'
import FullProject from './components/full_project'
import ProjectData from './data/projects'
import { Grid, Row, Col } from 'react-bootstrap';
import { HashRouter, Route } from 'react-router-dom';
import './App.css'


class App extends Component {
  render() {
    return (
      <HashRouter>
        <Grid>
          <Row>
            <Col md={3}>
              <Route path={`${process.env.PUBLIC_URL}/`} component={NavBar} />
            </Col>
            <Col md={9}>
              <Route exact path={`${process.env.PUBLIC_URL}/`} component={ProjectsList} />
              <Route path={`${process.env.PUBLIC_URL}/doodledocs`} component={() => (<FullProject project={ProjectData[0]} />)}/>
              <Route path={`${process.env.PUBLIC_URL}/koko`} component={() => (<FullProject project={ProjectData[1]} />)}/>
              <Route path={`${process.env.PUBLIC_URL}/checkupon`} component={() => (<FullProject project={ProjectData[2]} />)}/>
              <Route path={`${process.env.PUBLIC_URL}/about`} component={About} />
            </Col>
          </Row>
        </Grid>
      </HashRouter>
    );
  }
}

export default App;
