import React from "react";
import backtesting from "../images/trade.jpg";
// import '../styles/main.css'
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const myStyle = {
  backgroundImage: `url(${backtesting})`,

  height: "100vh",
  marginTop: "-55px",
  fontSize: "50px",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};
const HomePage = () => {
  return (
    <div className="home" style={myStyle}>
      <div className="welcome_content">
        <h1>Welcome to Mela Assistant Trader</h1>
        <p>Scalable Backtesting Infrastructure</p>
      </div>
    </div>
  );
};

export default HomePage;
