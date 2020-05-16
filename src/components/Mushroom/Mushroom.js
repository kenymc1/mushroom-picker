import React from 'react';
// import PropTypes from 'prop-types';
import mushroomShape from '../../helpers/propz/mushroomShape';


import './mushroom.scss';


class Mushroom extends React.Component {
  static propTypes = {
    // useAMushroom: PropTypes.func.isRequired,
    // freeAMushroom: PropTypes.func.isRequired,
    mushroom: mushroomShape.mushroomShape,
  }

  render() {
    const { mushroom } = this.props;
    return (
      <div className="Mushroom col-4 mt-3">
        <div className="card">
          <img className="card-img-top" src={mushroom.imgUrl} alt="Mushroom card"/>
          <div className="card-body">
              <h5 className="card-title">{mushroom.name}</h5>
                <p className="card-text">{mushroom.description}</p>
          </div>
              {/* <div className="card-footer">
              {
                mushroom.isMagic ? (
                  <button className="btn btn-danger" onClick={this.freeGoatEvent}>Take a chance</button>
                ) : (
                  <button className="btn btn-dark" onClick={this.useGoatEvent}>Add to Basket</button>
                )
              }
              </div> */}
        </div>
      </div>


    );
  }
}


export default Mushroom;
