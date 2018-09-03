import React from 'react'
import VimeoMap from '../data/vimeoMap'
import '../css/demo.css'

class Project extends React.Component {
  render() {
    const { name, vidName } = this.props
    const url = VimeoMap[vidName]
    return (
      <div className="demo-box">
        <h3 className="Name">{name}</h3>
        <iframe
          className="demo-video"
          src={url}
          frameBorder="0"
          allowFullScreen
        />
      </div>
    )
  }
}

export default Project
