import React from "react";
import { Hits } from "../components/Hits/Hits";
import { Censor } from "../components/Censor/Censor";

function Home() {
  return (
    <main>
      <h1>Welcome!</h1>
      <p>
        You are visitor number{" "}
        <Censor>
          <Hits />
        </Censor>
        .
      </p>
    </main>
  );
}

export default Home;
