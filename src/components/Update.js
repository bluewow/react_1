import { useState } from "react";

function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return (
    <article>
      <h2>Update</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e);
          const id = e.target.id.value;
          const title = e.target.title.value;
          const body = e.target.body.value;
          props.onUpdate(title, body);
        }}
      >
        <p>
          <input
            type="text"
            name="title"
            value={title}
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </p>
        <p>
          <textarea
            name="body"
            value={body}
            placeholder="body"
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </p>
        <p>
          <input type="submit" value="Update"></input>
        </p>
      </form>
    </article>
  );
}

export { Update };
