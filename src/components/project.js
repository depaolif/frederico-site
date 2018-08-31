import React from 'react'
import '../css/project.css'

class Project extends React.Component {
  render() {
    const { title, summary, languages } = this.props
    return (
      <a className="box-link" href={`/#/projects/${title}`}>
        <div className="project-box">
        <h3 className="title">{title}</h3>
        <br></br>
        <p className="summary">{summary}</p>
        <p className="languages">Languages Used: {languages.join(', ')}</p>
        </div>
      </a>
    )
  }
}

export default Project
