import Button from "react-bootstrap/Button";
import "./App.css";

const API_KEY = "AIzaSyAZzjawqizvFq1A5EUgDH-KzKDTKHiIu9M";
const CLIENT_ID =
  "606450926181-l0fdedurbmeagetom0dt83bnb89itpi8.apps.googleusercontent.com";

async function validateISBNAndSearchBook() {
  let searchInput = document.getElementById("search-input");
  let textArea = document.getElementById("textArea");

  if (searchInput.value === "") alert("Please search for something!");
  else {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchInput.value}&key:${API_KEY}`
      );
      if (!response.ok) {
        throw new Error("BOOK NOT FOUND");
      }

      const data = await response.json();

      const books = data.items;
      console.log(books.length);
      books.forEach((book) => {
        const bookInfo = book.volumeInfo;
        const bookTitle = bookInfo["title"];
        textArea.value += bookTitle + ", ";
        console.log(bookTitle);
      });
    } catch (e) {
      console.log(e);
    }

    searchInput.value = "";
  }
}

function App() {
  return (
    <div className="App">
      <h1>Hi!!</h1>
      <input id="search-input" type="text" placeholder="Search for something" />
      <br></br>
      <Button
        variant="primary"
        style={{ margin: "10px" }}
        onClick={validateISBNAndSearchBook}
      >
        Search
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
