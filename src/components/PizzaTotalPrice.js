import * as React from "react";
import { connect } from "react-redux";


class PizzaTotalPrice extends React.PureComponent {
  componentDidMount() {}

  render() {
    //console.log(this.state)
    return (
      <div>
       <b>Total price</b>
        <br /> &euro; 42
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { state };
};
export default connect(mapStateToProps,{})(PizzaTotalPrice);
