import React from 'react';

function PictureFrame(props){
    return (
        <div className="picture-frame">
            <h2>{props.title}</h2>
            <img src={props.src} alt={props.alt} />
        </div>
    )
}

export default PictureFrame