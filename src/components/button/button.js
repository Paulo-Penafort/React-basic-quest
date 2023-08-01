import React from "react";
import './button.css'

const Button = ({ label }) => {
  const click =() => {
    alert (`a label desse botão é ${label}`)
  }
  return(
    <button className="btn" onClick={click}>{label}</button>
  )
}

// class Button extends React.Component 
// {
// alertClick = () => {
//     alert(`A label desse botão é ${this.props.label}`);
//   }
//   render(){
//     return (
//          <button className="btn" onClick={this.alertClick}>{this.props.label}</button>
//      )
//   }
// }
 export default Button
