import React from "react";
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';


function Drink(props) {
  return (
      <div class="container">
    <React.Fragment>
      <div class="row">
        <div class="col-3">
          <h2>{props.name}</h2>
          <button onClick= {() => props.whenDrinkClicked(props.id)}>Drink Details</button>
        </div>
      </div>
      <hr/>
    </React.Fragment>
      </div>
  );
}

Drink.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenDrinkClicked: PropTypes.func
};

export default Drink;