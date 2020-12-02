import React, { Component } from "react";
import "../CSS/Popupscorecard.css";
import { connect } from "react-redux";

export class Popup extends Component {
  constructor(props) {
    super(props);
    this.wrongPopup = React.createRef();
  }
  clickhandlerwrongpopup = () => {
    this.wrongPopup.current.style.display = "none";
  };

  render() {
    return (
      <div ref={this.wrongPopup} className="popup">
        <div style={{ color: "blue", fontWeight: "300" }} className="popup_box">
          <h2 style={{ color: "black" }}>
            [{this.props.userData.name} - {this.props.userData.batch}]
          </h2>
          <h2>Total no of Questions: {this.props.totalquestion} </h2>
          <h2>Total Questions attempted : {this.props.attempted} </h2>
          <h2>Points per Question: 1</h2>
          <h2>Correct Questions: {this.props.correctquestions}</h2>
          <h2>Final Score: {this.props.score}/5</h2>
          <span
            style={{ color: "black" }}
            onClick={this.clickhandlerwrongpopup}
          >
            Close
          </span>
        </div>
      </div>
    );
  }
}
const mapStatetoprops = (storeData) => {
  return {
    userData: storeData.userState.user,
  };
};

export default connect(mapStatetoprops)(Popup);
