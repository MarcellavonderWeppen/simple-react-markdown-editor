import { useState } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("");
  return (
    <>
      <div className="container">
        <form>
          <label htmlFor="myTextarea">
            <p>Textarea for input</p>{" "}
          </label>
          <textarea
            id="myTextarea"
            className="textarea box"
            onChange={(e) => {
              setMarkdown(e.target.value);
            }}
          ></textarea>
        </form>
        <div className="output box">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default MarkdownEditor;
