import React from "react"; 

function PlaylistHeader ({ playlist }) {
    return (
        <div className = "playlist-header">
            <img src={playlist.image} al t={playlist.nmae} />

            <div className="playlist-info">
                <p className="playlist-type">Playlist</p>
                <h1>{playlist.name}</h1>
                <p>{playlist.description}</p>
                <p className="song-count">{playlist.tracks.length} songs</p>
            </div>
        </div>
    );
}

export default PlaylistHeader;