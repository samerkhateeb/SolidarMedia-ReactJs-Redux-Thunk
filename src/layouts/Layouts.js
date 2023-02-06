import "../assets/css/app.scss";

import Footer from "../components/Footer";
import Header from "../components/Header";
import React from "react";

function Layouts(props) {
  return (
    <React.Fragment>
      <div>
        <Header />
        <div className="container">
          <main>{props.children}</main>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Layouts;
