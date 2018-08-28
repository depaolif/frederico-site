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
              <Route path='/' component={NavBar} />
            </Col>
            <Col md={9}>
              <Route exact path='/' component={ProjectsList} />
              <Route path='/projects/doodledocs' component={() => (<FullProject project={ProjectData[0]} />)}/>
              <Route path='/projects/koko' component={() => (<FullProject project={ProjectData[1]} />)}/>
              <Route path='/projects/checkupon' component={() => (<FullProject project={ProjectData[2]} />)}/>
              <Route path='/about' component={About} />
            </Col>
          </Row>
        </Grid>
      </HashRouter>
    );
  }
}

export default App;
