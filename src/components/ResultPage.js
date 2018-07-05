import * as React from "react";
import { connect } from "react-redux";



class ResultPage extends React.PureComponent {
  componentDidMount() {}

  render() {
    return (
      <div>
        {/* {this.props.newBase.map(base => {
          return <div> {base}</div>
        })} */}
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {     newBase: state.selectBase,
newDelivery: state.newDelivery

  }
}
export default connect(mapStateToProps, {
})(ResultPage);
