let books = JSON.parse(localStorage.getItem("books")) || [];

let bookList = document.getElementById("bookList");
let searchInput = document.getElementById("searchInput");

// Fungsi render buku
function renderBooks(filter = "") {
  if (!bookList) return;

  bookList.innerHTML = "";

  let filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(filter.toLowerCase())
  );

  filteredBooks.forEach(book => {
    let div = document.createElement("div");
    div.classList.add("book");

    div.innerHTML = `
      <img src="${book.image}">
      <p>${book.title}</p>
    `;

    bookList.appendChild(div);
  });
}

// Jalankan awal
renderBooks();

if (filteredBooks.length === 0) {
  bookList.innerHTML = "<p>No books found 😢</p>";
}

book.title.toLowerCase().includes(filter) ||
book.author.toLowerCase().includes(filter)

// Event search
if (searchInput) {
  searchInput.addEventListener("input", function() {
    renderBooks(this.value);
  });
}

const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());
app.use(express.static("public"));

// Load DB
function loadDB() {
  return JSON.parse(fs.readFileSync("database.json"));
}

// Save DB
function saveDB(data) {
  fs.writeFileSync("database.json", JSON.stringify(data, null, 2));
}

// REGISTER
app.post("/register", (req, res) => {
  let db = loadDB();
  db.users.push(req.body);
  saveDB(db);
  res.send("User registered");
});

// LOGIN
app.post("/login", (req, res) => {
  let db = loadDB();
  let user = db.users.find(
    u => u.username === req.body.username && u.password === req.body.password
  );

  if (user) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// ADD BOOK
async function addBook() {
  await fetch("/add-book", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      title: title.value,
      image: image.value
    })
  });

  alert("Book added!");
}

// GET BOOKS
app.get("/books", (req, res) => {
  let db = loadDB();
  res.json(db.books);
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
async function loadBooks() {
  let res = await fetch("/books");
  let books = await res.json();

  let bookList = document.getElementById("bookList");

  books.forEach(book => {
    let div = document.createElement("div");
    div.classList.add("book");

    div.innerHTML = `
      <img src="${book.image}">
      <p>${book.title}</p>
    `;

    bookList.appendChild(div);
  });
}

loadBooks();