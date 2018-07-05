import * as React from "react";
import { connect } from "react-redux";
import { selectTopping, deSelectTopping } from "../actions/topping";
import { bindActionCreators } from "redux";
import { pizzaToppings } from "../lib/pizzaElements";
//inport action creator select topping-- also connect

class PizzaToppings extends React.PureComponent {
  state = {
    itemsChecked: [],
    isChecked: false
  };

  checkItem(topping, e) {
    let itemsChecked = this.state.itemsChecked;
    const id = e.target.name;
    itemsChecked[id] = e.target.checked;
    let pizzaToppingCurrent = pizzaToppings[id];
    console.log("i am itemschecked", itemsChecked);
  this.setState({ itemsChecked, isChecked: !this.state.isChecked });
    if (!e.target.checked)
      return this.props.deSelectTopping(pizzaToppingCurrent);

    this.props.selectTopping(pizzaToppingCurrent);

    if (this.props.newTopping.length > 2) {
      this.props.deSelectTopping(pizzaToppingCurrent);
      e.target.checked = false;
      alert("you can only choose three toppings");
    }
  }

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    console.log();
    return (
      <div>
        <form onSubmit={this.selectTopping}>
          {pizzaToppings.map(topping => {
            return (
              <label key={topping.id} className="toppingLabel">
                <input
                  className="toppingInput"
                  name={topping.id}
                  onChange={e => this.checkItem(topping, e)}
                  type="checkbox"
                  disabled={this.state.disabled}
                />
                {topping.name}
              </label>
            );
          })}
          <button> Change my topping </button>
          <input type="submit" value="Submit" />
        </form>
        {this.props.newTopping}
        {console.log(this.props.newTopping)}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    newTopping: state.newTopping
  };
};

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectTopping, deSelectTopping },
    dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(PizzaToppings);
