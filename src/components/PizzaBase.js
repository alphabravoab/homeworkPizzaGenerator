import * as React from "react";
import { connect } from "react-redux";
import { selectBase } from "../actions/index.js";
import { bindActionCreators } from "redux";
//inport action creator select base-- also connect

class PizzaBase extends React.PureComponent {
  state = {
    id: "",
    size: "",
    style: "",
    price: 0
  };

  handleBaseSelection(e) {
console.log(e)
    const newSelection = e.target.value;
    let newSelectionArray;

    if(this.state.pizzaBase.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.pizzaBase.filter(s => s !== newSelection)
    } else {
      newSelectionArray = [...this.state.pizzaBase, newSelection];
    }

      this.setState({ pizzaBase: newSelectionArray });
  }

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    console.log(this.props.selectBase);
    return (
      <div>
        <div className="checkbox-group">
          {this.props.pizzaBase.map(base => {
            return (
              <label key={base.id} className="baseLabel">
                <input
                  className="baseInput"
                  name={base.name}
                  onChange={this.controlFunc}
                  value={base.id}
                //  checked={this.selectedOptions.indexOf(base.id) > -1}
                  type="checkbox"
                />
                {base.size}cm
              </label>
            );
          })}
        </div>
      </div>

      // <div>
      //   <form>
      //    <div>
      //       {this.props.pizzaBase.map(base => (
      //         <div key={base.id} value={base.id} onClick={() => this.props.selectBase(base)}>
      //           I want {base.size} cm Pizza
      //         </div>
      //       ))}
      //     </div>
      //   </form>
      //
      //   {this.props.selectBase}
      // </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    pizzaBase: state.pizzaBase,
    selectBase: state.selectBase

    //  selectedBase: state.selectedBase // make reducer for selected base
  };
};

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ selectBase: selectBase }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(PizzaBase);
