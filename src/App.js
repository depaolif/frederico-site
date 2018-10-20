import React, { Component } from 'react'
import NavBar from './components/navbar'
import About from './components/about'
import ProjectsList from './components/projects_list'
import FullProject from './components/full_project'
import Demos from './components/demos'
import ProjectData from './data/projects'
import { Grid, Row, Col } from 'react-bootstrap'
import { HashRouter, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import './App.css'


const history = createBrowserHistory();
history.listen(function (location) {
  window.ga('set', 'page', location.pathname + location.search);
  window.ga('send', 'pageview');
});

class App extends Component {
  render() {
    return (
      <HashRouter history={history}>
        <Grid>
          <Row>
            <Col md={3}>
              <Route path={`${process.env.PUBLIC_URL}/`} component={NavBar} />
            </Col>
            <Col md={9}>
              <Route exact path={`${process.env.PUBLIC_URL}/projects`} component={ProjectsList} />
              <Route path={`${process.env.PUBLIC_URL}/projects/doodledocs`} component={() => (<FullProject project={ProjectData[0]} />)}/>
              <Route path={`${process.env.PUBLIC_URL}/projects/koko`} component={() => (<FullProject project={ProjectData[1]} />)}/>
              <Route path={`${process.env.PUBLIC_URL}/projects/checkupon`} component={() => (<FullProject project={ProjectData[2]} />)}/>
              <Route path={`${process.env.PUBLIC_URL}/about`} component={About} />
              <Route exact path={`${process.env.PUBLIC_URL}/`} component={Demos} />
            </Col>
          </Row>
        </Grid>
      </HashRouter>
    )
  }
}

export default App
