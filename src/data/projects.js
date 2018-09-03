const ProjectData = [
  {
    "title": "DoodleDocs",
    "summary": "Responsive online drawing platform. Mimics a sketching program using HTML Canvas and custom methods that track mouse movements. Sketches' entire histories are saved so users can replay how a doodle was created. Users can clone and edit other users' creations.",
    "description": "DoodleDocs is a responsive, online drawing platform. It mimics a sketching program through the use of custom HTML Canvas methods that allow you to draw colored shapes directly with the mouse. Individual strokes are saved in the history state of the sketching component, allowing users to see each step of how a drawing was made, as well as permitting undo and redo functionality. Users can also look through the latest doodles that other users have made, fork them, and edit or save those doodles for themselves.",
    "languages": ["Ruby", "Ruby on Rails", "SQL", "JavaScript", "React", "Redux", "HTML5", "CSS"],
    "externalApis": [],
    "githubLink": "https://github.com/depaolif/doodledocs",
    "websiteLink": "",
  },
  {
    "title": "Koko",
    "summary": "Dynamic, social website where users review songs and vote on others’ reviews. Calls the Spotify API to allow users to play songs as they write their reviews. Reviews are shared on song pages and on user's profiles. Public pages show top 'influencers' and trending reviews/songs.",
    "description": "Koko is a music discovery application that utilizes Spotify’s API to allow users to search for songs, add reviews and up/down vote other users’ reviews. The application leverages a users’ voting data to provide them with a dashboard of curated suggestions, as well as viewpages for the songs and artists trending across the site. Every review is given a reliability rating based on other users' upvoting or downvoting of that review. Highly rated reviews are thereby given more weight in determining top songs and artists for a given period.",
    "languages": ["Ruby", "Ruby on Rails", "SQL", "APIs", "JavaScript", "jQuery", "HTML5", "SCSS"],
    "externalApis": ["Spotify"],
    "githubLink": "https://github.com/depaolif/yelpify",
    "websiteLink": "",
  },
  {
    "title": "CheckUpOn",
    "summary": "Single-page webapp that displays a Twitter user’s current mood. Calls the Twitter API with a given twitter handle to get that user's last 10 tweets, then runs them through Google's Natural Language API. Ultimately returned is a short blurb with stats on the user's most recent 'mood'.",
    "description": "CheckUpOn is a single-page webapp that lets you see how a twitter user is doing. After inputting a user's twitter handle, an AJAX request is made to the Twitter API, retrieving that user's last 10 tweets. Those tweets are then condensed and sent to the Google Natural Languages API, which parses those tweets for emotional sentiment. Finally, a message is displayed on-screen, showing how that user is doing. The message includes that user's emotional sentiment, representing how positive or negative their tweets were, and that user's emotional magnitude, representing how intense that user's emotion were.",
    "languages": ["Ruby", "Ruby on Rails", "APIs", "HTML5", "SCSS", "JavaScript", "jQuery"],
    "externalApis": ["Twitter", "Google Natural Language"],
    "githubLink": "https://github.com/depaolif/check-up-on",
    "websiteLink": "",
  }
]

export default ProjectData
