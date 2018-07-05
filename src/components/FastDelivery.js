import * as React from "react";
import { connect } from "react-redux";
import { selectFastDelivery, deSelectFastDelivery } from "../actions/fastDelivery";
import { bindActionCreators } from "redux";

//inport action creator select -- also connect

class FastDelivery extends React.PureComponent {
  state = {
    itemsChecked: []
  };

  checkItem(e) {
     !e.target.checked ?
      this.props.deSelectFastDelivery('checked') :
      this.props.selectFastDelivery('checked')
  }

  render() {
    return (
      <div>
        <form>

              <label className="Label">
                <input
                  className="Input"
                  name= "fastDelivery"
                  onChange={e => this.checkItem(e)}
                  type="checkbox"
                  checked={this.state.checked}
                />
                Do you want turbo-drone-delivery (10% extra costs)?
              </label>

        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { newDelivery: state.newDelivery };
};

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectFastDelivery: selectFastDelivery, deSelectFastDelivery: deSelectFastDelivery },
    dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(FastDelivery);
