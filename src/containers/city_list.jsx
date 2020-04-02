import React, { Component } from 'react';
import City from './city';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCities } from '../actions'



class CityList extends Component {

componentDidMount() {
  //todo call action to start populating our list with info from the store
  this.props.setCities();
}


  render() {
    return (
      <ul className='list-group cities'>
        {this.props.cities.map((city) => { return <City key={city.address} city={city} />})}
      </ul>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    {setCities: setCities},
    dispatch
  )
}
function mapStateToProps(state){
  return {
    cities: state.cities
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CityList)
