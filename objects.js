var playlist = {
  artistName: "songs"
}

function updatePlaylist(playlist, artistName, songtitle){
  Object.assign({}, playlist, {[artistname]: [songtitle]})
}

