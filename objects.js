var playlist = {'Slowdive': "Alison", 'My Bloody Valentine': "Sometimes"}

function updatePlaylist(playlist, artist, title){

Object.assign( {}, playlist, {[artist]: title})

}

function removeFromPlaylist(playlist, artist){
  delete playlist.artist
  return playlist
}
