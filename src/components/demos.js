import React from 'react'
import Demo from './demo'
import DemoData from '../data/demos'
import { Row, Col } from 'react-bootstrap'
import '../css/grid_list.css'

class ProjectsList extends React.Component {
  render() {
    // calculating what the projects grid will look like
    const demosList = DemoData.map((el, i) => <Demo
      key={i}
      name={el.name}
      vidName={el.vidName}
    /> )

    const numberRows = Math.ceil(demosList.length / 2)
    let demosGrid = []
    let demoOnLeft, demoOnRight
    for (let i = 0; i < numberRows; i++) {
      demoOnLeft = demosList[i * 2]
      demoOnRight = demosList[i * 2 + 1]
      demosGrid[i] = <Row key={i}>
        <Col key={i + 'L'} md={6}>{demoOnLeft}</Col>
        <Col key={i + 'R'} md={6}>{demoOnRight}</Col>
      </Row>
    }
    return (
      <div id="demos-list" className="grid-list">
        {demosGrid}
      </div>
    )
  }
}

export default ProjectsList
