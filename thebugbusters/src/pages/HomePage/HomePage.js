import React from "react";
import InputUrl from "../../components/InputUrl/InputUrl.js";
import Hero from "../../components/Hero/Hero.js";
import Header from "../../components/Header/Header.js";
import Response from "../../components/Response/Response.js";

function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <Hero />
      <InputUrl />
      <Response />
    </div>
  );
}

export default HomePage;
