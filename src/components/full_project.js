import React from 'react'
import { getVideos } from '../helpers/get_videos'
import '../css/full_project.css'
import VimeoMap from '../data/vimeoMap';

class FullProject extends React.Component {
  render() {
    const { title, description, githubLink, websiteLink } = this.props.project
    const videos = getVideos(title)
    const videoElements = videos.map((video, i) => {
      const url = VimeoMap[video.name];
      return (
        <div className="video-box" key={i}>
          <iframe
            className="video"
            src={url}
            width="600"
            height="400"
            frameBorder="0"
            allowFullScreen
          />
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
