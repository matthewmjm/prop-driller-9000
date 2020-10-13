import React from 'react';
import ProptimusBeta from './proptimusBeta';

export default class ProptimusOmega extends React.Component {
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
    this.props.callForBetterHelp(event) 
  }

  render() { 
    return(
      <section>
        {/* <p>Are you sure this situation warrants this?</p> */}
        {
          this.state.escalate
          ? <ProptimusBeta
              catchPhrase="I am the middle drilled prop - Proptimus Beta!"  
              images={this.props.images}
              activeProp={this.props.activeProp}
              gimmeAllYouGot={this.props.gimmeAllYouGot}
              sendThemHome={this.props.sendThemHome}  
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
