import "./App.css";
import { Header, Nav, Article } from "./components/Sample";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(null);
  const topics = [
    { id: 1, title: "HTML1", body: "HTML is ..." },
    { id: 2, title: "CSS2", body: "CSS is ..." },
    { id: 3, title: "JavaScript3", body: "JavaScript is ..." },
  ];

  let article = null;
  if (mode === "WELCOME") {
    article = <Article title="Welcome" body="Hello, Web" />;
  } else if (mode === "READ") {
    let title,
      body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
        break;
      }
    }
    console.log(title, body);
    article = <Article title={title} body={body} />;
  }

  return (
    <div>
      <Header
        title="REACT"
        onChange={() => {
          setMode("WELCOME");
          alert("Hello, React!!");
        }}
      />
      <Nav
        topics={topics}
        onChange={(id) => {
          setMode("READ");
          setId(id);
          alert(id);
        }}
      />
      {article}
    </div>
  );
}

export default App;
