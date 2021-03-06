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

  let drinkOOS = "";

  if (drink.quantity === 0) {
    drinkOOS = <button className="btn" disabled>Out of Stock</button>
  } else {
    drinkOOS = <button className="btn btn-success" onClick={onClickingBuy}>Pour 1 Pint!</button>
  }

  let drinkOverStock = "";

  if (drink.quantity === 124) {
    drinkOverStock = <button className="btn" disabled>Keg Full</button>
  } else {
    drinkOverStock = <button className="btn btn-info" onClick={onClickingRefill}>Refill Keg with 1 Pint.</button>
  }

  return (
    <React.Fragment>
      <h1>Drink Details</h1>
      <hr />
      {drinkHeader}
      <p>Brand: {drink.brand}</p>
      <p>ABV: {drink.alcoholContent}%</p>
      <p>Price: ${drink.price}</p>
      <p>About: {drink.description}</p>
      <button className="btn btn-primary" onClick={onClickingEdit}>Update Drink</button>  
      <button className="btn btn-danger" onClick={()=> onClickingDelete(drink.id)}>Remove Drink from List</button>  
      {drinkOOS}  
      {drinkOverStock}  
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