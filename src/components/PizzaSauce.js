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

    if (value) {
      this.setState({ itemChecked, isChecked: !this.state.isChecked });
      this.props.selectSauce(pizzaSauceCurrent);
    }
    else
      return this.props.deSelectSauce(pizzaSauceCurrent);
  }

  handleSubmit = event => {
    event.preventDefault();
    const sauce = this.state.sauce;
    this.props.selectSauce(sauce);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.selectsauce}>
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
          <input type="submit" value="Submit" />
        </form>

        {this.props.newSauce}
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
