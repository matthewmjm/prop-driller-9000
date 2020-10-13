import React from 'react';
import './App.css';
import ProptimusOmega from './proptimusOmega';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      callForHelp: "https://i.pinimg.com/originals/f8/7d/ec/f87dec9d6334af383a27f73e48ccf154.png",
      proptimusPhotos: {
        "Proptimus Prime": "http://pngimg.com/uploads/transformers/transformers_PNG3.png",
        "Proptimus Beta": "https://library.kissclipart.com/20181004/jbw/kissclipart-alola-exeggutor-height-clipart-optimus-prime-trans-6afe73e9efab0cac.png",
        "Proptimus Omega": "https://cdn.shopify.com/s/files/1/0076/4103/8906/products/Transformers-Movie-Studio-Series-38-Voyager-G1-Optimus-Prime-Semi-truck-Render_1024x1024.png?v=1549582726",
      },
      activeProp: "",
      instructions: ""
    } 
  }


  callForBadHelp = (event) => {
    console.log("Bad help has arrived!")
    this.setState({
      activeProp: "Proptimus Omega",
      instructions: "Will this do human?"
    })
  }

  callForBetterHelp = (event) => {
    console.log("Better help has arrived!")
    this.setState({
      activeProp: "Proptimus Beta",
      instructions: "Are you sure this situation warrants this?"
    })
  }

  gimmeAllYouGot = (event) => {
    console.log("It's time to kick ass!")
    this.setState({
      activeProp: "Proptimus Prime",
      instructions: "There are no bigger guns!"
    })
  }  

  sendThemHome = (event) => {
    console.log("I am Proptimus Prime, and I send this message to any surviving Proptobots taking refuge among the state: We are here. We are waiting.")
    this.setState({
      activeProp: "",
      instructions: ""
    })
  } 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={this.state.callForHelp}
            className="App-logo"
            alt="logo"
            onClick={this.callForBadHelp}
          />

          {this.state && this.state.activeProp !== "" /*Which Proptobot should be checked for?*/ &&
          <>
            <p>{this.state.instructions}</p>
            <ProptimusOmega /*Specify your Proptobot here.*/
            activeProp={this.state.activeProp}
            images={this.state.proptimusPhotos}
            catchPhrase="I am the first drilled prop - Proptimus Omega…"
            callForBetterHelp={this.callForBetterHelp} 
            gimmeAllYouGot={this.gimmeAllYouGot} 
            sendThemHome={this.sendThemHome} 
              /*You need to pass all of your props to this component here.*/
            />
          </>
          }

        </header>
      </div>
    );
  }
}
