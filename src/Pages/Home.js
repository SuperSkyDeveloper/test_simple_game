import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home" >
      <h1>Welcome to the<br/>Trivia Challenge!</h1>
      <div className="home-content">
        You will be presented <br/> with 10 True or False <br/> questions
      </div>
      <div className="home-content">
        Can you score 100%?
      </div>
      <Link to='/quiz'>BEGIN</Link>
    </div>
  );
}

export default Home;