import React from "react";

const Home = () => {
  return (
    <div>
      <div>I'm the very bbest component</div>
      <button onClick={() => console.log("hi")}>Press Me</button>
    </div>
  );
};

export default {
  component: Home
};
