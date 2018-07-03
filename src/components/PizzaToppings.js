import * as React from "react";
import { connect } from "react-redux";

class PizzaToppings extends React.PureComponent {


  render() {


    return (
      'PizzaToppings'
    )
  }
}
const mapStateToProps = function(state) {
  return {
    pizzaToppings: state.pizzaToppings
  };
};


export default connect(mapStateToProps, {
})(PizzaToppings);
