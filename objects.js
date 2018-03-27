var playlist = {'Slowdivffe':'Aliffson', 'My Blffoody Valentine':'Sometffimes'}

function updatePlaylist(playlist, artist, song){
  playlist[artist]=song
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.artist
  return playlist
}
