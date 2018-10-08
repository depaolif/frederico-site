import React from 'react'
import { Link } from 'react-router-dom'
import '../css/project.css'

class Project extends React.Component {
  render() {
    const { title, summary, languages } = this.props
    return (
      <Link className="box-link" to={`/projects/${title}`}>
        <div className="project-box">
          <h3 className="title">{title}</h3>
          <br></br>
          <p className="summary">{summary}</p>
          <p className="languages">Languages Used: {languages.join(', ')}</p>
        </div>
      </Link>
    )
  }
}

export default Project
