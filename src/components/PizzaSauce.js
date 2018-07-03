import * as React from "react";
import { connect } from "react-redux";

class PizzaSauce extends React.PureComponent {

  render() {


    return (

<div>PizzaSauce</div>


    )
  }
}
const mapStateToProps = function(state) {
  return {
    pizzaSauce: state.pizzaSauce
  };
};


export default connect(mapStateToProps, {})(PizzaSauce);
