import React from "react";
import PropTypes from "prop-types";

function DrinkDetail(props) {
  const {drink, onClickingDelete, onClickingEdit, onClickingBuy, onClickingRefill} = props;

  let drinkHeader = "";

  if (drink.quantity <= 10 && drink.quantity > 0) {
    drinkHeader = <h3>{drink.name} - Running Low! Only {drink.quantity} Pints Left!</h3>
  } else if (drink.quantity > 10) {
    drinkHeader = <h3>{drink.name} - {drink.quantity} Pints Left.</h3>;
  } else {
    drinkHeader = <h3>{drink.name} - All Out</h3>;
  };

  return (
    <React.Fragment>
      <h1>Drink Details</h1>
      {drinkHeader}
      <p><em>{drink.description}</em></p>
      <button onClick={onClickingEdit}>Update Drink</button>
      <button onClick={()=> onClickingDelete(drink.id)}>Remove Drink from List</button>
      <button onClick={onClickingBuy}>Pour 1 Pint!</button>
      <button onClick={onClickingRefill}>Refill Keg with 1 Pint.</button>
      <hr/>
    </React.Fragment>
  );
}

DrinkDetail.propTypes = {
  drink: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingBuy: PropTypes.func,
  onClickingRefill: PropTypes.func
};

export default DrinkDetail;