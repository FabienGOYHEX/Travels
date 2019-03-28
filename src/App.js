import React, { Component } from 'react';
import Travel from './travel';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Travel destination = "NewYORK" country = "USA" distance = "8000" photo = "https://media.routard.com/image/10/5/new-york.1468105.c1000x300.jpg"/>
        <Travel destination = "Madrid" country = "ESPAGNE" distance = "1500" photo = "https://previews.123rf.com/images/kasto/kasto1208/kasto120800001/14750573-vue-panoramique-a%C3%A9rienne-de-la-gran-via-la-principale-rue-commer%C3%A7ante-de-madrid-capitale-de-l-espagne.jpg"/>
      </div>
    );
  }
}

export default App;
