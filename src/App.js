import "./App.css";
import { Header, Nav, Article } from "./components/Sample";
import { Create } from "./components/Create";
import { Update } from "./components/Update";
import { useState } from "react";

function App() {
  let update = null;
  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopic] = useState([
    { id: 1, title: "HTML1", body: "HTML is ..." },
    { id: 2, title: "CSS2", body: "CSS is ..." },
    { id: 3, title: "JavaScript3", body: "JavaScript is ..." },
  ]);

  const createButton = () => {
    return (
      <ul>
        <li>
          <a
            href="/create"
            onClick={(e) => {
              e.preventDefault();
              setMode("CREATE");
            }}
          >
            Create
          </a>
        </li>
        {update}
      </ul>
    );
  };
  const handleCreate = (title, body) => {
    const newTopic = { id: nextId, title, body };
    setTopic([...topics, newTopic]);
    setMode("READ");
    setId(nextId);
    setNextId(nextId + 1);
  };

  const handleUpdate = (title, body) => {
    const updatedTopic = { id: id, title: title, body: body };
    const newTopics = topics.map((topic) =>
      topic.id === id ? updatedTopic : topic
    );
    setTopic(newTopics);
    setMode("READ");
  };

  const renderContent = () => {
    let topic = null;
    switch (mode) {
      case "WELCOME":
        return <Article title="Welcome" body="Hello, Web" />;
      case "READ":
        update = (
          <li>
            <a
              href={"/update/" + id}
              onClick={(e) => {
                e.preventDefault();
                setMode("UPDATE");
              }}
            >
              Update
            </a>
          </li>
        );
        topic = topics.find((t) => t.id === id);
        return topic ? <Article title={topic.title} body={topic.body} /> : null;
      case "CREATE":
        return <Create onCreate={handleCreate} />;
      case "UPDATE":
        topic = topics.find((t) => t.id === id);
        return (
          <Update
            title={topic.title}
            body={topic.body}
            onUpdate={handleUpdate}
          ></Update>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Header title="REACT" onChange={() => setMode("WELCOME")} />
      <Nav
        topics={topics}
        onChange={(id) => {
          setMode("READ");
          setId(id);
        }}
      />
      {renderContent()}
      {createButton()}
    </div>
  );
}

export default App;
