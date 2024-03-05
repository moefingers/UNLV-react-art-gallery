import React from 'react';

function PictureFrame(props){
    return (
        <div className="picture-frame">
            <h2>{props.title}</h2>
            <div className='image-container'>
                <img src={props.primaryImage} alt={"Image for " + props.title} />
                <p>{"Created/Designed: " + props.objectDate} <br />
                {"Culture: " + props.culture} <br />
                {"Original medium: " + props.medium}</p>
            </div>
            <p>{props.artistDisplayBio}</p>

        </div>
    )
}

export default PictureFrame