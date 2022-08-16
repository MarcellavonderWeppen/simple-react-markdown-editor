import MarkdownEditor from "./components/MarkdownEditor";

function App() {
  return (
    <div className="App">
      <h1 className="main-header">Welcome to Markdown Editor</h1>
      <h2>
        A simple tool build with the power of{" "}
        <a href="https://reactjs.org/" alt="React">
          React
        </a>{" "}
        and{" "}
        <a href="https://vitejs.dev/" alt="Vite">
          Vite
        </a>
      </h2>
      <MarkdownEditor />
    </div>
  );
}

export default App;
