import React, { useState } from "react"; 
import TrackRow from "./TrackRow";

function TrackList({ tracks }) {
    const [selectedTrack, setSelectedTtrack] = useState(null); 
    if (!tracks.length) {
        return <p className="empty">No tracks available</p>;
    }

    return (
        <div className="Track-list">
            <div className="track-header">
                <div>#</div>
                <div>Title</div>
                <div>Artist</div>
                <div>Album</div>
                <div>Duration</div>
            </div>

            {tracks.map((track, index) => (
                <TrackRow 
                    key={track.id}
                    track={track}
                    index={index}
                    selected={selectedTrack === track.id}
                    onSelect={setSelectedTtrack}
                />
            ))}
        </div>
     );
}

export default TrackList;