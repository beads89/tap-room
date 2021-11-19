import React from "react";
import PropTypes from "prop-types";


function ReusuableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder="Drink Name" />
        <input
          type='number'
          name='quantity'
          min='0'
          max='126'
          placeholder="Pints" />
        <textarea
          name='description'
          placeholder='Description for Drink' />
        <button type='submit'>Add Drink!</button>
      </form>
    </React.Fragment>
  );
}

ReusuableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusuableForm;