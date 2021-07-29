import "./App.css";
import Hello from "./component/Hello";
import Wellcome from "./component/Wellcome";

function App() {
  const name = "hyunju";
  const naver = {
    name: "네이버",
    url: "https://naver.com",
  };
  return (
    <div className="App">
      <h1 style={{ color: "red" }}>
        하이이, {name}
        <p>{2 + 3} </p>
      </h1>
      <a href={naver.url}>{naver.name}</a>
      <Hello />
      <Wellcome />
    </div>
  );
}

export default App;
