import React, { Component } from "react";
import "../CSS/Popup.css";

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
        <div className="popup_box">
          <i class="far fa-times-circle"></i>
          <h1>Sorry!</h1>
          <p>Your answer is Wrong.</p>
          <span onClick={this.clickhandlerwrongpopup}>Close</span>
        </div>
      </div>
    );
  }
}

export default Popup;
