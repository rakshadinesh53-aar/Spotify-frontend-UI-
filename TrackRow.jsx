import React from "react"; 

function TrackRow({ track, index, selected, onSelect }) {
    return (
        <div className={`track-row ${selected ? "selected" : ""}`}
        onclick={() => onSelect(track.id)}>
            <div>{index + 1}</div>
            <div>{track.name}</div>
            <div>{track.arrtist}</div>
            <div>{track.album}</div>
            <div>{track.duration}</div>
        </div>
    );
}

export default TrackRow;