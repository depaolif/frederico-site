export function getVideos(title) {
  switch(title.toLowerCase()) {
    case "doodledocs":
      return [
        {
          name: "drawing.mov",
          caption: "Users can use the toolbox to draw on the HTML Canvas element with a variety of shapes. Colors can be picked from the color modal, and line width can be increased or decreased for the 'free draw' and 'line' tools. Finally, videos can be saved to your profile."},
        {
          name: "history undo redo.mov",
          caption: "All doodles have a history slider that users can slide through to see the strokes made to create that doodle. Doodles also have undo and redo functionality. Changed doodles can then be saved over their originals, updating them. This can be done through the auto-save feature (saves every 5secs) or manually clicking Save."
        },
        {
          name: "latest doodles.mov",
          caption:"Users can look at Latest Doodles to see what people have been drawing. From here, they can click on a doodle to edit it, adding or undoing things as they see fit, and saving it for themselves. This does not change the original doodle whatsoever, but rather saves a new copy for the user."
        },
      ]
    case "koko":
      return [
        {
          name: "trending.mov",
          caption: "The splash page shows reviews written by the top influencers on the site, users who have consistently highly rated reviews. Trending artists and trending songs shows recent artists and songs, respectively, who have recently received highly-rated reviews that gave high scores (4/5 stars). Any song can be played through Spotify by clicking on the embedded web player."
        },
        {
          name: "registrations.mov",
          caption: "Users can sign up to join Koko. They can then update their profile, add friends, and look at other users' reviews. The home page is also updated to show users' friends' recent activity."
        },
        {
          name: "reviews.mov",
          caption: "Users can search for songs using the Spotify API. They can then write and edit reviews for those songs, and downvote or upvote others' reviews."
        },
      ]
    case "checkupon":
      return [
        {
          name: "app.mov",
          caption: "Use the search bar to look for a twitter user. What's displayed is a short summary of how that person is doing, along with detailed information about their sentiment and magnitude. Hover over the labels to learn more about the scoring. The Twitter portrait links directly to the user's Twitter profile."
        }
      ]
    default:
      return []
  }
}
