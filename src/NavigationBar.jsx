import React from 'react';

function NavigationBar(props){
    return (
        <div className='navigation-bar'>
            <button value={-5} onClick={props.buttonEvent} className='previous-five'>Previous<br/>( -5 )</button>
            <button value={-1} onClick={props.buttonEvent} className='previous-one'>Previous<br/>( -1 )</button>
            <button value={1} onClick={props.buttonEvent} className='forward-one'>Forward<br/>( +1 )</button>
            <button value={5} onClick={props.buttonEvent} className='forward-five'>Forward<br/>( +5 )</button>
        </div>
    )
}

export default NavigationBar