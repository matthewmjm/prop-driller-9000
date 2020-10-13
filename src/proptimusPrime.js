import React from 'react';

export default function ProptimusPrime(props) {
    return (
        <section>
            <img
                src={props.images[props.activeProp]} /*Identify your image source from your props here.*/
                className="App-logo"
                alt="logo"
                onClick={props.sendThemHome}
            />
            <p>{props.catchPhrase}</p>
        </section>
    );
}