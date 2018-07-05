import * as React from "react";
import { connect } from "react-redux";
import { pizzaToppings } from "../lib/pizzaElements";
import { pizzaSauce } from "../lib/pizzaElements";
import { pizzaBases } from "../lib/pizzaElements";

class PizzaTotalPrice extends React.PureComponent {
  render() {
    return (
      <div>
       <b>Total price = </b>

        {
          this.props.newBase.length  === 0 ? 0 : pizzaBases[this.props.newBase[0]].price +
          (
            this.props.newSauce.length === 0 ? 0 : this.props.newSauce.map(
              sauce => pizzaSauce[sauce].price
            ).reduce(
              (accumulator, currentValue) => accumulator + currentValue
            )
          ) +
          (
            this.props.newTopping.length === 0 ? 0 : this.props.newTopping.map(
              topping => pizzaToppings[topping].price
            ).reduce(
              (accumulator, currentValue) => accumulator + currentValue
            )
          )
        }

        {/* {this.props.newTopping}
        {this.props.newSauce}
        {this.props.newBase} */}
      </div>
    );
  }
}
const mapStateToProps = state => {
return {
  newTopping: state.newTopping,
  newSauce  : state.newSauce,
  newBase   : state.newBase
};

};
export default connect(mapStateToProps,{})(PizzaTotalPrice);
