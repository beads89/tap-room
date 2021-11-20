import React from 'react';
import Drink from './Drink';
import PropTypes from 'prop-types';

function DrinkList(props) {
  return (
    <React.Fragment>
      {props.drinkList.map((drink) =>
      <Drink
        whenDrinkClicked = {props.onDrinkSelection}
        name={drink.name}
        brand={drink.brand}
        price={drink.price}
        alcoholContent={drink.alcoholContent}
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