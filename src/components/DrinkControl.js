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

  handleAddingNewDrinkToList = (newDrink) => {
    const newMainDrinkList = this.state.mainDrinkList.concat(newDrink);
    this.setState({
      mainDrinkList: newMainDrinkList,
      formVisibleOnPage: false
    });
  }

  handleDrinkDetail = (id) => {
    const selectedDrink = this.state.mainDrinkList.filter(drink => drink.id === id)
    this.setState({selectedDrink: selectedDrink});
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleDeletingDrink = (id) => {
    const newMainDrinkList = this.state.mainDrinkList.filter(drink => drink.id !== id);
    this.setState({
      mainDrinkList: newMainDrinkList,
      selectedDrink: null
    });
  }

  handleEditingDrinkInList = (drinkToEdit) => {
    const editedMainDrinkList = this.state.mainDrinkList
    .filter(drink => drink.id !== this.state.selectedDrink.id)
    .concat(drinkToEdit);
    this.setState({
      mainDrinkList: editedMainDrinkList,
      editing: false,
      selectedDrink: null
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    currentlyVisibleState = <DrinkList drinkList={this.state.mainDrinkList} onDrinkSelection={this.handleDrinkDetail}/>;
    buttonText = "add drink"

    return (
      <React.Fragment>
        <h1>hello!</h1>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}


export default DrinkControl;