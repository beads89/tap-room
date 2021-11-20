import React from "react";
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';


function Drink(props) {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>{props.name}</h2>
            <button className="btn btn-primary" onClick= {() => props.whenDrinkClicked(props.id)}>Drink Details</button>
          </div>
        </div>
      </div>
      <hr />
    </React.Fragment>
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