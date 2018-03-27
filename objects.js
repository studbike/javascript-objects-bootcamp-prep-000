var playlist = {theBeatles: "can't buy me love", theRollingStones: "paint in black", theEagles: "hotel california"}

function updatePlaylist(playlist, artist, title){

Object.assign( {}, playlist, {[artist]: title})

}

function removeFromPlaylist(playlist, artist){
  delete playlist.artist
  return playlist
}
