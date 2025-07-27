import Button from "react-bootstrap/Button";
import "./App.css";

const bookIDInput = document.getElementById("bookID");
const textArea = document.getElementById("textArea");

function handleClick() {
  if (bookIDInput.value != null) textArea.value = bookIDInput.value;
  else return false;
}

function App() {
  return (
    <div className="App">
      <h1>Hi!!</h1>
      <input id="bookID" type="text" />
      <br></br>
      <Button
        variant="primary"
        style={{ margin: "10px" }}
        onClick={handleClick}
      >
        Submit
      </Button>
      <br></br>
      <textarea
        id="textArea"
        readOnly
        rows="4"
        cols="50"
        style={{ resize: "none" }}
      ></textarea>
    </div>
  );
}

export default App;
