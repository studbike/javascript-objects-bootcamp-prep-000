var playlist = {'Slowdive': "Alison", 'My Bloody Valentine': "Sometimes"}

function updatePlaylist(playlist, artistName, songTitle){

Object.assign( {}, playlist, {[artist]: title})

}

function removeFromPlaylist(playlist, artistName){
  delete playlist.artist
  return playlist
}
