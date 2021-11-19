import React from "react";
import PropTypes from "prop-types";

function Drink(props) {
  return (
    <React.Fragment>
      <h2>{props.name}</h2>
      <button onClick= {() => props.whenDrinkClicked(props.id)}>Drink Details</button>
      <hr/>
    </React.Fragment>
  );
}

Drink.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenDrinkClicked: PropTypes.func
};

export default Drink;