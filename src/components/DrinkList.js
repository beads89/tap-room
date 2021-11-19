import React from 'react';
import Drink from './Drink';
import PropTypes from 'prop-types';

function DrinkList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.drinkList.map((drink) =>
      <Drink
        whenDrinkClicked = {props.onDrinkSelection}
        name={drink.name}
        quantity={drink.quantity}
        description={drink.description}
        id={drink.id}
        key={drink.id} />
        )}
    </React.Fragment>
  )
}

DrinkList.propTypes = {
  drinkList: PropTypes.array
};

export default DrinkList;