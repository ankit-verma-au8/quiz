import React from "react";
import "../CSS/Homepag.css";
import logo from "../Images/wx-resize-wb.png";
import { withRouter } from "react-router-dom";
import { setUser, setPasscode } from "../redux/actions/userActions";
import { connect } from "react-redux";
const Homepage = (props) => {
  const handleClick = () => {
    props.userData ||
      alert("Please enter Candidate information first then proceed!");
    props.history.push("/question");
  };
  const handleClickname = (e) => {
    const name = prompt("Candidate Name:");
    const batch = prompt("Enter Batch:");
    const passcode = prompt("Enter Passcode:");
    const user = {
      name: name,
      batch: batch,
    };
    props.setUser(user);
    props.setPasscode(passcode);
  };

  return (
    <div className="homepage">
      <h1>ATTAINU</h1>
      <h3>PRESENTS</h3>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <h1
        onClick={handleClickname}
        className="enter_name"
        style={{
          paddingTop: "0px",
          fontFamily: "Montserrat",
          fontSize: "1.1rem",
          fontWeight: "500",
          cursor: "pointer",
          transitionDuration: "0.3s",
        }}
      >
        ENTER CANDIDATE INFORMATION
      </h1>
      <div className="get-started">
        <span onClick={handleClick} className="start_button">
          Get Started
        </span>
      </div>
      <div className="date" style={{ fontFamily: "Montserrat" }}>
        <span>WWW.ATTAINU.COM</span>
      </div>
      <div className="ruler">
        <hr class="new1" />
      </div>
      <div className="date-real">
        <span>08/21/2020</span>
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
        doloremque incidunt amet minima! Adipisci excepturi inventore quas
        asperiores, eligendi praesentium?
      </p>
    </div>
  );
};
const mapStatetoprops = (storeData) => {
  return {
    userData: storeData.userState.user,
  };
};
export default withRouter(
  connect(mapStatetoprops, { setUser, setPasscode })(Homepage)
);
