import React from "react";
import "./HomePage.scss"
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import InputUrl from "../../components/InputUrl/InputUrl.js";


function HomePage() {

  return (
    <div className="home-page">
      <Header />
      <InputUrl />
      <Footer />
    </div>
  );
}

export default HomePage;
