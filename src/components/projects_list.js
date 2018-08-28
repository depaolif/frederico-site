import React from 'react'
import Project from './project'
import ProjectData from '../data/projects'
import { Grid, Row, Col } from 'react-bootstrap'
import '../css/projects_list.css'

class ProjectsList extends React.Component {
  render() {
    // calculating what the projects grid will look like
    const projectsList = ProjectData.map((el, i) => <Project key={i}
      title={ProjectData[i]["title"]}
      summary={ProjectData[i]["summary"]}
      languages={ProjectData[i]["languages"]}
      externalApis={ProjectData[i]["externalApis"]}
      githubLink={ProjectData[i]["githubLink"]}
    /> )

    const numberRows = Math.ceil(projectsList.length / 2)
    let projectsGrid = []
    let projectOnLeft, projectOnRight
    for (let i = 0; i < numberRows; i++) {
      projectOnLeft = projectsList[i * 2]
      projectOnRight = projectsList[i * 2 + 1]
      projectsGrid[i] = <Row key={i}>
        <Col key={i + 'L'} md={6}>{projectOnLeft}</Col>
        <Col key={i + 'R'} md={6}>{projectOnRight}</Col>
      </Row>
    }
    return (
      <Grid id="projects-list">
        {projectsGrid}
      </Grid>
    )
  }
}

export default ProjectsList
