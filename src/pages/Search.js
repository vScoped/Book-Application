import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";
import { createElement } from "react";
import API_KEY from "../App";

async function validateISBNAndSearchBook() {
  let searchInput = document.getElementById("search-input");

  // resetting the cards on click
  const cardDiv = document.getElementById("card-div");
  cardDiv.innerHTML = "";

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
        const bookAuthors = bookInfo["authors"];
        const bookPublisher = bookInfo["publisher"];
        const bookPublishedDate = bookInfo["publishedDate"];
        const bookDescription = bookInfo["description"];
        const bookPageCount = bookInfo["pageCount"];
        const bookInfoLink = bookInfo["infoLink"];
        const bookImageLink = bookInfo["imageLinks"]["thumbnail"];
        console.log(bookTitle);

        const card = document.createElement("div");
        card.classList.add("card");
        card.style.width = "18rem";

        const cardImg = document.createElement("img");
        cardImg.classList.add("card-img-top");
        cardImg.src = bookImageLink;
        cardImg.alt = bookTitle;
        cardImg.stylewidth = "286px";
        cardImg.style.height = "180px";

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.innerText = bookTitle;

        const cardText = document.createElement("p");
        cardText.classList.add("card-text");
        if (bookDescription != undefined) cardText.innerText = bookDescription;

        cardBody.append(cardTitle, cardText);
        card.append(cardImg, cardBody);
        cardDiv.appendChild(card);
      });
    } catch (e) {
      console.log(e);
    }

    searchInput.value = "";
  }
}

function Search() {
  return (
    <>
      <h1>Search</h1>
      <InputGroup className="mb-3" style={{ margin: "10px" }}>
        <Form.Control
          id="search-input"
          placeholder="Search For Item"
          aria-label="Search For Item"
        />
        <Button variant="primary" onClick={validateISBNAndSearchBook}>
          Search
        </Button>
      </InputGroup>

      <br></br>
      <div id="card-div"></div>
    </>
  );
}

export default Search;
