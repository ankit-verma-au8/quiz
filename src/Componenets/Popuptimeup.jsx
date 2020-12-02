import React, { Component } from "react";
import "../CSS/Popuptimeup.css";
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
          <i class="fas fa-exclamation-triangle"></i>
          <h1>Sorry!</h1>
          <p>Time is up for this Question.</p>
          <span onClick={this.clickhandlerwrongpopup}>Close</span>
        </div>
      </div>
    );
  }
}

export default Popup;
