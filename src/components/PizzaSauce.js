import * as React from "react";
import { connect } from "react-redux";
import { selectSauce, deSelectSauce } from "../actions/sauce";
import { bindActionCreators } from "redux";
import { pizzaSauce } from "../lib/pizzaElements";
//inport action creator select sauce-- also connect

class PizzaSauce extends React.PureComponent {
  state = {
    itemChecked: []
  };

  checkItem(sauce, e) {
    let itemChecked = this.state.itemChecked;
    const id = e.target.name;
    const value = e.target.checked;
    itemChecked[id] = e.target.checked;
    let pizzaSauceCurrent = pizzaSauce[id];

    if (value)
      this.props.selectSauce(pizzaSauceCurrent);
    else
      this.props.deSelectSauce(pizzaSauceCurrent);
  }

  render() {
    return (
      <div>
        <form>
          {pizzaSauce.map(sauce => {
            return (
              <label key={sauce.id} className="sauceLabel">
                <input
                  className="sauceInput"
                  name={sauce.id}
                  onChange={e => this.checkItem(sauce, e)}
                  type="checkbox"
                />
                {sauce.name}
              </label>
            );
          })}
        </form>
      </div>

    );
  }
}
const mapStateToProps = state => {
  return {
    newSauce: state.newSauce

    //  selectedsauce: state.selectedsauce // make reducer for selected sauce
  };
};

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ selectSauce, deSelectSauce }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(PizzaSauce);
