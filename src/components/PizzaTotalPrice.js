import * as React from "react";
import { connect } from "react-redux";
import { pizzaToppings } from "../lib/pizzaElements";
import { pizzaSauce } from "../lib/pizzaElements";
import { pizzaBases } from "../lib/pizzaElements";

class PizzaTotalPrice extends React.PureComponent {
  render() {
    const totalBase  = this.props.newBase.length  === 0 ? 0 : pizzaBases[this.props.newBase[0]].price;
    const totalSauce = this.props.newSauce.length === 0 ? 0 : this.props.newSauce
      .map(sauce => pizzaSauce[sauce].price)
      .reduce( (accumulator, currentValue) => accumulator + currentValue )
    const totalToppings = this.props.newTopping.length === 0 ? 0 : this.props.newTopping
      .map(topping => pizzaToppings[topping].price).
      reduce( (accumulator, currentValue) => accumulator + currentValue )
    const subTotalPrice = totalBase + totalSauce + totalToppings
    const fastDeliveryPrice = this.props.newDelivery[0] !== 'checked' ? 0 : Math.round(subTotalPrice * 0.1 * 100) / 100;
    const totalPrice = Math.round( (subTotalPrice + fastDeliveryPrice) * 100) / 100;

    return (
        <div className="totalPrice">
          <hr />
          <b>Sub total = </b> &euro; {subTotalPrice} <br />
          <b>Delivery costs =</b> &euro; {fastDeliveryPrice}<br />
          <b>Total price = </b> &euro; {totalPrice}
        </div>
    );
  }
}
const mapStateToProps = state => {
return {
  newTopping: state.newTopping,
  newSauce  : state.newSauce,
  newBase   : state.newBase,
  newDelivery: state.newDelivery
};

};
export default connect(mapStateToProps,{})(PizzaTotalPrice);
