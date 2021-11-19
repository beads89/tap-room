import React from "react";
import PropTypes from "prop-types";


function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder="Drink Name"
          required />
        <input
          type='text'
          name='brand'
          placeholder="Brand" />
        <input
          type='number'
          step='0.01'
          name='price'
          placeholder="Price"
          required />
        <input
          type='number'
          name='alcoholContent'
          placeholder="Alcohol Content"
          required />
        <input
          type='number'
          name='quantity'
          min='0'
          max='124'
          placeholder="Pints"
          required />
        <textarea
          name='description'
          placeholder='Description'
          required />
        <button type='submit'>Add Drink!</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;