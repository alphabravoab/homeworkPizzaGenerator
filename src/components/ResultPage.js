import * as React from "react";
import { connect } from "react-redux";



class ResultPage extends React.PureComponent {
  componentDidMount() {}

  render() {
    console.log(this.state)
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
  return {     newBase: state.selectBase}
}
export default connect(mapStateToProps, {
})(ResultPage);
