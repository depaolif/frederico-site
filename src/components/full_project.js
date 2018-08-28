import React from 'react'
import { getVideos } from '../helpers/get_videos'
import '../css/full_project.css'

class FullProject extends React.Component {
  render() {
    const { title, description, githubLink, websiteLink } = this.props.project
    const videos = getVideos(title)
    const videoElements = videos.map((video, i) => {
      return (
        <div className="video-box">
          <video className="video" src={`${title.toLowerCase()}/${video["name"]}`} controls="controls" height="400" width="600">
            Sorry, your browser does not support .mov videos
          </video>
          <p className="video-caption">{video["caption"]}</p>
        </div>
      )
    })
    const externalLink = websiteLink.length > 0 ?
      <a href={websiteLink}><img className="icon" src="/external-link-icon.png" alt={`link to ${title}`}></img></a> :
      null
    return (
      <div className="full-project">
        <h2 className="project-title">{title}</h2>
        <div className="github-logo-wrapper">
          <a href={githubLink} target="_blank"><img className="icon" src="/github-logo.png" alt="github logo"></img></a>
          {externalLink}
        </div>
        <br></br><br></br>
        <p className="description">{description}</p>
        <br></br>
        <h3 className="videos-header">Videos</h3>
        {videoElements}
      </div>
    )
  }
}

export default FullProject
