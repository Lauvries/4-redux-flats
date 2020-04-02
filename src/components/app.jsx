import React, { Component } from 'react';
import ActiveCity from '../containers/active_city'
import CityList from '../containers/city_list'

class App extends Component {
  render() {
    return (
      <div className="app">
        <CityList/>
        <ActiveCity/>
      </div>
    );
  }
}

export default App
