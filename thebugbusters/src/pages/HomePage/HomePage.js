import React from "react";
import InputUrl from "../../components/InputUrl/InputUrl.js";
import Hero from "../../components/Hero/Hero.js";

function HomePage() {
  return (
    <div className="input-url">
      <Hero />
      <InputUrl />
    </div>
  );
}

export default HomePage;
