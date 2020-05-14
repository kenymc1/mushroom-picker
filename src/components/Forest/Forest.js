import React from 'react';
import PropTypes from 'prop-types';
import mushroomShape from '../../helpers/propz/mushroomShape';
import './Forest.scss';

import Mushroom from '../Mushroom/Mushroom';

class Forest extends React.Component {
static propTypes = {
  // freeAGoat: PropTypes.func.isRequired,
  // useAGoat: PropTypes.func.isRequired,
  mushrooms: PropTypes.arrayOf(mushroomShape.mushroomShape),
}

render() {
  const { mushrooms } = this.props;
  const buildForest = mushrooms.map((mushroom) => (
      <Mushroom key={Mushroom.id} mushroom={mushroom} />
  ));

  return (
        <div className="Forest d-flex flex-wrap">
          {buildForest}
        </div>
  );
}
}

export default Forest;
