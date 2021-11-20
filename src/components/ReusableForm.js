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
          required /> <br />
        <input
          type='text'
          name='brand'
          placeholder="Brand"
          required /> <br />
        <input
          type='number'
          step='0.01'
          name='price'
          placeholder="Price"
          required /> <br />
        <input
          type='number'
          name='alcoholContent'
          placeholder="Alcohol Content"
          required /> <br />
        <input
          type='number'
          name='quantity'
          min='0'
          max='124'
          defaultValue="124"
          required /> <br />
        <textarea
          name='description'
          placeholder='Description'
          required /> <br />
        <button className="btn btn-primary" type='submit'>Add Drink!</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;