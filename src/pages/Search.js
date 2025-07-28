import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const API_KEY = "AIzaSyAZzjawqizvFq1A5EUgDH-KzKDTKHiIu9M";
// const CLIENT_ID = "606450926181-l0fdedurbmeagetom0dt83bnb89itpi8.apps.googleusercontent.com";


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

      books.forEach((book) => {
        const bookInfo = book.volumeInfo;
        const bookTitle = bookInfo["title"];
        // const bookAuthors = bookInfo["authors"];
        // const bookPublisher = bookInfo["publisher"];
        // const bookPublishedDate = bookInfo["publishedDate"];
        const bookDescription = bookInfo["description"];
        // const bookPageCount = bookInfo["pageCount"];
        const bookInfoLink = bookInfo["infoLink"];
        const bookImageLink = bookInfo["imageLinks"]["thumbnail"];

        const card = document.createElement("div");
        card.classList.add("card");
        card.style.width = "13rem";
        card.style.margin = "20px";

        const cardImg = document.createElement("img");
        cardImg.classList.add("card-img-top");
        cardImg.src = bookImageLink;
        cardImg.alt = bookTitle;

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.innerText = bookTitle;

        const cardText = document.createElement("p");
        cardText.classList.add("card-text");
        if (bookDescription !== undefined) cardText.innerText = bookDescription;

        const cardButton = document.createElement("a");
        cardButton.type = "button";
        cardButton.classList.add("btn");
        cardButton.classList.add("btn-info");
        cardButton.innerText = "See More";
        cardButton.href = bookInfoLink;


        cardBody.append(cardTitle, cardText, cardButton);
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
      <h1 style={{paddingLeft: "10px"}}>Search</h1>
      <InputGroup className="mb-3" style={{ margin: "10px", width: "98vw"}}>
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
      <div id="card-div" style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}></div>
    </>
  );
}

export default Search;
