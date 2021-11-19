import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditDrink (props) {
  const {drink} = props;


  function handleEditDrinkSubmission(event) {
    event.preventDefault();
    props.onEditDrink({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.valueAsNumber,
      alcoholContent: event.target.alcoholContent.valueAsNumber,
      quantity: event.target.quantity.valueAsNumber,
      description: event.target.description.value,
      id: drink.id});
  }


  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditDrinkSubmission}
        buttonText="Update Drink"/>
    </React.Fragment>
  );
}

EditDrink.propTypes = {
  drink: PropTypes.object,
  onEditDrink: PropTypes.func
};

export default EditDrink;