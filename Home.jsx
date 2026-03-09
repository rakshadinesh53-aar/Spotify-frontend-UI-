import React, {useEffect, useState } from "react"; 
import PlaylistHeader from "./playlistHeader";
import TrackList from "./TrackList";
import playlistData from ".playlist.json"; 

function Home() {
    const [loading, setLoading] = useState(true);
    const [playlist, setPlaylist] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setPlaylist(playlistData.playlist);
            setLoading(false);
        }, 800);
    }, []);
    if (loading) return <div className="loading">Loading playlist....</div>;
    return (
        <div className="container">
            <PlaylistHeader playlist={playlist} />
            <TrackList tracks={playlist.tracks} />
        </div>
    );
}

export default Home;