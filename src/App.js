import logo from "./logo.svg";
import "./App.css";
import { Header, Nav, Article } from "./components/Sample";
import { useState } from "react";

function App() {
  let mode = "WELCOME";
  const topics = [
    { id: 1, title: "HTML1", body: "HTML is ..." },
    { id: 2, title: "CSS2", body: "CSS is ..." },
    { id: 3, title: "JavaScript3", body: "JavaScript is ..." },
  ];

  let article = null;
  if (mode === "WELCOME") {
    article = <Article title="Welcome" body="Hello, Web" />;
  } else if (mode === "READ") {
    article = <Article title="Welcome" body="Hello, Read" />;
  }

  return (
    <div>
      <Header
        title="REACT"
        onChange={() => {
          mode = "WELCOME";
          alert("Hello, React!");
        }}
      />
      <Nav
        topics={topics}
        onChange={(id) => {
          mode = "READ";
          alert(id);
        }}
      />
      {article}
    </div>
  );
}

export default App;
