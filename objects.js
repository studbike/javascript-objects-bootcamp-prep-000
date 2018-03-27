var playlist = {theBeatles: 'cant buy me love', theRollingStones: 'paint it black'}

function updatePlaylist(playlist, artist, song){
  playlist.artist=song
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName
  return playlist
}
