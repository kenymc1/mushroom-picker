import React from 'react';
import './App.scss';

import mushroomData from '../helpers/data/mushroomData';
import Forest from '../components/Forest/Forest';
import Basket from '../components/Basket/Basket';


class App extends React.Component {
  state = {
    mushrooms: [],
    basket: [],
  }

  componentDidMount() {
    const mushrooms = mushroomData.getMushrooms();
    const basket = mushroomData.getBasket();
    this.setState({ mushrooms, basket });
  }

  pickMushroom = (e) => {
    e.preventDefault();
    mushroomData.pickMushroom();
    const basket = mushroomData.getBasket();
    this.setState({ basket });
  }

  render() {
    const { mushrooms, basket } = this.state;

    return (
      <div className="App">
      <h1>Mushroom Picker</h1>
      {basket.length === 16 ? (
        <button className="btn btn-danger" onClick={this.pickMushroom}>Play Agin</button>
      ) : (
      <button className="btn btn-dark" onClick={this.pickMushroom}>Click Here</button>
      )}
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-8">
          <h2 className="divTitleForest">Forest</h2>
          <Forest mushrooms={this.state.mushrooms} />
          </div>
          <div className="col-4">
          <h2 className="divTitleBasket">Basket</h2>
          <Basket mushrooms={this.state.basket} />
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
