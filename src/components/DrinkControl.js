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
    const selectedDrink = this.state.mainDrinkList.filter(drink => drink.id === id)[0];
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

  handleBuyDrink = () => {
    let buyDrink = this.state.mainDrinkList.filter(drink => drink.id === this.state.selectedDrink.id)[0];

    if (buyDrink.quantity <= 0) {
      alert(buyDrink.name + " is all out. Please refill the keg or choose another drink.");
    } else {
      buyDrink = buyDrink.quantity--;

      this.setState({
        buyDrink: buyDrink
      });
    }
  }

  handleRefillDrink = () => {
    let refillDrink = this.state.mainDrinkList.filter(drink => drink.id === this.state.selectedDrink.id)[0];
    if (refillDrink.quantity >= 124) {
      alert("Keg is at max capacity, pour one out before trying to refill!")
    } else {
      refillDrink = refillDrink.quantity++;

      this.setState({
        refillDrink: refillDrink
      });
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditDrink
        drink = {this.state.selectedDrink}
        onEditDrink = {this.handleEditingDrinkInList} />
      buttonText = "Cancel and Return to List";

    } else if (this.state.selectedDrink != null) {
      currentlyVisibleState = <DrinkDetail
        drink = {this.state.selectedDrink}
        onClickingDelete = {this.handleDeletingDrink}
        onClickingEdit = {this.handleEditClick}
        onClickingBuy = {this.handleBuyDrink}
        onClickingRefill = {this.handleRefillDrink} />
        buttonText = "Return to Drink List";

    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewDrinkForm onNewDrinkCreation = {this.handleAddingNewDrinkToList} />
      buttonText = "Return to Drink List";

    } else {
    currentlyVisibleState = <DrinkList drinkList={this.state.mainDrinkList} onDrinkSelection={this.handleDrinkDetail}/>;
    buttonText = "add drink"
    }
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