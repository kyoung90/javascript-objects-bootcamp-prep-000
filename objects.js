var playlist = {
  artistName: "songs"
}

function updatePlayList(playlist, artistName, songtitle){
  Object.assign({}, playlist, {[artistname]: [songtitle]})
}

