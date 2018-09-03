import React from 'react'
import '../css/project.css'
import '../css/full_project.css'
import VimeoMap from '../data/vimeoMap'

class Project extends React.Component {
  render() {
    const { name, vidName } = this.props
    const url = VimeoMap[vidName]
    return (
      <div>
        <div className="project-box">
        <h3 className="Name">{name}</h3>
        <iframe
          className="video"
          src={url}
          width="600"
          height="400"
          frameBorder="0"
          allowFullScreen
        />
        </div>
      </div>
    )
  }
}

export default Project
