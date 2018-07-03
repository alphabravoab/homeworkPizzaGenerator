import * as React from "react";
import { connect } from "react-redux";



class ResultPage extends React.PureComponent {
  componentDidMount() {}

  render() {
    console.log(this.state)
    return (

      <div>

      </div>
    );
  }
}


const mapStateToProps = state => {
  return { addTopping: state.addTopping }
}
export default connect(mapStateToProps, {
})(ResultPage);
