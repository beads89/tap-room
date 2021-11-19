import React from "react";
import NewDrinkForm from "./NewDrinkForm";
import DrinkList from "./DrinkList";
import DrinkDetail from "./DrinkDetail";
import EditDrink from "./EditDrink";

class DrinkControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainDrinkList:[],
      selectedDrink: null,
      editing: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    if (this.state.selectedDrink !== null) {
      this.setState({
        formVisibleOnPage: false,
        selectedDrink: null,
        editing: false
    });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    currentlyVisibleState = <DrinkList drinkList={this.state.mainDrinkList} onItemSelection={this.handleItemDetail}/>;
    buttonText = "add drink"

    return (
      <React.Fragment>
        <h1>hello!</h1>
        {currentlyVisibleState}
        <button>{buttonText}</button>
      </React.Fragment>
    );
  }
}


export default DrinkControl;