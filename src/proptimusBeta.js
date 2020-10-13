import React from 'react';
import ProptimusPrime from './proptimusPrime';

export default class ProptimusBeta extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        escalate: false,
        }
    }

    handleClick = (event) => {
        this.setState({
        escalate: true
        })
        this.props.gimmeAllYouGot(event)
    }

    render() {
        return(
            <section>
                { 
                    this.state.escalate
                    ? <ProptimusPrime
                            catchPhrase="I am the last drilled prop - Proptimus Prime!!!"  
                            sendThemHome={this.props.sendThemHome} 
                            images={this.props.images}
                            activeProp={this.props.activeProp}
                        />
                    : <>
                        <img
                            src={this.props.images[this.props.activeProp]} /*Identify your image source from your props here.*/
                            className="App-logo"
                            alt="logo"
                            onClick={this.handleClick}
                            />
                            <p>{this.props.catchPhrase}</p>
                    </>
                }
            </section>
        )
    }
}