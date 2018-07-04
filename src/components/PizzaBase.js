import * as React from "react";
import { connect } from "react-redux";
import { selectBase } from "../actions/base";
import { bindActionCreators } from "redux";
import { pizzaBase } from "../lib/pizzaElements";
//inport action creator select base-- also connect

class PizzaBase extends React.PureComponent {
  state = {
    itemChecked: {}
  };

  // handleChange = ( event ) => {//select
  // const id = event.target.value;
  // const currentdata = pizzaBase[id];
  //   this.setState({
  //      {
  //        id : id,
  //        price: base.price,
  //        size :base.size,
  //      }
  //   })

  //   handleBaseSelection(e) {
  // console.log(e)
  //     const newSelection = e.target.value;
  //     let newSelectionArray;
  //
  //     if(this.state.pizzaBase.indexOf(newSelection) > -1) {
  //       newSelectionArray = this.state.pizzaBase.filter(s => s !== newSelection)
  //     } else {
  //       newSelectionArray = [...this.state.pizzaBase, newSelection];
  //     }
  //
  //       this.setState({ pizzaBase: newSelectionArray });
  //   }
  //
  //   handleSubmit = event => {
  //     event.preventDefault();
  //   };

  checkItem(base, e) {
    let itemChecked = this.state.itemChecked;

    const id = e.target.value;
    console.log(id);
    let pizzabaseCurrent = pizzaBase[id];
    console.log(pizzabaseCurrent);
    itemChecked[id] = e.target.checked;
    console.log(pizzabaseCurrent);
    this.setState({ itemChecked });

    this.props.selectBase(pizzaBase[id]);
  }

  handleSubmit = event => {
    event.preventDefault();
    const base = this.state.base;
    this.props.selectBase(base);
  };

  render() {
    console.log();
    return (
      <div>
        <form onSubmit={this.selectBase}>
          {pizzaBase.map(base => {
            return (
              <label key={base.id} className="baseLabel">
                <input
                  className="baseInput"
                  name={base.name}
                  value={base.id}
                  onChange={e => this.checkItem(base, e)}
                  //  checked={this.selectedOptions.indexOf(base.id) > -1}
                  type="checkbox"
                />
                {base.size}cm
              </label>
            );
          })}
          <input type="submit" value="Submit" />
        </form>
        {/* {this.props.newBase.map(base => {
          return <div> {base}</div>
        })} */}
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
    newBase: state.selectBase

    //  selectedBase: state.selectedBase // make reducer for selected base
  };
};

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ selectBase: selectBase }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(PizzaBase);
