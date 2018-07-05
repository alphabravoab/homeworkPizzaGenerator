import * as React from "react";
import { connect } from "react-redux";


class PizzaTotalPrice extends React.PureComponent {




  render() {

    return (
      <div>
       <b>Total price</b>
       {console.log('ben ik een array', this.props.newTopping)}
      {this.props.newTopping}
      {this.props.newSauce}
      {this.props.newBase}

      {this.newPrice}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    newTopping: state.newTopping,
    newSauce: state.newSauce,
    newBase: state.newBase,
  };
};
export default connect(mapStateToProps,{})(PizzaTotalPrice);
