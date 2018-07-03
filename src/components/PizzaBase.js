import * as React from "react";
import { connect } from "react-redux";
import { selectBase } from '../actions/index.js'
import {bindActionCreators} from 'redux'
//inport action creator select base-- also connect

class PizzaBase extends React.PureComponent {
  state = {
    id: "",
    size: "",
    style: "",
    price: 0
  }

  // handleChange = (event) => {
  //     const value = event.target.value;
  //     const name = event.target.name;
  //     this.props.selectBase(event)
  //     console.log(name)
  //     this.setState({
  //       [name]: value
  //     });
  //   }

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    console.log(this.props.selectBase);
    return (
      <div>
        <form>
         <div>
            {this.props.pizzaBase.map(base => (
              <div key={base.id} value={base.id} onClick={() => this.props.selectBase(base)}>
                I want {base.size} cm Pizza
              </div>
            ))}
          </div>
        </form>

        {this.props.selectBase}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    pizzaBase: state.pizzaBase,
    selectBase: state.selectBase

    //  selectedBase: state.selectedBase // make reducer for selected base
  };
};

function matchDispatchToProps(dispatch){
  return bindActionCreators({selectBase: selectBase}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(PizzaBase);
