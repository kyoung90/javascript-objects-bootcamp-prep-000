var playlist = {
  artistName: "songs"
}

function updatePlaylist(playlist, artistName, songTitle){
  Object.assign({}, playlist, {artistName: songTitle})
}

