import * as React from "react";
import { connect } from "react-redux";
import { selectBase, deSelectBase } from "../actions/base";
import { bindActionCreators } from "redux";
import { pizzaBases } from "../lib/pizzaElements";
//inport action creator select base-- also connect

class PizzaBase extends React.PureComponent {
  state = {
    itemsChecked: [],
    isChecked: false
  };

  checkItem(base, e) {
    let itemsChecked = this.state.itemsChecked;
    const id = e.target.name;
    itemsChecked[id] = e.target.checked;
    let pizzabaseCurrent = pizzaBases[id];

    if (!e.target.checked)
      return this.props.deSelectBase(pizzabaseCurrent);

    this.props.selectBase(pizzabaseCurrent);

    if (this.props.newBase.length > 0) {
      e.target.checked = false;
      this.props.deSelectBase(pizzabaseCurrent);
      alert("You can only choose 1 pizza base");
    }
  }

  render() {
    return (
      <div>
        <form>
          {pizzaBases.map(base => {
            return (
              <label key={base.id} className="baseLabel">
                <input
                  className="baseInput"
                  name={base.id}
                  onChange={e => this.checkItem(base, e)}
                  type="checkbox"
                  checked={this.state.checked}
                />
                {base.size}cm
              </label>
            );
          })}
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { newBase: state.newBase };
};

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectBase: selectBase, deSelectBase: deSelectBase },
    dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(PizzaBase);
