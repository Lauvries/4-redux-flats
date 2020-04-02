import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveCity extends Component {

  render() {

    if (!this.props.activeCity)
      return(
        <div className="active-city">
          <p>Please select a City...</p>
        </div>
      )

    const url = `https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`
    return (
      <div className='active-city'>
        <h1> {this.props.activeCity.name} </h1>
        <p> {this.props.activeCity.address}</p>
        <img src={url} alt=""/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    activeCity: state.activeCity
  }
}

export default connect(mapStateToProps)(ActiveCity)
